

# 🧩 一、tsyringe 基础概念
我们来 **系统、详细地讲解 `tsyringe` 的每一个核心功能和用法**。
包括装饰器、注册方式、容器方法、作用域、生命周期、工厂函数等。
在 `tsyringe` 中有三个核心概念：

| 名称                   | 说明                           |
| -------------------- | ---------------------------- |
| **Container（容器）**    | 保存并管理所有依赖实例的中心。              |
| **Token（标识符）**       | 用来唯一标识一个依赖（可以是类、字符串、Symbol）。 |
| **Registration（注册）** | 指定如何创建或提供依赖实例（类、单例、值、工厂等）。   |

---

# 🧱 二、装饰器与容器的核心用法

## 1️⃣ `@injectable()`

标记一个类为“可被依赖注入容器创建”的类。

```ts
import { injectable } from 'tsyringe';

@injectable()
export class Logger {
  log(msg: string) {
    console.log(msg);
  }
}
```

> 没有 `@injectable()`，`container.resolve()` 就不知道怎么创建它。

---

## 2️⃣ `container.resolve()`

创建或获取一个依赖的实例（自动递归注入依赖）。

```ts
import { container } from 'tsyringe';
import { Logger } from './Logger';

const logger = container.resolve(Logger);
logger.log('Hello DI!');
```

---

## 3️⃣ 自动注入构造函数依赖

只要依赖类都打上了 `@injectable()`，容器会根据构造函数参数类型自动注入：

```ts
@injectable()
class UserService {
  constructor(private logger: Logger) {}

  sayHello() {
    this.logger.log('Hi user!');
  }
}

const userService = container.resolve(UserService);
userService.sayHello();
```

> Tsyringe 会自动发现 `Logger` 是 `UserService` 的依赖并创建它。

---

# 🧠 三、`@inject()`：手动指定 Token 注入

有时候依赖不是类，而是接口或自定义标识，这时要用 `@inject()` 明确告诉容器要注入哪个 Token。

```ts
import { injectable, inject } from 'tsyringe';

interface ILogger {
  log(msg: string): void;
}

@injectable()
class ConsoleLogger implements ILogger {
  log(msg: string) {
    console.log('[Console]', msg);
  }
}

@injectable()
class FileLogger implements ILogger {
  log(msg: string) {
    console.log('[File]', msg);
  }
}

// 注册自定义 token
container.register<ILogger>('ILogger', { useClass: ConsoleLogger });

@injectable()
class AppService {
  constructor(@inject('ILogger') private logger: ILogger) {}

  run() {
    this.logger.log('App running...');
  }
}

container.resolve(AppService).run();
```

---

# 🧰 四、注册依赖的几种方式

## 1️⃣ `container.register(token, { useClass })`

注册一个类，当注入该 token 时，会创建对应的类实例。

```ts
container.register('ILogger', { useClass: ConsoleLogger });
```

> 每次注入时都会创建新的实例。

---

## 2️⃣ `container.registerSingleton(token, Class)`

注册为单例，只创建一次实例。

```ts
container.registerSingleton(Logger);
container.registerSingleton('ILogger', ConsoleLogger);
```

> 同样的 Token 在整个生命周期中只会被创建一次。

---

## 3️⃣ `container.registerInstance(token, instance)`

直接注册一个已经创建好的实例（值注入）。

```ts
const config = { apiBase: '/api' };
container.registerInstance('Config', config);

@injectable()
class ApiClient {
  constructor(@inject('Config') private conf: any) {
    console.log('API base:', conf.apiBase);
  }
}
```

---

## 4️⃣ `container.register(token, { useValue })`

类似于 `registerInstance`，直接注册一个值。

```ts
container.register('BASE_URL', { useValue: 'https://api.example.com' });
```

---

## 5️⃣ `container.register(token, { useFactory })`

注册一个工厂函数，每次解析时执行函数返回值。

```ts
container.register('Random', {
  useFactory: () => Math.random()
});

const a = container.resolve('Random');
const b = container.resolve('Random');
console.log(a === b); // false
```

---

# 🧬 五、生命周期（生命周期控制）

Tsyringe 有三种注册生命周期：

| 类型          | 说明               | 示例                                      |
| ----------- | ---------------- | --------------------------------------- |
| `Transient` | 每次解析都会新建一个实例（默认） | `container.register()`                  |
| `Singleton` | 所有解析共享同一个实例      | `registerSingleton()`                   |
| `Scoped`    | 同一个作用域内共享实例      | （通过 `container.createChildContainer()`） |

