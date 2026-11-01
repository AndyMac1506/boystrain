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
              '(1) Catch / throw: start with about 10 min of this week’s drill from Throwing Fixes (from throwing video, Oct 31), then 8–12 easy exchanges at a comfortable distance — two hands to secure, step at the target, pull the glove into the chest, finish with the belly button to the target. (2) Ground balls: Dad rolls; body in front, alligator hands, throw back 6–10. (3) Hitting: run this week’s drill from Hitting Fixes (from swing video, Oct 31) — about 10 min, one fix at a time — instead of general tee swings. Cue: Eyes on ball; quiet feet before throw.',
            exercises: [
              { id: 'ob-catch', name: 'Catch / throw — easy exchanges', kind: 'check', sets: 1, note: '8–12 after the throwing drill' },
              { id: 'ob-grounders', name: 'Ground balls', kind: 'check', sets: 1, note: '6–10' }
            ],
            throwingFix: true,
            hittingFix: true
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

  /** John Andrew hitting fixes — from the Page section "Hitting Fixes (from swing video, Oct 31)" */
  hitting: {
    title: 'Hitting Fixes',
    source: 'From swing video, Oct 31',
    defaultStart: '2026-11-02',
    bats: 'right-handed',
    blockLabel: 'Hitting fix',
    wedSlot: 'Runs as item 3 of Wednesday’s Session B baseball block (~10 min).',
    intro:
      'From the rear and first-base-side front-toss video (John Andrew bats right-handed). This block replaces general tee swings in Wednesday’s baseball time, about 10 minutes.',
    keep: 'Wide athletic stance, straight stride, front foot down on time, good back-foot pivot, strong two-hand finish.',
    problems: [
      { title: 'No hand load', detail: 'Hands stay put or drop as he strides, so the bat pushes forward and down and the swing gets steep and choppy.' },
      { title: 'Tall upright posture', detail: 'A very tall, upright posture at setup. Fixed with a setup check, not a drill (see below).' },
      { title: 'Soft front leg at contact', detail: 'He spins open and the front shoulder and head pull off, worst on outside pitches.' }
    ],
    postureCue:
      'Tall posture: at setup, cue chest over toes, a slight bend at the hips so the letters on his jersey are over his knees. That one is a setup check, not a drill.',
    rule: 'One new fix at a time. Only move on when the current fix shows up on most swings without a reminder.',
    refilm: {
      from: '2026-11-21',
      to: '2026-11-28',
      label: 'first-base side',
      detail:
        'Around Nov 21–28, film 10–15 front-toss swings from the first-base side, facing his chest and hands, at hip height and the same distance as before. Add a rear view if you can. Send it over and we will compare the hand load and bat path to the Oct 31 video.'
    },
    phases: [
      {
        key: 'p1', weeks: '1–2', fromWeek: 1, toWeek: 2,
        main: 'Hand load: walk away from your hands',
        supporting: 'Two-tee drill; line drives to the top of the net as the scoreboard',
        drills: ['load', 'linedrives'],
        exercises: [
          { id: 'hf-load-dry', name: 'Hand load — dry stride-and-load holds', kind: 'check', sets: 2, note: '2×5 · freeze 2-count at landing' },
          { id: 'hf-load-tee', name: 'Hand load tee reps + two-tee', kind: 'check', sets: 2, note: '2×6–8 · miss the back tee' },
          { id: 'hf-linedrives', name: 'Line drives to top of net', kind: 'score', sets: 3, note: '3 rounds × 10 · enter hits at/above target' }
        ]
      },
      {
        key: 'p2', weeks: '3–4', fromWeek: 3, toWeek: 4,
        main: 'Front-leg brake: land soft, then post up',
        supporting: 'Keep 5 load reps as warm-up; tee stare on every swing',
        drills: ['brake', 'teestare'],
        exercises: [
          { id: 'hf-load-warm', name: 'Hand load warm-up reps', kind: 'check', sets: 1, note: '5 reps' },
          { id: 'hf-brake', name: 'Front-leg brake tee swings', kind: 'check', sets: 3, note: '3×5 · 3 slow-mo first, build to ~75%' },
          { id: 'hf-teestare', name: 'Tee stare on every swing', kind: 'check', sets: 1, note: '~10–15 swings · eyes on tee 2-count' }
        ]
      },
      {
        key: 'p3', weeks: '5+', fromWeek: 5, toWeek: null,
        main: 'Outside-tee opposite-field reps + fence drill',
        supporting: 'Rotate in tee stare and line-drive scoring; keep the load and brake as warm-ups',
        drills: ['outside', 'fence'],
        exercises: [
          { id: 'hf-warmups', name: 'Load + brake warm-up', kind: 'check', sets: 1 },
          { id: 'hf-outside', name: 'Outside-tee opposite-field reps', kind: 'check', sets: 2, note: '2×6–8 · front shoulder stays home' },
          { id: 'hf-fence', name: 'Fence drill slow swings', kind: 'check', sets: 2, note: '2×6–8 · speed up after 5 clean' },
          { id: 'hf-teestare', name: 'Tee stare (rotate in)', kind: 'check', sets: 1, note: 'eyes on tee 2-count', optional: true },
          { id: 'hf-linedrives', name: 'Line-drive scoring (rotate in)', kind: 'score', sets: 3, note: '3 rounds × 10 · hits at/above target', optional: true }
        ]
      }
    ],
    drills: [
      {
        key: 'load', n: 1,
        title: 'Hand load — walk away from your hands',
        weeksLabel: 'weeks 1–2',
        steps: [
          { title: 'Setup', detail: 'Normal stance, bat on shoulder or hands at the back shoulder. Stand him sideways to a mirror, window, or your phone camera so he can see his hands.' },
          { title: 'Dry reps (2 sets × 5)', detail: 'Stride slowly and, at the same time, ease the hands back 3–4 inches toward the catcher. Freeze for a 2-count at front-foot landing and check the hands are behind the back shoulder, not dropped or pushed forward. No swing yet.' },
          { title: 'Tee reps (2 sets × 6–8)', detail: 'Same stride and load, short pause, then swing. Add the two-tee drill: a second tee or a cone about 12 inches behind the ball and about half a ball lower. Swing hard and miss the back tee.' },
          { title: 'Cues (pick one)', detail: 'Walk away from your hands. Hands go back as the foot goes forward.' },
          { title: 'What good looks like', detail: 'At landing the front foot is down, the hands are back near the back shoulder, and the barrel stays up. The swing flattens out, he misses the back tee, and the ball comes off as a line drive instead of a chopper.' }
        ],
        links: [
          { title: 'Perfect Positioning | Load Stride Swing Drill', site: 'YouTube · Pro Speed Baseball', href: 'https://www.youtube.com/watch?v=f64FsinnQqc' },
          { title: 'Two Tee - Swing Path Drill - DON’T lose the barrel | Hitting Done Right', site: 'YouTube · Hitting Done Right - HDR', href: 'https://www.youtube.com/watch?v=5DxC2zZMbqs' },
          { title: 'Cruz shows you how to perfect the two-tee drill (D-backs Academy)', site: 'MLB.com', href: 'https://www.mlb.com/video/d-backs-academy-two-tee-drill-c1203642783' },
          { title: 'BVSA Teaches: Med Ball Drill (Loading the Hands)', site: 'bvacademy.com (article)', href: 'https://bvacademy.com/bvsa-teaches-med-ball-drill-loading-the-hands/' }
        ]
      },
      {
        key: 'brake', n: 2,
        title: 'Front-leg brake — land soft, then post up',
        weeksLabel: 'weeks 3–4',
        steps: [
          { title: 'Setup', detail: 'Tee at belt height, slightly in front of the front foot’s landing spot. Start with 3 slow-motion swings, then build to about 75% speed.' },
          { title: 'Reps (3 sets × 5)', detail: 'Stride and land on a slightly bent front knee, then straighten and firm up that leg as the bat comes through. Hold the finish for a 2-count, balanced.' },
          { title: 'Cues (pick one)', detail: 'Land soft, then post up. Hit against a strong front leg.' },
          { title: 'What good looks like', detail: 'The front knee goes from bent at landing to nearly straight at contact. The head stays over the plate, the belly button turns to the pitcher, and he does not spin off toward third base.' }
        ],
        links: [
          { title: 'Hitting Drills - Front Leg Post Drill', site: 'YouTube · YouGoProBaseball', href: 'https://www.youtube.com/watch?v=noz-aYI7pXg' },
          { title: 'Flying Open While Hitting?! Here Are Some Drills To Help!', site: 'YouTube · VLO Baseball', href: 'https://www.youtube.com/watch?v=UsCUcNVrKns' }
        ]
      },
      {
        key: 'teestare', n: 3,
        title: 'Tee stare — eyes on the tee for a 2-count',
        weeksLabel: 'weeks 3–4, then rotate in',
        steps: [
          { title: 'Setup', detail: 'Any tee swing. You stand off to the side where you can see his eyes.' },
          { title: 'Reps', detail: 'Add to every tee swing (about 10–15 a session). After contact his eyes stay on the top of the tee while he counts one-two out loud, then he can look up.' },
          { title: 'Cues (pick one)', detail: 'See the tee after you hit it. Freeze your eyes.' },
          { title: 'What good looks like', detail: 'Chin stays near the front shoulder through contact and the front shoulder stays closed longer. If the head pops up before the count, that swing does not count.' }
        ],
        links: [
          { title: 'Youth Hitting Drill To Stop Pulling Off the Ball', site: 'YouTube · Antonelli Baseball', href: 'https://www.youtube.com/watch?v=mC5rRupCo1k' },
          { title: 'Learn Correct Head Position, Keeping It Still, & Seeing Ball Better While Hitting A Baseball', site: 'YouTube · HittingPerformLab', href: 'https://www.youtube.com/watch?v=avB_ww_lxVw' }
        ]
      },
      {
        key: 'linedrives', n: 4,
        title: 'Line drives to the top of the net (the scoreboard)',
        weeksLabel: 'weeks 1–2, then rotate in',
        steps: [
          { title: 'Setup', detail: 'Tape or hang a target (a towel or an X) high on the net, about chest height or above. Tee at belt height.' },
          { title: 'Reps (3 rounds × 10)', detail: 'Only hard line drives that hit at or above the target count. Write down the score each round and try to beat it next week.' },
          { title: 'Cue', detail: 'Hit the ball on a rope to the top of the net.' },
          { title: 'What good looks like', detail: 'Fewer grounders and choppers, more balls that hit the net on a line. A rising score week to week means the load and front-leg fixes are working.' }
        ],
        links: [
          { title: 'Baseball Tee Drill: Line Drives at a Target', site: 'bravara.com (drill page with video)', href: 'https://bravara.com/reps/baseball/tee-line-drives-at-a-target' },
          { title: 'How To Hit Off The Tee [The Right Way!]', site: 'YouTube · YouGoProBaseball', href: 'https://www.youtube.com/watch?v=pmZjRdtgIQg' }
        ]
      },
      {
        key: 'outside', n: 5,
        title: 'Outside-tee reps to the opposite field',
        weeksLabel: 'weeks 5+',
        steps: [
          { title: 'Setup', detail: 'Tee on the outside corner, a little deeper (closer to the catcher) than his normal tee spot.' },
          { title: 'Reps (2 sets × 6–8)', detail: 'Drive the ball to the right side of the net, which is the opposite field for a righty. Let the ball travel; do not reach out in front for it.' },
          { title: 'Cue', detail: 'Front shoulder stays home. See the ball hit the bat.' },
          { title: 'What good looks like', detail: 'The front shoulder and head stay pointed at the tee through contact, the hands stay close to the body, and the back foot pivots instead of dragging. The ball goes hard to the right side, not a roll-over to the left.' }
        ],
        links: [
          { title: 'How to Hit the Outside Pitch (pitchers will HATE this)', site: 'YouTube · icoachbaseball', href: 'https://www.youtube.com/watch?v=-sdabQWZ1kk' },
          { title: 'Best Tee Drill for POWER (Stay closed!) | Tee Drills for Youth Baseball', site: 'YouTube · TannerTees', href: 'https://www.youtube.com/watch?v=PgEKm444PwQ' }
        ]
      },
      {
        key: 'fence', n: 6,
        title: 'Fence drill — stop casting',
        weeksLabel: 'weeks 5+',
        steps: [
          { title: 'Setup', detail: 'He takes his stance facing a fence or the net. Set the knob of the bat against his belly button and the end cap touching the fence, then step into his stance about one bat length away.' },
          { title: 'Reps (2 sets × 6–8 slow swings)', detail: 'Slow, controlled dry swings without touching the fence. Speed up only when 5 in a row are clean. Back up a few inches if he keeps clipping it.' },
          { title: 'Cue', detail: 'Knob to the ball, hands stay inside.' },
          { title: 'What good looks like', detail: 'The hands stay close to his body and the barrel stays behind the hands until late, with no fence contact. This is the fix for hands drifting away on outside pitches.' }
        ],
        links: [
          { title: 'The Fence Drill - Baseball Hitting Drills & Mechanics', site: 'YouTube · Baseball Tutorials', href: 'https://www.youtube.com/watch?v=3RyLpYSzjsQ' },
          { title: 'Top 10 Hitting Drills To Develop The Perfect Baseball Swing (includes a fence drill)', site: 'YouTube · YouGoProBaseball', href: 'https://www.youtube.com/watch?v=qU11jWWQCA8' }
        ]
      }
    ]
  },

  /** John Andrew throwing fixes — from the Page section "Throwing Fixes (from throwing video, Oct 31)" */
  throwing: {
    title: 'Throwing Fixes',
    source: 'From throwing video, Oct 31',
    defaultStart: '2026-11-02',
    throws: 'right-handed',
    blockLabel: 'Throwing fix',
    wedSlot: 'Runs at the start of item 1 (catch / throw) of Wednesday’s Session B baseball block (~10 min), then 8–12 easy throws.',
    intro:
      'From the Oct 31 throwing video (John Andrew throws right-handed). Fix three things, in this order. About 10 minutes before regular catch on baseball days.',
    keep: 'A full, loose arm circle with real intent (no short-arming), and a consistent high three-quarter release that gives him accuracy and good carry.',
    problems: [
      { title: 'Glove arm flies open', detail: 'He steps slightly open, the glove arm flies out to the left, and the front shoulder opens early, so there is almost no hip and shoulder separation.' },
      { title: 'Back leg doesn’t come through', detail: 'The back leg kicks up and back or out to the right instead of coming through. He should finish chest square to the target with the right foot even with or past the left.' },
      { title: 'Elbow slightly low at foot strike', detail: 'The elbow is slightly below shoulder height at foot strike, so he pushes the ball a little.' }
    ],
    cues: 'Step at the target. Glove to the chest. Belly button to the target.',
    safety: 'Keep throws easy (about 60–70%) during drills: the goal is the position, not velocity. One cue at a time, and stop if his arm is sore.',
    gripNote: 'His grip could not be seen in the video, so check it in person (optional grip video in the drills below).',
    rule: 'One cue at a time. Keep drill throws around 60–70% effort, and stop if his arm is sore.',
    refilm: {
      from: '2026-11-21',
      to: '2026-11-28',
      label: 'glove side + rear + grip',
      detail:
        'Around Nov 21–28, film 10–15 throws at regular catch distance from two angles: a side view from his glove side (to see the glove, front shoulder, and elbow height at foot strike) and a rear view from behind him looking at the target (to see the step direction and where the back leg finishes). Add a quick close-up of his grip. Send it over and we will compare it to the Oct 31 video.'
    },
    phases: [
      {
        key: 'p1', weeks: '1–2', fromWeek: 1, toWeek: 2,
        main: 'Glove-to-chest one-knee throws + line drill',
        supporting: 'Glove into the chest; step on the line, not open',
        drills: ['oneknee', 'line'],
        exercises: [
          { id: 'tf-oneknee', name: 'One-knee glove-to-chest throws', kind: 'check', sets: 2, note: '2×10 easy · right knee down · 20–30 ft' },
          { id: 'tf-line', name: 'Line drill — step on the line', kind: 'check', sets: 2, note: '2×8–10 · foot left of the line doesn’t count' }
        ]
      },
      {
        key: 'p2', weeks: '3–4', fromWeek: 3, toWeek: 4,
        main: 'Power position (T) drill + throw and chase',
        supporting: 'Elbow at shoulder height; belly button to the target, back leg comes through',
        drills: ['tdrill', 'chase'],
        exercises: [
          { id: 'tf-tdrill', name: 'Power position “T” throws', kind: 'check', sets: 2, note: '2×8 · 2-count hold, elbow at shoulder height' },
          { id: 'tf-chase', name: 'Throw and chase', kind: 'check', sets: 2, note: '2×8 · jog past the cone' }
        ]
      },
      {
        key: 'p3', weeks: '5+', fromWeek: 5, toWeek: null,
        main: 'Regular catch, one cue per session',
        supporting: 'Use the 4 drills as a 3–5 min warm-up rotation',
        drills: ['oneknee', 'line', 'tdrill', 'chase'],
        exercises: [
          { id: 'tf-warmup', name: '4-drill warm-up rotation', kind: 'check', sets: 1, note: '3–5 min · one-knee, line, T, throw and chase' },
          { id: 'tf-onecue', name: 'Regular catch with one cue', kind: 'check', sets: 1, note: 'pick one: step at the target / glove to the chest / belly button to the target' }
        ]
      }
    ],
    drills: [
      {
        key: 'oneknee', n: 1,
        title: 'Glove-to-chest one-knee throws',
        weeksLabel: 'weeks 1–2',
        steps: [
          { title: 'Setup', detail: 'Right knee down, left knee up and pointing at you, 20–30 ft apart. Start with the ball in the glove at chest height and his front (left) shoulder turned toward you.' },
          { title: 'Reps (2 sets × 10 easy throws)', detail: 'Break the hands, point the glove at the target, then pull the glove straight into the chest as the arm comes through, and finish with the throwing hand across to the outside of the left knee. Pause at the break for the first few reps to check positions.' },
          { title: 'Cues (pick one)', detail: 'Pull the glove into your chest. Hug yourself. Front shoulder points at the target.' },
          { title: 'What good looks like', detail: 'The glove ends tucked at the chest, not flying out to the left, and the front shoulder stays pointed at you until the arm comes through. Throws arrive chest-high without him leaning or falling to the side.' }
        ],
        links: [
          { title: 'The first part of our throwing routine - Glove Knee Down', site: 'YouTube · Antonelli Baseball', href: 'https://www.youtube.com/watch?v=X1BNt4x9Qok' },
          { title: 'One Knee - Arm Follow Through', site: 'YouTube · allshoreba', href: 'https://www.youtube.com/watch?v=UvgdeoQYD2Q' },
          { title: 'One Knee Drill (Coach Gerry Novak)', site: 'MLB.com · Chicago White Sox', href: 'https://www.mlb.com/whitesox/video/one-knee-drill' }
        ]
      },
      {
        key: 'line', n: 2,
        title: 'Line drill — step at the target, not open',
        weeksLabel: 'weeks 1–2',
        steps: [
          { title: 'Setup', detail: 'Lay a rope, chalk line, or bat on the ground pointing straight at you. He stands sideways with both feet on or straddling the line, left shoulder toward you, 30–40 ft away.' },
          { title: 'Reps (2 sets × 8–10)', detail: 'He strides and the left foot lands on the line or just across it (slightly closed), never to the left of it. Throw, then look down to check the foot. Any rep with the foot left of the line does not count.' },
          { title: 'Cues (pick one)', detail: 'Step on the line. Toe at the target. Glove into the chest.' },
          { title: 'What good looks like', detail: 'The front foot lands on the line with the toe pointed at the target, hips stay closed a beat longer, and the front shoulder stays in until the arm comes through, so the hips turn before the shoulders.' }
        ],
        links: [
          { title: 'Teach Your Kid to Pitch Baseball - T Drill (directional line + landing line)', site: 'YouTube · BC Network Media', href: 'https://www.youtube.com/watch?v=fqngqg4D03A' },
          { title: 'Pitching: Step Behind Drill (staying in line with the target)', site: 'YouTube · Figure It Out Baseball', href: 'https://www.youtube.com/watch?v=UxzJRr6pLbo' }
        ]
      },
      {
        key: 'tdrill', n: 3,
        title: 'Power position (T) drill — elbow at shoulder height',
        weeksLabel: 'weeks 3–4, then warm-up',
        steps: [
          { title: 'Setup', detail: 'Standing sideways to the target in his stride, feet already apart, about 30 ft away. Glove arm points at the target, throwing arm up and back with the elbow at shoulder height and the ball facing away from you, so his arms make a T.' },
          { title: 'Reps (2 sets × 8)', detail: 'Hold the T for a 2-count while you check the elbow (level with the shoulder, not below), then rotate the hips, pull the glove in, and throw. Add a gentle step once the position looks right.' },
          { title: 'Cues (pick one)', detail: 'Make a T. Elbow up to the shoulder. Show the ball to the shortstop.' },
          { title: 'What good looks like', detail: 'At the pause his elbows are level with his shoulders. The hips start the turn, the arm comes through over the top of the elbow, and the ball comes out on a line instead of being pushed.' }
        ],
        links: [
          { title: 'Power Position Baseball Pitching Drill 9-19u', site: 'YouTube Shorts · ARM Pitching Development', href: 'https://www.youtube.com/shorts/uHE3w3z9ENw' },
          { title: 'Throwing Drills For Youth Players (the T pose)', site: 'baseballbible.net (article)', href: 'https://www.baseballbible.net/throwing-drills-for-youth-players/' }
        ]
      },
      {
        key: 'chase', n: 4,
        title: 'Throw and chase — back leg comes through',
        weeksLabel: 'weeks 3–4, then warm-up',
        steps: [
          { title: 'Setup', detail: 'Regular catch stance, 40–50 ft apart. Set a cone or glove 3–4 steps in front of him toward the target.' },
          { title: 'Reps (2 sets × 8)', detail: 'Throw, then let the back (right) leg swing through and keep moving, jogging after the throw until he passes the cone. Next round, just throw and freeze at the finish to check his feet.' },
          { title: 'Cues (pick one)', detail: 'Belly button to the target. Chase your throw. Right foot catches up.' },
          { title: 'What good looks like', detail: 'At the finish his chest and belly button face you and the right foot lands even with or past the left, not kicked up behind him or out to the right. The throwing hand finishes across to the outside of the left leg.' }
        ],
        links: [
          { title: 'Finishing Pitches Like a Pro With This Follow Through Drill', site: 'YouTube · Figure It Out Baseball', href: 'https://www.youtube.com/watch?v=caKHZl_J8KY' },
          { title: 'Follow Through Drill for Young Pitchers', site: 'YouTube Shorts · ThrowMo', href: 'https://www.youtube.com/shorts/zmtgRaMP4ic' }
        ]
      },
      {
        key: 'grip', n: '+',
        title: 'Optional: check his grip (4-seam)',
        weeksLabel: 'optional · check in person any time',
        steps: [
          { title: 'Grip', detail: 'Index and middle fingers across the wide seams, thumb underneath, ball out in the fingertips with a small gap from the palm. With small hands, three fingers on top is fine.' },
          { title: 'Habit', detail: 'Have him grab the ball from the glove the same way each time.' }
        ],
        links: [
          { title: 'Is Your Player Holding the Ball Wrong? Watch This', site: 'YouTube · Coach Beede', href: 'https://www.youtube.com/watch?v=K0l51mvsodI' },
          { title: 'Youth Baseball Essentials: Simple Throwing Progressions', site: 'YouTube · Dominate The Diamond', href: 'https://www.youtube.com/watch?v=LtzwCrthlTY' }
        ]
      }
    ]
  },

  /** Catalog of timed metrics for the Times progress panel */
  timedMetrics: [
    { id: 'oa-sprints', kid: 'older', label: 'Session A sprints (15–20 yd)', kind: 'lower' },
    { id: 'ob-shuttle', kid: 'older', label: 'Session B short shuttle', kind: 'lower' },
    { id: 'tg-speed-older', kid: 'older', label: 'Together sprints (15–20 yd)', kind: 'lower' },
    { id: 'hf-linedrives', kid: 'older', label: 'Line-drive score (hits at/above target)', kind: 'higher', unit: 'hits' }
  ]
};
