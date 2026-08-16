#!/usr/bin/env node
/**
 * make-skin.mjs — 背景图 → DSH 皮肤包生成器
 *
 * 把任意一张图片（本地路径或 http(s) URL）生成一个完整的 dsh-skins 皮肤包：
 *   <out>/<id>/
 *     skin.json       皮肤元数据（skin-center 注册表的唯一事实来源）
 *     package.json    插件包元数据（exports["./client"] → lib/client.js）
 *     lib/index.js    宿主侧空入口（checkResolvable 需要 main 存在）
 *     lib/client.js   浏览器侧插件：注入 CSS + apply(ctx) 设置背景图
 *     cordis.patch.yml 包级 patch（仅文档用途，互斥由 apply-skin.mjs 管理）
 *
 * 图片以 base64 data URL 内联进 client.js（与 miku/blue-fantasy 皮肤同一策略），
 * 因此皮肤不依赖任何静态资源路由。
 *
 * 用法：
 *   node make-skin.mjs <图片路径|URL> [--id <kebab>] [--name <显示名>]
 *        [--name-en <English>] [--author <作者>] [--accent #rrggbb]
 *        [--blur <px>] [--scrim <0..1>] [--out <输出根目录>]
 *        [--tagline <一句话>] [--description <长描述>] [--tags a,b,c]
 *
 * 示例：
 *   node make-skin.mjs ~/Pictures/aurora.jpg --id aurora --name "极光" --accent #3fa9f5
 */

import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, resolve, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirnameOf(import.meta.url);

function dirnameOf(metaUrl) {
  return resolve(fileURLToPath(metaUrl), "..");
}

/* ---------------- 参数解析（无第三方依赖） ---------------- */
function parseArgs(argv) {
  const args = { positionals: [], options: {} };
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
      args.positionals.push(a);
    }
  }
  return args;
}

function help() {
  console.log(`用法: node make-skin.mjs <图片路径|URL> [选项]

选项:
  --id <kebab-case>     皮肤 id（默认由 --name 生成，含 - 时用 --id 更稳）
  --name <显示名>       皮肤显示名（默认取 id）
  --name-en <English>   English name（默认 id）
  --author <作者>       作者（默认 "DSH background-switcher"）
  --accent #rrggbb      主色，用于元数据（默认 #2e9bff）
  --panel-opacity 0~1   面板不透明度（1=全不透，0=全透；默认 0.55 接近内置皮肤观感，想更透就调小）
  --scrim <0..1>        背景遮罩强度，兼顾可读性（默认 0.5）
  --out <目录>          输出根目录（默认 技能目录/../../../../skins）
  --tagline <一句话>     一句话简介
  --description <文本>   长描述（默认自动生成）
  --tags a,b,c          标签列表（逗号分隔）
  -h, --help            显示帮助`);
}

const args = parseArgs(process.argv.slice(2));
if (args.options.help || args.positionals.length === 0) {
  help();
  process.exit(args.positionals.length === 0 ? 1 : 0);
}

/* ---------------- 图片读取 ---------------- */
const imageInput = args.positionals[0];
let imageBuffer;
let mime;
let imageSourceName;

