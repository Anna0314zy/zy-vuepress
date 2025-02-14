import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/node/errors.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/node/errors.html\",\"title\":\"node.js十个常见误区\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"node.js十个常见误区\",\"date\":\"2019-08-26T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"译：koala 原文地址：http://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes 原文作者：MAHMUD RIDWAN 前言 自 Node.js 面世以来，它获得了大量的赞美和批判。这种争论会一直持续，短时间内都不会结束。而在这些争论中，我们常常会忽略掉所有语言和平台都是...\"},\"headers\":[{\"level\":2,\"title\":\"错误1：阻塞事件循环\",\"slug\":\"错误1-阻塞事件循环\",\"link\":\"#错误1-阻塞事件循环\",\"children\":[]},{\"level\":2,\"title\":\"错误2：多次调用一个回调函数\",\"slug\":\"错误2-多次调用一个回调函数\",\"link\":\"#错误2-多次调用一个回调函数\",\"children\":[]},{\"level\":2,\"title\":\"错误3：深层嵌套的回调函数\",\"slug\":\"错误3-深层嵌套的回调函数\",\"link\":\"#错误3-深层嵌套的回调函数\",\"children\":[]},{\"level\":2,\"title\":\"错误4：期待回调函数同步执行\",\"slug\":\"错误4-期待回调函数同步执行\",\"link\":\"#错误4-期待回调函数同步执行\",\"children\":[]},{\"level\":2,\"title\":\"错误5：给“exports” 赋值，而不是“module.exports”\",\"slug\":\"错误5-给-exports-赋值-而不是-module-exports\",\"link\":\"#错误5-给-exports-赋值-而不是-module-exports\",\"children\":[]},{\"level\":2,\"title\":\"错误6：从回调里抛出错误\",\"slug\":\"错误6-从回调里抛出错误\",\"link\":\"#错误6-从回调里抛出错误\",\"children\":[]},{\"level\":2,\"title\":\"错误7：认为 Number 是一种整型数据格式\",\"slug\":\"错误7-认为-number-是一种整型数据格式\",\"link\":\"#错误7-认为-number-是一种整型数据格式\",\"children\":[]},{\"level\":2,\"title\":\"错误8：忽略了流式 API 的优势\",\"slug\":\"错误8-忽略了流式-api-的优势\",\"link\":\"#错误8-忽略了流式-api-的优势\",\"children\":[]},{\"level\":2,\"title\":\"错误9：出于 Debug 的目的使用 Console.log\",\"slug\":\"错误9-出于-debug-的目的使用-console-log\",\"link\":\"#错误9-出于-debug-的目的使用-console-log\",\"children\":[]},{\"level\":2,\"title\":\"错误10：不使用监控程序\",\"slug\":\"错误10-不使用监控程序\",\"link\":\"#错误10-不使用监控程序\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":13.06,\"words\":3918},\"filePathRelative\":\"posts/posts copy/node/errors.md\",\"localizedDate\":\"2019年8月26日\",\"excerpt\":\"<ul>\\n<li>译：koala</li>\\n<li>原文地址：<a href=\\\"http://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">http://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes</a></li>\\n<li>原文作者：MAHMUD RIDWAN</li>\\n</ul>\\n<p><strong>前言</strong></p>\\n<p>自 Node.js 面世以来，它获得了大量的赞美和批判。这种争论会一直持续，短时间内都不会结束。而在这些争论中，我们常常会忽略掉所有语言和平台都是基于一些核心问题来批判的，就是我们怎么去使用这些平台。无论使用 Node.js 编写可靠的代码有多难，而编写高并发代码又是多么的简单，这个平台终究是有那么一段时间了，而且被用来创建了大量的健壮而又复杂的 web 服务。这些 web 服务不仅拥有良好的扩展性，而且通过在互联网上持续的时间证明了它们的健壮性。</p>\",\"autoDesc\":true}")
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
