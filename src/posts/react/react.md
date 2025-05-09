---
title: React 学习笔记
date: 2019-01-06
tags:
   - react
---

## [react 官网](https://zh-hans.react.dev/learn)

React 渲染过程是一个分阶段、分层次进行的过程，从组件的定义到最终在浏览器中呈现 DOM 内容，涉及虚拟 DOM、Fiber 架构、调和（reconciliation）、提交（commit）等多个步骤。下面是一个**详细的 React 渲染过程阐述**：

---

## 🧠 1. 组件初始化（Component Initialization）

当你调用 `ReactDOM.createRoot(container).render(<App />)` 时：

* React 开始从 `<App />` 组件构建组件树；
* 每个组件（函数组件或类组件）在被首次调用时会执行其函数或 `render()` 方法，返回 React Elements。

这些 React Elements 就是**虚拟 DOM（Virtual DOM）**。
`
---

## 🌳 2. 构建虚拟 DOM 树（Virtual DOM Tree）

React Elements 本质上是 JavaScript 对象，例如：

```jsx
const element = <h1>Hello</h1>;
```

会被转换为：

```js
{
  type: 'h1',
  props: {
    children: 'Hello'
  }
}
```

整个组件树会被转化为一个由 React Elements 组成的树状结构。

---

## ⚛️ 3. Fiber 架构与调和（Reconciliation）

从 React 16 开始，React 使用了 **Fiber 架构** 来重新设计调和（diff）算法，使得 React 可以将渲染过程拆分为多个小任务，避免长时间阻塞主线程。

### Fiber 是什么？

Fiber 是 React 维护的一种数据结构（链表结构），它描述了组件的状态、更新、子节点、父节点等，目的是让渲染过程变成**可中断、可恢复的任务**。

### 调和（Reconciliation）

调和阶段的目标是找出：

* 哪些节点可以复用；
* 哪些需要创建；
* 哪些需要更新；
* 哪些需要删除。

React 会比较**新旧 Fiber 树**（也称作 current tree 和 work-in-progress tree），用“最小代价”生成新的 Fiber 树。

---

## 🔄 4. 渲染阶段（Render Phase）

这是一段**纯计算**的过程：

* React 会执行组件函数（或 `render()` 方法）；
* 调用 hooks（如 `useState`, `useEffect`）；
* 构建 Fiber 树；
* 标记哪些节点需要更新、插入或删除；
* 不会直接操作真实 DOM。

⚠️ 这部分可以被打断（由 Scheduler 调度）以保证更高优先级的任务（如用户输入）不会卡顿。

---

## ✅ 5. 提交阶段（Commit Phase）

这个阶段不可中断，它会：

1. 根据 Fiber 树中的标记，对真实 DOM 做出修改（增、删、改）；
2. 触发生命周期（如 `componentDidMount`、`useEffect`）；
3. 更新 DOM 属性和事件。

React 会遍历 Fiber 树，根据每个节点的 `effectTag`（如 `PLACEMENT`, `UPDATE`, `DELETION`）执行真实 DOM 操作。

---

## 🧩 6. 生命周期与 Hooks（函数组件）

在渲染过程中的不同阶段，React 会触发相应的生命周期方法或 Hook，例如：

* 函数组件：

  * `useEffect` → 提交后调用（异步执行）
  * `useLayoutEffect` → 提交后同步执行
* 类组件：

  * `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 等在提交后调用

---

## 🌐 7. 浏览器渲染（非 React 部分）

DOM 修改完成后，浏览器会根据新的 DOM 结构进行 **渲染（repaint / reflow）**：

* CSS 布局
* 重新计算样式
* 绘制到屏幕

这部分属于浏览器渲染引擎（如 Blink 或 WebKit）处理，不是 React 本身的内容。

---

## 📊 简图总结（文字描述）

```
ReactDOM.render() / createRoot()
       ↓
构建虚拟 DOM（JS 对象树）
       ↓
调和阶段（Diff 算法 + 构建 Fiber 树）
       ↓
渲染阶段（生成要修改的 DOM 操作）
       ↓
提交阶段（执行 DOM 操作 + 生命周期）
       ↓
浏览器重新渲染页面
```

