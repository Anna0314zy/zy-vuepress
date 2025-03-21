---
title: Vue 3 中的 JSX 
tags:
  - vue
---


# **🚀 Vue 3 中的 JSX 语法及应用**

在 Vue 3 中，我们可以使用 **JSX** 来编写组件，而不是传统的 **`template` 语法**。Vue 3 **官方支持 JSX**，并且相比 Vue 2 的 JSX 兼容性更好，适用于 **动态组件、渲染函数、复杂逻辑组件**。

---

## **🔥 1. 在 Vue 3 中如何使用 JSX**
### **✅ 1.1 安装 JSX 支持**
Vue 3 默认 **支持 JSX**，但如果你使用 Vite 或 Webpack，需要安装 `@vitejs/plugin-vue-jsx`：
```bash
npm install @vitejs/plugin-vue-jsx -D
```
然后，在 `vite.config.js` 里启用 JSX：
```javascript
import vueJsx from '@vitejs/plugin-vue-jsx';

export default {
  plugins: [vueJsx()]
};
```

---

## **🔥 2. Vue 3 JSX 基础语法**
在 Vue 3 组件中，我们可以使用 **`.vue` 组件 + JSX** 或 **纯 JSX 组件**。

### **✅ 2.1 基础 JSX 语法**
```javascript
// HelloWorld.jsx
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => <h1>Hello, JSX in Vue 3!</h1>;
  }
});
```
📌 **特点**
- **Vue 3 组件不需要 `render` 方法，直接返回 JSX**
- **`defineComponent` 定义组件**

---

### **✅ 2.2 在 `.vue` 文件中使用 JSX**
```vue
<script setup>
import { h } from "vue";

const renderJSX = () => <p>这是 JSX 语法</p>;
</script>

<template>
  <div>
    <h2>Vue 3 JSX 示例</h2>
    <renderJSX />
  </div>
</template>
```
📌 **特点**
- `h()`（`createElement`）可以用 JSX 语法替代
- `setup()` 里可以直接返回 JSX 组件

---

## **🔥 3. Vue 3 JSX 动态渲染**
### **✅ 3.1 传递 Props**
```javascript
const MyComponent = defineComponent({
  props: { title: String },
  setup(props) {
    return () => <h1>{props.title}</h1>;
  }
});
```
📌 **特点**
- **`props` 可以直接作为 JSX 变量使用**
- **无需 `this` 访问数据**

---

### **✅ 3.2 事件绑定**
```javascript
const Button = defineComponent({
  setup() {
    const handleClick = () => alert("按钮被点击了!");
    return () => <button onClick={handleClick}>点击我</button>;
  }
});
```
📌 **特点**
- **事件写成 `onClick={fn}`，而不是 `v-on:click`**
- **事件名遵循 `onXxx` 形式**

---

### **✅ 3.3 `v-if` 和 `v-for`**
**`v-if` 使用 `&&` 或三元表达式**
```javascript
const ShowMessage = defineComponent({
  setup() {
    const show = true;
    return () => (show ? <p>显示这段文本</p> : null);
  }
});
```
**`v-for` 使用 `map()`**
```javascript
const List = defineComponent({
  setup() {
    const items = ["Vue", "React", "Angular"];
    return () => (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
});
```
📌 **特点**
- **`v-if` → `三元运算符或 &&`**
- **`v-for` → `map()`**
- **必须添加 `key`**

---

### **✅ 3.4 插槽（`slots`）**
```javascript
const Parent = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div>
        <h2>父组件</h2>
        {slots.default ? slots.default() : "无内容"}
      </div>
    );
  }
});
```
```javascript
// 使用
<Parent>
  <p>我是插槽内容</p>
</Parent>
```
📌 **特点**
- `slots.default()` 用于渲染默认插槽
- 作用域插槽可以 `slots.slotName(props)`

---

## **🔥 4. Vue 3 JSX vs `template`**
| **功能** | **JSX 语法** | **Vue Template 语法** |
|---------|------------|----------------|
| 组件定义 | `defineComponent` + `return JSX` | `template` + `script setup` |
| 事件绑定 | `onClick={handleClick}` | `@click="handleClick"` |
| `v-if` | `{ show ? <div>显示</div> : null }` | `<div v-if="show">显示</div>` |
| `v-for` | `{ items.map(item => <li>{item}</li>) }` | `<li v-for="item in items">{{ item }}</li>` |
| 插槽 | `{ slots.default() }` | `<slot></slot>` |

📌 **JSX 适用于**：
- **复杂逻辑组件**（动态渲染、多层嵌套）
- **HOC（高阶组件）**
- **Vue 组件库开发（如 Element-Plus）**

---

## **🔥 5. 适用场景**
✅ **Vue 组件库（如 `Element-Plus`）**  
✅ **需要动态渲染组件**  
✅ **有 React 经验，习惯 JSX**  
✅ **高阶组件（HOC）或 `render` 函数替代 `template`**  

📌 **你是想在 Vue 3 里使用 JSX 代替 `template`，还是用于组件库开发？可以帮你优化 JSX 方案！😃**