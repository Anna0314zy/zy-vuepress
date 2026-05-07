我帮你把这张图里的 **LangChain 文本分割器** 做一份完整的学习文档，包含每个分割器的作用、使用场景、代码示例和避坑指南。

---

# LangChain 文本分割器（TextSplitter）全解析
文本分割是 RAG 开发中决定检索效果的关键环节，LangChain 提供了多种分割器，适配不同格式的文本。

---

## 一、分割器总览
| 分割器 | 核心作用 | 适用场景 |
|--------|----------|----------|
| `RecursiveCharacterTextSplitter` | 递归按字符分割文本（按段落→句子→单词优先级） | 通用场景，绝大多数文档类型（PDF/TXT/Word 等） |
| `CharacterTextSplitter` | 按指定字符（如换行符）分割文本 | 结构简单、分割规则明确的文本 |
| `MarkdownHeaderTextSplitter` | 按 Markdown 标题层级分割 | Markdown 文档、结构化笔记、技术文档 |
| `PythonCodeTextSplitter` | 专门分割 Python 代码 | 代码知识库、技术文档中的代码片段 |
| `TokenTextSplitter` | 按 Token 数量分割（适配 LLM 上下文限制） | 需严格控制 Token 长度的场景 |
| `HTMLHeaderTextSplitter` | 按 HTML 标题标签（h1/h2/h3）分割 | HTML 文档、网页内容爬取结果 |

---

## 二、核心基类与方法
所有分割器都继承自 `TextSplitter` 基类，定义了三个核心方法：

| 方法 | 作用 |
|------|------|
| `split_text(text: str)` | 将文本字符串分割成字符串列表 |
| `split_documents(documents: List[Document])` | 将 `Document` 对象列表分割成更小的 `Document` 片段（保留元数据） |
| `create_documents(texts: List[str])` | 通过字符串列表创建 `Document` 对象 |

---

## 三、常用分割器详解与代码示例

### 1. RecursiveCharacterTextSplitter（通用首选）
这是 LangChain 最推荐的通用分割器，会按「段落→句子→单词」的优先级递归分割，最大程度保证语义完整性。

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

# 适配中文场景的初始化
splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,          # 每个片段最大字符数
    chunk_overlap=80,       # 相邻片段重叠字符数（避免语义断裂）
    separators=["\n\n", "\n", "。", "，", " "],  # 分割优先级（适配中文）
    length_function=len      # 按字符数计算长度
)

# 分割文本
text = """这是第一段文本。
这是第二段文本，包含更多内容。
这是第三段文本，用于测试分割效果。"""

chunks = splitter.split_text(text)
print(f"分割后的片段数：{len(chunks)}")
print(chunks)
```

---

### 2. CharacterTextSplitter（简单字符分割）
按你指定的单个字符分割，逻辑简单但容易破坏语义，适合结构非常规整的文本。

```python
from langchain.text_splitter import CharacterTextSplitter

# 按换行符分割
splitter = CharacterTextSplitter(
    separator="\n",    # 分割符：换行
    chunk_size=200,
    chunk_overlap=20
)

text = """第一行内容
第二行内容
第三行内容"""

chunks = splitter.split_text(text)
print(chunks)
```

---

### 3. MarkdownHeaderTextSplitter（Markdown 专用）
按 Markdown 的标题层级分割，会自动保留标题层级信息，适合结构化 Markdown 文档。

```python
from langchain.text_splitter import MarkdownHeaderTextSplitter

# 定义 Markdown 标题层级
headers_to_split_on = [
    ("#", "一级标题"),
    ("##", "二级标题"),
    ("###", "三级标题"),
]

splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)

md_text = """# 第一章
## 1.1 背景介绍
这是背景介绍的内容。
## 1.2 核心概念
这是核心概念的内容。"""

chunks = splitter.split_text(md_text)
for chunk in chunks:
    print(f"标题：{chunk.metadata}，内容：{chunk.page_content}")
```

---

### 4. PythonCodeTextSplitter（代码专用）
专门为 Python 代码设计，会按类、函数、缩进层级分割，避免代码片段被拆成无效的语法块。

```python
from langchain.text_splitter import PythonCodeTextSplitter

