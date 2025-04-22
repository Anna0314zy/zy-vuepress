---
title: customRef
tags:
  - vue3
---




在 Vue 3 中，`customRef` 是用来创建**自定义 `ref` 响应式逻辑**的 API，通常用于实现**节流、防抖、延迟更新**等复杂场景。

---

## ✅ 一句话理解
> `customRef` 让你可以完全控制一个 `ref` 的 **读取（track）** 和 **写入（trigger）** 的行为。

---

## 📦 导入方式

```ts
import { customRef } from 'vue'
```

---

## 🧪 基本用法

### 🌟 实现一个防抖 `ref`

```ts
import { customRef } from 'vue'

function useDebouncedRef(value, delay = 300) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 追踪依赖
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger() // 通知依赖更新
        }, delay)
      }
    }
  })
}
```

### 👇 使用它

```ts
<template>
  <input v-model="keyword" />
  <p>搜索关键词（防抖后）：{{ keyword }}</p>
</template>

<script setup>
import { useDebouncedRef } from './useDebouncedRef' // 假设你封装成了一个文件

const keyword = useDebouncedRef('', 500)
</script>
```

---

## 🧠 customRef 回调函数参数说明

```ts
customRef((track, trigger) => {
  return {
    get() {
      track()    // 手动追踪依赖（谁使用了它）
      return value
    },
    set(newValue) {
      value = newValue
      trigger() // 手动触发更新（告诉依赖更新了）
    }
  }
})
```

---

## 🧰 使用场景举例

|  场景     | 说明                           |
|----------|--------------------------------|
| 输入框防抖 | 延迟响应输入变化（如搜索）     |
| 节流控制 | 控制更新频率，例如滚动监听等     |
| 带缓存的响应式数据 | 数据读取时可以从缓存读取    |
| 延迟更新 | 实现过渡/动画前再更新值         |

---

## 🏁 小结
- `customRef` 是 Vue 3 响应式系统中的底层 API，用于手动控制依赖追踪和触发更新。
- 通常结合 `v-model`、`watchEffect`、`computed` 使用，场景包括防抖、节流、缓存等。

---


---

## 🧩 1. 防抖 `debouncedRef`

```ts
// useDebouncedRef.ts
import { customRef } from 'vue'

export function useDebouncedRef<T>(value: T, delay = 300) {
  let timeout: ReturnType<typeof setTimeout>
  return customRef<T>((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
```

---

## 🧩 2. 节流 `throttledRef`

```ts
// useThrottledRef.ts
import { customRef } from 'vue'

export function useThrottledRef<T>(value: T, delay = 300) {
  let lastTime = 0
  return customRef<T>((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        const now = Date.now()
        if (now - lastTime >= delay) {
          lastTime = now
          value = newValue
          trigger()
        }
      }
    }
  })
}
```

---

## 🧩 3. 异步加载的 `asyncRef`（带 loading 状态）

```ts
// useAsyncRef.ts
import { ref, customRef } from 'vue'

export function useAsyncRef<T>(loader: () => Promise<T>) {
  const loading = ref(true)
  const error = ref<Error | null>(null)

  let value: T

  const asyncRef = customRef<T>((track, trigger) => {
    loader()
      .then((result) => {
        value = result
        trigger()
      })
      .catch((err) => {
        error.value = err
      })
      .finally(() => {
        loading.value = false
      })

    return {
      get() {
        track()
        return value
      },
      set() {
        console.warn('Cannot manually set asyncRef')
      }
    }
  })

  return {
    asyncRef,
    loading,
    error
  }
}
```

### 使用示例：

```ts
<script setup lang="ts">
import { useAsyncRef } from './useAsyncRef'

const { asyncRef: userData, loading, error } = useAsyncRef(() =>
  fetch('/api/user').then(res => res.json())
)
</script>

<template>
  <div v-if="loading">加载中...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>
    用户名：{{ userData.name }}
  </div>
</template>
```

---