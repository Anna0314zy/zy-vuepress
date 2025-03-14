---
title: 设计模式
date: 2020-04-19
tags:
  - Javascript
  - 设计模式
---


### 📌 单例模式 

> 开发中经常会遇到创建单例

## 通过 getInstance
::: danger
问题 如果是js 没有办法强制要求用户 一定要 使用getInstance方法来获取实例

 ts  强制用户 必须使用getInstance方法来获取实例 通过 private constructor
:::
```js
class Video {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Video(name);
    }
    return this.instance;
  }
}
let a = Video.getInstance('a');
let b = Video.getInstance('b');
console.log(a === b); // true
```

## 代理实现

### 错误的示范

```js

const singleton = function (className) {
    let _ins;
    return class{
        constructor(...args) {
            return _ins || (_ins = new className(...args));
        }
    }
}

const SingleVideo = singleton(Video);

let a = new SingleVideo('a');
let b = new SingleVideo('b');
console.log(a === b); // true


SingleVideo.prototype.say = function () {
    console.log(this.name + 'say');
}
b.say(); // 无法访问

```

### 📌 用 proxy 实现 

```js

const singleton = function (className) {
    let _ins;
    return new Proxy(className, {
        construct(target, args) {
            return _ins || (_ins = new target(...args));
        }
    })
}

```


