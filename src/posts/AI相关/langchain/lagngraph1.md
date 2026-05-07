# LangGraph 完整学习路线 + 分阶段可运行代码示例
## 一、整体阶梯式学习路线（按你拆解的课程排序）
### 阶段1：基础认知（01-05）
1. LangGraph 定位、解决什么问题、和 LangChain Chain 区别
2. 四大核心概念：**State、Node、Edge、Graph**
3. 最简 HelloWorld 跑通流程
4. 理解标准构建五步法：
   `定义State → 定义Node → 定义Edge → 编译Graph → 运行调试`

### 阶段2：基础API精通（06-15）
1. 图构建API：`StateGraph` / `add_node` / `add_edge` / `add_conditional_edges` / 入口/终点
2. State 两种定义：`TypedDict` 简单版、`Pydantic` 校验版
3. State 进阶：**Reducer 状态合并策略**
4. Node 进阶：函数/类定义、缓存、异常重试
5. Edge 进阶：普通边、条件边、`Send` 并行执行

### 阶段3：企业级高级特性（16-23）
1. `Command` 动态跳转控制
2. `RuntimeContext` 运行时上下文
3. Streaming 流式输出
4. 检查点持久化：内存 → SQLite
5. 对话记忆 + Time-Travel 时间回溯调试
6. 子图模块化、父图嵌套子图

### 阶段4：多智能体架构（24-27）
1. 跨图状态交互
2. 多Agent架构：主管-工人、A2A
3. 多Agent任务分配与结果汇总
4. Agent 技能模块化封装

---

# 二、分阶段可运行代码示例
## 前置依赖安装
```bash
pip install langgraph langchain langchain-openai python-dotenv pydantic
```

## 示例1：阶段1 最简 HelloWorld（State+Node+普通边）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

# 1. 定义State
class GraphState(TypedDict):
    question: str
    answer: str

# 2. 定义Node
def ai_answer(state: GraphState) -> GraphState:
    return {"answer": f"收到你的问题：{state['question']}，我已给出回复"}

# 3. 构建图
builder = StateGraph(GraphState)
builder.add_node("ai_node", ai_answer)

# 流程：开始 -> ai节点 -> 结束
builder.add_edge(START, "ai_node")
builder.add_edge("ai_node", END)

# 4. 编译运行
graph = builder.compile()
res = graph.invoke({"question": "LangGraph是什么？"})
print(res)
```

## 示例2：阶段2 TypedDict + Pydantic 两种State定义
### 2.1 TypedDict 简单State
```python
from typing import TypedDict, List

class SimpleState(TypedDict):
    query: str
    history: List[str]
```

### 2.2 Pydantic 带校验State
```python
from pydantic import BaseModel, Field

class PydanticState(BaseModel):
    query: str = Field(description="用户问题")
    history: list[str] = Field(default_factory=list)
    score: int = Field(default=0, ge=0, le=10)
```

## 示例3：阶段2 Reducer 状态追加策略
```python
from typing import TypedDict, Annotated, List
import operator
from langgraph.graph import StateGraph, START, END

# Annotated + reducer 实现列表追加
class ReducerState(TypedDict):
    messages: Annotated[List[str], operator.add]

def node1(state: ReducerState):
    return {"messages": ["节点1执行完成"]}

def node2(state: ReducerState):
    return {"messages": ["节点2执行完成"]}

builder = StateGraph(ReducerState)
builder.add_node("n1", node1)
builder.add_node("n2", node2)
builder.add_edge(START, "n1")
builder.add_edge("n1", "n2")
builder.add_edge("n2", END)