---

## 🚀 额外说明：React 的优化方式

1. **React.memo / PureComponent**：避免不必要的渲染；
2. **useMemo / useCallback**：缓存计算和函数引用；
3. **key 属性优化列表 diff**；
4. **异步渲染（concurrent features）**；
5. **Suspense / lazy**：懒加载组件；
6. **分区更新（如 useTransition）**。

---

**React 是如何调度的（即任务何时执行、如何中断和恢复）** 是由它的 **调度器（Scheduler）** 来控制的。下面我将 **深入解析 React 的调度机制（Scheduler）**，重点放在 **Fiber 架构的调度流程** 上。

---

## 📌 1. 什么是调度（Scheduling）？

调度的目标是：

> **合理安排不同优先级的更新任务，提升用户体验（如避免掉帧、卡顿）。**

React 把渲染任务分片处理，可以在合适的时间执行它们（比如在 `requestIdleCallback` 空闲时段，或 `MessageChannel` 异步微任务中），同时支持高优先级任务打断低优先级任务。

---

## 🧠 2. 核心角色：React Scheduler（调度器）

React Scheduler 是 React 的内部模块（源码位于 `scheduler` 包中），它：

* 将更新任务分配优先级；
* 将任务放入调度队列；
* 根据当前浏览器主线程空闲情况安排执行；
* 支持任务中断、恢复、延迟执行。

---

## 🧵 3. Fiber 是调度的基础单位

每个组件对应一个 **Fiber 节点（Fiber Node）**，它是一个对象结构，包含：

```ts
interface Fiber {
  type: any;
  key: string | null;
  child: Fiber | null;
  sibling: Fiber | null;
  return: Fiber | null; // 父节点
  alternate: Fiber | null; // 上一次的 fiber
  pendingProps: any;
  memoizedProps: any;
  flags: Flags;
  ...
}
```

Fiber 节点之间构成一棵 Fiber 树。

> ⚠️ 注意：**调度阶段只是构建/遍历 Fiber 树，不直接更新真实 DOM。**

---

## 🔄 4. React 是如何调度的？（详细流程）

### 📥 第一步：发起更新（`setState` / `dispatch`）

* 更新会触发 `scheduleUpdateOnFiber(fiber)`；
* React 会把这个更新放入 **更新队列（updateQueue）**；
* 将此任务交给调度器（Scheduler）处理。

---

### 🧮 第二步：优先级计算（Lanes 模型）

React 使用一套叫 **Lanes** 的优先级系统（替代旧的 expirationTime）：

* 每个更新任务会被分配一个 Lane；
* Lane 是一个二进制位掩码（可以表示多个优先级）；
* 高优先级任务可以打断低优先级任务。

优先级常见等级如下（从高到低）：

| 优先级                   | 示例                  | 对应 Lane   |
| --------------------- | ------------------- | --------- |
| `SyncLane`            | 用户点击、输入             | 1         |
| `InputContinuousLane` | 拖拽、滚动               | 2         |
| `DefaultLane`         | 普通更新，如 `setState`   | 4         |
| `TransitionLane`      | UI 过渡更新（如 Suspense） | 16        |
| `IdleLane`            | 最低优先级，比如预加载         | 536870912 |

---

### ⏱️ 第三步：任务调度（Scheduler Queue）

调度器会根据 Lane 将任务安排到调度队列中。调度策略有两种：

* 如果是同步优先级（`SyncLane`）：立即同步执行；
* 如果是异步优先级：加入任务队列，等待浏览器空闲时执行。

React 使用以下机制来异步执行任务：

* `MessageChannel`（现代浏览器优先使用）
* `setTimeout` / `setImmediate`
* `requestIdleCallback`（实验性）

---

### 🔁 第四步：执行任务（work loop）

任务执行时，进入 React 的“**工作循环（workLoop）**”：

```ts
while (workInProgress !== null && shouldYield() === false) {
  workInProgress = performUnitOfWork(workInProgress);
}
```

> `shouldYield()` 会检查是否超时、是否被更高优先级任务打断。

