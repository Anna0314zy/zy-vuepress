---
title: Promise 面试题
date: 2019-06-19
tags:
  - Javascript
  - promise
---
1.EventLoop
```js
Promise.resolve().then(() => {
    console.log(0);
    // return Promise.resolve(4); 
    return new Promise((resolve) => {
      resolve(4)
    })
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})

Promise.resolve().then(() => {
    console.log(7);
}).then(() => {
    console.log(8);
}).then(() => {
    console.log(9);
}).then(() => {
    console.log(10);
}).then(() =>{
    console.log(11);
})







```