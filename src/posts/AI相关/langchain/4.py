from langchain_core.runnables import RunnableLambda
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

# 1. 定义调试打印函数
def debug_print(x):
    print("\n===== 中间数据 =====")
    print(x)
    print("====================\n")
    return x

# 2. 包装成可运行的调试节点. TODO  需要包装
debug_node = RunnableLambda(debug_print)

# 3. 构建带调试节点的链
prompt = ChatPromptTemplate.from_template("用一句话介绍：{topic}")
model = ChatOpenAI()
chain = prompt | debug_node | model | debug_node

# 4. 执行链，就能看到每一步的数据了
chain.invoke({"topic": "LangChain"})