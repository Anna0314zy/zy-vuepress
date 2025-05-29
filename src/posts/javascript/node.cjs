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