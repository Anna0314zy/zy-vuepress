

#一、Send 是什么（一句话）
**Send 是 LangGraph 里的“动态任务派发”原语**，可以在运行时，**动态生成任意数量的任务，并行调用同一个节点，并且每个任务带独立的局部状态**。

本质：**动态创建临时边 + 独立状态 + 并行执行**。

```python
from langgraph.constants import Send

Send(node="目标节点名", arg=局部状态)
```

---

## 二、解决什么问题（普通边做不到的）
普通 `add_edge/add_conditional_edge`：
- 边数量、目标节点必须**提前写死**
- 只能走固定分支，**没法动态生成 N 个并行任务**

Send：
- **运行时决定要跑几个任务**（比如根据列表长度）
- **每个任务用自己的 state**，互不干扰
- 天然支持 **map-reduce / 发散-汇聚** 模式

---

## 三、典型用法：Map-Reduce（面试必背）
场景：给一堆主题，**并行生成多个笑话，最后汇总**。

```python
from typing import TypedDict, List
from langgraph.graph import StateGraph, END
from langgraph.constants import Send

# 全局状态
class OverallState(TypedDict):
    subjects: List[str]  # 输入：一堆主题
    jokes: List[str]    # 输出：生成的笑话

# 局部状态（给每个子任务用）
class JokeState(TypedDict):
    subject: str

# 派发节点：动态生成 Send 列表
def planner(state: OverallState):
    # 每个 subject 生成一个独立任务
    return [Send("generate_joke", {"subject": s}) for s in state["subjects"]]

# 实际干活的节点（每个任务跑一次）
def generate_joke(state: JokeState) -> OverallState:
    return {"jokes": [f"笑话关于 {state['subject']}"]}

# 汇总节点
def reduce_jokes(state: OverallState) -> OverallState:
    return state

# 建图
builder = StateGraph(OverallState)
builder.add_node("planner", planner)
builder.add_node("generate_joke", generate_joke)
builder.add_node("reduce_jokes", reduce_jokes)

builder.set_entry_point("planner")
# 从 planner 发散到多个 generate_joke
builder.add_conditional_edges("planner", lambda x: planner(x))
# 所有 generate_joke 跑完后汇聚到 reduce_jokes
builder.add_edge("generate_joke", "reduce_jokes")
builder.add_edge("reduce_jokes", END)

graph = builder.compile()
```

流程：
```
planner → Send ×N → generate_joke（并行N个）→ reduce_jokes → END
```

---

## 四、Send 的核心能力（面试亮点）
1. **动态并行（Fan-out）**  
   运行时决定任务数量，**不固定边数**。
2. **状态隔离**  
   每个 Send 带**独立局部 state**，不污染全局状态。
3. **Map-Reduce 原生支持**  
   发散（map）→ 并行处理 → 汇聚（reduce），企业级批量任务标配。
4. **和状态快照/断点兼容**  
   每个子任务可独立中断、续跑，**Coze 完全做不到**。

---

