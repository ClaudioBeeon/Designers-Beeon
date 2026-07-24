const rawData = [
  {cliente:"ALDEN 348",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"APSYSTEMS",escopo:"INBOUND",atend:"João Teles",designer:"Gustavo",video:"Cláudio",email:"Gustavo"},
  {cliente:"ATELIÊ MATERNO",escopo:"INBOUND",atend:"Laura",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"BEEON",escopo:"INBOUND",atend:"Lucas",designer:"Imane",video:"Cláudio",email:"Cláudio"},
  {cliente:"BUFFET LA FÊTE",escopo:"PERFORMANCE",atend:"Manu",designer:"Gustavo",video:"Cláudio",email:"-"},
  {cliente:"CASA DE CARNES J.A",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"CLÍNICAS UNIÃO - PASSOS",escopo:"PERFORMANCE",atend:"Laura",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"CREDSELLER",escopo:"INBOUND",atend:"João Teles",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"EDUCAÇÃO AUTISTA",escopo:"PERFORMANCE",atend:"Manu",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"EXPRESSO NEPOMUCENO",escopo:"SEO",atend:"João Teles",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"GO TOGETHER MICE",escopo:"INBOUND",atend:"Giovanna",designer:"Gustavo",video:"Cláudio",email:"Cláudio"},
  {cliente:"GRUPO RODA BRANCA",escopo:"PERFORMANCE",atend:"Manu",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"HERING",escopo:"PERFORMANCE",atend:"Manu",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"HIC",escopo:"REDE SOCIAL",atend:"Manu",designer:"Paulo",video:"-",email:"-"},
  {cliente:"JOAQUIM OURIVES",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"JORGE PAIVA",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"MARIAH SPA",escopo:"INBOUND",atend:"Giovanna",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"MARKA",escopo:"PERFORMANCE",atend:"Giovanna",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"NORD",escopo:"PERFORMANCE",atend:"João Teles",designer:"Gustavo",video:"Cláudio",email:"-"},
  {cliente:"NOVA ORAL CRAVINHOS",escopo:"PERFORMANCE",atend:"Laura",designer:"Paulo",video:"-",email:"-"},
  {cliente:"NOVA ORAL RP",escopo:"PERFORMANCE",atend:"Laura",designer:"Paulo",video:"-",email:"-"},
  {cliente:"NOVA ORAL PIUMHI",escopo:"PERFORMANCE",atend:"Laura",designer:"Paulo",video:"-",email:"-"},
  {cliente:"OLIVINA AZUL",escopo:"PERFORMANCE",atend:"João Teles",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"OMX",escopo:"REDE SOCIAL",atend:"Manu",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"OPTEIN",escopo:"PERFORMANCE",atend:"João Teles",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"ORIGYM",escopo:"INBOUND",atend:"Giovanna",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"ÓTICAS FLUMINENSE",escopo:"PERFORMANCE",atend:"Laura",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"PÃO NOSSO",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"PEDIAKINDER",escopo:"SEO",atend:"Laura",designer:"Paulo",video:"-",email:"-"},
  {cliente:"PIZZARETTO",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"PURO FUÇO",escopo:"PERFORMANCE",atend:"Manu",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"QUALIVIDROS",escopo:"INBOUND",atend:"João Teles",designer:"Gustavo",video:"Cláudio",email:"Cláudio"},
  {cliente:"REI DAS ÁGUAS",escopo:"REDE SOCIAL",atend:"Manu",designer:"Paulo",video:"-",email:"-"},
  {cliente:"RI HAPPY",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"SANMARIANA",escopo:"PERFORMANCE",atend:"Laura",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"SINPAIN",escopo:"PERFORMANCE",atend:"Laura",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"SISPONTO",escopo:"SEO",atend:"Giovanna",designer:"Gustavo",video:"-",email:"-"},
  {cliente:"STEFANELLI",escopo:"PERFORMANCE",atend:"Manu",designer:"Sem designer",video:"-",email:"-"},
  {cliente:"SUPRIR",escopo:"PERFORMANCE",atend:"João Teles",designer:"Imane",video:"-",email:"-"},
  {cliente:"TUDINHO PARA SUA CASA",escopo:"INBOUND",atend:"Laura",designer:"Gustavo",video:"-",email:"Cláudio"},
  {cliente:"VBC",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
  {cliente:"VINO",escopo:"REDE SOCIAL",atend:"Manu",designer:"Paulo",video:"-",email:"-"},
  {cliente:"WJMV CONSTRUTORA",escopo:"PERFORMANCE",atend:"Manu",designer:"Paulo",video:"Cláudio",email:"-"},
];

const designerColors = {Paulo:{bg:"#E6F1FB",fg:"#185FA5"}, Gustavo:{bg:"#EAF3DE",fg:"#3B6D11"}, Imane:{bg:"#FBEAF0",fg:"#993556"}, "Sem designer":{bg:"#F1EFE8",fg:"#78766e"}};
const designerRoles = {Paulo:"Performance", Gustavo:"SEO", Imane:"Social", "Sem designer":"Fila de espera"};
let designerPhotos = {};
let designers = ["Paulo","Gustavo","Imane","Sem designer"];
let state = {};
let history = [];
let sortAZ = false;
let expandedSet = new Set(["Paulo"]);
let atividadesHojePorDesigner = {}; // preenchido pela integração com o Runrun.it
let tarefasAbertasPorDesigner = {}; // atrasadas/hoje/futuras, preenchido pela integração com o Runrun.it
let currentPage = "designers";
let designerHomeOffice = {};
let sortClientesAZ = false;
let expandedAtendSet = new Set();
let expandedServicoSet = new Set();
const PAGE_SUBTITLES = {
  designers: "Clientes por designer",
  atendimento: "Clientes por atendimento",
  servico: "Clientes por serviço",
  clientes: "Todos os clientes"
};

function switchPage(page) {
  currentPage = page;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document.querySelectorAll(".sb-item").forEach(b => b.classList.toggle("active", b.dataset.page === page));
  document.getElementById("page-subtitle").textContent = PAGE_SUBTITLES[page] || "";
  if (page === "atendimento") renderAtendimento();
  if (page === "servico") renderServico();
  if (page === "clientes") renderClientesPage();
}

const SERVICOS_PREDEFINIDOS = [
  { label: "Estático",  bg: "#E6F1FB", color: "#185FA5" },
  { label: "Vídeo",     bg: "#FAEEDA", color: "#854F0B" },
  { label: "Animação",  bg: "#EAF3DE", color: "#3B6D11" },
  { label: "E-mail",    bg: "#FBEAF0", color: "#993556" },
  { label: "Story",     bg: "#F3EEFB", color: "#6B3FA0" },
  { label: "Reels",     bg: "#FEF0F0", color: "#C0392B" },
  { label: "Banner",    bg: "#E8F8F5", color: "#1A6B55" },
  { label: "Tráfego",   bg: "#FFF3CD", color: "#856404" },
];

const COLOR_PALETTE = [
  {bg:"#E6F1FB",fg:"#185FA5"}, {bg:"#EAF3DE",fg:"#3B6D11"}, {bg:"#FBEAF0",fg:"#993556"},
  {bg:"#F3EEFB",fg:"#6B3FA0"}, {bg:"#FAEEDA",fg:"#854F0B"}, {bg:"#E8F8F5",fg:"#1A6B55"},
  {bg:"#FEF0F0",fg:"#C0392B"}, {bg:"#FFF3CD",fg:"#856404"},
];

const ATENDIMENTO_PHOTOS = {
  "Manu": "https://res.cloudinary.com/dzqsqxrkw/image/upload/v1784833487/Firefly_gpt-image_Transforme_essa_pessoa_em_um_emoji_do_IOS_em_um_fundo_amarelo_claro_mantendo_as_mes_372247_biwncc.png",
  "Laura": "https://res.cloudinary.com/dzqsqxrkw/image/upload/v1784833986/Firefly_gpt-image_Altere_o_fundo_para_roxo_bem_claro_22904_s2j7cx.png",
  "Giovanna": "https://res.cloudinary.com/dzqsqxrkw/image/upload/v1784833487/Firefly_gpt-image_Transforme_essa_pessoa_em_um_emoji_do_IOS_em_um_fundo_azul_claro_mantendo_as_mesmas_372247_1_eroaek.png",
  "João Teles": "https://link-da-foto-do-joao.jpg",
  "Lucas": "https://res.cloudinary.com/dzqsqxrkw/image/upload/v1784833905/Firefly_gpt-image_Transforme_essa_pessoa_em_um_emoji_do_IOS_em_um_fundo_laranja_bem_claro_mantendo_as_372247_sdfav1.png"
};

function initState() {
  designers.forEach(d => state[d] = []);
  rawData.forEach(c => {
    if (!state[c.designer]) { state[c.designer] = []; if (!designers.includes(c.designer)) designers.push(c.designer); }
    state[c.designer].push(Object.assign({}, c, { criativos: 0, tempo: 0, servicos: [] }));
  });
}

function saveHistory() {
  history.push(JSON.stringify({ designers, state, designerPhotos, designerHomeOffice }));
  if (history.length > 40) history.shift();
  document.getElementById("undo-icon").parentElement.style.opacity = "1";
}

function undo() {
  if (!history.length) return;
  const snap = JSON.parse(history.pop());
  designers = snap.designers;
  state = snap.state;
  designerPhotos = snap.designerPhotos || {};
  designerHomeOffice = snap.designerHomeOffice || {};
  renderAll();
  scheduleSave();
}

function getColor(d) { return designerColors[d] || {bg:"#F1EFE8", fg:"#78766e"}; }
function initials(name) { return name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(); }
function hashStr(str) {
  let hash = 0;
  for (let i=0;i<str.length;i++) hash = str.charCodeAt(i) + ((hash<<5)-hash);
  return hash;
}

function totalCriativos(d) { return (state[d]||[]).reduce((s,c)=>s+(c.criativos||0),0); }
function totalTempoMin(d) { return (state[d]||[]).reduce((s,c)=>s+((c.criativos||0)*(c.tempo||0)),0); }
function formatTempo(min) {
  if (!min) return "0min";
  if (min < 60) return min + "min";
  const h = Math.floor(min/60), m = min%60;
  return m > 0 ? h+"h "+m+"min" : h+"h";
}
function getServicoStyle(label) {
  const pre = SERVICOS_PREDEFINIDOS.find(s => s.label.toLowerCase() === label.toLowerCase());
  if (pre) return pre;
  let hash = 0;
  for (let i=0;i<label.length;i++) hash = label.charCodeAt(i) + ((hash<<5)-hash);
  const hue = Math.abs(hash) % 360;
  return { bg: `hsl(${hue},55%,92%)`, color: `hsl(${hue},45%,35%)` };
}

// ============ RENDER ============

function renderAll() {
  renderKPIs();
  renderDesigners();
  renderCharts();
  if (currentPage === "atendimento") renderAtendimento();
  if (currentPage === "servico") renderServico();
  if (currentPage === "clientes") renderClientesPage();
  if (!document.getElementById("client-detail-overlay").classList.contains("hidden")) {
    const openName = document.querySelector("#client-detail-content .client-name-input")?.value
      || document.querySelector("#client-detail-content .client-name-wrap div")?.textContent;
    if (openName) openClientDetail(openName);
  }
}

function renderKPIs() {
  const grid = document.getElementById("kpi-grid");
  const clientesUnicos = mergeEntriesByClient(getAllClientsFlat().filter(({c}) => !isHiddenOn(c, "clientes")));
  const totalClientes = clientesUnicos.length;
  const totalCriat = designers.reduce((s,d)=>s+totalCriativos(d), 0);
  const totalMin = designers.reduce((s,d)=>s+totalTempoMin(d), 0);
  const avgCriat = totalClientes ? (totalCriat/totalClientes).toFixed(1) : 0;
  grid.innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Total de clientes</div>
      <div class="kpi-value">${totalClientes}</div>
      <div class="kpi-sub">${designers.length} designers</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Criativos no total</div>
      <div class="kpi-value">${totalCriat}</div>
      <div class="kpi-sub">média ${avgCriat} por cliente</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Horas totais</div>
      <div class="kpi-value">${formatTempo(totalMin)}</div>
      <div class="kpi-sub">${designers.filter(d=>d!=="Sem designer" && (state[d]||[]).length).length} designers ativos</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Sem designer</div>
      <div class="kpi-value">${(state["Sem designer"]||[]).length}</div>
      <div class="kpi-sub">clientes na fila</div>
    </div>
  `;
}

function renderDesigners() {
  const grid = document.getElementById("designers-grid");
  grid.innerHTML = "";
  const list = designers.slice();

  list.forEach(designer => {
    let clients = (state[designer] || []).slice();
    if (sortAZ) clients.sort((a,b) => a.cliente.localeCompare(b.cliente));
    const col = getColor(designer);
    const card = document.createElement("div");
    card.className = "designer-card" + (expandedSet.has(designer) ? " expanded" : "");
    card.dataset.designer = designer;

    card.addEventListener("dragover", e => { e.preventDefault(); card.classList.add("drag-over"); });
    card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
    card.addEventListener("drop", e => {
      e.preventDefault();
      card.classList.remove("drag-over");
      onClientDrop(designer);
    });

    const top = document.createElement("div");
    top.className = "dcard-top";
    const photo = designerPhotos[designer];
    const avatarInner = photo ? `<img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : initials(designer);
    const dadosRunrun = tarefasAbertasPorDesigner[designer];
    const runrunRowHtml = dadosRunrun ? `
      <div class="designer-stats-row runrun-stats-row">
        <div class="dstat"><div class="dstat-num" style="color:#993556;">${dadosRunrun.atrasadas || 0}</div><div class="dstat-label">Atrasadas</div></div>
        <div class="dstat"><div class="dstat-num" style="color:#854F0B;">${dadosRunrun.hoje || 0}</div><div class="dstat-label">Vence hoje</div></div>
        <div class="dstat"><div class="dstat-num" style="color:#3B6D11;">${dadosRunrun.futuras || 0}</div><div class="dstat-label">Futuras</div></div>
      </div>
    ` : "";
    top.innerHTML = `
      <div class="avatar-wrap">
        <div class="avatar" style="background:${col.bg};color:${col.fg};">${avatarInner}</div>
        <button class="avatar-edit-btn" title="Adicionar foto"><i class="ti ti-camera"></i></button>
      </div>
      <div class="dcard-top-spacer"></div>
      <div class="designer-stats-row">
        <div class="dstat"><div class="dstat-num">${clients.length}</div><div class="dstat-label">Clientes</div></div>
        <div class="dstat"><div class="dstat-num">${totalCriativos(designer)}</div><div class="dstat-label">Criativos</div></div>
        <div class="dstat"><div class="dstat-num">${formatTempo(totalTempoMin(designer))}</div><div class="dstat-label">Tempo</div></div>
        <div class="dstat"><div class="dstat-num">${atividadesHojePorDesigner[designer] || 0}</div><div class="dstat-label">Entregues</div></div>
      </div>
      ${runrunRowHtml}
    `;
    top.querySelector(".avatar-edit-btn").addEventListener("click", e => {
      e.stopPropagation();
      const url = prompt("Cole o link da foto de " + designer + " (URL da imagem):", designerPhotos[designer] || "");
      if (url === null) return;
      saveHistory();
      if (url.trim()) designerPhotos[designer] = url.trim();
      else delete designerPhotos[designer];
      renderDesigners();
      scheduleSave();
    });
    const nameInput = document.createElement("input");
    nameInput.className = "designer-name-input";
    nameInput.value = designer;
    nameInput.addEventListener("click", e => e.stopPropagation());
    nameInput.addEventListener("blur", () => renameDesigner(designer, nameInput.value.trim()));
    nameInput.addEventListener("keydown", e => { if (e.key==="Enter") nameInput.blur(); });
    top.insertBefore(nameInput, top.children[1]);
    top.addEventListener("click", e => { if (e.target === nameInput) return; toggleCard(designer); });

    if (designer !== "Sem designer") {
      const actions = document.createElement("div");
      actions.className = "dcard-actions";
      actions.innerHTML = `<button class="mini-icon-btn danger" title="Remover designer"><i class="ti ti-trash"></i></button>`;
      actions.querySelector("button").addEventListener("click", e => {
        e.stopPropagation();
        removeDesigner(designer);
      });
      card.appendChild(actions);
    }

    card.appendChild(top);

    if (designer !== "Sem designer") {
      const hoRow = document.createElement("div");
      hoRow.className = "home-office-row";
      const hoUsed = designerHomeOffice[designer] || 0;
      hoRow.innerHTML = `<div class="ho-label">Home Office</div><div class="ho-bars"></div>`;
      const hoBars = hoRow.querySelector(".ho-bars");
      for (let i = 0; i < 6; i++) {
        const bar = document.createElement("div");
        bar.className = "ho-bar" + (i < hoUsed ? " filled" : "");
        bar.title = (i+1) + "º home office";
        bar.addEventListener("click", e => {
          e.stopPropagation();
          saveHistory();
          const cur = designerHomeOffice[designer] || 0;
          designerHomeOffice[designer] = (cur === i + 1) ? i : i + 1;
          renderDesigners();
          scheduleSave();
        });
        hoBars.appendChild(bar);
      }
      card.appendChild(hoRow);
    }

    const inner = document.createElement("div");
    inner.className = "clients-inner";
    clients.forEach((c) => inner.appendChild(buildClientCard(c, designer, false)));
    const addMini = document.createElement("div");
    addMini.className = "add-client-mini";
    addMini.textContent = "+ Adicionar cliente";
    addMini.addEventListener("click", e => { e.stopPropagation(); openAddClientModal(designer); });
    inner.appendChild(addMini);
    card.appendChild(inner);

    grid.appendChild(card);
  });
}

