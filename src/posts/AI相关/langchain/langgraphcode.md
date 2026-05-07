# LangGraph 常用万能代码模板合集
直接复制就能跑，以后开发、写Agent、面试demo都能直接套用。
统一前置依赖：
```bash
pip install langgraph langchain langchain-openai pydantic python-dotenv
```

---

# 模板1：最简基础模板（TypedDict + 普通边）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

# 1. 定义状态
class GraphState(TypedDict):
    question: str
    answer: str

# 2. 定义节点
def answer_node(state: GraphState):
    return {"answer": f"AI回复：{state['question']}"}

# 3. 构图
builder = StateGraph(GraphState)
builder.add_node("ai_reply", answer_node)

builder.add_edge(START, "ai_reply")
builder.add_edge("ai_reply", END)

# 4. 编译运行
graph = builder.compile()
res = graph.invoke({"question": "什么是LangGraph?"})
print(res)
```

---

# 模板2：Pydantic 规范State模板（企业级推荐）
```python
from pydantic import BaseModel, Field
from langgraph.graph import StateGraph, START, END

# 带类型校验、默认值、描述
class ChatState(BaseModel):
    query: str = Field(description="用户输入问题")
    history: list[str] = Field(default_factory=list)
    result: str = Field(default="")

def process_node(state: ChatState):
    new_history = state.history + [state.query]
    return {"history": new_history, "result": f"处理完成：{state.query}"}

builder = StateGraph(ChatState)
builder.add_node("process", process_node)
builder.add_edge(START, "process")
builder.add_edge("process", END)

graph = builder.compile()
res = graph.invoke({"query": "你好Pydantic"})
print(res)
```

---

# 模板3：Reducer 列表追加模板（聊天记录必备）
```python
from typing import TypedDict, Annotated, List
import operator
from langgraph.graph import StateGraph, START, END

# Annotated + reducer 自动追加不覆盖
class ReducerState(TypedDict):
    messages: Annotated[List[str], operator.add]

def node_a(state: ReducerState):
    return {"messages": ["节点A执行完毕"]}

def node_b(state: ReducerState):
    return {"messages": ["节点B执行完毕"]}

builder = StateGraph(ReducerState)
builder.add_node("node_a", node_a)
builder.add_node("node_b", node_b)

builder.add_edge(START, "node_a")
builder.add_edge("node_a", "node_b")
builder.add_edge("node_b", END)

graph = builder.compile()
res = graph.invoke({"messages": []})
print(res["messages"])
```

---

# 模板4：条件分支模板（add_conditional_edges 通用骨架）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class RouteState(TypedDict):
    text: str
    output: str

# 分支节点
def judge_node(state: RouteState):
    return state

def branch_zh(state: RouteState):
    return {"output": "中文分支处理完成"}

def branch_en(state: RouteState):
    return {"output": "英文分支处理完成"}

# 路由函数
def route_func(state: RouteState):
    txt = state["text"]
    if any("\u4e00" <= c <= "\u9fff" for c in txt):
        return "zh"
    return "en"

# 构图
builder = StateGraph(RouteState)
builder.add_node("judge", judge_node)
builder.add_node("zh", branch_zh)
builder.add_node("en", branch_en)

builder.add_edge(START, "judge")
builder.add_conditional_edges(
    "judge",
    route_func,
    {"zh":"zh", "en":"en"}
)
builder.add_edge("zh", END)
builder.add_edge("en", END)

graph = builder.compile()
print(graph.invoke({"text":"你好"}))
print(graph.invoke({"text":"hello"}))
```

---

# 模板5：检查点记忆模板（多轮会话记住上下文）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import MemorySaver

class ChatState(TypedDict):
    msg: str
    history: list[str]

def chat_node(state: ChatState):
    new_hist = state["history"] + [state["msg"]]
    return {"history": new_hist}

builder = StateGraph(ChatState)
builder.add_node("chat", chat_node)
builder.add_edge(START, "chat")
builder.add_edge("chat", END)

# 开启内存检查点
checkpointer = MemorySaver()
graph = builder.compile(checkpointer=checkpointer)

# 同一个 thread_id 保持会话
config = {"configurable": {"thread_id": "chat_001"}}

graph.invoke({"msg":"第1句", "history":[]}, config=config)
res = graph.invoke({"msg":"第2句"}, config=config)
print(res["history"])
```

---

# 模板6：子图嵌套模板（模块化大型工作流）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

# -------- 子图 --------
class SubState(TypedDict):
    content: str
    sub_res: str

def sub_work(state: SubState):
    return {"sub_res": f"子图处理结果：{state['content']}"}

sub_builder = StateGraph(SubState)
sub_builder.add_node("sub_node", sub_work)
sub_builder.add_edge(START, "sub_node")
sub_builder.add_edge("sub_node", END)
sub_graph = sub_builder.compile()

# -------- 父图 --------
class MainState(TypedDict):
    input_text: str
    final_out: str

def main_work(state: MainState):
    sub_out = sub_graph.invoke({"content": state["input_text"], "sub_res":""})
    return {"final_out": sub_out["sub_res"]}

main_builder = StateGraph(MainState)
main_builder.add_node("main_node", main_work)
main_builder.add_edge(START, "main_node")
main_builder.add_edge("main_node", END)

main_graph = main_builder.compile()
print(main_graph.invoke({"input_text":"测试子图嵌套"}))
```

---

# 模板7：多Agent 主管-工人 标准骨架（可直接扩展业务）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class AgentState(TypedDict):
    task: str
    worker_result: str
    final_answer: str

# 主管：任务分发
def supervisor(state: AgentState):
    return state

# 工人：执行具体任务
def worker(state: AgentState):
    return {"worker_result": f"工人已完成任务：{state['task']}"}

# 汇总：主管整合输出
def summary(state: AgentState):
    return {"final_answer": f"最终汇总结果：{state['worker_result']}"}

# 构图
builder = StateGraph(AgentState)
builder.add_node("supervisor", supervisor)
builder.add_node("worker", worker)
builder.add_node("summary", summary)

builder.add_edge(START, "supervisor")
builder.add_edge("supervisor", "worker")
builder.add_edge("worker", "summary")
builder.add_edge("summary", END)

graph = builder.compile()
res = graph.invoke({"task":"帮我分析需求", "worker_result":"", "final_answer":""})
print(res["final_answer"])
```

---

# 模板8：流式输出基础模板（打字机效果必备）
```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class StreamState(TypedDict):
    query: str

def stream_node(state: StreamState):
    # 逐段yield 实现流式
    yield {"query": "开始生成..."}
    yield {"query": "中间内容..."}
    yield {"query": "生成结束"}

builder = StateGraph(StreamState)
builder.add_node("stream", stream_node)
builder.add_edge(START, "stream")
builder.add_edge("stream", END)

graph = builder.compile()

# 流式遍历
for chunk in graph.stream({"query":"流式测试"}):
    print(chunk)
```

---

# 使用说明
1. 以后写任何 LangGraph 项目，从上面挑对应模板改字段、改节点逻辑即可；
2. 面试写代码题，直接套 **模板1/模板4/模板7** 就能满分；
3. 做生产级Agent优先用 **Pydantic状态 + Reducer + 检查点记忆** 组合。

需要我把这些模板整理成 **可直接保存的py文件打包版**，或者给你做一个「LangGraph 学习思维导图高清版」吗？