splitter = PythonCodeTextSplitter(
    chunk_size=300,
    chunk_overlap=30
)

code_text = """
class Calculator:
    def add(self, a, b):
        return a + b
    
    def subtract(self, a, b):
        return a - b

def multiply(a, b):
    return a * b
"""

chunks = splitter.split_text(code_text)
print(f"代码片段数：{len(chunks)}")
print(chunks)
```

---

### 5. TokenTextSplitter（按 Token 分割）
按 LLM 的 Token 数量分割，适合需要严格控制上下文长度的场景（比如直接喂给 LLM 处理）。

```python
from langchain.text_splitter import TokenTextSplitter

# 按 OpenAI 的 gpt-3.5-turbo Token 规则分割
splitter = TokenTextSplitter(
    chunk_size=100,      # 每个片段最大 100 Token
    chunk_overlap=10,    # 重叠 10 Token
    model_name="gpt-3.5-turbo"
)

text = "这是一段需要按 Token 分割的长文本，用于适配大模型的上下文限制。" * 10
chunks = splitter.split_text(text)
print(f"片段数：{len(chunks)}")
```

---

### 6. HTMLHeaderTextSplitter（HTML 专用）
按 HTML 的标题标签（h1/h2/h3）分割网页内容，适合爬取的网页文档。

```python
from langchain.text_splitter import HTMLHeaderTextSplitter

# 定义 HTML 标题层级
headers_to_split_on = [
    ("h1", "一级标题"),
    ("h2", "二级标题"),
    ("h3", "三级标题"),
]

splitter = HTMLHeaderTextSplitter(headers_to_split_on=headers_to_split_on)

html_text = """
<h1>产品文档</h1>
<h2>功能介绍</h2>
<p>这是功能介绍的内容。</p>
<h2>使用方法</h2>
<p>这是使用方法的内容。</p>
"""

chunks = splitter.split_text(html_text)
for chunk in chunks:
    print(f"标题：{chunk.metadata}，内容：{chunk.page_content}")
```

---

## 四、分割器选型指南（按场景选）
| 场景 | 推荐分割器 | 原因 |
|------|------------|------|
| 通用文档（PDF/TXT/Word） | `RecursiveCharacterTextSplitter` | 兼顾语义完整性和通用性，适配绝大多数场景 |
| Markdown 文档 | `MarkdownHeaderTextSplitter` | 保留标题结构，检索时能带上下文信息 |
| Python 代码文档 | `PythonCodeTextSplitter` | 避免代码语法断裂，保证片段的有效性 |
| 网页/HTML 文档 | `HTMLHeaderTextSplitter` | 按标题层级分割，保留网页结构信息 |
| 需严格控制 Token 长度 | `TokenTextSplitter` | 按 LLM 的 Token 规则分割，避免超出上下文限制 |

---

## 五、避坑指南
1.  **中文分割效果差**：
    - 用 `RecursiveCharacterTextSplitter` 时，把 `separators` 调整为 `["\n\n", "\n", "。", "，", " "]`，适配中文标点分割。
    - 避免用纯英文的分割器处理中文文本。

2.  **片段语义断裂**：
    - 增大 `chunk_overlap`（建议 50~100），避免相邻片段的上下文丢失。
    - 不要把 `chunk_size` 设置得太小，中文场景建议 512 起步。

3.  **代码分割后无法运行**：
    - 代码必须用 `PythonCodeTextSplitter` 这类专用分割器，不要用通用分割器。
    - 适当增大 `chunk_size`，避免单个函数/类被拆成多段。

4.  **Token 分割和字符分割结果不一致**：
    - `TokenTextSplitter` 是按 LLM 的 Token 规则计算长度，和字符数不是 1:1 对应，不要用字符数预估 Token 数量。

---

## 六、和 RAG 流程的整合示例
```python
from langchain_community.document_loaders import UnstructuredPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

# 1. 加载文档
loader = UnstructuredPDFLoader("你的文档.pdf")
docs = loader.load()

# 2. 分割文档（通用场景首选）
splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=80,
    separators=["\n\n", "\n", "。", "，", " "]
)
split_docs = splitter.split_documents(docs)

