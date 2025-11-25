

---

# 📘 **CRACO 全面解析文档**

---

# 1. 为什么会出现 CRACO？**Create React App Configuration Override **

## 🎯 背景

早期很多团队使用 **Create React App（CRA）** 来快速创建 React 应用。

CRA 的特点：

* 快速
* 不用配置 webpack/babel
* 开箱即用

但 CRA 的一个重大限制：

> **不允许你修改 webpack 配置。**

CRA 通过“黑盒”方式屏蔽所有 webpack 文件，无法直接定制。

如果你要改 webpack，就必须：

### ❌ 执行 `npm run eject`

这会把 CRA 内部的所有 webpack 配置暴露出来（几百行），然后：

* 无法回退
* 项目变复杂
* 维护困难
* 无法继续享受 CRA 的更新

于是 CRACO 出现了。

---

# 2. CRACO 是什么？

> **CRACO 是一个用来在不 eject 的情况下，扩展/覆盖 CRA 内置 webpack 配置的工具。**

它的全称是：

### **C**reate

### **R**eact

### **A**pp

### **C**onfiguration

### **O**verride

本质：
👉 **一个 webpack 配置 override 层**

CRACO 的目标就是：

> **“让 CRA 变得可配置，不需要 eject。”**

---

# 3. CRACO 解决了什么问题？

CRACO 提供一个 `craco.config.js` 文件，你可以在里面做很多 CRA 不允许你做的事，例如：

## ✔️ 3.1 修改 webpack 配置

比如添加 alias：

```js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

## ✔️ 3.2 添加 Less、Sass 支持

```js
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `$primaryColor: #ff0000;`
      }
    }
  }
}
```

## ✔️ 3.3 覆盖 babel 配置

```js
module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  }
};
```

## ✔️ 3.4 修改 devServer 配置

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}
```

## ✔️ 3.5 修改 eslint 规则

```js
module.exports = {
  eslint: {
    enable: false
  }
};
```

这些 CRA 原本都**不允许你配置**。

---

# 4. CRACO 的工作原理（必须理解）

CRA 自带 `react-scripts` 包，里面封装了 webpack 配置。

当你运行：

```
npm start
npm build
```

CRA 实际执行的是：

```
react-scripts start
react-scripts build
```

而 **CRACO 替换了 react-scripts 的执行路径**：

你会把 `package.json` 改成：

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

**CRACO 会：**

1. 读取 CRA 内置 webpack 配置
2. 深度 merge 你的配置
3. 返回合并后的 webpack 配置
4. 由 craco 启动 webpack

所以 CRACO 不是一个独立打包器，它只是 CRA 的“增强工具”。

---

# 5. CRACO 的典型配置示例（最全）

下面是一个包含 90% 项目需要的 CRACO 配置：

```js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // 可直接操作 webpackConfig
      webpackConfig.output.publicPath = '/';
      return webpackConfig;
    }
  },

  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }]
    ]
  },

  style: {
    sass: {
      loaderOptions: {
        additionalData: `$primaryColor: #1d4ed8;`
      }
    }
  },

  devServer: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  },

  eslint: {
    enable: false
  }
};
```

---

# 6. 使用 CRACO 的真实理由

## ⭕ 你必须使用 CRACO 的场景：

### ✔ 使用 **装饰器**（decorators）

CRA 默认不支持，你必须修改 babel 配置（decorate 实现依赖 babel）

### ✔ 添加 alias（`@` -> src）

CRA 也不支持。

### ✔ 覆盖 webpack loader（例如处理 svg、less）

必需 CRACO。

### ✔ 需要改变 devServer 配置

例如添加代理。

---

# 7. CRACO 是否已经过时？

答案是 **是的，逐渐过时了。**

因为：

* CRA 已经停止维护（2022 年后不再更新）
* 前端主流已全面迁移：Webpack → Vite
* Vite 天生支持配置，无需 CRACO 这种 workaround
* 新项目基本不会再使用 CRA

CRACO 并不是坏，只是 CRA 已经过气。

➡ 如果你的项目是老项目 —— CRACO 是最好的解决方案
➡ 如果是新项目 —— 推荐直接用 **Vite**，不用 CRA，不用 CRACO

---

# 8. CRACO 的替代品（现代方案）

| 工具               | 说明             |
| ---------------- | -------------- |
| **Vite**         | 新时代标准，极速构建     |
| **Next.js**      | 更完整的 React 体系  |
| **RSpack（京东出品）** | webpack 兼容但速度快 |
| **Parcel**       | 0 配置构建方案       |

如果今天再做新项目：

> 100% 不再使用 CRA
> 100% 不再需要 CRACO

---

# 9. 是否应该从 CRA + CRACO 迁移？

如果你对项目生命周期评估后，YES → 推荐迁移顺序：

1. CRA → Vite
2. 替换 webpack 配置（如 less/alias）
3. 逐步适配 TS
4. 删除 CRACO
5. 删除 react-scripts

迁移成本通常：

* 小型项目：1 天
* 中型项目：2~5 天
* 大型项目：1～3 周

---

# 10. 最终总结

> **CRACO 是 CRA 的补丁工具，用来修改 CRA 被封闭起来的 webpack 配置。**
> **只适用于 CRA，不适用于 Vite 或其他工具。**

优点：

* 不 eject 也能改 webpack
* 配置简单
* 社区稳定

缺点：

* CRA 已经过时
* 和现代构建工具相比功能落后
* 不能解决 CRA 性能瓶颈
* CRACO 本身也很难维护

如果你在维护老 CRA 项目：
✔ CRACO 是最佳选项

如果你要做新项目：
❌ 不应该使用 CRA
✔ 推荐 Vite / Next.js

---