import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/node/events.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/node/events.html\",\"title\":\"源码解读,一文彻底搞懂Events模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"源码解读,一文彻底搞懂Events模块\",\"date\":\"2019-09-05T00:00:00.000Z\",\"tags\":[\"Node.js\",\"Events\"],\"gitInclude\":[],\"description\":\"前言 为什么写这篇文章？ 清楚的记得刚找node工作和面试官聊到了事件循环，然后面试官问事件是如何产生的？什么情况下产生事件。。。 Events 在哪些场景应用到了？ 之前封装了一个 RxJava 的开源网络请求框架，也是基于发布-订阅模式，语言都是相通的，挺有趣。表情符号 Events 模块是我公众号 Node.js 进阶路线的一部分 作者简介：ko...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/node/events.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"源码解读,一文彻底搞懂Events模块\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 为什么写这篇文章？ 清楚的记得刚找node工作和面试官聊到了事件循环，然后面试官问事件是如何产生的？什么情况下产生事件。。。 Events 在哪些场景应用到了？ 之前封装了一个 RxJava 的开源网络请求框架，也是基于发布-订阅模式，语言都是相通的，挺有趣。表情符号 Events 模块是我公众号 Node.js 进阶路线的一部分 作者简介：ko...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"http://img.xiaogangzai.cn/node_events_01.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Node.js\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Events\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-09-05T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"源码解读,一文彻底搞懂Events模块\\\",\\\"image\\\":[\\\"http://img.xiaogangzai.cn/node_events_01.jpg\\\",\\\"http://img.xiaogangzai.cn/node_events_02.jpg\\\",\\\"http://img.xiaogangzai.cn/node_events_03.jpg\\\",\\\"http://img.xiaogangzai.cn/node_events_04.jpg\\\",\\\"http://img.xiaogangzai.cn/node_events_05.jpg\\\",\\\"http://img.xiaogangzai.cn/node_events_06.jpg\\\",\\\"http://img.xiaogangzai.cn/node_events_07.jpg\\\",\\\"http://img.xiaogangzai.cn/leading.png\\\"],\\\"datePublished\\\":\\\"2019-09-05T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"面试会问\",\"slug\":\"面试会问\",\"link\":\"#面试会问\",\"children\":[]},{\"level\":2,\"title\":\"发布/订阅者模式\",\"slug\":\"发布-订阅者模式\",\"link\":\"#发布-订阅者模式\",\"children\":[{\"level\":3,\"title\":\"生活中的发布/订阅者模式\",\"slug\":\"生活中的发布-订阅者模式\",\"link\":\"#生活中的发布-订阅者模式\",\"children\":[]},{\"level\":3,\"title\":\"实例的代码实现与分析\",\"slug\":\"实例的代码实现与分析\",\"link\":\"#实例的代码实现与分析\",\"children\":[]},{\"level\":3,\"title\":\"发布/订阅者模式的优缺点\",\"slug\":\"发布-订阅者模式的优缺点\",\"link\":\"#发布-订阅者模式的优缺点\",\"children\":[]}]},{\"level\":2,\"title\":\"EventEmitter 与 发布/订阅模式的关系\",\"slug\":\"eventemitter-与-发布-订阅模式的关系\",\"link\":\"#eventemitter-与-发布-订阅模式的关系\",\"children\":[{\"level\":3,\"title\":\"事件的基本组成要素\",\"slug\":\"事件的基本组成要素\",\"link\":\"#事件的基本组成要素\",\"children\":[]},{\"level\":3,\"title\":\"EventEmitter 定义\",\"slug\":\"eventemitter-定义\",\"link\":\"#eventemitter-定义\",\"children\":[]},{\"level\":3,\"title\":\"EventEs 的一些常用官方API源码与发布/订阅模式对比学习\",\"slug\":\"eventes-的一些常用官方api源码与发布-订阅模式对比学习\",\"link\":\"#eventes-的一些常用官方api源码与发布-订阅模式对比学习\",\"children\":[]}]},{\"level\":2,\"title\":\"阅读源码后一些疑问的解释\",\"slug\":\"阅读源码后一些疑问的解释\",\"link\":\"#阅读源码后一些疑问的解释\",\"children\":[{\"level\":3,\"title\":\"监听函数的执行顺序是同步 or 异步？\",\"slug\":\"监听函数的执行顺序是同步-or-异步\",\"link\":\"#监听函数的执行顺序是同步-or-异步\",\"children\":[]},{\"level\":3,\"title\":\"事件循环中的事件是什么情况下产生的？什么情况下触发的？\",\"slug\":\"事件循环中的事件是什么情况下产生的-什么情况下触发的\",\"link\":\"#事件循环中的事件是什么情况下产生的-什么情况下触发的\",\"children\":[]},{\"level\":3,\"title\":\"事件类型为error的问题\",\"slug\":\"事件类型为error的问题\",\"link\":\"#事件类型为error的问题\",\"children\":[]},{\"level\":3,\"title\":\"如何修改EventEmitter的最大监听数量？\",\"slug\":\"如何修改eventemitter的最大监听数量\",\"link\":\"#如何修改eventemitter的最大监听数量\",\"children\":[]}]},{\"level\":2,\"title\":\"EventEmitter的应用场景\",\"slug\":\"eventemitter的应用场景\",\"link\":\"#eventemitter的应用场景\",\"children\":[]},{\"level\":2,\"title\":\"发布/订阅模式与观察者模式的一点说明\",\"slug\":\"发布-订阅模式与观察者模式的一点说明\",\"link\":\"#发布-订阅模式与观察者模式的一点说明\",\"children\":[]}],\"readingTime\":{\"minutes\":13.75,\"words\":4126},\"filePathRelative\":\"zh/posts/node/events.md\",\"localizedDate\":\"2019年9月5日\",\"excerpt\":\"<p><strong>前言</strong></p>\\n<p>为什么写这篇文章？</p>\\n<ul>\\n<li>清楚的记得刚找node工作和面试官聊到了事件循环，然后面试官问事件是如何产生的？什么情况下产生事件。。。</li>\\n<li>Events 在哪些场景应用到了？</li>\\n<li>之前封装了一个 RxJava 的开源网络请求框架，也是基于发布-订阅模式，语言都是相通的，挺有趣。表情符号</li>\\n<li>Events 模块是我公众号 Node.js 进阶路线的一部分</li>\\n</ul>\\n<p>作者简介：koala，专注完整的 Node.js 技术栈分享，从 JavaScript 到 Node.js,再到后端数据库，祝您成为优秀的高级 Node.js 工程师。【程序员成长指北】作者，Github 博客开源项目 <a href=\\\"https://github.com/koala-coding/goodBlog\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://github.com/koala-coding/goodBlog</a></p>\",\"autoDesc\":true}")
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
