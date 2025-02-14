import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/es6_系列/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/es6_%E7%B3%BB%E5%88%97/1.html\",\"title\":\"常见面试题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常见面试题\",\"date\":\"2019-08-04T00:00:00.000Z\",\"tags\":[\"ES6\"],\"gitInclude\":[],\"description\":\"es6 目录 reduce - compose 初级compose 终极 使用 可以解决函数多层嵌套问题 清楚 用法2 原理 new Set\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/posts/es6_%E7%B3%BB%E5%88%97/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的基地\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"常见面试题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"es6 目录 reduce - compose 初级compose 终极 使用 可以解决函数多层嵌套问题 清楚 用法2 原理 new Set\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ES6\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-08-04T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"常见面试题\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-08-04T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mrs.Zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"es6 目录\",\"slug\":\"es6-目录\",\"link\":\"#es6-目录\",\"children\":[]},{\"level\":2,\"title\":\"reduce - compose\",\"slug\":\"reduce-compose\",\"link\":\"#reduce-compose\",\"children\":[]},{\"level\":2,\"title\":\"new Set\",\"slug\":\"new-set\",\"link\":\"#new-set\",\"children\":[]}],\"readingTime\":{\"minutes\":0.81,\"words\":243},\"filePathRelative\":\"posts/[es6]系列/1.md\",\"localizedDate\":\"2019年8月4日\",\"excerpt\":\"<h2>es6 目录</h2>\\n<h2>reduce - compose</h2>\\n<p>初级compose</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> compose</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">fns</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">args</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> fn</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> fns</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">pop</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">();</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> fns</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">reduceRight</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">((</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">a</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">b</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> b</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">a</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">), </span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">fn</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">args</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
