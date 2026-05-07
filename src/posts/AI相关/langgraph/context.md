这张图是 **LangGraph 运行时上下文（Runtime Context）** 的核心用法拆解，我帮你把每个要点讲透，顺便给你完整的可运行示例。


---

## 一、核心概念：Runtime Context 是什么？
Runtime Context 是 LangGraph 提供的**单次运行只读环境信息**，和 State（状态）的区别是：
- `State`：可变的业务数据，节点之间共享并可修改
- `Runtime Context`：**只读的静态元数据/依赖项**，不随流程变化，不参与状态合并，只在运行时提供给节点访问

它的典型用途：传递用户ID、数据库连接、外部配置等「全局但单次运行有效」的依赖项。

---

## 二、三步使用流程（对应图里的 3 个部分）
### 1. 定义 Context Schema（上下文结构）
用 `@dataclass` 定义一个类，描述你要传递的上下文字段：
```python
from dataclasses import dataclass

@dataclass
class ContextSchema:
    user_id: str          # 比如用户ID
    db_connection: str    # 比如数据库连接配置
    is_admin: bool        # 比如权限标识
```
> 这些内容不属于图的 State，也不会被 LangGraph 自动合并，只是在节点运行时可以读取。

### 2. 节点函数定义：接收 `runtime` 参数
节点函数除了 `state`，还可以接收 `runtime: Runtime[ContextSchema]`，通过 `runtime.context` 访问上下文：
```python
from langgraph.runtime import Runtime

def my_node(state, runtime: Runtime[ContextSchema]):
    # 从上下文读取数据（类型安全，IDE 有自动补全）
    user_id = runtime.context.user_id
    db_conn = runtime.context.db_connection
    
    # 业务逻辑
    print(f"用户 {user_id} 正在访问数据库 {db_conn}")
    
    # 返回更新后的状态
    return {"message": "处理完成"}
```

### 3. 图的创建与执行
- 创建 `StateGraph` 时，通过 `context_schema` 参数指定上下文结构
- 调用 `graph.invoke()` 时，通过 `context` 参数传入实际数据
```python
from langgraph.graph import StateGraph, START, END
from typing import TypedDict

class State(TypedDict):
    message: str

# 1. 创建图时绑定 context_schema
graph = StateGraph(State, context_schema=ContextSchema)
graph.add_node("my_node", my_node)
graph.add_edge(START, "my_node")
graph.add_edge("my_node", END)

app = graph.compile()

# 2. 调用时传入上下文数据
result = app.invoke(
    {"message": "Hello"},
    context={
        "user_id": "user_123",
        "db_connection": "postgresql://localhost:5432/mydb",
        "is_admin": True
    }
)
```

---

## 三、和传统 `config` 的区别（重点！）
| 特性 | 传统 `config` 参数 | Runtime Context |
| :--- | :--- | :--- |
| 类型安全 | 弱，字典形式，IDE 无补全 | 强，基于 dataclass，自动补全 |
| 用途 | 配置执行器参数（如重试、超时） | 传递业务相关的静态依赖项 |
| 访问方式 | `config["configurable"]["key"]` | `runtime.context.key` |
| 子图传递 | 需手动配置 | 自动传递（LangGraph 会自动向下传递） |

---

## 四、完整可运行示例
```python
from dataclasses import dataclass
from typing import TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.runtime import Runtime

# 1. 定义上下文结构
@dataclass
class AppContext:
    user_id: str
    api_key: str

# 2. 定义状态结构
class AppState(TypedDict):
    response: str

# 3. 定义节点（访问 runtime.context）
def process_request(state: AppState, runtime: Runtime[AppContext]):
    # 从上下文读取数据
    user_id = runtime.context.user_id
    api_key = runtime.context.api_key
    
    # 业务逻辑
    response = f"用户 {user_id} 已通过 API Key {api_key} 验证"
    return {"response": response}

# 4. 创建并运行图
graph = StateGraph(AppState, context_schema=AppContext)
graph.add_node("process", process_request)
graph.add_edge(START, "process")
graph.add_edge("process", END)

app = graph.compile()

# 调用时传入上下文
result = app.invoke(
    {},
    context={
        "user_id": "user_456",
        "api_key": "sk-xxx123"
    }
)

print(result["response"])
# 输出：用户 user_456 已通过 API Key sk-xxx123 验证
```

---

## 五、适用场景总结
✅ 适合用 Runtime Context 的场景：
- 单次运行内不变的配置（用户ID、权限标识）
- 外部依赖（数据库连接、API Key）
- 跨节点/子图共享的只读信息

❌ 不适合的场景：
- 随流程变化的业务数据（应该用 State）
- 需要持久化或合并的数据（Context 不参与状态合并）

---
# `@dataclass` 超直白入门（专门给 LangGraph Context 用）
我用**最简单、最实用**的方式讲，你马上就能用在 Runtime Context 里。

---

# 1. 它是什么？
`@dataclass` 是 Python 自带的工具，**专门用来造“装数据的小盒子”**。

不用写复杂的 `__init__`，一行就能定义一个类。

---

# 2. 怎么用？（3 步搞定）
### 第一步：导入
```python
from dataclasses import dataclass
```

### 第二步：给类加装饰器
```python
@dataclass
class 名字:
    字段1: 类型
    字段2: 类型
```

### 第三步：创建对象 + 使用
```python
obj = 名字(字段1=值, 字段2=值)
print(obj.字段1)
```

---

# 3. 完整小例子
```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
    is_admin: bool

# 创建对象
user = User(name="张三", age=20, is_admin=True)

# 使用
print(user.name)    # 张三
print(user.age)     # 20
print(user.is_admin)# True
```

**超级简单：就是装数据的容器。**

---

# 4. 为什么 LangGraph Context 必须用它？
因为 LangGraph 的 **Runtime Context** 要求：
- 必须是**结构化**
- 必须**类型明确**
- 必须**只读、干净**

`@dataclass` 完美满足。

---

# 5. 直接套进 LangGraph 运行时上下文（你能直接复制）
```python
from dataclasses import dataclass

# 1. 定义上下文（装运行时数据）
@dataclass
class AppContext:
    user_id: str
    api_key: str
    tenant_id: str

# 2. 在节点里用
def my_node(state, runtime: Runtime[AppContext]):
    user_id = runtime.context.user_id
    api_key = runtime.context.api_key
    ...
```

---

# 6. 你只需要记住 3 条规则
1. **类上面写 @dataclass**
2. **里面写 变量名: 类型**
3. **外面用 对象.变量名 读取**

没有别的坑！

---

# 7. 一句话总结
**@dataclass = 不用写构造函数的极简数据类**
**LangGraph 用它来装运行时上下文**

---

