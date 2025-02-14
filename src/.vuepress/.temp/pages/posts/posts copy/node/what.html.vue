<template><div><nav class="table-of-contents"><ul><li><router-link to="#node-js的特点">Node.js的特点</router-link></li><li><router-link to="#node-js的弊端">Node.js的弊端</router-link><ul><li><router-link to="#单线程带来的弊端">单线程带来的弊端</router-link></li><li><router-link to="#调试">调试</router-link></li><li><router-link to="#node社区中的npm包">Node社区中的npm包</router-link></li></ul></li><li><router-link to="#node-js的应用场景">Node.js的应用场景</router-link></li><li><router-link to="#哪些大公司在用">哪些大公司在用</router-link></li></ul></nav>
<p><strong>前言</strong></p>
<p>如果你有一定的前端基础，比如 <code v-pre>HTML、CSS、JavaScript、JQ、Vue</code>；那么，<code v-pre>Node.js</code> 能让你以最低的成本快速过渡成为一个全栈工程师(我称这个全栈为伪全栈，我认为的全栈也要精通数据库，不喜勿喷)，从而触及后端和移动端的开发。当然，Node.js也不是万能的、也不是说学了它就可以完全取代后端的其他开发语言，它有自己的使命和擅长的应用领域。</p>
<p>除此之外现在非常火热的 <code v-pre>Vue.js，React.js</code> ，等很多数据层动态交互优先选用了<code v-pre>Node.js</code>，一些比较流行的打包工具也是如此；综上，为你为什么要学习它又增加了一大理由。</p>
<p><code v-pre>Node.js</code> 和传统的后端语言（比如PHP、JAVA等）相比，各有优缺点，各自擅长领域和侧重点不同，因此，各有千秋、各有需求市场。<code v-pre>Node.js</code> 让我们进行后端开发多了一种便捷的手段。所以大家也不要总说哪些语言是最好的，各有各的使命，嘿嘿。</p>
<h2 id="node-js的特点" tabindex="-1"><a class="header-anchor" href="#node-js的特点"><span>Node.js的特点</span></a></h2>
<h4 id="非阻塞异步io" tabindex="-1"><a class="header-anchor" href="#非阻塞异步io"><span>非阻塞异步io</span></a></h4>
<p>例如，当在访问数据库取得数据的时候，需要一段时间。在传统的单线程处理机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，才能执行后面的代码。也就是说，<code v-pre>I/O</code>阻塞了代码的执行，极大地降低了程序的执行效率。</p>
<p>由于 Node.js 中采用了非阻塞型<code v-pre>I/O</code>机制，因此在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。</p>
<p>当某个<code v-pre>I/O</code>执行完毕时，将以事件的形式通知执行<code v-pre>I/O</code>操作的线程，线程执行这个事件的回调函数。为了处理异步<code v-pre>I/O</code>，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。</p>
<p>阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程。而非阻塞模式下，一个线程永远在执行计算操作，这个线程的CPU核心利用率永远是100%。所以，这是一种特别有哲理的解决方案：与其人多，但是好多人闲着；还不如一个人玩命，往死里干活儿。</p>
<h4 id="单线程" tabindex="-1"><a class="header-anchor" href="#单线程"><span>单线程</span></a></h4>
<p>在 Java、PHP 或者 .net 等服务器端语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存。也就是说，理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。要让Web应用程序支持更多的用户，就需要增加服务器的数量，而 Web 应用程序的硬件成本当然就上升了。</p>
<p>Node.js不为每个客户连接创建一个新的线程，而仅仅使用一个线程。当有用户连接了，就触发一个内部事件，通过非阻塞<code v-pre>I/O、事件驱动机制</code>，让 Node.js 程序宏观上也是并行的。使用 Node.js ，一个8GB内存的服务器，可以同时处理超过4万用户的连接。</p>
<p>另外，单线程带来的好处，操作系统完全不再有线程创建、销毁的时间开销。但是单线程也有很多弊端，会在 Node.js 的弊端详细讲解，请继续看。</p>
<h4 id="事件驱动" tabindex="-1"><a class="header-anchor" href="#事件驱动"><span>事件驱动</span></a></h4>
<p>在 <code v-pre>Node.js</code> 中，客户端请求建立连接，提交数据等行为，会触发相应的事件。在 <code v-pre>Node.js</code> 中，在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，又有其他事件产生，可以转而处理其他事件（比如，又有新用户连接了），然后返回继续执行原事件的回调函数，这种处理机制，称为“<strong>事件环</strong>”机制。</p>
<p><code v-pre>Node.js</code> 底层是 <code v-pre>C++</code>（<code v-pre>V8</code>也是C++写的）。底层代码中，近半数都用于事件队列、回调函数队列的构建。用事件驱动来完成服务器的任务调度，这是鬼才才能想到的。针尖上的舞蹈，用一个线程，担负起了处理非常多的任务的使命。</p>
<figure><img src="http://img.xiaogangzai.cn/16c1a5d709d285e7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意这里的事件循环，也可以说是 <code v-pre>Node.js</code> 的一个精髓所在，下面引用一段 <code v-pre>Node.js</code> 官网的内容</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   ┌───────────────────────────┐</span></span>
<span class="line"><span>┌─>│           timers          │</span></span>
<span class="line"><span>│  └─────────────┬─────────────┘</span></span>
<span class="line"><span>│  ┌─────────────┴─────────────┐</span></span>
<span class="line"><span>│  │     pending callbacks     │</span></span>
<span class="line"><span>│  └─────────────┬─────────────┘</span></span>
<span class="line"><span>│  ┌─────────────┴─────────────┐</span></span>
<span class="line"><span>│  │       idle, prepare       │</span></span>
<span class="line"><span>│  └─────────────┬─────────────┘      ┌───────────────┐</span></span>
<span class="line"><span>│  ┌─────────────┴─────────────┐      │   incoming:   │</span></span>
<span class="line"><span>│  │           poll            │&#x3C;─────┤  connections, │</span></span>
<span class="line"><span>│  └─────────────┬─────────────┘      │   data, etc.  │</span></span>
<span class="line"><span>│  ┌─────────────┴─────────────┐      └───────────────┘</span></span>
<span class="line"><span>│  │           check           │</span></span>
<span class="line"><span>│  └─────────────┬─────────────┘</span></span>
<span class="line"><span>│  ┌─────────────┴─────────────┐</span></span>
<span class="line"><span>└──┤      close callbacks      │</span></span>
<span class="line"><span>   └───────────────────────────┘</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用Node官网中的一段内容:</p>
<blockquote>
<p>注意：每个框将被称为事件循环的“阶段”。<br>
每个阶段都有一个要执行的回调<code v-pre>FIFO</code>队列。虽然每个阶段都以其自己的方式特殊，但通常情况下，当事件循环进入给定阶段时，它将执行特定于该阶段的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或最大回调数量为止已执行。当队列耗尽或达到回调限制时，事件循环将移至下一阶段，依此类推。<br>
关于事件循环是一个核心点，经常会被面试官考具体执行输出的问题，大家可以看我的这篇文章</p>
</blockquote>
<h4 id="跨平台" tabindex="-1"><a class="header-anchor" href="#跨平台"><span>跨平台</span></a></h4>
<p>起初，<code v-pre>Node</code> 只能在 <code v-pre>Linux</code> 平台上运行。后来随着 <code v-pre>Node</code>的发展，微软注意到了它的存在，并投入了一个团队帮助 <code v-pre>Node</code> 实现 <code v-pre>Windows</code> 平台的兼容，在<code v-pre>v0.6.0</code>版本发布时，<code v-pre>Node</code> 已经能够直接在 <code v-pre>Window</code> 平台运行了。 Node 是基于<code v-pre>libuv</code>实现跨平台的。</p>
<h2 id="node-js的弊端" tabindex="-1"><a class="header-anchor" href="#node-js的弊端"><span>Node.js的弊端</span></a></h2>
<h3 id="单线程带来的弊端" tabindex="-1"><a class="header-anchor" href="#单线程带来的弊端"><span>单线程带来的弊端</span></a></h3>
<p>Node.js中有一个特点就是单线程，它带来了很多好处，但是它也有弊端，单线程弱点如下。</p>
<ol>
<li>无法利用多核CPU</li>
<li>错误会引起整个应用退出无法继续调用异步<code v-pre>I/O</code></li>
<li>大量计算占用CPU导致无法继续调用异步<code v-pre>I/O</code></li>
</ol>
<p>以上确实是Node的弊端，但是都会有一些对应的解决方案：</p>
<p>弊端1:解决方案</p>
<ul>
<li>（1）一些管理工具比如<code v-pre>pm2，forever</code> 等都可以实现创建多进程解决多核 CUP 的利用率问题。</li>
<li>（2）在v0.8版本之前，实现多进程可以使用<code v-pre>child_process</code></li>
<li>（3）在v0.8版本之后，可以使用<code v-pre>cluster</code>模块，通过主从模式，创建多个工作进程解决多核CPU的利用率问题。</li>
</ul>
<p>弊端2:解决方案</p>
<ul>
<li>（1）Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；</li>
<li>（2） 一些管理工具比如<code v-pre>pm2，forever</code> 等都可以实现进程监控，错误自动重启等</li>
<li>（3）开多个进程监听同一个端口，使用Node提供的<code v-pre>cluster</code>模块；</li>
<li>（4）未出现<code v-pre>cluster</code>之前，也可以使用<code v-pre>child_process</code>,创建多子线程监听一个端口。</li>
<li>（5）这里说明下，有上面的这些解决方案，但是写node后端代码的时候，异常抛出<code v-pre>try catch</code>显得格外有必要。</li>
</ul>
<p>弊端3:解决方案</p>
<ul>
<li>（1）可以把大量的密集计算像上面一样拆分成多个子线程计算</li>
<li>但是如果不允许拆分，想计算100万的大数据，在一个单线程中，Node确实显得无能为力，这本身就是V8内存限制的弊端。</li>
</ul>
<blockquote>
<p>说明：child_process与cluster模块我会单独拿一篇文章来讲。<br>
值得开心的是上面这些弊端随着Node的版本更新，和新的api模块出现，好像解决了这些弊端。</p>
</blockquote>
<h3 id="调试" tabindex="-1"><a class="header-anchor" href="#调试"><span>调试</span></a></h3>
<p>用过<code v-pre>node</code>的人可能第一时间就会想到<code v-pre>debug</code>太难了，没有<code v-pre>stack trace</code>，因此调试比较困难。</p>
<h3 id="node社区中的npm包" tabindex="-1"><a class="header-anchor" href="#node社区中的npm包"><span>Node社区中的npm包</span></a></h3>
<p><code v-pre>Node.js</code>社区有很多包品质良莠不齐、如果你想偷懒而又刚好<code v-pre>npm</code>了一个有问题的包你就很麻烦，因为代码是开源的，只能自己调试了。</p>
<h2 id="node-js的应用场景" tabindex="-1"><a class="header-anchor" href="#node-js的应用场景"><span>Node.js的应用场景</span></a></h2>
<p>介绍了Node.js的特点和弊端，再说一下Node.js的应用场景。</p>
<p>Node.js适合用来开发什么样的应用程序呢？</p>
<p>善于<code v-pre>I/O</code>，不善于计算。因为<code v-pre>Node.js</code>最擅长的就是任务调度，如果你的业务有很多的 <code v-pre>CPU</code> 计算，实际上也相当于这个计算阻塞了这个单线程，就不太适合Node开发，但是也不是没有解决方案，只是说不太适合。</p>
<p>当应用程序需要处理大量并发的<code v-pre>I/O</code>，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，<code v-pre>Node.js</code>非常适合。<code v-pre>Node.js</code>也非常适合与<code v-pre>websocket</code>配合，开发长连接的实时交互应用程序。</p>
<p>具体场景可以表现为如下：</p>
<ul>
<li>
<p>第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序；</p>
</li>
<li>
<p>第二大类：基于web、canvas等多人联网游戏；</p>
</li>
<li>
<p>第三大类：基于web的多人实时聊天客户端、聊天室、图文直播；</p>
</li>
<li>
<p>第四大类：单页面浏览器应用程序；</p>
</li>
<li>
<p>第五大类：操作数据库、为前端和移动端提供基于<code v-pre>json</code>的API；</p>
</li>
<li>
<p>第六大类，....</p>
</li>
</ul>
<h2 id="哪些大公司在用" tabindex="-1"><a class="header-anchor" href="#哪些大公司在用"><span>哪些大公司在用</span></a></h2>
<ul>
<li>雅虎：雅虎开放了<code v-pre>Cooktail</code>框架，将<code v-pre>YUI3</code>这个前端框架的能力借助Node延伸到了服务器端。</li>
<li>腾讯：将Node应用到长连接，以提供实时功能。</li>
<li>花瓣网，蘑菇街：通过<code v-pre>socket.io</code>实现实时通知。</li>
<li>阿里：主要利用的是并行<code v-pre>I/O</code>这个性能，实现高效的分布式，它们自己也出了很多Node框架</li>
<li>LinkedIn：移动网站也是使用的Node</li>
<li>网易：游戏领域对并发和实时要求很高，网易开源了Node的实时框架<code v-pre>pomelo</code></li>
<li>等等...</li>
</ul>
<p>参考文章：本文部分内容来自朴灵老师的《深入浅出Node.js》</p>
<div class="hint-container warning">
<p class="hint-container-title">作者介绍</p>
<p>大家好，我是koala，在做一个一个Node.js高级进阶路线，今天就分享这么多，如果对分享的内容感兴趣，可以关注公众号<code v-pre>「程序员成长指北」</code>，或者加入技术交流群，大家一起讨论。</p>
</div>
</div></template>


