---
title: js
date: 2022-04-19
tags:
  - Javascript
  - 面试题
---

## 1. 0.1 + 0.2 != 0.3


## 2. 数组的并集 交集 差集


## 如何实现对象的深拷贝 [答案]()




## vue2  vue3 数据双向绑定原理


## 如何实现 event 模块


## 执行顺序


```js

console.log(1);
async function async () {
    console.log(2);
    await console.log(3);
    console.log(4)
}
setTimeout(() => {
	console.log(5);
}, 0);
const promise = new Promise((resolve, reject) => {
    console.log(6);
    resolve(7)
})
promise.then(res => {
	console.log(res)
})
async (); 
console.log(8);
// 1
// 6
// 2
// 3
// 8
// 7
// 4
// 5

```

