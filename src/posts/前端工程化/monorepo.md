---
title: monorepo
tags:
   - 工程化
---


## 参考

- [pnpm + monorepo + changeset实现多包管理和发布](https://juejin.cn/post/7181720787400228925)

## Turborepo

子包 libs/component ，但是下次 libs/component 没有代码改动，如何跳过这部分前置依赖的构建？

此时推荐你使用 [Turborepo](https://turborepo.com/docs) 来做 monorepo 构建方案，具体使用方法请参见 官方文档 和 examples 。

注：如果在 CI 中构建，同样需要容器支持恢复上次的 turbo 缓存，可以通过 --cache-dir 选项更改缓存位置。