// app.js — Routing and app logic

const App = {
  currentView: "home",
  currentTier: 1,
  currentTab: "units",
  history: [],

  init() {
    this.render();
    window.addEventListener("popstate", () => this.goBack());
  },

  navigate(view, params) {
    this.history.push({
      view: this.currentView,
      tier: this.currentTier,
      tab: this.currentTab
    });

    this.currentView = view;

    if (view === "units") {
      this.currentTab = "units";
      this.currentTier = (params && params.tier) || this.currentTier;
    } else if (view === "buildings") {
      this.currentTab = (params && params.tab) || "t1";
      this.currentTier = (params && params.tier) || this.currentTier;
    } else if (view === "unit-detail") {
      this._unitDetailId = params ? params.unitId : null;
    }

    this.render();
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
        content = UI.renderBuildingGrid(this.currentTab);
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
    window.scrollTo(0, 0);
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
    this.render();
  },

  setTier(tier) {
    this.currentTier = tier;
    this.render();
  },

  setTab(tab) {
    this.currentTab = tab;
    if (tab === 'units') {
      this.currentView = 'units';
    } else if (tab === 'buildings' || tab === 'commander' || tab === 't1' || tab === 't2' || tab === 't3' || tab === 't4') {
      this.currentView = 'buildings';
      if (tab === 'buildings') {
        this.currentTab = 't1';
      }
    } else {
      this.currentView = tab;
    }
    this.history = [];
    this.render();
  },

  setBuildTab(subtab) {
    this.currentTab = subtab;
    this.render();
  },

  renderBottomNav() {
    const items = [
      { view: "units", icon: "&#9876;", label: "Юниты" },
      { view: "t1", icon: "&#9881;", label: "Постройки" },
      { view: "tips", icon: "&#128161;", label: "Советы" },
      { view: "faq", icon: "&#10067;", label: "FAQ" }
    ];

    let html = `<nav class="bottom-nav">`;
    for (const item of items) {
      let active = false;
      if (item.view === "units" && this.currentView === "units") active = true;
      if (item.view === "t1" && this.currentView === "buildings") active = true;
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

document.addEventListener("DOMContentLoaded", () => App.init());
