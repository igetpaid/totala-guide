const App = {
  currentView: "home",
  currentTier: 1,
  currentTab: "units",
  history: [],
  _unitDetailId: null,
  _scrollPosition: 0,
  _buildTab: "t1",

  init() {
    this.render();
    window.addEventListener("popstate", () => this.goBack());
  },

  navigate(view, params) {
    this._scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    this.history.push({
      view: this.currentView,
      tier: this.currentTier,
      tab: this.currentTab,
      scroll: this._scrollPosition,
      buildTab: this._buildTab
    });

    this.currentView = view;

    if (view === "units") {
      this.currentTab = "units";
      this.currentTier = (params && params.tier) || this.currentTier;
    } else if (view === "buildings") {
      this.currentTab = "buildings";
      this._buildTab = (params && params.tab) || this._buildTab || "t1";
      this.currentTier = (params && params.tier) || this.currentTier;
    } else if (view === "unit-detail") {
      this._unitDetailId = params ? params.unitId : null;
    }

    this.render();
    if (view === "unit-detail") {
      window.scrollTo(0, 0);
    }
  },

  render() {
    const el = document.getElementById("app");
    if (!el) return;

    let content = "";
    switch (this.currentView) {
      case "home":
        content = UI.renderHome();
        break;
      case "units":
        content = UI.renderUnitGrid(this.currentTier);
        break;
      case "buildings":
        content = UI.renderBuildingGrid(this._buildTab || "t1");
        break;
      case "unit-detail":
        content = UI.renderUnitDetail(this._unitDetailId);
        break;
      case "tips":
        content = UI.renderTips();
        break;
      case "faq":
        content = UI.renderFAQ();
        break;
      case "settings":
        content = UI.renderSettings();
        break;
      default:
        content = UI.renderHome();
    }

    content += this.renderBottomNav();
    el.innerHTML = content;

    // Always scroll to top for detail pages and non-list views
    if (this.currentView === "unit-detail" || this.currentView === "tips" || this.currentView === "faq" || this.currentView === "settings") {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  },

  goBack() {
    if (this.history.length === 0) {
      this.currentView = "home";
      this.render();
      return;
    }
    const prev = this.history.pop();
    this.currentView = prev.view;
    this.currentTier = prev.tier;
    this.currentTab = prev.tab;
    if (prev.buildTab) this._buildTab = prev.buildTab;
    this.render();
    if (prev.scroll) {
      requestAnimationFrame(() => window.scrollTo(0, prev.scroll));
    }
  },

  setTier(tier) {
    this.currentTier = tier;
    this.render();
    window.scrollTo(0, 0);
  },

  setTab(tab) {
    this.currentTab = tab;
    this.currentView = tab;
    this.history = [];
    this.render();
    window.scrollTo(0, 0);
  },

  setBuildTab(subtab) {
    this._buildTab = subtab;
    this.render();
    window.scrollTo(0, 0);
  },

  getFontSize() {
    const stored = localStorage.getItem('ta-font-size');
    return stored ? parseInt(stored) : 100;
  },

  changeFontSize(delta) {
    let size = this.getFontSize() + (delta * 10);
    size = Math.max(70, Math.min(150, size));
    localStorage.setItem('ta-font-size', size);
    document.documentElement.style.fontSize = size + '%';
    const display = document.getElementById('font-size-display');
    if (display) display.textContent = size + '%';
  },

  renderBottomNav() {
    const items = [
      { view: "units", icon: "&#9876;", label: "Юниты" },
      { view: "buildings", icon: "&#9881;", label: "Постройки" },
      { view: "tips", icon: "&#128161;", label: "Советы" },
      { view: "faq", icon: "&#10067;", label: "FAQ" }
    ];

    let html = `<nav class="bottom-nav">`;
    for (const item of items) {
      let active = false;
      if (item.view === "units" && this.currentView === "units") active = true;
      if (item.view === "buildings" && this.currentView === "buildings") active = true;
      if (item.view === "tips" && this.currentView === "tips") active = true;
      if (item.view === "faq" && this.currentView === "faq") active = true;

      const cls = active ? "nav-item active" : "nav-item";
      html += `<button class="${cls}" onclick="App.setTab('${item.view}')">
        <span class="nav-icon">${item.icon}</span>
        <span class="nav-label">${item.label}</span>
      </button>`;
    }
    html += `</nav>`;
    return html;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const savedSize = localStorage.getItem('ta-font-size');
  if (savedSize) document.documentElement.style.fontSize = savedSize + '%';
  App.init();
});
