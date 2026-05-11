# SCSS 企业项目高频用法（精简版）

---

# 1. CSS Variables（主题核心）

现代项目最重要。

```css id="zx89n7"
:root {
  --color-primary: #1677ff;
}
```

```scss id="7dk7r9"
.button {
  color: var(--color-primary);
}
```

用途：

* dark mode
* 动态换肤
* 编辑器主题

---

# 2. mixin（最高频）

封装公共样式。

```scss id="4t5zyj"
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```scss id="8f9mqs"
.box {
  @include flex-center;
}
```

常见：

* flex
* ellipsis
* responsive

---

# 3. map + @each（批量生成）

生成：

* theme
* spacing
* button type

```scss id="p79gk6"
$colors: (
  primary: #1677ff,
  danger: #ff4d4f
);

@each $name, $color in $colors {
  .text-#{$name} {
    color: $color;
  }
}
```

---

# 4. #{} 插值（动态 class）

```scss id="9k2z5v"
.mt-#{$size}
```

通常配合：

```scss id="mzw0f9"
@each
@for
```

一起使用。

---

# 5. @content（响应式核心）

```scss id="8lt4v4"
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
```

```scss id="f4cf0f"
.card {
  @include mobile {
    display: none;
  }
}
```

---

# 6. @function（真实高频）

最常见：

```scss id="zyr9be"
@function rem($px) {
  @return $px / 16 * 1rem;
}
```

---

# 7. module.scss（React 标配）

```tsx id="52r6h5"
import styles from './index.module.scss'
```

作用：

* 防止全局污染

---

# 8. :global（覆盖第三方）

```scss id="nlydww"
.wrapper {
  :global(.ant-btn) {
    border-radius: 8px;
  }
}
```

编辑器项目非常高频。

---

# 9. BEM + &（大型项目经典）

```scss id="ymg0g3"
.card {
  &__title {}

  &--active {}
}
```

---

# 10. 企业最佳实践（重点）

---

# Tailwind

负责：

* flex
* grid
* spacing

---

# SCSS

负责：

* 工程化
* mixin
* 动画
* 编辑器复杂样式

---

# CSS Variables

负责：

* 主题
* dark mode
* 动态换肤

---
