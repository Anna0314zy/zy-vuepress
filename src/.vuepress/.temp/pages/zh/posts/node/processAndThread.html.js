import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/node/processAndThread.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/node/processAndThread.html\",\"title\":\"深入理解Node.js 中的进程与线程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"深入理解Node.js 中的进程与线程\",\"date\":\"2019-08-08T00:00:00.000Z\",\"tags\":[\"Node.js\",\"进程\",\"线程\"],\"gitInclude\":[],\"description\":\"前言 进程与线程是一个程序员的必知概念，面试经常被问及，但是一些文章内容只是讲讲理论知识，可能一些小伙伴并没有真的理解，在实际开发中应用也比较少。本篇文章除了介绍概念，通过Node.js 的角度讲解进程与线程，并且讲解一些在项目中的实战的应用，让你不仅能迎战面试官还可以在实战中完美应用。 文章导览 面试会问 Node.js是单线程吗？ Node.js ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/node/processAndThread.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"深入理解Node.js 中的进程与线程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 进程与线程是一个程序员的必知概念，面试经常被问及，但是一些文章内容只是讲讲理论知识，可能一些小伙伴并没有真的理解，在实际开发中应用也比较少。本篇文章除了介绍概念，通过Node.js 的角度讲解进程与线程，并且讲解一些在项目中的实战的应用，让你不仅能迎战面试官还可以在实战中完美应用。 文章导览 面试会问 Node.js是单线程吗？ Node.js ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"http://img.xiaogangzai.cn/16c6cf612c275894.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Node.js\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"进程\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"线程\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-08-08T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"深入理解Node.js 中的进程与线程\\\",\\\"image\\\":[\\\"http://img.xiaogangzai.cn/16c6cf612c275894.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_002.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_001.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_004.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_001.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_006.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_005.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_007.jpg\\\",\\\"http://img.xiaogangzai.cn/16b12df18cc5e443.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_008.jpg\\\",\\\"http://img.xiaogangzai.cn/progress_009.jpg\\\"],\\\"datePublished\\\":\\\"2019-08-08T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"文章导览\",\"slug\":\"文章导览\",\"link\":\"#文章导览\",\"children\":[]},{\"level\":2,\"title\":\"面试会问\",\"slug\":\"面试会问\",\"link\":\"#面试会问\",\"children\":[]},{\"level\":2,\"title\":\"进程\",\"slug\":\"进程\",\"link\":\"#进程\",\"children\":[]},{\"level\":2,\"title\":\"线程\",\"slug\":\"线程\",\"link\":\"#线程\",\"children\":[{\"level\":3,\"title\":\"单线程\",\"slug\":\"单线程\",\"link\":\"#单线程\",\"children\":[]}]},{\"level\":2,\"title\":\"Node.js 中的进程与线程\",\"slug\":\"node-js-中的进程与线程\",\"link\":\"#node-js-中的进程与线程\",\"children\":[{\"level\":3,\"title\":\"Node.js 中的进程\",\"slug\":\"node-js-中的进程\",\"link\":\"#node-js-中的进程\",\"children\":[]},{\"level\":3,\"title\":\"Node.js 线程\",\"slug\":\"node-js-线程\",\"link\":\"#node-js-线程\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":23.19,\"words\":6956},\"filePathRelative\":\"zh/posts/node/processAndThread.md\",\"localizedDate\":\"2019年8月8日\",\"excerpt\":\"<p><strong>前言</strong></p>\\n<p><code>进程</code>与<code>线程</code>是一个程序员的必知概念，面试经常被问及，但是一些文章内容只是讲讲理论知识，可能一些小伙伴并没有真的理解，在实际开发中应用也比较少。本篇文章除了介绍概念，通过Node.js 的角度讲解<code>进程</code>与<code>线程</code>，并且讲解一些在项目中的实战的应用，让你不仅能迎战面试官还可以在实战中完美应用。</p>\\n<h2>文章导览</h2>\\n<figure><img src=\\\"http://img.xiaogangzai.cn/16c6cf612c275894.jpg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\",\"autoDesc\":true}")
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
