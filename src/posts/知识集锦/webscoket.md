---
title: websokcet
tags:
   - websokcet
---




### ✅ 功能特性：

* 支持连接、发送、接收、关闭
* 支持自动重连（可设置最大重试次数）
* 支持心跳检测（可定时发送 ping/pong）
* 支持连接状态管理
* 支持事件回调：`onOpen`, `onClose`, `onError`, `onMessage`, `onReconnect`

---

## 📦 通用 WebSocket 封装（完整+注释）

```ts
/**
 * 通用 WebSocket 封装函数
 * 支持自动重连、心跳检测、事件监听等功能
 */
type WebSocketStatus = 'CONNECTING' | 'OPEN' | 'CLOSED'

interface WebSocketClientOptions {
  protocols?: string[]              // 可选的子协议数组
  autoReconnect?: boolean           // 是否开启自动重连
  reconnectInterval?: number        // 每次重连的间隔(ms)
  maxReconnectAttempts?: number     // 最大重连次数（-1 表示无限次）
  heartbeatInterval?: number        // 心跳间隔(ms)，如果设置将自动定时发送 ping
  heartbeatMessage?: string | (() => string) // 心跳发送内容
  onOpen?: (ws: WebSocket) => void
  onMessage?: (event: MessageEvent) => void
  onError?: (event: Event) => void
  onClose?: (event: CloseEvent) => void
  onReconnect?: (attempt: number) => void
}

export function createWebSocketClient(
  url: string,
  options: WebSocketClientOptions = {}
) {
  let ws: WebSocket | null = null
  let status: WebSocketStatus = 'CLOSED'
  let reconnectAttempts = 0
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let heartbeatTimer: ReturnType<typeof setInterval> | null = null
  let manuallyClosed = false // 标记是否是手动关闭，避免触发重连

  /**
   * 建立 WebSocket 连接
   */
  const connect = () => {
    // 防止重复连接
    if (ws || status === 'CONNECTING') return

    status = 'CONNECTING'
    ws = new WebSocket(url, options.protocols || [])

    ws.onopen = () => {
      status = 'OPEN'
      reconnectAttempts = 0 // 重置重连次数
      options.onOpen?.(ws!)

      // 启动心跳机制
      startHeartbeat()
    }

    ws.onmessage = (event) => {
      options.onMessage?.(event)
    }

    ws.onerror = (event) => {
      options.onError?.(event)
    }

    ws.onclose = (event) => {
      status = 'CLOSED'
      stopHeartbeat()

      options.onClose?.(event)

      // 若不是手动关闭，自动尝试重连
      if (!manuallyClosed && options.autoReconnect) {
        if (
          options.maxReconnectAttempts === undefined ||
          options.maxReconnectAttempts < 0 ||
          reconnectAttempts < options.maxReconnectAttempts
        ) {
          reconnectAttempts++
          options.onReconnect?.(reconnectAttempts)
          reconnectTimer = setTimeout(() => {
            connect()
          }, options.reconnectInterval || 3000)
        }
      }

      ws = null
    }
  }

  /**
   * 发送消息
   */
  const send = (data: string | ArrayBuffer | Blob) => {
    if (ws && status === 'OPEN') {
      ws.send(data)
    } else {
      console.warn('WebSocket 未连接，无法发送消息')
    }
  }

  /**
   * 手动关闭连接
   */
  const close = () => {
    manuallyClosed = true
    stopHeartbeat()
    reconnectTimer && clearTimeout(reconnectTimer)
    reconnectTimer = null
    ws?.close()
  }

  /**
   * 启动心跳检测
   */
  const startHeartbeat = () => {
    if (options.heartbeatInterval && options.heartbeatInterval > 0) {
      heartbeatTimer = setInterval(() => {
        if (ws && status === 'OPEN') {
          const msg =
            typeof options.heartbeatMessage === 'function'
              ? options.heartbeatMessage()
              : options.heartbeatMessage || 'ping'
          ws.send(msg)
        }
      }, options.heartbeatInterval)
    }
  }

  /**
   * 停止心跳
   */
  const stopHeartbeat = () => {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer)
      heartbeatTimer = null
    }
  }

  /**
   * 返回当前状态
   */
  const getStatus = (): WebSocketStatus => status

  /**
   * 立即发起连接
   */
  connect()

  return {
    send,           // 发送消息
    close,          // 手动关闭连接
    getStatus,      // 获取当前状态
    reconnect: () => {
      manuallyClosed = false
      close()
      connect()
    },
    getWebSocket: () => ws, // 获取原始 WebSocket 实例
  }
}
```

---

## 🧪 使用示例

```ts
const client = createWebSocketClient('wss://example.com/ws', {
  autoReconnect: true,
  reconnectInterval: 3000,
  maxReconnectAttempts: 5,
  heartbeatInterval: 10000,
  heartbeatMessage: 'ping',
  onOpen: () => console.log('✅ Connected'),
  onMessage: (e) => console.log('📨 Message:', e.data),
  onError: (e) => console.error('❌ Error', e),
  onClose: (e) => console.warn('🔌 Disconnected', e.code),
  onReconnect: (count) => console.log(`🔁 Reconnect attempt #${count}`)
})

// 发送消息
client.send('Hello WebSocket')

// 关闭连接
// client.close()
```

---

## 🔐 可扩展方向（按需加）

你可以再扩展一些功能，例如：

* 断线重连延迟随机抖动（避免雪崩）
* JSON 自动序列化/反序列化封装
* 服务端 pong 检测是否响应，断开后再手动触发 close
* 浏览器关闭或离开页面时自动断开连接

如有需要我也可以帮你继续拓展。

---

是否还希望我为你提供 React/Vue 的 hook 封装版本？还是继续拓展 JSON 封装等功能？
