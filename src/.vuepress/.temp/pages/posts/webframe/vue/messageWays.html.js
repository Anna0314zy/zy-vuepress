import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/webframe/vue/messageWays.html.vue"
const data = JSON.parse("{\"path\":\"/posts/webframe/vue/messageWays.html\",\"title\":\"vue中8种组件通信方式\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"vue中8种组件通信方式\",\"date\":\"2019-06-11T00:00:00.000Z\",\"tags\":[\"Vue\",\"Vuex\",\"通信方式\"],\"gitInclude\":[],\"description\":\"之前写了一篇关于vue面试总结的文章, 有不少网友提出组件之间通信方式还有很多, 这篇文章便是专门总结组件之间通信的 vue是数据驱动视图更新的框架, 所以对于vue来说组件间的数据通信非常重要，那么组件之间如何进行数据通信的呢？ 首先我们需要知道在vue中组件之间存在什么样的关系, 才更容易理解他们的通信方式, 就好像过年回家，坐着一屋子的陌生人，相...\"},\"headers\":[{\"level\":2,\"title\":\"一、props / $emit\",\"slug\":\"一、props-emit\",\"link\":\"#一、props-emit\",\"children\":[]},{\"level\":2,\"title\":\"二、  $children / $parent\",\"slug\":\"二、-children-parent\",\"link\":\"#二、-children-parent\",\"children\":[]},{\"level\":2,\"title\":\"三、provide/ inject\",\"slug\":\"三、provide-inject\",\"link\":\"#三、provide-inject\",\"children\":[]},{\"level\":2,\"title\":\"四、ref / refs\",\"slug\":\"四、ref-refs\",\"link\":\"#四、ref-refs\",\"children\":[]},{\"level\":2,\"title\":\"五、eventBus\",\"slug\":\"五、eventbus\",\"link\":\"#五、eventbus\",\"children\":[]},{\"level\":2,\"title\":\"六、Vuex\",\"slug\":\"六、vuex\",\"link\":\"#六、vuex\",\"children\":[]},{\"level\":2,\"title\":\"七、 localStorage / sessionStorage\",\"slug\":\"七、-localstorage-sessionstorage\",\"link\":\"#七、-localstorage-sessionstorage\",\"children\":[]},{\"level\":2,\"title\":\"八 $attrs与 $listeners\",\"slug\":\"八-attrs与-listeners\",\"link\":\"#八-attrs与-listeners\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结-1\",\"link\":\"#总结-1\",\"children\":[]}],\"readingTime\":{\"minutes\":10.75,\"words\":3226},\"filePathRelative\":\"posts/webframe/vue/messageWays.md\",\"localizedDate\":\"June 11, 2019\",\"excerpt\":\"\\n<blockquote>\\n<p>之前写了一篇关于vue面试总结的文章, 有不少网友提出组件之间通信方式还有很多, 这篇文章便是专门总结组件之间通信的</p>\\n</blockquote>\\n<p>vue是数据驱动视图更新的框架, 所以对于vue来说组件间的数据通信非常重要，那么组件之间如何进行数据通信的呢？<br>\\n首先我们需要知道在vue中组件之间存在什么样的关系, 才更容易理解他们的通信方式, 就好像过年回家，坐着一屋子的陌生人，相互之间怎么称呼，这时就需要先知道自己和他们之间是什么样的关系。<br>\\nvue组件中关系说明:<br>\\n<img src=\\\"http://img.xiaogangzai.cn/16bde5b613aac4ee.jpg\\\" alt=\\\"image\\\" loading=\\\"lazy\\\"></p>\",\"autoDesc\":true}")
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
