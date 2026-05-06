const state = {
  categoria: "campamento",
  categoriaDesc: "actividades al aire libre, naturaleza y convivencia",
  categoriaEmoji: "🏕️",
  categoriaLabel: "Campamento",
  tipo: "niños",
};

const gameBank = {
  campamento: [
    {
      nombre: "Mapa del Tesoro Bíblico",
      explicacion: "Los equipos reciben pistas escondidas y avanzan de estación en estación hasta encontrar el tesoro. En cada punto resuelven una pregunta, un reto físico corto o una reflexión relacionada con el tema del día.",
      materiales: ["pistas impresas", "cinta", "premio simbólico"],
    },
    {
      nombre: "Nudos de Cooperación",
      explicacion: "Cada equipo debe desatar o armar una serie de nudos sencillos siguiendo instrucciones limitadas. El reto destaca la comunicación, la paciencia y la ayuda mutua.",
      materiales: ["cuerdas"],
    },
    {
      nombre: "Relevo del Buen Samaritano",
      explicacion: "Los equipos completan un circuito llevando objetos de ayuda de una estación a otra. Gana el grupo que termina el recorrido cuidando que todos participen y nadie quede atrás.",
      materiales: ["conos", "pañuelos", "botiquín simulado"],
    },
    {
      nombre: "Construye el Refugio",
      explicacion: "Los equipos diseñan una pequeña estructura o refugio usando materiales sencillos. Al final explican qué decisiones tomaron y cómo se organizaron para trabajar juntos.",
      materiales: ["palos", "cuerda", "mantas"],
    },
    {
      nombre: "Sendero de Confianza",
      explicacion: "Una persona avanza con los ojos cubiertos mientras su equipo la guía con instrucciones claras. Después cambian roles y conversan sobre escuchar, confiar y cuidar.",
      materiales: ["vendas", "conos"],
    },
    {
      nombre: "Reto del Agua Compartida",
      explicacion: "Los equipos trasladan agua de un punto a otro usando recipientes pequeños. La meta es cuidar el recurso, coordinarse y decidir la mejor estrategia.",
      materiales: ["vasos", "cubetas", "agua"],
    },
    {
      nombre: "Fogata de Historias",
      explicacion: "Cada equipo recibe palabras clave y prepara una historia breve con inicio, problema y aprendizaje. Luego la comparte con el grupo como cierre creativo.",
      materiales: ["tarjetas", "lápices"],
    },
    {
      nombre: "Búsqueda de la Creación",
      explicacion: "Los equipos buscan elementos naturales seguros y los conectan con una idea de gratitud, cuidado o mayordomía. La actividad termina con una presentación breve.",
      materiales: ["lista de búsqueda", "bolsas pequeñas"],
    },
    {
      nombre: "La Brújula Humana",
      explicacion: "El grupo debe ubicarse según indicaciones de dirección, valores o decisiones. Cada movimiento abre una pregunta rápida sobre liderazgo y propósito.",
      materiales: ["carteles de norte, sur, este y oeste"],
    },
    {
      nombre: "Circuito de Servicio",
      explicacion: "Los equipos pasan por estaciones donde ayudan a completar tareas sencillas para otros. La dinámica enfatiza que servir también puede ser alegre y colaborativo.",
      materiales: ["conos", "tarjetas de retos"],
    },
  ],
  reunion: [
    {
      nombre: "Entrevistas Relámpago",
      explicacion: "Las personas conversan en parejas durante rondas cortas usando preguntas preparadas. En cada cambio presentan algo positivo que descubrieron de su compañero.",
      materiales: ["tarjetas de preguntas"],
    },
    {
      nombre: "La Red de Nombres",
      explicacion: "El grupo forma un círculo y lanza una madeja mientras dice su nombre y una respuesta breve. Al final observan la red formada y conectan la imagen con comunidad.",
      materiales: ["madeja de lana"],
    },
    {
      nombre: "Misión en Silencio",
      explicacion: "Los equipos deben ordenar objetos, formar una figura o resolver una tarea sin hablar. La reflexión se centra en lenguaje corporal, atención y liderazgo compartido.",
      materiales: ["tarjetas", "objetos pequeños"],
    },
    {
      nombre: "Bingo de Comunidad",
      explicacion: "Cada persona busca compañeros que coincidan con frases del tablero. La meta es conversar con la mayor variedad posible de participantes.",
      materiales: ["hojas de bingo", "lápices"],
    },
    {
      nombre: "Puente de Papel",
      explicacion: "Los equipos construyen un puente con papel y cinta que pueda sostener un objeto. Luego comparten qué decisiones ayudaron o dificultaron el trabajo.",
      materiales: ["papel", "cinta", "objeto pequeño"],
    },
    {
      nombre: "Historias en Tres Palabras",
      explicacion: "Cada equipo recibe tres palabras inesperadas y crea una historia corta que incluya un valor del grupo. El ejercicio activa creatividad y escucha.",
      materiales: ["tarjetas con palabras"],
    },
    {
      nombre: "Semáforo de Ideas",
      explicacion: "El facilitador lee situaciones y el grupo responde con tarjetas de colores: avanzar, pausar o ajustar. Después explican brevemente sus decisiones.",
      materiales: ["tarjetas verde, amarilla y roja"],
    },
    {
      nombre: "Torre de Acuerdos",
      explicacion: "Antes de colocar cada pieza de una torre, el equipo debe decir un acuerdo práctico para convivir mejor. Si la torre cae, reconstruyen priorizando los acuerdos esenciales.",
      materiales: ["bloques o vasos"],
    },
    {
      nombre: "Memoria de Gratitud",
      explicacion: "El grupo crea pares de tarjetas con motivos de gratitud y acciones concretas. Luego juegan memoria y comentan cómo practicar esas acciones durante la semana.",
      materiales: ["tarjetas", "marcadores"],
    },
    {
      nombre: "Cambio de Lugar",
      explicacion: "Una persona lee frases y quienes se identifican cambian de asiento. La dinámica ayuda a reconocer experiencias comunes y abrir conversación.",
      materiales: ["sillas"],
    },
  ],
  capacitacion: [
    {
      nombre: "Caso en Equipo",
      explicacion: "Cada equipo recibe una situación realista y propone una respuesta en pasos concretos. Luego comparan alternativas y el facilitador rescata aprendizajes clave.",
      materiales: ["casos impresos", "lápices"],
    },
    {
      nombre: "El Rol Cambiante",
      explicacion: "Los participantes resuelven una tarea mientras cambian de rol cada pocos minutos. La actividad permite experimentar liderazgo, apoyo, observación y comunicación.",
      materiales: ["tarjetas de roles"],
    },
    {
      nombre: "Mapa de Decisiones",
      explicacion: "El grupo dibuja opciones, riesgos y consecuencias de una decisión ministerial. Después identifica qué valores deben guiar el siguiente paso.",
      materiales: ["papelógrafo", "marcadores"],
    },
    {
      nombre: "Minuto de Enseñanza",
      explicacion: "Cada equipo prepara una microenseñanza sobre un concepto asignado. Deben explicarlo de forma clara, práctica y aplicable al contexto del campamento.",
      materiales: ["tarjetas de temas", "cronómetro"],
    },
    {
      nombre: "Cadena de Instrucciones",
      explicacion: "Una instrucción pasa de persona a persona hasta que el último ejecuta la tarea. La comparación entre mensaje inicial y resultado abre una reflexión sobre claridad.",
      materiales: ["tarjetas con instrucciones"],
    },
    {
      nombre: "Prioridades en Acción",
      explicacion: "Los equipos ordenan tarjetas de prioridades ante un escenario de tiempo limitado. Luego defienden su orden y escuchan retroalimentación del grupo.",
      materiales: ["tarjetas de prioridades"],
    },
    {
      nombre: "Diseña una Dinámica",
      explicacion: "Los equipos diseñan una actividad breve con objetivo, reglas, materiales y cierre. Después la presentan como si fueran a facilitarla en un programa real.",
      materiales: ["hojas", "marcadores"],
    },
    {
      nombre: "Observadores de Equipo",
      explicacion: "Mientras un equipo realiza una tarea, otro observa comunicación, inclusión y liderazgo. Luego comparten retroalimentación específica y respetuosa.",
      materiales: ["lista de observación", "lápices"],
    },
    {
      nombre: "Escalera de Aprendizaje",
      explicacion: "El grupo transforma una meta grande en pasos pequeños, visibles y medibles. Cada equipo coloca sus pasos en orden y explica cómo evaluaría el avance.",
      materiales: ["notas adhesivas", "marcadores"],
    },
    {
      nombre: "Preguntas Poderosas",
      explicacion: "Los participantes convierten instrucciones cerradas en preguntas que invitan a pensar. Después practican usarlas en una conversación breve de acompañamiento.",
      materiales: ["tarjetas", "lápices"],
    },
  ],
};

