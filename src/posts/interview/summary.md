---
title: interview summary
date: 2022-04-19
tags:
  - 面试题
---


## 关于webpack 构建优化

**[参考文章](https://juejin.cn/post/7233298696292040741#heading-3)**

**[参考 ](https://juejin.cn/post/7221516772162289723#heading-15)**

- 配合webpack 实现路由懒加载, 也可以实现组件级的懒加载 例如 react.lazy 配合 Suspense 实现
- splitChunks 可以对js 进行代码分割 提取公共js
```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all", // 处理所有模块
      minSize: 20000, // 至少 20KB 才拆分
      maxSize: 200000, // 避免单个 chunk 过大
      minChunks: 1, // 至少被引用 1 次
      automaticNameDelimiter: "-", // chunk 命名分隔符
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,  // 专门提取 react 和 react-dom
          name: "react-vendor",  // 提取的文件命名为 react-vendor.js  也可以 [name].[hash] 命名
          chunks: "all",
          priority: 10, // 优先级设置为高
        },
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,  // 提取 lodash
          name: "lodash",  // 提取的文件命名为 lodash.js
          chunks: "all",
        },
        common: {
          name: "[name].[hash]",  // 使用 `[hash]` 生成唯一的文件名
          minChunks: 2,           // 至少 2 个模块引用时拆分
          chunks: "all",          // 拆分所有类型的模块
        },
      },
    },
  },
};


```
- mini-css-extract-plugin 实现css 按需加载
- cdn 加速加载,对一些通用的第三方包可以通过cdn 加载
- 压缩代码 Terser
- 压缩图片 file-loader
- tree-shaking  lodash 是commonjs 可通过 babel-plugin-lodash 来实现类似的效果 
- DllPlugin  对有些包单独构建
- IgnorePlugin 剔除某些包 典型的例子是 moment 这个包，一般情况下在构建时会自动引入其 locale 目录下的多国语言包

Webpack 提供的 IgnorePlugin ，即可在「构建模块时」直接剔除那些需要被排除的模块，从而提升构建模块的速度，并减少产物体积。

- 持久化文件系统缓存（Persistent Caching） webpack5
- Loader 缓存  输出文件名的缓存策略

---

- 打包速度分析  speed-measure-webpack-plugin
- 打包体积分析 webpack-bundle-analyzer


下面提供一个较为完整的 webpack 5 配置示例，该配置包含了多项优化措施，每一部分都附有注释说明：

---

## webpack5

```js
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. 设置 production 模式，自动开启 tree shaking、压缩等优化
  mode: 'production',

  // 2. 多入口配置
  entry: {
    main: './src/index.js',
    // 如果有多个入口页面，可继续添加，如：
    // admin: './src/admin.js'
  },

  // 3. 输出配置，使用 contenthash 确保缓存更新
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 构建前清理 dist 目录
  },

  // 4. 持久化文件系统缓存，加速二次构建
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 当配置文件发生变化时重新构建 __filename 是一个内置的全局变量，它由 Node.js 模块系统自动提供，代表当前模块的绝对文件路径。也就是说，它的值由 Node.js 运行时决定，而不是你手动设置的。
    },
  },

  // 5. 开启 WebAssembly 支持（实验性）
  experiments: {
    asyncWebAssembly: true,
  },

  // 6. 模块规则：处理静态资源等
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset', // 自动在内联和独立文件之间进行选择
      },
      // 其他 loader 配置，如 Babel 处理 JS/JSX 文件
    ],
  },

  // 7. 移除 Node.js 内置模块 polyfills，减小打包体积
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },

  // 8. 优化配置：Tree Shaking 与 SplitChunks
  optimization: {
    // 开启未使用代码剔除，production 模式下默认启用
    usedExports: true,
    splitChunks: {
      chunks: 'all', // 同步与异步模块均拆分
      cacheGroups: {
        // 提取 node_modules 中的第三方依赖
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        // 提取多个入口共享的代码
        common: {
          name: 'common',
          minChunks: 2, // 至少两个入口中使用
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
    },
  },

  // 9. 插件配置
  plugins: [
    // Module Federation 用于实现微前端架构
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        // 暴露组件供其他应用使用
        './Button': './src/Button',
      },
      remotes: {
        // 引用其他远程模块
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        // 共享依赖，保证只有一个 React 实例
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),

    // HtmlWebpackPlugin 自动生成 HTML 文件并引入打包后的资源
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

---

### 说明

1. **持久化缓存**  
   通过 `cache.type: 'filesystem'`，Webpack 会将构建结果存储到磁盘上，后续构建可以利用缓存加速编译过程。

2. **Module Federation**  
   使用 `ModuleFederationPlugin`，可以实现微前端架构，在运行时共享模块或组件。示例中既暴露了本地组件，也引用了远程模块。

3. **内置 Asset Modules**  
   使用 `type: 'asset'` 替代了传统的 file-loader/url-loader，能根据文件大小自动决定是否内联资源，简化了配置。

4. **Tree Shaking 与 SplitChunks**  
   在 production 模式下自动启用 tree shaking。同时，通过 `splitChunks.cacheGroups` 配置提取第三方依赖（vendor）和多个入口共享的代码（common），避免重复加载。

5. **移除 Node.js Polyfills**  
   通过 `resolve.fallback` 设置为 `false`，移除不需要在浏览器中运行的 Node 内置模块的 polyfills，从而减小打包体积。

6. **WebAssembly 支持**  
   开启 `experiments.asyncWebAssembly` 后，Webpack 可以直接处理 `.wasm` 文件，方便在前端项目中使用 WebAssembly。

以上代码示例展示了 Webpack 5 在多入口配置、持久化缓存、模块联邦、资源处理、代码拆分等方面的具体优化措施，能够帮助你构建高效、模块化且易于维护的项目。  

