---
layout: post
title:  "新时代的点播与直播"
date:   2016-10-27 11:32:15 +0800
categories: work live
---

### DASH及MSE
MSE([Media Source Extensions][1])是目前Youtube使用的DASH的基础。  
MSE内置在新版浏览器内，使JS有直接操作字节流(byte stream)的能力，用JS可以实现文件的拼接。

[一个简单的demo][2]([源码][3])(只实现了分段加载，拖拽播放有bug)  
简单说明流程：  
创建video标签和MediaSource实例，然后  
```
video.src = URL.createObjectURL(mediaSource);  
```   
video的src指向了一个虚拟URL，这个虚拟URL指向mediaSource内的内容  
ajax每次请求到的视频片段内容，都添加到mediaSource内，这个虚拟文件会变大。不会有手工替换src内的url出现播放闪断的现象。

后端视频文件服务器要做的：  

支持HEAD请求(返回文件大小等信息 方便mediaSource对byte操作)  
支持[跨域][4]、支持[OPTIONS请求][4](需要添加多个响应头)  
支持206 partial content、Range、Accept-Ranges等请求响应头   
(新版[nginx][6]内置[ngx_http_range_filter_module][5]，默认支持)

可选：对文件切片



### [DASH][7]与[HLS][8]

DASH需要搭配MSE使用，而苹果主推的HLS需要搭配m3u8来使用。

由于视频分段加载，浏览器并不能准确定位文件byte和播放时间的关系，因此拖拽会出现bug。
所以DASH与HLS都会额外生成一个描述文件(一般是mpd或m3u8)，对应分段文件的byte与播放时间的关系。  

服务器端实现参见文末的参考资料以及文章内的链接。  
方案多样，
主要有mp4box/ffmpeg/nginx扩展等


### 兼容性
HLS在安卓和iOS上支持较好，但桌面浏览器不支持。  
DASH在新版桌面浏览器和新版安卓上支持较好，但手机端iOS不支持DASH和MSE。

[新版iOS的HLS支持了mp4切片格式][10]，但只有设备升级或者最新的iPhone才可以支持。  

目前来看至少需要两种格式：mp4格式以及基于MPEG-2的ts格式，才可跨平台。  
未来可以只用mp4格式。  

老版本IE只能沿用Flash的点播+直播方案。



### 直播与点播
直播与点播的区别主要在于对直播流实时生成切片文件，以及产生的描述文件稍有不同。  
采用DASH或HLS，直播延时无法避免，主流网站都存在10s以上的延时，以便有时间对直播流转码、切片。

电脑端浏览器直播还有其他方案，不一定非要用DASH或HLS。比如沪江网使用了[icecast][9]，  
也可使用MSE+WebSocket等。

移动端浏览器直播目前只有HLS兼容性最好。

### 目前建议
可以先在桌面端新版浏览器上测试DASH方案。

其它沿用旧方案
(
移动端浏览器直播：HLS,
移动端浏览器点播：mp4,
桌面浏览器端：flash
)



#### 参考资料(自备梯子)  

> http://dashif.org/software/  
> https://developer.apple.com/streaming/  
> http://blog.csdn.net/cjsafty/article/details/7922849   
> https://docs.webplatform.org/wiki/tutorials/MSEPrimer  
> https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/  
> http://www.wirewax.com/blog/post/building-a-media-source-html5-player （系列文章）  
> https://msdn.microsoft.com/en-us/library/dn551368(v=vs.85).aspx  
> https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources  
> https://www.brendanlong.com/the-structure-of-an-mpeg-dash-mpd.html  
> https://bitmovin.com/mp4box-dash-content-generation-x264/  
> http://yaocoder.blog.51cto.com/2668309/1435771  
> http://www.cc.ntu.edu.tw/chinese/epaper/0033/20150620_3308.html    
> https://github.com/google/shaka-player

[1]: https://developer.mozilla.org/en-US/docs/Web/API/MediaSource
[2]: http://nickdesaulniers.github.io/netfix/demo/bufferWhenNeeded.html
[3]: https://github.com/nickdesaulniers/netfix/tree/gh-pages/demo
[4]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing    
[5]: http://lxr.nginx.org/source/src/http/modules/
[6]: http://nginx.org/en/docs/  

[7]: https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP
[8]: https://en.wikipedia.org/wiki/HTTP_Live_Streaming

[9]: http://icecast.org/
[10]: https://en.wikipedia.org/wiki/HTTP_Live_Streaming#Using_fragmented_MP4
