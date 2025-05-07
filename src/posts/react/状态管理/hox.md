# Hox 使用指南 - 极简 React 状态管理方案

## 目录
- [Hox 使用指南 - 极简 React 状态管理方案](#hox-使用指南---极简-react-状态管理方案)
  - [目录](#目录)
  - [Hox 概述](#hox-概述)
  - [核心概念](#核心概念)
    - [Store](#store)
    - [Model](#model)
    - [Hook](#hook)
  - [基础使用](#基础使用)
    - [安装配置](#安装配置)
    - [创建Model](#创建model)
    - [使用Store](#使用store)
  - [高级特性](#高级特性)
    - [依赖注入](#依赖注入)
    - [性能优化](#性能优化)
    - [SSR支持](#ssr支持)
  - [最佳实践](#最佳实践)
  - [与其他方案对比](#与其他方案对比)
  - [常见问题](#常见问题)

## Hox 概述

Hox 是一个极简的 React 状态管理方案，基于 React Hooks 实现，具有以下特点：

- **零学习成本**：完全基于 Hooks API
- **极简设计**：核心 API 只有 `createModel` 和 `useModel`
- **高性能**：精确的更新控制
- **TypeScript友好**：完整的类型推断
- **轻量级**：gzip 后仅 1KB

适合中小型应用或组件级状态管理需求。

## 核心概念

### Store

Store 是 Hox 中的状态容器，具有以下特性：
- 全局单例
- 响应式更新
- 多组件共享
- 生命周期感知

### Model

Model 是 Store 的创建模板：
- 使用普通 Hook 定义
- 可以包含状态和业务逻辑
- 支持依赖其他 Model

### Hook

Hox 完全基于 React Hooks：
- `useModel` 用于消费 Store
- 自定义 Hook 用于创建 Model
- 支持所有 React Hook 规则

## 基础使用

### 安装配置

```bash
npm install hox
# 或
yarn add hox
```

### 创建Model

**counterModel.ts**
```typescript
import { createModel } from 'hox'

function useCounter() {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  
  return {
    count,
    increment,
    decrement
  }
}

export default createModel(useCounter)
```

### 使用Store

**CounterComponent.tsx**
```typescript
import { useModel } from 'hox'
import counterModel from './counterModel'

function Counter() {
  const counter = useModel(counterModel)
  
  return (
    <div>
      <p>Count: {counter.count}</p>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
    </div>
  )
}
```

## 高级特性

### 依赖注入

Model 可以依赖其他 Model：

**userModel.ts**
```typescript
import { createModel } from 'hox'
import useCounter from './counterModel'

function useUser() {
  const counter = useModel(useCounter)
  const [user, setUser] = useState(null)
  
  const login = () => {
    setUser({
      name: `User_${counter.count}`,
      id: Date.now()
    })
  }
  
  return {
    user,
    login
  }
}

export default createModel(useUser)
```

### 性能优化

1. **选择性更新**：
```typescript
// 只订阅count变化
const { count } = useModel(counterModel, (model) => [model.count])
```

2. **批量更新**：
```typescript
function useTodos() {
  const [todos, setTodos] = useState([])
  
  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { text, id: Date.now() }])
  }, [])
  
  return {
    todos,
    addTodo
  }
}
```

### SSR支持

**服务端渲染配置**：
```typescript
import { renderToString } from 'react-dom/server'
import { createStore } from 'hox'
import App from './App'

export function render() {
  // 每个请求创建独立的store
  const store = createStore()
  const html = renderToString(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  )
  
  return {
    html,
    // 可以提取初始状态用于客户端注水
    initialState: store.getSnapshot()
  }
}
```

## 最佳实践

1. **模型组织**：
```
src/
  models/
    counter/
      index.ts  # 主逻辑
      types.ts  # 类型定义
    user/
      index.ts
    index.ts    # 聚合导出
```

2. **类型定义**：
```typescript
interface CounterModel {
  count: number
  increment: () => void
  decrement: () => void
}

function useCounter(): CounterModel {
  // 实现...
}
```

3. **测试策略**：
```typescript
// 测试Hook组件
function TestComponent({ callback }) {
  const model = useModel(counterModel)
  callback(model)
  return null
}

test('counter model', () => {
  const results = []
  render(
    <TestComponent callback={(model) => results.push(model)} />
  )
  
  expect(results[0].count).toBe(0)
  act(() => results[0].increment())
  expect(results[1].count).toBe(1)
})
```

## 与其他方案对比

| 特性          | Hox            | Redux         | Recoil        | Zustand       |
|---------------|----------------|---------------|---------------|---------------|
| 学习曲线      | 极低           | 高            | 中            | 低            |
| 样板代码      | 极少           | 多            | 中            | 少            |
| 状态粒度      | 全局/组件      | 全局          | 原子级        | 全局          |
| 异步支持      | 原生           | 需中间件      | 原生          | 原生          |
| 包大小        | 1KB            | 7KB+          | 14KB+         | 3KB           |
| 适用场景      | 中小应用       | 大型应用      | 复杂状态      | 通用场景      |

## 常见问题

**Q: 如何实现局部状态？**

A: 直接使用 React 内置的 `useState`，Hox 适合全局共享状态。对于需要后期提升为全局的状态，可以无缝迁移。

**Q: 多个组件使用同一个 Model 会重复渲染吗？**

A: 不会，Hox 内部使用发布订阅模式，只有依赖的数据变化的组件会重新渲染。

**Q: 如何在组件外访问 Store？**

A: 不推荐在组件外访问，如需使用可以通过传递引用或创建单例：

```typescript
// 不推荐但可行的方式
let globalCounter: ReturnType<typeof useCounter> | null = null

function useCounter() {
  const [count, setCount] = useState(0)
  // ...其他逻辑
  
  // 在effect中设置全局引用
  useEffect(() => {
    globalCounter = { count, increment, decrement }
    return () => { globalCounter = null }
  }, [count, increment, decrement])
  
  return { count, increment, decrement }
}
```

**Q: 如何调试 Hox 应用？**

A: 可以使用 React DevTools：
1. 查看组件树中的 Model 节点
2. 使用 `useDebugValue` 在自定义 Hook 中添加调试信息
3. 开发环境下的控制台警告

**Q: Hox 适合大型应用吗？**

A: 对于超大型应用，Hox 可能需要配合以下实践：
- 按功能拆分 Model
- 使用动态加载
- 结合 Context 进行局部状态隔离
- 添加中间件层（如日志、持久化）

对于复杂场景，可以考虑 Redux 或 Recoil 等更专业的方案。