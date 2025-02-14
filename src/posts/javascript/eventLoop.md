---
title: promise 题目
date: 2019-06-19
tags:
  - Javascript
  - promise
---


---

### 1. **核心概念**
- JavaScript 是单线程的，一次只能执行一个任务。
- Event Loop 负责协调同步任务和异步任务的执行顺序。

---

### 2. **关键组件**
- **调用栈（Call Stack）**：执行同步任务。
- **任务队列（Task Queue，宏任务）**：存放 `setTimeout`、`setInterval`、事件回调等。
- **微任务队列（Microtask Queue）**：存放 `Promise.then`、`MutationObserver` 等。

---

### 3. **执行顺序**
1. **同步任务**：直接进入调用栈执行。
2. **微任务**：调用栈为空时，执行所有微任务。
3. **渲染页面**：如果需要，浏览器会重新渲染页面。
4. **宏任务**：从任务队列中取出一个宏任务执行。
5. **重复**：循环上述过程，直到所有任务完成。

---

### 4. **代码示例**
```javascript
console.log('Start'); // 同步任务

setTimeout(() => {
  console.log('Timeout'); // 宏任务
}, 0);

Promise.resolve().then(() => {
  console.log('Promise'); // 微任务
});

console.log('End'); // 同步任务
```

**输出：**
```
Start
End
Promise
Timeout
```

---

### 5. **总结**
- **微任务优先级高于宏任务**。
- Event Loop 的执行顺序：同步 → 微任务 → 渲染 → 宏任务 → 微任务 → 渲染 → ...

通过理解 Event Loop，可以更好地掌握异步代码的执行顺序！