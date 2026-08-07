const DAYS = ["mon", "tue", "wed", "thu", "fri"];
const PERIODS = [1, 2, 3, 4, 5];
const DAY_LABELS = { mon: "月", tue: "火", wed: "水", thu: "木", fri: "金" };
const WEEKDAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];

const tbody = document.getElementById("timetable-body");
const storageWarning = document.getElementById("storage-warning");

const pages = document.querySelectorAll(".page");
const openTodoBtn = document.getElementById("open-todo-btn");
const openExamsBtn = document.getElementById("open-exams-btn");
const openHelpBtn = document.getElementById("open-help-btn");
const openSettingsBtn = document.getElementById("open-settings-btn");
const backBtns = document.querySelectorAll("[data-back]");

const themeSwatchRow = document.getElementById("theme-swatch-row");
const fontRadioRow = document.getElementById("font-radio-row");
const timeFormat24Input = document.getElementById("time-format-24");
const timeFormat12Input = document.getElementById("time-format-12");
const attendanceSizeInputs = {
  large: document.getElementById("attendance-size-large"),
  medium: document.getElementById("attendance-size-medium"),
  small: document.getElementById("attendance-size-small"),
  hidden: document.getElementById("attendance-size-hidden"),
};
const periodTimeSizeInputs = {
  large: document.getElementById("period-time-size-large"),
  medium: document.getElementById("period-time-size-medium"),
  small: document.getElementById("period-time-size-small"),
  hidden: document.getElementById("period-time-size-hidden"),
};
const showIconsShowInput = document.getElementById("show-icons-show");
const showIconsHideInput = document.getElementById("show-icons-hide");
const universityBtnLabel = document.getElementById("university-btn-label");

const periodTimeModalOverlay = document.getElementById("period-time-modal-overlay");
const periodTimeModalTitle = document.getElementById("period-time-modal-title");
const periodStartInput = document.getElementById("period-start-input");
const periodEndInput = document.getElementById("period-end-input");
const periodTimeSaveBtn = document.getElementById("period-time-save-btn");
const periodTimeCancelBtn = document.getElementById("period-time-cancel-btn");

const syncModalOverlay = document.getElementById("sync-modal-overlay");
const syncModalDesc = document.getElementById("sync-modal-desc");
const syncFieldAttendance = document.getElementById("sync-field-attendance");
const syncFieldExam = document.getElementById("sync-field-exam");
const syncFieldUrl = document.getElementById("sync-field-url");
const syncFieldPastExams = document.getElementById("sync-field-pastexams");
const syncFieldMemo = document.getElementById("sync-field-memo");
const syncConfirmBtn = document.getElementById("sync-confirm-btn");
const syncDeclineBtn = document.getElementById("sync-decline-btn");

const examPreviewList = document.getElementById("exam-preview-list");
const examFullList = document.getElementById("exam-full-list");

const titlePrefixInput = document.getElementById("title-prefix-input");
const titlePrefixMirror = document.getElementById("title-prefix-mirror");

const openUniversityBtn = document.getElementById("open-university-btn");
const editUniversityBtn = document.getElementById("edit-university-btn");
const universityModalOverlay = document.getElementById("university-modal-overlay");
const universityLabelInput = document.getElementById("university-label-input");
const universityUrlInput = document.getElementById("university-url-input");
const universitySaveBtn = document.getElementById("university-save-btn");
const universityCancelBtn = document.getElementById("university-cancel-btn");

const openPastExamsBtn = document.getElementById("open-past-exams-btn");
const pastExamLinksModalOverlay = document.getElementById("past-exam-links-modal-overlay");
const pastExamLinksList = document.getElementById("past-exam-links-list");
const pastExamLinkNameInput = document.getElementById("past-exam-link-name-input");
const pastExamLinkUrlInput = document.getElementById("past-exam-link-url-input");
const addPastExamLinkBtn = document.getElementById("add-past-exam-link-btn");
const pastExamLinksCloseBtn = document.getElementById("past-exam-links-close-btn");

