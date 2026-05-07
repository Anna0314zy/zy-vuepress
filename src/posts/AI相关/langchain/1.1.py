from langchain_core.prompts import load_prompt
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage
from dotenv import load_dotenv
import os

load_dotenv()

# ✅ 加载 YAML（只负责单轮）
prompt = load_prompt("prompt.yaml", encoding="utf-8")

llm = ChatOpenAI(
    model="deepseek-v4-pro",
    temperature=0,
    api_key=os.getenv("DEEPSEEK_API_KEY"),
    base_url="https://api.deepseek.com",
)

# ===================== 历史 =====================
chat_history = [
    HumanMessage(content="你好，我叫小明"),
    AIMessage(content="你好小明！很高兴认识你。"),
]
py
# ===================== 当前问题 =====================
question = "我刚才说我叫什么？"

# 👉 1. 先生成当前 prompt（只有 system + 当前问题）
current_prompt = prompt.format_prompt(question=question)

# 👉 2. 拼接历史 + 当前
messages = []

# system
messages.extend(current_prompt.messages[:1])

# history
messages.extend(chat_history)

# 当前问题
messages.append(current_prompt.messages[-1])

# 👉 3. 调用模型
response = llm.invoke(messages)

print("模型回答：")
print(response.content)