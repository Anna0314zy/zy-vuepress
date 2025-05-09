React 16 引入 Fiber 架构后，整个更新流程被拆分成多个阶段，目的是实现更细粒度的控制和打断能力（cooperative scheduling），但 **React 16 实际上并未实现时间切片的打断式更新（如 `shouldYield`）**，这是 React 18 中 concurrent 模式才真正具备的能力。

不过 React 16 的 Fiber 架构**为后续实现异步渲染打下了架构基础**。

---

# 🧬 React 16 Fiber 的完整更新流程

React 16 中的 Fiber 架构把更新流程拆成三个核心阶段：

---

### 🟡 1. 调度阶段（Schedule Phase）

#### ⛳ 入口函数

* 类组件：`setState` / `forceUpdate`
* 函数组件：通过 `ReactDOM.render()` 或内部更新触发

最终调用：

```ts
scheduleUpdateOnFiber(fiber, lane, eventTime)
```

#### ✅ 主要任务

* 找到更新的 Root 节点；
* 把更新任务加入到调度队列中；
* 设置更新的优先级（React 16 使用 expirationTime）；
* 准备开始渲染任务。

React 16 使用的是过期时间 `expirationTime`，而非 Lane 模型：

```ts
markUpdateTimeFromFiberToRoot(fiber, expirationTime);
ensureRootIsScheduled(root);
```

---

### 🟡 2. 渲染阶段（Render Phase）

#### ✅ 任务目标

* 从当前 Fiber 树（`current`）构造出新的 `workInProgress` 树；
* 执行 `beginWork` 和 `completeWork`；
* 构建 `effectList`，标记需要更新的节点；
* 如果中途抛出错误，则进入 `capture` 机制（React 16 引入了错误边界）。

#### 🔁 执行流程

```ts
while (workInProgress !== null) {
  performUnitOfWork(workInProgress)
}
```

```ts
function performUnitOfWork(unitOfWork) {
  const current = unitOfWork.alternate;
  let next = beginWork(current, unitOfWork);
  if (next === null) {
    completeUnitOfWork(unitOfWork);
  } else {
    workInProgress = next;
  }
}
```

#### 🔄 Fiber 树的遍历过程

1. `beginWork()`：为当前节点创建子节点；
2. `completeWork()`：处理当前节点副作用，生成 DOM；
3. 在 Fiber 树中深度优先遍历。

⚠️ React 16 虽然使用 Fiber 栈帧结构（协程），但并**未实现中断逻辑（没有 `shouldYield()` 判断）**，因此在主线程上是同步执行的。

---

### 🟡 3. 提交阶段（Commit Phase）

这是最终将 DOM 更新到页面的阶段。

#### ⛳ 入口函数

```ts
commitRoot(root);
```

#### ✅ 阶段划分

分为三个子阶段：

| 阶段               | 说明                                       |
| ---------------- | ---------------------------------------- |
| `beforeMutation` | 生命周期 `getSnapshotBeforeUpdate` 等         |
| `mutation`       | 插入、更新、删除 DOM                             |
| `layout`         | 执行生命周期：`componentDidMount` / `useEffect` |

此阶段是同步执行、不可打断的。

---

## 🧩 React 16 Fiber 流程图概览

```
setState / forceUpdate
        ↓
scheduleUpdateOnFiber
        ↓
React 内部调度器设置 expirationTime
        ↓
开始构建 workInProgress Fiber 树
        ↓
beginWork → completeWork
        ↓
生成 effectList
        ↓
commitRoot → 提交到真实 DOM
```

---

## 📌 小结：React 16 与后续版本的差异

| 特性                 | React 16             | React 17 | React 18         |
| ------------------ | -------------------- | -------- | ---------------- |
| Fiber 架构           | ✅                    | ✅        | ✅                |
| 中断式渲染（shouldYield） | ❌                    | ❌        | ✅（开启 Concurrent） |
| 时间切片               | ❌                    | ❌        | ✅                |
| Lane 模型            | ❌（使用 expirationTime） | ❌        | ✅                |
| Concurrent 模式      | ❌                    | ❌        | ✅                |

---


