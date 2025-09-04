当然可以！我可以帮你写一个 **简化版
** 的实现，包含：

* 路由匹配
* 嵌套路由
* `<Outlet />` 渲染
* `<Link />` 跳转

> 注意：这是教学版，不包含完整功能（如动态路由、懒加载、守卫等），只是核心原理演示。

---

## 1️⃣ 路由上下文

```tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Route {
  path: string;
  element: React.ReactNode;
  children?: Route[];
}

interface RouterContextProps {
  location: string;
  navigate: (to: string) => void;
  routes: Route[];
}

const RouterContext = createContext<RouterContextProps | null>(null);

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used inside Router');
  return context;
};
```

---

## 2️⃣ Router 组件

```tsx
export const Router: React.FC<{ routes: Route[] }> = ({ routes }) => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setLocation(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, '', to);
    setLocation(to);
  };

  return (
    <RouterContext.Provider value={{ location, navigate, routes }}>
      <OutletContextProvider />
    </RouterContext.Provider>
  );
};
```

---

## 3️⃣ 路由匹配

```tsx
const matchRoute = (routes: Route[], pathname: string): Route | null => {
  for (const route of routes) {
    if (route.path === pathname) return route;
    if (route.children) {
      const childMatch = matchRoute(route.children, pathname);
      if (childMatch) return childMatch;
    }
  }
  return null;
};
```

---

## 4️⃣ Outlet Context & useOutlet

```tsx
const OutletContext = createContext<React.ReactNode | null>(null);

const OutletContextProvider: React.FC = () => {
  const { location, routes } = useRouter();
  const matchedRoute = matchRoute(routes, location);

  return (
    <OutletContext.Provider value={matchedRoute?.children?.[0]?.element || null}>
      {matchedRoute?.element}
    </OutletContext.Provider>
  );
};

export const Outlet = () => {
  const outlet = useContext(OutletContext);
  return <>{outlet}</>;
};

export const useOutlet = () => useContext(OutletContext);
```

---

## 5️⃣ Link 组件

```tsx
export const Link: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};
```

---

## 6️⃣ 使用示例

```tsx
const Home = () => <div>Home</div>;
const Dashboard = () => (
  <div>
    Dashboard
    <Outlet />
  </div>
);
const Analytics = () => <div>Analytics</div>;

const routes: Route[] = [
  { path: '/', element: <Home /> },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [{ path: '/dashboard/analytics', element: <Analytics /> }],
  },
];

export default function App() {
  return (
    <Router routes={routes}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to="/dashboard/analytics">Analytics</Link>
      </nav>
    </Router>
  );
}
```

---

✅ 特点

1. 通过 `RouterContext` 保存当前路径和路由表。
2. `OutletContext` 实现嵌套路由渲染。
3. `<Link />` 改变 `history` 并触发渲染。
4. `useOutlet()` 可以在父组件中拿到子路由组件。