#### 🔄 performUnitOfWork 的含义：

* 对当前 Fiber 节点执行 beginWork（构建子 Fiber）；
* 如果有子节点就继续向下；
* 否则执行 completeWork（处理副作用）并回溯父节点。

如果中途打断，下一帧再继续构建 Fiber 树。

---

### ✅ 第五步：提交阶段（commit phase）

构建完成后，进入提交阶段（不可中断）：

* `commitRoot()` 执行实际的 DOM 更新；
* 执行副作用（Effect Hooks、生命周期）；
* 清空更新队列。

---

## 🔄 5. 可中断的调度带来的能力

* **时间切片（Time Slicing）**：可以中断长时间任务；
* **优先级控制**：避免低优先级任务阻塞主线程；
* **并发模式（Concurrent Mode）支持**：允许同时准备多个版本的 UI。

---

## 📦 6. React 18 引入的新调度特性

React 18 默认启用了新的调度能力（并发特性）：

* `useTransition()`：标记 UI 更新为“可中断”；
* `startTransition()`：包裹低优先级更新；
* `useDeferredValue()`：延迟更新值；
* 自动批处理（自动合并多次更新）。

---

## 🖼️ 图示（文字版）

```
setState / dispatch
      ↓
scheduleUpdateOnFiber(fiber)
      ↓
选择 Lanes（优先级）
      ↓
放入 Scheduler 队列
      ↓
workLoop + performUnitOfWork (构建 Fiber 树)
      ↓        ↑ ← shouldYield 打断 & 恢复
commitRoot (提交 DOM 操作 + 执行副作用)
```

---

## ✅ 总结：React 调度核心要点

| 模块                      | 作用              |
| ----------------------- | --------------- |
| **Fiber 架构**            | 数据结构 + 可中断工作单元  |
| **Lanes**               | 优先级系统           |
| **Scheduler**           | 任务分发 + 调度策略     |
| **Time Slicing**        | 可中断渲染           |
| **Concurrent Features** | 并发控制、更平滑的 UI 体验 |

---


我们通过一个简洁的 React 例子来说明调度器是如何根据不同优先级执行任务的，特别是使用 `startTransition` 来将某些更新标记为“可中断”的低优先级任务。

---

## 🌟 示例场景：搜索建议列表

我们要实现一个输入框，输入内容会实时更新两类内容：

1. 当前输入值（同步更新，立即展示）；
2. 搜索建议列表（异步更新，使用 `startTransition` 延迟更新）。

---

### 🧱 示例代码：

```tsx
import React, { useState, useTransition } from "react";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 同步更新：立即反映用户输入
    setInput(value);

    // 异步更新：标记为低优先级任务，允许中断
    startTransition(() => {
      // 模拟一个计算/网络请求（这里用 filter 模拟延迟）
      const result = mockSearch(value);
      setSuggestions(result);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} placeholder="Search..." />
      {isPending && <p>加载中...</p>}
      <ul>
        {suggestions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 模拟搜索建议
function mockSearch(keyword: string) {
  const all = Array.from({ length: 10000 }, (_, i) => `选项 ${i}`);
  return all.filter((item) => item.includes(keyword)).slice(0, 10);
}
```

---

### 🧠 解读调度过程：

| 操作                     | 优先级    | 描述                            |
| ---------------------- | ------ | ----------------------------- |
| `setInput(value)`      | 高（同步）  | 立即更新输入框中的值，用户体验更好             |
| `startTransition(...)` | 低（可中断） | 后续的大量数据处理（如搜索建议）不会阻塞主线程       |
| `isPending`            | 状态标志   | 是否有低优先级任务正在执行，适合显示 loading 提示 |

---

## 🚀 使用 `startTransition` 的好处

* 避免因重计算导致 UI 卡顿；
* 让输入框内容立即响应；
* 后台慢任务（如大量筛选、渲染）延后执行；
* 自动时间切片：React 会在空闲时再渲染建议列表。

---


---

# 深入理解 React Fiber 架构：从同步栈调和到可中断渲染

