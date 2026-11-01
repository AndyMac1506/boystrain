# BoysTrain

Phone-friendly Progressive Web App for Andy’s boys’ athletic training — daily workouts, session logging, and baseline progress for **John Andrew** (8) and **Ezra** (4).

**Live:** https://andymac1506.github.io/boystrain/

Program source: [Boys Weekly Athletic Training](https://cursor.com/canvas/store-539e11c4-39be-42e3-9cee-d45747873ded/adeab099-fce3-4236-898e-76e941cac78f)

## Open on iPhone

1. Open https://andymac1506.github.io/boystrain/ in **Safari**
2. Share → **Add to Home Screen** → Add
3. Launch **BoysTrain** from the home screen

Hard-refresh or reopen the Home Screen app after updates so the new service worker cache loads.

## Features

- Modes: **John Andrew** (A/B/C + basketball/baseball skills + leg-strength emphasis), **Ezra** (play A/B/C + soft-ball/bases + strong-legs play), **Together** (shared stations incl. ball sports + Strength/legs, two intensities)
- **Leg strength priority**: bodyweight + jump + single-leg; ~8–12 quality leg efforts/session; no barbells
- Default schedule Mon=A / Wed=B / Fri=C (remap in Settings)
- Full step-by-step session content embedded from the program page
- Session log: completed / partial / skipped, effort & mood 1–5, duration, notes
- Weekly A/B/C checklist
- **John Andrew baselines** (prominent): Log test day with broad jump, **20 / 40 / 60 yd sprints**, push-ups (full/knees), 5–10–5, vertical + notes; trend charts per metric; soft 4–6 week reminder copy; full rest between max efforts; 60 yd needs clear runoff
- **Ezra**: optional playful frog-jump distance only
- Settings: editable display names, day map, JSON export/import
- Dark-friendly dad UX, localStorage persistence, offline PWA shell

## Data

Everything stays on the device (`localStorage` key `boystrain:v1`). Use Settings → Export JSON for backups.

## Local preview

```bash
cd /workspace/boystrain
python3 -m http.server 8791
```

Then open `http://localhost:8791` (or the machine IP on the same Wi‑Fi).

## v4 — set checkboxes & timed progress
- Each exercise shows large per-set tap checkboxes (e.g. 4 sprint boxes).
- Max-effort work (sprints, shuttles) also has a **sec** time field per set.
- **Times** tab graphs best-of-day times over sessions (filter by kid).
- Export/import JSON includes `setLog`.


## v5 — Hitting Fixes (John Andrew)

- **Hitting Fixes section** (bat icon in the top bar, or the "Hitting Fixes" card in John Andrew's view). It covers the 3 problems from the Oct 31 swing video, what's working, the posture setup check, the week-by-week progression, the re-film reminder for Nov 21–28 (from the first-base side), and one card per drill with setup, reps, cues and demo links. The links open in a new tab.
- **Wednesday Session B, baseball item 3** is now "Hitting fix: this week's drill (~10 min)". It shows the current phase's drills with per-set checkboxes and demo links, plus a button to the full section. Items 1–2 (catch/throw, grounders) are unchanged.
- **Phases** are computed from the hitting start date: weeks 1–2 hand load + two-tee + line drives, weeks 3–4 front-leg brake + tee stare, week 5+ outside tee + fence. Week 1 is the Monday of the start date's week. The default start is 2026-11-02, and you can edit it in Settings → Hitting Fixes or at the top of the section.
- **Line-drive score** (hits per round of 10) is logged in the round boxes and graphed in Times, where higher is better.
- The start date is saved in settings, so export/import includes it. Service worker cache: `boystrain-v5`.

## v6 — Throwing Fixes (John Andrew)

- **Throwing Fixes** added alongside Hitting Fixes, from the Page section "Throwing Fixes (from throwing video, Oct 31)". The bat icon now opens a combined Fixes panel with a Hitting / Throwing toggle; John Andrew's card shows both plans with a button for each.
- Covers the 3 fixes (glove arm flies open from stepping open, back leg doesn't come through, elbow slightly low at foot strike), what's working, cues (step at the target, glove to the chest, belly button to the target), the 60–70% effort / stop-if-sore note, the re-film reminder for Nov 21–28 (glove-side view, rear view, grip close-up), and drill cards with demo links (one-knee glove-to-chest, line drill, power position T, throw and chase, optional 4-seam grip).
- **Wednesday Session B, baseball item 1** now opens with "Throwing fix: this week's drill (~10 min)" (per-set checkboxes + demo links), then the existing 8–12 easy throws checkbox (same `ob-catch` id, so old logs still count). Item 3 stays the hitting drill.
- Phases share the hitting start date (default 2026-11-02): weeks 1–2 one-knee + line drill, weeks 3–4 T drill + throw and chase, week 5+ all four drills as a 3–5 min warm-up rotation. Service worker cache: `boystrain-v6`.
