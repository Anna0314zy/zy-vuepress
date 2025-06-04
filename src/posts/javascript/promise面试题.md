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

### 1.1 Promise.race 配合实现

```js

async function createRequest(tasks, pool = 5) {
    let results = []; // 用于保存每个任务的执行结果，顺序和输入 tasks 保持一致
    let taskQueue = []; // 当前正在执行（尚未完成）的任务队列
  
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]();// 执行任务函数，返回一个 Promise
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

### 1.2 任务分发器 来 处理异步并发

```js
/**
 * 控制异步任务的并发数，并保留任务结果顺序
 *
 * @param tasks - 一个返回 Promise 的函数数组，如： [() => fetch(...), () => axios(...)]
 * @param pool - 最大并发数
 * @returns 所有任务的结果数组，顺序与 tasks 对应
 */
async function createRequest<T>(tasks: (() => Promise<T>)[], pool: number = 5): Promise<T[]> {
  const results: T[] = new Array(tasks.length); // 保留顺序
  let taskIndex = 0; // 当前正在处理的任务索引

  // 工人函数，每次处理一个任务
  async function worker() {
    while (taskIndex < tasks.length) {
      const currentIndex = taskIndex++;
      try {
        const res = await tasks[currentIndex]();
        results[currentIndex] = res;
      } catch (error) {
        results[currentIndex] = error as any; // 也可以选择 throw 或标记为失败
      }
    }
  }

  // 创建 pool 个并发 worker
  const workers = Array.from({ length: pool }, () => worker());

  // 等待所有 worker 完成
  await Promise.all(workers);
  return results;
}

// 测试用例

const delay = (ms: number, value: string) => () =>
  new Promise(resolve => setTimeout(() => resolve(value), ms));

const tasks = [
  delay(1000, 'A'),
  delay(500, 'B'),
  delay(1500, 'C'),
  delay(300, 'D'),
  delay(800, 'E'),
];

createRequest(tasks, 2).then(res => {
  console.log(res); // ['A', 'B', 'C', 'D', 'E'] 按顺序
});





```
### 1.3 任务队列
```js

function createRequest(tasks, pool, callback) {
    if (typeof pool === "function") {
        callback = pool;
        pool = 5;
    }
    if (typeof pool !== "number") pool = 5;
    if (typeof callback !== "function") callback = function () {};
    //------
    class TaskQueue {
        running = 0;
        queue = [];
        results = [];
        pushTask(task) {
            let self = this;
            self.queue.push(task);
            self.next();
        }
        next() {
            let self = this;
            while (self.running < pool && self.queue.length) {
                self.running++;
                console.log(self.queue, 'self.queue');
                let task = self.queue.shift();
                task().then(result => {
                    self.results.push(result);
                }).finally(() => {
                    self.running--;
                    self.next();
                });
            }
            if (self.running === 0) callback(self.results);
        }
    }
    let TQ = new TaskQueue;
    tasks.forEach(task => TQ.pushTask(task));
}
//使用
createRequest(tasks, 2, results => {
    // console.log(results);
    console.timeEnd('cost');
    console.log(results);
});
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