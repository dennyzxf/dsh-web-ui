---
name: background-switcher
description: 自由更换 DSH Web GUI 背景图的技能。把任意本地图片或网络图片变成全屏背景（自动生成迷你皮肤包并安装启用），也支持恢复默认背景、列出/切换/删除皮肤。触发词：换背景、换背景图、背景图、壁纸、换壁纸、背景图片、皮肤、换皮肤、皮肤列表、恢复默认背景、background、wallpaper、skin。
metadata:
  requires:
    bins: ["node"]
---

# DSH Web GUI 自由更换背景图（background-switcher）

> 本技能把用户提供的任意图片变成 DeepSeek Harness Web GUI 的全屏背景。机制基于本机已装的
> `dsh-skins` 皮肤全家桶：每张背景图 = 一个迷你皮肤（浏览器端插件，图片以 base64 内联），
> 通过 `~/.dsh/cordis.patch.yml` 的 `dsh-skin managed` 区段互斥启用，config watcher 秒级热加载，
> 用户刷新页面即生效。

## 一、能力与触发话术

| 用户说… | 你要做… |
|---|---|
| 「换背景图 C:\图片\xx.jpg」/「把背景换成 <URL>」 | 生成皮肤 → 安装 → 启用 → 提示刷新页面 |
| 「恢复默认背景」「还原皮肤」 | `apply-skin.mjs revert`（官方默认外观） |
| 「列出皮肤」「现在什么皮肤」 | `apply-skin.mjs list` |
| 「切换皮肤 <id>」「换成 <id> 皮肤」 | `apply-skin.mjs use --id <id>`（对已装皮肤，含官方内置皮肤） |
| 「删除皮肤 <id>」 | `apply-skin.mjs uninstall --id <id>` |
| 「换背景但不启用」 | 只生成皮肤包，输出目录与下一步命令 |

技能目录（resourceBase）下的脚本：
- `scripts/make-skin.mjs` — 图片 → 皮肤包生成器（纯 Node，无依赖）
- `scripts/apply-skin.mjs` — 安装/启用/恢复/列表/卸载（写 `~/.dsh`，**沙箱外，需授权**）

## 二、换背景图工作流（核心）

1. **确认图片来源**：
   - 用户给了本地路径 → 校验文件存在、是图片（png/jpg/webp/gif/svg/bmp/avif）。
   - 用户给了 http(s) URL → 交给生成器下载（生成器内置 fetch）。
   - 用户没给图 → 主动询问（可以用 ask_user_question 提供选项：给路径 / 给 URL / 我帮忙找一张）。
2. **确定皮肤 id 与名称**：id 必须 kebab-case（小写字母/数字/连字符）。中文名放 `--name`。
   默认从 `--name` 派生 id；名称含特殊字符时显式传 `--id`。
3. **运行生成器**（在技能目录下执行；`<base>` = 本技能目录）：
   ```powershell
   node "<base>/scripts/make-skin.mjs" "<图片路径|URL>" --id <id> --name "<显示名>" [--accent #主色] [--panel-opacity 0.55] [--scrim 0.5] [--out "<工作区>\skins"]
   ```
   可选参数：`--name-en`、`--author`、`--tagline`、`--description`、`--tags a,b,c`。
   **透视调节**：`--panel-opacity` 越小面板越透、背景越清晰（1=不透，0=全透）；`--scrim` 是盖在
   图片上的遮罩强度，越大文字越易读。用户反馈「背景太透看不清字」就调大 `--panel-opacity`/`--scrim`，
   「加大透视」就调小 `--panel-opacity`。
   生成物在 `<out>/<id>/`（skin.json / package.json / lib/index.js / lib/client.js / cordis.patch.yml）。
4. **校验生成物**：skin.json、package.json 可被 JSON.parse；lib/client.js 非空且含 `data:` base64。
5. **安装 + 启用**（写 `~/.dsh`，**必须向用户说明用途并请求授权**，见第四节）：
   ```powershell
   node "<base>/scripts/apply-skin.mjs" install --id <id> --source "<out>\<id>"
   node "<base>/scripts/apply-skin.mjs" use --id <id>
   ```
6. **收尾**：告诉用户「config watcher 已热加载，刷新页面即可看到新背景」；
   同时告知可在「设置 → 皮肤中心」看到/切换该皮肤，源文件保留在 `<out>/<id>` 便于重装。

