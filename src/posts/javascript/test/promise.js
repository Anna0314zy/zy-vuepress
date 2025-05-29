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