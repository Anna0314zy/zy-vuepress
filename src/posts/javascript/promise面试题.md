---
title: Promise 手写试题
date: 2019-06-19
tags:
  - Javascript
  - promise
---
## 1. 代码执行顺序

```js
console.log(1);

new Promise(resolve => {
    resolve();
    console.log(2);
})
.then(() => {
    console.log(3);
});

setTimeout(() => {
    console.log(4);
}, 0);

console.log(5);
 // 1 2 5 3 4
```
## 2.写一个promise 重试 3次的函数
```js

const retryPromise = (promiseFn, retries = 3) =>
    promiseFn().catch((err) =>
      retries > 1 ? retryPromise(promiseFn, retries - 1) : Promise.reject(err)
    );
```

```js
async function retryPromise2(promiseFn, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await promiseFn(attempt);
      } catch (err) {
        if (attempt === retries) throw err; // 最后一次失败，抛出错误
      }
    }
  }
  ```


## 3.多个promise 并行执行 不超过3个

```js

async function createRequest(tasks, pool = 5) {
    let results = [];
    let taskQueue = [];
  
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]();
      taskQueue.push(task);
  
      task.then(res => {
        results[i] = res; // 按原顺序存储
        taskQueue.splice(taskQueue.indexOf(task), 1); // 从队列移除
      });
  
      if (taskQueue.length >= pool) {
        await Promise.race(taskQueue); // 等待最快完成的任务
      }
    }
  
    await Promise.all(taskQueue); // 等待剩余任务完成
    return results;
  }

```






## 4.写一个可以中断的promise
```js
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

```

✅使用示例

```js

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

## 5.实现 Promise.race Promise.resolve Promise.all

### 5.1 MyPromise.resolve

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

### 5.2 MyPromise.reject

```javascript
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};
```
### 5.3 MyPromise.all
::: important 
异步串行并发 都成功了 才成功 如果有失败的立马失败
按输入顺序返回（即使某些 Promise 先完成）
:::

```javascript
MyPromise.all = function(promises) {
  return new MyPromise((resolve, reject) => {
    const results = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
       Promise.resolve(promises[i]).then(
        (value) => {
          results[i] = value;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
};
```

### 5.4 MyPromise.race
::: important 
比的是谁先结束 谁先结束 把结果返给下层的 then
:::

```javascript
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
};
```
### 5.4 MyPromise.finally
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

### 执行顺序

```js
async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
async function async2(){
    console.log('async2')
}
async1();
console.log('i am koala')
// async1 start  async2 i am koala  async1 end
```