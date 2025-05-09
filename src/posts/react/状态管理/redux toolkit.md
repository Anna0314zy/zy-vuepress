下面是关于 **Redux Toolkit（RTK）** 的一篇完整中文文档，涵盖其核心 API、用途、示例以及最佳实践，非常适合用于构建中大型 React 应用的状态管理。

---

# 📘 Redux Toolkit 

Redux Toolkit（RTK）是官方推荐的 Redux 状态管理库，用于简化 Redux 的开发流程。它将配置 store、创建 reducer、异步逻辑、以及中间件等繁杂过程大幅简化。

---

## 🚀 核心特性

* 简化 `store` 配置（内置 redux-thunk、devtools）
* 使用 `createSlice` 自动生成 action 和 reducer
* 内建 `Immer`，可直接写“可变”代码
* 支持异步请求处理（`createAsyncThunk`）
* 可选集成 Reselect 和 RTK Query

---

## 🔧 安装

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🧱 核心 API 一览

| API                        | 作用                        |
| -------------------------- | ------------------------- |
| `configureStore`           | 创建并配置 Redux store（带默认中间件） |
| `createSlice`              | 创建 reducer + action       |
| `createAsyncThunk`         | 编写异步请求逻辑                  |
| `createEntityAdapter`      | 标准化实体集合管理（CRUD）           |
| `createSelector`           | 创建记忆化 selector（reselect）  |
| `createListenerMiddleware` | 响应 action 的副作用中间件         |
| `createReducer`            | 自定义 reducer               |
| `createAction`             | 自定义 action 创建器            |

---

## 📦 1. `configureStore`

```ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

> 自动包含 redux-thunk、Redux DevTools。

---

## 📦 2. `createSlice`

```ts
// features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}
const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1; // immer 允许我们“可变写法”
    },
    decrement(state) {
      state.value -= 1;
    },
    addBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addBy } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 📦 3. `createAsyncThunk`

```ts
// features/user/userSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const res = await fetch('/api/user');
  return await res.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
```

---

## 📦 4. `createEntityAdapter`

```ts
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    postAdded: postsAdapter.addOne,
    postsReceived: postsAdapter.setAll,
  },
});
```

---

## 📦 5. `createSelector`（依赖 Reselect）

```ts
import { createSelector } from '@reduxjs/toolkit';

const selectTodos = (state: RootState) => state.todos;

export const selectCompletedTodos = createSelector(
  [selectTodos],
  (todos) => todos.filter(t => t.completed)
);
```

---

## 📦 6. `createListenerMiddleware`

```ts
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { increment } from './counterSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: increment,
  effect: async (action, listenerApi) => {
    console.log('increment 被调用了', action);
  },
});
```

---

## 🔄 使用 Redux Toolkit + React

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { increment } from './features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
}
```

---

## ✅ 最佳实践建议

1. **使用 Toolkit 提供的 API，不再手写 action/reducer**
2. **将业务模块分离成 feature 文件夹**
3. **使用 Immer 写法简化 reducer**
4. **使用 `createAsyncThunk` 管理请求状态**
5. **使用 TypeScript 全面类型保护**

---

## 📚 推荐目录结构

```
src/
├── app/
│   └── store.ts
├── features/
│   └── counter/
│       ├── counterSlice.ts
│       └── Counter.tsx
```

---

Redux Toolkit（RTK）和 Rematch 都是 Redux 的“进阶封装库”，但它们的定位和设计理念略有不同。以下是它们的详细对比，适合你在评估使用哪一个时参考：

---

## 🧩 基本定位

| 特性       | Redux Toolkit     | Rematch                    |
| -------- | ----------------- | -------------------------- |
| 来源       | Redux 官方维护        | 社区开发维护                     |
| 基于 Redux | ✅ 完全基于 Redux      | ✅ 完全基于 Redux               |
| 目标       | 简化 Redux 的使用流程    | 更进一步抽象 Redux，简洁模型思想        |
| 学习曲线     | 较低（对已有 Redux 使用者） | 更低（无需理解 Action/Reducer 概念） |

---

## 🧱 核心概念对比

| 概念         | Redux Toolkit                         | Rematch                                      |
| ---------- | ------------------------------------- | -------------------------------------------- |
| Store 配置   | `configureStore()` 简化配置               | `init()` 简化配置                                |
| Reducer 定义 | 使用 `createSlice` 定义 reducer 和 actions | 使用 `reducers` 和 `effects` 组织在 model 中        |
| Action 创建  | 自动通过 `createSlice.actions` 生成         | 自动创建，直接调用 `dispatch.modelName.reducerName()` |
| 异步处理       | 使用 `createAsyncThunk`（需额外定义 thunk）    | 使用 `effects` 直接编写 async 函数                   |
| 中间件支持      | 支持（可注入自定义）                            | 支持（通过 plugins）                               |
| DevTools   | ✅ 默认开启                                | ✅ 默认开启                                       |

---

## 🧪 示例对比

### RTK 示例（加法器）

```ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
  },
});

