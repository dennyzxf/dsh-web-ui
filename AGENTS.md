# DeepSeek Harness 项目 Agent 开发规范

> 项目：dsh-web-ui-custom\
> 用途：作为 DeepSeek Harness / Agent 在本项目中的长期开发规则。\
> 目标：在保留官方 upstream
> 同步能力的同时，安全维护自己的功能、扩展和部署补丁。

------------------------------------------------------------------------

## 1. 项目身份

项目根目录：

``` text
D:\deepseek-harness\dsh-web-ui-custom
```

Git 远程仓库：

``` text
origin:
https://github.com/dennyzxf/dsh-web-ui.git

upstream:
https://github.com/zhu1090093659/dsh-web-ui.git
```

角色定义：

-   `upstream`：官方源码仓库，只用于获取官方更新。
-   `origin`：用户自己的 Fork，用于保存自己的修改。
-   本地项目：所有正式开发工作的唯一工作区。

------------------------------------------------------------------------

## 2. 核心原则

### 2.1 只在 Git 项目中开发

所有源码修改必须发生在：

``` text
D:\deepseek-harness\dsh-web-ui-custom
```

禁止把：

``` text
D:\deepseek-harness\workspace\skins
```

作为正式开发源。

禁止把：

``` text
%USERPROFILE%\.dsh\profiles\web\node_modules
```

作为源码修改位置。

### 2.2 禁止直接修改已安装包

不要直接修改：

``` text
~\.dsh\profiles\web\node_modules\@linxin666\dsh-client-ui-skin-center\
```

如果需要修改 skin-center：

1.  修改 Git 项目中的源码。
2.  运行部署脚本。
3.  运行 verify。
4.  通过 Git 保存修改。

### 2.3 不要擅自覆盖用户修改

如果发现工作区存在未提交修改：

``` text
git status
```

必须先识别这些修改的来源。

禁止：

``` text
git reset --hard
git checkout -- .
git clean -fd
```

除非用户明确要求。

禁止为了"解决问题"而删除用户已有文件。

------------------------------------------------------------------------

# 3. 目录职责

## 3.1 官方源码

主要源码位于：

``` text
packages/
```

例如：

``` text
packages/skins/skin-center/
```

skin-center 核心源码：

``` text
packages/skins/skin-center/lib/
├── index.js
└── client.js
```

如果用户要求修改官方 skin-center 核心功能，优先修改这里。

------------------------------------------------------------------------

## 3.2 background-switcher 扩展

扩展目录：

``` text
extensions/background-switcher/
```

结构：

``` text
extensions/background-switcher/
├── .dsh/
│   └── skills/
│       └── background-switcher/
├── assets/
├── lib/
├── skins/
└── tools/
```

职责：

-   `.dsh/skills/`：Agent Skill。
-   `assets/`：图片及其他素材。
-   `lib/`：扩展需要维护的运行时代码/补丁源。
-   `skins/`：皮肤资源。
-   `tools/`：部署、校验等工具。

------------------------------------------------------------------------

# 4. skin-center 补丁部署规则

当前补丁部署脚本：

``` text
extensions/background-switcher/tools/deploy-skin-center-patch.mjs
```

当前补丁源：

``` text
extensions/background-switcher/lib/
├── index.js
└── client.js
```

实际生效位置：

``` text
~/.dsh/profiles/web/node_modules/@linxin666/dsh-client-ui-skin-center/lib/
```

部署原则：

``` text
Git 项目源码
    ↓
deploy-skin-center-patch.mjs
    ↓
已安装 node_modules
    ↓
DSH 运行环境
```

不要反过来直接修改 node_modules。

部署后必须验证：

``` powershell
node extensions/background-switcher/tools/deploy-skin-center-patch.mjs verify
```

如果需要部署：

``` powershell
node extensions/background-switcher/tools/deploy-skin-center-patch.mjs deploy
```

正常结果应类似：

``` text
✔ index.js: 一致
✔ client.js: 一致
已安装包与补丁源一致。
```

------------------------------------------------------------------------

# 5. 修改代码的标准流程

Agent 开始工作前：

``` powershell
cd D:\deepseek-harness\dsh-web-ui-custom
git status
```

确认当前状态。

然后：

1.  理解需求。
2.  查找相关源码。
3.  修改最小必要范围。
4.  不修改无关文件。
5.  运行必要测试。
6.  检查 Git diff。
7.  验证部署脚本（如果涉及 skin-center）。
8.  提交 Git commit。

------------------------------------------------------------------------

# 6. Git 自动提交规则

允许 Agent 在完成开发并验证成功后自动执行：

``` powershell
git add
git commit
```

commit message 使用 Conventional Commits。

例如：

``` text
feat: add AI background image switching
fix: fix skin background loading
refactor: simplify skin center logic
docs: update background switcher documentation
chore: update extension configuration
```

提交前必须检查：

``` powershell
git status
git diff
git diff --cached
```

不要提交：

``` text
node_modules/
*.log
*.backup
.DS_Store
临时文件
缓存文件
编辑器生成的临时文件
```

------------------------------------------------------------------------

# 7. Git Push 规则

默认情况下：

> Agent 可以 commit，但禁止自动 push。

也就是说，正常开发流程：

``` text
修改
 ↓
测试
 ↓
git diff
 ↓
git add
 ↓
git commit
 ↓
停止
```

只有用户明确要求：

``` text
push
推送
上传 GitHub
同步到 origin
```

时，才执行：

``` powershell
git push
```

不要擅自执行：

``` powershell
git push --force
git push --force-with-lease
```

除非用户明确要求，并且先解释风险。

------------------------------------------------------------------------

# 8. 推荐分支策略

