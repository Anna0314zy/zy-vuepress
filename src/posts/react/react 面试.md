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

## 一、 `useState` 的实现原理？

---

### ✅ 1. **`useState` 是如何保存状态的？**

React 通过内部的 **Fiber 数据结构** 记录每个组件的状态信息。每个组件（Fiber）都有一个 `memoizedState` 属性，它存储了当前组件的所有 Hook 状态（比如 `useState`, `useEffect` 等）。

React 使用一个 **链表结构** 依次存储每个 Hook 的状态，每次执行组件时，都通过内部的 `currentHook` 指针逐个恢复。

---

### ✅ 2. **`useState` 的基本执行流程**

* 初次渲染时，`useState(initialState)` 会：

  * 创建一个 Hook 对象：`{ memoizedState: initialState, queue: updateQueue }`
  * 存入当前 Fiber 的 `memoizedState` 链表中。
  * 返回 `[state, setState]`

* `setState` 调用时：

  * 把更新（如新值或函数）添加到更新队列中。
  * 触发调度机制 `scheduleUpdateOnFiber()`，标记当前组件需要重新渲染。
  * 重新执行组件函数，从 `memoizedState` 恢复状态链表，重新计算新状态。

---

### ✅ 3. **多次 `useState` 怎么区分？**

React 内部是**按调用顺序区分**的。多次 `useState()` 是按照链表依次挂载的，每次重新渲染时，必须以相同顺序调用 Hook，否则会报错。

---

### ✅ 4. **为什么不能在条件语句里用 Hook？**

因为状态链表必须在相同顺序上恢复。如果你在条件语句中调用 `useState`，下一次 render 顺序就不一致了，会导致状态错乱。

---

## 二、源码角度深入剖析


---

### 1. 初始化阶段（首次 render）

```js
function mountState(initialState) {
  const hook = mountWorkInProgressHook();

  const queue = {
    pending: null, // 环状链表的 pending update
    dispatch: null
  };

  hook.memoizedState = typeof initialState === 'function'
    ? initialState()
    : initialState;
  hook.queue = queue;

  const dispatch = (queue.dispatch = (action) => {
    const update = {
      action,
      next: null
    };

    // 插入到环状链表中
    const pending = queue.pending;
    if (pending === null) {
      update.next = update;
    } else {
      update.next = pending.next;
      pending.next = update;
    }
    queue.pending = update;

    // 调度更新
    scheduleUpdateOnFiber(currentFiber);
  });

  return [hook.memoizedState, dispatch];
}
```

---

### 2. 更新阶段（re-render）

```js
function updateState() {
  const hook = updateWorkInProgressHook();
  const queue = hook.queue;

  let baseState = hook.memoizedState;
  const pendingQueue = queue.pending;

  if (pendingQueue !== null) {
    queue.pending = null;

    // 处理更新队列（环状链表转成线性）
    let firstUpdate = pendingQueue.next;
    let update = firstUpdate;
    do {
      const action = update.action;
      baseState = typeof action === 'function' ? action(baseState) : action;
      update = update.next;
    } while (update !== firstUpdate);
  }

  hook.memoizedState = baseState;
  return [baseState, queue.dispatch];
}
```

---

## 三、核心数据结构图解

```
FunctionComponent
  └── fiber.memoizedState → Hook1 → Hook2 → ...
                         (useState) (useEffect)
                                ↑
                              queue (有更新队列)
                                ↑
                            dispatch()
```

---

## 四、你可以提到的补充点（加分）

* `useReducer` 实际上与 `useState` 共享底层实现，差异只是 reducer vs. direct value。
* Hook 本质是基于闭包、链表和调度控制的组合。
* React 并不会立即执行 setState，而是通过调度器控制更新节奏（时间切片、优先级）。

---

## 总结一句话回答（精简版）：

> `useState` 会把状态保存到当前 Fiber 的 Hook 链表中，并通过 `setState` 将更新加入队列，再触发调度重新渲染。多个 Hook 是按顺序绑定的，必须稳定调用顺序。


---

## 🧠 一、`useEffect` 实现原理？


---

### ✅ 1. `useEffect` 状态的保存机制

React 会在每个函数组件的 Fiber 上维护一个 `memoizedState` 链表，每次调用 `useEffect`，都会在链表中注册一个 Hook 对象：

