# Rematch 使用指南 - 简化 Redux 的最佳实践

## 目录
- [Rematch 使用指南 - 简化 Redux 的最佳实践](#rematch-使用指南---简化-redux-的最佳实践)
  - [目录](#目录)
  - [Rematch 概述](#rematch-概述)
  - [核心概念](#核心概念)
    - [Model](#model)
    - [Store](#store)
    - [Dispatch](#dispatch)
  - [基础使用](#基础使用)
    - [安装配置](#安装配置)
    - [定义Model](#定义model)
    - [创建Store](#创建store)
    - [连接React](#连接react)
  - [高级特性](#高级特性)
    - [异步处理](#异步处理)
    - [插件系统](#插件系统)
    - [TypeScript支持](#typescript支持)
  - [性能优化](#性能优化)
  - [最佳实践](#最佳实践)
  - [与Redux对比](#与redux对比)
  - [常见问题](#常见问题)

## Rematch 概述

Rematch 是建立在 Redux 之上的轻量级框架，保留了 Redux 的核心优点同时大幅简化了使用方式。它提供了更简单的 API 和更直观的组织方式，让 Redux 开发变得更加高效。

**主要特点**：
- 零配置起步
- 减少Redux样板代码
- 内置异步处理
- 插件扩展机制
- 完整的TypeScript支持
- 兼容现有Redux生态

## 核心概念

### Model

Model 是 Rematch 的核心构建块，包含了:
- `state` - 初始状态
- `reducers` - 同步状态更新函数
- `effects` - 异步处理函数（可选）

### Store

Store 是应用的单一数据源，通过 `init` 方法创建，包含:
- 所有注册的models
- 插件功能
- Redux store的所有标准方法

### Dispatch

Rematch 对 `dispatch` 进行了增强，可以直接调用 model 中的 reducers 和 effects:
```js
dispatch.modelName.reducerName(payload)
dispatch.modelName.effectName(payload)
```

## 基础使用

### 安装配置

```bash
npm install @rematch/core react-redux
# 或
yarn add @rematch/core react-redux
```

### 定义Model

**countModel.js**
```javascript
export const count = {
  state: 0, // 初始状态
  reducers: {
    // 同步reducer，处理状态更新
    increment(state, payload) {
      return state + payload
    },
    decrement(state, payload) {
      return state - payload
    }
  },
  effects: (dispatch) => ({
    // 异步effect，处理副作用
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
}
```

### 创建Store

**store.js**
```javascript
import { init } from '@rematch/core'
import * as models from './models'

const store = init({
  models,
  // 可选的插件配置
  plugins: [],
  // Redux配置（可选）
  redux: {
    devtoolOptions: {},
    reducers: {}
  }
})

export default store
```

### 连接React

**App.js**
```javascript
import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'

// 使用connect高阶组件
const CountComponent = ({ count, increment, incrementAsync }) => (
  <div>
    <h2>{count}</h2>
    <button onClick={() => increment(1)}>+1</button>
    <button onClick={() => incrementAsync(1)}>+1 Async</button>
  </div>
)

const mapState = (state) => ({
  count: state.count
})

const mapDispatch = (dispatch) => ({
  increment: dispatch.count.increment,
  incrementAsync: dispatch.count.incrementAsync
})

const ConnectedCount = connect(mapState, mapDispatch)(CountComponent)

function App() {
  return (
    <Provider store={store}>
      <ConnectedCount />
    </Provider>
  )
}
```

**使用Hooks方式**
```javascript
import { useSelector, useDispatch } from 'react-redux'

function CountComponent() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch.count.increment(1)}>+1</button>
      <button onClick={() => dispatch.count.incrementAsync(1)}>+1 Async</button>
    </div>
  )
}
```

## 高级特性

### 异步处理

Rematch 内置了异步处理支持，无需额外中间件：

```javascript
effects: (dispatch) => ({
  async loadUser(payload, rootState) {
    try {
      const response = await fetch(`/api/user/${payload}`)
      const user = await response.json()
      dispatch.user.set(user)
    } catch (err) {
      dispatch.user.error(err)
    }
  }
})
```

### 插件系统

Rematch 提供丰富的插件生态：

1. **加载插件**：@rematch/loading
```javascript
import loadingPlugin from '@rematch/loading'
import { init } from '@rematch/core'

const store = init({
  plugins: [loadingPlugin()]
})

// 使用
const { isLoading } = useSelector(state => state.loading.models.user)
```

2. **持久化插件**：@rematch/persist
```javascript
import persistPlugin from '@rematch/persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const store = init({
  plugins: [persistPlugin(persistConfig)]
})
```

3. **其他常用插件**：
- @rematch/updated - 跟踪状态更新时间
- @rematch/select - 创建记忆化selector

### TypeScript支持

Rematch 提供完整的类型支持：

```typescript
import { createModel } from '@rematch/core'
import { RootModel } from './models'

interface CountState {
  count: number
}

export const count = createModel<RootModel>()({
  state: 0 as CountState['count'],
  reducers: {
    increment(state, payload: number) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
})
```

## 性能优化

1. **选择性连接**：只连接组件需要的state
2. **模型拆分**：按功能拆分大型model
3. **使用插件**：
   - @rematch/select 创建记忆化selector
   - reselect 进行复杂计算
4. **避免频繁更新**：
```javascript
// 不好 - 每次都会创建新对象
reducers: {
  updateUser(state, payload) {
    return { ...state, ...payload }
  }
}

// 好 - 只在必要时更新
reducers: {
  updateUser(state, payload) {
    if (state.name !== payload.name || state.age !== payload.age) {
      return { ...state, ...payload }
    }
    return state
  }
}
```

## 最佳实践

1. **模型组织**：
```
src/
  models/
    user/
      index.ts  # 主model
      types.ts   # 类型定义
      api.ts     # API调用
    products/
      index.ts
    index.ts     # 聚合所有models
```

2. **命名约定**：
- Model名：小写单数名词 (user, product)
- Reducer：动词现在时 (add, update, remove)
- Effect：动词原形 (fetch, load, save)

3. **异步处理**：
- 使用async/await替代Promise链
- 统一错误处理
- 显示加载状态

4. **测试策略**：
- Reducers：纯函数易于测试
- Effects：mock API调用
- 组件：测试连接后的行为

## 与Redux对比

| 特性                | Rematch                     | Redux                 |
|---------------------|----------------------------|-----------------------|
| 样板代码            | 极少                       | 较多                 |
| 配置复杂度          | 简单                       | 中等                 |
| 异步处理            | 内置支持                   | 需要中间件           |
| 类型支持            | 一流支持                   | 需要额外配置         |
| 插件生态            | 精选插件                   | 丰富但分散           |
| 学习曲线            | 低                         | 中到高               |
| 适合场景            | 快速开发Redux应用          | 需要最大灵活性       |

## 常见问题

**Q: Rematch 能兼容现有的 Redux 项目吗？**
A: 是的，Rematch 完全兼容 Redux，可以逐步迁移：
```javascript
import { init } from '@rematch/core'
import existingReducer from './existingReducer'

const store = init({
  redux: {
    reducers: {
      existingReducer
    }
  }
})
```

**Q: 如何处理大型应用中的多个 models？**
A: 推荐按功能拆分并懒加载：
```javascript
// models/index.js
export const user = await import('./user')
export const products = await import('./products')
```

**Q: 如何在组件外访问 store？**
A: 直接导入store实例：
```javascript
import store from './store'

// 在非组件文件中
store.dispatch.user.login()
```

**Q: 如何调试 Rematch 应用？**
A: 使用 Redux DevTools 扩展，Rematch 自动集成：
1. 安装浏览器扩展
2. 无需额外配置即可使用

**Q: 如何实现权限控制等全局逻辑？**
A: 创建全局model或使用插件：
```javascript
// global model
const global = {
  effects: {
    async checkAuth() {
      // 全局权限检查
    }
  }
}
```