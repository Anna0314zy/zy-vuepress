function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }
 const promises = [1,delay(1000),delay(500), delay(2000), delay(3000)];




 
  // 实现Promise.all

  const promiseAll = (promises) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((res) => {

      })
    }

  }




  