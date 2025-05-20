---
title: vue2双向数据绑定原理
tags:
  - vue
---


# **🔥 Vue 2 数据绑定原理：实现数据监听 & 依赖收集 & 视图更新**  

Vue 2 的数据绑定基于 **`Object.defineProperty()`**，核心包括：  
1. **数据监听（Observer）**：使用 `Object.defineProperty()` 劫持对象的 `getter/setter`。  
2. **依赖收集（Dep）**：在 `getter` 访问时收集 `Watcher` 订阅者，在 `setter` 触发时通知更新。  
3. **视图更新（Watcher）**：当 `Dep.notify()` 触发时，执行 `update()` 更新视图。  
4. **数组监听**：Vue 2 通过**重写数组方法**（`push`、`pop`、`splice` 等）来监听数组变化。  

---

## **🚀 1. 实现 `Dep`（依赖收集）**
每个响应式属性都关联一个 `Dep`（依赖收集中心），用于存储所有依赖该属性的 `Watcher`。

### **✅ 代码：实现 `Dep`**
```typescript
class Dep {
  subs: Watcher[] = []; // 订阅者数组
  static target: Watcher | null = null; // 当前正在依赖收集的 Watcher

  addSub(sub: Watcher) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach(sub => sub.update()); // 通知所有 Watcher 更新
  }
}
```

📌 **`Dep` 主要用于：**
- **收集依赖**：在 `getter` 中调用 `addSub()` 。
- **触发更新**：在 `setter` 中调用 `notify()`，通知所有 `Watcher`。

---

## **🚀 2. 实现 `Observer`（数据监听）**
Vue 2 通过 **`Object.defineProperty()`** 劫持数据，在 `getter` 访问时收集依赖，在 `setter` 修改时通知 `Dep`。

### **✅ 代码：实现 `Observer`**
```typescript
class Observer {
  constructor(obj: any) {
    if (Array.isArray(obj)) {
      obj.__proto__ = arrayMethods; // 拦截数组方法
    } else {
      this.walk(obj);
    }
  }

  walk(obj: any) {
    Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]));
  }
}

function defineReactive(obj: any, key: string, val: any) {
  const dep = new Dep(); // 为每个属性创建 Dep

  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) dep.addSub(Dep.target); // 依赖收集
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

📌 **`Observer` 主要作用：**
- **遍历对象的每个属性**，并用 `defineReactive()` 监听数据变更。
- **在 `getter` 里收集依赖**，在 `setter` 里通知更新。

---

## **🚀 3. 实现 `Watcher`（监听数据 & 触发更新）**
`Watcher` 负责：  
1. **收集依赖**：读取数据时触发 `getter`，收集依赖到 `Dep` 中。  
2. **更新视图**：数据变化时，`Dep.notify()` 触发 `update()` 方法，执行视图更新。

### **✅ 代码：实现 `Watcher`**
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
    this.obj[this.key]; // 读取一次属性，触发 getter
    Dep.target = null; // 清除当前 Watcher
  }

  update() {
    this.updateFn(this.obj[this.key]); // 触发视图更新
  }
}
```

📌 **`Watcher` 主要作用：**
- **创建时读取属性，触发 `getter` 进行依赖收集**。
- **当 `setter` 修改数据时，调用 `update()` 更新视图**。

---

## **🚀 4. 监听数组**
`Object.defineProperty()` **无法监听数组索引的变化**，Vue 2 通过**重写数组原型方法**来监听数组变化。

### **✅ 代码：拦截数组方法**
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
```

📌 **数组拦截关键点：**
- **继承 `Array.prototype`**，重写 7 个改变数组的方法。
- **调用原始数组方法后，触发 `notify()` 进行视图更新**。

---

## **🚀 5. 整合 Vue 2 响应式系统**
Vue 2 在初始化时，会创建 `Observer` 监听 `data`，然后用 `Watcher` 监听变化，最终触发 `update()` 更新视图。

### **✅ 代码：Vue 2 响应式**
```typescript
class Vue {
  data: any;
  constructor(options: any) {
    this.data = options.data;
    new Observer(this.data); // 监听 `data`

    // 监听 `data.text`
    new Watcher(this.data, "text", newVal => {
      console.log("视图更新:", newVal);
    });
  }
}
```

### **✅ 测试 Vue 2 响应式**
```typescript
const vm = new Vue({
  data: {
    text: "Hello Vue 2",
    list: [1, 2, 3]
  }
});

// 触发对象监听
vm.data.text = "Vue 响应式成功！"; 
// 输出: "视图更新: Vue 响应式成功！"

