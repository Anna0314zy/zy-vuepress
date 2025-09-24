---
title: qiankun
tags:
  - 微前端
---
---

## 🏗 整体架构

1. **主应用 (基座应用)**

   * 负责路由控制、子应用加载/卸载、公共依赖管理。
   * 通过 qiankun 注册子应用，监听路由变化决定加载哪个子应用。

2. **子应用**

   * 每个子应用本质上还是一个独立的 SPA（Vue、React、Angular 都可以）。
   * 打包时必须暴露三个生命周期：`bootstrap`、`mount`、`unmount`，供 qiankun 调用。

---

## 🔑 核心原理

### 1. **路由劫持**

qiankun 需要知道**什么时候切换子应用**。

* 内部会**重写 `history.pushState` 和 `replaceState`**，并监听 `popstate`、`hashchange` 事件。
* 当路由变化时，对比注册的规则（`activeRule`），决定加载/卸载哪个子应用。

👉 类似于 React Router 监听 URL 的原理，但 qiankun 是在框架层做的。

---

### 2. **子应用加载**

子应用并不是预先打包到主应用里，而是运行时按需加载：

* 主应用通过 `fetch` 拉取子应用的 `entry`（通常是一个 `index.html`）。
* 解析 HTML，提取出 **JS、CSS**。
* 把子应用的资源插入到 DOM 中。

qiankun 做了一层 **import-html-entry**：

* 处理 `<script>`、`<link>` 标签，保证子应用能独立运行。
* 资源加载支持**缓存、预加载**，提升性能。

---

### 3. **JS 隔离（沙箱机制）**

防止子应用之间全局变量污染。
qiankun 提供了几种沙箱实现：

* **快照沙箱**（SnapshotSandbox）：

  * 激活子应用前，保存 `window` 上的全局变量快照；
  * 卸载时恢复快照。
  * 缺点：性能差（大对象复制）。

* **Proxy 沙箱**（默认，现代浏览器支持）：

  * 用 `Proxy(window)` 创建一个代理对象，让子应用的全局访问都指向这个代理。
  * 这样子应用里的 `window.xxx = ...` 不会污染主应用。

* **LegacySandbox**：兼容性方案，专门给 IE 用的。

---

### 4. **CSS 隔离**

* **样式作用域隔离**：qiankun 会给子应用根节点加一个特定的 `container`，样式不会溢出。
* **样式沙箱**：可选，使用 `shadow DOM` 或 `CSS Scoped` 的方式进一步隔离。
* **样式隔离插件**：通过动态样式表（`styleLoader`）管理，子应用卸载时自动清理。

---

### 5. **应用通信**

qiankun 提供了一个 `initGlobalState` 方法，主/子应用之间可以共享状态。

```ts
// 主应用
const actions = initGlobalState({ user: 'Tom' });
actions.onGlobalStateChange((state, prev) => { ... });
actions.setGlobalState({ user: 'Jerry' });

// 子应用
import { MicroAppStateActions } from 'qiankun';
let actions: MicroAppStateActions;
export function mount(props) {
  actions = props.actions;
  actions.onGlobalStateChange((state) => console.log(state));
}
```

原理很简单：就是一个全局的事件中心（发布订阅模式）。

---

### 6. **生命周期管理**

每个子应用必须导出：

```js
export async function bootstrap() {}
export async function mount(props) {}
export async function unmount(props) {}
```

qiankun 在合适的时机调用这些钩子：

* **bootstrap**：第一次加载子应用时调用（只调用一次）。
* **mount**：每次进入子应用路由时调用。
* **unmount**：离开子应用时调用。

---

## 🧩 总结流程

1. 主应用注册子应用（配置 `name`, `entry`, `container`, `activeRule`）。
2. qiankun 劫持路由，匹配到子应用 → fetch 资源。
3. 解析子应用 HTML，注入 JS、CSS。
4. JS 运行在沙箱里，CSS 作用域隔离。
5. 调用子应用的 `bootstrap` → `mount`。
6. 切换路由时，调用 `unmount`，卸载子应用。

---

## 🚀 关键价值

* **技术栈无关**：React、Vue、Angular 子应用可共存。
* **运行时加载**：子应用独立部署、按需加载。
* **隔离**：JS、CSS 隔离，避免互相污染。
* **通信**：提供简单的全局状态共享。

