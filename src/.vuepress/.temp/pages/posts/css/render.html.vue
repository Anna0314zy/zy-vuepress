<template><div><nav class="table-of-contents"><ul><li><router-link to="#系列文章">系列文章</router-link></li><li><router-link to="#什么是dom">什么是DOM</router-link></li><li><router-link to="#渲染树最终形成经历了哪些">渲染树最终形成经历了哪些</router-link><ul><li><router-link to="#html解析器">HTML解析器</router-link></li><li><router-link to="#css解析器">CSS解析器</router-link></li><li><router-link to="#javascript对dom树与cssom树创建的影响">javascript对DOM树与CSSOM树创建的影响</router-link></li><li><router-link to="#构建渲染树">构建渲染树</router-link></li><li><router-link to="#本文渲染树形成过程可以做哪些优化">本文渲染树形成过程可以做哪些优化</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#参考资料">参考资料:</router-link></li><li><router-link to="#关注我">关注我</router-link></li></ul></li></ul></nav>
<h2 id="系列文章" tabindex="-1"><a class="header-anchor" href="#系列文章"><span>系列文章</span></a></h2>
<p>(<a href="http://img.xiaogangzai.cn/16e05cfa4cbc2139_cssrender.jpg" target="_blank" rel="noopener noreferrer">http://img.xiaogangzai.cn/16e05cfa4cbc2139_cssrender.jpg</a>)</p>
<p>说一下为什么写这个系列？</p>
<ul>
<li>原因一：该文章系列不管你是前端开发者，还是后端开发者在面试中经常会被问到一个问题 <code v-pre>“从浏览器输入url到页面显示经历了哪些？”</code> 一个<code v-pre>非常</code>常见的问题，看了该系列绝对能惊到面试官，可能就因为这一道面试题就收了你呢！嘿嘿。</li>
<li>原因二：自己主要是后端方向，该系列文章也是为了学习记录，方便以后查阅。极客时间李兵老师也开了这个专栏，看后还有几个疑问的点，自己查询资料学习整理一遍。</li>
</ul>
<p>作者简介：koala，专注完整的 Node.js 技术栈分享，从 JavaScript 到 Node.js,再到后端数据库，祝您成为优秀的高级 Node.js 工程师。【程序员成长指北】作者，Github 博客开源项目 <a href="https://github.com/koala-coding/goodBlog" target="_blank" rel="noopener noreferrer">https://github.com/koala-coding/goodBlog</a></p>
<h2 id="什么是dom" tabindex="-1"><a class="header-anchor" href="#什么是dom"><span>什么是DOM</span></a></h2>
<p>DOM是Document Object Model（文档对象模型）的缩写</p>
<blockquote>
<p>W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。-这是W3Cschool给的概念</p>
</blockquote>
<p>看了上面的概念好像太“官方”，解释就是 DOM 是对 HTML 文档结构化的表述，后端服务器返回给浏览器渲染引擎的 HTML 文件字节流是无法直接被浏览器渲染引擎理解的，要转化为渲染器引擎可以理解的内部结构，这个结构就是 DOM。<br>
W3C 那个概念我好像还没有把它全部翻译完，“<strong>允许程序和脚本动态地访问和更新文档的内容、结构和样式”</strong>。这里其实就是DOM的作用了</p>
<ol>
<li>页面展示: DOM 是生成页面的基础数据结构</li>
<li>JavaScript 脚本操作: DOM 提供给 JavaScript 脚本操作的接口，JavaScript 可以通过这些接口对 DOM 结构进行访问，从而改变文档的结构和样式</li>
<li>安全: DOM 是一道安全防线，DOM 解析阶段会过滤掉一些不安全的 DOM 内容。</li>
</ol>
<blockquote>
<p>本文我主要以 Webkit 渲染引擎来讲解，Safari 和 Chrome 都使用 Webkit。Webkit 是一款开源渲染引擎，它本来是为 linux 平台研发的，后来由 Apple 移植到 Mac 及 Windows 上。</p>
</blockquote>
<h2 id="渲染树最终形成经历了哪些" tabindex="-1"><a class="header-anchor" href="#渲染树最终形成经历了哪些"><span><strong>渲染树</strong>最终形成经历了哪些</span></a></h2>
<p>先看一张整体的流程图</p>
<p><img src="https://user-gold-cdn.xitu.io/2019/10/27/16e0dc9e313e18e2?w=1162&amp;h=744&amp;f=jpeg&amp;s=176670" alt="" loading="lazy"><br>
下面围绕这张图和不同代表性对例子进行讲解。</p>
<h3 id="html解析器" tabindex="-1"><a class="header-anchor" href="#html解析器"><span>HTML解析器</span></a></h3>
<p>从后端返回给浏览器渲染引擎 HTML 文件字节流，<br>
第一步要经过的就是渲染引擎中的 HTML 解析器。它实现了将 HTML 字节流转换为 DOM树 结构。 HTML 文件字节流返回的过程中 HTML 解析器就一直在解析，边加载边解析哦(这里注意下，有些文章写的有问题)。</p>
<p>例子1:最简单的不带 CSS 和 JavaScript 的 HTML 代码讲解 HTML 解析器</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>程序员成长指北&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据这段代码具体分析 HTML 解析器做了哪些事</p>
<h4 id="阶段一-字节流转换为字符并w3c标准令牌化" tabindex="-1"><a class="header-anchor" href="#阶段一-字节流转换为字符并w3c标准令牌化"><span>阶段一 字节流转换为字符并W3C标准令牌化</span></a></h4>
<p>读取 HTML 的原始字节流，并根据文件的指定编码（例如 UTF-8）将它们转换成各个字符。<br>
并将字符串转换成 W3C HTML5 标准规定的各种令牌，例如<code v-pre>&lt;html&gt;</code>、<code v-pre>&lt;body&gt;</code>，以及其他尖括号内的字符串。每个令牌都具有特殊含义和一组规则。</p>
<p>一堆字节流 <code v-pre>bytes</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">3C</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 62</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>转成正常的html文件</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    koala</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        程序员成长指北</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">P</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="阶段二-通过分词器将字节流转化为-token" tabindex="-1"><a class="header-anchor" href="#阶段二-通过分词器将字节流转化为-token"><span>阶段二 通过分词器将字节流转化为 Token</span></a></h4>
<p>分词器将字节流转换为一个一个的 Token，Token 分为 Tag Token和文本 Token，上面这段代码最后分词器转化后的结果是:</p>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/20/16de9a2bbccf77f5?w=601&amp;h=51&amp;f=png&amp;s=15441" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="阶段三和阶段四-将-token-解析为-dom-节点-并将-dom-节点添加到-dom-树中" tabindex="-1"><a class="header-anchor" href="#阶段三和阶段四-将-token-解析为-dom-节点-并将-dom-节点添加到-dom-树中"><span>阶段三和阶段四 将 Token 解析为 DOM 节点，并将 DOM 节点添加到 DOM 树中</span></a></h4>
<p>HTML 解析器维护了一个 Token 栈结构（<strong>数据结构</strong>真是个好东西），这个栈结构的目的就是用来计算节点间的父子关系，在上一个阶段生成的 Token 会被顺序压到这个栈中，以下是具体规则：</p>
<ul>
<li>HTML 解析器开始工作时，会默认创建了一个根为 document 的空 DOM 结构，同时会将一个 StartTag document 的 Token 压入栈底。</li>
</ul>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/20/16de9b307645fcb1?w=1054&amp;h=544&amp;f=jpeg&amp;s=53331" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>如果压入到栈中的 StartTagToken，HTML 解析器会为该 Token 创建一个 DOM节点，然后将这个 Dom节点加入到 DOM树中，它的<code v-pre>父节点</code>就是栈中相邻的那个元素生成的 DOM节点</li>
</ul>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/20/16de9b32db14b4d0?w=1046&amp;h=544&amp;f=jpeg&amp;s=63886" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>如果分词器解析出来的是文本 Token，那么会生成一个文本节点，然后把这个文本 Dom 节点加入到 DOM 树中（注:文本Token不需入栈）,它的<code v-pre>父节点</code>就是当前栈顶 Token 所对应的 DOM 节点。</li>
</ul>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/20/16de9b34a296a0c7?w=1066&amp;h=598&amp;f=jpeg&amp;s=91205" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>如果分词器解析出来的是 EndTag 标签，比如例子中的 EndTag div，HTML 解析器会查看 Token栈顶的元素是否是 StartTag div，如果是，就将 StartTag div从栈中弹出，边上该 div 元素解析完成。</li>
</ul>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/20/16de9b3d02fe010f?w=1180&amp;h=642&amp;f=jpeg&amp;s=112404" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>最后按照上面的规则，分词器一路解析下来，就形成了这个简单的 DOM 树。</li>
</ul>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/23/16df8e2e6a2bcdcd?w=1058&amp;h=698&amp;f=jpeg&amp;s=94434" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>此时应该搞懂了核心图中 HTML 解析器的部分，和 DOM 树的基本绘制流程，但是现实很残酷，哪里有这么简单的前端代码，还有有 JavaScript 和 CSS 呢！继续往下看</p>
<h3 id="css解析器" tabindex="-1"><a class="header-anchor" href="#css解析器"><span>CSS解析器</span></a></h3>
<p>CSS 解析器最终的目的也是构建树不过它构建的树是 CSSOM 树<br>
树的构建流程和 DOM 树的构建流程基本相同</p>
<p><img src="https://user-gold-cdn.xitu.io/2019/10/20/16de9591a925e4c0?w=481&amp;h=51&amp;f=png&amp;s=16677" alt="" loading="lazy"><br>
还是那张图，具体我就不一一讲解一遍了。直接用这个简单例子</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { font-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">16</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">none</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看下最后构造的 CSSOM 树</p>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/21/16deee0473c96fdc?w=346&amp;h=261&amp;f=png&amp;s=31542" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>CSSOM 为何具有树结构？为页面上的任何对象计算最后一组样式时，浏览器都会先从适用于该节点的最通用规则开始（例如，如果该节点是 body 元素的子项，则应用所有 body 样式），然后通过应用更具体的规则（即规则“向下级联”）以递归方式优化计算的样式。</p>
<p>以上面的 CSSOM 树为例进行更具体的阐述。span 标记内包含的任何置于 body 元素内的文本都将具有 16 像素字号，并且颜色为红色 — font-size 指令从 body 向下级联至 span。不过，如果某个 span 标记是某个段落 (p) 标记的子项，则其内容将不会显示。</p>
<blockquote>
<p>注意点:</p>
<ol>
<li>CSS解析可以与DOM解析同进行</li>
<li>如果只有 CSS 和 HTML 的页面，CSS 不会影响 DOM 树的创建，但是如果页面中还有 JavaScript，结论就不一样了，请继续往下看。</li>
</ol>
</blockquote>
<h3 id="javascript对dom树与cssom树创建的影响" tabindex="-1"><a class="header-anchor" href="#javascript对dom树与cssom树创建的影响"><span>javascript对DOM树与CSSOM树创建的影响</span></a></h3>
<p>上面两个例子中都还没有javascript的出现，接下来说下JavaScript 对 DOM 树和 CSSOM 树构建的影响。</p>
<ul>
<li>
<p>情况1：当前页面中只有 Html 和 JavaScript，而且 JavaScript 非外部引入</p>
<p>DOM 树构建时当遇到JavaScript脚本，就要暂停 DOM 解析，先去执行Javascript，因为在JavaScript可能会操作当前已经生成的DOM节点。</p>
<p>有一点需要注意:javascript是可能操作<strong>当前已经生成的DOM节点</strong>，如果是后面还未生成的DOM节点是不生效的，比如这段代码:</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">             let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> div1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getElementsByTagName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'div'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">             div1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '程序员成长指北'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">             let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> div2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getElementsByTagName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'div'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">             div2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'kaola'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>test&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果为两行：<br>
第一行结果是程序员成长指北<br>
第二行记过是test<br>
因为在执行第三行和第四行 script 脚本的时候，DOM树中还没有生成第二个 div对应的dom节点。</p>
</li>
<li>
<p>情况2：当页面中同时有Html JavaScript CSS ，而且都非外部引入</p>
<p>DOM 树构建时当遇到 JavaScript 脚本，就要暂停 DOM 解析，先去执行 JavaScript，同时 JavaScript 还要判断 CSSOM 是否解析完成，因为在 JavaScript 可能会操作 CSSOM 节点，CSSOM 节点确认解析完成，执行 JavaScript 再次回到 DOM 树创建。（<strong>所以这里也可以所CSS解析间接影响DOM树创建</strong>）</p>
</li>
<li>
<p>情况3：当页面中同时有Html，JavaScript， CSS ，而且外部引入</p>
<p>Webkit渲染引擎有一个优化，当渲染进程接收HTML文件字节流时，会先开启一个预解析线程，如果遇到 JavaScript 文件或者 CSS 文件，那么预解析线程会提前下载这些数据。当渲染进程接收 HTML 文件字节流时，会先开启一个预解析线程，如果遇到 JavaScript 文件或者 CSS 文件，那么预解析线程会提前下载这些数据。DOM树在创建过程中如果遇到JavaScript文件，接下来就和情况2类型一样了。</p>
</li>
</ul>
<p>影响关系图:<br>
画了一张影响关系图希望大家更好的记忆:</p>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/26/16e058ac50af9dd4?w=371&amp;h=141&amp;f=png&amp;s=19056" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="构建渲染树" tabindex="-1"><a class="header-anchor" href="#构建渲染树"><span>构建渲染树</span></a></h3>
<p>通过 DOM 树和 CSSOM 树，浏览器就可以通过二者构建渲染树了。浏览器会先从 DOM 树的根节点开始遍历每个可见节点，然后对每个可见节点找到适配的CSS样式规则并应用。具体的规则有以下几点需要注意：</p>
<ul>
<li>
<p>Render Tree和DOM Tree不完全对应。</p>
</li>
<li>
<p>请注意 visibility: hidden 与 display: none 是不一样的。前者隐藏元素，但元素仍占据着布局空间（即将其渲染成一个空框），而后者 (display: none) 将元素从渲染树中完全移除，元素既不可见，也不是布局的组成部分</p>
</li>
</ul>
<p>看一下前问中提到的 DOM 树和 CSSOM 树最终合成的渲染树结果是:</p>
<figure><img src="https://user-gold-cdn.xitu.io/2019/10/26/16e058c19b3aa723?w=341&amp;h=241&amp;f=png&amp;s=23625" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="本文渲染树形成过程可以做哪些优化" tabindex="-1"><a class="header-anchor" href="#本文渲染树形成过程可以做哪些优化"><span>本文渲染树形成过程可以做哪些优化</span></a></h3>
<p>看完了渲染树的形成，在开发过程中我们能做哪些优化？(注意这里的优化只是针对渲染树形成部分，其他的优化会在系列文章之后继续讲)</p>
<ol>
<li>在引入顺序上，CSS 资源先于 JavaScript 资源。样式文件应当在 head 标签中，而脚本文件在 body 结束前，这样可以防止阻塞的方式。</li>
<li>尽量减少在 JavaScript 中进行DOM操作。</li>
<li>简化并优化CSS选择器，尽量将嵌套层减少到最小。</li>
<li>修改元素样式时，更改其class属性是性能最高的方法。</li>
</ol>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p>看完这篇文章赶紧检测一下你写的前端代码，脑补一下渲染树形成过程，想想自己代码有没有需要改善的地方，系列文章会继续分享，下篇该系列文章渲染树的布局与绘制以及虚拟DOM树出现的必要性，感谢观看。</p>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料:</span></a></h3>
<p>极客时间浏览器专栏</p>
<p>浏览器渲染原理: <a href="https://srtian96.gitee.io/blog/2018/06/01/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86/" target="_blank" rel="noopener noreferrer">https://srtian96.gitee.io/blog/2018/06/01/浏览器渲染原理/</a></p>
<h3 id="关注我" tabindex="-1"><a class="header-anchor" href="#关注我"><span>关注我</span></a></h3>
<p>觉得不错点个Star，欢迎 加群 互相学习。<br>
<img src="https://user-gold-cdn.xitu.io/2019/10/29/16e166ee15647127?w=900&amp;h=500&amp;f=png&amp;s=105652" alt="" loading="lazy"></p>
</div></template>


