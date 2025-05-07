# React Query 全面指南

## 1. React Query 介绍

React Query 是一个基于 Hooks 的 React 数据获取库，它能够智能管理请求的一切内容，包括数据、状态、缓存和更新等。

### 主要功能
- **请求管理**：封装了 axios 等请求库，实现请求、轮询、失败重试、无限加载等功能
- **状态同步**：在网络重连、窗口获得焦点等时机自动同步服务器状态
- **状态管理**：将服务器端状态缓存在客户端内存中，使任意组件都能获取这些状态

[官方文档](https://react-query.tanstack.com/overview) | [对比其他方案](https://react-query.tanstack.com/comparison)

## 2. 安装

```bash
npm install react-query axios --save
npm install express cors morgan --save
```

## 3. 基本查询

### 3.1 初始化配置

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

### 3.2 使用 useQuery

```jsx
import { useQuery } from 'react-query';
import request from './request';

function App() {
  const { data } = useQuery('users', () => request.get('/users'))
  return (
    <ul>
      {data?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
```

## 4. 加载状态

### 状态属性
| 字段       | 含义             | 取值                     |
|------------|------------------|--------------------------|
| status     | 请求状态         | loading, error, success  |
| isLoading  | 是否首次加载中   | true, false              |
| isError    | 是否获取失败     | true, false              |
| isSuccess  | 是否获取成功     | true, false              |

### 示例
```jsx
const { data, isLoading, isError } = useQuery('users', () => {
  throw new Error('用户列表加载失败!');
  return request.get('/users');
})

if (isLoading) return <div>加载中.......</div>
if (isError) return <div>加载失败</div>
```

## 5. 开发工具

React Query 提供了专用的开发工具：

```jsx
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
    <>
      <Users />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  )
}
```

## 6. 窗口焦点重新获取

```jsx
const { isFetching } = useQuery('users', () => request.get('/users'), {
  refetchOnWindowFocus: true
})

{isFetching && <div>正在更新数据...</div>}
```

## 7. 数据保鲜时间 (staleTime)

```jsx
useQuery('users', () => request.get('/users'), {
  staleTime: 3000 // 3秒内数据不会重新获取
})
```

## 8. 缓存时间 (cacheTime)

```jsx
useQuery('users', () => request.get('/users'), {
  cacheTime: 5000 // 5秒后未使用的缓存将被垃圾回收
})
```

## 9. 轮询

```jsx
useQuery('users', () => request.get('/users'), {
  refetchInterval: 1000 // 每1秒轮询一次
})
```

## 10. 查询键去重

相同查询键的多个 useQuery 会自动去重，只发送一个请求。

## 11. 自定义 Hooks

```jsx
function useUsers() {
  return useQuery('users', () => request.get('/users'));
}

function Stats() {
  const { data } = useUsers();
  return data && <h1>共计{data.length}用户</h1>
}
```

## 12. QueryObserver

在任意组件中订阅状态：

```jsx
const [data, setData] = useState();
const queryClient = useQueryClient();

useEffect(() => {
  const observer = new QueryObserver(queryClient, { queryKey: 'users' })
  const unsubscribe = observer.subscribe(result => setData(result.data))
  return unsubscribe;
}, []);
```

## 13. 组合缓存键

```jsx
useQuery(['user', userId], () => request.get('/user', {
  params: { userId }
}))
```

## 14. 启用查询 (enabled)

```jsx
useQuery(['user', userId], () => request.get('/user'), {
  enabled: !!userId // 只有userId存在时才发送请求
})
```

## 15. 重试机制

```jsx
useQuery(['user', userId], () => request.get('/user'), {
  retry: 3, // 失败时重试3次
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
})
```

## 16. 取消请求

```jsx
const promise = request.get('/user', {
  params: { userId }, 
  cancelToken: source.token
}).catch(error => {
  if (request.isCancel(error)) {
    console.log(error.message);
  }
});
promise.cancel = () => source.cancel('请求被React Query取消');
```

## 17. 依赖查询

```jsx
const userResult = useQuery(['user', userId], () => request.get('/user'));
const postsResult = useQuery(['posts', userResult.data?.id], 
  () => request.get(`/posts`, { params: { userId: userResult.data?.id } }), {
    enabled: !!(userResult.data?.id)
  });
```

## 18. 初始化数据

```jsx
useQuery(['user', userId], () => request.get('/user'), {
  initialData: initialUser,
  initialStale: false,
  staleTime: 5000
})
```

## 19. 并发查询

```jsx
const [usersQuery, postsQuery] = useQueries([
  { queryKey: ['users'], queryFn: () => request.get('/users') },
  { queryKey: ['posts'], queryFn: () => request.get(`/posts`) }
]);
```

## 20. 列表和详情

```jsx
function Users({ setUserId }) {
  const usersResult = useQuery('users', () => request.get('/users'));
  // ...
}

function User({ userId, setUserId }) {
  const userResult = useQuery(['user', userId], () => request.get('/user'));
  // ...
}
```

## 21. 读取查询缓存

```jsx
const queryClient = useQueryClient();
const userResult = useQuery(['user', userId], () => request.get('/user'), {
  initialData: () => queryClient.getQueryData('users')?.find(user => user.id === userId)
});
```

## 22. 预缓存

```jsx
const usersResult = useQuery('users', async () => {
  const users = await request.get('/users');
  users.forEach(user => {
    queryClient.setQueryData(['user', user.id], user);
  });
  return users;
});
```

## 23. 副作用

```jsx
useQuery('users', () => request.get('/users'), {
  onSuccess(data) {
    toast("查询成功!")
  },
  onError(error) {
    toast("查询失败!")
  },
  onSettled(data, error) {
    console.log('查询结束');
  }
});
```

## 24. 预查询

```jsx
useEffect(() => {
  queryClient.prefetchQuery('users', fetchUsers, { staleTime: 5000 });
})
```

## 25. 变更操作 (useMutation)

```jsx
const { mutate, isLoading, isError, isSuccess } = useMutation(
  (values) => request.post('/users', values), {
  onSuccess() {
    queryClient.invalidateQueries('users');
  },
  onError(error) {
    alert(error.response.data.message);
  }
});

const handleSubmit = (event) => {
  event.preventDefault();
  mutate({ name: nameRef.current.value });
}
```

## 26. 乐观更新

```jsx
useMutation((values) => request.post('/users', values), {
  onMutate(values) {
    queryClient.setQueryData('users', old => [...old, { ...values, id: String(Date.now()) }]);
  },
  onError(error, values, rollback) {
    rollback && rollback();
  },
  onSettled() {
    queryClient.invalidateQueries('users');
  }
});
```

## 27. 分页查询

```jsx
const [pageNumber, setPageNumber] = useState(1);
const usersResult = useQuery(['users', { pageNumber }], fetchUsers, {
  onSuccess() {
    queryClient.prefetchQuery(['users', { pageNumber: pageNumber + 1 }], fetchUsers);
  }
});
```

## 28. 无限分页

```jsx
const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(['users'], fetchUsers, {
  getNextPageParam: (lastPageData) => {
    return lastPageData.pageNumber < lastPageData.totalPage ? lastPageData.pageNumber + 1 : false;
  }
});
```

React Query 提供了强大的数据管理能力，可以显著简化 React 应用中的数据获取和状态管理逻辑。通过合理使用其各种功能，可以构建出高性能、用户体验良好的应用程序。


# [github 地址](https://gitee.com/fjianzhou/zhufeng-react-query-2022.git)