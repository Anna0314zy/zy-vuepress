
          
# 在线教育授课端项目 - API调用技术文档知识库

## 1. API调用基础架构

### 1.1 核心架构组件

项目使用封装的HTTP请求架构，基于Axios构建，具有完整的请求拦截、响应处理和错误上报机制。

**核心文件：**
- <mcfile name="request.js" path="src/server/request.js"></mcfile> - API请求主封装类
- <mcfile name="lib.js" path="src/server/lib.js"></mcfile> - 请求辅助函数和工具
- <mcfile name="common.js" path="src/server/modules/common.js"></mcfile> - 通用API接口集合
- <mcfile name="rtc.js" path="src/server/modules/rtc.js"></mcfile> - 实时通信相关API

### 1.2 请求封装类设计

```javascript:src/server/request.js
// Request类提供了完整的HTTP方法封装
class Request {
  static get(url, params, config) {}
  static post(url, data, config) {}
  static put(url, data, config) {}
  static delete(url, config) {}
  static head(url, config) {}
  static patch(url, data, config) {}
  static all(iterable) {}
  static request(url = '', data = {}, config = {}, method = 'get') {}
  static checkResponse(response) {}
  static checkError(error) {}
}
```

## 2. URL配置与环境管理

### 2.1 多环境URL映射

项目支持多环境部署，通过URL_MAP配置不同类型的API基础地址：

```javascript:src/server/lib.js
export const URL_MAP = {
  course: BASE_URL.COURSE_URL,
  class: BASE_URL.CLASSROOM_URL,
  pomeloHttp: BASE_URL.POMELO_HTTP_URL,
  pomeloChat: BASE_URL.POMELO_CHAT_URL,
  platform: BASE_URL.PLATFORM,
  emergency: BASE_URL.EMERGENCY_URL,
  base: BASE_URL.BASE_URL,
  aiUrl: BASE_URL.AI_URL
}
```

### 2.2 URL类型说明

API调用时必须指定urlType参数，支持以下类型：
- `course` - 课程相关API
- `class` - 教室相关API（最常用）
- `pomeloHttp` - Pomelo HTTP服务API
- `pomeloChat` - 聊天服务API
- `emergency` - 应急服务API
- `base` - 基础服务API
- `aiUrl` - AI服务API

## 3. 请求拦截器与公共参数

### 3.1 自动添加的公共参数

系统会自动在请求头中添加以下公共参数：

```javascript:src/server/lib.js
export const getRequestHeaders = () => {
  // ...
  return {
    // 用户信息
    teacherCode: userData.teacherCode,
    lecturerId: userData.teacherCode,
    token: userData.token,
    // 直播信息
    liveId: liveData.liveId,
    liveType: liveData.liveTypeString,
    stdCourseId: liveData.courseId,
    // 客户端信息
    terminal: 'lecturer',
    lang: 'ch',
    online_trace_id: `${uuid()}_${database.liveData.liveId}`,
    version: clientVersion,
    reqTime: new Date().getTime()
  }
}
```

### 3.2 请求拦截器功能

- 自动添加公共参数到请求头
- 处理客户端时间戳同步
- 支持URL转换和环境切换
- 实现请求性能监控和trace_id管理
- 支持请求重试机制

## 4. API模块组织规范

### 4.1 模块分类原则

API接口按照功能模块组织在`src/server/modules/`目录下，主要模块包括：

| 模块文件 | 主要功能 | 示例API |
|---------|---------|--------|
| common.js | 通用课堂功能 | 获取/设置上课状态、推送状态等 |
| rtc.js | 实时通信功能 | 学生举手管理、上台下台、麦克风控制等 |
| studySituation.js | 学习情况相关 | 学习数据统计与分析 |
| pat.js | PAT相关功能 | PAT系统集成API |
| initInfoApis.js | 初始化信息获取 | 应用初始化相关数据API |

### 4.2 API函数设计规范

```javascript:src/server/modules/common.js
// API函数命名：fetch/get/set + 功能名称
export function fetchClassStatus() {
  // 1. 准备请求数据，通常从database获取
  const data = {
    liveId: database.liveData.liveId,
    userId: database.liveData.teacherCode
  }
  // 2. 调用request发送请求，指定urlType
  try {
    return request.get('/classroom/basic/v1/live/statuses', data, {
      urlType: 'class'
    })
  } catch (e) {
    // 3. 错误处理并抛出带有上下文的异常
    throw new Error(`common request error: ${e}`)
  }
}
```

## 5. 错误处理与重试机制

### 5.1 错误处理策略

```javascript:src/server/request.js
static checkError(error) {
  const errMsg = error.toString()
  const code = Number.parseInt(errMsg.substr(errMsg.indexOf('code') + 5), 10)
  if (code >= 500) {
    return {
      data: {message: '系统抢修中...'},
      errcode: code
    }
  }
  return error && error.response
    ? {
        errcode: error.response.status,
        data: error.response.data
      }
    : error
}
```