const todoTitleInput = document.getElementById("todo-title-input");
const todoDueInput = document.getElementById("todo-due-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoListEl = document.getElementById("todo-list");

const saveGradeInput = document.getElementById("save-grade-input");
const saveTermInput = document.getElementById("save-term-input");
const saveTimetableBtn = document.getElementById("save-timetable-btn");
const savedTimetableListEl = document.getElementById("saved-timetable-list");

const importTextInput = document.getElementById("import-text-input");
const importTextBtn = document.getElementById("import-text-btn");

const shareModalOverlay = document.getElementById("share-modal-overlay");
const shareNativeBtn = document.getElementById("share-native-btn");
const shareUrlOutput = document.getElementById("share-url-output");
const shareUrlCopyBtn = document.getElementById("share-url-copy-btn");
const shareTextOutput = document.getElementById("share-text-output");
const shareCopyBtn = document.getElementById("share-copy-btn");
const shareCloseBtn = document.getElementById("share-close-btn");

const modalOverlay = document.getElementById("modal-overlay");
const modalSubtitle = document.getElementById("modal-subtitle");

const nameDisplayRow = document.getElementById("name-display-row");
const nameDisplay = document.getElementById("name-display");
const editNameBtn = document.getElementById("edit-name-btn");
const nameEditRow = document.getElementById("name-edit-row");
const nameEditInput = document.getElementById("name-edit-input");
const nameSaveBtn = document.getElementById("name-save-btn");
const nameCancelBtn = document.getElementById("name-cancel-btn");

const attendedInput = document.getElementById("attended-input");
const absentInput = document.getElementById("absent-input");
const ratePreview = document.getElementById("rate-preview");

const midtermInput = document.getElementById("midterm-input");
const finalInput = document.getElementById("final-input");

const urlViewRow = document.getElementById("url-view-row");
const moodleLink = document.getElementById("moodle-link");
const urlUnsetLabel = document.getElementById("url-unset-label");
const editUrlBtn = document.getElementById("edit-url-btn");
const urlEditRow = document.getElementById("url-edit-row");
const urlEditInput = document.getElementById("url-edit-input");
const urlSaveBtn = document.getElementById("url-save-btn");
const urlCancelBtn = document.getElementById("url-cancel-btn");

const pastExamList = document.getElementById("past-exam-list");
const pastExamTitleInput = document.getElementById("past-exam-title-input");
const pastExamUrlInput = document.getElementById("past-exam-url-input");
const addPastExamBtn = document.getElementById("add-past-exam-btn");

const memoInput = document.getElementById("memo-input");

const syncStatusSection = document.getElementById("sync-status-section");
const syncStatusDesc = document.getElementById("sync-status-desc");
const syncEditAttendance = document.getElementById("sync-edit-attendance");
const syncEditExam = document.getElementById("sync-edit-exam");
const syncEditUrl = document.getElementById("sync-edit-url");
const syncEditPastExams = document.getElementById("sync-edit-pastexams");
const syncEditMemo = document.getElementById("sync-edit-memo");
const unsyncBtn = document.getElementById("unsync-btn");

const clearBtn = document.getElementById("clear-btn");
const closeBtn = document.getElementById("close-btn");

const STORAGE_KEY = "my-timetable-data";

const state = {};
const cellMap = {};
let todos = [];
let todoSeq = 0;
let universityUrl = "";
let universityLabel = "";
let pastExamLinks = [];
let pastExamLinkSeq = 0;
let titlePrefix = "";
let savedTimetables = [];
let savedTimetableSeq = 0;
let pastExamSeq = 0;
let activeKey = null;
let syncSettings = {};
let activePeriod = null;

const DEFAULT_UNIVERSITY_LABEL = "大学公式サイト";

const DEFAULT_PERIOD_TIMES = {
  1: { start: "09:00", end: "10:30" },
  2: { start: "10:40", end: "12:10" },
  3: { start: "13:00", end: "14:30" },
  4: { start: "14:40", end: "16:10" },
  5: { start: "16:20", end: "17:50" },
};

let periodTimes = {
  1: { ...DEFAULT_PERIOD_TIMES[1] },
  2: { ...DEFAULT_PERIOD_TIMES[2] },
  3: { ...DEFAULT_PERIOD_TIMES[3] },
  4: { ...DEFAULT_PERIOD_TIMES[4] },
  5: { ...DEFAULT_PERIOD_TIMES[5] },
};

const SYNC_FIELD_KEYS = ["attendance", "exam", "url", "pastExams", "memo"];

const THEME_PRESETS = {
  blue: { primary: "#2f6fed", primaryDark: "#1f4fc4", primarySoft: "#dde8fd", primarySofter: "#eff4fe" },
  purple: { primary: "#7c5cff", primaryDark: "#5b3fe0", primarySoft: "#e6ddff", primarySofter: "#f3efff" },
  green: { primary: "#22a55e", primaryDark: "#178a4a", primarySoft: "#d8f3e3", primarySofter: "#eefaf3" },
  pink: { primary: "#ec4899", primaryDark: "#c22a73", primarySoft: "#fbdcec", primarySofter: "#fdf0f7" },
  orange: { primary: "#f2994a", primaryDark: "#c96f26", primarySoft: "#fde8d3", primarySofter: "#fef5ea" },
};
const FONT_PRESETS = {
  zenKaku: { label: "ゴシック（シャープ）", family: "'Zen Kaku Gothic New', 'Hiragino Sans', 'Yu Gothic', 'Segoe UI', sans-serif" },
  notoSans: { label: "ゴシック（標準）", family: "'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'Segoe UI', sans-serif" },
  zenMaru: { label: "丸ゴシック", family: "'Zen Maru Gothic', 'Hiragino Sans', 'Yu Gothic', 'Segoe UI', sans-serif" },
  shipporiMincho: { label: "明朝体", family: "'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', serif" },
};
const DEFAULT_UI_SETTINGS = {
  themeColor: "blue",
  fontChoice: "zenKaku",
  timeFormat: "24",
  attendanceSize: "medium",
  periodTimeSize: "medium",
  showIcons: true,
};
let uiSettings = { ...DEFAULT_UI_SETTINGS };

const periodCellMap = {};
let pendingSyncKey = null;
let pendingSyncMatches = [];
let pendingSyncName = "";

function keyOf(day, period) {
  return `${day}-${period}`;
}

function emptyClassData() {
  return {
    name: "",
    url: "",
    attended: 0,
    absent: 0,
    examMidterm: "",
    examFinal: "",
    pastExams: [],
    memo: "",
    syncEnabled: false,
  };
}

function getData(key) {
  if (!state[key]) {
    state[key] = emptyClassData();
  }
  return state[key];
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function toNonNegativeInt(value) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function computeRate(attended, absent) {
  const total = attended + absent;
  if (total === 0) return null;
  return Math.round((attended / total) * 1000) / 10;
}

/* ---------- 保存・読み込み ---------- */

function showStorageWarning() {
  storageWarning.classList.remove("hidden");
}

function isStorageAvailable() {
  try {
    const testKey = "__storage_test__";
    localStorage.setItem(testKey, "1");
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

function sanitizeClassEntry(entry) {
  entry = entry || {};
  const cleaned = {
    name: typeof entry.name === "string" ? entry.name : "",
    url: typeof entry.url === "string" ? entry.url : "",
    attended: toNonNegativeInt(entry.attended),
    absent: toNonNegativeInt(entry.absent),
    examMidterm: typeof entry.examMidterm === "string" ? entry.examMidterm : "",
    examFinal: typeof entry.examFinal === "string" ? entry.examFinal : "",
    pastExams: Array.isArray(entry.pastExams)
      ? entry.pastExams
          .filter((exam) => exam && typeof exam.title === "string")
          .map((exam) => ({
            id: toNonNegativeInt(exam.id),
            title: exam.title,
            url: typeof exam.url === "string" ? exam.url : "",
          }))
      : [],
    memo: typeof entry.memo === "string" ? entry.memo : "",
    syncEnabled: !!entry.syncEnabled,
  };
  cleaned.pastExams.forEach((exam) => {
    if (exam.id > pastExamSeq) pastExamSeq = exam.id;
  });
  return cleaned;
}

function sanitizeClassesMap(rawMap) {
  const cleaned = {};
  if (!rawMap || typeof rawMap !== "object") return cleaned;
  Object.keys(rawMap).forEach((key) => {
    cleaned[key] = sanitizeClassEntry(rawMap[key]);
  });
  return cleaned;
}

function sanitizeSyncSettings(rawMap) {
  const cleaned = {};
  if (!rawMap || typeof rawMap !== "object") return cleaned;
  Object.keys(rawMap).forEach((name) => {
    const entry = rawMap[name] || {};
    const settings = {};
    SYNC_FIELD_KEYS.forEach((field) => {
      settings[field] = !!entry[field];
    });
    cleaned[name] = settings;
  });
  return cleaned;
}

function sanitizePeriodTimes(rawMap) {
  const cleaned = {};
  PERIODS.forEach((period) => {
    const entry = (rawMap && rawMap[period]) || {};
    const fallback = DEFAULT_PERIOD_TIMES[period];
    cleaned[period] = {
      start: typeof entry.start === "string" && entry.start ? entry.start : fallback.start,
      end: typeof entry.end === "string" && entry.end ? entry.end : fallback.end,
    };
  });
  return cleaned;
}

function sanitizeUiSettings(raw) {
  raw = raw || {};
  const SIZE_VALUES = ["large", "medium", "small", "hidden"];
  // legacyMetricSize: 出席率・授業時間の文字サイズが1つの設定だった旧バージョンからの引き継ぎ用
  const legacyMetricSize = SIZE_VALUES.includes(raw.metricSize) ? raw.metricSize : null;
  return {
    themeColor: THEME_PRESETS[raw.themeColor] ? raw.themeColor : DEFAULT_UI_SETTINGS.themeColor,
    fontChoice: FONT_PRESETS[raw.fontChoice] ? raw.fontChoice : DEFAULT_UI_SETTINGS.fontChoice,
    timeFormat: raw.timeFormat === "12" ? "12" : "24",
    attendanceSize: SIZE_VALUES.includes(raw.attendanceSize)
      ? raw.attendanceSize
      : legacyMetricSize || DEFAULT_UI_SETTINGS.attendanceSize,
    periodTimeSize: SIZE_VALUES.includes(raw.periodTimeSize)
      ? raw.periodTimeSize
      : legacyMetricSize || DEFAULT_UI_SETTINGS.periodTimeSize,
    showIcons: typeof raw.showIcons === "boolean" ? raw.showIcons : DEFAULT_UI_SETTINGS.showIcons,
  };
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        classes: state,
        syncSettings,
        todos,
        universityUrl,
        universityLabel,
        pastExamLinks,
        titlePrefix,
        savedTimetables,
        periodTimes,
        uiSettings,
      })
    );
  } catch (e) {
    console.warn("データの保存に失敗しました", e);
    showStorageWarning();
  }
}

