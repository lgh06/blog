---
layout: post
title:  "ssh-keygen与ssh-copy-id的用法"
date:   2025-09-03 12:22:00 +0800
categories: tech tools
---

## 简介

`ssh-keygen` 和 `ssh-copy-id` 是 OpenSSH 工具集中非常实用的两个命令，它们配合使用可以方便地实现基于密钥的 SSH 无密码认证，从而提高服务器访问的安全性与便捷性。

- **`ssh-keygen`**: 用于生成、管理和转换认证密钥。
- **`ssh-copy-id`**: 用于将本地的公钥（`id_rsa.pub`）复制到远程主机的 `~/.ssh/authorized_keys` 文件中。

## `ssh-keygen` 的用法

`ssh-keygen` 命令用于创建一个新的 SSH 密钥对（一个私钥和一个公钥）。

### 1. 生成默认密钥对

直接运行以下命令即可生成一个默认的 RSA 密钥对：

```bash
ssh-keygen
```

执行过程中，系统会提示您：
- **选择密钥文件的保存位置**：可以直接按回车键接受默认路径（通常是 `~/.ssh/id_rsa`）。
- **设置私钥的密码（passphrase）**：这是一个可选的安全增强措施。如果设置了密码，每次使用私钥时都需要输入该密码。如果不需要，可以直接按回车键跳过。

### 2. 生成指定类型的密钥对

您也可以使用 `-t` 参数指定密钥的类型，例如生成一个更安全的 `ed25519` 类型的密钥：

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
- `-t ed25519`: 指定密钥类型为 ed25519。
- `-C "your_email@example.com"`: 为密钥添加一个注释，通常是您的邮箱地址，方便识别。

## `ssh-copy-id` 的用法

当您生成了密钥对之后，需要将公钥（默认为 `~/.ssh/id_rsa.pub`）的内容添加到您希望无密码登录的远程服务器上。`ssh-copy-id` 命令可以自动完成这个过程。

### 1. 复制公钥到远程服务器

假设远程服务器的用户名是 `user`，IP地址是 `remote_host`，执行以下命令：

```bash
ssh-copy-id user@remote_host
```

系统会提示您输入 `user` 在 `remote_host` 上的登录密码。输入正确密码后，`ssh-copy-id` 会自动将您的公钥追加到远程服务器的 `~/.ssh/authorized_keys` 文件中。

### 2. 指定要复制的公钥文件

如果您的公钥文件不是默认的 `id_rsa.pub`，可以使用 `-i` 参数指定其路径：

```bash
ssh-copy-id -i ~/.ssh/my_other_key.pub user@remote_host
```

## 验证无密码登录

完成上述步骤后，尝试再次通过 SSH 连接到远程服务器：

```bash
ssh user@remote_host
```

如果一切顺利，您应该可以直接登录，无需再输入密码。
