---
title: monorepo
tags:
   - 工程化
---


## 参考

- [pnpm + monorepo + changeset实现多包管理和发布](https://juejin.cn/post/7181720787400228925)

## Turborepo

子包 libs/component ，但是下次 libs/component 没有代码改动，如何跳过这部分前置依赖的构建？

此时推荐你使用 [Turborepo](https://turborepo.com/docs) 来做 monorepo 构建方案，具体使用方法请参见 官方文档 和 examples 。

注：如果在 CI 中构建，同样需要容器支持恢复上次的 turbo 缓存，可以通过 --cache-dir 选项更改缓存位置。

---
#  monorepo（多包仓库）里子包依赖管理机制


# 1️⃣ Monorepo 结构示例

假设项目结构如下：

```
my-monorepo/
├─ package.json            <- 根 package.json
├─ pnpm-workspace.yaml     <- workspace 配置
├─ node_modules/           <- 根 node_modules
├─ apps/
│  ├─ react_editor/
│  │   └─ package.json
│  └─ editor/
│     └─ package.json
└─ packages/
   ├─ class-bridge/
   │   └─ package.json
   └─ game-sdk/
       └─ package.json
```

* **apps/**：前端应用
* **packages/**：共享库
* **根 package.json**：全局依赖、工具依赖（vite, typescript, eslint…）

---

# 2️⃣ 子包依赖管理规则

### 2.1 声明依赖

* **子包自己的依赖**：写在 `apps/react_editor/package.json` 或 `packages/game-sdk/package.json`
* **全局工具依赖**：可以放在根 package.json，例如 vite、typescript
* **共享库依赖**：放在 packages 下的子包 package.json

---

### 2.2 安装机制（pnpm 默认 hoist）

1. 根目录执行 `pnpm install`
2. pnpm 会遍历所有 workspace 子包
3. 所有依赖尽量 **安装到根 node_modules**（hoist）
4. 子包的 node_modules 通常是空的（除非你设置 isolated linker）
5. 依赖解析规则：

* **子包依赖** → 子包 package.json 声明的依赖
* **全局依赖 / hoisted** → 根 node_modules 可以被所有子包共享
* **子包之间依赖** → workspace 内部引用时，可以直接 import（pnpm 自动链接）

---

# 3️⃣ 子包之间的依赖

假设 `apps/react_editor` 依赖 `packages/game-sdk`：

```json
// apps/react_editor/package.json
{
  "dependencies": {
    "game-sdk": "workspace:*"
  }
}
```

* `"workspace:*"` → 表示依赖 **monorepo 内的子包**
* pnpm 会 **建立 symlink**，把 `node_modules/game-sdk` 链接到 `packages/game-sdk`
* **本地开发时修改 packages/game-sdk 会立即反映在 react_editor**
* 安装命令仍然在根目录执行：

```bash
pnpm install
```

---

# 4️⃣ 查找依赖的方式

### 4.1 全局依赖

* 根 node_modules 里的依赖
* 子包可以直接引用，例如 vite、typescript

```ts
// apps/react_editor/src/main.tsx
import React from "react";   // 根 node_modules/react
import { Button } from "@stars/class-bridge";  // workspace 子包
```

### 4.2 子包依赖

* workspace 内部子包，通过 **workspace:*** 或具体版本声明
* pnpm 会创建 symlink，让子包能直接 import

```ts
import { initBridge } from "class-bridge";  // class-bridge 来自 packages/class-bridge
```

* 这个依赖不需要发布到 npm 就可以被其他子包使用
* pnpm 会在根 node_modules 中建立指向 packages 的软链接

---

# 5️⃣ 依赖解析规则（从内到外）

1. **子包自己声明的依赖** → 首先查找本地 node_modules（如果 isolated）
2. **hoisted 依赖** → 根 node_modules
3. **workspace symlink** → 内部包
4. **node_modules 查找顺序** → 符合 Node.js 模块解析机制

---

# 6️⃣ 优点

1. **统一版本管理** → 避免多个版本冲突
2. **共享 node_modules** → 节省磁盘空间
3. **子包开发即时可用** → 修改共享库，应用立即生效
4. **可以单独发布或整体管理** → 灵活

---

# 7️⃣ 小结

| 类型       | 放置位置                      | 安装方式                            | 访问方式             |
| -------- | ------------------------- | ------------------------------- | ---------------- |
| 根工具依赖    | 根 package.json            | 根目录 pnpm install                | 子包直接 import      |
| 子包自身依赖   | 子包 package.json           | 根目录 pnpm install                | 子包 import        |
| 子包间依赖    | workspace 子包 package.json | root pnpm install + workspace:* | symlink + import |
| 外部 npm 库 | 子包或根 package.json         | pnpm install                    | 子包 import        |

> ⚠️ **关键点**：pnpm workspace 会把依赖 hoist 到根目录，同时内部子包通过 symlink 互相引用，这就是 monorepo 的核心管理机制。

