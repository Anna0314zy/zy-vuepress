你现在的问题很典型：**API 能看懂，但不知道什么时候该用哪个**。那我们不讲概念，直接讲“真实开发里什么时候用它”。

我用你在做的「课件编辑器 + AI」来举例，你会一下子明白。

---

# 一、先给你一个核心判断公式（很重要）

你只要记住这 4 句话就够了：

* 👉 **一步一步处理 → 用 Sequence**
* 👉 **要不要分情况 → 用 Branch**
* 👉 **要同时做多件事 → 用 Parallel**
* 👉 **需要写点自定义逻辑 → 用 Lambda**

---

# 二、用一个真实场景讲清楚（你项目里一定会遇到）

## 🎯 场景：用户输入一句话生成课件

比如用户输入：

> “帮我做一页讲解牛顿定律的课件”

---

## 🔹场景 1：最基础流程（Sequence）

你要做的事情：

1. 优化用户输入
2. 调 LLM
3. 解析结果

👉 这就是：

```text
输入 → 处理 → LLM → 输出
```

👉 用 **Sequence**

```python
chain = preprocess | prompt | model | parser
```

📌 使用时机：

> 只要是“流水线”，闭眼用 Sequence

---

## 🔹场景 2：不同类型课件（Branch）

用户可能说：

* “做一页 PPT”
* “做一个选择题”
* “做一个总结页”

👉 你必须走不同逻辑

```text
如果是 PPT → 用 PPT prompt
如果是题目 → 用题目 prompt
```

👉 用 **Branch**

```python
RunnableBranch(
  (is_ppt, ppt_chain),
  (is_quiz, quiz_chain),
  (True, default_chain)
)
```

📌 使用时机：

> 只要你脑子里出现 “if/else”，就该用 Branch

---

## 🔹场景 3：一次生成多个内容（Parallel）

你一页课件通常需要：

* 标题
* 内容
* 图片描述

👉 如果你一个个生成：

```text
标题 → 再等 → 内容 → 再等 → 图片
```

❌ 很慢

👉 正确做法：同时生成

```python
RunnableParallel({
  "title": title_chain,
  "content": content_chain,
  "image": image_chain
})
```

📌 使用时机：

> 需要“同时做多件事”

---

## 🔹场景 4：你要自己处理数据（Lambda）

比如你要：

* 给输入加前缀
* 截断长度
* 拼接字段

```python
RunnableLambda(lambda x: "帮我生成课件：" + x)
```

📌 使用时机：

> 只要不是 AI，而是你自己写逻辑

---

# 三、把它们组合起来（这才是真正用法）

现实中你不会单独用，而是这样👇

```text
用户输入
   ↓
Lambda（预处理）
   ↓
Branch（判断类型）
   ↓
Parallel（同时生成多个部分）
   ↓
Sequence（整合输出）
```

👉 这就是一个完整 AI 流程

---

# 四、给你一个“你项目里的最终形态”

你以后会写出这种结构：

```python
chain = (
    preprocess
    | RunnableBranch(
        (is_ppt, ppt_chain),
        (is_quiz, quiz_chain),
        (True, default_chain)
    )
    | RunnableParallel({
        "title": title_chain,
        "content": content_chain,
        "image": image_chain
    })
    | postprocess
)
```

---

# 五、为什么你会觉得难理解（我直接点破）

因为你现在：

👉 还在用“调用 API”的思维

但 Runnable 是：

👉 **“搭流程”的思维（类似前端状态流 / Redux / pipeline）**

---

# 六、换个你熟悉的类比（前端）

如果你是前端，这样理解最快：

| Runnable | 前端类比                  |
| -------- | --------------------- |
| Sequence | middleware / pipeline |
| Branch   | if / router           |
| Parallel | Promise.all           |
| Lambda   | util function         |

---

# 七、给你一个最小练习（建议你现在就试）

你先只做这个👇

👉 输入一句话，同时输出：

* 大写版本
* 长度

```python
chain = RunnableParallel({
    "upper": RunnableLambda(lambda x: x.upper()),
    "len": RunnableLambda(lambda x: len(x))
})

print(chain.invoke("hello"))
```

---

# 最后说一句实话

你现在不是不会用：

👉 是**没有“业务场景绑定”**

一旦你在做：

* AI 编辑器
* AI 工作流
* 多步骤生成

👉 Runnable 就会变成**必备工具**

---

如果你愿意，我可以下一步直接带你做一个👇

👉 **“AI 自动生成一页课件（完整 Runnable 实战）”**

会把这 4 个全部用上，而且能直接用到你项目里。
