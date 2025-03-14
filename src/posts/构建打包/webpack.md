---
title: webpack vs vite
date: 2021-08-16
tags:
   - Javascript
---


在现代前端开发中，**Webpack** 和 **Vite** 是两种广泛使用的构建工具。它们在构建方式、性能、开发体验以及生态系统等方面存在显著差异。

**1. 构建方式：**

- **Webpack**：作为模块打包工具，Webpack 会将所有模块及其依赖关系打包成一个或多个 bundle 文件。这意味着在开发环境中，每次修改代码后，Webpack 需要重新编译整个项目，可能导致在大型项目中启动和编译速度较慢。

- **Vite**：Vite 利用浏览器对 ES Modules（ESM）的原生支持，采用即时编译的方式。它在运行时根据需要实时编译和加载模块，避免了预先打包整个项目的过程，从而大大减少了构建时间。 citeturn0search0

**2. 开发体验：**

- **Webpack**：由于需要预先打包，Webpack 的开发服务器启动时间可能较长。虽然支持热模块替换（HMR），但在大型项目中，热更新速度可能不够理想。

- **Vite**：得益于即时编译和高效的 HMR 机制，Vite 提供了更快的冷启动和热更新速度，开发者可以几乎实时地看到代码修改的效果。 citeturn0search1

**3. 生态系统：**

- **Webpack**：作为较早推出的构建工具，Webpack 拥有庞大且成熟的插件生态系统，适用于各种不同的需求。开发者可以利用丰富的插件和加载器来扩展功能，如代码分割、压缩、混淆、静态资源管理等。 citeturn0search0

- **Vite**：作为较新的工具，Vite 的生态系统相对较小，但也在不断发展。由于其开发模式和构建方式减少了对一些传统插件的需求，因此插件数量相对较少。 citeturn0search10

**4. 实际应用场景：**

- **Webpack**：适用于复杂的大型项目，特别是需要大量自定义配置和复杂构建管道的项目。其强大的插件系统和灵活性使其能够满足各种复杂需求。

- **Vite**：更适用于小到中型项目，或者需要快速开发原型和小型应用的场景。其快速的冷启动和热更新速度使其在这些场景中表现出色。 citeturn0search1

**5. 代码示例：**

以下是使用 Webpack 和 Vite 构建简单 React 应用的示例。

**使用 Webpack：**

1. **安装依赖：**

   ```bash
   npm install react react-dom
   npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
   ```

2. **配置文件：**

   - `webpack.config.js`：

     ```javascript
     const path = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/index.js',
       output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js',
       },
       module: {
         rules: [
           {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             use: {
               loader: 'babel-loader',
               options: {
                 presets: ['@babel/preset-env', '@babel/preset-react'],
               },
             },
           },
         ],
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './public/index.html',
         }),
       ],
       devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         hot: true,
       },
     };
     ```

   - `.babelrc`：

     ```json
     {
       "presets": ["@babel/preset-env", "@babel/preset-react"]
     }
     ```

3. **项目结构：**

   ```
   ├── src
   │   └── index.js
   ├── public
   │   └── index.html
   ├── webpack.config.js
   └── package.json
   ```

**使用 Vite：**

1. **初始化项目：**

   ```bash
   npm init vite@latest my-vite-app --template react
   cd my-vite-app
   npm install
   ```

2. **项目结构：**

   ```
   ├── src
   │   ├── App.jsx
   │   └── main.jsx
   ├── index.html
   └── package.json
   ```


可以看出，使用 Vite 初始化项目更加简洁，配置也更少。而 Webpack 需要手动配置打包、加载器和插件等。

**总结：**

Webpack 和 Vite 各有优势。Webpack 以其成熟的生态系统和强大的功能，适用于大型复杂项目。而 Vite 则以其快速的开发体验和简洁的配置，适用于中小型项目和需要快速迭代的场景。在选择使用哪一个工具时，应根据项目的具体需求和团队的技术栈来做出决策。 