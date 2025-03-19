---
title: vue2
index: false
icon: laptop-code
category:
  - vue
---
### **Vue 2 双向数据绑定原理详解**  

Vue 2 采用 **数据劫持（Object.defineProperty）+ 发布-订阅模式（Dep 依赖收集）** 来实现双向数据绑定。本篇文档详细介绍 Vue 2 的 **响应式原理**，以及 `watch` 和 `computed` 是如何触发视图更新的。

---

## **🔥 1. Vue 2 的双向数据绑定原理**
### **1.1 关键点**
Vue 2 主要通过 **`Object.defineProperty()`** 来拦截对象的 `get` 和 `set` 操作，实现数据劫持。当数据发生变化时，Vue 会通知相关的**依赖（Watcher）**，触发视图更新。

### **1.2 Vue 响应式流程**
1️⃣ **`Observer`（数据劫持）**：使用 `Object.defineProperty()` 监听对象属性的 `get` 和 `set`  
2️⃣ **`Dep`（依赖收集）**：每个数据都有一个 `Dep`，负责存储 `Watcher`（订阅者）  
3️⃣ **`Watcher`（观察者）**：当数据变化时，`Watcher` 负责通知 Vue 重新渲染  
4️⃣ **`Compile`（模板编译）**：解析 Vue 模板（`{{ message }}`），建立 `Watcher`  

---

## **🔥 2. Vue 2 响应式数据劫持 (`Observer`)**
Vue 2 通过 `Object.defineProperty()` 为数据添加 `getter` 和 `setter`，实现数据劫持。

### **📌 代码实现**
```javascript
class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(obj) {
    if (!obj || typeof obj !== "object") return;
    Object.keys(obj).forEach((key) => {
      this.defineReactive(obj, key, obj[key]);
    });
  }

  defineReactive(obj, key, val) {
    const dep = new Dep(); // 每个属性对应一个 Dep 实例
    new Observer(val); // 递归监听对象

    Object.defineProperty(obj, key, {
      get() {
        if (Dep.target) {
          dep.depend(); // 依赖收集
        }
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal;
          new Observer(newVal); // 监听新值
          dep.notify(); // 通知 Watcher 更新视图
        }
      }
    });
  }
}
```
**📌 说明**
- `Observer` 遍历对象，为每个属性添加 `getter/setter`。
- `get()` 时，收集依赖（Dep 订阅 Watcher）。
- `set()` 时，通知依赖更新（Dep 触发 Watcher）。

---

## **🔥 3. 依赖收集 (`Dep`)**
Vue 通过 `Dep` **存储 Watcher，并在数据更新时通知 Watcher 重新渲染**。

### **📌 代码实现**
```javascript
class Dep {
  constructor() {
    this.subs = []; // 存储 Watcher
  }

  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target); // 收集 Watcher
    }
  }

  notify() {
    this.subs.forEach((watcher) => watcher.update()); // 触发 Watcher 更新
  }
}
Dep.target = null; // 记录当前 Watcher
```
📌 **说明**
- `subs` 用于存储 `Watcher`（订阅者）。
- `depend()` 在 `get()` 时收集依赖。
- `notify()` 在 `set()` 时触发 `Watcher` 更新。

---

## **🔥 4. 观察者 Watcher（通知视图更新）**
Vue 通过 `Watcher` 监听数据变化，当数据改变时，`Watcher` 触发 `update()` 更新视图。

### **📌 代码实现**
```javascript
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    Dep.target = this; // 设置当前 Watcher
    this.vm[this.key]; // 触发 get() 进行依赖收集
    Dep.target = null;
  }

  update() {
    this.cb(this.vm[this.key]); // 触发视图更新
  }
}
```
📌 **说明**
- `Watcher` 负责**依赖收集**，在 `get()` 时被 `Dep` 记录。
- `set()` 触发 `Dep.notify()`，`Watcher.update()` 更新视图。

---

## **🔥 5. `watch` 的实现**
Vue 的 `watch` 本质上是 **监听数据变化后执行回调函数**，它的底层原理就是 `Watcher`。

### **📌 `watch` 代码实现**
```javascript
class Vue {
  constructor(options) {
    this.$data = options.data;
    new Observer(this.$data);

    // 监听 watch
    if (options.watch) {
      Object.keys(options.watch).forEach((key) => {
        new Watcher(this, key, options.watch[key]);
      });
    }
  }
}

// 测试 Watcher
const vm = new Vue({
  data: { message: "Hello Vue" },
  watch: {
    message(newVal) {
      console.log("message 变化了:", newVal);
    }
  }
});

// 触发 watch
vm.$data.message = "Hello World";
```
📌 **原理**
1. **创建 Watcher** 监听 `message`
2. `set()` 触发 `Dep.notify()`，`Watcher.update()` 执行回调函数

