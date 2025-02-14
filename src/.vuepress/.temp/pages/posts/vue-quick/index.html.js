import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/vue-quick/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/vue-quick/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"标签\"},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"posts/vue-quick/README.md\",\"excerpt\":\"<p>标签</p>\\n\",\"autoDesc\":true}")
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
