---
title: this 关键字(call apply bind)
date: 2020-04-19
tags:
  - js 基础
---
`this` 是 JavaScript 中一个非常重要但容易混淆的概念。它的值不是在**定义时**决定的，而是在**执行时**决定的，取决于**函数的调用方式**。  

---

## **1. `this` 在全局作用域**
在**非严格模式**下：
```javascript
console.log(this); // 浏览器中指向 window
```
在**严格模式**下：
```javascript
"use strict";
console.log(this); // undefined
```

---

## **2. `this` 在普通函数调用**
**普通函数调用时，`this` 指向的是** **调用它的对象**，如果没有对象，则默认指向 `window`（严格模式下为 `undefined`）。
```javascript
function sayHi() {
    console.log(this); 
}

sayHi(); // 非严格模式：window ；严格模式：undefined
```
---
## **3. `this` 在对象方法中**
当 `this` 在**对象方法**中使用，它指向**调用它的对象**：
```javascript
const obj = {
    name: "张三",
    sayHi() {
        console.log(this.name);
    }
};

obj.sayHi(); // "张三"
```
但如果直接赋值给一个变量或传递给别的函数，`this` 可能丢失：
```javascript
const fn = obj.sayHi;
fn(); // ❌ 这里的 this 指向 window（非严格模式）或 undefined（严格模式）
```

---

## **4. `this` 在构造函数**
在**构造函数**中，`this` 指向**新创建的对象**：
```javascript
function Person(name) {
    this.name = name;
}

const p = new Person("李四");
console.log(p.name); // "李四"
```

---

## **5. `this` 在 `class` 类**
在 `class` 方法中，`this` 也指向类的实例：
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    sayHi() {
        console.log(this.name);
    }
}

const p = new Person("王五");
p.sayHi(); // "王五"
```
但如果直接赋值给变量，`this` 可能变成 `undefined`：
```javascript
const fn = p.sayHi;
fn(); // ❌ this 丢失，变成 undefined
```
解决方案：
- **使用 `bind` 绑定 `this`**
  ```javascript
  const boundFn = p.sayHi.bind(p);
  boundFn(); // ✅ "王五"
  ```
- **用箭头函数**
  ```javascript
  class Person {
      constructor(name) {
          this.name = name;
          this.sayHi = () => {
              console.log(this.name);
          };
      }
  }
  const p = new Person("赵六");
  const fn = p.sayHi;
  fn(); // ✅ "赵六"
  ```

---

## **6. `this` 在箭头函数**
箭头函数不会创建自己的 `this`，它会继承**定义它的作用域**的 `this`。
```javascript
const obj = {
    name: "小明",
    sayHi: function() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};

