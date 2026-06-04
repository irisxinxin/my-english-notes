/**
 * 我的英语语料本 · 应用逻辑
 *
 * 视图：
 *   - 主题视图（全部 / 请求帮忙 / 句式骨架 / ...）
 *   - 📅 按日期 — 按学习日期分组
 *   - 🔄 今日复习 — 自动抽取待复习卡片（随机打乱）
 *   - 📊 统计 — 大数字 + 每日柱状图 + 主题分布
 */

const STORAGE_KEY = "english_card_status_v1";

// ===== 状态管理（localStorage）=====
function loadStatus() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveStatus(s) { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
let cardStatus = loadStatus();

// ===== 视图状态 =====
let currentTab = "全部";        // 主题名 / "__date__" / "__review__" / "__stats__"
let currentFilter = "all";
let currentSearch = "";
let chartRange = 7;

const VIEW_DATE = "__date__";
const VIEW_REVIEW = "__review__";
const VIEW_STATS = "__stats__";

// ===== 工具 =====
function getTopics() {
  const seen = new Set();
  const arr = [];
  cardData.forEach(c => {
    if (!seen.has(c.topic)) { seen.add(c.topic); arr.push(c.topic); }
  });
  return arr;
}
function countByTopic(topic) {
  return cardData.filter(c => c.topic === topic).length;
}
function countByStatus(status) {
  return Object.values(cardStatus).filter(s => s === status).length;
}

// ===== Tab 渲染 =====
function renderTabs() {
  const container = document.getElementById("tabs");
  container.innerHTML = "";

  // 主题 Tab：全部 + 各 topic
  container.appendChild(makeTab("全部", "全部", cardData.length));
  getTopics().forEach(t => container.appendChild(makeTab(t, t, countByTopic(t))));

  // 分隔
  const div = document.createElement("div");
  div.className = "tab-divider";
  container.appendChild(div);

  // 特殊视图 Tab
  container.appendChild(makeTab(VIEW_DATE, "📅 按日期", null));
  container.appendChild(makeTab(VIEW_REVIEW, "🔄 今日复习", countByStatus("review")));
  container.appendChild(makeTab(VIEW_STATS, "📊 统计", null));
}

function makeTab(value, label, count) {
  const btn = document.createElement("button");
  btn.className = "tab" + (value === currentTab ? " active" : "");
  const countHTML = (count !== null && count !== undefined)
    ? ` <span class="tab-count">${count}</span>` : "";
  btn.innerHTML = label + countHTML;
  btn.onclick = () => {
    currentTab = value;
    render();
  };
  return btn;
}

// ===== 主渲染 =====
function render() {
  renderTabs();
  renderHeaderStats();

  const isStats = currentTab === VIEW_STATS;
  document.getElementById("toolbar").hidden = isStats || currentTab === VIEW_DATE || currentTab === VIEW_REVIEW;
  document.getElementById("cards").hidden = isStats;
  document.getElementById("statsView").hidden = !isStats;
  document.getElementById("empty").hidden = true;

  if (isStats) {
    renderStatsView();
    return;
  }
  renderCards();
}

// ===== 卡片渲染 =====
function getFilteredCards() {
  return cardData.filter(c => {
    if (currentTab !== "全部" && c.topic !== currentTab) return false;
    const status = cardStatus[c.id] || "new";
    if (currentFilter !== "all" && currentFilter !== status) return false;
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const enText = c.en.replace(/<[^>]+>/g, "").toLowerCase();
      const noteText = (c.note || "").toLowerCase();
      if (!c.zh.toLowerCase().includes(q) && !enText.includes(q) && !noteText.includes(q)) return false;
    }
    return true;
  });
}

function renderCards() {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  if (currentTab === VIEW_DATE) return renderByDate(container);
  if (currentTab === VIEW_REVIEW) return renderReview(container);

  const cards = getFilteredCards();
  if (cards.length === 0) {
    document.getElementById("empty").hidden = false;
    return;
  }
  const grid = document.createElement("div");
  grid.className = "cards-grid";
  cards.forEach(c => grid.appendChild(makeCard(c)));
  container.appendChild(grid);
}

function renderByDate(container) {
  const groups = {};
  cardData.forEach(c => {
    if (!groups[c.date]) groups[c.date] = [];
    groups[c.date].push(c);
  });
  const dates = Object.keys(groups).sort((a, b) => b.localeCompare(a));
  if (dates.length === 0) {
    container.innerHTML = `<div class="empty">还没有学习记录</div>`;
    return;
  }
  dates.forEach(d => {
    const section = document.createElement("div");
    section.className = "group-section";

    const header = document.createElement("div");
    header.className = "group-header";
    header.innerHTML = `<h2>📅 ${d}</h2><span class="group-count">${groups[d].length} 张卡片</span>`;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "cards-grid";
    groups[d].forEach(c => grid.appendChild(makeCard(c)));
    section.appendChild(grid);

    container.appendChild(section);
  });
}

