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

华为云： 区域设置为全球，源站设置为cloudflare，一次设置，从境内与境外请求静态资源，都成功。  

abxcdn：也就是beta.yunwu.net，分销的基本都是**火山云**和腾讯云。香港有一些自建服务器。  
区域设置为全球，源站设置为cloudflare，从境内请求静态资源，成功。  
境外请求，状态码403，联系客服后状态码变为200，成功。  

~~阿里云CDN~~：区域设置为全球，源站设置为cloudflare，境内境外都大范围403.  
经排查，不是回源HOST的问题，也不是回源SNI的问题，也不是refer的问题，反正不知道是哪里的问题。  

其它CDN： 还没测。要么收请求次数费，要么收https费，要么收回源费，要么就是每GB单价太贵。  