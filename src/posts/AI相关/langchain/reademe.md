
# 基础配置
# 1. 创建项目环境
python3 -m venv .venv

# 2. 激活
source .venv/bin/activate

# 3. 安装依赖
pip install langchain langchain-openai

# 4. 运行你的代码
python 2.py


# 1. 安装 Python
brew install python

# 2. 进入你的项目
cd /Users/zouyu/zy/zyStudy/zy-langchain

# 3. 删除旧环境（重要）
rm -rf .venv

# 4. 新建环境
python3 -m venv .venv
source .venv/bin/activate

# 5. 安装依赖
pip install -U pip
pip install langchain-openai python-dotenv