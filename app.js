/* ===========================================
   CENTERCODE TRAINING ACADEMY — APP LOGIC
   =========================================== */

/* -------------------------------------------------------
   STATE
   ------------------------------------------------------- */
let S = {
  currentUser: null,    // user object
  page: 'dashboard',    // current page key
  moduleId: null,       // active module
  lessonIdx: 0,         // active lesson index within module
  quiz: null,           // { questions, qIdx, answers, isTestOut, moduleId }
  interview: null,      // { moduleId, messages, questionCount, done }
  onboardStep: 1,       // 1=profile, 2=role, 3=intro
  onboardData: {},      // partial form data during onboarding
};

/* Canonical module order — determines path sort when multiple roles combine */
const CANONICAL_MODULE_ORDER = [
  'fundamentals','platform','testers','feedback','reporting',
  'governance','advanced-tools','integrations','maturity','ecosystem',
];

/* -------------------------------------------------------
   STORAGE
   ------------------------------------------------------- */
const STORE_KEY = 'cc_lms_v1';
const USERS_KEY = 'cc_lms_users';
const API_KEY   = 'cc_api_key';

function loadUsers()  { try { return JSON.parse(localStorage.getItem(USERS_KEY) || '{}'); } catch { return {}; } }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

function upsertUser(user) {
  const all = loadUsers();
  all[user.id] = user;
  saveUsers(all);
}

function getCurrentUserId() { return localStorage.getItem(STORE_KEY); }
function setCurrentUserId(id){ localStorage.setItem(STORE_KEY, id); }

function loadCurrentUser() {
  const id = getCurrentUserId();
  if (!id) return null;
  return loadUsers()[id] || null;
}

function makeUserId(email) { return 'u_' + email.toLowerCase().replace(/[^a-z0-9]/g,'_'); }

function createUser(name, email, roleIds) {
  const id  = makeUserId(email);
  const ids = Array.isArray(roleIds) ? roleIds : [roleIds];
  return {
    id, name, email,
    roleIds: ids,
    joinedAt: Date.now(),
    lastActive: Date.now(),
    progress: {},   // { moduleId: { status, lessonsDone, quizScore, completedAt } }
  };
}

/* Progress helpers */
function getModuleProgress(user, moduleId) {
  return user.progress[moduleId] || { status: 'available', lessonsDone: [], quizScore: null, completedAt: null };
}

function setModuleProgress(user, moduleId, patch) {
  user.progress[moduleId] = { ...getModuleProgress(user, moduleId), ...patch };
  user.lastActive = Date.now();
  upsertUser(user);
}

function getRoleIds(user) {
  // Support both legacy single roleId and new roleIds array
  return user.roleIds || (user.roleId ? [user.roleId] : []);
}

function getRolePath(user) {
  const ids = getRoleIds(user);
  const inPath = new Set();
  CANONICAL_MODULE_ORDER.forEach(mid => {
    if (ids.some(rid => ROLES[rid]?.path?.includes(mid))) inPath.add(mid);
  });
  return CANONICAL_MODULE_ORDER.filter(id => inPath.has(id));
}

function getRoleTitles(user) {
  return getRoleIds(user).map(rid => ROLES[rid]?.title || rid).join(' · ');
}

function getPathStats(user) {
  const path = getRolePath(user);
  const total = path.length;
  const done  = path.filter(id => {
    const s = getModuleProgress(user, id).status;
    return s === 'completed' || s === 'tested-out';
  }).length;
  return { total, done, pct: total ? Math.round((done/total)*100) : 0 };
}

function getApiKey() { return localStorage.getItem(API_KEY) || ''; }
function setApiKey(k){ localStorage.setItem(API_KEY, k); }

/* -------------------------------------------------------
   VIEW ROUTING
   ------------------------------------------------------- */
function showView(name) {
  // name: 'welcome' | 'onboarding' | 'app'
  document.getElementById('view-welcome').classList.toggle('hidden', name !== 'welcome');
  document.getElementById('view-onboarding').classList.toggle('hidden', name !== 'onboarding');
  document.getElementById('view-app').classList.toggle('hidden', name !== 'app');
}

function showPage(name) {
  S.page = name;
  document.querySelectorAll('.page').forEach(p => {
    p.classList.toggle('active', p.dataset.page === name);
  });
  // Update sidebar active state
  document.querySelectorAll('.sb-nav-item[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === name);
  });
  // Update topbar title
  const titles = {
    dashboard:   'Dashboard',
    path:        'My Learning Path',
    module:      S.moduleId ? MODULES[S.moduleId]?.title : 'Module',
    quiz:        'Knowledge Check',
    interview:   'AI Knowledge Interview',
    certificate: 'Certificate',
    admin:       'Admin — Learner Reports',
  };
  const el = document.getElementById('topbar-title');
  if (el) el.textContent = titles[name] || '';
}

/* -------------------------------------------------------
   WELCOME
   ------------------------------------------------------- */
function initWelcome() {
  // Check for returning user
  const user = loadCurrentUser();
  const btnContinue = document.getElementById('btn-welcome-continue');
  const btnStart    = document.getElementById('btn-welcome-start');
  if (user) {
    btnContinue.classList.remove('hidden');
    btnStart.textContent = 'New Account';
  } else {
    btnContinue.classList.add('hidden');
  }

  btnStart.onclick = () => {
    S.onboardStep = 1;
    S.onboardData = {};
    renderOnboarding();
    showView('onboarding');
  };

  if (btnContinue) {
    btnContinue.onclick = () => {
      S.currentUser = user;
      enterApp();
    };
  }

  document.getElementById('btn-welcome-admin').onclick = () => {
    // Prompt for admin code
    const code = prompt('Enter admin access code:');
    if (code === 'ccadmin') {
      const all = loadUsers();
      const firstId = Object.keys(all)[0];
      if (firstId) {
        S.currentUser = all[firstId];
        enterApp();
        showPage('admin');
        renderAdmin();
      } else {
        toast('No learner data yet — have users complete onboarding first.', 'info');
      }
    } else if (code !== null) {
      toast('Incorrect admin code.', 'error');
    }
  };
}

/* -------------------------------------------------------
   ONBOARDING
   ------------------------------------------------------- */
function renderOnboarding() {
  renderOnboardSteps();
  const panels = ['panel-onboard-1','panel-onboard-2','panel-onboard-3'];
  panels.forEach((id,i) => {
    document.getElementById(id)?.classList.toggle('hidden', i+1 !== S.onboardStep);
  });
}

