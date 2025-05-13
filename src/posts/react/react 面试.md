---
title: React面试
tags:
   - react
---


## 🧠 一、渲染流程概览

React 渲染分为三个阶段：

1. **调度阶段（Schedule Phase）**：收集更新请求并安排优先级
2. **渲染阶段（Render Phase）**：构建并 diff Fiber 树，标记所有变更
3. **提交阶段（Commit Phase）**：一次性将所有变更应用到 DOM，并执行副作用

---

## 1. 🟡 调度阶段（Schedule Phase）

* **触发更新**：调用 `setState`、`dispatch`、`useState` 更新 Hook 等。
* **注册任务**：`scheduleUpdateOnFiber(fiber, lane)` 会将更新加入调度队列，并标记优先级（Lane）。
* **时间切片 & 并发**：借助 Scheduler，React 可在中断点暂停渲染，将高优先级任务插入，保证界面响应流畅。

---

## 2. 🔵 渲染阶段（Render Phase）

> 构建新的 Fiber 树（`workInProgress`），并与旧树（`current`）做 diff，收集所有变更标记（flags）。

### 2.1 遍历策略 —— 深度优先（DFS）

1. **开始**：`performConcurrentWorkOnRoot()` → `workLoop` → `beginWork(root)`
2. **向下**：处理当前 Fiber 的 `beginWork`，递归遍历 `child`
3. **横向**：若无子节点，或子节点已完成，切换到 `sibling`
4. **回溯**：兄弟节点也无待处理时，回到父节点，进入 `completeWork`
5. **循环**：上述步骤反复，直到整棵 Fiber 树遍历完毕

### 2.2 Diff & 标记变更

在每个节点的 `beginWork` 中，调用 `reconcileChildren(current, workInProgress, nextChildren)`：

* **Key 比对**：先根据 `key` 匹配同级节点
* **类型比对**：若 key 相同，再比对 `type`（函数组件、Class、DOM）

  * **类型不同**：旧节点打 `Deletion`，新节点打 `Placement`
  * **类型相同**：复用旧节点，比较 `props`，若有差异则打 `Update`

所有这些变更会写入当前 Fiber 的 `flags`。

### 2.3 completeWork：收集副作用

当某个子树遍历结束后，`completeWork` 会：

* 创建／更新真实 DOM（仅 `HostComponent`）并赋给 `stateNode`
* 将自身及子树中所有带 `flags` 的 Fiber，通过 `firstEffect`/`lastEffect` 和 `nextEffect` 串成 **effect list**

---

## 3. 🔴 提交阶段（Commit Phase）

> 在此阶段，React 一次性遍历整棵 effect list，执行所有副作用——DOM 操作与生命周期钩子，不可中断。

1. **Before Mutation**

   * 执行诸如 `getSnapshotBeforeUpdate` 等预处理
2. **Mutation Phase**

   * 遍历 effect list，针对每个 Fiber 根据 `flags` 调用：

     * `Placement` → 插入新 DOM
     * `Update`    → 更新属性／文本
     * `Deletion`  → 移除 DOM
3. **Layout Phase**

   * 执行同步副作用：`useLayoutEffect` 的回调、类组件的 `componentDidMount`／`componentDidUpdate`

> **注意**：`useEffect`（异步副作用）会在提交阶段结束后，异步地在 “passive effects” 队列中被触发。

---

## ✨ 小结

* **调度阶段**：收集更新、排定优先级，决定何时进入渲染。
* **渲染阶段**：DFS 构建 `workInProgress` & diff，标记所有变化到 `flags`，并汇总成 effect list。
* **提交阶段**：不可中断地遍历 effect list，执行 DOM 操作和同步副作用，最后触发异步 `useEffect`。

这样三阶段分离的设计，使 React 同时兼顾了渲染性能与 UI 响应流畅性。


**Fiber 架构**是 React 16 以后引入的一套新的 **协调（Reconciliation）机制**，它的核心目标是：

> **让渲染过程变得可中断、可拆分，并支持优先级调度，从而提升用户体验。**

为实现这个目标，React 引入了一个新的数据结构 —— **Fiber 树**（Fiber Tree），它是对虚拟 DOM 的重新实现。

---



## setState


```js

export default class Demo2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        setTimeout(() => {
          this.setState({ count: this.state.count + 1 })
          console.log(this.state.count)
          this.setState({ count: this.state.count + 1 })
          console.log(this.state.count)
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>Demo2</h1>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}

```
:::important
类组件 react18  显示结果是  0 0 1 1 

react18  显示结果是 0 0 2 3

:::

非常好！你已经掌握了用数组模拟 Hook 状态，现在我们来实现 **更接近 React 内部的方式 —— 使用链表结构管理 Hook**。

---

## 🧠 为什么要用链表？

React 的 Fiber 架构中，每个函数组件对应一个 `fiber` 节点，每个 `fiber` 有一个 `memoizedState`，这是一个 **单向链表**，每个节点就是一个 Hook：

```
fiber.memoizedState → Hook1 → Hook2 → Hook3 → null
```

每次组件执行时，React 会按顺序遍历这个链表并同步更新。

---

## 🔧 用链表手写 Hook 系统

我们一步步模拟这个过程。

---

### ✅ 1. 定义 Hook 节点结构

```js
function createHook(state) {
  return {
    memoizedState: state,  // 当前的状态
    next: null             // 指向下一个 Hook
  };
}
```

---

### ✅ 2. 模拟全局 Fiber 和 Hook Cursor

```js
let fiber = {
  memoizedState: null // 指向第一个 Hook
};

let workInProgressHook = null; // 当前执行到的 Hook 节点
```

---

### ✅ 3. 实现 useReducer

```js
function useReducer(reducer, initialState) {
  let hook;

  if (!workInProgressHook) {
    // 第一次执行，创建第一个 hook
    hook = createHook(initialState);
    fiber.memoizedState = hook;
    workInProgressHook = hook;
  } else {
    // 后续执行，进入下一个 hook
    if (!workInProgressHook.next) {
      hook = createHook(initialState);
      workInProgressHook.next = hook;
    } else {
      hook = workInProgressHook.next;
    }
    workInProgressHook = hook;
  }

  const dispatch = (action) => {
    hook.memoizedState = reducer(hook.memoizedState, action);
    render(); // 重新渲染
  };

  return [hook.memoizedState, dispatch];
}
```

---

### ✅ 4. 组件函数执行 & 重置 Hook 指针

```js
function render() {
  workInProgressHook = fiber.memoizedState; // 重置 Hook 遍历指针
  CounterComponent();
}
```

## 🔍 总结

| 项目        | 数组实现                | 链表实现（React 真实做法）                    |
| --------- | ------------------- | ----------------------------------- |
| 状态存储方式    | `hookStates[index]` | `fiber.memoizedState → hook → hook` |
| Hook 顺序管理 | 用 `hookIndex` 控制    | 用 `workInProgressHook` 游标管理         |
| 更新后重建     | 全部重新遍历              | 重走链表，复用 Hook 位置                     |
| 好处        | 模拟简单                | 更贴近 React，易于扩展和优化                   |
---