```ts
{
  memoizedState: {
    deps: [...],          // 上一次的依赖
    create: () => void,   // 这次传入的 effect 函数
    destroy: () => void   // 上次的清理函数
  }
}
```

---

### ✅ 2. `useEffect` 什么时候执行？

* **执行时机**：是在 **浏览器绘制之后异步执行（非阻塞 UI）**，大致等价于 `componentDidMount` 和 `componentDidUpdate`。
* 是在 commit 阶段之后统一调度执行的（**副作用阶段**）。

---

### ✅ 3. `useEffect` 是怎么知道依赖变化的？

每次更新时，React 会把本次的 `deps` 和上一次保存在 Hook 中的 `deps` 做 **浅对比（Object.is）**：

* 如果没变，则跳过执行；
* 如果有变：

  * 执行上次的 `destroy()` 清理函数（如果有）；
  * 执行新的 `create()` 函数，并将其返回的清理函数保留下来。

---

### ✅ 4. 为什么不能在条件中使用 `useEffect`？

因为 React 是通过**调用顺序**来匹配 Hook 的状态，条件中使用会破坏顺序，导致 `deps` 错配或异常行为。

---

## 🧩 二、源码层面简化解析

React 对 `useEffect` 的处理主要在两个阶段：

---

### 🔧 1. render 阶段注册 effect：

```js
function mountEffect(create, deps) {
  const hook = mountWorkInProgressHook();

  const effect = {
    tag: Passive,       // 表示 useEffect
    create,             // 副作用函数
    destroy: undefined, // 清理函数
    deps                // 依赖项
  };

  hook.memoizedState = effect;

  // 将 effect 存入 fiber 的 effect 链表
  pushEffect(effect);
}
```

> 更新时调用 `updateEffect`，其中做依赖项的对比。

---

### 🔄 2. commit 阶段执行 effect：

```js
function commitPassiveEffects(fiber) {
  // 遍历 fiber 的 effect 链表
  for (let effect of fiber.updateQueue.effects) {
    // 有清理函数就先执行
    if (typeof effect.destroy === 'function') {
      effect.destroy();
    }

    // 执行副作用，保存新的清理函数
    const destroy = effect.create();
    effect.destroy = typeof destroy === 'function' ? destroy : undefined;
  }
}
```

这些 effect 是在 **异步调度的 effect flushing 阶段** 执行的，确保不会阻塞渲染。

---

## 🔄 三、核心数据结构示意图

```ts
FunctionComponent
  └─ memoizedState: Hook1(useState) → Hook2(useEffect) → ...
                                ↓
                   Hook.memoizedState = {
                     deps: [...],
                     create: fn,
                     destroy: fn | undefined
                   }
```

---

## 💡 四、简版总结回答（适合面试）

> `useEffect` 会在组件渲染后异步执行，React 内部将其注册为一个副作用（effect）对象，保存于 Hook 链表中，在 commit 阶段统一调度执行。通过对比当前依赖和上一次依赖决定是否重新执行，并支持返回清理函数处理副作用清理。

---

## 🛠 五、进阶补充（加分项）

* `useLayoutEffect` 与 `useEffect` 不同：它在 DOM 变更后同步执行，阻塞绘制。
* `useInsertionEffect` 是在 React DOM commit 前注入 CSS 的（如 styled-components）。
* React 18 开始，effect 的执行有调度优先级影响，结合调度器。

---

## 🧠 Suspense 核心原理一句话总结：

> **React 捕捉到组件抛出的 Promise，切换到 fallback，等 Promise resolve 后再重新渲染。**

---

## ✅ 实现机制分三步：

### 1. `React.lazy()` 返回的是一个“懒加载组件”

```js
const MyComponent = React.lazy(() => import('./MyComponent'));
```

这个懒加载组件在初次渲染时不会直接返回组件，而是抛出一个 Promise 给 React。

```js
// 内部类似这样
function lazy(loader) {
  let status = 'pending'; // 'pending' | 'fulfilled' | 'rejected'
  let result;

  const thenable = loader().then(
    module => {
      status = 'fulfilled';
      result = module.default;
    },
    err => {
      status = 'rejected';
      result = err;
    }
  );

  return function LazyComponent(props) {
    if (status === 'pending') {
      throw thenable; // 🚨 抛出 Promise，React 会捕获
    } else if (status === 'rejected') {
      throw result;   // 🚨 抛出 Error，走 ErrorBoundary
    }
    return React.createElement(result, props);
  };
}
```

