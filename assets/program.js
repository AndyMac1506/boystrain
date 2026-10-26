/* BoysTrain — embedded program content from Boys Weekly Athletic Training */
window.BT_PROGRAM = {
  programPageUrl:
    'https://cursor.com/canvas/store-539e11c4-39be-42e3-9cee-d45747873ded/adeab099-fce3-4236-898e-76e941cac78f',

  defaultSchedule: {
    0: null,
    1: 'A',
    2: null,
    3: 'B',
    4: null,
    5: 'C',
    6: null
  },

  restNotes: {
    0: 'Off or family hike — full recovery.',
    2: 'Youth sports / free play — rest from structured training.',
    4: 'Youth sports / free play — rest from structured training.',
    6: 'Optional active play — bike, tag, pickup. Not a workout.'
  },

  equipment: [
    'Cones or water bottles',
    'Chalk or tape for lines/boxes',
    'Playground / tennis ball',
    'Youth basketball (size 5)',
    'Soft baseball or foam ball (Ezra)',
    'Baseball glove (optional)',
    'Batting tee (optional)'
  ],

  older: {
    label: '8-year-old',
    sessions: {
      A: {
        title: 'Speed + jump + basketball',
        duration: '~30–35 min',
        weekdayHint: 'Mon',
        focusLabel: 'Speed+legs+hoops',
        steps: [
          {
            title: 'Warm-up / movement prep (5 min)',
            detail:
              'Jog easy 1 min → high knees 2×10 yd → butt kicks 2×10 yd → open/close the gate (hip circles) 5/side → arm circles. Cue: Wake up the body, don’t tire it out.',
            exercises: [
              { id: 'oa-warmup', name: 'Warm-up complete', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Pogos / stick landings (4–5 min)',
            detail:
              'Ankle pops in place 2×8 → two-foot stick landing from a small hop 2×5. Soft, quiet feet; freeze like a statue 1–2 sec. Stop if landings get sloppy.',
            exercises: [
              { id: 'oa-ankle-pops', name: 'Ankle pops', kind: 'check', sets: 2, note: '2×8' },
              { id: 'oa-stick-land', name: 'Stick landings', kind: 'check', sets: 2, note: '2×5' }
            ]
          },
          {
            title: 'Speed (8–10 min)',
            detail:
              '3–5× 15–20 yd all-out sprints with walk-back rest (full recovery). Standing or falling start. Cue: Push the ground away, tall posture, pump arms. Rest until breathing calms — not conditioning.',
            exercises: [
              {
                id: 'oa-sprints',
                name: '15–20 yd sprint',
                kind: 'timed',
                sets: 4,
                note: 'programmed: 4 (do 3–5)',
                distanceYd: 20,
                chartLabel: 'Session A sprints (15–20 yd)'
              }
            ]
          },
          {
            title: 'Strength circuit — legs emphasis (8–10 min)',
            detail:
              '2–3 rounds (~8–12 quality lower-body efforts): bodyweight squat ×8 · glute bridge ×8 · calf raises ×8–10 · wall sit 15–25 sec · elevated push-up ×5–8 · bird-dog ×5/side. Pogos above count as power. Rest 45–60 sec. Cue: knees over toes; quiet feet; sit tall on wall. No backpacks/weights.',
            exercises: [
              { id: 'oa-squat', name: 'Bodyweight squat', kind: 'check', sets: 3, note: '×8 · 3 rounds' },
              { id: 'oa-bridge', name: 'Glute bridge', kind: 'check', sets: 3, note: '×8' },
              { id: 'oa-calf', name: 'Calf raises', kind: 'check', sets: 3, note: '×8–10' },
              { id: 'oa-wallsit', name: 'Wall sit', kind: 'check', sets: 3, note: '15–25 sec' },
              { id: 'oa-pushup', name: 'Elevated push-up', kind: 'check', sets: 3, note: '×5–8' },
              { id: 'oa-birddog', name: 'Bird-dog', kind: 'check', sets: 3, note: '×5/side' }
            ]
          },
          {
            title: 'Sport skill — basketball (5–10 min)',
            detail:
              '(1) Stationary dribble: ball at hip/waist, fingertips, eyes up — 30–45 sec dominant then weak hand. (2) Walk/jog dribble to cone and back (dominant, then weak). (3) Layup footwork without speed: right-side step right, step left, jump, finish right hand (walk then jog); left side reverses. Start close; add one dribble after footwork is calm. Cue: Ball below hip when moving; eyes up; soft finish.',
            exercises: [
              { id: 'oa-drib-dom', name: 'Dribble dominant hand', kind: 'check', sets: 1, note: '30–45 sec' },
              { id: 'oa-drib-weak', name: 'Dribble weak hand', kind: 'check', sets: 1, note: '30–45 sec' },
              { id: 'oa-walk-drib', name: 'Walk/jog dribble', kind: 'check', sets: 2, note: 'dom + weak' },
              { id: 'oa-layup-r', name: 'Layup footwork R', kind: 'check', sets: 1 },
              { id: 'oa-layup-l', name: 'Layup footwork L', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Cool-down play (3–5 min)',
            detail:
              'Easy walk, light stretch (calves, quads, hug knees), then one fun catch or who-can-balance-longest game. End on a win.',
            exercises: [
              { id: 'oa-cooldown', name: 'Cool-down complete', kind: 'check', sets: 1 }
            ]
          }
        ]
      },
      B: {
        title: 'Agility + legs + baseball',
        duration: '~30–40 min',
        weekdayHint: 'Wed',
        focusLabel: 'Agility+legs+baseball',
        steps: [
          {
            title: 'Warm-up (5 min)',
            detail:
              'Tag or shadow shuffle 1–2 min → lateral shuffles 2×10 yd each way → carioca/grapevine easy 1× each way → 3 practice cuts at 50% speed.',
            exercises: [
              { id: 'ob-warmup', name: 'Warm-up complete', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Agility / COD (10–12 min)',
            detail:
              'Cone/bottle setup: (1) short shuttle 3–4 reps with full rest; (2) zigzag 4–5 cones, plant outside foot, 3 reps; (3) ladder or chalk boxes — in-in-out-out or icky shuffle 2–3 passes. Cue: Stop under control before you go. Eyes up.',
            exercises: [
              {
                id: 'ob-shuttle',
                name: 'Short shuttle',
                kind: 'timed',
                sets: 4,
                note: 'programmed: 4 (do 3–4)',
                chartLabel: 'Session B short shuttle'
              },
              { id: 'ob-zigzag', name: 'Zigzag cuts', kind: 'check', sets: 3, note: '3 reps' },
              { id: 'ob-ladder', name: 'Ladder / chalk boxes', kind: 'check', sets: 3, note: '2–3 passes → 3' }
            ]
          },
          {
            title: 'Strength — legs emphasis (8–10 min)',
            detail:
              '2–3 rounds: reverse lunges ×5/leg · split squat or low step-ups (curb/stair) ×5/leg · optional single-leg glute bridge ×5/leg · crab walk 10 yd · dead-bug ×6/side · side plank 10–15 sec/side. Front knee over mid-foot; soft stick on step-ups. ~8–12 lower-body efforts.',
            exercises: [
              { id: 'ob-lunge', name: 'Reverse lunges', kind: 'check', sets: 3, note: '×5/leg · 3 rounds' },
              { id: 'ob-splitsquat', name: 'Split squat / step-ups', kind: 'check', sets: 3, note: '×5/leg' },
              { id: 'ob-slbridge', name: 'Single-leg bridge', kind: 'check', sets: 3, note: 'optional ×5/leg', optional: true },
              { id: 'ob-crab', name: 'Crab walk', kind: 'check', sets: 3, note: '10 yd' },
              { id: 'ob-deadbug', name: 'Dead-bug', kind: 'check', sets: 3, note: '×6/side' },
              { id: 'ob-sideplank', name: 'Side plank', kind: 'check', sets: 3, note: '10–15 sec/side' }
            ]
          },
          {
            title: 'Sport skill — baseball (5–10 min)',
            detail:
              '(1) Catch/throw 8–12 exchanges — glove out, two hands, step with opposite foot. (2) Ground balls: Dad rolls; body in front, alligator hands, throw back 6–10. (3) Optional soft toss or tee 8–12 quality swings. Cue: Eyes on ball; quiet feet before throw.',
            exercises: [
              { id: 'ob-catch', name: 'Catch / throw', kind: 'check', sets: 1, note: '8–12' },
              { id: 'ob-grounders', name: 'Ground balls', kind: 'check', sets: 1, note: '6–10' },
              { id: 'ob-tee', name: 'Soft toss / tee', kind: 'check', sets: 1, note: 'optional 8–12', optional: true }
            ]
          },
          {
            title: 'Cool-down (3 min)',
            detail: 'Walk, drink water, name one thing that felt strong today.',
            exercises: [
              { id: 'ob-cooldown', name: 'Cool-down complete', kind: 'check', sets: 1 }
            ]
          }
        ]
      },
      C: {
        title: 'Athleticism + legs + ball skills',
        duration: '~25–35 min',
        weekdayHint: 'Fri',
        focusLabel: 'Athleticism+legs+ball',
        steps: [
          {
            title: 'Warm-up games (5 min)',
            detail: 'Red light / green light or freeze tag in a small zone — sneaks in acceleration and deceleration.',
            exercises: [
              { id: 'oc-warmup', name: 'Warm-up games done', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Balance + coordination (6–8 min)',
            detail:
              'Single-leg stands (eyes open) 3×10–15 sec/leg · hop forward stick 5/leg · skip for height 2×15 yd · throw/catch on one foot (tennis ball) 8–10 catches.',
            exercises: [
              { id: 'oc-slstand', name: 'Single-leg stands', kind: 'check', sets: 3, note: '3×10–15 sec/leg' },
              { id: 'oc-hopstick', name: 'Hop forward stick', kind: 'check', sets: 2, note: '5/leg → 2 sides' },
              { id: 'oc-skip', name: 'Skip for height', kind: 'check', sets: 2, note: '2×15 yd' },
              { id: 'oc-throw1ft', name: 'Throw/catch on one foot', kind: 'check', sets: 1, note: '8–10' }
            ]
          },
          {
            title: 'Athleticism relays — legs stations (8–10 min)',
            detail:
              'Always broad jump + stick. Add 1–2: soft lateral bounds (stick each) · squat or wall sit between relays. Optional ONLY if squat form perfect: goblet squat light water bottle ×5 — prefer no load. Then pick 1 more: bear crawl · sprint+backpedal · kick-pass-chase. Race Dad sometimes — win some, lose some.',
            exercises: [
              { id: 'oc-broadjump', name: 'Broad jump + stick', kind: 'check', sets: 3 },
              { id: 'oc-latbounds', name: 'Lateral bounds', kind: 'check', sets: 3, note: 'soft stick each' },
              { id: 'oc-squatwall', name: 'Squat or wall sit between', kind: 'check', sets: 2 },
              { id: 'oc-extra', name: 'Extra station (bear/sprint/kick)', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Sport skill rotate (5–10 min) — pick one',
            detail:
              'Basketball week: cone weave dribble both hands + 5–8 layup approaches each side, or wall/chest pass if no hoop. Baseball week: tee/soft toss 8–12 + 4–6 grounders to first (cone as base). Alternate weeks.',
            exercises: [
              { id: 'oc-bball', name: 'Basketball finish block', kind: 'check', sets: 1, optional: true },
              { id: 'oc-baseball', name: 'Baseball tee / grounders', kind: 'check', sets: 1, optional: true }
            ]
          },
          {
            title: 'Cool-down (3 min)',
            detail: 'Easy stretch + athlete of the day high-five for effort, not just speed.',
            exercises: [
              { id: 'oc-cooldown', name: 'Cool-down complete', kind: 'check', sets: 1 }
            ]
          }
        ]
      }
    }
  },

  younger: {
    label: '4-year-old',
    sessions: {
      A: {
        title: 'Animal moves + strong legs',
        duration: '~15–20 min',
        weekdayHint: 'Mon',
        focusLabel: 'Animals+legs',
        steps: [
          {
            title: 'Warm-up play (3 min)',
            detail: 'Follow-the-leader: march, tip-toe, giant steps. Mirror Dad’s silly faces while moving.',
            exercises: [
              { id: 'ya-warmup', name: 'Warm-up play done', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Animal zoo — strong legs play (5–7 min)',
            detail:
              'Rotate ~30–45 sec each with rests: bear crawl · frog hops (soft land) · kangaroo hops · mountain-climber mountain · crab walk · penguin waddle · cheetah run to a cone and freeze. Extra frog/kangaroo when energy high. Cue: Quiet frog feet on landings.',
            exercises: [
              { id: 'ya-bear', name: 'Bear crawl', kind: 'check', sets: 1 },
              { id: 'ya-frog', name: 'Frog hops', kind: 'check', sets: 1 },
              { id: 'ya-kangaroo', name: 'Kangaroo hops', kind: 'check', sets: 1 },
              { id: 'ya-mountain', name: 'Mountain climber', kind: 'check', sets: 1 },
              { id: 'ya-crab', name: 'Crab walk', kind: 'check', sets: 1 },
              { id: 'ya-penguin', name: 'Penguin waddle', kind: 'check', sets: 1 },
              { id: 'ya-cheetah', name: 'Cheetah run + freeze', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Chase / speed games (5 min)',
            detail:
              'Bubble chase, get-the-scarf, or tag in a tiny zone. Short bursts only. Celebrate every freeze and every stop.',
            exercises: [
              { id: 'ya-chase', name: 'Chase / speed game done', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Optional soft-ball roll (2–3 min)',
            detail:
              'Foam/soft ball back and forth, two hands. Skip if done. Bonus play — not required.',
            exercises: [
              { id: 'ya-softball', name: 'Soft-ball roll', kind: 'check', sets: 1, optional: true }
            ]
          },
          {
            title: 'Cool-down (2–3 min)',
            detail: 'Slow dinosaur walk, then sit and roll a ball back and forth. Done when smiles fade — even at minute 12.',
            exercises: [
              { id: 'ya-cooldown', name: 'Cool-down done', kind: 'check', sets: 1 }
            ]
          }
        ]
      },
      B: {
        title: 'Balance + strong legs + baseball',
        duration: '~15–20 min',
        weekdayHint: 'Wed',
        focusLabel: 'Balance+legs+ball',
        steps: [
          {
            title: 'Warm-up (3 min)',
            detail: 'Walk a chalk line or tape balance beam. Arms out like airplane.',
            exercises: [
              { id: 'yb-warmup', name: 'Balance beam warm-up', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Balance + strong legs play (5–7 min)',
            detail:
              'Keep one-foot stands (hold a toy, count to 5) and hop over a line and stick. Add sit-to-stand from a low step several times · invisible chair (wall sit) while counting silly numbers · statue freezes after a spin.',
            exercises: [
              { id: 'yb-1foot', name: 'One-foot stands', kind: 'check', sets: 2 },
              { id: 'yb-hopstick', name: 'Hop + stick', kind: 'check', sets: 2 },
              { id: 'yb-sittostand', name: 'Sit-to-stand', kind: 'check', sets: 3 },
              { id: 'yb-chair', name: 'Invisible chair', kind: 'check', sets: 1 },
              { id: 'yb-statue', name: 'Statue freezes', kind: 'check', sets: 2 }
            ]
          },
          {
            title: 'Baseball play block (5–8 min)',
            detail:
              'Soft/foam only. Roll catch; underhand huge soft toss close; optional tee soft swings into grass. Never hard pitch. No competitive scorekeeping.',
            exercises: [
              { id: 'yb-rollcatch', name: 'Roll / catch', kind: 'check', sets: 1 },
              { id: 'yb-softtoss', name: 'Huge soft toss', kind: 'check', sets: 1 },
              { id: 'yb-tee', name: 'Tee soft swings', kind: 'check', sets: 1, optional: true }
            ]
          },
          {
            title: 'Cool-down (2 min)',
            detail: 'Balloon keep-up or calm stretches pretending to be melting ice cream.',
            exercises: [
              { id: 'yb-cooldown', name: 'Cool-down done', kind: 'check', sets: 1 }
            ]
          }
        ]
      },
      C: {
        title: 'Obstacle + legs + bases',
        duration: '~15–20 min',
        weekdayHint: 'Fri',
        focusLabel: 'Obstacle+legs+bases',
        steps: [
          {
            title: 'Build a 4–5 station path (2 min setup)',
            detail:
              'Example: crawl under a broomstick tunnel → frog/kangaroo hop 3 chalk circles → balance beam tape → carry stuffed animal up 2–3 stairs/curb → throw ball into laundry basket → sprint to finish high-five. Keep hop or stairs/carry in the mix each week.',
            exercises: [
              { id: 'yc-build', name: 'Course built', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Run the course (6–8 min)',
            detail:
              '3–5 trips with rest between. Include frog/kangaroo hop circles and a stuffed-animal stair/curb carry somewhere in the path each week. Change one other station weekly so it stays novel. Let him help design a station — ownership equals buy-in. Keep course short so there is room for bases.',
            exercises: [
              { id: 'yc-trips', name: 'Course trips', kind: 'check', sets: 4, note: 'programmed: 4 (do 3–5)' }
            ]
          },
          {
            title: 'Run the bases game (5–8 min)',
            detail:
              'Four cones diamond. Race home-to-first through bag; then around bases as silly race. Touch every base. No outs/strikeouts.',
            exercises: [
              { id: 'yc-bases', name: 'Run the bases game', kind: 'check', sets: 1 }
            ]
          },
          {
            title: 'Cool-down (2–3 min)',
            detail: 'Victory lap walk + water. Name his favorite station.',
            exercises: [
              { id: 'yc-cooldown', name: 'Cool-down done', kind: 'check', sets: 1 }
            ]
          }
        ]
      }
    }
  },

  together: {
    label: 'Train together',
    duration: '~20–25 min',
    note: 'Shared stations, two intensity lanes. Older boy can squeeze 1–2 extra sprint reps while younger resets with water or a balance beam walk. Pick one ball-sport station per shared day (basketball or baseball — not both).',
    stations: [
      {
        id: 'tg-speed',
        name: 'Speed',
        younger: 'Chase a scarf 10–15 yd, freeze',
        older: '3–4× 15–20 yd sprints, walk-back rest',
        olderTimed: true,
        olderSets: 4,
        olderChartLabel: 'Together sprints (15–20 yd)'
      },
      {
        id: 'tg-jump',
        name: 'Jump',
        younger: 'Frog hops stick landing',
        older: 'Pogos + broad jump stick',
        olderSets: 2,
        youngerSets: 2
      },
      {
        id: 'tg-agility',
        name: 'Agility',
        younger: 'Zigzag walk/run around bottles',
        older: 'Zigzag cuts + short shuttle',
        olderSets: 2,
        youngerSets: 1
      },
      {
        id: 'tg-strength',
        name: 'Strength / legs',
        younger: 'Frog + kangaroo; sit-to-stand; invisible-chair; stuffed-animal stair carry',
        older: 'Squats + bridges + calf raises + wall sit; reverse lunges + split squat/step-ups; broad jump + soft lateral bounds',
        olderSets: 1,
        youngerSets: 1
      },
      {
        id: 'tg-bball',
        name: 'Basketball',
        younger: 'Roll/bounce soft playground ball to Dad; walk bounce if ready',
        older: 'Stationary + moving dribble both hands; walk-through layup footwork',
        olderSets: 1,
        youngerSets: 1,
        optional: true
      },
      {
        id: 'tg-baseball',
        name: 'Baseball',
        younger: 'Soft-ball roll/catch; tee/huge soft toss; run bases as race',
        older: 'Catch/throw; rolled grounders; tee/soft toss swings',
        olderSets: 1,
        youngerSets: 1,
        optional: true
      },
      {
        id: 'tg-finish',
        name: 'Finish',
        younger: 'High-five finish line',
        older: 'Relay vs Dad or timed course',
        olderSets: 1,
        youngerSets: 1
      }
    ]
  },

  safety: {
    hard: 'Adult supervision every session. Soft ball for Ezra; no unsupervised hard batting; adult toss/tee only. Soft landings; knees over toes. No barbells, no backpacks/weights, no max lifts, no forced stretching into pain. Soft surface preferred for jumps. Hydrate. Stop for sharp knee pain (vs tired muscles), limping, or tears that aren’t just nerves.',
    green: [
      'Breathing hard but can still smile or talk between efforts',
      'Soft, quiet landings; knees track roughly over toes',
      'Asking to do one more or laughing during games'
    ],
    stop: [
      'Sharp knee or joint pain (vs tired muscles)',
      'Limping, swelling, or favoring a joint',
      'Dizziness / unusual shortness of breath',
      'Emotional shutdown — end early'
    ]
  },

  legPriority: {
    title: 'Leg strength priority',
    body: 'Bodyweight + jump + single-leg work. Quality over load — about 8–12 quality leg efforts per session. Soft landings, knees over toes. No barbells or weighted backpacks.'
  },

  baseline: {
    cadence: 'Every 4–6 weeks. Same warm-up, same yard, same shoes, same timing. Full rest between max efforts. 60 yd needs clear runoff past the finish. Not pass/fail — trends over 2–3 months matter.',
    tests: [
      { key: 'broadJump', label: 'Standing broad jump', unit: 'in', kind: 'higher' },
      { key: 'sprint20', label: '20 yd sprint', unit: 'sec', kind: 'lower' },
      { key: 'sprint40', label: '40 yd sprint', unit: 'sec', kind: 'lower' },
      { key: 'sprint60', label: '60 yd sprint', unit: 'sec', kind: 'lower' },
      { key: 'pushups', label: '90° push-ups', unit: 'reps', kind: 'higher' },
      { key: 'shuttle', label: '5–10–5 shuttle', unit: 'sec', kind: 'lower' },
      { key: 'vertical', label: 'Vertical jump', unit: 'in', kind: 'higher' }
    ]
  },

  /** Catalog of timed metrics for the Times progress panel */
  timedMetrics: [
    { id: 'oa-sprints', kid: 'older', label: 'Session A sprints (15–20 yd)', kind: 'lower' },
    { id: 'ob-shuttle', kid: 'older', label: 'Session B short shuttle', kind: 'lower' },
    { id: 'tg-speed-older', kid: 'older', label: 'Together sprints (15–20 yd)', kind: 'lower' }
  ]
};