---

## 1️⃣ Transient（默认）

```ts
container.register(Logger, { useClass: Logger }); // 每次 resolve 新建
```

## 2️⃣ Singleton

```ts
container.registerSingleton(Logger); // 所有地方同一个实例
```

## 3️⃣ Scoped（作用域）

```ts
const parent = container.createChildContainer();
const child = parent.createChildContainer();
```

> 子容器可以继承父容器的注册配置，但拥有自己的实例副本。

---

# 🧩 六、装饰器汇总

| 装饰器                | 功能          |
| ------------------ | ----------- |
| `@injectable()`    | 让类可以被自动注入   |
| `@inject(token)`   | 手动指定注入来源    |
| `@singleton()`     | 自动注册为单例     |
| `@scoped(scope)`   | 注册为指定作用域的实例 |
| `@registry([...])` | 批量注册依赖      |

---

### 示例：`@singleton()`

```ts
import { singleton } from 'tsyringe';

@singleton()
class GameManager {
  public id = Math.random();
}

const a = container.resolve(GameManager);
const b = container.resolve(GameManager);
console.log(a.id === b.id); // true ✅
```

---

### 示例：`@registry()`

批量注册多个依赖。

```ts
import { registry, injectable } from 'tsyringe';

@injectable()
class ServiceA {}

@injectable()
class ServiceB {}

@registry([
  { token: 'A', useClass: ServiceA },
  { token: 'B', useClass: ServiceB }
])
class App {}
```

---

# ⚙️ 七、容器相关 API 一览

| 方法                                            | 说明           |
| --------------------------------------------- | ------------ |
| `container.register(token, provider)`         | 注册依赖         |
| `container.registerInstance(token, instance)` | 注册已存在实例      |
| `container.registerSingleton(token, class)`   | 注册单例         |
| `container.resolve(token)`                    | 获取实例         |
| `container.isRegistered(token)`               | 是否注册过        |
| `container.createChildContainer()`            | 创建子容器（作用域隔离） |
| `container.clearInstances()`                  | 清除单例缓存       |

---

# 🧠 八、应用场景示例（Cocos 项目）

假设你有以下结构：

```
services/
 ├── AudioManager.ts
 ├── UIManager.ts
 ├── GameController.ts
main.ts
```

### `AudioManager.ts`

```ts
import { singleton } from 'tsyringe';

@singleton()
export class AudioManager {
  playSound(name: string) {
    console.log(`播放音效：${name}`);
  }
}
```

### `UIManager.ts`

```ts
import { singleton } from 'tsyringe';

@singleton()
export class UIManager {
  showPanel(name: string) {
    console.log(`显示面板：${name}`);
  }
}
```

### `GameController.ts`

```ts
import { injectable } from 'tsyringe';
import { AudioManager } from './AudioManager';
import { UIManager } from './UIManager';

@injectable()
export class GameController {
  constructor(
    private audio: AudioManager,
    private ui: UIManager
  ) {}

  startGame() {
    this.ui.showPanel('MainMenu');
    this.audio.playSound('Start');
  }
}
```

### `main.ts`

```ts
import 'reflect-metadata';
import { container } from 'tsyringe';
import { GameController } from './services/GameController';

const game = container.resolve(GameController);
game.startGame();
```

✅ 输出：

```
显示面板：MainMenu
播放音效：Start
```

---

# 📘 九、总结表格

| 功能    | API / 装饰器                                        | 说明              |
| ----- | ------------------------------------------------ | --------------- |
| 注册类   | `container.register()`                           | 默认 transient 实例 |
| 注册单例  | `container.registerSingleton()` / `@singleton()` | 全局唯一            |
| 注册值   | `useValue` / `registerInstance()`                | 直接使用固定对象        |
| 注册工厂  | `useFactory`                                     | 动态创建实例          |
| 自动注入  | `@injectable()`                                  | 允许容器创建          |
| 手动注入  | `@inject()`                                      | 自定义 token 注入    |
| 批量注册  | `@registry()`                                    | 一次性注册多个依赖       |
| 创建作用域 | `createChildContainer()`                         | 多容器管理           |
| 清空单例  | `clearInstances()`                               | 重置容器状态          |

---
