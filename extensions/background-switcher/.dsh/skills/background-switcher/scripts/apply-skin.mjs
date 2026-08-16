#!/usr/bin/env node
/**
 * apply-skin.mjs — DSH 皮肤安装 / 启用 / 恢复 / 列表 / 卸载
 *
 * 与 dsh-client-ui-skin-center 的 `dsh-skin use` 行为 1:1 对齐：
 *   1. install : 把生成的皮肤包复制进 dsh-skins 载体（~/.dsh/profiles/web/node_modules/@linxin666/dsh-skins/skins/<id>），
 *                让 skin-center 注册表能发现它；
 *   2. use     : 在 profile node_modules 下建立 @linxin666/<pkg> → 皮肤目录 的 junction（宿主加载客户端插件需要），
 *                并原子改写 ~/.dsh/cordis.patch.yml 的 `dsh-skin managed` 区段（互斥启用）；config watcher 秒级热加载；
 *   3. revert  : 还原官方默认外观（managed 区段全禁用、无 insert）；
 *   4. list    : 列出注册表内全部皮肤 + 当前启用项；
 *   5. uninstall: 从载体移除皮肤并清理 managed 区段。
 *
 * 注意：本脚本会写 ~/.dsh（沙箱外），运行时需要用户授权。
 *
 * 用法：
 *   node apply-skin.mjs list
 *   node apply-skin.mjs install --id <id> --source <皮肤目录>
 *   node apply-skin.mjs use --id <id>        # 或 --id official? 用 revert
 *   node apply-skin.mjs revert
 *   node apply-skin.mjs uninstall --id <id>
 *
 * 环境变量：DSH_HOME（默认 ~/.dsh）、DSH_SKIN_PROFILE（默认 web）、DSH_SKINS_DIR（覆盖皮肤根）
 */

import {
  lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync,
  renameSync, rmdirSync, statSync, symlinkSync, unlinkSync, cpSync, writeFileSync, utimesSync
} from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";

const MANAGED_START = "# --- dsh-skin managed (auto-generated; do not edit) ---";
const MANAGED_END = "# --- end dsh-skin managed ---";

function resolvePaths(profile = process.env.DSH_SKIN_PROFILE || "web") {
  // DSH_HOME 语义：整个 dsh 配置根（= ~/.dsh）；未设置时默认 homedir()/.dsh
  const dshRoot = process.env.DSH_HOME || join(homedir(), ".dsh");
  return {
    home: dshRoot,
    profile,
    patchPath: join(dshRoot, "cordis.patch.yml"),
    profileModulesDir: join(dshRoot, "profiles", profile, "node_modules"),
    skinsDir: process.env.DSH_SKINS_DIR || join(dshRoot, "profiles", profile, "node_modules", "@linxin666")
  };
}

/* ---------------- 注册表（镜像 skin-center 的发现逻辑） ---------------- */
function listSkinDirCandidates(skinsDir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(skinsDir);
  } catch {
    return out;
  }
  const isDir = (p) => statSync(p, { throwIfNoEntry: false })?.isDirectory() === true;
  for (const dir of entries) {
    const candidate = join(skinsDir, dir);
    // 直接子项跳过符号链接（junction 也会被 lstat 判为 symlink）——与 skin-center 一致
    if (lstatSync(candidate, { throwIfNoEntry: false })?.isSymbolicLink() === true) continue;
    if (!isDir(candidate)) continue;
    if (statSync(join(candidate, "skin.json"), { throwIfNoEntry: false })) out.push(candidate);
  }
  const bundled = join(skinsDir, "dsh-skins", "skins");
  let subdirs;
  try {
    subdirs = readdirSync(bundled);
  } catch {
    return out;
  }
  for (const sub of subdirs) {
    const subDir = join(bundled, sub);
    if (!isDir(subDir)) continue;
    if (statSync(join(subDir, "skin.json"), { throwIfNoEntry: false })) out.push(subDir);
  }
  return out;
}

