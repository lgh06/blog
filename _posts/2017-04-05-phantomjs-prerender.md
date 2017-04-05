---
layout: post
title:  "phantomjs/预渲染/seo"
date:   2017-04-05 09:57:34 +0800
categories: seo
---

# 选择使用PhantomJS的方式
* [phantom](https://www.npmjs.com/package/phantom)包
* [phantom-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt)包
* [官网](http://phantomjs.org/)命令行工具

# 监听DOM改变
* 定时检查页面中的某个元素是否含有某些子元素
* [Mutation events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events)
/
[Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

# nginx proxy_pass
结合 express ，使用 nginx 的 location/rewrite/proxy_pass选项，  
把请求导入到phantomjs这一套中。