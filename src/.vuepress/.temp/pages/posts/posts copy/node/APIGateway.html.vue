<template><div><blockquote>
<p>原文：Building an API Gateway using Node.js</p>
<p>地址：<a href="https://blog.risingstack.com/building-an-api-gateway-using-nodejs/" target="_blank" rel="noopener noreferrer">https://blog.risingstack.com/building-an-api-gateway-using-nodejs/</a></p>
</blockquote>
<h1 id="node-学习笔记" tabindex="-1"><a class="header-anchor" href="#node-学习笔记"><span>node 学习笔记</span></a></h1>
<p>外部客户端访问微服务架构中的服务时，服务端会对认证和传输有一些常见的要求。API 网关提供共享层来处理服务协议之间的差异，并满足特定客户端（如桌面浏览器、移动设备和老系统）的要求。</p>
<h2 id="微服务和消费者" tabindex="-1"><a class="header-anchor" href="#微服务和消费者"><span>微服务和消费者</span></a></h2>
<p>微服务是面向服务的架构，团队可以独立设计、开发和发布应用程序。它允许在系统各个层面上的技术多样性，团队可以在给定的技术难题中使用最佳语言、数据库、协议和传输层，从而受益。例如，一个团队可以使用 <code v-pre>HTTP REST</code> 上的 JSON，而另一个团队可以使用 <code v-pre>HTTP/2</code> 上的 gRPC 或 RabbitMQ 等消息代理。</p>
<p>在某些情况下使用不同的数据序列化和协议可能是强大的，但要使用我们的产品的客户可能有不同的需求。该问题也可能发生在具有同质技术栈的系统中，因为客户可以从桌面浏览器通过移动设备和游戏机到遗留系统。一个客户可能期望 XML 格式，而另一个客户可能希望 JSON 。在许多情况下，您需要同时支持它们。</p>
<p>当客户想要使用您的微服务时，您可以面对的另一个挑战来自于通用的<strong>共享逻辑</strong>（如身份验证），因为您不想在所有服务中重新实现相同的事情。</p>
<p>总结：我们不想在我们的微服务架构中实现我们的内部服务，以支持多个客户端并可以重复使用相同的逻辑。这就是 API 网关出现的原因，其作为共享层来处理服务协议之间的差异并满足特定客户端的要求。</p>
<h2 id="什么是-api-网关" tabindex="-1"><a class="header-anchor" href="#什么是-api-网关"><span>什么是 API 网关？</span></a></h2>
<p>API 网关是微服务架构中的一种服务，它为客户端提供共享层和 API，以便与内部服务进行通信。API 网关可以进行路由请求、转换协议、聚合数据以及实现共享逻辑，如认证和速率限制器。</p>
<p>您可以将 API 网关视为我们的微服务世界的入口点。</p>
<p>我们的系统可以有一个或多个 API 网关，具体取决于客户的需求。例如，我们可以为桌面浏览器、移动应用程序和公共 API 提供单独的网关。</p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/7/171554cdb4df51e1?w=667&h=235&f=png&s=34074) -->
<p>(../.vuepress/public/images/171554cdb4df51e1.png)<br>
API 网关作为微服务的切入点</p>
<h3 id="node-js-用于前端团队的-api-网关" tabindex="-1"><a class="header-anchor" href="#node-js-用于前端团队的-api-网关"><span>Node.js 用于前端团队的 API 网关</span></a></h3>
<p>由于 API 网关为客户端应用程序（如浏览器）提供了功能，它可以由负责开发前端应用程序的团队实施和管理。</p>
<p>这也意味着用哪种语言实现 API Gateway 应由负责特定客户的团队选择。由于 JavaScript 是开发浏览器应用程序的主要语言，即使您的微服务架构以不同的语言开发，Node.js 也可以成为实现 API 网关的绝佳选择。</p>
<p>Netflix 成功地使用 Node.js API 网关及其 Java 后端来支持广泛的客户端 ，如果想要了解更多关于它们的方法，可以看看这篇文章<a href="https://www.infoq.com/news/2017/06/paved-paas-netflix/" target="_blank" rel="noopener noreferrer"> The &quot;Paved Road&quot; PaaS for Microservices at Netflix</a></p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/7/1715551ad47c8f64?w=646&h=361&f=png&s=101526) -->
<p>(../.vuepress/public/images/1715551ad47c8f64.png)</p>
<h2 id="api-网关功能" tabindex="-1"><a class="header-anchor" href="#api-网关功能"><span>API 网关功能</span></a></h2>
<p>我们之前讨论过，可以将通用共享逻辑放入您的 API 网关，本节将介绍最常见的网关职责。</p>
<h3 id="路由和版本控制" tabindex="-1"><a class="header-anchor" href="#路由和版本控制"><span>路由和版本控制</span></a></h3>
<p>我们将 API网关定义为您的微服务的入口点。在网关服务中，你可以指定从客户端路由到特定服务的路由请求。甚至可以通过路由处理版本或更改后端接口，而公开的接口可以保持不变。你还可以在您的API网关中定义与多个服务配合的新端点。</p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/7/17155592280ae05a?w=602&h=250&f=png&s=26546) -->
<p>(../.vuepress/public/images/17155592280ae05a.png)<br>
API 网关作为微服务入口点</p>
<h3 id="网关设计的进化" tabindex="-1"><a class="header-anchor" href="#网关设计的进化"><span>网关设计的进化</span></a></h3>
<p>API网关方法可以帮助你<strong>分解整体应用程序</strong>。在大多数情况下，作为微服务端，重构系统并不是一个好主意，而且也是不可能的，因为我们需要在过渡期间为业务提供功能。</p>
<p>在这种情况下，我们可以将代理或 API 网关置于我们的整体应用程序之前，将新功能作为微服务实现，并将新端点路由到新服务，同时通过原有的路由服务旧端点。这样以后，我们也可以通过将原有功能转变为新服务来分解整体。</p>
<p>通过渐进式设计，我们可以从整体架构平稳过渡到微服务。</p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/8/1715562a16cae517?w=626&h=198&f=png&s=20052) -->
<p>(../.vuepress/public/images/1715562a16cae517.png)</p>
<h3 id="认证方式" tabindex="-1"><a class="header-anchor" href="#认证方式"><span>认证方式</span></a></h3>
<p>大多数微服务基础架构都需要处理身份验证。将身份验证之类的<strong>共享逻辑</strong>放入API网关可以帮助你<strong>缩小服务的体积</strong>并<strong>专注管理域</strong>。</p>
<p>在微服务架构中，你可以通过网络配置将服务保留在DMZ（保护区）中，并通过API网关将其<strong>公开</strong>给客户端。该网关还可以处理多种身份验证方法，例如，您可以同时支持基于cookie和token的身份验证。</p>
<figure><img src="@source/posts/posts copy/.vuepress/public/images/17155705b7258e79.png" alt="具有认证功能的 API 网关" tabindex="0" loading="lazy"><figcaption>具有认证功能的 API 网关</figcaption></figure>
<h3 id="数据汇总" tabindex="-1"><a class="header-anchor" href="#数据汇总"><span>数据汇总</span></a></h3>
<p>在微服务体系结构中，可能会发生客户端需要不同聚合级别的数据的情况，例如对各种微服务中产生的数据实体进行非规范化。在这种情况下，我们可以使用我们的API网关来解决这些依赖关系并从多个服务中收集数据。</p>
<p>在下图中，您可以看到API 网关 如何合并用户和信用信息，并作为一条数据返回给客户端。请注意，它们由不同的微服务拥有和管理。</p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/8/1715575e175699a0) -->
<p>(../.vuepress/public/images/1715575e175699a0.jpg)</p>
<h3 id="序列化格式转换" tabindex="-1"><a class="header-anchor" href="#序列化格式转换"><span>序列化格式转换</span></a></h3>
<p>我们可能需要支持具有<strong>不同数据序列化格式</strong>要求的客户端。 想象一下这种情况：我们的微服务使用JSON，但是我们的一位客户只能使用XML API。在这种情况下，我们可以在API网关中将JSON转换为XML，而不是在所有微服务中去实现。</p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/8/1715579141fbe5a3?w=628&h=213&f=png&s=22403) -->
<p>(./../.vuepress/public/images/1715579141fbe5a3.png)</p>
<h3 id="协议转换" tabindex="-1"><a class="header-anchor" href="#协议转换"><span>协议转换</span></a></h3>
<p>微服务架构允许<strong>多语言协议传输</strong>从而获得不同技术的好处。但是，大多数客户端仅支持一种协议。在这种情况下，我们需要为客户端转换服务协议。</p>
<p>API 网关还可以处理客户端和微服务器之间的协议转换。</p>
<p>在下一张图片中，您可以看到客户端希望通过 HTTP REST 进行的所有通信，而内部的微服务使用 gRPC 和 GraphQL 。</p>
<!-- ![](https://user-gold-cdn.xitu.io/2020/4/8/17155832ea38ff46?w=609&h=176&f=png&s=22476) -->
<p>(./../.vuepress/public/images/1715579141fbe5a3.png)</p>
<h3 id="限速和缓存" tabindex="-1"><a class="header-anchor" href="#限速和缓存"><span>限速和缓存</span></a></h3>
<p>在前面的例子中，您可以看到我们可以把通用的共享逻辑（如身份验证）放在 API 网关中。除了身份验证之外，您还可以在 API 网关中实现速率限制，缓存以及各种可靠性功能。</p>
<h3 id="超负荷的-api-网关" tabindex="-1"><a class="header-anchor" href="#超负荷的-api-网关"><span>超负荷的 API 网关</span></a></h3>
<p>实现API网关时，应避免将非通用逻辑（例如特定领域的数据转换）放入网关。 服务应始终对其<strong>数据域</strong>拥有<strong>完全所有权</strong>。构建一个超负荷的API网关，让微服务团队来控制，这违背了微服务的理念。</p>
<p>这就是为什么你应该谨慎使用API网关中的数据聚合的原因，使用起来可能功能强大，但也应避免的特定于域的数据转换或规则处理逻辑。</p>
<p>始终为您的 API 网关定义<strong>明确的责任</strong>，并且只包括其中的通用共享逻辑。</p>
<h2 id="node-js-api-网关" tabindex="-1"><a class="header-anchor" href="#node-js-api-网关"><span>Node.js API 网关</span></a></h2>
<p>当您希望在 API 网关中执行简单的操作，比如将请求路由到特定服务，您可以使用像 nginx 这样的反向代理。但在某些时候，您可能需要实现一般代理不支持的逻辑。在这种情况下，您可以在 Node.js 中实现自己的 API 网关。</p>
<p>在 Node.js 中，您可以使用 <code v-pre>http-proxy</code> 软件包简单地代理对特定服务的请求，也可以使用更多丰富功能的 <code v-pre>express-gateway</code> 来创建 API 网关。</p>
<p>在我们的第一个 API 网关示例中，我们在将代码委托给 user 服务之前验证请求。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> express</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'express'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> httpProxy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'express-http-proxy'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> app</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> express</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> userServiceProxy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> httpProxy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'https://user-service'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 身份认证</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">req</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // TODO: 身份认证逻辑</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 代理请求</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/users/:userId'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">req</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      userServiceProxy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">req</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种示例可能是在您的 API 网关中发出新的请求，并将响应返回给客户端：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">   const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> express</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'express'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> request</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'request-promise-native'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> app</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> express</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 解决: GET /users/me</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/users/me'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">req</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> userId</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> req</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">session</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">userId</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> uri</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `https://user-service/users/</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">userId</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> user</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> await</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">uri</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">      res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-js-api-网关总结" tabindex="-1"><a class="header-anchor" href="#node-js-api-网关总结"><span>Node.js API 网关总结</span></a></h3>
<p>API 网关提供了一个共享层，以通过微服务架构来满足客户需求。它有助于保持您的服务小而专注。您可以将不同的通用逻辑放入您的 API 网关，但是您应该避免API网关的过度使用，因为很多逻辑可以从服务团队中获得控制。</p>
</div></template>


