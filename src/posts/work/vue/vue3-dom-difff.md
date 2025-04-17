---
title: vue3  dom-diff
tags:
   - vue3
---

Vue 3 实现 DOM Diff 的核心是它的 **虚拟 DOM（Virtual DOM）机制**，它在更新组件时，会生成新的 VNode 树，并与旧的 VNode 树进行**对比（diff）**，找出最小变更，最终通过 patch 操作更新真实 DOM。

---

## 🧠 核心流程概述（简化）

1. **响应式数据更新**
2. 触发组件的 `render()` 函数生成新的 VNode
3. 使用 `patch(n1, n2)` 比较旧、新 VNode 树
4. 对比后只更新必要的 DOM

---

## 🔍 Vue 3 的 DOM Diff 策略：重点优化子节点的对比

在 Vue 3 中，最复杂、最优化的一部分是 **子节点的 diff（即 vnode.children）**，核心逻辑在于：

### ✅ 关键优化策略：
- **头尾双指针**：同时从两边开始比对，快速处理相同的前后节点
- **Keyed diff（基于 key）**：通过 `key` 快速定位变化的节点
- **最长递增子序列（LIS）**：尽可能复用已有 DOM 节点，减少移动次数

---

## 📦 patch 算法的伪代码结构

```js
function patch(n1, n2, container) {
  if (!n1) {
    // 新节点直接挂载
    mountElement(n2, container);
  } else if (n1.type !== n2.type) {
    // 不同类型节点，完全替换
    replaceNode(n1, n2, container);
  } else {
    // 类型相同，进行详细比对
    patchElement(n1, n2);
  }
}
```

---

## 🎯 diff 子节点核心流程（简化版本）

```js
function patchChildren(oldChildren, newChildren, container) {
  // 1. 头部比对
  while (oldStart < oldEnd && newStart < newEnd && isSame(oldStartNode, newStartNode)) {
    patch(oldStartNode, newStartNode);
    oldStart++; newStart++;
  }

  // 2. 尾部比对
  while (oldEnd > oldStart && newEnd > newStart && isSame(oldEndNode, newEndNode)) {
    patch(oldEndNode, newEndNode);
    oldEnd--; newEnd--;
  }

  // 3. 插入新节点
  if (oldStart > oldEnd) {
    insertRemainingNewNodes();
  }

  // 4. 删除旧节点
  else if (newStart > newEnd) {
    removeRemainingOldNodes();
  }

  // 5. 中间部分使用 key + 最长递增子序列优化复用
  else {
    keyedDiffWithLIS();
  }
}
```

---

## 🛠️ 最长递增子序列（LIS）在 Diff 中的作用

假设新旧子节点对比后，某些节点可以复用，Vue 3 利用 LIS 来找出**位置不变的最小序列**，其他的就移动 DOM 节点。

这个策略极大提升了性能，减少不必要的 DOM 移动。

---

## 🚀 总结 Vue 3 DOM-Diff 相较 Vue 2 的改进

| 特性 | Vue 2 | Vue 3 |
|------|--------|--------|
| 编写方式 | 面向对象 | 函数式 |
| Patch 算法 | 不够细致 | 更加模块化，细粒度 |
| Keyed diff | 支持，但未优化移动 | **加入 LIS 优化移动** |
| 内存占用 | 高 | 更小、tree-shaking 友好 |
| 性能 | 不差 | 明显提升 |

---

Vue 3 的 DOM Diff 算法是其虚拟 DOM 系统的核心，主要通过 `patch` 函数实现新旧虚拟节点（VNode）的对比和更新。其中，`patchKeyedChildren` 函数用于处理具有 `key` 属性的子节点列表的差异，而 `getSequence` 函数则用于计算最长递增子序列（LIS），以优化节点的移动操作。

---

### 🧩 patchKeyedChildren：处理带 key 的子节点差异
`patchKeyedChildren` 函数的主要职责是对比新旧子节点数组，找出需要新增、删除或移动的节点其核心流程包括

1. **同步头部节点**从头部开始，逐个比较新旧节点，直到遇到不相同的节点
2. **同步尾部节点**从尾部开始，逐个比较新旧节点，直到遇到不相同的节点
3. **处理新增节点**如果新节点数组中有剩余节点，且这些节点在旧节点数组中不存在，则需要新增这些节点
4. **处理删除节点**如果旧节点数组中有剩余节点，且这些节点在新节点数组中不存在，则需要删除这些节点
5. **处理中间节点**对于新旧节点数组中间部分的节点，构建映射关系，找出需要移动的节点，并利用 `getSequence` 函数计算最长递增子序列，优化移动操作

---

### 🔢 getSequence：计算最长递增子序列（LIS）
`getSequence` 函数的作用是找出一个数组中的最长递增子序列，用于优化节点的移动操作，减少 DOM 操作次其实现思路如：

