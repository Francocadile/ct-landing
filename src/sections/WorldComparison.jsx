const TEAMS = [
  { name: "Bayern", country: "Alemania", flag: "🇩🇪", goals: 305, color: "from-red-600/20 to-red-700/10" },
  { name: "Barcelona", country: "España", flag: "🇪🇸", goals: 301, color: "from-blue-600/20 to-blue-700/10" },
  { name: "PSG", country: "Francia", flag: "🇫🇷", goals: 274, color: "from-blue-500/20 to-red-500/10" },
  { name: "Bolívar", country: "Bolivia", flag: "🇧🇴", goals: 273, color: "from-gold-600/30 to-gold-700/20", highlight: true },
  { name: "PSV", country: "Países Bajos", flag: "🇳🇱", goals: 259, color: "from-red-500/20 to-white/5" },
];

export default function WorldComparison() {
  const maxGoals = Math.max(...TEAMS.map(t => t.goals));

  return (
    <section className="bg-ink-950 py-24 md:py-36 border-t border-bone/10 relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Insight destacado
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-bone leading-[1.05] mb-8">
            Bolívar, entre los equipos más<br />
            <span className="text-gold-500">goleadores del mundo</span>
          </h2>

          <p className="text-lg md:text-xl text-bone/70 leading-relaxed max-w-3xl mx-auto">
            Desde la llegada de Flavio Robatto en 2024, solo tres equipos en el
            mundo marcaron más goles que Bolívar. Un dato que refleja eficacia,
            identidad y un modelo ofensivo competitivo a nivel internacional.
          </p>
        </div>

        {/* Gráfico de barras */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {TEAMS.map((team, idx) => {
            const percentage = (team.goals / maxGoals) * 100;

            return (
              <div
                key={team.name}
                className={`relative rounded-xl overflow-hidden transition-all ${
                  team.highlight
                    ? "ring-2 ring-gold-500/50 shadow-2xl shadow-gold-500/20"
                    : "ring-1 ring-bone/10"
                }`}
              >
                {/* Barra de fondo */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${team.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${percentage}%` }}
                />

                {/* Contenido */}
                <div className="relative flex items-center justify-between p-5 md:p-6">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Posición */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm ${
                      team.highlight
                        ? "bg-gold-500 text-ink-900"
                        : "bg-bone/10 text-bone/60"
                    }`}>
                      {idx + 1}
                    </div>

                    {/* Bandera y nombre */}
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="text-3xl flex-shrink-0">{team.flag}</span>
                      <div className="min-w-0">
                        <div className={`font-display text-xl md:text-2xl font-bold ${
                          team.highlight ? "text-gold-400" : "text-bone"
                        }`}>
                          {team.name}
                        </div>
                        <div className="text-xs text-bone/50">{team.country}</div>
                      </div>
                    </div>
                  </div>

                  {/* Goles */}
                  <div className={`flex-shrink-0 font-display text-3xl md:text-4xl font-black tabular-nums ${
                    team.highlight ? "text-gold-400" : "text-bone"
                  }`}>
                    {team.goals}
                  </div>
                </div>

                {/* Badge highlight */}
                {team.highlight && (
                  <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden md:block">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40">
                      <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                      <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                        Nuestro equipo
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-display font-semibold text-gold-500 mb-2">
            Una matriz orientada al juego ofensivo.
          </p>
          <p className="text-sm text-bone/40">
            Fuente: Sofascore · Temporada 2024-2025
          </p>
        </div>
      </div>
    </section>
  );
}
