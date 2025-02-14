<template><div><h1 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#常用软件下载">常用软件下载</router-link></li><li><router-link to="#交流群讨论问题整理">交流群讨论问题整理</router-link></li></ul></nav>
<h2 id="常用软件下载" tabindex="-1"><a class="header-anchor" href="#常用软件下载"><span>常用软件下载</span></a></h2>
<ul>
<li>teamviewer破解版 远程控制软件(附带破解视频教学) 提取码：7aud<a href="https://pan.baidu.com/s/1O_9hBfqq1vBLkx9E51RrWA" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>centOS mac版本<a href="https://pan.baidu.com/s/1geK2kF5" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>postman破解版 接口调试工具 提取码：t5e9 <a href="https://pan.baidu.com/s/1FB82YFv6r2eSvj-5O3nczA" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>git win_x64 提取码：v3f1 <a href="https://pan.baidu.com/s/112SCA8KeS2Up6mekDl1uGw" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>git win_32 提取码：01fk <a href="https://pan.baidu.com/s/1tMG-7agcfELfcbzBIsC2hQ" target="_blank" rel="noopener noreferrer">下载</a></li>
<li>navicat for mysql10.0.11简体中文破解版 提取码：z59z [下载](<a href="https://pan.baidu.com/s/1udENOBe6P_KQ7d8fyMBR6A" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1udENOBe6P_KQ7d8fyMBR6A</a></li>
<li>axureRP 9 破解版 提取码：t7jh <a href="https://pan.baidu.com/s/164DU5VoB8hYxqoT-QQd8Wg" target="_blank" rel="noopener noreferrer">下载</a></li>
</ul>
<h2 id="交流群讨论问题整理" tabindex="-1"><a class="header-anchor" href="#交流群讨论问题整理"><span>交流群讨论问题整理</span></a></h2>
<ul>
<li><a href="">Vuepress 如何引入百度统计和谷歌统计</a></li>
</ul>
<p>方式1：在<code v-pre>config.js</code>中,配置head以及pligins：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'link'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">rel</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'icon'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">href</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '/image/favicon.ico'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'script'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, {}, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            var _hmt = _hmt || [];</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            (function() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            var hm = document.createElement("script");</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            hm.src = "https://hm.baidu.com/hm.js?**********************";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            var s = document.getElementsByTagName("script")[0]; </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            s.parentNode.insertBefore(hm, s);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            // 引入谷歌,不需要可删除这段</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            var hm1 = document.createElement("script");</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-00000000-1";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            var s1 = document.getElementsByTagName("script")[0]; </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            s1.parentNode.insertBefore(hm1, s1);</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            })();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            // 谷歌加载,不需要可删除</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            window.dataLayer = window.dataLayer || [];</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            function gtag(){dataLayer.push(arguments);}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            gtag('js', new Date());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            gtag('config', 'UA-00000000-1');</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        `</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    pligins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">             '@vuepress/google-analytics'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            'ga'</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'UA-149666038-1'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // UA-00000000-0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：在组件中引入， 目前只有百度有效：<br>
首先安装<code v-pre>vue-ba</code>,</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#61AFEF"> import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vue-ba"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">module</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ba</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">      Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">ba</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">      Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">ba</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">siteId</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    });</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


