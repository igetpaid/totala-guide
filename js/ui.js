// ui.js — Rendering functions

// ARM unit images (FBI name -> filename)
const ARM_UNIT_IMAGES = {
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

// COR unit images (FBI name -> filename)
const COR_UNIT_IMAGES = {
  cor_com: "CORCOM.png",
  cor_decom: "CORDECOM.png",
  cor_ck: "CORCK.png",
  cor_ack: "CORACK.png",
  cor_cv: "CORCV.png",
  cor_acv: "CORACV.png",
  cor_ca: "CORCA.png",
  cor_aca: "CORACA.png",
  cor_cs: "CORCS.png",
  cor_acsub: "CORACSUB.png",
  cor_ch: "CORCH.png",
  cor_ak: "CORAK.png",
  cor_crash: "CORCRASH.png",
  cor_fav: "CORFAV.png",
  cor_gator: "CORGATOR.png",
  cor_levlr: "CORLEVLR.png",
  cor_storm: "CORSTORM.png",
  cor_thud: "CORTHUD.png",
  cor_voyr: "CORVOYR.png",
  cor_mist: "CORMIST.png",
  cor_raid: "CORRAID.png",
  cor_sent: "CORSENT.png",
  cor_snap: "CORSNAP.png",
  cor_vrad: "CORVRAD.png",
  cor_vroc: "CORVROC.png",
  cor_reap: "CORREAP.png",
  cor_mart: "CORMART.png",
  cor_hrk: "CORHRK.png",
  cor_fast: "CORFAST.png",
  cor_can: "CORCAN.png",
  cor_amph: "CORAMPH.png",
  cor_seal: "CORSEAL.png",
  cor_mort: "CORMORT.png",
  cor_pyro: "CORPYRO.png",
  cor_spy: "CORSPY.png",
  cor_necro: "CORNECRO.png",
  cor_spec: "CORSPEC.png",
  cor_doom: "CORDOOM.png",
  cor_sumo: "CORSUMO.png",
  cor_krog: "CORKROG.png",
  cor_gol: "CORGOL.png",
  cor_eter: "CORETER.png",
  cor_ah: "CORAH.png",
  cor_mh: "CORMH.png",
  cor_sh: "CORSH.png",
  cor_thovr: "CORTHROVR.png",
  cor_veng: "CORVENG.png",
  cor_fink: "CORFINK.png",
  cor_shad: "CORSHAD.png",
  cor_ape: "CORAPE.png",
  cor_hurc: "CORHURC.png",
  cor_vamp: "CORVAMP.png",
  cor_valk: "CORVALK.png",
  cor_sfig: "CORSFIG.png",
  cor_titan: "CORTITAN.png",
  cor_seap: "CORSEAP.png",
  cor_roy: "CORROY.png",
  cor_crus: "CORCRUS.png",
  cor_bats: "CORBATS.png",
  cor_mship: "CORMSHIP.png",
  cor_arch: "CORARCH.png",
  cor_sub: "CORSUB.png",
  cor_ssub: "CORSSUB.png",
  cor_shark: "CORSHARK.png",
  cor_csa: "CORCSA.png",
  cor_tship: "CORTSHIP.png",
  cor_pt: "CORPT.png",
  cor_carry: "CORCARRY.png",
  cor_sjam: "CORSJAM.png",
  cor_hunt: "CORHUNT.png",
  cor_awac: "CORAWAC.png",
  cor_llt: "CORLLT.png",
  cor_hlt: "CORHLT.png",
  cor_rl: "CORRL.png",
  cor_frt: "CORFRT.png",
  cor_fhlt: "CORFHLT.png",
  cor_flak: "CORFLAK.png",
  cor_pun: "CORPUN.png",
  cor_toast: "CORTOAST.png",
  cor_vipe: "CORVIPE.png",
  cor_plas: "CORPLAS.png",
  cor_tl: "CORTL.png",
  cor_drag: "CORDRAG.png",
  cor_fdrag: "CORFDRAG.png",
  cor_fort: "CORFORT.png",
  cor_fmd: "CORFMD.png",
  cor_buzz: "CORBUZZ.png",
  cor_int: "CORINT.png",
  cor_silo: "CORSILO.png",
  cor_tron: "CORTRON.png",
  cor_gate: "CORGATE.png",
  cor_mex: "CORMEX.png",
  cor_uwmex: "CORUWMEX.png",
  cor_estor: "CORESTOR.png",
  cor_mstor: "CORMSTOR.png",
  cor_uwes: "CORUWES.png",
  cor_uwms: "CORUWMS.png",
  cor_solar: "CORSOLAR.png",
  cor_win: "CORWIN.png",
  cor_tide: "CORTIDE.png",
  cor_geo: "CORGE.png",
  cor_fus: "CORFUS.png",
  cor_uwfus: "CORUWFUS.png",
  cor_makr: "CORMAKR.png",
  cor_mmkr: "CORMMKR.png",
  cor_moho: "CORMOHO.png",
  cor_fmkr: "CORFMKR.png",
  cor_rad: "CORRAD.png",
  cor_arad: "CORARAD.png",
  cor_sonar: "CORSONAR.png",
  cor_ason: "CORASON.png",
  cor_asp: "CORASP.png",
  cor_sjam: "CORSJAM.png",
  cor_lab: "CORLAB.png",
  cor_alab: "CORALAB.png",
  cor_vp: "CORVP.png",
  cor_avp: "CORAVP.png",
  cor_ap: "CORAP.png",
  cor_aap: "CORAAP.png",
  cor_sy: "CORSY.png",
  cor_asy: "CORASY.png",
  cor_hp: "CORHP.png",
  cor_gant: "CORGANT.png",
  cor_plat: "CORPLAT.png",
  cor_ah: "CORAH.png",
  cor_roach: "CORROACH.png",
  cor_ink: "CORINK.png",
  cor_veng: "CORVENG.png",
  cor_slingshot: "CORSLING.png",
  cor_sling: "CORSLING.png"
};

// Unified image lookup
const ALL_UNIT_IMAGES = Object.assign({}, ARM_UNIT_IMAGES, COR_UNIT_IMAGES);

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
  // COR builder images
  "Commander (начальный юнит)": "CORCOM.png",
  "Commander (Decoy)": "CORDECOM.png",
};

