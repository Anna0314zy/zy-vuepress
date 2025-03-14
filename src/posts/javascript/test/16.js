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