const audienceTips = {
  niños: "Mantén instrucciones cortas, demuestra primero y celebra el esfuerzo.",
  jóvenes: "Puedes añadir una meta contra reloj para elevar energía y participación.",
  adultos: "Cierra con una pregunta breve de aplicación para conectar la experiencia con la vida diaria.",
  familia: "Forma equipos mixtos para que distintas edades colaboren y se cuiden entre sí.",
};

const categoriesGrid = document.getElementById("categoriesGrid");
const tipoGrid = document.getElementById("tipoGrid");
const gameForm = document.getElementById("gameForm");
const inputTiempo = document.getElementById("inputTiempo");
const inputCantidad = document.getElementById("inputCantidad");
const generateBtn = document.getElementById("generateBtn");
const errorBox = document.getElementById("errorBox");
const resultsSection = document.getElementById("resultsSection");
const gamesList = document.getElementById("gamesList");
const resultsCount = document.getElementById("resultsCount");
const resultsTime = document.getElementById("resultsTime");
const formCatEmoji = document.getElementById("formCatEmoji");
const formCatLabel = document.getElementById("formCatLabel");

categoriesGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".cat-btn");
  if (!button) return;

  document.querySelectorAll(".cat-btn").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  state.categoria = button.dataset.cat;
  state.categoriaDesc = button.dataset.desc;
  state.categoriaEmoji = button.querySelector(".cat-emoji").textContent;
  state.categoriaLabel = button.querySelector(".cat-name").textContent;

  formCatEmoji.textContent = state.categoriaEmoji;
  formCatLabel.textContent = state.categoriaLabel;

  hideError();
  clearResults();
});

tipoGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".tipo-btn");
  if (!button) return;

  document.querySelectorAll(".tipo-btn").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.tipo = button.dataset.tipo;

  hideError();
});

gameForm.addEventListener("submit", generateGames);

function generateGames(event) {
  event.preventDefault();

  const tiempo = parseInt(inputTiempo.value, 10);
  const cantidad = parseInt(inputCantidad.value, 10);

  hideError();
  clearResults();

  const validationError = validateRequest(tiempo, cantidad);
  if (validationError) {
    showError(validationError);
    return;
  }

  setLoading(true);

  window.setTimeout(() => {
    const juegos = buildGames(tiempo, cantidad);
    renderGames(juegos, tiempo);
    setLoading(false);
  }, 220);
}

function validateRequest(tiempo, cantidad) {
  if (!Number.isInteger(tiempo) || !Number.isInteger(cantidad)) {
    return "Completa el tiempo total y el número de juegos.";
  }

  if (tiempo < 1 || tiempo > 240) {
    return "El tiempo total debe estar entre 1 y 240 minutos.";
  }

  if (cantidad < 1 || cantidad > 20) {
    return "Puedes generar entre 1 y 20 juegos por planificación.";
  }

  if (tiempo < cantidad) {
    return "Usa al menos 1 minuto por juego para que la planificación sea realista.";
  }

  return "";
}

