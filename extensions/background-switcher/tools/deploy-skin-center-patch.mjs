#!/usr/bin/env node
/**
 * deploy-skin-center-patch.mjs — 皮肤中心「选择背景图」补丁部署/回滚
 *
 * 背景：为了让皮肤中心支持「点击选择背景图 → 资源管理器选图 → 自动生成并启用皮肤」，
 * 我们在 dsh-client-ui-skin-center 的已安装包里打了一个本地补丁（宿主新增
 * /api/skin-center/apply-image 路由 + 客户端新增选择入口）。补丁源在工作区
 * skin-center/lib/（index.js 与 client.js 是改造版）。
 *
 * 因为该包有依赖（@deepseek-ai/dsh-settings、schemastery），不能用 junction 指向
 * 工作区（Node 按 realpath 解析依赖会找不到），必须把文件原位放进 node_modules。
 *
 * 用法：
 *   node deploy-skin-center-patch.mjs deploy   # 把工作区改造文件复制进已安装包（默认）
 *   node deploy-skin-center-patch.mjs verify   # 校验已安装包与工作区补丁是否一致
 *
 * 维护：升级 `@linxin666/dsh-web-ui-all` 会覆盖皮肤中心包 → 重新运行 deploy 即可。
 * 回滚：`npm install @linxin666/dsh-web-ui-all`（重装全家桶）恢复官方版本，然后不要 deploy。
 * 生效：deploy 后需要重启 DSH web 宿主（宿主模块缓存不会热加载新路由），再刷新页面。
 */

import { readFileSync, writeFileSync, statSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = join(scriptDir, "..");
const patchSource = join(workspaceRoot, "lib");
const installedDir = join(
  process.env.DSH_HOME || join(process.env.USERPROFILE || "C:\\Users\\admin", ".dsh"),
  "profiles", process.env.DSH_SKIN_PROFILE || "web", "node_modules",
  "@linxin666", "dsh-client-ui-skin-center", "lib"
);
const FILES = ["index.js", "client.js"];

function deploy() {
  for (const f of FILES) {
    const src = join(patchSource, f);
    const dst = join(installedDir, f);
    if (!statSync(src, { throwIfNoEntry: false })) throw new Error(`补丁源缺失: ${src}`);
    mkdirSync(dirname(dst), { recursive: true });
    writeFileSync(dst, readFileSync(src));
    console.log(`✔ 已部署 ${f} → ${dst}`);
  }
  console.log("部署完成。请重启 DSH web 宿主（新路由需要宿主重新加载模块），然后刷新页面。");
}

function verify() {
  let ok = true;
  for (const f of FILES) {
    const src = join(patchSource, f);
    const dst = join(installedDir, f);
    const a = statSync(src, { throwIfNoEntry: false });
    const b = statSync(dst, { throwIfNoEntry: false });
    if (!a || !b) { console.log(`✖ ${f}: 缺失（src=${!!a} dst=${!!b}）`); ok = false; continue; }
    const same = readFileSync(src).equals(readFileSync(dst));
    console.log(`${same ? "✔" : "✖"} ${f}: ${same ? "一致" : "不一致（请 deploy）"}`);
    ok = ok && same;
  }
  console.log(ok ? "已安装包与补丁源一致。" : "已安装包与补丁源不一致。");
  return ok;
}

const cmd = process.argv[2] || "deploy";
try {
  if (cmd === "deploy") deploy();
  else if (cmd === "verify") process.exit(verify() ? 0 : 1);
  else throw new Error(`未知命令: ${cmd}（deploy | verify）`);
} catch (error) {
  console.error(`✖ ${error.message}`);
  process.exit(1);
}
