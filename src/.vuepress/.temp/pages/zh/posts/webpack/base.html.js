import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/webpack/base.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/webpack/base.html\",\"title\":\"1.基础应用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"1.基础应用 1.概念 WX20201123-091449@2xWX20201123-091449@2x 对比 Node.js 模块，webpack 模块能够以各种方式表达它们的依赖关系，几个例子如下： ES2015 import 语句 CommonJS require() 语句 AMD define 和 require 语句 css/sass/les...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/webpack/base.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1.基础应用\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1.基础应用 1.概念 WX20201123-091449@2xWX20201123-091449@2x 对比 Node.js 模块，webpack 模块能够以各种方式表达它们的依赖关系，几个例子如下： ES2015 import 语句 CommonJS require() 语句 AMD define 和 require 语句 css/sass/les...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Desktop/react-zy/img/image-20201127113539653.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1.基础应用\\\",\\\"image\\\":[\\\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Desktop/react-zy/img/image-20201127113539653.png\\\",\\\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Library/Application Support/typora-user-images/image-20201128170718250.png\\\",\\\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Library/Application Support/typora-user-images/image-20201129214324257.png\\\",\\\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Library/Application Support/typora-user-images/image-20201130185335073.png\\\",\\\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Library/Application Support/typora-user-images/image-20201201184101808.png\\\",\\\"https://mister-hope.github.io/zy-vuepress/Users/zouyu/Desktop/vue-webpack-code/webpack-dev/notes/image-20201210184905807.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.概念\",\"slug\":\"_1-概念\",\"link\":\"#_1-概念\",\"children\":[]},{\"level\":2,\"title\":\"2.webpack-dev-server\",\"slug\":\"_2-webpack-dev-server\",\"link\":\"#_2-webpack-dev-server\",\"children\":[]},{\"level\":2,\"title\":\"3.html-webpack-plugin\",\"slug\":\"_3-html-webpack-plugin\",\"link\":\"#_3-html-webpack-plugin\",\"children\":[]},{\"level\":2,\"title\":\"4.loader\",\"slug\":\"_4-loader\",\"link\":\"#_4-loader\",\"children\":[]},{\"level\":2,\"title\":\"5.clean-webpack-plugin\",\"slug\":\"_5-clean-webpack-plugin\",\"link\":\"#_5-clean-webpack-plugin\",\"children\":[]},{\"level\":2,\"title\":\"6.分离css\",\"slug\":\"_6-分离css\",\"link\":\"#_6-分离css\",\"children\":[]},{\"level\":2,\"title\":\"7.压缩js css\",\"slug\":\"_7-压缩js-css\",\"link\":\"#_7-压缩js-css\",\"children\":[]},{\"level\":2,\"title\":\"8.css js存放单独的目录\",\"slug\":\"_8-css-js存放单独的目录\",\"link\":\"#_8-css-js存放单独的目录\",\"children\":[]},{\"level\":2,\"title\":\"9.html使用src\",\"slug\":\"_9-html使用src\",\"link\":\"#_9-html使用src\",\"children\":[]},{\"level\":2,\"title\":\"10.glob\",\"slug\":\"_10-glob\",\"link\":\"#_10-glob\",\"children\":[]},{\"level\":2,\"title\":\"11.less sass\",\"slug\":\"_11-less-sass\",\"link\":\"#_11-less-sass\",\"children\":[]},{\"level\":2,\"title\":\"12.处理css前缀\",\"slug\":\"_12-处理css前缀\",\"link\":\"#_12-处理css前缀\",\"children\":[]},{\"level\":2,\"title\":\"13.转译es6/es7\",\"slug\":\"_13-转译es6-es7\",\"link\":\"#_13-转译es6-es7\",\"children\":[]},{\"level\":2,\"title\":\"14.babel-run-time\",\"slug\":\"_14-babel-run-time\",\"link\":\"#_14-babel-run-time\",\"children\":[]},{\"level\":2,\"title\":\"15.eslint\",\"slug\":\"_15-eslint\",\"link\":\"#_15-eslint\",\"children\":[]},{\"level\":2,\"title\":\"16.引入字体\",\"slug\":\"_16-引入字体\",\"link\":\"#_16-引入字体\",\"children\":[]},{\"level\":2,\"title\":\"17.如何调试\",\"slug\":\"_17-如何调试\",\"link\":\"#_17-如何调试\",\"children\":[]},{\"level\":2,\"title\":\"18.第三方库\",\"slug\":\"_18-第三方库\",\"link\":\"#_18-第三方库\",\"children\":[]},{\"level\":2,\"title\":\"19.watch\",\"slug\":\"_19-watch\",\"link\":\"#_19-watch\",\"children\":[]},{\"level\":2,\"title\":\"20.添加商标-拷贝静态文件\",\"slug\":\"_20-添加商标-拷贝静态文件\",\"link\":\"#_20-添加商标-拷贝静态文件\",\"children\":[]},{\"level\":2,\"title\":\"21服务器代理\",\"slug\":\"_21服务器代理\",\"link\":\"#_21服务器代理\",\"children\":[]},{\"level\":2,\"title\":\"22.webpack-dev-middleware\",\"slug\":\"_22-webpack-dev-middleware\",\"link\":\"#_22-webpack-dev-middleware\",\"children\":[]},{\"level\":2,\"title\":\"23.reslove\",\"slug\":\"_23-reslove\",\"link\":\"#_23-reslove\",\"children\":[]},{\"level\":2,\"title\":\"24.noParse\",\"slug\":\"_24-noparse\",\"link\":\"#_24-noparse\",\"children\":[]},{\"level\":2,\"title\":\"25.definePlugin\",\"slug\":\"_25-defineplugin\",\"link\":\"#_25-defineplugin\",\"children\":[]},{\"level\":2,\"title\":\"26.IgnorePlugin\",\"slug\":\"_26-ignoreplugin\",\"link\":\"#_26-ignoreplugin\",\"children\":[]},{\"level\":2,\"title\":\"27.区分环境变量\",\"slug\":\"_27-区分环境变量\",\"link\":\"#_27-区分环境变量\",\"children\":[]},{\"level\":2,\"title\":\"28.image-webpack-loader\",\"slug\":\"_28-image-webpack-loader\",\"link\":\"#_28-image-webpack-loader\",\"children\":[]},{\"level\":2,\"title\":\"29.多页mpa\",\"slug\":\"_29-多页mpa\",\"link\":\"#_29-多页mpa\",\"children\":[]},{\"level\":2,\"title\":\"29.日志优化\",\"slug\":\"_29-日志优化\",\"link\":\"#_29-日志优化\",\"children\":[]},{\"level\":2,\"title\":\"29.错误上报\",\"slug\":\"_29-错误上报\",\"link\":\"#_29-错误上报\",\"children\":[]},{\"level\":2,\"title\":\"30.日志输出\",\"slug\":\"_30-日志输出\",\"link\":\"#_30-日志输出\",\"children\":[]},{\"level\":2,\"title\":\"31.费时分析\",\"slug\":\"_31-费时分析\",\"link\":\"#_31-费时分析\",\"children\":[]},{\"level\":2,\"title\":\"32.webpack-bundle-analyzer\",\"slug\":\"_32-webpack-bundle-analyzer\",\"link\":\"#_32-webpack-bundle-analyzer\",\"children\":[]},{\"level\":2,\"title\":\"33.babel-polyfill\",\"slug\":\"_33-babel-polyfill\",\"link\":\"#_33-babel-polyfill\",\"children\":[]},{\"level\":2,\"title\":\"34.libraryTarget\",\"slug\":\"_34-librarytarget\",\"link\":\"#_34-librarytarget\",\"children\":[]},{\"level\":2,\"title\":\"35.npm 发布包\",\"slug\":\"_35-npm-发布包\",\"link\":\"#_35-npm-发布包\",\"children\":[]},{\"level\":2,\"title\":\"1.purgecss-webpack-plugin\",\"slug\":\"_1-purgecss-webpack-plugin\",\"link\":\"#_1-purgecss-webpack-plugin\",\"children\":[]},{\"level\":2,\"title\":\"2.cdn\",\"slug\":\"_2-cdn\",\"link\":\"#_2-cdn\",\"children\":[]},{\"level\":2,\"title\":\"3.rem\",\"slug\":\"_3-rem\",\"link\":\"#_3-rem\",\"children\":[]},{\"level\":2,\"title\":\"4.内联资源\",\"slug\":\"_4-内联资源\",\"link\":\"#_4-内联资源\",\"children\":[]},{\"level\":2,\"title\":\"1.DLL\",\"slug\":\"_1-dll\",\"link\":\"#_1-dll\",\"children\":[]},{\"level\":2,\"title\":\"2.tree-shaking\",\"slug\":\"_2-tree-shaking\",\"link\":\"#_2-tree-shaking\",\"children\":[]},{\"level\":2,\"title\":\"3.scope hoisting\",\"slug\":\"_3-scope-hoisting\",\"link\":\"#_3-scope-hoisting\",\"children\":[]},{\"level\":2,\"title\":\"4.split-chunks\",\"slug\":\"_4-split-chunks\",\"link\":\"#_4-split-chunks\",\"children\":[]}],\"readingTime\":{\"minutes\":9.96,\"words\":2989},\"filePathRelative\":\"zh/posts/webpack/base.md\",\"excerpt\":\"\\n<h2>1.概念</h2>\\n<figure><figcaption>WX20201123-091449@2x</figcaption></figure>\\n<p>对比 <a href=\\\"https://nodejs.org/api/modules.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Node.js 模块</a>，webpack <em>模块</em>能够以各种方式表达它们的依赖关系，几个例子如下：</p>\\n<ul>\\n<li><a href=\\\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">ES2015 <code>import</code></a> 语句</li>\\n<li><a href=\\\"http://www.commonjs.org/specs/modules/1.0/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">CommonJS</a> <code>require()</code> 语句</li>\\n<li><a href=\\\"https://github.com/amdjs/amdjs-api/blob/master/AMD.md\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">AMD</a> <code>define</code> 和 <code>require</code> 语句</li>\\n<li>css/sass/less 文件中的 <a href=\\\"https://developer.mozilla.org/en-US/docs/Web/CSS/@import\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><code>@import</code> 语句</a>。</li>\\n<li>样式(<code>url(...)</code>)或 HTML 文件(<code>&lt;img src=...&gt;</code>)中的图片链接(image url)</li>\\n</ul>\",\"autoDesc\":true}")
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
