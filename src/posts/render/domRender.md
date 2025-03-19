---
title: 浏览器输入URL后发生了什么？
date: 2019-05-19
tags:
  - CSS
---



下面是一篇较为完整的文档，详细阐述了从浏览器地址栏输入网址后发生的过程、加载顺序、前端需要注意的地方以及如何优化加载性能。

---

# 浏览器地址栏输入网址后发生了什么

当用户在浏览器地址栏输入一个网址并回车后，浏览器会经过一系列步骤来加载和展示页面，主要流程大致如下：

## 1. URL解析与网络请求

### 1.1 URL解析  
- **解析协议、域名和路径**：浏览器首先会解析用户输入的 URL（例如 `https://www.example.com/path/page.html`），确定协议（HTTP/HTTPS）、域名、端口（如果未指定则使用默认端口）和路径信息。

### 1.2 DNS解析  
- **DNS查找**：浏览器检查本地缓存、操作系统缓存、路由器缓存及ISP提供的 DNS 缓存，若未命中则向 DNS 服务器发起查询，获取目标域名对应的 IP 地址。

### 1.3 建立网络连接  
- **TCP握手**：通过三次握手（SYN、SYN-ACK、ACK）建立与服务器之间的 TCP 连接。
- **TLS握手（HTTPS场景）**：如果使用 HTTPS，则在 TCP 连接建立后进行 TLS 握手，协商加密算法、验证证书、生成会话密钥等，以保证数据传输的安全性。

### 1.4 发送 HTTP 请求  
- **请求报文**：浏览器构造 HTTP 请求头（包含 Cookie、User-Agent、Accept-Encoding 等信息）并发送请求到服务器。
- **缓存判断**：浏览器会检查本地缓存，若资源未过期，则可能直接使用缓存数据。

## 2. 服务器响应与资源加载

### 2.1 服务器响应  
- **响应报文**：服务器处理请求后返回响应报文，包含状态码、响应头和 HTML 内容（或其他资源，如 CSS、JS、图片等）。

### 2.2 资源请求  
- **解析 HTML 后继续请求**：浏览器在解析 HTML 时，发现内部引用的外部资源（如 CSS、JS、图片、字体等），会发起相应的 HTTP 请求加载这些资源。

---

# 浏览器的加载与渲染流程

## 1. HTML解析与 DOM 构建
- **HTML解析**：浏览器从服务器获得 HTML 内容后，从上至下、逐行解析 HTML，构建 DOM（Document Object Model）树。
- **阻塞性**：HTML 的解析过程会阻塞页面的渲染。

## 2. CSS解析与 CSSOM 构建
- **CSS解析**：当浏览器遇到 `<link>` 或 `<style>` 标签时，会解析 CSS，构建 CSSOM（CSS Object Model）树。
- **影响渲染**：CSSOM 与 DOM 树一起构成渲染树（Render Tree），决定页面的最终样式。
- `CSS 放在 <head> 中：将 CSS 文件放在 <head> 部分，确保在页面内容加载前完成样式的加载和解析，避免页面在无样式或样式突变的情况下呈现。`
## 3. JavaScript 解析与执行
- **阻塞问题**：传统的 `<script>` 标签（不带 `async` 或 `defer`）会阻塞 HTML 解析，直到脚本加载并执行完毕。
- **优化方案**：为减少阻塞，可使用 `async`（脚本异步加载，执行时不阻塞）或 `defer`（脚本延迟执行，等 HTML 全部解析完成后再执行）。
- `JavaScript 放在 <body> 底部：将 <script> 标签放在 <body> 底部，确保在页面内容和样式加载完成后再加载和执行脚本，避免阻塞页面的解析和渲染。`

## 4. 构建渲染树、布局与绘制
- **渲染树构建**：将 DOM 树和 CSSOM 树结合，生成渲染树，其中每个节点都是需要呈现的对象，并计算它们的样式和位置。
- **Layout（回流）**：浏览器根据渲染树计算每个节点的几何属性（位置和尺寸）。
- **Painting（绘制）**：根据渲染树的内容，将各个节点绘制到屏幕上。

## 5. 合成与显示
- **合成层**：浏览器会将页面分成多个图层，进行合成处理（尤其在启用硬件加速时），最后显示在屏幕上。

---

# 前端需要注意的加载顺序及优化策略

## 1. 资源加载顺序的注意点
- **优先加载关键资源**：确保影响页面首屏渲染的 CSS 和 JavaScript 优先加载；将不影响首屏的资源延迟加载或异步加载。
- **减少阻塞**：使用 `async` 或 `defer` 加载脚本，避免阻塞 HTML 解析。对于非关键 JS，可考虑放在页面底部。
- **利用缓存**：合理设置 HTTP 缓存头部（如 ETag、Cache-Control 等），减少不必要的网络请求。
- **合并与压缩**：将多个 CSS、JS 文件合并为一个文件，并使用工具压缩代码，减少请求次数和文件体积。

## 2. 优化加载性能的策略

### 2.1 使用 CDN 加速资源加载
- **静态资源托管**：将常用的库（如 jQuery、React、Vue 等）部署在 CDN 上，利用地理位置优势加快加载速度。

### 2.2 资源预加载与预取
- **预加载（preload）**：使用 `<link rel="preload">` 告诉浏览器优先加载关键资源。
  
  ```html
  <link rel="preload" href="styles.css" as="style">
  ```