let dragClientData = null;

function buildClientCard(c, designer, showDesignerBadge) {
  const card = document.createElement("div");
  card.className = "client-card";
  card.draggable = true;
  card.dataset.cliente = c.cliente;
  card.addEventListener("dragstart", () => { dragClientData = { cliente: c.cliente, fromDesigner: designer }; card.classList.add("dragging"); });
  card.addEventListener("dragend", () => card.classList.remove("dragging"));

  const topRow = document.createElement("div");
  topRow.className = "client-top-row";

  const clientCol = COLOR_PALETTE[Math.abs(hashStr(c.cliente)) % COLOR_PALETTE.length];
  const clientIcon = document.createElement("div");
  clientIcon.className = "client-icon";
  clientIcon.style.background = clientCol.bg;
  clientIcon.style.color = clientCol.fg;
  clientIcon.textContent = initials(c.cliente);
  topRow.appendChild(clientIcon);

  const nameWrap = document.createElement("div");
  nameWrap.className = "client-name-wrap";
  const nameInput = document.createElement("input");
  nameInput.className = "client-name-input";
  nameInput.value = c.cliente;
  nameInput.addEventListener("click", e => e.stopPropagation());
  nameInput.addEventListener("blur", () => {
    const v = nameInput.value.trim();
    if (v && v !== c.cliente) { saveHistory(); c.cliente = v; scheduleSave(); }
    else nameInput.value = c.cliente;
  });
  nameInput.addEventListener("keydown", e => { if (e.key==="Enter") nameInput.blur(); });
  nameWrap.appendChild(nameInput);
  topRow.appendChild(nameWrap);

  const actions = document.createElement("div");
  actions.className = "client-actions";
  actions.innerHTML = `
    <button class="mini-icon-btn" title="Duplicar para outro designer"><i class="ti ti-copy"></i></button>
    <button class="mini-icon-btn danger" title="Remover"><i class="ti ti-x"></i></button>
  `;
  const [dupBtn, delBtn] = actions.querySelectorAll("button");
  dupBtn.addEventListener("click", e => {
    e.stopPropagation();
    const target = prompt(`Duplicar "${c.cliente}" para qual designer?\n\n` + designers.map((d,i)=>(i+1)+". "+d).join("\n") + "\n\nDigite o número ou o nome:");
    if (!target) return;
    const trimmed = target.trim();
    let dest = designers.find(d => d.toLowerCase() === trimmed.toLowerCase());
    if (!dest) { const n = parseInt(trimmed); if (n>=1 && n<=designers.length) dest = designers[n-1]; }
    if (!dest) { alert("Designer não encontrado."); return; }
    if (dest === designer) { alert("O cliente já está nesse designer."); return; }
    saveHistory();
    state[dest].push(Object.assign({}, c, { designer: dest }));
    expandedSet.add(dest);
    renderAll();
    scheduleSave();
  });
  delBtn.addEventListener("click", e => {
    e.stopPropagation();
    if (!confirm(`Remover "${c.cliente}" de ${designer}?`)) return;
    saveHistory();
    state[designer] = state[designer].filter(x => x !== c);
    renderAll();
    scheduleSave();
  });
  topRow.appendChild(actions);
  card.appendChild(topRow);

  if (showDesignerBadge) {
    const dCol = getColor(designer);
    const dBadge = document.createElement("span");
    dBadge.style.cssText = `font-size:9.5px;font-weight:600;background:${dCol.bg};color:${dCol.fg};padding:2px 8px;border-radius:8px;display:inline-block;margin-top:8px;margin-left:38px;`;
    dBadge.innerHTML = `<i class="ti ti-palette" style="font-size:9px;"></i> ${designer}`;
    card.appendChild(dBadge);
  }

  const atendPhotoUrl = ATENDIMENTO_PHOTOS[c.atend] || null;
  const atendWrap = document.createElement("div");
  atendWrap.style.cssText = "display:flex;align-items:center;gap:6px;margin-top:8px;margin-left:38px;";
  if (atendPhotoUrl) {
    const atendAvatar = document.createElement("img");
    atendAvatar.src = atendPhotoUrl;
    atendAvatar.style.cssText = "width:20px;height:20px;border-radius:50%;object-fit:cover;flex-shrink:0;";
    atendWrap.appendChild(atendAvatar);
  }
  const atendEl = document.createElement("span");
  atendEl.className = "client-atend";
  if (atendPhotoUrl) atendEl.style.marginLeft = "0";
  atendEl.textContent = c.atend;
  atendEl.title = "Clique para alterar o atendimento";
  atendEl.addEventListener("click", e => {
    e.stopPropagation();
    const inp = document.createElement("input");
    inp.className = "client-atend-input";
    inp.value = c.atend;
    atendEl.replaceWith(inp);
    inp.focus(); inp.select();
    const commit = () => {
      const v = inp.value.trim() || c.atend;
      if (v !== c.atend) { saveHistory(); c.atend = v; scheduleSave(); }
      atendEl.textContent = c.atend;
      inp.replaceWith(atendEl);
    };
    inp.addEventListener("blur", commit);
    inp.addEventListener("keydown", e2 => { if (e2.key==="Enter") inp.blur(); e2.stopPropagation(); });
  });
  atendWrap.appendChild(atendEl);
  card.appendChild(atendWrap);

  const tagsRow = document.createElement("div");
  tagsRow.className = "client-tags-row";
  (c.servicos||[]).forEach(label => {
    const st = getServicoStyle(label);
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.style.background = st.bg; tag.style.color = st.color;
    tag.innerHTML = `${label}<span class="tag-x">×</span>`;
    tag.querySelector(".tag-x").addEventListener("click", e => {
      e.stopPropagation();
      saveHistory();
      c.servicos = c.servicos.filter(s => s !== label);
      renderAll();
      scheduleSave();
    });
    tagsRow.appendChild(tag);
  });
  const addTagBtn = document.createElement("button");
  addTagBtn.className = "add-tag-btn";
  addTagBtn.textContent = "+ serviço";
  addTagBtn.addEventListener("click", e => {
    e.stopPropagation();
    const label = prompt("Serviço (ex: Estático, Vídeo, Animação, E-mail, Story, Reels, Banner, Tráfego, ou personalizado):");
    if (!label) return;
    const v = label.trim();
    if (!v || (c.servicos||[]).includes(v)) return;
    saveHistory();
    if (!c.servicos) c.servicos = [];
    c.servicos.push(v);
    renderAll();
    scheduleSave();
  });
  tagsRow.appendChild(addTagBtn);
  card.appendChild(tagsRow);

  const criRow = document.createElement("div");
  criRow.className = "client-ctrl-row";
  criRow.innerHTML = `<span class="ctrl-label"><i class="ti ti-stack" style="font-size:10px;"></i> Criativos</span>`;
  const criCtrl = document.createElement("div");
  criCtrl.className = "ctrl-group";
  const criMinus = document.createElement("button"); criMinus.className = "ctrl-btn"; criMinus.textContent = "−";
  const criVal = document.createElement("span"); criVal.className = "ctrl-val"; criVal.textContent = c.criativos || 0;
  const criPlus = document.createElement("button"); criPlus.className = "ctrl-btn"; criPlus.textContent = "+";
  criMinus.addEventListener("click", e => { e.stopPropagation(); if ((c.criativos||0)<=0) return; saveHistory(); c.criativos--; criVal.textContent=c.criativos; renderKPIs(); updateDesignerStats(designer); renderCharts(); scheduleSave(); });
  criPlus.addEventListener("click", e => { e.stopPropagation(); saveHistory(); c.criativos=(c.criativos||0)+1; criVal.textContent=c.criativos; renderKPIs(); updateDesignerStats(designer); renderCharts(); scheduleSave(); });
  criCtrl.append(criMinus, criVal, criPlus);
  criRow.appendChild(criCtrl);
  card.appendChild(criRow);

  const tempoRow = document.createElement("div");
  tempoRow.className = "client-ctrl-row";
  tempoRow.innerHTML = `<span class="ctrl-label"><i class="ti ti-clock" style="font-size:10px;"></i> Tempo médio</span>`;
  const tCtrl = document.createElement("div");
  tCtrl.className = "ctrl-group";
  const tMinus = document.createElement("button"); tMinus.className = "ctrl-btn"; tMinus.textContent = "−";
  const tVal = document.createElement("span"); tVal.className = "ctrl-val"; tVal.textContent = formatTempo(c.tempo||0);
  const tPlus = document.createElement("button"); tPlus.className = "ctrl-btn"; tPlus.textContent = "+";
  tVal.addEventListener("click", e => {
    e.stopPropagation();
    const inp = document.createElement("input");
    inp.className = "ctrl-input"; inp.type = "number"; inp.value = c.tempo||0;
    tVal.replaceWith(inp); inp.focus(); inp.select();
    const commit = () => { const v = Math.max(0, parseInt(inp.value)||0); saveHistory(); c.tempo=v; tVal.textContent=formatTempo(v); inp.replaceWith(tVal); updateDesignerStats(designer); renderKPIs(); renderCharts(); scheduleSave(); };
    inp.addEventListener("blur", commit);
    inp.addEventListener("keydown", e2 => { if (e2.key==="Enter") inp.blur(); e2.stopPropagation(); });
  });
  tMinus.addEventListener("click", e => { e.stopPropagation(); if ((c.tempo||0)<5) return; saveHistory(); c.tempo-=5; tVal.textContent=formatTempo(c.tempo); updateDesignerStats(designer); renderKPIs(); renderCharts(); scheduleSave(); });
  tPlus.addEventListener("click", e => { e.stopPropagation(); saveHistory(); c.tempo=(c.tempo||0)+5; tVal.textContent=formatTempo(c.tempo); updateDesignerStats(designer); renderKPIs(); renderCharts(); scheduleSave(); });
  tCtrl.append(tMinus, tVal, tPlus);
  tempoRow.appendChild(tCtrl);
  card.appendChild(tempoRow);

  return card;
}

