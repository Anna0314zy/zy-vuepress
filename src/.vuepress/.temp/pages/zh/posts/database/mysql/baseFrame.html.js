import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/database/mysql/baseFrame.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/database/mysql/baseFrame.html\",\"title\":\"MySQL 基础架构你不知道的那些事！\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MySQL 基础架构你不知道的那些事！\",\"date\":\"2019-05-12T00:00:00.000Z\",\"tags\":[\"MySQL\"],\"gitInclude\":[],\"description\":\"提出问题： 对于一个做后台不久的我，起初做项目只是实现了功能，所谓的增删改查，和基本查询索引的建立。直到有一个面试官问我一个问题，一条sql查询语句在mysql数据库中具体是怎么执行的？我被虐了，很开心，感谢他。于是开始了深入学习mysql。本篇文章通过 一条sql查询语句在mysql数据库中具体是怎么执行的？ 来具体讲解mysql的基础架构。 mys...\"},\"headers\":[{\"level\":2,\"title\":\"提出问题：\",\"slug\":\"提出问题\",\"link\":\"#提出问题\",\"children\":[]},{\"level\":2,\"title\":\"mysql的基础架构\",\"slug\":\"mysql的基础架构\",\"link\":\"#mysql的基础架构\",\"children\":[]},{\"level\":2,\"title\":\"Mysql基本架构示意图\",\"slug\":\"mysql基本架构示意图\",\"link\":\"#mysql基本架构示意图\",\"children\":[]},{\"level\":2,\"title\":\"连接器\",\"slug\":\"连接器\",\"link\":\"#连接器\",\"children\":[]},{\"level\":2,\"title\":\"查询缓存\",\"slug\":\"查询缓存\",\"link\":\"#查询缓存\",\"children\":[]},{\"level\":2,\"title\":\"分析器\",\"slug\":\"分析器\",\"link\":\"#分析器\",\"children\":[]},{\"level\":2,\"title\":\"优化器\",\"slug\":\"优化器\",\"link\":\"#优化器\",\"children\":[]},{\"level\":2,\"title\":\"执行器\",\"slug\":\"执行器\",\"link\":\"#执行器\",\"children\":[]},{\"level\":2,\"title\":\"存储引擎\",\"slug\":\"存储引擎\",\"link\":\"#存储引擎\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":9.77,\"words\":2932},\"filePathRelative\":\"zh/posts/database/mysql/baseFrame.md\",\"localizedDate\":\"2019年5月12日\",\"excerpt\":\"<h2>提出问题：</h2>\\n<p>对于一个做后台不久的我，起初做项目只是实现了功能，所谓的增删改查，和基本查询索引的建立。直到有一个面试官问我一个问题，一条sql查询语句在mysql数据库中具体是怎么执行的？我被虐了，很开心，感谢他。于是开始了深入学习mysql。本篇文章通过</p>\\n<blockquote>\\n<p>一条sql查询语句在mysql数据库中具体是怎么执行的？</p>\\n</blockquote>\\n<p>来具体讲解mysql的基础架构。</p>\\n<h2>mysql的基础架构</h2>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" data-title=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>mysql&gt; select * from Student where ID=1;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
