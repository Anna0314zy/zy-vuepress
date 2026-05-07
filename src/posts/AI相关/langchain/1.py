from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage

# 1. 定义模板（就是你图中的代码）
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个资深的Python应用开发工程师，请认真回答我提出的Python相关的问题"),
    MessagesPlaceholder("memory"),
    ("human", "{question}")
])

# 2. 模拟历史对话（多轮上下文）
history = [
    HumanMessage("什么是Python的装饰器？"),
    AIMessage("装饰器是Python中用于扩展函数或类功能的一种语法糖，它本质上是一个高阶函数...")
]

# 3. 调用模板，填充变量
filled_prompt = prompt.format_messages(
    memory=history,
    question="那怎么写一个带参数的装饰器？"
)

# 打印最终生成的对话格式
for msg in filled_prompt:
    print(f"{msg.type}: {msg.content}")