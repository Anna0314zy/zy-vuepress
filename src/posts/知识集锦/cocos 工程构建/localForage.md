# localForage 使用手册（全面）

> 本文档为中文版使用手册，覆盖从入门、进阶、最佳实践、常见坑、到与框架集成与迁移等全流程示例。包含 `driver` 数组和 `createInstance` 使用示例。

---

## 目录

1. 简介
2. 安装与引入
3. 基本用法（同步/异步范例）
4. 驱动（driver）和回退策略（包括数组写法）
5. createInstance 与多 store 管理
6. TypeScript 类型示例
7. 进阶：TTL（过期缓存）封装
8. 进阶：缓存 API wrapper 自动化（带 ETag / 强缓存）
9. 与 React / Vue 集成示例（hooks & composable）
10. 二进制数据（Blob / File）与 base64 存储建议
11. 容量、限制与兼容性注意事项
12. 错误处理与调试技巧
13. 常见问题与解决方案
14. 迁移与替代方案
15. FAQ

---

## 1. 简介

`localForage` 是一个基于 IndexedDB、WebSQL（可选）和 localStorage 的异步存储库。它封装了底层异步 API，并实现类似 `localStorage` 的易用接口，同时支持存对象、数组和二进制数据（Blob）。

优点：异步、容量大、API 简单、跨浏览器回退。

---

## 2. 安装与引入

**NPM / Yarn**

```bash
npm install localforage
# or
yarn add localforage
```

**在浏览器中通过 CDN**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js"></script>
```

**引入（ESM / TS）**

```ts
import localforage from 'localforage'
```

---

## 3. 基本用法（异步/await）

```ts
// 设置
await localforage.setItem('token', 'abcd1234')

// 读取
const token = await localforage.getItem<string>('token')

// 删除
await localforage.removeItem('token')

// 清空
await localforage.clear()

// keys 列表
const keys = await localforage.keys()

// 遍历
await localforage.iterate((value, key, iterationNumber) => {
  console.log(key, value)
})
```

> 注意：所有方法都返回 promise，也支持回调形式（不推荐）。

---

## 4. 驱动（driver）和回退策略

localForage 支持三种主要驱动（按优先级）：

* `localforage.INDEXEDDB`（推荐）
* `localforage.WEBSQL`（旧）
* `localforage.LOCALSTORAGE`（最后回退）

**你可以传入数组指定优先级**，这是有效且推荐的做法，例如：

```ts
const driver = [
  localforage.INDEXEDDB,
  localforage.WEBSQL,
  localforage.LOCALSTORAGE,
]

const inst = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'thumbnail_cache',
})
```

**单独设置驱动**

```ts
await localforage.setDriver(localforage.INDEXEDDB)
```

**检测当前使用的 driver**

```ts
console.log(localforage.driver()) // 返回当前 driver 名称字符串
```

**说明：** 当你把 `driver` 传入 `createInstance` 或全局 config 时，localForage 会按数组顺序尝试使用第一个可用的驱动。如果不传，默认就是尝试 IndexedDB → WebSQL → localStorage。

---

## 5. createInstance 与多 store 管理

当你需要按功能隔离数据（比如：缩略图、文本缓存、分页数据），推荐 `createInstance`：

```ts
const base64Store = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'THUMBNAIL_CACHE',
})

const textBase64Store = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'TEXT_CACHE',
})

const pagesStore = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'PAGES_CACHE',
})
```

**使用方式与全局一致**：

```ts
await base64Store.setItem('page-1-thumb', base64Str)
const t = await textBase64Store.getItem('doc-2')
```

`createInstance` 优点：

* 不同业务数据分离，便于清理（clear）与迁移。
* 可为每个 instance 单独配置 `driver`、`storeName`、`name`。

---

## 6. TypeScript 示例（带类型）

```ts
import localforage from 'localforage'

type Thumbnail = { width: number; height: number; data: string }

const thumbStore = localforage.createInstance({ name: 'app', storeName: 'thumb' })