# 3. 存入向量数据库
embeddings = HuggingFaceEmbeddings(model_name="BAAI/bge-small-zh-v1.5")
vector_db = Chroma.from_documents(documents=split_docs, embedding=embeddings)
```

---

需要我帮你把这些分割器的代码整理成一份可直接复制的工具类，或者补充不同分割器对 RAG 检索效果的对比吗？

我帮你把这张表里的 `RecursiveCharacterTextSplitter` 参数做一份**完整解析+实战配置模板**，让你一眼看懂每个参数的作用和最佳实践。

---

# RecursiveCharacterTextSplitter 参数全解析
这是 LangChain 最核心的文本分割器，这些参数直接决定了 RAG 检索效果的好坏。

| 参数名 | 核心含义 | 详细说明 | 最佳实践 |
|--------|----------|----------|----------|
| `chunk_size` | 文本块最大长度 | 单文本块最大字符数，可通过 `length_function` 自定义计数，适配模型上下文窗口（如 GPT-3.5 可设 3000 左右）。 | 中文通用场景：`512~1024`；大模型上下文宽裕时可设 `2048`，优先保证语义完整性。 |
| `chunk_overlap` | 文本块重叠长度 | 相邻块重叠字符数，用于保留上下文，需小于 `chunk_size`，建议为其 10%-20%。 | 推荐设为 `chunk_size` 的 10%，如 `chunk_size=512` 时，`chunk_overlap=50~80`，避免语义断裂。 |
| `separators` | 递归拆分分隔符 | 按优先级拆分，超尺寸则用下一分隔符，最后强制拆分，可自定义领域分隔符。 | 中文场景推荐：`["\n\n", "\n", "。", "，", " "]`，优先按段落、句子分割。 |
| `length_function` | 长度计算函数 | 默认按字符计数，可自定义（如 `tiktoken` 按 token 计数，适配大模型）。 | 严格适配 LLM 时，用 `len` 或 `tiktoken` 按 token 计数，避免超出上下文限制。 |
| `keep_separator` | 是否保留分隔符 | 默认 `False` 丢弃；`True` 保留于块末尾，助力保留原格式。 | 结构化文档（如 Markdown/HTML）设为 `True`，避免丢失标点和格式信息。 |
| `is_separator_regex` | 分隔符是否为正则 | 默认 `False` 按字符串匹配；设为 `True` 时，`separators` 可使用正则表达式。 | 复杂格式文本（如代码/日志）可设为 `True`，用正则匹配换行、缩进等规则。 |

---

## 一、实战配置模板（直接复制就能用）
### 1. 通用中文文档配置（PDF/TXT/Word）
```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,          # 单块最大 512 字符
    chunk_overlap=80,        # 重叠 80 字符（约 15%）
    separators=["\n\n", "\n", "。", "，", " "],  # 中文分割优先级
    length_function=len,     # 按字符数计数
    keep_separator=True,     # 保留分隔符
    is_separator_regex=False
)
```

### 2. 适配大模型 Token 限制（按 Token 分割）
```python
import tiktoken
from langchain.text_splitter import RecursiveCharacterTextSplitter

# 初始化 GPT-3.5 的 token 编码器
enc = tiktoken.encoding_for_model("gpt-3.5-turbo")

