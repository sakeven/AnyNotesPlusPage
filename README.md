# AnyNotes+

AnyNotes+ is an AI workspace for notes, recordings, photos, files, links, and ongoing Topics, with text and live voice conversations.

It is built for the messy way ideas actually arrive on a phone: a quick thought, a meeting recording, a screenshot, a web page, a chat excerpt, or a half-formed plan that needs to be captured before it disappears.

Live site: https://plus.anynotes.app/

## What It Does

AnyNotes+ helps turn raw inputs into clearer, more useful outcomes.

- Capture text, recordings, photos, PDF and text files, shared web pages, and AI conversations.
- Organize recordings live on iOS in API-key mode, with key points, guidance, and actions to review.
- Continue an existing conversation in live voice with captions and the chat's available tools.
- Turn each new note into an AI Inbox result with a title, summary, structured result card, and suggested next actions.
- Organize related notes into Topics with a direction, evolving synthesis, source-linked Wiki, and saved briefs, task lists, or drafts.
- Continue deeper work in AI Chat with note or Topic context.
- AI Chat includes an on-device Alpine Linux runtime for AI Chat commands and scripts, a read-only command output panel, package downloads, and imported Skills. Local AI workspaces are separate from iCloud note sync; see the localized Support pages for access, networking, and cleanup details.
- Use authorized iOS device data, review calendar and reminder changes, and connect App Tools or imported Apple Shortcuts.
- Generate files and images, edit images, and share note result cards.
- Keep notes tied to the user's own iCloud-backed storage.

## Core Flow

1. Capture something quickly.
2. Let AI clarify what came in.
3. Keep related work together in Topics.
4. Turn the result into a reminder, task, email draft, shareable image, or deeper AI conversation.

## Use Cases

- Quick ideas: expand rough thoughts into clearer points and next steps.
- Meeting notes: summarize discussions, decisions, action items, and unresolved questions.
- Voice notes: capture while walking, commuting, or away from the keyboard.
- Web pages and shared links: extract useful text and summarize what matters.
- Research and knowledge notes: turn highlights and references into reusable knowledge.
- Ongoing projects: collect multiple notes into Topics that evolve over time.

## Privacy And Storage

Notes are stored through the user's own iCloud-backed storage instead of a shared service database.

Chat history, workspace files, Skills, and App Tool configuration stay on each device. iOS AI features require AnyNotes Pro and an API key or Codex sign-in; the Mac app does not require AnyNotes Pro. AI service usage is separate.

AI features may send relevant note content, images, audio, or extracted webpage text to the configured AI provider for processing. The app keeps the storage model simple while making AI processing an explicit feature layer on top of saved notes.

## Links

- Website: https://plus.anynotes.app/
- App Store: https://apps.apple.com/us/app/anynotes/id6745427912
- TestFlight: https://testflight.apple.com/join/4FtzEtgM

## This Repository

This repository contains the public landing page for AnyNotes+.

The site is built with Jekyll and GitHub Pages. Product copy and localized homepage content live under `_data/locales/`, while the main landing page layout is in `_layouts/default.html`.

The homepage uses three switchable scenarios and collapsed FAQs. The five localized user guides at `/guide/` and `/<language>/guide/` open directly into Getting Started, with a fixed chapter sidebar and separate pages for feature reference and best practices. The best-practice chapters cover meeting follow-up, research decisions, travel planning, and deliverables. Screenshots show the current app views with localized sample content, including recording, live voice, Topics, app tools and files. Images are static and do not open a zoom view or a new tab.

## Local Preview

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Then open:

```txt
http://127.0.0.1:4000/
```

## License

This landing page repository is released under the [MIT License](LICENSE).
