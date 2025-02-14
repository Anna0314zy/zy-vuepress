import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/typescript/interface.html.vue"
const data = JSON.parse("{\"path\":\"/posts/typescript/interface.html\",\"title\":\"Typescript系列之接口篇\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Typescript系列之接口篇\",\"date\":\"2019-11-18T00:00:00.000Z\",\"tags\":[\"Typescript\"],\"gitInclude\":[],\"description\":\"接口带来了什么好处 好处One —— 过去我们写 JavaScript JavaScript 中定义一个函数，用来获取一个用户的姓名和年龄的字符串： 函数调用: 这对于我们之前在写 JavaScript 的时候，再正常不过了，但是如果这个 getUserInfo 在多人开发过程中，如果它是个公共函数，多个开发者都会调用，如果不是每个人点进来看函数对应注...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/posts/typescript/interface.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的基地\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Typescript系列之接口篇\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"接口带来了什么好处 好处One —— 过去我们写 JavaScript JavaScript 中定义一个函数，用来获取一个用户的姓名和年龄的字符串： 函数调用: 这对于我们之前在写 JavaScript 的时候，再正常不过了，但是如果这个 getUserInfo 在多人开发过程中，如果它是个公共函数，多个开发者都会调用，如果不是每个人点进来看函数对应注...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://user-gold-cdn.xitu.io/2019/11/18/16e7a1d724cdef1a?w=1634&h=474&f=png&s=106934\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Typescript\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-11-18T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Typescript系列之接口篇\\\",\\\"image\\\":[\\\"https://user-gold-cdn.xitu.io/2019/11/18/16e7a1d724cdef1a?w=1634&h=474&f=png&s=106934\\\",\\\"https://user-gold-cdn.xitu.io/2019/10/29/16e166ee15647127?w=900&h=500&f=png&s=105652\\\"],\\\"datePublished\\\":\\\"2019-11-18T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mrs.Zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"接口带来了什么好处\",\"slug\":\"接口带来了什么好处\",\"link\":\"#接口带来了什么好处\",\"children\":[{\"level\":3,\"title\":\"好处One —— 过去我们写 JavaScript\",\"slug\":\"好处one-——-过去我们写-javascript\",\"link\":\"#好处one-——-过去我们写-javascript\",\"children\":[]},{\"level\":3,\"title\":\"好处TWO —— 过去我们用 Node.js 写后端接口\",\"slug\":\"好处two-——-过去我们用-node-js-写后端接口\",\"link\":\"#好处two-——-过去我们用-node-js-写后端接口\",\"children\":[]}]},{\"level\":2,\"title\":\"接口的基础篇\",\"slug\":\"接口的基础篇\",\"link\":\"#接口的基础篇\",\"children\":[{\"level\":3,\"title\":\"接口的定义\",\"slug\":\"接口的定义\",\"link\":\"#接口的定义\",\"children\":[]},{\"level\":3,\"title\":\"接口中定义方法\",\"slug\":\"接口中定义方法\",\"link\":\"#接口中定义方法\",\"children\":[]},{\"level\":3,\"title\":\"接口中定义属性\",\"slug\":\"接口中定义属性\",\"link\":\"#接口中定义属性\",\"children\":[]}]},{\"level\":2,\"title\":\"接口的高级篇\",\"slug\":\"接口的高级篇\",\"link\":\"#接口的高级篇\",\"children\":[{\"level\":3,\"title\":\"函数类型接口\",\"slug\":\"函数类型接口\",\"link\":\"#函数类型接口\",\"children\":[]},{\"level\":3,\"title\":\"接口的实现\",\"slug\":\"接口的实现\",\"link\":\"#接口的实现\",\"children\":[]},{\"level\":3,\"title\":\"接口的继承\",\"slug\":\"接口的继承\",\"link\":\"#接口的继承\",\"children\":[]},{\"level\":3,\"title\":\"可索引类型接口\",\"slug\":\"可索引类型接口\",\"link\":\"#可索引类型接口\",\"children\":[]},{\"level\":3,\"title\":\"interface和type的区别\",\"slug\":\"interface和type的区别\",\"link\":\"#interface和type的区别\",\"children\":[]}]},{\"level\":2,\"title\":\"接口的应用场景总结\",\"slug\":\"接口的应用场景总结\",\"link\":\"#接口的应用场景总结\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]},{\"level\":2,\"title\":\"参考文章\",\"slug\":\"参考文章\",\"link\":\"#参考文章\",\"children\":[{\"level\":3,\"title\":\"关注我\",\"slug\":\"关注我\",\"link\":\"#关注我\",\"children\":[]}]}],\"readingTime\":{\"minutes\":10.11,\"words\":3033},\"filePathRelative\":\"posts/typescript/interface.md\",\"localizedDate\":\"2019年11月18日\",\"excerpt\":\"<h2>接口带来了什么好处</h2>\\n<h3>好处One —— 过去我们写 JavaScript</h3>\\n<p>JavaScript 中定义一个函数，用来获取一个用户的姓名和年龄的字符串：</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"javascript\\\" data-title=\\\"javascript\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">const</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> getUserInfo</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">user</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) { </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">: </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">$</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{user.</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}, </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">age</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">: </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">$</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{user.</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">age</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">} </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
