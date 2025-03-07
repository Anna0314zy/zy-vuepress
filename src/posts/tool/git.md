---
title: git 常见问题总结
date: 2020-02-01
tags:
   - git
---

# git 常见问题总结



## git常见命令
### 1. 修改commit 信息
  ```js
  git commit --amend -m "正确的提交信息"

  ```

  ### 2. git rebase 妙用

  - 批量修改多个历史提交信息
   ```js 
    git rebase -i HEAD~2  //会进入一个 交互式编辑界面（通常是 Vim 编辑器）
   ```
| 命令       | 作用 |
|------------|------------------------------------------------|
| `pick`     | 保留该提交不变 |
| `reword`   | 修改该提交的提交信息 |
| `edit`     | 修改该提交的代码 |
| `squash (s)` | 合并该 commit 到上一个 commit（并修改提交信息） |
| `fixup (f)` | 合并该 commit 到上一个 commit（不修改提交信息） |
| `drop`     | 删除该 commit |

  其他通用 
  git rebase --abort

  git rebase --continue

- git rebase vs git merge

 使用 merge：当你希望保留完整的历史记录，包括所有的合并操作，适合于 公共分支。
使用 rebase：当你希望简化提交历史，减少合并提交，适合于 私有分支，并且只有自己在操作分支时使用。
  ### 3. git log vs git reflog 区别总结
  | 特性                         | `git log`                 | `git reflog`                          |
|------------------------------|---------------------------|----------------------------------------|
| **作用**                        | 查看分支提交历史          | 查看 HEAD 变更历史                   |
| **记录范围**                      | 仅分支可达的 commit       | 所有 Git 操作（包括丢失的 commit）   |
| **是否包含 `checkout` / `reset`** | ❌ 不包含               | ✅ 记录所有操作                      |
| **是否能找回删除的 commit**         | ❌ 不能                   | ✅ 可以找回                          |
| **适用场景**                       | 查看提交历史、版本演变    | 恢复误删 commit、回溯 HEAD 变更      |
### 4. diff 文件差异

### 5. git cherry-pick <某一个 commit>

### 6. git checkout  <某一个 commit>

```js
git diff origin/feat/0220 feat/0320 -- src/recorder/manager/videoRecorderManager.ts

```
Git 会将工作目录更新为指定提交的状态，同时 进入“游离头指针”（detached HEAD）状态。 

仅查看不修改

### 7. git revert  <某一个 commit>  撤回某一提交
## vim 常见命令
### 1. 先按 EST 再按 :wq 退出vim 编辑
| 命令       | 说明                                      |
|------------|-------------------------------------------|
| `:q`       | 退出（如果文件未修改）                    |
| `:q!`      | 强制退出（不保存修改）                    |
| `:w`       | 保存文件                                  |
| `:wq` 或 `ZZ` | 保存并退出                              |
| `:x`       | 保存并退出（如果文件未修改，不会更新时间戳） |

**按 Esc 退出任何模式，返回普通模式**

### 2. 文本操作命令 

| 命令 | 作用 |
|------|----------------|
| `x`  | 删除光标所在字符 |
| `X`  | 删除光标前的字符 |
| `dd` | 删除当前行 |
| `D`  | 删除光标后到行尾 |
| `yy` | 复制当前行 |
| `p`  | 粘贴（在光标后） |
| `P`  | 粘贴（在光标前） |

## node 

### 1. 主要用于解决 Node.js 17 及以上版本 中由于 OpenSSL 3.0 变更导致的 Webpack 及其他依赖不兼容问题。
```js
export NODE_OPTIONS=--openssl-legacy-provider
```
### 2. nvm 管理node
  
  ```js
  nvm ls
  nvm install 18.16.0  # 替换为你想要的版本
  nvm use 18.16.0 
  nvm alias default 18.17.1 // 设置默认版本

  ```
## git 如何配置多个账户

### 1.生成多个 SSH 密钥

<font color="red">~/.ssh/id_rsa.gitee 你需要自命名的文件名</font>

```js
 ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitee -C "xxxxx@qq.com"
```


### 2.将 ssh-key 分别添加到 ssh-agent 信任列表
```js
ssh-agent bash
ssh-add ~/.ssh/id_rsa.gitee
```
如果看到 Identitiy added: ~/.ssh/id_ras_github，就表示添加成功了。


### 3.将公钥添加到相应的 Git 账户中

文件名带有 .pub 后缀  粘贴到 github 的ssh

### 4.在 config 文件 (在 .ssh 目录下 ) 中配置多个 SSH 密钥


示例
```js
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_github

Host github.com-student
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa.github_stu

```

::: tip
如何命中  github.com-student 呢？

:::
```js
正常 clone 地址 git@github.com:lPlEOao5t1KBPIQG/vue-study.git

修改成  git@github.com-student:lPlEOao5t1KBPIQG/vue-study.git 

就可以命中了
```