function loadState() {
  let raw;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    console.warn("データの読み込みに失敗しました", e);
    showStorageWarning();
    return;
  }
  if (!raw) return;

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    console.warn("保存データの形式が不正です", e);
    return;
  }
  if (!parsed || typeof parsed !== "object") return;

  const isWrapped = "classes" in parsed || "todos" in parsed || "universityUrl" in parsed;
  const classesRaw = isWrapped ? parsed.classes || {} : parsed;
  const syncSettingsRaw = isWrapped ? parsed.syncSettings : undefined;
  const todosRaw = isWrapped ? parsed.todos : [];
  const universityUrlRaw = isWrapped ? parsed.universityUrl : "";
  const universityLabelRaw = isWrapped ? parsed.universityLabel : "";
  const pastExamLinksRaw = isWrapped ? parsed.pastExamLinks : undefined;
  const legacyPastExamsUrl = isWrapped ? parsed.pastExamsUrl : "";
  const titlePrefixRaw = isWrapped ? parsed.titlePrefix : "";
  const savedTimetablesRaw = isWrapped ? parsed.savedTimetables : [];
  const periodTimesRaw = isWrapped ? parsed.periodTimes : undefined;
  const uiSettingsRaw = isWrapped ? parsed.uiSettings : undefined;

  Object.assign(state, sanitizeClassesMap(classesRaw));
  syncSettings = sanitizeSyncSettings(syncSettingsRaw);
  periodTimes = sanitizePeriodTimes(periodTimesRaw);
  uiSettings = sanitizeUiSettings(uiSettingsRaw);

  todos = (Array.isArray(todosRaw) ? todosRaw : [])
    .filter((t) => t && typeof t.title === "string")
    .map((t) => ({
      id: toNonNegativeInt(t.id),
      title: t.title,
      done: !!t.done,
      dueDate: typeof t.dueDate === "string" ? t.dueDate : "",
    }));
  todos.forEach((t) => {
    if (t.id > todoSeq) todoSeq = t.id;
  });

  universityUrl = typeof universityUrlRaw === "string" ? universityUrlRaw : "";
  universityLabel = typeof universityLabelRaw === "string" ? universityLabelRaw : "";
  titlePrefix = typeof titlePrefixRaw === "string" ? titlePrefixRaw : "";

  if (Array.isArray(pastExamLinksRaw)) {
    pastExamLinks = pastExamLinksRaw
      .filter((link) => link && typeof link.name === "string" && typeof link.url === "string")
      .map((link) => ({
        id: toNonNegativeInt(link.id),
        name: link.name,
        url: link.url,
      }));
  } else if (typeof legacyPastExamsUrl === "string" && legacyPastExamsUrl) {
    pastExamLinkSeq += 1;
    pastExamLinks = [{ id: pastExamLinkSeq, name: "過去問", url: legacyPastExamsUrl }];
  } else {
    pastExamLinks = [];
  }
  pastExamLinks.forEach((link) => {
    if (link.id > pastExamLinkSeq) pastExamLinkSeq = link.id;
  });

  savedTimetables = (Array.isArray(savedTimetablesRaw) ? savedTimetablesRaw : [])
    .filter((entry) => entry && typeof entry === "object")
    .map((entry) => ({
      id: toNonNegativeInt(entry.id),
      grade: typeof entry.grade === "string" ? entry.grade : "",
      term: typeof entry.term === "string" ? entry.term : "",
      titlePrefix: typeof entry.titlePrefix === "string" ? entry.titlePrefix : "",
      classes: sanitizeClassesMap(entry.classes),
      syncSettings: sanitizeSyncSettings(entry.syncSettings),
    }));
  savedTimetables.forEach((entry) => {
    if (entry.id > savedTimetableSeq) savedTimetableSeq = entry.id;
  });
}

/* ---------- ページ切り替え ---------- */

function showPage(id) {
  pages.forEach((page) => {
    page.classList.toggle("hidden", page.id !== id);
  });
  if (id === "page-todo") renderTodoList();
  if (id === "page-exams") refreshExamViews();
}

backBtns.forEach((btn) => btn.addEventListener("click", () => showPage("page-timetable")));
openTodoBtn.addEventListener("click", () => showPage("page-todo"));
openExamsBtn.addEventListener("click", () => showPage("page-exams"));
openHelpBtn.addEventListener("click", () => showPage("page-help"));
openSettingsBtn.addEventListener("click", () => showPage("page-settings"));

/* ---------- 時間割タイトル ---------- */

function resizeTitlePrefixInput() {
  const text = titlePrefixInput.value || titlePrefixInput.placeholder;
  titlePrefixMirror.textContent = text;
  titlePrefixInput.style.width = `${titlePrefixMirror.offsetWidth + 4}px`;
}

titlePrefixInput.addEventListener("input", () => {
  titlePrefix = titlePrefixInput.value;
  resizeTitlePrefixInput();
  saveState();
});

/* ---------- 時間割 ---------- */

