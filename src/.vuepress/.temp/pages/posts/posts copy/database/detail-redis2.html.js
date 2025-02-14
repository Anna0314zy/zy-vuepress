import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/database/detail-redis2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/database/detail-redis2.html\",\"title\":\"Redis详细学习 进阶篇\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis详细学习 进阶篇\",\"date\":\"2019-05-09T00:00:00.000Z\",\"tags\":[\"Redis\"],\"gitInclude\":[],\"description\":\"redis多数据库 说明：一个redis实例可以包含多个数据库，客户端可以指定连接某个数据库（与MySql客户端我们创建多个数据库类似）一个redis实例最多可以提供16个数据库，下标是从0到15，默认连接的是第0号数据库。 代码相关演示: 可以试着敲一遍，查看注释基本明白了redis多数据库的使用 redis事务的概念 事务的基本命令 1）multi...\"},\"headers\":[{\"level\":2,\"title\":\"redis多数据库\",\"slug\":\"redis多数据库\",\"link\":\"#redis多数据库\",\"children\":[]},{\"level\":2,\"title\":\"redis事务的概念\",\"slug\":\"redis事务的概念\",\"link\":\"#redis事务的概念\",\"children\":[]},{\"level\":2,\"title\":\"redis数据持久化\",\"slug\":\"redis数据持久化\",\"link\":\"#redis数据持久化\",\"children\":[]}],\"readingTime\":{\"minutes\":5.03,\"words\":1508},\"filePathRelative\":\"posts/posts copy/database/detail-redis2.md\",\"localizedDate\":\"2019年5月9日\",\"excerpt\":\"<h2>redis多数据库</h2>\\n<p>说明：一个redis实例可以包含多个数据库，客户端可以指定连接某个数据库（与MySql客户端我们创建多个数据库类似）一个redis实例最多可以提供16个数据库，下标是从0到15，默认连接的是第0号数据库。</p>\\n<p>代码相关演示:</p>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" data-title=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>127.0.0.1:6379&gt; select 1  //选择数据库1</span></span>\\n<span class=\\\"line\\\"><span>OK</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379[1]&gt; keys *</span></span>\\n<span class=\\\"line\\\"><span>(empty list or set)</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379[1]&gt; select 0</span></span>\\n<span class=\\\"line\\\"><span>OK</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379&gt; set string1 2 </span></span>\\n<span class=\\\"line\\\"><span>OK</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379&gt; keys *  //查询所有的key</span></span>\\n<span class=\\\"line\\\"><span>1) \\\"hsah1\\\"</span></span>\\n<span class=\\\"line\\\"><span>2) \\\"list1\\\"</span></span>\\n<span class=\\\"line\\\"><span>3) \\\"set1\\\"</span></span>\\n<span class=\\\"line\\\"><span>4) \\\"list2\\\"</span></span>\\n<span class=\\\"line\\\"><span>5) \\\"string1\\\"</span></span>\\n<span class=\\\"line\\\"><span>6) \\\"hash1\\\"</span></span>\\n<span class=\\\"line\\\"><span>7) \\\"string2\\\"</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379&gt; move list1 1  //移动list1到数据库1</span></span>\\n<span class=\\\"line\\\"><span>(integer) 1</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379&gt; move set1 1</span></span>\\n<span class=\\\"line\\\"><span>(integer) 1</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379&gt; keys *</span></span>\\n<span class=\\\"line\\\"><span>1) \\\"hsah1\\\"</span></span>\\n<span class=\\\"line\\\"><span>2) \\\"list2\\\"</span></span>\\n<span class=\\\"line\\\"><span>3) \\\"string1\\\"</span></span>\\n<span class=\\\"line\\\"><span>4) \\\"hash1\\\"</span></span>\\n<span class=\\\"line\\\"><span>5) \\\"string2\\\"</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379&gt; select 1 </span></span>\\n<span class=\\\"line\\\"><span>OK</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379[1]&gt; keys *</span></span>\\n<span class=\\\"line\\\"><span>1) \\\"list1\\\"</span></span>\\n<span class=\\\"line\\\"><span>2) \\\"set1\\\"</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379[1]&gt; type set1 //获取数据类型</span></span>\\n<span class=\\\"line\\\"><span>set</span></span>\\n<span class=\\\"line\\\"><span>127.0.0.1:6379[1]&gt;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