function updateDesignerStats(designer) {
  const card = document.querySelector(`.designer-card[data-designer="${CSS.escape(designer)}"]`);
  if (!card) return;
  const nums = card.querySelectorAll(".dstat-num");
  if (nums[1]) nums[1].textContent = totalCriativos(designer);
  if (nums[2]) nums[2].textContent = formatTempo(totalTempoMin(designer));
}

function onClientDrop(toDesigner) {
  if (!dragClientData) return;
  const { cliente, fromDesigner } = dragClientData;
  dragClientData = null;
  if (fromDesigner === toDesigner) return;
  const idx = (state[fromDesigner]||[]).findIndex(c => c.cliente === cliente);
  if (idx === -1) return;
  saveHistory();
  const [item] = state[fromDesigner].splice(idx, 1);
  item.designer = toDesigner;
  state[toDesigner].push(item);
  expandedSet.add(toDesigner);
  renderAll();
  scheduleSave();
}

function toggleCard(designer) {
  if (expandedSet.has(designer)) expandedSet.delete(designer); else expandedSet.add(designer);
  renderDesigners();
}
function expandAll() {
  const anyClosed = designers.some(d => !expandedSet.has(d));
  if (anyClosed) designers.forEach(d => expandedSet.add(d));
  else expandedSet.clear();
  renderDesigners();
}
function toggleSortAZ() {
  sortAZ = !sortAZ;
  document.getElementById("sort-az-btn").classList.toggle("active", sortAZ);
  renderDesigners();
}