function renderOnboardSteps() {
  [1,2,3].forEach(n => {
    const dot  = document.getElementById(`step-dot-${n}`);
    const line = document.getElementById(`step-line-${n}`);
    if (!dot) return;
    dot.className = 'step-dot ' + (n < S.onboardStep ? 'done' : n === S.onboardStep ? 'active' : 'pending');
    dot.textContent = n < S.onboardStep ? '✓' : n;
    if (line) line.className = 'step-line ' + (n < S.onboardStep ? 'done' : 'pending');
  });
}

function initOnboarding() {
  // Step 1 — profile
  document.getElementById('btn-onboard-1').onclick = () => {
    const name  = document.getElementById('onboard-name').value.trim();
    const email = document.getElementById('onboard-email').value.trim();
    if (!name || !email || !email.includes('@')) {
      toast('Please enter a valid name and email.', 'error'); return;
    }
    // Check if user already exists
    const existing = loadUsers()[makeUserId(email)];
    if (existing) {
      S.currentUser = existing;
      setCurrentUserId(existing.id);
      toast(`Welcome back, ${existing.name}!`, 'info');
      enterApp();
      return;
    }
    S.onboardData = { name, email };
    S.onboardStep = 2;
    renderOnboarding();
  };

  // Step 2 — role selection (multi-select: toggle on/off)
  document.querySelectorAll('#panel-onboard-2 .role-option').forEach(el => {
    el.onclick = () => {
      el.classList.toggle('selected');
      S.onboardData.roleIds = Array.from(
        document.querySelectorAll('#panel-onboard-2 .role-option.selected')
      ).map(r => r.dataset.role);
    };
  });

  document.getElementById('btn-onboard-2').onclick = () => {
    if (!S.onboardData.roleIds?.length) { toast('Please select at least one role.', 'error'); return; }
    S.onboardStep = 3;
    // Update intro panel with combined path
    const path = getRolePath({ roleIds: S.onboardData.roleIds });
    const el = document.getElementById('onboard-path-preview');
    if (el) {
      el.innerHTML = path.map((mid,i) => {
        const m = MODULES[mid];
        return `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:18px">${m.icon}</span>
          <div>
            <div style="font-size:13px;font-weight:600">${m.title}</div>
            <div style="font-size:11.5px;color:var(--text-3)">${m.duration} · ${m.difficulty}</div>
          </div>
          <span style="margin-left:auto;font-size:11px;color:var(--text-3)">${i+1} of ${path.length}</span>
        </div>`;
      }).join('');
    }
    renderOnboarding();
  };

  document.getElementById('btn-onboard-back').onclick = () => { S.onboardStep = 1; renderOnboarding(); };

  // Step 3 — confirm
  document.getElementById('btn-onboard-3').onclick = () => {
    const user = createUser(S.onboardData.name, S.onboardData.email, S.onboardData.roleIds);
    upsertUser(user);
    setCurrentUserId(user.id);
    S.currentUser = user;
    enterApp();
    toast(`Welcome, ${user.name}! Your learning path is ready.`, 'success');
  };

  document.getElementById('btn-onboard-login').onclick = () => {
    S.onboardStep = 1;
    S.onboardData = {};
    renderOnboarding();
    showView('onboarding');
  };
}

/* -------------------------------------------------------
   ENTER APP (after auth)
   ------------------------------------------------------- */
function enterApp() {
  showView('app');
  renderSidebar();
  renderDashboard();
  showPage('dashboard');
}

/* -------------------------------------------------------
   SIDEBAR
   ------------------------------------------------------- */
function renderSidebar() {
  const u = S.currentUser;
  if (!u) return;

  // Avatar & name
  document.getElementById('sb-avatar').textContent = initials(u.name);
  document.getElementById('sb-user-name').textContent = u.name;
  const roleEl = document.getElementById('sb-user-role');
  roleEl.textContent = getRoleTitles(u) + ' ✏️';
  roleEl.style.cursor = 'pointer';
  roleEl.title = 'Click to manage roles';
  roleEl.onclick = openManageRoles;

  // Progress
  const stats = getPathStats(u);
  document.getElementById('sb-prog-fill').style.width = stats.pct + '%';
  document.getElementById('sb-prog-pct').textContent = `${stats.done} of ${stats.total} modules complete`;

  // API key badge
  renderApiKeyBadge();
}

function renderApiKeyBadge() {
  const key = getApiKey();
  const badge  = document.getElementById('sb-api-badge-text');
  const status = document.getElementById('sb-api-status');
  if (key) {
    if (badge) badge.textContent = 'AI Interview: Active';
    if (status) status.className = 'sb-api-status connected';
  } else {
    if (badge) badge.textContent = 'Configure AI Interview';
    if (status) status.className = 'sb-api-status';
  }
}

/* -------------------------------------------------------
   DASHBOARD
   ------------------------------------------------------- */
function renderDashboard() {
  const u    = S.currentUser;
  const path = getRolePath(u);
  const stats = getPathStats(u);

  // Stats tiles
  const inProgress = path.filter(id => getModuleProgress(u,id).status === 'in-progress').length;
  const testedOut  = path.filter(id => getModuleProgress(u,id).status === 'tested-out').length;

  document.getElementById('stat-total').textContent   = stats.total;
  document.getElementById('stat-done').textContent    = stats.done;
  document.getElementById('stat-progress').textContent = inProgress;
  document.getElementById('stat-tested').textContent  = testedOut;

  // Welcome msg
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('dash-greeting').textContent = `${greeting}, ${u.name.split(' ')[0]}.`;

  // Module cards
  renderModuleCards('modules-grid-dash', path, u);

  // Upcoming / next module
  const nextId = path.find(id => {
    const s = getModuleProgress(u,id).status;
    return s === 'available' || s === 'in-progress';
  });
  const nextEl = document.getElementById('dash-next');
  if (nextEl) {
    if (nextId) {
      const m = MODULES[nextId];
      nextEl.innerHTML = `<div class="card-body">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-3);font-weight:600;margin-bottom:10px">Continue Learning</div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
          <div class="mod-icon">${m.icon}</div>
          <div><div style="font-size:15px;font-weight:700">${m.title}</div>
          <div style="font-size:12px;color:var(--text-3);margin-top:2px">${m.duration} · ${m.difficulty}</div></div>
        </div>
        <button class="btn btn-primary w-full" onclick="openModule('${m.id}')">Start Module →</button>
      </div>`;
    } else {
      nextEl.innerHTML = `<div class="card-body"><div class="empty-state">
        <span class="empty-state-icon">🏆</span>
        <h3>Path Complete!</h3>
        <p>You've finished all modules in your learning path.</p>
        <button class="btn btn-primary btn-sm" style="margin-top:14px" onclick="showPage('certificate');renderCertificate()">View Certificate</button>
      </div></div>`;
    }
  }
}

