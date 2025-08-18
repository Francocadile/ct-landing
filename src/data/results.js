// src/data/results.js
// Logros / records (línea temporal)
export const ACHIEVEMENTS = [
  {
    year: 2012,
    title: "Campeón Primera División",
    team: "Barcelona SC",
    role: "Asistente Técnico",
    country: "Ecuador",
  },
  {
    year: 2014,
    title: "Subcampeón Primera División",
    team: "Barcelona SC",
    role: "Asistente Técnico",
    country: "Ecuador",
  },
  {
    year: 2014,
    title: "Campeón Copa Euroamericana",
    team: "Barcelona SC",
    role: "Asistente Técnico",
    country: "Ecuador",
  },
  {
    year: 2015,
    title: "Campeón Segunda División",
    team: "Club Sport Norte América",
    role: "Entrenador",
    country: "Ecuador",
  },
  {
    year: 2017,
    title: "Semifinales Primera B",
    team: "Cúcuta Deportivo",
    role: "Entrenador",
    country: "Colombia",
    bullets: [
      "Mejor equipo en la tabla general",
      "Equipo más goleador en 2017",
    ],
  },
  {
    year: 2022,
    title: "Clasificación a CONMEBOL Libertadores",
    team: "Nacional Potosí",
    role: "Entrenador",
    country: "Bolivia",
    note: "Primera vez en la historia del club",
  },
  {
    year: 2024,
    title: "Campeón Torneo Clausura",
    team: "Club Bolívar",
    role: "Entrenador",
    country: "Bolivia",
  },
  {
    year: 2024,
    title: "Campeón Absoluto del Fútbol Boliviano",
    team: "Club Bolívar",
    role: "Entrenador",
    country: "Bolivia",
  },
  {
    year: 2025,
    title: "Campeón Torneo de Verano",
    team: "Club Bolívar",
    role: "Entrenador",
    country: "Bolivia",
  },
];

// Historial de efectividad por año (resumen)
export const EFFECTIVENESS = [
  { year: 2016, team: "Millonarios", percent: 55 },
  { year: 2018, team: "Cúcuta Deportivo", percent: 59 },
  { year: 2019, team: "Jaguares FC", percent: 37, note: "4tos de final Copa Colombia" },
  { year: 2020, team: "Atlético Huila", percent: 67 },
  {
    year: 2021,
    team: "Nacional Potosí",
    percent: 67,
    note: "Clasificación a Libertadores (indicador histórico del proceso)",
  },
  { year: 2022, team: "Nacional Potosí", percent: 56, note: "Clas. a Libertadores (hito del club)" },
  { year: 2023, team: "Nacional Potosí", percent: 53, note: "Clasificación a Sudamericana 2024" },
  { year: 2024, team: "Club Bolívar", percent: 70, note: "8vos de Libertadores + Clausura + Absoluto" },
  { year: 2025, team: "Club Bolívar", percent: 90, note: "Campeón Torneo de Verano" },
];

// Números detallados por temporada/torneo
export const SEASON_STATS = [
  // 2017 Cúcuta
  {
    year: 2017, team: "Cúcuta Deportivo", competition: "Torneo BetPlay Dimayor",
    matches: undefined, // no figura total en la lámina
    wins: 18, draws: 6, losses: 6,
    gf: 67, ga: 23, home_losses: 1,
    effectiveness: 59,
  },
  // 2020 Huila
  {
    year: 2020, team: "Atlético Huila", competition: "Torneo BetPlay Dimayor",
    matches: undefined, wins: 5, draws: 3, losses: 1,
    gf: 16, ga: 7, home_losses: 0,
    effectiveness: 67,
  },
  // 2021 Nacional Potosí
  {
    year: 2021, team: "Nacional Potosí", competition: "Primera División Bolivia",
    matches: undefined, wins: 5, draws: 3, losses: 1,
    gf: 16, ga: 9, home_losses: 0,
    effectiveness: 67,
  },
  // 2022 Nacional Potosí
  {
    year: 2022, team: "Nacional Potosí", competition: "Primera División Bolivia",
    matches: 42, wins: 21, draws: 7, losses: 14,
    gf: 78, ga: 67,
    effectiveness: 56,
    highlights: ["Clasificación a CONMEBOL Libertadores (primera vez en la historia del club)"],
  },
  // 2023 Nacional Potosí
  {
    year: 2023, team: "Nacional Potosí", competition: "Primera División Bolivia",
    matches: 40, wins: 18, draws: 9, losses: 13,
    gf: 96, ga: 61,
    effectiveness: 53,
    highlights: ["Clasificación a CONMEBOL Sudamericana 2024"],
  },
  // 2024 Bolívar
  {
    year: 2024, team: "Club Bolívar", competition: "Primera División Bolivia",
    matches: 49, wins: 31, draws: 10, losses: 8,
    gf: 111, ga: 51,
    effectiveness: 70,
    highlights: [
      "Campeones Torneo Clausura 2024",
      "Campeones Torneo Absoluto 2024",
      "Clasificados a 8vos como líderes del grupo E",
    ],
  },
  // 2025 Bolívar (general)
  {
    year: 2025, team: "Club Bolívar", competition: "Primera División Bolivia (general)",
    matches: 39, wins: 24, draws: 3, losses: 12,
    gf: 95, ga: 47,
    effectiveness: 64,
    highlights: [
      "2.4 goles por partido",
      "3er lugar en el torneo local",
      "Campeones del Torneo de Verano 2025",
    ],
  },
  // 2025 Bolívar (Torneo de Verano)
  {
    year: 2025, team: "Club Bolívar", competition: "Torneo de Verano",
    matches: 8, wins: 7, draws: 0, losses: 1,
    gf: 28, ga: 8,
    effectiveness: 90,
    highlights: ["Campeones del Torneo de Verano 2025"],
  },
];