1. **初始化*：创建一个数组 `result`，用于存储当前的最长递增子序列的索。
2. **遍历输入数组*：对于每个元素，使用二分查找确定其在 `result` 中的位置，更新 `result。
3. **构建最终序列*：根据记录的前驱索引，反向构建出最长递增子序。
通过计算最长递增子序列，Vue 3 能够确定哪些节点可以复用，哪些节点需要移动，从而优化 DOM 操作，提高性。

---

### 📚 参考资料

- [Vue.js 官方文档：渲染机制](https://vuejs.org/guide/extras/rendering-mechanism)
- [Vue 3 源码分析：Patch 算法](https://segmentfault.com/a/1190000040097158/en)
- [Vue 3 深入浅出：虚拟 DOM](https://medium.com/js-dojo/diving-into-the-vue-3s-virtual-dom-a6b4744032ec)

---

当然，下面我会提供一个简化的 Vue 3 中虚拟 DOM diff 算法的核心部分的代码示例，重点展示 `patchKeyedChildren` 和 `getSequence` 函数。请注意，这里是一个简化版本，实际 Vue 3 的实现会复杂一些，但这个示例能帮助你理解核心概念。

### 1. `patchKeyedChildren` 代码示例
这个函数用于对比带有 `key` 的子节点，处理新增、删除、移动等操作。

```javascript
function patchKeyedChildren(oldChildren, newChildren, container) {
  let i = 0;
  let j = 0;
  const oldLength = oldChildren.length;
  const newLength = newChildren.length;

  // Step 1: Sync elements from the start
  while (i < oldLength && j < newLength && oldChildren[i].key === newChildren[j].key) {
    patch(oldChildren[i], newChildren[j], container); // 处理当前节点
    i++;
    j++;
  }

  // Step 2: Sync elements from the end
  let oldEnd = oldLength - 1;
  let newEnd = newLength - 1;
  while (i < oldLength && j < newLength && oldChildren[oldEnd].key === newChildren[newEnd].key) {
    patch(oldChildren[oldEnd], newChildren[newEnd], container);
    oldEnd--;
    newEnd--;
  }

  // Step 3: Handle the remaining nodes
  if (i > oldEnd && j <= newEnd) {
    // Add new nodes
    while (j <= newEnd) {
      insert(newChildren[j], container);
      j++;
    }
  } else if (j > newEnd && i <= oldEnd) {
    // Remove old nodes
    while (i <= oldEnd) {
      remove(oldChildren[i], container);
      i++;
    }
  } else {
    // Handle middle part (reordering)
    const sequence = getSequence(oldChildren, newChildren);
    let k = sequence.length - 1;
    for (let i = oldLength - 1; i >= 0; i--) {
      if (sequence[k] === i) {
        k--;
      } else {
        remove(oldChildren[i], container);
      }
    }

    // Add or move nodes
    for (let i = 0; i < newLength; i++) {
      if (sequence.indexOf(i) === -1) {
        insert(newChildren[i], container);
      }
    }
  }
}
```

### 2. `getSequence` 代码示例
`getSequence` 函数用来计算最长递增子序列，通常用于优化中间节点的重新排序。

```javascript
function getSequence(oldChildren, newChildren) {
  const arr = new Array(oldChildren.length);
  const result = [];
  const indices = [];
  let current;
  
  for (let i = 0; i < newChildren.length; i++) {
    const newItem = newChildren[i];
    const index = oldChildren.findIndex(oldItem => oldItem.key === newItem.key);
    if (index !== -1) {
      arr[i] = index;
    }
  }

  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let left = 0;
    let right = result.length - 1;
    const value = arr[i];

    // Binary search to find the correct position to update the result
    while (left <= right) {
      const middle = (left + right) >> 1;
      if (arr[result[middle]] < value) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    if (left < result.length) {
      result[left] = i;
    } else {
      result.push(i);
    }

    indices[i] = left;
  }

  current = result.length - 1;
  let res = new Array(result.length);
  for (let i = indices.length - 1; i >= 0; i--) {
    if (indices[i] === current) {
      res[current--] = i;
    }
  }

  return res;
}
```

### 3. `patch`、`insert` 和 `remove` 函数
这些辅助函数分别用于更新、插入和删除 DOM 元素。

```javascript
function patch(oldVNode, newVNode, container) {
  // 在这里处理 VNode 的更新逻辑，例如属性、事件、文本的更新等
  // 简化版示例：直接替换旧节点的 DOM 元素
  if (oldVNode !== newVNode) {
    container.replaceChild(createElement(newVNode), oldVNode.el);
  }
}

function insert(vnode, container) {
  // 插入一个新的节点
  container.appendChild(createElement(vnode));
}

function remove(vnode, container) {
  // 移除一个旧的节点
  container.removeChild(vnode.el);
}

function createElement(vnode) {
  // 根据 VNode 创建 DOM 元素
  const el = document.createElement(vnode.tag);
  el.textContent = vnode.children;
  vnode.el = el;
  return el;
}
```

### 4. 使用示例
假设我们有两个虚拟节点数组 `oldChildren` 和 `newChildren`，我们将通过 `patchKeyedChildren` 来更新它们：

```javascript
const oldChildren = [
  { key: 'a', tag: 'div', children: 'Old A' },
  { key: 'b', tag: 'div', children: 'Old B' }
];

const newChildren = [
  { key: 'a', tag: 'div', children: 'New A' },
  { key: 'c', tag: 'div', children: 'New C' }
];

const container = document.getElementById('app');
patchKeyedChildren(oldChildren, newChildren, container);
```

---

### 总结

- **`patchKeyedChildren`**：用于处理带有 `key` 的子节点的差异。它会通过比较新旧子节点，决定需要新增、删除或移动哪些节点。
- **`getSequence`**：用于计算最长递增子序列（LIS），并通过此优化节点的移动操作，减少 DOM 操作，提高性能。
- **辅助函数**（如 `patch`、`insert` 和 `remove`）：用于具体的 DOM 更新操作。

这段代码是一个简化的实现，旨在帮助你理解 Vue 3 虚拟 DOM diff 的核心思想。实际的 Vue 3 中，算法会更加复杂，考虑到事件绑定、生命周期钩子等多个方面的优化。