// src/data/modelo.js
// ───────────────────────────────────────────────────────────────────────────────

export const objetivosA = [
  "Mejorar la calidad de cada posición y de cada jugador.",
  "Intensificar las acciones técnicas e individuales de cada jugador.",
  "Implementar actividades con ejercicios situacionales, desarrollados con base en nuestro modelo de juego.",
  "Encontrar nuestra propia identidad como equipo, basándonos en las características de los jugadores y de la propia institución.",
  "Implementar una mentalidad ganadora y jugar con igualdad en todos los estadios, confiando en nuestro juego, lo que nos permite ganar en todos los ámbitos.",
];

export const objetivosB = [
  "Fomentar la competencia y la responsabilidad para mejorar el rendimiento y el crecimiento, tanto personal como colectivo.",
  "Promover la expresión verbal y la autocrítica para una mejor planificación del entrenamiento.",
  "Maximizar las fortalezas y añadir opciones para la resolución de problemas, con el fin de lograr profesionalismo, un entrenamiento adecuado y la eficacia.",
  "Crear sesiones adaptadas a las necesidades del equipo y analizar a los futuros rivales, cuantificando los días de la semana según la competición (local o internacional).",
  "Ofrecer desarrollo deportivo socioeducativo.",
];

export const definicionModelo =
  "Entendemos un modelo de juego como los comportamientos colectivos que guían nuestra identidad como equipo.";

// ───────────────────────────────────────────────────────────────────────────────
// English siblings (consumed by Modelo.jsx)
// ───────────────────────────────────────────────────────────────────────────────

export const objetivosAEn = [
  "Improve the quality of every position and every player.",
  "Sharpen each player's technical and individual actions.",
  "Implement situational exercises built around our playing model.",
  "Build our own identity as a team, based on the players' characteristics and those of the club itself.",
  "Instill a winning mentality and compete on equal terms in every stadium, trusting our game — which allows us to win in any setting.",
];

export const objetivosBEn = [
  "Foster competition and accountability to drive performance and growth, both individual and collective.",
  "Encourage open communication and self-criticism for better training planning.",
  "Maximize strengths and add options for problem-solving, in pursuit of professionalism, proper preparation and effectiveness.",
  "Design sessions tailored to the team's needs and scout upcoming opponents, structuring the week according to the competition (domestic or international).",
  "Provide socio-educational sporting development.",
];

export const definicionModeloEn =
  "We understand a game model as the collective behaviors that guide our identity as a team.";

export const juegoDePosicion = {
  cita:
    "El Juego de Posición consiste en obtener ventajas en base a un ordenamiento estructural y para ello se deben cumplir varios criterios conceptuales. Un correcto ordenamiento permite progresar en el juego.",
  autor: "Flavio Robatto",
  sistemas: [
    { code: "SB", nombre: "Sistema Base", formacion: "1-4-3-3", img: "/img/modelo/sb-1433.png" },
    { code: "FD", nombre: "Fase Defensiva", formacion: "1-4-1-4-1", img: "/img/modelo/fd-14141.png" },
    { code: "IP", nombre: "Inicio y Progresión", formacion: "1-2-3-2-3", img: "/img/modelo/ip-12323.png" },
  ],
};

export const fasesJuego = [
  {
    titulo: "Progresión en iniciación",
    texto:
      "El buen posicionamiento facilita la progresión en el juego debido a la atracción de rivales, lo que amplía el espacio a las espaldas de las presiones. Así, el poseedor dispone de varias soluciones y ofrece ventajas a sus compañeros.",
    formacion: "1-4-3-3",
    img: "/img/modelo/fase-iniciacion.png",
  },
  {
    titulo: "Progresión en creación",
    texto:
      "Debemos tratar de progresar superando líneas rivales; para ello es imprescindible tener diferentes alturas, posicionamiento entre líneas y con la mayor amplitud. Con ello obtenemos más espacios y desordenamos al rival.",
    formacion: "1-2-3-2-3",
    img: "/img/modelo/fase-creacion.png",
  },
  {
    titulo: "Progresión en finalización",
    texto:
      "Las distancias de relación deben ser óptimas en consecuencia a los espacios libres que se generan y se aprovechan. Juntarnos para generar esos espacios pero no para dificultar la progresión; de ahí la importancia de comprenderlos.",
    formacion: "1-2-3-2-3 / 1-3-2-2-3",
    img: "/img/modelo/fase-finalizacion.png",
    // NUEVA imagen adicional:
    img2: "/img/modelo/fase-finalizacion1.png",
  },
];