function readSkinMeta(absDir) {
  try {
    const meta = JSON.parse(readFileSync(join(absDir, "skin.json"), "utf8"));
    if (typeof meta !== "object" || meta === null) return null;
    if (typeof meta.id !== "string" || !/^[a-z0-9-]+$/.test(meta.id)) return null;
    if (typeof meta.package !== "string") return null;
    const wiring = meta.wiring;
    if (typeof wiring !== "object" || wiring === null || typeof wiring.id !== "string") return null;
    return {
      id: meta.id,
      name: typeof meta.name === "string" ? meta.name : meta.id,
      nameEn: typeof meta.nameEn === "string" ? meta.nameEn : meta.id,
      package: meta.package,
      wiringId: wiring.id,
      bundleWired: wiring.bundleWired === true
    };
  } catch {
    return null;
  }
}

function loadRegistry(skinsDir) {
  const out = {};
  const seenReal = new Set();
  for (const dir of listSkinDirCandidates(skinsDir)) {
    let real;
    try {
      real = realpathSync(dir);
    } catch {
      real = dir;
    }
    if (seenReal.has(real)) continue;
    seenReal.add(real);
    const meta = readSkinMeta(dir);
    if (!meta) continue;
    if (out[meta.id] !== undefined) continue;
    out[meta.id] = { ...meta, dir };
  }
  return out;
}

function wiredNames(registry) {
  const out = new Set();
  for (const [name, skin] of Object.entries(registry)) if (skin.bundleWired) out.add(name);
  return out;
}

/* ---------------- managed 区段读写（镜像 skin-center） ---------------- */
function stripLegacySkinRows(patch) {
  return patch
    .replace(/^    # [^\n]*\n    - id: ui-skin-[^\n]+\n      name: '@(?:deepseek-ai|linxin666)\/dsh-client-ui-skin-[^\n]+'\n/gm, "")
    .replace(/^# \(touch\)[^\n]*\n?/gm, "")
    .replace(/\n{3,}/g, "\n\n");
}

function stripManaged(patch) {
  const start = patch.indexOf(MANAGED_START);
  if (start === -1) return patch;
  const end = patch.indexOf(MANAGED_END, start);
  if (end === -1) throw new Error("managed skin section is unterminated; fix " + "~/.dsh/cordis.patch.yml");
  return patch.slice(0, start) + patch.slice(end + MANAGED_END.length);
}

function renderManaged(active, registry) {
  const wired = wiredNames(registry);
  const lines = [MANAGED_START];
  for (const name of Object.keys(registry)) {
    if (name === active) continue;
    lines.push(`- id: ${registry[name].wiringId}`, "  disabled: true");
  }
  if (active !== null && !wired.has(active)) {
    lines.push("- insert:", `    - id: ${registry[active].wiringId}`, `      name: '${registry[active].package}'`);
  }
  lines.push(MANAGED_END);
  return lines.join("\n");
}

function currentActive(patch, registry) {
  const disabled = new Set();
  for (const m of patch.matchAll(/^- id: (ui-skin-[a-z0-9-]+)\n  disabled: true/gm)) disabled.add(m[1]);
  const wired = wiredNames(registry);
  for (const [name, skin] of Object.entries(registry)) {
    if (wired.has(name) && !disabled.has(skin.wiringId)) return name;
  }
  const rows = [...patch.matchAll(/(?:^|\n) *- id: (ui-skin-[a-z0-9-]+)(\n *disabled: (true))?/g)];
  const enabled = [];
  for (const m of rows) if (!m[3]) enabled.push(m[1]);
  return enabled.length ? enabled[enabled.length - 1].replace("ui-skin-", "") : null;
}

function readPatch(patchPath) {
  try {
    return readFileSync(patchPath, "utf8");
  } catch {
    return "";
  }
}

function writePatchAtomic(patchPath, next) {
  mkdirSync(dirname(patchPath), { recursive: true });
  const tmp = `${patchPath}.tmp-${process.pid}`;
  writeFileSync(tmp, next);
  renameSync(tmp, patchPath);
  // 保险：rename 后再原位重写一次并刷新 mtime，确保 config watcher 一定收到 change 事件
  //（Windows 上 rename 覆盖有时会被 watcher 漏掉，导致 boot 图不重建、刷新后无变化）
  try {
    const now = new Date();
    writeFileSync(patchPath, next);
    utimesSync(patchPath, now, now);
  } catch {}
}

/* ---------------- junction / 可解析性（镜像 skin-center） ---------------- */
function ensureSymlink(entryDir, targetPath) {
  // targetPath = <profileModules>/@linxin666/<pkg>
  const real = (p) => {
    try {
      return realpathSync(p);
    } catch {
      return "";
    }
  };
  let entryReal;
  try {
    entryReal = realpathSync(entryDir);
  } catch {
    entryReal = entryDir;
  }
  if (entryDir === targetPath || entryReal === targetPath) return false;
  let stat = null;
  try {
    stat = lstatSync(targetPath);
  } catch {}
  if (stat) {
    if (stat.isSymbolicLink()) {
      if (real(targetPath) === entryReal) return false;
      if (process.platform === "win32" && stat.isDirectory()) rmdirSync(targetPath);
      else unlinkSync(targetPath);
    } else if (stat.isDirectory()) {
      throw new Error(`${targetPath} 已存在且不是符号链接——拒绝覆盖（如需手动安装请先删除）`);
    } else {
      throw new Error(`${targetPath} 已存在且不是目录/链接——拒绝覆盖`);
    }
  }
  mkdirSync(dirname(targetPath), { recursive: true });
  try {
    symlinkSync(entryDir, targetPath, process.platform === "win32" ? "junction" : "dir");
  } catch (error) {
    throw new Error(`创建符号链接失败（${error?.code ?? error}）：${targetPath} → ${entryDir}。Windows 下 junction 一般无需管理员权限；若仍失败请以管理员身份重试。`);
  }
  return true;
}

function checkResolvable(entry, profileModulesDir) {
  const target = join(profileModulesDir, entry.package);
  if (!statSync(target, { throwIfNoEntry: false })?.isDirectory()) {
    return `${entry.package} 未安装到 profile（profile 中无 ${target}）。请先运行 install。`;
  }
  const pkgPath = join(target, "package.json");
  if (!statSync(pkgPath, { throwIfNoEntry: false })) return `${entry.package} 在 profile 中缺少 package.json。`;
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(pkgPath, "utf8"));
  } catch {
    parsed = {};
  }
  if (parsed.name !== entry.package) return `${entry.package} 解析到的 package.json 名为 ${String(parsed.name)}，不是本皮肤。`;
  const mainPath = join(target, typeof parsed.main === "string" ? parsed.main : "index.js");
  if (!statSync(mainPath, { throwIfNoEntry: false })) return `${entry.package} 缺少 host 入口 ${mainPath}。`;
  return null;
}

