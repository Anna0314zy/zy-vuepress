---
title: javascript中的作用域
date: 2019-06-05
tags:
  - Javascript
---

闭包（Closure）是 JavaScript 中的一个重要概念，常常出现在面试题中。理解闭包有助于深入掌握 JavaScript 的作用域和函数行为。

## js 作用域

闭包是指**闭包就是能够读取其他函数内部变量的函数**
在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

### 一、变量的作用域

要理解闭包，首先必须理解Javascript特殊的变量作用域。

变量的作用域无非就是两种：全局变量和局部变量。

Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。

### 作用域链的定义及形成
当所需要的变量在所在的作用域中查找不到的时候，它会一层一层向上查找，直到找到全局作用域还没有找到的时候，就会放弃查找。这种一层一层的关系，就是作用域链。
在 JavaScript 中，**变量提升**（Variable Hoisting）是指在代码执行前，编译器将变量声明提升到作用域的顶部。这意味着，无论变量在代码中出现的位置如何，JavaScript 都会在执行之前将其声明提升到作用域的最前面。

### **变量提升的关键点：**

1. **`var` 声明的变量：**
   - **提升行为：** 使用 `var` 声明的变量会被提升到函数或全局作用域的顶部，但仅提升声明，不包括赋值操作。
   - **示例：**
     ```javascript
     console.log(a); // 输出：undefined
     var a = 10;
     console.log(a); // 输出：10
     ```
     在上述代码中，`var a` 的声明被提升到顶部，但赋值操作 `a = 10` 保持在原位置。因此，第一次 `console.log(a)` 输出 `undefined`，第二次输出 `10`。

2. **函数声明的提升：**
   - **提升行为：** 函数声明会被提升到作用域顶部，包括函数的声明和定义。
   - **示例：**
     ```javascript
     greet(); // 输出：Hello, world!

     function greet() {
       console.log('Hello, world!');
     }
     ```
     在此示例中，函数 `greet` 的声明和定义被提升到顶部，因此可以在声明之前调用。

3. **`let` 和 `const` 声明的变量：**
   - **提升行为：** `let` 和 `const` 声明的变量也会被提升，但不会初始化。访问这些变量会导致 `ReferenceError`，因为它们处于“暂时性死区”（Temporal Dead Zone）。
   - **示例：**
     ```javascript
     console.log(a); // 抛出 ReferenceError
     let a = 10;
     ```
     在上述代码中，访问 `a` 会抛出 `ReferenceError`，因为 `a` 虽然被提升，但在赋值之前处于暂时性死区。

**相关面试题：**

1. **变量提升的输出结果：**
   ```javascript
   console.log(a); // 输出什么？
   var a = 5;
   ```
   **答案：** 输出 `undefined`。因为变量 `a` 的声明被提升，但赋值操作保持在原位置。

2. **函数提升的调用顺序：**
   ```javascript
   test(); // 输出什么？
   function test() {
     console.log('Function test called');
   }
   ```
   **答案：** 输出 `'Function test called'`。因为函数声明会被提升，包括其定义。

3. **`let` 和 `const` 的提升行为：**
   ```javascript
   console.log(b); // 输出什么？
   let b = 10;
   ```
   **答案：** 抛出 `ReferenceError`。因为 `let` 声明的变量在赋值前处于暂时性死区。

**深入理解：**

在 JavaScript 的执行上下文中，变量提升发生在创建执行上下文的阶段。在这个阶段，所有的变量声明（使用 `var`）和函数声明都会被扫描并提升到作用域的顶部。然而，`let` 和 `const` 声明的变量不会被初始化，访问它们会导致运行时错误。

**参考资料：**

