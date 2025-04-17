import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as a,o as t}from"./app-19odCU7c.js";const l={};function n(h,i){return t(),s("div",null,i[0]||(i[0]=[a(`<p>下面是一篇详细阐述 HTTP 协商缓存和强缓存的文章，包含概念介绍、原理解析以及示例代码，帮助你深入理解这两种缓存机制的作用和区别。</p><hr><h1 id="http-缓存机制-强缓存与协商缓存" tabindex="-1"><a class="header-anchor" href="#http-缓存机制-强缓存与协商缓存"><span>HTTP 缓存机制：强缓存与协商缓存</span></a></h1><p>在 Web 开发中，HTTP 缓存机制用于减少客户端与服务器之间的数据传输，提高页面加载速度和用户体验。HTTP 缓存主要分为两大类：<strong>强缓存</strong>和<strong>协商缓存</strong>。本文将详细介绍这两种缓存机制的原理、使用场景及其实现方式。</p><hr><h2 id="一、强缓存-fresh-cache" tabindex="-1"><a class="header-anchor" href="#一、强缓存-fresh-cache"><span>一、强缓存（Fresh Cache）</span></a></h2><h3 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念"><span>1.1 概念</span></a></h3><p><strong>强缓存</strong>（又称“绝对缓存”）指的是浏览器在缓存有效期内直接使用本地缓存资源，而不向服务器发起请求。这种方式能大大加快页面加载速度，因为资源不需要重新下载。</p><h3 id="_1-2-主要响应头" tabindex="-1"><a class="header-anchor" href="#_1-2-主要响应头"><span>1.2 主要响应头</span></a></h3><ul><li><p><strong>Expires</strong><br> 指定资源过期的绝对时间。示例：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Expires</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Wed, 21 Oct 2025 07:28:00 GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>浏览器会比较当前时间和 Expires 值，如果当前时间早于 Expires，则直接使用缓存。</p></li><li><p><strong>Cache-Control</strong><br> 更灵活的缓存控制方式，常用的指令包括：</p><ul><li><code>max-age</code>：资源在缓存中的有效期（单位为秒）。</li><li><code>public</code> / <code>private</code>：指定资源可否被中间缓存服务器缓存。</li><li><code>no-cache</code> / <code>no-store</code>：指示不使用缓存或不存储缓存。</li></ul><p>示例：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Cache-Control</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> max-age=3600, public</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这表示资源在 3600 秒内有效，且可以被共享缓存存储。</p></li></ul><h3 id="_1-3-优点与缺点" tabindex="-1"><a class="header-anchor" href="#_1-3-优点与缺点"><span>1.3 优点与缺点</span></a></h3><p><strong>优点：</strong></p><ul><li>响应速度快，完全由本地缓存读取资源，无网络请求。</li><li>减轻服务器负载，节省带宽。</li></ul><p><strong>缺点：</strong></p><ul><li>更新不及时：如果资源更新但缓存未过期，用户可能会看到旧资源。</li><li>配置不当可能导致缓存污染或安全问题。</li></ul><hr><h2 id="二、协商缓存-conditional-request-cache" tabindex="-1"><a class="header-anchor" href="#二、协商缓存-conditional-request-cache"><span>二、协商缓存（Conditional Request Cache）</span></a></h2><h3 id="_2-1-概念" tabindex="-1"><a class="header-anchor" href="#_2-1-概念"><span>2.1 概念</span></a></h3><p><strong>协商缓存</strong>是在浏览器缓存失效后，通过与服务器进行条件性请求来判断资源是否发生变化。如果资源未更新，服务器返回 304 状态码，告知浏览器继续使用缓存；否则返回新的资源内容。协商缓存虽然需要发起请求，但传输数据量极小（仅返回 304 响应头），因此依然能提升性能。</p><h3 id="_2-2-主要响应头与请求头" tabindex="-1"><a class="header-anchor" href="#_2-2-主要响应头与请求头"><span>2.2 主要响应头与请求头</span></a></h3><ul><li><p><strong>Last-Modified / If-Modified-Since</strong></p><ul><li><p><strong>Last-Modified</strong>：服务器响应头，表示资源最后一次修改时间。</p><p>示例：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Last-Modified</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Wed, 21 Oct 2020 07:28:00 GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>If-Modified-Since</strong>：浏览器请求头，携带上次缓存的修改时间，服务器比较后决定是否返回新资源。</p><p>示例：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">If-Modified-Since</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Wed, 21 Oct 2020 07:28:00 GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>ETag / If-None-Match</strong></p><ul><li><p><strong>ETag</strong>：服务器响应头，为资源生成的唯一标识（通常基于内容哈希）。</p><p>示例：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ETag</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;5d8c72a5edda3e7a-1&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>If-None-Match</strong>：浏览器请求头，携带上次缓存的 ETag，服务器比较后决定是否返回新资源。</p><p>示例：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">If-None-Match</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;5d8c72a5edda3e7a-1&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_2-3-协商缓存流程" tabindex="-1"><a class="header-anchor" href="#_2-3-协商缓存流程"><span>2.3 协商缓存流程</span></a></h3><ol><li><p><strong>首次请求</strong><br> 浏览器请求资源，服务器返回资源以及 <code>Last-Modified</code>/<code>ETag</code> 等缓存标识，同时可以配合强缓存头。</p></li><li><p><strong>后续请求</strong><br> 浏览器向服务器发送条件请求，请求头中包含 <code>If-Modified-Since</code> 或 <code>If-None-Match</code>。</p><ul><li>如果服务器判断资源未更改，则返回 304 状态码，不返回资源体。</li><li>如果资源已更改，则返回新的资源和更新后的缓存标识。</li></ul></li></ol><h3 id="_2-4-优点与缺点" tabindex="-1"><a class="header-anchor" href="#_2-4-优点与缺点"><span>2.4 优点与缺点</span></a></h3><p><strong>优点：</strong></p><ul><li>保证资源最新：即使缓存未过期，服务器也能通过条件请求判断资源是否更新。</li><li>节省带宽：304 响应体为空，传输的数据量非常小。</li></ul><p><strong>缺点：</strong></p><ul><li>需要发起网络请求，虽然数据量小但仍有一定延迟。</li><li>服务器需要额外逻辑支持条件判断。</li></ul><hr><h2 id="三、加载顺序与缓存的优化策略" tabindex="-1"><a class="header-anchor" href="#三、加载顺序与缓存的优化策略"><span>三、加载顺序与缓存的优化策略</span></a></h2><p>在实际项目中，我们可以通过以下策略来优化加载性能：</p><ol><li><p><strong>合理配置缓存响应头</strong></p><ul><li>对于不经常更新的资源（如图片、静态文件），可以使用强缓存（设置长的 <code>max-age</code> 或合适的 <code>Expires</code>）。</li><li>对于经常更新但不希望用户频繁下载的资源（如 JavaScript、CSS），使用协商缓存，通过 ETag 或 Last-Modified 来判断资源是否更新。</li></ul></li><li><p><strong>版本管理</strong></p><ul><li>在资源 URL 中加入版本号（如 <code>app.v1.js</code>），当资源更新时改变 URL，从而强制浏览器重新加载资源。</li></ul></li><li><p><strong>CDN 加速</strong></p><ul><li>将静态资源托管在 CDN 上，不仅能享受缓存机制，还能通过地理位置加速访问。</li></ul></li><li><p><strong>压缩与合并</strong></p><ul><li>对 CSS、JavaScript 进行压缩和合并，减少 HTTP 请求数量和资源体积，进一步提高加载速度。</li></ul></li></ol><hr><h2 id="四、实际示例" tabindex="-1"><a class="header-anchor" href="#四、实际示例"><span>四、实际示例</span></a></h2><h3 id="_4-1-强缓存配置示例-服务器端配置" tabindex="-1"><a class="header-anchor" href="#_4-1-强缓存配置示例-服务器端配置"><span>4.1 强缓存配置示例（服务器端配置）</span></a></h3><p>以 Nginx 为例，配置静态资源的强缓存：</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /static/ {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    expires </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置缓存时间为 1 天</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    add_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Cache-Control </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;public&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-协商缓存配置示例-服务器端配置" tabindex="-1"><a class="header-anchor" href="#_4-2-协商缓存配置示例-服务器端配置"><span>4.2 协商缓存配置示例（服务器端配置）</span></a></h3><p>同样以 Nginx 为例，配置 ETag 机制（通常默认开启）：</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /api/ {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    etag </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if_modified_since </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">exact;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端，条件请求自动由浏览器发起，无需额外配置。</p><hr><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结"><span>五、总结</span></a></h2><p>HTTP 缓存机制通过强缓存和协商缓存两种方式，帮助我们大幅提升页面加载速度和用户体验。</p><ul><li><strong>强缓存</strong>：在缓存有效期内直接使用本地资源，不发起网络请求，但资源更新不及时。</li><li><strong>协商缓存</strong>：在缓存过期后发起条件请求，通过 304 响应判断是否更新，保证了资源的实时性，同时减少数据传输量。</li></ul><p>在实际开发中，合理利用这两种机制，结合版本管理、CDN 加速和资源压缩，可以有效降低服务器压力和用户等待时间，打造高性能的 Web 应用。</p>`,46)]))}const p=e(l,[["render",n]]),o=JSON.parse('{"path":"/posts/render/http.html","title":"强缓存与协商缓存","lang":"zh-CN","frontmatter":{"title":"强缓存与协商缓存","tags":["Javascript","面试题"],"description":"下面是一篇详细阐述 HTTP 协商缓存和强缓存的文章，包含概念介绍、原理解析以及示例代码，帮助你深入理解这两种缓存机制的作用和区别。 HTTP 缓存机制：强缓存与协商缓存 在 Web 开发中，HTTP 缓存机制用于减少客户端与服务器之间的数据传输，提高页面加载速度和用户体验。HTTP 缓存主要分为两大类：强缓存和协商缓存。本文将详细介绍这两种缓存机制的...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zy-vuepress/posts/render/http.html"}],["meta",{"property":"og:site_name","content":"我的基地"}],["meta",{"property":"og:title","content":"强缓存与协商缓存"}],["meta",{"property":"og:description","content":"下面是一篇详细阐述 HTTP 协商缓存和强缓存的文章，包含概念介绍、原理解析以及示例代码，帮助你深入理解这两种缓存机制的作用和区别。 HTTP 缓存机制：强缓存与协商缓存 在 Web 开发中，HTTP 缓存机制用于减少客户端与服务器之间的数据传输，提高页面加载速度和用户体验。HTTP 缓存主要分为两大类：强缓存和协商缓存。本文将详细介绍这两种缓存机制的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T11:30:46.000Z"}],["meta",{"property":"article:tag","content":"Javascript"}],["meta",{"property":"article:tag","content":"面试题"}],["meta",{"property":"article:modified_time","content":"2025-03-18T11:30:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"强缓存与协商缓存\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-18T11:30:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mrs.Zoe\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、强缓存（Fresh Cache）","slug":"一、强缓存-fresh-cache","link":"#一、强缓存-fresh-cache","children":[{"level":3,"title":"1.1 概念","slug":"_1-1-概念","link":"#_1-1-概念","children":[]},{"level":3,"title":"1.2 主要响应头","slug":"_1-2-主要响应头","link":"#_1-2-主要响应头","children":[]},{"level":3,"title":"1.3 优点与缺点","slug":"_1-3-优点与缺点","link":"#_1-3-优点与缺点","children":[]}]},{"level":2,"title":"二、协商缓存（Conditional Request Cache）","slug":"二、协商缓存-conditional-request-cache","link":"#二、协商缓存-conditional-request-cache","children":[{"level":3,"title":"2.1 概念","slug":"_2-1-概念","link":"#_2-1-概念","children":[]},{"level":3,"title":"2.2 主要响应头与请求头","slug":"_2-2-主要响应头与请求头","link":"#_2-2-主要响应头与请求头","children":[]},{"level":3,"title":"2.3 协商缓存流程","slug":"_2-3-协商缓存流程","link":"#_2-3-协商缓存流程","children":[]},{"level":3,"title":"2.4 优点与缺点","slug":"_2-4-优点与缺点","link":"#_2-4-优点与缺点","children":[]}]},{"level":2,"title":"三、加载顺序与缓存的优化策略","slug":"三、加载顺序与缓存的优化策略","link":"#三、加载顺序与缓存的优化策略","children":[]},{"level":2,"title":"四、实际示例","slug":"四、实际示例","link":"#四、实际示例","children":[{"level":3,"title":"4.1 强缓存配置示例（服务器端配置）","slug":"_4-1-强缓存配置示例-服务器端配置","link":"#_4-1-强缓存配置示例-服务器端配置","children":[]},{"level":3,"title":"4.2 协商缓存配置示例（服务器端配置）","slug":"_4-2-协商缓存配置示例-服务器端配置","link":"#_4-2-协商缓存配置示例-服务器端配置","children":[]}]},{"level":2,"title":"五、总结","slug":"五、总结","link":"#五、总结","children":[]}],"git":{"createdTime":1741938777000,"updatedTime":1742297446000,"contributors":[{"name":"zy","username":"zy","email":"891374900@qq.com","commits":2,"url":"https://github.com/zy"}]},"readingTime":{"minutes":5.12,"words":1535},"filePathRelative":"posts/render/http.md","localizedDate":"2025年3月14日","excerpt":"<p>下面是一篇详细阐述 HTTP 协商缓存和强缓存的文章，包含概念介绍、原理解析以及示例代码，帮助你深入理解这两种缓存机制的作用和区别。</p>\\n<hr>\\n<h1>HTTP 缓存机制：强缓存与协商缓存</h1>\\n<p>在 Web 开发中，HTTP 缓存机制用于减少客户端与服务器之间的数据传输，提高页面加载速度和用户体验。HTTP 缓存主要分为两大类：<strong>强缓存</strong>和<strong>协商缓存</strong>。本文将详细介绍这两种缓存机制的原理、使用场景及其实现方式。</p>\\n<hr>\\n<h2>一、强缓存（Fresh Cache）</h2>\\n<h3>1.1 概念</h3>","autoDesc":true}');export{p as comp,o as data};