- **预取（prefetch）**：对于将来可能需要的资源，使用 `<link rel="prefetch">`，在空闲时间加载。
  
  ```html
  <link rel="prefetch" href="next-page.js">
  ```

### 2.3 懒加载（Lazy Loading）
- **图片和非关键资源**：利用懒加载技术，仅在用户滚动到相应位置时加载图片或其他资源。
  
  ```html
  <img src="placeholder.jpg" data-src="real-image.jpg" class="lazy">
  ```

  使用 JavaScript 监听滚动事件来加载真正的图片。

### 2.4 服务端渲染与代码分割
- **服务端渲染（SSR）**：减少前端渲染时间，提升首屏加载速度。
- **代码分割**：使用 Webpack 或 Vite 的代码分割功能，将应用拆分成多个小模块，按需加载，减少首屏下载量。

---

# 实际应用示例

### 示例 1：使用 `async` 和 `defer` 优化脚本加载
- defer 属性：脚本会在 HTML 解析完成后执行，多个带 defer 的脚本会按照顺序执行。

- async 属性：脚本会异步加载并立即执行，多个带 async 的脚本执行顺序不确定。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>加载优化示例</title>
  <!-- 关键 CSS 优先加载 -->
  <link rel="stylesheet" href="styles.css">
  <!-- 预加载关键 JS（如果需要） -->
  <link rel="preload" href="critical.js" as="script">
</head>
<body>
  <h1>欢迎访问优化示例页面</h1>
  <!-- 非关键脚本，使用 defer 延迟执行 -->
  <script src="non-critical.js" defer></script>
  <!-- 异步加载的脚本 -->
  <script src="analytics.js" async></script>
</body>
</html>
```

### 示例 2：使用懒加载图片

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>懒加载示例</title>
  <style>
    img {
      width: 300px;
      height: 200px;
      background: #f0f0f0;
    }
  </style>
</head>
<body>
  <h1>图片懒加载示例</h1>
  <img data-src="real-image1.jpg" class="lazy" alt="Image 1">
  <img data-src="real-image2.jpg" class="lazy" alt="Image 2">
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const lazyImages = document.querySelectorAll('img.lazy');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      lazyImages.forEach(img => observer.observe(img));
    });
  </script>
</body>
</html>
```

---

# 总结

从浏览器地址栏输入网址到页面渲染完成，经历了 URL 解析、DNS 查询、TCP/TLS 握手、HTTP 请求与响应、HTML/CSS/JS 的加载和解析，再到渲染树构建、布局与绘制等一系列过程。前端开发者应注意：  
- 合理安排资源加载顺序，确保首屏关键资源优先加载；  
- 避免阻塞性加载（使用 async、defer）；  
- 利用缓存、CDN、预加载/预取、懒加载等技术提升页面加载速度；  
- 使用服务端渲染、代码分割等现代技术进一步优化用户体验。

通过这些优化策略，不仅能提升页面加载性能，也能改善用户体验和 SEO 效果

## 📌**重绘（Repaint）**和**重排（Reflow**

在前端开发中，**重绘（Repaint）**和**重排（Reflow）**是浏览器渲染机制中的两个重要概念。理解它们有助于优化页面性能，提升用户体验。

**重绘（Repaint）**

当元素的外观样式（如颜色、背景等）发生变化，但不影响布局时，浏览器会重新绘制该元素，这个过程称为重绘。重绘仅涉及元素的外观更新，不会引发布局的重新计算。

**触发重绘的常见操作：**

- 更改元素的颜色、背景色、边框颜色等样式属性。
- 修改元素的可见性（如 `visibility` 属性）。

**重排（Reflow）**

当页面的布局结构发生变化，导致元素的几何属性（如尺寸、位置）需要重新计算时，浏览器会进行重排。重排会触发重新计算元素的布局，并可能导致整个页面或部分页面的重新渲染。

**触发重排的常见操作：**

- 添加或删除可见的 DOM 元素。
- 更改元素的尺寸（宽度、高度、内外边距、边框等）。
- 修改元素的定位方式（如 `position`、`top`、`left` 等）。
- 更改浏览器窗口的尺寸（触发 `resize` 事件）。
- 读取布局信息（如 `offsetWidth`、`clientHeight` 等），浏览器为确保数据准确性，会先进行重排。

**重绘与重排的关系**

重排一定会导致重绘，因为布局的变化需要重新绘制元素；但重绘不一定会引发重排，因为外观的变化可能不涉及布局的调整。

**性能影响**

重排和重绘都会消耗浏览器的计算资源，频繁的重排尤其影响性能，可能导致页面渲染卡顿。因此，在开发中应尽量减少不必要的重排和重绘操作。

**优化建议**

- 避免频繁地对样式进行修改，尤其是会导致重排的属性。
- 对 DOM 进行批量操作，减少对页面布局的多次影响。
- 使用文档片段（`DocumentFragment`）或虚拟 DOM 技术，减少直接对真实 DOM 的操作次数。
- 避免在布局信息读取和写入之间交替进行操作，尽量将读取和写入分开，以减少重复的重排。

通过理解并优化重绘和重排，可以有效提升页面的渲染性能，提供更流畅的用户体验。 