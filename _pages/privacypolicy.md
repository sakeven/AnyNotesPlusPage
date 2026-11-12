---
layout: page
title: Privacy Policy
description: Privacy Policy for AnyNotes+, including how notes, voice recordings, AI processing, and iCloud storage are handled.
include_in_header: false
include_in_footer: true
lang: en
ref: privacy
nav_order: 2
permalink: /privacypolicy/
---

# Privacy Policy for AnyNotes+

Updated: November 12, 2026

This policy explains how AnyNotes+ handles information in its apps and extensions. Available features depend on your platform and app version. The developer is Chong Jiang; privacy questions can be sent to [sakeven.jiang@gmail.com](mailto:sakeven.jiang@gmail.com).

## 1. Content and storage

The app handles the content you create, import, or ask it to use: notes, Topics, tags, links, recordings and transcripts, photos and images, documents, chat messages, AI results, and related metadata such as titles and dates.

Notes, Topics, and their associated media are stored on your device and synchronized through your private Apple CloudKit database when iCloud is available. Chat history, live voice history, AI workspace files, Skills, App Tool settings, and connection preferences are kept on the device rather than synchronized as notes. Content you explicitly save from a chat as a note enters the note-storage and sync flow.

We do not operate a central server that stores your note library or relays your AI requests. This does not mean all processing stays on your device: the services below receive data when the corresponding features are used. System backups and files you export or share have their own storage lifecycles.

## 2. AI processing and accounts

AI features send relevant note or Topic content, conversation context, attachments or extracted file text, images, audio, transcripts, and tool results to your selected service for organization, summaries, answers, transcription, speech, or content generation. When AI is configured and available, newly captured notes can be processed automatically by AI Inbox. Live voice sends microphone audio during the active session; recording transcription can upload recorded audio. AI tools can read relevant notes and workspace files to complete your request.

- **OpenAI API:** requests use your API key and configured API Host. With the default host, OpenAI receives them. A custom host sends requests and the API key to that host's operator; choose a provider you trust.
- **ChatGPT/Codex sign-in:** authentication and AI requests go to OpenAI's services. The app stores the returned session tokens and account metadata, which can include your email address, account identifier, and plan, to maintain the connection. You do not create a separate AnyNotes account.
- **Credentials:** API keys, custom hosts, optional Jina credentials, and sign-in sessions are stored in local app or shared app-group settings so supported extensions can use the connection. We do not store them on an AnyNotes account server.

Providers receive the submitted content and connection information such as your IP address and may associate requests with your provider account. Their service terms, privacy policies, account settings, and retention rules govern their processing; AnyNotes does not promise that transmitted content is immediately deleted or never retained. See [OpenAI's privacy policy](https://openai.com/policies/privacy-policy/) and the terms applicable to your API or ChatGPT account, or your custom provider's policy.

## 3. Web reading and connected tools

Reading a link contacts the source website. If direct extraction fails, the app may use **Jina Reader** at `r.jina.ai`, sending the source URL including its path and query parameters. This can occur without a Jina API key; if you configure one, it authenticates the request. Do not submit a URL containing private access tokens or information you do not want that service to receive. Extracted page text may then be sent to your AI service. See [Jina's legal and privacy information](https://jina.ai/legal/).

Enabled App Tools, imported Shortcuts, Skills, and sandbox commands may contact the apps, websites, or package services needed for a task. Action parameters, files you choose to share, and returned tool data may be handled by those services and by your AI service. Review tool permissions and confirmation screens before executing actions. Importing a Shortcut for AI analysis also sends its action definitions to the selected AI service after the import confirmation.

## 4. Device permissions

Microphone and speech recognition access support recording, dictation, and live voice. Apple speech recognition can use Apple's services according to system settings and availability; it is not guaranteed to run entirely on the device.

Optional device tools use separately authorized calendar event details, reminders, selected photos, current location, and read-only HealthKit steps, sleep, and workouts. They require the relevant system permissions and the app's separate permission for AI use. Needed results can be sent to the selected AI service to answer your request. Location is requested when needed, not continuously tracked. Health-related chats remain local, and the app disables saving those conversations as iCloud-synced notes. Alarm and timer tools manage alarms created by AnyNotes and require the applicable permission. See [Apple's privacy policy](https://www.apple.com/legal/privacy/).

## 5. Purchases, diagnostics, and support

Apple handles App Store payments. The app reads StoreKit product and verified transaction information to provide subscriptions, trials, and purchase restoration; we do not receive your payment card details through the app.

Optional diagnostics save troubleshooting details locally and may include private content or service responses. Disabling diagnostics stops new diagnostic recording but does not remove existing log files. If you email support or share a log, we receive the address and information you send and use them to respond and investigate. We do not sell your app content or use it for advertising.

## 6. Your choices, retention, and deletion

- You can use manual note features without connecting an AI account. The new iOS subscription page explains AI data sharing and requires an affirmative choice before starting a new trial or purchase. Device-data permissions remain separate.
- To stop future AI requests through a connection, sign out of ChatGPT/Codex or remove its API key in AI Service settings. End any active voice session or generation as well. Changing authentication mode alone keeps the other mode's saved credentials.
- Turn off optional device sources in **Settings → Data Usage**, and revoke system permissions in iOS Settings. To avoid sending URLs to a web-reading service, stop using web-reading actions. Revocation stops future use; it cannot recall data already sent.
- Notes and Topics remain in local and iCloud storage until you delete them. Cloud deletion requires successful synchronization; offline devices may retain copies until they sync. Deleting the app alone does not delete your iCloud library.
- Delete chat histories and workspaces using their app controls; these are separate from note deletion. Exported files, shared copies, and system backups are not removed by deleting the original note or chat. Stored keys and sessions remain until removed through settings or the relevant app data is deleted.
- Deleting content or signing out in AnyNotes does not delete your OpenAI, custom-provider, Jina, or Apple account or data they already hold. Use the provider's controls or contact it for its retention and deletion options. For information you have sent to our support address, contact us to request access or deletion; some information may need to be retained to meet legal obligations.

## 7. Security and policy changes

The app uses operating-system storage protections and the services' connection security. Default AI and Jina endpoints use HTTPS; the security and handling of a custom endpoint depend on the endpoint you configure. No system can guarantee absolute security.

We will update this page when practices change. The date above identifies this version. You can open this policy from the app's subscription page and the website footer, or contact [sakeven.jiang@gmail.com](mailto:sakeven.jiang@gmail.com) with questions.
