---
layout: post
title:  "postMessage与localStorage跨域"
date:   2017-01-06 09:57:21 +0800
categories: dev cors
---
### 背景：
半年前，我用localStorage，遗憾地发现不能跨域，甚至子域都不行，当时就用了cookie，传一些重要参数，别的再从服务器请求。  
其实可以用iframe来搞定好多跨域问题，尤其是在postMessage推出以后，不过postMessage是异步的。  

### 简要原理：
首先写一个hub页面，里面写一些操作localStorage的方法。  
主页面的iframe引入hub，用js获取iframe的```contentWindow```属性，可以访问到iframe的window，主页面可以调用```contentWindow```里面刚才写的localStorage的方法。（注意设置```document.domain```）  

或者使用异步的```window.postMessage```方法，在主页面和iframe页面之间传递消息，iframe当作仓库，都存在iframe的localStorage里面。

自己写的postMessage跨域存储的[demo](https://github.com/WeBest-test/testPostMessage)  
另外的一个跨域存储库[corss-storage](https://github.com/zendesk/cross-storage/)
