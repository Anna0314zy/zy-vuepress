---
title: css 常见问题
date: 2019-05-19
tags:
  - CSS
---

在前端开发中，CSS 是一个基础且重要的部分。为了帮助您复习 CSS 高频面试题，并深入了解 Less 和 Sass 的高级用法，本文将分为两部分进行阐述。

## 一、CSS 高频面试题

1. **CSS 选择器的优先级如何计算？**

   CSS 选择器的优先级由以下四个级别组成，从高到低依次为：

   - 内联样式（如：`style="..."`）：权重为 1000。

   - ID 选择器（如：`#id`）：权重为 100。

   - 类、伪类、属性选择器（如：`.class`、`:hover`、`[type="text"]`）：权重为 10。

   - 元素、伪元素选择器（如：`div`、`::before`）：权重为 1。

   优先级计算时，将各级别的权重累加，数值越大，优先级越高。

2. **伪类和伪元素有什么区别？**

   - **伪类**：用于选择元素的特定状态，如 `:hover`、`:focus` 等。

   - **伪元素**：用于创建元素的子元素，如 `::before`、`::after` 等。

   伪类通过单冒号 `:` 表示，伪元素通过双冒号 `::` 表示。

3. **如何实现 CSS 样式隔离？**

   可以通过以下方法实现样式隔离：

   - 使用命名空间或前缀，避免类名冲突。

   - 使用 CSS Modules，将样式限定在局部作用域。

   - 使用 Shadow DOM，将样式封装在组件内部。

4. **Reset CSS 和 Normalize CSS 有什么区别？**

   - **Reset CSS**：清除所有浏览器默认样式，使其回到统一的基础状态。

   - **Normalize CSS**：保留有用的默认样式，同时修复不同浏览器之间的差异。

5. **如何优化 CSS，提高性能？**

   - 合并和压缩 CSS 文件，减少 HTTP 请求。

   - 使用 CSS Sprite 合并背景图片。

   - 避免使用过多的嵌套选择器，简化选择器。

   - 将关键 CSS 放在页面头部，确保首屏渲染。

## 二、Less 和 Sass 的高级用法

Less 和 Sass 是两种流行的 CSS 预处理器，提供了变量、嵌套、混合、函数等高级特性，使 CSS 更易维护和扩展。

### 1. 变量

允许在样式中使用变量，方便统一管理样式。

**Less 示例：**

```less
@primary-color: #4d926f;

.header {
	color: @primary-color;
}
```

**Sass 示例：**

```scss
$primary-color: #4d926f;

.header {
	color: $primary-color;
}
```

### 2. 嵌套规则

允许在选择器中嵌套其他选择器，体现层级关系。

**Less 示例：**

```less
.nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: inline-block;
	}
	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}
```

**Sass 示例：**

```scss
.nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: inline-block;
	}
	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}
```

### 3. 混合（Mixins）

将一组样式定义为可重用的代码块，在需要的地方调用，减少重复代码。

**Less 示例：**

```less
.border-radius(@radius) {
	border-radius: @radius;
}

.box {
	.border-radius(10px);
}
```

**Sass 示例：**

```scss
@mixin border-radius($radius) {
	border-radius: $radius;
}

.box {
	@include border-radius(10px);
}
```

### 4. 函数和运算

支持数学运算和内置函数，动态计算样式值。

**Less 示例：**

```less
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

.box {
	width: @other + 10%;
}
```

**Sass 示例：**

```scss
$base: 5%;
$filler: $base * 2;
$other: $base + $filler;

.box {
	width: $other + 10%;
}
```

### 5. 继承

允许一个选择器继承另一个选择器的样式。

**Less 示例：**

```less
.message {
	border: 1px solid #ccc;
	padding: 10px;
	color: #333;
}

.success {
	.message;
	border-color: green;
}
```

**Sass 示例：**

```scss
%message {
	border: 1px solid #ccc;
	padding: 10px;
	color: #333;
}

.success {
	@extend %message;
	border-color: green;
}
```

## 一、BFC（块级格式化上下文）机制

**1. BFC 能解决的问题**

BFC 是一种独立的渲染区域，具有以下特性：

- **解决浮动元素导致的父元素高度塌陷**：当子元素浮动时，父元素可能出现高度塌陷，BFC 可以避免此问题。
- **防止相邻元素的 margin 重叠**：在同一个 BFC 中，相邻元素的垂直 margin 会发生重叠，使用 BFC 可以避免这种情况。
- **实现自适应两栏布局**：利用 BFC 的特性，可以创建左侧固定宽度，右侧自适应的布局。

### 1.没有触发 BFC，父元素高度塌陷

```html
<!-- index.html -->
<div class="parent no-bfc">
	<div class="child">Child 1</div>
	<div class="child">Child 2</div>
</div>
```

```css
/* styles.css */
.parent.no-bfc {
	background-color: #cceeff;
	border: 1px solid #333;
	/* 未触发 BFC，父元素高度为 0，看不到背景或边框包裹浮动子元素 */
	overflow: hidden; /* 触发 BFC，使父元素包含浮动子元素 */
}
.child {
	float: left;
	width: 100px;
	height: 100px;
	background-color: #ffcc66;
	margin: 10px;
}
```

在此例中，由于子元素全部浮动，父容器未能扩展高度，页面上看不到父元素的背景和边框效果。

### 2. 防止相邻元素 margin 重叠问题

