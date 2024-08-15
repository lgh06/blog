---
layout: post
title:  "使用Nexus3搭建局域网私有docker registry"
date:   2024-08-15 12:23:05 +0800
categories: tech tools
---  

https://github.com/sonatype/docker-nexus3  

```
$ docker run -d -p 8081:8081 -p 5000:5000 --name nexus sonatype/nexus3
```

```
/etc/docker/daemon.json:  

"insecure-registries": [
    "172.24.0.0/8"
  ],
```

```
docker login 172.24.88.68:5000  

docker tag xxx 172.24.88.68:5000/aaa:v3  
docker push 172.24.88.68:5000/aaa:v3  
```

5000端口需要在Nexus3中设置HTTP端口，  
也要在docker中暴露至宿主机。  

安全 - Realm 的设置中，也要把 Docker Bearer Token Realm  启用。

![](/blog/2024/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17237078643708.png!1)  

![](/blog/2024/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17237079229128.png!1)