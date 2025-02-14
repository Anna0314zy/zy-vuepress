import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/node/event_loop.html.vue"
const data = JSON.parse("{\"path\":\"/posts/node/event_loop.html\",\"title\":\"node事件循环\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"node事件循环\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"本文涵盖 面试题的引入 笔者对事件循环面试题执行顺序的一些疑问 通过面试题对微任务、事件循环、定时器等对深入理解 结论总计 面试题 面试题如下，大家可以先试着写一下输出结果，然后再看我下面的详细讲解，看看会不会有什么出入，如果把整个顺序弄清楚node.js的执行顺序应该就没问题了。 面试题正确的输出结果 提出问题 在理解node.js的异步的时候有一些...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/posts/node/event_loop.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的基地\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"node事件循环\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本文涵盖 面试题的引入 笔者对事件循环面试题执行顺序的一些疑问 通过面试题对微任务、事件循环、定时器等对深入理解 结论总计 面试题 面试题如下，大家可以先试着写一下输出结果，然后再看我下面的详细讲解，看看会不会有什么出入，如果把整个顺序弄清楚node.js的执行顺序应该就没问题了。 面试题正确的输出结果 提出问题 在理解node.js的异步的时候有一些...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Node.js\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"node事件循环\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mrs.Zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"面试题\",\"slug\":\"面试题\",\"link\":\"#面试题\",\"children\":[]},{\"level\":2,\"title\":\"提出问题\",\"slug\":\"提出问题\",\"link\":\"#提出问题\",\"children\":[]},{\"level\":2,\"title\":\"详细讲解\",\"slug\":\"详细讲解\",\"link\":\"#详细讲解\",\"children\":[]},{\"level\":2,\"title\":\"整体结论\",\"slug\":\"整体结论\",\"link\":\"#整体结论\",\"children\":[]},{\"level\":2,\"title\":\"附件:参考资料\",\"slug\":\"附件-参考资料\",\"link\":\"#附件-参考资料\",\"children\":[]}],\"readingTime\":{\"minutes\":7.59,\"words\":2278},\"filePathRelative\":\"posts/node/event_loop.md\",\"excerpt\":\"<p><strong>本文涵盖</strong></p>\\n<ul>\\n<li>面试题的引入</li>\\n<li>笔者对事件循环面试题执行顺序的一些疑问</li>\\n<li>通过面试题对微任务、事件循环、定时器等对深入理解</li>\\n<li>结论总计</li>\\n</ul>\\n<h2>面试题</h2>\\n<p>面试题如下，大家可以先试着写一下输出结果，然后再看我下面的详细讲解，看看会不会有什么出入，如果把整个顺序弄清楚node.js的执行顺序应该就没问题了。</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"javascript\\\" data-title=\\\"javascript\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">async</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> async1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'async1 start'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    await</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> async2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">()</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'async1 end'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">  }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">async</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> async2</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'async2'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'script start'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">setTimeout</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'setTimeout0'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">},</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)  </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">setTimeout</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'setTimeout3'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">},</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\">3</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)  </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">setImmediate</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'setImmediate'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">process</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">nextTick</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(() </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">=&gt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'nextTick'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">));</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">async1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">();</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">new</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Promise</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">resolve</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'promise1'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    resolve</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">();</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'promise2'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}).</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">then</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">    console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'promise3'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">})</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'script end'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
