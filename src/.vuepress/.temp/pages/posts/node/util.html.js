import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/node/util.html.vue"
const data = JSON.parse("{\"path\":\"/posts/node/util.html\",\"title\":\"Node.js核心模块-utils\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Node.js核心模块-utils\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"前言 util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。 使用方法如下： util.callbackify util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数） 转换成遵循异常优先的回调风格的函数，例如将 (er...\"},\"headers\":[{\"level\":2,\"title\":\"util.callbackify\",\"slug\":\"util-callbackify\",\"link\":\"#util-callbackify\",\"children\":[]},{\"level\":2,\"title\":\"util.inherits\",\"slug\":\"util-inherits\",\"link\":\"#util-inherits\",\"children\":[]},{\"level\":2,\"title\":\"util.inspect\",\"slug\":\"util-inspect\",\"link\":\"#util-inspect\",\"children\":[]},{\"level\":2,\"title\":\"util.isArray(object)\",\"slug\":\"util-isarray-object\",\"link\":\"#util-isarray-object\",\"children\":[]},{\"level\":2,\"title\":\"util.isRegExp(object)\",\"slug\":\"util-isregexp-object\",\"link\":\"#util-isregexp-object\",\"children\":[]},{\"level\":2,\"title\":\"util.isDate(object)\",\"slug\":\"util-isdate-object\",\"link\":\"#util-isdate-object\",\"children\":[]},{\"level\":2,\"title\":\"util.promisify\",\"slug\":\"util-promisify\",\"link\":\"#util-promisify\",\"children\":[]}],\"readingTime\":{\"minutes\":2.03,\"words\":610},\"filePathRelative\":\"posts/node/util.md\",\"localizedDate\":\"January 6, 2019\",\"excerpt\":\"<p><strong>前言</strong><br>\\nutil 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。</p>\\n<p>使用方法如下：</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> util</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> require</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'util'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
