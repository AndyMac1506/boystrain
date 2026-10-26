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
