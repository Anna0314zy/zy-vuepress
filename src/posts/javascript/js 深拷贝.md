---
title: js 深拷贝
date: 2020-03-19
tags:
  - js 基础
---


# **JavaScript 对象浅拷贝和深拷贝详解**

在 JavaScript 中，**拷贝对象**（或者说“复制对象”）是非常常见的操作。对象拷贝分为两种类型：**浅拷贝**和**深拷贝**。这两者的主要区别在于是否会影响嵌套对象。理解两者的区别及其应用场景对开发者来说至关重要。


---

## **📌 1. 浅拷贝（Shallow Copy）**

### **定义：**
浅拷贝是创建一个新对象，并且将原始对象的**所有顶层属性**复制到新对象中。如果属性是原始数据类型（如：字符串、数字、布尔值），会复制其值；如果属性是引用类型（如：对象、数组），则会复制引用，而不是对象本身。

**浅拷贝的核心特性**：
- **原始类型**的值会被拷贝；
- **引用类型**的值只是复制了引用，导致原对象和新对象共享相同的嵌套对象或数组。

### **浅拷贝示例：**

#### **1.1. 使用 `Object.assign()` 进行浅拷贝**
```js
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = Object.assign({}, obj1);

console.log(obj2);  // { a: 1, b: { x: 10 } }

obj2.a = 2;
obj2.b.x = 20;

console.log(obj1);  // { a: 1, b: { x: 20 } }
console.log(obj2);  // { a: 2, b: { x: 20 } }
```
**解析：**
- `Object.assign({}, obj1)` 创建了一个新的对象 `obj2`，并将 `obj1` 的顶层属性复制给它。
- 当修改 `obj2.b.x` 时，`obj1` 中的 `b.x` 也被修改了，因为 `b` 是引用类型，浅拷贝只复制了引用。

#### **1.2. 使用扩展运算符进行浅拷贝**
```js
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { ...obj1 };

console.log(obj2);  // { a: 1, b: { x: 10 } }

obj2.b.x = 20;
console.log(obj1.b.x);  // 20 (引用共享)
console.log(obj2.b.x);  // 20
```

### **浅拷贝的局限性：**
- 如果对象中包含引用类型（如数组或对象），浅拷贝将导致新旧对象共享这些引用类型的内存地址。
- 这样，修改新对象的嵌套对象也会影响到原对象的嵌套对象。

---

## **📌 2. 深拷贝（Deep Copy）**

### **定义：**
深拷贝是创建一个新对象，并且递归地拷贝原始对象的所有属性，包括嵌套的对象和数组。深拷贝会创建**全新的副本**，新对象与原对象没有任何引用关系，即使属性是引用类型，也不会影响原对象。

### **深拷贝的核心特性：**
- **原始类型**的值会被拷贝；
- **引用类型**的值会被递归拷贝，原对象和新对象完全独立。

### **2.1. 使用 `JSON.stringify` 和 `JSON.parse` 实现深拷贝**

`JSON.stringify()` 将对象转换为 JSON 字符串，然后通过 `JSON.parse()` 重新解析成新的对象。

```js
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.x = 20;

console.log(obj1);  // { a: 1, b: { x: 10 } }
console.log(obj2);  // { a: 1, b: { x: 20 } }
```

#### **优点：**
- 简单易用，适用于大多数情况。

#### **缺点：**
- **无法处理函数、`undefined`、`Symbol`、`RegExp` 等类型**：这些值会被丢失或转换为无效值。
- **无法拷贝对象中的循环引用**：如果对象中存在循环引用，会导致 `JSON.parse()` 抛出错误。

---

### **2.2. 自定义深拷贝函数**

我们可以通过递归的方式来实现一个更完善的深拷贝函数，能够处理各种边界情况，如 `Date`、`RegExp` 和 `Map` 等。

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 如果是原始类型，直接返回
  }

  // 处理 Date 和 RegExp
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 处理 Map 和 Set
  if (obj instanceof Map) {
    return new Map([...obj].map(([key, value]) => [deepClone(key), deepClone(value)]));
  }
  if (obj instanceof Set) {
    return new Set([...obj].map(item => deepClone(item)));
  }

  // 处理普通对象和数组
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]); // 递归拷贝
    }
  }

  return copy;
}

const obj1 = { a: 1, b: { x: 10 }, c: new Date() };
const obj2 = deepClone(obj1);

obj2.b.x = 20;

console.log(obj1);  // { a: 1, b: { x: 10 }, c: 2021-12-08T14:00:00.000Z }
console.log(obj2);  // { a: 1, b: { x: 20 }, c: 2021-12-08T14:00:00.000Z }
```

#### **自定义深拷贝函数的优点：**
- 支持多种类型的对象，包括 `Date`、`RegExp`、`Map`、`Set` 等。
- 递归处理嵌套对象，确保完全独立。

---

## **📌 3. `JSON.stringify` 与 自定义深拷贝对比**

| 特性                  | `JSON.stringify` + `JSON.parse`        | 自定义深拷贝函数                  |
|----------------------|---------------------------------------|----------------------------------|
| **简洁性**            | 非常简洁，易于实现                   | 需要手动实现递归和类型判断      |
| **支持类型**          | 仅支持普通对象、数组、字符串、数字等基本类型 | 支持更多类型（如 `Date`、`RegExp`、`Map`、`Set` 等） |
| **性能**              | 性能较好，但对于非常大的对象可能会有性能瓶颈 | 自定义深拷贝可能性能略差，但可以优化 |
| **循环引用问题**      | 无法处理循环引用，抛出错误           | 可以通过手动处理循环引用来避免问题 |
| **适用场景**          | 简单对象和数组的拷贝，数据较简单时使用  | 复杂对象、特殊类型、需要完全控制深拷贝时使用 |

---

## **📌 总结**

- **浅拷贝**只复制对象的顶层属性，对于引用类型的属性，只是复制了引用，导致原对象和新对象共享同一个引用。
- **深拷贝**会递归地复制对象及其嵌套对象，确保新对象与原对象完全独立。
- **`JSON.stringify`** 和 **`JSON.parse`** 是一种快速的深拷贝方法，但有局限性，无法处理函数、`undefined`、`Symbol`、`RegExp` 等类型。
- **自定义深拷贝函数**提供了更多的灵活性，可以处理多种类型和循环引用问题。

根据实际需求选择适合的拷贝方式，确保数据的正确性和性能的优化。