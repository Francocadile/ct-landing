// src/data/blog.js
export const BLOG_POSTS = [
  {
    slug: "presentacion",
    title: "Presentación del proyecto",
    date: "2025-08-18",
    author: "Cuerpo Técnico",
    cover: "/img/blog/presentacion.jpg",
    tags: ["Modelo de juego", "Club", "Staff"],
    excerpt:
      "Por qué y cómo estructuramos nuestro trabajo: identidad, principios y una metodología coherente.",
    content: [
      { type: "p", text: "Nuestro proyecto deportivo se apoya en una base clara y compartida: objetivos generales, principios de juego, metodología y una semana modelo que asegura coherencia entre el entreno y la competición." },
      { type: "h3", text: "Pilares" },
      {
        type: "ul",
        items: [
          "Identidad competitiva y mentalidad ganadora.",
          "Juego de Posición como marco conceptual.",
          "Metodología Integrada Estructural para unir táctica y preparación física.",
          "Semana modelo (domingo–domingo) con cargas planificadas.",
        ],
      },
      { type: "p", text: "Este blog será el espacio para explicar decisiones, compartir aprendizajes y mostrar evidencia del proceso." },
    ],
  },
  {
    slug: "metodologia-integrada-estructural",
    title: "Metodología Integrada Estructural: la base diaria",
    date: "2025-08-18",
    author: "Cuerpo Técnico",
    cover: "/img/blog/metodologia-integrada.jpg",
    tags: ["Metodología", "Entrenamiento"],
    excerpt:
      "Cómo combinamos principios tácticos y métodos físicos para impactar el rendimiento colectivo e individual.",
    content: [
      { type: "p", text: "La Metodología Integrada Estructural combina, en cada sesión, los contenidos tácticos del modelo con direcciones que condicionan el rendimiento. El entrenamiento deja de separar 'físico' de 'táctico': todo sucede en torno a la idea de juego." },
      { type: "h3", text: "Claves operativas" },
      {
        type: "ul",
        items: [
          "Tareas situacionales con objetivos claros por fase del juego.",
          "Cargas distribuidas según la semana tipo y la competencia.",
          "Indicadores de control: intensidad, densidad y especificidad.",
        ],
      },
      { type: "p", text: "El resultado es mayor transferencia al partido y una identidad más estable en el tiempo." },
    ],
  },
  {
    slug: "semana-modelo-domingo-domingo",
    title: "Semana modelo (Domingo–Domingo)",
    date: "2025-08-18",
    author: "Cuerpo Técnico",
    cover: "/img/blog/semana-modelo.jpg",
    tags: ["Planificación", "Cargas", "Competencia"],
    excerpt:
      "Estructura tipo de una semana con partido domingo–domingo y la lógica de cada día.",
    content: [
      { type: "p", text: "La semana equilibra recuperación, asimilación y picos de calidad. Cada día tiene una función y una carga asociada que acompaña los objetivos del microciclo." },
      { type: "h3", text: "Esquema general" },
      {
        type: "ul",
        items: [
          "Lunes: Descanso / compensatorio individual.",
          "Martes–Miércoles: Reintroducción, memoria y potencia neuromuscular.",
          "Jueves: Alta – contenidos tácticos específicos y fútbol con consignas.",
          "Viernes: Toma de decisiones, velocidad, finalizaciones.",
          "Sábado: Activación y ABP.",
          "Domingo: Competencia.",
        ],
      },
      { type: "p", text: "Este patrón se ajusta según calendario y contexto competitivo manteniendo la coherencia metodológica." },
    ],
  },
];
