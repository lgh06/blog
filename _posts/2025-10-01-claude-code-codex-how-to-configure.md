---
layout: post
title: "Claude Code与Codex如何配置第三方中转站"
date:   2025-10-01 19:52:00 +0800
categories: tech ai claude codex
---

## claude-code  
建议使用**智谱**，国产，包年仅需240元，日常轻量使用够用。  
### 安装claude-code  
`npm install -g @anthropic-ai/claude-code`  
### 设置环境变量  
我的电脑为macOS系统。仅供参考。  
编辑 `~/.zshrc`  
```sh
export ANTHROPIC_BASE_URL="https://open.bigmodel.cn/api/anthropic"
export ANTHROPIC_AUTH_TOKEN="aaa.bbb"

export ANTHROPIC_MODEL="glm-4.6"
export ANTHROPIC_DEFAULT_OPUS_MODEL="glm-4.6"
export ANTHROPIC_DEFAULT_SONNET_MODEL="glm-4.6"
export ANTHROPIC_SMALL_FAST_MODEL="glm-4.5-air"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="glm-4.5-air"

export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1"
```  

编辑 ~/.claude/config.json  
```json
{
  "primaryApiKey": "default"
}
```

然后就可以在terminal或者powershell/cmd内执行`claude`了。  

> [docs](https://docs.claude.com/en/docs/claude-code/overview)  
> [npm](https://www.npmjs.com/package/@anthropic-ai/claude-code)  
> [智谱](https://docs.bigmodel.cn/cn/coding-plan/tool/claude)  

## codex  
建议使用 具有缓存功能的模型或中转站。  
### 安装codex  
`npm install -g @openai/codex`  
### 创建配置文件 与 设置环境变量  
我的电脑为macOS系统。仅供参考。  
`vi ~/.codex/config.toml`  
```ini
model_provider = "deepseek"
model = "deepseek-chat"
# model_provider = "shareyourcc"
# model = "gpt-5" 
# model_reasoning_effort = "high"

# network_access = "enabled"
disable_response_storage = true


[model_providers.shareyourcc]
name = "shareyourcc"
base_url = "https://api-us.shareyour.cc/v1"
env_key = "CODEX_API_KEY_SHAREYOURCC"    
wire_api = "responses"
# requires_openai_auth = true

[model_providers.tuzi]
name = "tuzi"
base_url = "https://api.tu-zi.com/v1"
env_key = "CODEX_API_KEY_TUZI"    
wire_api = "responses"

[model_providers.duck]
name = "duck"
base_url = "https://jp.duckcoding.com/v1"
env_key = "CODEX_API_KEY_DUCKCODING"    
wire_api = "responses"

[model_providers.deepseek]
name = "deepseek"
base_url = "https://api.deepseek.com"
env_key = "CODEX_API_KEY_DEEPSEEK"    
wire_api = "chat"

```  

编辑 `~/.zshrc`:  
```sh
export CODEX_API_KEY_TUZI="sk-aaa"
export CODEX_API_KEY_SHAREYOURCC="sk-user-bbb"
export CODEX_API_KEY_DUCKCODING="sk-ccc"
export CODEX_API_KEY_DEEPSEEK="sk-ddd"
```

编辑 ~/.codex/auth.json  
```json
{
  "OPENAI_API_KEY": null
}
```


然后就可以在terminal或者powershell/cmd内执行`codex`了。  

> [npm](https://www.npmjs.com/package/@openai/codex)  
> [config](https://github.com/openai/codex/blob/HEAD/codex-cli/docs/config.md)  
