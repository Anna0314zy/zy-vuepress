import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/javascript/higherFunc.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/javascript/higherFunc.html\",\"title\":\"高阶函数详解与实战训练\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"高阶函数详解与实战训练\",\"date\":\"2019-08-20T00:00:00.000Z\",\"tags\":[\"Javascript\"],\"gitInclude\":[],\"description\":\"前言 一道经典面试题： 当大家看到这个面试题的时候，能否在第一时间想到使用高阶函数实现？想到在实际项目开发过程中，用到哪些高级函数？有没有想过自己创造一个高阶函数呢？开始本篇文章的学习 高阶函数定义 高阶函数英文叫 Higher-order function。高阶函数是对其他函数进行操作的函数，操作可以是将它们作为参数，或者返回它们。简单总结为高阶函数...\"},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"高阶函数定义\",\"slug\":\"高阶函数定义\",\"link\":\"#高阶函数定义\",\"children\":[]},{\"level\":2,\"title\":\"函数作为参数情况\",\"slug\":\"函数作为参数情况\",\"link\":\"#函数作为参数情况\",\"children\":[]},{\"level\":2,\"title\":\"Array.prototype.map\",\"slug\":\"array-prototype-map\",\"link\":\"#array-prototype-map\",\"children\":[{\"level\":3,\"title\":\"不使用高阶函数\",\"slug\":\"不使用高阶函数\",\"link\":\"#不使用高阶函数\",\"children\":[]},{\"level\":3,\"title\":\"使用高阶函数\",\"slug\":\"使用高阶函数\",\"link\":\"#使用高阶函数\",\"children\":[]},{\"level\":3,\"title\":\"map高阶函数注意点\",\"slug\":\"map高阶函数注意点\",\"link\":\"#map高阶函数注意点\",\"children\":[]},{\"level\":3,\"title\":\"map高阶函数对应的一道经典面试题\",\"slug\":\"map高阶函数对应的一道经典面试题\",\"link\":\"#map高阶函数对应的一道经典面试题\",\"children\":[]}]},{\"level\":2,\"title\":\"Array.prototype.reduce\",\"slug\":\"array-prototype-reduce\",\"link\":\"#array-prototype-reduce\",\"children\":[{\"level\":3,\"title\":\"不使用高阶函数\",\"slug\":\"不使用高阶函数-1\",\"link\":\"#不使用高阶函数-1\",\"children\":[]},{\"level\":3,\"title\":\"使用高阶函数\",\"slug\":\"使用高阶函数-1\",\"link\":\"#使用高阶函数-1\",\"children\":[]}]},{\"level\":2,\"title\":\"Array.prototype.filter\",\"slug\":\"array-prototype-filter\",\"link\":\"#array-prototype-filter\",\"children\":[{\"level\":3,\"title\":\"不使用高阶函数\",\"slug\":\"不使用高阶函数-2\",\"link\":\"#不使用高阶函数-2\",\"children\":[]},{\"level\":3,\"title\":\"使用高阶函数\",\"slug\":\"使用高阶函数-2\",\"link\":\"#使用高阶函数-2\",\"children\":[]},{\"level\":3,\"title\":\"filter注意点说明\",\"slug\":\"filter注意点说明\",\"link\":\"#filter注意点说明\",\"children\":[]}]},{\"level\":2,\"title\":\"Array.prototype.sort\",\"slug\":\"array-prototype-sort\",\"link\":\"#array-prototype-sort\",\"children\":[{\"level\":3,\"title\":\"sort排序算法的底层实现\",\"slug\":\"sort排序算法的底层实现\",\"link\":\"#sort排序算法的底层实现\",\"children\":[]},{\"level\":3,\"title\":\"如何改进排序算法实现数字正确排序呢？\",\"slug\":\"如何改进排序算法实现数字正确排序呢\",\"link\":\"#如何改进排序算法实现数字正确排序呢\",\"children\":[]}]},{\"level\":2,\"title\":\"函数作为返回值输出\",\"slug\":\"函数作为返回值输出\",\"link\":\"#函数作为返回值输出\",\"children\":[{\"level\":3,\"title\":\"isType 函数\",\"slug\":\"istype-函数\",\"link\":\"#istype-函数\",\"children\":[]},{\"level\":3,\"title\":\"add求和函数\",\"slug\":\"add求和函数\",\"link\":\"#add求和函数\",\"children\":[]}]},{\"level\":2,\"title\":\"如何自己创建高阶函数\",\"slug\":\"如何自己创建高阶函数\",\"link\":\"#如何自己创建高阶函数\",\"children\":[{\"level\":3,\"title\":\"代码分析讲解：\",\"slug\":\"代码分析讲解\",\"link\":\"#代码分析讲解\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":12.5,\"words\":3750},\"filePathRelative\":\"posts/posts copy/javascript/higherFunc.md\",\"localizedDate\":\"2019年8月20日\",\"excerpt\":\"<figure><img src=\\\"http://img.xiaogangzai.cn/16bec3fc59d12ae5_highfunction.jpg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n\\n<h2>前言</h2>\\n<p>一道经典面试题：</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"javascript\\\" data-title=\\\"javascript\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//JS实现一个无限累加的add函数</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">add</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//1 </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">add</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//3</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">add</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)(</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//6</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
