<template><div><h3 id="前端文章目录" tabindex="-1"><a class="header-anchor" href="#前端文章目录"><span>前端文章目录</span></a></h3>
<h4 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>css</span></a></h4>
<ul>
<li><RouteLink to="/webframe/css/1.html"><code v-pre>面试</code>10个css高频面试题</RouteLink></li>
<li><RouteLink to="/webframe/css/render.html">渲染树的形成原理你真的很懂吗?</RouteLink></li>
</ul>
<h4 id="javascript必知必会系列" tabindex="-1"><a class="header-anchor" href="#javascript必知必会系列"><span>javascript必知必会系列</span></a></h4>
<ul>
<li><RouteLink to="/webframe/javascript/datatype.html"><code v-pre>[数据类型]</code> 经常被面试官问道的JavaScript数据类型知识你真的懂吗？</RouteLink></li>
<li><RouteLink to="/webframe/javascript/scoped.html"><code v-pre>[作用域]</code>深入理解 JavaScript, 从作用域与作用域链开始</RouteLink></li>
<li><RouteLink to="/webframe/javascript/closure.html"><code v-pre>[闭包]</code>理解javascript中的闭包</RouteLink></li>
<li><RouteLink to="/webframe/javascript/higherFunc.html"><code v-pre>[高阶函数]</code>高阶函数详解与实战训练</RouteLink></li>
<li><RouteLink to="/webframe/javascript/copy.html"><code v-pre>[赋值拷贝]</code>js中赋值•浅拷贝•深拷贝</RouteLink></li>
<li><RouteLink to="/webframe/javascript/prototype.html"><code v-pre>[原型链]</code>原型链这么看好像并不难</RouteLink></li>
<li><RouteLink to="/webframe/javascript/this.html"><code v-pre>[this]</code>this关键字</RouteLink></li>
<li><RouteLink to="/webframe/javascript/exports.html">exports和module.exports的区别</RouteLink></li>
</ul>
<h4 id="es6-es7" tabindex="-1"><a class="header-anchor" href="#es6-es7"><span>es6 es7..</span></a></h4>
<ul>
<li><RouteLink to="/webframe/es6/classInherit.html"><code v-pre>ES6系列</code>ES6中的类(对比java学习)</RouteLink></li>
<li><RouteLink to="/webframe/es6/promise.html"><code v-pre>ES6系列</code>promise</RouteLink></li>
<li><RouteLink to="/webframe/es6/async-await.html"><code v-pre>ES7系列</code>async和await讲解</RouteLink></li>
</ul>
<h4 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>vue</span></a></h4>
<ul>
<li><RouteLink to="/webframe/vue/messageWays.html"><code v-pre>vue组件通信</code>vue中组件之间8中通信方式</RouteLink></li>
</ul>
<h2 id="交流群里讨论问题整理" tabindex="-1"><a class="header-anchor" href="#交流群里讨论问题整理"><span>交流群里讨论问题整理</span></a></h2>
<ul>
<li><a href="">vue中如何动态加载远程js文件</a></li>
</ul>
<p>典型写法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> script</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'script'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">type</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "text/javascript"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "js地址"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">appendChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这个能满足你的需求，就不需要看下面的代码了。</p>
<p>很多时候，我们需要的是在js加载完成后，再执行一些逻辑。那其实也很简单，使用promise包裹一下就可以达到目的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> loadJS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">reject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> script</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'script'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">type</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'text/javascript'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onload</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            // 加载完成后</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onerror</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            reject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> src</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getElementsByTagName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'body'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">appendChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    //调用loadJS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    loadJS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'js地址'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用软件下载" tabindex="-1"><a class="header-anchor" href="#常用软件下载"><span>常用软件下载</span></a></h4>
<ul>
<li>teamviewer破解版 远程控制软件(附带破解视频教学) 提取码：7aud<a href="https://pan.baidu.com/s/1O_9hBfqq1vBLkx9E51RrWA" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>centOS mac版本<a href="https://pan.baidu.com/s/1geK2kF5" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>postman破解版 接口调试工具 提取码：t5e9 <a href="https://pan.baidu.com/s/1FB82YFv6r2eSvj-5O3nczA" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>git win_x64 提取码：v3f1 <a href="https://pan.baidu.com/s/112SCA8KeS2Up6mekDl1uGw" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>git win_32 提取码：01fk <a href="https://pan.baidu.com/s/1tMG-7agcfELfcbzBIsC2hQ" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>navicat for mysql10.0.11简体中文破解版 提取码：z59z [下载](<a href="https://pan.baidu.com/s/1udENOBe6P_KQ7d8fyMBR6A" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1udENOBe6P_KQ7d8fyMBR6A</a></li>
<li>axureRP 9 破解版 提取码：t7jh <a href="https://pan.baidu.com/s/164DU5VoB8hYxqoT-QQd8Wg" target="_blank" rel="noopener noreferrer">下载</a></li>
</ul>
</div></template>


