import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/interview/css.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/interview/css.html\",\"title\":\"前端面试 10个css高频面试题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"前端面试 10个css高频面试题\",\"date\":\"2019-05-19T00:00:00.000Z\",\"tags\":[\"CSS\",\"面试\"],\"gitInclude\":[],\"description\":\"1. BFC 机制 BFC(Block Formatting Context)，块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。 触发条件 (以下任意一条) float 的值不为 none overflow 的值不为 visible display 的值为 table-cell、ta...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/interview/css.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"前端面试 10个css高频面试题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1. BFC 机制 BFC(Block Formatting Context)，块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。 触发条件 (以下任意一条) float 的值不为 none overflow 的值不为 visible display 的值为 table-cell、ta...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"http://img.xiaogangzai.cn/interview_01.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"CSS\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"面试\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-05-19T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"前端面试 10个css高频面试题\\\",\\\"image\\\":[\\\"http://img.xiaogangzai.cn/interview_01.png\\\",\\\"http://img.xiaogangzai.cn/interview_02.png\\\",\\\"http://img.xiaogangzai.cn/interview_03.png\\\",\\\"http://img.xiaogangzai.cn/interview_04.png\\\",\\\"http://img.xiaogangzai.cn/interview_05.png\\\",\\\"http://img.xiaogangzai.cn/interview_05.png\\\",\\\"http://img.xiaogangzai.cn/interview_06.png\\\"],\\\"datePublished\\\":\\\"2019-05-19T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. BFC 机制\",\"slug\":\"_1-bfc-机制\",\"link\":\"#_1-bfc-机制\",\"children\":[]},{\"level\":2,\"title\":\"2. CSS3 中新增的选择器以及属性\",\"slug\":\"_2-css3-中新增的选择器以及属性\",\"link\":\"#_2-css3-中新增的选择器以及属性\",\"children\":[]},{\"level\":2,\"title\":\"3. 居中布局\",\"slug\":\"_3-居中布局\",\"link\":\"#_3-居中布局\",\"children\":[]},{\"level\":2,\"title\":\"4. 清除浮动有哪些方法, 各有什么优缺点\",\"slug\":\"_4-清除浮动有哪些方法-各有什么优缺点\",\"link\":\"#_4-清除浮动有哪些方法-各有什么优缺点\",\"children\":[]},{\"level\":2,\"title\":\"5. 用纯 CSS 创建一个三角形的原理是什么\",\"slug\":\"_5-用纯-css-创建一个三角形的原理是什么\",\"link\":\"#_5-用纯-css-创建一个三角形的原理是什么\",\"children\":[]},{\"level\":2,\"title\":\"6. 实现三栏布局有哪些方法, 分别描述一下\",\"slug\":\"_6-实现三栏布局有哪些方法-分别描述一下\",\"link\":\"#_6-实现三栏布局有哪些方法-分别描述一下\",\"children\":[]},{\"level\":2,\"title\":\"7. css3 实现 0.5px 的细线\",\"slug\":\"_7-css3-实现-0-5px-的细线\",\"link\":\"#_7-css3-实现-0-5px-的细线\",\"children\":[]},{\"level\":2,\"title\":\"8. link 与 @import 的区别\",\"slug\":\"_8-link-与-import-的区别\",\"link\":\"#_8-link-与-import-的区别\",\"children\":[]},{\"level\":2,\"title\":\"9. 开发中为什么要初始化 css 样式\",\"slug\":\"_9-开发中为什么要初始化-css-样式\",\"link\":\"#_9-开发中为什么要初始化-css-样式\",\"children\":[]},{\"level\":2,\"title\":\"10. CSS 优化、提高性能的方法有哪些\",\"slug\":\"_10-css-优化、提高性能的方法有哪些\",\"link\":\"#_10-css-优化、提高性能的方法有哪些\",\"children\":[]},{\"level\":2,\"title\":\"11.介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？\",\"slug\":\"_11-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的\",\"link\":\"#_11-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的\",\"children\":[]},{\"level\":2,\"title\":\"12.box-sizing属性？\",\"slug\":\"_12-box-sizing属性\",\"link\":\"#_12-box-sizing属性\",\"children\":[]},{\"level\":2,\"title\":\"13.CSS选择器有哪些？哪些属性可以继承？\",\"slug\":\"_13-css选择器有哪些-哪些属性可以继承\",\"link\":\"#_13-css选择器有哪些-哪些属性可以继承\",\"children\":[]},{\"level\":2,\"title\":\"14.CSS优先级算法如何计算？\",\"slug\":\"_14-css优先级算法如何计算\",\"link\":\"#_14-css优先级算法如何计算\",\"children\":[]},{\"level\":2,\"title\":\"15.CSS3新增伪类有那些?\",\"slug\":\"_15-css3新增伪类有那些\",\"link\":\"#_15-css3新增伪类有那些\",\"children\":[]},{\"level\":2,\"title\":\"16.display有哪些值？说明他们的作用?\",\"slug\":\"_16-display有哪些值-说明他们的作用\",\"link\":\"#_16-display有哪些值-说明他们的作用\",\"children\":[]},{\"level\":2,\"title\":\"17.position的值？\",\"slug\":\"_17-position的值\",\"link\":\"#_17-position的值\",\"children\":[]},{\"level\":2,\"title\":\"18.CSS3有哪些新特性？\",\"slug\":\"_18-css3有哪些新特性\",\"link\":\"#_18-css3有哪些新特性\",\"children\":[]},{\"level\":2,\"title\":\"19请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？\",\"slug\":\"_19请解释一下css3的flexbox-弹性盒布局模型-以及适用场景\",\"link\":\"#_19请解释一下css3的flexbox-弹性盒布局模型-以及适用场景\",\"children\":[]},{\"level\":2,\"title\":\"20. 开发中为什么要初始化css样式\",\"slug\":\"_20-开发中为什么要初始化css样式\",\"link\":\"#_20-开发中为什么要初始化css样式\",\"children\":[]},{\"level\":2,\"title\":\"21. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？\",\"slug\":\"_21-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的ie\",\"link\":\"#_21-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的ie\",\"children\":[]},{\"level\":2,\"title\":\"22. 视差滚动效果？\",\"slug\":\"_22-视差滚动效果\",\"link\":\"#_22-视差滚动效果\",\"children\":[]},{\"level\":2,\"title\":\"23. ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用\",\"slug\":\"_23-before-和-after中双冒号和单冒号有什么区别-解释一下这2个伪元素的作用\",\"link\":\"#_23-before-和-after中双冒号和单冒号有什么区别-解释一下这2个伪元素的作用\",\"children\":[]},{\"level\":2,\"title\":\"24. 你对line-height是如何理解的？\",\"slug\":\"_24-你对line-height是如何理解的\",\"link\":\"#_24-你对line-height是如何理解的\",\"children\":[]},{\"level\":2,\"title\":\"25. 怎么让Chrome支持小于12px 的文字？\",\"slug\":\"_25-怎么让chrome支持小于12px-的文字\",\"link\":\"#_25-怎么让chrome支持小于12px-的文字\",\"children\":[]},{\"level\":2,\"title\":\"26. 让页面里的字体变清晰，变细用CSS怎么做？\",\"slug\":\"_26-让页面里的字体变清晰-变细用css怎么做\",\"link\":\"#_26-让页面里的字体变清晰-变细用css怎么做\",\"children\":[]},{\"level\":2,\"title\":\"27. position:fixed;在android下无效怎么处理？\",\"slug\":\"_27-position-fixed-在android下无效怎么处理\",\"link\":\"#_27-position-fixed-在android下无效怎么处理\",\"children\":[]},{\"level\":2,\"title\":\"28. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？\",\"slug\":\"_28-如果需要手动写动画-你认为最小时间间隔是多久-为什么\",\"link\":\"#_28-如果需要手动写动画-你认为最小时间间隔是多久-为什么\",\"children\":[]},{\"level\":2,\"title\":\"29. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？\",\"slug\":\"_29-li与li之间有看不见的空白间隔是什么原因引起的-有什么解决办法\",\"link\":\"#_29-li与li之间有看不见的空白间隔是什么原因引起的-有什么解决办法\",\"children\":[]},{\"level\":2,\"title\":\"30. display:inline-block 什么时候会显示间隙？\",\"slug\":\"_30-display-inline-block-什么时候会显示间隙\",\"link\":\"#_30-display-inline-block-什么时候会显示间隙\",\"children\":[]},{\"level\":2,\"title\":\"31. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度\",\"slug\":\"_31-有一个高度自适应的div-里面有两个div-一个高度100px-希望另一个填满剩下的高度\",\"link\":\"#_31-有一个高度自适应的div-里面有两个div-一个高度100px-希望另一个填满剩下的高度\",\"children\":[]},{\"level\":2,\"title\":\"32. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？\",\"slug\":\"_32-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过webp\",\"link\":\"#_32-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过webp\",\"children\":[]},{\"level\":2,\"title\":\"33. style标签写在body后与body前有什么区别？\",\"slug\":\"_33-style标签写在body后与body前有什么区别\",\"link\":\"#_33-style标签写在body后与body前有什么区别\",\"children\":[]},{\"level\":2,\"title\":\"34. CSS属性overflow属性定义溢出元素内容区的内容会如何处理?\",\"slug\":\"_34-css属性overflow属性定义溢出元素内容区的内容会如何处理\",\"link\":\"#_34-css属性overflow属性定义溢出元素内容区的内容会如何处理\",\"children\":[]},{\"level\":2,\"title\":\"35 阐述一下CSS Sprites\",\"slug\":\"_35-阐述一下css-sprites\",\"link\":\"#_35-阐述一下css-sprites\",\"children\":[]}],\"readingTime\":{\"minutes\":19.47,\"words\":5842},\"filePathRelative\":\"zh/posts/interview/css.md\",\"localizedDate\":\"2019年5月19日\",\"excerpt\":\"\\n<h2>1. BFC 机制</h2>\\n<p>BFC(Block Formatting Context)，<strong>块级格式化上下文</strong>，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。</p>\\n<ul>\\n<li>触发条件 (以下任意一条)\\n<ul>\\n<li>float 的值不为 none</li>\\n<li>overflow 的值不为 visible</li>\\n<li>display 的值为 table-cell、tabble-caption 和 inline-block 之一</li>\\n<li>position 的值不为 static 或则 releative 中的任何一个</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
