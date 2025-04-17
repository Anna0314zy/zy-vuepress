import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as n,o as t}from"./app-19odCU7c.js";const e={};function l(h,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="🚀-vue-3-中的-jsx-语法及应用" tabindex="-1"><a class="header-anchor" href="#🚀-vue-3-中的-jsx-语法及应用"><span><strong>🚀 Vue 3 中的 JSX 语法及应用</strong></span></a></h1><p>在 Vue 3 中，我们可以使用 <strong>JSX</strong> 来编写组件，而不是传统的 <strong><code>template</code> 语法</strong>。Vue 3 <strong>官方支持 JSX</strong>，并且相比 Vue 2 的 JSX 兼容性更好，适用于 <strong>动态组件、渲染函数、复杂逻辑组件</strong>。</p><hr><h2 id="🔥-1-在-vue-3-中如何使用-jsx" tabindex="-1"><a class="header-anchor" href="#🔥-1-在-vue-3-中如何使用-jsx"><span><strong>🔥 1. 在 Vue 3 中如何使用 JSX</strong></span></a></h2><h3 id="✅-1-1-安装-jsx-支持" tabindex="-1"><a class="header-anchor" href="#✅-1-1-安装-jsx-支持"><span><strong>✅ 1.1 安装 JSX 支持</strong></span></a></h3><p>Vue 3 默认 <strong>支持 JSX</strong>，但如果你使用 Vite 或 Webpack，需要安装 <code>@vitejs/plugin-vue-jsx</code>：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vitejs/plugin-vue-jsx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后，在 <code>vite.config.js</code> 里启用 JSX：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> vueJsx</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vitejs/plugin-vue-jsx&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vueJsx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="🔥-2-vue-3-jsx-基础语法" tabindex="-1"><a class="header-anchor" href="#🔥-2-vue-3-jsx-基础语法"><span><strong>🔥 2. Vue 3 JSX 基础语法</strong></span></a></h2><p>在 Vue 3 组件中，我们可以使用 <strong><code>.vue</code> 组件 + JSX</strong> 或 <strong>纯 JSX 组件</strong>。</p><h3 id="✅-2-1-基础-jsx-语法" tabindex="-1"><a class="header-anchor" href="#✅-2-1-基础-jsx-语法"><span><strong>✅ 2.1 基础 JSX 语法</strong></span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// HelloWorld.jsx</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Hello, JSX in Vue 3!&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📌 <strong>特点</strong></p><ul><li><strong>Vue 3 组件不需要 <code>render</code> 方法，直接返回 JSX</strong></li><li><strong><code>defineComponent</code> 定义组件</strong></li></ul><hr><h3 id="✅-2-2-在-vue-文件中使用-jsx" tabindex="-1"><a class="header-anchor" href="#✅-2-2-在-vue-文件中使用-jsx"><span><strong>✅ 2.2 在 <code>.vue</code> 文件中使用 JSX</strong></span></a></h3><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> renderJSX</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;这是 JSX 语法&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Vue 3 JSX 示例&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">renderJSX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📌 <strong>特点</strong></p><ul><li><code>h()</code>（<code>createElement</code>）可以用 JSX 语法替代</li><li><code>setup()</code> 里可以直接返回 JSX 组件</li></ul><hr><h2 id="🔥-3-vue-3-jsx-动态渲染" tabindex="-1"><a class="header-anchor" href="#🔥-3-vue-3-jsx-动态渲染"><span><strong>🔥 3. Vue 3 JSX 动态渲染</strong></span></a></h2><h3 id="✅-3-1-传递-props" tabindex="-1"><a class="header-anchor" href="#✅-3-1-传递-props"><span><strong>✅ 3.1 传递 Props</strong></span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> MyComponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  props</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">props</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📌 <strong>特点</strong></p><ul><li><strong><code>props</code> 可以直接作为 JSX 变量使用</strong></li><li><strong>无需 <code>this</code> 访问数据</strong></li></ul><hr><h3 id="✅-3-2-事件绑定" tabindex="-1"><a class="header-anchor" href="#✅-3-2-事件绑定"><span><strong>✅ 3.2 事件绑定</strong></span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> Button</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleClick</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;按钮被点击了!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">handleClick</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;点击我&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📌 <strong>特点</strong></p><ul><li><strong>事件写成 <code>onClick={fn}</code>，而不是 <code>v-on:click</code></strong></li><li><strong>事件名遵循 <code>onXxx</code> 形式</strong></li></ul><hr><h3 id="✅-3-3-v-if-和-v-for" tabindex="-1"><a class="header-anchor" href="#✅-3-3-v-if-和-v-for"><span><strong>✅ 3.3 <code>v-if</code> 和 <code>v-for</code></strong></span></a></h3><p><strong><code>v-if</code> 使用 <code>&amp;&amp;</code> 或三元表达式</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> ShowMessage</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> show</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">show</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;显示这段文本&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>v-for</code> 使用 <code>map()</code></strong></p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> items</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;React&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Angular&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">        {</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> key</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">index</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ))</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📌 <strong>特点</strong></p><ul><li><strong><code>v-if</code> → <code>三元运算符或 &amp;&amp;</code></strong></li><li><strong><code>v-for</code> → <code>map()</code></strong></li><li><strong>必须添加 <code>key</code></strong></li></ul><hr><h3 id="✅-3-4-插槽-slots" tabindex="-1"><a class="header-anchor" href="#✅-3-4-插槽-slots"><span><strong>✅ 3.4 插槽（<code>slots</code>）</strong></span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> Parent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">slots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;父组件&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">        {</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">slots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">default</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> slots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;无内容&quot;</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 使用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;我是插槽内容&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📌 <strong>特点</strong></p><ul><li><code>slots.default()</code> 用于渲染默认插槽</li><li>作用域插槽可以 <code>slots.slotName(props)</code></li></ul><hr><h2 id="🔥-4-vue-3-jsx-vs-template" tabindex="-1"><a class="header-anchor" href="#🔥-4-vue-3-jsx-vs-template"><span><strong>🔥 4. Vue 3 JSX vs <code>template</code></strong></span></a></h2><table><thead><tr><th><strong>功能</strong></th><th><strong>JSX 语法</strong></th><th><strong>Vue Template 语法</strong></th></tr></thead><tbody><tr><td>组件定义</td><td><code>defineComponent</code> + <code>return JSX</code></td><td><code>template</code> + <code>script setup</code></td></tr><tr><td>事件绑定</td><td><code>onClick={handleClick}</code></td><td><code>@click=&quot;handleClick&quot;</code></td></tr><tr><td><code>v-if</code></td><td><code>{ show ? &lt;div&gt;显示&lt;/div&gt; : null }</code></td><td><code>&lt;div v-if=&quot;show&quot;&gt;显示&lt;/div&gt;</code></td></tr><tr><td><code>v-for</code></td><td><code>{ items.map(item =&gt; &lt;li&gt;{item}&lt;/li&gt;) }</code></td><td><code>&lt;li v-for=&quot;item in items&quot;&gt;{{ item }}&lt;/li&gt;</code></td></tr><tr><td>插槽</td><td><code>{ slots.default() }</code></td><td><code>&lt;slot&gt;&lt;/slot&gt;</code></td></tr></tbody></table><p>📌 <strong>JSX 适用于</strong>：</p><ul><li><strong>复杂逻辑组件</strong>（动态渲染、多层嵌套）</li><li><strong>HOC（高阶组件）</strong></li><li><strong>Vue 组件库开发（如 Element-Plus）</strong></li></ul><hr><h2 id="🔥-5-适用场景" tabindex="-1"><a class="header-anchor" href="#🔥-5-适用场景"><span><strong>🔥 5. 适用场景</strong></span></a></h2><p>✅ <strong>Vue 组件库（如 <code>Element-Plus</code>）</strong><br> ✅ <strong>需要动态渲染组件</strong><br> ✅ <strong>有 React 经验，习惯 JSX</strong><br> ✅ <strong>高阶组件（HOC）或 <code>render</code> 函数替代 <code>template</code></strong></p><p>📌 <strong>你是想在 Vue 3 里使用 JSX 代替 <code>template</code>，还是用于组件库开发？可以帮你优化 JSX 方案！😃</strong></p>`,55)]))}const r=i(e,[["render",l]]),d=JSON.parse('{"path":"/posts/vue-quick/jsx.html","title":"Vue 3 中的 JSX","lang":"zh-CN","frontmatter":{"title":"Vue 3 中的 JSX","tags":["vue"],"description":"🚀 Vue 3 中的 JSX 语法及应用 在 Vue 3 中，我们可以使用 JSX 来编写组件，而不是传统的 template 语法。Vue 3 官方支持 JSX，并且相比 Vue 2 的 JSX 兼容性更好，适用于 动态组件、渲染函数、复杂逻辑组件。 🔥 1. 在 Vue 3 中如何使用 JSX ✅ 1.1 安装 JSX 支持 Vue 3 默认 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zy-vuepress/posts/vue-quick/jsx.html"}],["meta",{"property":"og:site_name","content":"我的基地"}],["meta",{"property":"og:title","content":"Vue 3 中的 JSX"}],["meta",{"property":"og:description","content":"🚀 Vue 3 中的 JSX 语法及应用 在 Vue 3 中，我们可以使用 JSX 来编写组件，而不是传统的 template 语法。Vue 3 官方支持 JSX，并且相比 Vue 2 的 JSX 兼容性更好，适用于 动态组件、渲染函数、复杂逻辑组件。 🔥 1. 在 Vue 3 中如何使用 JSX ✅ 1.1 安装 JSX 支持 Vue 3 默认 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-21T07:50:23.000Z"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:modified_time","content":"2025-03-21T07:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 3 中的 JSX\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-21T07:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mrs.Zoe\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"🔥 1. 在 Vue 3 中如何使用 JSX","slug":"🔥-1-在-vue-3-中如何使用-jsx","link":"#🔥-1-在-vue-3-中如何使用-jsx","children":[{"level":3,"title":"✅ 1.1 安装 JSX 支持","slug":"✅-1-1-安装-jsx-支持","link":"#✅-1-1-安装-jsx-支持","children":[]}]},{"level":2,"title":"🔥 2. Vue 3 JSX 基础语法","slug":"🔥-2-vue-3-jsx-基础语法","link":"#🔥-2-vue-3-jsx-基础语法","children":[{"level":3,"title":"✅ 2.1 基础 JSX 语法","slug":"✅-2-1-基础-jsx-语法","link":"#✅-2-1-基础-jsx-语法","children":[]},{"level":3,"title":"✅ 2.2 在 .vue 文件中使用 JSX","slug":"✅-2-2-在-vue-文件中使用-jsx","link":"#✅-2-2-在-vue-文件中使用-jsx","children":[]}]},{"level":2,"title":"🔥 3. Vue 3 JSX 动态渲染","slug":"🔥-3-vue-3-jsx-动态渲染","link":"#🔥-3-vue-3-jsx-动态渲染","children":[{"level":3,"title":"✅ 3.1 传递 Props","slug":"✅-3-1-传递-props","link":"#✅-3-1-传递-props","children":[]},{"level":3,"title":"✅ 3.2 事件绑定","slug":"✅-3-2-事件绑定","link":"#✅-3-2-事件绑定","children":[]},{"level":3,"title":"✅ 3.3 v-if 和 v-for","slug":"✅-3-3-v-if-和-v-for","link":"#✅-3-3-v-if-和-v-for","children":[]},{"level":3,"title":"✅ 3.4 插槽（slots）","slug":"✅-3-4-插槽-slots","link":"#✅-3-4-插槽-slots","children":[]}]},{"level":2,"title":"🔥 4. Vue 3 JSX vs template","slug":"🔥-4-vue-3-jsx-vs-template","link":"#🔥-4-vue-3-jsx-vs-template","children":[]},{"level":2,"title":"🔥 5. 适用场景","slug":"🔥-5-适用场景","link":"#🔥-5-适用场景","children":[]}],"git":{"createdTime":1742543423000,"updatedTime":1742543423000,"contributors":[{"name":"zy","username":"zy","email":"891374900@qq.com","commits":1,"url":"https://github.com/zy"}]},"readingTime":{"minutes":2.28,"words":685},"filePathRelative":"posts/vue-quick/jsx.md","localizedDate":"2025年3月21日","excerpt":"\\n<p>在 Vue 3 中，我们可以使用 <strong>JSX</strong> 来编写组件，而不是传统的 <strong><code>template</code> 语法</strong>。Vue 3 <strong>官方支持 JSX</strong>，并且相比 Vue 2 的 JSX 兼容性更好，适用于 <strong>动态组件、渲染函数、复杂逻辑组件</strong>。</p>\\n<hr>\\n<h2><strong>🔥 1. 在 Vue 3 中如何使用 JSX</strong></h2>\\n<h3><strong>✅ 1.1 安装 JSX 支持</strong></h3>\\n<p>Vue 3 默认 <strong>支持 JSX</strong>，但如果你使用 Vite 或 Webpack，需要安装 <code>@vitejs/plugin-vue-jsx</code>：</p>","autoDesc":true}');export{r as comp,d as data};
