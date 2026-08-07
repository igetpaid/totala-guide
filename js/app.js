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
    const el = document.getElementById("app");
    this._scrollPosition = el ? el.scrollTop : 0;
    
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
      const el = document.getElementById("app");
      if (el) el.scrollTop = 0;
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
    el.scrollTop = 0;
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
      requestAnimationFrame(() => {
        const el = document.getElementById("app");
        if (el) el.scrollTop = prev.scroll;
      });
    }
  },

  setTier(tier) {
    this.currentTier = tier;
    this.render();
    const el = document.getElementById("app");
    if (el) el.scrollTop = 0;
  },

  setTab(tab) {
    this.currentTab = tab;
    this.currentView = tab;
    this.history = [];
    this.render();
    const el = document.getElementById("app");
    if (el) el.scrollTop = 0;
  },

  setBuildTab(subtab) {
    this._buildTab = subtab;
    this.render();
    const el = document.getElementById("app");
    if (el) el.scrollTop = 0;
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
  App.init();
});
