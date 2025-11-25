

# MessageService
**`MessageService`** 类，结合你上一个 `AppService` 文件，它主要负责 **播放器与外部交互、翻页控制、RPC 通信和数据管理**。我帮你系统梳理一下它的功能：

---

## 1️⃣ 核心职责

这个 `MessageService` 是整个课件播放器的 **逻辑控制中心**，它主要做了三类事情：

1. **页面翻页、步骤控制和状态管理**
2. **与远程/宿主通信（RPC）**
3. **下载、初始化、事件绑定和播放器 SDK 调用**

换句话说，如果把 `AppService` 当作 **UI 管理器/面板**，那么 `MessageService` 就是 **逻辑控制器/数据管理层**。

---

## 2️⃣ 核心属性

* `static player: PlayerSDK` → 播放器实例
* `static slides: Slide[]` → 当前课件的所有幻灯片/页信息
* `static currentPage` / `currentPendingPage` → 当前页码和等待加载页码
* `changePage = debounce(...)` → 翻页防抖，防止快速连续翻页导致错误
* `changePagePromiseHandle` → 翻页异步状态管理，保证翻页顺序
* `static enable` → 播放器是否可交互
* `static config` → 配置，来自 `ServerService`

---

## 3️⃣ 初始化与启动

函数：`init(traceID: string)`

主要做了：

1. 初始化配置和语言包
2. 初始化下载服务（DownloadService）
3. 初始化 `PlayerSDK`（播放器核心）
4. 对 Web / 非 Web 环境做不同处理：

   * 非 Web：等待 RPC 远程就绪、下载课件资源、绑定事件
   * Web：下载 widget ZIP 文件
5. 更新 UI 状态到加载中
6. 绑定控制面板事件（翻页、步骤、刷新、目录）
7. 初始化 TrackerService，用于行为记录

可以理解为 **播放器逻辑的启动入口**。

---

## 4️⃣ 翻页逻辑

主要函数：

* `changePageHandle(payload)` → 实际翻页逻辑，处理下载、加载和 SDK 翻页
* `debounceChangePage(payload)` → 翻页防抖入口，保证同一页不会重复加载
* `prev()` / `next()` → 上一页、下一页
* `goToSlide()` → 根据用户操作（跳转、返回、代码匹配）翻页
* `playerOnChangePage(page)` → 当播放器 SDK 完成翻页时更新 UI 和 RPC

⚡ 特点：

* 翻页时会先触发 RPC `pageWillChange`，加载资源，完成后触发 `pageDidChange`
* 使用防抖 + 异步句柄管理，保证翻页顺序不会乱
* 支持课件内步骤翻页 `changeStep(step)`

---

## 5️⃣ 下载和资源管理

* 使用 `DownloadService` 和 `WebDownload` 下载页面或组件资源
* `onDownloadProgress(payload)` → 更新进度条 UI，并处理下载失败
* `preload(page)` → 预加载下一页资源
* `getBaseUrl(page)` → 根据环境和课件类型生成资源路径

---

## 6️⃣ RPC / 远程通信

* 使用 `JsonRPCClient` 和 `RPCBridge` 与宿主或远程通信
* 发送事件：

  * `pageWillChange` → 翻页开始
  * `pageDidChange` → 翻页完成
  * `change` → 当前页面状态变更
  * `jumpSlide` → 跳转幻灯片
* 接收远程指令：

  * 翻页、步骤切换、启用/禁用操作
* 用于 **小程序 / ultra 平台** 的实时通信和课堂同步

---

## 7️⃣ 播放器状态回调

* `playerOnLoaded()` → 播放器 SDK 初始化完成
* `playerOnStatusChange({ status })` → 播放器状态变化（loading/loaded）
* `playerOnError(error)` → 处理翻页或资源错误
* `playerVideoPlayError()` → 视频播放错误处理，可能显示遮罩

---

## 8️⃣ 控制面板和目录

* 绑定按钮事件：上一页/下一页/刷新/步骤切换
* `bindCtrlViewEvent()` → 为 UI 绑定点击事件
* `toggleCatalog()` → 显示/隐藏目录列表
* `getCatalog()` → 获取课件目录信息

---

## 9️⃣ 其他功能

* `retry()` → 下载或翻页失败后的重试逻辑
* `getClientInfo()` → 获取客户端信息（如低性能设备、uid、课堂场景）
* `setStoryBookProgress()` / `storyBookProgressChange()` → 处理故事书类型课件进度
* `refresh()` → 重置播放器并刷新页面
* 场景管理：区分教师/学生/自学场景

---

## 🔹 总结

这个文件主要是：

> **播放器的逻辑和控制服务**
>
> * 管理课件的翻页、步骤、资源加载、进度和状态
> * 处理 RPC / 远程命令和同步
> * 调用 `AppService` 更新 UI
> * 绑定控制面板和目录事件
> * 处理下载、重试和错误管理

可以理解为 **课件播放器的“大脑”**，而 `AppService` 是 **面板和显示器**，`PlayerSDK` 是 **执行者**。

---

如果你想，我可以帮你画一张 **AppService + MessageService + PlayerSDK + DownloadService 的职责关系图**，这样你一眼就能看懂整个播放器架构和数据流。

你希望我画吗？
