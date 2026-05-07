from langchain_core.prompts import load_prompt
from langchain_openai import ChatOpenAI
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory
import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# ===================== 从 YAML 加载带聊天历史的提示词 =====================
prompt = load_prompt("prompt.yaml", encoding="utf-8")

# ===================== DeepSeek 模型配置 =====================

# llm = ChatOpenAI(
#     # ========== 1. 基础必填字段 ==========
#     model="deepseek-v4-pro",                # 模型名称
#     api_key="xxx",                          # API Key
#     base_url="https://api.deepseek.com",    # 中转/国产模型必须填
    
#     # ========== 2. 生成参数 ==========
#     temperature=0.7,           # 随机性：0=最确定，1=最随机
#     max_tokens=4096,           # 最大生成长度
#     top_p=1.0,                 # 核采样
#     frequency_penalty=0,       # 重复惩罚
#     presence_penalty=0,        # 话题新鲜度
#     stop=["\n\n"],             # 停止词
    
#     # ========== 3. 超时/重试 ==========
#     timeout=None,              # 超时时间
#     max_retries=3,             # 自动重试次数
    
#     # ========== 4. 额外参数（国产模型专用！最重要！）==========
#     extra_body={               # 传给模型的原生参数
#         "reasoning_effort": "high",
#         "thinking": {"enabled": True}
#     },
#     extra_headers={},          # 自定义请求头
    
#     # ========== 5. 其他 ==========
#     streaming=False,           # 是否流式输出
#     verbose=False,             # 是否打印调试日志
#     model_kwargs={},           # 同 extra_body
# )
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

# 构建链
chain = prompt | llm

# ===================== 聊天记忆 =====================
store = {}
def get_session_history(session_id: str):
    if session_id not in store:
        store[session_id] = InMemoryChatMessageHistory()
    return store[session_id]

# 带记忆的链
chain_with_history = RunnableWithMessageHistory(
    chain,
    get_session_history,
    input_messages_key="question",
    history_messages_key="chat_history"
)

# ===================== 测试对话（会记住上下文） =====================
print("【第1轮】")
res1 = chain_with_history.invoke(
    {"question": "你好，我叫小明"},
    config={"configurable": {"session_id": "zy123"}}
)
print(res1.content)

print("\n---------------------------------------\n")

print("【第2轮】")
res2 = chain_with_history.invoke(
    {"question": "我叫什么名字？"},
    config={"configurable": {"session_id": "zy123"}}
)
print(res2.content)