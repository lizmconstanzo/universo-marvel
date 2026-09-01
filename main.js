/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const PHASES = {
  phase1: "Fase 1", phase2: "Fase 2", phase3: "Fase 3",
  phase4: "Fase 4", phase5: "Fase 5", phase6: "Fase 6"
};

const MOVIES = {
  // --- SAGA DEL INFINITO Y FASES CLÁSICAS ---
  iron_man:       {t:"Iron Man", y:2008, ph:"phase1", min:126, req:[]},
  hulk:           {t:"El Increíble Hulk", y:2008, ph:"phase1", min:112, req:[]},
  iron_man2:      {t:"Iron Man 2", y:2010, ph:"phase1", min:124, req:["iron_man"]},
  thor:           {t:"Thor", y:2011, ph:"phase1", min:115, req:[]},
  cap1:           {t:"Capitán América: El Primer Vengador", y:2011, ph:"phase1", min:124, req:[]},
  avengers1:      {t:"Los Vengadores", y:2012, ph:"phase1", min:143, req:["iron_man2","thor","cap1"]},

  iron_man3:      {t:"Iron Man 3", y:2013, ph:"phase2", min:130, req:["avengers1"]},
  thor2:          {t:"Thor: Un Mundo Oscuro", y:2013, ph:"phase2", min:112, req:["avengers1"]},
  cap2:           {t:"Capitán América: El Soldado de Invierno", y:2014, ph:"phase2", min:136, req:["avengers1"]},
  gotg1:          {t:"Guardianes de la Galaxia", y:2014, ph:"phase2", min:121, req:[]},
  avengers2:      {t:"Vengadores: La Era de Ultrón", y:2015, ph:"phase2", min:141, req:["iron_man3","thor2","cap2"]},
  antman:         {t:"Ant-Man", y:2015, ph:"phase2", min:117, req:["avengers2"]},

  cap3:           {t:"Capitán América: Civil War", y:2016, ph:"phase3", min:147, req:["avengers2","antman"]},
  black_widow:    {t:"Black Widow", y:2021, ph:"phase4", min:134, req:["cap3"]},
  blackpanther:   {t:"Black Panther", y:2018, ph:"phase3", min:134, req:["cap3"]},
  spiderman_hc:   {t:"Spider-Man: Homecoming", y:2017, ph:"phase3", min:133, req:["cap3"]},
  dr_strange:     {t:"Doctor Strange", y:2016, ph:"phase3", min:115, req:[]},
  thor3:          {t:"Thor: Ragnarok", y:2017, ph:"phase3", min:130, req:["thor2"]},
  antman2:        {t:"Ant-Man y la Avispa", y:2018, ph:"phase3", min:118, req:["cap3"]},
  avengers_iw:    {t:"Vengadores: Infinity War", y:2018, ph:"phase3", min:149, req:["thor3","blackpanther","spiderman_hc","gotg1","dr_strange"]},
  captain_marvel: {t:"Capitana Marvel", y:2019, ph:"phase3", min:124, req:[]},
  avengers_end:   {t:"Vengadores: Endgame", y:2019, ph:"phase3", min:181, req:["avengers_iw","captain_marvel","antman2"]},
  gotg2:          {t:"Guardianes de la Galaxia Vol. 2", y:2017, ph:"phase2", min:136, req:["gotg1"]},

  // --- DISNEY+ / FASE 4 INICIAL ---
  loki_s1:        {t:"Loki – Temporada 1", y:2021, ph:"phase4", min:300, req:["avengers_end"], serie:true},
  wandavision:    {t:"WandaVision", y:2021, ph:"phase4", min:300, req:["avengers_end"], serie:true},
  fatws:          {t:"The Falcon and the Winter Soldier", y:2021, ph:"phase4", min:300, req:["avengers_end"], serie:true},
  shang_chi:      {t:"Shang-Chi y la Leyenda de los Diez Anillos", y:2021, ph:"phase4", min:132, req:["avengers_end"]},
  eternals:       {t:"Eternals", y:2021, ph:"phase4", min:156, req:["avengers_end"]},
  spiderman_ffh:  {t:"Spider-Man: Lejos de Casa", y:2019, ph:"phase3", min:129, req:["avengers_end"]},

  // --- SONY SPIDER-MAN UNIVERSO (TRADICIONAL) ---
  spiderman_02:   {t:"Spider-Man (2002)", y:2002, ph:"phase1", min:121, req:[]},
  spiderman_04:   {t:"Spider-Man 2", y:2004, ph:"phase2", min:127, req:["spiderman_02"]},
  spiderman_07:   {t:"Spider-Man 3", y:2007, ph:"phase2", min:139, req:["spiderman_04"]},
  tasm_1:         {t:"The Amazing Spider-Man", y:2012, ph:"phase1", min:136, req:[]},
  tasm_2:         {t:"The Amazing Spider-Man 2", y:2014, ph:"phase2", min:142, req:["tasm_1"]},

  // --- MULTIVERSE & FASE 4/5 CONTINUACIÓN ---
  spiderman_nwh:  {t:"Spider-Man: No Way Home", y:2021, ph:"phase4", min:148, req:["spiderman_ffh","loki_s1","spiderman_07","tasm_2"]},
  hawkeye:        {t:"Hawkeye", y:2021, ph:"phase4", min:300, req:["avengers_end"], serie:true},
  moon_knight:    {t:"Moon Knight", y:2022, ph:"phase4", min:300, req:[], serie:true},
  dr_strange2:    {t:"Doctor Strange en el Multiverso de la Locura", y:2022, ph:"phase4", min:126, req:["spiderman_nwh","loki_s1"]},
  ms_marvel:      {t:"Ms. Marvel", y:2022, ph:"phase4", min:300, req:[], serie:true},
  thor_love:      {t:"Thor: Amor y Trueno", y:2022, ph:"phase4", min:119, req:["thor3"]},
  she_hulk:       {t:"She-Hulk", y:2022, ph:"phase4", min:300, req:[], serie:true},
  blackpanther_wf:{t:"Black Panther: Wakanda Forever", y:2022, ph:"phase4", min:161, req:["blackpanther"]},

  // --- X-MEN UNIVERSO ---
  xmen_first:     {t:"X-Men: First Class", y:2011, ph:"phase1", min:132, req:[]},
  xmen_1:         {t:"X-Men", y:2000, ph:"phase1", min:104, req:[]},
  xmen_2:         {t:"X2: X-Men United", y:2003, ph:"phase1", min:134, req:["xmen_1"]},
  xmen_3:         {t:"X-Men: The Last Stand", y:2006, ph:"phase1", min:104, req:["xmen_2"]},
  xmen_origins:   {t:"X-Men Origins: Wolverine", y:2009, ph:"phase1", min:107, req:[]},
  the_wolverine:  {t:"The Wolverine", y:2013, ph:"phase2", min:126, req:["xmen_3"]},
  xmen_days:      {t:"X-Men: Days of Future Past", y:2014, ph:"phase2", min:131, req:["xmen_first","the_wolverine"]},
  xmen_apocalypse:{t:"X-Men: Apocalypse", y:2016, ph:"phase3", min:144, req:["xmen_days"]},
  dark_phoenix:   {t:"Dark Phoenix", y:2019, ph:"phase3", min:113, req:["xmen_apocalypse"]},
  logan:          {t:"Logan", y:2017, ph:"phase3", min:137, req:["the_wolverine"]},

  // --- DEADPOOL ---
  deadpool_1:     {t:"Deadpool", y:2016, ph:"phase3", min:108, req:[]},
  deadpool_2:     {t:"Deadpool 2", y:2018, ph:"phase3", min:119, req:["deadpool_1"]},

  // --- SONY'S SPIDER-MAN VILLAIN UNIVERSE ---
  venom_1:        {t:"Venom", y:2018, ph:"phase3", min:112, req:[]},
  venom_2:        {t:"Venom: Let There Be Carnage", y:2021, ph:"phase4", min:97, req:["venom_1"]},
  morbius:        {t:"Morbius", y:2022, ph:"phase4", min:104, req:[]},
  madame_web:     {t:"Madame Web", y:2024, ph:"phase5", min:116, req:[], optional:true},
  kraven:         {t:"Kraven the Hunter", y:2024, ph:"phase5", min:120, req:[], optional:true},
  venom_3:        {t:"Venom: The Last Dance", y:2024, ph:"phase5", min:110, req:["venom_2"]},

  // --- LEGACY MARVEL ---
  blade_1:        {t:"Blade", y:1998, ph:"phase1", min:120, req:[]},
  blade_2:        {t:"Blade II", y:2002, ph:"phase1", min:117, req:["blade_1"]},
  blade_trinity:  {t:"Blade: Trinity", y:2004, ph:"phase1", min:113, req:["blade_2"]},
  ff_05:          {t:"Fantastic Four (2005)", y:2005, ph:"phase1", min:106, req:[]},
  ff_07:          {t:"Fantastic Four: Rise of the Silver Surfer", y:2007, ph:"phase1", min:92, req:["ff_05"]},
  ghost_rider:    {t:"Ghost Rider", y:2007, ph:"phase1", min:110, req:[]},
  ghost_rider_2:  {t:"Ghost Rider: Spirit of Vengeance", y:2011, ph:"phase1", min:95, req:["ghost_rider"]},
  hulk_03:        {t:"Hulk (2003)", y:2003, ph:"phase1", min:138, req:[]},
  daredevil_03:   {t:"Daredevil (2003)", y:2003, ph:"phase1", min:103, req:[]},
  elektra:        {t:"Elektra", y:2005, ph:"phase1", min:97, req:["daredevil_03"]},
  punisher_04:    {t:"The Punisher (2004)", y:2004, ph:"phase1", min:124, req:[]},

  // --- BACK TO THE MCU & NETFLIX DAREDEVIL ---
  secret_invasion:{t:"Secret Invasion", y:2023, ph:"phase5", min:300, req:["avengers_end"], serie:true},
  antman3:        {t:"Ant-Man y la Avispa: Quantumania", y:2023, ph:"phase5", min:125, req:["dr_strange2"]},
  gotg3:          {t:"Guardianes de la Galaxia Vol. 3", y:2023, ph:"phase5", min:150, req:["gotg2"]},
  loki_s2:        {t:"Loki – Temporada 2", y:2023, ph:"phase5", min:300, req:["loki_s1","antman3"], serie:true},
  marvels:        {t:"Los Marvels", y:2023, ph:"phase5", min:105, req:["captain_marvel","shang_chi"]},
  echo:           {t:"Echo", y:2024, ph:"phase5", min:300, req:["hawkeye"], serie:true},
  agatha:         {t:"Agatha All Along", y:2024, ph:"phase5", min:300, req:["wandavision"], serie:true},

  daredevil_s1:   {t:"Daredevil – Season 1", y:2015, ph:"phase2", min:600, req:[], serie:true},
  daredevil_s2:   {t:"Daredevil – Season 2", y:2016, ph:"phase3", min:600, req:["daredevil_s1"], serie:true},
  defenders:      {t:"The Defenders", y:2017, ph:"phase3", min:350, req:["daredevil_s2"], serie:true},
  daredevil_s3:   {t:"Daredevil – Season 3", y:2018, ph:"phase3", min:600, req:["defenders"], serie:true},
  daredevil_ba:   {t:"Daredevil: Born Again", y:2025, ph:"phase5", min:350, req:["daredevil_s3"], serie:true},
  ironheart:      {t:"Ironheart", y:2025, ph:"phase5", min:300, req:["blackpanther_wf"], serie:true},

  // --- THE ROAD TO DOOMSDAY ---
  xmen_97:        {t:"X-Men '97", y:2024, ph:"phase5", min:300, req:[], serie:true, optional:true},
  deadpool_wolv:  {t:"Deadpool & Wolverine", y:2024, ph:"phase5", min:128, req:["loki_s2","xmen_days","deadpool_2"]},
  cap_brave:      {t:"Captain America: Brave New World", y:2025, ph:"phase5", min:120, req:["fatws"]},
  thunderbolts:   {t:"Thunderbolts*", y:2025, ph:"phase5", min:120, req:["blackpanther_wf"]},
  ff_steps:       {t:"The Fantastic Four: First Steps", y:2025, ph:"phase5", min:120, req:[]},
  spiderman_bnd:  {t:"Spider-Man: Brand New Day", y:2026, ph:"phase6", min:120, req:["spiderman_nwh"]},
  avengers_encore:{t:"Vengadores: Endgame (Encore)", y:2019, ph:"phase3", min:181, req:["avengers_end"]},
  doomsday:       {t:"Vengadores: Doomsday", y:2026, ph:"phase6", min:150, req:["deadpool_wolv","marvels","blackpanther_wf"], upcoming:true},
  secret_wars:    {t:"Vengadores: Secret Wars", y:2027, ph:"phase6", min:150, req:["doomsday"], upcoming:true}
};

