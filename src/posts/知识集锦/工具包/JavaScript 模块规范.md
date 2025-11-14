# JavaScript 模块规范详解

## 📋 模块规范概述

| 规范 | 全称 | 使用场景 | 特点 |
|:---|:---|:---|:---|
| **ESM** | ES Module | 现代浏览器、Node.js(14+)、构建工具 | 官方标准、静态分析、Tree-shaking |
| **CJS** | CommonJS | Node.js 环境 | 同步加载、动态导入、服务端首选 |
| **UMD** | Universal Module Definition | 兼容多种环境 | 通用格式、体积较大 |
| **IIFE** | Immediately Invoked Function Expression | 浏览器直接使用 | 全局变量、无需构建工具 |

## 🆕 ESM (ECMAScript Modules)

### 基本语法
```javascript
// 导出
export const name = 'My Module';
export function hello() { return 'Hello'; }
export default class MyClass { /* ... */ }

// 导入
import MyClass, { name, hello } from './module.js';
import * as all from './module.js';
```

### 特点
- **官方标准**：JavaScript 语言层面的模块系统
- **静态分析**：可以在编译时确定依赖关系
- **异步加载**：支持动态 import()
- **Tree-shaking友好**：支持死代码消除

### 使用场景
```html
<!-- 浏览器直接使用 -->
<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
</script>
```

```json
// package.json 声明
{
  "type": "module",
  "exports": {
    "import": "./dist/esm/index.js"
  }
}
```

## 🖥️ CJS (CommonJS)

### 基本语法
```javascript
// 导出
module.exports = { name: 'My Module' };
exports.hello = function() { return 'Hello'; };

// 导入
const myModule = require('./module');
const { hello } = require('./module');
```

### 特点
- **Node.js 默认**：Node.js 原生支持的模块系统
- **同步加载**：适合服务端文件系统
- **动态导入**：require() 可以在任何地方调用
- **运行时解析**：依赖关系在运行时确定

### 使用场景
```javascript
// Node.js 环境
const fs = require('fs');
const path = require('path');

// 条件导入
let myModule;
if (process.env.NODE_ENV === 'production') {
  myModule = require('./prod-module');
} else {
  myModule = require('./dev-module');
}
```

## 🌐 UMD (Universal Module Definition)

### 基本结构
```javascript
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD 环境 (RequireJS)
    define(['vue'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS 环境 (Node.js)
    module.exports = factory(require('vue'));
  } else {
    // 浏览器全局变量
    root.MyLib = factory(root.Vue);
  }
}(this, function (vue) {
  // 模块代码
  return { /* 你的库 */ };
}));
```

### 特点
- **通用兼容**：同时支持 AMD、CJS 和浏览器全局变量
- **体积较大**：包含多种环境适配代码
- **无需构建**：可直接在各种环境中使用

### 使用场景
```html
<!-- 浏览器全局变量 -->
<script src="https://unpkg.com/vue"></script>
<script src="./my-lib.umd.js"></script>
<script>
  const app = MyLib.createApp();
</script>
```

## 🔥 IIFE (Immediately Invoked Function Expression)

### 基本语法
```javascript
// 基本形式
(function() {
  // 模块代码
})();

// 带参数的形式
(function(global, Vue) {
  const MyLib = {
    // 你的库
  };
  
  global.MyLib = MyLib;
})(this, Vue);
```

### 特点
- **立即执行**：定义后立即执行
- **作用域隔离**：避免污染全局命名空间
- **简单直接**：无需模块加载器

### 使用场景
```html
<!-- 直接在浏览器中使用 -->
<script src="https://unpkg.com/vue"></script>
<script src="./my-lib.iife.js"></script>
<script>
  // 库已经立即执行并挂载到全局
  const app = MyLib.createApp();
</script>
```

## 🎯 NPM 包输出格式推荐

### 现代库配置
```json
{
  "name": "my-vue-library",
  "main": "./dist/index.cjs.js",           // CommonJS 版本
  "module": "./dist/index.esm.js",         // ESM 版本
  "browser": "./dist/index.umd.js",        // UMD 版本
  "types": "./dist/index.d.ts",            // TypeScript 类型
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",     // ESM
      "require": "./dist/index.cjs.js",    // CommonJS
      "browser": "./dist/index.umd.js"     // UMD
    }
  },
  "files": ["dist"]
}
```

### 构建工具配置示例
```javascript
// rollup.config.js
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'MyLib'  // 全局变量名
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'MyLib'
    }
  ]
};
```

## 📊 环境兼容性对比

| 环境 | 推荐格式 | 说明 |
|:---|:---|:---|
| **现代浏览器** | ESM | 原生支持，Tree-shaking |
| **Node.js** | CJS/ESM | Node.js 12+ 支持 ESM |
| **旧版浏览器** | UMD/IIFE | 兼容性好 |
| **AMD加载器** | UMD | RequireJS 等 |
| **打包工具** | ESM | Webpack、Rollup、Vite |
| **CDN直接使用** | IIFE/UMD | 无需构建流程 |

## 💡 最佳实践建议

### 1. 多格式输出
```bash
# 推荐输出结构
dist/
├── index.esm.js      # ESM (现代环境)
├── index.cjs.js      # CJS (Node.js)
├── index.umd.js      # UMD (浏览器兼容)
└── index.d.ts        # TypeScript 类型
```

### 2. 外部依赖处理
```javascript
// Rollup 配置外部依赖
export default {
  external: ['vue', 'lodash'], // 避免打包 peerDependencies
  // ...
};
```

### 3. 包入口声明
```json
{
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "browser": "./dist/umd/index.js"
    },
    "./style.css": {
      "import": "./dist/esm/style.css",
      "require": "./dist/cjs/style.css"
    }
  }
}
```

## 🚀 总结

- **ESM**：面向未来，现代项目首选
- **CJS**：Node.js 环境，工具链支持
- **UMD**：兼容多种环境，通用解决方案  
- **IIFE**：简单直接，浏览器快速使用

对于 Vue 组件库，推荐同时提供 **ESM**（现代构建工具）和 **UMD**（浏览器直接使用）格式，确保最佳兼容性和用户体验。