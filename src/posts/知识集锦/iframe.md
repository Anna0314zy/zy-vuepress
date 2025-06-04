---
title: iframe
tags:
  - iframe
---

## 如何释放内存

### ✅ 1. **正确销毁 iframe**

确保在销毁 iframe 前做了以下处理：

```js
const iframe = document.getElementById('myIframe');

// 清除 iframe 的 src
iframe.src = 'about:blank'; // 或 'javascript:false;'

// 移除内容（防止 iframe 内部页面仍引用资源）
iframe.contentWindow?.document.write('');
iframe.contentWindow?.close?.();

// 从 DOM 中移除
iframe.remove();
```

---

### ✅ 2. **移除引用，避免内存泄漏**

确保所有指向 iframe 的引用（变量、事件监听器等）被置为 `null`：

```js
iframe = null;
```

---

### ✅ 3. **避免跨域 iframe 内存泄漏**

跨域的 iframe 内容无法访问 `contentWindow`，所以只能通过清空 `src` 的方式提示浏览器释放资源：

```js
iframe.src = 'about:blank';
setTimeout(() => {
  iframe.remove();
}, 0);
```

---

### ✅ 4. **清除事件监听器**

如果你给 iframe 添加了事件监听器（比如 `onload`、`message`），务必在销毁时移除：

```js
iframe.removeEventListener('load', handler);
window.removeEventListener('message', handler);
```

---

### ✅ 5. **使用 `onunload` 清理 iframe 内部资源（可选）**

在 iframe 加载的页面中自行添加：

```html
<body onunload="cleanUp();">
<script>
  function cleanUp() {
    // 清理定时器、事件等
    clearInterval(myTimer);
  }
</script>
```

---

### ✅ 6. **定期检查（如 DevTools > Memory）**

如果你在调试一个大型前端项目，可以使用浏览器的 DevTools：

* Chrome DevTools > Memory > Take Heap Snapshot
* 检查 iframe 或 DOM 节点是否未释放

---

### ⚠️ 注意事项

* 在使用 `display: none` 隐藏 iframe 时，**不会释放内存**，仍在后台运行。
* 如果你需要彻底释放，必须从 DOM 中移除。
* 如果 iframe 中有 WebSocket、setInterval、requestAnimationFrame，也应在 unload 时手动清理。

---

## 检验iframe 内存是否被释放

---

## ✅ 方法一：使用 Chrome DevTools 的 Memory 工具

1. 打开 Chrome 开发者工具（DevTools） → `Memory` 标签页。
2. 点击 **"Take snapshot"**。
3. 操作你的网站：**插入 iframe → 移除 iframe → 手动释放引用**。
4. 再次点击 **"Take snapshot"**。
5. 在快照中搜索 iframe 的标识（如 ID、类名，或内部文档中的变量名）。
6. 如果在新快照中仍能找到，说明 iframe 没有被完全释放。

> **Tip**：你可以在 "Objects" 中搜索 `iframe`, `HTMLIFrameElement`，或者你的 iframe 对应的文档、DOM 节点。

---

## ✅ 方法二：使用 `WeakRef` + `FinalizationRegistry`（现代浏览器）

```js
let iframe = document.createElement('iframe');
document.body.appendChild(iframe);

const registry = new FinalizationRegistry(() => {
  console.log('iframe 被垃圾回收了');
});

registry.register(iframe, 'iframe');

iframe.src = 'about:blank';
iframe.remove();
iframe = null; // 关键：清空引用
```

> 注意：垃圾回收不会立即发生，你可能需要在控制台空闲几秒钟后才会看到输出。

---

## ✅ 方法三：使用 DevTools 的 Performance 监控

1. 打开 DevTools → `Performance` → 点击 “Record”。
2. 动态插入 iframe → 然后销毁它 → 停止录制。
3. 检查内存用量是否随 iframe 销毁后降低。
4. 可结合 timeline 查看是否仍有页面运行。

---

## ✅ 方法四：监控 iframe 内的 JS 是否还在运行

如果 iframe 页面是你控制的，你可以加一些 **interval 或 console.log**，然后观察它是否还继续运行：

```html
<!-- iframe.html -->
<script>
  setInterval(() => {
    console.log('iframe still alive');
  }, 2000);
</script>
```

然后你销毁 iframe 后查看控制台是否还在输出。

---

## ✅ 方法五：检查 iframe 的 DOM 节点是否完全移除

```js
const iframe = document.getElementById('myIframe');
console.log(document.body.contains(iframe)); // false 表示已移除
```

---

## ⚠️ 常见内存未释放原因

| 原因             | 描述                                             |
| -------------- | ---------------------------------------------- |
| JS 中仍有引用       | 如闭包变量、全局变量等                                    |
| 事件监听未移除        | `iframe.addEventListener`、`window.postMessage` |
| 跨域 iframe      | 无法完全访问 `contentWindow` 进行清理                    |
| iframe 内容自身未卸载 | 没有 `onunload` 清理定时器等                           |

---
