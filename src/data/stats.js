// src/data/stats.js
export const STATS = {
  // ===== Records (métricas destacadas) =====
  records: [
    { label: "Mayor racha invicta", value: 11, sub: "partidos" },
    { label: "Arcos en cero (temporada)", value: 17, sub: "partidos" },
    { label: "Mejor diferencia de gol", value: "+24", sub: "liga" },
    { label: "Mayor victoria", value: "6–0", sub: "marcador" },
  ],

  // ===== Efectividad (usa números totales) =====
  effectiveness: {
    games: 120,
    wins: 58,
    draws: 28,
    losses: 34,
    points: 202, // wins*3 + draws (ej: 58*3 + 28 = 202)
  },

  // ===== Logros =====
  achievements: [
    "Ascenso / Promoción (año)",
    "Clasificación a copas (año)",
    "Récord histórico del club (año)",
  ],
};