// 触发数组监听
vm.data.list.push(4);
// 输出: "数组方法 push 被调用 [4]"
```

---

## **🚀 6. 测试数据监听**
### **✅ 测试 1：对象属性监听**
```typescript
const obj = { name: "Alice", age: 25 };
new Observer(obj);

new Watcher(obj, "name", newVal => console.log("名字更新:", newVal));

obj.name = "Bob"; // 输出: "名字更新: Bob"
obj.age = 30; // 不会触发 Watcher（因为没有监听 `age`）
```

---

### **✅ 测试 2：数组监听**
```typescript
const arr = [1, 2, 3];
new Observer(arr);

arr.push(4); // 输出: "数组方法 push 被调用 [4]"
arr.splice(1, 1); // 输出: "数组方法 splice 被调用 [1, 1]"
```

---

# **🎯 总结**
| **功能** | **实现方式** | **代码示例** |
|---------|-----------|------------|
| **依赖收集 (`Dep`)** | `getter` 访问时收集 `Watcher` | `dep.addSub(watcher)` |
| **数据劫持 (`Observer`)** | `Object.defineProperty()` 拦截 `getter/setter` | `defineReactive(obj, key, val)` |
| **监听变化 (`Watcher`)** | 依赖收集后执行 `update()` 更新视图 | `this.obj[this.key]` |
| **数组拦截** | 继承 `Array.prototype` 并重写 7 个方法 | `arrayMethods.push = function(...) {}` |
| **整合 Vue 2 响应式** | 初始化 `Observer` 和 `Watcher` | `new Vue({ data })` |

📌 **Vue 2 使用 `Object.defineProperty()` 监听对象变化，并通过重写数组方法监听数组变化。Vue 3 则改用 `Proxy` 更高效地实现响应式系统。**



---

## 一、Vue.set 



`this.$set` 是 Vue 2 中用于 **响应式地添加新属性** 或 **更新数组某个索引处的值** 的方法。在 Vue 2 中，由于基于 `Object.defineProperty` 实现的响应式系统，存在如下限制：

* 无法检测到对象新增的属性；
* 无法检测通过索引直接设置数组元素；
* 无法检测直接修改数组长度。

为了解决这个问题，Vue 2 提供了 `Vue.set`（全局）和 `this.$set`（实例方法），它们本质是同一个方法的不同调用方式。

```js
this.$set(this.obj, 'newKey', 'value');
// 等价于
Vue.set(this.obj, 'newKey', 'value');
```

---

### 二、原理分析（源码解析）

在 Vue 2 中，`set` 的定义如下（位于 `src/core/observer/index.js`）：

```js
export function set (target: any, key: any, val: any): any {
  if (process.env.NODE_ENV !== 'production' &&
    (target === undefined || target === null)
  ) {
    warn(`Cannot set reactive property on undefined, null...`);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  const ob = target.__ob__;
  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}
```

---

### 三、工作机制

1. **处理数组情况**：

   * 如果目标是数组并且 key 是合法索引：

     ```js
     arr.splice(index, 1, val);
     ```

     利用 `splice` 替代原始赋值操作，使 Vue 能检测到变化。

2. **处理对象情况**：

   * 如果对象已经存在该属性：直接赋值。
   * 如果是新属性：

     * 检查该对象是否有 `__ob__` 属性（即是否是响应式对象）；
     * 如果是响应式对象，则调用 `defineReactive` 动态定义新属性为响应式的；
     * 调用依赖收集器 `ob.dep.notify()` 通知依赖更新视图。

---

### 四、为什么需要 `$set`

```js
this.obj.newKey = 'value'; // Vue 无法侦测，视图不会更新
this.$set(this.obj, 'newKey', 'value'); // 响应式，视图更新
```

Vue 2 的响应式系统在初始化对象的时候，只会拦截对象已有的 key。`this.$set` 用来 **动态添加响应式属性** 并 **通知视图更新**。

---

### 五、Vue 3 的区别

在 Vue 3 中，由于使用了 `Proxy` 实现响应式系统，**不再需要 `$set`**，可以直接添加属性，Vue 3 会自动追踪并响应更新。

```js
proxy.newKey = 'value'; // 自动响应式
```

---

### 总结

| 特性     | Vue 2（需要 \$set）           | Vue 3（无需 \$set） |
| ------ | ------------------------- | --------------- |
| 添加新属性  | 不会响应，需要使用 `$set`          | 会自动响应           |
| 修改数组索引 | 不会响应，需要 `$set` 或 `splice` | 会自动响应           |
| 响应式核心  | Object.defineProperty     | Proxy           |

如果你在 Vue 2 项目中需要动态添加属性并保持响应式，务必要使用 `this.$set` 或 `Vue.set`。