function buildTable() {
  PERIODS.forEach((period) => {
    const row = document.createElement("tr");

    const periodCell = document.createElement("td");
    periodCell.className = "period-cell";

    const labelEl = document.createElement("span");
    labelEl.className = "period-label";
    labelEl.textContent = `${period}限`;
    periodCell.appendChild(labelEl);

    const timeEl = document.createElement("span");
    timeEl.className = "period-time";
    periodCell.appendChild(timeEl);

    periodCellMap[period] = timeEl;
    periodCell.addEventListener("click", () => openPeriodTimeModal(period));
    row.appendChild(periodCell);

    DAYS.forEach((day) => {
      const cell = document.createElement("td");
      cell.className = "class-cell";
      cell.dataset.day = day;
      cell.dataset.period = period;
      const key = keyOf(day, period);
      cellMap[key] = cell;
      cell.addEventListener("click", () => openModal(key));
      renderCell(key);
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

function renderCell(key) {
  const cell = cellMap[key];
  const data = getData(key);
  cell.innerHTML = "";

  if (!data.name) {
    cell.classList.remove("filled");
    const placeholder = document.createElement("span");
    placeholder.className = "placeholder";
    placeholder.textContent = "＋";
    cell.appendChild(placeholder);
    return;
  }

  cell.classList.add("filled");

  const nameEl = document.createElement("span");
  nameEl.className = "class-name";
  nameEl.textContent = data.name;
  cell.appendChild(nameEl);

  const rate = computeRate(data.attended, data.absent);
  if (rate !== null) {
    const rateEl = document.createElement("span");
    rateEl.className = "attendance-rate";
    rateEl.textContent = `出席率 ${rate}%（${data.attended}/${data.attended + data.absent}）`;
    cell.appendChild(rateEl);
  }
}

function renderAllCells() {
  Object.keys(cellMap).forEach((key) => renderCell(key));
}

/* ---------- 時限の時間 ---------- */

function formatTimeHM(hhmm) {
  if (uiSettings.timeFormat !== "12") return hhmm;
  const [hStr, mStr] = hhmm.split(":");
  const h = parseInt(hStr, 10);
  const period = h < 12 ? "午前" : "午後";
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return `${period}${h12}:${mStr}`;
}

function renderPeriodTimes() {
  PERIODS.forEach((period) => {
    const time = periodTimes[period];
    periodCellMap[period].textContent = `${formatTimeHM(time.start)}〜${formatTimeHM(time.end)}`;
  });
}

function openPeriodTimeModal(period) {
  activePeriod = period;
  const time = periodTimes[period];
  periodTimeModalTitle.textContent = `${period}限の時間`;
  periodStartInput.value = time.start;
  periodEndInput.value = time.end;
  periodTimeModalOverlay.classList.remove("hidden");
}

function closePeriodTimeModal() {
  periodTimeModalOverlay.classList.add("hidden");
  activePeriod = null;
}

periodTimeSaveBtn.addEventListener("click", () => {
  if (!activePeriod) return;
  const start = periodStartInput.value || DEFAULT_PERIOD_TIMES[activePeriod].start;
  const end = periodEndInput.value || DEFAULT_PERIOD_TIMES[activePeriod].end;
  periodTimes[activePeriod] = { start, end };
  renderPeriodTimes();
  saveState();
  closePeriodTimeModal();
});

periodTimeCancelBtn.addEventListener("click", closePeriodTimeModal);

periodTimeModalOverlay.addEventListener("click", (e) => {
  if (e.target === periodTimeModalOverlay) closePeriodTimeModal();
});

/* ---------- テストが近い科目 ---------- */

function getAllExams() {
  const exams = [];
  const seen = new Set();

  const addExam = (key, name, label, datetime) => {
    const dedupeKey = `${name}|${label}|${datetime}`;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    exams.push({ key, name, label, datetime });
  };

  Object.keys(state).forEach((key) => {
    const data = state[key];
    if (!data.name) return;
    if (data.examMidterm) {
      addExam(key, data.name, "中間試験", data.examMidterm);
    }
    if (data.examFinal) {
      addExam(key, data.name, "期末試験", data.examFinal);
    }
  });
  return exams;
}

function getUpcomingExamsSorted() {
  const now = Date.now();
  return getAllExams()
    .filter((exam) => {
      const t = new Date(exam.datetime).getTime();
      return !Number.isNaN(t) && t >= now;
    })
    .sort((a, b) => a.datetime.localeCompare(b.datetime));
}

function formatExamDateTime(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  const pad = (n) => String(n).padStart(2, "0");
  const weekday = WEEKDAY_LABELS[d.getDay()];
  const datePart = `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())}(${weekday})`;
  const timePart = formatTimeHM(`${pad(d.getHours())}:${pad(d.getMinutes())}`);
  return `${datePart} ${timePart}`;
}

function renderExamItems(listEl, exams) {
  listEl.innerHTML = "";
  if (exams.length === 0) {
    const li = document.createElement("li");
    li.className = "exam-empty";
    li.textContent = "近日中の試験はありません";
    listEl.appendChild(li);
    return;
  }

  exams.forEach((exam) => {
    const li = document.createElement("li");
    li.className = "exam-item";

    const nameEl = document.createElement("span");
    nameEl.className = "exam-name";
    nameEl.textContent = `${exam.name}（${exam.label}）`;
    li.appendChild(nameEl);

    const dtEl = document.createElement("span");
    dtEl.className = "exam-datetime";
    dtEl.textContent = formatExamDateTime(exam.datetime);
    li.appendChild(dtEl);

    listEl.appendChild(li);
  });
}

function refreshExamViews() {
  const upcoming = getUpcomingExamsSorted();
  renderExamItems(examPreviewList, upcoming.slice(0, 3));
  renderExamItems(examFullList, upcoming);
}

/* ---------- 授業詳細モーダル ---------- */

function openModal(key) {
  activeKey = key;
  const data = getData(key);
  const { day, period } = cellMap[key].dataset;
  modalSubtitle.textContent = `${DAY_LABELS[day]}曜 ${period}限`;

  attendedInput.value = String(data.attended);
  absentInput.value = String(data.absent);
  updateRatePreview();

  midtermInput.value = data.examMidterm;
  finalInput.value = data.examFinal;

  renderUrlSection();
  renderPastExamList();
  memoInput.value = data.memo;
  renderSyncStatusSection();

  if (data.name) {
    showNameDisplay();
  } else {
    startNameEdit();
  }

  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  activeKey = null;
}

function showNameDisplay() {
  const data = getData(activeKey);
  nameDisplay.textContent = data.name;
  nameDisplayRow.classList.remove("hidden");
  nameEditRow.classList.add("hidden");
}

function startNameEdit() {
  const data = getData(activeKey);
  nameEditInput.value = data.name;
  nameDisplayRow.classList.add("hidden");
  nameEditRow.classList.remove("hidden");
  nameEditInput.focus();
}

function updateRatePreview() {
  const attended = toNonNegativeInt(attendedInput.value);
  const absent = toNonNegativeInt(absentInput.value);
  const rate = computeRate(attended, absent);
  ratePreview.textContent =
    rate === null ? "" : `出席率 ${rate}%（${attended}/${attended + absent}回）`;
}

function renderUrlSection() {
  const data = getData(activeKey);
  urlEditRow.classList.add("hidden");
  urlViewRow.classList.remove("hidden");
  moodleLink.textContent = `${data.name || "授業"}へ ↗`;
  if (data.url) {
    moodleLink.href = data.url;
    moodleLink.classList.remove("hidden");
    urlUnsetLabel.classList.add("hidden");
  } else {
    moodleLink.classList.add("hidden");
    urlUnsetLabel.classList.remove("hidden");
  }
}

function startUrlEdit() {
  const data = getData(activeKey);
  urlEditInput.value = data.url;
  urlViewRow.classList.add("hidden");
  urlEditRow.classList.remove("hidden");
  urlEditInput.focus();
}

function renderPastExamList() {
  const data = getData(activeKey);
  pastExamList.innerHTML = "";

  if (data.pastExams.length === 0) {
    const empty = document.createElement("li");
    empty.className = "past-exam-empty";
    empty.textContent = "まだ追加されていません";
    pastExamList.appendChild(empty);
    return;
  }

  data.pastExams.forEach((exam) => {
    const li = document.createElement("li");
    li.className = "past-exam-item";

    const titleEl = document.createElement(exam.url ? "a" : "span");
    titleEl.className = "past-exam-title";
    titleEl.textContent = exam.title;
    if (exam.url) {
      titleEl.href = exam.url;
      titleEl.target = "_blank";
      titleEl.rel = "noopener noreferrer";
    }
    li.appendChild(titleEl);

    const removeBtn = document.createElement("button");
    removeBtn.className = "icon-btn";
    removeBtn.title = "削除";
    removeBtn.textContent = "✕";
    removeBtn.addEventListener("click", () => {
      data.pastExams = data.pastExams.filter((e) => e.id !== exam.id);
      renderPastExamList();
      propagateSync(activeKey);
      saveState();
    });
    li.appendChild(removeBtn);

    pastExamList.appendChild(li);
  });
}

/* ---------- 授業の同期 ---------- */

function findSyncMatches(key) {
  const name = getData(key).name.trim();
  if (!name) return [];
  return Object.keys(state).filter((k) => k !== key && state[k].name.trim() === name);
}

function propagateSync(sourceKey) {
  const data = state[sourceKey];
  if (!data || !data.syncEnabled) return;
  const name = data.name.trim();
  const settings = syncSettings[name];
  if (!name || !settings) return;

  Object.keys(state).forEach((k) => {
    if (k === sourceKey) return;
    const other = state[k];
    if (!other.syncEnabled || other.name.trim() !== name) return;
    if (settings.attendance) {
      other.attended = data.attended;
      other.absent = data.absent;
    }
    if (settings.exam) {
      other.examMidterm = data.examMidterm;
      other.examFinal = data.examFinal;
    }
    if (settings.url) {
      other.url = data.url;
    }
    if (settings.pastExams) {
      other.pastExams = data.pastExams.map((exam) => ({ ...exam }));
    }
    if (settings.memo) {
      other.memo = data.memo;
    }
    renderCell(k);
  });
}

function applySyncSettingsToModalFields() {
  if (!activeKey) return;
  const data = getData(activeKey);
  attendedInput.value = String(data.attended);
  absentInput.value = String(data.absent);
  updateRatePreview();
  midtermInput.value = data.examMidterm;
  finalInput.value = data.examFinal;
  renderUrlSection();
  renderPastExamList();
  memoInput.value = data.memo;
  renderSyncStatusSection();
}

function renderSyncStatusSection() {
  if (!activeKey) return;
  const data = getData(activeKey);
  const name = data.name.trim();
  const settings = syncSettings[name];

  if (!data.syncEnabled || !name || !settings) {
    syncStatusSection.classList.add("hidden");
    return;
  }

  syncStatusSection.classList.remove("hidden");
  const partnerCount = findSyncMatches(activeKey).filter((k) => state[k].syncEnabled).length;
  syncStatusDesc.textContent = `「${name}」の他の${partnerCount}件のコマと同期しています。同期する項目は下のチェックでいつでも変更できます。`;
  syncEditAttendance.checked = !!settings.attendance;
  syncEditExam.checked = !!settings.exam;
  syncEditUrl.checked = !!settings.url;
  syncEditPastExams.checked = !!settings.pastExams;
  syncEditMemo.checked = !!settings.memo;
}

function updateSyncFieldSetting(field, checked) {
  const data = getData(activeKey);
  const name = data.name.trim();
  if (!syncSettings[name]) return;
  syncSettings[name][field] = checked;
  propagateSync(activeKey);
  saveState();
}

syncEditAttendance.addEventListener("change", () => {
  updateSyncFieldSetting("attendance", syncEditAttendance.checked);
});
syncEditExam.addEventListener("change", () => {
  updateSyncFieldSetting("exam", syncEditExam.checked);
});
syncEditUrl.addEventListener("change", () => {
  updateSyncFieldSetting("url", syncEditUrl.checked);
});
syncEditPastExams.addEventListener("change", () => {
  updateSyncFieldSetting("pastExams", syncEditPastExams.checked);
});
syncEditMemo.addEventListener("change", () => {
  updateSyncFieldSetting("memo", syncEditMemo.checked);
});

unsyncBtn.addEventListener("click", () => {
  const data = getData(activeKey);
  data.syncEnabled = false;
  renderSyncStatusSection();
  saveState();
});

function checkForSyncOpportunity(key) {
  const data = getData(key);
  if (data.syncEnabled) return;
  const matches = findSyncMatches(key);
  if (matches.length === 0) return;

  pendingSyncKey = key;
  pendingSyncMatches = matches;
  pendingSyncName = data.name.trim();

  const existing = syncSettings[pendingSyncName];
  syncModalDesc.textContent = `「${pendingSyncName}」という授業が時間割内に他にも${matches.length}件あります。内容を同期しますか？`;
  syncFieldAttendance.checked = existing ? existing.attendance : true;
  syncFieldExam.checked = existing ? existing.exam : false;
  syncFieldUrl.checked = existing ? existing.url : true;
  syncFieldPastExams.checked = existing ? existing.pastExams : true;
  syncFieldMemo.checked = existing ? existing.memo : false;

  syncModalOverlay.classList.remove("hidden");
}

function closeSyncModal() {
  syncModalOverlay.classList.add("hidden");
  pendingSyncKey = null;
  pendingSyncMatches = [];
  pendingSyncName = "";
}

syncConfirmBtn.addEventListener("click", () => {
  if (!pendingSyncKey) return;
  const settings = {
    attendance: syncFieldAttendance.checked,
    exam: syncFieldExam.checked,
    url: syncFieldUrl.checked,
    pastExams: syncFieldPastExams.checked,
    memo: syncFieldMemo.checked,
  };
  syncSettings[pendingSyncName] = settings;

  const data = getData(pendingSyncKey);
  const source = state[pendingSyncMatches[0]];
  if (settings.attendance) {
    data.attended = source.attended;
    data.absent = source.absent;
  }
  if (settings.exam) {
    data.examMidterm = source.examMidterm;
    data.examFinal = source.examFinal;
  }
  if (settings.url) {
    data.url = source.url;
  }
  if (settings.pastExams) {
    data.pastExams = source.pastExams.map((exam) => ({ ...exam }));
  }
  if (settings.memo) {
    data.memo = source.memo;
  }

  data.syncEnabled = true;
  pendingSyncMatches.forEach((k) => {
    state[k].syncEnabled = true;
  });

  renderCell(pendingSyncKey);
  pendingSyncMatches.forEach((k) => renderCell(k));
  refreshExamViews();
  applySyncSettingsToModalFields();
  saveState();
  closeSyncModal();
});

syncDeclineBtn.addEventListener("click", closeSyncModal);

syncModalOverlay.addEventListener("click", (e) => {
  if (e.target === syncModalOverlay) closeSyncModal();
});

editNameBtn.addEventListener("click", startNameEdit);

nameSaveBtn.addEventListener("click", () => {
  const data = getData(activeKey);
  const previousName = data.name;
  data.name = nameEditInput.value.trim();
  if (data.name) {
    showNameDisplay();
  } else {
    startNameEdit();
  }
  renderCell(activeKey);
  renderUrlSection();
  renderSyncStatusSection();
  refreshExamViews();
  saveState();

  if (data.name && data.name !== previousName) {
    checkForSyncOpportunity(activeKey);
  }
});

nameCancelBtn.addEventListener("click", () => {
  const data = getData(activeKey);
  if (data.name) {
    showNameDisplay();
  }
});

nameEditInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") nameSaveBtn.click();
  if (e.key === "Escape") {
    e.stopPropagation();
    nameCancelBtn.click();
  }
});

attendedInput.addEventListener("input", () => {
  const data = getData(activeKey);
  data.attended = toNonNegativeInt(attendedInput.value);
  updateRatePreview();
  renderCell(activeKey);
  propagateSync(activeKey);
  saveState();
});

absentInput.addEventListener("input", () => {
  const data = getData(activeKey);
  data.absent = toNonNegativeInt(absentInput.value);
  updateRatePreview();
  renderCell(activeKey);
  propagateSync(activeKey);
  saveState();
});

midtermInput.addEventListener("change", () => {
  const data = getData(activeKey);
  data.examMidterm = midtermInput.value;
  refreshExamViews();
  propagateSync(activeKey);
  saveState();
});

finalInput.addEventListener("change", () => {
  const data = getData(activeKey);
  data.examFinal = finalInput.value;
  refreshExamViews();
  propagateSync(activeKey);
  saveState();
});

editUrlBtn.addEventListener("click", startUrlEdit);

urlSaveBtn.addEventListener("click", () => {
  const data = getData(activeKey);
  data.url = normalizeUrl(urlEditInput.value);
  renderUrlSection();
  propagateSync(activeKey);
  saveState();
});

urlCancelBtn.addEventListener("click", renderUrlSection);

urlEditInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") urlSaveBtn.click();
  if (e.key === "Escape") {
    e.stopPropagation();
    urlCancelBtn.click();
  }
});

addPastExamBtn.addEventListener("click", () => {
  const title = pastExamTitleInput.value.trim();
  if (!title) {
    pastExamTitleInput.focus();
    return;
  }
  const data = getData(activeKey);
  pastExamSeq += 1;
  data.pastExams.push({
    id: pastExamSeq,
    title,
    url: normalizeUrl(pastExamUrlInput.value),
  });
  pastExamTitleInput.value = "";
  pastExamUrlInput.value = "";
  renderPastExamList();
  pastExamTitleInput.focus();
  propagateSync(activeKey);
  saveState();
});

pastExamTitleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPastExamBtn.click();
});
pastExamUrlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPastExamBtn.click();
});

