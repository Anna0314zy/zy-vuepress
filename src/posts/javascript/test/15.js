
function delay(ms) {
	return new Promise((resolve,reject) => {
    console.log(ms)
		setTimeout(() => {
			reject(ms);
		}, ms);
	});
}
const promises = [1, delay(1000), delay(500), delay(2000), delay(3000)];

// 并行执行不超过 3个

async function createRequest(tasks, pool = 5) {
    let results = [];
    let taskQueue = [];
  
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]();
      taskQueue.push(task);
  
      task.then(res => {
        results[i] = res; // 按原顺序存储
        taskQueue.splice(taskQueue.indexOf(task), 1); // 从队列移除
      });
  
      if (taskQueue.length >= pool) {
        await Promise.race(taskQueue); // 等待最快完成的任务
      }
    }
  
    await Promise.all(taskQueue); // 等待剩余任务完成
    return results;
  }
  async function createRequest(tasks, pool = 5) {
    let results = new Array(tasks.length); // 预分配结果数组
    let runningTasks = new Set(); // 用 Set 追踪正在运行的任务
    let index = 0; // 记录当前任务索引

    for (; index < tasks.length; index++) {
        // 启动任务
        const taskIndex = index;
        const taskPromise = tasks[taskIndex]()
            .then(result => results[taskIndex] = result)
            .catch(error => results[taskIndex] = `错误: ${error.message}`);

        runningTasks.add(taskPromise); // 添加到运行中的任务池

        // 并发控制：如果达到 `pool` 数量，等待其中一个任务完成
        if (runningTasks.size >= pool) {
            await Promise.race(runningTasks); // 等待最快完成的任务
            // 删除已完成的任务
            runningTasks.forEach(task => {
                if (task.done) runningTasks.delete(task);
            });
        }
    }

    // 等待剩余的任务完成
    await Promise.all(runningTasks);
    return results;
}
