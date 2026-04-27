# 手写极简 Pinia 原理（面试满分源码 + 通俗易懂）
完全还原 Pinia 核心：**单例模式 + reactive 响应式 + computed 缓存 getter + actions + 全局共享**
Vue3 setup 写法，几十行看懂底层

## 1. 手写迷你 Pinia 核心源码
```javascript
import { reactive, computed } from 'vue'

// 仓库缓存：单例核心，保证所有组件拿到同一个store
const storeMap = new Map()

// 手写 defineStore
export function defineStore(id, options) {
  return function useStore() {
    // 1. 已有实例直接返回 → 单例模式
    if (storeMap.has(id)) {
      return storeMap.get(id)
    }

    // 2. state 响应式：Proxy 代理
    const state = reactive(options.state())

    // 3. getter 底层 = computed 自带缓存
    const getters = {}
    for (const key in options.getters) {
      getters[key] = computed(() => options.getters[key](state))
    }

    // 4. actions 绑定this，同步异步都支持
    const actions = {}
    for (const key in options.actions) {
      actions[key] = options.actions[key].bind(state)
    }

    // 组合成完整store
    const store = {
      id,
      state,
      ...getters,
      ...actions
    }

    // 存入缓存 → 全局单例
    storeMap.set(id, store)
    return store
  }
}
```

## 2. 像官方 Pinia 一样使用
```js
// user.js
import { defineStore } from './miniPinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0,
    name: '张三'
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    add() {
      // Pinia 可以直接修改state
      this.count++
    },
    async asyncAdd() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.count++
    }
  }
})
```

## 3. 组件使用
```vue
<script setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()

// 直接改状态，不需要mutation
user.count++
user.add()
user.asyncAdd()

console.log(user.doubleCount)
</script>
```

---

# 对应 Pinia 四大底层原理（对照源码秒懂）
## 1. 单例模式原理
`Map 缓存 store`
不管多少组件调用 `useUserStore()`，**永远同一个对象**
所以跨组件状态同步

## 2. 响应式原理
`reactive()` 基于 **Proxy**
所以：
- 可以**直接修改 state**
- 新增属性、删除属性都响应
- 不需要 mutations

## 3. getter 缓存原理
底层就是 `computed`
依赖不变**不重复计算**，多组件复用只执行一次

## 4. actions 异步原理
就是普通函数 + bind 绑定state
原生支持 `async/await`
不用区分同步异步，没有 mutations

---

# 面试必背总结一句话
Pinia 用 **Map 存储单例仓库**，
state 用 **reactive(Proxy)** 做响应式，
getter 用 **computed 缓存**，
actions 普通函数绑定状态，**支持同步异步**，
抛弃 mutations，扁平化模块化，全局状态共享。
# Vuex 完整原理 + 手写极简 Vuex（面试标准答案）
## 一、Vuex 核心原理（背诵版）
1. **单一数据源**
整个应用共用一个 `store`，所有组件状态统一集中管理。

2. **状态响应式**
Vuex 的 state 底层用 `Vue.observable()`
Vue2：`Object.defineProperty` 劫持
让 state 变化自动更新视图

3. **单向数据流（核心规则）**
视图触发 actions → mutations 修改 state → 视图更新
- **state**：存储状态
- **mutations**：**同步修改 state**，必须纯函数，可追踪
- **actions**：处理异步、逻辑，提交 mutations
- **getters**：基于 state 派生状态，**computed 缓存**
- **modules**：模块化，嵌套模块，需要命名空间隔离

4. **严格模式**
禁止组件**直接修改 state**，报错警告，保证数据流可追溯

5. **插件机制**
state 变更会触发插件回调，实现持久化、日志、时间旅行

---

# 二、手写极简 Vuex 源码（Vue2 版，一看就懂）
## 1、手写 miniVuex.js
```javascript
import Vue from 'vue'

// 1. Vuex 插件安装
let VueInstance = null
export function install(Vue) {
  VueInstance = Vue
  // 注入 $store 到所有组件
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

// 2. Store 类
class Store {
  constructor(options) {
    // 核心：state 变成响应式
    this._state = VueInstance.observable(options.state())

    // getters = 计算属性 computed 缓存
    this.getters = {}
    Object.keys(options.getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => options.getters[key](this._state)
      })
    })

    // mutations：同步修改
    this._mutations = options.mutations
    // actions：异步逻辑
    this._actions = options.actions

    // 绑定this指向store
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  // 提交 mutation 修改状态
  commit(type, payload) {
    const fn = this._mutations[type]
    fn(this._state, payload)
  }

  // 派发 action
  dispatch(type, payload) {
    const fn = this._actions[type]
    return fn({ commit: this.commit, state: this._state }, payload)
  }

  // 代理获取state
  get state() {
    return this._state
  }
}

export function newStore(options) {
  return new Store(options)
}
```

## 2、使用方式 和 官方 Vuex 一模一样
```js
import Vue from 'vue'
import Vuex, { newStore } from './miniVuex'

Vue.use(Vuex)

const store = newStore({
  state() {
    return { count: 0 }
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    }
  }
})

new Vue({ store })
```

## 3、组件使用
```vue
this.$store.state.count
this.$store.getters.double
this.$store.commit('add')
this.$store.dispatch('asyncAdd')
```

---

# 三、Vuex 关键底层原理拆解
1. **mixin 注入 $store**
通过全局 mixin，所有组件都能通过 `this.$store` 访问仓库

2. **state 响应式**
`Vue.observable()` 把状态变成响应式对象
修改 state → 视图自动更新

3. **为什么 mutations 必须同步？**
devtools 需要**追踪状态变化顺序**
异步无法捕获执行顺序，时间旅行失效

4. **actions 为什么不能改 state？**
单向数据流规范：
视图 → action → mutation → state → 视图
便于调试、溯源、维护

5. **modules 模块原理**
嵌套递归合并模块，命名空间隔离
每个模块拥有自己 state、mutation、action

---

# 四、Vuex 和 Pinia 原理对比（面试必背）
1. Vue2 Vuex：`Object.defineProperty`
Vue3 Pinia：`Proxy`

2. Vuex 必须 commit mutations 修改
Pinia **直接修改 state**

3. Vuex actions 不能直接改 state
Pinia actions 同步异步随便改

4. Vuex 模块嵌套繁琐，需要 namespaced
Pinia 天然扁平化单模块，自带命名空间

5. Vuex 繁琐模板代码多
Pinia 轻量化、TS 友好、无 mutations

需要我再给你整理**Vuex 单向数据流流程图 + 面试口述精简版**吗？