const ROUTES = [
  {
    id: "infinity",
    name: "Saga del Infinito",
    tagline: "El camino clásico: de Iron Man a Endgame, en orden de estreno.",
    ids: ["iron_man","hulk","iron_man2","thor","cap1","avengers1","iron_man3","thor2","cap2","gotg1","avengers2","antman","cap3","dr_strange","gotg2","spiderman_hc","thor3","blackpanther","avengers_iw","antman2","captain_marvel","avengers_end","spiderman_ffh"]
  },
  {
    id: "xmen",
    name: "Universo X-Men",
    tagline: "La cronología completa de los mutantes, desde First Class hasta Logan.",
    ids: ["xmen_first","xmen_1","xmen_2","xmen_3","xmen_origins","the_wolverine","xmen_days","xmen_apocalypse","dark_phoenix","logan"]
  },
  {
    id: "spider_universe",
    name: "Universo Spider-Man (Sony)",
    tagline: "Las trilogías clásicas, The Amazing Spider-Man y el universo de villanos.",
    ids: ["spiderman_02","spiderman_04","spiderman_07","tasm_1","tasm_2","venom_1","venom_2","morbius","madame_web","kraven","venom_3"]
  },
  {
    id: "daredevil_saga",
    name: "Saga Netflix & Daredevil",
    tagline: "El rincón más oscuro de Nueva York antes de Born Again.",
    ids: ["daredevil_s1","daredevil_s2","defenders","daredevil_s3","echo","daredevil_ba"]
  },
  {
    id: "doomsday",
    name: "Camino a Doomsday",
    tagline: "Multiverso, variantes y preparativos para las nuevas películas de los Vengadores.",
    ids: ["avengers_end","loki_s1","spiderman_nwh","dr_strange2","antman3","loki_s2","deadpool_wolv","marvels","blackpanther_wf","doomsday","secret_wars"]
  },
  {
    id: "legacy",
    name: "Marvel Legacy (Pre-MCU)",
    tagline: "Las películas de Marvel de antes del universo compartido: Blade, Hulk, Daredevil, los 4 Fantásticos y más.",
    ids: ["blade_1","blade_2","hulk_03","daredevil_03","punisher_04","blade_trinity","elektra","ff_05","ghost_rider","ff_07","ghost_rider_2"]
  }
];

