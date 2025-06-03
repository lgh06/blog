---
layout: post
title: "CDN厂商们，https请求数就别收费了"
date: 2025-05-25 16:50:00 +0800
categories: tech
---  

## 背景
浏览器基本上都强制要求HTTPS了（否则不给某些重要的浏览器本地权限），SSL证书也要47天申请一次了。  
国内CDN，除了动态内容要收费（基本上0.2元/万次），https请求书也要收费（0.05元/万次）。  

这是逼着大家的API接口裸奔。  

或者API接口全都部署在Serverless服务上。  
（阿里 腾讯 CF 华为 AWS 等，每百万次的成本也就五块钱左右。）  

静态CDN是离不了的，图片CDN也离不了，所以就看哪家便宜了，外加HTTPS请求数不收费。  

阿里云和腾讯云是不行了。每GB单价贵，又收HTTPS请求费。  
每个月免费的几百万次HTTPS次数就像是逗你玩。  

## 其它选择
华为云 可以试试。静态资源没说要收请求数的费，也没说HTTPS请求数的费。  

青云 也可以试试，0.23/G，也没写HTTPS请求数的事。  

> https://www.bitiful.com/ 1000G每月存储费65元。流量费0.12元/GB。请求费2元/百万次。  
> https://beta.yunwu.net/  
> https://www.dfyun.com.cn/  
> https://www.dogecloud.com/ HTTPS请求数收费 0.04元/万次。


## 海外  
😄Cloudflare  
> 需要把NS记录指向Cloudflare。  
> Cloudflare R2 请求数要收费，存储费不算贵，流量免费。  


😔AWS Cloudfront  
> 回源单独收费。  (亚太区0.06美元/GB)  


😄lightCDN （无最低消费，不支持IPV6）  

Bunny (有最低消费，每月1美元)  

wasabi / backblaze 大容量存储，便宜，有最低消费  
> wasabi 低消7美元每月，1TB容量，流量每月不大于存储量则免费。  
> backblaze低消6美元每月，1TB容量，每月(3倍存储量)的流量以内免费。或者15美元每月每TB，无限流量，仅限大客户，需要签合同  