obj.sayHi(); // "小明"
```
箭头函数适用于 **回调函数** 或 **类方法**，避免 `this` 丢失：
```javascript
class Timer {
    constructor() {
        this.seconds = 0;
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
}

const t = new Timer(); // 每秒打印 1, 2, 3...
```

---

## **7. `this` 在 `call`、`apply`、`bind`**
### **`call` 和 `apply`**
- `call(thisArg, arg1, arg2, ...)`：调用函数，并手动指定 `this`
- `apply(thisArg, [arg1, arg2, ...])`：与 `call` 相同，但参数是数组

```javascript
function greet(msg) {
    console.log(`${msg}, 我是 ${this.name}`);
}

const person = { name: "张三" };

greet.call(person, "你好"); // "你好, 我是 张三"
greet.apply(person, ["你好"]); // "你好, 我是 张三"
```

### **`bind`**
`bind(thisArg)` **不会立即调用函数，而是返回一个新函数**，可以稍后执行：
```javascript
const boundGreet = greet.bind(person, "Hello");
boundGreet(); // "Hello, 我是 张三"
```

---

## **8. `this` 在 `setTimeout` / `setInterval`**
普通函数会导致 `this` 指向 `window`，需要 `bind` 绑定或者使用箭头函数：
```javascript
const obj = {
    name: "小红",
    sayHi() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
obj.sayHi(); // "小红"
```

如果用普通函数：
```javascript
const obj = {
    name: "小红",
    sayHi() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    }
};
obj.sayHi(); // ❌ undefined
```
解决方法：
```javascript
setTimeout(this.sayHi.bind(this), 1000);
```

---

## **9. `this` 在 DOM 事件**
在 DOM 事件处理程序中，`this` **默认指向触发事件的 DOM 元素**：
```javascript
document.getElementById("btn").addEventListener("click", function() {
    console.log(this); // 指向 btn 元素
});
```
如果要让 `this` 指向对象，使用箭头函数：
```javascript
const obj = {
    name: "事件对象",
    handleClick: function() {
        document.getElementById("btn").addEventListener("click", () => {
            console.log(this.name);
        });
    }
};
obj.handleClick(); // "事件对象"
```

---

## **总结**
| 调用方式 | `this` 指向 |
|---------|-----------|
| **全局调用** | `window`（严格模式下 `undefined`） |
| **普通函数** | `window` 或 `undefined`（严格模式） |
| **对象方法** | 调用它的对象 |
| **构造函数** | 新创建的实例 |
| **类方法** | 类的实例 |
| **箭头函数** | 继承定义它的作用域的 `this` |
| **事件处理函数** | 绑定事件的 DOM 元素 |
| **`call` / `apply` / `bind`** | 手动指定 `this` |

---

## **记住 `this` 规则**
1. **箭头函数不会创建 `this`，它继承外部作用域的 `this`。**
2. **普通函数 `this` 取决于调用方式**：
   - **直接调用** → `window`（严格模式 `undefined`）。
   - **对象方法调用** → `this` 指向对象。
   - **构造函数 `new` 调用** → `this` 指向新对象。
3. **事件处理函数** 的 `this` 指向事件目标。
4. **`call` / `apply` / `bind` 可以修改 `this`。**

掌握这些规则，你就能轻松理解 `this` 在各种场景下的行为！ 🚀

## 📌 手动实现 call apply  bind


在 JavaScript 中，`call`、`apply` 和 `bind` 都是用来改变函数执行时的 `this` 的方法。它们的功能虽然类似，但略有不同。我们可以通过手动实现这些方法来更好地理解它们的工作原理。

### **1. 实现 `call` 方法**

`call` 方法用于立即调用函数，并且允许我们手动指定 `this` 的指向，以及传递参数。

#### `call` 实现
```javascript
Function.prototype.myCall = function(context, ...args) {
  // 判断 context 是否传入，如果没有传入，则指向全局对象（浏览器中是 window）
  context = context || window;

  // 将当前函数（this）赋值给 context 的一个临时属性
  context.fn = this;

  // 调用该函数并传递参数
  const result = context.fn(...args);

  // 删除临时的 fn 属性，避免污染外部对象
  delete context.fn;

  // 返回执行结果
  return result;
};
```

#### 使用示例
```javascript
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'Alice' };
greet.myCall(person, 'Hello'); // "Hello, Alice"
```
```js
const obj = {
    name: "张三",
    sayHi(age,gender) {
        console.log(this.name,age,gender);
    }
};

obj.sayHi(); // "张三"
const fn = obj.sayHi
fn(); // ❌ 报错，因为 this 是 undefined
fn.call(obj,17,'girl'); //张三 17 girl
```

### **2. 实现 `apply` 方法**

`apply` 方法与 `call` 类似，唯一的区别是参数传递方式不同：`call` 接受的是一个参数列表，而 `apply` 接受的是一个参数数组。

#### `apply` 实现
```javascript
Function.prototype.myApply = function(context, args) {
  context = context || window;

  // 将当前函数（this）赋值给 context 的一个临时属性
  context.fn = this;

  // 使用数组展开运算符传递参数
  const result = context.fn(...args);

  // 删除临时的 fn 属性
  delete context.fn;

  // 返回执行结果
  return result;
};
```

#### 使用示例
```javascript
function greet(message, exclamation) {
  console.log(`${message}, ${this.name}${exclamation}`);
}