const FILTERS = [
  {key:"all",      label:"Todas"},
  {key:"movie",    label:"Películas"},
  {key:"serie",    label:"Series"},
  {key:"upcoming", label:"Próximamente"},
  {key:"watched",  label:"Vistas"},
  {key:"unlocked", label:"Desbloqueadas"},
  {key:"locked",   label:"Bloqueadas"},
];

/* ---------------------------------------------------------
   STATE
--------------------------------------------------------- */
let watched = new Set();
let ratings = {}; // { movieId: 1-5 }
let currentRoute = null;
let storageReady = false;
let searchQuery = "";
let filterKey = "all";
let searchFocused = false;

async function loadAll(){
  try{
    const [w, r] = await Promise.all([
      window.storage.get('mcu-watched', false).catch(()=>null),
      window.storage.get('mcu-ratings', false).catch(()=>null)
    ]);
    if(w && w.value) watched = new Set(JSON.parse(w.value));
    if(r && r.value) ratings = JSON.parse(r.value);
  }catch(e){ /* start empty */ }
  storageReady = true;
  render();
}
async function saveWatched(){
  try{ await window.storage.set('mcu-watched', JSON.stringify([...watched]), false); }
  catch(e){ console.error('storage error', e); }
}
async function saveRatings(){
  try{ await window.storage.set('mcu-ratings', JSON.stringify(ratings), false); }
  catch(e){ console.error('storage error', e); }
}
function rateMovie(id, value, ev){
  if(ev) ev.stopPropagation();
  if(!watched.has(id)) return;
  if(ratings[id] === value){ delete ratings[id]; }
  else ratings[id] = value;
  saveRatings();
  render();
}
function routeRating(route){
  const rated = route.ids.filter(id => ratings[id]);
  if(rated.length===0) return null;
  const sum = rated.reduce((s,id)=>s+ratings[id],0);
  return { avg: sum/rated.length, count: rated.length };
}
function globalRating(){
  const ids = Object.keys(MOVIES).filter(id => ratings[id]);
  if(ids.length===0) return null;
  const sum = ids.reduce((s,id)=>s+ratings[id],0);
  return { avg: sum/ids.length, count: ids.length };
}
function starsWidget(id){
  const r = ratings[id] || 0;
  let s = '<div class="rating-stars" onclick="event.stopPropagation()">';
  for(let i=1;i<=5;i++){
    s += `<span class="star ${i<=r?'filled':''}" onclick="rateMovie('${id}', ${i}, event)">★</span>`;
  }
  if(r) s += `<span class="rating-value">${r}/5</span>`;
  s += '</div>';
  return s;
}
function ratingLine(obj){
  if(!obj) return `<span class="rating-empty">☆ Sin calificaciones aún</span>`;
  return `<span class="rating-line"><span class="rating-star-ico">★</span> ${obj.avg.toFixed(1)} <span class="rating-count">(${obj.count} calificada${obj.count>1?'s':''})</span></span>`;
}

