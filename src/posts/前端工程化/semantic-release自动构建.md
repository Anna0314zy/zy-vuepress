---
title: semantic-release自动发布
tags:
   - 工程化
---

## 代码示例
```js
function getPrereleaseBranch() {
  if (!process.env.PRE_RELEASE_BRANCH) return []
  const branches = process.env.PRE_RELEASE_BRANCH.split(',')
  return branches.map(branch => ({
    name: branch,
    prerelease: true,
    channel: branch,
  }))
}

module.exports = {
  branches: ['master', ...getPrereleaseBranch()],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: process.env.NPM_PUBLISH === 'true',
        tarballDir: 'dist',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
  ],
  publish: '@semantic-release/npm',
  extends: 'semantic-release-monorepo',
}


```

这是 **semantic-release** 的配置文件，用于自动化版本管理和发布流程。让我详细解释它的作用：

## 🎯 **主要功能**

这是一个基于语义化提交（Conventional Commits）的**自动化版本发布系统**。

## 📝 **配置详解**

### **分支配置 (branches)**
```javascript
function getPrereleaseBranch() {
  if (!process.env.PRE_RELEASE_BRANCH) return []
  const branches = process.env.PRE_RELEASE_BRANCH.split(',')
  return branches.map(branch => ({
    name: branch,
    prerelease: true,    // 标记为预发布分支
    channel: branch,     // 发布通道与分支名相同
  }))
}

module.exports = {
  branches: ['master', ...getPrereleaseBranch()],
  // 支持：
  // - master: 稳定版发布
  // - 预发布分支: 如 dev、beta、next 等
}
```

### **插件流水线 (plugins)**
按顺序执行发布流程：

1. **`@semantic-release/commit-analyzer`**
   - 分析 git commit 信息
   - 根据约定式提交确定版本号变更

2. **`@semantic-release/release-notes-generator`**
   - 自动生成 CHANGELOG 内容

3. **`@semantic-release/changelog`**
   - 更新 CHANGELOG.md 文件

4. **`@semantic-release/npm`**
   ```javascript
   [
     '@semantic-release/npm',
     {
       npmPublish: process.env.NPM_PUBLISH === 'true', // 环境变量控制
       tarballDir: 'dist', // 包文件输出目录
     },
   ]
   ```

5. **`@semantic-release/git`**
   ```javascript
   [
     '@semantic-release/git',
     {
       assets: ['package.json', 'CHANGELOG.md'], // 提交的文件
       message: 'chore(release): ${nextRelease.version} [skip ci]',
     },
   ]
   ```

## 🚀 **工作流程**

### **触发条件**
通常由 CI/CD 系统在以下情况触发：
- push 到特定分支
- 合并 Pull Request
- 定时任务

### **版本号计算规则**
基于 commit 类型自动决定版本号：
- `feat:` → 次版本号 (minor) `v1.2.0`
- `fix:` → 修订号 (patch) `v1.2.1` 
- `BREAKING CHANGE:` → 主版本号 (major) `v2.0.0`

### **示例场景**
```bash
# commit 信息示例
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复登录页面样式问题"
git commit -m "feat: 新增支付接口\n\nBREAKING CHANGE: 移除旧版API"

# 自动发布：v1.1.0 → v1.2.0 → v2.0.0
```

## 🔧 **环境变量配置**

通常需要在 CI 环境中配置：
```bash
# .env 或 CI 环境变量
PRE_RELEASE_BRANCH=dev,beta,next
NPM_PUBLISH=true
GITHUB_TOKEN=ghp_xxx
NPM_TOKEN=npm_xxx
```

## 📦 **Monorepo 特殊配置**

```javascript
{
  publish: '@semantic-release/npm',
  extends: 'semantic-release-monorepo', // Monorepo 专用扩展
}
```

**Monorepo 特性**：
- 支持在多个包中独立发布
- 智能识别变更的包
- 避免无变更的包被发布

## 💡 **在项目中的实际作用**

### **传统流程**：
```bash
手动更新版本号 → 更新CHANGELOG → git tag → npm publish
```

### **使用此配置后**：
```bash
git commit -m "feat: 新功能" → 自动完成所有发布步骤
```

### **生成的文件**：
- `CHANGELOG.md` - 自动更新的变更日志
- `package.json` - 自动更新版本号
- GitHub Releases - 自动创建发布
- npm package - 自动发布到 registry

## 🛠 **典型使用场景**

```yaml
# GitHub Actions 示例
name: Release
on:
  push:
    branches: [master, dev]
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

这个配置大大简化了版本管理和发布流程，确保了版本号的语义化一致性，特别适合团队协作和持续交付环境！