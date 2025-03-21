---
title: js
tags:
  - Javascript
  - 面试题
---

## 1. 0.1 + 0.2 != 0.3
 0.1 和 0.2 在二进制中表示
0.1  →  0.0001100110011001100110011001100110011...（无限循环）
0.2  →  0.0011001100110011001100110011001100110...（无限循环）
计算 0.1 + 0.2 时，会有舍入误差，导致结果略大于 0.3
最终 0.1 + 0.2 = 0.30000000000000004

## 2. 数组的并集 交集 差集

```js

const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(union([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
// 交集

const intersection = (arr1, arr2) => arr1.filter(item => new Set(arr2).has(item));

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
// 差集
const difference = (arr1, arr2) => arr1.filter(item => !new Set(arr2).has(item));

console.log(difference([1, 2, 3], [2, 3, 4])); // [1]
// 差集
const differenceById = (arr1, arr2) =>
  arr1.filter(item1 => !arr2.some(item2 => item1.id === item2.id));

console.log(differenceById(data1, data2)); // [{ id: 1 }]

```


## vue2  vue3 数据双向绑定原理


## 如何实现 event 模块
## **🚀 如何在 Node.js 中手写 `events` 模块（EventEmitter）**

在 Node.js 中，**`events` 模块** 提供了 `EventEmitter` 类，用于 **实现事件监听、事件触发和移除监听**。它是 **发布-订阅模式（Pub/Sub）** 的核心实现，广泛用于 **流（Stream）、HTTP 服务器、WebSocket、进程管理** 等。

---

## **🔥 1. `events` 模块的核心功能**
1. **`on(event, callback)`** → 监听事件  
2. **`emit(event, ...args)`** → 触发事件  
3. **`off(event, callback)`** / **`removeListener(event, callback)`** → 移除事件监听  
4. **`once(event, callback)`** → 只监听一次事件  
5. **`removeAllListeners(event)`** → 移除某个事件的所有监听器  
6. **`eventNames()`** → 获取所有注册的事件名称  
7. **`listenerCount(event)`** → 获取事件监听器数量  

---

## **🔥 2. 手写 `EventEmitter`**
在 Node.js 中，我们可以使用 `Map` 来存储事件，并实现 `on`、`emit`、`off` 等功能。

### **✅ `EventEmitter` 代码实现**
```javascript
class EventEmitter {
  constructor() {
    this.events = new Map(); // 存储事件及其回调
  }

  // 监听事件
  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
  }

  // 触发事件
  emit(event, ...args) {
    if (this.events.has(event)) {
      this.events.get(event).forEach(callback => callback(...args));
    }
  }

  // 只监听一次事件
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper); // 触发后移除
    };
    this.on(event, wrapper);
  }

  // 移除某个监听事件
  off(event, callback) {
    if (!this.events.has(event)) return;
    this.events.set(event, this.events.get(event).filter(cb => cb !== callback));
  }

  // 移除所有监听事件
  removeAllListeners(event) {
    if (this.events.has(event)) {
      this.events.delete(event);
    }
  }

  // 获取所有事件名称
  eventNames() {
    return [...this.events.keys()];
  }

  // 获取某个事件的监听器数量
  listenerCount(event) {
    return this.events.has(event) ? this.events.get(event).length : 0;
  }
}

// 导出 EventEmitter 模块
module.exports = EventEmitter;
```

---

## **🔥 3. 测试 `EventEmitter`**
### **✅ 监听 & 触发事件**
```javascript
const EventEmitter = require("./EventEmitter");

const emitter = new EventEmitter();

emitter.on("hello", (name) => console.log(`Hello, ${name}`));
emitter.emit("hello", "Alice"); // 输出: Hello, Alice
emitter.emit("hello", "Bob");   // 输出: Hello, Bob
```

---

### **✅ 只触发一次**
```javascript
emitter.once("onceEvent", () => console.log("This runs only once"));
emitter.emit("onceEvent"); // 输出: This runs only once
emitter.emit("onceEvent"); // ❌ 无输出（事件已移除）
```

---

### **✅ 移除监听**
```javascript
const greet = (name) => console.log(`Hi, ${name}`);
emitter.on("greet", greet);

emitter.emit("greet", "Tom"); // 输出: Hi, Tom
emitter.off("greet", greet);
emitter.emit("greet", "Tom"); // ❌ 无输出（事件被移除）
```

---

### **✅ 获取事件名称**
```javascript
console.log(emitter.eventNames()); // [ 'hello' ]
```

---

### **✅ 监听器数量**
```javascript
console.log(emitter.listenerCount("hello")); // 1
```

---

## **🔥 4. Node.js 内置 `events` 模块**
Node.js 自带 `events` 模块，我们可以直接使用：
```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (msg) => console.log("Received:", msg));
emitter.emit("message", "Hello Node.js");
```

---

## **🔥 5. 适用场景**
✅ **进程间通信**（`process.on("exit", callback)`）  
✅ **WebSocket 事件管理**  
✅ **自定义事件管理**（如 Vue `EventBus`）  
✅ **服务器事件**（如 `server.on("request", callback)`）  

📌 **你是用于 WebSocket、进程通信，还是自定义事件管理？可以帮你优化 `EventEmitter`！😃**

## 代码执行顺序


```js

console.log(1);
async function async () {
    console.log(2);
    await console.log(3);
    console.log(4)
}
setTimeout(() => {
	console.log(5);
}, 0);
const promise = new Promise((resolve, reject) => {
    console.log(6);
    resolve(7)
})
promise.then(res => {
	console.log(res)
})
async (); 
console.log(8);
// 1
// 6
// 2
// 3
// 8
// 7
// 4
// 5

```

