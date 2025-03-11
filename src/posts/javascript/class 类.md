---
title: class 类的运用
date: 2020-03-19
tags:
  - js 基础
---


### **JavaScript `class` 详解**
`class` 是 JavaScript 中的面向对象编程（OOP）语法，用于创建对象的模板。

---

## **1. 定义 `class`**
```js
class Person {
  constructor(name, age) {
    this.name = name; // 实例属性
    this.age = age;
  }

  // 实例方法
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// 创建实例
const p1 = new Person("Alice", 25);
p1.sayHello(); // 输出: Hello, my name is Alice
```
- `constructor(name, age) {...}` 构造函数，在 `new Person()` 时自动调用。
- `this.name` 是**实例属性**，每个实例都有自己的 `name`。
- `sayHello()` 是**实例方法**，**只能通过实例调用**，`Person.sayHello()` ❌ 报错。

---

## **2. 静态方法（`static`）**
静态方法只能通过**类调用**，不能通过实例调用：
```js
class Dog {
  static info() {
    console.log("Dogs are loyal animals.");
  }
}

Dog.info(); // ✅ Dogs are loyal animals.

const d1 = new Dog();
// d1.info(); // ❌ 报错：静态方法不能通过实例调用
```

---

## **3. 静态属性（类属性）**
ES2022 允许直接在 `class` 内定义**静态属性**：
```js
class Cat {
  static legs = 4;
}

console.log(Cat.legs); // ✅ 4
```
> **特点**：只能通过 `类名.属性` 访问，不能通过实例访问。

---

## **4. `extends` 继承 & `super`**
子类可以继承父类，并扩展功能：
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类 constructor
    this.breed = breed;
  }

  makeSound() {
    super.makeSound(); // 调用父类方法
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();
/*
输出：
Buddy makes a sound.
Buddy barks.
*/
```
> **`extends`** 继承父类，`super()` 调用父类构造函数。

---

## **5. `get` 和 `set`（计算属性）**
```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = value / this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // ✅ 50
rect.area = 100;
console.log(rect.width); // ✅ 20
```
> **`get`** 让 `rect.area` 像属性一样访问。  
> **`set`** 允许 `rect.area = 100` 修改属性。

---

## **6. `#` 私有属性 & 私有方法**
```js
class BankAccount {
  #balance = 0; // 私有属性

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposit: $${amount}. New balance: $${this.#balance}`);
  }

  #logBalance() { // 私有方法
    console.log(`Balance for ${this.owner}: $${this.#balance}`);
  }

  showBalance() {
    this.#logBalance(); // ✅ 内部可访问私有方法
  }
}

const account = new BankAccount("Alice", 500);
account.deposit(100);
// console.log(account.#balance); // ❌ 报错：无法直接访问私有属性
account.showBalance(); // ✅
```
> **`#balance`** 是**私有属性**，只能在类内部访问，外部访问会报错。

---

## **7. `new.target`（检测是否直接实例化）**
```js
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Shape 类不能直接实例化");
    }
  }
}

class Circle extends Shape {
  constructor() {
    super();
    console.log("创建了一个 Circle");
  }
}

// const s = new Shape(); // ❌ 报错
const c = new Circle(); // ✅ 创建了一个 Circle
```
> **`new.target`** 用于检查 `class` 是否被直接 `new`。

---

## **8. `instanceof`（判断实例）**
```js
console.log(c instanceof Circle); // ✅ true
console.log(c instanceof Shape); // ✅ true
console.log(c instanceof Object); // ✅ true
```
> `instanceof` 用于检查对象是否属于某个类或其父类。

---

## **9. `Object.getPrototypeOf`（获取原型）**
```js
console.log(Object.getPrototypeOf(c) === Circle.prototype); // ✅ true
console.log(Object.getPrototypeOf(Circle.prototype) === Shape.prototype); // ✅ true
```
> `Object.getPrototypeOf()` 可用于获取对象的 `prototype` 关系。

---

## **10. `class` 语法总结**
| 语法 | 说明 |
|------|------|
| `constructor` | 构造函数，在 `new` 时调用 |
| `this` | 代表当前实例对象 |
| **实例方法** | 只能由实例调用 |
| `static` **静态方法** | 只能由类调用，不能通过实例访问 |
| `static 属性` | 只能通过类访问 |
| `extends` | 继承父类 |
| `super()` | 继承父类构造器 |
| `get/set` | 计算属性（可读可写） |

| `# 私有属性/方法` | 只能在类内部访问 |
| `new.target` | 判断类是否被直接实例化 |
| `instanceof` | 判断实例是否属于某个类 |

---

### **typeScript `class`详解**

--- 


---
## **📌 TypeScript `public` / `private` / `protected`**
TypeScript 提供 `public`、`private`、`protected` 修饰符：
```ts
class TSExample {
  public name: string; // 公开属性
  private age: number; // 私有属性
  protected gender: string; // 受保护属性（子类可访问）

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  private secretMethod() {
    console.log("我是私有方法");
  }
}

const tsInstance = new TSExample("Alice", 25, "female");
console.log(tsInstance.name); // ✅ 公开属性可访问
// console.log(tsInstance.age); // ❌ 报错: age 是私有的
// console.log(tsInstance.gender); // ❌ 报错: gender 是受保护的
// tsInstance.secretMethod(); // ❌ 报错: 私有方法无法访问
```

### **🔹 TypeScript 修饰符**
| 关键字 | 访问范围 |
|--------|---------|
| `public` | 默认，类内、子类、实例都能访问 |
| `private` | 仅限类内部访问，子类和实例都不能访问 |
| `protected` | 类内和子类可以访问，实例不能访问 |

---

### **📌 JavaScript vs TypeScript 私有属性对比**
| 语言 | 关键字 | 作用 |
|------|--------|------|
| **JavaScript** | `#privateProperty` | 只能在 `class` 内部访问，外部无法访问 |
| **TypeScript** | `private` | 仅限 `class` 内部访问，子类也无法访问 |
| **TypeScript** | `protected` | `class` 内部和子类可访问，但实例无法访问 |

---

## **📌 结论**
✅ **JavaScript** 使用 `#` 定义私有属性/方法（**ES2020+**）。  
✅ **TypeScript** 使用 `private` / `protected` 控制访问权限。  
✅ **如果你只用 JavaScript，不会有 `private` 关键字**，私有字段只能用 `#`。  
