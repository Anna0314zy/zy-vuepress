
# PackageService


这个 `PackageService` 是整个播放器／课堂系统里 **负责课件资源（package）管理与下载的核心服务**。
简单说，它管的就是：

> **课件包（package）怎么初始化、怎么改 URL、什么包需要下载、怎么触发下载、怎么处理 Light Page（COCOS）运行时。**

下面我拆开讲，保证你一眼明白。

---

# 🧩 1. 这个服务的核心职责

`PackageService` 做三件事：

### ✅ 1) 初始化 package 信息

接收服务器给的 package 列表，把 URL 修正成当前平台可访问的格式。

### ✅ 2) 下载所有 package

负责让 Render 端（通过 JsonRPC）去真正下载 ZIP / PKG 文件。

### ✅ 3) 下载 Light Page（COCOS）运行时

如果课件内容里有 `SE-LP` 类型（Light Page 轻量页），就自动补下 cocos runtime 包。

---

# 🧩 2. 重要方法解析

## ① `init(packageInfo, traceID)`

加载 package 信息，并根据平台修改 URL。

```ts
init(packageInfo: PackageInfo[], traceID: string) {
  logger.info(...)
  for (const pkg of packageInfo) {
    const url = this.isWeb ? pkg.url : `render/${pkg.id}/index.html`
    pkg.url = url
    this.packageInfo.push(pkg)
  }
}
```

### 作用：

* Web 端：使用真实 URL 下载（CDN / OSS 的地址）
* Native 端：用本地路径（因为包会被下载到本地，因此 URL 必须是本地路径）

### 例子：

#### ● Web 平台：

```
https://cdn.xxx.com/package/physics-v2/index.html
```

#### ● Native / Electron 平台：

```
render/physics-v2/index.html
```

其实就是让 **Web/Native 两端都能正确访问 package 内容**。

---

## ② `downloadPackage(client, slides, traceID)`

下载所有需要的 package。

```ts
const pkgPromise = this.packageInfo.map(({ id, down }) => down && updatePackage(client, id))
```

### 作用：

通过 **render 端（播放器渲染进程）** 去下载 package。

`updatePackage(client, id)` → 内部会执行：

```
client.request("download", {
   id,
   version,
   url
})
```

📌 也就是说 **PackageService 本身不下载，只负责告诉 render 端下载**。

---

### 🔥 Light Page 特殊逻辑（重点）

```ts
if (slides.find(e => e.type === 'SE-LP')) {
  pkgPromise.push(
    (async () => {
      const id = 'cocos'
      const { version, url } = await this.getLightPageRuntime()
      await client.request('download', { packageInfo: { id, version, url }, unzipPath: id })
    })(),
  )
}
```

意思是：

**如果课件里包含 Light Page（轻量页），必须下载 cocos runtime（引擎）才能渲染。**

也就解释了你之前看到的类似文件：

* `cocos2d-js-min-v24.js`
* `physics-min.js`

这些都是 Light Page 的运行时文件。

---

## ③ `getLightPageRuntime()`

从 PKM 获取最新 cocos 运行时信息。

```ts
const pkmPath = `/package/online/${id}/tag/stable.json`
const pkgInfo = await fetch(AS_HUOHUA_PKM + pkmPath).json()
return { id, url, version }
```

### 它做的是：

从 PKM（package 管理服务）请求：

```
/package/online/light-page-runtime/tag/stable.json
```

得到：

```json
{
  "versions": [
    {
      "url": "https://xxx/cocos-runtime-v2.zip",
      "version": "2.3.1"
    }
  ]
}
```

然后把这个 runtime 下载到本地。

---

# 🧩 3. 总结一句话

这个 `PackageService` 的作用就是：

> **负责课件 package 的地址修正、初始化、触发下载，以及检测是否需要下载 Cocos Light Page 运行时（cocos2d-js / physics-min 等文件）。**

整体流程是：

```
[服务器下发 package 列表]
      ↓
PackageService.init()
      ↓
下载 package → updatePackage()
      ↓
如果课件里包含 SE-LP（轻量页）
      ↓
补充下载 cocos runtime（cocos2d-js-min-v24.js 等）
```

---

# 想继续深入吗？

我可以帮你：

### ✅ 画整个 PackageService 的流程图

### ✅ 画 UI ↔ Player ↔ Render ↔ PackageService 的整体架构图

### ✅ 通俗解释什么是 SE-LP（轻量页）

### ✅ 通俗解释你前面看到的所有 cocos 相关文件到底对应哪些模块

你想看哪一个？
