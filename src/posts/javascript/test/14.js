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

const retryPromise1 = (promiseFn, retries = 3) => {
	for (let i = 0; i < retries; i++) { 

        promiseFn().then(res => {
            return res
        }).catch(err => {
            if(retries - 1 <= 1){
                return Promise.reject(err)
            }
        })

    }
};

function retryPromise(promise, times) {
	console.log("retryPromise", times);
	return new Promise((resolve, reject) => {
		promise()
			.then(resolve) // ✅ 成功时立即 resolve
			.catch((err) => {
				if (times > 1) {
					return retryPromise(promise, times - 1).then(resolve, reject); // ✅ 递归时保证 resolve/reject 传递
				}
				reject(err); // ✅ 最后一次失败时，确保 reject 触发
			});
	});
}

function retryPromise1(promise, time) {}
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

promiseRetry(fetchData, 3)
	.then((res) => {
		console.log("成功", res);
	})
	.catch((err) => {
		console.log("失败", err);
	});