/* ---------------- 子命令 ---------------- */
function cmdList(paths) {
  const registry = loadRegistry(paths.skinsDir);
  const patch = readPatch(paths.patchPath);
  const active = currentActive(patch, registry);
  console.log(`皮肤注册表（${paths.skinsDir}）:`);
  for (const [id, skin] of Object.entries(registry)) {
    const mark = id === active ? "★ 启用中" : "  ";
    console.log(`  ${mark} ${id.padEnd(20)} ${skin.name}${skin.nameEn !== skin.name ? ` (${skin.nameEn})` : ""}  ${skin.package}`);
  }
  console.log(`\n当前启用: ${active ?? "none（官方默认外观）"}`);
  return active;
}

function cmdInstall(paths, options) {
  const id = options.id;
  const source = options.source;
  if (!id || !/^[a-z0-9-]+$/.test(id)) throw new Error("缺少 --id <kebab-case>");
  if (!source) throw new Error("缺少 --source <皮肤目录>");
  const meta = readSkinMeta(source);
  if (!meta) throw new Error(`来源目录不是有效皮肤包（缺少合法 skin.json）: ${source}`);
  if (meta.id !== id) throw new Error(`skin.json 的 id 是 "${meta.id}"，与 --id ${id} 不一致`);
  const carrier = join(paths.skinsDir, "dsh-skins", "skins", id);
  mkdirSync(dirname(carrier), { recursive: true });
  cpSync(source, carrier, { recursive: true, force: true });
  console.log(`✔ 已安装皮肤 "${id}" → ${carrier}`);
  console.log(`  下一步: node apply-skin.mjs use --id ${id}`);
}

