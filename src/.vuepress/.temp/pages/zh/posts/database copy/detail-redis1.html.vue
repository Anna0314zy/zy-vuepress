<template><div><h2 id="什么是redis" tabindex="-1"><a class="header-anchor" href="#什么是redis"><span>什么是Redis</span></a></h2>
<ul>
<li>
<p>基本概念</p>
<p>redis是一个开源的、使用C语言编写的、支持网络交互的、可基于内存也可持久化的Key-Value数据库（非关系性数据库）。</p>
</li>
<li>
<p>redis的优势</p>
</li>
</ul>
<ol>
<li>
<p>速度快，因为数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1)</p>
</li>
<li>
<p>支持丰富数据类型，支持string，list，set，sorted set，hash</p>
</li>
<li>
<p>支持事务，操作都是原子性，所谓的原子性就是对数据的更改要么全部执行，要么全部不执行</p>
</li>
<li>
<p>丰富的特性：可用于缓存，消息，按key设置过期时间，过期后将会自动删除</p>
</li>
</ol>
<h2 id="redis的应用场景" tabindex="-1"><a class="header-anchor" href="#redis的应用场景"><span>redis的应用场景</span></a></h2>
<ul>
<li>
<p>缓存</p>
<p>(1) 对于一些要返回给前端数据的缓存，当有大量数据库sql操作时候，为了避免每次接口请求都要去查询数据库，可以把一些数据缓存到redis中，这样是直接从内存中获取数据，速度回增快很多。</p>
<p>(2) web端用户，用于登陆缓存session数据，登陆的一些信息存到session中，缓存到redis中</p>
</li>
<li>
<p>队列</p>
<p>redis中提供了list接口，这个list提供了lpush和rpop，这两个方法具有原子性，可以插入队列元素和弹出队列元素。</p>
</li>
<li>
<p>数据存储</p>
<p>redis是非关系型数据库，可以把redis直接用于数据存储，提供了增删改查等操作，因为redis有良好的硬盘持久化机制，redis数据就可以定期持久化到硬盘中，保证了redis数据的完整性和安全性。</p>
</li>
<li>
<p>redis锁实现防刷机制</p>
<p>redis锁可以处理并发问题,redis数据类型中有一个set类型，set类型在存储数据的时候是无序的，而且每个值是不一样的，不能重复，这样就可以快速的查找元素中某个值是否存在，精确的进行增加删除操作。</p>
</li>
</ul>
<p>说明:redis使用场景的基本操作会在redis学习(3)-实战篇中讲解</p>
<h2 id="redis安装与启动" tabindex="-1"><a class="header-anchor" href="#redis安装与启动"><span>redis安装与启动</span></a></h2>
<ul>
<li>redis的安装</li>
</ul>
<ol>
<li>
<p>redis安装比较简单请自行百度</p>
</li>
<li>
<p>修改redis密码配置</p>
<p>打开 redis.windows.conf 配置文件//window系统是带windows的linux系统是redis.conf<br>
找到requirepass foobared，把前面的#号去掉，把foobared改成密码<br>
例如requirepass 123456</p>
<p>注意修改密码后需要重新启动redis服务器</p>
</li>
<li>
<p>如何修改redis服务后台启动</p>
<p>推荐博客:<a href="https://blog.csdn.net/ksdb0468473/article/details/52126009" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/ksdb0468473/article/details/52126009</a></p>
</li>
</ol>
<ul>
<li>redis的基本命令</li>
</ul>
<ol>
<li>
<p>检测启动redis客户端命令：</p>
<p>redis-clis</p>
</li>
<li>
<p>启动redis命令：</p>
<p>./redis-server直接启动redis，有的时候需要启动固定配置文件（重新设置过密码）的redis，例如redis-server redis/redis.windows.conf或者./redis-server ../redis.conf</p>
</li>
<li>
<p>redis服务相关命令</p>
<p>卸载服务：redis-server --service-uninstall</p>
<p>开启服务：redis-server --service-start</p>
<p>停止服务：redis-server --service-stop</p>
</li>
</ol>
<h2 id="redis的基本数据类型" tabindex="-1"><a class="header-anchor" href="#redis的基本数据类型"><span>redis的基本数据类型</span></a></h2>
<p>redis是一种高级的key-value非关系型数据库。，其中value支持五种数据类型：string,List,set,hash,sore set</p>
<ul>
<li>字符串（string）<br>
string存储的元素类型可以是string/int/float，int类型可以进行增加和减少操作。<br>
代码实际操作过程：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@VM_160_197_centos /]# redis-cli</span></span>
<span class="line"><span>127.0.0.1:6379> set string1 koala</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379> get string1</span></span>
<span class="line"><span>"koala"</span></span>
<span class="line"><span>127.0.0.1:6379> set string2 2</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379> get string2</span></span>
<span class="line"><span>"2"</span></span>
<span class="line"><span>127.0.0.1:6379> incr string2</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379> get string2</span></span>
<span class="line"><span>"3"</span></span>
<span class="line"><span>127.0.0.1:6379> decrby string2 2</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> get string2</span></span>
<span class="line"><span>"1"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>字符串列表（list）<br>
list类型是一个有序的列表，有序表示的是从左到右还是从右到左，而且数据内容是可以重复的。<br>
代码实际操作过程：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@VM_160_197_centos /]# redis-cli</span></span>
<span class="line"><span>127.0.0.1:6379> lpush list1 12</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> lpush list1 13</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>127.0.0.1:6379> lpush list1 12</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379> rpop list1</span></span>
<span class="line"><span>"12"</span></span>
<span class="line"><span>127.0.0.1:6379> lpush list2 12</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> lpush list2 13</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>127.0.0.1:6379> lpush list2 12</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379> llen list2</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>字符串集合（set）</p>
<p>set类型中提供了无序的方式来存储多个不同的元素，set类型中每个元素的值都不一样，用户可以快速对元素中的值添加删除，检查某些值是否存在，<strong>重复的元素是无法继续插入集合的</strong>。<br>
代码实际操作过程：</p>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>127.0.0.1:6379> sadd set1 12</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> sadd set1 12</span></span>
<span class="line"><span>(integer) 0</span></span>
<span class="line"><span>127.0.0.1:6379> scard set1</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> sadd set1 13</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> scard set1</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>127.0.0.1:6379> sadd set1 13</span></span>
<span class="line"><span>(integer) 0</span></span>
<span class="line"><span>127.0.0.1:6379> sismember set1 13  //查看13是否在集合中</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> srem set1 13    //从集合中删除13</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>哈希（hash）</p>
<p>hash类型也叫散列类型，存储的时候存的是键值对。查询条数的时候只要是健不一样，就是不同的条数，尽管值是相同的。</p>
</li>
</ul>
<p>代码实际操作过程：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@VM_160_197_centos /]# redis-cli</span></span>
<span class="line"><span>127.0.0.1:6379> hset hash1 key1 12</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> hget hash1 key1</span></span>
<span class="line"><span>"12"</span></span>
<span class="line"><span>127.0.0.1:6379> hset hash1 key2 13</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> hset hash1 key3 13</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> hlen hash1//查询条数的时候只要是健不一样，就是不同的条数，尽管值是相同的。</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379> hset hsah1 key3 14</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379> hset hash1 key3 14</span></span>
<span class="line"><span>(integer) 0</span></span>
<span class="line"><span>127.0.0.1:6379> hget hash1 key3</span></span>
<span class="line"><span>"14"</span></span>
<span class="line"><span>127.0.0.1:6379> hmget hash1 key1 key2  //同时获取key1和key2的值</span></span>
<span class="line"><span>1) "12"</span></span>
<span class="line"><span>2) "13"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>有序字符串集合（sort set）</li>
</ul>
<p>sore set也叫有序分数集，可以把它看作一个排行榜，每一个同学都有自己的分数，且排行榜中还有一个排名的属性，排行属性从0，根据分数不断变大，排行也不断变大。<br>
，这个类型有点复杂，上一张图吧。</p>
<p>[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-LKwxHrkS-1577524600617)(<a href="http://on-img.com/chart_image/5b9b8467e4b015327ae08e1a.png" target="_blank" rel="noopener noreferrer">http://on-img.com/chart_image/5b9b8467e4b015327ae08e1a.png</a>)]</p>
<p><strong>sort set特性</strong></p>
<p>1）sore set中的值是全局唯一的。</p>
<p>一个值设置了之后，再次设置不会增加，只会覆盖修改。</p>
<p>2）如果有两条分数相同，排名应该怎那么看？<br>
如果两个分数值形同，会根据值两个元素变量名的字典排序顺序排列先后，可看下方操作代码。</p>
<p>代码实际操作过程：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>127.0.0.1:6379[1]> zadd zset1 10.1 val1 //添加一个值和分数</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zadd zset1 11.1 val2</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zadd zset1 9.2 val3</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zcard zset1 //统计当前key下值的个数</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zrange zset1 0 2 withscores  //查看0到2的所有值和分数按照排名</span></span>
<span class="line"><span>1) "val3"</span></span>
<span class="line"><span>2) "9.1999999999999993"</span></span>
<span class="line"><span>3) "val1"</span></span>
<span class="line"><span>4) "10.1"</span></span>
<span class="line"><span>5) "val2"</span></span>
<span class="line"><span>6) "11.1"</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zrank zset1 val2</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zadd zset1 12.2 val3 //覆盖iu该val3</span></span>
<span class="line"><span>(integer) 0</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zrange zset1 0 2 withscores//查看0到2的所有值和分数按照排名</span></span>
<span class="line"><span>1) "val1"</span></span>
<span class="line"><span>2) "10.1"</span></span>
<span class="line"><span>3) "val2"</span></span>
<span class="line"><span>4) "11.1"</span></span>
<span class="line"><span>5) "val3"</span></span>
<span class="line"><span>6) "12.199999999999999"</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zadd zset1 12.2 val2</span></span>
<span class="line"><span>(integer) 0</span></span>
<span class="line"><span>127.0.0.1:6379[1]> zrange zset1 0 2 withscores//这时候有两个分数相同,查看0到2的所有值和分数按照排名</span></span>
<span class="line"><span>1) "val1"</span></span>
<span class="line"><span>2) "10.1"</span></span>
<span class="line"><span>3) "val2"</span></span>
<span class="line"><span>4) "12.199999999999999"</span></span>
<span class="line"><span>5) "val3"</span></span>
<span class="line"><span>6) "12.199999999999999"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继续学习，请看进阶篇：<a href="https://blog.csdn.net/xgangzai/article/details/82687552" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/xgangzai/article/details/82687552</a></p>
</div></template>


