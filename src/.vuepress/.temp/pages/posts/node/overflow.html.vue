<template><div><p>Node.js 做密集型运算，或者所操作的数组、对象本身较大时，容易出现内存溢出的问题，这是由于 Node.js 的运行环境依赖 V8 引擎导致的。如果经常有较大数据量运算等操作，需要对 Node.js 运行环境限制有充分的了解。</p>
<h2 id="本文涵盖" tabindex="-1"><a class="header-anchor" href="#本文涵盖"><span>本文涵盖</span></a></h2>
<ol>
<li>内存溢出问题</li>
<li>为什么会内存溢出
<ul>
<li>2.1 V8内存分配机制</li>
<li>2.2 内存溢出的原因</li>
</ul>
</li>
<li>如何解决内存溢出问题</li>
</ol>
<blockquote>
<p>作者简介：koala，专注完整的 Node.js 技术栈分享，从 JavaScript 到 Node.js,再到后端数据库，祝您成为优秀的高级 Node.js 工程师。【程序员成长指北】作者，Github 博客开源项目 <a href="https://github.com/koala-coding/goodBlog" target="_blank" rel="noopener noreferrer">https://github.com/koala-coding/goodBlog</a></p>
</blockquote>
<h2 id="_1-内存溢出问题" tabindex="-1"><a class="header-anchor" href="#_1-内存溢出问题"><span>1.内存溢出问题</span></a></h2>
<p>下面是我们在Node.js应用中经常遇到的两类内存溢出问题：</p>
<h2 id="密集型运算" tabindex="-1"><a class="header-anchor" href="#密集型运算"><span>密集型运算</span></a></h2>
<p>示例1：当我们需要批量处理一些数据（如：更新用户某项信息）时，我们可能需要一个较大的for或while循环来完成所有的数据的更新，如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> site</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'koala'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">domain</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '程序员成长指北'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 这里是一个保存或更新等操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">            console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作的数据量较大" tabindex="-1"><a class="header-anchor" href="#操作的数据量较大"><span>操作的数据量较大</span></a></h2>
<p>示例2：对象需要频繁的创建/销毁，或操作对象本身较大，如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> sites</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> site</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> y</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">y</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">y</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        site</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'koala'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'程序员成长指北'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">        sites</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两类操作都会出现类似以下错误：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">&#x3C;---</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Last</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> few</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> GCs</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ---></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">……</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">FATAL</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ERROR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">CALL_AND_RETRY_LAST</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Allocation</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> failed</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> process</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> out</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> of</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> memory</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Abort</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> trap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-为什么会内存溢出" tabindex="-1"><a class="header-anchor" href="#_2-为什么会内存溢出"><span>2. 为什么会内存溢出</span></a></h2>
<h3 id="_2-1-v8内存分配机制" tabindex="-1"><a class="header-anchor" href="#_2-1-v8内存分配机制"><span>2.1 V8内存分配机制</span></a></h3>
<p>我们都知道，V8是 Google 在 Chrome 浏览器中使用的 JavaScript 引擎。而在浏览器环境中，运算一般不需要多大内存。<br>
V8 对每个进程分配的运行内存，在32位系统中约为700MB，而在64位系统中约为1.4GB。</p>
<h3 id="_2-2-内存溢出的原因" tabindex="-1"><a class="header-anchor" href="#_2-2-内存溢出的原因"><span>2.2 内存溢出的原因</span></a></h3>
<p>Node.js 程序之所以会出内存溢出的情况，可以分为三方面的原因：</p>
<ul>
<li>
<ol>
<li>V8本身分配的内存较小</li>
</ol>
</li>
<li>
<ol start="2">
<li>JavaScript语言本身限制</li>
</ol>
</li>
<li>
<ol start="3">
<li>程序员使用不当。</li>
</ol>
</li>
</ul>
<p>在示例1中，每次运算所需的内存量并不大，但由于for循环，造成V8内存不能及时释放。随着程序运行时候的增加，内存占用量会越来越大，并最终导致内存的溢出。</p>
<p>在示例2中，可能所创建对象本身并没有超过内存限制。但是除对象本身外：创建对象、对象引用、Node.js程序本身等都需要内存空间，这样就很容易导致内存的溢出。</p>
<h2 id="_3-解决内存溢出问题" tabindex="-1"><a class="header-anchor" href="#_3-解决内存溢出问题"><span>3. 解决内存溢出问题</span></a></h2>
<p>在Node.js应用开发过程中，了解V8内存分配和JavaScript语言限制是Node程序的基本素质。我们应该在应用中权衡利弊，综合考虑内存与程序的运行效率。以下几点防止内存溢出的建议：</p>
<h3 id="_3-1-使用-async-await防止事件堆积-变为同步操作" tabindex="-1"><a class="header-anchor" href="#_3-1-使用-async-await防止事件堆积-变为同步操作"><span>3.1. 使用 async/await防止事件堆积,变为同步操作</span></a></h3>
<p>await将代码执行顺序变为了同步。这样可以使 V8 获得内存回收的机会，有效解决过多事件堆积造成的内存溢出。<br>
我们可以使用await方法处理：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> dbFuc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> site</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'koala'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">domain</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '程序员成长指北'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 这里是一个保存或更新等操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    await</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">site</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dbFuc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次循环V8都会回收内存一次，因此内存不会再溢出。但这样做必然会造成运行效率的降低，而应该在速度在安全之间平衡，控制好循环的安全次数。<br>
说明:实际开发中，上面这种虽然解决了内存溢出，但是仍然会造成进程阻塞，可以开启一个进程/线程来解决阻塞问题(具体可以看我的这篇文章<a href="https://juejin.im/post/5d43017be51d4561f40adcf9" target="_blank" rel="noopener noreferrer">《深入理解Node.js 进程与线程(8000长文彻底搞懂)》</a>)</p>
<h3 id="_3-2-增加v8内存空间" tabindex="-1"><a class="header-anchor" href="#_3-2-增加v8内存空间"><span>3.2. 增加V8内存空间</span></a></h3>
<p>Node.js提供了一个程序运行参数<code v-pre>--max-old-space-size</code>，可以通过该参数指定V8所占用的内存空间，这样可以在一定程度上避免程序内存的溢出。<br>
如，我们可以在运行示例2程序时指定使用4G的内存：<br>
<code v-pre>node --max-old-space-size=4096 app</code></p>
<h3 id="_3-3-使用非v8内存" tabindex="-1"><a class="header-anchor" href="#_3-3-使用非v8内存"><span>3.3. 使用非V8内存</span></a></h3>
<p>Node.js程序所使用的内存分为两类：</p>
<ul>
<li>V8内存：数组、字符串等JavaScript内置对象，运行时使用“V8内存”</li>
<li>系统内存：Buffer 是 Node.js 的一个扩展对象，使用底层的系统内存，不占用V8内存空间。与 buffer 相关的文件系统 fs 和stream 流操作，都不会占用 V8 内存。</li>
</ul>
<blockquote>
<p>(注: fs 和 stream 这两个模块我在 Node 进阶系列文章中已经详细介绍了, 这里就不赘述)</p>
</blockquote>
<p>在程序允许的情况下，应该将数据保存在Buffer中，而不是转换成字符串等JS对象，这样可以避免V8内存的过多占用。（buffer可以看一下这篇文章<a href="https://juejin.im/post/5d2db6d9f265da1bcc1975d7" target="_blank" rel="noopener noreferrer">《Node进阶-探究不在V8堆内存中存储的Buffer对象》</a>）</p>
<h2 id="node系列原创文章" tabindex="-1"><a class="header-anchor" href="#node系列原创文章"><span>Node系列原创文章</span></a></h2>
<p><a href="https://juejin.im/post/5d43017be51d4561f40adcf9" target="_blank" rel="noopener noreferrer">深入理解Node.js 中的进程与线程<br>
</a></p>
<p><a href="https://juejin.im/post/5d25ce36f265da1ba84ab97a" target="_blank" rel="noopener noreferrer">想学Node.js，stream先有必要搞清楚<br>
</a></p>
<p><a href="https://juejin.im/post/5d5639c7e51d453b5c1218b4" target="_blank" rel="noopener noreferrer">require时，exports和module.exports的区别你真的懂吗</a></p>
<p><a href="https://juejin.im/post/5d69eef7f265da03f12e70a5" target="_blank" rel="noopener noreferrer">源码解读一文彻底搞懂Events模块<br>
</a></p>
<p><a href="https://juejin.im/post/5d3f1664e51d4561a34618c1" target="_blank" rel="noopener noreferrer">Node.js 高级进阶之 fs 文件模块学习<br>
</a></p>
<h2 id="关注我" tabindex="-1"><a class="header-anchor" href="#关注我"><span>关注我</span></a></h2>
<ul>
<li>欢迎加我微信(coder_qi)，拉你进技术群，长期交流学习...</li>
<li>欢迎关注「程序员成长指北」,一个用心帮助你成长的公众号...<br>
<img src="http://img.xiaogangzai.cn/leading.png" alt="" loading="lazy"></li>
</ul>
</div></template>


