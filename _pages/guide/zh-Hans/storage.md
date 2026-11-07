---
layout: "page"
title: "同步、存储与清理"
description: "了解哪些内容同步，以及如何管理本机文件。"
lang: "zh-Hans"
ref: "guide-storage"
guide: true
guide_chapter: "storage"
chapter_order: 10
permalink: "/zh-Hans/guide/storage/"
---

# 同步、存储与清理

{% include guide-screens.html group='storage' %}

| 内容 | 保存方式 |
| --- | --- |
| 笔记、主题与已保存成果 | 本地保存，并通过个人 iCloud 同步 |
| 聊天历史、聊天附件、生成文件 | 本机 AI 工作区，不通过 iCloud 同步 |
| Skills、应用工具及其设置 | 本机管理；敏感配置保存在本机钥匙串中 |

使用 AI 时，相关笔记、图片、音频、文件或授权的设备数据会发送给当前配置的 AI 服务。设备端运行 Sandbox 不代表 AI 推理也在设备端完成。

在「设置 > 工具与技能 > Sandbox」清理工作区会删除对应聊天和文件，不会删除原始笔记或主题；先分享或保存需要保留的产物。重置 Rootfs 会恢复附带的 Linux 环境，并丢弃该环境中的改动。
