---
title: vue 懒加载
date: 2022-04-19
tags:
  - 面试题
---

## vue懒加载

Vue 的懒加载（Lazy Loading）通常用于按需加载组件或路由，以优化性能并减少初始加载时间。Vue 主要通过 **动态导入（`import()`）+ Webpack 的代码分割（Code Splitting）** 实现懒加载。以下是几种常见的实现方式：

---

## 1. **Vue 组件的懒加载**
在 Vue 组件中，可以使用 `defineAsyncComponent` 进行懒加载：

### **Vue 3**
```vue
<script setup>
import { defineAsyncComponent } from 'vue';

const LazyComponent = defineAsyncComponent(() => import('@/components/MyComponent.vue'));
</script>

<template>
  <LazyComponent />
</template>
```
**解释：**
- `defineAsyncComponent(() => import('xxx'))` 让组件在使用时才会被加载，而不是在应用初始化时就加载。
- Webpack 会自动拆分 `MyComponent.vue`，并在需要时加载该组件。

### **Vue 2**
在 Vue 2 中，直接使用 `import()`：
```vue
<template>
  <component :is="LazyComponent" />
</template>

<script>
export default {
  components: {
    LazyComponent: () => import('@/components/MyComponent.vue')
  }
};
</script>
```

---

## 2. **Vue Router 的懒加载**
在 Vue Router 中，可以对页面级组件进行懒加载：

### **Vue 3 + Vue Router 4**
```javascript
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue') // 懒加载 Home 组件
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue') // 懒加载 About 组件
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

### **Vue 2 + Vue Router 3**
```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
```
**解释：**
- `import('@/views/Home.vue')` 只有在用户访问 `/home` 时才会加载 `Home.vue`。
- Webpack 会自动拆分代码，提高初始加载速度。

---

## 3. **配合 `Suspense` 组件（Vue 3 专属）**
Vue 3 提供了 `Suspense` 组件，用于处理异步组件的加载状态：
```vue
<template>
  <Suspense>
    <template #default>
      <LazyComponent />
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const LazyComponent = defineAsyncComponent(() => import('@/components/MyComponent.vue'));
</script>
```
**解释：**
- `Suspense` 组件的 `#fallback` 插槽可用于显示加载状态。

---

## 4. **使用 Webpack 的 `Prefetch` 和 `Preload`**
Webpack 允许对懒加载的模块进行 **预加载（Preload）** 或 **预取（Prefetch）**：
```javascript
component: () => import(/* webpackPrefetch: true */ '@/views/About.vue')
```
- `webpackPrefetch: true`：浏览器空闲时预加载该组件，提高页面切换速度。
- `webpackPreload: true`：当前页面加载时立即加载该组件。

---

## 5. **图片懒加载**
可以使用 `v-lazy` 指令（如 `vue-lazyload` 插件）实现图片懒加载：
```vue
<img v-lazy="'/images/photo.jpg'" />
```
或者使用 `IntersectionObserver` 进行原生懒加载：
```vue
<template>
  <img v-if="isVisible" :src="imageUrl" />
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      imageUrl: '/images/photo.jpg'
    };
  },
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        observer.disconnect();
      }
    });
    observer.observe(this.$el);
  }
};
</script>
```

---

## **总结**
- **组件懒加载**：`defineAsyncComponent`（Vue 3）或 `import()`（Vue 2）。
- **路由懒加载**：`component: () => import('xxx')`。
- **`Suspense` 组件**（Vue 3）提供更好的异步体验。
- **Webpack 的 `Prefetch` 和 `Preload`** 提高加载效率。
- **图片懒加载** 可以用 `IntersectionObserver` 或 `vue-lazyload` 插件。

这样可以显著优化 Vue 应用的加载性能，提高用户体验！🚀