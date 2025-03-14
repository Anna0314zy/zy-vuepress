function promiseRetry(promiseFn, retries = 3) {
	return new Promise((resolve, reject) => {
		const retry = (retryCount) => {
			promiseFn()
				.then(resolve)
				.catch((err) => {
					if (retryCount <= 1) {
						reject(err);
					} else {
						retry(retryCount - 1);
					}
				});
		};

		retry(retries);
	});
}

async function retryPromise2(promiseFn, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await promiseFn(attempt);
      } catch (err) {
        if (attempt === retries) throw err; // 最后一次失败，抛出错误
      }
    }
  }
  
  

const retryPromise = (promiseFn, retries = 3) =>
    promiseFn().catch((err) =>
      retries > 1 ? retryPromise(promiseFn, retries - 1) : Promise.reject(err)
    );
  
// 示例使用：
const fetchData = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const random = Math.random();
			console.log("请求执行，随机数:", random);
			if (random < 0.7) {
				return reject(new Error("请求失败"));
			}
			return resolve(random);
		}, 1000);
	});
};

retryPromise(fetchData, 3)
	.then((res) => {
		console.log("成功", res);
	})
	.catch((err) => {
		console.log("失败", err);
	});
