# MobX 使用完全指南

## 目录
- [MobX 使用完全指南](#mobx-使用完全指南)
  - [目录](#目录)
  - [MobX 核心概念](#mobx-核心概念)
    - [Observable State (可观察状态)](#observable-state-可观察状态)
    - [Actions (动作)](#actions-动作)
    - [Computed Values (计算值)](#computed-values-计算值)
    - [Reactions (反应)](#reactions-反应)
  - [基础使用](#基础使用)
    - [安装配置](#安装配置)
    - [创建Store](#创建store)
    - [React组件中使用](#react组件中使用)
  - [高级特性](#高级特性)
    - [异步操作处理](#异步操作处理)
    - [自动事务处理](#自动事务处理)
    - [自定义反应](#自定义反应)
    - [本地状态管理](#本地状态管理)
  - [最佳实践](#最佳实践)
    - [项目结构组织](#项目结构组织)
    - [性能优化](#性能优化)
    - [调试技巧](#调试技巧)
  - [MobX与React集成](#mobx与react集成)
    - [observer高阶组件](#observer高阶组件)
    - [useObserver Hook](#useobserver-hook)
    - [React Context整合](#react-context整合)
  - [MobX状态树](#mobx状态树)
  - [与其他状态库对比](#与其他状态库对比)
  - [常见问题解答](#常见问题解答)

## MobX 核心概念

### Observable State (可观察状态)

MobX 的核心是可观察状态。任何 JavaScript 数据结构（对象、数组、类实例）都可以被转换为可观察的：

```javascript
import { observable } from "mobx";

const store = observable({
  count: 0,
  todos: [],
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
});
```

### Actions (动作)

动作是修改状态的方法，使用 `action` 包装：

```javascript
import { observable, action } from "mobx";

class TodoStore {
  @observable todos = [];
  
  @action
  addTodo(text) {
    this.todos.push({ text, completed: false });
  }
  
  @action.bound // 自动绑定this
  toggleTodo(index) {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
  }
}
```

### Computed Values (计算值)

基于现有状态派生的值，会自动缓存：

```javascript
import { computed } from "mobx";

class TodoStore {
  @observable todos = [];
  
  @computed
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
  
  @computed
  get progress() {
    return this.completedCount / this.todos.length * 100;
  }
}
```

### Reactions (反应)

自动响应状态变化的副作用：

```javascript
import { autorun, reaction, when } from "mobx";

// 自动运行
const disposer = autorun(() => {
  console.log(`Progress: ${store.progress}%`);
});

// 条件反应
when(
  () => store.todos.length > 0,
  () => console.log("Todos loaded!")
);

// 精细控制
reaction(
  () => store.todos.map(todo => todo.completed),
  completions => console.log("Completion changes:", completions)
);
```

## 基础使用

### 安装配置

```bash
npm install mobx mobx-react
# 或
yarn add mobx mobx-react
```

对于装饰器语法支持，需要配置 Babel：

```bash
npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```

`.babelrc` 配置：
```json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```

### 创建Store

**ES6类+装饰器写法**：
```javascript
import { observable, action, computed } from "mobx";

class TodoStore {
  @observable todos = [];
  @observable filter = "all";
  
  @action
  addTodo = (text) => {
    this.todos.push({ id: Date.now(), text, completed: false });
  };
  
  @action
  toggleTodo = (id) => {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  };
  
  @computed
  get filteredTodos() {
    switch (this.filter) {
      case "completed":
        return this.todos.filter(t => t.completed);
      case "active":
        return this.todos.filter(t => !t.completed);
      default:
        return this.todos;
    }
  }
}

export default new TodoStore();
```

**函数式写法**：
```javascript
import { observable, action, computed } from "mobx";

const todoStore = observable({
  todos: [],
  filter: "all",
  
  addTodo: action(function(text) {
    this.todos.push({ id: Date.now(), text, completed: false });
  }),
  
  toggleTodo: action(function(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }),
  
  get filteredTodos() {
    switch (this.filter) {
      case "completed":
        return this.todos.filter(t => t.completed);
      case "active":
        return this.todos.filter(t => !t.completed);
      default:
        return this.todos;
    }
  }
}, {
  toggleTodo: action.bound // 自动绑定this
});

export default todoStore;
```

### React组件中使用

**类组件**：
```javascript
import React from "react";
import { observer } from "mobx-react";
import todoStore from "./TodoStore";

@observer
class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {todoStore.filteredTodos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoStore.toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          ))}
        </ul>
        <button onClick={() => todoStore.addTodo("New Task")}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default TodoList;
```

**函数组件**：
```javascript
import React from "react";
import { observer } from "mobx-react";
import todoStore from "./TodoStore";

const TodoList = observer(() => {
  const [input, setInput] = React.useState("");
  
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => {
        todoStore.addTodo(input);
        setInput("");
      }}>
        Add Todo
      </button>
      
      <ul>
        {todoStore.filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => todoStore.toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
```

## 高级特性

### 异步操作处理

**使用runInAction**：
```javascript
import { observable, action, runInAction } from "mobx";

class UserStore {
  @observable users = [];
  @observable state = "pending"; // "pending", "done", "error"
  
  @action
  async fetchUsers() {
    this.users = [];
    this.state = "pending";
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      
      // 需要在action中修改状态
      runInAction(() => {
        this.users = data;
        this.state = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}
```

**使用flow**（更适合Generator函数）：
```javascript
import { observable, action, flow } from "mobx";

class UserStore {
  @observable users = [];
  @observable state = "pending";
  
  fetchUsers = flow(function* () {
    this.users = [];
    this.state = "pending";
    try {
      const response = yield fetch("/api/users");
      const data = yield response.json();
      this.users = data;
      this.state = "done";
    } catch (error) {
      this.state = "error";
    }
  });
}
```

### 自动事务处理

MobX 会自动将同一事件循环中的多个状态变更合并为单个事务：

```javascript
import { observable, action } from "mobx";

class BatchExample {
  @observable a = 0;
  @observable b = 0;
  
  @action
  updateBoth() {
    this.a++; // 不会触发反应
    this.b++; // 不会触发反应
    // 方法结束后会触发一次反应
  }
}
```

### 自定义反应

**autorun**：
```javascript
import { autorun } from "mobx";

const disposer = autorun(() => {
  console.log(`Total todos: ${todoStore.todos.length}`);
});

// 停止监听
disposer();
```

**reaction**：
```javascript
import { reaction } from "mobx";

// 当todos.length变化时执行
reaction(
  () => todoStore.todos.length,
  (length, prevLength) => {
    console.log(`Todo count changed from ${prevLength} to ${length}`);
  }
);
```

**when**：
```javascript
import { when } from "mobx";

// 当有完成的任务时执行一次
when(
  () => todoStore.todos.some(todo => todo.completed),
  () => {
    console.log("At least one todo is completed!");
  }
);
```

### 本地状态管理

MobX 也可以用于组件本地状态：

```javascript
import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

const TodoItem = observer(({ todo }) => {
  const state = observable({
    editing: false,
    editText: todo.text,
    
    startEditing: action(function() {
      this.editing = true;
      this.editText = todo.text;
    }),
    
    saveEdit: action(function() {
      todo.text = this.editText;
      this.editing = false;
    })
  });
  
  return state.editing ? (
    <input
      value={state.editText}
      onChange={(e) => (state.editText = e.target.value)}
      onBlur={state.saveEdit}
    />
  ) : (
    <span onClick={state.startEditing}>{todo.text}</span>
  );
});
```

## 最佳实践

### 项目结构组织

推荐的项目结构：

```
src/
  stores/
    TodoStore.js      # 单个store
    UserStore.js
    RootStore.js     # 组合多个store
    index.js        # 导出所有store
  components/
    TodoList/
      index.js
      TodoItem.js
  views/
    TodoPage.js
    UserPage.js
```

**RootStore.js** 示例：
```javascript
import TodoStore from "./TodoStore";
import UserStore from "./UserStore";

class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.userStore = new UserStore(this);
  }
}

export default RootStore;
```

### 性能优化

1. **细粒度组件**：
```javascript
// 不好 - 整个列表会在单个todo变化时重新渲染
@observer
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {store.todos.map(todo => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    );
  }
}

// 好 - 只有变化的TodoItem会重新渲染
@observer
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {store.todos.map(todo => (
          <Observer>
            {() => <TodoItem todo={todo} />}
          </Observer>
        ))}
      </ul>
    );
  }
}
```

2. **避免在render中创建新对象**：
```javascript
// 不好 - 每次渲染都会创建新对象
@observer
class UserProfile extends React.Component {
  render() {
    const userData = {
      name: store.user.name,
      age: store.user.age
    };
    return <Profile data={userData} />;
  }
}

// 好 - 使用computed
class UserStore {
  @computed
  get profileData() {
    return {
      name: this.name,
      age: this.age
    };
  }
}
```

### 调试技巧

1. **启用严格模式**：
```javascript
import { configure } from "mobx";

configure({
  enforceActions: "observed", // 强制所有状态修改都通过action
  computedRequiresReaction: true, // 禁止在action/reaction外访问计算属性
  reactionRequiresObservable: true, // 禁止创建不观察任何东西的reaction
  observableRequiresReaction: false, // 禁止在action/reaction外修改observable
  disableErrorBoundaries: false // 不捕获异常，方便调试
});
```

2. **使用mobx-react-devtools**：
```bash
npm install mobx-react-devtools
```

```javascript
import DevTools from "mobx-react-devtools";

function App() {
  return (
    <div>
      <DevTools />
      {/* 应用其他内容 */}
    </div>
  );
}
```

## MobX与React集成

### observer高阶组件

`observer` 是 MobX 与 React 集成的核心：

```javascript
import { observer } from "mobx-react";

// 类组件
@observer
class Timer extends React.Component {
  @observable seconds = 0;
  
  componentDidMount() {
    this.interval = setInterval(() => this.seconds++, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return <span>Seconds: {this.seconds}</span>;
  }
}

// 函数组件
const Timer = observer(() => {
  const [seconds] = React.useState(() => observable.box(0));
  
  React.useEffect(() => {
    const interval = setInterval(() => seconds.set(seconds.get() + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  
  return <span>Seconds: {seconds.get()}</span>;
});
```

### useObserver Hook

`useObserver` 提供更灵活的观察方式：

```javascript
import { useObserver } from "mobx-react";

function TodoItem({ todo }) {
  return useObserver(() => (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => (todo.completed = !todo.completed)}
      />
      {todo.text}
    </li>
  ));
}
```

### React Context整合

将 MobX store 通过 Context 提供：

```javascript
import React from "react";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

const rootStore = new RootStore();

function App() {
  return (
    <Provider {...rootStore}>
      <TodoPage />
      <UserPage />
    </Provider>
  );
}

// 在组件中获取store
import { inject, observer } from "mobx-react";

const TodoList = inject("todoStore")(
  observer(({ todoStore }) => {
    return <div>{/* 使用todoStore */}</div>;
  })
);
```

## MobX状态树

MobX-State-Tree (MST) 是建立在 MobX 之上的状态容器系统：

```javascript
import { types } from "mobx-state-tree";

const Todo = types.model("Todo", {
  id: types.identifier,
  text: types.string,
  completed: false
}).actions(self => ({
  toggle() {
    self.completed = !self.completed;
  }
}));

const TodoStore = types.model("TodoStore", {
  todos: types.array(Todo)
}).actions(self => ({
  addTodo(text) {
    self.todos.push({ id: Date.now().toString(), text });
  }
}));

const store = TodoStore.create({
  todos: []
});
```

MST 提供：
- 运行时类型检查
- 状态快照
- 时间旅行调试
- 数据序列化

## 与其他状态库对比

| 特性          | MobX            | Redux         | Recoil        | Context API   |
|---------------|-----------------|---------------|---------------|---------------|
| 学习曲线      | 中等            | 高            | 中            | 低            |
| 样板代码      | 少              | 多            | 中            | 少            |
| 状态更新方式  | 自动响应式      | 显式dispatch  | 原子更新      | 手动触发      |
| 异步处理      | 内置支持        | 需中间件      | 内置支持      | 需手动处理    |
| 适用规模      | 小到大型        | 大型          | 中到大型      | 小型          |
| 调试工具      | 优秀            | 优秀          | 有限          | 有限          |

## 常见问题解答

**Q: MobX 如何处理不可变数据？**

A: MobX 使用可变数据，但通过透明的响应式系统保证一致性。对于需要不可变数据的场景（如React.memo），可以使用 `mobx-utils` 中的 `toJS` 或 `getSnapshot`。

**Q: 如何避免过度渲染？**

A: 遵循以下原则：
1. 使用细粒度组件
2. 避免在父组件中解构observable
3. 使用 `Observer` 组件包裹最小部分
4. 对列表项使用单独的 `observer` 组件

**Q: MobX 适合大型团队项目吗？**

A: 是的，但需要：
1. 明确的store组织规范
2. 严格的action使用规则
3. 类型系统(TypeScript)支持
4. 代码审查确保最佳实践

**Q: 如何测试MobX store？**

A: 测试策略：
```javascript
import TodoStore from "./TodoStore";

test("addTodo adds new todo", () => {
  const store = new TodoStore();
  store.addTodo("Test MobX");
  expect(store.todos.length).toBe(1);
  expect(store.todos[0].text).toBe("Test MobX");
});

test("computed values update", () => {
  const store = new TodoStore();
  store.addTodo("Task 1");
  store.addTodo("Task 2");
  store.todos[0].completed = true;
  expect(store.completedCount).toBe(1);
});
```

**Q: 如何与React Router集成？**

A: 创建路由相关的store：
```javascript
import { observable, action } from "mobx";
import { createBrowserHistory } from "history";

class RouterStore {
  history = createBrowserHistory();
  @observable location = this.history.location;
  
  constructor() {
    this.history.listen(this.updateLocation);
  }
  
  @action.bound
  updateLocation(location) {
    this.location = location;
  }
  
  push = (path) => this.history.push(path);
}

export default RouterStore;
```

然后在组件中使用：
```javascript
@inject("routerStore")
@observer
class Link extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.routerStore.push(this.props.to);
  };
  
  render() {
    return (
      <a href={this.props.to} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
```