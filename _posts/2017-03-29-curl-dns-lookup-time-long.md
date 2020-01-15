---
layout: post
title:  "curl解析dns时间过长"
date:   2017-03-29 14:55:15 +0800
categories: dev php
---
### curl查看响应时间  
```bash
curl -o /dev/null -s -w %{http_code}:%{http_connect}:%{content_type}:%{time_namelookup}:%{time_redirect}:%{time_pretransfer}:%{time_connect}:%{time_starttransfer}:%{time_total}:%{speed_download} http://www.baidu.com
```
> http://blog.csdn.net/zhongyuan_1990/article/details/46634399

### nslookup  
```
yum -y install bind-utils
使用nslookup/host/dig命令
```

或者，tracert/traceroute/tracepath

### php中的curl  
```  
curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4); //禁止解析IPV6 直接IPV4
```  
> http://stackoverflow.com/questions/8712167/curl-namelookup-time-of-10-seconds  

或者，去修改系统的dns设置，或者去看看curl的  