function buildGames(tiempo, cantidad) {
  const pool = shuffle([...gameBank[state.categoria]]);
  const selected = [];
  const shouldNumberGames = cantidad > gameBank[state.categoria].length;

  while (selected.length < cantidad) {
    selected.push(...shuffle([...pool]));
  }

  const durations = distributeDurations(tiempo, cantidad);

  return selected.slice(0, cantidad).map((game, index) => ({
    nombre: shouldNumberGames ? `${game.nombre} ${index + 1}` : game.nombre,
    duracion: `${durations[index]} min`,
    explicacion: `${game.explicacion} ${audienceTips[state.tipo]}`,
    materiales: game.materiales,
  }));
}

function distributeDurations(totalMinutes, count) {
  const base = Math.floor(totalMinutes / count);
  const remainder = totalMinutes % count;
  const durations = Array.from({ length: count }, (_, index) => base + (index < remainder ? 1 : 0));
  return shuffle(durations);
}

function renderGames(juegos, tiempoTotal) {
  const totalMin = juegos.reduce((sum, game) => sum + (parseInt(game.duracion, 10) || 0), 0);

  resultsCount.textContent = `${juegos.length} juego${juegos.length !== 1 ? "s" : ""} - ${state.categoriaEmoji} ${state.categoriaLabel}`;
  resultsTime.textContent = `⏱ ${totalMin || tiempoTotal} min total`;
  gamesList.innerHTML = "";

  juegos.forEach((game, index) => {
    gamesList.appendChild(createGameCard(game, index));
  });

  resultsSection.classList.remove("hidden");

  window.setTimeout(() => {
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function createGameCard(game, index) {
  const card = document.createElement("article");
  card.className = `game-card${index === 0 ? " open" : ""}`;
  card.style.animationDelay = `${index * 0.06}s`;

  const bodyId = `game-body-${index}`;
  const hasMaterials = Array.isArray(game.materiales) && game.materiales.length > 0;

  card.innerHTML = `
    <div class="game-card-header" role="button" tabindex="0" aria-expanded="${index === 0}" aria-controls="${bodyId}">
      <div class="game-number">${index + 1}</div>
      <div class="game-info">
        <div class="game-name">${escapeHtml(game.nombre)}</div>
        <div class="game-duration">⏱ ${escapeHtml(game.duracion)}</div>
      </div>
      <div class="game-toggle">⌄</div>
    </div>
    <div class="game-card-body" id="${bodyId}">
      <p class="game-explanation">${escapeHtml(game.explicacion)}</p>
      ${hasMaterials ? `
        <div class="materials-title">📦 Materiales</div>
        <div class="materials-list">
          ${game.materiales.map((material) => `<span class="material-tag">${escapeHtml(material)}</span>`).join("")}
        </div>
      ` : ""}
    </div>
  `;

  const header = card.querySelector(".game-card-header");
  const toggleCard = () => {
    const isOpen = card.classList.toggle("open");
    header.setAttribute("aria-expanded", String(isOpen));
  };

  header.addEventListener("click", toggleCard);
  header.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  });

  return card;
}

function setLoading(isLoading) {
  generateBtn.disabled = isLoading;
  generateBtn.classList.toggle("loading", isLoading);
  generateBtn.querySelector(".btn-text").textContent = isLoading ? "Generando juegos..." : "Generar Juegos";
  generateBtn.querySelector(".btn-icon").textContent = isLoading ? "✨" : "🔥";
}

function clearResults() {
  resultsSection.classList.add("hidden");
  gamesList.innerHTML = "";
}

function showError(message) {
  errorBox.textContent = `⚠️ ${message}`;
  errorBox.classList.remove("hidden");
}

function hideError() {
  errorBox.textContent = "";
  errorBox.classList.add("hidden");
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(String(value ?? "")));
  return div.innerHTML;
}
