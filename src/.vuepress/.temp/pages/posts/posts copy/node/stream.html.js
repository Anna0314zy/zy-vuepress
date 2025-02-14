import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/node/stream.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/node/stream.html\",\"title\":\"Node.js中stream模块详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node.js中stream模块详解\",\"date\":\"2019-06-14T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"stream定义 流的英文stream，流（Stream）是一个抽象的数据接口，Node.js中很多对象都实现了流，流是EventEmitter对象的一个实例，总之它是会冒数据（以 Buffer 为单位），或者能够吸收数据的东西，它的本质就是让数据流动起来。 可能看一张图会更直观： 水桶管道流转图水桶管道流转图 注意：stream不是node.js独有...\"},\"headers\":[{\"level\":3,\"title\":\"stream定义\",\"slug\":\"stream定义\",\"link\":\"#stream定义\",\"children\":[]},{\"level\":2,\"title\":\"为什么要学习stream\",\"slug\":\"为什么要学习stream\",\"link\":\"#为什么要学习stream\",\"children\":[{\"level\":3,\"title\":\"视频播放例子\",\"slug\":\"视频播放例子\",\"link\":\"#视频播放例子\",\"children\":[]},{\"level\":3,\"title\":\"读取大文件data的例子\",\"slug\":\"读取大文件data的例子\",\"link\":\"#读取大文件data的例子\",\"children\":[]}]},{\"level\":2,\"title\":\"stream流转过程\",\"slug\":\"stream流转过程\",\"link\":\"#stream流转过程\",\"children\":[{\"level\":3,\"title\":\"stream从哪里来-soucre\",\"slug\":\"stream从哪里来-soucre\",\"link\":\"#stream从哪里来-soucre\",\"children\":[]},{\"level\":3,\"title\":\"连接水桶的管道-pipe\",\"slug\":\"连接水桶的管道-pipe\",\"link\":\"#连接水桶的管道-pipe\",\"children\":[]},{\"level\":3,\"title\":\"stream到哪里去-dest\",\"slug\":\"stream到哪里去-dest\",\"link\":\"#stream到哪里去-dest\",\"children\":[]}]},{\"level\":2,\"title\":\"stream应用场景\",\"slug\":\"stream应用场景\",\"link\":\"#stream应用场景\",\"children\":[{\"level\":3,\"title\":\"介绍一个压力测试的小工具\",\"slug\":\"介绍一个压力测试的小工具\",\"link\":\"#介绍一个压力测试的小工具\",\"children\":[]},{\"level\":3,\"title\":\"get请求中应用stream\",\"slug\":\"get请求中应用stream\",\"link\":\"#get请求中应用stream\",\"children\":[]},{\"level\":3,\"title\":\"post中使用stream\",\"slug\":\"post中使用stream\",\"link\":\"#post中使用stream\",\"children\":[]},{\"level\":3,\"title\":\"post与get使用stream总结\",\"slug\":\"post与get使用stream总结\",\"link\":\"#post与get使用stream总结\",\"children\":[]},{\"level\":3,\"title\":\"在文件操作中使用stream\",\"slug\":\"在文件操作中使用stream\",\"link\":\"#在文件操作中使用stream\",\"children\":[]},{\"level\":3,\"title\":\"前端一些打包工具的底层实现\",\"slug\":\"前端一些打包工具的底层实现\",\"link\":\"#前端一些打包工具的底层实现\",\"children\":[]}]},{\"level\":2,\"title\":\"stream的种类\",\"slug\":\"stream的种类\",\"link\":\"#stream的种类\",\"children\":[]},{\"level\":2,\"title\":\"stream有什么弊端\",\"slug\":\"stream有什么弊端\",\"link\":\"#stream有什么弊端\",\"children\":[]},{\"level\":2,\"title\":\"stream的常见类库\",\"slug\":\"stream的常见类库\",\"link\":\"#stream的常见类库\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":10.41,\"words\":3124},\"filePathRelative\":\"posts/posts copy/node/stream.md\",\"localizedDate\":\"2019年6月14日\",\"excerpt\":\"<h3>stream定义</h3>\\n<p>流的英文<code>stream</code>，流（Stream）是一个抽象的数据接口，<code>Node.js</code>中很多对象都实现了流，流是<code>EventEmitter</code>对象的一个实例，总之它是会冒数据（以 <code>Buffer</code> 为单位），或者能够吸收数据的东西，它的本质就是让数据流动起来。<br>\\n可能看一张图会更直观：</p>\\n<figure><img src=\\\"http://img.xiaogangzai.cn/16bdbb113be0341a.jpg\\\" alt=\\\"水桶管道流转图\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>水桶管道流转图</figcaption></figure>\",\"autoDesc\":true}")
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
