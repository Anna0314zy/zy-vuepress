
# ServerService


 **按模块、按作用、按流程** 把这个 `ServerService` 文件讲得非常清晰，让你一眼就知道：
**这个文件是什么、负责什么、为什么这样写、整个逻辑怎么走。**

---

# **ServerService.ts — 干啥的？一句话总结**

> **ServerService 是课程播放器（ICW Player）中负责 “从服务器获取课件数据 / 构建课件数据 / 处理预览数据” 的核心服务。**

它做的事包括：

* 向后台请求课件 manifest（云端版本）
* 获取草稿数据（editor 草稿）
* 根据 uuid/code/file 三种不同来源组装课件
* 管理进度（progress）
* 构建文件上传版课件（本地文件 preview）
* 加载/补充 slides
* 统一 axios 请求、错误处理
* 初始化 UI 状态

是 **播放器启动流程中最核心的数据初始化模块**。

---

# **整体结构图（超清晰）**

```
┌──────────────────────────┐
│        ServerService     │
├──────────────────────────┤
│ axios instance           │
│ config                   │
│ data(CwTaskData)         │
│ progress                 │
├──────────────────────────┤
│ createDraft()            │  ← 草稿预览入口
│ init()                   │  ← 核心初始化逻辑（入口）
│ queryCwTaskDataJson()    │  ← 通过 code 请求转换结果
│ queryCwVersionJson()     │  ← 通过 uuid 请求 manifest.json
│ getDraftData()           │  ← 编辑器草稿接口
│ sendSubmitQuestion()     │  ← 用户答题接口
│ addThumbnailPrefix()     │  ← 修正 slide 缩略图地址
└──────────────────────────┘
```

---

# **详细说明：每个部分在干什么**

---

# 1. **依赖注入 (tsyringe)**

```ts
@singleton<ServerService>()
@injectable<ServerService>()
```

说明：

* 这是 **单例服务**，整个播放器只有一个 ServerService。
* 被 container 管理，随时 `container.resolve(ServerService)` 获取实例。

---

# 2. **axios 实例初始化 + 拦截器**

构造函数：

```ts
this.instance = axios.create({ timeout: 60000 })
```

作用：

* 统一所有请求的基础配置
* 设置超时
* 设置统一错误输出

---

响应拦截器逻辑：

* 如果 `response.status === 200`，正常返回
* 否则写 error log
* error 时向外抛 `{ message, url }`，不是直接抛 axios 原始错误

**这样播放器日志可以更清晰定位错误来源。**

---

# 3. **createDraft(uuid, code)**

这个是 **编辑器草稿模式预览** 的入口。

作用：

* 获取草稿数据（slides）
* 构造 data.progress
* 标记当前 step 为 `"GeneratingPreview"`

是为「实时预览」准备的。

---

# 4. **init(config, traceID)**（***最核心方法***）

这是播放器真正启动时调用的入口。

流程：

### **(1) 保存 config**

```ts
this.config = config
```

### **(2) 改 UI 状态 → loading**

依赖 AppService：

```ts
appService.changeUIStatus(PageStatus.loading, 'boot server')
```

### **(3) 判断课件入口方式**

有 3 种来源：

### **① uuid 模式（云端课件）**

```ts
if (uuid) {
  versionData = await this.queryCwVersionJson(uuid)
}
```

从 CDN 获取：

```
/icw/{uuid}/manifest.json
```

解析课件 metadata + slides。

### **② scene = preview（草稿预览）**

```ts
else if (scene === 'preview')
```

调用草稿接口：

```ts
await this.getDraftData()
```

### **③ file 模式（本地文件预览）**

```ts
else if (file)
```

流程：

* 读取文件
* createPageJsonFromFiles
* gzip slide.json
* 构造单页课件

用于上传文件预览课件。

### **④ code 模式（接口转换结果）**

请求接口：

```ts
queryCwTaskDataJson()
```

通过 code 去 LMS 转换服务器读取转换结果。

---

# 5. **addThumbnailPrefix(slides)**

统一每页 slide 的缩略图：

* 如果 slide 有 thumbnailUrl → 加 THUMBNAIL_SUFFIX
* 否则 → 设置默认 icon

---

# 6. **queryCwTaskDataJson()**

通过 **code** 从 LMS 拉课件转换结果：

```
GET /lms/resource/conversion/{code}
```

这是 AS 体系课件转换后的结构：

```
{
  success: boolean
  data: {
    jsonString: {...} ← 核心课件数据
  }
}
```

---

# 7. **queryCwVersionJson(uuid)**

通过 CDN 拉 manifest.json：

```
/icw/{uuid}/manifest.json
```

逻辑包含：

* 主 CDN 请求失败 → 使用 backup CDN 再请求一次
* 两次都失败 → 抛 Error

错误日志非常完整。

---

# 8. **getDraftData()**

编辑器使用：

```
/api/editor/v1/icw/material/draft/list
```

拉草稿列表。

---

# 9. **sendSubmitQuestion()**

用户答题结果上传：

```
POST /user/answer/add
```

携带 token 和 header。

---

# **10. 总结：这个文件的定位**

> **ServerService 是 ICW 播放器的数据中心，统一管理所有课件数据的来源、解析、错误处理、进度构造，是整个播放器启动流程的核心组件之一。**

它负责：

### ✔ 拉课件

### ✔ 构造课件结构

### ✔ 文件预览

### ✔ 云端课件拉取

### ✔ 草稿课件预览

### ✔ 补充 slide 信息

### ✔ 请求出错时自动降级到 backup

### ✔ 上报问题（答题）

### ✔ 和 UI 层联动

**整套逻辑非常工程化、健壮。**

---

如果你需要，我还可以帮你：

### ✅ 画一张 ServerService 初始化完整流程图

### ✅ 按“给同事讲解”的风格写文档

### ✅ 按你的代码库风格写注释版源码

### ✅ 拆解成架构图 + 代码图 + 数据流图

你想要哪种？
