import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/database/mysql/writeSql.html.vue"
const data = JSON.parse("{\"path\":\"/posts/database/mysql/writeSql.html\",\"title\":\"如何写优雅的SQL原生语句？\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"如何写优雅的SQL原生语句？\",\"date\":\"2019-05-26T00:00:00.000Z\",\"tags\":[\"数据库\"],\"gitInclude\":[],\"description\":\"前言： 上一篇讲Mysql基本架构时，以sql查询语句在MySql架构中具体是怎么执行的？”进行了全面的讲解。知道了sql查询语句在MySql架构中的具体执行流程，但是为了能够更好更快的写出sql语句，我觉得非常有必要知道sql语句中各子句的执行顺序。看过上一篇文章的小伙伴应该都知道，sql语句最后各子句的执行应该是在执行器中完成的，存储引擎对执行器提...\"},\"headers\":[{\"level\":2,\"title\":\"前言：\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"语句中各子句完整执行顺序概括（按照顺序号执行）\",\"slug\":\"语句中各子句完整执行顺序概括-按照顺序号执行\",\"link\":\"#语句中各子句完整执行顺序概括-按照顺序号执行\",\"children\":[{\"level\":3,\"title\":\"每个子句执行顺序分析\",\"slug\":\"每个子句执行顺序分析\",\"link\":\"#每个子句执行顺序分析\",\"children\":[]}]},{\"level\":2,\"title\":\"开发某需求写的一段sql\",\"slug\":\"开发某需求写的一段sql\",\"link\":\"#开发某需求写的一段sql\",\"children\":[]},{\"level\":2,\"title\":\"sql语句中的别名\",\"slug\":\"sql语句中的别名\",\"link\":\"#sql语句中的别名\",\"children\":[]},{\"level\":2,\"title\":\"书写sql语句的注意事项\",\"slug\":\"书写sql语句的注意事项\",\"link\":\"#书写sql语句的注意事项\",\"children\":[]}],\"readingTime\":{\"minutes\":10.15,\"words\":3044},\"filePathRelative\":\"posts/database/mysql/writeSql.md\",\"localizedDate\":\"May 26, 2019\",\"excerpt\":\"<h2>前言：</h2>\\n<p>上一篇讲Mysql基本架构时，以<code>sql</code>查询语句在MySql架构中具体是怎么执行的？”进行了全面的讲解。知道了sql查询语句在MySql架构中的具体执行流程，但是为了能够更好更快的写出sql语句，我觉得非常有必要知道sql语句中各子句的执行顺序。看过上一篇文章的小伙伴应该都知道，sql语句最后各子句的执行应该是在执行器中完成的，存储引擎对执行器提供的数据读写接口。现在开始我们的学习</p>\\n<h2>语句中各子句完整执行顺序概括（按照顺序号执行）</h2>\\n<ol>\\n<li>from (注:这里也包括from中的子语句)</li>\\n<li>join</li>\\n<li>on</li>\\n<li>where</li>\\n<li>group by(开始使用select中的别名，后面的语句中都可以使用)</li>\\n<li>avg,sum.... 等聚合函数</li>\\n<li>having</li>\\n<li>select</li>\\n<li>distinct</li>\\n<li>order by</li>\\n<li>limit</li>\\n</ol>\",\"autoDesc\":true}")
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
