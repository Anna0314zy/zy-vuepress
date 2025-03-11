---
title: new 关键字
date: 2020-04-19
tags:
  - js 基础
---

## **`new` 关键字做了什么？**
在 JavaScript 中，`new` 关键字用于创建一个**构造函数的实例**，它的执行过程如下：

1. **创建一个空对象**，并让它的 `__proto__` 指向构造函数的 `prototype`。
2. **调用构造函数**，并将 `this` 绑定到新创建的对象上。
3. **如果构造函数返回一个对象**，则返回该对象；否则，返回新创建的对象。

---

## **如何实现一个 `new`？**
我们可以手写一个 `myNew` 方法来模拟 `new` 关键字的行为：

```js
function myNew(constructor, ...args) {
    // 1. 创建一个空对象，并将其原型指向构造函数的 prototype
    const obj = Object.create(constructor.prototype);

    // 2. 调用构造函数，并让 `this` 指向这个新对象
    const result = constructor.apply(obj, args);

    // 3. 如果构造函数返回了一个对象，则返回该对象，否则返回新创建的 `obj`
    return result instanceof Object ? result : obj;
}
```

---

## **测试 `myNew`**
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = myNew(Person, '张三', 18);
console.log(p1.name); // 输出: 张三
console.log(p1.age);  // 输出: 18
console.log(p1 instanceof Person); // 输出: true
```
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    return { // 显式返回一个新对象
        name: "李四",
        age: 25,
        gender: "male"
    };
}

const p1 = new Person("张三", 18);

console.log(p1.name);  // "李四"  (不是 "张三")
console.log(p1.age);   // 25
console.log(p1.gender); // "male"

```
---

## **`myNew` 解析**
1. `Object.create(constructor.prototype)` 创建了一个**新对象**，其 `__proto__` 指向 `constructor.prototype`。
2. `constructor.apply(obj, args)` 以新对象 `obj` 作为 `this` 执行构造函数，初始化属性。
3. **判断返回值**：
   - **如果构造函数返回的是一个对象**（引用类型），则返回该对象。
   - **如果返回 `undefined` 或者基本类型**，则返回 `obj`。

---

## **`new` vs `Object.create`**
- `Object.create(proto)` 只设置原型，不会执行构造函数。
- `new` 既设置原型，又执行构造函数。

所以，`myNew` 结合了 `Object.create` 和 `apply` 来完美模拟 `new` 关键字的行为。