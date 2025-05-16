# Redux 使用指南：基础使用、中间件与异步处理

要理解 **Redux 是如何连接 React 组件并使组件能够访问 store 中的值**，你需要了解 Redux 和 React 配合使用时的一些关键机制，主要包括：

---

## 🧠 1. 核心目标

Redux 是一个状态管理库，但它 **不关心 UI 框架**。为了在 React 中使用 Redux，我们借助一个库：

> **`react-redux`**：它提供了 `Provider`、`connect`、`useSelector`、`useDispatch` 等 API，把 Redux 状态“连接”到 React。

---

## 📦 2. Redux 的 Store 是什么？

Redux 的核心是一个全局状态仓库（store）：

```js
import { createStore } from 'redux';

const reducer = (state = { count: 0 }, action) => {
  if (action.type === 'increment') return { count: state.count + 1 };
  return state;
};

const store = createStore(reducer);
```

* `store.getState()`：获取当前状态
* `store.dispatch(action)`：派发动作修改状态
* `store.subscribe(listener)`：订阅状态变化

---

## 🧩 3. React-Redux 是如何连接的？

### 第一步：`<Provider store={store}>`

```jsx
import { Provider } from 'react-redux';

<Provider store={store}>
  <App />
</Provider>
```

* 它使用了 React 的 Context，将 Redux 的 `store` 放到上下文中。
* 所有子组件都可以通过 Context 获取 store。

---

### 第二步：组件如何获取 `state`？

你有两个方式连接组件：

### ✅ 方法一：使用 Hook（现代写法）

```jsx
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count); // 读取 state
  const dispatch = useDispatch(); // 获取 dispatch 函数

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>加一</button>
    </div>
  );
}
```

#### ✅ `useSelector` 的原理：

1. 内部调用 `React.useContext(ReduxContext)` 获取 `store`。
2. 然后通过 `store.getState()` 获取状态。
3. 使用 `store.subscribe()` 监听变化，一旦状态变化就会触发重新渲染。

#### ✅ `useDispatch` 的原理：

它只是从 `store` 中拿出 `dispatch` 函数，返回给你。

```js
const store = useContext(ReduxContext);
return store.dispatch;
```

---

### ✅ 方法二：`connect` 高阶组件（老写法）

```js
import { connect } from 'react-redux';

function Counter({ count, increment }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>加一</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'increment' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

#### `connect` 的原理：

1. `connect()` 本质上返回一个高阶组件。
2. 这个组件在 `componentDidMount` 时注册 `store.subscribe()`。
3. 每当 `state` 改变，它会从 `store.getState()` 重新计算 `props` 并更新组件。
4. 它通过 Context 拿到 store，和 Hook 原理类似。

---

## 🔄 Redux 如何触发更新？

流程图如下：

```
UI 触发事件
   ↓
dispatch(action)
   ↓
reducer 处理 -> 返回新的 state
   ↓
store 通知所有 subscribe 的监听器
   ↓
useSelector / connect 重新获取 state
   ↓
React 重新渲染组件
```

---

## 🔍 总结：从原理角度看连接过程

| 步骤                        | 描述                                       |
| ------------------------- | ---------------------------------------- |
| `Provider`                | 使用 React Context 提供 store                |
| `useSelector` / `connect` | 从 Context 中获取 store，使用 `getState()` 获取状态 |
| 状态监听                      | 通过 `store.subscribe()` 监听变化，更新组件         |
| 状态更新                      | 使用 `dispatch()` 发送 action，更新状态后重新渲染组件    |

---
Redux 的中间件系统和异步处理机制是它的核心扩展点之一，**中间件可以让你在 `dispatch(action)` 的过程里插入逻辑**，比如日志记录、异步请求、权限校验等。

---

## ✅ 一、Redux 中间件的核心原理

Redux 中间件本质上是对 `dispatch` 函数的「增强」，**它是一个函数链**，形如：

```ts
const middleware = store => next => action => {
  // 在这里做点事情（比如异步处理、打印日志）
  return next(action); // 向后传递 action
};
```

整个中间件的执行流程类似于一个“洋葱模型”：

```txt
dispatch -> middleware1 -> middleware2 -> middleware3 -> reducer
```

---

### 🌰 举个栗子：日志中间件

```ts
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);  // 调用下一个中间件
  console.log('next state', store.getState());
  return result;
};
```

---

## 🛠️ 二、Redux 中如何应用中间件？

使用 `applyMiddleware`：

```ts
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
```

`applyMiddleware` 会重写 store 的 `dispatch` 函数，把中间件链串起来。

---

## 🔄 三、异步处理的中间件 —— `redux-thunk`

默认情况下，Redux 只支持 **同步 action**。如果你写的是异步的：

```ts
store.dispatch(fetchData()); // 会报错：action 不是普通对象
```

### ✔️ `redux-thunk` 中间件解决这个问题：

它允许你 dispatch 一个函数（而不是对象）：

```ts
const thunk = store => next => action => {
  if (typeof action === 'function') {
    // 如果是函数，就执行它，传入 dispatch 和 getState
    return action(store.dispatch, store.getState);
  }
  return next(action); // 否则正常向下传递
};
```

使用方式：

```ts
store.dispatch(dispatch => {
  dispatch({ type: 'loading' });
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'loaded', payload: data });
    });
});
```

> 📌 本质就是允许你 dispatch 一个函数，这个函数里你可以控制 dispatch 的时机（比如网络请求成功之后再发）

---

## 📦 四、redux-thunk、redux-saga、redux-observable 的区别

| 中间件                | 原理                  | 编码风格   | 适合场景      |
| ------------------ | ------------------- | ------ | --------- |
| `redux-thunk`      | 允许 dispatch 函数      | 简单、直观  | 小项目，异步简单  |
| `redux-saga`       | 使用 generator 函数（协程） | 类似同步代码 | 异步复杂、可控性强 |
| `redux-observable` | 使用 RxJS Observable  | 响应式编程  | 多流合并、复杂事件 |

---

## 🧠 总结一句话：

> Redux 的中间件是对 `dispatch` 的函数式封装链，异步中间件（如 `redux-thunk`）允许你派发函数，从而在函数中执行异步操作后再 `dispatch` action。

---
.`