function renderModuleCards(containerId, path, user) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = path.map((moduleId, idx) => {
    const m   = MODULES[moduleId];
    const prog = getModuleProgress(user, moduleId);
    const prev = idx > 0 ? getModuleProgress(user, path[idx-1]) : null;
    const locked = idx > 0 && prev && prev.status === 'available';

    let statusHtml, statusClass, actionText;
    switch (prog.status) {
      case 'completed':
        statusHtml = '✓ Completed'; statusClass = 's-done';
        actionText = 'Review';
        break;
      case 'tested-out':
        statusHtml = '⚡ Tested Out'; statusClass = 's-tested';
        actionText = 'Review';
        break;
      case 'in-progress':
        statusHtml = '● In Progress'; statusClass = 's-progress';
        actionText = 'Continue';
        break;
      default:
        statusHtml = locked ? '🔒 Locked' : '○ Not Started';
        statusClass = locked ? 's-locked' : 's-open';
        actionText = locked ? '' : 'Start';
    }

    const pct = prog.lessonsDone
      ? Math.round((prog.lessonsDone.length / m.lessons.length) * 100)
      : (prog.status === 'completed' || prog.status === 'tested-out' ? 100 : 0);

    return `<div class="mod-card ${locked ? 'mod-locked' : ''}" ${!locked ? `onclick="openModule('${m.id}')"` : ''}>
      <div class="mod-card-top">
        <div class="mod-icon">${m.icon}</div>
        <div>
          <div class="mod-title">${m.title}</div>
          <div class="mod-meta"><span>⏱ ${m.duration}</span><span>📶 ${m.difficulty}</span></div>
        </div>
      </div>
      <div class="mod-card-mid">
        <div class="mod-desc">${m.description}</div>
        <div class="progress-bar" style="margin-top:8px"><div class="progress-fill ${prog.status === 'tested-out' ? 'purple' : ''}" style="width:${pct}%"></div></div>
      </div>
      <div class="mod-card-foot">
        <div class="mod-status ${statusClass}">${statusHtml}</div>
        ${actionText ? `<span style="font-size:12.5px;font-weight:600;color:var(--blue)">${actionText} →</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

/* -------------------------------------------------------
   MODULE / LESSON VIEW
   ------------------------------------------------------- */
function openModule(moduleId) {
  S.moduleId  = moduleId;
  S.lessonIdx = 0;
  const u   = S.currentUser;
  const prog = getModuleProgress(u, moduleId);
  // Resume from last lesson
  if (prog.lessonsDone && prog.lessonsDone.length > 0) {
    const m = MODULES[moduleId];
    const nextUndone = m.lessons.findIndex(l => !prog.lessonsDone.includes(l.id));
    if (nextUndone >= 0) S.lessonIdx = nextUndone;
  }
  if (prog.status === 'available') {
    setModuleProgress(u, moduleId, { status: 'in-progress' });
    S.currentUser = loadUsers()[u.id]; // refresh
  }
  renderModuleView();
  showPage('module');
}

function renderModuleView() {
  const m   = MODULES[S.moduleId];
  const u   = S.currentUser;
  const prog = getModuleProgress(u, S.moduleId);
  const lesson = m.lessons[S.lessonIdx];

  // Hero
  document.getElementById('lesson-hero-eyebrow').textContent = m.title;
  document.getElementById('lesson-hero-title').textContent   = lesson.title;
  document.getElementById('lesson-hero-meta').innerHTML = `<span>📚 Lesson ${S.lessonIdx+1} of ${m.lessons.length}</span><span>⏱ ${m.duration}</span>`;

  // Content
  document.getElementById('lesson-body').innerHTML = `<div class="lesson-content">${lesson.content}</div>`;

  // Footer nav
  const lessonFoot = document.getElementById('lesson-foot');
  lessonFoot.innerHTML = `
    <button class="btn btn-secondary btn-sm" ${S.lessonIdx === 0 ? 'disabled' : ''} onclick="navLesson(-1)">← Previous</button>
    <span style="font-size:13px;color:var(--text-3)">${S.lessonIdx+1} / ${m.lessons.length}</span>
    ${S.lessonIdx < m.lessons.length-1
      ? `<button class="btn btn-primary btn-sm" onclick="navLesson(1)">Next →</button>`
      : `<button class="btn btn-success btn-sm" onclick="markLessonAndFinish()">Complete Lesson ✓</button>`
    }`;

  // Sidebar lesson list
  renderLessonSidebar();
}

function navLesson(dir) {
  // Mark current lesson done
  markCurrentLesson();
  S.lessonIdx += dir;
  if (S.lessonIdx < 0) S.lessonIdx = 0;
  const m = MODULES[S.moduleId];
  if (S.lessonIdx >= m.lessons.length) S.lessonIdx = m.lessons.length - 1;
  renderModuleView();
  window.scrollTo(0,0);
}

function markCurrentLesson() {
  const m  = MODULES[S.moduleId];
  const u  = S.currentUser;
  const prog = getModuleProgress(u, S.moduleId);
  const lessonId = m.lessons[S.lessonIdx].id;
  const done = prog.lessonsDone || [];
  if (!done.includes(lessonId)) {
    setModuleProgress(u, S.moduleId, { lessonsDone: [...done, lessonId] });
    S.currentUser = loadUsers()[u.id];
  }
}

function markLessonAndFinish() {
  markCurrentLesson();
  // All lessons done — go to quiz
  const m = MODULES[S.moduleId];
  const u = S.currentUser;
  const prog = getModuleProgress(u, S.moduleId);
  const allDone = m.lessons.every(l => (prog.lessonsDone||[]).includes(l.id));
  if (allDone) {
    // Prompt to take quiz
    toast('Lessons complete! Take the quiz to finish this module.', 'success');
    setTimeout(() => startQuiz(S.moduleId, false), 800);
  } else {
    toast('Lesson complete!', 'success');
    renderModuleView();
  }
}

function renderLessonSidebar() {
  const m   = MODULES[S.moduleId];
  const u   = S.currentUser;
  const prog = getModuleProgress(u, S.moduleId);
  const done = prog.lessonsDone || [];

  document.getElementById('lesson-nav-list').innerHTML = m.lessons.map((l,i) => {
    const isDone   = done.includes(l.id);
    const isActive = i === S.lessonIdx;
    return `<div class="ls-item ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}" onclick="goToLesson(${i})">
      <div class="ls-dot ${isDone ? 'done' : isActive ? 'active' : 'pending'}">${isDone ? '✓' : i+1}</div>
      <span>${l.title}</span>
    </div>`;
  }).join('');

  // Sidebar actions
  const apiKey = getApiKey();
  document.getElementById('lesson-sidebar-actions').innerHTML = `
    <button class="btn btn-ghost btn-sm w-full" style="justify-content:center" onclick="startQuiz('${S.moduleId}',false)">📝 Take Module Quiz</button>
    <button class="btn btn-${apiKey ? 'purple' : 'ghost'} btn-sm w-full" style="justify-content:center" onclick="${apiKey ? `startInterview('${S.moduleId}')` : 'promptApiKey()'}">
      ${apiKey ? '🤖 AI Knowledge Interview' : '🔑 Set API Key for AI Interview'}
    </button>
    <button class="btn btn-ghost btn-sm w-full" style="justify-content:center;color:var(--text-3)" onclick="showPage('path');renderPath()">← Back to Path</button>`;
}

function goToLesson(idx) {
  markCurrentLesson();
  S.lessonIdx = idx;
  renderModuleView();
  window.scrollTo(0,0);
}

/* -------------------------------------------------------
   LEARNING PATH PAGE
   ------------------------------------------------------- */
function renderPath() {
  const u    = S.currentUser;
  const path = getRolePath(u);
  const stats = getPathStats(u);

  document.getElementById('path-role-title').textContent = getRoleTitles(u);
  document.getElementById('path-progress-fill').style.width = stats.pct + '%';
  document.getElementById('path-progress-text').textContent = `${stats.done} of ${stats.total} modules complete · ${stats.pct}%`;

  const testoutEl = document.getElementById('path-testout-section');
  if (stats.pct < 100) {
    testoutEl.innerHTML = `
      <div class="callout callout-info" style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:22px">
        <div>
          <div class="callout-head">⚡ Already know this material?</div>
          <div class="callout-text">Take the full track assessment. Score 80%+ and your entire path is marked complete.</div>
        </div>
        <button class="btn btn-primary" style="white-space:nowrap;flex-shrink:0" onclick="startRoleTestOut()">Take Assessment</button>
      </div>`;
  } else {
    testoutEl.innerHTML = '';
  }

  renderModuleCards('modules-grid-path', path, u);
}

/* -------------------------------------------------------
   QUIZ
   ------------------------------------------------------- */
function startQuiz(moduleId, isTestOut) {
  const m = MODULES[moduleId];
  const questions = isTestOut ? [...m.testOut] : [...m.quiz];

  S.quiz = {
    moduleId,
    questions,
    qIdx: 0,
    answers: Array(questions.length).fill(null),
    isTestOut,
    submitted: false,
    done: false,
  };

  renderQuizView();
  showPage('quiz');
}

function startRoleTestOut() {
  const u    = S.currentUser;
  const path = getRolePath(u);

  // Sample up to 3 questions per module from the testOut pool (fallback to quiz)
  const questions = [];
  path.forEach(mod => {
    const pool = (mod.testOut && mod.testOut.length > 0) ? mod.testOut : mod.quiz;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    questions.push(...shuffled.slice(0, Math.min(3, shuffled.length)));
  });

  // Final shuffle
  questions.sort(() => Math.random() - 0.5);

  S.quiz = {
    moduleId: null,
    questions,
    qIdx: 0,
    answers: Array(questions.length).fill(null),
    isTestOut: false,
    isRoleTestOut: true,
    submitted: false,
    done: false,
  };

  renderQuizView();
  showPage('quiz');
}

function renderQuizView() {
  const q = S.quiz;
  if (q.done) { renderQuizResult(); return; }

  const m    = q.moduleId ? MODULES[q.moduleId] : null;
  const curr = q.questions[q.qIdx];

  // Dots
  document.getElementById('quiz-dots').innerHTML = q.questions.map((_,i) => {
    let cls = 'qdot pending';
    if (i < q.qIdx)       cls = q.answers[i]?.correct ? 'qdot pass' : 'qdot fail';
    else if (i === q.qIdx) cls = 'qdot current';
    return `<div class="${cls}"></div>`;
  }).join('');

  document.getElementById('quiz-title').textContent = q.isRoleTestOut
    ? `⚡ Full Track Assessment — ${getRoleTitles(S.currentUser)}`
    : `${q.isTestOut ? '⚡ Test-Out Assessment' : '📝 Module Quiz'} — ${m.title}`;
  document.getElementById('quiz-counter').textContent = `Question ${q.qIdx+1} of ${q.questions.length}`;

  // Question
  document.getElementById('quiz-q-num').textContent  = `Question ${q.qIdx + 1}`;
  document.getElementById('quiz-q-text').textContent = curr.q;

  // Options
  const letters = ['A','B','C','D'];
  document.getElementById('quiz-opts').innerHTML = curr.opts.map((opt,i) => `
    <div class="quiz-opt" id="qopt-${i}" onclick="selectOpt(${i})">
      <div class="quiz-opt-ltr">${letters[i]}</div>
      <span>${opt}</span>
    </div>`).join('');

  // Feedback
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('quiz-feedback').textContent = '';

  // Buttons
  document.getElementById('quiz-btn-submit').classList.remove('hidden');
  document.getElementById('quiz-btn-next').classList.add('hidden');
  document.getElementById('quiz-btn-submit').disabled = true;
  document.getElementById('quiz-btn-submit').onclick = submitQuizAnswer;
}

function selectOpt(i) {
  if (S.quiz.submitted) return;
  document.querySelectorAll('.quiz-opt').forEach((el,j) => {
    el.classList.toggle('selected', j === i);
  });
  S.quiz._selectedOpt = i;
  document.getElementById('quiz-btn-submit').disabled = false;
}

function submitQuizAnswer() {
  const q    = S.quiz;
  const curr = q.questions[q.qIdx];
  const sel  = q._selectedOpt;
  if (sel === null || sel === undefined) return;

  q.submitted = true;
  const correct = sel === curr.a;
  q.answers[q.qIdx] = { selected: sel, correct };

  // Show result on options
  document.querySelectorAll('.quiz-opt').forEach((el,i) => {
    el.classList.add('locked');
    if (i === curr.a)  el.classList.add('correct');
    if (i === sel && !correct) el.classList.add('incorrect');
  });

  // Feedback
  const fb = document.getElementById('quiz-feedback');
  fb.textContent = (correct ? '✓ Correct! ' : '✗ Not quite. ') + curr.exp;
  fb.className = `quiz-feedback show ${correct ? 'pass-fb' : 'fail-fb'}`;

  document.getElementById('quiz-btn-submit').classList.add('hidden');
  document.getElementById('quiz-btn-next').classList.remove('hidden');
  const isLast = q.qIdx === q.questions.length - 1;
  document.getElementById('quiz-btn-next').textContent = isLast ? 'See Results →' : 'Next Question →';
  document.getElementById('quiz-btn-next').onclick = () => {
    q.submitted = false;
    q._selectedOpt = null;
    if (isLast) { q.done = true; renderQuizResult(); }
    else { q.qIdx++; renderQuizView(); }
  };
}

function renderQuizResult() {
  const q = S.quiz;
  const correct = q.answers.filter(a => a?.correct).length;
  const score   = Math.round((correct / q.questions.length) * 100);
  const passed  = score >= 80;
  const m       = q.moduleId ? MODULES[q.moduleId] : null;
  const u       = S.currentUser;

  // Save progress
  if (q.isRoleTestOut) {
    if (passed) {
      const path = getRolePath(u);
      path.forEach(mod => {
        setModuleProgress(u, mod.id, {
          status: 'tested-out',
          quizScore: score,
          completedAt: Date.now(),
          lessonsDone: mod.lessons.map(l => l.id),
        });
      });
      S.currentUser = loadUsers()[u.id];
    }
  } else if (passed) {
    const status = q.isTestOut ? 'tested-out' : 'completed';
    setModuleProgress(u, q.moduleId, {
      status,
      quizScore: score,
      completedAt: Date.now(),
      lessonsDone: m.lessons.map(l => l.id),
    });
    S.currentUser = loadUsers()[u.id];
  } else if (!q.isRoleTestOut) {
    setModuleProgress(u, q.moduleId, { quizScore: score });
  }

  const icon  = passed ? '🏆' : '📚';
  const title = passed
    ? (q.isRoleTestOut ? '⚡ Track Certified!' : q.isTestOut ? 'Knowledge Verified!' : 'Module Complete!')
    : 'Keep Studying';
  const actions = passed
    ? `<button class="btn btn-success" onclick="showPage('dashboard');renderDashboard()">Go to Dashboard 🎓</button>`
    : (q.isRoleTestOut
        ? `<button class="btn btn-primary" onclick="showPage('path');renderPath()">Back to Learning Path</button>
           <button class="btn btn-secondary" onclick="startRoleTestOut()">Retake Assessment</button>`
        : `<button class="btn btn-primary" onclick="openModule('${q.moduleId}')">Review Module</button>
           <button class="btn btn-secondary" onclick="startQuiz('${q.moduleId}',${q.isTestOut})">Retake Quiz</button>`);

  document.getElementById('quiz-wrap').innerHTML = `
    <div class="quiz-result">
      <span class="qr-icon">${icon}</span>
      <div class="qr-title ${passed ? 'pass' : 'fail'}">${title}</div>
      <div class="qr-score ${passed ? 'pass' : 'fail'}">${score}%</div>
      <div class="qr-sub">${correct} of ${q.questions.length} correct · ${passed ? 'Pass (≥80%)' : 'Needs improvement (≥80% to pass)'}</div>
      ${passed && (q.isRoleTestOut || q.isTestOut) ? `<div style="margin-bottom:18px"><span class="badge badge-purple">⚡ Tested Out</span></div>` : ''}
      ${passed && !q.isTestOut && !q.isRoleTestOut ? `<div style="margin-bottom:18px"><span class="badge badge-green">✓ Completed</span></div>` : ''}
      <div class="qr-actions">${actions}</div>
    </div>`;

  // Refresh sidebar too
  renderSidebar();
}

/* -------------------------------------------------------
   AI INTERVIEW
   ------------------------------------------------------- */
function startInterview(moduleId) {
  const apiKey = getApiKey();
  if (!apiKey) { promptApiKey(); return; }

  S.interview = {
    moduleId,
    messages: [],
    questionCount: 0,
    done: false,
  };

  const m = MODULES[moduleId];
  document.getElementById('interview-module-title').textContent = m.title;
  document.getElementById('interview-module-desc').textContent  = `AI-powered assessment · Pass with 80%+ to test out of "${m.title}"`;
  document.getElementById('chat-messages').innerHTML = '';
  document.getElementById('interview-result').classList.remove('show');
  document.getElementById('chat-user-input').value = '';
  document.getElementById('chat-send-btn').disabled = false;

  showPage('interview');

  // Start the conversation
  sendToInterview(null, true);
}

async function sendToInterview(userMessage, isFirst) {
  const iv  = S.interview;
  const m   = MODULES[iv.moduleId];
  const key = getApiKey();

  if (!isFirst && userMessage) {
    iv.messages.push({ role: 'user', content: userMessage });
    appendChatMsg('user', userMessage);
  }

  document.getElementById('chat-send-btn').disabled = true;
  const typingEl = appendChatMsg('ai', null, true);

  try {
    const body = {
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: getInterviewSystemPrompt(m),
      messages: iv.messages,
    };

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (data.error) {
      typingEl.remove();
      appendChatMsg('ai', `⚠️ API error: ${data.error.message}`);
      document.getElementById('chat-send-btn').disabled = false;
      return;
    }

    const text = data.content[0].text;
    iv.messages.push({ role: 'assistant', content: text });

    typingEl.remove();

    // Check if this is the final evaluation JSON
    const jsonMatch = text.match(/\{[\s\S]*"score"[\s\S]*"passed"[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const result = JSON.parse(jsonMatch[0]);
        // Show the narrative before the JSON if any
        const narrative = text.replace(jsonMatch[0], '').trim();
        if (narrative) appendChatMsg('ai', narrative);
        iv.done = true;
        renderInterviewResult(result);
        return;
      } catch {}
    }

    appendChatMsg('ai', text);
    iv.questionCount++;

  } catch (err) {
    typingEl.remove();
    appendChatMsg('ai', `⚠️ Network error. Check your API key and connection.`);
  }

  document.getElementById('chat-send-btn').disabled = iv.done;
}

function appendChatMsg(role, text, isTyping) {
  const box = document.getElementById('chat-messages');
  const el  = document.createElement('div');
  el.className = `chat-msg ${role}`;

  const avatarText = role === 'ai' ? 'CC' : '👤';
  if (isTyping) {
    el.innerHTML = `
      <div class="chat-avatar ${role}">${avatarText}</div>
      <div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>`;
  } else {
    // Convert newlines to <br>
    const safe = text.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
    el.innerHTML = `<div class="chat-avatar ${role}">${avatarText}</div><div class="chat-bubble">${safe}</div>`;
  }
  box.appendChild(el);
  box.scrollTop = box.scrollHeight;
  return el;
}

function renderInterviewResult(result) {
  const passed = result.passed;
  const score  = result.score;
  const m      = MODULES[S.interview.moduleId];
  const u      = S.currentUser;

  if (passed) {
    setModuleProgress(u, S.interview.moduleId, {
      status: 'tested-out',
      quizScore: score,
      completedAt: Date.now(),
      lessonsDone: m.lessons.map(l => l.id),
    });
    S.currentUser = loadUsers()[u.id];
    renderSidebar();
  }

  const el = document.getElementById('interview-result');
  el.classList.add('show');
  el.innerHTML = `
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:44px;margin-bottom:10px">${passed ? '🏆' : '📚'}</div>
      <div style="font-size:22px;font-weight:800;color:${passed ? 'var(--green)':'var(--red)'};margin-bottom:6px">
        ${passed ? 'Knowledge Verified!' : 'More Study Recommended'}
      </div>
      <div style="font-size:46px;font-weight:800;color:${passed ? 'var(--green)':'var(--red)'};line-height:1;margin:12px 0">${score}%</div>
      <div style="font-size:14px;color:var(--text-2);margin-bottom:16px">${result.feedback}</div>
    </div>
    ${result.strengths?.length ? `<div class="callout callout-success"><div class="callout-head">✓ Strengths</div><div class="callout-text"><ul style="margin:0 0 0 16px">${result.strengths.map(s=>`<li>${s}</li>`).join('')}</ul></div></div>` : ''}
    ${result.improvements?.length ? `<div class="callout callout-warn"><div class="callout-head">📖 Areas to Strengthen</div><div class="callout-text"><ul style="margin:0 0 0 16px">${result.improvements.map(s=>`<li>${s}</li>`).join('')}</ul></div></div>` : ''}
    <div style="display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap">
      ${passed ? `<button class="btn btn-success" onclick="showPage('certificate');renderCertificate('${S.interview.moduleId}')">View Badge 🏅</button>` : `<button class="btn btn-primary" onclick="openModule('${S.interview.moduleId}')">Study the Module</button>`}
      <button class="btn btn-secondary" onclick="showPage('dashboard');renderDashboard()">Dashboard</button>
    </div>`;
}

function initInterviewPage() {
  document.getElementById('chat-send-btn').onclick = () => {
    const input = document.getElementById('chat-user-input');
    const val   = input.value.trim();
    if (!val || S.interview?.done) return;
    input.value = '';
    sendToInterview(val, false);
  };

  document.getElementById('chat-user-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      document.getElementById('chat-send-btn').click();
    }
  });
}

function promptApiKey() {
  const current = getApiKey();
  const modal   = document.getElementById('modal-apikey');
  document.getElementById('apikey-input').value = current;
  modal.classList.remove('hidden');
}

/* -------------------------------------------------------
   CERTIFICATE
   ------------------------------------------------------- */
function renderCertificate(moduleId) {
  const u = S.currentUser;
  const path = getRolePath(u);
  const stats = getPathStats(u);

  if (moduleId) {
    // Single module badge
    const m    = MODULES[moduleId];
    const prog = getModuleProgress(u, moduleId);
    const dateStr = prog.completedAt ? new Date(prog.completedAt).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}) : 'N/A';
    const badgeType = prog.status === 'tested-out' ? '⚡ Tested Out' : '✓ Completed';
    const badgeClass = prog.status === 'tested-out' ? 'badge-purple' : 'badge-green';

    document.getElementById('cert-wrap').innerHTML = `
      <div class="cert-page-wrap">
        <div class="cert">
          <div class="cert-banner">
            <div class="cert-seal">${m.icon}</div>
            <div class="cert-eyebrow">Centercode Training Academy</div>
            <div class="cert-of">Module Badge</div>
          </div>
          <div class="cert-body">
            <div class="cert-presented">Awarded to</div>
            <div class="cert-name">${u.name}</div>
            <div class="cert-desc">Has demonstrated knowledge of <strong>${m.title}</strong> as part of the <strong>${getRoleTitles(u)}</strong> learning path.</div>
            <div class="cert-badges"><span class="badge ${badgeClass}" style="font-size:13px;padding:5px 14px">${m.icon} ${m.title} &nbsp; ${badgeType}</span></div>
          </div>
          <div class="cert-foot">
            <div class="cert-foot-item"><div class="cert-foot-lbl">Completed</div><div class="cert-foot-val">${dateStr}</div></div>
            <div class="cert-foot-item"><div class="cert-foot-lbl">Score</div><div class="cert-foot-val">${prog.quizScore || '--'}%</div></div>
            <div class="cert-foot-item"><div class="cert-foot-lbl">Method</div><div class="cert-foot-val">${prog.status === 'tested-out' ? 'Test Out' : 'Full Module'}</div></div>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:18px;display:flex;gap:10px;justify-content:center">
        <button class="btn btn-primary" onclick="window.print()">🖨 Print / Save PDF</button>
        <button class="btn btn-secondary" onclick="showPage('dashboard');renderDashboard()">Back to Dashboard</button>
      </div>`;
  } else {
    // Full path certificate — only show if path is complete
    if (stats.done < stats.total || stats.total === 0) {
      const remaining = stats.total - stats.done;
      document.getElementById('cert-wrap').innerHTML = `
        <div class="empty-state" style="padding:60px 20px">
          <span class="empty-state-icon">🔒</span>
          <h3>Certificate Not Yet Earned</h3>
          <p>Complete all ${stats.total} modules in your learning path to unlock your certificate.<br>
          You have <strong>${remaining} module${remaining !== 1 ? 's' : ''}</strong> left to go.</p>
          <div style="margin-top:22px">
            <div class="progress-bar" style="max-width:280px;margin:0 auto 14px;height:10px">
              <div class="progress-fill" style="width:${stats.pct}%"></div>
            </div>
            <div style="font-size:13px;color:var(--text-3)">${stats.done} of ${stats.total} complete · ${stats.pct}%</div>
          </div>
          <button class="btn btn-primary" style="margin-top:24px" onclick="showPage('path');renderPath()">Continue Learning →</button>
        </div>`;
      return;
    }

    const completedMods = path.filter(id => {
      const s = getModuleProgress(u,id).status;
      return s === 'completed' || s === 'tested-out';
    });
    const dateStr = new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});

    document.getElementById('cert-wrap').innerHTML = `
      <div class="cert-page-wrap">
        <div class="cert">
          <div class="cert-banner">
            <div class="cert-seal">🏆</div>
            <div class="cert-eyebrow">Centercode Training Academy</div>
            <div class="cert-of">Certificate of Completion</div>
          </div>
          <div class="cert-body">
            <div class="cert-presented">This certifies that</div>
            <div class="cert-name">${u.name}</div>
            <div class="cert-desc">Has successfully completed the <strong>${getRoleTitles(u)}</strong> learning path with <strong>${stats.done} of ${stats.total} modules</strong> finished.</div>
            <div class="cert-badges">
              ${completedMods.map(id => {
                const m = MODULES[id];
                const s = getModuleProgress(u,id).status;
                return `<span class="badge ${s==='tested-out'?'badge-purple':'badge-green'}">${m.icon} ${m.title}</span>`;
              }).join('')}
            </div>
          </div>
          <div class="cert-foot">
            <div class="cert-foot-item"><div class="cert-foot-lbl">Issued</div><div class="cert-foot-val">${dateStr}</div></div>
            <div class="cert-foot-item"><div class="cert-foot-lbl">Role Track</div><div class="cert-foot-val">${getRoleTitles(u)}</div></div>
            <div class="cert-foot-item"><div class="cert-foot-lbl">Progress</div><div class="cert-foot-val">${stats.pct}% Complete</div></div>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:18px;display:flex;gap:10px;justify-content:center">
        <button class="btn btn-primary" onclick="window.print()">🖨 Print / Save PDF</button>
        <button class="btn btn-secondary" onclick="showPage('dashboard');renderDashboard()">Back to Dashboard</button>
      </div>`;
  }
}

