import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/vue-quick/vue-up-3.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/vue-quick/vue-up-3.html\",\"title\":\"进阶Vue篇（三）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"进阶Vue篇（三）\",\"date\":\"2019-07-14T00:00:00.000Z\",\"tags\":[\"Javascript\"],\"gitInclude\":[],\"description\":\"进阶Vue篇（三） 一.render函数的应用 1.模板缺陷 模板的最大特点是扩展难度大，不易扩展。可能会造成逻辑冗余 Level组件需要对不同的type产生不同的标签 2.使用Render函数 复杂的逻辑变得非常简单 3.函数式组件 如果只是接受一些 prop 的话可以标记为functional 函数式组件只是函数，所以渲染开销也低很多。 （没有th...\"},\"headers\":[{\"level\":2,\"title\":\"一.render函数的应用\",\"slug\":\"一-render函数的应用\",\"link\":\"#一-render函数的应用\",\"children\":[{\"level\":3,\"title\":\"1.模板缺陷\",\"slug\":\"_1-模板缺陷\",\"link\":\"#_1-模板缺陷\",\"children\":[]},{\"level\":3,\"title\":\"2.使用Render函数\",\"slug\":\"_2-使用render函数\",\"link\":\"#_2-使用render函数\",\"children\":[]},{\"level\":3,\"title\":\"3.函数式组件\",\"slug\":\"_3-函数式组件\",\"link\":\"#_3-函数式组件\",\"children\":[]}]},{\"level\":2,\"title\":\"二.作用域插槽\",\"slug\":\"二-作用域插槽\",\"link\":\"#二-作用域插槽\",\"children\":[{\"level\":3,\"title\":\"1.render函数的应用\",\"slug\":\"_1-render函数的应用\",\"link\":\"#_1-render函数的应用\",\"children\":[]},{\"level\":3,\"title\":\"2.使用scope-slot\",\"slug\":\"_2-使用scope-slot\",\"link\":\"#_2-使用scope-slot\",\"children\":[]}]},{\"level\":2,\"title\":\"三.递归组件的应用\",\"slug\":\"三-递归组件的应用\",\"link\":\"#三-递归组件的应用\",\"children\":[{\"level\":3,\"title\":\"1.案例:实现无限极菜单组件\",\"slug\":\"_1-案例-实现无限极菜单组件\",\"link\":\"#_1-案例-实现无限极菜单组件\",\"children\":[]},{\"level\":3,\"title\":\"使用render函数来实现\",\"slug\":\"使用render函数来实现\",\"link\":\"#使用render函数来实现\",\"children\":[]}]},{\"level\":2,\"title\":\"四.异步组件\",\"slug\":\"四-异步组件\",\"link\":\"#四-异步组件\",\"children\":[]}],\"readingTime\":{\"minutes\":2.52,\"words\":757},\"filePathRelative\":\"posts/posts/vue-quick/vue-up-3.md\",\"localizedDate\":\"2019年7月14日\",\"excerpt\":\"\\n<h2>一.render函数的应用</h2>\\n<h3>1.模板缺陷</h3>\\n<p>模板的最大特点是扩展难度大，不易扩展。可能会造成逻辑冗余</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">&lt;</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">Level</span><span style=\\\"--shiki-light:white;--shiki-dark:#FFFFFF\\\"> :type=\\\"1\\\"&gt;哈哈&lt;/Level&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:white;--shiki-dark:#FFFFFF\\\">&lt;Level</span><span style=\\\"--shiki-light:white;--shiki-dark:#FFFFFF\\\"> :type=\\\"2\\\"&gt;哈哈&lt;/Level&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:white;--shiki-dark:#FFFFFF\\\">&lt;Level</span><span style=\\\"--shiki-light:white;--shiki-dark:#FFFFFF\\\"> :type=\\\"3\\\"&gt;哈哈&lt;/Level&gt;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