function cmdUse(paths, options) {
  const id = options.id;
  if (!id) throw new Error("缺少 --id <skin-id>（或使用 revert 恢复官方外观）");
  const registry = loadRegistry(paths.skinsDir);
  const entry = registry[id];
  if (!entry) throw new Error(`未知皮肤 "${id}"。已知: ${Object.keys(registry).join(", ")}（或 revert 恢复官方外观）。先运行 install？`);
  ensureSymlink(entry.dir, join(paths.profileModulesDir, entry.package));
  const problem = checkResolvable(entry, paths.profileModulesDir);
  if (problem !== null) throw new Error(problem);
  const next = `${stripLegacySkinRows(stripManaged(readPatch(paths.patchPath))).replace(/\s+$/, "")}\n\n${renderManaged(id, registry)}\n`;
  writePatchAtomic(paths.patchPath, next);
  console.log(`✔ 已启用皮肤 "${id}"（${entry.name}）`);
  console.log(`  ~/.dsh/cordis.patch.yml 已原子改写，config watcher 数秒内生效；刷新页面查看效果。`);
}

function cmdRevert(paths) {
  const registry = loadRegistry(paths.skinsDir);
  const next = `${stripLegacySkinRows(stripManaged(readPatch(paths.patchPath))).replace(/\s+$/, "")}\n\n${renderManaged(null, registry)}\n`;
  writePatchAtomic(paths.patchPath, next);
  console.log("✔ 已恢复官方默认外观（全部皮肤禁用、无 insert）；刷新页面查看。");
}

function cmdUninstall(paths, options) {
  const id = options.id;
  if (!id || !/^[a-z0-9-]+$/.test(id)) throw new Error("缺少 --id <kebab-case>");
  const registry = loadRegistry(paths.skinsDir);
  if (!registry[id]) throw new Error(`未知皮肤 "${id}"（不在注册表中）`);
  // 1) 先改写 managed 区段（按移除后的注册表渲染，全部禁用、无 insert）
  const nextRegistry = { ...registry };
  delete nextRegistry[id];
  const next = `${stripLegacySkinRows(stripManaged(readPatch(paths.patchPath))).replace(/\s+$/, "")}\n\n${renderManaged(null, nextRegistry)}\n`;
  writePatchAtomic(paths.patchPath, next);
  // 2) 清理 junction（若指向该皮肤目录）
  const linkPath = join(paths.profileModulesDir, registry[id].package);
  try {
    const st = lstatSync(linkPath);
    if (st.isSymbolicLink()) unlinkSync(linkPath);
  } catch {}
  // 3) 移除载体目录
  const carrier = join(paths.skinsDir, "dsh-skins", "skins", id);
  try {
    rmdirSync(carrier, { recursive: true });
  } catch {}
  console.log(`✔ 已卸载皮肤 "${id}"（managed 区段已清理、junction 与载体目录已移除）。`);
}

/* ---------------- 入口 ---------------- */
function parseArgs(argv) {
  const args = { command: null, options: {} };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        args.options[key] = next;
        i++;
      } else {
        args.options[key] = true;
      }
    } else {
      positional.push(a);
    }
  }
  args.command = positional[0] ?? null;
  return args;
}

const args = parseArgs(process.argv.slice(2));
const paths = resolvePaths();

try {
  switch (args.command) {
    case "list":
      cmdList(paths);
      break;
    case "install":
      cmdInstall(paths, args.options);
      break;
    case "use":
      cmdUse(paths, args.options);
      break;
    case "revert":
      cmdRevert(paths);
      break;
    case "uninstall":
      cmdUninstall(paths, args.options);
      break;
    default:
      console.log(`用法: node apply-skin.mjs <list|install|use|revert|uninstall> [--id <id>] [--source <目录>]

  list               列出注册表内全部皮肤 + 当前启用项
  install --id <id> --source <目录>   把皮肤包复制进 dsh-skins 载体
  use --id <id>      启用皮肤（junction + 原子改写 ~/.dsh/cordis.patch.yml）
  revert             恢复官方默认外观
  uninstall --id <id> 从载体移除皮肤并清理 managed 区段

环境变量: DSH_HOME（默认 ~/.dsh）, DSH_SKIN_PROFILE（默认 web）, DSH_SKINS_DIR
注意: 本脚本写 ~/.dsh（沙箱外），运行时需要用户授权。`);
      process.exit(args.command === null ? 1 : 0);
  }
} catch (error) {
  console.error(`✖ ${error.message}`);
  process.exit(1);
}