const person = { name: 'Bob' };
greet.myApply(person, ['Hi', '!']); // "Hi, Bob!"


```

```js
const obj = {
    name: "张三",
    sayHi(age,gender) {
        console.log(this.name,age,gender);
    }
};

obj.sayHi(); // "张三"
const fn = obj.sayHi
fn(); // ❌ 报错，因为 this 是 undefined
fn.apply(obj,[17,'girl']); //张三 17 girl

```

### **3. 实现 `bind` 方法**

要自己实现一个 `bind` 函数，我们需要理解 `Function.prototype.bind` 的核心功能：

1. **返回一个新的函数**，但不立即执行。
2. **新函数的 `this` 被永久绑定**到 `bind` 传入的对象。
3. **新函数可以接收额外的参数**，并在调用时继续追加参数。
4. **支持 `new` 调用时，`this` 仍然指向新实例，而不是绑定的对象。**

---

## **1️⃣ 原生 `bind` 行为示例**
```js
function sayHi(age, gender) {
    console.log(this.name, age, gender);
}

const person = { name: "张三" };

const boundFn = sayHi.bind(person, 18);
boundFn("male"); // "张三", 18, "male"
```
---

## **2️⃣ 手写 `bind` 实现**
```js
Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("myBind 必须调用在函数上");
    }

    const fn = this; // 保存原函数

    function boundFunction(...newArgs) {
        // `this instanceof boundFunction` 用于 `new` 调用情况
        return fn.apply(
            this instanceof boundFunction ? this : context,
            [...args, ...newArgs]
        );
    }

    // 让 `boundFunction` 继承 `fn` 的原型
    boundFunction.prototype = Object.create(fn.prototype);
    
    return boundFunction;
};
```
---

## **3️⃣ 测试 `myBind`**
```js
function sayHi(age, gender) {
    console.log(this.name, age, gender);
}

const person = { name: "张三" };

// 绑定 `person`，并预设 age = 18
const boundFn = sayHi.myBind(person, 18);
boundFn("male"); // "张三", 18, "male"

// 测试 `new` 绑定
function Person(name) {
    this.name = name;
}
const BoundPerson = Person.myBind(person);
const newPerson = new BoundPerson("李四");
console.log(newPerson.name); // "李四"，`new` 绑定优先于 `bind`
console.log(newPerson instanceof Person); // true
console.log(newPerson instanceof BoundPerson); // true
```
---

## **4️⃣ `myBind` 关键点**
| 功能 | 代码 |
|------|------|
| **返回新函数** | `return boundFunction;` |
| **绑定 `this`** | `fn.apply(context, [...args, ...newArgs]);` |
| **支持参数传递** | `(...args)` & `(...newArgs)` |
| **支持 `new` 绑定** | `this instanceof boundFunction ? this : context;` |
| **继承原函数原型** | `boundFunction.prototype = Object.create(fn.prototype);` |

---

### **🚀 结论**
✅ `myBind` 实现了和原生 `bind` 一致的功能，包括：
- **`this` 绑定**
- **参数预设**
- **支持 `new` 调用**
- **继承原函数的原型**

💡 **你可以直接用 `myBind` 代替 `Function.prototype.bind` 了！** 🚀


### 关于bind 详细解答
当一个**被 `bind()` 绑定的函数**被 `new` 关键字调用时，`this` 的指向**不会是 `bind()` 绑定时的对象**，而是**新创建的实例**。也就是说，`new` 的优先级**高于** `bind()` 绑定的 `this`。  

---

## **📌 代码示例**
```javascript
function Person(name) {
    this.name = name;
}

const obj = { name: "Bound Object" };

// 绑定 obj 到 Person
const BoundPerson = Person.bind(obj);

const p = new BoundPerson("Alice");

