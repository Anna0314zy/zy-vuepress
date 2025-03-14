---
title: 高阶函数
date: 2020-04-19
tags:
  - js 基础
---



高阶函数（Higher-Order Functions，HOF）是指**接收一个函数作为参数，或者返回一个函数**的函数。它们在 JavaScript 中非常常见，广泛应用于**数组处理、函数柯里化、节流防抖、事件监听**等场景。

---

## **1️⃣ 常见的高阶函数**
### **✅ (1) 数组方法中的高阶函数**
JavaScript 提供了许多数组方法，它们都是高阶函数，因为它们接收一个回调函数作为参数：

#### **① `map()`** —— **映射**
```js
array.map(callback(currentValue, index, array), thisArg);
```
```js
Array.prototype.myMap = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      // 确保只处理有实际值的元素
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
      // 如果是空元素，保持该空槽
    }
    return result;
  };


```
```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
```
📌 **`map()` 作用**：将数组中的每个元素映射到一个新值，返回新的数组。

---

#### **② `filter()`** —— **筛选**

```js
array.filter(callback(currentValue, index, array), thisArg);

```
```js
Array.prototype.myFilter = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {  // 如果当前元素满足条件
      result.push(this[i]);
    }
  }
  return result;
};

```
```js
const numbers = [10, 25, 40, 5];
const greaterThan20 = numbers.filter(num => num > 20);
console.log(greaterThan20); // [25, 40]
```
📌 **`filter()` 作用**：根据回调函数的返回值（`true` / `false`）来**筛选**数组中的元素。

---

#### **③ `reduce()`** —— **累加**
reduce() 方法对数组中的每个元素执行一个累加器函数（从左到右），最后返回单个结果。

reduce() 方法的签名：
```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue);

```
- callback：一个函数，接受四个参数：
- accumulator：累加器，保存每次调用 callback 后的返回值。
- currentValue：当前正在处理的元素。
- index：当前元素的索引。
- array：调用 reduce 的原始数组。
- initialValue：可选，累加器的初始值。如果没有提供，第一次调用 callback 时，accumulator 会是数组的第一个元素。

---

```js
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};


```

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 5);
console.log(sum); // 10
```
📌 **`reduce()` 作用**：对数组中的所有元素进行累积计算，最终返回一个值。

---

#### **④ `forEach()`** —— **遍历**
```js
const names = ["张三", "李四", "王五"];
names.forEach(name => console.log(name));
// 张三
// 李四
// 王五
```
📌 **`forEach()` 作用**：**遍历数组**，但**不会返回新数组**（不同于 `map`）。

---

#### **⑤ `some()` & `every()`** —— **检查**
```js
const numbers = [1, 3, 5, 7, 10];

console.log(numbers.some(num => num > 6)); // true （至少有一个元素大于6）
console.log(numbers.every(num => num > 6)); // false （不是所有元素都大于6）
```
📌 **`some()` 和 `every()` 作用**：
- `some()`：**只要有一个满足**条件，就返回 `true`。
- `every()`：**所有元素都满足**条件，才返回 `true`。

---

## **2️⃣ 高阶函数应用场景**
### **✅ (2) 函数柯里化（Currying）**
**柯里化**是将一个接受多个参数的函数，转化为接受**一个参数**的**嵌套函数**。

```js
const add = a => b => c => a + b + c;

console.log(add(2)(3)(4)); // 9
```
📌 **作用**：
- 让函数更灵活，支持部分调用：
  ```js
  const add5 = add(5);
  console.log(add5(10)(20)); // 35
  ```
```js
const curring = (fn, arr = []) => {
  let len = fn.length;
  return function(...args) {
    const newArgs = [...arr, ...args];
    if (newArgs.length === len) {
      return fn(...newArgs);
    } else {
      return curring(fn, newArgs);
    }
  };
};
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
let newSum = curring(sum);
console.log(newSum(1, 3, 3)(4, 5));
console.log(newSum(1)(2)(3)(4)(4));


```
---

### **✅ (3) 函数组合（Composition）**
多个函数可以通过**组合**的方式，从右向左执行：
```js

function compose(...funcs) {
   if (funcs.length === 0) return args => args;
    if (funcs.length === 1) {
         return funcs[0];
    }
    return funcs.reduce((func,next) => (...args) => func(next(...args)))
}


const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const greet = name => `Hello, ${name}`;
const exclaim = str => `${str}!`;

const welcome = compose(exclaim, greet, capitalize); // 从右向左执行
console.log(welcome("john")); // "Hello, John!"
```
📌 **作用**：
- 代码更简洁，可读性更强。
- 避免嵌套调用（`exclaim(greet(capitalize("john")))`）。    

---

### **✅ (4) 节流（Throttle）**
**作用**：控制事件触发的频率，适用于**滚动监听、窗口缩放**等场景。
```js
function throttle(func, delay) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= delay) {
            func.apply(this, args);
            lastTime = now;
        }
    };
}

window.addEventListener("resize", throttle(() => {
    console.log("窗口缩放事件");
}, 1000));
```
📌 **原理**：
- 限制**单位时间内**的执行次数，避免高频触发。

---

### **✅ (5) 防抖（Debounce）**
**作用**：**延迟**执行函数，适用于**搜索框输入、按钮点击防止重复提交**等场景。
```js
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

document.getElementById("search").addEventListener("input", debounce(() => {
    console.log("搜索 API 请求");
}, 500));
```
📌 **原理**：
- **只在最后一次操作后执行**，防止短时间内多次触发。

---

### **✅ (6) 手写 `once()`**
**作用**：确保某个函数**只执行一次**，适用于**按钮点击、支付等场景**。
```js
function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn.apply(this, args);
        }
    };
}

const pay = once(() => console.log("支付成功"));
pay(); // "支付成功"
pay(); // ❌ 无输出
```
📌 **原理**：
- `called` 变量确保函数**只会执行一次**。

---

## **3️⃣ 高阶函数的核心思想**
| **高阶函数** | **作用** | **常见应用场景** |
|-------------|---------|----------------|
| `map()` | **映射**数组中的元素 | 数据转换（如平方、格式化） |
| `filter()` | **筛选**符合条件的元素 | 筛选大于某个值的数组 |
| `reduce()` | **累加/合并**所有值 | 求和、对象合并 |
| `forEach()` | 遍历数组，不返回新数组 | 事件绑定、打印日志 |
| `some()` / `every()` | **检查**是否满足条件 | 验证表单数据 |
| **柯里化** | 拆分多个参数的函数 | `add(2)(3)(4)` |
| **函数组合** | **将多个函数串联** | 格式化文本 |
| **节流** | 限制高频事件触发 | **滚动监听** |
| **防抖** | 只执行最后一次触发 | **搜索框输入** |
| **once()** | 确保函数只执行一次 | **支付、登录** |

---

## **🎯 总结**
- **高阶函数的核心思想：** **函数可以作为参数或返回值**
- **常见高阶函数：**
  - `map`、`filter`、`reduce`、`forEach` 👉 **数组处理**
  - **柯里化、函数组合** 👉 **增强函数的灵活性**
  - **节流、防抖、once** 👉 **控制函数执行**

💡 **掌握这些高阶函数，可以让你写出更简洁、高效、可维护的 JavaScript 代码！🚀**