---
layout: post
title: 网页中的中文字体引入，与我喜欢的几个字体
date: 2025-08-03 17:44:00 +0800
categories: tech
---

## `@font-face` 与 `unicode-range`

新版本浏览器支持了 `@font-face` 与 `unicode-range` ， 可以自动根据网页页面上用到的文字，查找unicode编码，从而自动下载字体的分片文件。  
> [MDN链接 @font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
> [MDN链接 unicode-range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range)  

## 中文字体切分工具  
https://github.com/KonghaYao/cn-font-split  
https://chinese-font.netlify.app/zh-cn/

## 我喜欢的几个字体及字体作者  

### LxgwWenKai 霞鹜文楷  
https://github.com/lxgw/LxgwWenKai  
对应的有GB版本，更符合中国内地的汉字笔画标准。  
Mono为等宽字体的意思。  

### 缝合像素字体  
https://github.com/TakWolf/fusion-pixel-font  
建议使用12px的版本 无版权风险 不缺字  

### 点点像素  
https://github.com/wixette/dotted-chinese-fonts  

### 文泉驿点阵宋体  
https://github.com/AmusementClub/WenQuanYi-Bitmap-Song-TTF  

### 字体作者 特里王  
京華老宋体  [1.0](https://zhuanlan.zhihu.com/p/637491623)  [2.0](https://zhuanlan.zhihu.com/p/677725322)  [2.0公众号文章](https://mp.weixin.qq.com/s/ZUE-F5Uv-L4VxKtV98066w)  
匯文系列字體  https://zhuanlan.zhihu.com/p/12669052378  
> 匯文明朝體  https://zhuanlan.zhihu.com/p/344103391  
> 纳米老宋  https://github.com/Hansha2011/NanoOldSong

## 几个字体站及CDN  

ZSFT  https://fonts.zeoseven.com/  
https://chinese-font.netlify.app/zh-cn/  
猫啃网  https://www.maoken.com/  
https://zfont.cn/  
https://ziyouziti.com/  

https://cdnjs.com/  
https://cdnjs.com/libraries/lxgw-wenkai-webfont  
https://www.jsdelivr.com/  
https://fastly.jsdelivr.net/npm/lxgw-wenkai-webfont/  
https://gcore.jsdelivr.net/npm/lxgw-wenkai-webfont/  
https://quantil.jsdelivr.net/npm/lxgw-wenkai-webfont/  
https://testingcf.jsdelivr.net/npm/lxgw-wenkai-webfont/  

## 其它可托管字体的平台  
github + jsdelivr / unpkg.com  
npm + jsdelivr / unpkg.com  
https://cnb.cool  
还有，看以前的博客文章