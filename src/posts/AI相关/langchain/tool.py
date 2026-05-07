import os
from langchain_openai import ChatOpenAI
from langchain.tools import tool
from langchain_core.messages import HumanMessage, ToolMessage

# 1️⃣ 你的模型（保持不变）TODO 这个模型不支持 bind_tools 调用 不是所有大模型都支持 tool calling

# 必须满足：

# 支持 function calling schema
# 返回 tool_calls 格式
# 遵循 OpenAI 协议
llm = ChatOpenAI(
    model="deepseek-v4-pro",
    temperature=0,
    api_key=os.getenv("DEEPSEEK_API_KEY"),
    base_url="https://api.deepseek.com",
)

# 2️⃣ 定义工具
@tool
def get_weather(city: str) -> str:
    """查询某个城市的天气，比如：北京、上海、东京"""
    weather_data = {
        "北京": "晴 25°C",
        "上海": "多云 28°C",
        "东京": "阴 22°C"
    }
    return weather_data.get(city, f"{city} 暂无天气数据")

# 3️⃣ 绑定工具
llm_with_tools = llm.bind_tools([get_weather])

# 4️⃣ 用户问题
messages = [
    HumanMessage(content="东京今天天气怎么样？")
]

# 5️⃣ 第一次调用（让模型决定是否调用工具）
response = llm_with_tools.invoke(messages)

print("🧠 模型第一步输出：", response)

# 6️⃣ 如果模型决定调用工具
if response.tool_calls:
    tool_call = response.tool_calls[0]

    tool_name = tool_call["name"]
    tool_args = tool_call["args"]

    print("🔧 调用工具：", tool_name, tool_args)

    # 7️⃣ 执行工具
    result = get_weather.invoke(tool_args)

    print("📦 工具返回：", result)

    # 8️⃣ 把结果喂回模型
    final_response = llm_with_tools.invoke([
        *messages,      # 用户问题
        response,       # 模型刚才说“我要调用工具”
        ToolMessage(
            content=result,
            tool_call_id=tool_call["id"]
        )
    ])

    print("✅ 最终答案：", final_response.content)

else:
    # 如果模型没用工具
    print("✅ 直接回答：", response.content)