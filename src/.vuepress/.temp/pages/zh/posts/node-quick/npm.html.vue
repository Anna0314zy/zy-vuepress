<template><div><h1 id="npm-中常用命令" tabindex="-1"><a class="header-anchor" href="#npm-中常用命令"><span>NPM 中常用命令</span></a></h1>
<p>全称 node package manager 是世界上最大规模的包管理系统,官网是这样介绍的 Build amazing things...</p>
<h2 id="一-npm-init" tabindex="-1"><a class="header-anchor" href="#一-npm-init"><span>一.npm init</span></a></h2>
<p>默认大家肯定比较熟悉了，直接 npm init -y 了事，这回我们再来仔细看看</p>
<p>包的描述信息</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  "name": "my-pack",</span></span>
<span class="line"><span>  "version": "1.0.0",</span></span>
<span class="line"><span>  "main": "index.js",</span></span>
<span class="line"><span>  "scripts": {},</span></span>
<span class="line"><span>  "license": "ISC"</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里先声明的 npm 版本是 6.7.0,因为我的 node 版本是 v11.14.0</p>
<p>咱们来一个个说说这里比较重要的字段:name、version、main、scripts、license</p>
<ul>
<li>name 是当前包的名字，也就是最终发布的 npm 官网上包的名字。不能和已有的包重名哦</li>
<li>version 就是当前包的版本号，主要我们要探究如果优雅的管理版本号</li>
<li>main 就是当前包的入口文件，也就是使用 require 默认引入的文件</li>
<li>scripts 可以配置一些执行脚本</li>
<li>license 协议许可</li>
</ul>
<h2 id="二-npm-install" tabindex="-1"><a class="header-anchor" href="#二-npm-install"><span>二.npm install</span></a></h2>
<h3 id="_1-全局安装" tabindex="-1"><a class="header-anchor" href="#_1-全局安装"><span>1.全局安装</span></a></h3>
<p><strong>全局包 npm install nrm --force 强制覆盖</strong><br>
其他安装的全局包都放到了 npm 上</p>
<p>npm 之所以能使用是因为放到了 path 目录下</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> http</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">server</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">g</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装后得到</p>
<ul>
<li>/usr/local/bin/http-server -&gt; /usr/local/lib/node_modules/http-server/bin/http-server</li>
<li>/usr/local/bin/hs -&gt; /usr/local/lib/node_modules/http-server/bin/http-server</li>
</ul>
<p>全局安装的意思很简单,就是安装的模块会被安装到全局下，可以在命令行中直接使用安装的包,其实只是在**/user/local/bin 目录下作了个链接连接到 /usr/local/lib/node_modules/http-server/bin/http-server 这个文件，当我们执行 http-server**这个命令时，会调用链接的这个文件。</p>
<p>mac 因为有权限问题，这里我们加 sudo 来执行命令</p>
<p>我们可以自己来尝试写一个包 ,创建 bin 目录，新增 www 文件,名字叫什么无所谓~</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#! /usr/bin/env node //这句话是要用系统环境的node来执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'珠峰架构'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// #! 这句表示采用node来执行此文件，同理 shell可以表示 sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新 package.json 文件</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bin"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	"my-pack"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./bin/www"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 这里要注意名字和你建立的文件夹相同</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好啦，写好啦！这里我们先不说发包的事，先用一个常用的命令，他可以实现链接的功能</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> link</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // mac添加sodo 把当前模块临时放到npm下 方便调试</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>得到</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">usr</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">local</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">lib</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">node_modules</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">xiaoyu</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -></span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Users</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">zouyu</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Desktop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">node</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">zy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">node2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这样我们在命令行中直接输入 my-pack 就可以 打印出珠峰架构</p>
<p>#2.本地安装</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> webpack</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">save</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>本地安装很好理解啦~ 就是所谓的在项目中使用，而非在命令行中使用！这里我们看到生成了一个 package-lock.json 文件，而且将安装的模块放到了 node_modules 下,而且 json 中也新增了些内容</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"devDependencies"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "webpack"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "^4.39.3"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们先来简单介绍下基本的使用</p>
<blockquote>
<p>--save-dev 代表当前依赖只在开发时被应用,如果默认不写相当于 --save 为项目依赖开发上线都需要</p>
</blockquote>
<p>也可以指定版本号来安装包</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> jquery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> # </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">install可以简写成i</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认执行 npm i 会安装项目中所需要的依赖,如果只想安装生产环境依赖可以增加--production 参数</p>
<h2 id="三-package-lock-文件" tabindex="-1"><a class="header-anchor" href="#三-package-lock-文件"><span>三.package-lock 文件</span></a></h2>
<p>自 npm 5 之后所有的依赖包都采用扁平化管理的方式<br>
package-lock.json 的作用是锁定依赖安装结构,保证在任意机器上执行 npm install 都会得到完全相同的 node_modules 结果,因为 package-lock.json 存储所有安装的信息</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"my-pack"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1.0.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"lockfileVersion"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"requires"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"dependencies"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"@webassemblyjs/ast"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "version"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "1.8.5"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 当前依赖的版本</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "resolved"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://registry.npm.taobao.org/@webassemblyjs/ast/download/@webassemblyjs/ast-1.8.5.tgz"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 从哪个渠道安装的</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "integrity"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "sha1-UbHF/mV2o0lTv0slPfnw1JDZ41k="</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 内容hash</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "dev"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "requires"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "@webassemblyjs/helper-module-context"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "1.8.5"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "@webassemblyjs/helper-wasm-bytecode"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "1.8.5"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "@webassemblyjs/wast-parser"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "1.8.5"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果手动更新了 package.json 文件,执行安装命令会下载对应的新版本,并且会自动更新 lock 文件~</p>
<h2 id="四-依赖方式" tabindex="-1"><a class="header-anchor" href="#四-依赖方式"><span>四.依赖方式</span></a></h2>
<p>简单介绍下常见的依赖方式：</p>
<h3 id="_1-dependencies-项目依赖" tabindex="-1"><a class="header-anchor" href="#_1-dependencies-项目依赖"><span>1.dependencies 项目依赖</span></a></h3>
<p>可以使用 npm install -S 或 npm install --save 保存到依赖中，当发布到 npm 上时 dependencies 下的模块会作为依赖，一起被下载!</p>
<h3 id="_2-devdependencies-开发依赖" tabindex="-1"><a class="header-anchor" href="#_2-devdependencies-开发依赖"><span>2.devDependencies 开发依赖</span></a></h3>
<p>可以使用 npm install -D 或 npm install --save-dev 保存到依赖中。 当发布到 npm 上时 devDependencies 下面的模块就不会自动下载了,如果只是单纯的开发项目 dependencies,devDependencies 只有提示的作用!</p>
<h3 id="_3-peerdependencies-同版本依赖" tabindex="-1"><a class="header-anchor" href="#_3-peerdependencies-同版本依赖"><span>3.peerDependencies 同版本依赖</span></a></h3>
<p jquery:2.2.0="">同等依赖,如果你安装我，那么你最好也安装我对应的依赖，如果未安装会报出警告 bash &quot;peerDependencies&quot;:</p>
<blockquote>
<p>npm WARN youxuan@1.0.0 requires a peer of jquery@2.2.0 but none is installed. You must install peer dependencies yourself.</p>
</blockquote>
<h3 id="_4-bundleddependencies-捆绑依赖" tabindex="-1"><a class="header-anchor" href="#_4-bundleddependencies-捆绑依赖"><span>4.bundledDependencies 捆绑依赖</span></a></h3>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bundleDependencies"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "jquery"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ],</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 npm pack 打包 tgz 时会将捆绑依赖一同打包</p>
<h3 id="_5-optionaldependencies-可选依赖" tabindex="-1"><a class="header-anchor" href="#_5-optionaldependencies-可选依赖"><span>5.optionalDependencies 可选依赖</span></a></h3>
<p>如果发现无法安装或无法找到，不会影响 npm 的安装</p>
<h3 id="五-npm-版本管理" tabindex="-1"><a class="header-anchor" href="#五-npm-版本管理"><span>五.npm 版本管理</span></a></h3>
<p>npm 采用了 semver 规范作为依赖版本管理方案。semver 约定一个包的版本号必须包含 3 个数字</p>
<p>MAJOR.MINOR.PATCH 意思是 主版本号.小版本号.修订版本号</p>
<ul>
<li>MAJOR 对应大的版本号迭代，做了不兼容旧版的修改时要更新 MAJOR 版本号</li>
<li>MINOR 对应小版本迭代，发生兼容旧版 API 的修改或功能更新时，更新 MINOR 版本号</li>
<li>PATCH 对应修订版本号，一般针对修复 BUG 的版本号<br>
当我们每次发布包的时候都需要升级版本号</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>npm version major  # 大版本号加 1，其余版本号归 0</span></span>
<span class="line"><span>npm version minor  # 小版本号加 1，修订号归 0</span></span>
<span class="line"><span>npm version patch  # 修订号加 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 git 管理项目会自动 git tag 标注版本号</p>
<p>来看看版本号的标识含义:</p>
<table>
<thead>
<tr>
<th>range</th>
<th style="text-align:center">含义</th>
<th style="text-align:right">例</th>
</tr>
</thead>
<tbody>
<tr>
<td>^2.2.1</td>
<td style="text-align:center">指定的 MAJOR 版本号下, 所有更新的版本</td>
<td style="text-align:right"> 匹配 2.2.3, 2.3.0; 不匹配 1.0.3, 3.0.1</td>
</tr>
<tr>
<td>~2.2.1</td>
<td style="text-align:center">指定 MAJOR.MINOR 版本号下，所有更新的版本</td>
<td style="text-align:right">匹配 2.2.3, 2.2.9 ; 不匹配 2.3.0, 2.4.5</td>
</tr>
<tr>
<td>&gt;=2.1</td>
<td style="text-align:center">版本号大于或等于 2.1.0</td>
<td style="text-align:right">匹配 2.1.2, 3.1</td>
</tr>
<tr>
<td>&lt;=2.2</td>
<td style="text-align:center">版本号小于或等于 2.2</td>
<td style="text-align:right">匹配 1.0.0, 2.2.1, 2.2.11</td>
</tr>
<tr>
<td>1.0.0 - 2.0.0</td>
<td style="text-align:center">版本号  从 1.0.0 (含) 到 2.0.0 (含)</td>
<td style="text-align:right">匹配 1.0.0, 1.3.4, 2.0.0</td>
</tr>
<tr>
<td>预发版：</td>
<td style="text-align:center"></td>
<td style="text-align:right"></td>
</tr>
</tbody>
</table>
<p>alpha(α)：预览版，或者叫内部测试版；一般不向外部发布，会有很多 bug；一般只有测试人员使用。</p>
<p>beta(β)：测试版，或者叫公开测试版；这个阶段的版本会一直加入新的功能；在 alpha 版之后推出。</p>
<p>rc(release candidate)：最终测试版本；可能成为最终产品的候选版本，如果未出现问题则可发布成为正式版本。</p>
<p>2.1.0-beta.1 这样声明的版本用户不会立马使用，可以用来做测试使用</p>
<h2 id="六-scripts-配置" tabindex="-1"><a class="header-anchor" href="#六-scripts-配置"><span>六.scripts 配置</span></a></h2>
<p>在 package.json 中可以定义自己的脚本通过 npm run 来执行</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   "hello"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "echo hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   "build"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "webpack"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用 npm run hello 执行脚本,也可以使用 npm run build 执行 node_modules/.bin 目录下的 webpack 文件</p>
<ul>
<li>
<p>npm run 命令执行时，会把 ./node_modules/.bin/ 目录添加到执行环境的 PATH 变量中，因此如果某个命令行包未全局安装，而只安装在了当前项目的 node_modules 中，通过 npm run 一样可以调用该命令。<br>
运行之后就会删除PATH环境变量</p>
</li>
<li>
<p>执行 npm 脚本时要传入参数，需要在命令后加 -- 标明, 如 npm run hello -- --port 3000 可以将 --port 参数传给 hello 命令</p>
</li>
<li>
<p>npm 提供了 pre 和 post 两种钩子机制，可以定义某个脚本前后的执行脚本,没有定义默认会忽略</p>
</li>
</ul>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   "prehello"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"echo prehello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   "hello"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "echo hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   "posthello"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"echo posthello"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过打印全局 env 和 在项目下执行 npm run env 来对比 PATH 属性，<br>
不难发现在执行 npm run 的时候确实会将 ./node_modules/.bin/ 目录添加到 PATH 中</p>
<h2 id="七-协议" tabindex="-1"><a class="header-anchor" href="#七-协议"><span>七.协议</span></a></h2>
<figure><img src="@source/zh/posts/.vuepress/public/images/bg2011050101.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>不废话，这张图就说明了为什么 MIT 许可是最大的了!</p>
<h2 id="八-npx-用法" tabindex="-1"><a class="header-anchor" href="#八-npx-用法"><span>八.npx 用法</span></a></h2>
<p>npx 命令是 npm v5.2 之后引入的新命令，npx 可以帮我们直接执行 node_modules/.bin 文件夹下的文件</p>
<h3 id="_1-执行脚本" tabindex="-1"><a class="header-anchor" href="#_1-执行脚本"><span>1.执行脚本</span></a></h3>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npx</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> webpack</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>是不是省略了配置 scripts 脚本啦！</p>
<h3 id="_2-避免安装全局模块" tabindex="-1"><a class="header-anchor" href="#_2-避免安装全局模块"><span>2.避免安装全局模块</span></a></h3>
<p>全局安装的模块会带来很多问题，例如：多个用户全局安装的模块版本不同</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npx</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> create</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">react</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">app</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> react</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">project</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>我们可以直接使用 npx 来执行模块，它会先进行安装，安装执行后会将下载过的模块删除<sub>，这样可以一直使用最新版本啦</sub></p>
<h3 id="九-包的发布" tabindex="-1"><a class="header-anchor" href="#九-包的发布"><span>九.包的发布</span></a></h3>
<p>包的发布比较简单，首先我们需要先切换到官方源,这里推荐个好用的工具 nrm</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> nrm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">g</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">nrm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> use</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> npm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> # </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">切换到官方源</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>之后更新名字哈，这里也可以发布 作用域包 选定版本后,忽略文件夹可以使用 .npmignore,一切就绪后，发布！！！</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> publish</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">npm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> unpublish</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>ok，我们的包就可以成功的发布到 npm 上啦~</p>
</div></template>


