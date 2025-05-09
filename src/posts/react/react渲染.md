很好，这是一个典型的 React **class 组件**，你希望从 **React 源码层面**深入理解：

#  **React 是如何：渲染**
>
> 1. 把 `ClassCounter` 渲染到页面；
> 2. 并在 `setState` 后更新页面；
> 3. 同时事件是如何绑定并生效的？

我们一步步从源码角度拆解整个过程，基于 `react@18`（使用 Fiber 架构）。

---

## 🧱 0. 前提：源码入口 & 架构大纲

React 18 的运行分为两大部分：

| 阶段         | 关键方法                                             | 功能                                   |
| ---------- | ------------------------------------------------ | ------------------------------------ |
| **初次渲染阶段** | `ReactDOM.createRoot(container).render(<App />)` | 创建 Fiber 树，调和（reconciliation），构建 DOM |
| **更新阶段**   | `this.setState(...)`                             | 创建更新任务，调和新旧 Fiber 树，生成变更             |

我们将从 ReactDOM 到 React 再到 DOM 操作和事件系统，逐层深入。

---

## 🧩 1. 初次渲染过程（`ReactDOM.render` 或 `root.render`）

你调用：

```tsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassCounter />);
```

### ✅ \[1.1] `createRoot` 和 `render`：

```tsx
// react-dom/client.js
createRoot(container) => createContainer(container)
```

* 会创建一个 `FiberRootNode`（root fiber）
* 并把 React 组件包装成 update，触发更新流程

然后执行：

```ts
// root.render(element)
updateContainer(element, fiberRoot)
```

---

### ✅ \[1.2] 创建 Fiber 节点

React 会把 `<ClassCounter />` 解析为 Fiber：

```tsx
FiberNode {
  tag: ClassComponent,
  type: ClassCounter,
  stateNode: null, // 稍后构造实例
  return: rootFiber,
  child: ...
}
```

Fiber 就是一个“虚拟 DOM + 调度单元”。

---

## 🧩 2. 构建实例和渲染组件

### ✅ \[2.1] ClassComponent 的构建：

当走到 `beginWork` 阶段，遇到 `tag === ClassComponent`，执行：

```ts
constructClassInstance(workInProgress, workInProgress.type, props)
```

会调用：

```ts
instance = new ClassCounter(props)
```

* 此时会执行你写的 `constructor`
* React 会把这个 `instance` 赋值给 `fiber.stateNode`

然后会调用：

```ts
rendered = instance.render()
```

这会返回：

```tsx
<div id="counter">
  <span>{this.state.number}</span>
  <button onClick={this.onClick}>加1</button>
</div>
```

React 会递归把这些元素转成 Fiber，形成 Fiber 树。

---

## 🧩 3. 提交 DOM 到页面

### ✅ \[3.1] 完成所有 Fiber 树构建后

进入 `completeWork` 阶段，创建对应 DOM 节点（调用 `createInstance`），比如：

```js
document.createElement('div')
document.createElement('span')
document.createElement('button')
```

---

### ✅ \[3.2] 提交阶段：`commitRoot`

执行 `commitRoot` 后，React 会：

* 把生成的 DOM 插入到 container 中（`appendChild`）
* 绑定事件（见下一节）

此时你就看到了页面渲染成功。

---

## 🧩 4. 事件系统是如何绑定的？

### ✅ \[4.1] React 事件不是直接绑定的，而是统一监听：

在初始阶段：

```js
container.addEventListener('click', dispatchEvent, false)
```

只在根 DOM 上绑定一次。

---

### ✅ \[4.2] 事件调度逻辑（React SyntheticEvent）

当你点击 `<button>` 时：

1. 浏览器冒泡到 container
2. `dispatchEvent` 捕捉到事件
3. React 会从事件源（e.g. button）向上遍历 fiber tree，找出绑定的事件函数（如 `onClick`）
4. 组合成一个合成事件对象 `SyntheticEvent`
5. 调用你定义的 `this.onClick` 方法

---

## 🔁 5. setState 更新流程

你点击按钮后，执行：

```ts
this.setState(state => ({ number: state.number + 1 }))
```

React 做了几件事：

### ✅ \[5.1] 创建更新对象：

```ts
{
  lane: updateLane,
  tag: UpdateState,
  payload: (prevState) => ({ number: prevState.number + 1 })
}
```

添加到 Fiber 的 `updateQueue` 中。

---

### ✅ \[5.2] 调度更新

触发 `scheduleUpdateOnFiber(fiber)`，安排一次 render。

这会进入 `renderRoot`，重新调用 `render()` 方法，生成新 Fiber Tree。

---

### ✅ \[5.3] 新旧 Fiber Tree 对比（reconciliation）

React 会比较新旧 Fiber：

* `<span>1</span>` -> `<span>2</span>`，发现文本变了
* 生成一个 `Effect` 变更（e.g. `UPDATE`）

---

### ✅ \[5.4] 提交变更（commit phase）

在 `commitWork` 阶段：

* 找到变更的 DOM 节点
* 执行 `textNode.nodeValue = "2"` 这样的操作
* 页面更新 ✅

---

## 🎯 总结：从源码角度的全过程

```text
1. ReactDOM.createRoot().render()
     ↓
2. 构建 Fiber Root，生成 Fiber 树
     ↓
3. 对于 ClassComponent，实例化 + 调用 render
     ↓
4. 递归构建 Fiber Tree，生成对应 DOM
     ↓
5. commit 阶段插入到页面，绑定统一事件监听器
     ↓
6. 点击按钮触发统一事件处理器
     ↓
7. 执行 this.setState()，创建 update
     ↓
8. schedule -> beginWork -> render -> completeWork
     ↓
9. commit 更新 DOM
```

---
