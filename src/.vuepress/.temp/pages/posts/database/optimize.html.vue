<template><div><nav class="table-of-contents"><ul><li><router-link to="#直接看语句">直接看语句</router-link></li><li><router-link to="#date-format函数说明">DATE_FORMAT函数说明</router-link></li><li><router-link to="#需求2-查询结果单位换算后保留两位小数">&gt; 需求2: 查询结果单位换算后保留两位小数</router-link></li></ul></nav>
<blockquote>
<p>需求1: 最近写的一个用户数据统计相关接口，需要用到按照每天进行分组统计。</p>
</blockquote>
<h2 id="直接看语句" tabindex="-1"><a class="header-anchor" href="#直接看语句"><span>直接看语句</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT DATE_FORMAT( create_time, "%Y-%m-%d" ) ,sum(user_id) FROM orders WHERE order_state=2 GROUP BY DATE_FORMAT( create_time, "%Y-%m-%d" ) ;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="date-format函数说明" tabindex="-1"><a class="header-anchor" href="#date-format函数说明"><span>DATE_FORMAT函数说明</span></a></h2>
<ul>
<li>语法</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DATE_FORMAT(date,format)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//上面代码中使用的是</span></span>
<span class="line"><span>DATE_FORMAT( create_time, "%Y-%m-%d" )</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>date 参数是合法的日期。format 规定日期/时间的输出格式。</p>
<ul>
<li>format可以使用的格式</li>
</ul>
<table>
<thead>
<tr>
<th>格式</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>%a</td>
<td>缩写星期名</td>
</tr>
<tr>
<td>%b</td>
<td>缩写月名</td>
</tr>
<tr>
<td>%c</td>
<td>月，数值</td>
</tr>
<tr>
<td>%D</td>
<td>带有英文前缀的月中的天</td>
</tr>
<tr>
<td>%d</td>
<td>月的天，数值(00-31)</td>
</tr>
<tr>
<td>%e</td>
<td>月的天，数值(0-31)</td>
</tr>
<tr>
<td>%f</td>
<td>微秒</td>
</tr>
<tr>
<td>%H</td>
<td>小时 (00-23)</td>
</tr>
<tr>
<td>%h</td>
<td>小时 (01-12)</td>
</tr>
<tr>
<td>%I</td>
<td>小时 (01-12)</td>
</tr>
<tr>
<td>%i</td>
<td>分钟，数值(00-59)</td>
</tr>
<tr>
<td>%j</td>
<td>年的天 (001-366)</td>
</tr>
<tr>
<td>%k</td>
<td>小时 (0-23)</td>
</tr>
<tr>
<td>%l</td>
<td>小时 (1-12)</td>
</tr>
<tr>
<td>%M</td>
<td>月名</td>
</tr>
<tr>
<td>%m</td>
<td>月，数值(00-12)</td>
</tr>
<tr>
<td>%p</td>
<td>AM 或 PM</td>
</tr>
<tr>
<td>%r</td>
<td>时间，12-小时（hh:mm:ss AM 或 PM）</td>
</tr>
<tr>
<td>%S</td>
<td>秒(00-59)</td>
</tr>
<tr>
<td>%s</td>
<td>秒(00-59)</td>
</tr>
<tr>
<td>%T</td>
<td>时间, 24-小时 (hh:mm:ss)</td>
</tr>
<tr>
<td>%U</td>
<td>周 (00-53) 星期日是一周的第一天</td>
</tr>
<tr>
<td>%u</td>
<td>周 (00-53) 星期一是一周的第一天</td>
</tr>
<tr>
<td>%V</td>
<td>周 (01-53) 星期日是一周的第一天，与 %X 使用</td>
</tr>
<tr>
<td>%v</td>
<td>周 (01-53) 星期一是一周的第一天，与 %x 使用</td>
</tr>
<tr>
<td>%W</td>
<td>星期名</td>
</tr>
<tr>
<td>%w</td>
<td>周的天 （0=星期日, 6=星期六）</td>
</tr>
<tr>
<td>%X</td>
<td>年，其中的星期日是周的第一天，4 位，与 %V 使用</td>
</tr>
<tr>
<td>%x</td>
<td>年，其中的星期一是周的第一天，4 位，与 %v 使用</td>
</tr>
<tr>
<td>%Y</td>
<td>年，4 位</td>
</tr>
<tr>
<td>%y</td>
<td>年，2 位</td>
</tr>
</tbody>
</table>
<h2 id="需求2-查询结果单位换算后保留两位小数" tabindex="-1"><a class="header-anchor" href="#需求2-查询结果单位换算后保留两位小数"><span>&gt; 需求2: 查询结果单位换算后保留两位小数</span></a></h2>
<h4 id="数据库表中sale列的值为23456-789" tabindex="-1"><a class="header-anchor" href="#数据库表中sale列的值为23456-789"><span>数据库表中sale列的值为23456.789</span></a></h4>
<ol>
<li>format函数</li>
</ol>
<p>说明：format(x,d)是mysql自带的格式化小数函数，format()函数会对小数部分进行四舍五入操作，整数部分从右向左每三位一个逗号进行格式化输出</p>
<p>format函数结果：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>23,456.79</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>truncate函数</li>
</ol>
<p>说明：truncate(x,d)是mysql自带的函数，truncate()函数会将小数部分d位以后的值直接舍去</p>
<p>truncate函数结果：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>23456.78</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>round函数（常用）</li>
</ol>
<p>说明：round(x,d)是mysql自带的函数，format()函数会对小数部分进行四舍五入操作，但是不会出现format函数中的带逗号格式</p>
<p>round函数数结果：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>23456.79</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>convert函数（常用）</li>
</ol>
<p>说明：MySQL 的CAST()和CONVERT()函数可用来获取一个类型的值，并产生另一个类型的值。简单的说就是类型转换。<br>
CONVERT(xxx,类型)，但是类型是有限制的，下面几种类型</p>
<ul>
<li>二进制,同带binary前缀的效果 : BINARY</li>
<li>字符型,可带参数 : CHAR()</li>
<li>日期 : DATE</li>
<li>时间: TIME</li>
<li>日期时间型 : DATETIME</li>
<li>浮点数 : DECIMAL</li>
<li>整数 : SIGNED</li>
<li>无符号整数 : UNSIGNED</li>
</ul>
<p>根据文初给出的数据，应该是这些写</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>convert(23456.789,decimal(10,2));</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>convert函数数结果，这里也是四舍五入：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>23456.79</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注：解释下dem的意思</p>
<blockquote>
<p>DECIMAL(10,2)  总共能存10位数字，末尾2位是小数，字段最大值99999999.99（小数点不算在长度内）</p>
</blockquote>
</div></template>


