import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/javascript/unique.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/javascript/unique.html\",\"title\":\"js中数组去重\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"js中数组去重\",\"date\":\"2019-12-26T00:00:00.000Z\",\"tags\":[\"Javascript\"],\"gitInclude\":[],\"description\":\"为什么写这篇文章？ 数组去重应该是面试必考问题之一。 虽然它是一道并不复杂的问题，但是也能看出面试者的广度和深度，还有考虑问题的全面性。 实际开发中我们应该选择哪种方式数组去重，本文告诉你。 你以为的不一定你以为，面试官不只是让你去重一个数组，他想知道的有点多，包括你的思想。 当面试官问到时怎么回答？ 首先:我知道多少种去重方式 双层 for 循环 思...\"},\"headers\":[{\"level\":2,\"title\":\"为什么写这篇文章？\",\"slug\":\"为什么写这篇文章\",\"link\":\"#为什么写这篇文章\",\"children\":[]},{\"level\":2,\"title\":\"当面试官问到时怎么回答？\",\"slug\":\"当面试官问到时怎么回答\",\"link\":\"#当面试官问到时怎么回答\",\"children\":[{\"level\":3,\"title\":\"首先:我知道多少种去重方式\",\"slug\":\"首先-我知道多少种去重方式\",\"link\":\"#首先-我知道多少种去重方式\",\"children\":[]},{\"level\":3,\"title\":\"然后:询问面试官具体场景\",\"slug\":\"然后-询问面试官具体场景\",\"link\":\"#然后-询问面试官具体场景\",\"children\":[]},{\"level\":3,\"title\":\"性能考虑(是想要最快的速度查到数据吗？)\",\"slug\":\"性能考虑-是想要最快的速度查到数据吗\",\"link\":\"#性能考虑-是想要最快的速度查到数据吗\",\"children\":[]},{\"level\":3,\"title\":\"兼容性与场景考虑(数组中是否包含对象，NaN等？)\",\"slug\":\"兼容性与场景考虑-数组中是否包含对象-nan等\",\"link\":\"#兼容性与场景考虑-数组中是否包含对象-nan等\",\"children\":[]},{\"level\":3,\"title\":\"内存考虑(去重复过程中，是想要空间复杂度最低吗？)\",\"slug\":\"内存考虑-去重复过程中-是想要空间复杂度最低吗\",\"link\":\"#内存考虑-去重复过程中-是想要空间复杂度最低吗\",\"children\":[]}]},{\"level\":2,\"title\":\"补充说明第三方库lodash\",\"slug\":\"补充说明第三方库lodash\",\"link\":\"#补充说明第三方库lodash\",\"children\":[{\"level\":3,\"title\":\"lodash 如何实现去重\",\"slug\":\"lodash-如何实现去重\",\"link\":\"#lodash-如何实现去重\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":8.39,\"words\":2516},\"filePathRelative\":\"posts/posts copy/javascript/unique.md\",\"localizedDate\":\"2019年12月26日\",\"excerpt\":\"<h2>为什么写这篇文章？</h2>\\n<ol>\\n<li>数组去重应该是面试<strong>必考</strong>问题之一。</li>\\n<li>虽然它是一道并不复杂的问题，但是也能看出面试者的<strong>广度和深度</strong>，还有考虑问题的全面性。</li>\\n<li>实际开发中我们应该选择哪种方式数组去重，本文告诉你。</li>\\n<li>你以为的不一定你以为，面试官不只是让你去重一个数组，他想知道的有点多，包括你的思想。</li>\\n</ol>\\n<h2>当面试官问到时怎么回答？</h2>\\n<h3>首先:我知道多少种去重方式</h3>\\n<h4>双层 for 循环</h4>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"javascript\\\" data-title=\\\"javascript\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> distinct</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    for</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">len</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">length</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">&lt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        for</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">+</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">&lt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">len</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">            if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">==</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">                arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">splice</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">                len</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">--</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">                j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">--</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">            }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
