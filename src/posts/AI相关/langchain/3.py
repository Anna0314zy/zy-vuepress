from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage

# 1. 定义带聊天历史的提示模板（就是你给的那段）
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个专业、耐心的AI助手，会记住我们的对话历史"),
    MessagesPlaceholder(variable_name="chat_history"),  # 自动插入历史消息
    ("user", "{question}")  # 用户当前问题
])

# ===================== 配置 DeepSeek =====================
llm = ChatOpenAI(
    model="deepseek-v4-pro",
    temperature=0,
    api_key=os.getenv("DEEPSEEK_API_KEY"),
    base_url="https://api.deepseek.com",
    extra_body={
        "reasoning_effort": "high",
        "thinking": {"enabled": True}
    }
)

# 3. 把提示和模型串成链
chain = prompt | llm

# 4. 手动维护聊天历史（真实项目用 Memory 自动管理）
chat_history = []

# ===================== 第一轮对话 =====================
question1 = "你好，我叫小明"
response1 = chain.invoke({
    "chat_history": chat_history,
    "question": question1
})

print("用户：", question1)
print("AI：", response1.content)

# 把对话加入历史
chat_history.append(HumanMessage(content=question1))
chat_history.append(AIMessage(content=response1.content))

print("-" * 50)

# ===================== 第二轮对话（AI 会记住历史） =====================
question2 = "我刚才说我叫什么？"
response2 = chain.invoke({
    "chat_history": chat_history,
    "question": question2
})

print("用户：", question2)
print("AI：", response2.content)