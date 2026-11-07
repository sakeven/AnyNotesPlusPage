---
layout: page
title: 支援
description: AnyNotes+ 在 iPhone、iPad 和 Mac 上的說明、常見問題與聯絡方式。
include_in_header: true
include_in_footer: true
lang: zh-Hant
ref: support
nav_order: 1
permalink: /zh-Hant/support/
---

# AnyNotes+ 支援

**sakeven.jiang@gmail.com**

[查看使用手冊，瞭解初次設定、操作步驟與實際使用情境。]({{ '/zh-Hant/guide/' | relative_url }})

## 聯絡方式

如果你需要協助、有問題，或想回報 Bug，請寄信給我們。

## 常見問題

**AnyNotes+ 支援哪些平台？**

提供 iPhone、iPad 和原生 Mac 使用體驗。裝置資料工具與錄音即時整理屬於 iOS 功能，差異可查看使用手冊。

**哪些內容會跨裝置同步？**

筆記與主題透過個人 iCloud 同步；聊天記錄、AI 工作區檔案、Skills 和 App 工具設定保存在各自裝置上。

**錄音和即時語音對話有什麼差別？**

錄音用於把你的聲音儲存成筆記，API Key 模式還能即時整理；即時語音則是與 AI 雙向交流，可以接著既有聊天繼續。

**使用 AI 功能需要什麼？**

iPhone 和 iPad 需要 AnyNotes Pro，並設定 API Key 或登入 Codex；Mac 版無需 AnyNotes Pro。AI 服務用量另計，功能可用性取決於你的帳號。

## AI Chat Linux Sandbox

AI Chat 內建裝置端 Alpine Linux 模擬器，可執行 Shell 指令與指令碼，用於處理檔案、計算及產生圖表、文件。你可以在唯讀終端機面板查看已執行的指令及輸出、停止執行中的指令，並預覽或分享產生的檔案。執行環境支援下載 Linux 軟體套件，以及從 ZIP 檔案或 GitHub 匯入 AI Skills。可在設定的工具與技能中開啟 Sandbox，管理本機工作區儲存空間。AI 服務與下載需要網路連線。

**在哪裡使用？**

在設定的工具與技能中開啟 Sandbox，可查看執行環境與工作區狀態。在 AI Chat 中點選 Sandbox 指令活動，可查看執行的指令、即時輸出、狀態與耗時。終端機面板為唯讀，任務透過 AI Chat 輸入，也可停止執行中的指令。設定 > 工具與技能 > Skills 用於管理匯入的技能及其指令碼。

**檔案儲存在哪裡？清理會刪除什麼？**

指令碼、輸入、產生的檔案與可還原的對話儲存在本機 AI 工作區，不透過 iCloud 同步。刪除工作區會移除這些檔案及儲存的對話，但不會刪除原始筆記或 Topic。重設 Rootfs 會將 Linux 環境還原為隨 App 附帶的版本，並捨棄該環境中的修改。