async function saveThumb(key: string, thumb: Thumbnail) {
  await thumbStore.setItem<Thumbnail>(key, thumb)
}

async function loadThumb(key: string) {
  const v = await thumbStore.getItem<Thumbnail | null>(key)
  return v
}
```

---

## 7. 进阶：带 TTL（过期）封装

localForage 本身不提供过期时间，需要自己封装。下面是一个简单且实用的 TTL 封装：

```ts
interface TTLValue<T> {
  expiresAt: number // 时间戳 ms
  value: T
}

function withTTL(instance: LocalForage) {
  return {
    async set<T>(key: string, value: T, ttlMs?: number) {
      if (!ttlMs) {
        return instance.setItem(key, value)
      }
      const payload: TTLValue<T> = {
        expiresAt: Date.now() + ttlMs,
        value,
      }
      return instance.setItem(key, payload)
    },

    async get<T>(key: string) {
      const raw = (await instance.getItem<TTLValue<T> | T>(key)) as any
      if (!raw) return null
      if (raw.expiresAt) {
        if (Date.now() > raw.expiresAt) {
          await instance.removeItem(key)
          return null
        }
        return raw.value as T
      }
      return raw as T
    },

    remove(key: string) {
      return instance.removeItem(key)
    },

    clear() {
      return instance.clear()
    },
  }
}

// 使用
const cache = withTTL(base64Store)
await cache.set('a', 'aaa', 1000 * 60 * 60) // 1 小时
```

> 可以进一步把过期清理放到后台调度或 app 启动时批量清理。

---

## 8. 进阶：自动缓存 API 的 wrapper 示例

示例：当请求返回 200 且带 ETag 时，我们缓存响应并在下次请求带上 If-None-Match。

```ts
async function fetchWithCache(url: string, options: RequestInit = {}) {
  const key = `cache:${url}`
  const metaKey = `${key}:meta`

  // 读取缓存
  const cached = await pagesStore.getItem<{etag?: string, body?: any}>(key)

  const headers = new Headers(options.headers || {})
  if (cached?.etag) {
    headers.set('If-None-Match', cached.etag)
  }

  const res = await fetch(url, { ...options, headers })
  if (res.status === 304 && cached?.body) {
    return cached.body
  }

  const body = await res.clone().json()
  const etag = res.headers.get('ETag') || undefined
  await pagesStore.setItem(key, { etag, body })
  return body
}
```

---

## 9. 与 React / Vue 的集成

### React Hook 示例

```ts
import { useState, useEffect } from 'react'

function useLocalForage<T>(instance: LocalForage, key: string, initial?: T) {
  const [state, setState] = useState<T | null>(null)

  useEffect(() => {
    let mounted = true
    instance.getItem<T>(key).then(v => {
      if (!mounted) return
      if (v === null && initial !== undefined) instance.setItem(key, initial)
      setState(v as T)
    })
    return () => { mounted = false }
  }, [instance, key])

  const set = (v: T) => instance.setItem(key, v).then(() => setState(v))
  const remove = () => instance.removeItem(key).then(() => setState(null))

  return { value: state, set, remove }
}
```

### Vue 3 Composable 示例

```ts
import { ref, onMounted } from 'vue'

export function useLocalForage(instance: LocalForage, key: string, initial = null) {
  const value = ref(null)
  onMounted(async () => {
    const v = await instance.getItem(key)
    if (v === null && initial !== null) await instance.setItem(key, initial)
    value.value = v
  })

  async function set(v) {
    await instance.setItem(key, v)
    value.value = v
  }

  async function remove() {
    await instance.removeItem(key)
    value.value = null
  }

  return { value, set, remove }
}
```

---

## 10. 二进制数据（Blob / File）与 base64 存储建议

* IndexedDB 原生支持 `Blob`，推荐直接存 Blob（节省空间，性能好）。
* base64 字符串比 Blob 更占空间（约 33% 的额外开销）。只有在受限存储环境或需要以字符串方式处理时才考虑 base64。
* 如果你需要在多个 instance 中存储缩略图，建议使用 `Blob` 并在读取时使用 `URL.createObjectURL(blob)` 或 `FileReader` 转成 base64（按需）。

**示例：存 Blob**

```ts
const blob = new Blob([arrayBuffer], { type: 'image/png' })
await base64Store.setItem('page-1', blob)

