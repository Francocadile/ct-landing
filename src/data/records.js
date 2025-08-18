// src/data/records.js
// Imagenes esperadas (public/img/...):
// - Escudos: /img/clubs/{bolivar,nacional-potosi,atletico-huila,jaguares-fc,cucuta-deportivo,barcelona-sc,alianza-atletico,loja,millonarios,norte.jpg}.png|jpg
// - Banderas (opcional): /img/flags/{bo,co,ar,ec}.png

export const ACHIEVEMENTS = [
  // 2025
  {
    year: 2025,
    club: "Bolívar",
    country: "BO",
    logo: "/img/clubs/bolivar.png",
    title: "Campeón Torneo de Verano",
    details: ["2,4 goles por partido"],
  },

  // 2024
  {
    year: 2024,
    club: "Bolívar",
    country: "BO",
    logo: "/img/clubs/bolivar.png",
    title: "Campeón Torneo Clausura",
  },
  {
    year: 2024,
    club: "Bolívar",
    country: "BO",
    logo: "/img/clubs/bolivar.png",
    title: "Campeón Absoluto del fútbol boliviano",
  },
  {
    year: 2024,
    club: "Bolívar",
    country: "BO",
    logo: "/img/clubs/bolivar.png",
    title: "8vos de CONMEBOL Libertadores como líderes del Grupo E",
    details: ["Superando a Flamengo, Millonarios y Palestino"],
  },

  // 2022
  {
    year: 2022,
    club: "Nacional Potosí",
    country: "BO",
    logo: "/img/clubs/nacional-potosi.png",
    title: "Clasificación a CONMEBOL Libertadores",
    details: ["Primera vez en la historia del club"],
  },

  // 2017
  {
    year: 2017,
    club: "Cúcuta Deportivo",
    country: "CO",
    logo: "/img/clubs/cucuta-deportivo.png",
    title: "Semifinales Primera B",
    details: ["Mejor equipo en la tabla general", "Equipo más goleador en 2017"],
  },

  // 2015
  {
    year: 2015,
    club: "Club Sport Norte América",
    country: "EC",
    logo: "/img/clubs/norte.jpg",
    title: "Campeón Segunda División",
  },

  // 2014
  {
    year: 2014,
    club: "Barcelona SC",
    country: "EC",
    logo: "/img/clubs/barcelona-sc.png",
    title: "Subcampeón Primera División",
    role: "Asistente Técnico",
  },
  {
    year: 2014,
    club: "Barcelona SC",
    country: "EC",
    logo: "/img/clubs/barcelona-sc.png",
    title: "Campeón Copa Euroamericana",
    role: "Asistente Técnico",
  },

  // 2012
  {
    year: 2012,
    club: "Barcelona SC",
    country: "EC",
    logo: "/img/clubs/barcelona-sc.png",
    title: "Campeón Primera División",
    role: "Asistente Técnico",
  },
];

// Tarjetas por temporada (como tus láminas). Agrupadas luego por club.
export const SEASONS_BY_CLUB = [
  {
    club: "Bolívar",
    logo: "/img/clubs/bolivar.png",
    country: "BO",
    seasons: [
      {
        year: 2025,
        pct: 64,
        stats: {
          pj: 39,
          win: 24,
          draw: 3,
          loss: 12,
          gf: 95,
          ga: 47,
        },
        notes: [
          "2,4 goles por partido",
          "3er lugar en el torneo local",
          "Campeones del Torneo de Verano 2025",
        ],
      },
      {
        year: 2025,
        label: "Torneo de Verano",
        pct: 90,
        stats: { pj: 8, win: 7, draw: 0, loss: 1, gf: 28, ga: 8 },
        notes: ["Campeones del Torneo de Verano 2025"],
      },
      {
        year: 2024,
        pct: 70,
        stats: {
          pj: 49,
          win: 31,
          draw: 10,
          loss: 8,
          gf: 111,
          ga: 51,
        },
        notes: [
          "Campeones Torneo Clausura 2024",
          "Campeones Absoluto del fútbol boliviano 2024",
          "8vos de Libertadores como líderes del Grupo E (sobre Flamengo, Millonarios y Palestino)",
        ],
      },
    ],
  },

  {
    club: "Nacional Potosí",
    logo: "/img/clubs/nacional-potosi.png",
    country: "BO",
    seasons: [
      {
        year: 2023,
        pct: 53,
        stats: { pj: 40, win: 18, draw: 9, loss: 13, gf: 96, ga: 61 },
        notes: ["Clasificación a CONMEBOL Sudamericana 2024"],
      },
      {
        year: 2022,
        pct: 56,
        stats: { pj: 42, win: 21, draw: 7, loss: 14, gf: 78, ga: 67 },
        notes: [
          "Clasificación a CONMEBOL Libertadores por primera vez en la historia del club",
        ],
      },
      {
        year: 2021,
        pct: 67,
        stats: { pj: "—", win: 5, draw: 3, loss: 1, gf: 16, ga: 9 },
        notes: [],
      },
    ],
  },

  {
    club: "Atlético Huila",
    logo: "/img/clubs/atletico-huila.png",
    country: "CO",
    seasons: [
      {
        year: 2020,
        pct: 67,
        stats: { pj: "—", win: 5, draw: 3, loss: 1, gf: 16, ga: 7 },
        notes: ["0 derrotas de local"],
      },
    ],
  },

  {
    club: "Cúcuta Deportivo",
    logo: "/img/clubs/cucuta-deportivo.png",
    country: "CO",
    seasons: [
      {
        year: 2017,
        pct: 59,
        stats: { pj: "—", win: 18, draw: 6, loss: 6, gf: 67, ga: 23 },
        notes: ["Mejor equipo en la tabla general", "Equipo más goleador en 2017"],
      },
    ],
  },
];