async function loadImage(input) {
  if (/^https?:\/\//i.test(input)) {
    const res = await fetch(input);
    if (!res.ok) throw new Error(`下载图片失败: HTTP ${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
    return { buf, mime: ct && ct.startsWith("image/") ? ct : guessMime(input), source: input };
  }
  const buf = readFileSync(input);
  return { buf, mime: guessMime(input), source: input };
}

function guessMime(path) {
  switch (extname(path).toLowerCase()) {
    case ".png": return "image/png";
    case ".jpg": case ".jpeg": return "image/jpeg";
    case ".webp": return "image/webp";
    case ".gif": return "image/gif";
    case ".svg": return "image/svg+xml";
    case ".bmp": return "image/bmp";
    case ".avif": return "image/avif";
    case ".ico": return "image/x-icon";
    default: return "application/octet-stream";
  }
}

const { buf: imgBuf, mime: imgMime, source: imgSource } = await loadImage(imageInput);
imageBuffer = imgBuf;
mime = imgMime;
imageSourceName = imgSource;

if (imageBuffer.length > 2.5 * 1024 * 1024) {
  console.warn(`[警告] 图片 ${(imageBuffer.length / 1024 / 1024).toFixed(1)} MB，base64 内联后会很大。建议先用图片工具压缩到 1920x1080 内、≤2MB（参考 README 的 sharp 压缩片段）。`);
}
if (imageBuffer.length > 15 * 1024 * 1024) {
  throw new Error("图片超过 15MB，base64 内联不现实。请先压缩图片（建议 ≤2MB）。");
}

/* ---------------- 参数整理 ---------------- */
const name = args.options.name || basename(imageInput, extname(imageInput)).replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, "-") || "custom";
const id = args.options.id || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "custom";
if (!/^[a-z0-9-]+$/.test(id)) throw new Error(`无效的 skin id: "${id}"（只允许小写字母/数字/连字符）`);

const nameEn = args.options["name-en"] || id;
const author = args.options.author || "DSH background-switcher";
const accent = /^#[0-9a-fA-F]{6}$/.test(args.options.accent || "") ? args.options.accent.toLowerCase() : "#2e9bff";
const scrim = Math.max(0, Math.min(1, Number(args.options.scrim ?? 0.5)));
const tagline = args.options.tagline || `自定义背景图皮肤 · ${nameEn}`;
const description = args.options.description || `由 background-switcher 技能生成的背景图皮肤：图片（${basename(imageSourceName)}）以全屏背景垫在界面之下，面板半透明毛玻璃，遮罩随亮/暗主题自动切换。`;
const tags = (args.options.tags || "").split(",").map((t) => t.trim()).filter(Boolean);

const outRoot = resolve(args.options.out || join(scriptDir, "..", "..", "..", "..", "skins"));
const skinDir = join(outRoot, id);

/* ---------------- 生成文件 ---------------- */
const pkg = `@linxin666/dsh-client-ui-skin-${id}`;
const wiringId = `ui-skin-${id}`;
const bodyAttr = `data-dsh-${id}`;
const datasetKey = "dsh" + id.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");

const base64 = imageBuffer.toString("base64");
const dataUrl = `data:${mime};base64,${base64}`;

/* 遮罩强度：light 轻、dark 重（深色下文字可读性优先） */
const scLight = (0.06 + scrim * 0.10).toFixed(3);
const scLight2 = (0.10 + scrim * 0.16).toFixed(3);
const scDark = (0.18 + scrim * 0.30).toFixed(3);
const scDark2 = (0.32 + scrim * 0.40).toFixed(3);

/* ---------------- 半透明背景 token（关键） ----------------
 * 应用主布局 frame 用不透明 var(--dsw-alias-bg-base) 铺满视口，会盖住 body 背景图。
 * 必须像 blue-fantasy 皮肤那样，把背景类 token 覆盖成半透明色，图才能透出来。
 * 面板不透明度由 --panel-opacity 独立控制（1=全不透，0=全透）；--scrim 只影响
 * apply() 里盖在图片上的遮罩（亮/暗两档）。
 */
function hex8(hex, alpha) {
  const a = Math.max(0, Math.min(1, alpha));
  return hex + Math.round(a * 255).toString(16).padStart(2, "0");
}
const T = (hex, a) => hex8(hex, a);
const P = (x) => Math.min(1, Math.max(0.05, x));
const panelOpacity = Math.max(0.05, Math.min(1, Number(args.options["panel-opacity"] ?? 0.55)));
const lightTokens = [
  `--dsw-alias-bg-base:${T("#ffffff", panelOpacity)}`,
  `--dsw-alias-bg-layer-1:${T("#f3f5fb", P(panelOpacity + 0.05))}`,
  `--dsw-alias-bg-layer-2:${T("#e9edf7", P(panelOpacity + 0.10))}`,
  `--dsw-alias-bg-layer-3:${T("#dde3f1", P(panelOpacity + 0.13))}`,
  `--dsw-alias-bg-module-platform:${T("#e9edf7", P(panelOpacity + 0.10))}`,
  `--dsw-alias-bg-multi-select:${T("#dce3f7", P(panelOpacity + 0.25))}`,
  `--dsw-alias-bg-overlay:${T("#eef1f9", P(panelOpacity + 0.37))}`,
  `--dsw-alias-bg-skeleton:rgba(28,37,70,${(0.04 + scrim * 0.04).toFixed(2)})`,
  `--dsw-specific-sidebar-fill:${T("#f2f5fa", P(panelOpacity + 0.05))}`,
  `--dsw-specific-menu:${T("#f3f5fb", P(panelOpacity + 0.40))}`,
  `--dsw-specific-selector:${T("#e4eaf7", P(panelOpacity + 0.30))}`,
  `--dsw-specific-input-major:${T("#ffffff", P(panelOpacity + 0.05))}`,
  `--dsw-specific-login-input:${T("#ffffff", P(panelOpacity + 0.05))}`,
  `--dsw-specific-tip:${T("#f3f5fb", 1)}`,
  `--dsw-specific-bubble:${T("#dce3f7", 1)}`,
  `--dsw-specific-bubble-highlight:${T("#c3cfee", 1)}`
].join(";");
const darkTokens = [
  `--dsw-alias-bg-base:${T("#10162a", panelOpacity)}`,
  `--dsw-alias-bg-layer-1:${T("#1a2238", P(panelOpacity + 0.05))}`,
  `--dsw-alias-bg-layer-2:${T("#202a44", P(panelOpacity + 0.10))}`,
  `--dsw-alias-bg-layer-3:${T("#26324f", P(panelOpacity + 0.13))}`,
  `--dsw-alias-bg-module-platform:${T("#202a44", P(panelOpacity + 0.10))}`,
  `--dsw-alias-bg-multi-select:${T("#2c3765", P(panelOpacity + 0.25))}`,
  `--dsw-alias-bg-overlay:${T("#1a2238", P(panelOpacity + 0.37))}`,
  `--dsw-alias-bg-skeleton:rgba(255,255,255,${(0.04 + scrim * 0.04).toFixed(2)})`,
  `--dsw-specific-sidebar-fill:${T("#1d2539", P(panelOpacity + 0.05))}`,
  `--dsw-specific-menu:${T("#1a2238", P(panelOpacity + 0.40))}`,
  `--dsw-specific-selector:${T("#1e2740", P(panelOpacity + 0.30))}`,
  `--dsw-specific-input-major:${T("#1a2238", P(panelOpacity + 0.05))}`,
  `--dsw-specific-login-input:${T("#1a2238", P(panelOpacity + 0.05))}`,
  `--dsw-specific-tip:${T("#1a2238", 1)}`,
  `--dsw-specific-bubble:${T("#2c3765", 1)}`,
  `--dsw-specific-bubble-highlight:${T("#33417a", 1)}`
].join(";");

const skinJson = {
  id,
  name,
  nameEn,
  author,
  tagline,
  description,
  tags,
  accent,
  bodyAttr,
  package: pkg,
  wiring: { id: wiringId, bundleWired: false },
  order: 999
};

const packageJson = {
  name: pkg,
  version: "0.0.1",
  description: `Background skin generated by the background-switcher skill (${nameEn}).`,
  type: "module",
  main: "lib/index.js",
  exports: {
    ".": "./lib/index.js",
    "./client": "./lib/client.js",
    "./package.json": "./package.json"
  },
  dsh: {
    bundle: { patch: "./cordis.patch.yml" },
    client: { inject: [], platform: "web" }
  },
  license: "MIT"
};

const indexJs = `//#region src/index.ts
/** Host loader entry for the browser-only skin plugin. */
/** Provides no host-side behavior. */
function apply() {}
//#endregion
export { apply };
`;

/* CSS：body 属性选择器生效，亮/暗双主题；半透明背景 token 让布局 frame 透出背景图
   （与 blue-fantasy 一致：不额外给 #root 加背景层，避免双重着色） */
const css = [
  `body[${bodyAttr}]{background-color:#f4f7fb;color:#1d2f52}`,
  `body[${bodyAttr}][data-ds-dark-theme]{background-color:#0b1220;color:#c2d4f0}`,
  `body[${bodyAttr}]{${lightTokens}}`,
  `body[${bodyAttr}][data-ds-dark-theme]{${darkTokens}}`
].join("");

const clientJs = `window.__ModuleLoader__.load({
\tid: ${JSON.stringify(pkg)},
\tfactory: (require) => {
\t\tvar module = { exports: {} };
\t\tvar exports = module.exports;
\t\tconst css = ${JSON.stringify(css)};
\t\tconst tagId = ${JSON.stringify(pkg + "/skin.css")};
\t\tif (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
\t\t\tconst tag = document.createElement("style");
\t\t\ttag.dataset.plugin = ${JSON.stringify(pkg)};
\t\t\ttag.dataset.pluginCss = tagId;
\t\t\ttag.textContent = css;
\t\t\tdocument.head.appendChild(tag);
\t\t}
\t\tconst BACKDROP = ${JSON.stringify(dataUrl)};
\t\tconst SCRIM_LIGHT = "linear-gradient(rgba(255,255,255,${scLight}) 0%, rgba(255,255,255,${scLight2}) 100%)";
\t\tconst SCRIM_DARK = "linear-gradient(rgba(4,8,20,${scDark}) 0%, rgba(4,8,20,${scDark2}) 100%)";
\t\tconst BACKDROP_PROPERTIES = ["background-image", "background-position", "background-size", "background-attachment", "background-repeat"];
\t\tfunction apply(ctx) {
\t\t\tconst body = document.body;
\t\t\tconst previous = new Map();
\t\t\tfor (const prop of BACKDROP_PROPERTIES) previous.set(prop, body.style.getPropertyValue(prop));
\t\t\tbody.dataset.${datasetKey} = "";
\t\t\tconst setBackdrop = () => {
\t\t\t\tconst dark = body.dataset.dsDarkTheme !== void 0;
\t\t\t\tbody.style.setProperty("background-image", dark ? SCRIM_DARK + ", url(" + BACKDROP + ")" : SCRIM_LIGHT + ", url(" + BACKDROP + ")");
\t\t\t\tbody.style.setProperty("background-position", "center");
\t\t\t\tbody.style.setProperty("background-size", "cover");
\t\t\t\tbody.style.setProperty("background-attachment", "fixed");
\t\t\t\tbody.style.setProperty("background-repeat", "no-repeat");
\t\t\t};
\t\t\tsetBackdrop();
\t\t\tconst observer = new MutationObserver(setBackdrop);
\t\t\tobserver.observe(body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
\t\t\tctx.effect(() => () => {
\t\t\t\tdelete body.dataset.${datasetKey};
\t\t\t\tobserver.disconnect();
\t\t\t\tfor (const [prop, value] of previous) body.style.setProperty(prop, value);
\t\t\t}, ${JSON.stringify(wiringId + ": backdrop")});
\t\t}
\t\texports.apply = apply;
\t\treturn module.exports;
\t}
});
`;

const patchYml = `# ${nameEn} skin bundle patch: inserts its dsh.client row into the web plugin roster.
# Mutual exclusion between skins is managed by apply-skin.mjs (home-layer disabled rows).
- insert:
    - id: ${wiringId}
      name: '${pkg}'
`;

mkdirSync(join(skinDir, "lib"), { recursive: true });
writeFileSync(join(skinDir, "skin.json"), JSON.stringify(skinJson, null, 2) + "\n");
writeFileSync(join(skinDir, "package.json"), JSON.stringify(packageJson, null, 2) + "\n");
writeFileSync(join(skinDir, "lib", "index.js"), indexJs);
writeFileSync(join(skinDir, "lib", "client.js"), clientJs);
writeFileSync(join(skinDir, "cordis.patch.yml"), patchYml);

/* ---------------- 自校验 ---------------- */
for (const f of ["skin.json", "package.json"]) {
  JSON.parse(readFileSync(join(skinDir, f), "utf8")); // 抛错即失败
}
for (const f of ["lib/index.js", "lib/client.js"]) {
  const p = join(skinDir, f);
  if (!statSync(p).isFile() || readFileSync(p, "utf8").length === 0) throw new Error(`生成文件异常: ${p}`);
}

console.log(`✔ 皮肤包已生成: ${skinDir}`);
console.log(`  id          : ${id}`);
console.log(`  显示名      : ${name} (${nameEn})`);
console.log(`  package     : ${pkg}`);
console.log(`  图片        : ${basename(imageSourceName)} (${mime}, ${(imageBuffer.length / 1024).toFixed(0)} KB → base64 ${(base64.length / 1024).toFixed(0)} KB)`);
console.log(`  wiring      : ${wiringId} / ${bodyAttr}`);
console.log(`  面板透明度  : ${panelOpacity}（1=不透，0=全透），遮罩强度 ${scrim}`);
console.log(`\n下一步: node <技能目录>/scripts/apply-skin.mjs install --id ${id} --source ${skinDir}`);
console.log(`        node <技能目录>/scripts/apply-skin.mjs use --id ${id}`);