> Fiber 是 React 在 16 版本中引入的新架构核心。它重构了 React 的调和引擎（Reconciler），使得 React 具备可中断、可恢复、优先级调度的能力，是实现并发渲染、Suspense、自动批处理等高级功能的基石。

---

## 一、为什么 React 需要 Fiber？

在 React 15 及之前的版本中，React 的更新过程是基于**递归的同步渲染模型（stack reconciler）**：

```js
function updateComponent(component) {
  const rendered = component.render();
  updateComponent(rendered);
}
```

### 🛑 存在的问题：

* 渲染是**不可中断的**：如果组件树很深或者每个节点计算很重，一次更新就会长时间占据主线程；
* 缺乏**优先级控制**：比如用户正在输入时触发了低优先级的动画更新，输入仍然会被阻塞；
* 不支持**懒加载、流式渲染、错误恢复、延迟加载等现代需求**。

这意味着 React 需要一种更加灵活的机制来应对复杂 UI 的性能挑战。

---

## 二、Fiber 是什么？

### 📦 定义

**Fiber 是 React 对每一个组件单元的抽象表示**，是一个 JavaScript 对象，构成了一颗可遍历、可调度、可中断的“任务链”。

每个 Fiber 节点包含以下信息：

```ts
interface FiberNode {
  type: string | FunctionComponent;
  stateNode: any;
  child: FiberNode | null;
  sibling: FiberNode | null;
  return: FiberNode | null;
  pendingProps: any;
  memoizedProps: any;
  memoizedState: any;
  alternate: FiberNode | null;
  flags: Flags;
}
```

> 你可以把 Fiber 看作是组件“运行单元”的轻量包装。整个组件树被拆分成多个 Fiber 单元，React 按需调度这些单元进行更新。

---

## 三、Fiber 的核心能力

### ✅ 1. **可中断渲染**

Fiber 的架构是基于链表的，而非递归调用栈。这使得渲染过程可以“暂停 → 恢复”，打破浏览器主线程的占用限制。

React 利用浏览器的空闲时间（`requestIdleCallback` 或 `MessageChannel`）逐步执行更新：

```js
while (nextUnitOfWork && shouldYield()) {
  nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
}
```

### ✅ 2. **优先级调度（Lanes）**

每个更新被赋予一个“**优先级通道（lane）**”，高优先级任务（如用户输入）会插队执行。

常见优先级：

| Lane 类型          | 举例        |
| ---------------- | --------- |
| Synchronous Lane | 点击按钮立即更新  |
| Transition Lane  | 启动动画，懒加载  |
| Idle Lane        | 不紧急的数据预加载 |

### ✅ 3. **双缓冲树（current / workInProgress）**

React 构建两棵 Fiber 树：

* `current`：当前渲染在屏幕上的树；
* `workInProgress`：准备要替换 current 的新树。

每次更新都在 `workInProgress` 上操作，**完成后一次性切换**，称为 “**提交阶段（commit phase）**”。

---

## 四、Fiber 的执行阶段

React Fiber 的更新流程被拆成三个阶段：

### 1. **调度阶段（Schedule）**


workloopSync

* 收集更新任务；
* 根据优先级插入任务队列。
又可称为任务调度阶段。

React 接收到状态更新后，会将更新任务封装为 FiberRoot 的更新对象；

任务被调度器根据优先级（如 Immediate、UserBlocking 等）插入任务队列；

若启用了并发功能，这里可能会延迟或合并更新。

### 2. **渲染阶段（Render）构建 Work-In-Progress 树 + 调和（Reconciliation） ** 

* 遍历 Fiber 树；
* 构造新的 workInProgress 树；
* 此阶段是**可中断的**。
  这是真正执行 diff 的阶段；

目标是构建出新的 workInProgress 树，它是内存中的 Fiber 树副本；

React 会逐节点地比较新旧 Fiber，称为 调和（Reconciliation）；

可以是异步、可中断的；

这一阶段不会对 DOM 做任何实际修改；

类似“虚拟的更新计划”。

### 3. **提交阶段（Commit）**

