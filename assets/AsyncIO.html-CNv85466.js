import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as o,e as s,d as t,w as l,r,o as d,f as n}from"./app-19odCU7c.js";const c={},u={class:"table-of-contents"};function g(h,e){const i=r("router-link");return d(),p("div",null,[o("nav",u,[o("ul",null,[o("li",null,[t(i,{to:"#理解本文先要学习的几个概念"},{default:l(()=>e[0]||(e[0]=[n("理解本文先要学习的几个概念")])),_:1}),o("ul",null,[o("li",null,[t(i,{to:"#node-js-模块分类"},{default:l(()=>e[1]||(e[1]=[n("Node.js 模块分类")])),_:1})]),o("li",null,[t(i,{to:"#libuv"},{default:l(()=>e[2]||(e[2]=[n("libuv")])),_:1})]),o("li",null,[t(i,{to:"#iocp"},{default:l(()=>e[3]||(e[3]=[n("IOCP")])),_:1})]),o("li",null,[t(i,{to:"#线程池"},{default:l(()=>e[4]||(e[4]=[n("线程池")])),_:1})])])]),o("li",null,[t(i,{to:"#node-与底层之间的异步i-o调用流程"},{default:l(()=>e[5]||(e[5]=[n("Node 与底层之间的异步I/O调用流程")])),_:1}),o("ul",null,[o("li",null,[t(i,{to:"#事件循环"},{default:l(()=>e[6]||(e[6]=[n("事件循环")])),_:1})]),o("li",null,[t(i,{to:"#底层调用与事件产生"},{default:l(()=>e[7]||(e[7]=[n("底层调用与事件产生")])),_:1})])])]),o("li",null,[t(i,{to:"#异步-i-o-助力-node-js-高性能"},{default:l(()=>e[8]||(e[8]=[n("异步 I/O 助力 Node.js 高性能")])),_:1})]),o("li",null,[t(i,{to:"#参考"},{default:l(()=>e[9]||(e[9]=[n("参考")])),_:1})])])]),e[10]||(e[10]=s('<p>本文你能学到：</p><ul><li>Node.js 与底层之间是如何执行异步I/O调用的？和事件循环怎么联系上的呢？</li><li>为什么说 Node 高性能，Node 的异步I/O 对高性能助力了什么？</li><li>Node 的事件循环，你对事件怎么理解？</li></ul><blockquote><p>看完本文后，你应该能更好的去理解事件循环，知道事件是怎么来的，Node 究竟执行异步I/O调用。如果面试官再问事件循环还有Node与底层之间如何执行异步I/O，我觉得你把本文的流程说清楚，应该能加分！本文对事件循环中的具体步骤没有详细讲解，每个步骤看官方文档更佳。</p></blockquote><h2 id="理解本文先要学习的几个概念" tabindex="-1"><a class="header-anchor" href="#理解本文先要学习的几个概念"><span>理解本文先要学习的几个概念</span></a></h2><h3 id="node-js-模块分类" tabindex="-1"><a class="header-anchor" href="#node-js-模块分类"><span>Node.js 模块分类</span></a></h3><p>nodejs模块可以分为下面三类：</p><ul><li>核心模块(native模块)：包含在 Node.js 源码中，被编译进 Node.js 可执行二进制文件 JavaScript 模块，其实也就是lib和deps目录下的js文件，比如常用的http,fs等等。</li><li>内建模块(built-in模块)：一般我们不直接调用，而是在 native 模块中调用，然后我们再require。</li><li>第三方模块：非 Node.js 源码自带的模块都可以统称第三方模块，比如 express，webpack 等等。 <ul><li>JavaScript 模块，这是最常见的，我们开发的时候一般都写的是 JavaScript 模块</li><li>JSON 模块，这个很简单，就是一个 JSON 文件</li><li>C/C++ 扩展模块，使用 C/C++ 编写，编译之后后缀名为 .node</li></ul></li></ul><p>比如 Node 源码lib目录下的 fs.js 就是 native 模块，而fs.js调用的 src 目录下的 node_fs.cc 就是内建模块。</p><h3 id="libuv" tabindex="-1"><a class="header-anchor" href="#libuv"><span>libuv</span></a></h3><p>Libuv是一个高性能的，事件驱动的异步I/O库，它本身是由C语言编写的，具有很高的可移植性。libuv封装了不同平台底层对于异步IO模型的实现，libuv 的 API 包含有时间，非阻塞的网络，异步文件操作，子进程等等，所以它还本身具备着Windows, Linux都可使用的跨平台能力。</p><p>经典libuv图(来源网上)</p><figure><img src="http://img.xiaogangzai.cn/AsyncIO_20200718_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="iocp" tabindex="-1"><a class="header-anchor" href="#iocp"><span>IOCP</span></a></h3><p>概念:输入输出完成端口（Input/Output Completion Port，IOCP）, 是支持多个同时发生的异步I/O操作的应用程序编程接口，在Windows NT的3.5版本以后，或AIX5版以后或Solaris第十版以后，开始支持。</p><p>我直接这么说概念你可能也不太懂。可以暂时知道 Windows 下注意通过 IOCP 来向系统内核发送 I/O 调用和从内核获取已完成的 I/O 操作，配以事件循环，完成异步I/O的过程。在 linux 下通过 epoll 实现这个过程，也就是由 libuv 自行实现。</p><p>IOCP 的另一个应用场景在之前Node.js进程与线程那篇文章也有写过。Mater 和 app worker 进程通信使用到。</p><h3 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池"><span>线程池</span></a></h3><p>线程池，是一种线程的使用模式，它为了降低线程使用中频繁的创建和销毁所带来的资源消耗与代价。<br> 通过创建一定数量的线程，让他们时刻准备就绪等待新任务的到达，而任务执行结束之后再重新回来继续待命。</p><p>这就是线程池最核心的设计思路，「复用线程，平摊线程的创建与销毁的开销代价」。</p><p>本文使用到线程池的地方:在 Node 中，无论是 *nix 还是 Window 平台。内部完成 I/O 任务的都有用到线程池。</p><p>libuv 目前使用了一个全局的线程池，所有的循环都可以往其中加入任务。目前有三种操作会在这个线程池中执行：</p><ul><li><p>文件系统操作</p></li><li><p>DNS 函数（getaddrinfo 和 getnameinfo）</p></li><li><p>通过 uv_queue_work() 添加的用户代码</p></li></ul><h2 id="node-与底层之间的异步i-o调用流程" tabindex="-1"><a class="header-anchor" href="#node-与底层之间的异步i-o调用流程"><span>Node 与底层之间的<strong>异步I/O</strong>调用流程</span></a></h2><p>对比图中两段经典api代码(<code>server.listen</code>和<code>fs.open</code>，选择两种api的原因：网络 I/O 代表和文件 I/O 代表)和之前 libuv 图片，我们来一起理解异步I/O调用流程</p><p><img src="http://img.xiaogangzai.cn/AsyncIO_20200718_2.jpg" alt="" loading="lazy"><br> 上图展示了libuv细节的流程，图中代码很简单，包括2个部分：</p><ol><li><p>server.listen() 是用来创建 TCP server 时，通常放在最后一步执行的代码。主要指定服务器工作的端口以及回调函数。</p></li><li><p>fs.open() 是用异步的方式打开一个文件。</p></li></ol><p>选择两个示例很简单，因为 libuv 架构图可视：libuv 对 Network I/O和 File I/O 采用不同的机制。</p><p>上图右半部分，主要分成两个部分：</p><ol><li><p>主线程：主线程也是 node 启动时执行的现成。node 启动时，会完成一系列的初始化动作，启动 V8 engine，进入下一个循环。</p></li><li><p>线程池：线程池的数量可以通过环境变量 UV_THREADPOOL_SIZE 配置，最大不超过 128 个，默认为 4 个。</p></li></ol><blockquote><p><strong>在Node.js 中经典的代码调用方式：都是从 JavaScript 调用 Node 核心模块，核心模块调用 C++ 内建模块，内建模块通过 libuv 进行系统调用。请记住这段话</strong></p></blockquote><h3 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环"><span>事件循环</span></a></h3><p>不管是<code>server.listen</code>还是<code>fs.open</code>，他们在开启一个 node 服务(进程)的时候，Node会创建一个while(true)的循环，这个循环就是事件循环。每执行一次循环体的过程，我们称之为Tick。每个Tick的过程就是<strong>查看是否有事件待处理</strong>，如果有，就取出事件及其相关的回调函数。如果存在关联的回调函数，就执行。然后进入下一个循环，如果不再有事件处理，退出进程。</p><figure><img src="http://img.xiaogangzai.cn/AsyncIO_20200718_3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里我们知道事件循环已经创建了，上面加粗字体查看<strong>是否有事件待处理，去哪里查看？事件怎么进入事件循环的？什么情况会产生事件继续往下看</strong>。</p><h3 id="底层调用与事件产生" tabindex="-1"><a class="header-anchor" href="#底层调用与事件产生"><span>底层调用与事件产生</span></a></h3><figure><img src="http://img.xiaogangzai.cn/AsyncIO_20200718_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>继续看这张图，讲解一下事件产生基本流程，（注意网络I/O和文件I/O会有一些不同）这里对c++代码调用简单提一下，有兴趣的小伙伴可以继续深入研究。</p><h4 id="file-i-o" tabindex="-1"><a class="header-anchor" href="#file-i-o"><span>File I/O</span></a></h4><p>（这里就用到了文初提到的模块分类知识）先是 javascript 代码，然后调用 <code>lib/fs.js</code> 核心模块代码 <code>fs.open</code> ，核心模块调用 C++ 内建模块 <code>src/node_file.cc</code>，内建模块c++代码会有一个平台判断，然后通过 libuv 进行系统调用。</p><p>从前面到达 libuv ，会有一个参数，<strong>请求对象</strong>，也就是open函数前面整个流程传递进来的请求对象，它保存了所有状态，包括送入线程池等待执行以及I/O操作完毕后的回调处理。</p><p>请求对象组装完成后，送入 libuv 中创建的 I/O 线程池，线程池中的 I/O 操作完毕后，会将获取的结果存储到 req-&gt;result 属性上，然后通知某函数通知 <strong>IOCP</strong> ，告知当前对象操作已经完成。</p><p>在这整个过程中，进程初期创建的事件循环中有一个 I/O 观察者，每次 Tick 的执行中，它会调用 IOCP 相关的方法检查线程池中是否有执行完成的请求，如果存在，会讲请求对象和之前绑定的 result 属性，加入到 I/O 观察者的队列中，然后将其当作事件处理。</p><blockquote><p>看到这里，前面提到的**是否有事件待处理，去哪里查看？事件怎么进入事件循环的？**这两个问题是不是搞懂了。</p></blockquote><p>文字配上图。更清晰！<br><img src="http://img.xiaogangzai.cn/AsyncIO_20200718_5.jpg" alt="" loading="lazy"></p><h4 id="network-i-o" tabindex="-1"><a class="header-anchor" href="#network-i-o"><span>Network I/O</span></a></h4><p>V8 engine 执行从 <code>server.listen()</code> 开始，调用 <code>builtin module Tcp_wrap</code> 的过程。</p><p>在创建TCP链接的过程中，libuv直接参与<code>Tcp_wrap.cc</code>函数中的 <code>TCPWrap::listen()</code> 调用uv_listen()开始到执行<code>uv_io_start()</code>结束。看起来很短暂的过程，其实是类似linux kernel的中断处理机制。</p><p><code>uv_io_start()</code>负载将 handle 插入到处理的<code>water queue</code>中。这样的好处是请求能够立即得到处理。中断处理机制里面的下半部分与数据处理操作相似，交由主线程去完成处理。</p><blockquote><p>重要：虽然 libuv 的异步文件 I/O 操作是通过线程池实现的，但是网络 I/O 总是在单线程中执行的，注意最后还是会把完成的内容作为事件加入事件循环，事件循环就和文件I/O相同了。</p></blockquote><h2 id="异步-i-o-助力-node-js-高性能" tabindex="-1"><a class="header-anchor" href="#异步-i-o-助力-node-js-高性能"><span>异步 I/O 助力 Node.js 高性能</span></a></h2><p>传统的服务器模型</p><ul><li>同步式: 同步的服务，一次只能处理一个请求，并且其余请求都处于等待状态。</li><li>每进程/每请求: 为每个请求启动一个进程，这样可以处理多个请求，但是不具有扩展性，系统资源有限，开启太多进程不太合适</li><li>每线程/每请求: 为每个请求启动一个线程来处理。尽管线程比进程轻量，但是每个线程也都会占用一定内存，当大并发请求的时候，也会占用很大内存，导致服务器缓慢。</li></ul><p><strong>Node就不一样了！</strong></p><p>看了文章前面的内容，Node 通过事件驱动的方式处理请求，无需为每个请求创建额外的对应线程，可以省掉<strong>创建线程和销毁线程</strong>的开销，同时操作系统在调度任务时因为线程较少，<strong>上下文切换</strong>的代价很低。这也是 Node.js 高性能之一</p><blockquote><p>Nginx 目前也采用了和 Node 相同的事件驱动方式，有兴趣的也去了解下，不过 Nginx 采用 c 语言编写。</p></blockquote><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p>本文很多内容来自朴灵老师的 《深入浅出Node.js》，这本书虽然出版很久了，给我的感觉还是越看越香,自己可以边看边扩展，推荐。</p><p>Libuv学习——文件处理<br><a href="https://zhuanlan.zhihu.com/p/97789391" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/97789391</a></p><p>高性能异步 I/O 模型库 libuv 设计思路概述<br><a href="https://blog.csdn.net/ababab12345/article/details/103951026" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/ababab12345/article/details/103951026</a></p>',59))])}const I=a(c,[["render",g]]),m=JSON.parse('{"path":"/others/node/AsyncIO.html","title":"Node 与底层之间如何执行异步 I/O 调用","lang":"zh-CN","frontmatter":{"title":"Node 与底层之间如何执行异步 I/O 调用","date":"2020-01-09T00:00:00.000Z","tags":["Node.js","异步I/O"],"description":"本文你能学到： Node.js 与底层之间是如何执行异步I/O调用的？和事件循环怎么联系上的呢？ 为什么说 Node 高性能，Node 的异步I/O 对高性能助力了什么？ Node 的事件循环，你对事件怎么理解？ 看完本文后，你应该能更好的去理解事件循环，知道事件是怎么来的，Node 究竟执行异步I/O调用。如果面试官再问事件循环还有Node与底层之间...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zy-vuepress/others/node/AsyncIO.html"}],["meta",{"property":"og:site_name","content":"我的基地"}],["meta",{"property":"og:title","content":"Node 与底层之间如何执行异步 I/O 调用"}],["meta",{"property":"og:description","content":"本文你能学到： Node.js 与底层之间是如何执行异步I/O调用的？和事件循环怎么联系上的呢？ 为什么说 Node 高性能，Node 的异步I/O 对高性能助力了什么？ Node 的事件循环，你对事件怎么理解？ 看完本文后，你应该能更好的去理解事件循环，知道事件是怎么来的，Node 究竟执行异步I/O调用。如果面试官再问事件循环还有Node与底层之间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://img.xiaogangzai.cn/AsyncIO_20200718_1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-14T07:40:59.000Z"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"异步I/O"}],["meta",{"property":"article:published_time","content":"2020-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-14T07:40:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node 与底层之间如何执行异步 I/O 调用\\",\\"image\\":[\\"http://img.xiaogangzai.cn/AsyncIO_20200718_1.jpg\\",\\"http://img.xiaogangzai.cn/AsyncIO_20200718_2.jpg\\",\\"http://img.xiaogangzai.cn/AsyncIO_20200718_3.jpg\\",\\"http://img.xiaogangzai.cn/AsyncIO_20200718_2.jpg\\",\\"http://img.xiaogangzai.cn/AsyncIO_20200718_5.jpg\\"],\\"datePublished\\":\\"2020-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-14T07:40:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mrs.Zoe\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"理解本文先要学习的几个概念","slug":"理解本文先要学习的几个概念","link":"#理解本文先要学习的几个概念","children":[{"level":3,"title":"Node.js 模块分类","slug":"node-js-模块分类","link":"#node-js-模块分类","children":[]},{"level":3,"title":"libuv","slug":"libuv","link":"#libuv","children":[]},{"level":3,"title":"IOCP","slug":"iocp","link":"#iocp","children":[]},{"level":3,"title":"线程池","slug":"线程池","link":"#线程池","children":[]}]},{"level":2,"title":"Node 与底层之间的异步I/O调用流程","slug":"node-与底层之间的异步i-o调用流程","link":"#node-与底层之间的异步i-o调用流程","children":[{"level":3,"title":"事件循环","slug":"事件循环","link":"#事件循环","children":[]},{"level":3,"title":"底层调用与事件产生","slug":"底层调用与事件产生","link":"#底层调用与事件产生","children":[]}]},{"level":2,"title":"异步 I/O 助力 Node.js 高性能","slug":"异步-i-o-助力-node-js-高性能","link":"#异步-i-o-助力-node-js-高性能","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1739514870000,"updatedTime":1741938059000,"contributors":[{"name":"zy","username":"zy","email":"891374900@qq.com","commits":3,"url":"https://github.com/zy"}]},"readingTime":{"minutes":8.43,"words":2528},"filePathRelative":"others/node/AsyncIO.md","localizedDate":"2020年1月9日","excerpt":"\\n<p>本文你能学到：</p>\\n<ul>\\n<li>Node.js 与底层之间是如何执行异步I/O调用的？和事件循环怎么联系上的呢？</li>\\n<li>为什么说 Node 高性能，Node 的异步I/O 对高性能助力了什么？</li>\\n<li>Node 的事件循环，你对事件怎么理解？</li>\\n</ul>\\n<blockquote>\\n<p>看完本文后，你应该能更好的去理解事件循环，知道事件是怎么来的，Node 究竟执行异步I/O调用。如果面试官再问事件循环还有Node与底层之间如何执行异步I/O，我觉得你把本文的流程说清楚，应该能加分！本文对事件循环中的具体步骤没有详细讲解，每个步骤看官方文档更佳。</p>\\n</blockquote>","autoDesc":true}');export{I as comp,m as data};