function renameDesigner(oldName, newName) {
  if (!newName || newName === oldName) { renderDesigners(); return; }
  if (designers.includes(newName)) { alert("Já existe um designer com esse nome."); renderDesigners(); return; }
  saveHistory();
  designers = designers.map(d => d === oldName ? newName : d);
  state[newName] = state[oldName]; delete state[oldName];
  state[newName].forEach(c => c.designer = newName);
  designerColors[newName] = designerColors[oldName]; delete designerColors[oldName];
  designerRoles[newName] = designerRoles[oldName]; delete designerRoles[oldName];
  if (expandedSet.has(oldName)) { expandedSet.delete(oldName); expandedSet.add(newName); }
  renderAll();
  scheduleSave();
}

function removeDesigner(designer) {
  if (!confirm(`Remover o designer "${designer}"? Os clientes dele vão para "Sem designer".`)) return;
  saveHistory();
  const semD = "Sem designer";
  if (!state[semD]) state[semD] = [];
  (state[designer]||[]).forEach(c => { c.designer = semD; state[semD].push(c); });
  delete state[designer];
  delete designerColors[designer];
  delete designerRoles[designer];
  designers = designers.filter(d => d !== designer);
  expandedSet.delete(designer);
  renderAll();
  scheduleSave();
}

function renderCharts() {
  const maxCriat = Math.max(1, ...designers.map(totalCriativos));
  const maxMin = Math.max(1, ...designers.map(totalTempoMin));
  const cC = document.getElementById("chart-criativos");
  const cH = document.getElementById("chart-horas");
  cC.innerHTML = ""; cH.innerHTML = "";
  designers.forEach(d => {
    const col = getColor(d);
    const tc = totalCriativos(d);
    const tm = totalTempoMin(d);
    cC.innerHTML += `<div class="cbar-wrap"><div class="cbar" style="height:${Math.max(4,(tc/maxCriat)*100)}%;background:${col.fg};opacity:0.85;"></div><div class="cbar-label">${d}</div></div>`;
    cH.innerHTML += `<div class="cbar-wrap"><div class="cbar" style="height:${Math.max(4,(tm/maxMin)*100)}%;background:#0000FB;opacity:${0.3 + 0.6*(tm/maxMin)};"></div><div class="cbar-label">${d}</div></div>`;
  });
}

function renderActivity() {
  const el = document.getElementById("activity-list");
  const items = [];
  designers.forEach(d => (state[d]||[]).forEach(c => {
    if (c.criativos) items.push({ text: `${c.criativos} criativos em ${c.cliente}`, color: getColor(d).fg });
  }));
  el.innerHTML = items.slice(0,5).map(i => `
    <div class="activity-item">
      <div class="act-dot" style="background:${i.color};"></div>
      <div class="act-text">${i.text}</div>
    </div>
  `).join("") || `<div style="font-size:11px;color:#a3a091;">Nenhuma atividade registrada ainda.</div>`;
}