## Redux 基础使用

### 核心概念

1. **Store**：整个应用的状态容器
2. **Action**：描述发生了什么的对象
3. **Reducer**：纯函数，根据action处理状态变更
4. **Dispatch**：触发action的方法

### 基本流程

```
视图 → 触发Action → Reducer处理 → 更新Store → 通知视图更新
```

### 代码示例

**1. 创建Action类型和Action创建函数**

```javascript
// actionTypes.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// actions.js
export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
```

**2. 创建Reducer**

```javascript
// reducer.js
import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}
```

**3. 创建Store**

```javascript
// store.js
import { createStore } from 'redux';
import todoReducer from './reducer';

const store = createStore(todoReducer);

export default store;
```

## Redux 中间件使用

### 中间件原理

中间件是位于action被dispatch和到达reducer之间的扩展点，可以：
- 拦截action
- 修改action
- 派发新的action
- 执行副作用

### 常用中间件

1. **redux-thunk**：处理异步action
2. **redux-saga**：使用Generator处理复杂异步流
3. **redux-logger**：日志记录
4. **redux-promise**：处理Promise-based action

### 自定义中间件

```javascript
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

// 应用中间件
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);
```

## Redux 异步处理

### 异步Action

普通action是同步的，异步action需要中间件支持。

### redux-thunk

**1. 安装**
```bash
npm install redux-thunk
```

**2. 配置store**
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
```

**3. 创建thunk action**
```javascript
// 同步action
const fetchPostsSuccess = posts => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts
});

// 异步thunk action
export const fetchPosts = () => async dispatch => {
  try {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_ERROR', error });
  }
};
```

### redux-saga

**1. 安装**
```bash
npm install redux-saga
```

**2. 创建saga**
```javascript
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchPostsSaga() {
  try {
    const response = yield call(fetch, '/api/posts');
    const posts = yield response.json();
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_ERROR', error });
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
}

export default rootSaga;
```

**3. 配置store**
```javascript
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
```

## React-Redux 连接组件

### connect()

```javascript
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const PostList = ({ posts, loading, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
```

### useSelector & useDispatch

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './actions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const loading = useSelector(state => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
```

## 最佳实践

1. **保持reducer纯净**：不执行副作用
2. **状态规范化**：避免嵌套过深
3. **合理使用中间件**：根据项目复杂度选择
4. **组件分离**：容器组件与展示组件分离
5. **使用Redux Toolkit**：简化Redux代码

## 常见问题

**Q: 什么时候应该使用Redux？**
A: 当应用状态复杂、多个组件需要共享状态、需要跟踪状态变化时。

**Q: 如何组织Redux代码结构？**
A: 常见方式：
- 按功能划分：`/store/posts/actions.js`, `/store/posts/reducer.js`
- Ducks模式：将相关action、reducer放在一个文件

**Q: Redux性能优化？**
A:
- 使用reselect创建记忆化selector
- 避免不必要的渲染，使用React.memo
- 合理设计state结构，避免深层嵌套

**Q: Redux DevTools如何使用？**
A:
1. 安装浏览器扩展
2. 配置store：
```javascript
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
```