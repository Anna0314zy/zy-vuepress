import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/javascript/scoped.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/javascript/scoped.html\",\"title\":\"javascript中作用域与作用域链\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"javascript中作用域与作用域链\",\"date\":\"2019-06-27T00:00:00.000Z\",\"tags\":[\"Javascript\"],\"gitInclude\":[],\"description\":\"快速导航 1.什么是作用域 2.JavaScript中的作用域 2.1全局作用域 2.2局部作用域 3.作用域链 JavaScript是如何执行的？ 作用域链概念 找 过程LHS和RHS查询特殊说明 作用域链总结 1.什么是作用域 作用域是你的代码在运行时,某些特定部分中的变量,函数和对象的可访问性。换句话说，作用域决定了变量与函数的可访问范围，即作用...\"},\"headers\":[{\"level\":2,\"title\":\"快速导航\",\"slug\":\"快速导航\",\"link\":\"#快速导航\",\"children\":[]},{\"level\":2,\"title\":\"1.什么是作用域\",\"slug\":\"_1-什么是作用域\",\"link\":\"#_1-什么是作用域\",\"children\":[]},{\"level\":2,\"title\":\"2.JavaScript中的作用域\",\"slug\":\"_2-javascript中的作用域\",\"link\":\"#_2-javascript中的作用域\",\"children\":[{\"level\":3,\"title\":\"2.1全局作用域\",\"slug\":\"_2-1全局作用域\",\"link\":\"#_2-1全局作用域\",\"children\":[]},{\"level\":3,\"title\":\"2.2局部作用域\",\"slug\":\"_2-2局部作用域\",\"link\":\"#_2-2局部作用域\",\"children\":[]}]},{\"level\":2,\"title\":\"3.作用域链\",\"slug\":\"_3-作用域链\",\"link\":\"#_3-作用域链\",\"children\":[{\"level\":3,\"title\":\"3.1JavaScript是如何执行的？\",\"slug\":\"_3-1javascript是如何执行的\",\"link\":\"#_3-1javascript是如何执行的\",\"children\":[]},{\"level\":3,\"title\":\"3.2作用域链概念\",\"slug\":\"_3-2作用域链概念\",\"link\":\"#_3-2作用域链概念\",\"children\":[]},{\"level\":3,\"title\":\"3.3找过程LHS和RHS查询特殊说明\",\"slug\":\"_3-3找过程lhs和rhs查询特殊说明\",\"link\":\"#_3-3找过程lhs和rhs查询特殊说明\",\"children\":[]},{\"level\":3,\"title\":\"3.4作用域链总结\",\"slug\":\"_3-4作用域链总结\",\"link\":\"#_3-4作用域链总结\",\"children\":[]}]}],\"readingTime\":{\"minutes\":11.31,\"words\":3392},\"filePathRelative\":\"posts/posts/javascript/scoped.md\",\"localizedDate\":\"2019年6月27日\",\"excerpt\":\"<h2>快速导航</h2>\\n<ul>\\n<li><a href=\\\"#_1%E4%BB%80%E4%B9%88%E6%98%AF%E4%BD%9C%E7%94%A8%E5%9F%9F\\\">1.什么是作用域</a></li>\\n<li><a href=\\\"#_2JavaScript%E4%B8%AD%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F\\\">2.JavaScript中的作用域</a>\\n<ul>\\n<li><a href=\\\"#_21%E5%85%A8%E5%B1%80%E4%BD%9C%E7%94%A8%E5%9F%9F\\\">2.1全局作用域</a></li>\\n<li><a href=\\\"#_22%E5%B1%80%E9%83%A8%E4%BD%9C%E7%94%A8%E5%9F%9F\\\">2.2局部作用域</a></li>\\n</ul>\\n</li>\\n<li><a href=\\\"#_3%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE\\\">3.作用域链</a>\\n<ul>\\n<li><a href=\\\"#_31JavaScript%E6%98%AF%E5%A6%82%E4%BD%95%E6%89%A7%E8%A1%8C%E7%9A%84%EF%BC%9F\\\">JavaScript是如何执行的？</a></li>\\n<li><a href=\\\"#_32%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E6%A6%82%E5%BF%B5\\\">作用域链概念</a></li>\\n<li><a href=\\\"#_33%E6%89%BE%E8%BF%87%E7%A8%8BLHS%E5%92%8CRHS%E6%9F%A5%E8%AF%A2%E7%89%B9%E6%AE%8A%E8%AF%B4%E6%98%8E\\\"><code>找</code> 过程LHS和RHS查询特殊说明</a></li>\\n<li><a href=\\\"#_34%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E6%80%BB%E7%BB%93\\\">作用域链总结</a></li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
