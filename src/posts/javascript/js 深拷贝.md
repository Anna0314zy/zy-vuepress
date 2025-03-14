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
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null || typeof obj !== "object") return obj; // 处理 null 和 基本数据类型
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map) return new Map([...obj].map(([k, v]) => [deepClone(k, hash), deepClone(v, hash)]));
  if (obj instanceof Set) return new Set([...obj].map(v => deepClone(v, hash)]));
  if (obj instanceof ArrayBuffer) return obj.slice(0);
  if (ArrayBuffer.isView(obj)) return new obj.constructor(obj); // 处理 TypedArray

  // 处理循环引用
  if (hash.has(obj)) return hash.get(obj);

  // 保持对象的原型
  let instance = Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, instance);

  // 复制所有属性（包括不可枚举和 Symbol）
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  for (let key of Reflect.ownKeys(descriptors)) {
    const descriptor = descriptors[key];
    if (descriptor.value) {
      descriptor.value = deepClone(descriptor.value, hash);
    }
    Object.defineProperty(instance, key, descriptor);
  }

  return instance;
}

```

示例
```js

// 下面是验证代码
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};
Object.defineProperty(obj, 'innumerable', {
  enumerable: false, value: '不可枚举属性' }
);
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的属性
let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)
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

## 4.**`for...in` 和 `for...of` 的区别**

在 JavaScript 中，`for...in` 和 `for...of` 都可以用来遍历数据，但它们的适用场景和行为有所不同。下面我们详细对比两者的**用途、适用数据类型、遍历方式**及**使用示例**。

---

## **📌 1. `for...in`**
### **作用**
- **遍历对象的** **可枚举属性**（包括继承的属性）。
- **遍历数组的索引**（`index`），而不是数组的值。

### **适用于**
✅ **对象（Object）** → 遍历对象的键名（包括可枚举的继承属性）。  
✅ **数组（Array）** → 遍历索引（不推荐）。  
✅ **`for...in` 适用于对象，但遍历数组时存在潜在问题**（见下文）。

---

### **示例 1：遍历对象**
```js
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, obj[key]);  
}
// 输出：
// a 1
// b 2
// c 3
```
🔹 **`for...in` 适用于遍历对象的属性**。

---

### **示例 2：遍历数组（不推荐）**
```js
const arr = [10, 20, 30];

for (let index in arr) {
  console.log(index, arr[index]);
}
// 输出：
// 0 10
// 1 20
// 2 30
```
🔹 **⚠️ 问题**：`for...in` 遍历的是**索引（`index`）**，而不是值。

---

### **示例 3：`for...in` 遍历数组的问题**
```js
Array.prototype.custom = "hello";  // 给数组添加一个自定义属性

const arr = [10, 20, 30];

for (let key in arr) {
  console.log(key, arr[key]);
}
// 输出：
// 0 10
// 1 20
// 2 30
// custom hello   ❌（不期望的行为）
```
🔹 **`for...in` 可能会遍历原型上的属性**，不适用于数组遍历。

---

## **📌 2. `for...of`**
### **作用**
- **遍历可迭代对象的值**（如数组、`Map`、`Set`、`String`、`arguments` 等）。
- **不遍历对象（Object），只能用于可迭代数据结构**。

### **适用于**
✅ **数组（Array）** → 遍历值（推荐）。  
✅ **字符串（String）** → 遍历字符。  
✅ **`Map`、`Set`** → 遍历键值对或元素。  
✅ **`arguments`、`NodeList`** → 遍历类似数组的对象。  

---

### **示例 1：遍历数组**
```js
const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
// 输出：
// 10
// 20
// 30
```
🔹 **`for...of` 直接遍历值，推荐用于数组**。

---

### **示例 2：遍历字符串**
```js
const str = "hello";

for (let char of str) {
  console.log(char);
}
// 输出：
// h
// e
// l
// l
// o
```
🔹 **`for...of` 适用于遍历字符串的字符**。

---

### **示例 3：遍历 `Set`**
```js
const set = new Set([1, 2, 3]);

for (let value of set) {
  console.log(value);
}
// 输出：
// 1
// 2
// 3
```
🔹 **`for...of` 可以用于 `Set` 结构，直接获取值**。

---

### **示例 4：遍历 `Map`**
```js
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

// 遍历键值对
for (let [key, value] of map) {
  console.log(key, value);
}
// 输出：
// a 1
// b 2
// c 3
```
🔹 **`for...of` 可以用于 `Map`，直接解构 `key-value` 对**。

