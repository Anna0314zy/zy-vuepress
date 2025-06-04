---
title: 浏览器多tab 通信
tags:
   - Vite
---

为什么无法直接通信
首先，浏览器tab下控制台定义的全局变量为什么无法与其它tab共享？

在浏览器中，变量的作用域决定了其可访问的范围。在控制台中定义的变量通常具有全局作用域，可以在当前页面的全局环境中访问。然而每个标签页（或称为选项卡）都有自己独立的执行环境和上下文。在一个标签页中定义的变量不能直接在其他标签页中访问，这是由于以下原因：

- 执行环境的隔离：每个标签页都有自己的 JavaScript 执行环境，用于加载和执行页面的脚本。这意味着在一个标签页中定义的变量和函数只存在于该标签页的执行环境中，无法直接访问其他标签页的执行环境。

- 安全性和隐私考虑：浏览器的安全性机制通常会限制不同标签页之间的直接访问。这是为了防止恶意网站或恶意脚本通过访问其他标签页的变量和数据进行隐私侵犯或安全攻击。

- 进程隔离：现代浏览器通常使用多进程或多线程来管理不同的标签页。每个标签页通常在独立的进程或线程中运行，这种隔离确保了标签页之间的相互独立性，包括变量和数据的隔离。

所以，为了实现标签页之间的通信和数据共享，可以使用浏览器提供的特定机制。

通信的方式有哪些
## LocalStorage 或 SessionStorage：
这些是浏览器提供的存储机制，可以在不同标签页之间共享数据。通过将数据存储在 LocalStorage 或 SessionStorage 中，可以在一个标签页中写入数据，然后在其他标签页中读取。
在发送标签页中写入数据：

```js
// 发送标签页中写入数据
localStorage.setItem('message', 'Hello from Tab 1');
在接收标签页中读取数据：

// 接收标签页中读取数据
var message = localStorage.getItem('message');
console.log(message); // 输出：Hello from Tab 1

```
## Broadcast Channel
Broadcast Channel：这是一个浏览器提供的 API，允许不同标签页之间进行消息广播和通信。通过 Broadcast Channel，你可以在一个标签页中发送消息，然后在其他标签页中监听并接收该消息。
在发送标签页中发送消息：

```js
// 发送标签页中发送消息
var channel = new BroadcastChannel('my_channel');
channel.postMessage('Hello from Tab 1');
在接收标签页中监听消息：

// 接收标签页中监听消息
var channel = new BroadcastChannel('my_channel');
channel.onmessage = function(event) {
  var message = event.data;
  console.log(message); // 输出：Hello from Tab 1
};

```

## SharedWorker

SharedWorker：SharedWorker 是一种浏览器提供的共享工作线程机制，允许多个标签页共享同一个后台线程。通过 SharedWorker，不同标签页可以与共享的后台线程进行通信和数据共享。
在发送标签页中发送消息：

```js

// 发送标签页中发送消息
var worker = new SharedWorker('worker.js');
worker.port.postMessage('Hello from Tab 1');
在接收标签页中监听消息：

// 接收标签页中监听消息
var worker = new SharedWorker('worker.js');
worker.port.onmessage = function(event) {
  var message = event.data;
  console.log(message); // 输出：Hello from Tab 1
};
在共享的 Worker 脚本文件 worker.js 中监听消息：

// 共享的 Worker 脚本文件 worker.js
self.onconnect = function(event) {
  var port = event.ports[0];
  port.onmessage = function(event) {
    var message = event.data;
    console.log(message); // 输出：Hello from Tab 1
  };
};

```
写在最后
当然，上述三种通信方法（LocalStorage/SessionStorage、Broadcast Channel、SharedWorker）都要求在同一个域下才能完成。这是由于浏览器的安全策略所限制的。