import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/node-quick/node-modules.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/node-quick/node-modules.html\",\"title\":\"Node中的模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node中的模块\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"Node 中的模块 一.commonjs 规范 开发会有命名冲突 命名空间防止冲突（调用时不方便） esModule commonjs umd 统一模块 amd 模块(很少) import export 浏览器 es6 require module.exports node 使用的（node 中使用需要使用 es6 babel 编译） 1.每个 js ...\"},\"headers\":[{\"level\":2,\"title\":\"一.commonjs 规范\",\"slug\":\"一-commonjs-规范\",\"link\":\"#一-commonjs-规范\",\"children\":[]},{\"level\":2,\"title\":\"二.node 中的模块的分类\",\"slug\":\"二-node-中的模块的分类\",\"link\":\"#二-node-中的模块的分类\",\"children\":[]},{\"level\":2,\"title\":\"三.模块实现\",\"slug\":\"三-模块实现\",\"link\":\"#三-模块实现\",\"children\":[{\"level\":3,\"title\":\"3.1 默认 module.exports\",\"slug\":\"_3-1-默认-module-exports\",\"link\":\"#_3-1-默认-module-exports\",\"children\":[]},{\"level\":3,\"title\":\"3.2 查找原则\",\"slug\":\"_3-2-查找原则\",\"link\":\"#_3-2-查找原则\",\"children\":[]}]},{\"level\":2,\"title\":\"代码如何调试\",\"slug\":\"代码如何调试\",\"link\":\"#代码如何调试\",\"children\":[]},{\"level\":2,\"title\":\"四.Events 模块\",\"slug\":\"四-events-模块\",\"link\":\"#四-events-模块\",\"children\":[]}],\"readingTime\":{\"minutes\":5.03,\"words\":1508},\"filePathRelative\":\"posts/posts/node-quick/node-modules.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"\\n<h2>一.commonjs 规范</h2>\\n<p>开发会有命名冲突 命名空间防止冲突（调用时不方便）<br>\\nesModule commonjs umd 统一模块 amd 模块(很少)<br>\\nimport export 浏览器 es6<br>\\nrequire module.exports node 使用的（node 中使用需要使用 es6 babel 编译）</p>\\n<ul>\\n<li>1.每个 js 文件都是一个模块</li>\\n<li>2.模块的导出 module.exports</li>\\n<li>3.模块的导入 require</li>\\n</ul>\\n<h2>二.node 中的模块的分类</h2>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