问题描述
在没有触发 BFC 时，同一容器内相邻块级元素的垂直 margin 可能会合并（即“折叠”现象），导致布局出现意外的间距变化。有时我们希望子元素的 margin 不会和父容器或相邻元素发生重叠。

```html
<style>
	.box {
		width: 200px;
		height: 100px;
		background: #f0f0f0;
	}

	.box1 {
		margin-bottom: 20px; /* 下外边距 20px */
	}

	.box2 {
		margin-top: 30px; /* 上外边距 30px */
	}
</style>

<div class="box box1">Box 1</div>
<div class="box box2">Box 2</div>
```

在上例中，第一个子元素的 margin-top 可能会和父容器的外边距发生折叠，导致间距不明显。

✈️ **解决**

```html
<style>
	.box {
		width: 200px;
		height: 100px;
		background: #f0f0f0;
	}

	.box1 {
		margin-bottom: 20px;
	}

	.box2 {
		margin-top: 30px;
	}

	/* 触发 BFC 的容器 */
	.bfc-container {
		overflow: hidden; /* 或使用 display: flow-root（更安全） */
	}
</style>

<div class="box box1">Box 1</div>
<!-- 将 Box2 包裹在 BFC 容器中 -->
<div class="bfc-container">
	<div class="box box2">Box 2</div>
</div>
```

### **3. 如何触发 BFC**

以下方式可触发 BFC：

- 根元素（`<html>` 或 `<body>`）
- 设置浮动：`float` 属性值不为 `none`
- 设置绝对定位或固定定位：`position` 属性值为 `absolute` 或 `fixed`
- 设置 `display` 属性为 `inline-block`、`table-cell`、`table-caption`、`flex` 等
- 设置 `overflow` 属性为 `hidden`、`auto`、`scroll`

## 二、CSS 居中布局的方法

**1. 水平居中**

- **行内元素**：使用 `text-align: center;`

  ```css
  .parent {
  	text-align: center;
  }
  ```

- **块级元素**：设置 `margin` 为 `auto`

  ```css
  .child {
  	margin: 0 auto;
  }
  ```

**2. 垂直居中**

- **单行文本**：设置 `line-height` 等于容器高度

  ```css
  .parent {
  	height: 100px;
  	line-height: 100px;
  }
  ```

- **多行文本或块级元素**：使用 Flexbox 布局

  ```css
  .parent {
  	display: flex;
  	align-items: center;
  }
  ```

**3. 水平垂直居中**

- **使用 Flexbox 布局**

  ```css
  .parent {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  ```

- **使用定位与变换**

  ```css
  .parent {
  	position: relative;
  }
  .child {
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
  }
  ```

## 三、操作 DOM 的常用方法

- **获取元素**

  - `document.getElementById('id')`：通过 ID 获取元素
  - `document.getElementsByClassName('class')`：通过类名获取元素集合
  - `document.getElementsByTagName('tag')`：通过标签名获取元素集合
  - `document.querySelector('selector')`：通过 CSS 选择器获取第一个匹配的元素
  - `document.querySelectorAll('selector')`：通过 CSS 选择器获取所有匹配的元素集合

- **创建元素**

  - `document.createElement('tag')`：创建一个新的元素

- **添加或删除元素**

  - `parent.appendChild(child)`：向父元素添加子元素
  - `parent.removeChild(child)`：从父元素中移除子元素

- **设置或获取属性**

  - `element.setAttribute('attr', 'value')`：设置属性
  - `element.getAttribute('attr')`：获取属性值

- **设置或获取内容**

  - `element.innerHTML`：设置或获取元素的 HTML 内容
  - `element.textContent`：设置或获取元素的文本内容

## 四、清除浮动(不需要用了)

:::important

现代替代方案
如果不需要兼容旧浏览器，建议使用更现代的布局方式替代浮动：
:::

```css
.parent {
	display: flex; /* 弹性布局 */
	/* 或 */
	display: grid; /* 网格布局 */
}
```

为什么要清除浮动？

- 避免父元素高度塌陷：确保父元素包含所有子元素的高度。

- 保持布局稳定：防止后续内容错位（如文字环绕浮动元素）。

- 正确显示背景/边框：父元素高度为 0 时，背景和边框无法显示。

- **使用空的块级元素清除浮动**

  在浮动元素后添加一个空的块级元素，并设置 `clear: both;`

  ```html
  <div style="clear: both;"></div>
  ```

- **使用伪元素清除浮动**

  在父元素上使用伪元素清除浮动

  ```css
  .parent::after {
  	content: "";
  	display: block;
  	clear: both;
  }
  ```

- **使用 `overflow` 属性清除浮动**

  将父元素的 `overflow` 属性设置为 `hidden` 或 `auto`

  ```css
  .parent {
  	overflow: hidden;
  }
  ```

- **使用 `display: flow-root;` 清除浮动**

  将父元素的 `display` 属性设置为 `flow-root`

  ```css
  .parent {
  	display: flow-root;
  }
  ```

## 五、绘制三角形的方法

利用 CSS 的 `border` 属性，可以绘制三角形。

```css
 .triangle-down::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin: 20px;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 50px solid #ffcc00;
    }

    // 形成一个 尖角向上的三角形
```

## 六、0.5px 细线

```css
.line::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 1px;
  background-color: #000;
  transform: scale(0.5);
  transform-origin: left top;
}

```

