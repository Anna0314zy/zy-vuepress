---
title: js 跨域
date: 2019-06-05
tags:
  - Javascript
---

在前端开发中，**跨域问题**指的是由于浏览器的同源策略，限制了不同源（协议、域名、端口）之间的资源共享和请求。同源策略是一种安全机制，防止恶意网站访问或篡改其他网站的数据。

##  **跨域问题的形成：**

当我们在一个网页中请求另一个协议、域名或端口下的资源时，就会发生跨域。例如，当前页面的 URL 是 `https://www.example.com/page1`，如果请求 `http://api.anotherdomain.com/data`，则属于跨域请求。

**常见的跨域解决方案：**

## 1. **JSONP（JSON with Padding）：**

   - **原理：** 利用 `<script>` 标签没有跨域限制的特点，通过动态创建 `<script>` 标签，请求服务器返回一段包含数据的 JavaScript 代码，从而实现跨域数据获取。

   - **示例代码：**

     ```html
     <!-- index.html -->
     <html>
       <head>
         <title>JSONP 示例</title>
         <script>
           // 创建 script 标签
           var script = document.createElement('script');
           script.src = 'http://api.example.com/data?callback=handleResponse';
           document.body.appendChild(script);

           // 处理回调函数
           function handleResponse(data) {
             console.log('接收到的数据:', data);
           }
         </script>
       </head>
       <body>
         <h1>JSONP 示例</h1>
       </body>
     </html>
     ```

     ```javascript
     // 服务器端（Node.js 示例）
     const express = require('express');
     const app = express();

     app.get('/data', (req, res) => {
       const data = { message: 'Hello from server' };
       const callback = req.query.callback;
       // 拿到前端传给我们的方法名参数 执行方法名 并把参数传过去
       res.send(`${callback}(${JSON.stringify(data)})`);
     });

     app.listen(3000, () => {
       console.log('服务器正在监听 3000 端口');
     });
     ```

     **注意：** JSONP 仅支持 `GET` 请求，且存在安全隐患，现代开发中已较少使用。

##  2. **CORS（Cross-Origin Resource Sharing）：**

   - **原理：** 服务器在响应头中添加 `Access-Control-Allow-Origin` 等字段，明确允许哪些域名的请求访问资源。浏览器在发送跨域请求时，会先发送一个预检请求（OPTIONS），服务器确认支持后，浏览器再发送实际请求。

   - **示例代码：**

     ```javascript
     // 前端代码
     fetch('http://api.example.com/data', {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
       },
     })
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('请求失败:', error));
     ```

     ```javascript
     // 服务器端（Node.js 示例）
     const express = require('express');
     const app = express();

     // 设置 CORS 响应头
     app.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', '*'); // 允许所有域名访问
       res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
       if (req.method === 'OPTIONS') {
         return res.sendStatus(200); // 预检请求直接返回
       }
       next();
     });

     app.get('/data', (req, res) => {
       const data = { message: 'Hello from server' };
       res.json(data);
     });

     app.listen(3000, () => {
       console.log('服务器正在监听 3000 端口');
     });
     ```

     **注意：** CORS 需要浏览器和服务器的支持，且配置不当可能导致安全问题。

##  3. **代理服务器：**

   - **原理：** 在前端开发环境中，使用代理服务器转发请求，将跨域请求发送到同域的代理服务器，由代理服务器再转发到目标服务器，从而避免浏览器的跨域限制。

   - **示例代码：**

     ```javascript
     // 前端代码（使用 webpack-dev-server 的代理功能）
     module.exports = {
       devServer: {
         proxy: {
           '/api': {
             target: 'http://api.example.com',
             changeOrigin: true,
             pathRewrite: { '^/api': '' },
           },
         },
       },
     };
     ```

     在上述配置中，前端请求 `/api` 开头的接口会被代理到 `http://api.example.com`，从而解决跨域问题。