// COR-specific builder images (same names, different faction images)
const COR_BUILDER_IMAGES = {
  "Kbot Lab": "CORLAB.png",
  "Vehicle Plant": "CORVP.png",
  "Aircraft Plant": "CORAP.png",
  "Shipyard": "CORSY.png",
  "Hovercraft Platform": "CORHP.png",
  "Adv. Kbot Lab": "CORALAB.png",
  "Adv. Vehicle Plant": "CORAVP.png",
  "Adv. Aircraft Plant": "CORAAP.png",
  "Adv. Shipyard": "CORASY.png",
  "Adv. Hovercraft Platform": "CORHP.png",
  "Ultra Kbot Gantry": "CORGANT.png",
  "Seaplane Platform": "CORPLAT.png",
  "Construction KBot": "CORCK.png",
  "Construction Vehicle": "CORCV.png",
  "Construction Aircraft": "CORCA.png",
  "Construction Ship": "CORCS.png",
  "Construction Hovercraft": "CORCH.png",
  "Adv. Construction KBot": "CORACK.png",
  "Adv. Construction Vehicle": "CORACV.png",
  "Adv. Construction Aircraft": "CORACA.png",
  "Adv. Construction Ship": "CORACSUB.png",
  "Adv. Construction Hovercraft": "CORCH.png",
};

