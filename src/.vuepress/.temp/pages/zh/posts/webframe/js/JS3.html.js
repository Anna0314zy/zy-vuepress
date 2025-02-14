import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/webframe/js/JS3.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/webframe/js/JS3.html\",\"title\":\"JS 底层原理的实现\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JS 底层原理的实现\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"JS\"],\"gitInclude\":[],\"description\":\"1.apply、call、bind apply、call、bind 这三个方法之间有什么区别? call的性能比apply要好那么一丢丢 尤其参数在三个以上的时候 apply 和 call 的实现 bind 的实现 方法可以绑定this指向 返回一个绑定后的新函数 如果绑定的函数被new 当前函数的this 就是当前的实例 2.new 的实现 那么 n...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/webframe/js/JS3.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JS 底层原理的实现\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1.apply、call、bind apply、call、bind 这三个方法之间有什么区别? call的性能比apply要好那么一丢丢 尤其参数在三个以上的时候 apply 和 call 的实现 bind 的实现 方法可以绑定this指向 返回一个绑定后的新函数 如果绑定的函数被new 当前函数的this 就是当前的实例 2.new 的实现 那么 n...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JS\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-01-06T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"JS 底层原理的实现\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-01-06T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.apply、call、bind\",\"slug\":\"_1-apply、call、bind\",\"link\":\"#_1-apply、call、bind\",\"children\":[{\"level\":3,\"title\":\"apply 和 call 的实现\",\"slug\":\"apply-和-call-的实现\",\"link\":\"#apply-和-call-的实现\",\"children\":[]},{\"level\":3,\"title\":\"bind 的实现\",\"slug\":\"bind-的实现\",\"link\":\"#bind-的实现\",\"children\":[]}]},{\"level\":2,\"title\":\"2.new 的实现\",\"slug\":\"_2-new-的实现\",\"link\":\"#_2-new-的实现\",\"children\":[]},{\"level\":2,\"title\":\"3.JSON.stringify\",\"slug\":\"_3-json-stringify\",\"link\":\"#_3-json-stringify\",\"children\":[{\"level\":3,\"title\":\"JSON.parse\",\"slug\":\"json-parse\",\"link\":\"#json-parse\",\"children\":[]},{\"level\":3,\"title\":\"JSON.stringify\",\"slug\":\"json-stringify\",\"link\":\"#json-stringify\",\"children\":[]}]},{\"level\":2,\"title\":\"4.0.1 + 0.2 != 0.3\",\"slug\":\"_4-0-1-0-2-0-3\",\"link\":\"#_4-0-1-0-2-0-3\",\"children\":[]},{\"level\":2,\"title\":\"5.for in\",\"slug\":\"_5-for-in\",\"link\":\"#_5-for-in\",\"children\":[]},{\"level\":2,\"title\":\"instanceof\",\"slug\":\"instanceof\",\"link\":\"#instanceof\",\"children\":[]}],\"readingTime\":{\"minutes\":12.2,\"words\":3659},\"filePathRelative\":\"zh/posts/webframe/js/JS3.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"<h2>1.apply、call、bind</h2>\\n<p>apply、call、bind 这三个方法之间有什么区别?<br>\\n<strong>call的性能比apply要好那么一丢丢 尤其参数在三个以上的时候</strong></p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> fn1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">    // console.log(this, 'this')</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">   console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">arguments</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> fn2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// call 的特点</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 1.可以改变当前函数this指向</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 2.让当前函数执行</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// fn1.call(fn2); //1</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// fn1.call.call(fn2); //2  如果多个call 会让fn2执行</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