## 三、其他操作

- **恢复默认**：`node "<base>/scripts/apply-skin.mjs" revert`
- **列表/当前**：`node "<base>/scripts/apply-skin.mjs" list`
- **切换已装皮肤**：`node "<base>/scripts/apply-skin.mjs" use --id <id>`（id 来自 list 输出）
- **删除**：`node "<base>/scripts/apply-skin.mjs" uninstall --id <id>`（先清理 managed 区段，再删 junction 与载体目录）

## 四、安全与授权（务必遵守）

- `apply-skin.mjs` 会写入 `~/.dsh/profiles/web/node_modules/@linxin666/dsh-skins/skins/<id>`
  （载体复制）、`~/.dsh/profiles/web/node_modules/@linxin666/<pkg>`（junction）和
  `~/.dsh/cordis.patch.yml`（managed 区段）——全部在会话沙箱外。
- 执行这些命令时**必须**向用户解释「要把新背景安装进 DSH 皮肤系统（写入 ~/.dsh）」，
  并以 `sandbox_permissions: danger-full-access` 一次性重试；被拒绝则停止，绝不绕过，
  改为把生成好的皮肤目录与两条命令原样交给用户手动执行。
- managed 区段由 `apply-skin.mjs` 原子改写（临时文件 + rename），与 `dsh-skin use` 格式 1:1；
  **不要手改** `~/.dsh/cordis.patch.yml`（除非用户明确要求），也不要改 `# --- dsh-skin managed` 分隔行。
- 生成器只写工作区内 `<out>` 目录，无沙箱问题。

## 五、边界与限制（如实告知用户）

- 图片建议 ≤2MB、≤1920×1080：base64 内联进 client.js，太大页面加载变慢；>2.5MB 生成器会警告。
  需要压缩时，可用宿主自带 sharp（`~/.dsh/profiles/web/node_modules/sharp`）写一次性压缩脚本，
  或让用户先用图片工具压缩。
- 皮肤复制进 `dsh-skins` 包目录后，升级 `dsh-web-ui-all` 可能被清掉；源文件在 `<out>/<id>`
  留档，重装只需重新执行 install + use 两条命令。
- 皮肤中心 UI 与本技能共用同一注册表（skin.json 是唯一事实来源），互不冲突、互相可见。
- 亮/暗主题：皮肤自动跟随系统/设置切换遮罩（MutationObserver 监听 `data-ds-dark-theme`），
  无需额外配置。
- 本技能若放在项目级 `.dsh/skills/`，仅该项目会话可用；复制到 `~/.agents/skills/` 即全局可用
  （脚本里的 `--out` 默认路径会变，重装时显式传 `--out`）。

## 六、错误排查

| 症状 | 处理 |
|---|---|
| 刷新后背景图完全不显示（面板不透） | 生成器必须输出半透明 `--dsw-alias-bg-base` 等 token 覆盖（frame 默认不透明会盖住 body 背景图）；用**修复后的生成器**重新生成并重装（`install` 覆盖即可，id 不变无需改 patch），再强刷 |
| 生成器报「无效的 skin id」 | id 只允许小写字母/数字/连字符，改用 `--id` 显式指定 |
| `use` 报「未安装到 profile」 | 先运行 `install`（或检查 junction：`dir <profile>\node_modules\@linxin666`） |
| `use` 报「未知皮肤」 | 先 `list` 确认 id；新皮肤先 `install` 再 `use` |
| 刷新后无变化 | 确认 `list` 里 ★ 指向该皮肤；检查浏览器是否缓存（强刷 Ctrl+F5）；等待数秒让 config watcher 生效 |
| `use` 后刷新仍无变化（boot 图没更新） | 磁盘状态一般已正确（`list` 的 ★ 是准的）。Windows 下原子写（rename）偶发不被 config watcher 感知：对 `~/.dsh/cordis.patch.yml` **再 touch 一次**（重写同内容触发 change 事件；apply-skin.mjs 已内置双写保险），仍不行就重启宿主或 GUI 设置里重载插件 |
| managed 区段异常 | 用 `apply-skin.mjs revert` 重建；若文件被手改坏，报错会说明分隔行问题，恢复后重试 |
| 大图失败 | 压缩到 ≤2MB 再生成；或让用户换图 |