/* -------------------------------------------------------
   ADMIN
   ------------------------------------------------------- */
function renderAdmin() {
  const all   = loadUsers();
  const users = Object.values(all);
  if (!users.length) {
    document.getElementById('admin-wrap').innerHTML = `<div class="empty-state"><span class="empty-state-icon">📋</span><h3>No learners yet</h3><p>Users will appear here after they complete onboarding.</p></div>`;
    return;
  }

  // Aggregate stats
  const totalUsers   = users.length;
  const fullyDone    = users.filter(u => {
    const s = getPathStats(u);
    return s.done === s.total && s.total > 0;
  }).length;
  const avgPct = Math.round(users.reduce((acc,u) => acc + getPathStats(u).pct, 0) / totalUsers);
  const testedOutTotal = users.reduce((acc,u) => {
    return acc + Object.values(u.progress).filter(p => p.status === 'tested-out').length;
  }, 0);

  // Module completion rates
  const allModIds = Object.keys(MODULES);
  const modStats  = allModIds.map(id => {
    const done = users.filter(u => {
      const s = u.progress[id]?.status;
      return s === 'completed' || s === 'tested-out';
    }).length;
    return { id, done, pct: Math.round((done/totalUsers)*100) };
  });

  document.getElementById('admin-wrap').innerHTML = `
    <div class="admin-stats">
      <div class="stat-tile"><div class="stat-tile-lbl">Total Learners</div><div class="stat-tile-val">${totalUsers}</div><div class="stat-tile-sub">registered accounts</div></div>
      <div class="stat-tile"><div class="stat-tile-lbl">Fully Certified</div><div class="stat-tile-val">${fullyDone}</div><div class="stat-tile-sub">path complete</div></div>
      <div class="stat-tile"><div class="stat-tile-lbl">Avg Progress</div><div class="stat-tile-val">${avgPct}%</div><div class="stat-tile-sub">across all learners</div></div>
      <div class="stat-tile"><div class="stat-tile-lbl">Tests Skipped</div><div class="stat-tile-val">${testedOutTotal}</div><div class="stat-tile-sub">via test-out</div></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:22px">
      <div class="card">
        <div class="card-header"><strong>Module Completion Rate</strong></div>
        <div class="card-body">
          ${modStats.map(ms => `<div class="mod-completion-row">
            <div class="mcr-name">${MODULES[ms.id].icon} ${MODULES[ms.id].title.split(' ').slice(0,3).join(' ')}</div>
            <div class="mcr-bar"><div class="mcr-fill" style="width:${ms.pct}%"></div></div>
            <div class="mcr-pct">${ms.pct}%</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><strong>Role Distribution</strong></div>
        <div class="card-body">
          ${Object.values(ROLES).map(r => {
            const count = users.filter(u => getRoleIds(u).includes(r.id)).length;
            const pct   = Math.round((count/totalUsers)*100);
            return `<div class="mod-completion-row">
              <div class="mcr-name">${r.icon} ${r.title}</div>
              <div class="mcr-bar"><div class="mcr-fill" style="width:${pct}%"></div></div>
              <div class="mcr-pct">${count}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="data-table">
      <div style="padding:14px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)">
        <strong>Learner Progress</strong>
        <button class="btn btn-secondary btn-sm" onclick="exportCSV()">↓ Export CSV</button>
      </div>
      <table>
        <thead><tr>
          <th>Name</th><th>Role</th><th>Progress</th><th>Completed</th><th>Last Active</th>
        </tr></thead>
        <tbody>
          ${users.map(u => {
            const stats = getPathStats(u);
            const lastAct = new Date(u.lastActive).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
            return `<tr>
              <td><strong>${u.name}</strong><br><span style="font-size:11.5px;color:var(--text-3)">${u.email}</span></td>
              <td>${getRoleIds(u).map(rid => `<span class="badge badge-blue" style="margin:1px 2px">${ROLES[rid]?.icon} ${ROLES[rid]?.title}</span>`).join('')}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px">
                  <div class="progress-bar" style="flex:1;min-width:80px"><div class="progress-fill" style="width:${stats.pct}%"></div></div>
                  <span style="font-size:12px;font-weight:600;color:var(--text-2)">${stats.pct}%</span>
                </div>
              </td>
              <td>${stats.done} / ${stats.total}</td>
              <td style="color:var(--text-3);font-size:12.5px">${lastAct}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

function exportCSV() {
  const all   = loadUsers();
  const users = Object.values(all);
  const rows  = [['Name','Email','Role','Progress %','Modules Done','Last Active']];
  users.forEach(u => {
    const stats = getPathStats(u);
    rows.push([
      u.name, u.email,
      getRoleTitles(u),
      stats.pct,
      `${stats.done}/${stats.total}`,
      new Date(u.lastActive).toLocaleDateString(),
    ]);
  });
  const csv  = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'centercode-lms-report.csv'; a.click();
  URL.revokeObjectURL(url);
  toast('CSV exported.', 'success');
}

/* -------------------------------------------------------
   MANAGE ROLES
   ------------------------------------------------------- */
function openManageRoles() {
  const u = S.currentUser;
  const currentIds = getRoleIds(u);
  document.getElementById('modal-roles-grid').innerHTML = Object.values(ROLES).map(r => `
    <div class="role-option ${currentIds.includes(r.id) ? 'selected' : ''}" data-role="${r.id}"
         onclick="this.classList.toggle('selected')">
      <div class="role-option-icon">${r.icon}</div>
      <div class="role-option-name">${r.title}</div>
      <div class="role-option-desc">${r.desc}</div>
    </div>`).join('');
  document.getElementById('modal-roles').classList.remove('hidden');
}

/* -------------------------------------------------------
   MODALS
   ------------------------------------------------------- */
function initModals() {
  // Manage roles modal
  document.getElementById('modal-roles-save').onclick = () => {
    const selected = Array.from(
      document.querySelectorAll('#modal-roles-grid .role-option.selected')
    ).map(el => el.dataset.role);
    if (!selected.length) { toast('Select at least one role.', 'error'); return; }
    const u = S.currentUser;
    u.roleIds = selected;
    delete u.roleId; // remove legacy field
    upsertUser(u);
    S.currentUser = loadUsers()[u.id];
    document.getElementById('modal-roles').classList.add('hidden');
    renderSidebar();
    renderDashboard();
    toast('Roles updated. Your learning path has been adjusted.', 'success');
  };

  document.getElementById('modal-roles-cancel').onclick = () => {
    document.getElementById('modal-roles').classList.add('hidden');
  };

  document.getElementById('modal-roles').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-roles'))
      document.getElementById('modal-roles').classList.add('hidden');
  });

  // API key modal
  document.getElementById('apikey-save').onclick = () => {
    const val = document.getElementById('apikey-input').value.trim();
    setApiKey(val);
    document.getElementById('modal-apikey').classList.add('hidden');
    renderApiKeyBadge();
    renderLessonSidebar();
    toast(val ? 'API key saved. AI Interview is active!' : 'API key cleared.', val ? 'success' : 'info');
  };

  document.getElementById('apikey-cancel').onclick = () => {
    document.getElementById('modal-apikey').classList.add('hidden');
  };

  document.getElementById('modal-apikey').onclick = (e) => {
    if (e.target === document.getElementById('modal-apikey'))
      document.getElementById('modal-apikey').classList.add('hidden');
  };
}

/* -------------------------------------------------------
   TOAST
   ------------------------------------------------------- */
function toast(msg, type = 'info') {
  const root = document.getElementById('toast-root');
  const el   = document.createElement('div');
  el.className = `toast t-${type}`;
  const icons = { success: '✓', error: '✗', info: 'ℹ' };
  el.innerHTML = `<span>${icons[type]||'ℹ'}</span><span>${msg}</span>`;
  root.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

/* -------------------------------------------------------
   UTILITIES
   ------------------------------------------------------- */
function initials(name) {
  return name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
}

/* -------------------------------------------------------
   GLOBAL INIT
   ------------------------------------------------------- */
function init() {
  // Sidebar nav bindings
  document.querySelectorAll('.sb-nav-item[data-page]').forEach(el => {
    el.onclick = () => {
      const page = el.dataset.page;
      showPage(page);
      if (page === 'dashboard')   { renderDashboard(); }
      if (page === 'path')        { renderPath(); }
      if (page === 'admin')       { renderAdmin(); }
      if (page === 'certificate') { renderCertificate(); }
    };
  });

  // API key trigger in sidebar
  document.getElementById('sb-api-key-trigger').onclick = promptApiKey;

  // Logout
  document.getElementById('btn-logout').onclick = () => {
    localStorage.removeItem(STORE_KEY);
    location.reload();
  };

  initModals();
  initInterviewPage();

  // Auto-route
  const user = loadCurrentUser();
  if (user) {
    S.currentUser = user;
    initWelcome();
    showView('welcome');
  } else {
    initWelcome();
    showView('welcome');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initWelcome();
  initOnboarding();
  init();
});

// Expose needed fns to inline onclick handlers
window.openModule     = openModule;
window.navLesson      = navLesson;
window.goToLesson     = goToLesson;
window.markLessonAndFinish = markLessonAndFinish;
window.startQuiz      = startQuiz;
window.selectOpt      = selectOpt;
window.submitQuizAnswer = submitQuizAnswer;
window.startInterview = startInterview;
window.promptApiKey   = promptApiKey;
window.renderCertificate = renderCertificate;
window.renderAdmin    = renderAdmin;
window.renderDashboard = renderDashboard;
window.renderPath     = renderPath;
window.exportCSV      = exportCSV;
window.showPage       = showPage;
window.toast          = toast;
window.openManageRoles = openManageRoles;
