import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/src/.vuepress/.temp/pages/posts/webframe/javascript/prototype.html.vue"
const data = JSON.parse("{\"path\":\"/posts/webframe/javascript/prototype.html\",\"title\":\"javascript中的原型链\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"javascript中的原型链\",\"date\":\"2019-06-19T00:00:00.000Z\",\"tags\":[\"Javascript\"],\"gitInclude\":[],\"description\":\"总结 如何实现继承 Object.create 详细讲解，对象着手 在谈原型链之前，先了解对象。 所有引用类型（函数，数组，对象）都拥有proto属性（隐式原型） 所有函数拥有 prototype 属性（显式原型）（仅限函数） 原型对象：拥有 prototype 属性的对象，在定义函数时就被创建 prototype 与proto两个概念 prototy...\"},\"headers\":[{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]},{\"level\":2,\"title\":\"详细讲解，对象着手\",\"slug\":\"详细讲解-对象着手\",\"link\":\"#详细讲解-对象着手\",\"children\":[{\"level\":3,\"title\":\"prototype 与proto两个概念\",\"slug\":\"prototype-与proto两个概念\",\"link\":\"#prototype-与proto两个概念\",\"children\":[]}]},{\"level\":2,\"title\":\"原型链详解\",\"slug\":\"原型链详解\",\"link\":\"#原型链详解\",\"children\":[{\"level\":3,\"title\":\"代码对象原型链图:\",\"slug\":\"代码对象原型链图\",\"link\":\"#代码对象原型链图\",\"children\":[]},{\"level\":3,\"title\":\"对象访问属性顺序\",\"slug\":\"对象访问属性顺序\",\"link\":\"#对象访问属性顺序\",\"children\":[]},{\"level\":3,\"title\":\"in，hasOwnProperty 等方法的出现\",\"slug\":\"in-hasownproperty-等方法的出现\",\"link\":\"#in-hasownproperty-等方法的出现\",\"children\":[]},{\"level\":3,\"title\":\"特殊说明\",\"slug\":\"特殊说明\",\"link\":\"#特殊说明\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.93,\"words\":1178},\"filePathRelative\":\"posts/webframe/javascript/prototype.md\",\"localizedDate\":\"June 19, 2019\",\"excerpt\":\"\\n<h2>总结</h2>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//es3 构造函数充当类</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">function</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">  //构造函数中的属性 都是实例上的属性</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">  //以_明明都是私有属性</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">  this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">type</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> \\\"哺乳类\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">  this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">age</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 20</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">  this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">name</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">  return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {}; </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//返回一个引用类型</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">say</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">  console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"say\\\"</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> +</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">};</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">flag</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> \\\"动物\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//静态属性</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> a1</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//{}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> a2</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">();</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//每个对象都有一个__proto__指向所属类的原型</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 每个原型会有一个constuctor 指向所属类</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__proto__</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__proto__</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">constructor</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">constructor</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__proto__</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Object</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">Object</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__proto__</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ==</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> null</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">Animal</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__proto__</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\">Function</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">__proto__</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Object</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">prototype</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">); </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">//true</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
