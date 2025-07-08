---
layout: post
title:  "利用docker容器镜像服务 快速复制文件"
date:   2024-08-29 12:23:05 +0800
categories: tech tools
---  


客户端A：

vi Dockerfile  

```bash
FROM scratch
ADD ./obsidian167 /obsidian167
```

```bash
FROM alpine
ADD https://a.com/b.zip /obsidian167/b.zip
```

`docker build --tag xxx:version1 .`  

`docker tag xxx:version1 registry.cn-shanghai.aliyuncs.com/name/xxx:version1`  

*docker login registry.cn-shanghai.aliyuncs.com*  

`docker push registry.cn-shanghai.aliyuncs.com/name/xxx:version1`  

`docker system prune --volumes -af`

客户端B： 

*docker login registry.cn-shanghai.aliyuncs.com*  

`docker pull registry.cn-shanghai.aliyuncs.com/name/xxx:version1`  

`docker container create --name containerName registry.cn-shanghai.aliyuncs.com/name/xxx:version1 /bin/bash`  

`docker cp containerName:/obsidian167 ./obsidian167`  



可以利用的云平台：  

AWS CloudShell 或 抢占式实例 或 lightsail  

阿里云 容器镜像服务 个人版  

腾讯云 容器镜像服务 个人版  

20250708 update :  
https://cnb.cool/ 云开发 也可以用用。