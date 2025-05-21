---
title: 模块引用导出
tags:
   - 工程化
---



### **🚀 `exports` vs `module.exports` 的区别**
在 **Node.js 的 CommonJS 模块**中，`exports` 和 `module.exports` **都可以用于导出模块**，但它们有一些关键区别。  

| **对比项** | **`exports`** | **`module.exports`** |
|------------|-------------|----------------|
| **默认值** | `{}`（空对象） | `{}`（空对象） |
| **赋值方式** | 只能 **挂载** 属性 | 可以 **直接赋值** |
| **本质** | `exports` 是 `module.exports` 的 **引用** | `module.exports` 是真正的 **导出对象** |
| **适用于** | **多个导出**（导出多个方法/变量） | **单个导出**（导出一个类/对象/函数） |

---

## **🔥 1. `exports` 的使用**
📌 `exports` 是 `module.exports` 的 **引用**，所以你可以**向 `exports` 添加属性**，但不能直接赋值。  

✅ **正确用法（添加属性）**
```javascript
exports.a = 10;
exports.b = function() {
  return "Hello";
};
```
相当于：
```javascript
module.exports.a = 10;
module.exports.b = function() {
  return "Hello";
};
```
📌 **在另一个文件导入：**
```javascript
const obj = require('./test');
console.log(obj.a);  // 10
console.log(obj.b()); // Hello
```

❌ **错误用法（直接赋值，会断开 `exports` 和 `module.exports` 的引用）**
```javascript
exports = { a: 10, b: 20 };  // ❌ 这样 `exports` 不再指向 `module.exports`
```
📌 **这样 `require('./test')` 只会返回 `{}`（空对象），不会导出 `a` 和 `b`！**

---

## **🔥 2. `module.exports` 的使用**
📌 **`module.exports` 是最终导出的对象**，可以直接赋值。  

✅ **适用于单个导出（比如导出一个类/函数/对象）**
```javascript
module.exports = function() {
  return "Hello World";
};
```
📌 **在另一个文件导入：**
```javascript
const sayHello = require('./test');
console.log(sayHello()); // Hello World
```

✅ **适用于导出整个对象**
```javascript
module.exports = {
  a: 10,
  b: 20,
};
```
📌 **在另一个文件导入：**
```javascript
const obj = require('./test');
console.log(obj.a); // 10
console.log(obj.b); // 20
```

---

## **🔥 3. `exports` vs `module.exports` 的引用关系**
`exports` 只是 `module.exports` 的 **引用**，但 `module.exports` 是最终导出的对象。  

📌 **引用关系示意图**
```javascript
console.log(exports === module.exports); // true ✅ （最开始它们是相同的）
```
但如果 `exports` 被 **直接赋值**，它的引用就变了：
```javascript
exports = { a: 10 };  // ❌ 断开了与 module.exports 的关联
console.log(exports === module.exports); // false ❌
```
📌 **这样 `require()` 只会返回 `module.exports`，不会返回 `exports` 的新值！**

---

## **🔥 4. 什么时候用 `exports`，什么时候用 `module.exports`？**
| **场景** | **推荐用法** | **示例** |
|---------|------------|---------|
| **导出多个变量/方法** | `exports` | `exports.a = 10; exports.b = function() {...}` |
| **导出单个类/对象/函数** | `module.exports` | `module.exports = function() {...}` |

---

## **🎯 结论**
✅ **用 `exports` 挂载多个属性**（不能直接赋值）  
✅ **用 `module.exports` 直接赋值导出整个模块**  
✅ **不要 `exports = {...}`，会断开引用**  