// ============ MERGE DE CLIENTES DUPLICADOS ============

function normalizeName(s) { return (s||"").trim().toLowerCase(); }

function isHiddenOn(c, pageKey) { return !!(c.hidden && c.hidden[pageKey]); }
function setHidden(c, pageKey, value) {
  if (!c.hidden) c.hidden = {};
  c.hidden[pageKey] = value;
}

function getAllClientsFlat() {
  const list = [];
  designers.forEach(d => (state[d]||[]).forEach(c => list.push({ c, designer: d })));
  return list;
}

function mergeEntriesByClient(items) {
  const map = new Map();
  items.forEach(item => {
    const key = normalizeName(item.c.cliente);
    if (!map.has(key)) map.set(key, { clienteName: item.c.cliente, entries: [] });
    map.get(key).entries.push(item);
  });
  return [...map.values()].sort((a,b) => a.clienteName.localeCompare(b.clienteName));
}

// ============ MODAL: REMOVER (por seção ou tudo) ============

let pendingRemoveGroup = null;
let pendingRemovePageKey = null;
let pendingRemoveRerender = null;

function openRemoveChoice(group, pageKey, rerenderFn) {
  pendingRemoveGroup = group;
  pendingRemovePageKey = pageKey;
  pendingRemoveRerender = rerenderFn;
  const nDesigners = new Set(group.entries.map(e => e.designer)).size;
  document.getElementById("confirm-remove-text").textContent =
    `"${group.clienteName}" está com ${nDesigners} designer(es). O que deseja fazer?`;
  document.getElementById("confirm-remove-modal").classList.remove("hidden");
}
function closeConfirmRemove() {
  document.getElementById("confirm-remove-modal").classList.add("hidden");
  pendingRemoveGroup = null; pendingRemovePageKey = null; pendingRemoveRerender = null;
}
document.getElementById("confirm-remove-section-btn").addEventListener("click", () => {
  if (!pendingRemoveGroup) return;
  saveHistory();
  pendingRemoveGroup.entries.forEach(({c}) => setHidden(c, pendingRemovePageKey, true));
  const rerender = pendingRemoveRerender;
  closeConfirmRemove();
  rerender();
  scheduleSave();
});
document.getElementById("confirm-remove-all-btn").addEventListener("click", () => {
  if (!pendingRemoveGroup) return;
  if (!confirm(`Remover "${pendingRemoveGroup.clienteName}" de TODOS os designers e páginas? Essa ação não pode ser desfeita facilmente.`)) return;
  saveHistory();
  pendingRemoveGroup.entries.forEach(({c, designer}) => { state[designer] = (state[designer]||[]).filter(x => x !== c); });
  closeConfirmRemove();
  renderAll();
  scheduleSave();
});

// ============ CARD MESCLADO (Atendimento / Serviço / Clientes) ============

function buildMergedCard(group, pageKey, editable) {
  const card = document.createElement("div");
  card.className = "client-card";
  card.draggable = false;
  card.style.cursor = "default";

  const clientCol = COLOR_PALETTE[Math.abs(hashStr(group.clienteName)) % COLOR_PALETTE.length];
  const topRow = document.createElement("div");
  topRow.className = "client-top-row";

  const icon = document.createElement("div");
  icon.className = "client-icon";
  icon.style.background = clientCol.bg; icon.style.color = clientCol.fg;
  icon.textContent = initials(group.clienteName);
  topRow.appendChild(icon);

  const nameWrap = document.createElement("div");
  nameWrap.className = "client-name-wrap";
  if (editable) {
    const nameInput = document.createElement("input");
    nameInput.className = "client-name-input";
    nameInput.value = group.clienteName;
    nameInput.addEventListener("click", e => e.stopPropagation());
    nameInput.addEventListener("blur", () => {
      const v = nameInput.value.trim();
      if (v && v !== group.clienteName) { saveHistory(); group.entries.forEach(({c}) => c.cliente = v); scheduleSave(); renderAll(); }
      else nameInput.value = group.clienteName;
    });
    nameInput.addEventListener("keydown", e => { if (e.key==="Enter") nameInput.blur(); });
    nameWrap.appendChild(nameInput);
  } else {
    const nameDiv = document.createElement("div");
    nameDiv.style.cssText = "font-size:12px;font-weight:600;";
    nameDiv.textContent = group.clienteName;
    nameWrap.appendChild(nameDiv);
  }
  topRow.appendChild(nameWrap);

  const removeBtn = document.createElement("button");
  removeBtn.className = "mini-icon-btn danger";
  removeBtn.title = "Remover cliente";
  removeBtn.style.opacity = "1";
  removeBtn.innerHTML = `<i class="ti ti-trash"></i>`;
  removeBtn.addEventListener("click", e => {
    e.stopPropagation();
    const rerender = pageKey === "atendimento" ? renderAtendimento : pageKey === "servico" ? renderServico : renderClientesPage;
    openRemoveChoice(group, pageKey, rerender);
  });
  topRow.appendChild(removeBtn);
  card.appendChild(topRow);

  const atendWrap = document.createElement("div");
  atendWrap.style.cssText = "margin-top:8px;margin-left:38px;";
  const firstAtend = group.entries[0].c.atend || "Sem atendimento";
  if (editable) {
    const atendPhotoUrl = ATENDIMENTO_PHOTOS[firstAtend] || null;
    if (atendPhotoUrl) {
      const atendAvatar = document.createElement("img");
      atendAvatar.src = atendPhotoUrl;
      atendAvatar.style.cssText = "width:20px;height:20px;border-radius:50%;object-fit:cover;vertical-align:-5px;margin-right:5px;";
      atendWrap.appendChild(atendAvatar);
    }
    const atendEl = document.createElement("span");
    atendEl.className = "client-atend";
    atendEl.style.marginTop = "0"; atendEl.style.marginLeft = "0";
    atendEl.textContent = firstAtend;
    atendEl.title = "Clique para alterar o atendimento";
    atendEl.addEventListener("click", e => {
      e.stopPropagation();
      const inp = document.createElement("input");
      inp.className = "client-atend-input";
      inp.style.marginTop = "0"; inp.style.marginLeft = "0";
      inp.value = firstAtend;
      atendEl.replaceWith(inp);
      inp.focus(); inp.select();
      const commit = () => {
        const v = inp.value.trim() || firstAtend;
        if (v !== firstAtend) { saveHistory(); group.entries.forEach(({c}) => c.atend = v); scheduleSave(); }
        renderAll();
      };
      inp.addEventListener("blur", commit);
      inp.addEventListener("keydown", e2 => { if (e2.key==="Enter") inp.blur(); e2.stopPropagation(); });
    });
    atendWrap.appendChild(atendEl);
  } else {
    atendWrap.innerHTML = `<span style="font-size:9.5px;color:#78766e;background:#F3F3F1;padding:2px 8px;border-radius:8px;">${firstAtend}</span>`;
  }
  card.appendChild(atendWrap);

  group.entries.forEach(({c, designer}) => {
    const col = getColor(designer);
    const row = document.createElement("div");
    row.style.cssText = "margin-top:8px;margin-left:38px;padding:8px;background:#FAF9F7;border-radius:10px;";

    const head = document.createElement("div");
    head.style.cssText = "display:flex;align-items:center;gap:6px;flex-wrap:wrap;";
    const designerPhotoUrl = designerPhotos[designer] || null;
    head.innerHTML = (designerPhotoUrl ? `<img src="${designerPhotoUrl}" style="width:18px;height:18px;border-radius:50%;object-fit:cover;">` : "") +
      `<span style="font-size:9.5px;font-weight:700;background:${col.bg};color:${col.fg};padding:2px 8px;border-radius:8px;"><i class="ti ti-palette" style="font-size:9px;"></i> ${designer}</span>`;
    row.appendChild(head);

    const tagsRow = document.createElement("div");
    tagsRow.className = "client-tags-row";
    tagsRow.style.marginLeft = "0";
    (c.servicos||[]).forEach(label => {
      const st = getServicoStyle(label);
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.style.background = st.bg; tag.style.color = st.color;
      if (editable) {
        tag.innerHTML = `${label}<span class="tag-x">×</span>`;
        tag.querySelector(".tag-x").addEventListener("click", e => {
          e.stopPropagation(); saveHistory();
          c.servicos = c.servicos.filter(s => s !== label);
          renderAll(); scheduleSave();
        });
      } else {
        tag.textContent = label;
      }
      tagsRow.appendChild(tag);
    });
    if (editable) {
      const addTagBtn = document.createElement("button");
      addTagBtn.className = "add-tag-btn";
      addTagBtn.textContent = "+ serviço";
      addTagBtn.addEventListener("click", e => {
        e.stopPropagation();
        const label = prompt("Serviço (ex: Estático, Vídeo, Animação, E-mail, Story, Reels, Banner, Tráfego, ou personalizado):");
        if (!label) return;
        const v = label.trim();
        if (!v || (c.servicos||[]).includes(v)) return;
        saveHistory();
        if (!c.servicos) c.servicos = [];
        c.servicos.push(v);
        renderAll(); scheduleSave();
      });
      tagsRow.appendChild(addTagBtn);
    }
    row.appendChild(tagsRow);

    const statsRow = document.createElement("div");
    statsRow.style.cssText = "display:flex;align-items:center;gap:12px;margin-top:8px;";
    if (editable) {
      const criWrap = document.createElement("div");
      criWrap.style.cssText = "display:flex;align-items:center;gap:4px;";
      criWrap.innerHTML = `<span class="ctrl-label"><i class="ti ti-stack" style="font-size:10px;"></i></span>`;
      const criMinus = document.createElement("button"); criMinus.className = "ctrl-btn"; criMinus.textContent = "−";
      const criVal = document.createElement("span"); criVal.className = "ctrl-val"; criVal.textContent = c.criativos || 0;
      const criPlus = document.createElement("button"); criPlus.className = "ctrl-btn"; criPlus.textContent = "+";
      criMinus.addEventListener("click", e => { e.stopPropagation(); if ((c.criativos||0)<=0) return; saveHistory(); c.criativos--; criVal.textContent=c.criativos; renderKPIs(); updateDesignerStats(designer); renderCharts(); scheduleSave(); });
      criPlus.addEventListener("click", e => { e.stopPropagation(); saveHistory(); c.criativos=(c.criativos||0)+1; criVal.textContent=c.criativos; renderKPIs(); updateDesignerStats(designer); renderCharts(); scheduleSave(); });
      criWrap.append(criMinus, criVal, criPlus);
      statsRow.appendChild(criWrap);

      const tWrap = document.createElement("div");
      tWrap.style.cssText = "display:flex;align-items:center;gap:4px;";
      tWrap.innerHTML = `<span class="ctrl-label"><i class="ti ti-clock" style="font-size:10px;"></i></span>`;
      const tMinus = document.createElement("button"); tMinus.className = "ctrl-btn"; tMinus.textContent = "−";
      const tVal = document.createElement("span"); tVal.className = "ctrl-val"; tVal.textContent = formatTempo(c.tempo||0);
      const tPlus = document.createElement("button"); tPlus.className = "ctrl-btn"; tPlus.textContent = "+";
      tMinus.addEventListener("click", e => { e.stopPropagation(); if ((c.tempo||0)<5) return; saveHistory(); c.tempo-=5; tVal.textContent=formatTempo(c.tempo); updateDesignerStats(designer); renderKPIs(); renderCharts(); scheduleSave(); });
      tPlus.addEventListener("click", e => { e.stopPropagation(); saveHistory(); c.tempo=(c.tempo||0)+5; tVal.textContent=formatTempo(c.tempo); updateDesignerStats(designer); renderKPIs(); renderCharts(); scheduleSave(); });
      tWrap.append(tMinus, tVal, tPlus);
      statsRow.appendChild(tWrap);
    } else {
      statsRow.innerHTML = `<span style="font-size:9.5px;color:#78766e;"><i class="ti ti-stack" style="font-size:10px;"></i> ${c.criativos||0} criativos</span>`;
    }
    row.appendChild(statsRow);

    card.appendChild(row);
  });

  return card;
}

