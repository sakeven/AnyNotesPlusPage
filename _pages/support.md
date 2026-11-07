---
layout: page
title: Support
description: Help, FAQ, and contact information for AnyNotes+ on iPhone, iPad and Mac.
include_in_header: true
include_in_footer: true
lang: en
ref: support
nav_order: 1
permalink: /support/
---

# AnyNotes+ Support

**sakeven.jiang@gmail.com**

[Read the user guide for setup, step-by-step workflows, and practical use cases.]({{ '/guide/' | relative_url }})

## Contact

If you need support, have questions, or want to report a bug, please email us.

## Frequently Asked Questions

**Which platforms does AnyNotes+ support?**

AnyNotes+ has iPhone, iPad, and native Mac experiences. Device data tools and live recording insights are iOS features; the guide explains platform differences.

**What syncs between devices?**

Notes and Topics sync through your personal iCloud account. Chat history, AI workspace files, Skills, and App Tool configuration stay on each device.

**Is recording the same as live voice chat?**

Recording captures your own audio as a note; API-key mode can also organize it live. Live voice is a two-way AI conversation that can continue an existing chat.

**What do I need for AI features?**

On iPhone and iPad, AI features require AnyNotes Pro and an API key or Codex sign-in. The Mac app does not require AnyNotes Pro. AI service usage is separate; availability depends on your account.

## AI Chat Linux Sandbox

AI Chat includes an on-device Alpine Linux emulator that can run shell commands and scripts to process files, perform calculations, and create charts and documents. View executed commands and their output in a read-only terminal-style panel, stop running commands, and preview or share generated files. The runtime supports downloading Linux packages and importing AI Skills from ZIP files or GitHub. Manage local workspace storage in Settings > Tools & Skills > Sandbox. AI services and downloads require network access.

**Where do I find it?**

Open Settings > Tools & Skills > Sandbox for runtime and workspace status. In AI Chat, tap a Sandbox command activity to inspect the executed command, live output, status, and runtime. The terminal panel is read-only; requests are entered through AI Chat. Commands can be stopped. Settings > Tools & Skills > Skills manages imported skills and their scripts.

**Where are files stored, and what does cleanup remove?**

Scripts, inputs, generated files, and recoverable conversations are saved in local AI workspaces. These workspaces do not sync through iCloud. Deleting a workspace removes those files and its saved conversation, but does not delete the original notes or Topics. Reset Rootfs replaces the Linux environment with the bundled copy and discards changes made to that environment.
