# reflect-metadata
---

### 🔹1️⃣ `import 'reflect-metadata'`

这个是 **TypeScript 装饰器（Decorators）机制的底层依赖**。

#### ✅ 作用

* 启用 **元数据反射（metadata reflection）**。
* 当你在类上使用装饰器（比如 `@Injectable()`、`@Controller()`、`@Reflect.metadata()` 等）时，TypeScript 会生成一些元数据。
* `reflect-metadata` 提供 `Reflect.defineMetadata`、`Reflect.getMetadata` 这些 API 来存取这些元数据。

#### ✅ 示例

```ts
import 'reflect-metadata';

class Person {
  @Reflect.metadata('role', 'admin')
  name = 'Alice';
}

console.log(Reflect.getMetadata('role', Person.prototype, 'name')); // 输出 "admin"
```

#### ⚙️ 常见用途

* 在 **依赖注入（DI）框架** 里（如 InversifyJS、NestJS）
* 在 **序列化 / ORM** 框架中（如 TypeORM）
* 在 **自定义装饰器** 中使用

> 👉 没有这行 import，TypeScript 的装饰器生成的元信息是拿不到的。

---

### 🔹2️⃣ `import 'whatwg-fetch'`

这是一个 **Fetch API 的 polyfill（垫片）**。

#### ✅ 作用

* 让旧环境（比如老版本的浏览器、或者 Node 旧版本）支持 `fetch()`。
* 加载后会在全局对象上定义 `window.fetch` 或 `globalThis.fetch`。

#### ✅ 示例

```ts
import 'whatwg-fetch';

fetch('/api/data')
  .then(res => res.json())
  .then(console.log);
```

#### ⚙️ 常见用途

* 让代码在浏览器和 Node 环境中都能使用同一套基于 `fetch` 的网络请求逻辑。
* 在老版本 Safari、IE 等环境中保证 `fetch()` 可用。

---

### 🧩总结对比

| 包                    | 主要用途         | 是否修改全局对象             | 常见场景       |
| -------------------- | ------------ | -------------------- | ---------- |
| **reflect-metadata** | 元数据反射（支持装饰器） | ✅ 是（添加 Reflect.xxx）  | DI、ORM、装饰器 |
| **whatwg-fetch**     | 提供 fetch()   | ✅ 是（添加 window.fetch） | 网络请求兼容性    |

---


```ts
import 'reflect-metadata'
import 'whatwg-fetch'
```

主要是：

* 确保装饰器语法（依赖注入、反射）能正常工作；
* 确保网络请求里用 `fetch()` 不会在旧环境报错。

---

