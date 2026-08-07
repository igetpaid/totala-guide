// ui.js — Rendering functions

const UNIT_IMAGES = {
  arm_commander: "ARMCOM.png",
  arm_peewee: "ARMPW.png",
  arm_rocko: "ARMROCK.png",
  arm_hammer: "ARMHAM.png",
  arm_jethro: "ARMJETH.png",
  arm_flea: "ARMFLEA.png",
  arm_invader: "ARMVADER.png",
  arm_warrior: "ARMWAR.png",
  arm_marky: "ARMMARK.png",
  arm_ckbot: "ARMCK.png",
  arm_cv: "ARMCV.png",
  arm_jeffy: "ARMFAV.png",
  arm_flash: "ARMFLASH.png",
  arm_stumpy: "ARMSTUMP.png",
  arm_tosser: "ARMLART.png",
  arm_samson: "ARMSAM.png",
  arm_podger: "ARMMLV.png",
  arm_javelin: "ARMJAV.png",
  arm_ca: "ARMCA.png",
  arm_peeper: "ARMPEEP.png",
  arm_freedom_fighter: "ARMFIG.png",
  arm_thunder: "ARMTHUND.png",
  arm_zephyr: "ARMDPL.png",
  arm_atlas: "ARMATLAS.png",
  arm_cship: "ARMCS.png",
  arm_skeeter: "ARMPT.png",
  arm_lurker: "ARMSUB.png",
  arm_vanguard: "ARMFRIG.png",
  arm_crusader: "ARMROY.png",
  arm_mariner: "ARMAABOAT.png",
  arm_gremlin: "ARMMLS.png",
  arm_hulk: "ARMTSHIP.png",
  arm_chover: "ARMCH.png",
  arm_skimmer: "ARMSH.png",
  arm_zapper: "ARMLH.png",
  arm_wombat: "ARMMH.png",
  arm_anaconda: "ARMANAC.png",
  arm_swatter: "ARMAH.png",
  arm_wisp: "ARMNH.png",
  arm_bear: "ARMTHOVR.png",
  arm_llt: "ARMLLT.png",
  arm_fllt: "ARMFLLT.png",
  arm_sentry: "ARMFRT.png",
  arm_defender: "ARMRL.png",
  arm_sentinel: "ARMHLT.png",
  arm_guardian: "ARMGUARD.png",
  arm_stingray: "ARMFHLT.png",
  arm_trident: "ARMFGUARD.png",
  arm_harpoon: "ARMTL.png",
  arm_tidal: "ARMTIDE.png",
  arm_wind: "ARMWIN.png",
  arm_ewstore: "ARMESTOR.png",
  arm_mstorage: "ARMMSTOR.png",
  arm_mex: "ARMMEX.png",
  arm_mm: "ARMMAKR.png",
  arm_dteeth: "ARMDRAG.png",
  arm_radar: "ARMRAD.png",
  arm_repair: "ARMASP.png",
  arm_solar: "ARMSOLAR.png",
  arm_geo: "ARMGEO.png",
  arm_fradar: "ARMFRAD.png",
  arm_uw_estore: "ARMUWES.png",
  arm_uw_mstore: "ARMUWMS.png",
  arm_uw_mex: "ARMUWMEX.png",
  arm_uw_mm: "ARMFMKR.png",
  arm_sea_teeth: "ARMFDRAG.png",
  arm_sonar: "ARMSONAR.png",
  arm_ckbot2: "ARMACK.png",
  arm_zipper: "ARMFAST.png",
  arm_zeus: "ARMZEUS.png",
  arm_spider: "ARMSPID.png",
  arm_fido: "ARMFIDO.png",
  arm_partisan: "ARMAABOT.png",
  arm_infiltrator: "ARMSPY.png",
  arm_eraser: "ARMASER.png",
  arm_maverick: "ARMMAV.png",
  arm_shooter: "ARMSNIPE.png",
  arm_pelican: "ARMAMPH.png",
  arm_ackbot: "ARMACK.png",
  arm_acv: "ARMACV.png",
  arm_aea: "ARMACA.png",
  arm_acsub: "ARMACSUB.png",
  arm_jammer: "ARMJAM.png",
  arm_freedom: "ARMFIG.png",
  arm_commander2: "ARMDECOM.png",
  arm_luger: "ARMMART.png",
  arm_phalanx: "ARMYORK.png",
  arm_scarab: "ARMSCAB.png",
  arm_spot: "ARMSPOT.png",
  arm_skycrane: "ARMMUAT.png",
  arm_archer: "ARMAAS.png",
  arm_ahover: "ARMACH.png",
  arm_ucbot: "ARMECK.png",
  arm_cerberus2: "ARMCERB.png",
  arm_ucv: "ARMECV.png",
  arm_uca: "ARMECA.png",
  arm_ucus: "ARMECS.png",
  arm_fibber3: "ARMSCRAM.png",
  arm_uchover: "ARMECH.png",
  arm_oracle: "ARMHOMNI.png",
  arm_umme: "ARMUWMAS.png",
  arm_rfac: "ARMTECH.png",
  arm_mme: "ARMMAS.png",
  arm_supremacy: "ARMFFLAG.png",
  arm_liberator: "ARMHFLAG.png",
  arm_armada: "ARMUSCAR.png",
  arm_abyssal: "ARMUSUB.png",
  arm_apocalypse: "ARMNUKEBOMBER.png",
  arm_econ: "ARMUCH.png",
  arm_panopticon: "ARMZIG.png",
  arm_max_intel: "ALL_OMNI.png",
  arm_triumph: "ARMFLAG.png",
  arm_custodian: "ARMVCAR.png",
  arm_cv2: "ARMACV.png",
  arm_seer: "ARMSEER.png",
  arm_bulldog: "ARMBULL.png",
  arm_merl: "ARMMERL.png",
  arm_panther: "ARMLATNK.png",
  arm_penetrator: "ARMMANNI.png",
  arm_triton: "ARMCROC.png",
  arm_ca2: "ARMACA.png",
  arm_eagle: "ARMAWAC.png",
  arm_hawk: "ARMHAWK.png",
  arm_phoenix: "ARMPNIX.png",
  arm_brawler: "ARMBRAWL.png",
  arm_lancet: "ARMLANCE.png",
  arm_sky_crane: "ARMMUAT.png",
  arm_csub2: "ARMACSUB.png",
  arm_piranha: "ARMSUBK.png",
  arm_conqueror: "ARMCRUS.png",
  arm_ranger: "ARMMSHIP.png",
  arm_stalker: "ARMSSUB.png",
  arm_colossus: "ARMCARRY.png",
  arm_fibber: "ARMSCRAM.png",
  arm_millenium: "ARMBATS.png",
  arm_chover2: "ARMACH.png",
  arm_hailstorm: "ARMHARL.png",
  arm_rebel: "ARMHTANK.png",
  arm_medusa: "ARMHSTUN.png",
  arm_tsunami: "ARMHART.png",
  arm_whirlwind: "ARMHFLAK.png",
  arm_angler: "ARMHCAR.png",
  arm_concealer: "ARMHJAM.png",
  arm_flakker: "ARMFLAK.png",
  arm_annihilator: "ARMANNI.png",
  arm_bulwark: "ARMARL.png",
  arm_slingshot: "ARMAAA.png",
  arm_orion: "ARMORION.png",
  arm_ambusher: "ARMAMB.png",
  arm_moray: "ARMATL.png",
  arm_fusion: "ARMFUS.png",
  arm_rgen: "ARMGEN.png",
  arm_adv_estore: "ARMSES.png",
  arm_moho: "ARMMOHO.png",
  arm_moho_mm: "ARMMMKR.png",
  arm_big_bertha: "ARMBRTHA.png",
  arm_repulsor: "ARMEMP.png",
  arm_protector: "ARMAMD.png",
  arm_veil: "ARMJAMMER.png",
  arm_adv_sonar: "ARMASON.png",
  arm_uconstructor: "ARMECK.png",
  arm_marauder: "ARMHSPID.png",
  arm_cerberus_mk2: "ARMCERB.png",
  arm_gorgon: "ARMASPID.png",
  arm_nova: "ARMNOVA.png",
  arm_raptor: "ARMMECH.png",
  arm_link: "ARMMOBGG.png",
  arm_rector: "ARMFARK.png",
  arm_insurgent: "ARMCRAWL.png",
  arm_uconstructor_v: "ARMECV.png",
  arm_recon: "ARMAFAV.png",
  arm_centurion: "ARMMBT.png",
  arm_chimera: "ARMLGTNK.png",
  arm_demolisher: "ARMSIEGE.png",
  arm_scorpion: "ARMASAM.png",
  arm_expedition: "ARMVCAR.png",
  arm_ark: "ARMTSUB.png",
  arm_empyrean: "ARMMCV.png",
  arm_uconstructor_a: "ARMECA.png",
  arm_illusion: "ARMSR71.png",
  arm_vertigo: "ARMSFOIL.png",
  arm_aurora: "ARMSBOMBER.png",
  arm_tempest: "ARMSGS.png",
  arm_tornado: "ARMT3SEAP.png",
  arm_nomad: "ARMNOMAD.png",
  arm_hercules: "ARMLIFT.png",
  arm_stratus: "ARMWING.png",
  arm_uconstructor_n: "ARMECS.png",
  arm_riptide: "ARMAPT.png",
  arm_arclight: "ARMASW.png",
  arm_deluge: "ARMNSUB.png",
  arm_lancer: "ARMXSHIP.png",
  arm_torrent: "ARMAACRUS.png",
  arm_atlantis: "ARMSCAR.png",
  arm_victory: "ARMDREAD.png",
  arm_uconstructor_h: "ARMECH.png",
  arm_oracle_hover: "ARMHOMNI.png",
  arm_paladin: "ARMHANNI.png",
  arm_renegade: "ARMHROY.png",
  arm_champion: "ARMHCRUS.png",
  arm_monsoon: "ARMHAAT.png",
  arm_aeon: "ARMHBATS.png",
  arm_whiplash: "ARMSMB.png",
  arm_warden: "ARMSTUN.png",
  arm_underwater_mantle: "ARMUWMAS.png",
  arm_research: "ARMTECH.png",
  arm_mantle: "ARMMAS.png",
  arm_aegis: "ARMSHGEN.png",
  arm_tantalus: "ARMOMNI.png",
  arm_vulcan: "ARMVULC.png",
  arm_tidal: "ARMTIDE.png",
  arm_wind: "ARMWIN.png",
  arm_solar: "ARMSOLAR.png",
  arm_ewstore: "ARMESTOR.png",
  arm_mstorage: "ARMMSTOR.png",
  arm_mex: "ARMMEX.png",
  arm_mm: "ARMMAKR.png",
  arm_geo: "ARMGEO.png",
  arm_radar: "ARMRAD.png",
  arm_repair: "ARMASP.png",
  arm_dteeth: "ARMDRAG.png",
  arm_fradar: "ARMFRAD.png",
  arm_uw_estore: "ARMUWES.png",
  arm_uw_mstore: "ARMUWMS.png",
  arm_uw_mex: "ARMUWMEX.png",
  arm_uw_mm: "ARMFMKR.png",
  arm_sea_teeth: "ARMFDRAG.png",
  arm_sonar: "ARMSONAR.png",
  arm_llt: "ARMLLT.png",
  arm_fllt: "ARMFLLT.png",
  arm_sentry: "ARMFRT.png",
  arm_defender: "ARMRL.png",
  arm_sentinel: "ARMHLT.png",
  arm_guardian: "ARMGUARD.png",
  arm_stingray: "ARMFHLT.png",
  arm_trident: "ARMFGUARD.png",
  arm_harpoon: "ARMTL.png",
  arm_fusion: "ARMFUS.png",
  arm_rgen: "ARMGEN.png",
  arm_adv_estore: "ARMSES.png",
  arm_moho: "ARMMOHO.png",
  arm_moho_mm: "ARMMMKR.png",
  arm_adv_radar: "ARMARAD.png",
  arm_flakker: "ARMFLAK.png",
  arm_annihilator: "ARMANNI.png",
  arm_bulwark: "ARMARL.png",
  arm_slingshot: "ARMAAA.png",
  arm_orion_t2: "ARMORION.png",
  arm_ambusher: "ARMAMB.png",
  arm_moray: "ARMATL.png",
  arm_veil: "ARMJAMMER.png",
  arm_protector: "ARMAMD.png",
  arm_adv_sonar: "ARMASON.png",
  arm_sonar_jammer: "ARMSONJAM.png",
  arm_repulsor: "ARMEMP.png",
  arm_big_bertha: "ARMBRTHA.png",
  arm_uw_fusion: "ARMUWFUS.png",
  arm_uw_powerplant: "ARMUWMFUS.png",
  arm_uw_combined: "ARMUWCS.png",
  arm_uw_moho: "ARMUWMOHO.png",
  arm_uw_moho_mm: "ARMUWMMM.png",
  arm_fort: "ARMFORT.png",
  arm_umme: "ARMUWMAS.png",
  arm_rfac: "ARMTECH.png",
  arm_mme: "ARMMAS.png",
  arm_aegis: "ARMSHGEN.png",
  arm_tantalus: "ARMOMNI.png",
  arm_vulcan: "ARMVULC.png"
};

