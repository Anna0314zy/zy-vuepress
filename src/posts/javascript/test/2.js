//设计模式

// 写一个promise 重试 3次的函数

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     console.log(ms)
//     setTimeout(() => {
//       reject(ms);
//     }, ms);
//   });
// }    

// class Video {
//   constructor(name) {
//     this.name = name;
//   }
//   static getInstance(name) {
//     if (!this.instance) {
//       this.instance = new Video(name);
//     }
//     return this.instance;
//   }
// }
// let a = Video.getInstance('a');
// let b = Video.getInstance('b');
// console.log(a === b); // true

// 问题 如果是js 没有办法强制要求用户 一定要 使用getInstance方法来获取实例

// ts  强制用户 必须使用getInstance方法来获取实例 通过 private constructor


// 代理

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
b.say();

// const singleton = function (fn) {
//   let result;
//   return function () {
//     return result || (result = fn.apply(this, arguments));
//   }
// }


// const createSingle = singleton(function (name) {
//   return new Video(name);
// })


// let c = createSingle('c');
// let d = createSingle('d');


// console.log(c === d); // true