📌 **输出**
```bash
message 变化了: Hello World
```

---

## **🔥 6. `computed` 的实现**
`computed` 本质上是**缓存的 `watcher`**，只有依赖变化时才重新计算。

### **📌 `computed` 代码实现**
```javascript
class ComputedWatcher {
  constructor(vm, key, getter) {
    this.vm = vm;
    this.key = key;
    this.getter = getter;
    this.value = this.get();
  }

  get() {
    Dep.target = this; // 依赖收集
    const val = this.getter.call(this.vm);
    Dep.target = null;
    return val;
  }

  update() {
    this.value = this.get(); // 重新计算
    console.log(`${this.key} 变化了:`, this.value);
  }
}

class Vue {
  constructor(options) {
    this.$data = options.data;
    new Observer(this.$data);

    if (options.computed) {
      this.$computed = {};
      Object.keys(options.computed).forEach((key) => {
        const watcher = new ComputedWatcher(this, key, options.computed[key]);
        Object.defineProperty(this.$computed, key, {
          get: () => watcher.value
        });
      });
    }
  }
}

// 测试 Computed
const vm = new Vue({
  data: { a: 2, b: 3 },
  computed: {
    sum() {
      return this.$data.a + this.$data.b;
    }
  }
});

console.log(vm.$computed.sum); // 5
vm.$data.a = 5; // 触发更新
console.log(vm.$computed.sum); // 8
```
📌 **输出**
```bash
5
sum 变化了: 8
8
```
📌 **原理**
- **`computed` 依赖 `a, b`，当 `a, b` 变化时重新计算**。
- **`computed` 具有缓存性，值不变不会重复计算**。

---

## **🎯 总结**
| **机制** | **作用** | **原理** |
|---------|--------|--------|
| **`Observer`** | **数据劫持** | `Object.defineProperty()` 拦截 `get/set` |
| **`Dep`** | **依赖收集** | 记录 `Watcher`，数据变化时触发 `notify()` |
| **`Watcher`** | **更新视图** | 依赖 `Dep`，当数据变化时执行回调 |
| **`watch`** | **监听数据变化** | `Watcher.update()` 触发回调 |
| **`computed`** | **计算属性（缓存）** | `Watcher.get()` 只有依赖变化才重新计算 |

📌 **Vue 2 通过 `Object.defineProperty()` 实现响应式，Vue 3 使用 `Proxy` 替代**。

---

📌 **你的 Vue 2 项目是要优化 `computed` 还是 `watch`？我可以帮你优化代码！😃**

# **Vue 2 的 `provide` 和 `inject` 以及数据通信方式**

## **🚀 1. `provide` 和 `inject` 的使用**
在 Vue 2 中，`provide` 和 `inject` 主要用于 **祖孙组件之间通信**，不需要通过 `props` 一层层传递数据。

### **📌 使用场景**
- **深层组件通信**（祖先组件向多个子孙组件提供数据）
- **插件开发**（如 `Vuex`，内部使用 `provide`）
- **全局数据共享**（如主题、用户信息）

---

## **🔥 2. `provide` 和 `inject` 代码示例**
### **✅ `provide`（祖先组件）**
```vue
<!-- App.vue -->
<template>
  <div>
    <h2>App 组件</h2>
    <Parent />
  </div>
</template>

<script>
import Parent from "./Parent.vue";
export default {
  components: { Parent },
  provide() {
    return {
      message: "Hello from App.vue",
      count: 100
    };
  }
};
</script>
```
📌 **提供数据**
- `provide()` 返回一个对象，里面存储**可被子组件访问的数据**。

---

### **✅ `inject`（子孙组件）**
```vue
<!-- Child.vue -->
<template>
  <div>
    <h3>Child 组件</h3>
    <p>收到 message: {{ message }}</p>
    <p>收到 count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  inject: ["message", "count"] // 直接获取父级提供的数据
};
</script>
```
📌 **接收数据**
- `inject: ["message", "count"]` 表示从 `provide` 里拿到对应的值。

---

