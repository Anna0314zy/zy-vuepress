// 服务器端（Node.js 示例）
import express from 'express';
const app = express();

app.get('/data', (req, res) => {
  const data = { message: 'Hello from server' };
  const callback = req.query.callback;
  res.send(`${callback}(${JSON.stringify(data)})`);
});

app.listen(3000, () => {
  console.log('服务器正在监听 3000 端口');
});