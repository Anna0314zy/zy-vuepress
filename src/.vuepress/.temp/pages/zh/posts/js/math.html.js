import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/zh/posts/js/math.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/js/math.html\",\"title\":\"算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"算法\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"JS\"],\"gitInclude\":[],\"description\":\"排序 1.冒泡排序 2.插入排序 3.快速排序 二分查找 排好序的数组，找到某个数字对应的位置 如何实现一个回文字符串 tree 找id 匹配扩号\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/zh/posts/js/math.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"算法\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"排序 1.冒泡排序 2.插入排序 3.快速排序 二分查找 排好序的数组，找到某个数字对应的位置 如何实现一个回文字符串 tree 找id 匹配扩号\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JS\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-01-06T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"算法\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-01-06T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"排序\",\"slug\":\"排序\",\"link\":\"#排序\",\"children\":[{\"level\":3,\"title\":\"1.冒泡排序\",\"slug\":\"_1-冒泡排序\",\"link\":\"#_1-冒泡排序\",\"children\":[]},{\"level\":3,\"title\":\"2.插入排序\",\"slug\":\"_2-插入排序\",\"link\":\"#_2-插入排序\",\"children\":[]},{\"level\":3,\"title\":\"3.快速排序\",\"slug\":\"_3-快速排序\",\"link\":\"#_3-快速排序\",\"children\":[]}]},{\"level\":2,\"title\":\"二分查找\",\"slug\":\"二分查找\",\"link\":\"#二分查找\",\"children\":[]},{\"level\":2,\"title\":\"如何实现一个回文字符串\",\"slug\":\"如何实现一个回文字符串\",\"link\":\"#如何实现一个回文字符串\",\"children\":[]},{\"level\":2,\"title\":\"tree 找id\",\"slug\":\"tree-找id\",\"link\":\"#tree-找id\",\"children\":[]},{\"level\":2,\"title\":\"匹配扩号\",\"slug\":\"匹配扩号\",\"link\":\"#匹配扩号\",\"children\":[]}],\"readingTime\":{\"minutes\":3.13,\"words\":938},\"filePathRelative\":\"zh/posts/js/math.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"<h2>排序</h2>\\n<h3>1.冒泡排序</h3>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 冒泡排序</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">/**</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * 核心思想 </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> *    让数组中的当前项和后一项进项比较，如果当前项比后一项大 则两项交换位置 大的靠后</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> */</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> arr</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">12</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">15</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">24</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">8</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">];</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">/**</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\\">@</span><span style=\\\"--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\\">param</span><span style=\\\"--shiki-light:#C18401;--shiki-light-font-style:italic;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic\\\"> {*}</span><span style=\\\"--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\"> ary</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\\">@</span><span style=\\\"--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic\\\">return</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> ary 排序后的数组</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> */</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> bubble</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">    //外层控制i比较的轮数</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    for</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">&lt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">length</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> -</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">        //里层控制每一轮比较的次数</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        for</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">&lt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">length</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">-</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">-</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">            if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">] </span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">+</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">                //当前项大于后一项</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">                [</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">+</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">],</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]] </span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> [</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">],</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">[</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">j</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">+</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]]</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">            }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> ary</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">bubble</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">arr</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">))</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
