---
title: vue3
tags:
  - vue3
---


# **🚀 Vue 3 `effect` 实现数据监听及依赖收集（响应式原理解析）**

在 Vue 3 中，`effect()` 是 **核心的依赖收集机制**，用于 **监听 `reactive` 数据的变化，并触发副作用（比如重新渲染）**。Vue 3 通过 **Proxy + WeakMap + 依赖追踪（Dep）** 实现了响应式系统，比 Vue 2 的 `Object.defineProperty()` 更高效。

---

## **🔥 1. Vue 3 响应式 `effect()` 的作用**
📌 `effect()` 主要用于：
1. **监听 `reactive` 数据的变化**
2. **收集依赖（`track()`）**
3. **数据变更时触发副作用（`trigger()`）**

---

## **🔥 2. Vue 3 响应式流程**
Vue 3 的响应式机制包括 4 个核心部分：
| **核心模块** | **作用** |
|------------|--------|
| `reactive()` | 让数据变成响应式对象 |
| `effect()` | 监听 `reactive` 数据，执行副作用 |
| `track()` | **依赖收集**（在 `getter` 里） |
| `trigger()` | **触发更新**（在 `setter` 里） |

📌 **执行流程**
1. **初始化 `effect(fn)`** → `fn()` 运行，触发 `reactive` 数据 `getter`
2. **`getter` 里调用 `track()`** → 记录 `effect`
3. **数据更新时**，触发 `setter`
4. **`setter` 里调用 `trigger()`** → 运行 `effect()` 副作用

---

## **🔥 3. 手写 Vue 3 `effect()`**
### **✅ 3.1 `reactive()`（数据劫持）**
```javascript
const targetMap = new WeakMap(); // 存储所有 `reactive` 数据的依赖

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key); // 依赖收集
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      trigger(target, key); // 触发更新
      return result;
    }
  });
}
```
📌 **解释**
- `get()` **触发 `track()` 进行依赖收集**
- `set()` **触发 `trigger()` 更新副作用**

---

### **✅ 3.2 `effect()`（监听 `reactive` 数据）**
```javascript
let activeEffect = null;

function effect(fn) {
  const _effect = () => {
    activeEffect = _effect;  // 设置当前 effect
    fn(); // 运行 `fn`，触发 `reactive` 的 `getter`
    activeEffect = null;
  };
  _effect();
}
```
📌 **解释**
- `effect(fn)` 运行 `fn()`，触发 `reactive` 的 `getter`
- `activeEffect` 记录当前 `effect`

---

### **✅ 3.3 `track()`（依赖收集）**
```javascript
function track(target, key) {
  if (!activeEffect) return; // 没有 `effect` 就不收集
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  deps.add(activeEffect); // 绑定 effect
}
```
📌 **解释**
- **`track()` 记录 `effect` 依赖，存入 `targetMap`**
- **数据 `getter` 时，触发 `track()` 记录当前 `effect`**

---

### **✅ 3.4 `trigger()`（触发依赖更新）**
```javascript
function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) return;
  let effects = depsMap.get(key);
  if (effects) {
    effects.forEach(effect => effect()); // 运行所有依赖 `effect`
  }
}
```
📌 **解释**
- `set()` **触发 `trigger()`，通知所有 `effect` 更新**
- 遍历 `Set()` 里的 `effect`，执行副作用

---

## **🔥 4. 测试 `effect()`**
```javascript
const state = reactive({ count: 0 });

effect(() => {
  console.log(`count 变化了: ${state.count}`);
});

state.count++; // 输出: count 变化了: 1
state.count++; // 输出: count 变化了: 2
```
📌 **执行流程**
1. `effect()` 运行 `console.log(state.count)`
2. `reactive` `getter` 触发 `track()`
3. `state.count++` 触发 `trigger()`，重新执行 `effect`

---

## **🔥 5. `effect()` 依赖收集优化**
### **✅ 避免重复收集**
使用 **`Set()`** 存储 `effect`，避免重复：
```javascript
function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) targetMap.set(target, (depsMap = new Map()));
  let deps = depsMap.get(key);
  if (!deps) depsMap.set(key, (deps = new Set()));

  if (!deps.has(activeEffect)) {
    deps.add(activeEffect);
  }
}
```
📌 **作用**
- **防止 `effect` 重复收集，优化性能**

---

## **🔥 6. `computed()` 如何使用 `effect()`**
```javascript
function computed(getter) {
  let value;
  let dirty = true; // 是否需要重新计算

  const effectFn = effect(() => {
    value = getter();
    dirty = false;
  });

  return {
    get value() {
      if (dirty) {
        effectFn();
      }
      return value;
    }
  };
}
```
📌 **作用**
- 只有 `getter` 依赖的 `reactive` 数据变更时，才会重新计算 `value`

---

## **🔥 7. `watch()` 使用 `effect()`**
```javascript
function watch(source, callback) {
  effect(() => {
    const newValue = source();
    callback(newValue);
  });
}
```
```javascript
watch(() => state.count, (newVal) => {
  console.log("count 变化:", newVal);
});
state.count = 10; // 输出: count 变化: 10
```
📌 **作用**
- `watch()` 监听 `state.count` 变化，并执行 `callback()`

---

## **🎯 总结**
| **核心功能** | **作用** | **Vue 3 API** |
|-----------|--------|-------------|
| **`reactive()`** | 让数据变成响应式 | `reactive(obj)` |
| **`effect()`** | 监听 `reactive` 数据变化 | `effect(fn)` |
| **`track()`** | 依赖收集（`getter`） | Vue 内部调用 |
| **`trigger()`** | 触发 `effect` 更新 | Vue 内部调用 |
| **`computed()`** | 计算属性（懒计算） | `computed(() => val * 2)` |
| **`watch()`** | 监听 `reactive` 数据变化 | `watch(() => state.count, cb)` |

📌 **Vue 3 通过 `Proxy + WeakMap` 替代 Vue 2 `Object.defineProperty()`，提升响应式性能**。  

**🔥 你的问题是想了解 Vue 3 `effect` 原理，还是要手写 `reactive`？可以帮你优化代码！😃**