稳定代码：

``` text
main
```

新功能优先使用：

``` text
feature/功能名称
```

例如：

``` text
feature/ai-skin-generator
feature/background-image-generation
feature/skin-manager
```

Bug：

``` text
fix/问题名称
```

重构：

``` text
refactor/功能名称
```

如果用户明确要求直接修改 main，可以直接修改
main，但不得擅自切换分支造成用户工作丢失。

------------------------------------------------------------------------

# 9. Upstream 同步规则

官方仓库：

``` text
upstream
```

检查官方更新：

``` powershell
git fetch upstream
```

查看官方新增 commit：

``` powershell
git log --oneline main..upstream/main
```

如果需要同步：

``` powershell
git merge upstream/main
```

同步前必须：

``` powershell
git status
```

如果有未提交修改：

> 不要擅自 stash、reset 或覆盖。

先报告用户。

------------------------------------------------------------------------

# 10. 处理 Merge Conflict

如果出现：

``` text
CONFLICT
```

Agent 必须：

1.  停止继续自动合并。
2.  列出冲突文件。
3.  解释官方修改与用户修改的大致区别。
4.  等待用户确认，或者在用户明确授权后解决。

特别是：

``` text
packages/skins/skin-center/
```

属于核心源码区域。

不要简单使用：

``` text
ours
```

或：

``` text
theirs
```

覆盖整个文件。

应尽量保留：

``` text
官方最新修改
+
用户自己的功能
```

------------------------------------------------------------------------

# 11. 官方更新后的补丁处理

官方更新后，必须重新检查：

``` text
packages/skins/skin-center/
```

以及：

``` text
extensions/background-switcher/lib/
```

是否仍然兼容。

如果官方修改了 skin-center API、路由、插件结构或依赖：

不要直接假设旧补丁仍然可用。

应执行：

``` powershell
node extensions/background-switcher/tools/deploy-skin-center-patch.mjs verify
```

必要时：

``` powershell
node extensions/background-switcher/tools/deploy-skin-center-patch.mjs deploy
```

然后重新测试。

------------------------------------------------------------------------

# 12. 图片和素材管理

图片位于：

``` text
extensions/background-switcher/assets/
```

删除图片之前：

1.  搜索项目中是否引用。
2.  检查 `skin.json`。
3.  检查 JS/配置文件。
4.  确认删除不会导致运行时资源缺失。

PowerShell 示例：

``` powershell
Get-ChildItem extensions -Recurse | Select-String "图片文件名"
```

如果没有引用，再删除。

不要为了减少仓库体积而删除仍被皮肤使用的资源。

------------------------------------------------------------------------

# 13. 文件换行格式

本项目在 Windows 环境运行。

如果 Git 出现：

``` text
LF will be replaced by CRLF
```

这通常是换行格式提示，不是代码错误。

Agent 不应因为这个警告反复修改源码。

但是如果发现某次修改造成大量无意义的：

``` text
additions
deletions
```

应优先检查是否由：

``` text
LF / CRLF
```

导致。

不要把单纯换行变化混入功能 commit。

------------------------------------------------------------------------

# 14. 测试和验证

根据修改范围选择测试。

如果修改：

``` text
packages/skins/skin-center
```

至少检查：

``` powershell
node extensions/background-switcher/tools/deploy-skin-center-patch.mjs verify
```

如果修改扩展：

检查：

``` text
extensions/background-switcher/
```

相关 Skill、脚本、皮肤配置和资源。

如果项目提供：

``` text
npm test
npm run build
pnpm test
pnpm build
```

应根据项目实际 package.json 选择正确命令。

不要凭空执行不存在的脚本。

------------------------------------------------------------------------

# 15. Commit 前最终检查

每次准备 commit 时执行：

``` powershell
git status
git diff
git diff --cached
```

确认：

-   没有无关修改。
-   没有临时文件。
-   没有 node_modules。
-   没有 backup 文件。
-   没有误删除资源。
-   没有把用户私有配置提交进去。
-   功能测试通过。

然后：

``` powershell
git add <必要文件>
git commit -m "..."
```

------------------------------------------------------------------------

# 16. Commit 后报告格式

每次 Agent 自动 commit 后，应向用户报告：

``` text
开发完成。

修改：
- xxx
- xxx

验证：
- xxx 测试通过
- deploy verify 通过

Git：
- Commit: abc1234
- Message: feat: xxx

当前状态：
- 是否存在未提交修改
- 是否已经 push：否
```

默认不要 push。

------------------------------------------------------------------------

# 17. 安全禁止操作

未经用户明确授权，不执行：

``` powershell
git reset --hard
git clean -fd
git push --force
git push --force-with-lease
```

不删除：

``` text
packages/
extensions/
用户创建的资源
```

不覆盖：

``` text
用户未提交的修改
```

不直接修改：

``` text
~/.dsh/profiles/web/node_modules/
```

不把：

``` text
workspace/skins/
```

重新作为正式源码仓库。

------------------------------------------------------------------------

# 18. 开发目标

本项目采用：

``` text
官方 upstream
       ↓
本地 Git
       ↓
用户自己的功能
       ↓
extensions
       ↓
测试
       ↓
commit
       ↓
人工确认
       ↓
origin
```

最终目标：

> 能持续吸收官方 dsh-web-ui 更新，同时长期保留用户自己的 AI、皮肤、Skill
> 和 background-switcher 功能。

任何修改都应该优先考虑：

1.  能否与官方未来版本兼容。
2.  是否应该做成独立 extension。
3.  是否会增加未来 merge conflict。
4.  是否能通过 deploy 脚本恢复运行环境。
5.  是否能够通过 Git 完整重建开发环境。
