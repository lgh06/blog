---
layout: post
title: "在claude-code和codex中增加完成提示"
date:   2026-01-10 20:22:00 +0800
categories: tech 
---

## claude-code macOS  
~/.claude/settings.json  
json文件中，增加 hooks 键：
```json
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "command": "/Applications/terminal-notifier.app/Contents/MacOS/terminal-notifier -title \"Claude Code\" -message \"任务已完成✅\" -sound default -group \"Claude Code\" -activate 'com.microsoft.VSCode'",
            "type": "command"
          }
        ],
        "matcher": "*"
      }
    ]
  }
```

terminal-notifier 来自于github 或homebrew  

## codex macOS  
~/.codex/config.toml  
```toml
notify = [
    "terminal-notifier",
    "-title","Codex",
    "-message","任务已完成✅",
    "-sound","Ping",
    "-group","Codex",
    "-activate","com.microsoft.VSCode"
]
```

## 提示  
不能开勿扰模式  
系统设置 Notification 中，打开通知权限  
隐私和安全中，允许安装和打开terminal-notifier  
chmod a+x  

参数说明:

title: 大标题
message: 提示信息
sound: 音频文件, 来源 /System/Library/Sounds, 只需要写文件名
group: 分组ID, 只会显示同一个group下的最后消息
activate: 点击通知后激活的app, 后面的是包名, 在xxx.app/content/plist中, CFBundleIdentifier字段对应的值, 我现在配置的是VS Code
