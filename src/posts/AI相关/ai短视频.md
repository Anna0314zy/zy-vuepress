

---
# AI 短视频赛道
### 一、全流程 AI 视频创作平台（完整产品级）
#### 1. Stonewuu/ai-fusion-video（融光）
- 简介：**AI 短剧/漫剧全流程平台**，剧本→分镜→配图→视频片段合成。
- 前端栈：**Next.js 16 + React 19 + TS**，模块化UI、素材管理、分镜编辑器。
- 亮点：集成 OpenAI/通义千问/DeepSeek，**Agent 驱动剧本拆解**，Docker 一键部署。
- GitHub：https://github.com/Stonewuu/ai-fusion-video

#### 2. fal-ai-community/video-starter-kit
- 简介：**浏览器原生 AI 视频工具包**，快速搭建文生视频/多剪辑合成应用。
- 前端栈：**Next.js + Remotion + fal.ai**，Web 端视频渲染、AI 模型直连。
- 亮点：内置 Minimax/Hunyuan/LTX 模型，**无后端依赖（IndexedDB）**，Vercel 一键部署。
- GitHub：https://github.com/fal-ai-community/video-starter-kit

#### 3. Zeeeeeds/EasyVideo
- 简介：**轻量级 AI 视频生成工具**，文本/图片转视频，支持多风格与时长控制。
- 前端栈：**React + Vite + Zustand**，简洁时间轴、实时预览、素材库管理。
- 亮点：前后端分离，AI 服务（FLUX/SD）可插拔，**适合二次开发定制**。
- GitHub：https://github.com/Zeeeeeds/EasyVideo

---

### 二、AI 短视频生成引擎（轻量、易部署）
#### 4. RianNegreiros/AiShortsVideosGenerator
- 简介：**文本→短视频全链路生成**，含文案、TTS、AI 绘图、自动字幕。
- 前端栈：**Next.js + Remotion**，视频渲染走 AWS Lambda，界面现代简洁。

- 亮点：Monorepo 结构，**开箱即用的 AI 服务集成**，适合个人/小团队快速上线。
- GitHub：https://github.com/RianNegreiros/AiShortsVideosGenerator

#### 5. Jeffrey0117/ai-short-video-generator
- 简介：**教育类短视频生成器**（如单词学习视频），文本→语音+文字+画面合成。
- 前端栈：**Next.js 15 + Tailwind + Radix UI**，响应式设计、流畅预览。
- 亮点：集成 OpenAI + Google TTS + FFmpeg，**专注教育场景，代码简洁易读**。
- GitHub：https://github.com/Jeffrey0117/ai-short-video-generator

---

### 三、AI 视频编辑器/时间轴（核心组件级）
#### 6. SCUTlihaoyu/open-chat-video-editor
- 简介：**AI 辅助视频编辑器**，支持短句转视频、图像/视频检索生成。
- 前端栈：纯前端（HTML/JS/CSS），轻量无框架依赖，**直接浏览器运行**。

- 亮点：4 种生成模式（图像检索/SD 生成/视频检索），**适合学习 AI 视频交互逻辑**。
- GitHub：https://github.com/SCUTlihaoyu/open-chat-video-editor

#### 7. Endergr/ai-video-generator
- 简介：**文生图/图生视频 Web 应用**，支持写实/动漫/卡通等多风格。
- 前端栈：**React 19 + Tailwind CSS**，深色模式、移动端适配、视频画廊。
- 亮点：集成多种动画风格，**时长可控（5–10秒）**，Stripe 支付集成就绪。
- GitHub：https://github.com/Endergr/ai-video-generator

---

### 四、核心技术组件（时间轴/ffmpeg.wasm/AI 交互）
#### 8. Remotion（行业标杆，非开源但必学）
- 简介：**React 驱动的视频制作框架**，用代码写时间轴、动画、字幕，导出高清视频。
- 前端栈：React + TS，**声明式视频编辑**，支持 AI 素材动态嵌入。
- 亮点：AI 短视频赛道**时间轴/渲染核心首选**，大量开源项目基于它二次开发。
- 官网：https://www.remotion.dev/

#### 9. ffmpeg.wasm（浏览器端音视频处理）
- 简介：FFmpeg 的 WebAssembly 移植，**纯前端裁剪/拼接/转码/压缩视频**。
- 前端栈：JS + Wasm，无后端依赖，**直接在浏览器处理高清视频**。
- 亮点：AI 短视频必备基建，**减少后端压力、提升预览速度**，几乎所有前端视频编辑器都集成它。
- GitHub：https://github.com/ffmpegwasm/ffmpeg.wasm

---

### 五、学习与二次开发建议
1. **新手入门**：从 `open-chat-video-editor`（纯前端）或 `ai-short-video-generator`（教育场景）开始，理解 AI 视频生成流程。
2. **进阶实战**：基于 `video-starter-kit` 或 `EasyVideo` 搭建个人工具，集成 Remotion + ffmpeg.wasm 实现时间轴与预览。
3. **产品化**：参考 `ai-fusion-video` 架构，用 Next.js + Agent 驱动，支持多模型与素材管理，Docker 部署。