* 应用副作用（更新 DOM、调用生命周期等）；
* 是**同步执行的，不可中断**。
一旦 Fiber 树构建完成，React 会进入提交阶段；

包括三件事：

执行 DOM 操作；

调用生命周期方法（如 componentDidMount）；

执行副作用（如 useEffect）；

是 同步、不可中断的，因为这个阶段必须原子性地完成更新。

---

## 五、Fiber 的优势总结

| 能力          | 描述                                  |
| ----------- | ----------------------------------- |
| ✅ 可中断       | 渲染过程可以暂停、恢复，避免卡顿                    |
| ✅ 优先级调度     | 不同更新任务可分级执行，提升用户体验                  |
| ✅ 支持异步渲染    | 实现 transition、Suspense 等高级功能        |
| ✅ 支持错误边界    | 渲染出错可以恢复，而不是崩整个 App                 |
| ✅ 构建基础能力统一化 | 所有更新任务（点击、定时器、网络）都被抽象成一个 Fiber 工作单元 |

---

## 六、Fiber 架构下的新特性（React 18）

Fiber 架构是实现以下特性的技术基础：

| 特性                   | 说明                     |
| -------------------- | ---------------------- |
| `startTransition`    | 标记低优先级更新任务             |
| `Suspense`           | 支持异步加载数据和组件占位          |
| `Concurrent Mode`    | 并发渲染和调度                |
| `automatic batching` | 异步环境下自动合并多次 `setState` |
| `Streaming SSR`      | 流式服务端渲染                |

---

## 七、可视化理解：Fiber 结构图示（简化）

```
       App
        |
     Dashboard
     /       \
 Chart     Table
```

拆成 Fiber 节点链：

```text
App
 └─ child → Dashboard
              ├─ child → Chart
              └─ sibling → Table
```

React 会通过遍历这些节点完成更新，并在每个空闲帧中只执行一部分，从而实现可中断更新。

---

## 八、总结

> Fiber 是 React 内部的调和引擎重构，它用链表结构代替调用栈，为 React 提供了前所未有的灵活性和性能。

### 📌 一句话总结：

> **Fiber 是 React 实现并发、流式、可恢复 UI 的基础架构，让组件渲染从“单线程堵塞”升级为“任务调度式多工协作”。**

---



## 🧩 Step 1：JSX 本质是语法糖

JSX 本身并不是 JavaScript 语言的原生能力，它需要通过 **Babel** 等工具转译成标准 JavaScript 代码。

举个例子 👇

```jsx
const element = <h1 className="title">Hello</h1>;
```

经过 Babel 转换，会变成：

```js
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello'
);
```

---

## 🏗️ Step 2：`React.createElement` 创建虚拟 DOM

`React.createElement` 的作用是返回一个**描述 UI 的 JavaScript 对象**，也就是所谓的 **虚拟 DOM（VNode）**：

```js
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello'
  },
  // 其他内部属性，Fiber 构建时会用到
}
```

这不是浏览器中的 DOM 节点，而是一个 React 自己定义的 **“描述性结构”**，供后续 Fiber 系统构建 Fiber Tree 使用。

---

## 📚 Step 3：虚拟 DOM 进入 Fiber 架构

当组件更新或初始渲染时，这个 JSX → createElement → 虚拟 DOM 的结构被传入 React 内部：

* React 会根据它生成一棵 Fiber Tree；
* 每个虚拟 DOM 对应一个 Fiber 节点；
* 这棵树将用于渲染比较、更新调度和最终提交 DOM 操作。

---

## ✅ 总结流程图：

```
JSX
 ↓ （通过 Babel）
React.createElement()
 ↓
虚拟 DOM（VNode）
 ↓
Fiber Tree 构建（Render 阶段）
 ↓
实际 DOM 更新（Commit 阶段）
```

---

## 🧠 补充说明

* 虚拟 DOM 是一个轻量级对象，不涉及真实浏览器节点；
* 它只是描述 UI 的“草图”；
* React 的 diff 算法会对比新旧虚拟 DOM，来判断需要更新哪些部分；
* Fiber 就是在这一过程中替代旧递归机制、实现任务调度的核心结构。

---

