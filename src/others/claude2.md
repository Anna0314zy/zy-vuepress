很好 👍
我给你一套 **前端工程（Vue / TS）常用的 Claude Code 配置模板**。很多开发者都是从这套开始的。

我会分成 **3 个最关键部分**：

1️⃣ `CLAUDE.md` 项目规则
2️⃣ 常用 Agent Prompt
3️⃣ 自动化 Workflow

---

# 一、CLAUDE.md（最重要）

在项目根目录创建：

```
CLAUDE.md
```

Claude Code 每次运行都会读取它。

示例（前端 Vue 项目）：

```md
# Project Overview

This is a Vue 3 + TypeScript frontend project.

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia
- Vitest

## Coding Rules

- Use Composition API
- Avoid using `any`
- Prefer `const` over `let`
- Use composables for shared logic
- Keep components under 300 lines

## File Structure

src/
components/
composables/
stores/
utils/

## Testing Rules

- Use Vitest
- Each composable must have tests
- Mock API requests

## Code Style

- Use Prettier formatting
- Run ESLint before commit

## When modifying code

Claude should:

1. Follow the project architecture
2. Update related types
3. Ensure tests pass
4. Avoid breaking existing APIs
```

作用：

```text
告诉 Claude 如何写代码
```

效果会明显提升。

---

# 二、常用 Claude Code Prompt

下面这些是开发者最常用的。

---

## 1 自动修复错误

```
Fix all TypeScript errors in this repo.
Ensure types are correct and avoid using any.
```

---

## 2 自动写测试

```
Write unit tests for all composables in src/composables.

Use Vitest.
Mock network requests.
Ensure coverage is above 80%.
```

---

## 3 自动重构

```
Refactor the codebase to improve readability and maintainability.

Focus on:
- removing duplicated logic
- extracting composables
- improving TypeScript types
```

---

## 4 自动优化 Vue 组件

```
Analyze Vue components and improve them:

- move logic into composables
- reduce component size
- improve reactivity usage
```

---

## 5 自动修 lint

```
Fix all ESLint errors and formatting issues in the repository.
```

---

# 三、Agent Workflow（强烈推荐）

很多团队使用 **Agent pipeline**。

流程：

```
planner → coder → reviewer
```

---

## Step1：Planner

```
Analyze this repository and propose a plan to implement feature X.
```

Claude 会给：

```
step1
step2
step3
```

---

## Step2：Coder

```
Implement the plan step by step.
Update tests and types if needed.
```

---

## Step3：Reviewer

```
Review the code changes and suggest improvements.
Focus on performance and maintainability.
```

---

# 四、前端开发者最实用命令

在项目目录运行：

```bash
claude
```

然后可以直接说：

### 修 bug

```
Find and fix runtime errors in the whiteboard module.
```

---

### 优化逻辑

```
Optimize the whiteboard snapshot logic and avoid duplicate screenshots.
```

---

### 重构项目

```
Refactor the repo to use better TypeScript typing.
```

---

# 五、Claude Code 最强功能（很多人不知道）

Claude Code 可以：

```
修改整个 repo
```

例如：

```
Convert all axios calls to fetch API.
```

Claude 会：

* 搜索代码
* 修改多个文件
* 更新类型

这是 **Agent 编程的核心能力**。

---

# 六、前端开发最强组合（推荐）

很多工程师现在的组合是：

IDE：

* Cursor

Agent：

* Claude Code

备用：

* Visual Studio Code

工作流：

```
ChatGPT → 设计方案
Cursor → 写代码
Claude Code → 自动改 repo
```

效率非常高。

---

# 七、一个高级技巧（90%的人不知道）

在 `CLAUDE.md` 里加入：

```md
## Architecture Notes

Whiteboard module:

- snapshot logic must be debounced
- avoid multiple screenshot events
- events are dispatched via broadcast system
```

Claude 会 **理解你的系统架构**。

之后让它改代码会更准确。

---

