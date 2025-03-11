---
title: Promise 相关整理
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
## 写一个promise 重试 3次的函数

```js




```
## 多个promise 并行执行 不超过3个

### 1.方法1 




## 写一个可以中断的promise


## 实现 Promise.race Promise.resolve Promise.all