const CATEGORY_COLORS = {
  "Kbot": "#4fc3f7",
  "Vehicle": "#81c784",
  "Aircraft": "#ffb74d",
  "Navy": "#7986cb",
  "Hovercraft": "#e57373",
  "Defensive Structures": "#f06292",
  "Buildings": "#9575cd",
  "Other": "#bdbdbd"
};

const BUILDER_IMAGES = {
  "Kbot Lab": "ARMLAB.png",
  "Vehicle Plant": "ARMVP.png",
  "Aircraft Plant": "ARMAP.png",
  "Shipyard": "ARMSY.png",
  "Hovercraft Platform": "ARMHP.png",
  "Adv. Kbot Lab": "ARMALAB.png",
  "Adv. Vehicle Plant": "ARMAVP.png",
  "Adv. Aircraft Plant": "ARMAAP.png",
  "Adv. Shipyard": "ARMASY.png",
  "Adv. Hovercraft Platform": "ARMAHP.png",
  "Ultra Kbot Assembler": "ARMELAB.png",
  "Ultra Vehicle Plant": "ARMGANT.png",
  "Ultra Aircraft Hangar": "ARMFAB.png",
  "Capital Shipyard": "ARMESY.png",
  "Ultra Hovercraft Lab": "ARMEHP.png",
  "Fleet Shipyard": "ARMSSY.png",
  "Construction KBot": "ARMCK.png",
  "Construction Vehicle": "ARMCV.png",
  "Construction Aircraft": "ARMCA.png",
  "Construction Ship": "ARMCS.png",
  "Construction Hovercraft": "ARMCH.png",
  "Adv. Construction KBot": "ARMACK.png",
  "Adv. Construction Vehicle": "ARMACV.png",
  "Adv. Construction Aircraft": "ARMACA.png",
  "Adv. Construction Ship": "ARMACSUB.png",
  "Adv. Construction Hovercraft": "ARMACH.png",
  "Ultra Construction Kbot": "ARMECK.png",
  "Ultra Construction Vehicle": "ARMECV.png",
  "Ultra Construction Aircraft": "ARMECA.png",
  "Ultra Construction Ship": "ARMECS.png",
  "Ultra Construction Hovercraft": "ARMECH.png",
  "Exp. Construction Vehicle": "ARMVCAR.png",
  "Exp. Construction Hovercraft": "ARMUCH.png",
  "Exp. Unit Fabricator": "ARMGANT.png",
  "Research Facility": "ARMTECH.png",
  "Defense Facility T3": "ARMSTUN.png",
};

