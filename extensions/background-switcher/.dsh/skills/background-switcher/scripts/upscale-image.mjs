#!/usr/bin/env node
/**
 * upscale-image.mjs — 图片高清增强工具
 *
 * 放大到目标分辨率（默认 3840x2160，lanczos3 高质量内核）+ 锐化增强 +
 * 转 WebP 高质量压缩，并自动迭代质量档位保证输出 ≤ 目标体积（默认 2MB）。
 * 用宿主自带的 sharp（@deepseek-ai/dsh 的依赖），无需额外安装。
 *
 * 用法：
 *   node upscale-image.mjs <输入图片> [输出路径]
 *        [--width 3840] [--max-bytes 2097152] [--quality 90]
 *        [--format webp|jpeg|png]
 *
 * 示例：
 *   node upscale-image.mjs D:\img\pic.png D:\img\pic-hd.webp --width 3840 --max-bytes 2097152
 *
 * 注意：放大不能凭空创造细节（真实超分需 AI 模型，如 Real-ESRGAN）；
 * lanczos3 + 锐化是工程上「高清化」的标准做法，输出 4K 尺寸 + 更高观感锐度。
 */

import { readFileSync, writeFileSync, statSync } from "node:fs";
import { resolve, basename, extname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/* ---------------- 定位 sharp（候选路径） ---------------- */
const SHARP_CANDIDATES = [
  process.env.DSH_PROFILE_SHARP,
  join(process.env.DSH_HOME || "", "profiles", "web", "node_modules", "sharp"),
  "D:\\Users\\admin\\AppData\\Local\\npm-cache\\_npx\\1e7f6d9597241db0\\node_modules\\sharp",
  join(process.env.HOME || "", ".dsh", "profiles", "web", "node_modules", "sharp")
];
function resolveSharp() {
  for (const p of SHARP_CANDIDATES) {
    if (!p) continue;
    try {
      if (statSync(p).isDirectory()) return require(p);
    } catch {}
  }
  try {
    return require("sharp"); // 当前环境恰好可解析时兜底
  } catch {
    throw new Error("找不到 sharp（宿主 @deepseek-ai/dsh 的依赖）。请检查路径候选是否覆盖本机布局。");
  }
}

/* ---------------- 参数 ---------------- */
const args = process.argv.slice(2);
const positionals = [];
const options = {};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a.startsWith("--")) {
    const key = a.slice(2);
    const next = args[i + 1];
    if (next !== undefined && !next.startsWith("--")) {
      options[key] = next;
      i++;
    } else {
      options[key] = true;
    }
  } else {
    positionals.push(a);
  }
}
if (positionals.length === 0) {
  console.log(`用法: node upscale-image.mjs <输入图片> [输出路径] [--width 3840] [--max-bytes 2097152] [--quality 90] [--format webp|jpeg|png]`);
  process.exit(1);
}
const input = resolve(positionals[0]);
const output = positionals[1] ? resolve(positionals[1]) : resolve(join(extname(input) ? input.replace(extname(input), "") : input) + "-hd." + (options.format || "webp"));
const targetWidth = Math.max(1, Number(options.width ?? 3840));
const maxBytes = Math.max(1024, Number(options.maxBytes ?? 2 * 1024 * 1024));
const startQuality = Math.max(1, Math.min(100, Number(options.quality ?? 90)));
const format = (options.format || "webp").toLowerCase();
if (!["webp", "jpeg", "png"].includes(format)) throw new Error(`不支持的格式: ${format}`);

/* ---------------- 处理 ---------------- */
const sharp = resolveSharp();
const inputBuf = readFileSync(input);
const meta = await sharp(inputBuf).metadata();
if (!meta.width || !meta.height) throw new Error("无法读取图片元数据");

const scale = Math.max(targetWidth / Math.max(meta.width, meta.height), 1);
const width = Math.round(meta.width * scale);
const height = Math.round(meta.height * scale);

console.log(`输入: ${basename(input)} ${meta.width}x${meta.height} (${(inputBuf.length / 1024 / 1024).toFixed(2)} MB)`);
console.log(`目标: ${width}x${height}（${format}，≤ ${(maxBytes / 1024 / 1024).toFixed(1)} MB）`);

let pipeline = sharp(inputBuf)
  .resize(width, height, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 1, m1: 0.8, m2: 0.4, x1: 2, y2: 12, y3: 24 });

let outBuf;
let quality = startQuality;
for (;;) {
  let p = pipeline.clone();
  if (format === "webp") p = p.webp({ quality, effort: 4 });
  else if (format === "jpeg") p = p.jpeg({ quality, mozjpeg: true });
  else p = p.png({ compressionLevel: 9, adaptiveFiltering: true });
  outBuf = await p.toBuffer();
  if (outBuf.length <= maxBytes || quality <= 45) break;
  quality -= 5;
}

if (outBuf.length > maxBytes && format !== "png") {
  // 质量档已压到底仍超限：再降一档分辨率重试（保持 16:9 比例）
  const fallbackScale = 0.75;
  const fw = Math.round(width * fallbackScale);
  const fh = Math.round(height * fallbackScale);
  console.warn(`[提示] ${quality} 质量下仍超 ${(maxBytes / 1024 / 1024).toFixed(1)} MB，降分辨率到 ${fw}x${fh} 重试…`);
  pipeline = sharp(inputBuf)
    .resize(fw, fh, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1, m1: 0.8, m2: 0.4, x1: 2, y2: 12, y3: 24 });
  for (;;) {
    let p = pipeline.clone();
    if (format === "webp") p = p.webp({ quality, effort: 4 });
    else p = p.jpeg({ quality, mozjpeg: true });
    outBuf = await p.toBuffer();
    if (outBuf.length <= maxBytes || quality <= 35) break;
    quality -= 5;
  }
}

writeFileSync(output, outBuf);
const outMeta = await sharp(outBuf).metadata();
console.log(`✔ 已输出: ${output}`);
console.log(`  尺寸: ${outMeta.width}x${outMeta.height}，格式: ${outMeta.format}`);
console.log(`  体积: ${(outBuf.length / 1024).toFixed(0)} KB / ${(outBuf.length / 1024 / 1024).toFixed(2)} MB（质量档 ${quality}）`);
if (outBuf.length > maxBytes) console.warn(`[警告] 仍超 ${(maxBytes / 1024 / 1024).toFixed(1)} MB（${(outBuf.length / 1024 / 1024).toFixed(2)} MB）；可再降 --width 或 --quality。`);
