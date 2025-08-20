---
layout: post
title:  "利用docker容器镜像服务 快速传输大文件"
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

20250814 update :  
搭配 vmoscloud 云手机、  www.suanlix.cn 云电脑  
wetransfer.com 、 cnb.cool   
> 外加 wenshushu.cn / 123pan.com / 百度网盘 等
可以快速下载文件 。  

20250820 update :  
1. 云手机、云电脑 （新加坡、日本、香港） 下载大文件  
2. 阿里云OSS 海外区域（最好与云手机云电脑同区域） 将大文件上传  
   > oss.console.aliyun.com  

3. 给阿里云OSS绑定域名，域名套上cloudflare  
   > 绑定一次即可  

4. 去cnb.cool 优选cf hosts，将大文件下载至cnb  
5. npx serve . -p 3000 或 git 将大文件提交  