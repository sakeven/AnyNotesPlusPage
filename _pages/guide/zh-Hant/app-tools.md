---
layout: "page"
title: "應用工具與捷徑"
description: "連接 App，將已有捷徑交給 AI 呼叫。"
lang: "zh-Hant"
ref: "guide-app-tools"
guide: true
guide_chapter: "app-tools"
chapter_order: 8
permalink: "/zh-Hant/guide/app-tools/"
---

# 應用工具與捷徑

在「設定 > 工具與技能 > App 工具」管理連接。工具是否可用取決於目標 App 已安裝、相關操作已啓用以及必要配置已填寫。

{% include guide-screens.html group='apps' %}

**連接一個 App：**在 AI 對話中說明想連接的 App 和具體操作，讓它準備工具配置。打開生成的檔案，核對操作和所需配置後安裝，再到App 工具中啓用。目標 App 必須提供可用的連結或操作入口。

**接入已有 Apple 捷徑：**

1. 先在系統「捷徑」中安裝並確認它可以運行。
2. 將 `.shortcut` 檔案分享給 AnyNotes，或在App 工具中匯入。
3. 核對系統中的捷徑名稱，點擊分析。完整動作定義會發送給當前 AI 服務，用於識別用途和外部輸入。
4. 查看分析結果後添加並啓用，然後在 AI 對話中按名稱請求運行。

> 運行我的「整理閱讀清單」捷徑，把剛才討論的三篇文章作為輸入。

匯入不會執行捷徑，也不會替你安裝到系統中。執行時沿用確認流程，支援的文字結果會返回對話。修改或重命名捷徑後應重新匯入。顯示「已打開」僅表示已跳轉；如果結果未確認，應到目標 App 核對後再決定是否重試。
