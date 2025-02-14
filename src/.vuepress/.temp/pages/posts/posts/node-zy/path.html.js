import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/node-zy/path.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/node-zy/path.html\",\"title\":\"node核心模块 -文件路径path\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"node核心模块 -文件路径path\",\"date\":\"2019-07-30T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"前言 之前在做webpack配置时候多次用到路径相关内容，最近在写项目的时候，有一个文件需要上传到阿里云oss的功能，同时本地服务器也需要保留一个文件备份。多次用到了文件路径相关内容以及Node核心API的path模块，所以系统的学习了一下，整理了这篇文章。 node中的路径分类 node中的路径大致分5类，dirname,filename,proce...\"},\"headers\":[{\"level\":2,\"title\":\"path\",\"slug\":\"path\",\"link\":\"#path\",\"children\":[{\"level\":3,\"title\":\"path.normalize\",\"slug\":\"path-normalize\",\"link\":\"#path-normalize\",\"children\":[]},{\"level\":3,\"title\":\"path.join\",\"slug\":\"path-join\",\"link\":\"#path-join\",\"children\":[]},{\"level\":3,\"title\":\"path.parse\",\"slug\":\"path-parse\",\"link\":\"#path-parse\",\"children\":[]},{\"level\":3,\"title\":\"path.basename\",\"slug\":\"path-basename\",\"link\":\"#path-basename\",\"children\":[]},{\"level\":3,\"title\":\"path.dirname\",\"slug\":\"path-dirname\",\"link\":\"#path-dirname\",\"children\":[]},{\"level\":3,\"title\":\"path.extname\",\"slug\":\"path-extname\",\"link\":\"#path-extname\",\"children\":[]},{\"level\":3,\"title\":\"path.resolve\",\"slug\":\"path-resolve\",\"link\":\"#path-resolve\",\"children\":[]},{\"level\":3,\"title\":\"path.relative\",\"slug\":\"path-relative\",\"link\":\"#path-relative\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":6.66,\"words\":1997},\"filePathRelative\":\"posts/posts/node-zy/path.md\",\"localizedDate\":\"2019年7月30日\",\"excerpt\":\"<p><strong>前言</strong></p>\\n<p>之前在做<code>webpack</code>配置时候多次用到路径相关内容，最近在写项目的时候，有一个文件需要上传到阿里云oss的功能，同时本地服务器也需要保留一个文件备份。多次用到了文件路径相关内容以及Node核心API的<code>path</code>模块，所以系统的学习了一下，整理了这篇文章。</p>\\n<h1>node中的路径分类</h1>\\n<p>node中的路径大致分5类，<code>dirname</code>,<code>filename</code>,<code>process.cwd()</code>,<code>./</code>,<code>../</code>,其中<code>dirname</code>,<code>filename</code>,<code>process.cwd()</code>绝对路径</p>\",\"autoDesc\":true}")
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