def tiktoken_len(text):
    return len(enc.encode(text))

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,         # 单块最大 1000 token
    chunk_overlap=100,       # 重叠 100 token
    separators=["\n\n", "\n", "。", "，", " "],
    length_function=tiktoken_len,  # 按 token 计数
    keep_separator=True
)
```

### 3. Markdown/技术文档专用配置
```python
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1024,
    chunk_overlap=100,
    separators=["#", "##", "###", "\n\n", "\n", "。", "，"],  # 优先按标题分割
    keep_separator=True
)
```

---

## 二、关键参数避坑指南
### 1. `chunk_size` 不是越大越好
- 过大：单块语义混杂，向量相似度检索时会引入噪声，导致回答偏离主题。
- 过小：语义不完整，检索时无法匹配到完整上下文，回答缺乏细节。
- 黄金区间：中文场景 `512~1024` 是平衡语义和检索效果的最佳选择。

### 2. `chunk_overlap` 必须合理设置
- 过小：相邻块的上下文断裂，比如一句话被拆成两段，导致检索时无法同时召回。
- 过大：重复内容过多，向量数据库冗余，检索效率下降。
- 建议：固定为 `chunk_size` 的 10%，既保证上下文连贯，又不会过度冗余。

### 3. `separators` 直接决定语义完整性
- 不要直接用默认的英文分隔符，中文文本会按空格分割，导致句子被拆成无意义的片段。
- 自定义时要遵循「从大到小」的优先级：段落 → 换行 → 句号 → 逗号 → 空格。

### 4. `length_function` 要和实际模型对齐
- 如果你用的是 OpenAI/通义千问等 LLM，建议用 `tiktoken` 或模型自带的 token 计数函数，避免 `chunk_size` 字符数远大于模型的 token 限制。
- 本地开源模型可先用 `len` 计数，再根据实际 token 消耗调整。

---

## 三、参数组合效果对比
| 组合 | 效果 | 适用场景 |
|------|------|----------|
| `chunk_size=256, overlap=25` | 片段细碎，语义不完整 | 短文本、对话数据 |
| `chunk_size=512, overlap=80` | 语义完整，检索精准 | 通用知识库、文档问答 |
| `chunk_size=2048, overlap=200` | 片段长，上下文丰富 | 大模型上下文宽裕、长文档场景 |

---

需要我根据你当前的 RAG 场景（比如文档类型、使用的大模型），帮你生成一份定制化的分割器配置吗？
直接给你**最简单、能直接运行、带中文注释**的 **递归分割代码示例**，复制就能跑！

# 递归分割 完整代码示例（最标准版本）
```python
# 导入递归分割器
from langchain.text_splitter import RecursiveCharacterTextSplitter

# ===================== 1. 初始化分割器（核心配置）=====================
splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,        # 每一段最大长度
    chunk_overlap=20,       # 段落重叠，防止语义断开
    separators=[            # 分割优先级（从大到小）
        "\n\n",   # 先按段落切
        "\n",     # 再按换行切
        "。",     # 再按句号切
        "，",     # 再按逗号切
        " "       # 最后按空格切
    ],
    keep_separator=True     # 保留标点符号（让语义更完整）
)

# ===================== 2. 一段测试文本 =====================
text = """
人工智能是一门让机器模拟人类智能的技术。
它包括机器学习、深度学习、自然语言处理等方向。
在实际应用中，AI已经广泛用于医疗、金融、教育等领域。
未来，人工智能将继续改变世界，推动社会进步。
我正在学习大模型开发，包括RAG、向量数据库、文本分割等技术。
递归分割是LangChain里面最常用、最推荐的文本分割方法。
"""

# ===================== 3. 开始分割 =====================
chunks = splitter.split_text(text)

# ===================== 4. 输出结果 =====================
print("===== 递归分割结果 =====")
for i, chunk in enumerate(chunks):
    print(f"第{i+1}段：{chunk}\n")
```

---

# 运行结果（你会看到）
```
第1段：人工智能是一门让机器模拟人类智能的技术。

第2段：它包括机器学习、深度学习、自然语言处理等方向。

第3段：在实际应用中，AI已经广泛用于医疗、金融、教育等领域。

第4段：未来，人工智能将继续改变世界，推动社会进步。

第5段：我正在学习大模型开发，包括RAG、向量数据库、文本分割等技术。

第6段：递归分割是LangChain里面最常用、最推荐的文本分割方法。
```

---

# 超简版（只有3行核心代码）
```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(chunk_size=100, chunk_overlap=20)
chunks = splitter.split_text("你的文本")
```

---

# 你只要记住 3 个关键点
1. **`chunk_size`**：每段最大长度
2. **`chunk_overlap`**：重叠多少（防止语义断开）
3. **`separators`**：按什么符号切（段落→句子→标点）

这就是 **递归分割** 的完整代码！

需要我给你做**带长文本、自动切碎**的进阶示例吗？