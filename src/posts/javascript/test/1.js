
// function delay(ms) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(ms);
// 		}, ms);
// 	});
// }

// const promiseAll = (promises) => {
// 	console.log(promises);
// 	return new Promise((resolve, reject) => {
// 		const result = [];
// 		let count = 0;
// 		for (let i = 0; i < promises.length; i++) {
// 			Promise.resolve(promises[i])
// 				.then((res) => {
// 					result[i] = res;
// 					count++;
// 					if (count === promises.length) {
// 						resolve(result);
// 					}
// 				})
// 				.catch((err) => {
// 					reject(err);
// 				});
// 		}
// 	});
// };

// Promise.myRace = function (promises) {
// 	return new Promise((resolve, reject) => {
// 		for (const promise of promises) {
// 			Promise.resolve(promise).then(
// 				(value) => {
// 					resolve(value);
// 				},
// 				(reason) => {
// 					reject(reason);
// 				}
// 			);
// 		}
// 	});
// };

// Promise.myFinally = function (callback) {
// 	this.then(
// 		(data) => Promise.resolve(callback()).then(() => data),
// 		(err) =>
// 			Promise.reject(callback()).then(() => {
// 				throw err;
// 			})
// 	);
// };

// Promise.myRace(promises).then((res) => {
// 	console.log("myRace", res);
// });

// Promise.myResolve = function (value) {
// 	if (value instanceof Promise) {
// 		return value;
// 	}
// 	return new MyPromise((resolve) => {
// 		resolve(value);
// 	});
// };
function delay(ms) {
	return new Promise((resolve,reject) => {
    console.log(ms)
		setTimeout(() => {
			reject(ms);
		}, ms);
	});
}
const promises = [1, delay(1000), delay(500), delay(2000), delay(3000)];

