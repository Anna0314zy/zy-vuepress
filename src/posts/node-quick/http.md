---
title: HTTP核心概念
date: 2019-01-06
tags:
   - Node.js
---

# HTTP核心概念
## 一.课程主题：
- 1.掌握HTTP中必备的概念

- 2.掌握node中的http服务的创建及应用

- url模块的使用

- 客户端和服务端的创建

- http静态服务封装

## 二.课程内容：
### 1）什么是HTTP?应用层
通常的网络是在TCP/IP协议族的基础上来运作的，HTTP是一个子集。

### 2）TCP/IP协议族 (HTTP应用层协议 在传输层的基础上增加了一些自己的内容)
协议简单来说就是通信的规则，例如：通信时谁先发起请求，怎样结束，如何进行通信。把互联网相关的协议统称起来称为TCP/IP

### 3）协议分层(OSI协议分层)
(物，数)，网，传，(会，表，应)

- 应用层 HTTP,FTP,DNS (与其他计算机进行通讯的一个应用服务，向用户提供应用服务时的通信活动)

- 传输层 TCP（可靠） UDP 数据传输 (HTTP -> TCP DNS->UDP)

- 网络层 IP 选择传输路线 (通过ip地址和mac地址)(使用ARP协议凭借mac地址进行通信)

- 链路层 网络连接的硬件部分
![](../../.vuepress/public/images/tpchttp.png)


### 4) HTTP特点
- http是不保存状态的协议，使用cookie来管理状态 (登录 先给你cookie 我可以看一下你有没有cookie)
- 为了防止每次请求都会造成无谓的tcp链接建立和断开，所以采用保持链接的方式 keep-alive
- 以前发送请求后需要等待并收到响应，才能发下一个，现在都是管线化的方式 (js css 可以并发请求 6 2) cdn
### 5) HTTP缺点
通信采用明文

不验证通信方的身份

无法验证内容的完整性 (内容可能被篡改)

>通过SSL（安全套阶层）建立安全通信线路 HTTPS (超文本传输安全协议)

### 6) HTTP方法 (get post 简单请求) Resful风格
- GET:获取资源 /user？

- POST:传输实体主体 请求体中

- PUT：来传输文件

- HEAD: 获取报文首

- DELETE: 删除文件

- OPTIONS:询问支持的方法 跨域 如果默认发送的是get/post 不会发送options的 ""复杂请求""

- get /post (a:1) headers:{a:1} put / delete 复杂的请求

- REST API Resful风格 根据路径和不同的方法 就能确定对资源进行什么操作

跨域是浏览器之前的 服务器之间没有跨域问题 反向代理 、后端设置cors

c.com-> d.com OPTIONS 非简单请求会发送options (options 直接返回ok就可以了)

### 7) HTTP状态码 (发请求 命令行 curl命令) 服务端
curl命令行工具 postman

- 1xx 信息性状态码 websocket upgrade

- 2xx 成功状态码 200 204(没有响应体) 206(范围请求 暂停继续下载) 获取网页的部分请求

- 3xx 重定向状态码 301 302 303 post -> get 304(删除报文主体 在次发送请求) 307 (不会从POST转为GET)

- 4xx 客户端错误状态码 400 401 403 404 405 方法不允许

- 5xx 服务端错误状态码 500 503

### 8) http客户端和服务端通信
Http报文，http交互的信息称之为http报文
![](../../.vuepress/public/images/requestheader.png)
![](../../.vuepress/public/images/responseheader.png)




通用首部字段：请求和响应报文都有的首部

实体首部字段：描述实体部分的字段
![](../../.vuepress/public/images/request.png)
![](../../.vuepress/public/images/response.png)




### 9) URI和URL
#### URI
URI(Uniform Resource Identifier)是统一资源标识符,在某个规则下能把这个资源独一无二标示出来，比如人的身份证号

- Uniform 不用根据上下文来识别资源指定的访问方式
- Resource 可以标识的任何东西
- Identifier 表示可标识的对象
#### URL
统一资源定位符，表示资源的地点，URL时使用浏览器访问WEB页面时需要输入的网页地址

- Uniform 不用根据上下文来识别资源指定的访问方式
- Resource 可以标识的任何东西
- Location 定位

![](../../.vuepress/public/images/urlformat.png)
### 10) 报文应用
- Content-Encoding : gzip压缩 form-data: 多部分对象集合 上传文件

- range: 范围请求 206 accept-language：内容协商 前端控制 后端控制

- host：单主机多域名 304 http缓存

- referer:访问来源 防盗链 proxy:代理、网关和隧道

- user-agent:用户内核 安全相关的头: X-Frame-Options、X-XSS-Protection (安全 csrf xss https 加密)
## 三. http的用法
前端向后端请求资源 如何返回
```js
//服务器 返回静态文件 返回数据
const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs").promises;
const mime = require("mime");
const { createReadStream } = require("fs");
class StaticServer {
  async handleRequest(req, res) {
    const { pathname, query } = url.parse(req.url, true);
    let filePath = path.join(__dirname, pathname); //----> Users/zouyu/Desktop/node-zy/http/
    //需要判断你访问的是不是文件夹
    //先访问根路径 卡住了  再访问/a 也需要等待前一个执行完 会有阻塞效果 不能这么搞
    try {
      let statobj = await fs.stat(filePath);
      console.log(statobj.isFile(), "statobj.isFile()");
      if (statobj.isFile()) {
        //mime 可以根据文件后缀来识别 是什么类型的
        //读一点 写一点  流
        //    '/Users/zouyu/Desktop/node-zy/http/favicon.ico 浏览器按照心情发的 不是文件 需要捕获错误
        res.setHeader(
          "Content-Type",
          mime.getType(filePath) + ";charset=utf-8"
        ); //设置Content-Type
        createReadStream(filePath).pipe(res); // res是一个可写流 可读流pipe（可写流）
        // let data = await fs.readFile(filePath); //http://localhost:3000/note.md
        // console.log(data, 'data')
        // res.end(data)
      } else {
          //文件夹
          filePath = path.join(filePath, 'index.html');
          await fs.access(filePath);//判断文件是否可以访问 异步方法不存在会报错
           res.setHeader(
            "Content-Type",
            "text/html;charset=utf-8"
          );

          createReadStream(filePath).pipe(res);
          
      }
    } catch (e) {
        this.sendError(e,req,res);
    }
  }
sendError(e,req,res) {
    res.statusCode = 404;
    res.end('NOT FOUND');
}
  start(...args) {
    const server = http.createServer(this.handleRequest.bind(this)); //解决this指向
    server.listen(...args);
  }
}
new StaticServer().start(3000, function () {
  console.log("3000----start");
});
```

