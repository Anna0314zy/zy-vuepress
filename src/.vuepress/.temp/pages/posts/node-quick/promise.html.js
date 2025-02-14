import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/node-quick/promise.html.vue"
const data = JSON.parse("{\"path\":\"/posts/node-quick/promise.html\",\"title\":\"从零开始，手写完整的Promise原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"从零开始，手写完整的Promise原理\",\"date\":\"2020-12-30T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"从零开始，手写完整的 Promise 原理 目标 掌握高阶函数的使用，使用高阶函数解决异步问题。 掌握发布订阅模式和观察者模式 掌握 promise 核心应用，使用 promise 解决异步编程问题 实现一个完整的 promise 库 扩展 promise 中常见方法 all,race,finally... async await 实现原理 promi...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/posts/node-quick/promise.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的基地\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"从零开始，手写完整的Promise原理\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"从零开始，手写完整的 Promise 原理 目标 掌握高阶函数的使用，使用高阶函数解决异步问题。 掌握发布订阅模式和观察者模式 掌握 promise 核心应用，使用 promise 解决异步编程问题 实现一个完整的 promise 库 扩展 promise 中常见方法 all,race,finally... async await 实现原理 promi...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Node.js\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-30T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"从零开始，手写完整的Promise原理\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-12-30T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mrs.Zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"目标\",\"slug\":\"目标\",\"link\":\"#目标\",\"children\":[]},{\"level\":2,\"title\":\"高阶函数\",\"slug\":\"高阶函数\",\"link\":\"#高阶函数\",\"children\":[{\"level\":3,\"title\":\"before 函数\",\"slug\":\"before-函数\",\"link\":\"#before-函数\",\"children\":[]},{\"level\":3,\"title\":\"类型检测\",\"slug\":\"类型检测\",\"link\":\"#类型检测\",\"children\":[]},{\"level\":3,\"title\":\"柯里化函数\",\"slug\":\"柯里化函数\",\"link\":\"#柯里化函数\",\"children\":[]},{\"level\":3,\"title\":\"发布订阅模式\",\"slug\":\"发布订阅模式\",\"link\":\"#发布订阅模式\",\"children\":[]},{\"level\":3,\"title\":\"观察者模式\",\"slug\":\"观察者模式\",\"link\":\"#观察者模式\",\"children\":[]}]},{\"level\":2,\"title\":\"promise 解决了哪些问题\",\"slug\":\"promise-解决了哪些问题\",\"link\":\"#promise-解决了哪些问题\",\"children\":[]},{\"level\":2,\"title\":\"promise 详解 写作思路\",\"slug\":\"promise-详解-写作思路\",\"link\":\"#promise-详解-写作思路\",\"children\":[{\"level\":3,\"title\":\"基础 promise\",\"slug\":\"基础-promise\",\"link\":\"#基础-promise\",\"children\":[]},{\"level\":3,\"title\":\"实现链式调用\",\"slug\":\"实现链式调用\",\"link\":\"#实现链式调用\",\"children\":[]},{\"level\":3,\"title\":\"onfulfilled, onrejected 不是必填\",\"slug\":\"onfulfilled-onrejected-不是必填\",\"link\":\"#onfulfilled-onrejected-不是必填\",\"children\":[]},{\"level\":3,\"title\":\"测试 promise\",\"slug\":\"测试-promise\",\"link\":\"#测试-promise\",\"children\":[]},{\"level\":3,\"title\":\"catch\",\"slug\":\"catch\",\"link\":\"#catch\",\"children\":[]},{\"level\":3,\"title\":\"Promise.resolve()\",\"slug\":\"promise-resolve\",\"link\":\"#promise-resolve\",\"children\":[]},{\"level\":3,\"title\":\"Promise.reject\",\"slug\":\"promise-reject\",\"link\":\"#promise-reject\",\"children\":[]},{\"level\":3,\"title\":\"Promise.all\",\"slug\":\"promise-all\",\"link\":\"#promise-all\",\"children\":[]},{\"level\":3,\"title\":\"promise.finally\",\"slug\":\"promise-finally\",\"link\":\"#promise-finally\",\"children\":[]},{\"level\":3,\"title\":\"promise.race\",\"slug\":\"promise-race\",\"link\":\"#promise-race\",\"children\":[]},{\"level\":3,\"title\":\"Promise 链条如何中断-超时中断\",\"slug\":\"promise-链条如何中断-超时中断\",\"link\":\"#promise-链条如何中断-超时中断\",\"children\":[]}]},{\"level\":2,\"title\":\"Promise 在 node 里的运用\",\"slug\":\"promise-在-node-里的运用\",\"link\":\"#promise-在-node-里的运用\",\"children\":[{\"level\":3,\"title\":\"promisify\",\"slug\":\"promisify\",\"link\":\"#promisify\",\"children\":[]},{\"level\":3,\"title\":\"promisifyAll\",\"slug\":\"promisifyall\",\"link\":\"#promisifyall\",\"children\":[]}]},{\"level\":2,\"title\":\"async await\",\"slug\":\"async-await\",\"link\":\"#async-await\",\"children\":[]},{\"level\":2,\"title\":\"类数组\",\"slug\":\"类数组\",\"link\":\"#类数组\",\"children\":[{\"level\":3,\"title\":\"关于promsie的面试题\",\"slug\":\"关于promsie的面试题\",\"link\":\"#关于promsie的面试题\",\"children\":[]}]}],\"readingTime\":{\"minutes\":13.02,\"words\":3905},\"filePathRelative\":\"posts/node-quick/promise.md\",\"localizedDate\":\"2020年12月30日\",\"excerpt\":\"\\n<h2>目标</h2>\\n<ul>\\n<li>\\n<p>掌握高阶函数的使用，使用高阶函数解决异步问题。</p>\\n</li>\\n<li>\\n<p>掌握发布订阅模式和观察者模式</p>\\n</li>\\n<li>\\n<p>掌握 promise 核心应用，使用 promise 解决异步编程问题</p>\\n</li>\\n<li>\\n<p>实现一个完整的 promise 库</p>\\n</li>\\n<li>\\n<p>扩展 promise 中常见方法 all,race,finally...</p>\\n</li>\\n<li>\\n<p>async await 实现原理</p>\\n</li>\\n</ul>\\n<p>promise完整代码仓库路径 Anna0314zy/node-zy/2.promise/promise</p>\",\"autoDesc\":true}")
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
