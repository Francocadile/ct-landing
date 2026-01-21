// src/data/results.js

// =======================
// A) RECORDS / LOGROS
// =======================
export const RECORDS = [
  {
    year: 2025,
    title: "Campeón Torneo de Verano",
    club: "Club Bolívar",
    role: "Entrenador",
    logo: "/img/clubs/bolivar.png",
    details: ["2,4 goles por partido", "4tos de final Copa Sudamericana"],
  },
  {
    year: 2024,
    title: "Campeón Absoluto",
    club: "Club Bolívar",
    role: "Entrenador",
    logo: "/img/clubs/bolivar.png",
    details: [
      "Clasificados a 8vos como líderes del Grupo E",
      "Por delante de Flamengo, Millonarios y Palestino",
    ],
  },
  {
    year: 2024,
    title: "Campeón Torneo Clausura",
    club: "Club Bolívar",
    role: "Entrenador",
    logo: "/img/clubs/bolivar.png",
    details: [],
  },
  {
    year: 2022,
    title: "Clasificación a CONMEBOL Libertadores",
    club: "Nacional Potosí",
    role: "Entrenador",
    logo: "/img/clubs/nacional-potosi.png",
    details: [
      "Clasificación a la CONMEBOL Libertadores",
      "Primera vez en la historia del club",
    ],
  },
  {
    year: 2017,
    title: "Semifinales Primera B",
    club: "Cúcuta Deportivo",
    role: "Entrenador",
    logo: "/img/clubs/cucuta-deportivo.png",
    details: ["Mejor equipo en la tabla general", "Equipo más goleador en 2017"],
  },
  {
    year: 2015,
    title: "Campeón Segunda División",
    club: "Club Sport Norte América",
    role: "Entrenador",
    logo: "/img/clubs/norte.jpg",
    details: [],
  },
  {
    year: 2014,
    title: "Campeón Copa Euroamericana",
    club: "Barcelona SC",
    role: "Asistente Técnico",
    logo: "/img/clubs/barcelona-sc.png",
    details: [],
  },
  {
    year: 2014,
    title: "Subcampeón Primera División",
    club: "Barcelona SC",
    role: "Asistente Técnico",
    logo: "/img/clubs/barcelona-sc.png",
    details: [],
  },
  {
    year: 2012,
    title: "Campeón Primera División",
    club: "Barcelona SC",
    role: "Asistente Técnico",
    logo: "/img/clubs/barcelona-sc.png",
    details: [],
  },
];

// ==================================
// B) HISTORIAL DE EFECTIVIDAD (KPIs)
// ==================================
export const EFFECTIVENESS = [
  { year: 2025, club: "Bolívar", pct: 90, logo: "/img/clubs/bolivar.png" },
  { year: 2024, club: "Bolívar", pct: 70, logo: "/img/clubs/bolivar.png" },
  { year: 2023, club: "Nacional Potosí", pct: 53, logo: "/img/clubs/nacional-potosi.png" },
  { year: 2022, club: "Nacional Potosí", pct: 56, logo: "/img/clubs/nacional-potosi.png" },
  { year: 2021, club: "Nacional Potosí", pct: 67, logo: "/img/clubs/nacional-potosi.png" },
  { year: 2020, club: "Atlético Huila", pct: 67, logo: "/img/clubs/atletico-huila.png" },
  { year: 2019, club: "Jaguares FC", pct: 37, logo: "/img/clubs/jaguares-fc.png" },
  { year: 2018, club: "Cúcuta Deportivo", pct: 59, logo: "/img/clubs/cucuta-deportivo.png" },
  { year: 2016, club: "Millonarios", pct: 55, logo: "/img/clubs/millonarios.png" },
];

// ===================================
// C) NÚMEROS POR TEMPORADA (detalle)
// ===================================
export const SEASONS = [
  {
    year: 2025,
    team: "GLOBAL PROCESO",
    logo: "/img/clubs/bolivar.png",
    pct: 70,
    stats: {
      pj: 119,
      v: 77,
      e: 19,
      d: 23,
      gf: 295,
      gc: 132,
    },
    notes: ["DG: +163", "Prom: 2.47 gol/p", "3 títulos 🏆🏆🏆"],
  },
  {
    year: 2025,
    team: "Bolívar",
    logo: "/img/clubs/bolivar.png",
    pct: 70,
    stats: {
      pj: 70,
      v: 46,
      e: 9,
      d: 15,
      gf: 184,
      gc: 80,
    },
    notes: ["DG: +104", "Prom: 2.62 gol/p"],
  },
  {
    year: 2024,
    team: "Bolívar",
    logo: "/img/clubs/bolivar.png",
    pct: 70,
    stats: {
      pj: 49,
      v: 31,
      e: 10,
      d: 8,
      gf: 111,
      gc: 51,
      obs:
        "Clasificados a 8vos como líderes del Grupo E (por delante de Flamengo, Millonarios y Palestino). Campeones Clausura 2024 y Campeones Absoluto.",
    },
    notes: ["DG: +60", "Prom: 2.2 gol/p", "2 títulos 🏆🏆"],
  },
  {
    year: 2023,
    team: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    pct: 53,
    stats: {
      pj: 40,
      v: 18,
      e: 9,
      d: 13,
      gf: 96,
      gc: 61,
      obs: "Clasificación a Sudamericana 2024",
    },
  },
  {
    year: 2022,
    team: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    pct: 56,
    stats: {
      pj: 42,
      v: 21,
      e: 7,
      d: 14,
      gf: 78,
      gc: 67,
      obs: "Clasificación a CONMEBOL Libertadores (primera vez del club)",
    },
  },
  {
    year: 2021,
    team: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    pct: 67,
    stats: { pj: 9, v: 5, e: 3, d: 1, gf: 16, gc: 9 },
  },
  {
    year: 2020,
    team: "Atlético Huila",
    logo: "/img/clubs/atletico-huila.png",
    pct: 67,
    stats: { pj: 9, v: 5, e: 3, d: 1, gf: 16, gc: 7 },
  },
  {
    year: 2017,
    team: "Cúcuta Deportivo",
    logo: "/img/clubs/cucuta-deportivo.png",
    pct: 59,
    stats: {
      pj: 30,
      v: 18,
      e: 6,
      d: 6,
      gf: 67,
      gc: 23,
      obs: "1 derrota de local",
    },
  },
];
