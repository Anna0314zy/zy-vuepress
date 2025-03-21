---
title: Typescript系列
date: 2019-11-18
tags:
  - Typescript
---

# **🚀 TypeScript 深入学习 & 实用技巧**

TypeScript（TS）是 JavaScript 的超集，提供 **静态类型检查**，大幅提高开发效率。本篇文档涵盖 **接口、函数重载、泛型** 及 **开发中常用的高级 TS 技巧**。

---

## **📌 1. TypeScript 接口（Interface）**

接口用于定义 **对象的结构**，并支持 **继承、可选属性、只读属性**。

### **✅ 1.1 基本接口**

```typescript
interface User {
	id: number;
	name: string;
	age?: number; // 可选属性
}

const user: User = { id: 1, name: "Alice" };
```

📌 **特点**

- **接口不会编译成 JS，只是用于类型检查**
- **`age` 是可选的**

---

### **✅ 1.2 接口继承（`extends`）**

**接口可以继承另一个接口，复用字段**

```typescript
interface Person {
	name: string;
	age: number;
}

interface Employee extends Person {
	salary: number;
}

const emp: Employee = { name: "Tom", age: 30, salary: 5000 };
```

📌 **特点**

- `Employee` 继承 `Person`，**拥有 `Person` 的所有属性**
- **可扩展新的字段**

---

### **✅ 1.3 接口多重继承**

```typescript
interface A {
	a: string;
}
interface B {
	b: number;
}
interface C extends A, B {
	c: boolean;
}

const obj: C = { a: "hello", b: 42, c: true };
```

📌 **特点**

- **支持多继承（同时继承多个接口）**
- **适用于复杂类型组合**

---

### **✅ 1.4 继承类的接口**

接口可以继承**类**，获取类的属性，但不会继承实现。

```typescript
class Animal {
	name: string = "Animal";
}

interface Dog extends Animal {
	bark: () => void;
}

const myDog: Dog = { name: "Bulldog", bark: () => console.log("Woof!") };
```

---

## **📌 2. TypeScript 函数重载（Function Overloading）**

TypeScript 允许为 **同一个函数** 定义 **多个调用方式**，提高灵活性。

### **✅ 2.1 函数重载**

```typescript
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
	return x + y;
}

console.log(add(2, 3)); // 5
console.log(add("Hello, ", "World!")); // Hello, World!
```

📌 **特点**

- **前两行是函数签名**
- **最后一个 `add()` 是实际实现**
- **根据参数类型自动选择匹配的签名**

---

### **✅ 2.2 类方法的重载**

```typescript
class MathUtil {
	add(x: number, y: number): number;
	add(x: string, y: string): string;
	add(x: any, y: any): any {
		return x + y;
	}
}

const math = new MathUtil();
console.log(math.add(2, 3)); // 5
console.log(math.add("A", "B")); // AB
```

📌 **适用于**

- **工具类（如 `Math` 计算）**
- **多种输入类型的函数**

---

## **📌 3. TypeScript 泛型（深入解析）**

泛型（**Generics**）允许编写 **灵活、可复用的组件**，支持 **类型参数**。

### **✅ 3.1 泛型函数**

```typescript
function identity<T>(arg: T): T {
	return arg;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
```

📌 **特点**

- `<T>` 是 **泛型参数**
- **`T` 代表传入的类型**
- **可以传 `number` 或 `string`，而不需要 `any`**

---

### **✅ 3.2 泛型接口**

```typescript
interface Box<T> {
	value: T;
}

const box1: Box<number> = { value: 100 };
const box2: Box<string> = { value: "Hello" };
```

📌 **适用于**

- **存储不同类型的数据**
- **封装通用对象类型**

---

### **✅ 3.3 泛型约束**

```typescript
interface Lengthwise {
	length: number;
}

function logLength<T extends Lengthwise>(arg: T): number {
	return arg.length;
}

console.log(logLength("Hello")); // 5
console.log(logLength([1, 2, 3])); // 3
// console.log(logLength(42)); // ❌ 报错，数字没有 `length`
```

📌 **特点**

- `T extends Lengthwise` **限定 `T` 必须有 `length`**
- **避免传入不符合条件的类型**

---

### **✅ 3.4 泛型类**

```typescript
class Stack<T> {
	private items: T[] = [];
	push(item: T) {
		this.items.push(item);
	}
	pop(): T | undefined {
		return this.items.pop();
	}
}

const numStack = new Stack<number>();
numStack.push(1);
console.log(numStack.pop()); // 1
```

📌 **适用于**

- **实现栈（Stack）、队列（Queue）等数据结构**
- **保证类型安全**

---

### **✅ 3.5 泛型工具类型**

TypeScript 内置 **泛型工具类型**，可以快速操作类型：

```typescript
type User = { id: number; name: string; age: number };

// `Partial<T>` 让所有字段变成可选
type PartialUser = Partial<User>;

// `Pick<T, K>` 选取部分属性
type UserPreview = Pick<User, "id" | "name">;

// `Omit<T, K>` 排除部分属性
type UserWithoutAge = Omit<User, "age">;
```

📌 **适用于**

- **处理表单数据**
- **构造新的数据类型**

---

## **🎯 总结**

| **概念**     | **作用**        | **示例**                                     |
| ------------ | --------------- | -------------------------------------------- |
| **接口继承** | 复用接口属性    | `interface A extends B`                      |
| **函数重载** | 多种参数匹配    | `function add(x: number, y: number): number` |
| **泛型函数** | 适配多种类型    | `function identity<T>(arg: T): T`            |
| **泛型约束** | 限制 `T` 的类型 | `T extends Lengthwise`                       |
| **泛型类**   | 复用通用逻辑    | `class Stack<T>`                             |

## 开发举例说明

```js
export enum QueTypeList {
  singleChoice = 'L1', // 单选题
  mathCalculation = 'L2', // 数学计算题  是数学计算题 不代表数学
  voiceFollow = 'L3', // 语音跟读题
}
// 使用 typeof QueTypeList 获取所有枚举的值类型
type QueType = keyof typeof QueTypeList; // 'singleChoice' | 'mathCalculation' | 'voiceFollow'
export type QueType = `${QueTypeList}`
export enum QueTypeList {
    singleChoice = 'L1', // 单选题
    mathCalculation = 'L2', // 数学计算题  是数学计算题 不代表数学
    voiceFollow = 'L3', // 语音跟读题
  }
export type QueType2 = `${QueTypeList}` // 'L1' | 'L2' | 'L3'

  const obj = {
    SUCCESS:'成功',
    ERROR:'失败'
  }

  type d = keyof typeof obj // 'SUCCESS' | 'ERROR'
  
  enum StatusCode {
    SUCCESS = 1,
    FAILURE = 2,
    PENDING = 3
  }
  const b:StatusCode = 2

  const c = StatusCode.SUCCESS


```
