import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/es6_系列/decorator.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/es6_%E7%B3%BB%E5%88%97/decorator.html\",\"title\":\"装饰器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"装饰器\",\"date\":\"2019-06-10T00:00:00.000Z\",\"tags\":[\"ES6\",\"class\"],\"gitInclude\":[],\"description\":\"类的修饰 decorator(target) {} 许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为。 修饰类如何传参 修饰类的方法 decorator(target, key, descriptor) {} 定义 readonly装饰器： 第一个参数是类的原型对象； 第二个参数是所要修饰的属性名； 第三个参数是该属性的描述对象...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/es6_%E7%B3%BB%E5%88%97/decorator.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"装饰器\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"类的修饰 decorator(target) {} 许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为。 修饰类如何传参 修饰类的方法 decorator(target, key, descriptor) {} 定义 readonly装饰器： 第一个参数是类的原型对象； 第二个参数是所要修饰的属性名； 第三个参数是该属性的描述对象...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ES6\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"class\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-06-10T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"装饰器\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-06-10T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"类的修饰\",\"slug\":\"类的修饰\",\"link\":\"#类的修饰\",\"children\":[]},{\"level\":2,\"title\":\"修饰类的方法\",\"slug\":\"修饰类的方法\",\"link\":\"#修饰类的方法\",\"children\":[]},{\"level\":2,\"title\":\"多个装饰器执行顺序\",\"slug\":\"多个装饰器执行顺序\",\"link\":\"#多个装饰器执行顺序\",\"children\":[]},{\"level\":2,\"title\":\"core-decorators.js\",\"slug\":\"core-decorators-js\",\"link\":\"#core-decorators-js\",\"children\":[]}],\"readingTime\":{\"minutes\":2.75,\"words\":825},\"filePathRelative\":\"zh/posts/[es6]系列/decorator.md\",\"localizedDate\":\"2019年6月10日\",\"excerpt\":\"<h2>类的修饰</h2>\\n<blockquote>\\n<p>decorator(target) {}</p>\\n</blockquote>\\n<p>许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为。</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">@</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">testable</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">class</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> MyClass</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {};</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> testable</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">isTestable</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> true</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">    target</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">grade</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 为类添加实例属性</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">MyClass</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">isTestable</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// true</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
