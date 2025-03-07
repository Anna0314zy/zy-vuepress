---
title: 前端面试 10个css高频面试题
date: 2019-05-19
tags:
  - CSS
---

[[toc]]

## 1. BFC 机制

BFC(Block Formatting Context)，**块级格式化上下文**，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

- 触发条件 (以下任意一条)
  - float 的值不为 none
  - overflow 的值不为 visible
  - display 的值为 table-cell、tabble-caption 和 inline-block 之一
  - position 的值不为 static 或则 releative 中的任何一个

> 在 IE 下, Layout,可通过`zoom:1` 触发

- .BFC 布局与普通文档流布局区别
  普通文档流布局:

  1.  浮动的元素是不会被父级计算高度
  2.  非浮动元素会覆盖浮动元素的位置
  3.  margin 会传递给父级元素
  4.  两个相邻元素上下的 margin 会重叠

  BFC 布局规则:

  1. 浮动的元素会被父级计算高度(父级元素触发了 BFC)
  2. 非浮动元素不会覆盖浮动元素的位置(非浮动元素触发了 BFC)
  3. margin 不会传递给父级(父级触发 BFC)
  4. 属于同一个 BFC 的两个相邻元素上下 margin 会重叠

- 开发中的应用
  - 阻止 margin 重叠
  - 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个 div 都位于同一个 BFC 区域之中)
  - 自适应两栏布局
  - 可以阻止元素被浮动元素覆盖

## 2. CSS3 中新增的选择器以及属性

这里只是列出来, 具体的使用,请查看我的关于 css3 新增选择器与属性文章

- 属性选择器

| 属性选择器    | 含义描述                               |
| ------------- | -------------------------------------- |
| E[att^="val"] | 属性 att 的值以"val"**开头**的元素     |
| E[att$="val"] | 属性 att 的值以"val"**结尾**的元素     |
| E[att*="val"] | 属性 att 的值**包含**"val"字符串的元素 |

- 结构伪类选择器

| 选择器                | 含义描述                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| E:root                | 匹配文档的**根元素**，对于 HTML 文档，就是 HTML 元素                                                               |
| E:nth-child(n)        | 匹配其**父元素的第 n 个子元素**，第一个编号为 1                                                                    |
| E:nth-last-child(n)   | 匹配其父元素的**倒数第 n 个子元素**，第一个编号为 1                                                                |
| E:nth-of-type(n)      | 与:nth-child()作用类似，但是仅匹配使用同种标签的元素                                                               |
| E:nth-last-of-type(n) | 与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素                                                         |
| E:last-child          | 匹配父元素的最后一个子元素，等同于:nth-last-child(1)                                                               |
| E:first-of-type       | 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)                                                      |
| E:last-of-type        | 匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)                                               |
| E:only-child          | 匹配父元素下仅有的一个子元素，等同于:first-child:last-child 或 :nth-child(1):nth-last-child(1)                     |
| E:only-of-type        | 匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type 或 :nth-of-type(1):nth-last-of-type(1) |
| E:empty               | 匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素                                                       |

- css3 新增属性

| 属性              | 含义描述                                                 | 兼容                                 |
| ----------------- | -------------------------------------------------------- | ------------------------------------ |
| transition        | 设置过渡效果                                             |                                      |
| transform         | 变换效果(移动、缩放、转动、拉长或拉伸)                   |                                      |
| animation         | 动画效果                                                 |                                      |
| box-shadow        | 阴影效果                                                 | FF3.5, Safari 4, Chrome 3            |
| text-shadow       | 文本阴影                                                 | FF 3.5, Opera 10, Safari 4, Chrome 3 |
| border-colors     | 为边框设置多种颜色                                       | FF3+                                 |
| boder-image       | 图片边框                                                 | FF 3.5, Safari 4, Chrome 3           |
| text-overflow     | 文本截断                                                 | IE6+, Safari4, Chrome3, Opera10      |
| word-wrap         | 自动换行                                                 | IE6+, FF 3.5, Safari 4, Chrome 3     |
| border-radius     | 圆角边框                                                 | FF 3+, Safari 4 , Chrome 3           |
| opacity           | 不透明度                                                 | all                                  |
| box-sizing        | 控制盒模型的组成模式                                     | FF3+, Opera 10, Safari 4, Chrome 3   |
| outline           | 外边框                                                   | FF3+, safari 4, chrome 3, opera 10   |
| background-size   | 不指定背景图片的尺寸                                     | safari 4, chrome 3, opera 10         |
| background-origin | 指定背景图片从哪里开始显示                               | safari 4, chrome 3, FF 3+            |
| background-clip   | 指定背景图片从什么位置开始裁切                           | safari 4, chrome 3                   |
| rgba              | 基于 r,g,b 三个颜色通道来设置颜色值, 通过 a 来设置透明度 | safari 4, chrome 3, FF3, opera 10    |