memoInput.addEventListener("input", () => {
  const data = getData(activeKey);
  data.memo = memoInput.value;
  propagateSync(activeKey);
  saveState();
});

clearBtn.addEventListener("click", () => {
  if (!activeKey) return;
  state[activeKey] = emptyClassData();
  renderCell(activeKey);
  refreshExamViews();
  saveState();
  closeModal();
});

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

/* ---------- 課題管理（TODOリスト） ---------- */

function renderTodoList() {
  todoListEl.innerHTML = "";

  if (todos.length === 0) {
    const li = document.createElement("li");
    li.className = "todo-empty";
    li.textContent = "課題はまだありません";
    todoListEl.appendChild(li);
    return;
  }

  const sorted = [...todos].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    return 0;
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  sorted.forEach((todo) => {
    let urgency = "";
    let dueLabel = todo.dueDate;
    if (todo.dueDate && !todo.done) {
      const due = new Date(`${todo.dueDate}T00:00:00`);
      if (!Number.isNaN(due.getTime())) {
        const diffDays = Math.round((due - today) / 86400000);
        if (diffDays < 0) {
          urgency = "overdue";
          dueLabel = `期限切れ（${todo.dueDate}）`;
        } else if (diffDays === 0) {
          urgency = "due-today";
          dueLabel = `今日締切（${todo.dueDate}）`;
        } else if (diffDays === 1) {
          urgency = "due-soon";
          dueLabel = `明日締切（${todo.dueDate}）`;
        } else if (diffDays <= 3) {
          urgency = "due-soon";
          dueLabel = `あと${diffDays}日（${todo.dueDate}）`;
        }
      }
    }

    const li = document.createElement("li");
    li.className = "todo-item" + (todo.done ? " done" : "") + (urgency ? ` ${urgency}` : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked;
      renderTodoList();
      saveState();
    });
    li.appendChild(checkbox);

    const titleEl = document.createElement("span");
    titleEl.className = "todo-title";
    titleEl.textContent = todo.title;
    li.appendChild(titleEl);

    if (todo.dueDate) {
      const dueEl = document.createElement("span");
      dueEl.className = "todo-due";
      dueEl.textContent = dueLabel;
      li.appendChild(dueEl);
    }

    const removeBtn = document.createElement("button");
    removeBtn.className = "icon-btn";
    removeBtn.title = "削除";
    removeBtn.textContent = "✕";
    removeBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodoList();
      saveState();
    });
    li.appendChild(removeBtn);

    todoListEl.appendChild(li);
  });
}

