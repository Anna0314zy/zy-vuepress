import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/brower/renderTree.html.vue"
const data = JSON.parse("{\"path\":\"/posts/brower/renderTree.html\",\"title\":\"渲染树的形成原理\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"渲染树的形成原理\",\"date\":\"2019-10-28T00:00:00.000Z\",\"tags\":[\"CSS\",\"渲染树\",\"浏览器\"],\"gitInclude\":[],\"description\":\"说一下为什么写这个系列？ 原因一：该文章系列不管你是前端开发者，还是后端开发者在面试中经常会被问到一个问题 “从浏览器输入url到页面显示经历了哪些？” 一个非常常见的问题，看了该系列绝对能惊到面试官，可能就因为这一道面试题就收了你呢！嘿嘿。 原因二：自己主要是后端方向，该系列文章也是为了学习记录，方便以后查阅。极客时间李兵老师也开了这个专栏，看后还有...\"},\"headers\":[{\"level\":2,\"title\":\"什么是DOM\",\"slug\":\"什么是dom\",\"link\":\"#什么是dom\",\"children\":[]},{\"level\":2,\"title\":\"渲染树最终形成经历了哪些\",\"slug\":\"渲染树最终形成经历了哪些\",\"link\":\"#渲染树最终形成经历了哪些\",\"children\":[]},{\"level\":2,\"title\":\"HTML解析器\",\"slug\":\"html解析器\",\"link\":\"#html解析器\",\"children\":[]},{\"level\":2,\"title\":\"CSS解析器\",\"slug\":\"css解析器\",\"link\":\"#css解析器\",\"children\":[]},{\"level\":2,\"title\":\"javascript对DOM树与CSSOM树创建的影响\",\"slug\":\"javascript对dom树与cssom树创建的影响\",\"link\":\"#javascript对dom树与cssom树创建的影响\",\"children\":[]},{\"level\":2,\"title\":\"构建渲染树\",\"slug\":\"构建渲染树\",\"link\":\"#构建渲染树\",\"children\":[]},{\"level\":2,\"title\":\"本文渲染树形成过程可以做哪些优化\",\"slug\":\"本文渲染树形成过程可以做哪些优化\",\"link\":\"#本文渲染树形成过程可以做哪些优化\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[{\"level\":3,\"title\":\"参考资料:\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]},{\"level\":3,\"title\":\"关注我\",\"slug\":\"关注我\",\"link\":\"#关注我\",\"children\":[]}]}],\"readingTime\":{\"minutes\":9.3,\"words\":2790},\"filePathRelative\":\"posts/brower/renderTree.md\",\"localizedDate\":\"October 28, 2019\",\"excerpt\":\"<figure><img src=\\\"http://img.xiaogangzai.cn/16e05cfa4cbc2139.jpg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<p>说一下为什么写这个系列？</p>\\n<ul>\\n<li>原因一：该文章系列不管你是前端开发者，还是后端开发者在面试中经常会被问到一个问题 <code>“从浏览器输入url到页面显示经历了哪些？”</code> 一个<code>非常</code>常见的问题，看了该系列绝对能惊到面试官，可能就因为这一道面试题就收了你呢！嘿嘿。</li>\\n<li>原因二：自己主要是后端方向，该系列文章也是为了学习记录，方便以后查阅。极客时间李兵老师也开了这个专栏，看后还有几个疑问的点，自己查询资料学习整理一遍。</li>\\n</ul>\",\"autoDesc\":true}")
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