dispatch(counterSlice.actions.increment());
```

### Rematch 示例（加法器）

```ts
const counter = {
  state: 0,
  reducers: {
    increment: (state) => state + 1,
  },
};

dispatch.counter.increment();
```

> ✅ Rematch 省去了 `actions`、`slice` 等模板代码，更接近 MobX 的开发风格。

---

## 🧵 异步逻辑对比

### Redux Toolkit

```ts
export const fetchUser = createAsyncThunk('user/fetch', async () => {
  const res = await fetch('/api/user');
  return await res.json();
});
```

### Rematch

```ts
effects: (dispatch) => ({
  async fetchUser() {
    const res = await fetch('/api/user');
    dispatch.user.setUser(await res.json());
  },
});
```

> ✅ Rematch 直接使用 `async`/`await`，不需要封装 thunk。

---

## 🔩 插件机制对比

| 特性            | Redux Toolkit  | Rematch                   |
| ------------- | -------------- | ------------------------- |
| 插件支持          | ✅（标准 Redux 方式） | ✅（内建插件机制）                 |
| 内建 loading 插件 | ❌              | ✅ 自动追踪 effects loading 状态 |
| persist 支持    | 自定义配置          | 官方插件 `@rematch/persist`   |

---

## 🧠 学习成本对比

| 对象       | Redux Toolkit                    | Rematch               |
| -------- | -------------------------------- | --------------------- |
| Redux 新手 | 中等，需理解 slice / thunk / action 类型 | 非常低，像使用 model 一样直接调用  |
| Redux 老手 | 非常友好，熟悉 redux 栈                  | 可能需要适应 model 式思维，但很简单 |

---

## 🧰 工程规模适应性

| 项目规模  | Redux Toolkit | Rematch              |
| ----- | ------------- | -------------------- |
| 小型项目  | ✅ 但稍显重量       | ✅ 更轻，易上手             |
| 中大型项目 | ✅ 工程化更强       | ✅ 支持拆 model，推荐组合使用插件 |
| 多人协作  | ✅ 模块职责清晰      | ✅ model 化便于维护        |

---

## ✅ 总结对比

| 特性/优点              | Redux Toolkit            | Rematch                   |
| ------------------ | ------------------------ | ------------------------- |
| 官方支持               | ✅ Redux 官方出品             | ❌ 社区主导维护                  |
| 开发简洁度              | ⭐⭐⭐（比裸 Redux 好很多）        | ⭐⭐⭐⭐（更接近 MobX 风格）         |
| 异步操作简化度            | 中等，需要 `createAsyncThunk` | 高，直接使用 `effects`          |
| 插件生态               | Redux 标准插件生态             | 内建插件系统（loading/persist 等） |
| 类型推导（TypeScript）支持 | 强（特别是 action 和 slice）    | 强，但更依赖开发者维护 model 类型      |
| DevTools 支持        | ✅ 默认支持                   | ✅ 默认支持                    |

---

## 🏁 推荐选择场景

| 场景                        | 推荐选择            |
| ------------------------- | --------------- |
| 团队已使用 Redux               | ✅ Redux Toolkit |
| 想用 Redux，但不想写复杂模板代码       | ✅ Rematch       |
| 小团队/单人开发，追求简单快速           | ✅ Rematch       |
| 大型工程 + TypeScript + 工具链齐全 | ✅ Redux Toolkit |
| 需要和现有 Redux 中间件/插件配合使用    | ✅ Redux Toolkit |

---

