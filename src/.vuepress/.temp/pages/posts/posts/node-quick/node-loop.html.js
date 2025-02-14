import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/node-quick/node-loop.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/node-quick/node-loop.html\",\"title\":\"Node.js中的进程与线程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node.js中的进程与线程\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"Node.js中的进程与线程 进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位 线程（Thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。 Node特点主线程是单线程的 一个进程只开一个主线程,基于事件驱动的、异步非阻塞I/O，可以应用于高并发场景 No...\"},\"headers\":[{\"level\":2,\"title\":\"1.先看问题\",\"slug\":\"_1-先看问题\",\"link\":\"#_1-先看问题\",\"children\":[]},{\"level\":2,\"title\":\"2.开启进程\",\"slug\":\"_2-开启进程\",\"link\":\"#_2-开启进程\",\"children\":[{\"level\":3,\"title\":\"2.1 spawn\",\"slug\":\"_2-1-spawn\",\"link\":\"#_2-1-spawn\",\"children\":[]},{\"level\":3,\"title\":\"2.2 fork\",\"slug\":\"_2-2-fork\",\"link\":\"#_2-2-fork\",\"children\":[]},{\"level\":3,\"title\":\"2.3 execFile\",\"slug\":\"_2-3-execfile\",\"link\":\"#_2-3-execfile\",\"children\":[]},{\"level\":3,\"title\":\"2.4 exec\",\"slug\":\"_2-4-exec\",\"link\":\"#_2-4-exec\",\"children\":[]}]},{\"level\":2,\"title\":\"3.cluster\",\"slug\":\"_3-cluster\",\"link\":\"#_3-cluster\",\"children\":[]},{\"level\":2,\"title\":\"4. pm2应用\",\"slug\":\"_4-pm2应用\",\"link\":\"#_4-pm2应用\",\"children\":[{\"level\":3,\"title\":\"4.1 安装pm2\",\"slug\":\"_4-1-安装pm2\",\"link\":\"#_4-1-安装pm2\",\"children\":[]},{\"level\":3,\"title\":\"4.2 pm2配置文件\",\"slug\":\"_4-2-pm2配置文件\",\"link\":\"#_4-2-pm2配置文件\",\"children\":[]}]}],\"readingTime\":{\"minutes\":5.03,\"words\":1508},\"filePathRelative\":\"posts/posts/node-quick/node-loop.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"\\n<ul>\\n<li>进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位</li>\\n<li>线程（Thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。<br>\\n<strong>Node特点主线程是单线程的</strong> 一个进程只开一个主线程,基于事件驱动的、异步非阻塞I/O，可以应用于高并发场景</li>\\n</ul>\\n<p>Nodejs中没有多线程，为了充分利用多核cpu,可以使用子进程实现内核的负载均衡</p>\\n<p><strong>那我们就要解决以下问题</strong></p>\\n<ul>\\n<li>Node.js 做耗时的计算时候阻塞问题</li>\\n<li>Node.js如何开启多进程</li>\\n<li>开发过程中如何实现进程守护</li>\\n</ul>\",\"autoDesc\":true}")
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
