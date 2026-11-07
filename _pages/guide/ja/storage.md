---
layout: "page"
title: "同期・保存・整理"
description: "同期範囲を理解し、端末内のファイルを管理。"
lang: "ja"
ref: "guide-storage"
guide: true
guide_chapter: "storage"
chapter_order: 10
permalink: "/ja/guide/storage/"
---

# 同期・保存・整理

{% include guide-screens.html group='storage' %}

| 内容 | 保存先 |
| --- | --- |
| ノート、トピック、保存した成果 | ローカルと個人の iCloud |
| 会話履歴、チャット添付、生成ファイル | 端末内の AI 作業領域。iCloud 同期なし |
| Skills、Appツールと設定 | 端末内。機密設定はキーチェーン |

AI 使用時は関連するノート、画像、音声、ファイル、許可した端末データを設定中の AI サービスへ送信します。Sandbox が端末内で動作することは、AI 推論も端末内という意味ではありません。

「設定 > ツールとスキル > Sandbox」で作業領域を削除すると、その会話とファイルが消えます。元のノートとトピックは残ります。必要な成果物は先に書き出してください。Rootfs のリセットは同梱 Linux 環境を復元し、その環境への変更を破棄します。
