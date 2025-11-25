
# 代码启动cocos
下面我帮你 **逐行拆解** 这段 `boot()`，让你完全理解它到底在做什么。
这段代码的用途非常明确 —— **你正在手动绕过 Cocos Creator 默认的 index.html 启动流程，自己启动 Cocos 引擎，并挂载到指定 canvas 上（canvasId）。**

也就是说，你正在实现一个 **自定义 Cocos 启动器**。

---

# 🔥 **整体功能总结（重要）**

你的 `boot()` 做了 4 件事情：

1. **初始化 Cocos 引擎的资源管理器（assetManager.init）**
2. **手动加载 engine 的基础资源（loadBaseAsset）**
3. **手动执行 cc.game.run(options)** → 启动引擎
4. **创建一个空场景，并挂 FPS 节点等自定义逻辑**

这是 Cocos Creator 官方模板里：
`index.html + settings.json + cocos-js.js + boot.js`
的功能，但你把它全部手动重写了。

这也是为什么你可以 **不用 build-templates** 的原因。

---

# 🧩 **逐段讲解**

---

# 1. 初始化 assetManager

```ts
if (isPreview) {
  cc.assetManager.init({
    importBase: '/cocos-creator/assets/others/import',
    nativeBase: '/cocos-creator/assets/others/native',
  })
} else {
  cc.assetManager.init({})
}
```

### ✔ 解释：

你告诉引擎：

* 资源文件的 **import** 路径
* 资源文件的 **native** 路径

`assetManager.init()` 是 Cocos 2.4+ 的关键入口，用来告诉 Cocos：

→ 资源在哪里
→ 加载规则是什么

**你自己在管理资源路径，而不是使用 Cocos 构建的 settings.json**。

🔍 `isPreview = true` 时，是你自己搭建的预览资源路径。

---

# 2. 加载基础资源

```ts
await this.loadBaseAsset(cocosUrl)
```

这一步通常对应：

✔ 加载引擎代码
✔ 加载 settings.json（如果你有）
✔ 加载依赖 bundle（如 main、resources）

你用的是 `cocosUrl` 自定义资源入口。

也就是说：

👉 整个 Cocos 构建结构都被你接管
👉 你不再依赖 Creator 生成的 index.html 结构

这也是你能“前端项目中自己挂载 Cocos”的关键。

---

# 3. 真正启动 Cocos 引擎：cc.game.run()

```ts
cc.game.run(options, () => {
  ...
})
```

### ✔ 解释：

这是**Cocos 引擎真正启动的入口**。

Creator 生成的 boot.js 本质也是调用 `cc.game.run()`。

你传入的 options：

```ts
{
  id: canvasId,
  scenes: [],
  showFPS: false,
  frameRate: 30,
  renderMode: 2, // 强制 WebGL
}
```

### 重点：

✔ `id: canvasId`
👉 **让 Cocos 引擎挂载到你指定的前端 canvas**
👉 这就是你能不用 build-template 的核心原因
👉 你前端项目里写 `<canvas id="gameCanvas">` → Cocos 会自动用你这个

✔ 不加载任何场景
👉 你使用自己的“动态渲染系统（gameRender / widgetsRender）”

---

# 4. 配置画面与抗锯齿

```ts
cc.macro.ENABLE_WEBGL_ANTIALIAS = true
cc.view.enableAntiAlias(true)
cc.view.enableRetina(true)
cc.view.resizeWithBrowserSize(true)
```

这些是图形配置：

* 抗锯齿
* Retina (高分屏)
* 自适应窗口变化

---

# 5. 设置分辨率

```ts
;(cc.view.setDesignResolutionSize as any)(...this.designResolutionSize)
```

你在外部传入了 designResolutionSize，比如：

```ts
[1280, 720, cc.ResolutionPolicy.SHOW_ALL]
```

---

# 6. 启动一个空场景并挂 FPS

```ts
cc.director.runSceneImmediate(new cc.Scene(), undefined, () => {
    const fpsNode = new cc.Node()
    const com = (this.fpsControl = fpsNode.addComponent(FPSControl))
    com.designResolutionSize = this.designResolutionSize
    cc.director.getScene().addChild(fpsNode)
    resolve(null)
})
```

### ✔ 说明：

* 创建一个 **空场景**
* 挂载一个 FPS 控件节点
* `resolve()` 通知 boot 完成

此时引擎已经准备好，你后面可以自由往场景里加节点。

---

# 🎯 **最终结论（非常重要）**

## ✔ 你正在做的事是：

**完全绕过 Cocos Creator 的 index.html / boot.js / settings.json 自定义启动流程。**

Cocos Creator 正常启动流程是：

```
index.html
  ↓
settings.json（资源配置）
  ↓
cocos-js.js（引擎文件）
  ↓
project.js（你的游戏脚本）
  ↓
boot.js
  ↓
cc.game.run()
```

但你自己写了：

```
你的前端项目 (Vue/React)
  ↓
boot(canvasId)
  ↓
assetManager.init()
  ↓
加载引擎 和 资源
  ↓
cc.game.run()
  ↓
空场景 + FPS
  ↓
你自己的渲染逻辑
```

这就是为什么你可以：

* 不依赖 `build-templates/index.html`
* 直接在“前端项目”中启动 Cocos
* Cocos 能挂载到你的 canvas
* 引擎代码可以提前加载 / 缓存
* 可以多实例 （如果你想）

你实际上写了一个 **自定义 Cocos Runtime Loader**，很棒。

---

# 如果你愿意，我还可以帮你：

### 🔹 把整个流程画成架构图

### 🔹 优化你的 boot 流程（加入错误处理、资源预加载、异步 bundle）

### 🔹 让你的 cocos 引擎代码从 CDN 或缓存加载

### 🔹 让你的 Cocos 动态渲染内容变成一个“组件 API”

### 🔹 把你的 runtime 做成一个 npm 包（可复用）

你需要哪部分？