// ============ PÁGINA: ATENDIMENTO (mesclada, sempre A-Z, só leitura) ============

function renderAtendimento() {
  const grid = document.getElementById("atendimento-grid");
  grid.innerHTML = "";
  const flat = getAllClientsFlat().filter(({c}) => !isHiddenOn(c, "atendimento"));
  const byAtend = {};
  flat.forEach(({c, designer}) => {
    const a = c.atend || "Sem atendimento";
    if (!byAtend[a]) byAtend[a] = [];
    byAtend[a].push({ c, designer });
  });
  const names = Object.keys(byAtend).sort((a,b) => a.localeCompare(b));

  names.forEach(atend => {
    const merged = mergeEntriesByClient(byAtend[atend]);
    const totalCriat = byAtend[atend].reduce((s,i)=>s+(i.c.criativos||0),0);
    const col = COLOR_PALETTE[Math.abs(hashStr(atend)) % COLOR_PALETTE.length];
    const card = document.createElement("div");
    card.className = "designer-card" + (expandedAtendSet.has(atend) ? " expanded" : "");

    const top = document.createElement("div");
    top.className = "dcard-top";
    top.innerHTML = `
      <div class="avatar-wrap"><div class="avatar" style="background:${col.bg};color:${col.fg};">${ATENDIMENTO_PHOTOS[atend] ? `<img src="${ATENDIMENTO_PHOTOS[atend]}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : initials(atend)}</div></div>
      <div style="font-size:13px;font-weight:600;margin-bottom:2px;">${atend}</div>
      <div class="dcard-top-spacer"></div>
      <div class="designer-stats-row">
        <div class="dstat"><div class="dstat-num">${merged.length}</div><div class="dstat-label">Clientes</div></div>
        <div class="dstat"><div class="dstat-num">${totalCriat}</div><div class="dstat-label">Criativos</div></div>
      </div>
    `;
    top.addEventListener("click", () => {
      if (expandedAtendSet.has(atend)) expandedAtendSet.delete(atend); else expandedAtendSet.add(atend);
      renderAtendimento();
    });
    card.appendChild(top);

    const inner = document.createElement("div");
    inner.className = "clients-inner";
    merged.forEach(group => inner.appendChild(buildMergedCard(group, "atendimento", false)));
    card.appendChild(inner);

    grid.appendChild(card);
  });
}

// ============ PÁGINA: SERVIÇO (mesclada, sempre A-Z, só leitura) ============

function renderServico() {
  const grid = document.getElementById("servico-grid");
  grid.innerHTML = "";
  const flat = getAllClientsFlat().filter(({c}) => !isHiddenOn(c, "servico"));
  const byServico = {};
  flat.forEach(({c, designer}) => {
    (c.servicos && c.servicos.length ? c.servicos : ["Sem serviço definido"]).forEach(s => {
      if (!byServico[s]) byServico[s] = [];
      byServico[s].push({ c, designer });
    });
  });
  const names = Object.keys(byServico).sort((a,b) => a.localeCompare(b));

  names.forEach(servico => {
    const merged = mergeEntriesByClient(byServico[servico]);
    const totalCriat = byServico[servico].reduce((s,i)=>s+(i.c.criativos||0),0);
    const st = getServicoStyle(servico);
    const card = document.createElement("div");
    card.className = "designer-card" + (expandedServicoSet.has(servico) ? " expanded" : "");

    const top = document.createElement("div");
    top.className = "dcard-top";
    top.innerHTML = `
      <div class="avatar-wrap"><div class="avatar" style="background:${st.bg};color:${st.color};"><i class="ti ti-tag"></i></div></div>
      <div style="font-size:13px;font-weight:600;margin-bottom:2px;">${servico}</div>
      <div class="dcard-top-spacer"></div>
      <div class="designer-stats-row">
        <div class="dstat"><div class="dstat-num">${merged.length}</div><div class="dstat-label">Clientes</div></div>
        <div class="dstat"><div class="dstat-num">${totalCriat}</div><div class="dstat-label">Criativos</div></div>
      </div>
    `;
    top.addEventListener("click", () => {
      if (expandedServicoSet.has(servico)) expandedServicoSet.delete(servico); else expandedServicoSet.add(servico);
      renderServico();
    });
    card.appendChild(top);

    const inner = document.createElement("div");
    inner.className = "clients-inner";
    merged.forEach(group => inner.appendChild(buildMergedCard(group, "servico", false)));
    card.appendChild(inner);

    grid.appendChild(card);
  });
}

// ============ PÁGINA: TODOS OS CLIENTES (mesclada, editável) ============

function toggleSortClientesAZ() {
  sortClientesAZ = !sortClientesAZ;
  document.getElementById("sort-az-clientes-btn").classList.toggle("active", sortClientesAZ);
  renderClientesPage();
}

function renderClientesPage() {
  const grid = document.getElementById("clientes-grid");
  grid.innerHTML = "";
  const flat = getAllClientsFlat().filter(({c}) => !isHiddenOn(c, "clientes"));
  let merged = mergeEntriesByClient(flat);
  merged.forEach(group => grid.appendChild(buildMergedCard(group, "clientes", true)));
}

// ============ MODAIS ============

function openAddClientModal(preselectDesigner) {
  document.getElementById("new-cliente-nome").value = "";
  document.getElementById("new-cliente-escopo").value = "PERFORMANCE";
  document.getElementById("new-cliente-atend").value = "";
  const sel = document.getElementById("new-cliente-designer");
  sel.innerHTML = designers.map(d => `<option value="${d}">${d}</option>`).join("");
  if (preselectDesigner) sel.value = preselectDesigner;
  const atendSet = new Set();
  designers.forEach(d => (state[d]||[]).forEach(c => { if (c.atend) atendSet.add(c.atend); }));
  document.getElementById("atend-list").innerHTML = [...atendSet].map(a => `<option value="${a}"></option>`).join("");
  document.getElementById("add-client-modal").classList.remove("hidden");
  document.getElementById("new-cliente-nome").focus();
}
function closeAddClientModal() { document.getElementById("add-client-modal").classList.add("hidden"); }
function submitAddClient() {
  const nome = document.getElementById("new-cliente-nome").value.trim();
  if (!nome) { alert("Digite o nome do cliente."); return; }
  const exists = designers.some(d => (state[d]||[]).some(c => c.cliente.toLowerCase() === nome.toLowerCase()));
  if (exists) { alert("Já existe um cliente com esse nome."); return; }
  const escopo = document.getElementById("new-cliente-escopo").value;
  const atend = document.getElementById("new-cliente-atend").value.trim() || "Sem atendimento";
  const designer = document.getElementById("new-cliente-designer").value;
  saveHistory();
  if (!state[designer]) state[designer] = [];
  state[designer].push({ cliente: nome, escopo, atend, designer, video:"-", email:"-", criativos:0, tempo:0, servicos:[] });
  expandedSet.add(designer);
  closeAddClientModal();
  renderAll();
  scheduleSave();
}

function openAddDesignerModal() {
  document.getElementById("new-designer-nome").value = "";
  document.getElementById("new-designer-role").value = "";
  document.getElementById("add-designer-modal").classList.remove("hidden");
  document.getElementById("new-designer-nome").focus();
}
function closeAddDesignerModal() { document.getElementById("add-designer-modal").classList.add("hidden"); }
function toggleAddMenu(e) {
  e.stopPropagation();
  document.getElementById("add-menu").style.display = document.getElementById("add-menu").style.display === "block" ? "none" : "block";
}
function closeAddMenu() { document.getElementById("add-menu").style.display = "none"; }
document.addEventListener("click", () => closeAddMenu());

function openAddAtendModal() {
  const nome = prompt("Nome da pessoa de atendimento:");
  if (!nome || !nome.trim()) return;
  alert("Atendimento \"" + nome.trim() + "\" será usado assim que você adicionar/editar um cliente com esse nome no campo Atendimento.");
}

function submitAddDesigner() {
  const nome = document.getElementById("new-designer-nome").value.trim();
  if (!nome) { alert("Digite o nome do designer."); return; }
  if (designers.includes(nome)) { alert("Já existe um designer com esse nome."); return; }
  const role = document.getElementById("new-designer-role").value.trim() || "—";
  saveHistory();
  designers.push(nome);
  state[nome] = [];
  designerColors[nome] = COLOR_PALETTE[designers.length % COLOR_PALETTE.length];
  designerRoles[nome] = role;
  expandedSet.add(nome);
  closeAddDesignerModal();
  renderAll();
  scheduleSave();
}

// ============ BUSCA ============

function openSearch() {
  document.getElementById("search-overlay").classList.remove("hidden");
  const inp = document.getElementById("search-input");
  inp.value = ""; inp.focus();
  runSearch("");
}
function closeSearch() { document.getElementById("search-overlay").classList.add("hidden"); }
function runSearch(q) {
  const results = document.getElementById("search-results");
  q = q.trim().toLowerCase();
  let html = "";
  const clientMatches = [];
  designers.forEach(d => (state[d]||[]).forEach(c => { if (!q || c.cliente.toLowerCase().includes(q)) clientMatches.push({cliente:c.cliente, designer:d}); }));
  const designerMatches = designers.filter(d => !q || d.toLowerCase().includes(q));
  if (clientMatches.length) {
    html += `<div class="search-label">Clientes</div>`;
    clientMatches.slice(0,15).forEach(m => {
      html += `<div class="search-result" onclick="closeSearch();openClientDetail('${m.cliente.replace(/'/g,"\\'")}')"><i class="ti ti-user" style="color:#a3a091;font-size:15px;"></i><span class="sr-name">${m.cliente}</span><span class="sr-meta">${m.designer}</span></div>`;
    });
  }
  if (designerMatches.length) {
    html += `<div class="search-label">Designers</div>`;
    designerMatches.forEach(d => {
      html += `<div class="search-result" onclick="goToDesigner('${d.replace(/'/g,"\\'")}');closeSearch()"><i class="ti ti-palette" style="color:#a3a091;font-size:15px;"></i><span class="sr-name">${d}</span><span class="sr-meta">${(state[d]||[]).length} clientes</span></div>`;
    });
  }
  if (!clientMatches.length && !designerMatches.length) html = `<div class="search-empty">Nenhum resultado encontrado.</div>`;
  results.innerHTML = html;
}
function openClientDetail(clienteName) {
  const group = mergeEntriesByClient(getAllClientsFlat()).find(g => normalizeName(g.clienteName) === normalizeName(clienteName));
  if (!group) return;
  const content = document.getElementById("client-detail-content");
  content.innerHTML = "";
  content.appendChild(buildMergedCard(group, "clientes", true));
  document.getElementById("client-detail-overlay").classList.remove("hidden");
}
function closeClientDetail() { document.getElementById("client-detail-overlay").classList.add("hidden"); }
function goToDesigner(d) {
  expandedSet.add(d);
  renderDesigners();
  setTimeout(() => {
    const card = document.querySelector(`.designer-card[data-designer="${CSS.escape(d)}"]`);
    if (card) card.scrollIntoView({ behavior:"smooth", block:"center" });
  }, 100);
}

