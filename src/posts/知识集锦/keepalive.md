---
title: keepAlive 实现
tags:
   - React
---
下面是一个完整的 **React + React Router v6 + KeepAlive** 的示例，实现了在多个路由页面之间切换时，页面不会被卸载，状态会被缓存保留。

---

### 🧩 项目结构

```
src/
├── App.tsx
├── KeepAlive.tsx
├── pages/
│   ├── Home.tsx
│   └── About.tsx
└── main.tsx
```

---

### 1️⃣ `KeepAlive.tsx` - 核心缓存组件

```tsx
// src/KeepAlive.tsx
import React, { useRef, useEffect, ReactNode } from 'react';

const cache = new Map<string, ReactNode>();

interface KeepAliveProps {
  cacheId: string;
  active: boolean;
  children: ReactNode;
}

const KeepAlive: React.FC<KeepAliveProps> = ({ cacheId, active, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cache.has(cacheId)) {
      cache.set(cacheId, children);
    }
  }, [cacheId, children]);

  return (
    <>
      {Array.from(cache.entries()).map(([key, node]) => (
        <div
          key={key}
          style={{ display: key === cacheId && active ? 'block' : 'none' }}
          ref={key === cacheId ? ref : undefined}
        >
          {node}
        </div>
      ))}
    </>
  );
};

export default KeepAlive;
```

---

### 2️⃣ 页面示例 `Home.tsx` 和 `About.tsx`

```tsx
// src/pages/Home.tsx
import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>点击次数: {count}</p>
      <button onClick={() => setCount(count + 1)}>点击我</button>
    </div>
  );
};

export default Home;
```

```tsx
// src/pages/About.tsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h2>📄 About Page</h2>
      <p>这里是关于页面。</p>
    </div>
  );
};

export default About;
```

---

### 3️⃣ 路由配置与缓存控制（App.tsx）

```tsx
// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import KeepAlive from './KeepAlive';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <nav style={{ marginBottom: '16px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* KeepAlive 包裹路由页面 */}
      <KeepAlive cacheId="/" active={currentPath === '/'}>
        <Home />
      </KeepAlive>

      <KeepAlive cacheId="/about" active={currentPath === '/about'}>
        <About />
      </KeepAlive>
    </div>
  );
};

export default App;
```

---

### 4️⃣ 启动入口 `main.tsx`

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

---

### ✅ 效果

- `Home` 页面状态（如点击次数）在切换到 `About` 后仍然保留。
- 两个页面都始终在内存中，通过 `display: none` 隐藏非当前页面。

---