const UI = {
  renderHome() {
    return `
      <div class="home">
        <div class="home-header">
          <h1 class="home-title">TA:<span class="accent">ESCALATION</span></h1>
          <div class="home-badge">ARM</div>
        </div>
        <div class="home-menu">
          <button class="menu-btn" onclick="App.navigate('units')">
            <span class="menu-icon">&#9876;</span>
            <span>Юниты</span>
          </button>
          <button class="menu-btn" onclick="App.navigate('buildings')">
            <span class="menu-icon">&#9881;</span>
            <span>Постройки</span>
          </button>
          <button class="menu-btn" onclick="App.navigate('tips')">
            <span class="menu-icon">&#128161;</span>
            <span>Советы</span>
          </button>
          <button class="menu-btn" onclick="App.navigate('faq')">
            <span class="menu-icon">&#10067;</span>
            <span>FAQ</span>
          </button>
          <button class="menu-btn" onclick="App.navigate('settings')">
            <span class="menu-icon">&#9881;</span>
            <span>Настройки</span>
          </button>
        </div>
        <div class="font-controls">
          <button class="font-btn" onclick="App.changeFontSize(-1)">A-</button>
          <span class="font-size-label" id="font-size-display">${App.getFontSize()}%</span>
          <button class="font-btn" onclick="App.changeFontSize(1)">A+</button>
        </div>
      </div>
    `;
  },

  renderUnitGrid(tier) {
    const groups = this.getUnitsByCategory(tier);
    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>Юниты — T${tier}</h2>
    </div>`;
    html += this.renderTierTabs(tier, "units");
  
    // Category dropdown — sticky right-aligned
    const categories = ["Kbot", "Vehicle", "Aircraft", "Navy", "Hovercraft"];
    const presentCats = categories.filter(c => groups[c] && groups[c].length > 0);
    if (presentCats.length > 1) {
      html += `<div class="cat-fab" id="cat-fab">
        <button class="cat-fab-btn" onclick="document.getElementById('cat-menu').classList.toggle('open')">
          Тип &#9660;
        </button>
        <div id="cat-menu" class="cat-dropdown-menu">
          ${presentCats.map(c => {
            const color = this.getCategoryColor(c);
            return `<div class="cat-dropdown-item" style="color:${color}" onclick="document.getElementById('cat-menu').classList.remove('open');document.getElementById('cat-${c.toLowerCase()}').scrollIntoView({behavior:'smooth'})">${c}</div>`;
          }).join('')}
        </div>
      </div>`;
    }

    for (const cat of categories) {
      const units = groups[cat];
      if (!units || units.length === 0) continue;
      const color = this.getCategoryColor(cat);
      html += `<div id="cat-${cat.toLowerCase()}" class="category-header" style="color:${color}">${cat}</div>`;
      html += `<div class="card-grid">`;
      for (const u of units) {
        const img = this.getUnitImage(u);
        const imgTag = img
          ? `<img src="unitpics/${img}" alt="${u.name}" class="card-icon" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="card-icon-placeholder" style="display:none">${u.name.charAt(0)}</div>`
          : `<div class="card-icon-placeholder">${u.name.charAt(0)}</div>`;
        html += `
          <div class="card" onclick="App.navigate('unit-detail',{unitId:'${u.id}'})">
            ${imgTag}
            <div class="card-name">${u.name}</div>
            <div class="card-desc">${u.role || ""}</div>
          </div>`;
      }
      html += `</div>`;
    }
    return html;
  },

  renderBuildingGrid(builderType) {
    const groups = this.getBuildingsByBuilder(builderType);
    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>Постройки</h2>
    </div>`;
    html += this.renderBuildTabs(builderType);

    const categories = ["Defensive Structures", "Buildings", "Economy", "Other"];
    const presentCats = categories.filter(c => groups[c] && groups[c].length > 0);
    if (presentCats.length > 1) {
      html += `<div class="cat-fab" id="cat-fab">
        <button class="cat-fab-btn" onclick="document.getElementById('cat-menu').classList.toggle('open')">
          Тип &#9660;
        </button>
        <div id="cat-menu" class="cat-dropdown-menu">
          ${presentCats.map(c => {
            const color = this.getCategoryColor(c);
            return `<div class="cat-dropdown-item" style="color:${color}" onclick="document.getElementById('cat-menu').classList.remove('open');document.getElementById('cat-${c.toLowerCase().replace(/ /g, '-')}').scrollIntoView({behavior:'smooth'})">${c}</div>`;
          }).join('')}
        </div>
      </div>`;
    }

    for (const cat of categories) {
      const units = groups[cat];
      if (!units || units.length === 0) continue;
      const color = this.getCategoryColor(cat);
      const catId = cat.toLowerCase().replace(/ /g, '-');
      html += `<div id="cat-${catId}" class="category-header" style="color:${color}">${cat}</div>`;
      html += `<div class="card-grid">`;
      for (const u of units) {
        const img = this.getUnitImage(u);
        const imgTag = img
          ? `<img src="unitpics/${img}" alt="${u.name}" class="card-icon" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="card-icon-placeholder" style="display:none">${u.name.charAt(0)}</div>`
          : `<div class="card-icon-placeholder">${u.name.charAt(0)}</div>`;
        html += `
          <div class="card" onclick="App.navigate('unit-detail',{unitId:'${u.id}'})">
            ${imgTag}
            <div class="card-name">${u.name}</div>
            <div class="card-desc">${u.role || ""}</div>
          </div>`;
      }
      html += `</div>`;
    }
    return html;
  },

  renderBuildTabs(activeTab) {
    const tabs = [
      { id: 't1', label: 'T1' },
      { id: 't2', label: 'T2' },
      { id: 't3', label: 'T3' },
      { id: 't4', label: 'T4' }
    ];
    let html = `<div class="tier-tabs">`;
    for (const tab of tabs) {
      const cls = tab.id === activeTab ? "tier-tab active" : "tier-tab";
      html += `<button class="${cls}" onclick="App.setBuildTab('${tab.id}')">${tab.label}</button>`;
    }
    html += `</div>`;
    return html;
  },

  renderUnitDetail(unitId) {
    const unit = this._findUnit(unitId);
    if (!unit) return `<div class="page-header"><button class="back-btn" onclick="App.goBack()">&#8592;</button><h2>Не найдено</h2></div>`;

    const img = this.getUnitImage(unit);
    const imgTag = img
      ? `<img src="unitpics/${img}" alt="${unit.name}" class="detail-icon" onerror="this.style.display='none'">`
      : "";

    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>${unit.name}</h2>
    </div>
    <div class="detail-page">
      <div class="detail-top">${imgTag}
        <div class="detail-info">
          <div class="detail-role">${unit.role || ""}</div>
          <div class="tier-badge">T${unit.tier || "?"}</div>
        </div>
      </div>

      <div class="detail-section">
        <h3>Стоимость</h3><span style="display:inline-flex;align-items:center;gap:4px;color:#f97316;font-size:14px;font-weight:500;margin-left:8px"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#f97316;color:#fff;font-size:12px;font-weight:700">!</span> Примерные значения</span>
        <div class="cost-row">
          <span>Metal: <b>${(unit.cost && unit.cost.metal) || 0}</b></span>
          <span>Energy: <b>${(unit.cost && unit.cost.energy) || 0}</b></span>
          <span>Build Time: <b>${unit.buildTime || 0}</b></span>
        </div>
      </div>

      <div class="detail-section">
        <h3>Характеристики</h3><span style="display:inline-flex;align-items:center;gap:4px;color:#f97316;font-size:14px;font-weight:500;margin-left:8px"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#f97316;color:#fff;font-size:12px;font-weight:700">!</span> Примерные значения</span>
        <div class="stat-row">
          <span>HP: <b>${unit.hp || 0}</b></span>
          <span>Speed: <b>${unit.speed || 0}</b></span>
          <span>Range: <b>${unit.range || 0}</b></span>
          <span>Damage: <b>${unit.damage || 0}</b></span>
          <span>Weapon: <b>${unit.weaponType || "-"}</b></span>
        </div>
      </div>`;

    if (unit.description) {
      html += `<div class="detail-section"><h3>Описание</h3><p>${unit.description}</p></div>`;
    }

    if (unit.strengths && unit.strengths.length) {
      html += `<div class="detail-section"><h3>Сильные стороны</h3>${this.renderTags(unit.strengths, "strength")}</div>`;
    }
    if (unit.weaknesses && unit.weaknesses.length) {
      html += `<div class="detail-section"><h3>Слабые стороны</h3>${this.renderTags(unit.weaknesses, "weakness")}</div>`;
    }
    if (unit.builtAt) {
      const builderImg = BUILDER_IMAGES[unit.builtAt];
      const builderImgTag = builderImg ? `<img src="unitpics/${builderImg}" style="width:100px;height:100px;object-fit:cover;border-radius:8px;border:2px solid var(--border);margin-bottom:8px;display:block" onerror="this.style.display='none'">` : '';
      html += `<div class="detail-section"><h3>Строится в</h3>${builderImgTag}<p>${unit.builtAt}</p></div>`;
    }
    if (unit.abilities && unit.abilities.length) {
      html += `<div class="detail-section"><h3>Особые способности</h3>${this.renderTags(unit.abilities, "special")}</div>`;
    } else if (unit.specialAbilities && unit.specialAbilities.length) {
      html += `<div class="detail-section"><h3>Особые способности</h3>${this.renderTags(unit.specialAbilities, "special")}</div>`;
    }

    const terms = this.getRelevantTerms(unit);
    if (terms.length) {
      html += `<div class="detail-section"><h3>Термины</h3><div class="terms-list">`;
      for (const t of terms) {
        html += `<div class="term"><b>${t.abbr}</b> — ${t.full}</div>`;
      }
      html += `</div></div>`;
    }

    html += `</div>`;
    return html;
  },

  renderTips() {
    const tips = [
      { title: "Начало игры", text: "Сначала построй Metal Extractor и Energy. Не забудь про Radar." },
      { title: "Экономика", text: "Metal = основной ресурс. Energy нужна для стрельбы и щитов. Балансируй." },
      { title: "Когда строить T2", text: "Когда есть стабильный поток Metal/Energy и оборона." },
      { title: "Оборона vs Атака", text: "Не только башни! Мобильные юниты важнее." },
      { title: "AA (Anti-Air)", text: "Всегда имей AA юнитов. Авиация убивает быстро." },
      { title: "Adjacency Bonus", text: "Ставь фабрики рядом с Fusion Reactor для бонуса." },
      { title: "Guard", text: "Используй G (Guard) чтобы юниты чинили друг друга." },
      { title: "Сбор обломков", text: "Используй Flea/Wisp/Scavenger для сбора Metal с обломков." }
    ];

    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>Советы</h2>
    </div>
    <div class="tips-page">`;
    for (let i = 0; i < tips.length; i++) {
      html += `<div class="tip-card">
        <div class="tip-number">${i + 1}</div>
        <div class="tip-content">
          <div class="tip-title">${tips[i].title}</div>
          <div class="tip-text">${tips[i].text}</div>
        </div>
      </div>`;
    }
    html += `</div>`;
    return html;
  },

  renderFAQ() {
    const items = [
      { q: "Как автоматически убирать деревья?", a: "Нужно выбрать летающего рабочего, нажать Patrol и отправить его в нужное место. Он уберет все деревья по пути. Проверено только на летающих рабочих." },
      { q: "Как закрепить юнита за другим (Guard)?", a: "Выдели первый юнит, нажми Guard (защищать), нажми на второй юнит. Первый будет ходить вокруг второго, защищать и по возможности чинить его." },
      { q: "Что делает Adjacency Bonus?", a: "Здание рядом с источником энергии получает бонус к производству." },
      { q: "Как работают щиты?", a: "Щиты (Shield Generator) поглощают урон. Self-Heal восстанавливает их." },
      { q: "Как работает телепорт?", a: "Teleporter Kbot или Galactic Gates перемещают юнитов на огромные расстояния." },
      { q: "Что такое D-Gun?", a: "Disintegrator Gun командора. Мгновенно уничтожает любой юнит. Очень дорого." },
      { q: "Чем борется Krogoth?", a: "Raptor (ARM) или специализированные T3 юниты. Лучше \u2014 уничтожить до постройки." },
      { q: "Зачем нужен Cloak/Stealth?", a: "Cloak делает невидимым глазами (тратит энергию). Stealth \u2014 для радара." }
    ];

    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>FAQ</h2>
    </div>
    <div class="faq-page">`;
    for (let i = 0; i < items.length; i++) {
      html += `<div class="faq-item" onclick="this.classList.toggle('open')">
        <div class="faq-question">${items[i].q}</div>
        <div class="faq-answer">${items[i].a}</div>
      </div>`;
    }
    html += `</div>`;
    return html;
  },

  renderSettings() {
    return `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>Настройки</h2>
    </div>
    <div class="settings-page">
      <div class="setting-item">
        <span>Фракция</span>
        <div class="setting-value active">ARM</div>
      </div>
      <div class="setting-note">Core фракция будет добавлена позже.</div>
    </div>`;
  },

  renderTierTabs(activeTier, type) {
    const route = type === "buildings" ? "buildings" : "units";
    let html = `<div class="tier-tabs">`;
    for (let t = 1; t <= 4; t++) {
      const cls = t === activeTier ? "tier-tab active" : "tier-tab";
      html += `<button class="${cls}" onclick="App.setTier(${t})">T${t}</button>`;
    }
    html += `</div>`;
    return html;
  },

  getUnitsByCategory(tier) {
    const data = (typeof ARM_DATA !== "undefined") ? ARM_DATA : {};
    const units = data.units || [];
    const result = {};
    for (const u of units) {
      if (u.tier === tier && u.category !== "Defense" && u.category !== "Building") {
        const cat = u.category || "Other";
        if (!result[cat]) result[cat] = [];
        result[cat].push(u);
      }
    }
    return result;
  },

  getBuildingsByBuilder(builderType) {
    const data = (typeof ARM_DATA !== "undefined") ? ARM_DATA : {};
    const units = data.units || [];
    const result = {};

    for (const u of units) {
      if (u.category !== "Defense" && u.category !== "Building") continue;

      const builtAt = (u.builtAt || "").toLowerCase();
      const tier = u.tier || 0;
      let matches = false;

      switch (builderType) {
        case 't1':
          matches = tier === 1;
          break;
        case 't2':
          matches = tier === 2;
          break;
        case 't3':
          matches = tier === 3;
          break;
        case 't4':
          matches = tier === 4;
          break;
      }

      if (matches) {
        const cat = u.category === "Defense" ? "Defensive Structures" : "Buildings";
        if (!result[cat]) result[cat] = [];
        result[cat].push(u);
      }
    }

    return result;
  },

  getCategoryColor(category) {
    return CATEGORY_COLORS[category] || "#bdbdbd";
  },

  getUnitImage(unit) {
    return UNIT_IMAGES[unit.id] || null;
  },

  renderTags(items, type) {
    if (!items || !items.length) return "";
    const cls = `tag tag-${type}`;
    let html = `<div class="tag-list">`;
    for (const item of items) {
      html += `<span class="${cls}">${item}</span>`;
    }
    html += `</div>`;
    return html;
  },

  getRelevantTerms(unit) {
    const data = (typeof ARM_DATA !== "undefined") ? ARM_DATA : {};
    const termsObj = data.terms || {};
    const text = [
      unit.description || "",
      unit.role || "",
      (unit.abilities || unit.specialAbilities || []).join(" "),
      (unit.strengths || []).join(" "),
      (unit.weaponType || "")
    ].join(" ").toLowerCase();

    const found = [];
    const seen = new Set();
    for (const [abbr, full] of Object.entries(termsObj)) {
      const key = abbr.toLowerCase();
      if (!seen.has(key) && text.includes(key)) {
        seen.add(key);
        found.push({ abbr, full });
      }
    }
    return found;
  },

  _findUnit(unitId) {
    const data = (typeof ARM_DATA !== "undefined") ? ARM_DATA : {};
    const units = data.units || [];
    return units.find(u => u.id === unitId) || null;
  }
};