##  4. **服务器端代理：**

   - **原理：** 在服务器端创建代理接口，前端请求该接口，服务器再向目标跨域服务器发起请求，获取数据后返回给前端。

   - **示例代码：**

     ```javascript
     // 前端代码
     fetch('/proxy/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('请求失败:', error));
     ```

     ```javascript
     // 服务器端（Node.js 示例）
     const express = require('express');
     const fetch = require('node-fetch');
     const app = express();

     app.get('/proxy/data', (req, res) => {
       fetch('http://api.example.com/data')
         .then(response => response.json())
         .then(data => res.json(data))
         .catch(error => res.status(500).send('服务器错误'));
     });

     app.listen(3000, () => {
       console.log('服务器正在监听 3000 端口');
     });
     ```

     **注意：** 服务器端代理需要额外的服务器资源，但可以有效解决跨域问题。

**总结：**

解决跨域问题的方法有多种，选择合适的方案需要根据项目的具体需求和场景来决定。例如：

- **JSONP：** 适用于只需要支持 `GET` 请求，且对安全性要求不高的场景。

- **CORS：** 适用于需要支持所有类型的 HTTP 请求，且需要发送自定义请求头的场景。

- **代理服务器：** 适用于前后端分离的项目，通过在开发环境中配置代理，避免跨域问题。 
在前端开发中，除了之前提到的 JSONP、CORS、代理服务器和服务器端代理外，**`postMessage`** 和 **WebSocket** 也是常用的跨域通信方式。

##  **1. `postMessage`：**

- **原理：** `postMessage` 是 HTML5 提供的跨文档消息传递机制，允许不同源（域）的窗口、iframe、弹出窗口等之间进行安全的消息传递。

- **使用场景：** 当需要在不同源的窗口之间传递数据时，例如父页面与子页面（iframe）之间的通信。

- **示例代码：**

  *父页面（发送消息）：*

  ```javascript
  // 获取子窗口对象
  const iframe = document.getElementById('myIframe');
  // 向子窗口发送消息
  iframe.contentWindow.postMessage('Hello from parent', 'http://child-domain.com');
  ```

  *子页面（接收消息）：*

  ```javascript
  // 监听消息事件
  window.addEventListener('message', function(event) {
    // 验证消息来源
    if (event.origin === 'http://parent-domain.com') {
      console.log('Received message:', event.data);
    }
  });
  ```

  **注意：** 使用 `postMessage` 时，应始终验证 `event.origin`，确保消息来源可信，以防止安全问题。

##  **2. WebSocket：**

- **原理：** WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议，允许客户端和服务器之间进行实时、双向的数据传输。

- **使用场景：** 适用于需要实时数据交换的应用，如在线聊天、实时通知等。

- **示例代码：**

  *客户端（浏览器）：*

  ```javascript
  // 创建 WebSocket 连接
  const socket = new WebSocket('ws://example.com/socket');
  
  // 连接打开时触发
  socket.addEventListener('open', function(event) {
    console.log('WebSocket is connected');
    // 发送消息到服务器
    socket.send('Hello Server');
  });
  
  // 接收到消息时触发
  socket.addEventListener('message', function(event) {
    console.log('Received from server:', event.data);
  });
  
  // 连接关闭时触发
  socket.addEventListener('close', function(event) {
    console.log('WebSocket is closed');
  });
  
  // 发生错误时触发
  socket.addEventListener('error', function(error) {
    console.error('WebSocket Error:', error);
  });
  ```

  *服务器端（Node.js 示例）：*

  ```javascript
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 8080 });
  
  wss.on('connection', function(ws) {
    console.log('Client connected');
    
    // 接收到消息时触发
    ws.on('message', function(message) {
      console.log('Received:', message);
      // 发送消息到客户端
      ws.send('Hello Client');
    });
    
    // 连接关闭时触发
    ws.on('close', function() {
      console.log('Client disconnected');
    });
    
    // 发生错误时触发
    ws.on('error', function(error) {
      console.error('WebSocket Error:', error);
    });
  });
  ```

  **注意：** WebSocket 协议本身不受同源策略的限制，但在建立连接时需要服务器支持，并且需要通过适当的安全措施（如使用 `wss://` 协议）来确保数据传输的安全性。

选择适当的跨域通信方式应根据具体的应用场景和需求。例如，`postMessage` 适用于在不同源的窗口之间传递数据，而 WebSocket 更适合需要实时、双向通信的场景。 