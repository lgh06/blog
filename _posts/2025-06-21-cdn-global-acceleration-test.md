---
layout: post
title: "CDN全球加速能力实测"
date: 2025-06-21 22:13:00 +0800
categories: tech
---

## 背景  
阿里云OSS境外区域流入到Cloudflare的流量，免流量费（请求次数费继续收）。  
（原因是Cloudflare搞了个带宽联盟，alibaba cloud加入了）  

## 基本原理  
CDN**一般情况**下，只收取CDN流出流量（从CDN服务器到最终用户的流量）的费用，不收取从源站到CDN的流量的费用。  
再套上一层CDN的目的，是加速境内用户的访问。  
因此CDN的加速区域最好选择全球，境内用户使用此CDN，计费仍按照境内价格计费。  
境外用户直接访问cloudflare即可，无需再套CDN。  

## 结论  

😊华为云： 区域设置为全球，源站设置为cloudflare，一次设置，从境内与境外请求静态资源，都成功。  

😑abxcdn：也就是beta.yunwu.net，分销的基本都是**火山云**和腾讯云。香港有一些自建服务器。  
区域设置为全球，源站设置为cloudflare，从境内请求静态资源，成功。  
境外请求，状态码403，联系客服后状态码变为200，成功。  

😭dogecloud：腾讯云分销商，流量费比腾讯云官方便宜，https仍然要收费。加速区域设置为全球，源站为cf，国内基本都不正常。回源地址设置为cf的优选域名后，基本正常。 所以加速区域选择哪里并不重要。可见腾讯云的CDN智能回源能力也很一般。update：已经换回dogecloud自带云存储+CDN。  

😭Bitiful CDN: https回源成功，功能正常。加速区域宣传为全球，实际只能自助设置为境内。网宿/字节跳动的分销商。流量便宜，0.12元/GB。暂不收请求费用。控制台功能简陋，无法自定义设置响应头、过期时间等。仅适合分发静态文件。暂不推荐。  

~~😭阿里云CDN~~：区域设置为全球，源站设置为cloudflare，境内境外都大范围502.  
经排查，不是回源HOST的问题，也不是回源SNI的问题，也不是refer的问题，反正不知道是哪里的问题。不推荐。  

> 特别提示 由于CDN的源站是Cloudflare，因此源站地址可以设置为time.is / ip.skk.moe / ping.pe 等，Cloudflare优选cname亦可，只需要回源Host及回源SNI配置正确即可。  


其它CDN： 还没测。要么收请求次数费，要么收https费，要么收回源费，要么就是每GB单价太贵。  