### **🔥 `provide` 和 `inject` 的注意事项**
1️⃣ **`provide` 提供的是 **"引用类型" 数据**，`inject` 直接修改不会触发视图更新**
```vue
export default {
  provide() {
    return {
      count: 100
    };
  }
};
```
**🚨 直接修改 `inject` 的值不会响应式**
```vue
export default {
  inject: ["count"],
  mounted() {
    this.count = 200; // ❌ 修改不会更新视图
  }
};
```
✅ **正确方式：使用 `Vue.observable`（Vue 2.6+）**
```vue
export default {
  provide() {
    return {
      count: Vue.observable({ value: 100 }) // 响应式数据
    };
  }
};
```
```vue
export default {
  inject: ["count"],
  mounted() {
    this.count.value = 200; // ✅ 修改后视图更新
  }
};
```

---

## **🚀 3. Vue 2 组件间的数据通信方式**
### **📌 Vue 2 中 6 种组件通信方式**
| **通信方式** | **适用场景** | **示例** |
|------------|------------|--------|
| **props + $emit** | **父子组件** | `props="message"`，`this.$emit("event", data)` |
| **$parent / $children** | **父访问子 / 子访问父** | `this.$parent.xxx`，`this.$children[i]` |
| **$attrs / $listeners** | **透传 `props` 和 `事件`** | `<child v-bind="$attrs" v-on="$listeners">` |
| **Event Bus（$emit / $on）** | **兄弟组件通信** | `Vue.prototype.$bus = new Vue()` |
| **Vuex（全局状态管理）** | **跨组件 / 跨页面** | `this.$store.state.xxx` |
| **provide / inject** | **祖孙组件（跨层级）** | `provide: { theme: "dark" }`，`inject: ["theme"]` |

---

### **🔥 1. `props + $emit`（父子组件通信）**
```vue
<!-- Parent.vue -->
<Child :message="parentMessage" @updateMessage="parentMessage = $event" />
```
```vue
<!-- Child.vue -->
<template>
  <button @click="$emit('updateMessage', '新的消息')">更新消息</button>
</template>
```
📌 **适用于：**
- **父 -> 子** 传递数据（`props`）
- **子 -> 父** 传递数据（`$emit`）

---

### **🔥 2. `$parent / $children`（访问父组件 / 子组件）**
```vue
// 子组件访问父组件
console.log(this.$parent.someData);
```
```vue
// 父组件访问子组件
console.log(this.$children[0].childMethod());
```
📌 **适用于：**
- **简单的父子通信**，不建议用于复杂场景（耦合度高）。

---

### **🔥 3. `$attrs / $listeners`（透传 `props` 和 `事件`）**
```vue
<Child v-bind="$attrs" v-on="$listeners" />
```
📌 **适用于：**
- **中间组件不处理 `props` 和 `事件`**，直接传递。

---

### **🔥 4. `Event Bus`（兄弟组件通信）**
```javascript
Vue.prototype.$bus = new Vue(); // 在 main.js 里定义
```
```vue
// 组件 A
this.$bus.$emit("eventName", data);
```
```vue
// 组件 B
this.$bus.$on("eventName", (data) => { console.log(data); });
```
📌 **适用于：**
- **非父子组件**（如兄弟组件）
- **项目小型，不用 Vuex**

---

### **🔥 5. Vuex（全局状态管理）**
```vue
computed: {
  count() { return this.$store.state.count; }
}
methods: {
  increment() { this.$store.commit('increment'); }
}
```
📌 **适用于：**
- **跨组件 / 跨页面**
- **大型项目，数据集中管理**

---

### **🔥 6. `provide / inject`（祖孙组件通信）**
```vue
export default {
  provide() { return { theme: "dark" }; }
}
```
```vue
export default {
  inject: ["theme"]
}
```
📌 **适用于：**
- **多层级组件通信**
- **插件开发（如 Vue Router、Vuex 内部实现）**

---

## **🎯 总结**
| **方式** | **适用场景** | **特点** |
|---------|------------|--------|
| **props + $emit** | **父子组件通信** | 最推荐，结构清晰 |
| **$parent / $children** | **访问父 / 子组件** | 耦合度高，不推荐 |
| **$attrs / $listeners** | **透传 `props` 和 `事件`** | 适用于中间组件 |
| **Event Bus** | **兄弟组件通信** | 适用于小项目，Vue 3 废弃 |
| **Vuex** | **全局状态管理** | 适用于大型应用 |
| **provide / inject** | **祖孙组件通信** | 适用于插件、多层级通信 |

---

📌 **你的 Vue 2 项目是要优化组件通信，还是要迁移到 Vue 3？可以帮你选最佳方案！😃**