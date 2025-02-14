import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/es6_系列/classInherit.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/es6_%E7%B3%BB%E5%88%97/classInherit.html\",\"title\":\"es6中的class学习(对比java)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"es6中的class学习(对比java)\",\"date\":\"2019-06-10T00:00:00.000Z\",\"tags\":[\"ES6\",\"class\"],\"gitInclude\":[],\"description\":\"前言 先上两段代码： java中定义类: Es6中定义一个类： 通过上面两段代码引出我们今天要说的相关内容 类中的变量 二者异 在java中可以直接声明各种类型的私有变量，在ES6中的类不可以直接在类中声明私有变量，声明后会报错。 注意：但是随着v8的更新，在node12版本中，ES增加了一些新规范，其中就有支持类的私有变量这一条。 代码如下： 在类的...\"},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"类中的变量\",\"slug\":\"类中的变量\",\"link\":\"#类中的变量\",\"children\":[]},{\"level\":2,\"title\":\"类中的构造函数\",\"slug\":\"类中的构造函数\",\"link\":\"#类中的构造函数\",\"children\":[]},{\"level\":2,\"title\":\"类中的方法\",\"slug\":\"类中的方法\",\"link\":\"#类中的方法\",\"children\":[]},{\"level\":2,\"title\":\"类中的继承\",\"slug\":\"类中的继承\",\"link\":\"#类中的继承\",\"children\":[]},{\"level\":2,\"title\":\"ES6中的类与原型链的关系\",\"slug\":\"es6中的类与原型链的关系\",\"link\":\"#es6中的类与原型链的关系\",\"children\":[]},{\"level\":2,\"title\":\"ES6中类的出现有什么好处\",\"slug\":\"es6中类的出现有什么好处\",\"link\":\"#es6中类的出现有什么好处\",\"children\":[]}],\"readingTime\":{\"minutes\":5.71,\"words\":1713},\"filePathRelative\":\"posts/posts copy/[es6]系列/classInherit.md\",\"localizedDate\":\"2019年6月10日\",\"excerpt\":\"<h2>前言</h2>\\n<p>先上两段代码：<br>\\njava中定义类:</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"javascript\\\" data-title=\\\"javascript\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">public</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> class</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Person</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    private</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> String</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    private</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> int</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> age</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">   </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    public</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Person</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">String</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\"> name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">int</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\"> age</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">){</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">name</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">name</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">age</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">=</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">age</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    public</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#C678DD\\\"> void</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> getInfo</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(){ </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">        System</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">out</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">println</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">name</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">+</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">age</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