addTodoBtn.addEventListener("click", () => {
  const title = todoTitleInput.value.trim();
  if (!title) {
    todoTitleInput.focus();
    return;
  }
  todoSeq += 1;
  todos.push({ id: todoSeq, title, done: false, dueDate: todoDueInput.value });
  todoTitleInput.value = "";
  todoDueInput.value = "";
  renderTodoList();
  saveState();
  todoTitleInput.focus();
});

todoTitleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodoBtn.click();
});

/* ---------- 大学公式サイト ---------- */

function updateUniversityButtonLabel() {
  universityBtnLabel.textContent = `${universityLabel || DEFAULT_UNIVERSITY_LABEL}へ`;
}

function openUniversityModal() {
  universityLabelInput.value = universityLabel;
  universityUrlInput.value = universityUrl;
  universityModalOverlay.classList.remove("hidden");
  universityLabelInput.focus();
}

function closeUniversityModal() {
  universityModalOverlay.classList.add("hidden");
}

openUniversityBtn.addEventListener("click", () => {
  if (universityUrl) {
    window.open(universityUrl, "_blank", "noopener");
  } else {
    openUniversityModal();
  }
});

editUniversityBtn.addEventListener("click", openUniversityModal);

universitySaveBtn.addEventListener("click", () => {
  universityLabel = universityLabelInput.value.trim();
  universityUrl = normalizeUrl(universityUrlInput.value);
  updateUniversityButtonLabel();
  saveState();
  closeUniversityModal();
});

universityCancelBtn.addEventListener("click", closeUniversityModal);

universityModalOverlay.addEventListener("click", (e) => {
  if (e.target === universityModalOverlay) closeUniversityModal();
});

universityLabelInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") universitySaveBtn.click();
  if (e.key === "Escape") {
    e.stopPropagation();
    closeUniversityModal();
  }
});

universityUrlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") universitySaveBtn.click();
  if (e.key === "Escape") {
    e.stopPropagation();
    closeUniversityModal();
  }
});

/* ---------- 過去問へのリンク ---------- */

function renderPastExamLinksList() {
  pastExamLinksList.innerHTML = "";

  if (pastExamLinks.length === 0) {
    const li = document.createElement("li");
    li.className = "past-exam-empty";
    li.textContent = "まだ追加されていません";
    pastExamLinksList.appendChild(li);
    return;
  }

  pastExamLinks.forEach((link) => {
    const li = document.createElement("li");
    li.className = "past-exam-item";

    const titleEl = document.createElement("a");
    titleEl.className = "past-exam-title";
    titleEl.textContent = link.name;
    titleEl.href = link.url;
    titleEl.target = "_blank";
    titleEl.rel = "noopener noreferrer";
    li.appendChild(titleEl);

    const removeBtn = document.createElement("button");
    removeBtn.className = "icon-btn";
    removeBtn.title = "削除";
    removeBtn.textContent = "✕";
    removeBtn.addEventListener("click", () => {
      pastExamLinks = pastExamLinks.filter((l) => l.id !== link.id);
      renderPastExamLinksList();
      saveState();
    });
    li.appendChild(removeBtn);

    pastExamLinksList.appendChild(li);
  });
}

function openPastExamLinksModal() {
  renderPastExamLinksList();
  pastExamLinksModalOverlay.classList.remove("hidden");
}

function closePastExamLinksModal() {
  pastExamLinksModalOverlay.classList.add("hidden");
}

openPastExamsBtn.addEventListener("click", openPastExamLinksModal);

addPastExamLinkBtn.addEventListener("click", () => {
  const name = pastExamLinkNameInput.value.trim();
  const url = normalizeUrl(pastExamLinkUrlInput.value);
  if (!name || !url) {
    (name ? pastExamLinkUrlInput : pastExamLinkNameInput).focus();
    return;
  }
  pastExamLinkSeq += 1;
  pastExamLinks.push({ id: pastExamLinkSeq, name, url });
  pastExamLinkNameInput.value = "";
  pastExamLinkUrlInput.value = "";
  renderPastExamLinksList();
  saveState();
  pastExamLinkNameInput.focus();
});

pastExamLinkNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPastExamLinkBtn.click();
});
pastExamLinkUrlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addPastExamLinkBtn.click();
});

pastExamLinksCloseBtn.addEventListener("click", closePastExamLinksModal);

pastExamLinksModalOverlay.addEventListener("click", (e) => {
  if (e.target === pastExamLinksModalOverlay) closePastExamLinksModal();
});

/* ---------- 時間割の保存・一覧 ---------- */

function renderSavedTimetableList() {
  savedTimetableListEl.innerHTML = "";

  if (savedTimetables.length === 0) {
    const li = document.createElement("li");
    li.className = "saved-timetable-empty";
    li.textContent = "保存された時間割はありません";
    savedTimetableListEl.appendChild(li);
    return;
  }

  savedTimetables.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "saved-timetable-item";

    const label = [entry.grade, entry.term].filter(Boolean).join(" ") || "（無題）";

    const labelEl = document.createElement("span");
    labelEl.className = "saved-timetable-label";
    labelEl.textContent = label;
    li.appendChild(labelEl);

    const loadBtn = document.createElement("button");
    loadBtn.className = "btn btn-secondary btn-sm";
    loadBtn.textContent = "読み込む";
    loadBtn.addEventListener("click", () => loadSavedTimetable(entry.id, label));
    li.appendChild(loadBtn);

    const shareBtn = document.createElement("button");
    shareBtn.className = "btn btn-secondary btn-sm";
    shareBtn.textContent = "共有";
    shareBtn.addEventListener("click", () => openShareModal(entry.id));
    li.appendChild(shareBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn";
    deleteBtn.title = "削除";
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", () => {
      if (!window.confirm(`「${label}」を削除しますか？`)) return;
      savedTimetables = savedTimetables.filter((e) => e.id !== entry.id);
      renderSavedTimetableList();
      saveState();
    });
    li.appendChild(deleteBtn);

    savedTimetableListEl.appendChild(li);
  });
}

function loadSavedTimetable(id, label) {
  const entry = savedTimetables.find((e) => e.id === id);
  if (!entry) return;
  if (!window.confirm(`現在の時間割を上書きして「${label}」を読み込みます。よろしいですか？`)) {
    return;
  }

  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, sanitizeClassesMap(entry.classes));
  syncSettings = sanitizeSyncSettings(entry.syncSettings);

  titlePrefix = entry.titlePrefix || "";
  titlePrefixInput.value = titlePrefix;
  resizeTitlePrefixInput();

  renderAllCells();
  refreshExamViews();
  saveState();
}

saveTimetableBtn.addEventListener("click", () => {
  const grade = saveGradeInput.value.trim();
  const term = saveTermInput.value.trim();
  if (!grade && !term) {
    saveGradeInput.focus();
    return;
  }
  savedTimetableSeq += 1;
  savedTimetables.push({
    id: savedTimetableSeq,
    grade,
    term,
    titlePrefix,
    classes: JSON.parse(JSON.stringify(state)),
    syncSettings: JSON.parse(JSON.stringify(syncSettings)),
  });
  saveGradeInput.value = "";
  saveTermInput.value = "";
  renderSavedTimetableList();
  saveState();
});

/* ---------- 時間割の共有・読み込み ---------- */

const SHARE_PARAM = "share";
let shareModalEntryId = null;

function toBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value) {
  let base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function buildShareObject(entry) {
  return {
    type: "my-timetable-share",
    version: 1,
    grade: entry.grade,
    term: entry.term,
    titlePrefix: entry.titlePrefix,
    classes: entry.classes,
    syncSettings: entry.syncSettings,
  };
}

function buildShareUrl(entry) {
  const url = new URL(window.location.href);
  url.hash = "";
  url.search = "";
  url.searchParams.set(SHARE_PARAM, toBase64Url(JSON.stringify(buildShareObject(entry))));
  return url.toString();
}

function openShareModal(entryId) {
  const entry = savedTimetables.find((e) => e.id === entryId);
  if (!entry) return;
  shareModalEntryId = entryId;
  shareUrlOutput.value = buildShareUrl(entry);
  shareTextOutput.value = JSON.stringify(buildShareObject(entry), null, 2);
  shareUrlCopyBtn.textContent = "🔗 URLをコピー";
  shareCopyBtn.textContent = "📋 テキストをコピー";
  shareNativeBtn.classList.toggle("hidden", typeof navigator.share !== "function");
  shareModalOverlay.classList.remove("hidden");
}

function closeShareModal() {
  shareModalOverlay.classList.add("hidden");
  shareModalEntryId = null;
}

async function copyTextToField(field, button, defaultLabel) {
  try {
    await navigator.clipboard.writeText(field.value);
    button.textContent = "コピーしました";
  } catch (e) {
    field.focus();
    field.select();
    try {
      document.execCommand("copy");
      button.textContent = "コピーしました";
    } catch (e2) {
      window.alert("コピーに失敗しました。表示されている内容を選択して手動でコピーしてください。");
      return;
    }
  }
  setTimeout(() => {
    button.textContent = defaultLabel;
  }, 1500);
}

shareNativeBtn.addEventListener("click", async () => {
  const entry = savedTimetables.find((e) => e.id === shareModalEntryId);
  const label = (entry && [entry.grade, entry.term].filter(Boolean).join(" ")) || "時間割";
  try {
    await navigator.share({
      title: `${label}の時間割`,
      text: `${label}の時間割を共有します`,
      url: shareUrlOutput.value,
    });
  } catch (e) {
    // ユーザーがキャンセルした場合などは何もしない
  }
});

shareUrlCopyBtn.addEventListener("click", () => {
  copyTextToField(shareUrlOutput, shareUrlCopyBtn, "🔗 URLをコピー");
});

shareCopyBtn.addEventListener("click", () => {
  copyTextToField(shareTextOutput, shareCopyBtn, "📋 テキストをコピー");
});

shareCloseBtn.addEventListener("click", closeShareModal);

shareModalOverlay.addEventListener("click", (e) => {
  if (e.target === shareModalOverlay) closeShareModal();
});

function addSharedTimetableEntry(parsed) {
  if (!parsed || typeof parsed !== "object" || !parsed.classes || typeof parsed.classes !== "object") {
    window.alert("読み込みに失敗しました。この時間割アプリで共有されたデータではないようです。");
    return false;
  }
  savedTimetableSeq += 1;
  savedTimetables.push({
    id: savedTimetableSeq,
    grade: typeof parsed.grade === "string" ? parsed.grade : "",
    term: typeof parsed.term === "string" ? parsed.term : "",
    titlePrefix: typeof parsed.titlePrefix === "string" ? parsed.titlePrefix : "",
    classes: sanitizeClassesMap(parsed.classes),
    syncSettings: sanitizeSyncSettings(parsed.syncSettings),
  });
  renderSavedTimetableList();
  saveState();
  return true;
}

function extractShareEncodedToken(raw) {
  try {
    const url = new URL(raw);
    const param = url.searchParams.get(SHARE_PARAM);
    if (param) return param;
  } catch (e) {
    // 完全なURLではない（テキストや素のトークンの可能性）
  }
  if (/^[A-Za-z0-9_-]{20,}$/.test(raw)) return raw;
  return null;
}

function importShareData(raw) {
  const trimmed = raw.trim();
  const token = extractShareEncodedToken(trimmed);
  let jsonText = trimmed;

  if (token) {
    try {
      jsonText = fromBase64Url(token);
    } catch (e) {
      jsonText = trimmed;
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(jsonText);
  } catch (e) {
    window.alert("読み込みに失敗しました。共有されたURL・テキスト・ファイルの内容を確認してください。");
    return false;
  }

  if (addSharedTimetableEntry(parsed)) {
    window.alert("「保存した時間割」の一覧に追加しました。読み込むには一覧の「読み込む」を押してください。");
    return true;
  }
  return false;
}

function handleIncomingShareLink() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get(SHARE_PARAM);
  if (!token) return;

  const cleanUrl = window.location.pathname + window.location.hash;
  window.history.replaceState(null, "", cleanUrl);

  let parsed;
  try {
    parsed = JSON.parse(fromBase64Url(token));
  } catch (e) {
    window.alert("共有リンクの読み込みに失敗しました。リンクが正しいかご確認ください。");
    return;
  }

  const label = [parsed.grade, parsed.term].filter(Boolean).join(" ") || "共有された時間割";
  if (!window.confirm(`「${label}」が共有されました。保存した時間割の一覧に追加しますか？`)) {
    return;
  }
  if (addSharedTimetableEntry(parsed)) {
    window.alert(`「${label}」を追加しました。「保存した時間割」の一覧から読み込んでください。`);
  }
}

importTextBtn.addEventListener("click", () => {
  const text = importTextInput.value.trim();
  if (!text) {
    importTextInput.focus();
    return;
  }
  if (importShareData(text)) {
    importTextInput.value = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!universityModalOverlay.classList.contains("hidden")) {
    closeUniversityModal();
    return;
  }
  if (!pastExamLinksModalOverlay.classList.contains("hidden")) {
    closePastExamLinksModal();
    return;
  }
  if (!periodTimeModalOverlay.classList.contains("hidden")) {
    closePeriodTimeModal();
    return;
  }
  if (!syncModalOverlay.classList.contains("hidden")) {
    closeSyncModal();
    return;
  }
  if (!shareModalOverlay.classList.contains("hidden")) {
    closeShareModal();
    return;
  }
  if (!modalOverlay.classList.contains("hidden")) {
    closeModal();
  }
});

/* ---------- 設定 ---------- */

function applyTheme(themeKey) {
  const preset = THEME_PRESETS[themeKey] || THEME_PRESETS[DEFAULT_UI_SETTINGS.themeColor];
  const root = document.documentElement.style;
  root.setProperty("--color-primary", preset.primary);
  root.setProperty("--color-primary-dark", preset.primaryDark);
  root.setProperty("--color-primary-soft", preset.primarySoft);
  root.setProperty("--color-primary-softer", preset.primarySofter);
}

function applyFont(fontKey) {
  const preset = FONT_PRESETS[fontKey] || FONT_PRESETS[DEFAULT_UI_SETTINGS.fontChoice];
  document.documentElement.style.setProperty("--font-main", preset.family);
}

function applyAttendanceSize(size) {
  document.body.dataset.attendanceSize = size;
}

function applyPeriodTimeSize(size) {
  document.body.dataset.periodTimeSize = size;
}

function applyShowIcons(show) {
  document.body.dataset.showIcons = show ? "show" : "hide";
}

function renderThemeSwatches() {
  themeSwatchRow.innerHTML = "";
  Object.keys(THEME_PRESETS).forEach((key) => {
    const preset = THEME_PRESETS[key];
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "theme-swatch" + (uiSettings.themeColor === key ? " active" : "");
    swatch.style.background = preset.primary;
    swatch.title = key;
    swatch.addEventListener("click", () => {
      uiSettings.themeColor = key;
      applyTheme(key);
      renderThemeSwatches();
      saveState();
    });
    themeSwatchRow.appendChild(swatch);
  });
}

function renderFontOptions() {
  fontRadioRow.innerHTML = "";
  Object.keys(FONT_PRESETS).forEach((key) => {
    const preset = FONT_PRESETS[key];
    const label = document.createElement("label");
    label.className = "settings-radio";
    label.style.fontFamily = preset.family;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "font-choice";
    input.value = key;
    input.checked = uiSettings.fontChoice === key;
    input.addEventListener("change", () => {
      if (!input.checked) return;
      uiSettings.fontChoice = key;
      applyFont(key);
      saveState();
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(preset.label));
    fontRadioRow.appendChild(label);
  });
}

function applyAllSettingsToUi() {
  applyTheme(uiSettings.themeColor);
  applyFont(uiSettings.fontChoice);
  applyAttendanceSize(uiSettings.attendanceSize);
  applyPeriodTimeSize(uiSettings.periodTimeSize);
  applyShowIcons(uiSettings.showIcons);
  renderThemeSwatches();
  renderFontOptions();
  timeFormat24Input.checked = uiSettings.timeFormat === "24";
  timeFormat12Input.checked = uiSettings.timeFormat === "12";
  Object.keys(attendanceSizeInputs).forEach((size) => {
    attendanceSizeInputs[size].checked = uiSettings.attendanceSize === size;
  });
  Object.keys(periodTimeSizeInputs).forEach((size) => {
    periodTimeSizeInputs[size].checked = uiSettings.periodTimeSize === size;
  });
  showIconsShowInput.checked = uiSettings.showIcons;
  showIconsHideInput.checked = !uiSettings.showIcons;
}

timeFormat24Input.addEventListener("change", () => {
  if (!timeFormat24Input.checked) return;
  uiSettings.timeFormat = "24";
  renderPeriodTimes();
  refreshExamViews();
  saveState();
});

timeFormat12Input.addEventListener("change", () => {
  if (!timeFormat12Input.checked) return;
  uiSettings.timeFormat = "12";
  renderPeriodTimes();
  refreshExamViews();
  saveState();
});

Object.keys(attendanceSizeInputs).forEach((size) => {
  attendanceSizeInputs[size].addEventListener("change", () => {
    if (!attendanceSizeInputs[size].checked) return;
    uiSettings.attendanceSize = size;
    applyAttendanceSize(size);
    saveState();
  });
});

Object.keys(periodTimeSizeInputs).forEach((size) => {
  periodTimeSizeInputs[size].addEventListener("change", () => {
    if (!periodTimeSizeInputs[size].checked) return;
    uiSettings.periodTimeSize = size;
    applyPeriodTimeSize(size);
    saveState();
  });
});

showIconsShowInput.addEventListener("change", () => {
  if (!showIconsShowInput.checked) return;
  uiSettings.showIcons = true;
  applyShowIcons(true);
  saveState();
});

showIconsHideInput.addEventListener("change", () => {
  if (!showIconsHideInput.checked) return;
  uiSettings.showIcons = false;
  applyShowIcons(false);
  saveState();
});

/* ---------- 初期化 ---------- */

if (!isStorageAvailable()) {
  showStorageWarning();
}

loadState();
titlePrefixInput.value = titlePrefix;
resizeTitlePrefixInput();
updateUniversityButtonLabel();
applyAllSettingsToUi();
buildTable();
renderPeriodTimes();
refreshExamViews();
renderSavedTimetableList();
handleIncomingShareLink();