### 5.2 重试机制配置

```javascript:src/server/request.js
axiosRetry(httpInstance, {
  retries: 0, // 重试次数
  retryDelay: axiosRetry.exponentialDelay, // 重试间隔
  shouldResetTimeout: true,
  retryCondition: (err) => err.code === 'ERR_BAD_REQUEST' || axiosRetry.isNetworkOrIdempotentRequestError(err)
})
```

## 6. 常用API调用示例

### 6.1 GET请求示例

```javascript
// 获取上课状态
export function fetchClassStatus() {
  const data = {
    liveId: database.liveData.liveId,
    userId: database.liveData.teacherCode
  }
  try {
    return request.get('/classroom/basic/v1/live/statuses', data, {
      urlType: 'class'
    })
  } catch (e) {
    throw new Error(`common request error: ${e}`)
  }
}
```

### 6.2 POST请求示例

```javascript
// 设置上下课状态
export function setClassStatus(status, action = 'click') {
  const data = {
    liveId: database.liveData.liveId,
    lecturerId: database.liveData.lectureId,
    liveStatus: status
  }
  try {
    return request.post(`/classroom/basic/v1.1/live/status?action=${action}`, data, {
      urlType: 'class'
    })
  } catch (e) {
    throw new Error(`common request error: ${e}`)
  }
}
```

### 6.3 自定义配置示例

```javascript
// 老师改变设备状态
deviceManage({action, type}) {
  return request.put(
    '/classroom/lecturer/v1/device-manage',
    {
      action,
      type
    },
    {
      urlType: 'class',
      // 自定义配置
      headers: {
        'X-Custom-Header': 'value'
      },
      // 禁用URL转换
      _$$noTransformUrl: false
    }
  )
}
```

## 7. 全链路监控与日志上报

### 7.1 API调用监控

系统实现了API调用的性能监控和日志上报：

```javascript:src/server/request.js
function reportLogApi(response) {
  try {
    const {config, status, data} = response
    if (config.headers && config.headers.online_trace_id) {
      const traceId = config.headers.online_trace_id
      const reqEndTime = performance.now()
      const reqStartTime = TRACE_ID_MAP[traceId] && TRACE_ID_MAP[traceId].reqStartTime
      // 构建上报参数
      // ...
    }
  } catch (error) {
    // 拦截错误防止阻塞流程
  }
}
```

### 7.2 错误日志上报

```javascript:src/server/request.js
function reportLogApiError(error) {
  try {
    const {config, message} = error
    const traceId = config?.headers?.online_trace_id
    if (traceId) {
      // 记录错误信息和性能数据
      log(Module.SERVER_API, {
        action: ServerApiAction.REQUEST_ERROR,
        traceId,
        url: config.url,
        method: config.method,
        message,
        status: config.status,
        params: config.params, // GET参数
        data: config.data,     // POST body
      })
    }
  } catch (error) {
    // 拦截错误防止阻塞流程
  }
}
```

## 8. 最佳实践与开发规范

### 8.1 API调用最佳实践

1. **数据来源规范**
   - 请求参数应优先从database获取，保持数据一致性
   - 避免硬编码常量，使用配置或数据库中的值

2. **错误处理规范**
   - 所有API调用必须包含try-catch块
   - 错误信息应包含具体的API上下文信息
   - 避免在API层处理业务逻辑错误，仅处理通信错误

3. **性能优化建议**
   - 合理使用请求缓存，避免重复请求
   - 对非关键API使用异步调用
   - 避免在循环中进行API调用，使用批量接口

4. **代码组织建议**
   - 按功能模块拆分API文件
   - 使用统一的函数命名和参数结构
   - 为复杂API添加详细注释说明参数和返回值

### 8.2 常见问题与解决方案

1. **URL转换错误**
   - 确保正确设置urlType参数
   - 检查URL是否以/开头
   - 对于完整URL可以设置_$$noTransformUrl: true

2. **公共参数缺失**
   - 检查database是否已正确初始化
   - 验证localStorage中是否存在必要数据
   - 确认用户已正确登录

3. **请求超时**
   - 对于可能耗时的操作，考虑增加超时时间
   - 实现前端重试机制，但避免无限重试
   - 使用合适的loading状态反馈给用户

## 9. API调用工作流程图

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│  业务组件调用   │───>│  API模块函数    │───>│  Request类      │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └────────┬────────┘
                                                       │
                                                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│  响应数据处理   │<───│  拦截器处理响应  │<───│  HTTP请求发送   │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 10. 总结与建议

本项目的API调用架构设计合理，具有良好的可扩展性和维护性。建议在后续开发中：

1. 建立完整的API文档系统，包含所有接口的详细说明
2. 实现API请求的mock系统，便于前后端并行开发
3. 增强错误处理机制，提供更友好的用户体验
4. 考虑添加API请求的自动重试和降级策略
5. 定期审查和优化API调用性能，特别是在高频操作场景

