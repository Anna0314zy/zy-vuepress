---
title: vue2原理
tags:
   - vue2
---

在 Vue 2 中，数据双向绑定是通过 **`Object.defineProperty`** 来实现的。Vue 2 的响应式系统是通过 getter 和 setter 来劫持对象的属性，以便能够追踪依赖关系并在数据发生变化时通知视图更新。

为了模拟 Vue 2 中的数据双向绑定以及通知更新，我们可以实现一个简化的版本。这里会实现一个基本的响应式数据系统，类似于 Vue 2 中的 `Vue.observable` 和 `watcher` 机制。

### 完整代码实现

#### 1. 定义一个简单的 `Observer` 类来劫持数据
我们首先要实现一个 `Observer` 类来监控数据对象的变化，并通过 getter 和 setter 来实现数据绑定。

```javascript
class Dep {
  constructor() {
    this.subscribers = [];
  }

  addSub(sub) {
    this.subscribers.push(sub);
  }

  notify() {
    this.subscribers.forEach(sub => sub.update());
  }
}

class Observer {
  constructor(data) {
    this.dep = new Dep();
    this.data = data;
    this.walk(data);
  }

  // 遍历对象，劫持每个属性
  walk(data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    });
  }

  // 使用 Object.defineProperty 进行数据代理
  defineReactive(obj, key, val) {
    const dep = new Dep(); // 每个属性都有自己的依赖

    // 当访问属性时，通过 getter 获取值
    Object.defineProperty(obj, key, {
      get: () => {
        if (Dep.target) {
          dep.addSub(Dep.target); // 依赖收集
        }
        return val;
      },
      set: (newVal) => {
        if (newVal !== val) {
          val = newVal;
          dep.notify(); // 通知更新
        }
      }
    });
  }
}

// 简单的 Watcher
class Watcher {
  constructor(obj, key, cb) {
    this.obj = obj;
    this.key = key;
    this.cb = cb;
    Dep.target = this; // 当前 Watcher 是目标
    this.oldVal = obj[key]; // 获取初始值
    Dep.target = null;
  }

  update() {
    const newVal = this.obj[this.key]; // 获取新值
    if (this.oldVal !== newVal) {
      this.cb(newVal); // 调用回调函数
    }
  }
}

function Vue(data) {
  this.data = data;
  new Observer(this.data); // 数据劫持
}

Vue.prototype.$watch = function(key, cb) {
  new Watcher(this.data, key, cb);
};

```

#### 2. 创建一个实例并使用数据双向绑定
然后我们可以使用这个简单的响应式系统来模拟 Vue 2 中的数据双向绑定。

```javascript
// 创建 Vue 实例
const app = new Vue({
  name: 'Vue Example',
  age: 25
});

// 监听数据变化
app.$watch('age', (newVal) => {
  console.log('Age changed to:', newVal);
});

// 模拟数据变化
setTimeout(() => {
  app.data.age = 30; // 修改数据
}, 2000);

```

### 代码解释：

1. **`Dep` 类**：
   - 用于管理依赖（即每个属性的 watcher）。每个属性都有一个对应的 `Dep` 实例，它可以存储该属性的所有订阅者（watchers），并在属性发生变化时通知这些订阅者。

2. **`Observer` 类**：
   - 在初始化时，`Observer` 会遍历对象的所有属性，并通过 `Object.defineProperty` 为每个属性添加 getter 和 setter 方法，从而劫持这些属性。
   - 当属性的值发生变化时，通过 `setter` 方法通知 `Dep` 实例，进而通知所有依赖于该属性的 watcher 更新。

3. **`Watcher` 类**：
   - 监听数据变化并执行相应的回调。
   - 在 `update()` 方法中，当观察的属性值发生变化时，触发回调函数，并且更新视图。

4. **`Vue` 构造函数**：
   - `Vue` 构造函数接受一个数据对象，并通过 `Observer` 类劫持数据的变化。
   - `Vue` 类上提供了 `$watch` 方法来让用户监听某个数据属性的变化。

### 运行效果：
1. 初始数据：
   ```javascript
   const app = new Vue({
     name: 'Vue Example',
     age: 25
   });
   ```
   你可以通过 `app.data.age` 访问数据。

2. 监听 `age` 属性的变化：
   ```javascript
   app.$watch('age', (newVal) => {
     console.log('Age changed to:', newVal);
   });
   ```

3. 数据变化：
   ```javascript
   setTimeout(() => {
     app.data.age = 30;
   }, 2000);
   ```
   在 2 秒后，`age` 数据被修改为 30，控制台会输出：
   ```
   Age changed to: 30
   ```

### 总结：
通过使用 `Object.defineProperty` 和 `getter/setter`，我们实现了 Vue 2 中数据的响应式绑定。当数据发生变化时，依赖于该数据的组件会重新渲染。这是 Vue 2 双向绑定的核心原理。

这个例子并未涉及 DOM 更新和模板编译部分，但它展示了 Vue 2 中响应式数据管理的核心思路。