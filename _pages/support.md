---
layout: page
title: Support
description: Help, FAQ, and contact information for AnyNotes+ on iPhone and iPad.
include_in_header: true
include_in_footer: true
lang: en
ref: support
nav_order: 1
permalink: /support/
---

# AnyNotes+ Support

**sakeven.jiang@gmail.com**

## Contact

If you need support, have questions, or want to report a bug, please email us.

## Frequently Asked Questions

**Q: Is AnyNotes+ available on iPhone and iPad?**

A: Yes. AnyNotes+ is available on iPhone and iPad through the App Store, with one capture flow that stays consistent across devices.

**Q: How are notes stored?**

A: Your notes are stored in your own iCloud-backed storage through CloudKit, instead of being kept in a shared service database.

**Q: Do I need to create an account to use AnyNotes+?**

A: No. AnyNotes+ does not require a separate account system. Your notes stay tied to your own device and iCloud account.

**Q: What can I capture in AnyNotes+?**

A: You can capture quick text notes, voice recordings, photos, and content shared from other apps through the iOS share sheet, including links and images.

**Q: Can AnyNotes+ turn voice notes, photos, and links into summaries?**

A: Yes. AI Inbox can turn captured input into clearer titles, summaries, result cards, and suggested next steps after the note is saved.

**Q: What are Topics?**

A: Topics group related notes into one evolving workspace, so you can keep the current view, recent changes, and next steps together instead of leaving everything as isolated notes.

**Q: Are Topics the same as folders?**

A: Not quite. Folders mainly store notes, while Topics are meant to help related notes keep progressing with a shared synthesis and clearer next moves.

**Q: Do AI features require a subscription?**

A: Yes. AI features require AnyNotes Pro.

**Q: Do I need anything else to use AI features?**

A: Yes. To use AI features, you also need to provide your own OpenAI API key or sign in with Codex inside the app.

**Q: Can I delete or export my notes?**

A: Yes. You can export or delete notes anytime in the app.

**Q: Can I search, pin, or archive notes later?**

A: Yes. AnyNotes+ includes search, tags, pinning, and archive mode so saved notes stay easier to review and find again.

## AI Chat Linux Sandbox

AI Chat includes an on-device Alpine Linux emulator that can run shell commands and scripts to process files, perform calculations, and create charts and documents. View executed commands and their output in a read-only terminal-style panel, stop running commands, and preview or share generated files. The runtime supports downloading Linux packages and importing AI Skills from ZIP files or GitHub. Manage local workspace storage in Settings > AI Runtime > Sandbox. AI services and downloads require network access.

**Where do I find it?**

Open Settings > AI Runtime > Sandbox for runtime and workspace status. In AI Chat, tap a Sandbox command activity to inspect the executed command, live output, status, and runtime. The terminal panel is read-only; requests are entered through AI Chat. Commands can be stopped. Settings > AI Runtime > Skills manages imported skills and their scripts.

**Where are files stored, and what does cleanup remove?**

Scripts, inputs, generated files, and recoverable conversations are saved in local AI workspaces. These workspaces do not sync through iCloud. Deleting a workspace removes those files and its saved conversation, but does not delete the original notes or Topics. Reset Rootfs replaces the Linux environment with the bundled copy and discards changes made to that environment.
