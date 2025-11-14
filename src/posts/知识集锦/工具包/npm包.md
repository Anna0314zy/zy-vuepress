

# 如何开发并发布npm 包
# NPM包开发注意事项

## 📦 依赖管理

### Vue依赖处理
- **使用peerDependencies声明Vue依赖**
  ```json
  {
    "peerDependencies": {
      "vue": "^3.0.0 || ^2.7.0"
    }
  }
  ```
- **避免将Vue放在dependencies中**，防止重复安装
- **明确版本范围**，支持用户项目的Vue版本

### 依赖声明原则
- 只在`dependencies`中声明包正常运行必需的依赖
- 开发工具依赖放在`devDependencies`
- 可选依赖放在`optionalDependencies`

## 🔧 包配置

### package.json关键字段
```json
{
  "name": "包名必须唯一",
  "version": "遵循语义化版本",
  "main": "正确设置入口文件",
  "types": "TypeScript声明文件",
  "files": ["明确包含发布文件"],
  "keywords": ["添加合适的关键词"]
}
```

### 版本管理
- **每次发布必须更新version**
- 遵循语义化版本规范：
  - **MAJOR**：不兼容的API修改
  - **MINOR**：向后兼容的功能性新增
  - **PATCH**：向后兼容的问题修复

## 🧪 测试与调试

### 本地测试
```bash
# 在包目录创建全局链接
npm link

# 在测试项目中使用本地包
npm link <你的包名>

# 测试完成后清理
npm unlink <你的包名>
```

### 质量保证
- 发布前充分测试不同环境
- 确保TypeScript类型定义正确
- 验证不同Vue版本的兼容性

## 🚀 发布流程

### 发布前检查
1. **切换npm官方源**
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```

2. **登录npm账户**
   ```bash
   npm login
   ```

3. **验证包名可用性**
   ```bash
   npm view <包名>
   ```

### 发布命令
```bash
# 发布包
npm publish

# 发布测试版本
npm publish --tag beta
```

## ⚠️ 常见问题预防

### 依赖冲突
- 避免过窄的版本范围限制
- 定期更新依赖版本
- 使用peerDependencies减少冲突

### 安装问题
- 确保`files`字段包含所有必要文件
- 排除测试文件、配置文件等无关内容
- 验证入口文件路径正确

### 兼容性问题
- 明确声明Node.js版本要求
- 测试不同操作系统的兼容性
- 提供清晰的错误提示信息

## 📝 文档要求

### README必备内容
- 安装方法
- 快速开始示例
- API文档
- 版本要求说明
- 常见问题解答

### 版本更新说明
- 维护CHANGELOG.md
- 清晰描述破坏性变更
- 提供迁移指南

## 🔄 维护更新

### 持续维护
- 及时修复安全漏洞
- 响应issue和PR
- 定期更新依赖

### 版本策略
- 长期支持(LTS)版本明确标识
- 废弃版本清晰标注
- 提供升级路径

遵循这些注意事项可以确保你的NPM包质量可靠、易于使用和维护。