## 3. 居中布局

- 水平居中 1. 行内元素: `text-align:center` 2. 块级元素: `margin:0 auto` 3. 绝对定位和移动: `absolute + transform` 4. 绝对定位和负边距: `absolute + margin` 5. flex 布局: `flex + justify-content:center`

- 垂直居中 1. 子元素为单行文本: `line-height:height` 2. `absolute + transform` 3. `flex + align-items:center` 4. table: `display:table-cell; vertical-align: middle` 5. 利用 position 和 top 和负 margin

- 水平垂直居中

![水平垂直居中](http://img.xiaogangzai.cn/interview_01.png)
  
 1. 已知元素宽高:绝对定位+margin:auto:

```css
div {
  width: 200px;
  height: 200px;
  background: green;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

    2. 已知元素宽高:  绝对定位+负margin

```css
div {
  width: 200px;
  height: 200px;
  background: green;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

    3. `absolute+transform`

```css
div {
  width: 200px;
  height: 200px;
  background: green;
  position: absolute;
  left: 50%; /* 定位父级的50% */
  top: 50%;
  transform: translate(-50%, -50%); /*自己的50% */
}
```

    4.  `flex + justify-content + align-items`

```css
.box {
  height: 600px;
  display: flex;
  justify-content: center; //子元素水平居中
  align-items: center; //子元素垂直居中
  /* aa只要三句话就可以实现不定宽高水平垂直居中。 */
}
.box > div {
  background: green;
  width: 200px;
  height: 200px;
}
```

## 4. 清除浮动有哪些方法, 各有什么优缺点

- 使用 clear 属性的空元素
  在浮动元素后使用一个空元素如`<div class="clear"></div>`，并在 CSS 中赋予`.clear{clear:both;}`属性即可清理浮动。亦可使用`<br class="clear" />`或`<hr class="clear" />`来进行清理。

> 优点: 简单, 写少量代码, 兼容性也好
> 缺点: 添加无语义 html 元素, 不利于代码语义化, 后期维护成本大

- 使用 css 的 overflow 属性
  给浮动元素的容器添加`overflow:hidden;`或`overflow:auto;`可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置`zoom:1`。在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。

  > 优点: 简单, 代码少, 浏览器支持好
  > 缺点: 不能和 position 配合使用, 因为超出的尺寸会被隐藏`overflow:hidden`

- 使用 CSS 的:after 伪元素
  结合 :after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。
  给浮动元素的容器添加一个 `clearfix` 的 class，然后给这个 class 添加一个:after 伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。
  通过 CSS 伪元素在容器的内部元素最后添加了一个看不见的空格"020"或点"."，并且赋予 clear 属性来清除浮动。需要注意的是为了 IE6 和 IE7 浏览器，要给 clearfix 这个 class 添加一条 zoom:1;触发 haslayout。

  > 优点: 浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）
  > 缺点: 代码多，要两句代码结合使用，才能让主流浏览器都支持

- 给父级元素设置高度
  > 简单, 代码少,好掌握
  > 缺点: 只适用于高度固定的布局

## 5. 用纯 CSS 创建一个三角形的原理是什么

之前写三角形, 都是直接记住代码,没有探究原因,我也是直到有一次面试时,面试大哥让我说说 css 创建三角形的原理,我就......回来就赶紧翻资料.接下来我就将当时我理解的过程列举出来:

1. 写一个我们最熟悉的 border 应用

```css
.box {
  width: 100px;
  height: 100px;
  border: 3px solid;
  border-color: #1b93fb #1bfb24 #efad48 #ef4848;
}
```

效果如下:
![css效果图](http://img.xiaogangzai.cn/interview_02.png)

2. 接下来,我们将 border 值增大

```css
.box {
  width: 100px;
  height: 100px;
  border: 50px solid;
  border-color: #1b93fb #1bfb24 #efad48 #ef4848;
}
```

![image](http://img.xiaogangzai.cn/interview_03.png)

很容易发现, border 渲染并不是正方形, 而是梯形的

3. 在增大 border 的基础下, 此时我们将盒子宽高变成 0,会产生什么效果呢!

```css
.box {
  width: 0px;
  height: 0px;
  border: 50px solid;
  border-color: #1b93fb #1bfb24 #efad48 #ef4848;
}
```

![image](http://img.xiaogangzai.cn/interview_04.png)

四个三角形拼合成的矩形呈现在我们眼前,那如如果我们只想要一个三角形, 我们是不是可以设想将其他三个设为不可见;

4.  设置透明, 隐藏其中三个三角形

```css
.box {
  width: 0px;
  height: 0px;
  border: 50px solid;
  border-color: transparent transparent transparent #ef4848;
}
```

![image](http://img.xiaogangzai.cn/interview_05.png)

三角形这样就出来, 有木有很简单, 当然我们也可以采用逆向思维来写这个效果, 就是先将所有边框设为透明, 然后需要哪边再对其设置颜色, 效果是一样的

```css
.box {
  width: 0px;
  height: 0px;
  border: 50px solid transparent;
  border-left: 50px solid #ef4848;
}
```

![image](http://img.xiaogangzai.cn/interview_05.png)

> 这样给面试你的人讲,讲明白应该不是问题., 重点就是要理解**border**的应用

## 6. 实现三栏布局有哪些方法, 分别描述一下

三栏布局，顾名思义就是两边固定，中间自适应。三栏布局在开发十分常见，那么什么是三栏布局？
即左右模块固定宽度，中间模块随浏览器变化自适应，想要完成的最终效果如下图所示：

![三栏布局](http://img.xiaogangzai.cn/interview_06.png)

下面列出四种实现方式, 在开发中可以根据实际需求选择适合自己的方法进行编码:

- Flex 布局

```html
<style>
  .container {
    display: flex;
    justify-content: center;
    height: 200px;
    background: #eee;
  }
  .left {
    width: 200px;
    background-color: red;
    height: 100%;
  }
  .main {
    background-color: yellow;
    flex: 1;
  }
  .right {
    width: 200px;
    background-color: green;
  }
</style>

<div class="container">
  <div class="left">1</div>
  <div class="main">2</div>
  <div class="right">3</div>
</div>
```

> 简单实用，现在比较流行的方案，但是需要考虑浏览器的兼容性。

- 绝对定位布局

```html
<style>
  .container {
    position: relative;
    background: #eee;
    height: 200px;
  }
  .main {
    height: 200px;
    margin: 0 120px;
    background-color: yellow;
  }
  .left {
    position: absolute;
    width: 100px;
    height: 200px;
    left: 0;
    top: 0;
    background-color: red;
  }
  .right {
    position: absolute;
    width: 100px;
    height: 200px;
    background-color: green;
    right: 0;
    top: 0;
  }
</style>

<div class="container">
  <div class="left">1</div>
  <div class="main">2</div>
  <div class="right">3</div>
</div>
```

> 这种方案也简单实用, 并且可以将 `<div class="main"></div>`元素放到第一位,使得主要内容优先加载!

- 双飞翼布局

```html
<style>
  .content {
    float: left;
    width: 100%;
  }
  .main {
    height: 200px;
    margin-left: 110px;
    margin-right: 220px;
    background-color: yellow;
  }
  .left {
    float: left;
    height: 200px;
    width: 100px;
    margin-left: -100%;
    background-color: red;
  }
  .right {
    width: 200px;
    height: 200px;
    float: right;
    margin-left: -200px;
    background-color: green;
  }
</style>
<div class="content">
  <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>
```

- 圣杯布局

```html
<style>
  .container {
    margin-left: 120px;
    margin-right: 220px;
  }
  .main {
    float: left;
    width: 100%;
    height: 300px;
    background-color: yellow;
  }
  .left {
    float: left;
    width: 100px;
    height: 300px;
    margin-left: -100%;
    position: relative;
    left: -120px;
    background-color: blue;
  }
  .right {
    float: left;
    width: 200px;
    height: 300px;
    margin-left: -200px;
    position: relative;
    right: -220px;
    background-color: green;
  }
</style>
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```

> 圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部 float 浮动，但左右两栏加上负 margin 让其跟中间栏 div 并排，以形成三栏布局。

## 7. css3 实现 0.5px 的细线

```html
<style>
  .line {
    position: relative;
  }
  .line:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #000000;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
</style>

<div class="line"></div>
```

## 8. link 与 @import 的区别

1. 从属关系区别

> @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等

2. 加载顺序区别

   > 加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。

3. 兼容性区别
   > @import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。
4. DOM 可控性区别
   > 可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import 的方式插入样式。

css 部分就整理到这里, 小伙伴们面试还有什么经常遇到的,可以在评论区给我留言, 我有时间就整理出来, IT(挨踢)都是一大家, 方便你我他

## 9. 开发中为什么要初始化 css 样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。

## 10. CSS 优化、提高性能的方法有哪些

- 尽量将样式写在单独的 css 文件里面，在 head 元素中引用
  将代码写成单独的 css 文件有几点好处： 1. 内容和样式分离，易于管理和维护 2. 减少页面体积 3. css 文件可以被缓存、重用，维护成本降低
- 不使用@import
- 避免使用复杂的选择器，层级越少越好
  建议选择器的嵌套最好不要超过三层，比如：
- 精简页面的样式文件，去掉不用的样式
- 利用 CSS 继承减少代码量
- 避免！important，可以选择其他选择器
## 11.介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？
```markdown
标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin
```

## 12.box-sizing属性？
```markdown
用来控制元素的盒子模型的解析模式，默认为content-box
context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽
border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽
```
## 13.CSS选择器有哪些？哪些属性可以继承？
```markdown
CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、
         相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、
         属性选择器（a[rel=”external”]）、伪类选择器（a:hover, li:nth-child）
可继承的属性：font-size, font-family, color
不可继承的样式：border, padding, margin, width, height
优先级（就近原则）：!important > [ id > class > tag ]
!important 比内联优先级高
```
## 14.CSS优先级算法如何计算？
元素选择符：1
```markdown
class选择符：10
id选择符：100
元素标签：1000
!important声明的样式优先级最高，如果冲突再进行计算。
如果优先级相同，则选择最后出现的样式。继承得到的样式的优先级最低。
```
## 15.CSS3新增伪类有那些?
```markdown
p:first-of-type 选择属于其父元素的首个元素
p:last-of-type 选择属于其父元素的最后元素
p:only-of-type 选择属于其父元素唯一的元素
p:only-child 选择属于其父元素的唯一子元素
p:nth-child(2) 选择属于其父元素的第二个子元素
:enabled :disabled 表单控件的禁用状态。
:checked 单选框或复选框被选中。
```
## 16.display有哪些值？说明他们的作用?
```markdown
inline（默认）–内联
none–隐藏
block–块显示
table–表格显示
list-item–项目列表
inline-block
```
## 17.position的值？
```markdown
static（默认）：按照正常文档流进行排列；
relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；
absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；
fixed(固定定位)：所固定的参照对像是可视窗口。
```
## 18.CSS3有哪些新特性？
```markdown
RGBA和透明度
background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
word-wrap（对长的不可分割单词换行）word-wrap：break-word
文字阴影：text-shadow：5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
font-face属性：定义自己的字体
圆角（边框半径）：border-radius 属性用于创建圆角
边框图片：border-image: url(border.png) 30 30 round
盒阴影：box-shadow: 10px 10px 5px #888888
媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性
```
## 19请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？
```markdown
该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。
在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。
弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
适用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。
```
## 20. 开发中为什么要初始化css样式
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
## 21. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
>响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
>基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
>页面头部必须有meta声明的viewport。
```html
<meta name="’viewport’" content="”width=device-width," initial-scale="1." maximum-scale="1,user-scalable=no”"/>
```
## 22. 视差滚动效果？
```text
视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。
CSS3实现优点：开发时间短、性能和开发效率比较好，
缺点是不能兼容到低版本的浏览器jQuery实现通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。
优点：能兼容到各个版本的，效果可控性好
缺点：开发起来对制作者要求高插件实现方式例如：parallax-scrolling，兼容性十分好
```
## 23. ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
```markdown
单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。
起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after
```

## 24. 你对line-height是如何理解的？
```markdown
行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。
单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。
多行文本垂直居中：需要设置display属性为inline-block。
```
## 25. 怎么让Chrome支持小于12px 的文字？
```markdown
p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例
```
## 26. 让页面里的字体变清晰，变细用CSS怎么做？
```markdown
-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。

```
## 27. position:fixed;在android下无效怎么处理？
```markdown
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>

```
## 28. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？
```markdown
多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。

```
## 29. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
```markdown
行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
解决方法：可以将<li>代码全部写在一排浮动
li中float：left在ul中用font-size：0（谷歌不支持）；
可以使用letter-space：-3px
```
## 30. display:inline-block 什么时候会显示间隙？
```markdown
有空格时候会有间隙
解决：移除空格
margin正值的时候
解决：margin使用负值
使用font-size时候
解决：font-size:0、letter-spacing、word-spacing
```
## 31. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度
```markdown
外层div使用position：relative；
高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0
```
## 32. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
```markdown
png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。大多数地方都可以用。
jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。
gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.
webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。

```
## 33. style标签写在body后与body前有什么区别？
```markdown
页面加载自上而下 当然是先加载样式。
写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，
等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）
```
## 34. CSS属性overflow属性定义溢出元素内容区的内容会如何处理?
```markdown
参数是scroll时候，必会出现滚动条。
参数是auto时候，子元素内容大于父元素时出现滚动条。
参数是visible时候，溢出的内容出现在父元素之外。
参数是hidden时候，溢出隐藏。
```
## 35 阐述一下CSS Sprites
```markdown
将一个页面涉及到的所有图片都包含到一张大图中去，
然后利用CSS的 background-image，background- repeat，background-position 的组合进行背景定位。
利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能；
CSS Sprites能减少图片的字节。
```
