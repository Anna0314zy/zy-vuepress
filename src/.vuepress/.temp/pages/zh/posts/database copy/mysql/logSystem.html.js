import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/database copy/mysql/logSystem.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/database%20copy/mysql/logSystem.html\",\"title\":\"删库跑路后真的没有办法弥补了吗？！\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"删库跑路后真的没有办法弥补了吗？！\",\"date\":\"2019-05-16T00:00:00.000Z\",\"tags\":[\"数据库\",\"日志系统\"],\"gitInclude\":[],\"description\":\"提出问题: 服务器数据库异常重启了会造成什么样的影响？ 不小心删除了数据库怎么办，或者不小心删除了数据库表中数据怎么办？ 一条更新语句在数据库系统内部执行时与数据库日志系统有什么联系？ 数据库备份，是每天一备比较好，还是每周一备比较好？ 接下来在讲解日志系统的同时，回答上面的几个问题。 日志系统详解 redo日志(重做日志) redo是引擎层的日志，而...\"},\"headers\":[{\"level\":2,\"title\":\"redo日志(重做日志)\",\"slug\":\"redo日志-重做日志\",\"link\":\"#redo日志-重做日志\",\"children\":[{\"level\":3,\"title\":\"redo中的环状结构\",\"slug\":\"redo中的环状结构\",\"link\":\"#redo中的环状结构\",\"children\":[]},{\"level\":3,\"title\":\"redo日志作用(回答提出问题1)\",\"slug\":\"redo日志作用-回答提出问题1\",\"link\":\"#redo日志作用-回答提出问题1\",\"children\":[]}]},{\"level\":2,\"title\":\"binlog日志(归档日志)\",\"slug\":\"binlog日志-归档日志\",\"link\":\"#binlog日志-归档日志\",\"children\":[{\"level\":3,\"title\":\"binlog日志作用(回答提出问题2)\",\"slug\":\"binlog日志作用-回答提出问题2\",\"link\":\"#binlog日志作用-回答提出问题2\",\"children\":[]}]},{\"level\":2,\"title\":\"redo日志与binlog日志对比\",\"slug\":\"redo日志与binlog日志对比\",\"link\":\"#redo日志与binlog日志对比\",\"children\":[{\"level\":3,\"title\":\"更新语句执行流程(与日志关系)\",\"slug\":\"更新语句执行流程-与日志关系\",\"link\":\"#更新语句执行流程-与日志关系\",\"children\":[]}]},{\"level\":2,\"title\":\"开发过程中如何为mysql设置这两种保存日志的配置\",\"slug\":\"开发过程中如何为mysql设置这两种保存日志的配置\",\"link\":\"#开发过程中如何为mysql设置这两种保存日志的配置\",\"children\":[]},{\"level\":2,\"title\":\"如何查看这两种日志\",\"slug\":\"如何查看这两种日志\",\"link\":\"#如何查看这两种日志\",\"children\":[{\"level\":3,\"title\":\"关于日志系统的一些误区和疑问\",\"slug\":\"关于日志系统的一些误区和疑问\",\"link\":\"#关于日志系统的一些误区和疑问\",\"children\":[]}]},{\"level\":2,\"title\":\"总结与宣传\",\"slug\":\"总结与宣传\",\"link\":\"#总结与宣传\",\"children\":[]}],\"readingTime\":{\"minutes\":7.63,\"words\":2289},\"filePathRelative\":\"zh/posts/database copy/mysql/logSystem.md\",\"localizedDate\":\"2019年5月16日\",\"excerpt\":\"<p>提出问题:</p>\\n<ol>\\n<li>服务器数据库异常重启了会造成什么样的影响？</li>\\n<li>不小心删除了数据库怎么办，或者不小心删除了数据库表中数据怎么办？</li>\\n<li>一条更新语句在数据库系统内部执行时与数据库日志系统有什么联系？</li>\\n<li>数据库备份，是每天一备比较好，还是每周一备比较好？<br>\\n接下来在讲解日志系统的同时，回答上面的几个问题。</li>\\n</ol>\\n<h1>日志系统详解</h1>\\n<h2>redo日志(重做日志)</h2>\\n<p><code>redo</code>是引擎层的日志，而且是InnoDB特有的。InnoDB的<code>redo log</code>是有固定大小的，比如可以配置为 一组4个文件（logfile-1，logfile-2，logfile-3，logfile-4），每个文件的大小是1GB，那么它总共可以记录4GB的操作。一个环状循环结构，从头开始写，写到末尾又回到开始循环写。</p>\",\"autoDesc\":true}")
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
