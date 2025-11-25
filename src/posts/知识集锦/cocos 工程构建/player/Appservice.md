# Appservice
---

## 1️⃣ 核心功能

这个 `AppService` 类是一个 **单例服务类**（通过 `tsyringe` 注入管理），主要管理 **课件播放器的 UI 和交互逻辑**，包括：

* 页面状态管理（加载中、下载中、失败等）
* 页码和步骤分页控制
* 播放进度条更新
* 错误信息显示
* WebGL 崩溃处理
* 教学引导条（类似幻灯片时间轴）
* 目录生成和导航
* 键盘快捷键控制
* 场景切换按钮

---

## 2️⃣ 主要属性

* **HTML 元素引用**：`prevBtn`、`nextBtn`、`pageText`、`icwRootView`、`progressBarView` 等，都是页面上对应的 DOM 元素。
* **分页状态**：`totalPageSize`、`currentPage`、`isShowCtrl`、`isShowBookCtrl`。
* **播放时间**：`sectionTotalTime`、`currentSlideTime`、`activeChangeTime`。

这些属性都是为了在 UI 上展示课件状态、页码和播放进度。

---

## 3️⃣ 页面状态管理

函数：`changeUIStatus(status: PageStatus, tips?: string)`

* 控制页面的显示状态：

  * `loading` → 显示加载提示
  * `download` → 显示下载提示
  * `loaded` → 隐藏加载层
* 同时会打印日志，用 `loggerUI` 记录 UI 状态变化。

---

## 4️⃣ 页码和步骤控制

* `changeUIPage(page, player)`：更新当前页码、分页按钮状态。
* `changeUIStepBtn(total, step)`：更新当前步骤按钮状态（上一/下一步骤）。
* `initPagination`、`initDefaultPagination`、`initBookPagination`：初始化分页 UI。
* `disableChangePage` / `changeUIFirstPage` / `changeUILastPage`：控制翻页按钮可用状态。

---

## 5️⃣ 播放进度条

* `changeUIProgress(progress)`：根据播放进度更新进度条宽度。
* `initTeachingGuide`、`teachingGuideChange`：

  * 生成 **教学引导条**（类似幻灯片时间轴）。
  * 通过定时器实时更新当前播放进度和时间显示。

---

## 6️⃣ WebGL 崩溃处理

* `bindCanvasCrashHandler()`：

  * 监听 `<canvas>` 的 `webglcontextlost` 和 `webglcontextrestored`。
  * 崩溃时显示错误信息并提供 “重新加载” 按钮。

---

## 7️⃣ 目录/章节导航

* `generatorCatalogUi(player)`：根据课件目录生成 DOM 结构。
* 支持点击目录快速跳转页面。

---

## 8️⃣ 其他功能

* **键盘快捷键**：支持箭头键翻页或切步骤。
* **场景切换**：`addSwitchScene()` 可在教师、学生、自学、评测等不同场景间切换。
* **Canvas 遮罩**：`initCocosMask()` 用于阻止用户点击 Canvas，通常用于视频播放或弹窗控制。

---

## 🔹 总结

这个文件主要是：

> **一个播放器 UI 管理服务**，负责课件的分页、步骤控制、进度条、目录、教学引导条、WebGL 错误处理、键盘控制和场景切换。

它本身不处理 **播放逻辑** 或 **课件内容**，而是通过 `PlayerSDK` 或 `window.playingVideo` 来调用实际播放器或视频。

可以理解为 **播放器的“控制面板 + 状态管理器 + UI渲染器”**。

---

如果你愿意，我可以帮你画一张 **AppService 的功能结构图**，把 `分页/进度条/教学引导/目录/场景切换/错误处理` 等模块直观地展示出来，会更清楚整个文件的职责。

你希望我画吗？
