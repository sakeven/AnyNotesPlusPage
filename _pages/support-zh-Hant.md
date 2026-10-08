---
layout: page
title: 支援
description: AnyNotes+ 在 iPhone 和 iPad 上的說明、常見問題與聯絡方式。
include_in_header: true
include_in_footer: true
lang: zh-Hant
ref: support
nav_order: 1
permalink: /zh-Hant/support/
---

# AnyNotes+ 支援

**sakeven.jiang@gmail.com**

## 聯絡方式

如果你需要協助、有問題，或想回報 Bug，請寄信給我們。

## 常見問題

**問：AnyNotes+ 支援 iPhone 和 iPad 嗎？**

答：支援。AnyNotes+ 已在 App Store 上提供 iPhone 與 iPad 版本，並在不同裝置上維持一致的擷取流程。

**問：筆記是如何儲存的？**

答：你的筆記保存在你自己的 iCloud 儲存空間中，透過 CloudKit 同步，而不是放在共享服務資料庫裡。

**問：使用 AnyNotes+ 需要另外建立帳號嗎？**

答：不需要。AnyNotes+ 不要求另外建立帳號系統。你的筆記仍然綁定在你的裝置與 iCloud 帳號下。

**問：AnyNotes+ 可以擷取哪些內容？**

答：你可以記錄簡短文字、語音、照片，以及透過 iOS 分享選單從其他 App 傳進來的內容，包括連結與圖片。

**問：AnyNotes+ 能把語音、照片和連結整理成摘要嗎？**

答：可以。AI 收件匣會在筆記儲存後，把輸入整理成更清楚的標題、摘要、結果卡片與建議下一步。

**問：什麼是主題？**

答：主題會把相關筆記放進同一個持續演進的工作區，讓你把目前結論、最近變化與下一步放在一起，而不是留下許多孤立筆記。

**問：主題和資料夾一樣嗎？**

答：不完全一樣。資料夾主要是存放筆記，而主題更強調讓相關筆記圍繞同一個綜合結論持續推進。

**問：AI 功能需要訂閱嗎？**

答：需要。AI 功能需要 AnyNotes Pro。

**問：使用 AI 功能還需要其他東西嗎？**

答：需要。你還需要在 App 內提供自己的 OpenAI API key，或使用 Codex 登入。

**問：我可以刪除或匯出筆記嗎？**

答：可以。你可以隨時在 App 中匯出或刪除筆記。

**問：之後可以搜尋、置頂或封存筆記嗎？**

答：可以。AnyNotes+ 支援搜尋、標籤、置頂與封存模式，方便你之後重新查看與找到內容。

## AI Chat Linux Sandbox

AI Chat 內建裝置端 Alpine Linux 模擬器，可執行 Shell 指令與指令碼，用於處理檔案、計算及產生圖表、文件。你可以在唯讀終端機面板查看已執行的指令及輸出、停止執行中的指令，並預覽或分享產生的檔案。執行環境支援下載 Linux 軟體套件，以及從 ZIP 檔案或 GitHub 匯入 AI Skills。可在設定的 AI 執行環境中開啟 Sandbox，管理本機工作區儲存空間。AI 服務與下載需要網路連線。

**在哪裡使用？**

在設定的 AI 執行環境中開啟 Sandbox，可查看執行環境與工作區狀態。在 AI Chat 中點選 Sandbox 指令活動，可查看執行的指令、即時輸出、狀態與耗時。終端機面板為唯讀，任務透過 AI Chat 輸入，也可停止執行中的指令。設定中的 Skills 用於管理匯入的技能及其指令碼。

**檔案儲存在哪裡？清理會刪除什麼？**

指令碼、輸入、產生的檔案與可還原的對話儲存在本機 AI 工作區，不透過 iCloud 同步。刪除工作區會移除這些檔案及儲存的對話，但不會刪除原始筆記或 Topic。重設 Rootfs 會將 Linux 環境還原為隨 App 附帶的版本，並捨棄該環境中的修改。
