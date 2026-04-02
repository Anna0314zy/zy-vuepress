你这份内容其实已经比较完整了，我帮你 **整理成一版更清晰、结构更强、适合文档或培训讲解的版本**。我会做三件事：

* ① **优化结构**（让逻辑更清楚）
* ② **补充关键解释**（避免读者理解困难）
* ③ **保持技术准确性**

下面是 **整理后的版本（推荐文档结构）**👇

---

# Claude Code Hooks 机制说明

## 一、Hooks 概述

### 1. 什么是 Hooks

**Hooks（钩子）** 是 Claude Code 提供的一种 **基于 Event Bus 的拦截与自动化机制**。

它允许开发者在 Claude Code 的关键生命周期节点上挂载自定义逻辑，实现 **安全控制、质量检查、自动化流程** 等能力。

简单理解：

```
事件(Event) 发生
      ↓
触发 Hook
      ↓
执行处理程序
      ↓
返回结果（允许 / 阻断 / 修改）
```

---

### 2. 核心特性

Hooks 具备以下核心能力：

#### （1）事件驱动

Hooks 可以绑定 Claude Code 的关键生命周期事件，例如：

* 会话启动
* 工具执行前
* 工具执行后

例如：

```
PreToolUse
```

表示 **在工具执行之前触发 Hook**。

---

#### （2）双形态支持

Hooks 支持两种主要执行模式：

**命令型（Command Hook）**

* 执行 Shell 脚本
* 速度快
* 逻辑确定

适合：

* 路径校验
* 命令过滤
* 规则检查

示例：

```
block rm -rf
检查代码格式
```

---

**智能型（LLM Hook）**

通过大模型进行判断。

包括：

* Prompt Hook
* Agent Hook

适合：

* 复杂规则判断
* 安全策略
* 代码审计

---

#### （3）分层配置

Hooks 支持多层配置：

| 层级   | 作用    |
| ---- | ----- |
| 用户级  | 跨项目配置 |
| 项目级  | 团队共享  |
| CLI  | 命令行配置 |
| 托管配置 | 企业级管理 |

示例：

```
~/.claude/settings.json
```

---

#### （4）可控决策

Hook 可以对事件做出三种决策：

| 决策     | 作用   |
| ------ | ---- |
| allow  | 允许执行 |
| block  | 阻断执行 |
| modify | 修改参数 |

---

### 3. Hooks 核心组成

Hooks 机制由三个核心部分组成：

```
Event + Matcher + Hook
```

| 组件      | 作用   |
| ------- | ---- |
| Event   | 触发时机 |
| Matcher | 过滤条件 |
| Hook    | 执行逻辑 |

结构示意：

```
Event
  └── Matcher
        └── Hook
```

---

### 4. 生命周期

Hooks 会在 Claude Code 的 **会话生命周期节点**触发。

典型生命周期：

```
SessionStart
     ↓
UserPrompt
     ↓
PreToolUse
     ↓
ToolUse
     ↓
PostToolUse
```

---

## 二、Hooks 类型

Claude Code 提供 **四种 Hook 类型**：

| 类型           | 执行方式     | 适用场景 |
| ------------ | -------- | ---- |
| Command Hook | Shell 命令 | 简单规则 |
| HTTP Hook    | HTTP 请求  | 外部服务 |
| Prompt Hook  | LLM 判断   | 复杂逻辑 |
| Agent Hook   | LLM + 工具 | 深度分析 |

---

### 1. Command Hook

通过执行 Shell 命令实现。

特点：

* 执行速度快
* 确定性强
* 无额外成本

示例：

```json
{
  "type": "command",
  "command": ".claude/hooks/block-rm.sh"
}
```

适用场景：

* 禁止危险命令
* 检查文件路径
* 代码格式检查

---

### 2. HTTP Hook

通过 HTTP 请求调用外部服务。

Claude Code 会把 **事件 JSON POST 到指定地址**。

示例：

```json
{
  "type": "http",
  "url": "https://hooks.example.com/validate"
}
```

适用场景：

* 云函数
* 企业审计
* 远程策略中心

---

### 3. Prompt Hook

通过 **LLM 提示词**判断。

示例：

```
判断当前操作是否违反代码规范
如果违反返回 block
```

特点：

* 理解复杂上下文
* 灵活规则
* 易维护

适合：

* 安全审计
* 复杂规则
* 质量门禁

