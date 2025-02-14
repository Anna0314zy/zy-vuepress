import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/node/module_fs.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/node/module_fs.html\",\"title\":\"node核心模块 -fs模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"node核心模块 -fs模块\",\"date\":\"2019-07-30T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"人所缺乏的不是才干而是志向，不是成功的能力而是勤劳的意志。 —— 部尔卫 前言 文件操作是开发过程中并不可少的一部分。Node.js 中的 fs 模块是文件操作的封装，它提供了文件读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作。与其它模块不同的是，fs 模块中所有的操作都提供了异步和同步的两个版本,具有 sync 后缀的方法为同步方...\"},\"headers\":[{\"level\":2,\"title\":\"文章概览\",\"slug\":\"文章概览\",\"link\":\"#文章概览\",\"children\":[]},{\"level\":2,\"title\":\"面试会问\",\"slug\":\"面试会问\",\"link\":\"#面试会问\",\"children\":[]},{\"level\":2,\"title\":\"文件常识\",\"slug\":\"文件常识\",\"link\":\"#文件常识\",\"children\":[{\"level\":3,\"title\":\"权限位 mode\",\"slug\":\"权限位-mode\",\"link\":\"#权限位-mode\",\"children\":[]},{\"level\":3,\"title\":\"标识位 flag\",\"slug\":\"标识位-flag\",\"link\":\"#标识位-flag\",\"children\":[]},{\"level\":3,\"title\":\"文件描述符 fs\",\"slug\":\"文件描述符-fs\",\"link\":\"#文件描述符-fs\",\"children\":[]}]},{\"level\":2,\"title\":\"文件操作\",\"slug\":\"文件操作\",\"link\":\"#文件操作\",\"children\":[{\"level\":3,\"title\":\"完整性读写文件操作\",\"slug\":\"完整性读写文件操作\",\"link\":\"#完整性读写文件操作\",\"children\":[]},{\"level\":3,\"title\":\"指定位置读写文件操作(高级文件操作)\",\"slug\":\"指定位置读写文件操作-高级文件操作\",\"link\":\"#指定位置读写文件操作-高级文件操作\",\"children\":[]}]},{\"level\":2,\"title\":\"目录(文件夹)操作\",\"slug\":\"目录-文件夹-操作\",\"link\":\"#目录-文件夹-操作\",\"children\":[]},{\"level\":2,\"title\":\"实战训练：\",\"slug\":\"实战训练\",\"link\":\"#实战训练\",\"children\":[{\"level\":3,\"title\":\"「示例：fs 模块如何实现文件拷贝」\",\"slug\":\"「示例-fs-模块如何实现文件拷贝」\",\"link\":\"#「示例-fs-模块如何实现文件拷贝」\",\"children\":[]}]}],\"readingTime\":{\"minutes\":14.66,\"words\":4398},\"filePathRelative\":\"posts/posts copy/node/module_fs.md\",\"localizedDate\":\"2019年7月30日\",\"excerpt\":\"<blockquote>\\n<p>人所缺乏的不是才干而是志向，不是成功的能力而是勤劳的意志。 —— 部尔卫</p>\\n</blockquote>\\n<p><strong>前言</strong></p>\\n<p>文件操作是开发过程中并不可少的一部分。Node.js 中的 fs 模块是文件操作的封装，它提供了文件读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作。与其它模块不同的是，fs 模块中所有的操作都提供了异步和同步的两个版本,具有 sync 后缀的方法为同步方法，不具有 sync 后缀的方法为异步方法</p>\\n<h2>文章概览</h2>\\n<ul>\\n<li>\\n<p>计算机中关于系统和文件的一些常识</p>\\n<p>-- 权限位 mode</p>\\n<p>-- 标识位 flag</p>\\n<p>-- 文件描述符 fs</p>\\n</li>\\n<li>\\n<p>Node.js 中 fs 模块的 api 详细讲解与对应 Demo</p>\\n<p>-- 常规文件操作</p>\\n<p>-- 高级文件操作</p>\\n<p>-- 文件目录操纵</p>\\n</li>\\n<li>\\n<p>Node.js 中 fs 模块的 api 对应 demo</p>\\n</li>\\n<li>\\n<p>fs 模块的应用场景及实战训练(大小文件实现拷贝)</p>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
