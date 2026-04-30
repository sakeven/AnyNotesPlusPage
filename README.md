# AnyNotes+

AnyNotes+ is a personal AI inbox for notes, voice recordings, photos, links, and shared content.

It is built for the messy way ideas actually arrive on a phone: a quick thought, a meeting recording, a screenshot, a web page, a chat excerpt, or a half-formed plan that needs to be captured before it disappears.

Live site: https://plus.anynotes.app/

## What It Does

AnyNotes+ helps turn raw inputs into clearer, more useful outcomes.

- Capture from text notes, voice recordings, photos, the iOS share sheet, and AI chat.
- Turn each new note into an AI Inbox result with a title, summary, structured result card, and suggested next actions.
- Organize related notes into Topics that keep an evolving synthesis, current view, open questions, and next moves.
- Continue deeper work in AI Chat with note or Topic context.
- Create reminder drafts, Things tasks, follow-up email drafts, and shareable result images.
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

AI features may send relevant note content, images, audio, or extracted webpage text to the configured AI provider for processing. The app keeps the storage model simple while making AI processing an explicit feature layer on top of saved notes.

## Links

- Website: https://plus.anynotes.app/
- App Store: https://apps.apple.com/us/app/anynotes/id6745427912
- TestFlight: https://testflight.apple.com/join/4FtzEtgM

## This Repository

This repository contains the public landing page for AnyNotes+.

The site is built with Jekyll and GitHub Pages. Product copy and localized homepage content live under `_data/locales/`, while the main landing page layout is in `_layouts/default.html`.

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