function isUnlocked(id){
  const m = MOVIES[id];
  if(!m.req || m.req.length===0) return true;
  return m.req.every(r=>watched.has(r));
}
function missingReq(id){
  return MOVIES[id].req.filter(r=>!watched.has(r)).map(r=>MOVIES[r].t);
}
function toggleWatched(id, ev){
  const m = MOVIES[id];
  if(m.upcoming) return;
  if(watched.has(id)){
    watched.delete(id);
  } else {
    if(!isUnlocked(id)){
      const card = ev && ev.currentTarget;
      if(card){ card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake'); }
      return;
    }
    watched.add(id);
  }
  saveWatched();
  render();
}
function openRoute(id){ currentRoute = id; searchFocused = false; render(); window.scrollTo({top:0, behavior:'smooth'}); }
function goHome(){ currentRoute = null; searchFocused = false; render(); }
async function resetProgress(){
  watched = new Set();
  ratings = {};
  await saveWatched();
  await saveRatings();
  render();
}

/* ---------------------------------------------------------
   SEARCH & FILTER
--------------------------------------------------------- */
function normalize(s){
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}
function matchesSearch(id){
  if(!searchQuery.trim()) return true;
  return normalize(MOVIES[id].t).includes(normalize(searchQuery));
}
function matchesFilter(id){
  const m = MOVIES[id];
  switch(filterKey){
    case 'movie':    return !m.serie && !m.upcoming;
    case 'serie':    return !!m.serie;
    case 'upcoming': return !!m.upcoming;
    case 'watched':  return watched.has(id);
    case 'unlocked': return !m.upcoming && !watched.has(id) && isUnlocked(id);
    case 'locked':   return !m.upcoming && !watched.has(id) && !isUnlocked(id);
    default:         return true;
  }
}
function isSearchActive(){
  return searchQuery.trim() !== "" || filterKey !== "all";
}
function onSearchInput(value){
  searchQuery = value;
  searchFocused = true;
  render();
}
function setFilter(key){
  filterKey = (filterKey === key) ? 'all' : key;
  searchFocused = false;
  render();
}
function clearFilters(){
  searchQuery = "";
  filterKey = "all";
  searchFocused = false;
  render();
}

/* ---------------------------------------------------------
   RENDER HELPERS
--------------------------------------------------------- */
function fmtHours(min){
  const h = min/60;
  return h % 1 === 0 ? h + 'h' : h.toFixed(1) + 'h';
}
function routeStats(route){
  const total = route.ids.length;
  const watchedCount = route.ids.filter(id=>watched.has(id)).length;
  const unlockedCount = route.ids.filter(id=>isUnlocked(id)).length;
  return {total, watchedCount, unlockedCount, pct: total? Math.round(watchedCount/total*100):0};
}
function globalStats(){
  const ids = Object.keys(MOVIES);
  const total = ids.length;
  const watchedCount = ids.filter(id=>watched.has(id)).length;
  const totalMin = ids.reduce((s,id)=>s+MOVIES[id].min,0);
  const watchedMin = ids.filter(id=>watched.has(id)).reduce((s,id)=>s+MOVIES[id].min,0);
  const routesDone = ROUTES.filter(r=>routeStats(r).pct===100).length;
  return {total, watchedCount, totalMin, watchedMin, routesDone, pct: total? Math.round(watchedCount/total*100):0};
}

function movieCard(id, showRoutes){
  const m = MOVIES[id];
  const isWatched = watched.has(id);
  const unlocked = isUnlocked(id);
  let cls = "movie-card";
  if(m.upcoming) cls += " locked";
  else if(isWatched) cls += " watched";
  else if(!unlocked) cls += " locked";
  else if(m.req.length===0) cls += " free-entry";

  let extra = "";
  if(isWatched) extra = '<div class="check">✓</div>';
  else if(!unlocked || m.upcoming) extra = '<div class="lock-icon">🔒</div>';

  let tag = "";
  if(m.serie) tag += '<span class="tag tag-serie">SERIE</span>';
  if(m.upcoming) tag += '<span class="tag tag-soon">PRÓXIMAMENTE</span>';
  if(m.optional) tag += '<span class="tag tag-optional">OPCIONAL</span>';

  let note = "";
  if(!m.upcoming && m.req.length===0 && !isWatched) note = '<div class="free-note">Se puede ver sin desbloquear</div>';
  if(!m.upcoming && !unlocked && !isWatched){
    note = '<div class="free-note">Requiere: '+missingReq(id).join(', ')+'</div>';
  }

  let routeTags = "";
  if(showRoutes){
    const names = ROUTES.filter(r=>r.ids.includes(id)).map(r=>r.name);
    if(names.length) routeTags = `<div class="route-tags">${names.map(n=>`<span class="route-chip">${n}</span>`).join('')}</div>`;
  }

  const stars = isWatched ? starsWidget(id) : "";

  const titleAttr = m.upcoming ? 'Aún no se ha estrenado' : (unlocked || isWatched ? '' : 'Bloqueada: '+missingReq(id).join(', '));

  return `<div class="${cls}" title="${titleAttr}" onclick="toggleWatched('${id}', event)">
    ${extra}
    <div class="title">${m.t}</div>
    <div class="year">${m.y} · ${fmtHours(m.min)}</div>
    ${tag}
    ${note}
    ${stars}
    ${routeTags}
  </div>`;
}

function phaseColumns(route){
  const active = isSearchActive();
  const grouped = {};
  route.ids.forEach(id=>{
    if(active && !(matchesSearch(id) && matchesFilter(id))) return;
    const ph = MOVIES[id].ph;
    if(!grouped[ph]) grouped[ph]=[];
    grouped[ph].push(id);
  });
  const keys = Object.keys(PHASES).filter(ph=>grouped[ph]);
  if(keys.length===0){
    return `<div class="no-results">No hay películas o series que coincidan con tu búsqueda en esta ruta.</div>`;
  }
  return keys.map(ph=>{
    const ids = grouped[ph];
    const done = ids.filter(id=>watched.has(id)).length;
    return `<div class="phase-col">
      <h4>${PHASES[ph]}</h4>
      <div class="phase-idx">${done}/${ids.length} vistas</div>
      ${ids.map(id=>movieCard(id, false)).join('')}
    </div>`;
  }).join('');
}

function globalSearchResults(){
  const ids = Object.keys(MOVIES).filter(id => matchesSearch(id) && matchesFilter(id));
  if(ids.length===0){
    return `<div class="no-results">No se encontraron resultados para tu búsqueda.</div>`;
  }
  return `<div class="route-grid search-results">${ids.map(id=>movieCard(id, true)).join('')}</div>`;
}

function searchPanel(){
  const chips = FILTERS.map(f=>{
    const active = filterKey === f.key ? 'active' : '';
    return `<button class="chip ${active}" onclick="setFilter('${f.key}')">${f.label}</button>`;
  }).join('');
  const clear = isSearchActive() ? `<div class="filter-footer"><button class="clear-filters" onclick="clearFilters()">Limpiar búsqueda y filtros</button></div>` : '';
  return `
    <div class="search-panel">
      <div class="search-bar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input id="search-input" type="text" placeholder="Buscar película o serie..." value="${searchQuery.replace(/"/g,'&quot;')}" oninput="onSearchInput(this.value)">
      </div>
      <div class="filter-chips">${chips}</div>
      ${clear}
    </div>
  `;
}

/* ---------------------------------------------------------
   MAIN RENDER
--------------------------------------------------------- */
function render(){
  const app = document.getElementById('app');
  if(!storageReady){
    app.innerHTML = `<div style="text-align:center; padding:100px 0; color:var(--text-dim);">Cargando progreso…</div>`;
    return;
  }
  const g = globalStats();
  const gr = globalRating();

  const headerHtml = `
    <header>
      <div class="eyebrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>
        Rutas Cronológicas Interactivas
      </div>
      <h1>VENGADORES<span>.</span> Línea Temporal</h1>
      <p class="subtitle">Elige tu camino por el universo. Cada ruta se desbloquea a su propio ritmo.</p>
      <div class="stats">
        <div class="pill">Progreso general: <b>${g.pct}%</b></div>
        <div class="pill">Películas vistas: <b>${g.watchedCount}/${g.total}</b></div>
        <div class="pill">Horas vistas: <b>${fmtHours(g.watchedMin)}</b> / ${fmtHours(g.totalMin)}</div>
        <div class="pill">Rutas completas: <b>${g.routesDone}/${ROUTES.length}</b></div>
        <div class="pill">Calificación media: <b>${gr ? '★ '+gr.avg.toFixed(1) : '—'}</b>${gr ? ` <span style="opacity:.7">(${gr.count})</span>` : ''}</div>
      </div>
      <div class="progress-outer"><div class="progress-inner" style="width:${g.pct}%"></div></div>
    </header>
  `;

  if(currentRoute === null){
    const active = isSearchActive();
    const body = active
      ? searchPanel() + globalSearchResults()
      : searchPanel() + `<div class="route-grid">${ROUTES.map(r=>{
          const s = routeStats(r);
          const rr = routeRating(r);
          return `<div class="route-card" onclick="openRoute('${r.id}')">
            <h3>${r.name}</h3>
            <p class="tagline">${r.tagline}</p>
            <hr>
            <div class="route-stat-row">
              <div class="route-stat"><div class="num">${s.total}</div><div class="lbl">Títulos</div></div>
              <div class="route-stat"><div class="num">${s.unlockedCount}</div><div class="lbl">Desbloqueadas</div></div>
              <div class="route-stat"><div class="num">${s.pct}%</div><div class="lbl">Progreso</div></div>
            </div>
            <div class="mini-progress"><div style="width:${s.pct}%"></div></div>
            <div class="route-rating">${ratingLine(rr)}</div>
          </div>`;
        }).join('')}</div>`;

    app.innerHTML = headerHtml + body + resetRow();
  } else {
    const route = ROUTES.find(r=>r.id===currentRoute);
    const s = routeStats(route);
    const rr = routeRating(route);
    app.innerHTML = headerHtml + `
      <button class="back-btn" onclick="goHome()">← Todas las rutas</button>
      <div class="route-header">
        <h2>${route.name}</h2>
        <div class="route-pct">${s.watchedCount}/${s.total} vistas · ${s.pct}% &nbsp;·&nbsp; ${ratingLine(rr)}</div>
      </div>
      <p class="route-tagline">${route.tagline}</p>
      ${searchPanel()}
      <div class="phases">${phaseColumns(route)}</div>
    ` + resetRow();
  }

  if(searchFocused){
    requestAnimationFrame(()=>{
      const el = document.getElementById('search-input');
      if(el){ el.focus(); const v = el.value; el.setSelectionRange(v.length, v.length); }
    });
  }
}

function resetRow(){
  return `<div class="reset-row"><button class="reset-btn" onclick="resetProgress()">Reiniciar progreso</button></div>`;
}

loadAll();