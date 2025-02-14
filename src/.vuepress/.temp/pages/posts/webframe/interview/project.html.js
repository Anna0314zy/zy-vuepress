import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/webframe/interview/project.html.vue"
const data = JSON.parse("{\"path\":\"/posts/webframe/interview/project.html\",\"title\":\"项目实战\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"项目实战\",\"date\":\"2019-06-11T00:00:00.000Z\",\"tags\":[\"Vue\",\"Vuex\"],\"gitInclude\":[],\"description\":\"项目中tab栏切换 问题描述: 每次切换tab栏的时候，请求了后端接口，如何保证内容的正确性 因为 连续请求后端的时候 接口是异步的 无法保证最后一个回来的内容是你想要的 解决方案: 1.按钮禁用 2.请求接口的时候，给接口传个标识，返回的结果加上这个标识，如果是想要的内容才显示 3.用axios.CancelToken 1.实例化axios 2.st...\"},\"headers\":[{\"level\":2,\"title\":\"项目中tab栏切换\",\"slug\":\"项目中tab栏切换\",\"link\":\"#项目中tab栏切换\",\"children\":[]},{\"level\":2,\"title\":\"axios封装 接口加载中处理\",\"slug\":\"axios封装-接口加载中处理\",\"link\":\"#axios封装-接口加载中处理\",\"children\":[]},{\"level\":2,\"title\":\"vuex的使用\",\"slug\":\"vuex的使用\",\"link\":\"#vuex的使用\",\"children\":[]},{\"level\":2,\"title\":\"级联组件 el-cascader\",\"slug\":\"级联组件-el-cascader\",\"link\":\"#级联组件-el-cascader\",\"children\":[]},{\"level\":2,\"title\":\"el-select大数据渲染\",\"slug\":\"el-select大数据渲染\",\"link\":\"#el-select大数据渲染\",\"children\":[]},{\"level\":2,\"title\":\"如何实现项目主题色\",\"slug\":\"如何实现项目主题色\",\"link\":\"#如何实现项目主题色\",\"children\":[]}],\"readingTime\":{\"minutes\":6.29,\"words\":1888},\"filePathRelative\":\"posts/webframe/interview/project.md\",\"localizedDate\":\"June 11, 2019\",\"excerpt\":\"\\n<h2>项目中tab栏切换</h2>\\n<p>问题描述: 每次切换tab栏的时候，请求了后端接口，如何保证内容的正确性<br>\\n因为 连续请求后端的时候 接口是异步的 无法保证最后一个回来的内容是你想要的<br>\\n解决方案:</p>\\n<ul>\\n<li>1.按钮禁用</li>\\n<li>2.请求接口的时候，给接口传个标识，返回的结果加上这个标识，如果是想要的内容才显示</li>\\n<li>3.用axios.CancelToken<br>\\n1.实例化axios</li>\\n</ul>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">class</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> AjaxRequest</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">  constructor</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">    // development production</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">    this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">baseURL</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> process</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">env</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E06C75\\\">NODE_ENV</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> !==</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'production'</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#C678DD\\\"> ?</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'http://localhost:3000/api'</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#C678DD\\\">      :</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> '/'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 基础路径</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">    this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">timeout</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 3000</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 超时时间</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  }</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">  setInterceptor</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">instance</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">url</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    instance</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">interceptors</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">request</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">use</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">((</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">config</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> { </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 请求拦截</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">      const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> Cancel</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> axios</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">CancelToken</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">      // 每次请求前 将token 放到请求中</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">      config</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">headers</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">token</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> localStorage</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">getItem</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'token'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">||</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> ''</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">      config</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">cancelToken</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Cancel</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(((</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">c</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">        store</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">commit</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">types</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E06C75\\\">PUSH_TOKEN</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">c</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//订阅</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">      }));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">      return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> config</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">err</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> =&gt;</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Promise</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">reject</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">err</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">  request</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">options</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> instance</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> axios</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">create</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">();</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    const</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> config</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">      ...</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">options</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      baseURL</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">baseURL</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">      timeout</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\\">:</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">timeout</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    };</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">    // 给这个实例增加拦截器</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">    this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">setInterceptor</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">instance</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">options</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">url</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 给这个实例增加拦截功能</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> instance</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">config</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 返回的是一个promise</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">export</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#C678DD\\\"> default</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> AjaxRequest</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">();</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
