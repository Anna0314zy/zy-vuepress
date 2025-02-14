import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/node-quick/buffer.html.vue"
const data = JSON.parse("{\"path\":\"/posts/node-quick/buffer.html\",\"title\":\"Buffer的应用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Buffer的应用\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"Buffer的应用 一.编码的发展 一个字节由8个位组成，gbk中一个汉字2个字节，utf8中一个汉字3个字节 ASCII编码 GB2312 GBK GB18030 Unicode UTF-8 Node中不支持GBK编码，我们需要将GBK转为UTF8编码 二.进制转化 三.Buffer的应用 1.定义buffer的三种方式 2.buffer中常用的方法...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zy-vuepress/posts/node-quick/buffer.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"我的基地\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Buffer的应用\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Buffer的应用 一.编码的发展 一个字节由8个位组成，gbk中一个汉字2个字节，utf8中一个汉字3个字节 ASCII编码 GB2312 GBK GB18030 Unicode UTF-8 Node中不支持GBK编码，我们需要将GBK转为UTF8编码 二.进制转化 三.Buffer的应用 1.定义buffer的三种方式 2.buffer中常用的方法...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Node.js\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-01-06T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Buffer的应用\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-01-06T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mrs.Zoe\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"一.编码的发展\",\"slug\":\"一-编码的发展\",\"link\":\"#一-编码的发展\",\"children\":[]},{\"level\":2,\"title\":\"二.进制转化\",\"slug\":\"二-进制转化\",\"link\":\"#二-进制转化\",\"children\":[]},{\"level\":2,\"title\":\"三.Buffer的应用\",\"slug\":\"三-buffer的应用\",\"link\":\"#三-buffer的应用\",\"children\":[{\"level\":3,\"title\":\"1.定义buffer的三种方式\",\"slug\":\"_1-定义buffer的三种方式\",\"link\":\"#_1-定义buffer的三种方式\",\"children\":[]},{\"level\":3,\"title\":\"2.buffer中常用的方法\",\"slug\":\"_2-buffer中常用的方法\",\"link\":\"#_2-buffer中常用的方法\",\"children\":[]},{\"level\":3,\"title\":\"3.base64转化\",\"slug\":\"_3-base64转化\",\"link\":\"#_3-base64转化\",\"children\":[]}]},{\"level\":2,\"title\":\"四.前端二进制对象\",\"slug\":\"四-前端二进制对象\",\"link\":\"#四-前端二进制对象\",\"children\":[{\"level\":3,\"title\":\"1.前端下载html功能\",\"slug\":\"_1-前端下载html功能\",\"link\":\"#_1-前端下载html功能\",\"children\":[]},{\"level\":3,\"title\":\"2.前端文件预览\",\"slug\":\"_2-前端文件预览\",\"link\":\"#_2-前端文件预览\",\"children\":[]},{\"level\":3,\"title\":\"3.arrayBuffer(浏览器中的二进制)\",\"slug\":\"_3-arraybuffer-浏览器中的二进制\",\"link\":\"#_3-arraybuffer-浏览器中的二进制\",\"children\":[]},{\"level\":3,\"title\":\"4.字符串和arrayBuffer转化\",\"slug\":\"_4-字符串和arraybuffer转化\",\"link\":\"#_4-字符串和arraybuffer转化\",\"children\":[]},{\"level\":3,\"title\":\"5.responseType:'arrayBuffer'\",\"slug\":\"_5-responsetype-arraybuffer\",\"link\":\"#_5-responsetype-arraybuffer\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.93,\"words\":879},\"filePathRelative\":\"posts/node-quick/buffer.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"\\n<h2>一.编码的发展</h2>\\n<p>一个字节由8个位组成，gbk中一个汉字2个字节，utf8中一个汉字3个字节</p>\\n<ul>\\n<li>ASCII编码</li>\\n<li>GB2312</li>\\n<li>GBK</li>\\n<li>GB18030</li>\\n<li>Unicode</li>\\n<li>UTF-8<br>\\nNode中不支持GBK编码，我们需要将GBK转为UTF8编码</li>\\n</ul>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">var</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> iconv</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> require</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'iconv-lite'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> readGBKText</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">pathname</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    var</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> bin</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> fs</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">readFileSync</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">pathname</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> iconv</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">decode</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">bin</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'gbk'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