export const principiosJuego = {
  ofensivos: [
    {
      titulo: "Superioridad numérica en salida",
      bullets: ["Análisis de la presión rival", "Uso del portero para creación de superioridad"],
    },
    {
      titulo: "Zona media",
      bullets: ["Creación de situaciones favorables en superioridad", "Búsqueda del tercer hombre y alturas diferentes"],
    },
    {
      titulo: "Fase de finalización",
      bullets: ["Crear superioridades numéricas en todos los sectores", "Llegada mínima de 6 jugadores"],
    },
  ],
  defensivos: [
    {
      titulo: "Vigilancia para presión",
      bullets: [
        "Marca en ataque de nuestros jugadores retrasados",
        "Pensando en la posterior presión tras pérdida",
      ],
    },
    {
      titulo: "Presión tras pérdida",
      bullets: ["Acción conjunta y coordinada para robo inmediato"],
    },
    {
      titulo: "Achique de espacios",
      bullets: ["Defender corriendo hacia adelante", "Reducción de espacios hacia el balón"],
    },
  ],
};

export const contenidosSemanales = [
  {
    code: "G1",
    titulo: "Posesión",
    bloques: [
      {
        subtitulo: "Posesiones con orientación",
        texto:
          "Se respetan comportamientos ofensivos y defensivos, zona de ataque y defensa. Exigencia organizativa, progresión, conservación y orden.",
      },
      {
        subtitulo: "Posesiones con direccionalidad",
        texto:
          "Tareas de conquistar una zona, fase de inicio y progresión, siguiendo la línea metodológica de aprendizaje del transcurso del juego.",
      },
    ],
    icon: "🎯",
  },
  {
    code: "G2",
    titulo: "Modelo / Idea táctica",
    bloques: [
      {
        subtitulo: "Situaciones en estructura parcial",
        texto:
          "Interacciones específicas en las relaciones de espacio reales a las de la competición y en las que prevemos se desarrollará el rival. Transferencia de la idea.",
      },
    ],
    icon: "🧭",
  },
  {
    code: "G3",
    titulo: "Individuales",
    bloques: [
      {
        subtitulo: "Por puesto",
        texto:
          "Ejercitaciones específicas en la posición de cada futbolista. Situaciones puntuales del puesto, independientes del modelo y estilo.",
      },
    ],
    icon: "👤",
  },
  {
    code: "G4",
    titulo: "Grupales",
    bloques: [
      {
        subtitulo: "Por líneas y funciones",
        texto:
          "Situaciones específicas en la posición de cada futbolista o en grupo, definidas por el modelo de juego, sus principios y características.",
      },
    ],
    icon: "👥",
  },
];

