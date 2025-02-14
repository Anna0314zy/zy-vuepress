import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/tomato.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/tomato.html\",\"title\":\"番茄\",\"lang\":\"zh-CN\",\"frontmatter\":{\"cover\":\"/assets/images/cover2.jpg\",\"icon\":\"pen-to-square\",\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"蔬菜\"],\"tag\":[\"红\",\"圆\"],\"star\":true,\"sticky\":true,\"gitInclude\":[],\"description\":\"番茄 标题 2 这里是内容。 标题 3 这里是内容。\"},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.13,\"words\":38},\"filePathRelative\":\"zh/posts/tomato.md\",\"localizedDate\":\"2022年1月12日\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
