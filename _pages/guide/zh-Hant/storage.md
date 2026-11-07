---
layout: "page"
title: "同步、儲存與清理"
description: "了解哪些內容同步，以及如何管理本機檔案。"
lang: "zh-Hant"
ref: "guide-storage"
guide: true
guide_chapter: "storage"
chapter_order: 10
permalink: "/zh-Hant/guide/storage/"
---

# 同步、儲存與清理

{% include guide-screens.html group='storage' %}

| 內容 | 儲存方式 |
| --- | --- |
| 筆記、主題與已儲存成果 | 本地儲存，並通過個人 iCloud 同步 |
| 聊天歷史、聊天附件、生成檔案 | 本機 AI 工作區，不通過 iCloud 同步 |
| Skills、App 工具及其設定 | 本機管理；敏感配置儲存在本機鑰匙圈中 |

使用 AI 時，相關筆記、圖片、音頻、檔案或授權的裝置資料會發送給當前配置的 AI 服務。裝置端運行 Sandbox 不代表 AI 推理也在裝置端完成。

在「設定 > 工具與技能 > Sandbox」清理工作區會刪除對應聊天和檔案，不會刪除原始筆記或主題；先分享或儲存需要保留的產物。重置 Rootfs 會恢復附帶的 Linux 環境，並丟棄該環境中的改動。
