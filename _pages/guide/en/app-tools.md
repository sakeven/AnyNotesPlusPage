---
layout: "page"
title: "App Tools & Shortcuts"
description: "Connect apps and make your existing shortcuts available to AI."
lang: "en"
ref: "guide-app-tools"
guide: true
guide_chapter: "app-tools"
chapter_order: 8
permalink: "/guide/app-tools/"
---

# App Tools & Shortcuts

Manage connections in **Settings > Tools & Skills > App Tools**. An action needs its target app installed, its switches enabled, and required configuration completed.

{% include guide-screens.html group='apps' %}

**Connect an app:** Describe the app and operation in AI Chat and ask it to prepare a tool configuration. Open the generated file, review its actions and configuration needs, then install and enable it. The target app must provide a supported link or action entry.

**Connect an existing Apple Shortcut:**

1. Install the shortcut in Apple's Shortcuts app and check that it works.
2. Share its `.shortcut` file with AnyNotes or import it in App Tools.
3. Check the installed name and run the analysis. The complete action definition is sent to your selected AI service to identify its purpose and external inputs.
4. Review the analysis, add and enable the tool, then request it by name in AI Chat.

> Run my “Organize reading list” shortcut using the three articles we just discussed.

Importing neither runs the shortcut nor installs it in the system. Execution follows the confirmation flow; supported text results return to the conversation. Reimport after renaming or changing a shortcut. “Opened” means the app was opened; if the outcome is unconfirmed, check the target app before retrying.
