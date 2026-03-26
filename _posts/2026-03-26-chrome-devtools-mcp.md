---
layout: post
title: "利用chrome-devtools-mcp实现AI控制浏览器"
date:   2026-03-26 19:35:02 +0800
categories: ai
---

## 准备工作  
- 下载Chrome浏览器，版本号 144 或更新。  
  > https://www.google.cn/chrome/  
  或者换个DNS再试试
- 打开Chrome，地址栏输入 `chrome://inspect/#remote-debugging` , 勾选小对勾 ☑️  

- 安装好node和npm 可以去 npmmirror.com 或 nodejs.org

- 安装好opencode
  > npm i -g opencode-ai
  > 也可以去用 [trae.cn](https://www.trae.cn)
- 为你的AI Agent配置chrome-devtools-mcp
  > 举例 opencode 需要去 ~/.config/opencode/opencode.json中的mcp内添加
  ```json
    "chrome-devtools": {
      "type": "local",
      "enabled": true,
      "command": [
        "npx",
        "-y",
        "chrome-devtools-mcp@latest",
        "--autoConnect"
      ]
    }
  ```


## 其它
如果是windows系统，最好去安装powershell 7  

> https://learn.microsoft.com/en-us/powershell/scripting/install/install-powershell-on-windows?view=powershell-7.6  

可以减少opencode / kilocode 的报错、显示混乱问题。

