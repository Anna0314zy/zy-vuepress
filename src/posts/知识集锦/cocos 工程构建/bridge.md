


# 📘 classroom-bridge

**轻量级跨端通信桥（Iframe ↔ Host）设计说明 & 使用文档**

---

# 1. 背景 / Why

在互动课堂、H5 游戏、课件等场景中，我们经常需要让：

* **Host（宿主页面）**
* **Client（iframe / webview 内的页面）**

互相调用方法、发送事件、同步状态。

原生 `window.postMessage` 接口原始、低层，需要手动处理：

* 消息格式
* 方法回调
* 多个 iframe 区分
* 超时与错误处理
* 事件隔离
* 单次/多次消息监听

因此设计了 **classroom-bridge**，提供一个更结构化、安全、可扩展的 RPC 机制。

---

# 2. 设计理念 / Design Philosophy

classroom-bridge 的核心理念：

## ✔ 2.1 单一 Bridge ID

通信双方（host ↔ client）通过同一 `bridgeId` 建立连接。

* 相同 bridgeId → 同一个通信通道（channel）
* 不同 bridgeId → 完全隔离，互不影响

内部依赖一个 **全局 Registry（Map）** 来存储 bridge 实例。

## ✔ 2.2 RPC（远程方法调用）机制

RPC（Remote Procedure Call，远程过程调用）是一种通信协议，它让你像调用本地函数一样调用远端的函数。

内部设计基于 RPC 思想：

* host 可以调用 client 提供的方法
* client 可以调用 host 提供的方法
* 双方像调用本地函数一样调用远端

提供能力包括：

* 请求 / 应答（request / response）
* 单向事件（event）
* 超时支持
* Promise 化处理
* 自动序列化 / 反序列化

## ✔ 2.3 可插拔 Sender

支持不同发送方式：

* Host → iframe：`iframe.contentWindow.postMessage`
* Client → host：`window.parent.postMessage`

通过 `createClientSender` 统一封装。

---

# 3. 架构设计 / Architecture

```
┌──────────────────────────────────────────┐
│              Global Registry             │
│      Map<string, RPCBridgeInstance>      │
└──────────────────────────────────────────┘
                    ▲
      ┌─────────────┴──────────────┐
      │                            │
┌───────────────┐          ┌────────────────┐
│ Host (宿主页) │          │ Client (iframe)│
└───────────────┘          └────────────────┘
      │                            ▲
  createClientSender()         createClientSender()
      │                            ▲
      └───────────────postMessage──────────────┘
```

## 核心组件：

### **RPCBridge**

* 管理 RPC 实例
* 按 bridgeId 区分
* 内部保存 callback、pending 请求、事件监听等

### **Sender（发送器）**

* 封装 postMessage
* 增加 bridgeId/来源验证
* 统一消息格式

### **Message Router**

* 根据 `bridgeId` 路由到正确实例
* 区分 Request / Response / Event

---

# 4. 消息格式 / Message Format

所有消息遵循统一结构：

```json
{
  "bridgeId": "xxx",
  "type": "request" | "response" | "event",
  "id": "唯一请求 id，用于 response 匹配",
  "method": "方法名",
  "params": {}, 
  "result": {}, 
  "error": {}
}
```

---

# 5. 使用方式 / Usage

以下内容可以直接作为 README 示例。

---

## 5.1 初始化（Host 端）

```ts
import bridge from 'classroom-bridge'

const hostClient = bridge.RPCBridge.get(bridgeId)

hostClient.send = bridge.createClientSender(bridgeId, iframe)

// 注册方法给 iframe 调用
hostClient.register('getUserInfo', () => {
  return { name: 'Alice', role: 'student' }
})
```

---

## 5.2 初始化（Client / iframe 端）

```ts
import bridge from 'classroom-bridge'

const client = bridge.RPCBridge.get(bridgeId)

// iframe → host 发消息
client.send = bridge.createClientSender(bridgeId)

// 注册 client 方法给 host 调用
client.register('play', (params) => {
  console.log('Start playing', params)
  return true
})
```

---

## 5.3 Host 调用 iframe

```ts
await hostClient.call('play', { id: 10001 })
```

---

## 5.4 iframe 调用 Host

```ts
const user = await client.call('getUserInfo')
console.log(user)
```

---

## 5.5 Host 监听 iframe 事件

```ts
hostClient.on('finish', (data) => {
  console.log('课堂完成', data)
})
```

iframe 侧：

```ts
client.emit('finish', { score: 98 })
```

---

# 6. 与 bridgeId 相关的说明（重要）

> **bridgeId 是通信双方的唯一身份识别。
> 只要 host 和 iframe 使用相同 bridgeId，就能建立通信。**

实现原理：

* RPCBridge 内部维护 `Map<bridgeId, instance>`
* 多文件调用 `get(bridgeId)` 会指向同一个实例
* 不同 bridgeId 实例完全隔离

例如：

```txt
A.ts: RPCBridge.get("room-123")
B.ts: RPCBridge.get("room-123")

→ 两个是同一个对象实例
```

---

# 7. 典型应用场景

* 课堂互动应用（主端控制课件）
* H5 游戏嵌入课堂系统
* 直播页面与嵌入的互动内容通信
* WebView ↔ 页面 的 JSBridge 封装
* 小程序 / App 宿主通信

---

# 8. 设计优势

| 能力        | 说明                  |
| --------- | ------------------- |
| RPC 调用    | Promise 化、可直接 await |
| 通道隔离      | 不同 bridgeId 全隔离     |
| 跨 iframe  | 多个课件互不干扰            |
| 自动路由      | 消息根据 bridgeId 自动分发  |
| 注册 / 调用分离 | 任意文件注册，任意文件调用       |
| 安全        | 限制来源 origin，白名单过滤   |

---

# 9. 扩展能力（可选）

你可以继续扩展：

* 消息加签（签名校验）
* 队列 / 重试机制
* 跨多个 iframe 的广播模式
* 日志上报
* 性能监控（耗时、吞吐量）

我也可以帮助把这部分加入文档。

---

# 🎉 完成

这是一份可以直接用于 README 的完整版本。

如果你愿意，我还能为 classroom-bridge：

✔ 生成正式 Markdown 版
✔ 生成完整 API 文档（register / call / emit / off / destroy）
✔ 生成 TypeScript 定义文件说明
✔ 生成架构 UML 图（序列图 / 数据流图）

你需要吗？
