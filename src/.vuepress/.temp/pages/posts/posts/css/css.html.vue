<template><div><nav class="table-of-contents"><ul><li><router-link to="#_1-bfc-机制">1. BFC 机制</router-link></li><li><router-link to="#_2-css3-中新增的选择器以及属性">2. CSS3 中新增的选择器以及属性</router-link></li><li><router-link to="#_3-居中布局">3. 居中布局</router-link></li><li><router-link to="#_4-清除浮动有哪些方法-各有什么优缺点">4. 清除浮动有哪些方法, 各有什么优缺点</router-link></li><li><router-link to="#_5-用纯-css-创建一个三角形的原理是什么">5. 用纯 CSS 创建一个三角形的原理是什么</router-link></li><li><router-link to="#_6-实现三栏布局有哪些方法-分别描述一下">6. 实现三栏布局有哪些方法, 分别描述一下</router-link></li><li><router-link to="#_7-css3-实现-0-5px-的细线">7. css3 实现 0.5px 的细线</router-link></li><li><router-link to="#_8-link-与-import-的区别">8. link 与 @import 的区别</router-link></li><li><router-link to="#_9-开发中为什么要初始化-css-样式">9. 开发中为什么要初始化 css 样式</router-link></li><li><router-link to="#_10-css-优化、提高性能的方法有哪些">10. CSS 优化、提高性能的方法有哪些</router-link></li><li><router-link to="#_11-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的">11.介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？</router-link></li><li><router-link to="#_12-box-sizing属性">12.box-sizing属性？</router-link></li><li><router-link to="#_13-css选择器有哪些-哪些属性可以继承">13.CSS选择器有哪些？哪些属性可以继承？</router-link></li><li><router-link to="#_14-css优先级算法如何计算">14.CSS优先级算法如何计算？</router-link></li><li><router-link to="#_15-css3新增伪类有那些">15.CSS3新增伪类有那些?</router-link></li><li><router-link to="#_16-display有哪些值-说明他们的作用">16.display有哪些值？说明他们的作用?</router-link></li><li><router-link to="#_17-position的值">17.position的值？</router-link></li><li><router-link to="#_18-css3有哪些新特性">18.CSS3有哪些新特性？</router-link></li><li><router-link to="#_19请解释一下css3的flexbox-弹性盒布局模型-以及适用场景">19请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？</router-link></li><li><router-link to="#_20-开发中为什么要初始化css样式">20. 开发中为什么要初始化css样式</router-link></li><li><router-link to="#_21-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的ie">21. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？</router-link></li><li><router-link to="#_22-视差滚动效果">22. 视差滚动效果？</router-link></li><li><router-link to="#_23-before-和-after中双冒号和单冒号有什么区别-解释一下这2个伪元素的作用">23. ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用</router-link></li><li><router-link to="#_24-你对line-height是如何理解的">24. 你对line-height是如何理解的？</router-link></li><li><router-link to="#_25-怎么让chrome支持小于12px-的文字">25. 怎么让Chrome支持小于12px 的文字？</router-link></li><li><router-link to="#_26-让页面里的字体变清晰-变细用css怎么做">26. 让页面里的字体变清晰，变细用CSS怎么做？</router-link></li><li><router-link to="#_27-position-fixed-在android下无效怎么处理">27. position:fixed;在android下无效怎么处理？</router-link></li><li><router-link to="#_28-如果需要手动写动画-你认为最小时间间隔是多久-为什么">28. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？</router-link></li><li><router-link to="#_29-li与li之间有看不见的空白间隔是什么原因引起的-有什么解决办法">29. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？</router-link></li><li><router-link to="#_30-display-inline-block-什么时候会显示间隙">30. display:inline-block 什么时候会显示间隙？</router-link></li><li><router-link to="#_31-有一个高度自适应的div-里面有两个div-一个高度100px-希望另一个填满剩下的高度">31. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度</router-link></li><li><router-link to="#_32-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过webp">32. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？</router-link></li><li><router-link to="#_33-style标签写在body后与body前有什么区别">33. style标签写在body后与body前有什么区别？</router-link></li><li><router-link to="#_34-css属性overflow属性定义溢出元素内容区的内容会如何处理">34. CSS属性overflow属性定义溢出元素内容区的内容会如何处理?</router-link></li><li><router-link to="#_35-阐述一下css-sprites">35 阐述一下CSS Sprites</router-link></li></ul></nav>
<h2 id="_1-bfc-机制" tabindex="-1"><a class="header-anchor" href="#_1-bfc-机制"><span>1. BFC 机制</span></a></h2>
<p>BFC(Block Formatting Context)，<strong>块级格式化上下文</strong>，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。</p>
<ul>
<li>触发条件 (以下任意一条)
<ul>
<li>float 的值不为 none</li>
<li>overflow 的值不为 visible</li>
<li>display 的值为 table-cell、tabble-caption 和 inline-block 之一</li>
<li>position 的值不为 static 或则 releative 中的任何一个</li>
</ul>
</li>
</ul>
<blockquote>
<p>在 IE 下, Layout,可通过<code v-pre>zoom:1</code> 触发</p>
</blockquote>
<ul>
<li>
<p>.BFC 布局与普通文档流布局区别<br>
普通文档流布局:</p>
<ol>
<li>浮动的元素是不会被父级计算高度</li>
<li>非浮动元素会覆盖浮动元素的位置</li>
<li>margin 会传递给父级元素</li>
<li>两个相邻元素上下的 margin 会重叠</li>
</ol>
<p>BFC 布局规则:</p>
<ol>
<li>浮动的元素会被父级计算高度(父级元素触发了 BFC)</li>
<li>非浮动元素不会覆盖浮动元素的位置(非浮动元素触发了 BFC)</li>
<li>margin 不会传递给父级(父级触发 BFC)</li>
<li>属于同一个 BFC 的两个相邻元素上下 margin 会重叠</li>
</ol>
</li>
<li>
<p>开发中的应用</p>
<ul>
<li>阻止 margin 重叠</li>
<li>可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个 div 都位于同一个 BFC 区域之中)</li>
<li>自适应两栏布局</li>
<li>可以阻止元素被浮动元素覆盖</li>
</ul>
</li>
</ul>
<h2 id="_2-css3-中新增的选择器以及属性" tabindex="-1"><a class="header-anchor" href="#_2-css3-中新增的选择器以及属性"><span>2. CSS3 中新增的选择器以及属性</span></a></h2>
<p>这里只是列出来, 具体的使用,请查看我的关于 css3 新增选择器与属性文章</p>
<ul>
<li>属性选择器</li>
</ul>
<table>
<thead>
<tr>
<th>属性选择器</th>
<th>含义描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>E[att^=&quot;val&quot;]</td>
<td>属性 att 的值以&quot;val&quot;<strong>开头</strong>的元素</td>
</tr>
<tr>
<td>E[att$=&quot;val&quot;]</td>
<td>属性 att 的值以&quot;val&quot;<strong>结尾</strong>的元素</td>
</tr>
<tr>
<td>E[att*=&quot;val&quot;]</td>
<td>属性 att 的值<strong>包含</strong>&quot;val&quot;字符串的元素</td>
</tr>
</tbody>
</table>
<ul>
<li>结构伪类选择器</li>
</ul>
<table>
<thead>
<tr>
<th>选择器</th>
<th>含义描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>E:root</td>
<td>匹配文档的<strong>根元素</strong>，对于 HTML 文档，就是 HTML 元素</td>
</tr>
<tr>
<td>E:nth-child(n)</td>
<td>匹配其<strong>父元素的第 n 个子元素</strong>，第一个编号为 1</td>
</tr>
<tr>
<td>E:nth-last-child(n)</td>
<td>匹配其父元素的<strong>倒数第 n 个子元素</strong>，第一个编号为 1</td>
</tr>
<tr>
<td>E:nth-of-type(n)</td>
<td>与:nth-child()作用类似，但是仅匹配使用同种标签的元素</td>
</tr>
<tr>
<td>E:nth-last-of-type(n)</td>
<td>与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素</td>
</tr>
<tr>
<td>E:last-child</td>
<td>匹配父元素的最后一个子元素，等同于:nth-last-child(1)</td>
</tr>
<tr>
<td>E:first-of-type</td>
<td>匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)</td>
</tr>
<tr>
<td>E:last-of-type</td>
<td>匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)</td>
</tr>
<tr>
<td>E:only-child</td>
<td>匹配父元素下仅有的一个子元素，等同于:first-child:last-child 或 :nth-child(1):nth-last-child(1)</td>
</tr>
<tr>
<td>E:only-of-type</td>
<td>匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type 或 :nth-of-type(1):nth-last-of-type(1)</td>
</tr>
<tr>
<td>E:empty</td>
<td>匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素</td>
</tr>
</tbody>
</table>
<ul>
<li>css3 新增属性</li>
</ul>
<table>
<thead>
<tr>
<th>属性</th>
<th>含义描述</th>
<th>兼容</th>
</tr>
</thead>
<tbody>
<tr>
<td>transition</td>
<td>设置过渡效果</td>
<td></td>
</tr>
<tr>
<td>transform</td>
<td>变换效果(移动、缩放、转动、拉长或拉伸)</td>
<td></td>
</tr>
<tr>
<td>animation</td>
<td>动画效果</td>
<td></td>
</tr>
<tr>
<td>box-shadow</td>
<td>阴影效果</td>
<td>FF3.5, Safari 4, Chrome 3</td>
</tr>
<tr>
<td>text-shadow</td>
<td>文本阴影</td>
<td>FF 3.5, Opera 10, Safari 4, Chrome 3</td>
</tr>
<tr>
<td>border-colors</td>
<td>为边框设置多种颜色</td>
<td>FF3+</td>
</tr>
<tr>
<td>boder-image</td>
<td>图片边框</td>
<td>FF 3.5, Safari 4, Chrome 3</td>
</tr>
<tr>
<td>text-overflow</td>
<td>文本截断</td>
<td>IE6+, Safari4, Chrome3, Opera10</td>
</tr>
<tr>
<td>word-wrap</td>
<td>自动换行</td>
<td>IE6+, FF 3.5, Safari 4, Chrome 3</td>
</tr>
<tr>
<td>border-radius</td>
<td>圆角边框</td>
<td>FF 3+, Safari 4 , Chrome 3</td>
</tr>
<tr>
<td>opacity</td>
<td>不透明度</td>
<td>all</td>
</tr>
<tr>
<td>box-sizing</td>
<td>控制盒模型的组成模式</td>
<td>FF3+, Opera 10, Safari 4, Chrome 3</td>
</tr>
<tr>
<td>outline</td>
<td>外边框</td>
<td>FF3+, safari 4, chrome 3, opera 10</td>
</tr>
<tr>
<td>background-size</td>
<td>不指定背景图片的尺寸</td>
<td>safari 4, chrome 3, opera 10</td>
</tr>
<tr>
<td>background-origin</td>
<td>指定背景图片从哪里开始显示</td>
<td>safari 4, chrome 3, FF 3+</td>
</tr>
<tr>
<td>background-clip</td>
<td>指定背景图片从什么位置开始裁切</td>
<td>safari 4, chrome 3</td>
</tr>
<tr>
<td>rgba</td>
<td>基于 r,g,b 三个颜色通道来设置颜色值, 通过 a 来设置透明度</td>
<td>safari 4, chrome 3, FF3, opera 10</td>
</tr>
</tbody>
</table>
<h2 id="_3-居中布局" tabindex="-1"><a class="header-anchor" href="#_3-居中布局"><span>3. 居中布局</span></a></h2>
<ul>
<li>
<p>水平居中 1. 行内元素: <code v-pre>text-align:center</code> 2. 块级元素: <code v-pre>margin:0 auto</code> 3. 绝对定位和移动: <code v-pre>absolute + transform</code> 4. 绝对定位和负边距: <code v-pre>absolute + margin</code> 5. flex 布局: <code v-pre>flex + justify-content:center</code></p>
</li>
<li>
<p>垂直居中 1. 子元素为单行文本: <code v-pre>line-height:height</code> 2. <code v-pre>absolute + transform</code> 3. <code v-pre>flex + align-items:center</code> 4. table: <code v-pre>display:table-cell; vertical-align: middle</code> 5. 利用 position 和 top 和负 margin</p>
</li>
<li>
<p>水平垂直居中</p>
</li>
</ul>
<figure><img src="http://img.xiaogangzai.cn/interview_01.png" alt="水平垂直居中" tabindex="0" loading="lazy"><figcaption>水平垂直居中</figcaption></figure>
<ol>
<li>已知元素宽高:绝对定位+margin:auto:</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  margin: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>2. 已知元素宽高:  绝对定位+负margin
</code></pre>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  margin: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>3. `absolute+transform`
</code></pre>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 定位父级的50% */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">translate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*自己的50% */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4.  `flex + justify-content + align-items`
</code></pre>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">600</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  justify-content: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; //子元素水平居中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  align-items: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; //子元素垂直居中</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  /* aa只要三句话就可以实现不定宽高水平垂直居中。 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-清除浮动有哪些方法-各有什么优缺点" tabindex="-1"><a class="header-anchor" href="#_4-清除浮动有哪些方法-各有什么优缺点"><span>4. 清除浮动有哪些方法, 各有什么优缺点</span></a></h2>
<ul>
<li>使用 clear 属性的空元素<br>
在浮动元素后使用一个空元素如<code v-pre>&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;</code>，并在 CSS 中赋予<code v-pre>.clear{clear:both;}</code>属性即可清理浮动。亦可使用<code v-pre>&lt;br class=&quot;clear&quot; /&gt;</code>或<code v-pre>&lt;hr class=&quot;clear&quot; /&gt;</code>来进行清理。</li>
</ul>
<blockquote>
<p>优点: 简单, 写少量代码, 兼容性也好<br>
缺点: 添加无语义 html 元素, 不利于代码语义化, 后期维护成本大</p>
</blockquote>
<ul>
<li>
<p>使用 css 的 overflow 属性<br>
给浮动元素的容器添加<code v-pre>overflow:hidden;</code>或<code v-pre>overflow:auto;</code>可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置<code v-pre>zoom:1</code>。在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。</p>
<blockquote>
<p>优点: 简单, 代码少, 浏览器支持好<br>
缺点: 不能和 position 配合使用, 因为超出的尺寸会被隐藏<code v-pre>overflow:hidden</code></p>
</blockquote>
</li>
<li>
<p>使用 CSS 的:after 伪元素<br>
结合 :after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。<br>
给浮动元素的容器添加一个 <code v-pre>clearfix</code> 的 class，然后给这个 class 添加一个:after 伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。<br>
通过 CSS 伪元素在容器的内部元素最后添加了一个看不见的空格&quot;020&quot;或点&quot;.&quot;，并且赋予 clear 属性来清除浮动。需要注意的是为了 IE6 和 IE7 浏览器，要给 clearfix 这个 class 添加一条 zoom:1;触发 haslayout。</p>
<blockquote>
<p>优点: 浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）<br>
缺点: 代码多，要两句代码结合使用，才能让主流浏览器都支持</p>
</blockquote>
</li>
<li>
<p>给父级元素设置高度</p>
<blockquote>
<p>简单, 代码少,好掌握<br>
缺点: 只适用于高度固定的布局</p>
</blockquote>
</li>
</ul>
<h2 id="_5-用纯-css-创建一个三角形的原理是什么" tabindex="-1"><a class="header-anchor" href="#_5-用纯-css-创建一个三角形的原理是什么"><span>5. 用纯 CSS 创建一个三角形的原理是什么</span></a></h2>
<p>之前写三角形, 都是直接记住代码,没有探究原因,我也是直到有一次面试时,面试大哥让我说说 css 创建三角形的原理,我就......回来就赶紧翻资料.接下来我就将当时我理解的过程列举出来:</p>
<ol>
<li>写一个我们最熟悉的 border 应用</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">1b93fb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">1bfb24</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">efad48</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">ef4848</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下:<br>
<img src="http://img.xiaogangzai.cn/interview_02.png" alt="css效果图" loading="lazy"></p>
<ol start="2">
<li>接下来,我们将 border 值增大</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">1b93fb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">1bfb24</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">efad48</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">ef4848</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.xiaogangzai.cn/interview_03.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<p>很容易发现, border 渲染并不是正方形, 而是梯形的</p>
<ol start="3">
<li>在增大 border 的基础下, 此时我们将盒子宽高变成 0,会产生什么效果呢!</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">1b93fb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">1bfb24</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">efad48</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">ef4848</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.xiaogangzai.cn/interview_04.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<p>四个三角形拼合成的矩形呈现在我们眼前,那如如果我们只想要一个三角形, 我们是不是可以设想将其他三个设为不可见;</p>
<ol start="4">
<li>设置透明, 隐藏其中三个三角形</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-color: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">transparent</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> transparent</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> transparent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">ef4848</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.xiaogangzai.cn/interview_05.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<p>三角形这样就出来, 有木有很简单, 当然我们也可以采用逆向思维来写这个效果, 就是先将所有边框设为透明, 然后需要哪边再对其设置颜色, 效果是一样的</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> transparent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">ef4848</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://img.xiaogangzai.cn/interview_05.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<blockquote>
<p>这样给面试你的人讲,讲明白应该不是问题., 重点就是要理解<strong>border</strong>的应用</p>
</blockquote>
<h2 id="_6-实现三栏布局有哪些方法-分别描述一下" tabindex="-1"><a class="header-anchor" href="#_6-实现三栏布局有哪些方法-分别描述一下"><span>6. 实现三栏布局有哪些方法, 分别描述一下</span></a></h2>
<p>三栏布局，顾名思义就是两边固定，中间自适应。三栏布局在开发十分常见，那么什么是三栏布局？<br>
即左右模块固定宽度，中间模块随浏览器变化自适应，想要完成的最终效果如下图所示：</p>
<figure><img src="http://img.xiaogangzai.cn/interview_06.png" alt="三栏布局" tabindex="0" loading="lazy"><figcaption>三栏布局</figcaption></figure>
<p>下面列出四种实现方式, 在开发中可以根据实际需求选择适合自己的方法进行编码:</p>
<ul>
<li>Flex 布局</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    justify-content: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">eee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    flex: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"container"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"left"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"main"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"right"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>3&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>简单实用，现在比较流行的方案，但是需要考虑浏览器的兼容性。</p>
</blockquote>
<ul>
<li>绝对定位布局</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">relative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">eee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 120</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"container"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"left"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"main"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"right"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>3&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这种方案也简单实用, 并且可以将 <code v-pre>&lt;div class=&quot;main&quot;&gt;&lt;/div&gt;</code>元素放到第一位,使得主要内容优先加载!</p>
</blockquote>
<ul>
<li>双飞翼布局</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    float: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">110</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">220</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    float: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    float: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"content"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"main"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"left"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"right"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>圣杯布局</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">120</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">220</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    float: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    float: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">relative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-120</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    float: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    margin-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">relative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">-220</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"container"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"main"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"left"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"right"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部 float 浮动，但左右两栏加上负 margin 让其跟中间栏 div 并排，以形成三栏布局。</p>
</blockquote>
<h2 id="_7-css3-实现-0-5px-的细线" tabindex="-1"><a class="header-anchor" href="#_7-css3-实现-0-5px-的细线"><span>7. css3 实现 0.5px 的细线</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">relative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .line</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">:after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    content: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    position: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">absolute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    -webkit-transform</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">scaleY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">scaleY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"line"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-link-与-import-的区别" tabindex="-1"><a class="header-anchor" href="#_8-link-与-import-的区别"><span>8. link 与 @import 的区别</span></a></h2>
<ol>
<li>从属关系区别</li>
</ol>
<blockquote>
<p>@import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等</p>
</blockquote>
<ol start="2">
<li>
<p>加载顺序区别</p>
<blockquote>
<p>加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。</p>
</blockquote>
</li>
<li>
<p>兼容性区别</p>
<blockquote>
<p>@import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。</p>
</blockquote>
</li>
<li>
<p>DOM 可控性区别</p>
<blockquote>
<p>可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import 的方式插入样式。</p>
</blockquote>
</li>
</ol>
<p>css 部分就整理到这里, 小伙伴们面试还有什么经常遇到的,可以在评论区给我留言, 我有时间就整理出来, IT(挨踢)都是一大家, 方便你我他</p>
<h2 id="_9-开发中为什么要初始化-css-样式" tabindex="-1"><a class="header-anchor" href="#_9-开发中为什么要初始化-css-样式"><span>9. 开发中为什么要初始化 css 样式</span></a></h2>
<p>因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。</p>
<h2 id="_10-css-优化、提高性能的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_10-css-优化、提高性能的方法有哪些"><span>10. CSS 优化、提高性能的方法有哪些</span></a></h2>
<ul>
<li>尽量将样式写在单独的 css 文件里面，在 head 元素中引用<br>
将代码写成单独的 css 文件有几点好处： 1. 内容和样式分离，易于管理和维护 2. 减少页面体积 3. css 文件可以被缓存、重用，维护成本降低</li>
<li>不使用@import</li>
<li>避免使用复杂的选择器，层级越少越好<br>
建议选择器的嵌套最好不要超过三层，比如：</li>
<li>精简页面的样式文件，去掉不用的样式</li>
<li>利用 CSS 继承减少代码量</li>
<li>避免！important，可以选择其他选择器</li>
</ul>
<h2 id="_11-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的" tabindex="-1"><a class="header-anchor" href="#_11-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的"><span>11.介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-box-sizing属性" tabindex="-1"><a class="header-anchor" href="#_12-box-sizing属性"><span>12.box-sizing属性？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">用来控制元素的盒子模型的解析模式，默认为content-box</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-css选择器有哪些-哪些属性可以继承" tabindex="-1"><a class="header-anchor" href="#_13-css选择器有哪些-哪些属性可以继承"><span>13.CSS选择器有哪些？哪些属性可以继承？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         属性选择器（a</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rel=”external”</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">）、伪类选择器（a:hover, li:nth-child）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">可继承的属性：font-size, font-family, color</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">不可继承的样式：border, padding, margin, width, height</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">优先级（就近原则）：!important > [ id > class > tag ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">!important 比内联优先级高</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-css优先级算法如何计算" tabindex="-1"><a class="header-anchor" href="#_14-css优先级算法如何计算"><span>14.CSS优先级算法如何计算？</span></a></h2>
<p>元素选择符：1</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">class选择符：10</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">id选择符：100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">元素标签：1000</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">!important声明的样式优先级最高，如果冲突再进行计算。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">如果优先级相同，则选择最后出现的样式。继承得到的样式的优先级最低。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-css3新增伪类有那些" tabindex="-1"><a class="header-anchor" href="#_15-css3新增伪类有那些"><span>15.CSS3新增伪类有那些?</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p:first-of-type 选择属于其父元素的首个元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p:last-of-type 选择属于其父元素的最后元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p:only-of-type 选择属于其父元素唯一的元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p:only-child 选择属于其父元素的唯一子元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p:nth-child(2) 选择属于其父元素的第二个子元素</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:enabled :disabled 表单控件的禁用状态。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:checked 单选框或复选框被选中。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-display有哪些值-说明他们的作用" tabindex="-1"><a class="header-anchor" href="#_16-display有哪些值-说明他们的作用"><span>16.display有哪些值？说明他们的作用?</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">inline（默认）–内联</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">none–隐藏</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">block–块显示</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">table–表格显示</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">list-item–项目列表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">inline-block</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-position的值" tabindex="-1"><a class="header-anchor" href="#_17-position的值"><span>17.position的值？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">static（默认）：按照正常文档流进行排列；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">fixed(固定定位)：所固定的参照对像是可视窗口。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-css3有哪些新特性" tabindex="-1"><a class="header-anchor" href="#_18-css3有哪些新特性"><span>18.CSS3有哪些新特性？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">RGBA和透明度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">background-image background-origin(content-box/padding-box/border-box) background-size background-repeat</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">word-wrap（对长的不可分割单词换行）word-wrap：break-word</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">文字阴影：text-shadow：5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">font-face属性：定义自己的字体</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">圆角（边框半径）：border-radius 属性用于创建圆角</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">边框图片：border-image: url(border.png) 30 30 round</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">盒阴影：box-shadow: 10px 10px 5px #888888</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19请解释一下css3的flexbox-弹性盒布局模型-以及适用场景" tabindex="-1"><a class="header-anchor" href="#_19请解释一下css3的flexbox-弹性盒布局模型-以及适用场景"><span>19请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">适用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-开发中为什么要初始化css样式" tabindex="-1"><a class="header-anchor" href="#_20-开发中为什么要初始化css样式"><span>20. 开发中为什么要初始化css样式</span></a></h2>
<p>因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。</p>
<h2 id="_21-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的ie" tabindex="-1"><a class="header-anchor" href="#_21-什么是响应式设计-响应式设计的基本原理是什么-如何兼容低版本的ie"><span>21. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？</span></a></h2>
<blockquote>
<p>响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。<br>
基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。<br>
页面头部必须有meta声明的viewport。</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"’viewport’"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"”width=device-width,"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> initial-scale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1."</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> maximum-scale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1,user-scalable=no”"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_22-视差滚动效果" tabindex="-1"><a class="header-anchor" href="#_22-视差滚动效果"><span>22. 视差滚动效果？</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。</span></span>
<span class="line"><span>CSS3实现优点：开发时间短、性能和开发效率比较好，</span></span>
<span class="line"><span>缺点是不能兼容到低版本的浏览器jQuery实现通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。</span></span>
<span class="line"><span>优点：能兼容到各个版本的，效果可控性好</span></span>
<span class="line"><span>缺点：开发起来对制作者要求高插件实现方式例如：parallax-scrolling，兼容性十分好</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-before-和-after中双冒号和单冒号有什么区别-解释一下这2个伪元素的作用" tabindex="-1"><a class="header-anchor" href="#_23-before-和-after中双冒号和单冒号有什么区别-解释一下这2个伪元素的作用"><span>23. ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-你对line-height是如何理解的" tabindex="-1"><a class="header-anchor" href="#_24-你对line-height是如何理解的"><span>24. 你对line-height是如何理解的？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">多行文本垂直居中：需要设置display属性为inline-block。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-怎么让chrome支持小于12px-的文字" tabindex="-1"><a class="header-anchor" href="#_25-怎么让chrome支持小于12px-的文字"><span>25. 怎么让Chrome支持小于12px 的文字？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_26-让页面里的字体变清晰-变细用css怎么做" tabindex="-1"><a class="header-anchor" href="#_26-让页面里的字体变清晰-变细用css怎么做"><span>26. 让页面里的字体变清晰，变细用CSS怎么做？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_27-position-fixed-在android下无效怎么处理" tabindex="-1"><a class="header-anchor" href="#_27-position-fixed-在android下无效怎么处理"><span>27. position:fixed;在android下无效怎么处理？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"viewport"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_28-如果需要手动写动画-你认为最小时间间隔是多久-为什么" tabindex="-1"><a class="header-anchor" href="#_28-如果需要手动写动画-你认为最小时间间隔是多久-为什么"><span>28. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_29-li与li之间有看不见的空白间隔是什么原因引起的-有什么解决办法" tabindex="-1"><a class="header-anchor" href="#_29-li与li之间有看不见的空白间隔是什么原因引起的-有什么解决办法"><span>29. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">解决方法：可以将&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>代码全部写在一排浮动</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">li中float：left在ul中用font-size：0（谷歌不支持）；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">可以使用letter-space：-3px</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_30-display-inline-block-什么时候会显示间隙" tabindex="-1"><a class="header-anchor" href="#_30-display-inline-block-什么时候会显示间隙"><span>30. display:inline-block 什么时候会显示间隙？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">有空格时候会有间隙</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">解决：移除空格</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">margin正值的时候</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">解决：margin使用负值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">使用font-size时候</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">解决：font-size:0、letter-spacing、word-spacing</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-有一个高度自适应的div-里面有两个div-一个高度100px-希望另一个填满剩下的高度" tabindex="-1"><a class="header-anchor" href="#_31-有一个高度自适应的div-里面有两个div-一个高度100px-希望另一个填满剩下的高度"><span>31. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">外层div使用position：relative；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_32-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过webp" tabindex="-1"><a class="header-anchor" href="#_32-png、jpg、gif-这些图片格式解释一下-分别什么时候用。有没有了解过webp"><span>32. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。大多数地方都可以用。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_33-style标签写在body后与body前有什么区别" tabindex="-1"><a class="header-anchor" href="#_33-style标签写在body后与body前有什么区别"><span>33. style标签写在body后与body前有什么区别？</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">页面加载自上而下 当然是先加载样式。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_34-css属性overflow属性定义溢出元素内容区的内容会如何处理" tabindex="-1"><a class="header-anchor" href="#_34-css属性overflow属性定义溢出元素内容区的内容会如何处理"><span>34. CSS属性overflow属性定义溢出元素内容区的内容会如何处理?</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">参数是scroll时候，必会出现滚动条。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">参数是auto时候，子元素内容大于父元素时出现滚动条。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">参数是visible时候，溢出的内容出现在父元素之外。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">参数是hidden时候，溢出隐藏。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_35-阐述一下css-sprites" tabindex="-1"><a class="header-anchor" href="#_35-阐述一下css-sprites"><span>35 阐述一下CSS Sprites</span></a></h2>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">将一个页面涉及到的所有图片都包含到一张大图中去，</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">然后利用CSS的 background-image，background- repeat，background-position 的组合进行背景定位。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">CSS Sprites能减少图片的字节。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