export const semanaTipo = [
  {
    dia: "Lunes",
    bloques: [
      "Día libre",
      "Análisis de rendimiento",
      "Entrenamiento compensatorio individual",
    ],
    carga: { nota: "MD+1", color: "emerald" },
  },
  {
    dia: "Martes",
    bloques: [
      "Trabajo compensatorio individual-grupal",
      "Entrenamiento campo visual",
      "Fuerza core · Propiocepción dinámica · Excéntricos",
      "Partido condicionado (suplentes) / Regenerativo (titulares)",
    ],
    carga: { nota: "MD+2", color: "sky" },
  },
  {
    dia: "Miércoles",
    bloques: [
      "Trabajo compensatorio individual-grupal",
      "Memoria en circuito de pases",
      "Fuerza potencia neuromuscular · Contrastes",
      "Reducido orientado al sistema de juego",
    ],
    carga: { nota: "MD-4", color: "orange" },
  },
  {
    dia: "Jueves",
    bloques: [
      "Trabajo compensatorio individual-grupal",
      "Senso perceptivo · Estímulo auditivo",
      "Fuerza core · Propiocepción dinámica",
      "Fútbol con consignas",
    ],
    carga: { nota: "MD-3", color: "rose" },
  },
  {
    dia: "Viernes",
    bloques: [
      "Trabajo compensatorio individual-grupal",
      "Toma de decisiones · Definición",
      "Circuito neuromuscular · Velocidad máx.",
      "Finalizaciones / Transiciones / Acciones específicas según rival",
    ],
    carga: { nota: "MD-2", color: "amber" },
  },
  {
    dia: "Sábado",
    bloques: [
      "Trabajo compensatorio individual-grupal",
      "Socio-afectivo · Juegos en equipo",
      "Activación neuromuscular",
      "Repaso: salidas, laterales y ABP",
    ],
    carga: { nota: "MD-1", color: "lime" },
  },
  {
    dia: "Domingo",
    bloques: ["Competencia"],
    carga: { nota: "MD", color: "fuchsia" },
  },
];

export const metodologiaIntegrada = {
  titulo: "Método Integrado Estructural",
  bullets: [
    "Sistema operativo que combina principios tácticos y métodos físicos para construir el modelo de juego deseado.",
    "Incluye a diario contenidos tácticos relacionados al modelo seleccionado y los combina con todas las direcciones que condicionan el rendimiento colectivo e individual.",
    "Optimiza el rendimiento por la acción sinérgica y el alto compromiso con la idea de juego y la participación activa de jugadores, staff y dirigencia.",
  ],
  videoUrl: "",
  img: "/img/modelo/metodo.png",
};

export const entrenamientoBase = {
  titulo: "Entrenamiento",
  texto:
    "Basamos nuestro modelo de entrenamiento en una Metodología Integrada Estructural. Está compuesta por distintos métodos, normas y reglas que, según su aplicación, hacen variar las tareas, su estructura y funcionamiento.",
  img: "/img/modelo/entrenamiento.png",
};

export const planTrabajo = {
  titulo: "Plan de trabajo — D.T. Flavio Robatto",
  bullets: [
    "Modelo de estructura metodológica.",
    "Planificación.",
    "Modelo de sesiones y ejercicios de entrenamiento.",
  ],
  img: "/img/modelo/plan-trabajo.png",
};

export const preparacionSemana = [
  {
    grupo: "Logístico",
    pasos: [
      { n: 1, titulo: "Lugar/hora partido", notas: ["Planificación viaje", "Cuerpo técnico + gerencia"] },
      { n: 2, titulo: "Lugar/hora entrenamiento", notas: ["Desayuno · Materiales · Movilidad", "Cuerpo técnico, cuerpo médico y utilería"] },
    ],
    color: "amber",
  },
  {
    grupo: "Metodológico — Organizativo",
    pasos: [
      { n: 3, titulo: "Altas y bajas", notas: ["Lesionados · Suspendidos", "Cuerpo técnico + cuerpo médico"] },
      { n: 4, titulo: "Condición", notas: ["Local / Visitante", "Cuerpo técnico + gerencia"] },
    ],
    color: "orange",
  },
  {
    grupo: "Metodológico — Estructural",
    pasos: [
      { n: 5, titulo: "Plan estratégico vs rival", notas: ["Videos propio y rival", "Debilidades · Fortalezas", "Cuerpo técnico"] },
      { n: 6, titulo: "Planificación (cargas)", notas: ["Características físicas del entrenamiento", "Cuerpo técnico"] },
      { n: 7, titulo: "Planificación (ejercicios)", notas: ["Idea táctica e individuales", "Cuerpo técnico"] },
    ],
    color: "red",
  },
];
