---
title: Promise 原理、代码与应用
date: 2019-06-19
tags:
  - js 基础
  - promise
---

# 深入理解 Promise：原理、代码与应用

在现代 JavaScript 开发中，Promise 是处理异步操作的利器。它帮助我们摆脱回调地狱，写出更优雅、易读的异步代码。本文将深入探讨 Promise 的原理、代码实现以及实际应用。

## 一、Promise 的原理

### 1.1 什么是 Promise？

Promise 是一个对象，它代表了一个异步操作的最终完成 (或失败) 及其结果值。简单来说，Promise 就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

### 1.2 Promise 的三种状态

- **Pending（进行中）**:  初始状态，既不是成功，也不是失败。
- **Fulfilled（已成功）**:  意味着操作成功完成。
- **Rejected（已失败）**:  意味着操作失败。

### 1.3 Promise 的特点

- **状态不可逆**:  Promise 的状态一旦改变，就不会再变。
- **链式调用**:  Promise 支持链式调用，可以避免回调地狱。
- **错误冒泡**:  Promise 链中的错误会一直向后传递，直到被捕获。

## 二、Promise 的代码实现

### 2.1 基本用法

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('成功！');
    } else {
      reject('失败！');
    }
  }, 1000);
});

promise
  .then(result => {
    console.log(result); // 成功！
  })
  .catch(error => {
    console.log(error); // 失败！
  });
```

### 2.2 Promise 的静态方法

- **Promise.resolve(value)**:  返回一个以给定值解析后的 Promise 对象。
- **Promise.reject(reason)**:  返回一个带有拒绝原因的 Promise 对象。
- **Promise.all(iterable)**:  等待所有 Promise 完成，或者其中任何一个 Promise 失败。
- **Promise.race(iterable)**:  等待第一个 Promise 完成或失败。

### 2.3 Promise 的实例方法

- **then(onFulfilled, onRejected)**:  添加 fulfillment 和 rejection 回调函数。
- **catch(onRejected)**:  添加 rejection 回调函数。
- **finally(onFinally)**:  添加一个回调函数，无论 Promise 最终状态如何都会执行。

## 三、Promise 的应用

### 3.1 异步编程

Promise 最常见的应用场景就是异步编程，例如：

- **AJAX 请求**:  使用 Promise 处理 AJAX 请求的结果。
- **定时器**:  使用 Promise 封装 setTimeout 和 setInterval。
- **文件读写**:  使用 Promise 处理文件读写操作。

### 3.2 并发控制

使用 Promise.all 可以实现并发控制，例如：

```javascript
const promises = [
  fetch('/api/data1'),
  fetch('/api/data2'),
  fetch('/api/data3')
];

Promise.all(promises)
  .then(results => {
    // 处理所有请求的结果
  })
  .catch(error => {
    // 处理错误
  });
```

### 3.3 错误处理

Promise 提供了 catch 方法来捕获错误，例如：

```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // 处理数据
  })
  .catch(error => {
    // 处理错误
  });
