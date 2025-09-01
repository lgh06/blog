---
layout: post
title: AI编程与大模型API的相关思考
date: 2025-07-30 10:04:00 +0800
categories: thoughts
---

## 可完全白嫖的工具  

### Gemini Code Assist / Gemini Cli  
编程助手的Agent模式与Cli共享每天1000次免费额度。  
编程助手每天可问240次，自动完成6000次。  
https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist  
https://developers.google.cn/gemini-code-assist/docs/overview?hl=zh-cn  
https://github.com/google-gemini/gemini-cli  
需要跨境网络支持。  

### Trae 中国内地版  
目前完全免费。  
支持 豆包1.6、DeepSeek、Kimi K2、Qwen3 Coder等模型。  

### qwen-code  
https://npmmirror.com/package/@qwen-code/qwen-code  
配合qwen.ai账号，OAuth登录。每天白嫖2000次API调用。  
配合ModelScope，每天白嫖2000次API调用。  
> 还可配合任意OpenAI兼容的接口。  

```
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://api-inference.modelscope.cn/v1"
export OPENAI_MODEL="Qwen/Qwen3-Coder-480B-A35B-Instruct"
```

### Open Router  
日常会滚动更新一些模型名字中带有 free 的模型。  
充值10美元可提升请求频率，但10美元可能要在一年内花完。  

Open Router的连接性有时候也有问题。需要搭配合法跨境线路使用，或者使用Caddy / Nginx等服务器端软件，中转一下。  

### Trae 国际版  
手动切换到Gemini-2.5-Flash模型，每月1000次，免费。  
不要使用别的模型，不够用。（有钱大佬请充10美元 每月）  
Trae国际版在登录时会调用浏览器，同时验证访客IP所属国家。  
可以使用澳门、香港的手机卡或者ESIM或者合法跨境线路，规避IP检测问题。  

### 通义灵码  
https://lingma.aliyun.com/lingma  
目前完全免费，可以使用通义最新的模型，辅助编程。  

### Google AI Studio  
可获取API Key，（实际为关联Google Cloud账户），每天可完全免费使用Gemini 2.5 Flash模型数百次，Gemini 2.5 Pro模型数十次。  
配置到VSCode的Roo Code插件或者Cline插件上，轻量使用，够用。  
可利用境外服务器中转。  

## 需要充点钱的工具

### Github Copilot  
十美元一月，日常编程完全够用。  

### API聚合平台  
**少碰**  
硅基流动、deepbricks.ai 等。  
某些模型会比官方便宜一些。  
参见我之前的博客文章。  

### 大厂及知名小厂的官方大模型API  
豆包 在 `火山云引擎 - 方舟ark` 。  
千问 在 `阿里云 - 百炼` 。  
DeepSeek 在 `platform.deepseek.com`  。  
Kimi K2 在 `platform.moonshot.cn` (国际版域名后缀为.ai)  。  
GLM4.5 在 `bigmodel.cn` (国际版为z.ai)  。  
阶跃星辰 step3 在 `platform.stepfun.com`  。  
~~01万物 yi-lightning 在 platform.lingyiwanwu.com  。~~  

## 特别提示  
**少碰**第三方中转平台。  
> 便宜没好货 背后用啥模型冒充 鬼才知道  

如果非要使用国外先进模型，建议使用日本或新加坡的VPS中转Google Gemini。  

openai（gpt4.1 o3-mini等模型） / anthropic（claude sonnet 4等模型） / grok因为支付与风险控制问题，不建议尝试。  

> https://sealos.run/  https://run.claw.cloud/  
https://akile.io  [算力云anygpu](https://www.suanlix.cn/)  
[lightnode](https://www.lightnode.com/)  
海外服务器 厂商推荐。  

