---
title: Docker Compose
tags:
  - docker
---

---

## Docker Compose 是什么？

* 它允许你用一个 YAML 格式的配置文件（通常叫 `docker-compose.yml`）来定义多个 Docker 容器的服务、网络和存储卷等。
* 你只需一条命令，就能启动、停止、重启整个多容器应用。
* 它帮你把一堆相关的容器服务（比如前端、后端、数据库、缓存等）组织起来，方便一起管理。

---

## 主要功能

* **定义多个服务**：每个服务对应一个 Docker 容器，比如 Web 服务、数据库服务、缓存服务等。
* **服务间网络**：自动创建网络，让服务之间可以用名字互相访问。
* **依赖管理**：指定服务启动顺序，确保先启动数据库，再启动后端。
* **环境变量和配置**：为每个服务设置环境变量、端口映射、挂载卷等。
* **一键启动和停止**：用命令 `docker-compose up` 启动所有服务，用 `docker-compose down` 停止并清理。

---

## 为什么要用 Docker Compose？

* **简化多容器应用管理**，不用手动一条条运行容器命令。
* **可复用的配置文件**，团队成员都用同一个 `docker-compose.yml`，环境统一。
* **方便本地开发和测试**，模拟生产环境的多个服务。
* **支持复杂的依赖关系和网络设置**。

---

## 一个简单的 `docker-compose.yml` 示例

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: example
```

运行

```bash
docker-compose up
```

就会启动一个 nginx 容器和一个 mysql 容器。

---

## 总结

| 关键词     | 解释                                 |
| ------- | ---------------------------------- |
| 多容器编排   | 管理和运行多个 Docker 容器                  |
| YAML 配置 | 通过 `docker-compose.yml` 文件定义服务     |
| 一键操作    | `docker-compose up/down` 启动或关闭所有服务 |

---


## 相关问题解决


