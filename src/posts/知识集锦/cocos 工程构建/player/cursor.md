
# CursorService

 `CursorService` 文件，它的功能和结构跟 `MessageService` 是互补的，这个文件专门负责 **鼠标光标/点击效果的管理**，尤其是在课堂或课件播放器里。下面我帮你梳理清楚它的职责和工作流程。

---

## 1️⃣ 核心职责

`CursorService` 的主要作用是：

1. **管理光标状态和样式**

   * 默认、点击、拖拽、隐藏四种状态（`CursorType`）
   * 根据鼠标事件切换样式
   * 在 canvas 或课程区域显示自定义光标

2. **处理鼠标事件**

   * 移动、按下、抬起、拖拽
   * 点击动画效果（circle）

3. **同步光标位置（RPC/多端）**

   * 通过 `JsonRPCClient` 向远端发送/接收光标位置
   * 支持多用户同时显示光标（课堂场景）

4. **UI 动画**

   * 点击时触发 **圆圈动画**
   * 改变 DOM 光标位置和样式

---

## 2️⃣ 核心属性

| 属性                                      | 说明                  |
| --------------------------------------- | ------------------- |
| `cursorType`                            | 当前光标类型（默认/点击/拖拽/隐藏） |
| `isDown`                                | 鼠标是否按下              |
| `circleWrapper` / `circle`              | 点击动画的 DOM 元素        |
| `downPoint`                             | 鼠标按下坐标，用于判断点击还是拖拽   |
| `userMap`                               | 用户光标映射，支持多人课堂显示     |
| `static rpcClient`                      | RPC 客户端，用于同步光标位置    |
| `static showCursor`                     | 是否显示光标              |
| `moveChangeCursor` / `dragChangeCursor` | 光标移动/拖拽事件的节流函数      |

---

## 3️⃣ 初始化逻辑

方法：`init()`

1. 获取 RPC 客户端
2. 绑定鼠标事件 (`bindViewEvent()`)

   * `mousedown` → 标记按下状态
   * `mousemove` → 根据是否按下切换拖拽/移动状态
   * `mouseup` → 恢复默认光标或触发点击动画
3. 添加自定义光标 DOM 元素
4. 如果不是 ULTRA 平台，监听 RPC 远端光标更新

---

## 4️⃣ 鼠标事件处理

### 移动和拖拽

* `moveChangeCursor` → 鼠标移动时更新光标位置（节流 200ms）
* `dragChangeCursor` → 拖拽时更新光标位置（节流 100ms）
* 拖拽时，光标切换到 `move` 样式

### 鼠标按下和抬起

* `mousedown` → 保存起点坐标
* `mouseup` →

  * 判断是否是点击（起点=终点）
  * 如果是点击触发 `triggerCircle()` 动画
  * 重置光标为默认状态

### 点击动画

* `attachClickCircle()` → 创建 DOM 元素
* `triggerCircle()` → 根据坐标播放圆圈动画
* `addCircleStyle()` → 注入 CSS 动画

---



## 5️⃣ 光标显示和隐藏

* `switchCursor(bool)` → 显示或隐藏光标 DOM
* `setDisplayName(name)` → 给光标加上用户昵称，用于多人课堂场景

---

## 6️⃣ 光标位置同步（RPC）

* `updateCursorPosition(payload)` → 接收远端光标位置更新
* 同步到本地 DOM，同时向其他客户端广播

---

## 7️⃣ 特点总结

* **自定义光标**：在 canvas 或课件区域显示，支持多种状态（默认/点击/拖拽/隐藏）
* **点击动画**：点击时显示动画圆圈
* **拖拽支持**：拖拽时切换光标状态
* **节流防抖**：防止快速移动/拖拽事件触发太多 DOM 更新
* **多端同步**：通过 RPC 将光标位置同步给远端或其他用户
* **平台差异处理**：ULTRA / 非 ULTRA 平台有不同的 RPC 处理方式

---

### 🔹 总结一句话

`CursorService` 是 **课件/课堂播放器里光标和点击交互的管理器**，处理鼠标事件、点击动画和多端同步，让用户操作更加直观。

---

如果你需要，我可以帮你画一张 **MessageService + CursorService + PlayerSDK 的交互流程图**，清楚展示 **翻页、光标、RPC、UI 更新** 的整个逻辑链路。

你想让我画吗？
