// src/data/experience.js
// 🔁 EDITA este arreglo con tu experiencia real.
// Cada entrada representa un club/etapa.
// period: texto libre "2022–2024" | "Actualidad" | "2025"
// order: orden de arriba hacia abajo (menor = más reciente)

export const EXPERIENCE = [
  {
    id: "2025-proyecto",
    period: "2025",
    club: "Proyecto Cuerpo Técnico",
    role: "Director Técnico",
    country: "ARG",
    achievements: [
      "Diseño del Modelo de Juego y planificación integral.",
      "Implementación de metodología por principios.",
    ],
    order: 1,
  },
  {
    id: "2023-2024-club-ejemplo",
    period: "2023–2024",
    club: "Club Ejemplo",
    role: "Asistente Técnico",
    country: "ESP",
    achievements: [
      "Clasificación a playoffs.",
      "Mejora de métricas en transición defensiva.",
    ],
    order: 2,
  },
  {
    id: "2021-2022-club-ejemplo-b",
    period: "2021–2022",
    club: "Club Ejemplo B",
    role: "Entrenador Principal",
    country: "ECU",
    achievements: [
      "Promoción de juveniles al primer equipo.",
      "Top 5 en posesión y PPDA de la liga.",
    ],
    order: 3,
  },
];

// Texto introductorio opcional para la sección
export const EXPERIENCE_INTRO =
  "Resumen de trayectoria profesional: funciones, contextos y principales hitos de cada etapa. (Edita este texto en src/data/experience.js)";