console.log(p.name); // "Alice"
console.log(p instanceof Person); // true
console.log(p instanceof BoundPerson); // true
```
### **🚀 结果**
1. `p.name` 不是 `"Bound Object"`，而是 `"Alice"`，因为 `new` 的优先级更高。
2. `p` 是 `Person` 的实例（`p instanceof Person === true`）。
3. `p` 也是 `BoundPerson` 的实例（`p instanceof BoundPerson === true`）。

---

## **📌 为什么 `new` 会覆盖 `bind()` 的 `this`？**
当 `new` 关键字调用一个函数：
1. **创建一个新的对象**，并把 `this` 绑定到这个新对象上。
2. **执行构造函数**，如果没有 `return` 其他对象，则返回这个新对象。
3. **`bind()` 返回的是一个新函数**，但 `new` 仍然会按照 `new` 的逻辑创建实例。

`bind()` 主要用于改变 `this`，但 `new` **强制把 `this` 绑定到新创建的对象**，所以 `bind()` 绑定的 `this` 被 `new` 覆盖了。

---

## **📌 `bind()` + `new` 时 `prototype` 继承**
```javascript
function Animal(type) {
    this.type = type;
}
Animal.prototype.getType = function() {
    return this.type;
};

// 绑定时的对象
const obj = { type: "Bound Animal" };

// 绑定 Animal
const BoundAnimal = Animal.bind(obj);

const a = new BoundAnimal("Dog");

console.log(a.type); // "Dog"  (new 的优先级比 bind 高)
console.log(a instanceof Animal); // true
console.log(a.getType()); // "Dog"  (继承了 Animal.prototype)
```

### **📌 关键点**
1. `a` 继承了 `Animal.prototype`，所以 `a.getType()` 正常工作。
2. `a.type` 仍然是 `"Dog"`，因为 `new` 使 `this` 指向新创建的实例，而 `bind` 绑定的 `this` 被覆盖。

---

## **📌 `bind()` 还能改 `new` 的 `this` 吗？**
如果 `bind()` **修改了原型链**，那么 `new` 仍然能继承**原构造函数**的 `prototype`，但 `this` 还是指向新创建的对象：
```javascript
function Car(brand) {
    this.brand = brand;
}
Car.prototype.getBrand = function() {
    return this.brand;
};

// 绑定时的对象
const obj = { brand: "Bound Car" };

// 绑定 Car
const BoundCar = Car.bind(obj);

// 改变 prototype
BoundCar.prototype = Object.create(Car.prototype);

const myCar = new BoundCar("Toyota");

console.log(myCar.brand); // "Toyota"
console.log(myCar instanceof Car); // true
console.log(myCar.getBrand()); // "Toyota"
```
**📌 这样做的意义**
- `myCar` 仍然是 `Car` 的实例（继承了 `Car.prototype`）。
- `this` 仍然指向 `new` 创建的新对象，而不是 `obj`。

---

## **🎯 结论**
| **情况** | **`this` 指向** | **实例继承** |
|-----------|----------------|---------------|
| 直接 `bind()` | 绑定到指定对象 | `prototype` 继承自原函数 |
| `new` 调用 `bind()` 结果 | 指向新创建的实例 | **仍然继承** 原函数 `prototype` |

✅ **`new` 优先级比 `bind` 高**，所以 `this` 还是 `new` 创建的新对象，但 `prototype` 继承不受影响。

### **总结**

1. **`call`**:
   - 立即调用函数。
   - `this` 被绑定到指定的对象。
   - 参数传递是按顺序传递的，而不是数组。

2. **`apply`**:
   - 立即调用函数。
   - `this` 被绑定到指定的对象。
   - 参数传递是通过数组的形式传递。

3. **`bind`**:
   - 返回一个新函数，不立即执行。
   - `this` 被绑定到指定的对象，并且允许预先传入一些参数。
   - 当一个被 bind() 绑定的函数被 new 关键字调用时，this 的指向不会是 bind() 绑定时的对象，而是新创建的实例。也就是说，new 的优先级高于 bind() 绑定的 this。

---

通过手动实现这些方法，我们可以更好地理解 `this` 的绑定以及如何控制函数的执行上下文。