- [JavaScript 变量提升面试题](https://www.cnblogs.com/mengfangui/p/8670526.html)
- [JS面试题：变量提升和函数提升](https://juejin.cn/post/7054847872361037837)

理解变量提升对于编写高质量的 JavaScript 代码至关重要，特别是在处理作用域和变量声明时。 

### 二、如何从外部读取局部变量？

出于种种原因，我们有时候需要得到函数内的局部变量。但是，前面已经说过了，正常情况下，这是办不到的，只有通过变通方法才能实现。

那就是在函数的内部，再定义一个函数。

```js
function f1() {
	var n = 999;

	function f2() {
		alert(n); // 999
	}
}
```

在上面的代码中，函数f2就被包括在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的。但是反过来就不行，f2内部的局部变量，对f1就是不可见的。这就是Javascript语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，我们不就可以在f1外部读取它的内部变量了吗！

```js
function f1() {
	var n = 999;

	function f2() {
		alert(n);
	}

	return f2;
}

var result = f1();

result(); // 999
```

## 三、闭包的概念

上一节代码中的f2函数，就是闭包。

各种专业文献上的"闭包"（closure）定义非常抽象，很难看懂。我的理解是，闭包就是能够读取其他函数内部变量的函数。

由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。

所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

## 四、闭包的用途

闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

怎么来理解这句话呢？请看下面的代码。

```js
function f1() {
	var n = 999;

	nAdd = function () {
		n += 1;
	};

	function f2() {
		alert(n);
	}

	return f2;
}

var result = f1();

result(); // 999

nAdd(); // 全局变量

result(); // 1000
```
在这段代码中，result实际上就是闭包f2函数。它一共运行了两次，第一次的值是999，第二次的值是1000。这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。

为什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。

这段代码中另一个值得注意的地方，就是"nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter <font color="red">**可以在函数外部对函数内部的局部变量进行操作。**</font>

## 五、使用闭包的注意点

1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。
## 思考 

```js
var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());

```
```js
var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());

```
## 常见的闭包面试题

### **1. 使用闭包实现私有变量**

请实现一个计数器函数，使得它具有 `increment` 和 `getValue` 两个方法，且内部计数值不能被外部直接修改。

**解答：**

```javascript
function createCounter() {
	let count = 0;
	return {
		increment: function () {
			count++;
		},
		getValue: function () {
			return count;
		},
	};
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // 输出：1
```

在这个例子中，`count` 变量被封装在 `createCounter` 的闭包中，外部无法直接访问或修改，只能通过 `increment` 和 `getValue` 方法操作。

###  **2. 闭包与循环**

以下代码的输出是什么？如何修改以获得预期结果？

```javascript
for (var i = 0; i < 3; i++) {
	setTimeout(function () {
		console.log(i);
	}, 1000);
}
```

**解答：**

上述代码将在 1 秒后连续输出三次数字 `3`。这是因为 `setTimeout` 中的回调函数在全局作用域中执行，而此时循环已经结束，`i` 的值为 `3`。

要使每次循环的 `i` 值被正确捕获，可以使用立即调用函数表达式（IIFE）创建闭包：

```javascript
for (var i = 0; i < 3; i++) {
	(function (i) {
		setTimeout(function () {
			console.log(i);
		}, 1000);
	})(i);
}
```

或者使用 `let` 声明块级作用域的变量：

```javascript
for (let i = 0; i < 3; i++) {
	setTimeout(function () {
		console.log(i);
	}, 1000);
}
```

这两种方法都能使输出分别为 `0`、`1`、`2`。

### **3. 闭包与内存泄漏**

使用闭包时需要注意可能导致的内存泄漏问题。如果闭包中引用了不再需要的对象，可能导致这些对象无法被垃圾回收器回收，从而引发内存泄漏。

**示例：**

```javascript
function createClosure() {
	let largeArray = new Array(1000000).fill("*");
	return function () {
		console.log(largeArray[0]);
	};
}

const closure = createClosure();
// 此时 largeArray 仍然被引用，无法被回收
```

在上述示例中，`largeArray` 被闭包引用，即使在函数执行后，`largeArray` 仍然存在于内存中。为避免这种情况，应在不再需要时手动解除引用：

```javascript
function createClosure() {
	let largeArray = new Array(1000000).fill("*");
	return function () {
		console.log(largeArray[0]);
		largeArray = null; // 解除引用
	};
}

const closure = createClosure();
closure(); // 使用后解除 largeArray 的引用
```
### 变量提升

```js
function foo() {
  console.log( this.a );
}

function doFoo() {
  foo();
}

var obj = {
  a: 1,
  doFoo: doFoo
};

var a = 2; 
obj.doFoo() // 
// 2


```

## 总结

闭包是 JavaScript 中强大的特性，能够实现数据封装和状态持久化。在使用闭包时，需要注意可能引发的内存泄漏问题，确保及时解除不再需要的引用。深入理解闭包的工作原理，有助于编写出更高效、更健壮的代码。
