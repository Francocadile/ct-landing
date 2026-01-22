// src/data/staff-pages.js

export const STAFF_PAGES = {
  "flavio-robatto": {
    name: "Flavio Robatto",
    role: "Director Técnico",
    photo: "/img/staff/flavio-robatto.jpg",
    flags: ["/img/banders/argentina.png"],
    bio: [
      "Director técnico con experiencia en Argentina, Bolivia, Colombia, Ecuador y Perú. Liderazgo claro, construcción de identidad de juego y gestión integral del proceso competitivo.",
      "Planifica el microciclo completo, define principios y subprincipios, y coordina al staff para asegurar coherencia metodológica.",
    ],
    roles: [
      "Modelo de juego y estrategia",
      "Dirección de partido",
      "Gestión del staff y comunicación",
      "Planificación anual y de microciclos",
    ],
    clubs: [
      "/img/clubs/bolivar.png",
      "/img/clubs/nacional-potosi.png",
      "/img/clubs/atletico-huila.png",
      "/img/clubs/jaguares-fc.png",
      "/img/clubs/cucuta-deportivo.png",
      "/img/clubs/loja.png",
      "/img/clubs/alianza-atletico.png",
      "/img/clubs/millonarios.png",
      "/img/clubs/barcelona-sc.png",
    ],
  },

  "sandro-dominguez": {
    name: "Sandro Domínguez",
    role: "Asistente Técnico",
    photo: "/img/staff/sandro-domingez.jpg",
    flags: ["/img/banders/argentina.png"],
    bio: [
      "Especialista en diseño de sesiones y en la operativización de los principios del juego en tareas de alta transferencia.",
      "Coordina scouting, balón parado y la integración de cargas técnico-tácticas con la preparación física.",
    ],
    roles: ["Diseño de sesiones", "Scouting y ABP", "Planificación semanal"],
    clubs: [
      "/img/clubs/bolivar.png",
      "/img/clubs/nacional-potosi.png",
      "/img/clubs/atenas.png",
      "/img/clubs/renato.jpg",
    ],
  },

  "horacio-rodriguez": {
    name: "Horacio Rodríguez",
    role: "Asistente Técnico",
    photo: "/img/staff/horacio-rodriguez.jpg",
    flags: ["/img/banders/argentina.png"],
    bio: [
      "Coordinador metodológico. Establece progresiones, objetivos por día y control de calidad de la sesión.",
      "Vincula contenidos con métricas de eficacia para retroalimentar el plan semanal.",
    ],
    roles: [
      "Metodología y contenidos",
      "Estructura MD+1 a MD-1",
      "Control del entrenamiento",
    ],
    clubs: ["/img/clubs/bolivar.png", "/img/clubs/estudiantes.png"],
  },

  "franco-cadile": {
    name: "Franco Cadile",
    role: "Preparador Físico",
    photo: "/img/staff/franco-cadile.jpg",
    flags: ["/img/banders/argentina.png"],
    bio: [
      "Preparador físico de alto rendimiento con foco en la transferencia al juego y el rendimiento competitivo. Integra tecnología aplicada (GPS, wellness y control neuromuscular) para la planificación, control y optimización de cargas.",
      "Experiencia en equipos campeones, coordinando fuerza integrada en campo, prevención de lesiones y procesos de readaptación, con responsabilidad directa en el seguimiento y reporte físico del microciclo.",
    ],
    roles: [
      "Planificación de cargas",
      "Prevención y fuerza",
      "Control neuromuscular y GPS",
    ],
    clubs: [
      "/img/clubs/bolivar.png",
      "/img/clubs/tachira.png",
      "/img/clubs/chankas.png",
      "/img/clubs/gimnasia.png",
      "/img/clubs/real-potosí.png",
      "/img/clubs/atletico-huila.png",
      "/img/clubs/nacional-potosi.png",
      "/img/clubs/juventud.png",
    ],
  },

  "gabriel-gonzalez": {
    name: "Gabriel Gonzalez",
    role: "Analista de Rendimiento",
    photo: "/img/staff/gabriel-gonzalez.jpg",
    flags: ["/img/banders/venezuela.png", "/img/banders/portugal.png"],
    bio: [
      "Analista de rendimiento. Segmentación, etiquetado y presentación para CT y jugadores.",
      "Produce pre y post partido con KPIs tácticos y de eficiencia; soporte permanente al cuerpo técnico.",
    ],
    roles: ["Análisis de video", "Informes y dashboards", "Soporte táctico"],
    clubs: [
      "/img/clubs/bolivar.png",
      "/img/clubs/nacional-potosi.png",
      "/img/clubs/zulia.png",
    ],
  },
};

// Alias de compatibilidad por si quedó algún import viejo:
export const CLUBS_BY_MEMBER = Object.fromEntries(
  Object.entries(STAFF_PAGES).map(([slug, data]) => [slug, data.clubs || []])
);

