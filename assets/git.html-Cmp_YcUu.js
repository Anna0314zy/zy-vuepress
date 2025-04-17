import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,e as s,d as h,w as n,r as l,o as d,f as k}from"./app-19odCU7c.js";const r={};function p(g,i){const t=l("font");return d(),e("div",null,[i[1]||(i[1]=s(`<h1 id="git-常见问题总结" tabindex="-1"><a class="header-anchor" href="#git-常见问题总结"><span>git 常见问题总结</span></a></h1><h2 id="git常见命令" tabindex="-1"><a class="header-anchor" href="#git常见命令"><span>git常见命令</span></a></h2><h3 id="_1-修改commit-信息" tabindex="-1"><a class="header-anchor" href="#_1-修改commit-信息"><span>1. 修改commit 信息</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> commit</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">amend</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;正确的提交信息&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-git-rebase-妙用" tabindex="-1"><a class="header-anchor" href="#_2-git-rebase-妙用"><span>2. git rebase 妙用</span></a></h3><ul><li>批量修改多个历史提交信息</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> git</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> rebase</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> HEAD</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">~</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //会进入一个 交互式编辑界面（通常是 Vim 编辑器）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td><code>pick</code></td><td>保留该提交不变</td></tr><tr><td><code>reword</code></td><td>修改该提交的提交信息</td></tr><tr><td><code>edit</code></td><td>修改该提交的代码</td></tr><tr><td><code>squash (s)</code></td><td>合并该 commit 到上一个 commit（并修改提交信息）</td></tr><tr><td><code>fixup (f)</code></td><td>合并该 commit 到上一个 commit（不修改提交信息）</td></tr><tr><td><code>drop</code></td><td>删除该 commit</td></tr></tbody></table><p>其他通用<br> git rebase --abort</p><p>git rebase --continue</p><ul><li>git rebase vs git merge</li></ul><p>使用 merge：当你希望保留完整的历史记录，包括所有的合并操作，适合于 公共分支。<br> 使用 rebase：当你希望简化提交历史，减少合并提交，适合于 私有分支，并且只有自己在操作分支时使用。</p><h3 id="_3-git-log-vs-git-reflog-区别总结" tabindex="-1"><a class="header-anchor" href="#_3-git-log-vs-git-reflog-区别总结"><span>3. git log vs git reflog 区别总结</span></a></h3><table><thead><tr><th>特性</th><th><code>git log</code></th><th><code>git reflog</code></th></tr></thead><tbody><tr><td><strong>作用</strong></td><td>查看分支提交历史</td><td>查看 HEAD 变更历史</td></tr><tr><td><strong>记录范围</strong></td><td>仅分支可达的 commit</td><td>所有 Git 操作（包括丢失的 commit）</td></tr><tr><td><strong>是否包含 <code>checkout</code> / <code>reset</code></strong></td><td>❌ 不包含</td><td>✅ 记录所有操作</td></tr><tr><td><strong>是否能找回删除的 commit</strong></td><td>❌ 不能</td><td>✅ 可以找回</td></tr><tr><td><strong>适用场景</strong></td><td>查看提交历史、版本演变</td><td>恢复误删 commit、回溯 HEAD 变更</td></tr></tbody></table><h3 id="_4-diff-文件差异" tabindex="-1"><a class="header-anchor" href="#_4-diff-文件差异"><span>4. diff 文件差异</span></a></h3><h3 id="_5-git-cherry-pick-某一个-commit" tabindex="-1"><a class="header-anchor" href="#_5-git-cherry-pick-某一个-commit"><span>5. git cherry-pick &lt;某一个 commit&gt;</span></a></h3><h3 id="_6-git-checkout-某一个-commit" tabindex="-1"><a class="header-anchor" href="#_6-git-checkout-某一个-commit"><span>6. git checkout &lt;某一个 commit&gt;</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> diff</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> origin</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">feat</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0220</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> feat</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0320</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> src</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">recorder</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">manager</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">videoRecorderManager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Git 会将工作目录更新为指定提交的状态，同时 进入“游离头指针”（detached HEAD）状态。</p><p>仅查看不修改</p><h3 id="_7-git-revert-某一个-commit-撤回某一提交" tabindex="-1"><a class="header-anchor" href="#_7-git-revert-某一个-commit-撤回某一提交"><span>7. git revert &lt;某一个 commit&gt; 撤回某一提交</span></a></h3><h2 id="vim-常见命令" tabindex="-1"><a class="header-anchor" href="#vim-常见命令"><span>vim 常见命令</span></a></h2><h3 id="_1-先按-est-再按-wq-退出vim-编辑" tabindex="-1"><a class="header-anchor" href="#_1-先按-est-再按-wq-退出vim-编辑"><span>1. 先按 EST 再按 :wq 退出vim 编辑</span></a></h3><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>:q</code></td><td>退出（如果文件未修改）</td></tr><tr><td><code>:q!</code></td><td>强制退出（不保存修改）</td></tr><tr><td><code>:w</code></td><td>保存文件</td></tr><tr><td><code>:wq</code> 或 <code>ZZ</code></td><td>保存并退出</td></tr><tr><td><code>:x</code></td><td>保存并退出（如果文件未修改，不会更新时间戳）</td></tr></tbody></table><p><strong>按 Esc 退出任何模式，返回普通模式</strong></p><h3 id="_2-文本操作命令" tabindex="-1"><a class="header-anchor" href="#_2-文本操作命令"><span>2. 文本操作命令</span></a></h3><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td><code>x</code></td><td>删除光标所在字符</td></tr><tr><td><code>X</code></td><td>删除光标前的字符</td></tr><tr><td><code>dd</code></td><td>删除当前行</td></tr><tr><td><code>D</code></td><td>删除光标后到行尾</td></tr><tr><td><code>yy</code></td><td>复制当前行</td></tr><tr><td><code>p</code></td><td>粘贴（在光标后）</td></tr><tr><td><code>P</code></td><td>粘贴（在光标前）</td></tr></tbody></table><h2 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>node</span></a></h2><h3 id="_1-主要用于解决-node-js-17-及以上版本-中由于-openssl-3-0-变更导致的-webpack-及其他依赖不兼容问题。" tabindex="-1"><a class="header-anchor" href="#_1-主要用于解决-node-js-17-及以上版本-中由于-openssl-3-0-变更导致的-webpack-及其他依赖不兼容问题。"><span>1. 主要用于解决 Node.js 17 及以上版本 中由于 OpenSSL 3.0 变更导致的 Webpack 及其他依赖不兼容问题。</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> NODE_OPTIONS</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=--</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">openssl</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">legacy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">provider</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-nvm-管理node" tabindex="-1"><a class="header-anchor" href="#_2-nvm-管理node"><span>2. nvm 管理node</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nvm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nvm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  # </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">替换为你想要的版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nvm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> use</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">nvm</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> alias</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.17</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 设置默认版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-如何配置多个账户" tabindex="-1"><a class="header-anchor" href="#git-如何配置多个账户"><span>git 如何配置多个账户</span></a></h2><h3 id="_1-生成多个-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#_1-生成多个-ssh-密钥"><span>1.生成多个 SSH 密钥</span></a></h3>`,34)),h(t,{color:"red"},{default:n(()=>i[0]||(i[0]=[k("~/.ssh/id_rsa.gitee 你需要自命名的文件名")])),_:1}),i[2]||(i[2]=s(`<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">keygen</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">t</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> rsa</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ~/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">id_rsa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gitee</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;xxxxx@qq.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //-f 选项：指定密钥文件名，避免覆盖 ~/.ssh/id_rsa（默认密钥）。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-将-ssh-key-分别添加到-ssh-agent-信任列表" tabindex="-1"><a class="header-anchor" href="#_2-将-ssh-key-分别添加到-ssh-agent-信任列表"><span>2.将 ssh-key 分别添加到 ssh-agent 信任列表</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">agent</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> bash</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">add</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ~/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">id_rsa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gitee</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果看到 Identitiy added: ~/.ssh/id_ras_github，就表示添加成功了。</p><h3 id="_3-将公钥添加到相应的-git-账户中" tabindex="-1"><a class="header-anchor" href="#_3-将公钥添加到相应的-git-账户中"><span>3.将公钥添加到相应的 Git 账户中</span></a></h3><p>文件名带有 .pub 后缀 粘贴到 github 的ssh</p><h3 id="_4-在-config-文件-在-ssh-目录下-中配置多个-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#_4-在-config-文件-在-ssh-目录下-中配置多个-ssh-密钥"><span>4.在 config 文件 (在 .ssh 目录下 ) 中配置多个 SSH 密钥</span></a></h3><p>示例</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Host</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">HostName</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> git</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">IdentityFile</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ~/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">id_rsa_github</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Host</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">com</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">student</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">HostName</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> git</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">IdentityFile</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ~/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ssh</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">id_rsa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">github_stu</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如何命中 github.com-student 呢？</p></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">正常</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 地址</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lPlEOao5t1KBPIQG</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">vue</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">study</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">修改成</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">github</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">com</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lPlEOao5t1KBPIQG</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">vue</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">study</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">就可以命中了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11))])}const y=a(r,[["render",p]]),m=JSON.parse('{"path":"/posts/tool/git.html","title":"git 常见问题总结","lang":"zh-CN","frontmatter":{"title":"git 常见问题总结","date":"2020-02-01T00:00:00.000Z","tags":["git"],"description":"git 常见问题总结 git常见命令 1. 修改commit 信息 2. git rebase 妙用 批量修改多个历史提交信息 其他通用 git rebase --abort git rebase --continue git rebase vs git merge 使用 merge：当你希望保留完整的历史记录，包括所有的合并操作，适合于 公共分支。 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zy-vuepress/posts/tool/git.html"}],["meta",{"property":"og:site_name","content":"我的基地"}],["meta",{"property":"og:title","content":"git 常见问题总结"}],["meta",{"property":"og:description","content":"git 常见问题总结 git常见命令 1. 修改commit 信息 2. git rebase 妙用 批量修改多个历史提交信息 其他通用 git rebase --abort git rebase --continue git rebase vs git merge 使用 merge：当你希望保留完整的历史记录，包括所有的合并操作，适合于 公共分支。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-19T03:31:33.000Z"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2020-02-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-19T03:31:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git 常见问题总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-19T03:31:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mrs.Zoe\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"git常见命令","slug":"git常见命令","link":"#git常见命令","children":[{"level":3,"title":"1. 修改commit 信息","slug":"_1-修改commit-信息","link":"#_1-修改commit-信息","children":[]},{"level":3,"title":"2. git rebase 妙用","slug":"_2-git-rebase-妙用","link":"#_2-git-rebase-妙用","children":[]},{"level":3,"title":"3. git log vs git reflog 区别总结","slug":"_3-git-log-vs-git-reflog-区别总结","link":"#_3-git-log-vs-git-reflog-区别总结","children":[]},{"level":3,"title":"4. diff 文件差异","slug":"_4-diff-文件差异","link":"#_4-diff-文件差异","children":[]},{"level":3,"title":"5. git cherry-pick <某一个 commit>","slug":"_5-git-cherry-pick-某一个-commit","link":"#_5-git-cherry-pick-某一个-commit","children":[]},{"level":3,"title":"6. git checkout  <某一个 commit>","slug":"_6-git-checkout-某一个-commit","link":"#_6-git-checkout-某一个-commit","children":[]},{"level":3,"title":"7. git revert  <某一个 commit>  撤回某一提交","slug":"_7-git-revert-某一个-commit-撤回某一提交","link":"#_7-git-revert-某一个-commit-撤回某一提交","children":[]}]},{"level":2,"title":"vim 常见命令","slug":"vim-常见命令","link":"#vim-常见命令","children":[{"level":3,"title":"1. 先按 EST 再按 :wq 退出vim 编辑","slug":"_1-先按-est-再按-wq-退出vim-编辑","link":"#_1-先按-est-再按-wq-退出vim-编辑","children":[]},{"level":3,"title":"2. 文本操作命令","slug":"_2-文本操作命令","link":"#_2-文本操作命令","children":[]}]},{"level":2,"title":"node","slug":"node","link":"#node","children":[{"level":3,"title":"1. 主要用于解决 Node.js 17 及以上版本 中由于 OpenSSL 3.0 变更导致的 Webpack 及其他依赖不兼容问题。","slug":"_1-主要用于解决-node-js-17-及以上版本-中由于-openssl-3-0-变更导致的-webpack-及其他依赖不兼容问题。","link":"#_1-主要用于解决-node-js-17-及以上版本-中由于-openssl-3-0-变更导致的-webpack-及其他依赖不兼容问题。","children":[]},{"level":3,"title":"2. nvm 管理node","slug":"_2-nvm-管理node","link":"#_2-nvm-管理node","children":[]}]},{"level":2,"title":"git 如何配置多个账户","slug":"git-如何配置多个账户","link":"#git-如何配置多个账户","children":[{"level":3,"title":"1.生成多个 SSH 密钥","slug":"_1-生成多个-ssh-密钥","link":"#_1-生成多个-ssh-密钥","children":[]},{"level":3,"title":"2.将 ssh-key 分别添加到 ssh-agent 信任列表","slug":"_2-将-ssh-key-分别添加到-ssh-agent-信任列表","link":"#_2-将-ssh-key-分别添加到-ssh-agent-信任列表","children":[]},{"level":3,"title":"3.将公钥添加到相应的 Git 账户中","slug":"_3-将公钥添加到相应的-git-账户中","link":"#_3-将公钥添加到相应的-git-账户中","children":[]},{"level":3,"title":"4.在 config 文件 (在 .ssh 目录下 ) 中配置多个 SSH 密钥","slug":"_4-在-config-文件-在-ssh-目录下-中配置多个-ssh-密钥","link":"#_4-在-config-文件-在-ssh-目录下-中配置多个-ssh-密钥","children":[]}]}],"git":{"createdTime":1739514870000,"updatedTime":1742355093000,"contributors":[{"name":"zy","username":"zy","email":"891374900@qq.com","commits":4,"url":"https://github.com/zy"}]},"readingTime":{"minutes":2.85,"words":855},"filePathRelative":"posts/tool/git.md","localizedDate":"2020年2月1日","excerpt":"\\n<h2>git常见命令</h2>\\n<h3>1. 修改commit 信息</h3>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">git</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> commit</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> --</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">amend</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> -</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">m</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"正确的提交信息\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{y as comp,m as data};
