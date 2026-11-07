---
layout: "page"
title: "Sync, storage & cleanup"
description: "Understand what syncs and manage files on this device."
lang: "en"
ref: "guide-storage"
guide: true
guide_chapter: "storage"
chapter_order: 10
permalink: "/guide/storage/"
---

# Sync, storage & cleanup

{% include guide-screens.html group='storage' %}

| Content | Storage |
| --- | --- |
| Notes, Topics, and saved outcomes | Local storage and your personal iCloud account |
| Chat history, chat attachments, generated files | Local AI workspaces; no iCloud sync |
| Skills, App Tools, and their settings | Managed locally; sensitive configuration uses the device Keychain |

AI features send relevant notes, images, audio, files, or authorized device data to your configured AI service. An on-device Sandbox does not mean AI inference runs on the device.

Deleting a workspace in **Settings > Tools & Skills > Sandbox** removes its conversation and files, but not the original notes or Topics. Export anything you need first. **Reset Rootfs** restores the bundled Linux environment and discards changes to that environment.