graph = builder.compile()
res = graph.invoke({"messages": []})
print(res["messages"])
# 输出：['节点1执行完成', '节点2执行完成']
```

## 示例4：阶段2 条件分支 add_conditional_edges
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class State(TypedDict):
    input_text: str
    result: str

# 节点
def judge_node(state: State) -> State:
    return state

def handle_english(state: State) -> State:
    return {"result": "检测到英文，走英文处理分支"}

def handle_chinese(state: State) -> State:
    return {"result": "检测到中文，走中文处理分支"}

# 条件判断函数
def route_func(state: State):
    if all(ord(c) < 128 for c in state["input_text"]):
        return "en_node"
    return "zh_node"

# 构图
builder = StateGraph(State)
builder.add_node("judge", judge_node)
builder.add_node("en_node", handle_english)
builder.add_node("zh_node", handle_chinese)

builder.add_edge(START, "judge")
# 条件分支
builder.add_conditional_edges(
    "judge",
    route_func,
    {"en_node": "en_node", "zh_node": "zh_node"}
)
builder.add_edge("en_node", END)
builder.add_edge("zh_node", END)

graph = builder.compile()
print(graph.invoke({"input_text": "hello world"}))
print(graph.invoke({"input_text": "你好"}))
```

## 示例5：阶段3 内存检查点 + 会话记忆基础
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import MemorySaver

class ChatState(TypedDict):
    msg: str
    memory: list[str]

def chat_node(state: ChatState) -> ChatState:
    new_memory = state["memory"] + [state["msg"]]
    return {"memory": new_memory}

builder = StateGraph(ChatState)
builder.add_node("chat", chat_node)
builder.add_edge(START, "chat")
builder.add_edge("chat", END)

# 内存检查点
checkpointer = MemorySaver()
graph = builder.compile(checkpointer=checkpointer)

# 同一个thread_id保持会话记忆
config = {"configurable": {"thread_id": "1"}}
graph.invoke({"msg": "你好1", "memory": []}, config=config)
res = graph.invoke({"msg": "你好2"}, config=config)
print(res["memory"])
```

## 示例6：阶段3 子图嵌套（父图+子图模块化）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class SubState(TypedDict):
    content: str
    sub_res: str

# 子图
def sub_func(state: SubState):
    return {"sub_res": f"子图处理：{state['content']}"}

sub_builder = StateGraph(SubState)
sub_builder.add_node("sub_node", sub_func)
sub_builder.add_edge(START, "sub_node")
sub_builder.add_edge("sub_node", END)
sub_graph = sub_builder.compile()

# 父图复用子图
class MainState(TypedDict):
    text: str
    final_res: str

def main_node(state: MainState):
    sub_out = sub_graph.invoke({"content": state["text"], "sub_res": ""})
    return {"final_res": sub_out["sub_res"]}

main_builder = StateGraph(MainState)
main_builder.add_node("main", main_node)
main_builder.add_edge(START, "main")
main_builder.add_edge("main", END)

main_graph = main_builder.compile()
print(main_graph.invoke({"text": "测试子图嵌套"}))
```

## 示例7：阶段4 最简多Agent 主管-工人模式骨架
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class AgentState(TypedDict):
    task: str
    worker_res: str
    final_res: str

# 主管节点：分配任务
def supervisor(state: AgentState) -> AgentState:
    return state

# 工人节点：执行任务
def worker(state: AgentState) -> AgentState:
    return {"worker_res": f"工人完成任务：{state['task']}"}

# 汇总节点
def summary(state: AgentState) -> AgentState:
    return {"final_res": f"主管汇总：{state['worker_res']}"}

builder = StateGraph(AgentState)
builder.add_node("supervisor", supervisor)
builder.add_node("worker", worker)
builder.add_node("summary", summary)

builder.add_edge(START, "supervisor")
builder.add_edge("supervisor", "worker")
builder.add_edge("worker", "summary")
builder.add_edge("summary", END)

graph = builder.compile()
print(graph.invoke({"task": "帮我查天气", "worker_res": "", "final_res": ""}))
```

---

# 三、学习使用建议
1. 按**路线阶段顺序**逐个跑代码，每跑通一个示例就对应吃透一节知识点；
2. 先会抄改，再自己新增字段、新增节点、改条件分支；
3. 基础吃透后，再叠加：流式输出、SQLite持久化、Command、RuntimeContext；
4. 最后基于**主管-工人**模板，扩展成自己的多Agent 知识库/工具调用机器人。

需要我把每一节对应**必背核心概念 + 面试要点**整理成一页速记版，方便你复习吗？