---
title: context vs glob
tags:
   - 工程化
---


### **🚀 `webpack require.context()` vs `Vite import.meta.glob()` 对比**  
在 Webpack 和 Vite 中，我们可以使用 **动态导入（Dynamic Import）** 批量引入文件，比如**自动导入组件、国际化 JSON 文件、Markdown 文章等**。  

- **Webpack** 提供了 `require.context()`  
- **Vite** 提供了 `import.meta.glob()`  

**📌 主要区别**：Vite 的 `import.meta.glob()` 更快、更灵活，支持 **懒加载（Lazy Loading）**。  

---

## **🔥 1. `webpack require.context()`**
📌 **Webpack 提供 `require.context()` 用于动态引入模块**（主要用于 `require()`）。  
```javascript
const modules = require.context('./modules', false, /\.js$/);
const files = modules.keys().map(key => ({
  name: key,
  module: modules(key)
}));

console.log(files);
```
**📌 说明：**
- `./modules`：要搜索的目录  
- `false`：是否递归搜索子目录（`true` 递归）  
- `/\.js$/`：匹配 `.js` 结尾的文件  

---

## **🔥 2. `vite import.meta.glob()`（推荐）**
📌 **Vite 使用 `import.meta.glob()` 更强大，可以按需动态导入（懒加载）。**  
```javascript
const modules = import.meta.glob('./modules/*.js');
console.log(modules);

// 批量导入所有文件
Object.entries(modules).forEach(([path, importer]) => {
  importer().then((mod) => {
    console.log(`Loaded ${path}`, mod);
  });
});
```
**📌 说明：**
- **不立即加载**，返回 `{ '文件路径': () => import('文件') }`
- **需要手动 `.then()` 加载模块**
- **适用于按需动态导入，优化性能**

---

## **🎯 Webpack `require.context()` vs Vite `import.meta.glob()` 对比**
| **对比项** | **Webpack `require.context()`** | **Vite `import.meta.glob()`** |
|------------|-------------------|-------------------|
| **支持环境** | 仅 Webpack | 仅 Vite |
| **是否立即加载** | ✅ 立即加载所有模块 | 🚀 **默认不加载，按需加载** |
| **支持懒加载** | ❌ 不支持 | ✅ **支持 `import.meta.globEager()` 立即加载** |
| **代码优化** | 📦 **所有模块打包到一起** | ⚡ **只加载需要的模块（更快）** |
| **使用方式** | `require.context()` 只能 `require()` | `import.meta.glob()` 支持 `import()` |

---

## **🔥 3. `import.meta.globEager()`（Vite 立即加载，类似 Webpack）**
如果想要 Vite **立即加载所有模块**（像 `require.context()`），可以用 `import.meta.globEager()`：
```javascript
const modules = import.meta.globEager('./modules/*.js');
console.log(modules); // 直接返回 { './modules/a.js': Module, './modules/b.js': Module }
```
📌 **适用于**：
- **不需要懒加载**，希望和 Webpack `require.context()` 一样的效果  
- **编译时静态分析**，Vite 直接打包所有模块  

---

## **🚀 什么时候用 `require.context()`，什么时候用 `import.meta.glob()`？**
| **场景** | **Webpack（require.context）** | **Vite（import.meta.glob）** |
|---------|------------------|------------------|
| **批量导入组件** | ✅ 适用 | ✅ **更推荐（懒加载支持）** |
| **国际化 JSON 语言包** | ✅ 适用 | ✅ **更灵活（按需加载）** |
| **动态 Markdown 文件** | 🚫 可能需要插件 | ✅ **支持动态导入** |
| **静态资源（图片、SVG）** | ✅ 适用 | ✅ **更高效** |

📌 **如果你是 Webpack 项目**，只能用 `require.context()`。  
📌 **如果你是 Vite 项目**，建议 **`import.meta.glob()`**（默认懒加载）。  

---

## **🎯 结论**
✅ **WebPack (`require.context()`) 适用于：**  
- Webpack 项目中批量导入文件  
- 立即加载所有模块（不支持懒加载）  

✅ **Vite (`import.meta.glob()`) 适用于：**  
- **更高效的模块导入**（默认懒加载，提升性能）  
- **支持动态导入（Markdown、JSON、图片等）**  
- **按需加载，减少打包体积**  
