---
title: nextTick
tags:
  - vue
---

- [nextTick](https://juejin.cn/post/7166517557124415518)


---

### ✅ `nextTick` 的本质作用：

`nextTick()` 的作用是：

> 等待 Vue 完成**当前响应式数据更新**后，再执行一个回调函数 —— 此时**虚拟 DOM 已经 patch 完成，更新任务已经提交给浏览器**，但**实际 DOM 可能还未真正渲染到页面上**。

---

### 🚫 它**不能保证**：

* DOM 节点已插入页面（特别是涉及 v-for、v-if、懒加载等异步逻辑时）
* 浏览器已经完成重排和绘制（reflow + repaint）

---

### ✅ 举个例子：

```vue
<template>
  <div>
    <div v-if="visible" ref="box">Hello</div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const visible = ref(false)

function showBoxAndMeasure() {
  visible.value = true

  nextTick(() => {
    const boxEl = $refs.box
    console.log(boxEl.offsetHeight) // ⚠️ 有可能还是 0
  })
}
</script>
```

在这个例子里，虽然 `boxEl` 已经存在于 DOM 中，但有可能浏览器**还没完成重排**，所以高度可能还是 `0`。

---

### ✅ 如何确保真实 DOM 完全可测？

可以使用：

#### 1. `nextTick + setTimeout`

```ts
await nextTick()
setTimeout(() => {
  // DOM 已完成渲染，可以放心获取尺寸
}, 0)
```

#### 2. `requestAnimationFrame`

```ts
await nextTick()
requestAnimationFrame(() => {
  // 更精细的下一帧执行
})
```

#### 3. 或高级方案：`MutationObserver`

---

### ✅ 总结一句话：

> `nextTick` 保证响应式更新 → 虚拟 DOM patch 完成，但 **并不保证真实 DOM 已被浏览器渲染完成或布局完成**。

---
### ✅  watch

### ✅ `flush: 'post'`

---

### 🧠 默认行为（`flush: 'pre'`）：

* `watch` 回调在 **数据变更但 DOM 尚未更新之前** 执行。

---

### ✅ `flush: 'post'` 的效果：

* 让 `watch` 的回调在 **DOM 更新之后（即浏览器渲染完成之后）再执行**。

---

### ✅ 用法示例：

```ts
watch(
  () => props.list,
  async () => {
    // 此时 DOM 已更新完毕，可以访问正确的高度等信息
    const el = document.getElementById('target-id')
    el?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    flush: 'post', // 👈 关键点
    immediate: true // 如果你希望初次执行
  }
)
```

---

### 🚀 flush 参数的选项总结：

| flush 值  | 何时调用回调函数    | 适用场景              |
| -------- | ----------- | ----------------- |
| `'pre'`  | 在组件更新前（默认）  | 需要在 DOM 更新前处理数据逻辑 |
| `'post'` | 在组件更新并渲染完成后 | 需要操作 DOM，比如测量、滚动等 |
| `'sync'` | 同步执行        | 特殊情况，一般不推荐使用      |

---
