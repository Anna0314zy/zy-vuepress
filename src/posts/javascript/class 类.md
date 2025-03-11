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
## **类装饰器（Class Decorators）详解**

---

类装饰器（Class Decorators）是 TypeScript 和 ECMAScript 提案中的一个特性，用于修改类的行为或对类进行元编程。类装饰器是一个**函数**，它能够接收一个类的构造函数，并返回一个新的构造函数或修改原有构造函数的行为。

### **📌 类装饰器的基本语法**
类装饰器的基本语法是一个函数，这个函数接收一个类构造函数作为参数：

```ts
function MyDecorator(constructor: Function) {
  console.log("类装饰器被调用", constructor);
}

@MyDecorator
class MyClass {
  constructor() {
    console.log("MyClass 创建实例");
  }
}

const instance = new MyClass();
```

### **📌 示例解析**
- `MyDecorator` 是一个**类装饰器**，它接受类构造函数 `constructor` 作为参数。
- `@MyDecorator` 用于将装饰器应用到 `MyClass` 上，等同于 `MyClass = MyDecorator(MyClass)`。
- 装饰器会在类的构造函数实例化之前被调用，通常用于**修改类的行为**或添加一些额外功能。

#### **输出：**
```bash
类装饰器被调用 [Function: MyClass]
MyClass 创建实例
```

### **📌 装饰器的作用**
1. **修改类的构造函数**：可以修改原类的构造函数，甚至返回一个新的类。
2. **添加类元数据**：可以为类添加一些附加信息，如日志、计时等。
3. **增强类的功能**：例如，在实例化类时为其注入某些依赖、自动执行某些方法等。

---

## **📌 装饰器如何修改类的行为**

我们可以在装饰器中修改类的构造函数或创建一个新的构造函数，从而改变类的行为：

### **1. 修改类的构造函数**
```ts
function AddTimestamp(constructor: Function) {
  constructor.prototype.timestamp = Date.now();  // 在原型上添加 timestamp 属性
}

@AddTimestamp
class MyClass {
  constructor(public name: string) {}
}

const instance = new MyClass("Example");
console.log(instance.timestamp);  // 输出当前的时间戳
```

#### **解析**：
- `AddTimestamp` 装饰器会在类的构造函数上添加一个 `timestamp` 属性。
- 类实例化时，会自动将当前时间戳添加到实例中。

---

### **2. 修改构造函数**
通过装饰器可以修改类的构造函数来改变类的实例化过程：

```ts
function Logger(constructor: Function) {
  const originalConstructor = constructor;
  const newConstructor: any = function (...args: any[]) {
    console.log(`创建了一个新的 ${originalConstructor.name} 实例`);
    return new originalConstructor(...args);
  };
  
  // 替换原构造函数
  newConstructor.prototype = originalConstructor.prototype;
  return newConstructor;
}

@Logger
class MyClass {
  constructor(public name: string) {}
}

const instance = new MyClass("Example");  // 输出: 创建了一个新的 MyClass 实例
```

#### **解析**：
- `Logger` 装饰器通过改变构造函数，向控制台输出一条日志信息。
- 每当实例化 `MyClass` 时，都会打印 `创建了一个新的 MyClass 实例`。

---

## **📌 装饰器的应用场景**

### **1. 跟踪类实例的创建**
通过装饰器，可以在类实例化时自动执行某些操作，如日志记录或统计：

```ts
function LogCreation(constructor: Function) {
  console.log(`${constructor.name} 类被创建`);
}

@LogCreation
class Example {
  constructor() {
    console.log("Example 实例化");
  }
}

const obj = new Example();
// 输出:
// Example 类被创建
// Example 实例化
```

### **2. 类依赖注入**
你可以使用装饰器实现依赖注入（DI），自动注入服务或其他依赖：

```ts
function InjectService(target: any, propertyKey: string) {
  // 自动注入服务
  target[propertyKey] = new SomeService();
}

class SomeService {
  getMessage() {
    return "Hello from Service!";
  }
}

class MyComponent {
  @InjectService
  service!: SomeService;

  displayMessage() {
    console.log(this.service.getMessage());
  }
}

const component = new MyComponent();
component.displayMessage();  // 输出: Hello from Service!
```

#### **解析**：
- `@InjectService` 会自动将 `SomeService` 实例注入到 `MyComponent` 类中。
- 每次实例化 `MyComponent` 时，`service` 属性都会自动获得一个新的 `SomeService` 实例。

---

## **📌 多个装饰器的使用**

在 TypeScript 中，你可以为类应用多个装饰器。多个装饰器会按照从下到上的顺序执行（先定义的装饰器最后执行）：

```ts
function FirstDecorator(constructor: Function) {
  console.log("FirstDecorator called");
}

function SecondDecorator(constructor: Function) {
  console.log("SecondDecorator called");
}

@FirstDecorator
@SecondDecorator
class MyClass {}

const obj = new MyClass();
// 输出:
// SecondDecorator called
// FirstDecorator called
```

---

## **📌 装饰器的元数据**
TypeScript 提供了装饰器元数据的功能，通常与 `reflect-metadata` 库一起使用，用于给类、方法、属性等添加元数据。

```ts
import "reflect-metadata";

function Log(target: any, key: string) {
  const metadata = Reflect.getMetadata("custom:meta", target, key);
  console.log(metadata);  // 打印元数据
}

class MyClass {
  @Log
  method() {}
}

Reflect.defineMetadata("custom:meta", "some data", MyClass.prototype, "method");
```

---

## **📌 总结**

| 特性         | 说明 |
|--------------|------|
| **类装饰器** | 装饰器是一个函数，接收类的构造函数并可返回一个修改后的构造函数 |
| **功能**     | 修改类的行为、添加元数据、增强功能等 |
| **多装饰器** | 多个装饰器会按声明顺序依次执行（从下到上） |
| **元数据**   | 使用 `reflect-metadata` 库为类或方法添加元数据，增强装饰器功能 |

装饰器提供了强大的元编程能力，可以极大地增强类的功能，适用于依赖注入、日志记录、权限验证等场景。🚀