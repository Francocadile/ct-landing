// src/data/results.js

// ———————————————————————————————
//  A) Records / Logros del Cuerpo Técnico
// ———————————————————————————————
export const RECORDS = [
  {
    year: 2012,
    title: "Campeón Primera División",
    club: "Barcelona SC",
    role: "Asistente Técnico",
    logo: "/img/clubs/barcelona-sc.png",
  },
  {
    year: 2014,
    title: "Subcampeón Primera División",
    club: "Barcelona SC",
    role: "Asistente Técnico",
    logo: "/img/clubs/barcelona-sc.png",
  },
  {
    year: 2014,
    title: "Campeón Copa Euroamericana",
    club: "Barcelona SC",
    role: "Asistente Técnico",
    logo: "/img/clubs/barcelona-sc.png",
  },
  {
    year: 2015,
    title: "Campeón Segunda División",
    club: "Club Sport Norte América",
    role: "Entrenador",
    logo: "/img/clubs/norte-america.png", // si no lo tienes, puedes subirlo luego
  },
  {
    year: 2017,
    title: "Semifinales Primera B",
    club: "Cúcuta Deportivo",
    role: "Entrenador",
    details: [
      "Mejor equipo en la tabla general",
      "Equipo más goleador en 2017",
    ],
    logo: "/img/clubs/cucuta.png",
  },
  {
    year: 2022,
    title: "Clasificación a CONMEBOL Libertadores",
    club: "Nacional Potosí",
    role: "Entrenador",
    logo: "/img/clubs/nacional-potosi.png",
  },
  {
    year: 2024,
    title: "Campeón Torneo Clausura",
    club: "Club Bolívar",
    role: "Entrenador",
    logo: "/img/clubs/bolivar.png",
  },
  {
    year: 2024,
    title: "Campeón Absoluto del Fútbol Boliviano",
    club: "Club Bolívar",
    role: "Entrenador",
    logo: "/img/clubs/bolivar.png",
  },
  {
    year: 2025,
    title: "Campeón Torneo de Verano",
    club: "Club Bolívar",
    role: "Entrenador",
    logo: "/img/clubs/bolivar.png",
  },
];

// ———————————————————————————————
//  B) Historial de Efectividad por año
// ———————————————————————————————
export const EFFECTIVENESS = [
  { year: 2016, club: "Millonarios", logo: "/img/clubs/millonarios.png", pct: 55 },
  { year: 2018, club: "Cúcuta Deportivo", logo: "/img/clubs/cucuta.png", pct: 59 },
  { year: 2019, club: "Jaguares FC", logo: "/img/clubs/jaguares.png", pct: 37, note: "4tos. de final Copa Colombia" },
  { year: 2020, club: "Atlético Huila", logo: "/img/clubs/atletico-huila.png", pct: 67 },
  { year: 2021, club: "Nacional Potosí", logo: "/img/clubs/nacional-potosi.png", pct: 67, note: "Clasificación a Libertadores" },
  { year: 2022, club: "Nacional Potosí", logo: "/img/clubs/nacional-potosi.png", pct: 56, note: "Clasificación a Sudamericana" },
  { year: 2023, club: "Nacional Potosí", logo: "/img/clubs/nacional-potosi.png", pct: 53 },
  { year: 2024, club: "Bolívar", logo: "/img/clubs/bolivar.png", pct: 70, note: "8vos de Libertadores • Campeón Clausura • Campeón Absoluto" },
  { year: 2025, club: "Bolívar", logo: "/img/clubs/bolivar.png", pct: 90, note: "Campeón Torneo de Verano" },
];

// ———————————————————————————————
//  C) Números por temporada (cards de estadísticas)
// ———————————————————————————————
export const SEASONS = [
  {
    year: 2017,
    team: "Cúcuta Deportivo",
    logo: "/img/clubs/cucuta.png",
    pct: 59,
    stats: { pj: 0, v: 18, e: 6, d: 6, gf: 67, gc: 23, obs: "1 derrota de local" },
  },
  {
    year: 2020,
    team: "Atlético Huila",
    logo: "/img/clubs/atletico-huila.png",
    pct: 67,
    stats: { pj: 0, v: 5, e: 3, d: 1, gf: 16, gc: 7, obs: "0 derrotas de local" },
  },
  {
    year: 2021,
    team: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    pct: 67,
    stats: { pj: 0, v: 5, e: 3, d: 1, gf: 16, gc: 9, obs: "0 derrotas de local" },
  },
  {
    year: 2022,
    team: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    pct: 56,
    stats: { pj: 42, v: 21, e: 7, d: 14, gf: 78, gc: 67, obs: "Libertadores (primera vez del club)" },
  },
  {
    year: 2023,
    team: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    pct: 53,
    stats: { pj: 40, v: 18, e: 9, d: 13, gf: 96, gc: 61, obs: "Clasificación a Sudamericana 2024" },
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
        "Campeones Clausura 2024 • Campeones Absoluto • 8vos Libertadores (líderes de grupo)",
    },
  },
  {
    year: 2025,
    team: "Bolívar (Total)",
    logo: "/img/clubs/bolivar.png",
    pct: 64,
    stats: { pj: 39, v: 24, e: 3, d: 12, gf: 95, gc: 47, obs: "2.4 goles/partido • 3º lugar torneo local • Campeones Torneo de Verano 2025" },
  },
  {
    year: 2025,
    team: "Bolívar (Torneo de Verano)",
    logo: "/img/clubs/bolivar.png",
    pct: 90,
    stats: { pj: 8, v: 7, e: 0, d: 1, gf: 28, gc: 8, obs: "Campeones del Torneo de Verano 2025" },
  },
];