const b = await base64Store.getItem<Blob>('page-1')
const url = URL.createObjectURL(b)
```

**示例：存 base64**

```ts
await base64Store.setItem('page-1-b64', base64String)
```

---

## 11. 容量、限制与兼容性注意事项

* 容量由浏览器决定：通常几 MB 到数百 MB（桌面浏览器比移动端大）。
* iOS Safari 有特殊限制，IndexedDB 在私密模式下可能不可用或容量非常小。
* WebSQL 在某些现代浏览器已被弃用，但仍可作为回退。
* localStorage 是同步且容量最小（通常 5MB），仅做最后回退。

**建议**：在存大量二进制或大列表时使用 IndexedDB（即默认行为）。

---

## 12. 错误处理与调试技巧

* 使用 `try / catch` 捕获底层异常：

```ts
try {
  await store.setItem('k', hugeObj)
} catch (err) {
  console.error('store error', err)
}
```

* 如果 IndexedDB 无法使用，localForage 会回退到 WebSQL 或 localStorage，但你应当显式检测：

```ts
const driver = await store.driver()
console.log('using driver', driver)
```

* 浏览器 devtools → Application / Storage 面板可以查看 IndexedDB 和 localStorage 内容。

---

## 13. 常见问题与解决方案

* **存对象后变成 `[object Object]`？**

  * 说明你使用了 `localStorage`（字符串化），而不是 IndexedDB。检查 driver 配置。

* **大文件存不下 / 写入失败？**

  * 检查浏览器存储配额；在移动浏览器或隐私模式下更容易失败。

* **跨域 iframe 使用 localForage？**

  * 如果 iframe 和父页面不是同源，IndexedDB 数据不会共享。同源才能共享。

---

## 14. 迁移与替代方案

* 如果需要更复杂功能（如分布式同步、加密、版本迁移），可结合：

  * Dexie.js（更底层的 IndexedDB ORM）
  * idb-keyval（更轻量）
  * PouchDB（支持离线同步）

---

## 15. FAQ（快速问答）

**Q：localForage 支持同步 API 吗？**
A：不，API 是异步的（promise），避免阻塞主线程。

**Q：可以在 service worker 里用吗？**
A：理论上可以（取决于浏览器），但要注意 service worker 的运行环境与主线程的 IndexedDB 实例访问特性。

**Q：如何检测是否在私密/无痕模式？**
A：没有统一可靠的标准，通常尝试写入并捕获异常来判断。

---

## 附录：参考代码清单

完整示例（把上面片段整理成一个小模块）：

```ts
import localforage from 'localforage'

const driver = [
  localforage.INDEXEDDB,
  localforage.WEBSQL,
  localforage.LOCALSTORAGE,
]

export const base64Store = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'THUMBNAIL_CACHE',
})

export const textBase64Store = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'TEXT_CACHE',
})

export const pagesStore = localforage.createInstance({
  driver,
  name: 'my-app',
  storeName: 'PAGES_CACHE',
})

// TTL 封装
export function ttlWrapper(instance: LocalForage) {
  return {
    async set(key: string, value: any, ttlMs?: number) {
      if (!ttlMs) return instance.setItem(key, value)
      return instance.setItem(key, { value, expiresAt: Date.now() + ttlMs })
    },
    async get(key: string) {
      const raw = await instance.getItem<any>(key)
      if (!raw) return null
      if (raw.expiresAt && Date.now() > raw.expiresAt) {
        await instance.removeItem(key)
        return null
      }
      return raw.value ?? raw
    }
  }
}
```

---

