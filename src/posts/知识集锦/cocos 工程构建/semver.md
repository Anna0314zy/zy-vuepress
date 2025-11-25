# semver 库是什么？

**semver** 是一个用于**语义化版本控制**的JavaScript库。它专门用来解析、比较和处理遵循语义化版本规范（Semantic Versioning）的版本号。

语义化版本格式：`主版本号.次版本号.修订号`，例如：`1.2.3`

## semver.gte() 方法

`semver.gte(version1, version2)` 表示：
- **g**reater **t**han or **e**qual（大于或等于）
- 检查 `version1` 是否 **大于或等于** `version2`

## 具体示例

```javascript
semver.gte('0.1.10', '0.1.9')   // true (0.1.10 > 0.1.9)
semver.gte('0.1.10', '0.1.10')  // true (相等)
semver.gte('0.1.8', '0.1.9')    // false (0.1.8 < 0.1.9)
semver.gte('1.0.0', '0.9.0')    // true (1.0.0 > 0.9.0)
```

## 在代码中的实际应用

```javascript
// 检查音频播放器版本是否 >= 0.1.10
if (semver.gte(audioPlayerVersion, '0.1.10')) {
  // 如果版本满足条件，使用新的音频引擎注入方式
  injectCocosAudioEngine(window.playerResolvePath)
} else {
  // 旧版本使用兼容方式
  require('./utils/cocos2-audio-injectionjs')
  window.injectCocosAudioEngine('', window.playerResolvePath)
}
```

## 为什么需要版本比较？

1. **功能特性检测**：不同版本支持不同的功能
2. **向后兼容**：确保旧版本用户也能正常使用
3. **渐进式升级**：根据版本号决定启用哪些功能

## 其他常用方法

```javascript
semver.gt('1.2.3', '1.2.2')  // greater than（大于）
semver.lt('1.2.2', '1.2.3')  // less than（小于）
semver.eq('1.2.3', '1.2.3')  // equal（等于）
semver.satisfies('1.2.3', '^1.2.0') // 版本范围匹配
```
