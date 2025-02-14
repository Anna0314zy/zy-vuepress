import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/node-quick/Cookie.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/node-quick/Cookie.html\",\"title\":\"Cookie、Session、JWT\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Cookie、Session、JWT\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"Cookie、Session、JWT 一.课程主题 权限校验 二.课程规划 cookie+session 在koa中的应用 jwt 和 cookie实战 实现简易express 三.知识点 cookie+session实现登录权限 1.什么是jwt？ JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案 解决问题：session不支...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/node-quick/Cookie.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Cookie、Session、JWT\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Cookie、Session、JWT 一.课程主题 权限校验 二.课程规划 cookie+session 在koa中的应用 jwt 和 cookie实战 实现简易express 三.知识点 cookie+session实现登录权限 1.什么是jwt？ JSON Web Token（JWT）是目前最流行的跨域身份验证解决方案 解决问题：session不支...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Node.js\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-01-06T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Cookie、Session、JWT\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-01-06T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"一.课程主题\",\"slug\":\"一-课程主题\",\"link\":\"#一-课程主题\",\"children\":[]},{\"level\":2,\"title\":\"二.课程规划\",\"slug\":\"二-课程规划\",\"link\":\"#二-课程规划\",\"children\":[]},{\"level\":2,\"title\":\"三.知识点\",\"slug\":\"三-知识点\",\"link\":\"#三-知识点\",\"children\":[{\"level\":3,\"title\":\"1.什么是jwt？\",\"slug\":\"_1-什么是jwt\",\"link\":\"#_1-什么是jwt\",\"children\":[]},{\"level\":3,\"title\":\"JWT包含了使用.分隔的三部分\",\"slug\":\"jwt包含了使用-分隔的三部分\",\"link\":\"#jwt包含了使用-分隔的三部分\",\"children\":[]},{\"level\":3,\"title\":\"2.使用方式\",\"slug\":\"_2-使用方式\",\"link\":\"#_2-使用方式\",\"children\":[]},{\"level\":3,\"title\":\"3.实际应用\",\"slug\":\"_3-实际应用\",\"link\":\"#_3-实际应用\",\"children\":[]},{\"level\":3,\"title\":\"4.原理实现\",\"slug\":\"_4-原理实现\",\"link\":\"#_4-原理实现\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.62,\"words\":785},\"filePathRelative\":\"zh/posts/node-quick/Cookie.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"\\n<h2>一.课程主题</h2>\\n<p>权限校验</p>\\n<h2>二.课程规划</h2>\\n<ul>\\n<li>cookie+session 在koa中的应用</li>\\n<li>jwt 和 cookie实战</li>\\n<li>实现简易express</li>\\n</ul>\\n<h2>三.知识点</h2>\\n<p>cookie+session实现登录权限</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">yarn</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> add</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> koa</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> koa</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">-</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">router</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> koa</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">-</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">views</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> koa</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">-</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">bodyparser</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> koa</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">-</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">session</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
