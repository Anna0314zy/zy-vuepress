import comp from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/blog/src/.vuepress/.temp/pages/posts/posts copy/node-quick/linkedList.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts%20copy/node-quick/linkedList.html\",\"title\":\"什么是链表(LinkedList)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"什么是链表(LinkedList)\",\"date\":\"2019-01-06T00:00:00.000Z\",\"tags\":[\"Node.js\"],\"gitInclude\":[],\"description\":\"什么是链表(LinkedList)? 链表实际上是线性表的链式存储结构。 一.单向链表 各个节点数据通过指针的方法串联起来,构成链表。（单向指针） 实现单向链表 二.链表的反转 (1)递归实现 (2)循环实现 三.单向循环链表 四.双向链表 五.双向循环链表 六.环形链表\"},\"headers\":[{\"level\":2,\"title\":\"一.单向链表\",\"slug\":\"一-单向链表\",\"link\":\"#一-单向链表\",\"children\":[{\"level\":3,\"title\":\"实现单向链表\",\"slug\":\"实现单向链表\",\"link\":\"#实现单向链表\",\"children\":[]}]},{\"level\":2,\"title\":\"二.链表的反转\",\"slug\":\"二-链表的反转\",\"link\":\"#二-链表的反转\",\"children\":[{\"level\":3,\"title\":\"(1)递归实现\",\"slug\":\"_1-递归实现\",\"link\":\"#_1-递归实现\",\"children\":[]},{\"level\":3,\"title\":\"(2)循环实现\",\"slug\":\"_2-循环实现\",\"link\":\"#_2-循环实现\",\"children\":[]}]},{\"level\":2,\"title\":\"三.单向循环链表\",\"slug\":\"三-单向循环链表\",\"link\":\"#三-单向循环链表\",\"children\":[]},{\"level\":2,\"title\":\"四.双向链表\",\"slug\":\"四-双向链表\",\"link\":\"#四-双向链表\",\"children\":[]},{\"level\":2,\"title\":\"五.双向循环链表\",\"slug\":\"五-双向循环链表\",\"link\":\"#五-双向循环链表\",\"children\":[]},{\"level\":2,\"title\":\"六.环形链表\",\"slug\":\"六-环形链表\",\"link\":\"#六-环形链表\",\"children\":[]}],\"readingTime\":{\"minutes\":2.94,\"words\":883},\"filePathRelative\":\"posts/posts copy/node-quick/linkedList.md\",\"localizedDate\":\"2019年1月6日\",\"excerpt\":\"\\n<p>链表实际上是线性表的链式存储结构。</p>\\n<h2>一.单向链表</h2>\\n<p>各个节点数据通过指针的方法串联起来,构成链表。（单向指针）</p>\\n<h3>实现单向链表</h3>\\n<figure><figcaption></figcaption></figure>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">class</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> Node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    constructor</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">element</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">/**</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * add(index,element)  指定索引添加元素 </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * add(element)  直接添加元素</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * get(index)  获取指定索引元素</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * set(index,element) 修改指定索引节点内容</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * remove(index) 删除指定索引节点</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * clear() 清空链表 </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> * </span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"> */</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">class</span><span style=\\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\\"> LinkedList</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">    constructor</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> null</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    _node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &lt;</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ||</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &gt;=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">throw</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Error</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'越界'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> current</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        for</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &lt;</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">; </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">i</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">            current</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> current</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> current</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    add</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">arguments</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">length</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">            element</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">            index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &lt;</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ||</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &gt;</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">throw</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Error</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'越界'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">            let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> head</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">            this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        } </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">else</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">            let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> prevNode</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">_node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> -</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">            prevNode</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">prevNode</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\">++</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    get</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        return</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">_node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    set</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">, </span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> node</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">_node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">        node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">element</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> element</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        return</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    remove</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\\">index</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &lt;</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ||</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> &gt;=</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) </span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">throw</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Error</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">'越界'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">        if</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> (</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> ===</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">) {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">            this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">head</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">else</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">            let</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> prevNode</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\"> this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">_node</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">index</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> -</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 1</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">            prevNode</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\"> prevNode</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">next</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">        }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> --</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">    clear</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">() {</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">size</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> 0</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\\">        this</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">head</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> null</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">    }</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
