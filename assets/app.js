/* BoysTrain — mobile PWA */
(function () {
  'use strict';

  const STORAGE_KEY = 'boystrain:v1';
  const P = window.BT_PROGRAM;
  const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const DEFAULTS = {
    settings: {
      nameOlder: 'John Andrew',
      nameYounger: 'Ezra',
      dayA: 1,
      dayB: 3,
      dayC: 5
    },
    logs: {},
    setLog: {},   // key: mode|YYYY-MM-DD|session → { exerciseId: { done:[bool], times:[num|null] } }
    tests: [],
    frogs: [],
    overrides: {}
  };

  let state = loadState();
  let currentDate = todayISO();
  let currentMode = 'older';
  let view = 'main';
  let editingTestId = null;
  let pushupStyle = 'full';
  let saveTimer = null;
  let timesKidFilter = 'older';

  // ---------- persistence ----------
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULTS);
      const parsed = JSON.parse(raw);
      return {
        settings: { ...DEFAULTS.settings, ...(parsed.settings || {}) },
        logs: parsed.logs || {},
        setLog: parsed.setLog || {},
        tests: Array.isArray(parsed.tests) ? parsed.tests : [],
        frogs: Array.isArray(parsed.frogs) ? parsed.frogs : [],
        overrides: parsed.overrides || {}
      };
    } catch {
      return structuredClone(DEFAULTS);
    }
  }

  function persist(flash) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (flash !== false) flashSaved();
  }

  function schedulePersist() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => persist(true), 280);
    const el = document.getElementById('save-status');
    if (el) { el.textContent = 'Saving…'; el.classList.remove('saved'); }
  }

  function flashSaved() {
    const el = document.getElementById('save-status');
    if (!el) return;
    el.textContent = 'Saved';
    el.classList.add('saved');
    setTimeout(() => {
      if (el.textContent === 'Saved') { el.textContent = ''; el.classList.remove('saved'); }
    }, 1200);
  }

  // ---------- date helpers ----------
  function todayISO() {
    const d = new Date();
    return toISO(d);
  }
  function toISO(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  function parseISO(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  function addDays(iso, n) {
    const d = parseISO(iso);
    d.setDate(d.getDate() + n);
    return toISO(d);
  }
  function weekday(iso) {
    return parseISO(iso).getDay();
  }
  function formatLong(iso) {
    const d = parseISO(iso);
    return `${DAY_NAMES[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
  }
  function weekStartMonday(iso) {
    const d = parseISO(iso);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return toISO(d);
  }

  // ---------- names / schedule ----------
  function nameOlder() { return state.settings.nameOlder || 'John Andrew'; }
  function nameYounger() { return state.settings.nameYounger || 'Ezra'; }

  function buildSchedule() {
    const s = { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null };
    s[Number(state.settings.dayA)] = 'A';
    s[Number(state.settings.dayB)] = 'B';
    s[Number(state.settings.dayC)] = 'C';
    return s;
  }

  function plannedLetter(iso) {
    return buildSchedule()[weekday(iso)];
  }

  function logKey(iso, mode) {
    return `${mode || currentMode}|${iso}`;
  }

  function setLogKey(iso, mode, session) {
    return `${mode || currentMode}|${iso}|${session || 'X'}`;
  }

  function effectiveLetter(iso, mode) {
    const ov = state.overrides[logKey(iso, mode)];
    if (ov === '' || ov === 'rest') return null;
    if (ov === 'A' || ov === 'B' || ov === 'C') return ov;
    return plannedLetter(iso);
  }

  function getLog(iso, mode) {
    return state.logs[logKey(iso, mode)] || null;
  }

  function upsertLog(iso, mode, patch) {
    const k = logKey(iso, mode);
    const prev = state.logs[k] || {
      date: iso,
      mode,
      session: effectiveLetter(iso, mode),
      completed: '',
      effort: '',
      mood: '',
      duration: '',
      notes: ''
    };
    state.logs[k] = { ...prev, ...patch, date: iso, mode };
    schedulePersist();
  }

  // ---------- set / time logging ----------
  function ensureSetEntry(iso, mode, session, exerciseId, sets) {
    const k = setLogKey(iso, mode, session);
    if (!state.setLog[k]) state.setLog[k] = {};
    const day = state.setLog[k];
    if (!day[exerciseId]) {
      day[exerciseId] = {
        done: Array(sets).fill(false),
        times: Array(sets).fill(null)
      };
    } else {
      // grow/shrink arrays if programmed sets changed
      while (day[exerciseId].done.length < sets) day[exerciseId].done.push(false);
      while (day[exerciseId].times.length < sets) day[exerciseId].times.push(null);
    }
    return day[exerciseId];
  }

  function getSetEntry(iso, mode, session, exerciseId) {
    const k = setLogKey(iso, mode, session);
    return state.setLog[k]?.[exerciseId] || null;
  }

  function toggleSetDone(iso, mode, session, exerciseId, setIndex, sets) {
    const entry = ensureSetEntry(iso, mode, session, exerciseId, sets);
    entry.done[setIndex] = !entry.done[setIndex];
    schedulePersist();
  }

  function setSetTime(iso, mode, session, exerciseId, setIndex, sets, value) {
    const entry = ensureSetEntry(iso, mode, session, exerciseId, sets);
    if (value === '' || value == null) {
      entry.times[setIndex] = null;
    } else {
      const n = Number(value);
      entry.times[setIndex] = Number.isFinite(n) ? n : null;
      if (entry.times[setIndex] != null) entry.done[setIndex] = true;
    }
    schedulePersist();
  }

  function collectTimeHistory(kidFilter) {
    // Returns [{ metricId, label, kind, points: [{date, value, best, times}] }]
    const catalog = {};
    (P.timedMetrics || []).forEach((m) => {
      if (kidFilter && kidFilter !== 'all' && m.kid !== kidFilter) return;
      catalog[m.id] = { id: m.id, label: m.label, kind: m.kind || 'lower', kid: m.kid, byDate: {} };
    });

    // Also discover any timed entries from setLog not in catalog
    Object.keys(state.setLog).forEach((k) => {
      const parts = k.split('|');
      if (parts.length < 3) return;
      const [mode, date] = parts;
      const day = state.setLog[k];
      Object.keys(day).forEach((exId) => {
        const entry = day[exId];
        const times = (entry.times || []).filter((t) => t != null && Number.isFinite(Number(t))).map(Number);
        if (!times.length) return;

        let kid = mode === 'younger' ? 'younger' : 'older';
        let metricId = exId;
        if (mode === 'together') {
          if (exId.endsWith('-younger')) {
            kid = 'younger';
            metricId = exId;
          } else if (exId.endsWith('-older')) {
            kid = 'older';
            metricId = exId;
          }
        }
        if (kidFilter && kidFilter !== 'all' && kid !== kidFilter) return;

        if (!catalog[metricId]) {
          // look up label from program
          const label = findExerciseLabel(exId) || metricId;
          catalog[metricId] = { id: metricId, label, kind: 'lower', kid, byDate: {} };
        }
        const best = Math.min(...times);
        catalog[metricId].byDate[date] = {
          date,
          value: best,
          best,
          times
        };
      });
    });

    return Object.values(catalog).map((m) => ({
      id: m.id,
      label: m.label,
      kind: m.kind,
      kid: m.kid,
      points: Object.values(m.byDate).sort((a, b) => a.date.localeCompare(b.date))
    })).filter((m) => m.points.length > 0 || (P.timedMetrics || []).some((t) => t.id === m.id));
  }

  function findExerciseLabel(exId) {
    const tm = (P.timedMetrics || []).find((t) => t.id === exId);
    if (tm) return tm.label;
    for (const who of [P.older, P.younger]) {
      for (const L of ['A', 'B', 'C']) {
        const sess = who.sessions[L];
        for (const step of sess.steps || []) {
          for (const ex of step.exercises || []) {
            if (ex.id === exId) return ex.chartLabel || ex.name;
          }
        }
      }
    }
    const st = (P.together.stations || []).find((s) => exId.startsWith(s.id));
    if (st) return st.olderChartLabel || st.name;
    return null;
  }

  // ---------- UI wiring ----------
  function $(id) { return document.getElementById(id); }

  function setSeg(containerId, value) {
    const root = $(containerId);
    if (!root) return;
    root.querySelectorAll('button').forEach((b) => {
      b.classList.toggle('active', String(b.dataset.val) === String(value));
    });
  }

  function bindSeg(containerId, onChange) {
    const root = $(containerId);
    if (!root) return;
    root.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-val]');
      if (!btn) return;
      onChange(btn.dataset.val);
    });
  }

  function showView(whic) {
    view = whic;
    $('main-view').classList.toggle('hidden', whic !== 'main');
    $('baseline-panel').classList.toggle('active', whic === 'baseline');
    $('history-panel').classList.toggle('active', whic === 'history');
    $('settings-panel').classList.toggle('active', whic === 'settings');
    $('times-panel').classList.toggle('active', whic === 'times');
    $('btn-baseline').classList.toggle('active', whic === 'baseline');
    $('btn-history').classList.toggle('active', whic === 'history');
    $('btn-settings').classList.toggle('active', whic === 'settings');
    $('btn-times').classList.toggle('active', whic === 'times');
    if (whic === 'baseline') renderBaseline();
    if (whic === 'history') renderHistory();
    if (whic === 'settings') renderSettingsForm();
    if (whic === 'times') renderTimes();
  }

  function updateModeLabels() {
    $('mode-older-name').textContent = nameOlder();
    $('mode-younger-name').textContent = nameYounger();
    const promo = $('baseline-promo-name');
    if (promo) promo.textContent = nameOlder();
    const frog = $('frog-promo-name');
    if (frog) frog.textContent = nameYounger();
    $('baseline-panel-sub').textContent = `${nameOlder()} — field tests every 4–6 weeks · ${nameYounger()} frog jump optional`;
  }

  function renderDateNav() {
    const isToday = currentDate === todayISO();
    $('date-label').textContent = isToday ? 'Today' : formatLong(currentDate);
    $('date-sub').textContent = isToday ? formatLong(currentDate) : currentDate;
  }

  function daysSince(iso) {
    if (!iso) return null;
    const ms = parseISO(todayISO()) - parseISO(iso);
    return Math.round(ms / 86400000);
  }

  function lastTestDate() {
    if (!state.tests.length) return null;
    return state.tests.map((t) => t.date).sort().at(-1);
  }

  function renderBaselinePromo() {
    const olderPromo = $('baseline-promo-older');
    const youngerPromo = $('baseline-promo-younger');
    olderPromo.classList.toggle('hidden', currentMode === 'younger');
    youngerPromo.classList.toggle('hidden', currentMode !== 'younger');

    const last = lastTestDate();
    const label = $('baseline-last-label');
    if (!last) {
      label.textContent = 'No tests yet';
      label.className = 'badge muted';
    } else {
      const d = daysSince(last);
      if (d >= 28) {
        label.textContent = `Last test ${d}d ago · due soon`;
        label.className = 'badge warn';
      } else {
        label.textContent = `Last test ${d === 0 ? 'today' : d + 'd ago'}`;
        label.className = 'badge good';
      }
    }
  }

  function renderExerciseBlock(ex, iso, mode, session) {
    const sets = Math.max(1, Number(ex.sets) || 1);
    const raw = getSetEntry(iso, mode, session, ex.id);
    const entry = {
      done: Array.from({ length: sets }, (_, i) => !!(raw && raw.done && raw.done[i])),
      times: Array.from({ length: sets }, (_, i) => (raw && raw.times && raw.times[i] != null) ? raw.times[i] : null)
    };
    const timed = ex.kind === 'timed';
    const opt = ex.optional ? ' <span class="ex-optional">optional</span>' : '';
    const note = ex.note ? `<span class="ex-note">${escapeHtml(ex.note)}</span>` : '';

    let rows = '';
    for (let i = 0; i < sets; i++) {
      const done = !!entry.done[i];
      const timeVal = entry.times[i] != null ? entry.times[i] : '';
      rows += `<div class="set-row ${done ? 'done' : ''}" data-ex="${escapeHtml(ex.id)}" data-set="${i}">
        <button type="button" class="set-check ${done ? 'checked' : ''}" data-ex="${escapeHtml(ex.id)}" data-set="${i}" data-sets="${sets}" aria-pressed="${done}" aria-label="Set ${i + 1}">
          <span class="set-check-mark">${done ? '✓' : ''}</span>
          <span class="set-check-label">${sets > 1 ? 'Set ' + (i + 1) : 'Done'}</span>
        </button>
        ${timed ? `<label class="set-time"><span class="set-time-unit">sec</span><input type="number" inputmode="decimal" step="0.01" min="0" placeholder="—" data-ex="${escapeHtml(ex.id)}" data-set="${i}" data-sets="${sets}" value="${timeVal === '' ? '' : escapeHtml(String(timeVal))}" /></label>` : ''}
      </div>`;
    }

    return `<div class="ex-block" data-ex-id="${escapeHtml(ex.id)}">
      <div class="ex-head">
        <span class="ex-name">${escapeHtml(ex.name)}${opt}</span>
        ${note}
      </div>
      <div class="set-list">${rows}</div>
    </div>`;
  }

  function bindExerciseInteractions(root, iso, mode, session) {
    root.querySelectorAll('.set-check').forEach((btn) => {
      btn.addEventListener('click', () => {
        const exId = btn.dataset.ex;
        const setIndex = Number(btn.dataset.set);
        const sets = Number(btn.dataset.sets);
        toggleSetDone(iso, mode, session, exId, setIndex, sets);
        // re-render just workout to refresh UI without losing scroll badly
        const y = window.scrollY;
        renderWorkout();
        renderWeekChecklist();
        window.scrollTo(0, y);
      });
    });
    root.querySelectorAll('.set-time input').forEach((inp) => {
      const save = () => {
        const exId = inp.dataset.ex;
        const setIndex = Number(inp.dataset.set);
        const sets = Number(inp.dataset.sets);
        setSetTime(iso, mode, session, exId, setIndex, sets, inp.value);
        const y = window.scrollY;
        renderWorkout();
        window.scrollTo(0, y);
      };
      inp.addEventListener('change', save);
      inp.addEventListener('blur', save);
    });
  }

  function renderWorkout() {
    const body = $('workout-body');
    const letter = effectiveLetter(currentDate, currentMode);
    const planned = plannedLetter(currentDate);
    const override = state.overrides[logKey(currentDate, currentMode)];

    let html = '';

    html += `<p class="field-label">Do session now</p>`;
    html += `<div class="override-row" id="override-row">`;
    ['A', 'B', 'C'].forEach((L) => {
      const active = letter === L ? 'active' : '';
      html += `<button type="button" data-ov="${L}" class="${active}">${L}</button>`;
    });
    const restActive = letter == null ? 'active' : '';
    html += `<button type="button" data-ov="rest" class="${restActive}">Rest</button>`;
    html += `<button type="button" data-ov="auto">Auto</button>`;
    html += `</div>`;
    if (override && override !== 'auto') {
      html += `<p class="session-meta">Override on — planned was ${planned || 'rest'}.</p>`;
    }

    if (currentMode === 'together') {
      html += renderTogether(letter);
    } else if (!letter) {
      const note = restNoteFor(currentDate);
      html += `
        <div class="badge-row" style="margin-top:8px"><span class="badge muted">Rest / sports day</span></div>
        <h2 class="session-title">No structured session</h2>
        <p class="session-meta">${escapeHtml(note)}</p>
        <div class="callout" style="margin-top:8px"><strong>Tip</strong>Use Do session now if you want to run A, B, or C today anyway.</div>
      `;
    } else {
      const prog = currentMode === 'older' ? P.older : P.younger;
      const sess = prog.sessions[letter];
      const who = currentMode === 'older' ? nameOlder() : nameYounger();
      html += `
        <div class="badge-row" style="margin-top:8px">
          <span class="badge">Session ${letter}</span>
          <span class="badge muted">${escapeHtml(sess.duration)}</span>
          <span class="badge muted">${escapeHtml(who)}</span>
        </div>
        <h2 class="session-title">${escapeHtml(sess.title)}</h2>
        <p class="session-meta">${escapeHtml(prog.label)} · default ${escapeHtml(sess.weekdayHint)}</p>
        ${P.legPriority ? `<div class="callout" style="margin-top:4px"><strong>${escapeHtml(P.legPriority.title)}</strong>${escapeHtml(P.legPriority.body)}</div>` : ''}
        <ol class="steps">
          ${sess.steps.map((s, i) => `
            <li class="step">
              <h4><span class="step-n">${i + 1}</span>${escapeHtml(s.title)}</h4>
              <p>${escapeHtml(s.detail)}</p>
              ${(s.exercises || []).map((ex) => renderExerciseBlock(ex, currentDate, currentMode, letter)).join('')}
            </li>
          `).join('')}
        </ol>
      `;
    }

    body.innerHTML = html;
    body.querySelector('#override-row')?.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-ov]');
      if (!btn) return;
      const v = btn.dataset.ov;
      const k = logKey(currentDate, currentMode);
      if (v === 'auto') delete state.overrides[k];
      else state.overrides[k] = v;
      schedulePersist();
      renderAll();
    });

    if (currentMode === 'together') {
      bindTogetherInteractions(body, letter);
    } else if (letter) {
      bindExerciseInteractions(body, currentDate, currentMode, letter);
    }

    $('log-session-tag').textContent = letter
      ? `Logging Session ${letter} · ${currentMode === 'together' ? 'Together' : (currentMode === 'older' ? nameOlder() : nameYounger())}`
      : `Logging rest/off day · ${currentMode === 'together' ? 'Together' : (currentMode === 'older' ? nameOlder() : nameYounger())}`;
  }

  function restNoteFor(iso) {
    const wd = weekday(iso);
    if (P.restNotes[wd]) return P.restNotes[wd];
    return 'Youth sports / free play or recovery.';
  }

  function renderTogether(letter) {
    const t = P.together;
    const session = letter || 'T';
    return `
      <div class="badge-row" style="margin-top:8px">
        <span class="badge">Together</span>
        <span class="badge muted">${escapeHtml(t.duration)}</span>
        ${letter ? `<span class="badge muted">Aligned to ${letter}</span>` : `<span class="badge muted">Shared playground</span>`}
      </div>
      <h2 class="session-title">Same stations, two intensities</h2>
      <p class="session-meta">${escapeHtml(t.note)}</p>
      ${P.legPriority ? `<div class="callout" style="margin-top:4px"><strong>${escapeHtml(P.legPriority.title)}</strong>${escapeHtml(P.legPriority.body)}</div>` : ''}
      <div class="station-table" style="margin-top:8px" id="together-stations">
        ${t.stations.map((s) => {
          const ySets = Math.max(1, Number(s.youngerSets) || 1);
          const oSets = Math.max(1, Number(s.olderSets) || 1);
          const yEx = {
            id: s.id + '-younger',
            name: nameYounger(),
            kind: 'check',
            sets: ySets,
            optional: s.optional
          };
          const oEx = {
            id: s.id + '-older',
            name: nameOlder(),
            kind: s.olderTimed ? 'timed' : 'check',
            sets: oSets,
            optional: s.optional,
            note: s.olderTimed ? 'programmed: ' + oSets : '',
            chartLabel: s.olderChartLabel
          };
          return `
          <div class="station">
            <div class="station-name">${escapeHtml(s.name)}${s.optional ? ' <span class="ex-optional">pick one</span>' : ''}</div>
            <div class="station-lanes station-lanes-stack">
              <div class="lane">
                <strong>${escapeHtml(nameYounger())}</strong>
                <span class="lane-detail">${escapeHtml(s.younger)}</span>
                ${renderExerciseBlock(yEx, currentDate, 'together', session)}
              </div>
              <div class="lane">
                <strong>${escapeHtml(nameOlder())}</strong>
                <span class="lane-detail">${escapeHtml(s.older)}</span>
                ${renderExerciseBlock(oEx, currentDate, 'together', session)}
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    `;
  }

  function bindTogetherInteractions(root, letter) {
    const session = letter || 'T';
    bindExerciseInteractions(root, currentDate, 'together', session);
  }

  function renderWeekChecklist() {
    const start = weekStartMonday(currentDate);
    const letters = ['A', 'B', 'C'];
    const root = $('week-checklist');
    const mode = currentMode === 'together' ? 'together' : currentMode;
    root.innerHTML = letters.map((L) => {
      let done = false;
      for (let i = 0; i < 7; i++) {
        const iso = addDays(start, i);
        const log = getLog(iso, mode);
        const sess = log?.session || effectiveLetter(iso, mode);
        if (log && (log.completed === 'yes' || log.completed === 'partial') && sess === L) {
          done = true; break;
        }
      }
      const titles = mode === 'younger'
        ? {
            A: (P.younger.sessions.A.focusLabel || 'Animals+legs'),
            B: (P.younger.sessions.B.focusLabel || 'Balance+legs+ball'),
            C: (P.younger.sessions.C.focusLabel || 'Obstacle+legs+bases')
          }
        : mode === 'together'
          ? { A: 'Together', B: 'Together', C: 'Together' }
          : {
            A: (P.older.sessions.A.focusLabel || 'Speed+legs+hoops'),
            B: (P.older.sessions.B.focusLabel || 'Agility+legs+baseball'),
            C: (P.older.sessions.C.focusLabel || 'Athleticism+legs+ball')
          };
      return `<div class="check-pill ${done ? 'done' : ''}"><span class="letter">${L}</span><span class="sub">${titles[L]}${done ? ' · done' : ''}</span></div>`;
    }).join('');
    $('week-hint').textContent = `Week of ${formatLong(start)} · ${mode === 'older' ? nameOlder() : mode === 'younger' ? nameYounger() : 'Together'}`;
  }

  function renderLogForm() {
    const log = getLog(currentDate, currentMode) || {};
    setSeg('completed-seg', log.completed || '');
    setSeg('effort-seg', log.effort || '');
    setSeg('mood-seg', log.mood || '');
    $('log-duration').value = log.duration ?? '';
    $('log-notes').value = log.notes ?? '';
  }

  function renderSafety() {
    $('safety-hard').textContent = P.safety.hard;
    const legEl = $('leg-priority-body');
    if (legEl && P.legPriority) {
      legEl.textContent = P.legPriority.body;
      const legTitle = $('leg-priority-title');
      if (legTitle) legTitle.textContent = P.legPriority.title;
    }
    const eq = $('equipment-list');
    if (eq && Array.isArray(P.equipment)) {
      eq.innerHTML = P.equipment.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    }
    const url = P.programPageUrl;
    $('program-link').href = url;
    $('settings-program-link').href = url;
  }

  function renderAll() {
    updateModeLabels();
    renderDateNav();
    renderBaselinePromo();
    renderWorkout();
    renderWeekChecklist();
    renderLogForm();
    document.querySelectorAll('.mode-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.mode === currentMode);
    });
  }

  // ---------- Times panel ----------
  function renderTimes() {
    setSeg('times-kid-seg', timesKidFilter);
    const who = timesKidFilter === 'younger' ? nameYounger()
      : timesKidFilter === 'older' ? nameOlder()
      : 'Both kids';
    $('times-panel-sub').textContent = `${who} — workout max-effort times over days`;

    const body = $('times-body');
    const metrics = collectTimeHistory(timesKidFilter);
    const withData = metrics.filter((m) => m.points.length > 0);

    if (!withData.length) {
      body.innerHTML = `<div class="empty">No timed reps yet. During a workout, enter seconds next to sprint or shuttle checkboxes — best time each day shows up here.</div>`;
      return;
    }

    body.innerHTML = withData.map((m) => {
      const pts = m.points.map((p) => ({ date: p.date, value: p.best }));
      const kidTag = m.kid === 'younger' ? nameYounger() : nameOlder();
      if (pts.length === 1) {
        return `<div class="chart-wrap"><h4>${escapeHtml(m.label)} <span style="color:var(--text-dim);font-weight:500">(${escapeHtml(kidTag)} · sec)</span></h4>
          <div class="chart-empty">One day logged (${formatNum(pts[0].value)}s on ${escapeHtml(pts[0].date)}) — more sessions for a trend.</div></div>`;
      }
      return `<div class="chart-wrap"><h4>${escapeHtml(m.label)} <span style="color:var(--text-dim);font-weight:500">(${escapeHtml(kidTag)} · best sec)</span></h4>${sparklineSVG(pts, m.kind || 'lower')}</div>`;
    }).join('');
  }

  // ---------- baseline ----------
  function uid() {
    return 't_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  function clearTestForm() {
    editingTestId = null;
    $('test-date').value = todayISO();
    ['broadJump', 'sprint20', 'sprint40', 'sprint60', 'pushups', 'shuttle', 'vertical'].forEach((k) => {
      $(`test-${k}`).value = '';
    });
    $('test-notes').value = '';
    pushupStyle = 'full';
    setSeg('pushup-style-seg', 'full');
    $('test-edit-hint').textContent = '';
  }

  function fillTestForm(entry) {
    editingTestId = entry.id;
    $('test-date').value = entry.date;
    ['broadJump', 'sprint20', 'sprint40', 'sprint60', 'pushups', 'shuttle', 'vertical'].forEach((k) => {
      $(`test-${k}`).value = entry[k] ?? '';
    });
    $('test-notes').value = entry.notes || '';
    pushupStyle = entry.pushupStyle || 'full';
    setSeg('pushup-style-seg', pushupStyle);
    $('test-edit-hint').textContent = `Editing test from ${entry.date}. Save to update.`;
  }

  function saveTestDay() {
    const entry = {
      id: editingTestId || uid(),
      date: $('test-date').value || todayISO(),
      broadJump: numOrEmpty($('test-broadJump').value),
      sprint20: numOrEmpty($('test-sprint20').value),
      sprint40: numOrEmpty($('test-sprint40').value),
      sprint60: numOrEmpty($('test-sprint60').value),
      pushups: numOrEmpty($('test-pushups').value),
      pushupStyle,
      shuttle: numOrEmpty($('test-shuttle').value),
      vertical: numOrEmpty($('test-vertical').value),
      notes: $('test-notes').value.trim()
    };
    const hasAny = ['broadJump', 'sprint20', 'sprint40', 'sprint60', 'pushups', 'shuttle', 'vertical']
      .some((k) => entry[k] !== '');
    if (!hasAny) {
      alert('Enter at least one measurement.');
      return;
    }
    const idx = state.tests.findIndex((t) => t.id === entry.id);
    if (idx >= 0) state.tests[idx] = entry;
    else state.tests.push(entry);
    state.tests.sort((a, b) => a.date.localeCompare(b.date));
    persist(true);
    clearTestForm();
    renderBaseline();
    renderBaselinePromo();
  }

  function numOrEmpty(v) {
    if (v === '' || v == null) return '';
    const n = Number(v);
    return Number.isFinite(n) ? n : '';
  }

  function renderBaseline() {
    const hist = $('test-history');
    const sorted = [...state.tests].sort((a, b) => b.date.localeCompare(a.date));
    if (!sorted.length) {
      hist.innerHTML = `<div class="empty">No test days yet. Log ${escapeHtml(nameOlder())}’s first baseline above.</div>`;
    } else {
      hist.innerHTML = sorted.map((t) => {
        const bits = [];
        if (t.sprint20 !== '') bits.push(`20yd ${t.sprint20}s`);
        if (t.sprint40 !== '') bits.push(`40yd ${t.sprint40}s`);
        if (t.sprint60 !== '') bits.push(`60yd ${t.sprint60}s`);
        if (t.broadJump !== '') bits.push(`BJ ${t.broadJump}"`);
        if (t.pushups !== '') bits.push(`PU ${t.pushups}${t.pushupStyle === 'knees' ? 'K' : ''}`);
        if (t.shuttle !== '') bits.push(`5-10-5 ${t.shuttle}s`);
        if (t.vertical !== '') bits.push(`V ${t.vertical}"`);
        return `<div class="test-item" data-id="${t.id}">
          <div class="when">${escapeHtml(t.date.slice(5))}</div>
          <div class="meta"><strong>${escapeHtml(formatLong(t.date))}</strong>${escapeHtml(bits.join(' · ') || '—')}${t.notes ? ' · ' + escapeHtml(t.notes) : ''}</div>
        </div>`;
      }).join('');
      hist.querySelectorAll('.test-item').forEach((el) => {
        el.addEventListener('click', () => {
          const entry = state.tests.find((t) => t.id === el.dataset.id);
          if (entry) {
            fillTestForm(entry);
            $('ja-test-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }

    renderCharts();
    renderFrogs();
  }

  function renderCharts() {
    const body = $('charts-body');
    const tests = P.baseline.tests;
    if (!state.tests.length) {
      body.innerHTML = `<div class="empty">Charts appear after you save a test day.</div>`;
      return;
    }
    body.innerHTML = tests.map((spec) => {
      const pts = state.tests
        .filter((t) => t[spec.key] !== '' && t[spec.key] != null)
        .map((t) => ({ date: t.date, value: Number(t[spec.key]) }));
      if (!pts.length) {
        return `<div class="chart-wrap"><h4>${escapeHtml(spec.label)}</h4><div class="chart-empty">No data yet</div></div>`;
      }
      return `<div class="chart-wrap"><h4>${escapeHtml(spec.label)} <span style="color:var(--text-dim);font-weight:500">(${escapeHtml(spec.unit)})</span></h4>${sparklineSVG(pts, spec.kind)}</div>`;
    }).join('');
  }

  function sparklineSVG(points, kind) {
    const w = 320, h = 120, pad = 28;
    const vals = points.map((p) => p.value);
    let min = Math.min(...vals);
    let max = Math.max(...vals);
    if (min === max) { min -= 1; max += 1; }
    const span = max - min || 1;
    const coords = points.map((p, i) => {
      const x = pad + (i * (w - pad * 2)) / Math.max(points.length - 1, 1);
      const y = pad + ((max - p.value) / span) * (h - pad * 2);
      return { x, y, ...p };
    });
    const line = coords.map((c, i) => `${i ? 'L' : 'M'}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
    const dots = coords.map((c) => `<circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="3.5" fill="var(--accent)" />`).join('');
    const first = coords[0];
    const last = coords[coords.length - 1];
    const delta = last.value - first.value;
    const better = kind === 'lower' ? delta < 0 : delta > 0;
    const deltaLabel = `${delta > 0 ? '+' : ''}${formatNum(delta)} ${kind === 'lower' ? (better ? 'faster' : 'slower') : (better ? 'up' : 'down')}`;
    return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Trend">
      <text x="${pad}" y="14" fill="var(--text-dim)" font-size="10">${escapeHtml(points[0].date)}</text>
      <text x="${w - pad}" y="14" fill="var(--text-dim)" font-size="10" text-anchor="end">${escapeHtml(points.at(-1).date)}</text>
      <path d="${line}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
      <text x="${pad}" y="${h - 6}" fill="var(--text-muted)" font-size="11">${formatNum(first.value)} → ${formatNum(last.value)} · ${deltaLabel}</text>
    </svg>`;
  }

  function formatNum(n) {
    if (!Number.isFinite(n)) return '—';
    return Math.abs(n) >= 10 ? n.toFixed(1) : n.toFixed(2).replace(/\.?0+$/, '') || String(n);
  }

  // ---------- frogs ----------
  function saveFrog() {
    const entry = {
      id: uid(),
      date: $('frog-date').value || todayISO(),
      distance: numOrEmpty($('frog-distance').value),
      notes: $('frog-notes').value.trim()
    };
    if (entry.distance === '') {
      alert('Enter a frog jump distance.');
      return;
    }
    state.frogs.push(entry);
    state.frogs.sort((a, b) => a.date.localeCompare(b.date));
    persist(true);
    $('frog-distance').value = '';
    $('frog-notes').value = '';
    $('frog-date').value = todayISO();
    renderFrogs();
  }

  function renderFrogs() {
    if (!$('frog-date').value) $('frog-date').value = todayISO();
    const list = $('frog-history');
    const sorted = [...state.frogs].sort((a, b) => b.date.localeCompare(a.date));
    if (!sorted.length) {
      list.innerHTML = `<div class="empty">No frog jumps yet — keep it playful.</div>`;
    } else {
      list.innerHTML = sorted.map((f) => `
        <div class="test-item">
          <div class="when">${escapeHtml(f.date.slice(5))}</div>
          <div class="meta"><strong>${escapeHtml(formatNum(f.distance))} in</strong>${f.notes ? escapeHtml(f.notes) : 'Ribbit.'}</div>
        </div>
      `).join('');
    }
    const wrap = $('frog-chart-wrap');
    const pts = state.frogs
      .filter((f) => f.distance !== '')
      .map((f) => ({ date: f.date, value: Number(f.distance) }));
    if (pts.length >= 2) {
      wrap.innerHTML = `<h4>Frog distance (in)</h4>${sparklineSVG(pts, 'higher')}`;
    } else if (pts.length === 1) {
      wrap.innerHTML = `<h4>Frog distance</h4><div class="chart-empty">One hop logged — more later for a trend.</div>`;
    } else {
      wrap.innerHTML = '';
    }
  }

  // ---------- history ----------
  function renderHistory() {
    const list = $('history-list');
    const entries = Object.values(state.logs)
      .filter((l) => l.completed === 'yes' || l.completed === 'partial' || (l.notes && l.notes.trim()))
      .sort((a, b) => b.date.localeCompare(a.date) || a.mode.localeCompare(b.mode));
    $('history-sub').textContent = `${entries.length} logged session${entries.length === 1 ? '' : 's'}`;
    if (!entries.length) {
      list.innerHTML = `<div class="empty">No sessions logged yet.</div>`;
      return;
    }
    list.innerHTML = entries.map((l) => {
      const who = l.mode === 'older' ? nameOlder() : l.mode === 'younger' ? nameYounger() : 'Together';
      const sess = l.session ? `Session ${l.session}` : 'Rest/off';
      const status = l.completed === 'yes' ? 'Done' : l.completed === 'partial' ? 'Partial' : l.completed === 'no' ? 'Skipped' : '';
      return `<div class="hist-item" data-date="${l.date}" data-mode="${l.mode}">
        <div class="when">${escapeHtml(l.date.slice(5))}</div>
        <div class="meta"><strong>${escapeHtml(who)} · ${escapeHtml(sess)}</strong>${escapeHtml([status, l.duration ? l.duration + ' min' : '', l.effort ? 'effort ' + l.effort : ''].filter(Boolean).join(' · '))}${l.notes ? '<br>' + escapeHtml(l.notes) : ''}</div>
      </div>`;
    }).join('');
    list.querySelectorAll('.hist-item').forEach((el) => {
      el.addEventListener('click', () => {
        currentDate = el.dataset.date;
        currentMode = el.dataset.mode;
        showView('main');
        renderAll();
      });
    });
  }

  // ---------- settings ----------
  function renderSettingsForm() {
    $('set-name-older').value = nameOlder();
    $('set-name-younger').value = nameYounger();
    $('set-day-A').value = String(state.settings.dayA);
    $('set-day-B').value = String(state.settings.dayB);
    $('set-day-C').value = String(state.settings.dayC);
  }

  function applySettingsFromForm() {
    state.settings.nameOlder = ($('set-name-older').value.trim() || 'John Andrew');
    state.settings.nameYounger = ($('set-name-younger').value.trim() || 'Ezra');
    state.settings.dayA = Number($('set-day-A').value);
    state.settings.dayB = Number($('set-day-B').value);
    state.settings.dayC = Number($('set-day-C').value);
    schedulePersist();
    updateModeLabels();
    renderAll();
  }

  // ---------- export / import ----------
  function exportJSON() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `boystrain-backup-${todayISO()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importJSON(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || typeof data !== 'object') throw new Error('bad');
        const replace = confirm('Replace all BoysTrain data with this file?\nOK = replace · Cancel = merge logs/tests.');
        if (replace) {
          state = {
            settings: { ...DEFAULTS.settings, ...(data.settings || {}) },
            logs: data.logs || {},
            setLog: data.setLog || {},
            tests: Array.isArray(data.tests) ? data.tests : [],
            frogs: Array.isArray(data.frogs) ? data.frogs : [],
            overrides: data.overrides || {}
          };
        } else {
          state.settings = { ...state.settings, ...(data.settings || {}) };
          state.logs = { ...state.logs, ...(data.logs || {}) };
          state.setLog = { ...state.setLog, ...(data.setLog || {}) };
          state.overrides = { ...state.overrides, ...(data.overrides || {}) };
          const byId = new Map(state.tests.map((t) => [t.id, t]));
          (data.tests || []).forEach((t) => byId.set(t.id || uid(), t));
          state.tests = [...byId.values()].sort((a, b) => a.date.localeCompare(b.date));
          const fIds = new Map(state.frogs.map((f) => [f.id, f]));
          (data.frogs || []).forEach((f) => fIds.set(f.id || uid(), f));
          state.frogs = [...fIds.values()].sort((a, b) => a.date.localeCompare(b.date));
        }
        persist(true);
        renderAll();
        if (view === 'baseline') renderBaseline();
        if (view === 'times') renderTimes();
        alert('Import complete.');
      } catch {
        alert('Could not read that JSON file.');
      }
    };
    reader.readAsText(file);
  }

  function escapeHtml(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ---------- events ----------
  function bind() {
    document.querySelectorAll('[data-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      });
    });

    document.querySelectorAll('.mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentMode = btn.dataset.mode;
        showView('main');
        renderAll();
      });
    });

    $('btn-prev-day').addEventListener('click', () => { currentDate = addDays(currentDate, -1); renderAll(); });
    $('btn-next-day').addEventListener('click', () => { currentDate = addDays(currentDate, 1); renderAll(); });
    $('date-display').addEventListener('click', () => {
      if (currentDate !== todayISO()) { currentDate = todayISO(); renderAll(); return; }
      $('date-picker').value = currentDate;
      $('date-picker').showPicker?.() || $('date-picker').click();
    });
    $('date-picker').addEventListener('change', () => {
      if ($('date-picker').value) { currentDate = $('date-picker').value; renderAll(); }
    });

    $('btn-baseline').addEventListener('click', () => showView(view === 'baseline' ? 'main' : 'baseline'));
    $('btn-history').addEventListener('click', () => showView(view === 'history' ? 'main' : 'history'));
    $('btn-settings').addEventListener('click', () => showView(view === 'settings' ? 'main' : 'settings'));
    $('btn-times').addEventListener('click', () => showView(view === 'times' ? 'main' : 'times'));
    $('btn-baseline-back').addEventListener('click', () => showView('main'));
    $('btn-history-back').addEventListener('click', () => showView('main'));
    $('btn-settings-back').addEventListener('click', () => showView('main'));
    $('btn-times-back').addEventListener('click', () => showView('main'));

    $('btn-log-test-day').addEventListener('click', () => {
      showView('baseline');
      clearTestForm();
      setTimeout(() => $('ja-test-card').scrollIntoView({ behavior: 'smooth' }), 50);
    });
    $('btn-view-trends').addEventListener('click', () => {
      showView('baseline');
      setTimeout(() => $('charts-body').scrollIntoView({ behavior: 'smooth' }), 50);
    });
    $('btn-log-frog').addEventListener('click', () => {
      showView('baseline');
      setTimeout(() => $('frog-card').scrollIntoView({ behavior: 'smooth' }), 50);
    });

    bindSeg('completed-seg', (v) => {
      upsertLog(currentDate, currentMode, { completed: v, session: effectiveLetter(currentDate, currentMode) });
      setSeg('completed-seg', v);
      renderWeekChecklist();
    });
    bindSeg('effort-seg', (v) => {
      upsertLog(currentDate, currentMode, { effort: v, session: effectiveLetter(currentDate, currentMode) });
      setSeg('effort-seg', v);
    });
    bindSeg('mood-seg', (v) => {
      upsertLog(currentDate, currentMode, { mood: v, session: effectiveLetter(currentDate, currentMode) });
      setSeg('mood-seg', v);
    });
    $('log-duration').addEventListener('input', () => {
      upsertLog(currentDate, currentMode, { duration: numOrEmpty($('log-duration').value) });
    });
    $('log-notes').addEventListener('input', () => {
      upsertLog(currentDate, currentMode, { notes: $('log-notes').value });
    });

    bindSeg('pushup-style-seg', (v) => { pushupStyle = v; setSeg('pushup-style-seg', v); });
    bindSeg('times-kid-seg', (v) => {
      timesKidFilter = v;
      setSeg('times-kid-seg', v);
      renderTimes();
    });
    $('btn-save-test').addEventListener('click', saveTestDay);
    $('btn-clear-test').addEventListener('click', clearTestForm);
    $('btn-save-frog').addEventListener('click', saveFrog);

    ['set-name-older', 'set-name-younger', 'set-day-A', 'set-day-B', 'set-day-C'].forEach((id) => {
      $(id).addEventListener('change', applySettingsFromForm);
      $(id).addEventListener('input', () => {
        if (id.startsWith('set-name')) applySettingsFromForm();
      });
    });

    $('btn-export').addEventListener('click', exportJSON);
    $('btn-import').addEventListener('click', () => $('import-file').click());
    $('import-file').addEventListener('change', (e) => {
      const f = e.target.files?.[0];
      if (f) importJSON(f);
      e.target.value = '';
    });

    let touchX = null;
    const main = $('main-view');
    main.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].screenX; }, { passive: true });
    main.addEventListener('touchend', (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].screenX - touchX;
      touchX = null;
      if (Math.abs(dx) < 60) return;
      currentDate = addDays(currentDate, dx < 0 ? 1 : -1);
      renderAll();
    }, { passive: true });
  }

  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    renderSafety();
    clearTestForm();
    $('frog-date').value = todayISO();
    renderAll();
    registerSW();
  });
})();
