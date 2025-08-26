---
title:  router v6
tags:
  - React
---



以下是 React Router 6 最主要的升级和改进：

### 一、核心概念和 API 的简化

这是最显著的变化，很多熟悉的组件和写法都被更简单的替代了。

1.  **`<Routes>` 和 `<Route>` 的重构**
    *   **v5:** `<Route>` 组件可以放在任何地方，使用 `component`、`render` 或 `children` prop 来定义渲染内容。
    *   **v6:** `<Route>` 组件**必须**作为 `<Routes>` 的子组件使用。它现在使用 `element` prop，其值直接是一个 React Element（例如 `element={<Home />}`），而不是组件名（`component={Home}`）。这使得传递 props 给元素变得非常自然。

    **v5 写法:**
    ```jsx
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" render={({ match }) => <Users match={match} />} />
    </Switch>
    ```

    **v6 写法:**
    ```jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      {/* 传递props很简单 */}
      <Route path="/about" element={<About title="About Us" />} />
    </Routes>
    ```

2.  **`<Switch>` 被 `<Routes>` 取代**
    *   **v5:** 使用 `<Switch>` 来包裹一组 `<Route>`，它只渲染第一个匹配的路由。
    *   **v6:** `<Switch>` 被功能更强大的 **`<Routes>`** 取代。`<Routes>` 会自动根据最佳匹配原则选择路由，不再需要 `exact` 属性。

3.  **移除 `exact` 属性**
    *   **v6:** 路由匹配逻辑变得“更智能”。现在所有路由默认都是匹配前缀的（像 v5 中没有 `exact` 一样），但 `<Routes>` 会自动选择最匹配的路由。这意味着你几乎不再需要关心 `exact`。

    ```jsx
    // v6: 访问 /users/123 会匹配第二个 Route，而不是两个都匹配
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserProfile />} />
    </Routes>
    ```

### 二、引入强大的新特性

1.  **相对路径和链接 (Relative Paths and Links)**
    *   在 v6 中，`<Route path>` 和 `<Link to>` 默认都是**相对**于其父路由的。这使得在大型应用中嵌套路由变得极其简单和直观，你不再需要写出完整的绝对路径。
    *   使用 `..` 和 `.` 来模拟文件系统的路径导航。

    **示例：**
    ```jsx
    // 假设在 "/users" 路由下渲染这个组件
    function Users() {
      return (
        <div>
          <h1>Users</h1>
          {/* 这个链接会指向 /users/123 （相对路径） */}
          <Link to="123">User 123</Link>
          
          {/* 这个链接会指向 / （使用 .. 返回上级） */}
          <Link to="..">Back to Home</Link>
          
          {/* 嵌套路由 */}
          <Routes>
            {/* 匹配 /users/:id */}
            <Route path=":id" element={<UserProfile />} />
          </Routes>
        </div>
      );
    }
    ```

2.  **Outlet：嵌套路由的占位符**
    *   **v6** 引入了 **`<Outlet />`** 组件。它在父路由组件中充当一个“插槽”，用于渲染其子路由匹配到的组件。这是实现嵌套布局的核心。

    ```jsx
    // App.js
    function App() {
      return (
        <Routes>
          <Route path="/users" element={<UsersLayout />}>
            {/* 嵌套的子路由 */}
            <Route index element={<UserList />} /> {/* index 路由，匹配 /users */}
            <Route path=":id" element={<UserProfile />} /> {/* 匹配 /users/:id */}
          </Route>
        </Routes>
      );
    }

    // UsersLayout.js
    function UsersLayout() {
      return (
        <div>
          <h1>Users Layout</h1>
          <nav>...</nav>
          {/* 子路由（UserList 或 UserProfile）将在这里渲染 */}
          <Outlet />
        </div>
      );
    }
    ```

3.  **`useNavigate` 取代 `useHistory`**
    *   **v5:** 使用 `useHistory` hook 来获取 `history` 对象，然后调用 `history.push(‘/path‘)` 或 `history.goBack()`。
    *   **v6:** 使用 **`useNavigate`** hook。它返回一个 `navigate` 函数，用法更简洁。

    ```jsx
    // v5
    const history = useHistory();
    history.push('/users');
    history.replace('/login');
    history.go(-1);

    // v6
    const navigate = useNavigate();
    navigate('/users');        // 相当于 history.push
    navigate('/login', { replace: true }); // 相当于 history.replace
    navigate(-1);              // 相当于 history.go(-1) 或 history.goBack()
    ```

4.  **`useRoutes` 取代 `react-router-config`（基于对象的路由）**
    *   v6 将基于 JavaScript 对象（而不是 JSX）配置路由的功能直接集成到了核心库中。你可以使用 `useRoutes` Hook 来定义你的路由结构，这对于从配置文件中生成路由非常有用。

    ```jsx
    // 使用 JSX
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<Users />} />
    </Routes>

    // 使用 useRoutes (功能完全相同)
    const element = useRoutes([
      { path: '/', element: <Home /> },
      { path: 'users', element: <Users /> },
    ]);
    return element;
    ```

5.  **更好的 Suspense 支持**
    *   v6 的 API 设计（特别是 `element` prop）能更好地与 React 的 `Suspense` 和并发特性（Concurrent Features）配合使用。

    ```jsx
    <Route
      path="about"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      }
    />
    ```

### 三、其他改进和优化

*   **自动路径排名 (Automatic Ranking):** `<Routes>` 内部有一套算法，能自动确定哪些路由是最佳匹配，你不需要再手动调整顺序或添加 `exact`。
*   **`useSearchParams`:** 新增的 Hook，用于读取和操作 URL 的查询字符串（`?key=value`），它是 `useState` 和 URL Search API 的结合，非常方便。
*   **大小优化:** 最终的包体积比 v5 更小。

### 升级注意事项（挑战）

*   **破坏性变更 (Breaking Changes):** 这是一次重写，几乎所有代码都需要修改。
*   **学习新概念:** 必须理解相对路由、`<Outlet>` 和新的 `element` prop。
*   **移除的特性:** 一些不常用的特性被移除，例如 `Redirect` 组件（被 `Navigate` 组件取代）和自定义的 `Route` 渲染方法。

### 总结

React Router 6 是一次面向未来的升级。它通过**简化 API**（`element` prop，移除 `exact`）、**引入强大的新模式**（相对路由、`<Outlet>`）和**拥抱现代 React 特性**（Hooks, Suspense），使得构建复杂且具有嵌套布局的单页应用变得更加直观和高效。虽然迁移有一定成本，但其带来的开发体验和代码维护性的提升是非常显著的。