function renderReview(container) {
  const reviewCards = cardData.filter(c => cardStatus[c.id] === "review");

  if (reviewCards.length === 0) {
    container.innerHTML = `
      <div class="review-empty">
        <h2>🎉 今日没有待复习卡片</h2>
        <p>把卡片标记为 "✗ 待复习" 后，会出现在这里</p>
      </div>
    `;
    return;
  }

  // 随机打乱
  const shuffled = [...reviewCards].sort(() => Math.random() - 0.5);

  const banner = document.createElement("div");
  banner.className = "review-banner";
  banner.innerHTML = `
    <div>
      <h2>🔄 今日复习 · ${shuffled.length} 张</h2>
      <p>顺序已随机打乱 · 掌握了点 ✓ 移出复习列表</p>
    </div>
  `;
  container.appendChild(banner);

  const grid = document.createElement("div");
  grid.className = "cards-grid";
  shuffled.forEach(c => grid.appendChild(makeCard(c)));
  container.appendChild(grid);
}

function makeCard(card) {
  const status = cardStatus[card.id] || "new";
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.id = card.id;

  const statusIcon = status === "mastered" ? "✓" : status === "review" ? "✗" : "•";
  const statusClass = status === "mastered" ? "mastered" : status === "review" ? "review" : "";
  const noteHTML = card.note ? `<div class="card-note">💡 ${card.note}</div>` : "";

  div.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">
        <div class="card-meta">
          <span class="card-topic">${card.topic}</span>
          <span class="card-date">${card.date || ""}</span>
        </div>
        <div class="card-text">${card.zh}</div>
        <div class="hint">点击查看英文 →</div>
      </div>
      <div class="card-face card-back">
        <div class="card-meta">
          <span class="card-topic">${card.topic}</span>
          <span class="card-status ${statusClass}">${statusIcon}</span>
        </div>
        <div class="card-text">${card.en}</div>
        ${noteHTML}
        <div class="card-actions">
          <button class="action-btn master ${status === 'mastered' ? 'active' : ''}" data-action="master">✓ 已掌握</button>
          <button class="action-btn review ${status === 'review' ? 'active' : ''}" data-action="review">✗ 待复习</button>
        </div>
      </div>
    </div>
  `;

  div.addEventListener("click", e => {
    if (e.target.closest(".action-btn")) return;
    div.classList.toggle("flipped");
  });
  div.querySelectorAll(".action-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const newStatus = action === "master" ? "mastered" : "review";
      if (cardStatus[card.id] === newStatus) delete cardStatus[card.id];
      else cardStatus[card.id] = newStatus;
      saveStatus(cardStatus);
      render();
    });
  });
  return div;
}

// ===== 顶部统计数字 =====
function renderHeaderStats() {
  document.getElementById("totalCount").textContent = cardData.length;
  document.getElementById("masteredCount").textContent = countByStatus("mastered");
  document.getElementById("reviewCount").textContent = countByStatus("review");
}

// ===== 统计视图 =====
function renderStatsView() {
  // 大数字面板
  document.getElementById("sv_total").textContent = cardData.length;
  document.getElementById("sv_mastered").textContent = countByStatus("mastered");
  document.getElementById("sv_review").textContent = countByStatus("review");
  const days = new Set(cardData.map(c => c.date).filter(Boolean));
  document.getElementById("sv_days").textContent = days.size;

  renderDailyChart(chartRange);
  renderTopicBars();
}

function renderDailyChart(range) {
  const chart = document.getElementById("dailyChart");
  chart.innerHTML = "";

  // 最近 N 天的日期序列
  const today = new Date();
  const days = [];
  for (let i = range - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    days.push(iso);
  }

  const counts = days.map(d => cardData.filter(c => c.date === d).length);
  const maxCount = Math.max(...counts, 1);

  const todayISO = new Date().toISOString().slice(0, 10);
  days.forEach((d, i) => {
    const isEmpty = counts[i] === 0;
    const widthPct = isEmpty ? 0 : Math.max(3, Math.round(counts[i] / maxCount * 100));
    const isToday = d === todayISO;
    const row = document.createElement("div");
    row.className = "day-row" + (isToday ? " today" : "");
    row.innerHTML = `
      <span class="day-label">${d.slice(5)}${isToday ? ' · 今天' : ''}</span>
      <div class="day-track">
        <div class="day-fill ${isEmpty ? 'empty' : ''}" style="width: ${widthPct}%"></div>
      </div>
      <span class="day-value">${counts[i] || "·"}</span>
    `;
    chart.appendChild(row);
  });
}

function renderTopicBars() {
  const container = document.getElementById("topicBars");
  container.innerHTML = "";
  const topics = getTopics();
  const max = Math.max(...topics.map(t => countByTopic(t)), 1);
  topics.forEach(t => {
    const count = countByTopic(t);
    const widthPct = (count / max * 100).toFixed(0);
    const row = document.createElement("div");
    row.className = "topic-bar-row";
    row.innerHTML = `
      <span class="topic-bar-label">${t}</span>
      <div class="topic-bar-track"><div class="topic-bar-fill" style="width: ${widthPct}%"></div></div>
      <span class="topic-bar-value">${count}</span>
    `;
    container.appendChild(row);
  });
}

// ===== 事件绑定 =====
document.getElementById("search").addEventListener("input", e => {
  currentSearch = e.target.value.trim();
  renderCards();
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

document.getElementById("chartToggle").addEventListener("click", e => {
  if (!e.target.matches(".chart-btn")) return;
  document.querySelectorAll(".chart-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  chartRange = parseInt(e.target.dataset.range, 10);
  renderDailyChart(chartRange);
});

// ===== 启动 =====
render();
