import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/js/regexp.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/js/regexp.html\",\"title\":\"正则\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"正则\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"JS\"],\"gitInclude\":[],\"description\":\"编写正则表达式 创建方式 正则表达式两部分 元字符 修饰符 元字符详细解析 ^ $ \\\\ 把特殊符号转换成普通的 x|y [] 常用的正则表达式 1.验证是否为有效数字 /** 规则分析 可能出现+-号 也可能不出现 [+-]? 一位0-9都可以 多位首位不能为0 (\\\\d|([1-9])\\\\d+) 小数部分可能有可能没有 一旦有必须有小数点+数字 (.\\\\d...\"},\"headers\":[{\"level\":2,\"title\":\"编写正则表达式\",\"slug\":\"编写正则表达式\",\"link\":\"#编写正则表达式\",\"children\":[{\"level\":3,\"title\":\"创建方式\",\"slug\":\"创建方式\",\"link\":\"#创建方式\",\"children\":[]},{\"level\":3,\"title\":\"正则表达式两部分\",\"slug\":\"正则表达式两部分\",\"link\":\"#正则表达式两部分\",\"children\":[]}]},{\"level\":2,\"title\":\"元字符详细解析\",\"slug\":\"元字符详细解析\",\"link\":\"#元字符详细解析\",\"children\":[]},{\"level\":2,\"title\":\"常用的正则表达式\",\"slug\":\"常用的正则表达式\",\"link\":\"#常用的正则表达式\",\"children\":[]},{\"level\":2,\"title\":\"构造函数创建正则 可以拼接变量 两个斜杠之间的都是元字符\",\"slug\":\"构造函数创建正则-可以拼接变量-两个斜杠之间的都是元字符\",\"link\":\"#构造函数创建正则-可以拼接变量-两个斜杠之间的都是元字符\",\"children\":[]},{\"level\":2,\"title\":\"正则捕获\",\"slug\":\"正则捕获\",\"link\":\"#正则捕获\",\"children\":[{\"level\":3,\"title\":\"正则捕获的懒惰性\",\"slug\":\"正则捕获的懒惰性\",\"link\":\"#正则捕获的懒惰性\",\"children\":[]},{\"level\":3,\"title\":\"全部捕获 可用字符串的方法\",\"slug\":\"全部捕获-可用字符串的方法\",\"link\":\"#全部捕获-可用字符串的方法\",\"children\":[]}]},{\"level\":2,\"title\":\"正则捕获的贪婪性\",\"slug\":\"正则捕获的贪婪性\",\"link\":\"#正则捕获的贪婪性\",\"children\":[]},{\"level\":2,\"title\":\"其他正则捕获的方法\",\"slug\":\"其他正则捕获的方法\",\"link\":\"#其他正则捕获的方法\",\"children\":[{\"level\":3,\"title\":\"test也能捕获 本意是匹配\",\"slug\":\"test也能捕获-本意是匹配\",\"link\":\"#test也能捕获-本意是匹配\",\"children\":[]},{\"level\":3,\"title\":\"replace 字符串中实现替换的方法 一般都是伴随正则使用的\",\"slug\":\"replace-字符串中实现替换的方法-一般都是伴随正则使用的\",\"link\":\"#replace-字符串中实现替换的方法-一般都是伴随正则使用的\",\"children\":[]},{\"level\":3,\"title\":\"案例 把时间字符串进行处理\",\"slug\":\"案例-把时间字符串进行处理\",\"link\":\"#案例-把时间字符串进行处理\",\"children\":[]}]},{\"level\":2,\"title\":\"单词首字母大写\",\"slug\":\"单词首字母大写\",\"link\":\"#单词首字母大写\",\"children\":[{\"level\":3,\"title\":\"常用案例\",\"slug\":\"常用案例\",\"link\":\"#常用案例\",\"children\":[]}]}],\"readingTime\":{\"minutes\":12,\"words\":3601},\"filePathRelative\":\"posts/posts/js/regexp.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"<h2>编写正则表达式</h2>\\n<h3>创建方式</h3>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> str</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'hello'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> reg</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\\"> /</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E06C75\\\">\\\\d</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\\">+</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\\">/</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">reg</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">test</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">str</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">)</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">reg</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> RegExp</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(“\\\\\\\\</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">d</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">+</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">”) </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//必须要转译 \\\\</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
