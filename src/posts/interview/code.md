---
title: 代码题
tags:
   - 面试题
   - js
---
## 模拟实现 node event 库

---

## ✅ 功能支持：

- `on(event, listener)`：注册事件监听器  
- `emit(event, ...args)`：触发事件  
- `off(event, listener)`：移除指定监听器  
- `once(event, listener)`：注册一次性监听器  

---

## 📦 模拟实现代码：

```js
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  // 注册事件
  on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(listener);
  }

  // 注册一次性事件
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  // 移除事件监听器
  off(event, listener) {
    if (!this.events.has(event)) return;
    const listeners = this.events.get(event).filter(l => l !== listener);
    this.events.set(event, listeners);
  }

  // 触发事件
  emit(event, ...args) {
    if (!this.events.has(event)) return;
    for (const listener of this.events.get(event)) {
      listener(...args);
    }
  }

  // 清除某个事件所有监听器
  removeAllListeners(event) {
    this.events.delete(event);
  }
}
```

---

## 🧪 使用示例：

```js
const emitter = new EventEmitter();

function greet(name) {
  console.log('Hello,', name);
}

emitter.on('hello', greet);
emitter.emit('hello', 'Alice'); // 输出：Hello, Alice

emitter.off('hello', greet);
emitter.emit('hello', 'Bob'); // 无输出

emitter.once('hi', name => console.log('Hi', name));
emitter.emit('hi', 'Charlie'); // 输出：Hi Charlie
emitter.emit('hi', 'Dave');    // 无输出
```

---

## 🔧 拓展方向（进阶用法）

如果你想模拟完整的 Node.js `EventEmitter`，可以考虑：

- 限制最大监听器数 `setMaxListeners`；
- 获取监听器数量 `listenerCount(event)`；
- 返回事件名称 `eventNames()`；
- 支持 prepend 监听器（前插）；
- 错误事件处理。

---

需要我帮你加上这些高级功能或者封装成模块/类库形式也可以哈 😎