---

### 4. Agent Hook

Agent Hook 是 Prompt Hook 的 **增强版本**。

它可以：

* 读取文件
* 搜索代码
* 使用工具
* 多步骤推理

适合：

* 深度代码审查
* 安全扫描
* 项目规则验证

---

## 三、Hooks 配置结构

Hooks 配置采用 **三层嵌套结构**：

```
hooks
 └── event
      └── matcher
           └── hook
```

示例：

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/block-rm.sh"
          }
        ]
      }
    ]
  }
}
```

---

### 1. Event（事件）

事件定义 Hook 的触发时机。

示例：

```
PreToolUse
```

表示：

**在工具执行前触发 Hook**

---

### 2. Matcher（匹配器）

Matcher 用于 **进一步限制 Hook 触发范围**。

例如：

```
matcher: "Bash"
```

表示：

只在 **Bash 工具执行时触发 Hook**。

Matcher 支持：

* 正则表达式
* 精确匹配

示例：

```
mcp__github__search_repositories
```

或者：

```
mcp__.*__write.*
```

---

### 3. Hook（处理程序）

Hook 定义 **具体执行逻辑**。

例如：

```json
{
  "type": "command",
  "command": ".claude/hooks/block-rm.sh"
}
```

---

## 四、Hooks 配置位置

Hooks 可以配置在多个位置：

| 位置  | 说明                      |
| --- | ----------------------- |
| 用户级 | ~/.claude/settings.json |
| 项目级 | 项目配置                    |
| CLI | 命令行                     |
| 托管  | 企业统一管理                  |

---

### 配置优先级

Hooks 的优先级如下：

```
Managed
   ↓
CLI
   ↓
Local
   ↓
Project
   ↓
User
   ↓
Plugin
   ↓
Skill / Agent
```

优先级高的配置 **不会被低优先级覆盖**。

---

### 合并策略

Hooks 采用：

**追加式合并（Append Merge）**

而不是覆盖。

也就是说：

不同来源的 Hooks 会 **同时生效**。

---

## 五、安全控制

Claude Code 提供多种 Hook 安全控制能力。

---

### 1. 禁用 Hooks

可以在配置中禁用全部 Hooks：

```json
{
  "disableAllHooks": true
}
```

---

### 2. 只允许托管 Hooks

企业环境可限制：

只允许 Managed Hooks。

```json
{
  "allowManagedHooksOnly": true
}
```

---

### 3. HTTP Hook URL 限制

可以限制 HTTP Hook 访问的地址：

```json
{
  "allowedHttpHookUrls": [
    "https://hooks.example.com/*",
    "http://localhost:*"
  ]
}
```

---

### 4. 环境变量限制

限制 HTTP Hook 可使用的环境变量：

```json
{
  "httpHookAllowedEnvVars": [
    "MY_TOKEN",
    "HOOK_SECRET"
  ]
}
```

---

## 六、Hook 输入数据

当 Hook 触发时，Claude Code 会传入 **结构化 JSON 数据**。

示例：

```json
{
  "session_id": "abc123",
  "transcript_path": "/home/user/.claude/projects/transcript.jsonl",
  "cwd": "/home/user/my-project",
  "permission_mode": "default",
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": {
    "command": "npm test"
  }
}
```

---

### 常见字段

| 字段              | 含义     |
| --------------- | ------ |
| session_id      | 会话 ID  |
| cwd             | 当前项目目录 |
| hook_event_name | 事件名称   |
| tool_name       | 工具名称   |
| tool_input      | 工具输入   |

---

### 事件特定字段

不同事件会提供不同字段。

例如：

**SessionStart**

```json
{
  "source": "cli",
  "model": "claude"
}
```

---

## 七、Hooks 核心价值

Hooks 的价值主要体现在四个方面：

### 1 安全防护

例如：

```
禁止 rm -rf
限制访问敏感文件
```

---

### 2 质量保障

例如：

```
强制代码规范
检查测试覆盖率
```

---

### 3 合规审计

例如：

```
记录操作日志
生成审计记录
```

---

### 4 自动化流程

例如：

```
自动运行测试
自动格式化代码
自动提交 CI
```

---

✅ **一句话总结 Hooks**

> Hooks 是 Claude Code 的事件驱动自动化系统，用于在关键生命周期节点执行安全、质量和流程控制逻辑。

---

