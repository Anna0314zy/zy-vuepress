<template><div><h1 id="node-基本概念" tabindex="-1"><a class="header-anchor" href="#node-基本概念"><span>Node 基本概念</span></a></h1>
<h2 id="一-node-是什么" tabindex="-1"><a class="header-anchor" href="#一-node-是什么"><span>一.Node 是什么?</span></a></h2>
<p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境(runtime),Node 不是一门语言是让 js 运行在后端的运行时,并且不包括 javascript 全集,因为在服务端中不包含 DOM 和 BOM,Node 也提供了一些新的模块例如 http,fs 模块等。Node.js 使用了事件驱动、非阻塞式 I/O 的模型，使其轻量又高效并且 Node.js 的包管理器 npm，是全球最大的开源库生态系统。事件驱动与非阻塞 IO 后面我们会一一介绍。到此我们已经对 node 有了简单的概念。</p>
<h2 id="二-node-解决了哪些问题" tabindex="-1"><a class="header-anchor" href="#二-node-解决了哪些问题"><span>二.Node 解决了哪些问题?</span></a></h2>
<p>Node 在处理高并发,I/O 密集场景有明显的性能优势</p>
<p>高并发,是指在同一时间并发访问服务器<br>
I/O 密集指的是文件操作、网络操作、数据库,相对的有 CPU 密集,CPU 密集指的是逻辑处理运算、压缩、解压、加密、解密<br>
Web 主要场景就是接收客户端的请求读取静态资源和渲染界面,所以 Node 非常适合 Web 应用的开发。</p>
<h2 id="三-js-单线程" tabindex="-1"><a class="header-anchor" href="#三-js-单线程"><span>三.JS 单线程</span></a></h2>
<p>javascript 在最初设计时设计成了单线程,为什么不是多线程呢？如果多个线程同时操作 DOM 那岂不会很混乱？这里所谓的单线程指的是主线程是单线程的,所以在 Node 中主线程依旧是单线程的。</p>
<p>单线程特点是节约了内存,并且不需要在切换执行上下文<br>
而且单线程不需要管锁的问题.</p>
<h2 id="四-同步异步和阻塞非阻塞" tabindex="-1"><a class="header-anchor" href="#四-同步异步和阻塞非阻塞"><span>四.同步异步和阻塞非阻塞</span></a></h2>
<figure><img src="@source/posts/posts/.vuepress/public/images/2.1a033437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="五-node-中的-event-loop" tabindex="-1"><a class="header-anchor" href="#五-node-中的-event-loop"><span>五.Node 中的 Event Loop</span></a></h2>
<figure><img src="@source/posts/posts/.vuepress/public/images/1.4f572942.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>1.我们写的 js 代码会交给 v8 引擎进行处理</li>
<li>2.代码中可能会调用 nodeApi,node 会交给 libuv 库处理</li>
<li>3.libuv 通过阻塞 i/o 和多线程实现了异步 io</li>
<li>4.通过事件驱动的方式,将结果放到事件队列中,最终交给我们的应用。<br>
本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。<br>
下面都是宏任务</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">┌───────────────────────────┐</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">┌─>│ timers │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ └─────────────┬─────────────┘</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| 执行延迟到下一个循环迭代的 I/O 回调。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ ┌─────────────┴─────────────┐</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ │ pending callbacks │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ └─────────────┬─────────────┘</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| 仅系统内部使用。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ ┌─────────────┴─────────────┐</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ │ idle, prepare │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ └─────────────┬─────────────┘  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| 检索新的 I/O 事件;执行与 I/O 相关的回调 ┌───────────────┐</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ ┌─────────────┴─────────────┐ │ incoming: │ pool 中有很多回调 node 中有执行的最大个数 超过最大个数延迟到下一个循环执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ │ poll │&#x3C;─────┤ connections, │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ └─────────────┬─────────────┘ │ data, etc. │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ setImmediate() 回调函数在这里执行。 └───────────────┘</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ ┌─────────────┴─────────────┐  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ │ check │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ └─────────────┬─────────────┘</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| 一些关闭的回调函数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">│ ┌─────────────┴─────────────┐</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">└──┤ close callbacks │</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">└───────────────────────────┘</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>timers: 定时器 setTimeout 执行，将 callback 加入队列中。</li>
<li>pending callbacks: 一些 I/O 的 callback，推迟到下一次循环中执行。</li>
<li>idle, prepare: 内部的一些事件。</li>
<li>poll: 定时器的 callback 执行，setImmediate 执行，微任务执行。</li>
<li>check: setImmediate 的 callback 执行。</li>
<li>close callbacks: 一些 callbacks 的关闭，如 socket。</li>
</ul>
<p><strong>timers、poll、check 阶段</strong></p>
<ul>
<li>
<p>timers<br>
这个阶段，只执行 setTimeout 和 setInterval，但是他们的 callback 不会执行，而是推到宏任务的队列之中。</p>
</li>
<li>
<p>poll<br>
这个阶段，会先执行符合条件的微任务，比如 Promise 的异步完成，如果是 setImmediate，则只会执行，不执行他的 callback，然后执行定时器的 callback，比如 timeout。这里会适当得暂停一会，看看会不会有新任务进入队列。如果有 setImmediate 的 callback 则进入 check 阶段，否则回到 timer 继续新一轮循环。</p>
</li>
<li>
<p>check<br>
当 poll 阶段的队列完成，则会轮到 check，这时会执行 setImmediate 的 callback。如果没有需要关闭 callbacks，那么就回到 timer 继续新一轮的循环。</p>
<blockquote>
<p>这里每一个阶段都对应一个事件队列,当 event loop 执行到某个阶段时会将当前阶段对应的队列依次执行。当该队列已用尽或达到回调限制，事件循环将移动到下一阶段</p>
</blockquote>
</li>
</ul>
<h3 id="宏任务微任务" tabindex="-1"><a class="header-anchor" href="#宏任务微任务"><span>宏任务微任务</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>执行一个宏任务 就会清空微任务 .... 可以理解为宏任务会先放到宏任务队列 但是微任务先执行</p>
</div>
<ul>
<li>宏任务<br>
从我的角度理解，就是一个正常的 task，本来在一个线程中可以毫无波折地一个接着一个运行到最后，奈何每个宏任务执行之后都有可能产生一些微任务，因此很不幸，这些宏任务就要排在这些微任务之后了。</li>
</ul>
<p>宏任务代表：script(整体代码),setTimeout,setImmediate。</p>
<ul>
<li>微任务<br>
就是宏任务执行时，产生的新的小任务，比如异步，此类任务称之为微任务，一般在当前宏任务执行完之后“插队”执行。</li>
</ul>
<p>微任务代表：process.nextTick, Promise(原生)。</p>
<h3 id="settimeout-与-setimmediate" tabindex="-1"><a class="header-anchor" href="#settimeout-与-setimmediate"><span>setTimeout 与 setImmediate</span></a></h3>
<ul>
<li>1.<strong>根据性能影响 执行顺序会不同</strong></li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//timer阶段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"setTimeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//一种</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//check阶段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setImmediate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"setImmdiate"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2.这种执行顺序是一定的 setImmdiate setTimeout</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">fs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">readFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./note.md"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  //i / o 轮询会执行i.o回调 如果没有定义setImmediate 会等待剩下的I/O完成 或者定时器到达时间</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"setTimeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  //一种</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  //check阶段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  setImmediate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"setImmdiate"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="process-nexttick-会先于-promise" tabindex="-1"><a class="header-anchor" href="#process-nexttick-会先于-promise"><span>process.nextTick 会先于 Promise</span></a></h3>
<blockquote>
<p>process.nextTick() 当前同步代码执行完毕后立即调用从技术上讲不是事件循环的一部分.</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>node 先执行栈中代码 然后再执行宏任务 执行一个宏任务（s） 清空微任务 然后再执行宏任务 。。。。</p>
</div>
<p>全局属性 -- 能在文件夹里的文件直接直接访问的<br>
全局变量 globle.</p>
</blockquote>
<h2 id="六-node-中全局对象" tabindex="-1"><a class="header-anchor" href="#六-node-中全局对象"><span>六.Node 中全局对象</span></a></h2>
<ul>
<li>Buffer</li>
</ul>
<h3 id="process" tabindex="-1"><a class="header-anchor" href="#process"><span>process</span></a></h3>
<ul>
<li>
<p>process.argv：返回当前进程的命令行参数数组。<br>
重要的模块 commander</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> program</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"commander"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> chalk</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"chalk"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">program</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">naome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"zf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">program</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">usage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[options]"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//这个要写在上面 才有效果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">program</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> //配置命令</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"create"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"create project"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">action</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"create project"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//'set port描述文字'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">program</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-p, --port &#x3C;val>"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"set port"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1.0.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// console.log(program);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">program</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--help"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Examples"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"  node 1.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"  node 1.js create"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "  "</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> chalk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"project"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">parse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">argv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//parse一定要放到最后</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>process.env：返回一个对象，成员为当前 Shell 的环境变量，比如 process.env.HOME。<br>
window 可以通过 set xxx=xxx / mac export xxx = xxx 可以设置环境变量<br>
第三方模块 cross-env 读取 <a href="http://process.env.xxx" target="_blank" rel="noopener noreferrer">process.env.xxx</a></p>
</li>
<li>
<p>process.installPrefix：node 的安装路径的前缀，比如/usr/local，则 node 的执行文件目录为/usr/local/bin/node。</p>
</li>
<li>
<p>process.pid：当前进程的进程号。</p>
</li>
<li>
<p>process.platform：当前系统平台，比如 Linux。</p>
</li>
<li>
<p>process.title：默认值为“node”，可以自定义该值。</p>
</li>
<li>
<p>process.version：Node 的版本，比如 v0.10.18。</p>
</li>
<li>
<p>process.chdir()：切换工作目录到指定目录。</p>
</li>
<li>
<p>process.cwd()：返回运行当前脚本的工作目录的路径。</p>
</li>
<li>
<p>process.exit()：退出当前进程。</p>
</li>
<li>
<p>process.getgid()：返回当前进程的组 ID（数值）。</p>
</li>
<li>
<p>process.getuid()：返回当前进程的用户 ID（数值）。</p>
</li>
<li>
<p>process.nextTick()：指定回调函数在当前执行栈的尾部、下一次 Event Loop 之前执行。</p>
</li>
<li>
<p>process.on()：监听事件。</p>
</li>
<li>
<p>process.setgid()：指定当前进程的组，可以使用数字 ID，也可以使用字符串 ID。</p>
</li>
<li>
<p>process.setuid()：指定当前进程的用户，可以使用数字 ID，也可以使用字符串 ID。</p>
</li>
<li>
<p>setInterval,setTimeout,setImmediate</p>
</li>
<li>
<p>console</p>
</li>
<li>
<p>queueMicrotask</p>
</li>
</ul>
<h2 id="七-node-中的模块" tabindex="-1"><a class="header-anchor" href="#七-node-中的模块"><span>七.node 中的模块</span></a></h2>
<ul>
<li>__dirname</li>
<li>__filename</li>
<li>exports</li>
<li>module</li>
<li>require()</li>
</ul>
</div></template>


