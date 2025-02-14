import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/database/optimize.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/database/optimize.html\",\"title\":\"常用的数据库语句\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常用的数据库语句\",\"date\":\"2019-05-18T00:00:00.000Z\",\"tags\":[\"数据库\"],\"gitInclude\":[],\"description\":\"需求1: 最近写的一个用户数据统计相关接口，需要用到按照每天进行分组统计。 直接看语句 DATE_FORMAT函数说明 语法 date 参数是合法的日期。format 规定日期/时间的输出格式。 format可以使用的格式 > 需求2: 查询结果单位换算后保留两位小数 数据库表中sale列的值为23456.789 format函数 说明：format(...\"},\"headers\":[{\"level\":2,\"title\":\"直接看语句\",\"slug\":\"直接看语句\",\"link\":\"#直接看语句\",\"children\":[]},{\"level\":2,\"title\":\"DATE_FORMAT函数说明\",\"slug\":\"date-format函数说明\",\"link\":\"#date-format函数说明\",\"children\":[]},{\"level\":2,\"title\":\"> 需求2: 查询结果单位换算后保留两位小数\",\"slug\":\"需求2-查询结果单位换算后保留两位小数\",\"link\":\"#需求2-查询结果单位换算后保留两位小数\",\"children\":[]}],\"readingTime\":{\"minutes\":2.57,\"words\":770},\"filePathRelative\":\"posts/posts copy/database/optimize.md\",\"localizedDate\":\"2019年5月18日\",\"excerpt\":\"\\n<blockquote>\\n<p>需求1: 最近写的一个用户数据统计相关接口，需要用到按照每天进行分组统计。</p>\\n</blockquote>\\n<h2>直接看语句</h2>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" data-title=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>SELECT DATE_FORMAT( create_time, \\\"%Y-%m-%d\\\" ) ,sum(user_id) FROM orders WHERE order_state=2 GROUP BY DATE_FORMAT( create_time, \\\"%Y-%m-%d\\\" ) ;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