```

## 四、手写实现一个简易 Promise

为了更好地理解 Promise 的工作原理，我们可以尝试手动实现一个简易版的 Promise。这个实现将涵盖基本功能，并展示静态方法的实现原理。

### 4.1 实现基本 Promise

```javascript
class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // 初始状态
    this.value = undefined; // 成功时的值
    this.reason = undefined; // 失败时的原因
    this.onFulfilledCallbacks = []; // 成功回调队列
    this.onRejectedCallbacks = []; // 失败回调队列

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn()); // 执行成功回调
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn()); // 执行失败回调
      }
    };

    try {
      executor(resolve, reject); // 立即执行 executor
    } catch (error) {
      reject(error); // 捕获 executor 中的错误
    }
  }

  then(onFulfilled, onRejected) {
    // 参数校验，确保是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => { // 异步执行
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.state === 'rejected') {
        setTimeout(() => { // 异步执行
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() => { // 将回调加入队列
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => { // 将回调加入队列
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

    static resolve(value) {
      return new MyPromise((resolve, reject) => {
        if (value instanceof MyPromise) {
          return value;
        }
        if (value && typeof value.then === 'function') {
          return value.then(resolve, reject);
        }
        resolve(value);
      });
    }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 2.3.1 如果 promise2 和 x 是同一个对象，抛出 TypeError
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  // 2.3.2 如果 x 是一个 Promise 实例
  if (x instanceof MyPromise) {
    // 如果 x 是 pending 状态，则等待其完成
    if (x.state === 'pending') {
      x.then(
        (value) => resolvePromise(promise2, value, resolve, reject),
        reject
      );
    } else {
      // 如果 x 已经是 fulfilled 或 rejected 状态，直接调用 resolve 或 reject
      x.then(resolve, reject);
    }
    return;
  }

  // 2.3.3 如果 x 是一个对象或函数
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let then;
    try {
      // 2.3.3.1 获取 x.then
      then = x.then;
    } catch (error) {
      // 2.3.3.2 如果获取 x.then 时抛出异常，则以该异常为原因 reject promise2
      return reject(error);
    }

    // 2.3.3.3 如果 then 是一个函数
    if (typeof then === 'function') {
      let called = false; // 防止多次调用
      try {
        // 2.3.3.3.1 调用 then 方法
        then.call(
          x,
          (y) => {
            if (!called) {
              called = true;
              // 递归解析 y，直到 y 不是 thenable
              resolvePromise(promise2, y, resolve, reject);
            }
          },
          (r) => {
            if (!called) {
              called = true;
              reject(r);
            }
          }
        );
      } catch (error) {
        // 2.3.3.3.4 如果调用 then 方法时抛出异常
        if (!called) {
          called = true;
          reject(error);
        }
      }
    } else {
      // 2.3.3.4 如果 then 不是函数，则以 x 为值 resolve promise2
      resolve(x);
    }
  } else {
    // 2.3.4 如果 x 不是对象或函数，则以 x 为值 resolve promise2
    resolve(x);
  }
}
```

---
### 需要递归解析promise
1. **防止循环引用**  
   如果 `promise2` 和 `x` 是同一个对象，直接抛出 `TypeError`，避免无限递归。

2. **处理 Promise 实例**  
   如果 `x` 是一个 Promise 实例，根据其状态决定是等待其完成还是直接调用 `resolve` 或 `reject`。

3. **处理 thenable 对象**  
   如果 `x` 是一个对象或函数，并且具有 `then` 方法（即 thenable 对象），则调用 `then` 方法，并递归解析其返回值。

4. **防止多次调用**  
   使用 `called` 标志位确保 `resolve` 或 `reject` 只被调用一次，避免多次调用导致的问题。

5. **递归解析**  
   如果 `then` 方法的返回值仍然是一个 thenable 对象，递归调用 `resolvePromise`，直到解析出一个非 thenable 的值。

---

### 示例测试

```javascript
const promise = new MyPromise((resolve) => {
  resolve(42);
});

promise
  .then((value) => {
    console.log(value); // 42
    return new MyPromise((resolve) => {
      resolve(value * 2);
    });
  })
  .then((value) => {
    console.log(value); // 84
    return {
      then(resolve) {
        resolve(value + 10);
      },
    };
  })
  .then((value) => {
    console.log(value); // 94
  });
```

---

### 总结

改进后的 `resolvePromise` 方法更加科学和健壮，能够处理各种复杂的场景，包括 thenable 对象、循环引用和多次调用等问题。它是实现一个符合 Promise/A+ 规范的 Promise 的核心部分。通过这种方式，我们可以更好地理解 Promise 的内部机制，并写出更可靠的异步代码。

### 4.2 实现静态方法

### 4.2.1 MyPromise.resolve

```javascript
MyPromise.resolve = function(value) {
  if (value instanceof MyPromise) {
    return value;
  }
  return new MyPromise((resolve) => {
    resolve(value);
  });
};
```

### 4.2.2 MyPromise.reject

```javascript
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};
```

### 4.2.3 MyPromise.all
::: important 
异步串行并发 都成功了 才成功 如果有失败的立马失败
按输入顺序返回（即使某些 Promise 先完成）
:::

```javascript
MyPromiseAll = function(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    if (promises.length === 0) {
      return resolve([]); // ✅ 边界情况：空数组应直接 resolve
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          results[i] = value;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
const p1 = Promise.resolve(1);
const p2 = 42;
const p3 = new Promise((resolve) => setTimeout(() => resolve('done'), 100));

MyPromiseAll([p1, p2, p3])
  .then((res) => console.log('成功:', res))  // [1, 42, 'done']
  .catch((err) => console.error('失败:', err));

```

### 4.2.4 MyPromise.race
::: important 
比的是谁先结束 谁先结束 把结果返给下层的 then
:::

```javascript
function MyPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p)
        .then(resolve)   // 谁先成功就 resolve
        .catch(reject);  // 谁先失败就 reject
    }
  });
}

```
### 4.2.4 MyPromise.finally
::: important 
原型上的方法 无论如何都执行 没有参数 其实就是执行 then 方法
内部可以返回一个 promise 成功或者失败的结果将作为 then 的参数
:::

```js
Promise.prototype.finally = function(callback) {
  return this.then(
    data => {
      return Promise.resolve(callback()).then(() => data); //让本次的返回值作为下一次的参数
    },
    err => {
      return Promise.resolve(callback()).then(() => {
        throw err;
      }); //让本次的返回值作为下一次的参数
    }
  );
};
```
## 五 中断promise
在 JavaScript 中，Promise 本身并没有提供直接的中断机制。一旦 Promise 开始执行，它就会一直运行直到完成（`resolve` 或 `reject`）。然而，我们可以通过一些技巧来实现类似“中断”的效果。以下是几种常见的中断 Promise 的方法：

---

## 1. **使用 `AbortController`（推荐）**

`AbortController` 是现代浏览器提供的一个 API，通常用于中断 `fetch` 请求，但也可以用于中断 Promise。

### 实现方式

```javascript
function cancellablePromise(executor) {
  let abortController = new AbortController();
  let signal = abortController.signal;

  const promise = new Promise((resolve, reject) => {
    // 监听中断信号
    signal.addEventListener('abort', () => {
      reject(new Error('Promise was aborted'));
    });

    // 执行异步操作
    executor(resolve, reject, signal);
  });

  // 返回 Promise 和中断方法
  return {
    promise,
    abort: () => abortController.abort(),
  };
}

