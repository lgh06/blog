---
layout: post
title: "阿里云FC与Cloudflare Workers对比"
date: 2025-05-21 09:50:00 +0800
categories: tech
---

## 阿里云 FC(Function Compute) 3.0  
完整语言环境，程序无需特别修改。感觉类似docker。  
没有的语言可以通过 层 来自己加载。
有冷启动的时间。  
部署地点单一，需要额外再套一层CDN。  
本身没有rate limit。  

## Cloudflare Workers  
简化的语言环境，程序需要特别修改。 （仅从深度体验过的Node环境来说）  
无法支持其他自定义语言。  
无冷启动的时间。  
部署地点全球化，本身就可以当CDN。  
本身有rate limit功能，可以防止恶意请求。  

其它优点：
- 纯静态资源（不经过JS代码的静态资源），请求数不计费。（相当于完全免费）  
- 流量不计费。  
- 在函数内请求其它第三方资源时，CPU时间不计费。  