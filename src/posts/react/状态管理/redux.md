# Redux 使用指南：基础使用、中间件与异步处理

## 目录
- [Redux 使用指南：基础使用、中间件与异步处理](#redux-使用指南基础使用中间件与异步处理)
  - [目录](#目录)
  - [Redux 基础使用](#redux-基础使用)
    - [核心概念](#核心概念)
    - [基本流程](#基本流程)
    - [代码示例](#代码示例)
  - [Redux 中间件使用](#redux-中间件使用)
    - [中间件原理](#中间件原理)
    - [常用中间件](#常用中间件)
    - [自定义中间件](#自定义中间件)
  - [Redux 异步处理](#redux-异步处理)
    - [异步Action](#异步action)
    - [redux-thunk](#redux-thunk)
    - [redux-saga](#redux-saga)
  - [React-Redux 连接组件](#react-redux-连接组件)
    - [connect()](#connect)
    - [useSelector \& useDispatch](#useselector--usedispatch)
  - [最佳实践](#最佳实践)
  - [常见问题](#常见问题)

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