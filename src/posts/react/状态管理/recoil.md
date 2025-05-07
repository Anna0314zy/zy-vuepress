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

## 核心概念

### Atom

Atom 是 Recoil 中的基本状态单位，代表应用中的一部分状态。

**特性：**
- 可读可写
- 可以被任何组件订阅
- 当值改变时，所有订阅组件都会重新渲染

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

Selector 代表派生状态，可以从 atom 或其他 selector 中派生数据。

**特性：**
- 可以是只读或可写的
- 当依赖的状态变化时自动重新计算
- 可以包含异步操作

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