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
let tarefasDetalhePorDesigner = {}; // lista de tarefas de cada categoria, pro modal
let tarefasPorCliente = {}; // contagem de tarefas em aberto por cliente
let tarefasModalTipo = "designer"; // "designer", "cliente" ou "geral"
let tarefasModalChave = null;
let tarefasModalChaveRunrun = null; // nome exato do cliente no Runrun.it, quando tipo === "cliente"
let tarefasModalCategoria = "atrasadas";
let esforcoHojePorDesigner = {}; // minutos estimados no dia, por designer (baseado no Gantt do Runrun.it)
let esforcoHojeTarefas = {}; // lista de tarefas que compõem esse esforço, por designer
let esforcoModalFiltroDesigner = null; // quando definido, o pop-up de esforço mostra só as tarefas dessa pessoa
let esforcoModalOrdenacao = "data"; // "data" (padrão, mais antiga primeiro), "tempo" ou "aba"
let currentPage = "designers";
let designerHomeOffice = {};
let sortClientesAZ = false;
let expandedAtendSet = new Set();
let expandedServicoSet = new Set();
const PAGE_SUBTITLES = {
  designers: "Clientes por designer",
  atendimento: "Clientes por atendimento",
  servico: "Clientes por serviço",
  clientes: "Todos os clientes",
  config: "Vincular clientes duplicados"
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
  if (page === "config") renderConfigClientes();
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
    <div class="kpi-card clicavel" onclick="abrirTarefasModalGeral('esforco')">
      <div class="kpi-label">Esforço de hoje</div>
      <div class="kpi-esforco-designers" id="kpi-esforco-designers"></div>
    </div>
  `;
  renderEsforcoNoKpi();
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
        <div class="dstat dstat-clicavel" onclick="event.stopPropagation();abrirTarefasModalDesigner('${designer}','atrasadas')"><div class="dstat-num" style="color:#993556;">${dadosRunrun.atrasadas || 0}</div><div class="dstat-label">Atrasadas</div></div>
        <div class="dstat dstat-clicavel" onclick="event.stopPropagation();abrirTarefasModalDesigner('${designer}','hoje')"><div class="dstat-num" style="color:#854F0B;">${dadosRunrun.hoje || 0}</div><div class="dstat-label">Vence hoje</div></div>
        <div class="dstat dstat-clicavel" onclick="event.stopPropagation();abrirTarefasModalDesigner('${designer}','futuras')"><div class="dstat-num" style="color:#3B6D11;">${dadosRunrun.futuras || 0}</div><div class="dstat-label">Futuras</div></div>
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
  card.style.cursor = "pointer";
  card.addEventListener("click", () => abrirTarefasModalCliente(c.cliente));
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

  const clienteRunrunMatch = encontrarClienteRunrun(c.cliente);
  const qtdTarefasRunrun = clienteRunrunMatch ? tarefasPorCliente[clienteRunrunMatch] : 0;
  if (qtdTarefasRunrun) {
    const tarefasBadge = document.createElement("div");
    tarefasBadge.className = "client-tarefas-badge";
    tarefasBadge.innerHTML = `<i class="ti ti-list-check" style="font-size:10px;"></i> ${qtdTarefasRunrun} tarefa${qtdTarefasRunrun > 1 ? "s" : ""} no Runrun.it`;
    card.appendChild(tarefasBadge);
  }

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
  renderRunrunKPIs();
}

function renderRunrunKPIs() {
  const nomes = Object.keys(tarefasAbertasPorDesigner);
  let totalAtrasadas = 0, totalHoje = 0, totalPrioridades = 0;
  nomes.forEach(nome => {
    const d = tarefasAbertasPorDesigner[nome];
    totalAtrasadas += d.atrasadas || 0;
    totalHoje += d.hoje || 0;
  });
  Object.keys(tarefasDetalhePorDesigner).forEach(nome => {
    ["atrasadas", "hoje", "futuras"].forEach(cat => {
      (tarefasDetalhePorDesigner[nome][cat] || []).forEach(t => { if (t.urgente) totalPrioridades++; });
    });
  });
  const totalMes = tarefasMesEAtrasadasDoTime().length;

  const elAtrasadas = document.getElementById("kpi-runrun-atrasadas");
  const elHoje = document.getElementById("kpi-runrun-hoje");
  const elPrioridades = document.getElementById("kpi-runrun-prioridades");
  const elMes = document.getElementById("kpi-runrun-mes");
  if (!elAtrasadas) return; // ainda não carregou os dados do Runrun.it

  elAtrasadas.textContent = totalAtrasadas;
  elHoje.textContent = totalHoje;
  elPrioridades.textContent = totalPrioridades;
  elMes.textContent = totalMes;

  renderEsforcoNoKpi();
}

function renderEsforcoNoKpi() {
  const el = document.getElementById("kpi-esforco-designers");
  if (!el) return;
  const nomes = Object.keys(esforcoHojePorDesigner);
  if (!nomes.length) { el.innerHTML = `<div style="font-size:11px;color:#a3a091;">Carregando...</div>`; return; }
  el.innerHTML = nomes.map(nome => `
    <div class="kpi-esforco-designer-col">
      <div class="kpi-esforco-designer-valor">${formatTempo(esforcoHojePorDesigner[nome] || 0)}</div>
      <div class="kpi-esforco-designer-nome">${nome}</div>
    </div>
  `).join("");
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

// Compara nomes de cliente de forma flexível (o Runrun.it e o painel não
// escrevem os nomes sempre do mesmo jeito: maiúsculas, acentos, hífens...)
function normalizarParaComparar(s) {
  return (s || "")
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
function encontrarClienteRunrun(nomePainel) {
  const alvo = normalizarParaComparar(nomePainel);
  if (!alvo) return null;
  const chaves = Object.keys(tarefasPorCliente);
  for (const k of chaves) if (normalizarParaComparar(k) === alvo) return k;
  for (const k of chaves) {
    const nk = normalizarParaComparar(k);
    if (nk && (nk.includes(alvo) || alvo.includes(nk))) return k;
  }
  return null;
}

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
  card.style.cursor = "pointer";
  card.addEventListener("click", () => abrirTarefasModalCliente(group.clienteName));

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

  const clienteRunrunMatchMerged = encontrarClienteRunrun(group.clienteName);
  const qtdTarefasRunrunMerged = clienteRunrunMatchMerged ? tarefasPorCliente[clienteRunrunMatchMerged] : 0;
  if (qtdTarefasRunrunMerged) {
    const tarefasBadgeMerged = document.createElement("div");
    tarefasBadgeMerged.className = "client-tarefas-badge";
    tarefasBadgeMerged.innerHTML = `<i class="ti ti-list-check" style="font-size:10px;"></i> ${qtdTarefasRunrunMerged} tarefa${qtdTarefasRunrunMerged > 1 ? "s" : ""} no Runrun.it`;
    card.appendChild(tarefasBadgeMerged);
  }

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

// ============ MODAL DE TAREFAS (RUNRUN.IT) ============

function abrirTarefasModalDesigner(designer, categoria) {
  tarefasModalTipo = "designer";
  tarefasModalChave = designer;
  tarefasModalCategoria = categoria;
  renderTarefasModal();
  document.getElementById("tarefas-modal-overlay").classList.remove("hidden");
}
function abrirTarefasModalCliente(nomeCliente) {
  tarefasModalTipo = "cliente";
  tarefasModalChave = nomeCliente;
  tarefasModalChaveRunrun = encontrarClienteRunrun(nomeCliente);
  tarefasModalCategoria = "atrasadas";
  renderTarefasModal();
  document.getElementById("tarefas-modal-overlay").classList.remove("hidden");
}
function abrirTarefasModalGeral(modo) {
  tarefasModalTipo = "geral";
  tarefasModalChave = modo;
  esforcoModalFiltroDesigner = null;
  renderTarefasModal();
  document.getElementById("tarefas-modal-overlay").classList.remove("hidden");
}
function selecionarDesignerEsforco(nome) {
  esforcoModalFiltroDesigner = esforcoModalFiltroDesigner === nome ? null : nome;
  renderTarefasModal();
}
function ordenarEsforco(modo) {
  esforcoModalOrdenacao = modo;
  renderTarefasModal();
}
function closeTarefasModal() { document.getElementById("tarefas-modal-overlay").classList.add("hidden"); }
function trocarAbaTarefasModal(categoria) {
  tarefasModalCategoria = categoria;
  renderTarefasModal();
}
function formatDataTarefa(iso) {
  const [ano, mes, dia] = iso.split("-");
  return dia + "/" + mes;
}
function diasEntreHoje(iso) {
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  const alvo = new Date(iso + "T00:00:00");
  return Math.round((alvo - hoje) / 86400000);
}
function prazoInfo(categoria, data) {
  if (categoria === "hoje") return { texto: "Vence hoje", bg: "#FDF1DC", cor: "#B8791B" };
  if (categoria === "atrasadas") {
    const d = Math.abs(diasEntreHoje(data));
    return { texto: (d === 1 ? "1 dia atrasada" : d + " dias atrasada"), bg: "#FCE9EE", cor: "#C0396B" };
  }
  const d = diasEntreHoje(data);
  return { texto: (d === 1 ? "em 1 dia" : "em " + d + " dias"), bg: "#EEF6E7", cor: "#5A9A34" };
}
function formatDataPorExtenso(iso) {
  const meses = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  const [ano, mes, dia] = iso.split("-");
  return parseInt(dia, 10) + " " + meses[parseInt(mes, 10) - 1];
}

// Junta as tarefas de todos os designers que pertencem a um cliente do Runrun.it,
// já ordenadas por data de entrega desejada.
function tarefasDoClienteRunrun(clienteRunrun) {
  const resultado = { atrasadas: [], hoje: [], futuras: [] };
  if (!clienteRunrun) return resultado;
  Object.keys(tarefasDetalhePorDesigner).forEach(designer => {
    ["atrasadas", "hoje", "futuras"].forEach(cat => {
      (tarefasDetalhePorDesigner[designer][cat] || []).forEach(t => {
        if (t.cliente === clienteRunrun) resultado[cat].push(t);
      });
    });
  });
  ["atrasadas", "hoje", "futuras"].forEach(cat => resultado[cat].sort((a, b) => (a.data || "9999").localeCompare(b.data || "9999")));
  return resultado;
}

function renderTarefaRow(t, categoria, mostrarSubtitulo) {
  const prazo = prazoInfo(categoria, t.data);
  let badgeEntidadeHtml = "";
  if (mostrarSubtitulo === "designer") {
    const col = getColor(t.designer);
    badgeEntidadeHtml = `<span class="tarefas-badge" style="background:${col.bg};color:${col.fg};">${t.designer}</span>`;
  } else if (t.cliente) {
    const clienteCol = COLOR_PALETTE[Math.abs(hashStr(t.cliente)) % COLOR_PALETTE.length];
    badgeEntidadeHtml = `<span class="tarefas-badge" style="background:${clienteCol.bg};color:${clienteCol.fg};">${t.cliente}</span>`;
  }
  const badgeStatusHtml = t.status ? `<span class="tarefas-badge tarefas-badge-status">${t.status}</span>` : "";
  return `
    <div class="tarefas-lista-item" data-task-id="${t.id || ""}">
      <div class="tarefas-lista-item-info">
        <div class="tarefas-lista-item-titulo">${t.urgente ? '<i class="ti ti-flag-filled" style="color:#C0392B;font-size:11px;"></i> ' : ""}${t.titulo}</div>
        <div class="tarefas-lista-item-badges">${badgeEntidadeHtml}${badgeStatusHtml}</div>
      </div>
      <div class="tarefas-lista-item-right">
        ${renderDataEditavelHtml(t)}
        <span class="tarefas-prazo-pill" style="background:${prazo.bg};color:${prazo.cor};">${prazo.texto}</span>
        ${renderEtapaPillHtml(t)}
        <a class="tarefas-lista-item-link" href="${t.link}" target="_blank" rel="noopener" title="Abrir no Runrun.it"><i class="ti ti-external-link"></i></a>
      </div>
    </div>
  `;
}

// ============ EDITAR TAREFA DIRETO NO RUNRUN.IT (nova data / mudar de etapa) ============
// Usado em qualquer lugar que mostre uma tarefa: aba de designer, aba de cliente,
// KPIs gerais (atrasadas/hoje/prioridades/mês) e Esforço diário.

const ETAPAS_MOVIVEIS = [
  { chave: "pendentes", label: "Pendentes", bg: "#F1EFE8", fg: "#78766e" },
  { chave: "prioridades", label: "Prioridades", bg: "#E6F1FB", fg: "#185FA5" },
  { chave: "fazendo", label: "Fazendo", bg: "#FDF1DC", fg: "#B8791B" },
  { chave: "revisao", label: "Revisão", bg: "#F3EEFB", fg: "#6B3FA0" },
  { chave: "ajustes", label: "Ajuste/Refação", bg: "#FCE9EE", fg: "#C0396B" }
];
function estiloDaEtapa(nomeEtapa) {
  const achada = ETAPAS_MOVIVEIS.find(e => e.label === nomeEtapa);
  return achada || { bg: "#F1EFE8", fg: "#78766e" };
}

// Monta o pedacinho de HTML da data clicável (Entrega Desejada) — mesma aparência em todo lugar.
function renderDataEditavelHtml(t) {
  const publicacaoHtml = t.dataPublicacao
    ? `<div class="tarefas-data-publicacao" title="Data de Publicação (Runrun.it)"><i class="ti ti-calendar-event"></i> ${formatDataPorExtenso(t.dataPublicacao)}</div>`
    : "";
  if (!t.id || !t.data) {
    return `<div class="tarefas-data-wrap"><div class="tarefas-data-label">Entrega desejada</div><span class="tarefas-data-texto">${t.data ? formatDataPorExtenso(t.data) : "Sem data"}</span>${publicacaoHtml}</div>`;
  }
  return `
    <div class="tarefas-data-wrap">
      <div class="tarefas-data-label">Entrega desejada</div>
      <span class="tarefas-data-texto tarefas-data-editavel" data-task-id="${t.id}" title="Clique pra trocar a Entrega Desejada" onclick="abrirEdicaoData(${t.id}, '${t.data}', this)">${formatDataPorExtenso(t.data)}</span>
      ${publicacaoHtml}
    </div>
  `;
}

// Cor do pill da data no Esforço de hoje: vermelho se está atrasada, verde se é pra hoje.
function estiloDataEsforco(dataIso) {
  const hojeISO = new Date().toLocaleDateString("sv-SE");
  if (dataIso && dataIso < hojeISO) return { bg: "#FCE9EE", fg: "#C0396B" }; // atrasada
  return { bg: "#EEF6E7", fg: "#5A9A34" }; // hoje (ou futura, caso raro)
}

// Mesma data (Entrega Desejada), só que numa caixinha igual à do tempo estimado —
// usado no Esforço de hoje, onde a data é a mesma usada pra calcular o esforço.
function renderDataPillHtml(t) {
  if (!t.id || !t.data) return `<span class="tarefas-prazo-pill tarefas-pill-largura" style="background:#F1EFE8;color:#78766e;">Sem data</span>`;
  const estilo = estiloDataEsforco(t.data);
  return `<span class="tarefas-prazo-pill tarefas-pill-largura tarefas-data-editavel" data-task-id="${t.id}" style="background:${estilo.bg};color:${estilo.fg};" title="Clique pra trocar a Entrega Desejada" onclick="abrirEdicaoData(${t.id}, '${t.data}', this)">${formatDataPorExtenso(t.data)}</span>`;
}

// Pill que mostra a etapa/aba atual da tarefa no Runrun.it (Pendentes, Prioridades,
// Fazendo, Revisão, Ajuste/Refação...) — clicável pra trocar de etapa.
function renderEtapaPillHtml(t) {
  const estilo = estiloDaEtapa(t.status);
  if (!t.id) return `<span class="tarefas-prazo-pill tarefas-etapa-pill" style="background:${estilo.bg};color:${estilo.fg};">${t.status || "Sem etapa"}</span>`;
  return `<span class="tarefas-prazo-pill tarefas-etapa-pill tarefas-data-editavel" data-task-id="${t.id}" style="background:${estilo.bg};color:${estilo.fg};" title="Clique pra mudar a etapa" onclick="abrirSeletorEtapa(${t.id}, '${t.status}', this)">${t.status || "Sem etapa"}</span>`;
}

async function chamarAcaoRunrun(acao, dados) {
  try {
    const res = await fetch(WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(Object.assign({ acao }, dados))
    });
    return await res.json();
  } catch (err) {
    console.error("Falha ao chamar ação no Runrun.it:", err);
    return { ok: false, error: "Falha de conexão com o painel." };
  }
}

// ---- Painel flutuante compartilhado (calendário e seletor de etapa usam o mesmo mecanismo) ----
let painelFlutuanteAberto = null; // { painel, fecharAoClicarFora } — só um aberto por vez

function fecharPainelFlutuante() {
  if (!painelFlutuanteAberto) return;
  painelFlutuanteAberto.painel.remove();
  document.removeEventListener("mousedown", painelFlutuanteAberto.fecharAoClicarFora);
  painelFlutuanteAberto = null;
}

function abrirPainelFlutuante(ancoraEl, classe) {
  fecharPainelFlutuante();
  const painel = document.createElement("div");
  painel.className = classe;
  document.body.appendChild(painel);

  const rect = ancoraEl.getBoundingClientRect();
  painel.style.top = (rect.bottom + window.scrollY + 6) + "px";
  painel.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - 260) + "px";

  const fecharAoClicarFora = (ev) => {
    if (!painel.contains(ev.target) && ev.target !== ancoraEl) fecharPainelFlutuante();
  };
  setTimeout(() => document.addEventListener("mousedown", fecharAoClicarFora), 0);
  painelFlutuanteAberto = { painel, fecharAoClicarFora };
  return painel;
}

// Abre um mini-calendário flutuante logo abaixo da data clicada, pra escolher a
// nova Entrega Desejada visualmente (em vez do calendário feio do navegador).
function abrirEdicaoData(taskId, dataAtual, ancoraEl) {
  const painel = abrirPainelFlutuante(ancoraEl, "data-picker-panel");
  const [anoIni, mesIni] = dataAtual.split("-").map(Number);
  let mesAtual = mesIni - 1; // JS usa mês de 0 a 11
  let anoAtual = anoIni;

  function renderPainel() {
    const nomesMes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
    const hojeISO = new Date().toLocaleDateString("sv-SE");

    let celulas = "";
    for (let i = 0; i < primeiroDiaSemana; i++) celulas += `<span class="data-picker-dia vazio"></span>`;
    for (let dia = 1; dia <= diasNoMes; dia++) {
      const iso = anoAtual + "-" + String(mesAtual + 1).padStart(2, "0") + "-" + String(dia).padStart(2, "0");
      const classes = "data-picker-dia" + (iso === dataAtual ? " selecionado" : "") + (iso === hojeISO ? " hoje" : "");
      celulas += `<button type="button" class="${classes}" data-iso="${iso}">${dia}</button>`;
    }

    painel.innerHTML = `
      <div class="data-picker-header">
        <button type="button" class="data-picker-nav" data-nav="-1"><i class="ti ti-chevron-left"></i></button>
        <div class="data-picker-mes">${nomesMes[mesAtual]} ${anoAtual}</div>
        <button type="button" class="data-picker-nav" data-nav="1"><i class="ti ti-chevron-right"></i></button>
      </div>
      <div class="data-picker-semana"><span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span></div>
      <div class="data-picker-grid">${celulas}</div>
    `;

    painel.querySelectorAll("[data-nav]").forEach(btn => {
      btn.onclick = () => {
        mesAtual += Number(btn.dataset.nav);
        if (mesAtual < 0) { mesAtual = 11; anoAtual--; }
        if (mesAtual > 11) { mesAtual = 0; anoAtual++; }
        renderPainel();
      };
    });
    painel.querySelectorAll(".data-picker-dia:not(.vazio)").forEach(btn => {
      btn.onclick = () => {
        const isoEscolhido = btn.dataset.iso;
        fecharPainelFlutuante();
        salvarNovaData(taskId, isoEscolhido, ancoraEl);
      };
    });
  }
  renderPainel();
}

// Abre um mini-menu flutuante com as etapas disponíveis, pra mover a tarefa.
function abrirSeletorEtapa(taskId, etapaAtual, ancoraEl) {
  const painel = abrirPainelFlutuante(ancoraEl, "etapa-picker-panel");
  painel.innerHTML = ETAPAS_MOVIVEIS.map(e => `
    <button type="button" class="etapa-picker-item${e.label === etapaAtual ? " atual" : ""}" data-chave="${e.chave}">
      <span class="etapa-picker-dot" style="background:${e.fg};"></span>${e.label}
    </button>
  `).join("");
  painel.querySelectorAll(".etapa-picker-item").forEach(btn => {
    btn.onclick = () => {
      const chaveEscolhida = btn.dataset.chave;
      const etapaEscolhida = ETAPAS_MOVIVEIS.find(e => e.chave === chaveEscolhida);
      fecharPainelFlutuante();
      if (etapaEscolhida.label === etapaAtual) return;
      aplicarNovaEtapaNaTela(taskId, etapaEscolhida.label);
      moverEtapaTarefa(taskId, chaveEscolhida);
    };
  });
}

// Atualiza o(s) pill(s) da data NA HORA (texto + cor por prazo), com uma
// piscadinha de destaque, pra dar feedback imediato antes mesmo do servidor responder.
function aplicarEstiloDataNosPills(taskId, data) {
  const estilo = estiloDataEsforco(data);
  document.querySelectorAll(`.tarefas-data-editavel[data-task-id="${taskId}"]`).forEach(el => {
    el.textContent = formatDataPorExtenso(data);
    el.setAttribute("onclick", `abrirEdicaoData(${taskId}, '${data}', this)`);
    if (el.classList.contains("tarefas-prazo-pill")) {
      el.style.background = estilo.bg;
      el.style.color = estilo.fg;
    }
    el.classList.add("pill-atualizado");
    setTimeout(() => el.classList.remove("pill-atualizado"), 600);
  });
}

// Atualiza o pill da etapa NA HORA, com a mesma piscadinha de destaque.
function aplicarNovaEtapaNaTela(taskId, novaEtapa) {
  const estilo = estiloDaEtapa(novaEtapa);
  document.querySelectorAll(`.tarefas-etapa-pill[data-task-id="${taskId}"]`).forEach(el => {
    el.textContent = novaEtapa;
    el.style.background = estilo.bg;
    el.style.color = estilo.fg;
    el.setAttribute("onclick", `abrirSeletorEtapa(${taskId}, '${novaEtapa}', this)`);
    el.classList.add("pill-atualizado");
    setTimeout(() => el.classList.remove("pill-atualizado"), 600);
  });
}

// Verifica se uma tarefa ainda está na lista carregada de Esforço de hoje.
function encontrarTarefaEmEsforco(taskId) {
  return Object.keys(esforcoHojeTarefas).some(nome => (esforcoHojeTarefas[nome] || []).some(t => t.id === taskId));
}

async function salvarNovaData(taskId, novaData, ancoraEl) {
  // 1) Atualiza a tela NA HORA (pill + cor), sem esperar o servidor.
  aplicarEstiloDataNosPills(taskId, novaData);

  const estaNoEsforco = tarefasModalTipo === "geral" && tarefasModalChave === "esforco";
  const card = estaNoEsforco ? ancoraEl.closest(".tarefas-lista-item") : null;
  if (card) card.classList.add("tarefas-lista-item-processando"); // fica meio apagado enquanto confirma

  // 2) Chama o Runrun.it. IMPORTANTE: só decidimos se o card sai do Esforço de hoje
  // DEPOIS de saber a resposta real — porque o Runrun.it pode manter uma tarefa no
  // esforço de hoje mesmo com a Entrega Desejada no futuro, se o planejamento (Gantt)
  // dele ainda cobrir hoje. Adivinhar isso só pela data (como eu tinha feito antes)
  // fazia o card sumir na hora só pra "voltar" quando você reabria o pop-up, porque
  // o total de verdade nunca tinha mudado.
  const resultado = await chamarAcaoRunrun("trocarDataRunrun", { taskId, novaData });

  if (!resultado.ok) {
    if (card) card.classList.remove("tarefas-lista-item-processando");
    alert("Não consegui trocar a data dessa tarefa — ela foi restaurada: " + (resultado.error || "erro desconhecido"));
    await loadRunrunAtividades();
    renderTarefasModal();
    return;
  }

  // 3) Busca os números de verdade, já recalculados pelo servidor.
  await loadRunrunAtividades();

  if (card && !encontrarTarefaEmEsforco(taskId)) {
    // Confirmado: saiu mesmo do Esforço de hoje. Anima o card sumindo e só então
    // redesenha o total do time e a quantidade de cada designer.
    card.classList.remove("tarefas-lista-item-processando");
    card.classList.add("tarefas-lista-item-saindo");
    setTimeout(() => renderTarefasModal(), 300);
  } else {
    // Continua no Esforço de hoje (ou não estava nessa aba) — só atualiza tudo.
    renderTarefasModal();
  }
}

async function moverEtapaTarefa(taskId, chaveColuna) {
  const resultado = await chamarAcaoRunrun("moverEtapaRunrun", { taskId, chaveColuna });
  if (!resultado.ok) {
    alert("Não consegui mudar a etapa dessa tarefa: " + (resultado.error || "erro desconhecido"));
  }
  await loadRunrunAtividades();
  renderTarefasModal();
}


// Junta uma categoria (atrasadas/hoje) de todos os designers rastreados, ordenada por data.
function tarefasDoTimeInteiro(categoria) {
  const lista = [];
  Object.keys(tarefasDetalhePorDesigner).forEach(designer => {
    (tarefasDetalhePorDesigner[designer][categoria] || []).forEach(t => lista.push(t));
  });
  lista.sort((a, b) => (a.data || "9999").localeCompare(b.data || "9999"));
  return lista;
}
// Junta as tarefas marcadas como urgentes de todo o time, em qualquer categoria de prazo.
function tarefasPrioridadesDoTime() {
  const lista = [];
  Object.keys(tarefasDetalhePorDesigner).forEach(designer => {
    ["atrasadas", "hoje", "futuras"].forEach(cat => {
      (tarefasDetalhePorDesigner[designer][cat] || []).forEach(t => {
        if (t.urgente) lista.push(Object.assign({}, t, { _categoriaReal: cat }));
      });
    });
  });
  lista.sort((a, b) => (a.data || "9999").localeCompare(b.data || "9999"));
  return lista;
}
// Junta tarefas do mês atual (qualquer status) + todas as atrasadas (de qualquer mês).
function tarefasMesEAtrasadasDoTime() {
  const hoje = new Date();
  const anoMes = hoje.getFullYear() + "-" + String(hoje.getMonth() + 1).padStart(2, "0");
  const lista = [];
  Object.keys(tarefasDetalhePorDesigner).forEach(designer => {
    ["atrasadas", "hoje", "futuras"].forEach(cat => {
      (tarefasDetalhePorDesigner[designer][cat] || []).forEach(t => {
        if (cat === "atrasadas" || (t.data && t.data.substring(0, 7) === anoMes)) {
          lista.push(Object.assign({}, t, { _categoriaReal: cat }));
        }
      });
    });
  });
  lista.sort((a, b) => (a.data || "9999").localeCompare(b.data || "9999"));
  return lista;
}

function renderEsforcoRow(t, designer) {
  const col = getColor(designer);
  const publicacaoHtml = t.dataPublicacao
    ? `<span class="tarefas-badge tarefas-badge-publicacao" title="Data de Publicação (Runrun.it)"><i class="ti ti-calendar-event"></i> ${formatDataPorExtenso(t.dataPublicacao)}</span>`
    : "";
  return `
    <div class="tarefas-lista-item" data-task-id="${t.id || ""}">
      <div class="tarefas-lista-item-info">
        <div class="tarefas-lista-item-titulo">${t.titulo}</div>
        <div class="tarefas-lista-item-badges">
          <span class="tarefas-badge" style="background:${col.bg};color:${col.fg};">${designer}</span>
          <span class="tarefas-badge" style="background:${COLOR_PALETTE[Math.abs(hashStr(t.cliente)) % COLOR_PALETTE.length].bg};color:${COLOR_PALETTE[Math.abs(hashStr(t.cliente)) % COLOR_PALETTE.length].fg};">${t.cliente}</span>
          ${publicacaoHtml}
        </div>
      </div>
      <div class="tarefas-lista-item-right">
        ${renderDataPillHtml(t)}
        <span class="tarefas-prazo-pill tarefas-pill-largura" style="background:#EEF6E7;color:#5A9A34;">${formatTempo(t.estimativaMin)}</span>
        ${renderEtapaPillHtml(t)}
        <a class="tarefas-lista-item-link" href="${t.link}" target="_blank" rel="noopener" title="Abrir no Runrun.it"><i class="ti ti-external-link"></i></a>
      </div>
    </div>
  `;
}

function renderTarefasModalGeral(content) {
  const modo = tarefasModalChave;
  const config = {
    atrasadas: { titulo: "Tarefas atrasadas", icone: "ti-alert-triangle", bg: "#FCE9EE", cor: "#C0396B" },
    hoje: { titulo: "Tarefas para hoje", icone: "ti-calendar-due", bg: "#FDF1DC", cor: "#B8791B" },
    prioridades: { titulo: "Prioridades", icone: "ti-flag-filled", bg: "#E6F1FB", cor: "#185FA5" },
    esforco: { titulo: "Esforço de hoje", icone: "ti-chart-bar", bg: "#EEF6E7", cor: "#5A9A34" },
    mes: { titulo: "Tarefas do mês", icone: "ti-calendar-stats", bg: "#F3EEFB", cor: "#6B3FA0" }
  }[modo];

  let listaHtml = "";
  let subtitulo = "";

  if (modo === "atrasadas" || modo === "hoje") {
    const lista = tarefasDoTimeInteiro(modo);
    subtitulo = lista.length + " tarefa(s) de todo o time";
    listaHtml = lista.length ? lista.map(t => renderTarefaRow(t, modo, "designer")).join("") : `<div class="tarefas-lista-vazio">Nenhuma tarefa nessa categoria.</div>`;
  } else if (modo === "prioridades") {
    const lista = tarefasPrioridadesDoTime();
    subtitulo = lista.length + " tarefa(s) urgente(s)";
    listaHtml = lista.length ? lista.map(t => renderTarefaRow(t, t._categoriaReal, "designer")).join("") : `<div class="tarefas-lista-vazio">Nenhuma tarefa urgente no momento.</div>`;
  } else if (modo === "mes") {
    const lista = tarefasMesEAtrasadasDoTime();
    subtitulo = lista.length + " tarefa(s) do mês (inclui atrasadas)";
    listaHtml = lista.length ? lista.map(t => renderTarefaRow(t, t._categoriaReal, "designer")).join("") : `<div class="tarefas-lista-vazio">Nenhuma tarefa nesse período.</div>`;
  } else if (modo === "esforco") {
    const nomes = Object.keys(esforcoHojeTarefas);
    const totalMin = nomes.reduce((s, n) => s + (esforcoHojePorDesigner[n] || 0), 0);
    subtitulo = "Total do time: " + formatTempo(totalMin);
    const tiraDesigners = `
      <div class="esforco-modal-tira">
        ${nomes.map(nome => {
          const col = getColor(nome);
          const foto = designerPhotos[nome];
          const avatarHtml = foto
            ? `<img src="${foto}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
            : initials(nome);
          const selecionado = esforcoModalFiltroDesigner === nome ? " selecionado" : "";
          const qtdTarefas = (esforcoHojeTarefas[nome] || []).length;
          return `
            <div class="esforco-modal-tira-item${selecionado}" onclick="selecionarDesignerEsforco('${nome}')">
              <div class="esforco-modal-tira-avatar" style="background:${col.bg};color:${col.fg};">${avatarHtml}</div>
              <div class="esforco-modal-tira-nome">${nome}</div>
              <div class="esforco-modal-tira-tempo">${formatTempo(esforcoHojePorDesigner[nome] || 0)}</div>
              <div class="esforco-modal-tira-qtd">${qtdTarefas} tarefa${qtdTarefas === 1 ? "" : "s"}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
    let linhas = [];
    nomes.forEach(nome => {
      if (esforcoModalFiltroDesigner && esforcoModalFiltroDesigner !== nome) return;
      (esforcoHojeTarefas[nome] || []).forEach(t => linhas.push({ t, nome }));
    });

    if (esforcoModalOrdenacao === "tempo") {
      linhas.sort((a, b) => (b.t.estimativaMin || 0) - (a.t.estimativaMin || 0));
    } else if (esforcoModalOrdenacao === "aba") {
      const ordemEtapa = {};
      ETAPAS_MOVIVEIS.forEach((e, i) => { ordemEtapa[e.label] = i; });
      linhas.sort((a, b) => {
        const ia = ordemEtapa.hasOwnProperty(a.t.status) ? ordemEtapa[a.t.status] : 99;
        const ib = ordemEtapa.hasOwnProperty(b.t.status) ? ordemEtapa[b.t.status] : 99;
        return ia - ib;
      });
    } else {
      linhas.sort((a, b) => (a.t.data || "9999").localeCompare(b.t.data || "9999"));
    }

    const botoesOrdenar = `
      <div class="esforco-ordenar-row">
        <span class="esforco-ordenar-label">Ordenar por:</span>
        <button class="sort-btn${esforcoModalOrdenacao === "data" ? " active" : ""}" onclick="ordenarEsforco('data')">Data</button>
        <button class="sort-btn${esforcoModalOrdenacao === "tempo" ? " active" : ""}" onclick="ordenarEsforco('tempo')">Tempo</button>
        <button class="sort-btn${esforcoModalOrdenacao === "aba" ? " active" : ""}" onclick="ordenarEsforco('aba')">Aba</button>
      </div>
    `;

    const linhasHtml = linhas.map(({ t, nome }) => renderEsforcoRow(t, nome)).join("");
    listaHtml = tiraDesigners + botoesOrdenar + (linhasHtml || `<div class="tarefas-lista-vazio">Nenhuma tarefa planejada pra hoje no Gantt.</div>`);
  }

  content.innerHTML = `
    <div class="tarefas-modal-header">
      <div class="tarefas-modal-avatar" style="background:${config.bg};color:${config.cor};"><i class="ti ${config.icone}"></i></div>
      <div>
        <div class="tarefas-modal-title">${config.titulo}</div>
        <div class="tarefas-modal-subtitle">${subtitulo}</div>
      </div>
    </div>
    <div id="tarefas-modal-lista">${listaHtml}</div>
  `;
}

function renderTarefasModal() {
  const content = document.getElementById("tarefas-modal-content");

  if (tarefasModalTipo === "geral") {
    renderTarefasModalGeral(content);
    return;
  }

  const abas = [
    { key: "atrasadas", label: "Atrasadas" },
    { key: "hoje", label: "Vence hoje" },
    { key: "futuras", label: "Futuras" }
  ];
  let headerHtml, contagens, dados, subtituloRow;

  if (tarefasModalTipo === "designer") {
    const designer = tarefasModalChave;
    dados = tarefasDetalhePorDesigner[designer] || { atrasadas: [], hoje: [], futuras: [] };
    contagens = tarefasAbertasPorDesigner[designer] || { atrasadas: 0, hoje: 0, futuras: 0 };
    const col = getColor(designer);
    const fotoDesigner = designerPhotos[designer];
    const avatarHtml = fotoDesigner
      ? `<img src="${fotoDesigner}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
      : initials(designer);
    subtituloRow = "cliente";
    headerHtml = `
      <div class="tarefas-modal-avatar" style="background:${col.bg};color:${col.fg};">${avatarHtml}</div>
      <div>
        <div class="tarefas-modal-title">${designer}</div>
        <div class="tarefas-modal-subtitle">Tarefas em aberto no Runrun.it</div>
      </div>
    `;
  } else {
    const nomeCliente = tarefasModalChave;
    dados = tarefasDoClienteRunrun(tarefasModalChaveRunrun);
    contagens = { atrasadas: dados.atrasadas.length, hoje: dados.hoje.length, futuras: dados.futuras.length };
    const clientCol = COLOR_PALETTE[Math.abs(hashStr(nomeCliente)) % COLOR_PALETTE.length];
    subtituloRow = "designer";
    headerHtml = `
      <div class="tarefas-modal-avatar" style="background:${clientCol.bg};color:${clientCol.fg};">${initials(nomeCliente)}</div>
      <div>
        <div class="tarefas-modal-title">${nomeCliente}</div>
        <div class="tarefas-modal-subtitle">${contagens.atrasadas + contagens.hoje + contagens.futuras} tarefa(s) em aberto no Runrun.it</div>
      </div>
    `;
  }

  let infoClienteHtml = "";
  if (tarefasModalTipo === "cliente") {
    const nomeCliente = tarefasModalChave;
    const grupoLocal = mergeEntriesByClient(getAllClientsFlat()).find(g => normalizeName(g.clienteName) === normalizeName(nomeCliente));
    if (grupoLocal) {
      infoClienteHtml = `
        <div class="cliente-info-grid">
          ${grupoLocal.entries.map(({c, designer}) => {
            const col = getColor(designer);
            const fotoDesigner = designerPhotos[designer];
            const avatarDesigner = fotoDesigner
              ? `<img src="${fotoDesigner}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
              : initials(designer);
            const atendFoto = ATENDIMENTO_PHOTOS[c.atend] || null;
            const avatarAtend = atendFoto
              ? `<img src="${atendFoto}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
              : initials(c.atend || "?");
            const tagsHtml = (c.servicos || []).map(s => {
              const st = getServicoStyle(s);
              return `<span class="tarefas-badge" style="background:${st.bg};color:${st.color};">${s}</span>`;
            }).join("");
            return `
              <div class="cliente-info-card">
                <div class="cliente-info-pessoa">
                  <div class="cliente-info-avatar" style="background:${col.bg};color:${col.fg};">${avatarDesigner}</div>
                  <div>
                    <div class="cliente-info-pessoa-label">Designer</div>
                    <div class="cliente-info-pessoa-nome">${designer}</div>
                  </div>
                </div>
                <div class="cliente-info-pessoa">
                  <div class="cliente-info-avatar" style="background:#F1EFE8;color:#78766e;">${avatarAtend}</div>
                  <div>
                    <div class="cliente-info-pessoa-label">Atendimento</div>
                    <div class="cliente-info-pessoa-nome">${c.atend || "Sem atendimento"}</div>
                  </div>
                </div>
                <div class="cliente-info-stats">
                  <div class="cliente-info-stat"><div class="cliente-info-stat-num">${c.criativos || 0}</div><div class="cliente-info-stat-label">Criativos</div></div>
                  <div class="cliente-info-stat"><div class="cliente-info-stat-num">${formatTempo(c.tempo || 0)}</div><div class="cliente-info-stat-label">Tempo médio</div></div>
                </div>
                ${tagsHtml ? `<div class="cliente-info-tags">${tagsHtml}</div>` : ""}
              </div>
            `;
          }).join("")}
        </div>
      `;
    }
  }

  const lista = dados[tarefasModalCategoria] || [];

  content.innerHTML = `
    <div class="tarefas-modal-header">${headerHtml}</div>
    ${infoClienteHtml}
    <div class="tarefas-tabs">
      ${abas.map(a => `
        <button class="tarefas-tab${a.key === tarefasModalCategoria ? " active" : ""}" onclick="trocarAbaTarefasModal('${a.key}')">
          ${a.label} <span class="tarefas-tab-count">(${contagens[a.key] || 0})</span>
        </button>
      `).join("")}
    </div>
    <div id="tarefas-modal-lista">
      ${lista.length ? lista.map(t => renderTarefaRow(t, tarefasModalCategoria, subtituloRow)).join("") : `<div class="tarefas-lista-vazio">Nenhuma tarefa nessa categoria.</div>`}
    </div>
  `;
}
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
  const banner = document.getElementById("runrun-loading-banner");
  if (banner) banner.classList.remove("hidden");

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
    tarefasDetalhePorDesigner = json2.tarefas || {};
    tarefasPorCliente = json2.porCliente || {};
    esforcoHojePorDesigner = json2.esforcoHoje || {};
    esforcoHojeTarefas = json2.esforcoHojeTarefas || {};
    renderAll();
  } catch (err) {
    console.error("Falha ao carregar tarefas abertas do Runrun.it:", err);
  } finally {
    if (banner) banner.classList.add("hidden");
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

// ============ CONFIGURAÇÕES — VINCULAR CLIENTES DUPLICADOS ============
// Junta os clientes que aparecem no painel, no Runrun.it e no Drive, e deixa
// selecionar vários (de fontes diferentes) e linkar como sendo o mesmo cliente
// — útil quando o mesmo cliente tem nomes escritos diferente em cada lugar.

let configClientesDados = null; // { painel, runrun, drive, driveErro, vinculos }
let configSelecionados = []; // nomes selecionados nessa passada, pra linkar
let configMensagem = null; // { tipo: "sucesso"|"erro", texto } — aviso temporário no topo da página
let configGruposAbertos = {}; // canonico -> true/false, controla quais grupos da coluna "Vinculados" estão abertos

async function renderConfigClientes() {
  const container = document.getElementById("config-clientes-container");
  container.innerHTML = `<div class="config-loading"><div class="loading-spin"></div> Carregando clientes do painel, Runrun.it e Drive...</div>`;

  try {
    const res = await fetch(WEBAPP_URL + "?tipo=configClientes", { method: "GET" });
    configClientesDados = await res.json();
  } catch (err) {
    container.innerHTML = `<div class="config-erro">Não consegui carregar os clientes: ${err.message}</div>`;
    return;
  }

  configSelecionados = [];
  desenharConfigClientes();
}

function jaEstaVinculado(nome) {
  if (!configClientesDados) return false;
  const alvo = normalizarParaComparar(nome);
  return configClientesDados.vinculos.some(v => normalizarParaComparar(v.origem) === alvo || normalizarParaComparar(v.canonico) === alvo);
}

function chipSelecionadoClass(nome) {
  return configSelecionados.includes(nome) ? " selecionado" : "";
}

function desenharConfigClientes() {
  const container = document.getElementById("config-clientes-container");
  if (!configClientesDados || !configClientesDados.ok) {
    container.innerHTML = `<div class="config-erro">Não consegui carregar os clientes.</div>`;
    return;
  }
  const d = configClientesDados;

  const colunaHtml = (titulo, icone, nomes) => `
    <div class="config-coluna">
      <div class="config-coluna-titulo"><i class="ti ${icone}"></i> ${titulo} <span class="config-coluna-qtd">${nomes.length}</span></div>
      <div class="config-coluna-lista">
        ${nomes.length ? nomes.map(nome => `
          <button type="button" class="config-chip${chipSelecionadoClass(nome)}${jaEstaVinculado(nome) ? " ja-vinculado" : ""}" onclick="toggleSelecaoConfig('${nome.replace(/'/g, "\\'")}')">
            ${jaEstaVinculado(nome) ? '<i class="ti ti-link"></i> ' : ""}${nome}
          </button>
        `).join("") : `<div class="config-vazio">Nenhum cliente encontrado aqui.</div>`}
      </div>
    </div>
  `;

  const vinculosAgrupados = {}; // nome do painel (canônico) -> lista de nomes ligados a ele
  d.vinculos.forEach(v => {
    if (!vinculosAgrupados[v.canonico]) vinculosAgrupados[v.canonico] = [];
    vinculosAgrupados[v.canonico].push(v.origem);
  });
  const nomesCanonicos = Object.keys(vinculosAgrupados).sort();

  const colunaVinculadosHtml = `
    <div class="config-coluna config-coluna-vinculados">
      <div class="config-coluna-titulo"><i class="ti ti-link"></i> Vinculados <span class="config-coluna-qtd">${nomesCanonicos.length}</span></div>
      <div class="config-coluna-lista">
        ${nomesCanonicos.length ? nomesCanonicos.map(canonico => {
          const aberto = !!configGruposAbertos[canonico];
          const origens = vinculosAgrupados[canonico];
          return `
            <div class="config-vinculo-grupo">
              <button type="button" class="config-vinculo-cabecalho" onclick="toggleGrupoVinculado('${canonico.replace(/'/g, "\\'")}')">
                <span>${canonico}</span>
                <span class="config-vinculo-cabecalho-direita">
                  <span class="config-coluna-qtd">${origens.length}</span>
                  <i class="ti ti-chevron-down config-vinculo-seta${aberto ? " aberta" : ""}"></i>
                </span>
              </button>
              ${aberto ? `
                <div class="config-vinculo-corpo">
                  ${origens.map(origem => `
                    <div class="config-vinculo-item">
                      <span>${origem}</span>
                      <button type="button" class="mini-icon-btn" title="Desvincular" onclick="desvincularClienteConfig('${origem.replace(/'/g, "\\'")}')"><i class="ti ti-unlink"></i></button>
                    </div>
                  `).join("")}
                </div>
              ` : ""}
            </div>
          `;
        }).join("") : `<div class="config-vazio">Nenhum vínculo ainda. Selecione nomes nas colunas ao lado e clique em "Linkar".</div>`}
      </div>
    </div>
  `;

  const avisoHtml = configMensagem ? `
    <div class="config-aviso config-aviso-${configMensagem.tipo}" id="config-aviso">
      <i class="ti ${configMensagem.tipo === "sucesso" ? "ti-circle-check" : "ti-alert-circle"}"></i> ${configMensagem.texto}
    </div>
  ` : "";

  container.innerHTML = `
    ${avisoHtml}
    <p class="config-explicacao">Selecione os nomes que são o mesmo cliente (pode escolher um de cada coluna, ou vários da mesma) e clique em "Linkar selecionados". Na coluna "Vinculados", clique no nome pra abrir e ver o que está ligado a ele.</p>
    <div class="config-colunas">
      ${colunaHtml("No painel", "ti-layout-columns", d.painel)}
      ${colunaHtml("No Runrun.it", "ti-checkbox", d.runrun)}
      ${colunaHtml("No Drive", "ti-folder", d.drive)}
      ${colunaVinculadosHtml}
    </div>
    ${d.driveErro ? `<p class="config-erro">Drive: ${d.driveErro}</p>` : ""}
    <div class="config-barra-acao${configSelecionados.length >= 2 ? " visivel" : ""}">
      <span>${configSelecionados.length} selecionado(s)</span>
      <button type="button" class="btn btn-primary" onclick="linkarClientesSelecionados()"><i class="ti ti-link"></i> Linkar selecionados</button>
      <button type="button" class="btn" onclick="limparSelecaoConfig()">Limpar seleção</button>
    </div>
  `;

  if (configMensagem) {
    configMensagem = null; // já mostrou, some sozinho em seguida
    const avisoEl = document.getElementById("config-aviso");
    if (avisoEl) setTimeout(() => avisoEl.classList.add("sumindo"), 3000);
  }
}

function toggleGrupoVinculado(canonico) {
  configGruposAbertos[canonico] = !configGruposAbertos[canonico];
  desenharConfigClientes();
}

function toggleSelecaoConfig(nome) {
  const idx = configSelecionados.indexOf(nome);
  if (idx === -1) configSelecionados.push(nome);
  else configSelecionados.splice(idx, 1);
  desenharConfigClientes();
}

function limparSelecaoConfig() {
  configSelecionados = [];
  desenharConfigClientes();
}

async function linkarClientesSelecionados() {
  if (configSelecionados.length < 2) return;
  const nomes = [...configSelecionados];
  const resultado = await chamarAcaoRunrun("linkarClientes", { nomes });
  if (!resultado.ok) {
    configMensagem = { tipo: "erro", texto: "Não consegui linkar esses clientes: " + (resultado.error || "erro desconhecido") };
    desenharConfigClientes();
    return;
  }
  configMensagem = { tipo: "sucesso", texto: `Vinculado! ${nomes.join(" + ")} agora são o mesmo cliente (${resultado.canonico}).` };
  configGruposAbertos[resultado.canonico] = true; // já abre o grupo pra confirmar visualmente
  await renderConfigClientesMantendoAviso();
}

async function desvincularClienteConfig(nomeOrigem) {
  const resultado = await chamarAcaoRunrun("desvincularCliente", { nomeOrigem });
  if (!resultado.ok) {
    configMensagem = { tipo: "erro", texto: "Não consegui desvincular: " + (resultado.error || "erro desconhecido") };
    desenharConfigClientes();
    return;
  }
  configMensagem = { tipo: "sucesso", texto: `"${nomeOrigem}" foi desvinculado.` };
  await renderConfigClientesMantendoAviso();
}

// Igual ao renderConfigClientes, mas sem apagar o aviso que acabou de ser
// definido (renderConfigClientes normal reseta tudo, inclusive a mensagem).
async function renderConfigClientesMantendoAviso() {
  const avisoPendente = configMensagem;
  try {
    const res = await fetch(WEBAPP_URL + "?tipo=configClientes", { method: "GET" });
    configClientesDados = await res.json();
  } catch (err) {
    configMensagem = { tipo: "erro", texto: "Vinculei, mas não consegui recarregar a lista: " + err.message };
    desenharConfigClientes();
    return;
  }
  configSelecionados = [];
  configMensagem = avisoPendente;
  desenharConfigClientes();
}
