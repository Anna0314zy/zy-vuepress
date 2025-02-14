import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/node/AsyncIO.html.vue"
const data = JSON.parse("{\"path\":\"/posts/node/AsyncIO.html\",\"title\":\"Node 与底层之间如何执行异步 I/O 调用\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Node 与底层之间如何执行异步 I/O 调用\",\"date\":\"2020-01-09T00:00:00.000Z\",\"tags\":[\"Node.js\",\"异步I/O\"],\"gitInclude\":[],\"description\":\"本文你能学到： Node.js 与底层之间是如何执行异步I/O调用的？和事件循环怎么联系上的呢？ 为什么说 Node 高性能，Node 的异步I/O 对高性能助力了什么？ Node 的事件循环，你对事件怎么理解？ 看完本文后，你应该能更好的去理解事件循环，知道事件是怎么来的，Node 究竟执行异步I/O调用。如果面试官再问事件循环还有Node与底层之间...\"},\"headers\":[{\"level\":2,\"title\":\"理解本文先要学习的几个概念\",\"slug\":\"理解本文先要学习的几个概念\",\"link\":\"#理解本文先要学习的几个概念\",\"children\":[{\"level\":3,\"title\":\"Node.js 模块分类\",\"slug\":\"node-js-模块分类\",\"link\":\"#node-js-模块分类\",\"children\":[]},{\"level\":3,\"title\":\"libuv\",\"slug\":\"libuv\",\"link\":\"#libuv\",\"children\":[]},{\"level\":3,\"title\":\"IOCP\",\"slug\":\"iocp\",\"link\":\"#iocp\",\"children\":[]},{\"level\":3,\"title\":\"线程池\",\"slug\":\"线程池\",\"link\":\"#线程池\",\"children\":[]}]},{\"level\":2,\"title\":\"Node 与底层之间的异步I/O调用流程\",\"slug\":\"node-与底层之间的异步i-o调用流程\",\"link\":\"#node-与底层之间的异步i-o调用流程\",\"children\":[{\"level\":3,\"title\":\"事件循环\",\"slug\":\"事件循环\",\"link\":\"#事件循环\",\"children\":[]},{\"level\":3,\"title\":\"底层调用与事件产生\",\"slug\":\"底层调用与事件产生\",\"link\":\"#底层调用与事件产生\",\"children\":[]}]},{\"level\":2,\"title\":\"异步 I/O 助力 Node.js 高性能\",\"slug\":\"异步-i-o-助力-node-js-高性能\",\"link\":\"#异步-i-o-助力-node-js-高性能\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"link\":\"#参考\",\"children\":[]}],\"readingTime\":{\"minutes\":8.43,\"words\":2528},\"filePathRelative\":\"posts/node/AsyncIO.md\",\"localizedDate\":\"January 9, 2020\",\"excerpt\":\"\\n<p>本文你能学到：</p>\\n<ul>\\n<li>Node.js 与底层之间是如何执行异步I/O调用的？和事件循环怎么联系上的呢？</li>\\n<li>为什么说 Node 高性能，Node 的异步I/O 对高性能助力了什么？</li>\\n<li>Node 的事件循环，你对事件怎么理解？</li>\\n</ul>\\n<blockquote>\\n<p>看完本文后，你应该能更好的去理解事件循环，知道事件是怎么来的，Node 究竟执行异步I/O调用。如果面试官再问事件循环还有Node与底层之间如何执行异步I/O，我觉得你把本文的流程说清楚，应该能加分！本文对事件循环中的具体步骤没有详细讲解，每个步骤看官方文档更佳。</p>\\n</blockquote>\",\"autoDesc\":true}")
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