// 使用示例
const { promise, abort } = cancellablePromise((resolve, reject, signal) => {
  setTimeout(() => {
    if (signal.aborted) return; // 检查是否已中断
    resolve('Success!');
  }, 2000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)); // 捕获中断错误

// 中断 Promise
setTimeout(() => abort(), 1000); // 1 秒后中断
```

### 优点
- 使用标准的 `AbortController` API，与现代浏览器兼容。
- 可以与其他支持 `AbortSignal` 的 API（如 `fetch`）结合使用。

### 缺点
- 需要手动检查 `signal.aborted` 状态。

---

## 2. **手动封装可中断的 Promise**

如果不使用 `AbortController`，可以通过手动封装一个可中断的 Promise。

### 实现方式

```javascript
function cancellablePromise(executor) {
  let isCancelled = false;

  const promise = new Promise((resolve, reject) => {
    executor(
      (value) => {
        if (!isCancelled) resolve(value);
      },
      (reason) => {
        if (!isCancelled) reject(reason);
      }
    );
  });

  return {
    promise,
    cancel: () => {
      isCancelled = true;
    },
  };
}

// 使用示例
const { promise, cancel } = cancellablePromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 2000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 中断 Promise
setTimeout(() => cancel(), 1000); // 1 秒后中断
```

### 优点
- 实现简单，不依赖外部 API。
- 适用于不支持 `AbortController` 的环境。

### 缺点
- 需要手动管理 `isCancelled` 状态。

---

## 3. **使用 `Promise.race` 实现超时中断**

通过 `Promise.race` 可以实现超时中断的效果。

### 实现方式

```javascript
function timeoutPromise(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}

// 使用示例
const longRunningPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Success!'), 5000);
});

timeoutPromise(longRunningPromise, 2000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)); // 捕获超时错误
```

### 优点
- 实现简单，适合超时场景。
- 不需要额外的状态管理。

### 缺点
- 只能实现超时中断，无法手动中断。

---

## 4. **使用第三方库**

一些第三方库（如 `axios`、`bluebird` 等）提供了内置的中断机制。

### 示例：使用 `axios` 的 `CancelToken`

```javascript
const axios = require('axios');

const source = axios.CancelToken.source();

axios
  .get('https://jsonplaceholder.typicode.com/todos/1', {
    cancelToken: source.token,
  })
  .then((response) => console.log(response.data))
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.log('Error:', error.message);
    }
  });

// 中断请求
setTimeout(() => source.cancel('Request canceled by user'), 1000);
```

### 优点
- 直接使用库的功能，无需手动实现。
- 适用于复杂的异步操作（如 HTTP 请求）。

### 缺点
- 依赖第三方库。

---

## 总结

| 方法                   | 适用场景                           | 优点                     | 缺点                          |
| ---------------------- | ---------------------------------- | ------------------------ | ----------------------------- |
| `AbortController`      | 现代浏览器环境，支持 `AbortSignal` | 标准化，兼容性好         | 需要手动检查 `signal.aborted` |
| 手动封装               | 简单场景，无外部依赖               | 实现简单，不依赖外部 API | 需要手动管理状态              |
| `Promise.race`         | 超时中断                           | 实现简单                 | 只能实现超时中断              |
| 第三方库（如 `axios`） | 复杂异步操作（如 HTTP 请求）       | 功能强大，无需手动实现   | 依赖第三方库                  |

根据具体场景选择合适的方法。如果需要兼容性和标准化，推荐使用 `AbortController`；如果只是简单场景，手动封装即可。


## 六、总结

Promise 是 JavaScript 异步编程的基石，它帮助我们写出更优雅、易读的异步代码。掌握 Promise 的原理、代码实现以及应用场景，对于提升 JavaScript 开发能力至关重要。

**更进一步：**

- 了解 async/await 语法糖，它可以让异步代码看起来像同步代码一样。
- 学习 Promise 的实现原理，例如 Promise/A+ 规范。
- 探索其他异步编程方案，例如 Generator 和 Observable。

**注意：** 这个简易版的 Promise 仅用于学习目的，并不建议在生产环境中使用。生产环境中请使用经过充分测试的 Promise 实现，例如浏览器原生提供的 Promise 或第三方库。