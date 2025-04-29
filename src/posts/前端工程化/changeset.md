---
title:  changeset
tags:
  - 前端工程化
---



以下是一份面向企业级 Monorepo 项目的 **Changesets 实战手册**，涵盖仓库架构、自动化版本管理、CI/CD 集成、构建优化、高级发布策略及最佳实践，全部示例均基于真实开源项目和社区经验整理。

## 概要  
企业级 Monorepo 往往包含上百个包和多个应用，手动维护版本和发布流程极易出错。**Changesets** 通过在 `.changeset/` 目录下记录每次变更，结合 CLI 和 GitHub Action，实现了**多包版本自动化管理**、**Changelog 生成**、**Git Tag 打点**和**npm 发布**等全流程自动化，大幅提升团队协作效率和发布安全性  ([Introducing Changesets: Simplify Project Versioning with Semantic ...](https://lirantal.com/blog/introducing-changesets-simplify-project-versioning-with-semantic-releases?utm_source=chatgpt.com))  ([changesets/changesets: A way to manage your versioning ... - GitHub](https://github.com/changesets/changesets?utm_source=chatgpt.com))。

---

## 1. Monorepo 架构设计  

### 1.1 典型目录结构  
```text
/
├── apps/            # 可部署应用（如 Web、移动端）
├── features/        # 领域功能包（可选）
├── libs/            # 公共库（工具函数、设计系统）
├── packages/        # 核心业务包
├── .changeset/      # Changesets 配置与变更文件
├── package.json     # 根级依赖与脚本
└── pnpm-workspace.yaml # PNPM/Yarn 工作区配置
```  
分层存放应用、功能和公共库，可根据团队规模和业务需求自由调整  ([Building a Robust JS/TS Monorepo: Best Practices with Yarn, NX ...](https://hackernoon.com/building-a-robust-jsts-monorepo-best-practices-with-yarn-nx-and-changesets?utm_source=chatgpt.com))。

### 1.2 为什么选 Monorepo？  
- **单一源头**：所有包在同一个仓库，依赖升级一次完成，消除版本冲突  ([How a Monorepo, pnpm, and Changesets Transformed My Multi ...](https://medium.com/%40anandkumar.code/how-a-monorepo-pnpm-and-changesets-transformed-my-multi-package-workflow-7c1771bba898?utm_source=chatgpt.com))。  
- **一致工具链**：统一 ESLint、Prettier、测试框架和发布流程，降低维护成本  ([基于Pnpm+Changesets的Monorepo工具库实战 - 稀土掘金](https://juejin.cn/post/7277894305992196151?utm_source=chatgpt.com))。  
- **跨团队协作**：不同团队可同时修改不同包，变更可即时追踪和回滚  ([Monorepo，大型前端项目管理模式实践 - 淘宝技术](https://tech.taobao.org/news/ulamrkootb5ii314?utm_source=chatgpt.com))。

---

## 2. Changesets 自动化版本管理  

### 2.1 安装与初始化  
```bash
pnpm add -D @changesets/cli
npx changeset init
```  
会在根目录创建 `.changeset/config.json` 和 `.changeset/README.md`，用于配置版本规则及 Changelog 模板  ([changesets/changesets: A way to manage your versioning ... - GitHub](https://github.com/changesets/changesets?utm_source=chatgpt.com))。

### 2.2 记录变更  
每次对某些包做出功能或修复后，运行：
```bash
npx changeset
```  
交互式地选择受影响的包、版本类型（patch/minor/major）并填写描述，生成类似如下的 markdown 文件：  
```markdown
---
"my-lib": minor
"feature-app": patch
---

- 新增用户管理功能
- 修复登录接口超时问题
```  
该文件会存放在 `.changeset/` 下，供后续统一 consumption  ([在公司项目中使用changesets进行项目管理，提升效率 - 稀土掘金](https://juejin.cn/post/7276393533086318632?utm_source=chatgpt.com))。

### 2.3 Bump 版本与生成 Changelog  
当准备发布时，执行：
```bash
npx changeset version
```  
- 根据所有 `.changeset/*.md` 计算每个包的新版本  
- 更新各自 `package.json` 的 `version`  
- 在各包或根目录的 `CHANGELOG.md` 中插入新的版本条目  
- 删除已应用的 `.changeset` 文件  ([changesets/changesets: A way to manage your versioning ... - GitHub](https://github.com/changesets/changesets?utm_source=chatgpt.com))。

### 2.4 发布到 npm  
最后一步：
```bash
npx changeset publish
```  
- 自动运行各包的 `prepare` 钩子（推荐在 `prepare` 中触发构建）  
- 将所有需要发布的包推到 npm  
- 在 Git 仓库打上相应的 `vX.Y.Z` Tag  ([突破项目瓶颈：2024 年Monorepo 工具选择和实践 - BEEZEN](https://www.dongbizhen.com/posts/48225/?utm_source=chatgpt.com))。  

---

## 3. CI/CD 集成  

### 3.1 在 PR 中强制检查 Changeset  
在 `.github/workflows/ci.yml` 中添加：
```yaml
- name: Check Changesets
  uses: changesets/action@v1
  with:
    check: true
```
若 PR 中无 `.changeset` 文件，CI 会失败，保证所有变更都有对应的发布说明  ([changesets/changesets: A way to manage your versioning ... - GitHub](https://github.com/changesets/changesets?utm_source=chatgpt.com))。

### 3.2 自动化 Release Workflow  
在 `.github/workflows/release.yml` 中配置：
```yaml
on:
  push:
    branches: [ main ]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org/'
      - run: pnpm install
      - name: Version & Changelog
        uses: changesets/action@v1
        with:
          version: npx changeset version
          publish: npx changeset publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```
合并到 `main` 即可完成版本 bump、Changelog 更新、Git Tag、npm 发布全流程，无需人工干预  ([基于Pnpm+Changesets的Monorepo工具库实战原创 - CSDN博客](https://blog.csdn.net/weixin_43719925/article/details/136700615?utm_source=chatgpt.com))  ([Introducing Changesets: Simplify Project Versioning with Semantic ...](https://lirantal.com/blog/introducing-changesets-simplify-project-versioning-with-semantic-releases?utm_source=chatgpt.com))。

---

## 4. 构建与发布优化  

### 4.1 针对性构建  
在各包 `package.json` 中添加：
```json
"scripts": {
  "prepare": "npm run build"
}
```
`changeset publish` 会在发布前自动运行 `prepare`，只构建有改动的包，无需全量重建  ([突破项目瓶颈：2024 年Monorepo 工具选择和实践 - BEEZEN](https://www.dongbizhen.com/posts/48225/?utm_source=chatgpt.com))。

### 4.2 Turborepo/NX 加速  
结合 **Turborepo** 或 **NX**，利用缓存和增量构建，只对受影响包执行测试、构建和 lint，加速 CI 流水线  ([使用pnpm、turborepo 构建monorepo 项目，changesets 管理日志和 ...](https://ksh7.com/posts/workspace-pnpm-turborepo-changesets/index.html?utm_source=chatgpt.com))  ([琢磨一下Monorepo - Yee's Blog 个人生活网站分享 - 王大白](https://yeee.wang/posts/145c.html?utm_source=chatgpt.com))。

---

## 5. 高级发布策略  

### 5.1 预发布与 Snapshot  
- **Beta 预发布**：
  ```bash
  npx changeset pre enter beta
  npx changeset version
  npx changeset publish
  ```
  生成 `1.2.0-beta.0` 并发布到 `beta` tag  ([monorepo工作流基础之changesets打开与进阶（Speeches） 原创](https://blog.csdn.net/qq_21567385/article/details/122361591?utm_source=chatgpt.com))。  
- **Snapshot 发布**：  
  ```bash
  npx changeset version --snapshot
  npx changeset publish
  ```  
  发布 `0.0.0-snapshot-<timestamp>`，可用于 E2E 测试，不影响正式版本  ([monorepo工作流基础之changesets打开与进阶（Speeches） 原创](https://blog.csdn.net/qq_21567385/article/details/122361591?utm_source=chatgpt.com))。

### 5.2 Dist-Tag 管理  
| 渠道        | npm dist-tag | 用途                      |
|------------|--------------|---------------------------|
| 稳定版      | `latest`     | 生产环境默认安装         |
| 次要测试版  | `beta`       | QA 或早期体验             |
| 主干 Canary | `canary`     | 主干周度或每日构建测试    |

CI 可根据版本号自动指定 Dist-Tag，确保用户安装到正确版本  ([Introducing Changesets: Simplify Project Versioning with Semantic ...](https://lirantal.com/blog/introducing-changesets-simplify-project-versioning-with-semantic-releases?utm_source=chatgpt.com))。

---

## 6. 最佳实践  

1. **Conventional Commits**：统一提交格式，方便后续工具（如 Semantic Release）自动生成 Changeset  ([How I use Changesets for Releases | by Jake Ginnivan - Medium](https://jakeginnivan.medium.com/how-i-use-changesets-for-releases-a4d7dac7671a?utm_source=chatgpt.com))。  
2. **PR 验证**：在 CI 中运行 `pnpm changeset status`，检测未发布变更并提示  ([changesets/changesets: A way to manage your versioning ... - GitHub](https://github.com/changesets/changesets?utm_source=chatgpt.com))。  
3. **严格分支策略**：主干（main）只合并已通过 Review 和 CI 的 PR，发布只在 `main` 触发  ([在公司项目中使用changesets进行项目管理，提升效率 - 稀土掘金](https://juejin.cn/post/7276393533086318632?utm_source=chatgpt.com))。  
4. **文档与 Changelog 卫士**：保证 `CHANGELOG.md` 清晰，只包含重要变更，不要手动改动自动生成区块  ([Introducing Changesets: Simplify Project Versioning with Semantic ...](https://lirantal.com/blog/introducing-changesets-simplify-project-versioning-with-semantic-releases?utm_source=chatgpt.com))。  
5. **代码检查与测试覆盖**：利用 Turborepo/NX 做增量测试，保持高测试覆盖率，防止发布回归  ([使用pnpm、turborepo 构建monorepo 项目，changesets 管理日志和 ...](https://ksh7.com/posts/workspace-pnpm-turborepo-changesets/index.html?utm_source=chatgpt.com))。

---

通过以上实践，企业级团队可在 Monorepo 环境下实现**高度自动化**、**低出错率**和**可追溯**的版本发布流程，让开发者专注于业务实现，而不用操心版本管理和发布细节。