<template><div><nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#git-经典图">Git 经典图</router-link><ul><li><router-link to="#图中的几个专用名词解释">图中的几个专用名词解释：</router-link></li></ul></li><li><router-link to="#git-提交可能遇到的一些问题">git 提交可能遇到的一些问题</router-link><ul><li><router-link to="#git-想丢弃还没有到暂存区的代码修改-不想一个一个去撤销代码-把当前所有修改代码丢弃">git 想丢弃还没有到暂存区的代码修改，不想一个一个去撤销代码，把当前所有修改代码丢弃</router-link></li><li><router-link to="#git-已经提交">git 已经提交</router-link></li><li><router-link to="#git-提交到本地仓库有问题怎么办">git 提交到本地仓库有问题怎么办？</router-link></li><li><router-link to="#git-代码已经-push-上去发现有问题">Git 代码已经 push 上去发现有问题</router-link></li></ul></li><li><router-link to="#git-关于暂存的问题">Git 关于暂存的问题</router-link></li><li><router-link to="#git-分支相关问题">Git 分支相关问题</router-link><ul><li><router-link to="#问题1-我想把本地创建的一个分支-koalanode提交到远程-并且远程分支名称要求-nodescript-且还未创建-需要怎能做">问题1：我想把本地创建的一个分支 koalanode提交到远程，并且远程分支名称要求 nodescript，且还未创建，需要怎能做？</router-link></li></ul></li><li><router-link to="#git-用户名密码邮箱相关问题">git 用户名密码邮箱相关问题</router-link><ul><li><router-link to="#公司仓库有账号密码-自己的github有账户密码-两个不同账户-有一次提交发现自己仓库的邮箱提交成了公司仓库设置的邮箱-有点尴尬-为什么会出现这种问题呢">公司仓库有账号密码，自己的github有账户密码，两个不同账户，有一次提交发现自己仓库的邮箱提交成了公司仓库设置的邮箱，有点尴尬，为什么会出现这种问题呢？</router-link></li><li><router-link to="#为什么我每次提交都需要输入github的密码-这个步骤如何省去">为什么我每次提交都需要输入github的密码，这个步骤如何省去？</router-link></li></ul></li><li><router-link to="#提交相关问题">提交相关问题</router-link></li><li><router-link to="#几个开发中常用的命令没有做分类">几个开发中常用的命令没有做分类</router-link></li><li><router-link to="#关于-merge-可能出现的问题">关于 merge 可能出现的问题</router-link></li><li><router-link to="#git-工作流">git 工作流</router-link></li><li><router-link to="#git-提交规范">git 提交规范</router-link></li><li><router-link to="#git-工具">Git 工具</router-link></li><li><router-link to="#vim-常用命令">vim 常用命令</router-link></li><li><router-link to="#总结">总结</router-link></li></ul></nav>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>Git 命令对于程序员的你来说再熟悉不过，但是发现好多小伙伴都是会一些基本的提交流程，当使用过程中遇到问题的时，查到的命令还不敢用，总是请教组里那几个精通 Git 小伙伴。本文对 Git 使用过程中常出现的问题进行总结并且对 Git 的一些误区概念说明了一些，看完后记得自己尝试下，希望你也能成为组里被请教的那 个 Git 小能手。</p>
<h2 id="git-经典图" tabindex="-1"><a class="header-anchor" href="#git-经典图"><span>Git 经典图</span></a></h2>
<p>(../../.vuepress/public/images/170defa8173379ee.jpg)</p>
<p>一张经典的 Git 流程图(来源阮一峰老师的博客)</p>
<h3 id="图中的几个专用名词解释" tabindex="-1"><a class="header-anchor" href="#图中的几个专用名词解释"><span>图中的几个专用名词解释：</span></a></h3>
<ol>
<li>Workspace: 工作区</li>
<li>Index / Stage: 暂存区</li>
<li>Repository: 本地仓库</li>
<li>Remote: 远程仓库</li>
</ol>
<h2 id="git-提交可能遇到的一些问题" tabindex="-1"><a class="header-anchor" href="#git-提交可能遇到的一些问题"><span>git 提交可能遇到的一些问题</span></a></h2>
<h3 id="git-想丢弃还没有到暂存区的代码修改-不想一个一个去撤销代码-把当前所有修改代码丢弃" tabindex="-1"><a class="header-anchor" href="#git-想丢弃还没有到暂存区的代码修改-不想一个一个去撤销代码-把当前所有修改代码丢弃"><span>git 想丢弃还没有到暂存区的代码修改，不想一个一个去撤销代码，把当前所有修改代码丢弃</span></a></h3>
<p>git checkout .</p>
<h3 id="git-已经提交" tabindex="-1"><a class="header-anchor" href="#git-已经提交"><span>git 已经提交</span></a></h3>
<h3 id="git-提交到本地仓库有问题怎么办" tabindex="-1"><a class="header-anchor" href="#git-提交到本地仓库有问题怎么办"><span>git 提交到本地仓库有问题怎么办？</span></a></h3>
<h4 id="情况一-最近一次-commit-的代码有问题怎么办" tabindex="-1"><a class="header-anchor" href="#情况一-最近一次-commit-的代码有问题怎么办"><span>情况一：最近一次 commit 的代码有问题怎么办？</span></a></h4>
<p>这时候可能有小伙伴说直接修改再提交一次不就好了，这里说一下优雅的方式，不进行再一次提交，修改这次提交。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 我是修改内容.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --amend</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>【amend】修正，会对最新一条 commit 进行修正，会把当前 commit 里的内容和暂存区（stageing area）里的内容合并起来后创建一个新的 commit，用这个新的 commit 把当前 commit 替换掉。</p>
<p>输入上面的命令后，Git 会进入提交信息编辑界面，然后你可以删除之前的 changeId，并且修改或者保留之前的提交信息，:wq 保存按下回车后，你的 commit 就被更新了。</p>
<p>对于 amend 还可能出现几种小问题，下面列举下：</p>
<h5 id="刚刚写的提交信息有问题-想修改怎么办" tabindex="-1"><a class="header-anchor" href="#刚刚写的提交信息有问题-想修改怎么办"><span>刚刚写的提交信息有问题，想修改怎么办？</span></a></h5>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --amend</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "新的提交信息"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h5 id="刚刚提交完代码发现-我有个文件没保存-漏了提交上去怎么办" tabindex="-1"><a class="header-anchor" href="#刚刚提交完代码发现-我有个文件没保存-漏了提交上去怎么办"><span>刚刚提交完代码发现，我有个文件没保存，漏了提交上去怎么办？</span></a></h5>
<p>最简单的方式，再次 commit：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "提交信息"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>另一中方式,使用--no-edit，它表示提交信息不会更改，在 git 上仅为一次提交。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> changgeFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> changeFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 刚刚漏了提交的文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --amend</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --no-edit</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="情况二-最新提交的代码没问题-它上一次提交的有问题怎么办" tabindex="-1"><a class="header-anchor" href="#情况二-最新提交的代码没问题-它上一次提交的有问题怎么办"><span>情况二：最新提交的代码没问题，它上一次提交的有问题怎么办？</span></a></h4>
<p>上面说的是最新一次的提交出了问题，接下来说之前提交的代码发现有问题了想修改，应该怎么办？<br>
需要一个新的命令：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rebase</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>rebase -i 是 rebase --interactive 的缩写形式，意为「交互式 rebase」。所谓「交互式 rebase」，就是在 rebase 的操作执行之前，你可以指定要 rebase 的 commit 链中的每一个 commit 是否需要进一步修改。</p>
<blockquote>
<p>注意点：看 commit 历史的时候，最新的提交在最下面，刚开始使用时候总是搞错。</p>
</blockquote>
<p>输入上面的命令后，会进入下面的编辑界面。</p>
<p>(../../.vuepress/public/images/170defc0052e9653.jpg)</p>
<p>根据编辑界面中的提示，我们把要修改的倒数第二个 commit，也就是上面的【修改代码格式首行缩进】前面 pick 指令改为 edit。edit的意思编辑器中已给了解释，应用这个commit，但是停下来修正。改完之后，esc退出，:wq 保存。</p>
<p>会显示如下信息。</p>
<p>(../../.vuepress/public/images/170defc711daac8c.jpg)</p>
<p>这个rebase过程已经停在倒数第二个 commit 的位置了，修改完成你要修改的内容，再次提交。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --amend</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后继续 rebase 过程,使用 rebase --continue 来继续 rebase 过程，把后面的 commit 直接应用上去。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rabase</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --continue</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>另外在使用git rebase -i 的时候，里面带了不同的指令，都可以对已有的提交进行一些操作，比如 squash 对多个 commit 合并成一个 commit。</p>
</blockquote>
<h4 id="情况三-刚刚写完的提交太烂了-不想改了-想直接丢弃怎么办" tabindex="-1"><a class="header-anchor" href="#情况三-刚刚写完的提交太烂了-不想改了-想直接丢弃怎么办"><span>情况三：刚刚写完的提交太烂了，不想改了，想直接丢弃怎么办？</span></a></h4>
<p>你可以用 reset --hard 来撤销 commit</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git reset --hard HEAD^</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>HEAD 表示 HEAD^ 往回数一个位置的 commit ，HEAD^ 表示你要恢复到哪个 commit。因为你要撤销最新的一个 commit，所以你需要恢复到它的父 commit ，也就是 HEAD^。那么在这行之后，你的最新一条就被撤销了。</p>
<h3 id="git-代码已经-push-上去发现有问题" tabindex="-1"><a class="header-anchor" href="#git-代码已经-push-上去发现有问题"><span>Git 代码已经 push 上去发现有问题</span></a></h3>
<h4 id="如果出错内容还在本地私有分支" tabindex="-1"><a class="header-anchor" href="#如果出错内容还在本地私有分支"><span>如果出错内容还在本地私有分支</span></a></h4>
<p>这种情况你修改后，再次提交会报错，由于你在本地对已有的 commit 做了修改，这时你再 push 就会失败，因为中央仓库包含本地没有的 commits。这种情况只在你自己的分支 branch1 ，可以使用强制 push 的方式解决冲突。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> branch1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>-f 是 --force 的缩写，意为「忽略冲突，强制 push」</p>
<h4 id="如果出错内容已经-push-到了-master-分支" tabindex="-1"><a class="header-anchor" href="#如果出错内容已经-push-到了-master-分支"><span>如果出错内容已经 push 到了 master 分支</span></a></h4>
<p>这种情况可以使用 Git 的 revert 指令。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> revert</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HEAD^</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这行代码就会增加一条新的 commit，它的内容和倒数第二个 commit 是相反的，从而和倒数第二个 commit 相互抵消，达到撤销的效果。</p>
<p>在 revert 完成之后，把新的 commit 再 push 上去，这个 commit 的内容就被撤销了。</p>
<blockquote>
<p>revert 与前面说的 reset 最主要的区别是，这次改动只是被「反转」了，并没有在历史中消失掉，你的历史中会存在两条 commit ：一个原始 commit ，一个对它的反转 commit。</p>
</blockquote>
<h2 id="git-关于暂存的问题" tabindex="-1"><a class="header-anchor" href="#git-关于暂存的问题"><span>Git 关于暂存的问题</span></a></h2>
<p>假如正在开发手中需求的时候，突然来了个紧急 bug 要修复，这时候需要先 stash 已经写的部分代码，使自己返回到上一个 commit 改完 bug 之后从缓存栈中推出之前的代码，继续工作。</p>
<ul>
<li>添加缓存栈: git stash</li>
<li>查看缓存栈: git stash list</li>
<li>推出缓存栈: git stash pop</li>
<li 1="">取出特定缓存内容：git stash apply stash@</li>
</ul>
<blockquote>
<p>注意：没有被 track 的文件（即从来没有被 add 过的文件不会被 stash 起来，因为 Git 会忽略它们。如果想把这些文件也一起 stash，可以加上 <code v-pre>-u</code> 参数，它是 <code v-pre>--include-untracked</code> 的简写。就像这样：<code v-pre>git stash -u</code></p>
</blockquote>
<h2 id="git-分支相关问题" tabindex="-1"><a class="header-anchor" href="#git-分支相关问题"><span>Git 分支相关问题</span></a></h2>
<p>分支中的常用命令：</p>
<ul>
<li>
<p>git 拉取指定分支的代码： git clone -b 分支名称 地址</p>
</li>
<li>
<p>查看当前分支：git branch</p>
</li>
<li>
<p>查看远程分支：git branch -a</p>
</li>
<li>
<p>创建并切换分支：git checkout -b add_orderdesc</p>
</li>
<li>
<p>切换分支：git checkout 分支名称</p>
</li>
<li>
<p>查看当前的本地分支与远程分支的关联关系：git branch -vv</p>
</li>
<li>
<p>合并当前分支代码到master：</p>
</li>
</ul>
<h3 id="问题1-我想把本地创建的一个分支-koalanode提交到远程-并且远程分支名称要求-nodescript-且还未创建-需要怎能做" tabindex="-1"><a class="header-anchor" href="#问题1-我想把本地创建的一个分支-koalanode提交到远程-并且远程分支名称要求-nodescript-且还未创建-需要怎能做"><span>问题1：我想把本地创建的一个分支 koalanode提交到远程，并且远程分支名称要求 nodescript，且还未创建，需要怎能做？</span></a></h3>
<ol>
<li>
<p>我先在远程建了一个分支 nodescript，我本地也有这么一个分支，名字和远程的分支名称还不一样。首先，我把我本地的分支名称修改成和远程分支相同。</p>
</li>
<li>
<p>将本地新建分支push到自己的本地远程origin上，因为只在本地创建了一个新的分支，远程    origin 上还没有该分支</p>
</li>
</ol>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nodescript</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>把本地分支与远程origin的分支进行关联处理(通过 --set-upstream-to 命令)</li>
</ol>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --set-upstream-to=origin/add_orderdesc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>再次通过 <code v-pre>git branch -vv</code> 查看分支的关联关系，可见本地分支已于origin的分支建立上了关联关系,之后我们每次 push 或者 pull 的时候，只需要输入git push 或者git pull</li>
</ol>
<h2 id="git-用户名密码邮箱相关问题" tabindex="-1"><a class="header-anchor" href="#git-用户名密码邮箱相关问题"><span>git 用户名密码邮箱相关问题</span></a></h2>
<h3 id="公司仓库有账号密码-自己的github有账户密码-两个不同账户-有一次提交发现自己仓库的邮箱提交成了公司仓库设置的邮箱-有点尴尬-为什么会出现这种问题呢" tabindex="-1"><a class="header-anchor" href="#公司仓库有账号密码-自己的github有账户密码-两个不同账户-有一次提交发现自己仓库的邮箱提交成了公司仓库设置的邮箱-有点尴尬-为什么会出现这种问题呢"><span>公司仓库有账号密码，自己的github有账户密码，两个不同账户，有一次提交发现自己仓库的邮箱提交成了公司仓库设置的邮箱，有点尴尬，为什么会出现这种问题呢？</span></a></h3>
<p>首先这个你在刚开始安装一趟的时候应该就用过:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 设置查看</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 用户名和邮箱</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.name</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --查看git当前配置用户名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.email</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --查看git当前配置的邮箱</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 名称</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 设置用户名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 邮箱</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 设置git邮箱</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局命令设置</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 你的目标用户名；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 你的目标邮箱名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目中也可以查看这些信息</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ~/.gitconfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>知道了这些配置修改之后，你可以选择全局配置下，在公司电脑，或者提交前自己看下，就不会再出现上面的尴尬问题了。</p>
<h3 id="为什么我每次提交都需要输入github的密码-这个步骤如何省去" tabindex="-1"><a class="header-anchor" href="#为什么我每次提交都需要输入github的密码-这个步骤如何省去"><span>为什么我每次提交都需要输入github的密码，这个步骤如何省去？</span></a></h3>
<h2 id="提交相关问题" tabindex="-1"><a class="header-anchor" href="#提交相关问题"><span>提交相关问题</span></a></h2>
<p>如何修改已经提交的内容</p>
<h2 id="几个开发中常用的命令没有做分类" tabindex="-1"><a class="header-anchor" href="#几个开发中常用的命令没有做分类"><span>几个开发中常用的命令没有做分类</span></a></h2>
<ol>
<li>git checkout . 和 git checkout --filename<br>
测试服务器测试时候，发现有一个bug，临时修改下里面的代码，测试一下问题是否解决，再去git仓库拉取新的代码时候，可以用上面的命令忽略掉刚才的修改</li>
</ol>
<p>网上的说法是：git checkout -- filename的作用是把filename文件在工作区的修改撤销到最近一次git add 或 git commit时的内容</p>
<ol start="2">
<li>如何修改已经提交到远程的代码<br>
场景：提交了代码gerrit ，领导看了代码之后，发现有一些问题需要修改，需要做一些修改，再次提交。<br>
查看当前分支你提交上次一到节点commitid是多少，这种情况可以通过工具看，也可以通过git log 命令查看</li>
</ol>
<p>去gerrit中Abandon，然后执行<br>
git reset 1dc340d792deace324e1ee9ec2f9f0a69d22b9c0，注意这个id是你当前分支上一个提交节点，然后会发现代码恢复到了提交前状态，再次修改问题，重新提交代码就可以，还是比较常见的操作。</p>
<ol start="3">
<li></li>
</ol>
<h2 id="关于-merge-可能出现的问题" tabindex="-1"><a class="header-anchor" href="#关于-merge-可能出现的问题"><span>关于 merge 可能出现的问题</span></a></h2>
<h2 id="git-工作流" tabindex="-1"><a class="header-anchor" href="#git-工作流"><span>git 工作流</span></a></h2>
<h2 id="git-提交规范" tabindex="-1"><a class="header-anchor" href="#git-提交规范"><span>git 提交规范</span></a></h2>
<p>这里只列举我常用的提交格式类型</p>
<ul>
<li>feat：新功能（feature）</li>
<li>fix：修补bug</li>
<li>docs：文档（documentation）</li>
<li>style： 格式（不影响代码运行的变动）</li>
<li>refactor：重构（即不是新增功能，也不是修改bug的代码变动）</li>
<li>test：增加测试</li>
<li>chore：其他修改，比如构建过程或辅助工具的变动</li>
</ul>
<p>git 更详细的提交规范可以看一下阮一峰老师的这篇文章，非常棒<br>
<a href="https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noopener noreferrer">Commit message 和 Change log 编写指南</a></p>
<h2 id="git-工具" tabindex="-1"><a class="header-anchor" href="#git-工具"><span>Git 工具</span></a></h2>
<p>网上一些 Git 工具很多，推荐一个SourceThree，但是个人还是比较喜欢用  Git 命令，不然你会发现这项技能慢慢蜕化了，而且一些工具提交时总是带一些我不懂的参数。平时工具和 Git 命令配个使用，用它的可视化图表看提交是否有问题，当然也有公司觉得用命令没有工具安全的，自己选择就好了，嘿嘿。</p>
<p>SourceThree 下载地址：<a href="https://www.sourcetreeapp.com/" target="_blank" rel="noopener noreferrer">https://www.sourcetreeapp.com/</a></p>
<h2 id="vim-常用命令" tabindex="-1"><a class="header-anchor" href="#vim-常用命令"><span>vim 常用命令</span></a></h2>
<p>使用 Git 的时候，偶尔会对 Vim 中对 shell 脚本进行简单操作，为了节约时间，列出几个常用的 vim 快捷命令。</p>
<ul>
<li>a,i,r,o,A,I,R,O	进入编辑模式</li>
<li>:q	一般退出</li>
<li>:q!	退出不保存</li>
<li>:wq	保存退出</li>
<li>yy	复制当前行的内容</li>
<li>ZZ	保存离开</li>
<li>dd	删除光标当前行</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>本文对 Git 使用过程中常出现的问题进行了一个总结，后面遇到问题也会不断更新，可以收藏本文，需要的时候查阅，最后建议在记忆的时候围绕文初的图片，多使用。希望本文能帮助到小伙伴们。</p>
<p>参考文章：<br>
vim 常用快捷键大全<br>
<a href="https://www.jianshu.com/p/dde77e3b299f" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/dde77e3b299f</a><br>
git 提交规范<br>
<a href="https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noopener noreferrer">https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html</a></p>
<p>附件：<br>
一张git常用图片</p>
</div></template>


