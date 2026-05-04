import { RECORDS, SEASONS } from "../data/results";

export default function Records() {
  // Mostrar TODOS los logros sin filtrar (como está en producción)
  const allRecords = RECORDS.filter(r =>
    !(r.club === "Club Sport Norte América" && r.year === 2015)
  );

  // Todas las temporadas individuales
  const seasonStats = SEASONS.filter(s => s.team !== "GLOBAL PROCESO");

  // Calcular totales reales
  const totals = seasonStats.reduce((acc, s) => ({
    pj: acc.pj + (s.stats?.pj ?? 0),
    v: acc.v + (s.stats?.v ?? 0),
    e: acc.e + (s.stats?.e ?? 0),
    d: acc.d + (s.stats?.d ?? 0),
    gf: acc.gf + (s.stats?.gf ?? 0),
    gc: acc.gc + (s.stats?.gc ?? 0),
  }), { pj: 0, v: 0, e: 0, d: 0, gf: 0, gc: 0 });

  const effectivity = totals.pj > 0 ? Math.round(((totals.v + totals.e * 0.5) / totals.pj) * 100) : 0;

  return (
    <section id="records" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Logros</div>
          <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone leading-[1.05]">
            Records del<br />
            <span className="italic text-gold-500">Cuerpo Técnico.</span>
          </h2>
        </div>

        {/* Grid de TODOS los logros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden mb-16">
          {allRecords.map((record, idx) => (
            <div
              key={record.title + record.year + idx}
              className="bg-ink-800 hover:bg-ink-700 transition-colors p-6 md:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 flex-shrink-0 bg-ink-900 rounded-xl flex items-center justify-center ring-1 ring-bone/10">
                  <img
                    src={record.logo}
                    alt={record.club}
                    className="w-9 h-9 object-contain opacity-90"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-bone leading-tight mb-1.5">
                    {record.title}
                  </h3>
                  <div className="flex items-baseline gap-2 text-sm mb-3">
                    <span className="text-bone/60">{record.club}</span>
                    <span className="text-bone/30">·</span>
                    <span className="text-bone/60">{record.role}</span>
                  </div>
                  <div className="flex items-baseline gap-3 text-xs">
                    <span className="text-gold-500 font-semibold">{record.year}</span>
                  </div>
                  {record.badge && (
                    <div className="mt-3 text-xs text-bone/50">
                      {record.badge}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cuerpo técnico en números */}
        <div className="max-w-3xl mb-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-bone">
            Cuerpo técnico en números
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
          {/* Card GLOBAL primero */}
          <div className="bg-gradient-to-br from-gold-600/20 to-gold-700/10 p-6 md:p-8 border-2 border-gold-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-ink-900/30 rounded-lg flex items-center justify-center">
                    <div className="font-display text-xl font-black text-gold-400">
                      FR
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold">
                      Global Proceso
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-md bg-gold-500/30 border border-gold-500/50">
                  <div className="font-display text-xl font-black text-gold-400 tabular-nums">
                    {effectivity}%
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center mb-3">
                <div className="bg-ink-900/20 rounded-lg p-2">
                  <div className="text-[10px] uppercase tracking-wider text-bone/40 mb-1">PJ</div>
                  <div className="font-display text-xl font-bold text-bone">{totals.pj}</div>
                </div>
                <div className="bg-ink-900/20 rounded-lg p-2">
                  <div className="text-[10px] uppercase tracking-wider text-bone/40 mb-1">G</div>
                  <div className="font-display text-xl font-bold text-gold-400">{totals.v}</div>
                </div>
                <div className="bg-ink-900/20 rounded-lg p-2">
                  <div className="text-[10px] uppercase tracking-wider text-bone/40 mb-1">E</div>
                  <div className="font-display text-xl font-bold text-bone/60">{totals.e}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center mb-3">
                <div className="bg-ink-900/20 rounded-lg p-2">
                  <div className="text-[10px] uppercase tracking-wider text-bone/40 mb-1">P</div>
                  <div className="font-display text-xl font-bold text-bone/40">{totals.d}</div>
                </div>
                <div className="bg-ink-900/20 rounded-lg p-2">
                  <div className="text-[10px] uppercase tracking-wider text-bone/40 mb-1">GF</div>
                  <div className="font-display text-xl font-bold text-gold-400">{totals.gf}</div>
                </div>
                <div className="bg-ink-900/20 rounded-lg p-2">
                  <div className="text-[10px] uppercase tracking-wider text-bone/40 mb-1">GC</div>
                  <div className="font-display text-xl font-bold text-bone/60">{totals.gc}</div>
                </div>
              </div>
              <div className="pt-3 border-t border-gold-500/20 text-[10px] text-bone/50">
                DG: +{totals.gf - totals.gc} · Prom: {(totals.gf / totals.pj).toFixed(1)} gol/p
              </div>
            </div>
          </div>

          {/* Resto de temporadas */}
          {seasonStats.map((season) => {
            const pj = season.stats?.pj ?? 0;
            const v = season.stats?.v ?? 0;
            const e = season.stats?.e ?? 0;
            const d = season.stats?.d ?? 0;
            const gf = season.stats?.gf ?? 0;
            const gc = season.stats?.gc ?? 0;
            const eff = pj > 0 ? Math.round(((v + e * 0.5) / pj) * 100) : 0;
            const dg = gf - gc;
            const prom = pj > 0 ? (gf / pj).toFixed(1) : "0.0";

            return (
              <div
                key={`${season.team}-${season.year}`}
                className="bg-ink-800 p-6 md:p-8 hover:bg-ink-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-ink-900 rounded-lg flex items-center justify-center ring-1 ring-bone/10">
                    <img
                      src={season.logo || "/img/clubs/bolivar.png"}
                      alt={season.team}
                      className="w-7 h-7 object-contain opacity-90"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-gold-500">
                        {season.team}
                      </div>
                      <div className="text-[10px] text-bone/40 mt-0.5">{season.year}</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-gold-500/20 border border-gold-500/40">
                      <div className="font-display text-lg font-black text-gold-400 tabular-nums">
                        {eff}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="bg-ink-900/50 rounded p-2">
                    <div className="text-[9px] uppercase tracking-wider text-bone/40 mb-1">PJ</div>
                    <div className="font-display text-lg font-bold text-bone">{pj}</div>
                  </div>
                  <div className="bg-ink-900/50 rounded p-2">
                    <div className="text-[9px] uppercase tracking-wider text-bone/40 mb-1">G</div>
                    <div className="font-display text-lg font-bold text-bone">{v}</div>
                  </div>
                  <div className="bg-ink-900/50 rounded p-2">
                    <div className="text-[9px] uppercase tracking-wider text-bone/40 mb-1">E</div>
                    <div className="font-display text-lg font-bold text-bone/60">{e}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="bg-ink-900/50 rounded p-2">
                    <div className="text-[9px] uppercase tracking-wider text-bone/40 mb-1">P</div>
                    <div className="font-display text-lg font-bold text-bone/40">{d}</div>
                  </div>
                  <div className="bg-ink-900/50 rounded p-2">
                    <div className="text-[9px] uppercase tracking-wider text-bone/40 mb-1">GF</div>
                    <div className="font-display text-lg font-bold text-bone">{gf}</div>
                  </div>
                  <div className="bg-ink-900/50 rounded p-2">
                    <div className="text-[9px] uppercase tracking-wider text-bone/40 mb-1">GC</div>
                    <div className="font-display text-lg font-bold text-bone/60">{gc}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-bone/10 text-[9px] text-bone/50">
                  DG: {dg > 0 ? '+' : ''}{dg} · Prom: {prom} gol/p
                  {season.notes && <div className="mt-1">{season.notes}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
