---
layout: post
title:  "Docker初探"
date:   2016-11-16 09:54:43 +0800
categories: linux
---
这几天在用Docker来折腾ffmpeg和gpac(mp4box);  
不记一记，真的是乱，虽然用了为知笔记。  

#### 下载与安装  
[https://www.docker.com/](https://www.docker.com/)  
最好还是从官网下载，看官网的教程。但是，mirror也不可少。  
推荐[网易蜂巢](https://c.163.com/),
[阿里云](https://cs.console.aliyun.com/),
[灵雀云](http://www.alauda.cn/),
[DaoCloud](https://www.daocloud.io/)
的镜像服务和加速器服务。  


#### 小试牛刀  
打开命令行，  
```  
docker run -it lgh06/alpine-bash /bin/bash  
```  
连上网，稍作等待，一个超小型的linux发行版alpine，便出现在你面前。  
```docker run```就是启动容器的，需要指定使用的镜像和要执行的命令。  
本地没有的话，会自动从[Docker Hub](http://hub.docker.com)上拉取。  
默认的Docker Hub是官方的，所以不需要指定网址，如果使用阿里云或者网易的镜像服务，
需要写完整的地址，比如：   
```  
docker run --rm --expose 80 -i -p 8080:80 -t   hub.c.163.com/liugh0/nginx:0.0.0.4.5 /bin/bash -c "/usr/sbin/nginx; /bin/bash"    
```  
Nginx便会在容器的80端口运行，宿主机的8080端口和容器的80端口做了映射，可以打开localhost:8080试试。  

#### 常用命令  
```
docker run [--rm,--name,--expose,-i,-p,-t,-c] (首次)启动容器，运行镜像  
docker ps [-a] 列出容器  
docker images 列出镜像  
docker rm $containerid 删除容器，后面的id可以简写，也可以用名字，只打前几位就行，也可以打多个，空格隔开  
docker rmi $imageid 删除镜像  
docker start [-i] $containerid  启动已存在容器  
docekr stop $containerid 停止正在运行容器  
docker exec $containerid command 在正在运行的容器内执行新命令  
docker login 登陆某个docker hub  
docker tag $imageid $imagetag 给某个image打tag，以便区分和上传  
docker push $imagetag  
docker cp $containerid:/path/file $hostpath/hostfile host和container之间复制文件 参数位置可以颠倒  
```  

#### 其它  
建议试试官方hub和国内的几个hub。  
其实可以gpg加密文件，然后把hub当大文件存储器的……  
阿里云和官方hub，都有国外的构建服务器，因此可以写个Dockerfile把他们当做下载服务器用，尤其是一些代码，github网络不好的时候……  


#### see also  

> https://blog.giantswarm.io/moving-docker-container-images-around/  
> http://stackoverflow.com/questions/23935141/how-to-copy-docker-images-from-one-host-to-another-without-via-repository  
> http://jicki.blog.51cto.com/1323993/1606232  
> http://unix.stackexchange.com/questions/125965/terminal-prompt-changed-to-bash-4-2-and-colors-lost  

如果有什么链接失效了，建议用[http://web.archive.org/](http://web.archive.org/),历史版本，长期存储。当然最好还是OfflineExplorer或者为知笔记。  
本文默认读者自带梯子技能。
