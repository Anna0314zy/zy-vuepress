
function delay(id) {
  return new Promise((resolve) => {
    console.log(`任务 ${id} 开始`);
    const ms =  Math.random() * id
    setTimeout(() => {
      console.log(`任务 ${id} 结束 ${ms}`);
      resolve(id);
    },ms * 1000);
  });
}

const tasks = Array.from({ length: 10 }, (_, i) => () => delay(i));


function createRequest(tasks,limit=3){
 console.log('limit',limit,tasks)
 const result = []
 const executing = [] // 正在执行的promise
 for(task of tasks){
    console.log('task',task)
    
 }
}
createRequest(tasks,3)
// async function limitConcurrency(tasks, limit) {
//   const results = [];
//   const executing = [];

//   for (const task of tasks) {
//     const promise = task().then((res) => {
//       executing.splice(executing.indexOf(promise), 1); // 任务完成后移除
//       return res;
//     });

//     executing.push(promise);
//     results.push(promise);

//     if (executing.length >= limit) {
//       await Promise.race(executing); // 等待最先完成的任务
//     }
//   }

//   return Promise.all(results);
// }

// const tasks = Array.from({ length: 10 }, (_, i) => () => delay(i));

// limitConcurrency(tasks, 3).then((res) => console.log("所有任务完成:", res));

// const tasks = Array.from({ length: 10 }, (_, i) => () => delay(i));

// function createRequest(tasks, pool) {
//   pool = pool || 5;
//   let results = [],
//       together = new Array(pool).fill(null),
//       index = 0;
//   together = together.map(() => {
//       return new Promise((resolve, reject) => {
//           const run = function run() {
//               if (index >= tasks.length) {
//                   resolve();
//                   return;
//               };
//               let old_index = index,
//                   task = tasks[index++];
//               task().then(result => {
//                   results[old_index] = result;
//                   run();
//               }).catch(reason => {
//                   reject(reason);
//               });
//           };
//           run();
//       });
//   });
//   return Promise.all(together).then(() => results);
// }
// createRequest(tasks, 2).then(results => {
//   // 都成功，整体才是成功，按顺序存储结果
//   console.log('成功-->', results);
// }).catch(reason => {
//   // 只要有也给失败，整体就是失败
//   console.log('失败-->', reason);
// }); 

// function createRequest(tasks, pool, callback) {
//   if (typeof pool === "function") {
//       callback = pool;
//       pool = 5;
//   }
//   if (typeof pool !== "number") pool = 5;
//   if (typeof callback !== "function") callback = function () {};
//   //------
//   class TaskQueue {
//       running = 0;
//       queue = [];
//       results = [];
//       pushTask(task) {
//           let self = this;
//           self.queue.push(task);
//           self.next();
//       }
//       next() {
//           let self = this;
//           while (self.running < pool && self.queue.length) {
//               self.running++;
//               console.log(self.queue, 'self.queue');
//               let task = self.queue.shift();
//               task().then(result => {
//                   self.results.push(result);
//               }).finally(() => {
//                   self.running--;
//                   self.next();
//               });
//           }
//           if (self.running === 0) callback(self.results);
//       }
//   }
//   let TQ = new TaskQueue;
//   tasks.forEach(task => TQ.pushTask(task));
// }
// //使用
// createRequest(tasks, 2, results => {
//   // console.log(results);
//   console.timeEnd('cost');
//   console.log(results);
// });