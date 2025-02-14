import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/es6_系列/questions.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/es6_%E7%B3%BB%E5%88%97/questions.html\",\"title\":\"常见面试题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常见面试题\",\"date\":\"2019-08-04T00:00:00.000Z\",\"tags\":[\"ES6\"],\"gitInclude\":[],\"description\":\"数组的并集 交集 差集 如何实现对象的深拷贝 数据劫持监听 defineProperty proxy\"},\"headers\":[{\"level\":2,\"title\":\"数组的并集 交集 差集\",\"slug\":\"数组的并集-交集-差集\",\"link\":\"#数组的并集-交集-差集\",\"children\":[]},{\"level\":2,\"title\":\"如何实现对象的深拷贝\",\"slug\":\"如何实现对象的深拷贝\",\"link\":\"#如何实现对象的深拷贝\",\"children\":[]},{\"level\":2,\"title\":\"数据劫持监听\",\"slug\":\"数据劫持监听\",\"link\":\"#数据劫持监听\",\"children\":[]}],\"readingTime\":{\"minutes\":1.89,\"words\":568},\"filePathRelative\":\"posts/posts copy/[es6]系列/questions.md\",\"localizedDate\":\"2019年8月4日\",\"excerpt\":\"<h2>数组的并集 交集 差集</h2>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"javascript\\\" data-title=\\\"javascript\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> arr1</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">4</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">];</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//[1,2,3,4]</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> arr2</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">4</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">5</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">];</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//[2,3,4,5] 差集 [1]</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//并集</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> union</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Set</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">([</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">])];</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//交集 [2,3]</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> inserction</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> s1</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Set</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> s2</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Set</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">s1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">].</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">filter</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">x</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> =&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> s2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">has</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">x</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">inserction</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">())</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> deff</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> s1</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Set</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> s2</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Set</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">...</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">s1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">].</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">filter</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">x</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> =&gt;</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> !</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">s2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">has</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">x</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