const UI = {
  renderHome() {
    const faction = App.faction;
    const armCls = faction === 'arm' ? 'faction-btn-home active' : 'faction-btn-home';
    const corCls = faction === 'cor' ? 'faction-btn-home active' : 'faction-btn-home';
    return `
      <div class="home">
        <div class="home-header">
          <h1 class="home-title">TA:<span class="accent">ESCALATION</span></h1>
          <div class="faction-switcher-home">
            <button class="${armCls}" onclick="App.setFaction('arm')">ARM</button>
            <button class="${corCls}" onclick="App.setFaction('cor')">CORE</button>
          </div>
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
            ${(u.tags || []).length > 0 ? `<div class="card-tags">${(u.tags || []).slice(0, 3).map(t => '<span class="unit-tag">' + t + '</span>').join('')}</div>` : ''}
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
            ${(u.tags || []).length > 0 ? `<div class="card-tags">${(u.tags || []).slice(0, 3).map(t => '<span class="unit-tag">' + t + '</span>').join('')}</div>` : ''}
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

      ${(() => {
        const tags = unit.tags || [];
        if (tags.length > 0) {
          return `<div class="detail-section">
            <h3>Теги</h3>
            <div class="tag-list">
              ${tags.map(t => '<span class="unit-tag">' + t + '</span>').join('')}
            </div>
          </div>`;
        }
        return '';
      })()}

      <div class="detail-section">
        <h3>Стоимость</h3>${this.renderSourceBadge(unit.sourceCost)}
        <div class="cost-row">
          <span>Metal: <b>${(unit.cost && unit.cost.metal) ? unit.cost.metal : "-"}</b></span>
          <span>Energy: <b>${(unit.cost && unit.cost.energy) ? unit.cost.energy : "-"}</b></span>
          <span>Build Time: <b>${unit.buildTime ? unit.buildTime : "-"}</b></span>
        </div>
      </div>

      <div class="detail-section">
        <h3>Характеристики</h3>${this.renderSourceBadge(unit.sourceStats)}
        <div class="stat-row">
          <span>HP: <b>${unit.hp ? unit.hp : "-"}</b></span>
          <span>Speed: <b>${unit.speed ? unit.speed : "-"}</b></span>
        </div>
      </div>`;

    // Weapon section — separate block with per-weapon details
    const weapons = unit.weaponDetails || [];
    if (weapons.length > 0 && (unit.damage > 0 || unit.sourceWeapons === 'fbi' || unit.sourceWeapons === 'wiki')) {
      html += `<div class="detail-section"><h3>Оружие</h3>${this.renderSourceBadge(unit.sourceWeapons)}`;
      for (const w of weapons) {
        const dps = w.reload > 0 ? ((w.damage * (w.burst || 1)) / w.reload).toFixed(1) : "0";
        html += `
          <div style="padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="font-size:15px;font-weight:600;color:var(--yellow)">${w.id}</div>
            <div style="font-size:14px;color:var(--text-secondary);margin:4px 0">${w.name || ""}</div>
            <div class="stat-row" style="flex-wrap:wrap;gap:8px">
              <span>Урон: <b>${w.damage}</b></span>
              <span>Дальность: <b>${w.range}</b></span>
              <span>ДПС: <b>${dps}</b></span>
              ${w.reload > 0 ? `<span>Перезарядка: <b>${w.reload}с</b></span>` : ''}
              ${w.aoe > 0 ? `<span>Радиус: <b>${w.aoe}</b></span>` : ''}
              ${w.burst > 1 ? `<span>Очередь: <b>${w.burst}</b></span>` : ''}
            </div>
          </div>`;
      }
      html += `</div>`;
    } else if (unit.weaponType && unit.weaponType !== "None" && unit.damage > 0) {
      // Fallback for units with weaponType but no weaponDetails
      html += `<div class="detail-section"><h3>Оружие</h3>
        <div class="stat-row">
          <span>Тип: <b>${unit.weaponType}</b></span>
          <span>Урон: <b>${unit.damage || 0}</b></span>
          <span>Дальность: <b>${unit.range || 0}</b></span>
        </div>
      </div>`;
    }

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
      const faction = (typeof App !== "undefined" && App.faction) || "arm";
      const builderImgs = faction === "cor" ? COR_BUILDER_IMAGES : BUILDER_IMAGES;
      const allBuilderImgs = Object.assign({}, BUILDER_IMAGES, COR_BUILDER_IMAGES);
      const builderImg = allBuilderImgs[unit.builtAt] || builderImgs[unit.builtAt] || BUILDER_IMAGES[unit.builtAt];
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

  renderSourceBadge(source) {
    const badges = {
      'fbi': '<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:rgba(74,222,128,0.12);border:1px solid rgba(74,222,128,0.25);font-size:12px;font-weight:600;color:#4ade80;margin-left:8px" title="Файлы игры (100%)">&#128190; ИГРА</span>',
      'wiki': '<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:rgba(96,165,250,0.12);border:1px solid rgba(96,165,250,0.25);font-size:12px;font-weight:600;color:#60a5fa;margin-left:8px" title="taesc.tauniverse.com (старая версия)">TAESC</span>',
      'ai': '<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:rgba(248,113,113,0.12);border:1px solid rgba(248,113,113,0.25);font-size:12px;font-weight:600;color:#f87171;margin-left:8px" title="Нет данных">&#10005; НЕТ ДАННЫХ</span>'
    };
    return badges[source] || badges['ai'];
  },

  renderTips(subPage) {
    if (!subPage || subPage === "menu") {
      return this.renderTipsMenu();
    } else if (subPage === "general") {
      return this.renderTipsGeneral();
    } else if (subPage === "economy") {
      return this.renderTipsEconomy();
    } else if (subPage === "combat") {
      return this.renderTipsCombat();
    }
    return this.renderTipsMenu();
  },

  renderTipsMenu() {
    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>Советы</h2>
    </div>
    <div class="tips-page">`;
    html += `<div class="menu-btn" onclick="App.navigate('tips',{sub:'general'})" style="margin-bottom:10px">
      <span class="menu-icon">&#128220;</span><span>Общие советы</span>
    </div>`;
    html += `<div class="menu-btn" onclick="App.navigate('tips',{sub:'economy'})" style="margin-bottom:10px">
      <span class="menu-icon">&#128176;</span><span>Экономика</span>
    </div>`;
    html += `<div class="menu-btn" onclick="App.navigate('tips',{sub:'combat'})" style="margin-bottom:10px">
      <span class="menu-icon">&#9876;</span><span>Бой и тактика</span>
    </div>`;
    html += `</div>`;
    return html;
  },

  renderTipsGeneral() {
    const tips = [
      { title: "Начало игры", text: "Построй Metal Extractor и Energy. Не забудь про Radar." },
      { title: "AA (Anti-Air)", text: "Всегда имей AA юнитов. Авиация убивает быстро." },
      { title: "Adjacency Bonus", text: "Ставь фабрики рядом с Fusion Reactor для бонуса." },
      { title: "Guard", text: "Используй G (Guard) чтобы юниты чинили друг друга." },
      { title: "Сбор обломков", text: "Используй Flea/Wisp/Scavenger для сбора Metal с обломков." },
      { title: "Разведка", text: "Отправляй разведчиков регулярно. Знай, где враг." }
    ];
    return this.renderTipsList("Общие советы", tips);
  },

  renderTipsEconomy() {
    const tips = [
      { title: "1. Энергетика (+300 E)", text: "Построй несколько солнечных панелей или ветряных мельниц, чтобы выйти в +300 Energy. Это минимальный запуск экономики." },
      { title: "2. Самолётный завод", text: "Построй самолётный завод (Aircraft Plant)." },
      { title: "3. Командир на заводе", text: "Закрепи Commander за заводом. Нажми на командира, затем Move, затем на завод. Таким образом самолёты будут строиться быстрее." },
      { title: "4. Разведчик + рабочие", text: "Сделай самолёт-разведчик и поставь в очередь побольше самолётов-рабочих (Construction Aircraft)." },
      { title: "5. Рабочий строит панели", text: "Как только сделался рабочий, дай ему команду строить 15-25 солнечных панелей. Чтобы было быстрее, можно с помощью Move добавить к нему в помощь другие самолёты. Либо помогать командиром, но в таком случае нужно точечно помогать строить каждую солнечную панель. Наземные войска не могут следовать за воздушными через Move." },
      { title: "6. Разведка", text: "Как появится свободное время — отправляй разведчика. Можно управлять им вручную. А можно проще: задать один пункт назначения и проверить его через несколько секунд. Если самолёт не выжил — там враг." },
      { title: "7. Металл", text: "К этому моменту обычно начинает заканчиваться металл. Самое время построить около 20 экстракторов первого уровня. Начиная с самых богатых и близко расположенных жил." },
      { title: "8. Баланс", text: "Продолжаем строить до тех пор, пока добыча энергии и металла не станет превышать расходы." },
      { title: "9. Приоритеты на следующем этапе:", text: "• Оборона от первых атак\n• Завод второго уровня\n• Создание небольшой армии" }
    ];
    return this.renderTipsList("Экономика", tips);
  },

  renderTipsCombat() {
    const tips = [
      { title: "Когда строить T2", text: "Когда есть стабильный поток Metal/Energy и оборона." },
      { title: "Оборона vs Атака", text: "Не только башни! Мобильные юниты важнее." },
      { title: "Роль AA", text: "Авиация решает исход боя. Без ПВО проиграешь." },
      { title: "D-Gun", text: "У командора есть D-Gun — оружие мгновенного уничтожения. Используй в крайнем случае." }
    ];
    return this.renderTipsList("Бой и тактика", tips);
  },

  renderTipsList(title, tips) {
    let html = `<div class="page-header">
      <button class="back-btn" onclick="App.navigate('tips')">&#8592;</button>
      <h2>${title}</h2>
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
    const faction = (typeof App !== "undefined" && App.faction) || "arm";
    return `<div class="page-header">
      <button class="back-btn" onclick="App.goBack()">&#8592;</button>
      <h2>Настройки</h2>
    </div>
    <div class="settings-page">
      <div class="setting-item">
        <span>Фракция</span>
        <div>
          <button onclick="App.setFaction('arm')" class="faction-btn ${faction === 'arm' ? 'active' : ''}">ARM</button>
          <button onclick="App.setFaction('cor')" class="faction-btn ${faction === 'cor' ? 'active' : ''}">CORE</button>
        </div>
      </div>
      <div class="setting-note">Переключение между фракциями ARM и CORE.</div>
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
    const data = (typeof FACTIONS !== "undefined" && App.faction) ? (FACTIONS[App.faction] || FACTIONS.arm) : (typeof ARM_DATA !== "undefined" ? ARM_DATA : {});
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
    const data = (typeof FACTIONS !== "undefined" && App.faction) ? (FACTIONS[App.faction] || FACTIONS.arm) : (typeof ARM_DATA !== "undefined" ? ARM_DATA : {});
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
    return ALL_UNIT_IMAGES[unit.id] || null;
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
    const data = (typeof FACTIONS !== "undefined" && App.faction) ? (FACTIONS[App.faction] || FACTIONS.arm) : (typeof ARM_DATA !== "undefined" ? ARM_DATA : {});
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
    const data = (typeof FACTIONS !== "undefined" && App.faction) ? (FACTIONS[App.faction] || FACTIONS.arm) : (typeof ARM_DATA !== "undefined" ? ARM_DATA : {});
    const units = data.units || [];
    return units.find(u => u.id === unitId) || null;
  }
};
