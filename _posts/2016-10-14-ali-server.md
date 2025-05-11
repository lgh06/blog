---
layout: post
title:  "分分钟搭建大带宽按量付费的加速网络"
date:   2016-10-14 09:37:00 +0800
categories: tutorial wall
published: false
---

### 前言
这世界上的知识很多，就看自己会不会加以筛选，利用。  
同样，互联网时代，公司多，产品多，多到名词记不住，多到好东西卖不出。  

阿里云的海外主机，支持按小时付费，带宽支持按使用量计费。  
**带宽峰值**可以调到很高，依旧只按**实际流量**付费。  
重点还有，支持**快照**和**镜像**。  
服务器配置好了，可以备份整个硬盘数据，直接挂载在新服务器上。  

### 开干

注册阿里云并登陆，充值至少100元（开通按量付费余额需大于100元）。  

按下图找到ECS，切换到按量付费。  
![1](http://hlcdn.onlinetool.cc/blog/2016/10/14/1.png)  
![2](http://hlcdn.onlinetool.cc/blog/2016/10/14/2.png)


如图选择配置，看，才0.165元一个小时，带宽1元每G。  

![3](http://hlcdn.onlinetool.cc/blog/2016/10/14/3.png)

选择操作系统(建议CentOS7)，创建root密码，立即购买，然后会让确认配置，点击去开通按钮。  
可以设置自动释放时间，避免遗忘，扣费太多。  
**余额大于100元！不够的去充值！**  
![4](http://hlcdn.onlinetool.cc/blog/2016/10/14/4.png)  
![5](http://hlcdn.onlinetool.cc/blog/2016/10/14/5.png)

接下来，回到管理控制台，查看服务器ip，使用putty或者自带ssh来连接服务器（略，自行Google）。    
![6](http://hlcdn.onlinetool.cc/blog/2016/10/14/6.png)  
![7](http://hlcdn.onlinetool.cc/blog/2016/10/14/7.png)  

或者，直接用网页版的终端：  
![8](http://hlcdn.onlinetool.cc/blog/2016/10/14/8.png)  
![9](http://hlcdn.onlinetool.cc/blog/2016/10/14/9.png)  
![10](http://hlcdn.onlinetool.cc/blog/2016/10/14/10.png)   

输入root回车 密码回车。  
输入密码的时候并不会有占位符，并不影响使用。   

安装服务，开机自启动：  
```
pip install shadowsocks 
vi /etc/rc.local  
然后就进入了vi 此时按i 进入编辑模式，增加一行  
ssserver -p 10680 -k test --user nobody -d start  
然后依次输入 esc ， :wq ，回车 （没有空格没有逗号，只用按键盘上的esc，然后输入标点和英文即可）  
```  

赋予权限，重启生效：    
```
chmod a+rx /etc/rc.local
reboot
```  
然后步骤不多说了。 自己配置客户端去。[windows](http://hlcdn.onlinetool.cc/blog/2016/10/14/sss.windows.zip) [android](http://hlcdn.onlinetool.cc/blog/2016/10/14/sss.apk)

服务器ip就是香港vps的公网ip，端口就是10680，密码就是test，加密方式默认aes-256-cfb。  

实测高峰期1080P油管无压力！  

接下来重点，**创建自定义镜像**  
![12](http://hlcdn.onlinetool.cc/blog/2016/10/14/12.png)  
以后你在购买页面，就能直接选择这个镜像，而不用选CentOS7自己配置了，  
里面的服务都安装好了，开机就会自动运行了……爽不……？

p.s. 按量付费的服务器都快被玩坏了，  
所以如果ping不通的话，建议新创建一个实例（反正都有镜像了，点点鼠标就好了）……  
按量付费，不用了请释放资源，要用的时候两三分钟建好，适合大带宽需求……  
日常浏览网页的话，建议买别人搭建的现成的。  
That's all.


> see also:  
https://github.com/shadowsocks/shadowsocks/blob/master/README.md  
https://shadowsocks.org/en/config/quick-guide.html  