// ============ EXPORTAR CSV ============
function exportData() {
  let lines = ["Designer,Cliente,Escopo,Atendimento,Serviços,Criativos,Tempo Médio (min)"];
  designers.forEach(d => {
    (state[d]||[]).forEach(c => {
      lines.push(`"${d}","${c.cliente}","${c.escopo}","${c.atend}","${(c.servicos||[]).join('; ')}",${c.criativos||0},${c.tempo||0}`);
    });
  });
  lines.push("");
  lines.push("Totais por designer");
  designers.forEach(d => lines.push(`"${d}",,,,,${totalCriativos(d)},${totalTempoMin(d)}`));
  const blob = new Blob([lines.join("\n")], {type:"text/csv"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "clientes-por-designer.csv";
  a.click();
}

// ============ INTEGRAÇÃO GOOGLE SHEETS ============
const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzzWtG4jkVpLvPwOAHaj-h9KK9k_8N6YWGUXfFtUDSXRiCj7ILDPvuSy9VJXhglTrzEQQ/exec";
let lastSyncedAt = 0;
let saveTimer = null;
let savePending = false;
let isApplyingRemote = false;

function setSyncStatus(mode) {
  const el = document.getElementById("sync-status");
  el.classList.remove("saving", "error");
  if (mode === "saving") { el.classList.add("saving"); el.innerHTML = '<i class="ti ti-cloud-upload"></i> Salvando...'; }
  else if (mode === "error") { el.classList.add("error"); el.innerHTML = '<i class="ti ti-cloud-off"></i> Erro ao salvar'; }
  else if (mode === "loading") { el.innerHTML = '<i class="ti ti-cloud"></i> Carregando...'; }
  else { el.innerHTML = '<i class="ti ti-cloud-check"></i> Sincronizado'; }
}

function buildPayload() {
  return { designers, colors: designerColors, roles: designerRoles, photos: designerPhotos, homeOffice: designerHomeOffice, state };
}
function isUserEditing() {
  const el = document.activeElement;
  return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");
}
function applyRemoteData(data) {
  isApplyingRemote = true;
  if (data.designers) designers = data.designers;
  if (data.colors) Object.assign(designerColors, data.colors);
  if (data.roles) Object.assign(designerRoles, data.roles);
  if (data.photos) designerPhotos = data.photos;
  if (data.homeOffice) designerHomeOffice = data.homeOffice;
  if (data.state) state = data.state;
  designers.forEach(d => { if (!state[d]) state[d] = []; });
  isApplyingRemote = false;
}

async function loadFromSheet() {
  setSyncStatus("loading");
  try {
    const res = await fetch(WEBAPP_URL, { method: "GET" });
    const json = await res.json();
    if (json.ok && !json.empty && json.data) {
      applyRemoteData(json.data);
      lastSyncedAt = json.updatedAt || 0;
      setSyncStatus("idle");
    } else {
      initState();
      await doSave();
    }
  } catch (err) {
    console.error("Falha ao carregar do Google Sheets:", err);
    initState();
    setSyncStatus("error");
  }
}

function scheduleSave() {
  if (isApplyingRemote) return;
  setSyncStatus("saving");
  savePending = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(doSave, 900);
}

async function doSave() {
  savePending = false;
  const payload = buildPayload();
  try {
    const res = await fetch(WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ data: payload })
    });
    const json = await res.json();
    if (json.ok) { lastSyncedAt = json.updatedAt || Date.now(); setSyncStatus("idle"); }
    else throw new Error(json.error || "erro desconhecido");
  } catch (err) {
    console.error("Falha ao salvar no Google Sheets:", err);
    setSyncStatus("error");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(doSave, 4000);
  }
}