---

### 2. `<Suspense fallback>` 捕获“异常渲染”

当 `LazyComponent` 抛出 Promise，React 进入“**挂起状态**”，它会查找最近的 `<Suspense>` 来显示 fallback。

React 内部通过 try/catch 捕捉这个 Promise，然后注册 `.then()`，当其 resolve 后，重新发起一次渲染。

> **注意：不是 error 是 promise，React 是通过判断 thrown 的值是 Promise 来进入 suspend 模式的。**

---

### 3. 异步完成后重新渲染

当 Promise resolve，React 就会恢复组件树渲染流程，并正常显示组件。

---

## 🖼️ 流程图简化：

```
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
```

➡️ 渲染 LazyComponent
  ➡️ 抛出 Promise
  ➡️ React 捕获
  ➡️ 显示 fallback
  ➡️ Promise resolve 后
  ➡️ 自动重新渲染 LazyComponent

---

## 🧪 类比：

可以将 Suspense 看作是一个“try-catch + loading 注册器”，遇到 `throw Promise` 时它就：

* catch 住
* 等 Promise resolve
* 然后重新渲染该部分组件树

---

## 📦 除了 lazy，谁还能用 Suspense？

除了 `React.lazy()`，只要有组件能 **throw 一个 Promise**，就能挂起渲染。常见的应用包括：

* ⚛️ `react-router` 的懒加载路由组件
* ⚛️ `React Server Components`
* ⚛️ `Relay` 等数据抓取库
* ⚛️ 你自己写的组件中 `throw fetchData()` 也能用（配合 `suspense: true`）

---

## ✅ 总结

| 点                 | 内容                               |
| ----------------- | -------------------------------- |
| **本质**            | 通过 `throw Promise` 暂停渲染          |
| **用途**            | 异步组件、数据加载、懒加载                    |
| **fallback 触发条件** | 当前组件树内某组件抛出 Promise              |
| **恢复条件**          | Promise resolve 后，React 自动重新渲染   |
| **依赖**            | `React.lazy()` 或其他抛出 Promise 的组件 |

---

## ✅ 简化版 `React.lazy` + `Suspense` 实现

我们不实现 Fiber，仅用「同步渲染 + try/catch + Promise」模拟 React 的核心行为。

### 1️⃣ `lazy` 模拟版

```js
function lazy(loader) {
  let status = 'pending'
  let result
  let promise = loader().then(
    mod => {
      status = 'fulfilled'
      result = mod.default
    },
    err => {
      status = 'rejected'
      result = err
    }
  )

  return function LazyComponent(props) {
    if (status === 'pending') {
      throw promise
    } else if (status === 'rejected') {
      throw result
    }
    return result(props)
  }
}
```

### 2️⃣ 简化版 `Suspense` 实现

我们写一个模拟「挂起捕获」逻辑的渲染函数：

```js
function render(App, fallback) {
  try {
    const result = App()
    console.log('✅ 渲染完成:', result)
  } catch (e) {
    if (typeof e.then === 'function') {
      console.log('🕒 捕获 Promise，显示 fallback')
      e.then(() => {
        console.log('🔄 Promise resolved，重新渲染')
        render(App, fallback)
      })
    } else {
      console.error('❌ 报错:', e)
    }
  }
}
```

### 3️⃣ 测试：延迟组件

```js
const LazyHello = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => 'Hello from lazy component!'
      })
    }, 1000)
  })
)

function App() {
  return LazyHello()
}

// 开始渲染
render(App, 'Loading...')
```

### ✅ 输出结果：

```
🕒 捕获 Promise，显示 fallback
🔄 Promise resolved，重新渲染
✅ 渲染完成: Hello from lazy component!
```

---

## 📚 React 源码层面：如何真正实现挂起？

以下是 React 18 中的真实处理：

### 1. 组件抛出 Promise 的时候

在 `beginWork` 阶段调用组件（如函数组件）时：

```ts
const Component = workInProgress.type
const value = Component(props) // ⚠️ 抛出 Promise
```

React 捕获到异常，并检查是否是 thenable：

