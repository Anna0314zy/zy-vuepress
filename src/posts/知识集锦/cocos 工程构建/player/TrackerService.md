

# TrackerService
**TrackerService** 这个文件彻底讲清楚——**它是干什么的、怎么工作的、各个方法之间怎么串联、为什么要这样写。**

下面是 **项目级视角 + 代码级视角** 的合体版解析，非常清晰。

---

# 💡 一句话总结

> **TrackerService 是播放器的“埋点 & 答题上报中心”，负责收集用户行为、上报事件、记录性能数据、处理答题（包括语音题）、与原生 App 通信。**

可以理解为整个播放器的 **数据上报大脑**。

---

# 📦 TrackerService 负责的内容（核心职责）

## **1）埋点系统核心入口**

* 打开播放器时上报 “open-player”
* 页面加载完成时上报 “view_loaded”
* 页面切换、交互事件、业务 Log 全部从这里发出去

## **2）接收播放器 SDK 的事件**

如：

```ts
player.emitter.on('tracker', ...)
player.emitter.on('submitMoment', ...)
player.emitter.on('submitSpeakingTest', ...)
```

## **3）与原生 App 通过 RPC 通信**

* 获取客户端信息（设备信息、版本等）
* 把答题结果通过 `rpcClient.emit` 上报给课堂

## **4）给后台上报答题**

调用：

```ts
configService.sendSubmitQuestion()
```

## **5）性能数据统计（下载 & 加载耗时）**

---

# 🔥 TrackerService 所在的位置（整体流程图）

```
播放器 PlayerSDK
     │
     ▼
TrackerService <--------- RPC（native）------- App / Classroom
     │
     ├── 监听 player event
     ├── UI 埋点
     ├── 页面埋点
     ├── 答题埋点
     ├── 语音答题
     ├── 上传截图（已注释）
     └── 提交答题到后台
```

---

# 📄 全文件分段讲解

---

# 1. 初始化

```ts
init(player: PlayerSDK)
```

做三件事：

### **①监听播放器的埋点事件**

```ts
player.emitter.on('tracker', data => this.warpBaseTracker(data))
```

播放器内部任意地方触发埋点 → 由 TrackerService 接管

---

### **②监听播放器提交题目**

```ts
player.emitter.on('submitMoment', ... )
player.emitter.on('submitSpeakingTest', ... )
```

普通题 / 语音题分别处理。

---

### **③生成 sessionId（一次播放会话 ID）**

```ts
this.sessionId = v4()
```

用于后端识别一次课程的行为。

---

# 2. loadPlayer(client)：打开播放器埋点

这是播放器启动后第一次调用，用于：

### **①存储当前 slides**

```ts
this.slides = configService.data.progress.slides
```

后续所有埋点都需要读取 slide 信息（uuid, code 等）。

---

### **②请求原生 app 获取设备信息**

```ts
await client.request('requestNativeAPI', {
  method: 'app.getDeviceInfo'
})
```

拿到：

* 设备类型
* 系统版本
* 屏幕分辨率
* app 版本
* brand / cpu / memory…

然后放到 loggerService 中，用于日志附加信息。

---

### **③初始化 logger**

```ts
loggerService.config(...)
```

并立即上报 `open-player`：

```ts
loggerService.bizLog('open-player').info({
  func_code: 'ENTER',
  event: 'view_page',
  ...
})
```

---

# 3. getClientInfo：课堂环境信息

调用课堂 RPC API：

```ts
client.request('getTrackerInfo')
```

获取：

* uid
* 课堂 id
* cr_code
* sid
* 是否低端机 (lowDevice)

这个数据用于每个埋点中，绑定用户信息。

---

# 4. loadedPage：页面加载埋点

提供两项性能数据：

```ts
loadTime = loadEnd - loadStart
downTime = downEnd - downStart
```

代表：

* 课件下载耗时
* 课件加载耗时

上报 log：

```
view_loaded
```

---

# 5. warpBaseTracker：**整个埋点系统的核心**

TrackerService 中最重要的方法。

做的事：

### **①找到当前 slide**

```ts
const slide = this.slides[page - 1]
```

---

### **②统一封装埋点结构**

```ts
loggerService.bizLog('send').info({
  func_code,
  event,
  ext: {
     page_item,
     page_uuid,
     page_code,
     resource_type,
     resource_uuid,
     total_page,
     ...
  }
})
```

所有埋点都经过这里加工 → 保证格式一致。

---

### **③自动触发答题上报**

```ts
this.submitQuestions(data, page)
```

只要是 `event === 'submit'` 的埋点 → 自动进入答题逻辑。

---

# 6. submitQuestions：普通题答题上报

当 event === 'submit'：

* 生成 answerId
* 判断题目类型（choice / input / drag / line…）
* 判断是否正确（right / wrong / unAnswer）
* 生成 payload

上报到课堂（RPC）：

```ts
this.rpcClient.emit('submitScore', submitData)
```

上报到后台（ServerService 内部接口）：

```ts
configService.sendSubmitQuestion({...})
```

**双上报机制**（课堂 + 后台）。

---

# 7. submitSpeakingTest：语音题上报

流程类似，但多了：

* audioUrl
* recordText
* startTime
* endTime
* scoreLevel

上报逻辑与普通题一致：

* rpcClient.emit → 上报课堂
* sendSubmitQuestion → 上报后台

---

# 8. uploadCosDataInfo：上传截图（已注释掉）

以前是：

* 截图 canvas → base64
* 上传到腾讯 COS
* 再作为答题图片上报后台

现在貌似业务关闭了，代码被注释了。

---

# 🎯 总结（超简版）

**TrackerService 是播放器的数据埋点中心，职责包括：**

1. 接收播放器的埋点事件（统一封装、统一上报）
2. 处理页面加载、切换等行为数据
3. 上报普通题/语音题答题
4. 与原生 App 通过 RPC 通信
5. 绑定用户、场景、课堂、设备信息
6. 统计性能数据（下载/加载耗时）
7. 统一使用 loggerService 输出日志

> **整个播放器的埋点、答题、日志体系都依赖这里。**

---

如果你需要，我还能帮你：

### ✔ 按业务写一份“埋点设计文档”

### ✔ 画 TrackerService 完整架构图

### ✔ 整理成 Markdown 注释版源码

### ✔ 重构建议（分层、简化、去耦）

你想要哪一个？
