---
layout: page
title: 支持
description: AnyNotes+ 在 iPhone、iPad 和 Mac 上的帮助、常见问题和联系方式。
include_in_header: true
include_in_footer: true
lang: zh-Hans
ref: support
nav_order: 1
permalink: /zh-Hans/support/
---

# AnyNotes+ 支持

**sakeven.jiang@gmail.com**

[查看使用手册，了解初次设置、操作步骤和实际使用场景。]({{ '/zh-Hans/guide/' | relative_url }})

## 联系方式

如果你需要帮助、有问题，或者想反馈 Bug，请给我们发邮件。

## 常见问题

**AnyNotes+ 支持哪些平台？**

提供 iPhone、iPad 和原生 Mac 使用体验。设备数据工具与录音实时整理属于 iOS 功能，具体差异可查看使用手册。

**哪些内容会跨设备同步？**

笔记与主题通过个人 iCloud 同步；聊天历史、AI 工作区文件、Skills 和应用工具配置保存在各自设备上。

**录音和实时语音对话有什么区别？**

录音用于把你的声音保存成笔记，API Key 模式还能实时整理；实时语音则是与 AI 双向交流，可以接着已有聊天继续。

**使用 AI 功能需要什么？**

iPhone 和 iPad 需要 AnyNotes Pro，并配置 API Key 或登录 Codex；Mac 版无需 AnyNotes Pro。AI 服务用量单独计算，功能可用性取决于你的账号。

## AI Chat Linux Sandbox

AI Chat 内置设备端 Alpine Linux 模拟器，可执行 Shell 命令与脚本，用于处理文件、计算和生成图表、文档。你可以在只读终端面板查看已执行的命令及输出、停止运行中的命令，并预览或分享生成的文件。运行环境支持下载 Linux 软件包，以及从 ZIP 文件或 GitHub 导入 AI Skills。可在「设置 > 工具与技能 > Sandbox」管理本地工作区存储。AI 服务与下载需要网络连接。

**在哪里使用？**

打开「设置 > 工具与技能 > Sandbox」查看运行环境和工作区状态。在 AI Chat 中点击 Sandbox 命令活动，可查看执行的命令、实时输出、状态和耗时。终端面板只读，任务通过 AI Chat 输入，也可停止运行中的命令。「设置 > 工具与技能 > Skills」用于管理导入的技能及其脚本。

**文件存在哪里？清理会删除什么？**

脚本、输入、生成文件和可恢复的对话保存在本地 AI 工作区，不通过 iCloud 同步。删除工作区会移除这些文件及保存的对话，但不会删除原始笔记或 Topic。重置 Rootfs 会将 Linux 环境恢复为随应用附带的版本，并丢弃该环境中的修改。