async function pollForUpdates() {
  if (savePending || isUserEditing()) return;
  try {
    const res = await fetch(WEBAPP_URL, { method: "GET" });
    const json = await res.json();
    if (json.ok && !json.empty && json.updatedAt && json.updatedAt > lastSyncedAt) {
      applyRemoteData(json.data);
      lastSyncedAt = json.updatedAt;
      renderAll();
      setSyncStatus("idle");
    }
  } catch (err) { console.error("Falha ao verificar atualizações:", err); }
}

(async function start() {
  await loadFromSheet();
  renderAll();
  setInterval(pollForUpdates, 6000);
  loadDriveActivity();
  setInterval(loadDriveActivity, 120000);
  loadRunrunAtividades();
  setInterval(loadRunrunAtividades, 120000);
})();

// ============ ATIVIDADES POR DIA (RUNRUN.IT) ============

async function loadRunrunAtividades() {
  try {
    const res = await fetch(WEBAPP_URL + "?tipo=atividadesPorDia", { method: "GET" });
    const json = await res.json();
    if (!json.ok) { console.error("Falha ao carregar atividades do Runrun.it:", json.error); return; }
    const hoje = new Date().toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" }); // formato AAAA-MM-DD
    atividadesHojePorDesigner = (json.porDia && json.porDia[hoje]) || {};
    renderDesigners();
  } catch (err) {
    console.error("Falha ao carregar atividades do Runrun.it:", err);
  }

  try {
    const res2 = await fetch(WEBAPP_URL + "?tipo=tarefasAbertas", { method: "GET" });
    const json2 = await res2.json();
    if (!json2.ok) { console.error("Falha ao carregar tarefas abertas do Runrun.it:", json2.error); return; }
    tarefasAbertasPorDesigner = json2.porDesigner || {};
    renderDesigners();
  } catch (err) {
    console.error("Falha ao carregar tarefas abertas do Runrun.it:", err);
  }
}

// ============ ATIVIDADES DO DRIVE ============

async function loadDriveActivity() {
  const el = document.getElementById("activity-list");
  const btn = document.getElementById("refresh-activity-btn");
  if (!el) return;
  if (btn) { btn.classList.add("spinning"); btn.disabled = true; }
  el.innerHTML = `<div class="activity-loading"><div class="activity-spinner"></div> Buscando atividades recentes...</div>`;
  try {
    const res = await fetch(WEBAPP_URL + "?tipo=atividades", { method: "GET" });
    const json = await res.json();
    if (!json.ok) {
      el.innerHTML = `<div style="font-size:11px;color:#a3a091;">${json.error || "Não foi possível carregar as atividades do Drive."}</div>`;
      return;
    }
    renderDriveActivity(json.atividades || []);
  } catch (err) {
    console.error("Falha ao carregar atividades do Drive:", err);
    el.innerHTML = `<div style="font-size:11px;color:#a3a091;">Não foi possível carregar as atividades agora. Tente recarregar a página.</div>`;
  } finally {
    if (btn) { btn.classList.remove("spinning"); btn.disabled = false; }
  }
}

function formatQuando(ts) {
  const diffMin = Math.round((Date.now() - ts) / 60000);
  if (diffMin < 1) return "agora mesmo";
  if (diffMin < 60) return diffMin + " min atrás";
  const diffH = Math.round(diffMin / 60);
  if (diffH < 24) return diffH + "h atrás";
  const diffD = Math.round(diffH / 24);
  return diffD + "d atrás";
}

// Agrupa arquivos da mesma pessoa, no mesmo cliente e na mesma pasta de publicação,
// contando quantos arquivos foram enviados e usando o horário do mais recente.
function agruparAtividades(atividades) {
  const grupos = new Map();
  atividades.forEach(a => {
    const chave = a.quem + "|" + a.cliente + "|" + a.pasta;
    if (!grupos.has(chave)) {
      grupos.set(chave, { quem: a.quem, cliente: a.cliente, link: a.link, quando: a.quando, count: 0 });
    }
    const g = grupos.get(chave);
    g.count++;
    if (a.quando > g.quando) g.quando = a.quando;
  });
  return [...grupos.values()].sort((a, b) => b.quando - a.quando);
}

function renderDriveActivity(atividades) {
  const el = document.getElementById("activity-list");
  const grupos = agruparAtividades(atividades);
  if (!grupos.length) {
    el.innerHTML = `<div style="font-size:11px;color:#a3a091;">Nenhum upload recente encontrado.</div>`;
    return;
  }
  el.innerHTML = grupos.map(g => {
    const plural = g.count > 1 ? `${g.count} arquivos` : "1 arquivo";
    return `
      <div class="activity-item">
        <div class="act-dot" style="background:#0000FB;"></div>
        <div class="act-text">
          <strong>${g.quem}</strong> subiu ${plural} em ${g.cliente}
          <a href="${g.link}" target="_blank" rel="noopener" style="margin-left:4px;color:#0000FB;text-decoration:none;">ver</a>
          <span style="color:#a3a091;"> · ${formatQuando(g.quando)}</span>
        </div>
      </div>
    `;
  }).join("");
}