---

### **示例 5：`for...of` 不能遍历普通对象**
```js
const obj = { a: 1, b: 2, c: 3 };

// ❌ 报错：TypeError: obj is not iterable
for (let value of obj) {
  console.log(value);
}
```
🔹 **对象 `Object` 不是可迭代对象（Iterable），不能用 `for...of` 遍历**。

如果想让对象支持 `for...of`，需要实现 **`Symbol.iterator`**：
```js
const obj = {
  a: 1, b: 2, c: 3,
  [Symbol.iterator]() {
    return Object.values(this)[Symbol.iterator]();
  }
};

for (let value of obj) {
  console.log(value);
}
// 输出：
// 1
// 2
// 3
```
🔹 **这样对象就变成可迭代对象，可以使用 `for...of` 了**。

---

## **📌 3. `for...in` vs `for...of` 对比总结**

| 比较项         | `for...in` | `for...of` |
|--------------|-----------|-----------|
| **适用于** | **对象（Object）**（可枚举属性） | **数组（Array）、字符串（String）、`Map`、`Set` 等可迭代对象** |
| **遍历内容** | **对象的键名（字符串）** 或 **数组索引** | **数组、字符串等可迭代对象的值** |
| **能否遍历对象** | ✅ **可以**（键名） | ❌ **不能**（除非对象实现 `Symbol.iterator`） |
| **能否遍历数组** | ❌ **不推荐**（遍历索引，不遍历值） | ✅ **推荐**（遍历值） |
| **会遍历原型上的属性** | ✅ **会**（需要 `hasOwnProperty` 过滤） | ❌ **不会** |
| **适用于 `Map`、`Set`** | ❌ **不适用** | ✅ **适用** |
| **适用于字符串** | ❌ **不适用** | ✅ **适用**（遍历字符） |

---

## **📌 4. 何时使用 `for...in` vs `for...of`？**

✅ **使用 `for...in`：**
- 适用于遍历**对象的键名**（如 `Object.keys()`）。
- 但需要**避免遍历原型链上的属性**，建议使用 `hasOwnProperty()` 过滤：
  ```js
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }
  ```

✅ **使用 `for...of`：**
- 适用于遍历**数组、字符串、`Set`、`Map`** 等可迭代对象，推荐使用：
  ```js
  for (let value of arr) {
    console.log(value);
  }
  ```

🚀 **最佳实践**：
- **遍历对象用 `for...in`**
- **遍历数组和可迭代对象用 `for...of`**  
- **遍历对象属性时，建议使用 `Object.keys()`、`Object.values()`、`Object.entries()`**

这样可以写出更清晰、更高效的代码！🎯

## 5. JSON.stringify() 的实现
```js
function myStringify(value, seen = new WeakSet()) {
  // 1️⃣ 处理 `null` 和基本数据类型（字符串、数字、布尔值、undefined）
  if (value === null) return 'null';
  if (typeof value === 'undefined') return undefined;
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);

  // 2️⃣ 处理数组
  if (Array.isArray(value)) {
    // 使用 `.map()` 遍历数组并深度转换每一项
    const elements = value.map(item => myStringify(item, seen));
    return `[${elements.join(',')}]`;
  }

  // 3️⃣ 处理对象（排除 null）
  if (typeof value === 'object') {
    // 处理循环引用
    if (seen.has(value)) return '{}';  // 如果对象已经在 `seen` 中，避免循环引用
    seen.add(value);

    // 获取对象的属性并递归转换
    const keys = Object.keys(value);
    const properties = keys.map(key => {
      const keyStr = `"${key}"`;
      const valueStr = myStringify(value[key], seen);
      return valueStr !== undefined ? `${keyStr}:${valueStr}` : undefined;
    }).filter(item => item !== undefined);

    return `{${properties.join(',')}}`;
  }

  // 处理其他类型（如 `function`，忽略）
  return undefined;
}

const obj = {
  name: "Alice",
  age: 30,
  friends: ["Bob", "Charlie"],
  greet: function() { console.log("Hello!"); }
};

const circularObj = { name: "John" };
circularObj.self = circularObj;

console.log(myStringify(obj));  // {"name":"Alice","age":30,"friends":["Bob","Charlie"]}
console.log(myStringify(circularObj));  // {}


```