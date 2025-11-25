
# events

 `ultraClass/events.ts`（或者类似路径）文件，它主要负责 **将 PlayerSDK、MessageService、CursorService 和 RPC 系统结合起来**，实现课堂端（ULTRA 或普通课堂）多端同步和事件分发。简单来说，它是整个 **课堂交互事件的总控桥接器**。下面我给你拆解清楚：

---

## 1️⃣ 核心职责

1. **绑定 PlayerSDK 事件** → 统一处理播放器内部事件
2. **绑定 RPC 方法** → 外部调用 Player/Message/光标功能
3. **绑定光标事件** → 处理本地光标位置变化及多端同步
4. **处理翻页/状态变化事件** → 包括单机和多人课堂（ULTRA）
5. **同步 UI/课堂状态** → 触发教学插件 UI 更新、白板同步等

---

## 2️⃣ 主要模块

### a) PlayerSDK 事件绑定 (`bindPlayerSDKEvents`)

* `logger` → 播放器内部日志输出
* `loaded` → 播放器加载完成

  * 调用 `messageService.playerOnLoaded`
  * 如果 ULTRA 平台 → 获取课堂信息、初始化状态、禁用非主控端操作
* `changeState` → 播放器状态变化

  * 调用外部回调 `stateChange(payload)`
* `status` → 播放器状态更新 → UI 展示加载状态
* `error` → 翻页/播放错误 → 调用 `playerOnError`
* `changePage` → 翻页完成 → 同步 UI 与 RPC
* `goToSlide` / `changeStep` / `storyBookProgress` → 各类播放器操作

---

### b) RPC 方法绑定 (`addRpcMethods`)

给 RPC 客户端注册的方法，允许远程调用：

| 方法名                                                        | 功能       |
| ---------------------------------------------------------- | -------- |
| pause/resume/reset                                         | 播放器控制    |
| muteAudio                                                  | 静音控制     |
| multiMode                                                  | 多人模式切换   |
| getMultiContentRect / getCurrentPosition / getResolution   | 获取播放器状态  |
| submitQuestion / getStep / nextStep / prevStep / resetStep | 课件交互控制   |
| setStoryBookProgress                                       | 故事书翻页    |
| prevPage / nextPage / goTo / enable / boot                 | 翻页与初始化   |
| getCatalog / getManifest                                   | 获取目录/元信息 |
| switchCursor / setDisplayName                              | 光标控制     |
| retry                                                      | 翻页重试     |

---

### c) 光标事件绑定 (`bindCursorEvents`)

* `CursorService.changeCursor` → 当光标移动时触发
* 根据平台和屏幕计算光标百分比位置
* ULTRA 平台 → 调用 `dispatchPluginState` 同步状态
* 非 ULTRA → 通过 RPC 广播给其他客户端

---

### d) 多端/状态同步 (`changeEventHandler`)

当收到远端状态更新（翻页/光标/状态）：

1. 判断光标信息 → 更新本地光标
2. 判断翻页信息 → 调用 `debounceChangePage` 翻页
3. 判断 state → 直接调用 `player.changeState`
4. 多人模式（multiMode） → 翻页同步

---

### e) RPC 事件监听 (`bindRpcEvents`)

* 非 Web 平台监听 `'change'` 事件
* 调用 `changeEventHandler` 同步课堂状态

---

## 3️⃣ 对接关系

这个文件就是 **事件桥接层**：

```
PlayerSDK events → MessageService / CursorService → RPC → 远端或 ULTRA 插件
```

* **PlayerSDK** → 内部事件（翻页、状态、错误、进度）
* **MessageService** → 翻页、状态管理、UI 更新
* **CursorService** → 光标动画、位置同步
* **RPC** → 多端交互和外部控制（老师端/学生端）
* **ULTRA Classroom** → 特定课堂插件 UI 和白板同步

---

### 🔹 总结一句话

`bindEvents.ts` 的作用是 **把播放器事件、光标事件和 RPC 通信统一管理，保证多人课堂、单机模式、UI 更新和远程控制的协同**。

---

如果你愿意，我可以帮你画一张 **三个核心模块（PlayerSDK / MessageService / CursorService） + RPC + ULTRA 插件 UI 的事件流图**，直观展示整个课堂事件流和多端同步逻辑。

你想让我画吗？
