---
title: js 数据类型
date: 2020-04-19
tags:
  - js 基础
---

## **JavaScript 数据类型及其相互转换**

JavaScript 的数据类型分为两大类：
1. **基本数据类型**（Primitive Types）
2. **引用数据类型**（Reference Types）

### **📌 1. 基本数据类型**
基本数据类型包括：
- **Number**（数字）
- **String**（字符串）
- **Boolean**（布尔值）
- **Undefined**（未定义）
- **Null**（空值）
- **Symbol**（符号，ES6 引入）
- **BigInt**（大整数，ES11 引入）

#### **基本数据类型特点**：
- **不可变**（immutable）：一旦创建，值就不可更改。
- **按值传递**：传递基本数据类型的值时，复制的是值本身。

#### **基本数据类型示例**：
```js
let num = 42;       // Number
let str = "Hello";  // String
let isTrue = true;  // Boolean
let undef;          // Undefined (没有显式赋值)
let nul = null;     // Null
let sym = Symbol('symbol'); // Symbol
let bigInt = 9007199254740991n; // BigInt
```

---

### **📌 2. 引用数据类型**
引用数据类型包括：
- **Object**（对象）
- **Array**（数组）
- **Function**（函数）
- **Date**（日期）
- **RegExp**（正则表达式）
- **Error**（错误对象）

#### **引用数据类型特点**：
- **可变**（mutable）：可以修改对象或数组的内容。
- **按引用传递**：传递引用数据类型时，传递的是其内存地址（引用），多个变量可以指向同一个内存位置。

#### **引用数据类型示例**：
```js
let obj = { name: "Alice" };      // Object
let arr = [1, 2, 3];              // Array
let func = function() { return 42; }; // Function
let reg = /ab+c/;                 // RegExp
let date = new Date();            // Date
```

---

## **📌 3. 数据类型转换**
### **1. 隐式类型转换**（自动转换）
JavaScript 会自动转换数据类型，这种转换被称为**隐式类型转换**。以下是常见的隐式转换：

#### **1.1. 数字与字符串相加**
```js
let result = 5 + "5";  // "55"（数字 5 转为字符串）
console.log(result); // 输出 "55"
```

#### **1.2. 布尔值与其他类型**
```js
let bool = true + 1;    // 1
let bool2 = false + 1;  // 1
console.log(bool, bool2);  // 输出: 1 1
```

#### **1.3. 字符串与其他类型**
```js
let str = "hello" + 10; // "hello10"
console.log(str);
```

#### **1.4. 数字与其他类型相加时自动转换**
```js
let num = "10" * 2;     // 20
let num2 = "10" - 2;    // 8
console.log(num, num2);
```

#### **1.5. 空值与其他类型**
```js
let value1 = null + 1;    // 1
let value2 = undefined + 1; // NaN
console.log(value1, value2); // 输出: 1 NaN
```

---

### **2. 显式类型转换**（手动转换）
JavaScript 提供了多种方法来进行类型转换，以下是常见的显式转换方式：

#### **2.1. 转换为数字**
```js
let num1 = Number("123");   // 转为数字: 123
let num2 = Number("abc");   // 无法转换为数字: NaN
let num3 = Number(true);    // true 转为 1
let num4 = Number(false);   // false 转为 0
console.log(num1, num2, num3, num4);
```

#### **2.2. 转换为字符串**
```js
let str1 = String(123);     // "123"
let str2 = String(true);    // "true"
let str3 = String(false);   // "false"
let str4 = String(null);    // "null"
let str5 = String(undefined); // "undefined"
console.log(str1, str2, str3, str4, str5);
```

#### **2.3. 转换为布尔值**
- `false`、`0`、`NaN`、`""`、`null`、`undefined` 都会转换为 `false`。
- 其他值（包括对象、非零数字、非空字符串等）都会转换为 `true`。

```js
let bool1 = Boolean(0);      // false
let bool2 = Boolean("");     // false
let bool3 = Boolean("hello"); // true
let bool4 = Boolean([]);      // true (空数组也为 true)
console.log(bool1, bool2, bool3, bool4);
```

#### **2.4. 使用 `toString()` 方法转换为字符串**
```js
let num = 123;
let str = num.toString(); // "123"
console.log(str);
```

#### **2.5. 使用 `parseInt()` 和 `parseFloat()`**
- `parseInt()`：将字符串解析为整数。
- `parseFloat()`：将字符串解析为浮点数。

```js
let int = parseInt("123abc");    // 123
let float = parseFloat("123.45"); // 123.45
console.log(int, float);
```

---

### **📌 3. 常见的转换规则**

### **3.1. `==` 运算符的隐式类型转换**
`==` 运算符在比较时会进行隐式类型转换：

### **1. 字符串和数字比较**
```js
console.log('5' == 5);      // true
console.log('0' == false);  // true
console.log('' == 0);       // true
```
- **字符串和数字比较时，字符串会被转换成数字**，如果转换后的数字相等，则返回 `true`。

### **2. 布尔值和其他类型比较**
```js
console.log(true == 1);     // true
console.log(false == 0);    // true
```
- **布尔值与数字进行比较时，`true` 转换为 `1`，`false` 转换为 `0`**。

### **3. null 和 undefined**
```js
console.log(null == undefined); // true
```
- **`null` 和 `undefined` 被认为是相等的**，但是与其他任何值（包括 `null` 和 `undefined`）比较时，它们都会返回 `false`。

### **4. 空字符串与数字比较**
```js
console.log('' == 0);         // true
console.log('' == false);     // true
```
- **空字符串会被转换为 `0`**，因此和数字 `0` 或 `false` 比较时返回 `true`。

### **5. 对象与原始值比较**

对象跟 字符串 数字 symbol比较的时候 会把对象转换成原始数据类型

对象转换的规则，会先调用内置的 [ToPrimitive] 函数，其规则逻辑如下：

- 如果部署了 Symbol.toPrimitive 方法，优先调用再返回；

- 调用 valueOf()，如果转换为基础类型，则返回；

- 调用 toString()，如果转换为基础类型，则返回；

```js
console.log({} == '[object Object]') //JavaScript 会尝试将对象转换为字符串，空对象 {} 的默认字符串是 "[object Object]"。
console.log([] == '');                // true
```
- 对象在和原始值比较时，首先会被转换成其原始值。空数组会被转换为 `""`（空字符串），但空对象的转换结果是 `[object Object]`，因此不相等。

### **3.2. `===` 运算符的严格比较**
`===` 运算符不会进行隐式类型转换，它要求左右两边的值类型必须相同：
```js
console.log(0 === false);      // false
console.log('' === false);     // false
console.log(null === undefined); // false
console.log(1 === "1");        // false
```

---

## **📌 总结**

### **基本数据类型**
- **Number**、**String**、**Boolean**、**Undefined**、**Null**、**Symbol**、**BigInt**  
  **不可变**（immutable），**按值传递**。

### **引用数据类型**
- **Object**、**Array**、**Function**、**Date**、**RegExp**  
  **可变**（mutable），**按引用传递**。

### **隐式转换**
- 自动进行类型转换，例如 `+` 运算符会将字符串转换为数字。

### **显式转换**
- 使用 `Number()`、`String()`、`Boolean()`、`toString()`、`parseInt()` 等方法进行转换。

---

通过掌握**隐式和显式转换**，你可以灵活地处理 JavaScript 中不同类型的数据，避免一些常见的类型转换错误。