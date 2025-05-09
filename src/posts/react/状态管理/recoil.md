# Recoil 详细功能文档

## 目录
- [Recoil 详细功能文档](#recoil-详细功能文档)
  - [目录](#目录)
  - [概述](#概述)
  - [核心概念](#核心概念)
    - [Atom](#atom)
    - [Selector](#selector)
  - [高级功能](#高级功能)
    - [异步数据查询](#异步数据查询)
    - [副作用](#副作用)
    - [状态持久化](#状态持久化)
    - [状态快照](#状态快照)
  - [实用工具](#实用工具)
  - [最佳实践](#最佳实践)
  - [与Redux的比较](#与redux的比较)

## 概述

Recoil 是 Facebook 推出的 React 状态管理库，专为 React 设计，充分利用 React 的并发模式特性。它提供了一种更直观、更灵活的方式来管理应用状态，特别适合复杂的状态管理场景。
其核心思想是： 使用 “原子化状态（Atom）+ 派生状态（Selector）” 的方式，使状态管理像使用 React 组件一样简单且具备良好的性能。

## 核心概念

### Atom

Atom：最小状态单元
- 是 Recoil 中状态的最小组成单元。

- 可以被多个组件共享、订阅。

- 修改 Atom 时，只有使用该 Atom 的组件会重新渲染。

**示例代码：**
```javascript
import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState', // 唯一ID
  default: [], // 默认值
});
```

**使用方式：**
```javascript
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  
  // 更新状态
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  
  // ...
}
```

### Selector

Selector：派生/计算状态
- 类似于 Vue 的 computed。

- 用于从一个或多个 Atom 中派生出新状态。

- 支持同步和异步派生。

**示例代码：**
```javascript
import { selector } from 'recoil';
import { todoListState } from './atoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(todoListState);
    return list.filter(item => !item.completed);
  },
  
  // 可选的set属性，使其成为可写selector
  set: ({ set, get }, newValue) => {
    const currentList = get(todoListState);
    set(todoListState, [...currentList, newValue]);
  }
});
```

**使用方式：**
```javascript
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './selectors';

function TodoListStats() {
  const filteredTodos = useRecoilValue(filteredTodoListState);
  
  return (
    <div>未完成事项数量: {filteredTodos.length}</div>
  );
}
```
🧠 内部机制（简要）
✅ 原子依赖追踪（依赖图 DAG）
每个 Atom/Selector 构成一个“依赖图”，Recoil 追踪谁依赖了谁。

当某个 Atom 改变时，只会通知真正依赖它的组件重新渲染，避免不必要更新。

✅ React Concurrent Mode 支持
Recoil 是为 React 的并发模式（Concurrent Mode）设计的，可以天然处理“延迟渲染”和“挂起”逻辑（通过 selector 的 async 支持）。

✅ Snapshots（状态快照）
Recoil 支持快照机制，可以用来实现撤销/重做、调试状态、时间旅行等功能。

## 高级功能

### 异步数据查询

Recoil 可以无缝处理异步数据流。

**示例：**
```javascript
const userDataQuery = selector({
  key: 'userDataQuery',
  get: async ({ get }) => {
    const userId = get(currentUserIdState);
    const response = await fetch(`/api/user/${userId}`);
    return response.json();
  },
});

function UserProfile() {
  const userData = useRecoilValue(userDataQuery);
  
  if (!userData) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
}
```

### 副作用

使用 `useRecoilTransactionObserver` 或 `atomEffects` 来执行副作用。

**示例：**
```javascript
const searchQueryState = atom({
  key: 'searchQueryState',
  default: '',
  effects: [
    ({ onSet }) => {
      onSet(newValue => {
        console.log('搜索查询变为:', newValue);
        // 可以在这里执行如API调用等副作用
      });
    },
  ],
});
```

### 状态持久化

可以将状态持久化到 localStorage 或其他存储。

**示例：**
```javascript
const persistAtom = atom({
  key: 'persistAtom',
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      // 从localStorage加载初始值
      const savedValue = localStorage.getItem('my-persisted-state');
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      
      // 订阅状态变化并保存到localStorage
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem('my-persisted-state')
          : localStorage.setItem('my-persisted-state', JSON.stringify(newValue));
      });
    },
  ],
});
```

### 状态快照

Recoil 提供了快照功能，可以获取和操作状态的快照。

**示例：**
```javascript
import { useRecoilCallback } from 'recoil';

function DebugButton() {
  const logState = useRecoilCallback(({ snapshot }) => async () => {
    console.log('Atom values:');
    for (const node of snapshot.getNodes_UNSTABLE()) {
      const value = await snapshot.getPromise(node);
      console.log(node.key, value);
    }
  });
  
  return <button onClick={logState}>Dump State</button>;
}
```

## 实用工具

1. **`useRecoilState`**: 类似 useState，用于读写 atom/selector
2. **`useRecoilValue`**: 只读取 atom/selector 的值
3. **`useSetRecoilState`**: 只设置 atom/selector 的值
4. **`useResetRecoilState`**: 重置 atom/selector 到默认值
5. **`useRecoilStateLoadable`**: 处理异步状态的不同状态(loading, hasValue, hasError)
6. **`useRecoilCallback`**: 在不订阅的情况下读取或写入状态

## 最佳实践

1. **原子化设计**: 将状态分解为最小的原子单元
2. **派生状态使用 selector**: 避免重复存储派生数据
3. **合理使用异步 selector**: 处理数据获取逻辑
4. **命名规范**: 使用清晰的 key 命名
5. **性能优化**: 使用 React.memo 配合 Recoil 避免不必要的渲染

## 与Redux的比较

| 特性                | Recoil                     | Redux                 |
|---------------------|----------------------------|-----------------------|
| 学习曲线            | 较低                       | 较高                 |
| 样板代码            | 少                         | 多                   |
| 异步处理            | 内置支持                   | 需要中间件           |
| 派生状态            | 自动处理                   | 需要手动处理或reselect |
| React集成           | 深度集成                   | 需要通过react-redux  |
| 开发者工具          | 有限                       | 强大                 |
| 社区生态            | 较小但增长中               | 非常成熟             |
| 适合场景            | React应用，特别是新项目    | 大型复杂应用         |

Recoil 更适合 React 生态系统，特别是利用了 React 的新特性如并发模式。Redux 则更适合需要严格状态管理和丰富中间件支持的大型应用。

---

这份文档涵盖了 Recoil 的主要功能和用法。根据具体项目需求，可以进一步深入某些特定功能或模式。