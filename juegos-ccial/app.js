/* =========================================
   JUEGOS CCI AL — app.js
   ========================================= */

// ── Estado global ───────────────────────────────────────────────
const state = {
  categoria: "campamento",
  categoriaDesc: "actividades al aire libre, naturaleza y convivencia",
  categoriaEmoji: "🏕️",
  categoriaLabel: "Campamento",
  tipo: "niños",
};

// ── Referencias DOM ─────────────────────────────────────────────
const categoriesGrid  = document.getElementById("categoriesGrid");
const tipoGrid        = document.getElementById("tipoGrid");
const inputTiempo     = document.getElementById("inputTiempo");
const inputCantidad   = document.getElementById("inputCantidad");
const generateBtn     = document.getElementById("generateBtn");
const errorBox        = document.getElementById("errorBox");
const resultsSection  = document.getElementById("resultsSection");
const gamesList       = document.getElementById("gamesList");
const resultsCount    = document.getElementById("resultsCount");
const resultsTime     = document.getElementById("resultsTime");
const formCatEmoji    = document.getElementById("formCatEmoji");
const formCatLabel    = document.getElementById("formCatLabel");

// ── Categorías ──────────────────────────────────────────────────
categoriesGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  state.categoria     = btn.dataset.cat;
  state.categoriaDesc = btn.dataset.desc;
  state.categoriaEmoji = btn.querySelector(".cat-emoji").textContent;
  state.categoriaLabel = btn.querySelector(".cat-name").textContent;

  formCatEmoji.textContent = state.categoriaEmoji;
  formCatLabel.textContent = state.categoriaLabel;

  // Limpiar resultados al cambiar categoría
  clearResults();
});

// ── Tipo de grupo ───────────────────────────────────────────────
tipoGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".tipo-btn");
  if (!btn) return;

  document.querySelectorAll(".tipo-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  state.tipo = btn.dataset.tipo;
});

// ── Generar juegos ──────────────────────────────────────────────
generateBtn.addEventListener("click", generateGames);

async function generateGames() {
  const tiempo   = inputTiempo.value.trim();
  const cantidad = inputCantidad.value.trim();

  if (!tiempo || !cantidad) return;

  setLoading(true);
  clearResults();
  hideError();

  const prompt = `Genera exactamente ${cantidad} juegos grupales para ${state.tipo} que puedan realizarse en un total de ${tiempo} minutos.
Distribuye el tiempo para que todos los juegos sumen aproximadamente ${tiempo} minutos.
El contexto es: ${state.categoriaLabel} — los juegos deben ser apropiados para ${state.categoriaDesc}.

Responde ÚNICAMENTE con JSON válido con este formato exacto:
{
  "juegos": [
    {
      "nombre": "Nombre del juego",
      "duracion": "X min",
      "explicacion": "Explicación clara de cómo se juega en 2-3 oraciones.",
      "materiales": ["material1", "material2"]
    }
  ]
}
Si no se necesitan materiales, usa array vacío []. No incluyas texto fuera del JSON.`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    const text  = (data.content || []).map(c => c.text || "").join("");
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    renderGames(parsed.juegos || [], tiempo);
  } catch (err) {
    showError();
  } finally {
    setLoading(false);
  }
}

// ── Render de juegos ─────────────────────────────────────────────
function renderGames(juegos, tiempoTotal) {
  if (!juegos.length) return;

  const totalMin = juegos.reduce((sum, g) => sum + (parseInt(g.duracion) || 0), 0);

  resultsCount.textContent = `${juegos.length} juego${juegos.length !== 1 ? "s" : ""} — ${state.categoriaEmoji} ${state.categoriaLabel}`;
  resultsTime.textContent  = `⏱ ~${totalMin} min total`;

  gamesList.innerHTML = "";

  juegos.forEach((game, index) => {
    const card = createGameCard(game, index);
    gamesList.appendChild(card);
  });

  resultsSection.classList.remove("hidden");

  // Scroll suave hacia resultados
  setTimeout(() => {
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

function createGameCard(game, index) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.style.animationDelay = `${index * 0.08}s`;

  const hasMaterials = game.materiales && game.materiales.length > 0;

  card.innerHTML = `
    <div class="game-card-header" role="button" aria-expanded="false">
      <div class="game-number">${index + 1}</div>
      <div class="game-info">
        <div class="game-name">${escapeHtml(game.nombre)}</div>
        <div class="game-duration">⏱ ${escapeHtml(game.duracion)}</div>
      </div>
      <div class="game-toggle">▾</div>
    </div>
    <div class="game-card-body">
      <p class="game-explanation">${escapeHtml(game.explicacion)}</p>
      ${hasMaterials ? `
        <div class="materials-title">📦 Materiales</div>
        <div class="materials-list">
          ${game.materiales.map(m => `<span class="material-tag">${escapeHtml(m)}</span>`).join("")}
        </div>
      ` : ""}
    </div>
  `;

  // Toggle abre/cierra
  const header = card.querySelector(".game-card-header");
  header.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    header.setAttribute("aria-expanded", isOpen);
  });

  return card;
}

// ── Helpers ──────────────────────────────────────────────────────
function setLoading(isLoading) {
  generateBtn.disabled = isLoading;
  if (isLoading) {
    generateBtn.classList.add("loading");
    generateBtn.querySelector(".btn-text").textContent = "Generando juegos...";
    generateBtn.querySelector(".btn-icon").textContent = "✨";
  } else {
    generateBtn.classList.remove("loading");
    generateBtn.querySelector(".btn-text").textContent = "Generar Juegos";
    generateBtn.querySelector(".btn-icon").textContent = "🔥";
  }
}

function clearResults() {
  resultsSection.classList.add("hidden");
  gamesList.innerHTML = "";
}

function showError() {
  errorBox.classList.remove("hidden");
}

function hideError() {
  errorBox.classList.add("hidden");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
