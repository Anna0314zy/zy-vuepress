import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts/node/APIGateway.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts/node/APIGateway.html\",\"title\":\"使用 Node.js 搭建一个 API 网关(助力微服务)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"使用 Node.js 搭建一个 API 网关(助力微服务)\",\"date\":\"2020-04-08T00:00:00.000Z\",\"tags\":[\"Node.js\",\"API 网关\"],\"gitInclude\":[],\"description\":\"原文：Building an API Gateway using Node.js 地址：https://blog.risingstack.com/building-an-api-gateway-using-nodejs/ node 学习笔记 外部客户端访问微服务架构中的服务时，服务端会对认证和传输有一些常见的要求。API 网关提供共享层来处理服务协议之...\"},\"headers\":[{\"level\":2,\"title\":\"微服务和消费者\",\"slug\":\"微服务和消费者\",\"link\":\"#微服务和消费者\",\"children\":[]},{\"level\":2,\"title\":\"什么是 API 网关？\",\"slug\":\"什么是-api-网关\",\"link\":\"#什么是-api-网关\",\"children\":[{\"level\":3,\"title\":\"Node.js 用于前端团队的 API 网关\",\"slug\":\"node-js-用于前端团队的-api-网关\",\"link\":\"#node-js-用于前端团队的-api-网关\",\"children\":[]}]},{\"level\":2,\"title\":\"API 网关功能\",\"slug\":\"api-网关功能\",\"link\":\"#api-网关功能\",\"children\":[{\"level\":3,\"title\":\"路由和版本控制\",\"slug\":\"路由和版本控制\",\"link\":\"#路由和版本控制\",\"children\":[]},{\"level\":3,\"title\":\"网关设计的进化\",\"slug\":\"网关设计的进化\",\"link\":\"#网关设计的进化\",\"children\":[]},{\"level\":3,\"title\":\"认证方式\",\"slug\":\"认证方式\",\"link\":\"#认证方式\",\"children\":[]},{\"level\":3,\"title\":\"数据汇总\",\"slug\":\"数据汇总\",\"link\":\"#数据汇总\",\"children\":[]},{\"level\":3,\"title\":\"序列化格式转换\",\"slug\":\"序列化格式转换\",\"link\":\"#序列化格式转换\",\"children\":[]},{\"level\":3,\"title\":\"协议转换\",\"slug\":\"协议转换\",\"link\":\"#协议转换\",\"children\":[]},{\"level\":3,\"title\":\"限速和缓存\",\"slug\":\"限速和缓存\",\"link\":\"#限速和缓存\",\"children\":[]},{\"level\":3,\"title\":\"超负荷的 API 网关\",\"slug\":\"超负荷的-api-网关\",\"link\":\"#超负荷的-api-网关\",\"children\":[]}]},{\"level\":2,\"title\":\"Node.js API 网关\",\"slug\":\"node-js-api-网关\",\"link\":\"#node-js-api-网关\",\"children\":[{\"level\":3,\"title\":\"Node.js API 网关总结\",\"slug\":\"node-js-api-网关总结\",\"link\":\"#node-js-api-网关总结\",\"children\":[]}]}],\"readingTime\":{\"minutes\":8.21,\"words\":2464},\"filePathRelative\":\"posts/posts/node/APIGateway.md\",\"localizedDate\":\"2020年4月8日\",\"excerpt\":\"<blockquote>\\n<p>原文：Building an API Gateway using Node.js</p>\\n<p>地址：<a href=\\\"https://blog.risingstack.com/building-an-api-gateway-using-nodejs/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://blog.risingstack.com/building-an-api-gateway-using-nodejs/</a></p>\\n</blockquote>\\n<h1>node 学习笔记</h1>\\n<p>外部客户端访问微服务架构中的服务时，服务端会对认证和传输有一些常见的要求。API 网关提供共享层来处理服务协议之间的差异，并满足特定客户端（如桌面浏览器、移动设备和老系统）的要求。</p>\",\"autoDesc\":true}")
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
