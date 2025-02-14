import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/node/overflow.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/node/overflow.html\",\"title\":\"Node.js 内存溢出时如何处理？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node.js 内存溢出时如何处理？\",\"date\":\"2019-08-19T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"Node.js 做密集型运算，或者所操作的数组、对象本身较大时，容易出现内存溢出的问题，这是由于 Node.js 的运行环境依赖 V8 引擎导致的。如果经常有较大数据量运算等操作，需要对 Node.js 运行环境限制有充分的了解。 本文涵盖 内存溢出问题 为什么会内存溢出 2.1 V8内存分配机制 2.2 内存溢出的原因 如何解决内存溢出问题 作者简介...\"},\"headers\":[{\"level\":2,\"title\":\"本文涵盖\",\"slug\":\"本文涵盖\",\"link\":\"#本文涵盖\",\"children\":[]},{\"level\":2,\"title\":\"1.内存溢出问题\",\"slug\":\"_1-内存溢出问题\",\"link\":\"#_1-内存溢出问题\",\"children\":[]},{\"level\":2,\"title\":\"密集型运算\",\"slug\":\"密集型运算\",\"link\":\"#密集型运算\",\"children\":[]},{\"level\":2,\"title\":\"操作的数据量较大\",\"slug\":\"操作的数据量较大\",\"link\":\"#操作的数据量较大\",\"children\":[]},{\"level\":2,\"title\":\"2. 为什么会内存溢出\",\"slug\":\"_2-为什么会内存溢出\",\"link\":\"#_2-为什么会内存溢出\",\"children\":[{\"level\":3,\"title\":\"2.1 V8内存分配机制\",\"slug\":\"_2-1-v8内存分配机制\",\"link\":\"#_2-1-v8内存分配机制\",\"children\":[]},{\"level\":3,\"title\":\"2.2 内存溢出的原因\",\"slug\":\"_2-2-内存溢出的原因\",\"link\":\"#_2-2-内存溢出的原因\",\"children\":[]}]},{\"level\":2,\"title\":\"3. 解决内存溢出问题\",\"slug\":\"_3-解决内存溢出问题\",\"link\":\"#_3-解决内存溢出问题\",\"children\":[{\"level\":3,\"title\":\"3.1. 使用 async/await防止事件堆积,变为同步操作\",\"slug\":\"_3-1-使用-async-await防止事件堆积-变为同步操作\",\"link\":\"#_3-1-使用-async-await防止事件堆积-变为同步操作\",\"children\":[]},{\"level\":3,\"title\":\"3.2. 增加V8内存空间\",\"slug\":\"_3-2-增加v8内存空间\",\"link\":\"#_3-2-增加v8内存空间\",\"children\":[]},{\"level\":3,\"title\":\"3.3. 使用非V8内存\",\"slug\":\"_3-3-使用非v8内存\",\"link\":\"#_3-3-使用非v8内存\",\"children\":[]}]},{\"level\":2,\"title\":\"Node系列原创文章\",\"slug\":\"node系列原创文章\",\"link\":\"#node系列原创文章\",\"children\":[]},{\"level\":2,\"title\":\"关注我\",\"slug\":\"关注我\",\"link\":\"#关注我\",\"children\":[]}],\"readingTime\":{\"minutes\":4.89,\"words\":1466},\"filePathRelative\":\"posts/posts copy/node/overflow.md\",\"localizedDate\":\"2019年8月19日\",\"excerpt\":\"<p>Node.js 做密集型运算，或者所操作的数组、对象本身较大时，容易出现内存溢出的问题，这是由于 Node.js 的运行环境依赖 V8 引擎导致的。如果经常有较大数据量运算等操作，需要对 Node.js 运行环境限制有充分的了解。</p>\\n<h2>本文涵盖</h2>\\n<ol>\\n<li>内存溢出问题</li>\\n<li>为什么会内存溢出\\n<ul>\\n<li>2.1 V8内存分配机制</li>\\n<li>2.2 内存溢出的原因</li>\\n</ul>\\n</li>\\n<li>如何解决内存溢出问题</li>\\n</ol>\\n<blockquote>\\n<p>作者简介：koala，专注完整的 Node.js 技术栈分享，从 JavaScript 到 Node.js,再到后端数据库，祝您成为优秀的高级 Node.js 工程师。【程序员成长指北】作者，Github 博客开源项目 <a href=\\\"https://github.com/koala-coding/goodBlog\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://github.com/koala-coding/goodBlog</a></p>\\n</blockquote>\",\"autoDesc\":true}")
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
