---
title: vue2
tags:
  - vue
---



# **🔥 Vue 2 响应式原理：依赖收集 & 视图更新（手写实现）**  

Vue 2 的双向数据绑定是基于 **`Object.defineProperty()`** 和 **发布-订阅模式（观察者模式）** 实现的。核心流程包括：  

1. **依赖收集（Dep）**：在 `getter` 访问时收集依赖（`Watcher`）。
2. **数据劫持（Observer）**：使用 `Object.defineProperty()` 监听数据变化。
3. **视图更新（Watcher）**：在 `setter` 触发时通知 `Watcher`，并执行 `update()` 进行视图更新。

---

# **🚀 第一步：实现 `Dep`（依赖收集中心）**
在 Vue 2 中，每个 **响应式属性** 都有一个 `Dep`（依赖收集器），用于存储所有依赖该数据的 `Watcher`。

### **✅ 代码实现：`Dep` 类**
```typescript
class Dep {
  subs: Watcher[] = []; // 存储 Watcher 依赖
  static target: Watcher | null = null; // 当前正在收集的 Watcher

  // 依赖收集
  addSub(watcher: Watcher) {
    this.subs.push(watcher);
  }

  // 通知所有 Watcher 更新视图
  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
}
```

### **📌 依赖收集的核心逻辑**
- `subs`：存储所有依赖此数据的 `Watcher`。
- `addSub(watcher)`：将 `Watcher` 添加到 `subs` 中（即收集依赖）。
- `notify()`：当数据变更时，通知所有 `Watcher` 触发 `update()` 进行视图更新。

---

# **🚀 第二步：实现 `Observer`（数据劫持）**
Vue 2 通过 `Object.defineProperty()` **劫持数据**，在 `getter` 访问时 **收集依赖**，在 `setter` 修改时 **通知更新**。

### **✅ 代码实现：`Observer` 类**
```typescript
class Observer {
  constructor(obj: any) {
    this.walk(obj); // 遍历所有属性
  }

  walk(obj: any) {
    Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]));
  }
}

// 使对象属性变成响应式
function defineReactive(obj: any, key: string, val: any) {
  const dep = new Dep(); // 创建 Dep 实例

  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target); // 依赖收集
      }
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
        dep.notify(); // 触发视图更新
      }
    }
  });
}
```

### **📌 `Observer` 核心逻辑**
- `walk(obj)`：遍历对象的所有属性，并调用 `defineReactive()` 进行响应式处理。
- `defineReactive()`：
  1. **`getter` 访问时** 调用 `dep.addSub()` **收集依赖**（`Watcher`）。
  2. **`setter` 变更时** 调用 `dep.notify()` **触发视图更新**。

---

# **🚀 第三步：实现 `Watcher`（监听数据 & 触发更新）**
`Watcher` 负责：
1. **依赖收集**：在 `getter` 访问时，添加自己到 `Dep` 依赖列表中。
2. **视图更新**：在 `setter` 修改时，触发 `update()` 进行视图更新。

### **✅ 代码实现：`Watcher` 类**
```typescript
class Watcher {
  obj: any;
  key: string;
  updateFn: Function;

  constructor(obj: any, key: string, updateFn: Function) {
    this.obj = obj;
    this.key = key;
    this.updateFn = updateFn;

    Dep.target = this; // 触发依赖收集
    this.obj[this.key]; // 读取一次属性，触发 `getter` 进行依赖收集
    Dep.target = null; // 清除当前 Watcher
  }

  update() {
    this.updateFn(this.obj[this.key]); // 触发视图更新
  }
}
```

### **📌 `Watcher` 核心逻辑**
- `Dep.target = this;`：在 `getter` 访问时，标记当前 `Watcher` 进行依赖收集。
- `this.obj[this.key];`：访问属性，触发 `getter`，从而 `Dep.addSub(this)` 收集依赖。
- `update()`：当 `Dep.notify()` 触发时，执行 `updateFn()` 进行视图更新。

---

# **🚀 第四步：整合 Vue 2 响应式系统**
Vue 2 在初始化时，会创建 `Observer` 监听 `data`，然后用 `Watcher` 监听变化，最终触发 `update()` 更新视图。

### **✅ 代码实现：Vue 2 响应式**
```typescript
class Vue {
  data: any;
  constructor(options: any) {
    this.data = options.data;
    new Observer(this.data); // 监听 `data`

    // 创建 Watcher 监听 `data.text`
    new Watcher(this.data, "text", newVal => {
      console.log("视图更新:", newVal);
    });
  }
}
```

### **✅ 测试 Vue 响应式**
```typescript
const vm = new Vue({
  data: {
    text: "Hello Vue 2"
  }
});

// 触发视图更新
vm.data.text = "Vue 响应式成功！";
// 输出: "视图更新: Vue 响应式成功！"
```

---

# **🚀 第五步：处理数组响应式**
`Object.defineProperty()` **无法拦截数组索引变化**，所以 Vue 2 采用**劫持数组原型**的方法。

### **✅ 代码实现：拦截数组方法**
```typescript
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(method => {
  arrayMethods[method] = function (...args: any[]) {
    const result = arrayProto[method].apply(this, args);
    console.log(`数组方法 ${method} 被调用`, args);
    return result;
  };
});

class Observer {
  constructor(obj: any) {
    if (Array.isArray(obj)) {
      obj.__proto__ = arrayMethods; // 让数组使用拦截后的方法
    } else {
      this.walk(obj);
    }
  }
}
```

### **✅ 测试数组响应式**
```typescript
const data = { list: [1, 2, 3] };
new Observer(data);

data.list.push(4); // 输出: "数组方法 push 被调用 [4]"
data.list.splice(1, 1); // 输出: "数组方法 splice 被调用 [1, 1]"
```

---

# **🎯 总结**
| **步骤** | **实现方式** | **代码示例** |
|---------|-----------|------------|
| **依赖收集 (`Dep`)** | `getter` 访问时收集 `Watcher` | `dep.addSub(watcher)` |
| **数据劫持 (`Observer`)** | `Object.defineProperty()` 拦截 `getter/setter` | `defineReactive(obj, key, val)` |
| **监听变化 (`Watcher`)** | 依赖收集后执行 `update()` 更新视图 | `this.obj[this.key]` |
| **数组拦截** | 继承 `Array.prototype` 并重写 7 个方法 | `arrayMethods.push = function(...) {}` |
| **整合 Vue 2 响应式** | 初始化 `Observer` 和 `Watcher` | `new Vue({ data })` |

---

## **🔥 你学到了什么？**
- Vue 2 **如何收集依赖**
- **如何设计 `Dep`、`Observer`、`Watcher`**
- **如何劫持对象和数组**
- **如何实现视图更新**

📌 **你在 Vue 2 项目中是否遇到了响应式相关问题？可以帮你优化代码！😃**