```ts
if (typeof thrownValue.then === 'function') {
  // 挂起逻辑走这里
  attachPingListener(root, thrownValue)
  throw thrownValue // 再次抛出给上层 Suspense 捕捉
}
```

### 2. Suspense 较近边界拦截它

React 会查找「最近的 Suspense 组件 Fiber」，记录下来并替换为 fallback 树。

相关代码在：

```
packages/react-reconciler/src/ReactFiberThrow.js
→ throwException()
→ handleException()
```

### 3. Promise resolve 后的 ping 机制

每一个 Promise（也就是 `thenable`）都会被注册一个监听回调（叫 `pingCache`），回调会触发 root 的 `performConcurrentWorkOnRoot`，重新进入渲染流程。

```ts
function attachPingListener(root, thenable) {
  const ping = () => {
    root.pingCache.delete(thenable)
    scheduleUpdateOnFiber(root, ...);
  }

  thenable.then(ping, ping)
}
```

---

## 🧠 memoizedState 是怎么配合的？

在挂起时，React 会将 Suspense 的 fallback 节点存在该 Fiber 的 `memoizedState` 上：

```ts
memoizedState = {
  dehydrated: null,
  retryLane: lane,
  ...
}
```

这个状态用来标记：

* 当前是否处于挂起状态（是否正在显示 fallback）
* 恢复时是否还需要继续 retry

---

## ✅ 总结

| 点               | 内容                                                                                     |
| --------------- | -------------------------------------------------------------------------------------- |
| `React.lazy`    | 返回组件时根据加载状态决定是否抛出 Promise                                                              |
| `Suspense`      | 捕获 Promise，替换子树为 fallback，等 Promise resolve                                            |
| 异步恢复            | 注册 ping 监听器，Promise resolve 后重新渲染                                                      |
| `memoizedState` | 存储 fallback 显示状态，避免多次切换                                                                |
| 关键代码            | `throwException`, `attachPingListener`, `SuspenseComponent` 的 beginWork 和 completeWork |

---
## react 路由

要实现一个简单的 React 路由库（类似 `react-router-dom`），我们需要从最基本的路由匹配、导航、组件渲染等功能着手。以下是一个基本的路由实现思路。我们将手动管理路由的状态、组件的渲染，并利用 React 的 Context 和 Hooks 来管理导航和路由状态。

### 1. 创建 `RouterContext`

首先，我们需要一个 `RouterContext` 来存储当前路由信息，并提供路由跳转的功能。

```js
import React, { createContext, useContext, useState, useEffect } from 'react';

// 创建路由上下文
const RouterContext = createContext();

export function useRouter() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }) {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    // 监听浏览器的 popstate 事件
    const handlePopState = () => {
      setLocation(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setLocation(path); // 更新当前路由
  };

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
```

* `RouterProvider` 是我们整个路由系统的核心，负责存储和更新当前路径。
* `useRouter` 是一个自定义 Hook，用来方便地获取路由信息和导航函数。

---

### 2. 创建 `Route` 组件

`Route` 组件用于根据路径匹配当前 URL，并渲染相应的组件。

```js
export function Route({ path, component }) {
  const { location } = useRouter();
  
  // 简单的路径匹配
  const match = location === path;

  return match ? component : null; // 如果路径匹配，渲染组件
}
```

* `Route` 会检查当前的路径（`location`）是否与 `path` 匹配。如果匹配，则渲染对应的组件。

---

### 3. 创建 `Link` 组件

`Link` 用于在用户点击时触发路由跳转。

```js
export function Link({ to, children }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick}>{children}</a>;
}
```

* `Link` 组件通过 `navigate` 函数进行路由跳转。我们也阻止了默认的跳转行为（防止页面刷新）。

---

### 4. 使用 Router

我们可以将这些组件组合起来，实现一个简易的路由系统。

```js
import React from 'react';
import { RouterProvider, Route, Link } from './router';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <RouterProvider>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <div>
          <Route path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
```

### 总结

我们用几个简单的 React API 实现了一个基本的路由库：

1. **`RouterProvider`**：提供当前路径和路由跳转功能（`navigate`）。
2. **`Route`**：根据当前路径来渲染匹配的组件。
3. **`Link`**：创建路由链接，避免页面刷新并使用 `navigate` 来进行路由跳转。

