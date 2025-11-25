
# LoggerService
`LoggerService` 文件，是一个**完整的日志收集与上报服务**，专门用来在课堂端或者播放端统一处理技术日志和业务日志。可以把它理解为一个 **“日志中枢”**，负责管理不同类型的日志、统一上报、并提供给外部调用。下面我给你详细拆解。

---

## 1️⃣ 核心功能

1. **提供两类日志**：

   * **ITS 技术日志** (`itsLog`)：记录技术相关事件，比如播放器状态、系统异常等。
   * **BIZ 业务日志** (`bizLog`)：记录业务事件，比如用户操作、课堂行为等。

2. **支持日志上报**：

   * 日志数据会通过内部 `Logger` 实例发送到指定服务器。
   * 每条日志都有唯一 ID（`uuidV1`）和序号（`sid_num`），保证日志可追踪。
   * 可以加上课堂相关信息（`uid`、`role_id`、`cr_sid` 等），方便多端追踪。

3. **动态控制日志等级**：

   * 支持 `DEBUG` 模式，可以将所有日志打印到控制台，便于开发调试。
   * 可以对不同日志池（ITS / BIZ）单独设置等级。

4. **提供给全局调用**：

   * 将 `itsLog` 方法挂在 `window.playerLogger` 上，允许全局直接调用。
   * 通过 `LoggerService.loggerPool` 管理不同模块的日志实例。

---

## 2️⃣ 核心属性

| 属性            | 功能                                     |
| ------------- | -------------------------------------- |
| `loggerPool`  | 保存 ITS / BIZ 日志实例，避免重复创建               |
| `configData`  | 日志全局配置，例如课堂 ID、用户 ID、版本号等              |
| `loggerMeta`  | 日志上下文信息，比如课堂状态、traceID 等               |
| `tLog / hLog` | 内部 Logger 实例，分别负责技术日志（tLog）和业务日志（hLog） |
| `deltaTime`   | 时间差，用于校准日志时间                           |

---

## 3️⃣ 核心方法

### a) 创建和销毁日志器

```ts
createLogger(servers)
destroyLogger()
```

* `createLogger`：初始化 ITS / BIZ Logger 实例，并绑定全局 `window.playerLogger`
* `destroyLogger`：销毁日志实例，释放资源

---

### b) 获取日志实例

```ts
itsLog(name)
bizLog(name)
```

* 根据模块名创建或复用日志实例
* 返回 `UtilLog` 对象，可以直接调用 `.debug() / .info() / .warn()`

---

### c) 日志发送

```ts
sendRequest(data, level, name, logger)
```

* 合并全局配置和日志内容
* 打印控制台（QA / 开发模式可选）
* 通过内部 `Logger` 发送到服务器

---

### d) 辅助方法

* `setLoggerMeta(meta)`：设置全局日志上下文（比如 traceID、课堂状态）
* `setDeltaTime(dt)`：设置客户端与服务器的时间差
* `config(conf)`：更新日志全局配置
* `debug()`：切换日志等级到 DEBUG，控制台打印所有日志

---

## 4️⃣ 总结

这个 `LoggerService` 文件的作用就是：

> **集中管理课堂或播放器的技术日志和业务日志，支持全局调用、等级控制、唯一追踪、服务器上报，以及开发模式下控制台输出。**

它和你前面贴的 `CursorService` / `MessageService` / `PlayerSDK` 结合使用时，就可以把课堂中发生的操作、错误、光标移动、翻页等事件全量记录下来，方便调试和统计。

---

如果你想，我可以帮你画一张 **LoggerService 工作流程图**，显示 ITS / BIZ 日志从创建、调用、发送到服务器的全过程，会非常直观。

你想让我画吗？
