---
title: React发展
date: 2025-04-11
tags:
   - react
---

以下是对 React 16、18 和 19 版本的主要特性和 API 变更的详细总结，现已补充了 `useEffectEvent` 的相关内容：

---

## React 16（2017 年）

### 1. Fiber 架构

引入全新的 Fiber 架构，提升了渲染性能，为后续的异步渲染和并发模式奠定了基础。

### 2. 错误边界

新增 `componentDidCatch` 生命周期方法，使组件能够捕获并处理其子组件中的 JavaScript 错误，增强了应用的稳定性。

### 3. Portals（传送门）

允许将子节点渲染到 DOM 的不同位置，便于实现模态框等 UI 组件。

### 4. 新的生命周期方法

引入了 `getDerivedStateFromProps` 和 `getSnapshotBeforeUpdate`，并弃用了 `componentWillMount`、`componentWillReceiveProps` 和 `componentWillUpdate`。

---

## React 18（2022 年）

### 1. 并发模式（Concurrent Mode）

通过 `createRoot` API 启用，允许 React 更灵活地中断和恢复渲染任务，提高了响应速度。

### 2. 自动批处理（Automatic Batching）

扩展了状态更新的批处理范围，包括异步操作中的更新，减少了不必要的重新渲染。

### 3. `useTransition` 和 `startTransition`

提供了更细粒度的更新控制，允许将非紧急更新标记为可中断，提高了界面的响应性。

### 4. `useDeferredValue`

用于延迟更新非紧急的值，避免在高频率更新时阻塞用户输入。

### 5. `useId`

生成稳定的唯一 ID，解决了服务端和客户端渲染不一致的问题。

---

## React 19（2024 年）

### 1. Actions API

引入了 `useActionState` 和 `useOptimistic` 钩子，简化了异步操作和表单处理，支持乐观 UI 更新。

### 2. 服务器组件（Server Components）

支持在服务器上渲染组件，减少了客户端的负担，提高了性能。

### 3. `ref` 作为属性

函数组件可以直接接收 `ref` 属性，无需使用 `forwardRef`，简化了组件的封装。

### 4. 文档元数据支持

可以在组件中直接使用 `<title>`、`<meta>` 等标签，提升了 SEO 和可访问性。

### 5. 资源预加载 API

提供了 `preload`、`preconnect`、`preinit` 等 API，优化了资源的加载顺序和性能。

### 6. 自定义元素支持

全面支持 Web Components，改善了与其他框架和库的集成能力。

### 7. 实验性 API：`useEffectEvent`

`useEffectEvent` 是 React 实验性版本中引入的一个 Hook，旨在解决副作用函数中闭包导致的状态不一致问题。它允许您在副作用中使用始终引用最新状态和 props 的函数，避免因依赖项变化而频繁重新创建函数。

**使用方法：**

要使用 `useEffectEvent`，您需要从 React 的实验性版本中导入：

```jsx
import { useEffect, experimental_useEffectEvent as useEffectEvent } from 'react';
```



**示例：**

以下是一个使用 `useEffectEvent` 的示例：

```jsx
function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
}
```



在这个示例中，`onConnected` 是通过 `useEffectEvent` 创建的函数，它始终引用最新的 `theme` 值，即使 `theme` 发生变化，也无需重新创建 `onConnected` 函数。

**注意事项：**

- `useEffectEvent` 是实验性 API，仅在 React 的实验版本中可用。
- 要使用它，您需要安装以下实验性版本的包：

  ```bash
  npm install react@experimental react-dom@experimental
  ```



- 由于其实验性，建议仅在非生产环境中尝试使用。
- React 官方尚未决定是否将在稳定版本中引入该 API。

---

以上是 React 16、18 和 19 版本的主要特性和 API 变更的详细总结，已包含 `useEffectEvent` 的相关内容。建议在升级到新版本时，仔细阅读官方的升级指南，确保顺利过渡。 
