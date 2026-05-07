# 两张极简流程图，看懂 LangGraph Command
最简选型口诀（背下来就行）
只分流、不改新数据 → 条件边
要改状态同时决定往哪走 → Command
LLM 决策、动态跳转、人机中断 → 一律 Command
固定流水线、规则写死 → 条件边更清晰
给你一个直白例子
任务：判断用户是否会员，只分流不额外改数据→ 用传统条件边
任务：判断用户等级 同时更新会员标签 再决定走哪个流程→ 直接上 Command
## 第一张：传统写法（条件边）
逻辑拆在**图配置**里，节点只管干活，不管往哪走
```
START
  ↓
【节点A】只更新状态
  ↓
条件边判断状态
├─满足条件 → 【节点B】→ END
└─不满足 → 【节点C】→ END
```
**痛点**：判断逻辑和节点代码分家，边多了乱成蜘蛛网。

---

## 第二张：Command 写法
节点自己**改状态 + 决定下一步**，不用额外配条件边
```
START
  ↓
【节点A】
  1. 处理业务
  2. 返回 Command
     update 更新状态
     goto 指定下一站
  ↓
自动跳到 goto 目标
├─goto="node_b" → 【节点B】→ END
└─goto="node_c" → 【节点C】→ END
```
**优势**：路由逻辑全包在节点内部，代码内聚、好维护。

---

## Command 内部结构图解
```
┌──────────────────────────┐
│     Command()            │
│  update → 刷新状态数据    │
│  goto   → 指定下个节点    │
│  resume → 人工中断恢复用  │
└──────────────────────────┘
```

## 一句话记死
不用在图上写 `add_conditional_edges`，**节点返回 Command，自己管跳转**。


### 一、Command 是什么
`Command` 是 LangGraph 里的特殊返回值，用于**在节点内同时做状态更新 + 流程路由**，替代传统“条件边”，让逻辑更内聚。

```python
from langgraph.types import Command
```

### 二、核心参数（Python）
```python
Command(
    update=None,   # 要合并到 state 的字典
    goto=None,     # 下一跳节点（字符串/列表/send）
    resume=None,   # 恢复值（用于中断后）
    graph=None     # 子图目标（高级）
)
```

#### 1) update：更新状态
```python
def node(state):
    return Command(update={"foo": "bar", "count": state["count"]+1})
```

#### 2) goto：控制流向（最常用）
- 直接节点名：`goto="node_b"`
- 多节点（并行）：`goto=["node_b", "node_c"]`
- 终止图：`goto=END`
- 子图跳转：`goto=Command.PARENT`（返回父图）

### 三、最小示例（替代条件边）
```python
from typing_extensions import TypedDict, Literal
from langgraph.graph import StateGraph, START, END
from langgraph.types import Command

class State(TypedDict):
    foo: str

def node_a(state: State) -> Command[Literal["node_b", "node_c"]]:
    # 业务逻辑
    if state["foo"] == "a":
        return Command(update={"foo": "processed_a"}, goto="node_b")
    else:
        return Command(update={"foo": "processed_x"}, goto="node_c")

def node_b(state):
    print("B:", state)

def node_c(state):
    print("C:", state)

# 建图：只连 START→A，不需要 A→B/C 的条件边
g = StateGraph(State)
g.add_node("a", node_a)
g.add_node("b", node_b)
g.add_node("c", node_c)
g.add_edge(START, "a")

app = g.compile()
app.invoke({"foo": "a"})  # 走到 B
```

### 四、常用场景
1. **替代条件边**：路由逻辑写在节点内，不用外部 `add_conditional_edges`。
2. **动态多分支**：根据运行时数据决定下一步。
3. **状态+路由原子化**：避免“先改状态、再路由”的两步不一致。
4. **中断后恢复**：配合 `resume` 实现人工介入后继续。

### 五、与 CLI 区分
- **Command（代码）**：`langgraph.types.Command`，节点返回值，控制流+状态。
- **CLI（命令行）**：`langgraph new/dev/up`，项目脚手架与服务启停。
