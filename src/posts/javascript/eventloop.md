# 前端 EventLoop 事件循环 
我给你**从零讲透、面试直接背、代码能看懂**，不讲废话，全是核心。

## 一、先懂核心前提
JS 是**单线程**：
同一时间只能干一件事，为了不阻塞页面，靠 **EventLoop 事件循环** 调度任务。

## 二、两大任务队列
### 1. 微任务队列（MicroTask）优先级 **最高**
执行时机：**同步代码干完，立刻清空所有微任务**

常见微任务：
- Promise.then / catch / finally
- async/await 后面代码
- queueMicrotask
- MutationObserver

### 2. 宏任务队列（MacroTask）优先级 **低**
等**微任务全部清空完**，才会取一个宏任务执行

常见宏任务：
- setTimeout / setInterval
- setImmediate
- DOM 事件（click、load）
- ajax 回调
- 渲染页面（UI 渲染）

---

## 三、EventLoop 执行顺序（死记这 6 步）
1. **执行同步代码**（一行行从上到下）
2. 同步代码遇到**微任务** → 扔进**微任务队列**
3. 同步代码遇到**宏任务** → 扔进**宏任务队列**
4. **同步代码执行完毕**
5. **一次性清空所有微任务队列**（一个不留，全部执行）
6. 微任务清空完，**取宏任务队列第一个执行**
然后回到步骤1，循环往复 → **事件循环**

> 口诀：
**同步先走 → 微任务清空 → 再走一个宏任务**

---

## 四、经典代码例题（必考题）
```js
console.log('1')

setTimeout(() => {
  console.log('2')
}, 0)

Promise.resolve().then(() => {
  console.log('3')
})

console.log('4')
```

输出顺序：
```
1
4
3
2
```

### 拆解流程
1. 同步 `console.log(1)` 打印 1
2. setTimeout 是**宏任务**，丢进宏队列
3. Promise.then 是**微任务**，丢进微队列
4. 同步 `console.log(4)` 打印 4
5. 同步走完 → **清空微任务** 打印 3
6. 微任务空了 → 执行宏任务 打印 2

---

## 五、async/await 在 EventLoop 里怎么排
```js
console.log(1)
async function fn() {
  await 100
  console.log(2)
}
fn()
console.log(3)
```
执行顺序：
`1 → 3 → 2`

解析：
- `await` 后面的代码，会变成**微任务**
- 先走完同步，再执行微任务

---

## 六、浏览器 EventLoop 完整流程
1. 执行**全局同步代码**
2. 执行**所有微任务**
3. **页面渲染 UI**
4. 执行**一个宏任务**
5. 循环

---

## 七、面试常问总结
1. 微任务和宏任务谁先？
**微任务优先，先清微任务再走宏任务**

2. setTimeout 和 Promise.then 谁先？
**Promise.then 先**

3. 为什么 setTimeout 0ms 也不是立刻执行？
因为要等**同步 + 微任务**全部跑完才轮到宏任务

4. async/await 属于什么任务？
await 之后代码是**微任务**

---

```js
console.log('start')

setTimeout(() => {
  console.log('setTimeout')
  Promise.resolve().then(() => {
    console.log('timer micro')
  })
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')
}).then(() => {
  console.log('promise2')
})

console.log('end')
// start
// end
// promise1
// promise2
// setTimeout
// timer micro

```