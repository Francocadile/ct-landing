import { useLayoutEffect } from "react";

export default function JuniorProyecto() {
  useLayoutEffect(() => {
    const page = document.querySelector(".junior-page");
    const els = document.querySelectorAll(
      "[data-animate], [data-animate-strong], [data-heat]"
    );

    const winH = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < winH && r.bottom > 0) el.classList.add("in-view");
    });

    if (page) page.classList.add("anim-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const safeguard = setTimeout(() => {
      els.forEach((el) => el.classList.add("in-view"));
    }, 1200);

    return () => {
      io.disconnect();
      clearTimeout(safeguard);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes juniorFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes juniorFadeIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes juniorScaleIn { from { opacity: 0; transform: scale(0.6); } to { opacity: var(--target-opacity, 0.7); transform: scale(1); } }
        .junior-page.anim-ready [data-animate]:not(.in-view) { opacity: 0; }
        .junior-page [data-animate].in-view { animation: juniorFadeUp 0.7s ease-out forwards; }
        .junior-page.anim-ready [data-animate-strong]:not(.in-view) { opacity: 0; }
        .junior-page [data-animate-strong].in-view { animation: juniorFadeIn 0.8s ease-out forwards; }
        .junior-page.anim-ready [data-heat]:not(.in-view) { opacity: 0; transform: scale(0.6); }
        .junior-page [data-heat].in-view { animation: juniorScaleIn 0.9s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .junior-page [data-animate],
          .junior-page [data-animate-strong],
          .junior-page [data-heat] { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <div className="junior-page bg-ink-950">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-red-950/15 to-ink-950" />
          <div className="container-x relative z-10">
            <div className="text-center mb-16" data-animate-strong>
              <div className="flex justify-center mb-8">
                <img src="/img/clubs/junior.png" alt="Junior de Barranquilla" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                Análisis profesional · Mayo 2026
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bone tracking-tightest mb-4 leading-[0.92]">
                Proyecto Junior
              </h1>
              <p className="text-gold-500 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Card única - Club analizado */}
              <div className="relative group" data-animate>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                <div className="relative bg-gradient-to-br from-red-900/45 to-red-950/65 border border-red-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm overflow-hidden">
                  <img
                    src="/img/clubs/junior.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none select-none"
                  />
                  <div className="relative flex items-start justify-between mb-8 gap-6">
                    <div>
                      <div className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">Situación Actual</div>
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tighter">Junior de Barranquilla 2026</h2>
                      <p className="text-bone/60 text-sm mt-3 max-w-xl">
                        Campeón Liga BetPlay 2025-II · Semifinalista Apertura 2026-I · Eliminado fase de grupos Copa Libertadores.
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-red-500 leading-none tracking-tightest whitespace-nowrap">4/4</div>
                      <div className="text-bone/60 text-sm mt-2 whitespace-nowrap">Grupo F · Libertadores</div>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Pts/PJ Liga", value: "1.76" },
                      { label: "Pts/PJ Libert.", value: "0.80" },
                      { label: "GC/pj Libert.", value: "1.20" },
                      { label: "Dif/pj Libert.", value: "−0.60" },
                    ].map((s) => (
                      <div key={s.label} className="bg-red-500/10 rounded-xl p-4 text-center border border-red-500/20">
                        <div className="text-bone/60 text-xs mb-1">{s.label}</div>
                        <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-red-400">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Frase puente */}
            <div className="max-w-4xl mx-auto mt-16 text-center" data-animate>
              <div className="p-8 md:p-10 bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 rounded-3xl backdrop-blur-sm">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bone leading-tight tracking-tighter">
                  Diagnóstico técnico construido sobre datos verificados y observación de campo.
                  <br className="hidden sm:block" />
                  <span className="text-gold-500">Cada conclusión derivada en una propuesta concreta de mejora.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-red-950/20 to-ink-950">
          <div className="container-x">
            <div className="text-center mb-16" data-animate>
              <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                Diagnóstico e Interpretación
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight tracking-tightest">
                Análisis Profundo<br />
                <span className="text-red-500">Junior de Barranquilla</span>
              </h2>
              <p className="text-bone/60 text-base md:text-lg max-w-3xl mx-auto">
                Lectura técnica, humana e institucional del Tiburón a partir de los datos reales de la temporada 2026: campeón doméstico vigente que no logra trasladar su rendimiento al escenario internacional.
              </p>
            </div>

            {/* Defensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
                Organización Defensiva
              </h3>

              <div className="card-dark border-2 border-red-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Asimetría defensiva por competencia</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">GC/pj por competencia:</p>
                      <div className="space-y-3">
                        {[
                          ["Liga BetPlay 2026-I", "0.88", false],
                          ["Cuadrangulares · cuartos", "1.00", false],
                          ["Semifinal Liga · ida", "1.00", false],
                          ["Copa Libertadores", "1.20", true],
                          ["Libertadores vs Top 3 grupo", "1.67", true],
                        ].map(([p, v, hl]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80 text-sm">{p}</span>
                            <span className={`font-display font-bold text-red-400 ${hl ? "text-2xl" : "text-xl"}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl mb-6">
                      <h5 className="font-display text-lg font-bold text-red-400 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        El bloque defensivo es <strong>competente en Liga local (0.88 GC/pj)</strong> pero se desarma frente a rivales internacionales de mayor ritmo. En la fase de grupos Copa Libertadores el equipo recibió <strong>6 goles en 5 partidos</strong>, con tres derrotas consecutivas frente a Palmeiras y Cerro Porteño.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        Cuando el rival ejecuta presión alta sostenida, el equipo <strong>pierde estructura en la salida</strong> y la línea defensiva queda expuesta sin coberturas de mediocampo.
                      </p>
                    </div>
                    <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-bold text-sm mb-2">CONCLUSIÓN:</p>
                      <p className="text-bone/70 text-sm">
                        El bloque resiste contra rivales que conceden tiempo. Frente a presión internacional sostenida, los principios defensivos no escalan: hay techo táctico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Brecha competitiva internacional</h4>
                  <div className="space-y-4 mb-6">
                    {[
                      { l: "Puntos en Libertadores", v: "4 / 15", d: "1G · 1E · 3P en 5 fechas. Última derrota 1-0 en casa vs Cerro." },
                      { l: "Diferencia de gol fase grupos", v: "−3", d: "6 GF · 9 GC en el Grupo F. Tres derrotas consecutivas en plena fase." },
                      { l: "Posición Grupo F", v: "4°", d: "Detrás de Cerro Porteño (10), Palmeiras (8), Sporting Cristal (6)." },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <div className="flex items-center justify-between mb-2 gap-3">
                          <span className="text-bone/80 text-sm">{x.l}</span>
                          <span className="font-display text-2xl font-bold text-red-400 whitespace-nowrap leading-none">{x.v}</span>
                        </div>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                    <p className="text-bone font-bold text-sm mb-2">PATRÓN PRINCIPAL DETECTADO:</p>
                    <p className="text-gold-500 font-display text-lg font-bold tracking-tighter">BRECHA COMPETITIVA</p>
                    <p className="text-bone/60 text-xs mt-2">Modelo válido para Liga BetPlay, insuficiente para fase de grupos Libertadores.</p>
                  </div>
                </div>

                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Fallos identificados</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">COLECTIVOS (Prioritarios)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Línea defensiva baja contra rivales de ritmo alto: presión rival empuja el bloque al área propia",
                          "Coberturas de mediocampo lentas en transición rival, especialmente con doble pivote envejecido",
                          "Salida bajo presión sin terceros hombres: pelotazo directo como recurso obligado",
                          "Lectura tardía de cambios de orientación frente a rivales que mueven el balón a 1 toque",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">INDIVIDUALES (Específicos)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Centrales con limitaciones físicas para defensa adelantada sostenida",
                          "Volantes defensivos con promedio de edad alto (33-34 años): pérdida de velocidad en repliegue",
                          "Laterales con escaso retorno tras subir al ataque",
                          "Falta de un líder defensivo en plenitud que ordene la línea desde adentro",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout: Edad promedio del plantel */}
              <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border-2 border-gold-500/30 rounded-2xl">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.25em] font-bold text-gold-500 mb-2">Patrón estructural</div>
                  <h4 className="font-display text-2xl md:text-3xl font-black text-bone tracking-tightest">Plantel envejecido sin recambio claro</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { v: "29.4", l: "años · promedio plantel" },
                    { v: "12", l: "jugadores +30 años" },
                    { v: "2", l: "jugadores -23 con minutos clave" },
                  ].map((d) => (
                    <div key={d.l} className="px-6 py-5 md:py-4 bg-ink-950 border border-gold-500/40 rounded-xl text-center">
                      <div className="font-display text-5xl md:text-3xl font-black text-gold-500 whitespace-nowrap leading-none mb-2">{d.v}</div>
                      <div className="text-bone/60 text-xs uppercase tracking-wider">{d.l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-bone/70 text-sm md:text-base mt-8 md:mt-6 leading-relaxed">
                  <strong className="text-bone">El plantel arrastra una transición generacional pendiente.</strong> El núcleo histórico (Bacca 39, Teófilo 41, Yimmi Chará 35, Muriel 35, Celis 33, Harold Rivera 33, Juan David Ríos 34) sostiene el día a día doméstico, pero el ciclo natural exige planificar el reemplazo con anticipación. Hoy ese plan no aparece reflejado en las altas del último mercado.
                </p>
              </div>
            </div>

            {/* Ofensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 text-2xl">⚽</span>
                Organización Ofensiva
              </h3>

              <div className="card-dark border-2 border-gold-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Producción ofensiva por competencia</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-gold-950/10 rounded-xl border border-gold-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Goles/pj por competencia:</p>
                      <div className="space-y-3">
                        {[
                          ["Liga BetPlay 2026-I", "1.47", true],
                          ["Cuadrangulares · cuartos", "1.50", true],
                          ["Semifinal Liga · ida", "1.00", false],
                          ["Copa Libertadores", "1.20", false],
                          ["Libertadores como visitante", "0.67", false],
                        ].map(([p, v, hl]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80 text-sm">{p}</span>
                            <span className={`font-display font-bold text-gold-500 ${hl ? "text-2xl" : "text-xl"}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                      <h5 className="font-display text-lg font-bold text-gold-500 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        El ataque funciona en Liga (1.47 goles/pj) apalancado en <strong>chispazos individuales de delanteros con jerarquía probada</strong>: Muriel acumula ~8 goles y Bacca aporta finalización en área. La producción sostenida del juego colectivo es <strong>marcadamente menor</strong> que el peso de la individualidad veterana.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        <strong>Solo 0.67 goles/pj como visitante en Libertadores.</strong> Fuera del Romelio Martínez, el equipo depende de que aparezcan los referentes; sin ellos, no hay plan B colectivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-gold-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Dependencia de individualidades</h4>
                  <div className="space-y-4">
                    {[
                      { l: "Goles de delanteros +35 años", v: "~65%", d: "Muriel + Bacca + Teófilo cargan el peso ofensivo del semestre" },
                      { l: "Jugadores -25 años con minutos clave", v: "2", d: "Joel Canchimbo (20) y Jhon Navia (22): falta cantera consolidada" },
                      { l: "Asistencias desde mediocampo", v: "Bajo", d: "El doble pivote envejecido aporta orden, no creación" },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                        <div className="flex justify-between items-center mb-2 gap-3">
                          <span className="text-bone/80 text-sm">{x.l}</span>
                          <span className="font-display text-2xl font-bold text-gold-500 whitespace-nowrap leading-none">{x.v}</span>
                        </div>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                    <h5 className="text-bone/80 font-semibold mt-6 mb-3 text-sm">QUÉ FALTÓ:</h5>
                    <ul className="space-y-2 text-bone/70 text-sm">
                      {[
                        "Llegadas desde segunda línea automatizadas (no solo individualidad)",
                        "Variedad en formas de ataque: hoy el equipo es muy legible",
                        "ABP ofensivo trabajado: bajo aporte de balón parado",
                        "Generación desde el mediocampo: el peso recae en los puntas",
                      ].map((b) => (
                        <li key={b} className="flex items-start gap-2"><span className="text-gold-500 flex-shrink-0">→</span><span>{b}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card-dark border-l-4 border-gold-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Inicios y desarrollo de juego</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">INICIOS DESDE ATRÁS</h5>
                      <p className="text-bone/70 text-sm mb-3">El equipo construye con criterio cuando el rival permite, pero bajo presión alta prevalece el envío directo al delantero. Los terceros hombres no aparecen sistemáticamente.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Sin alternativas estructuradas ante presión alta sostenida</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">ATAQUES POSICIONALES</h5>
                      <p className="text-bone/70 text-sm mb-3">La construcción es de banda con velocidad por extremos, pero la generación de superioridades en zona de finalización depende de movimientos individuales más que de patrones grupales.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Patrón táctico identificable y replicable por rivales internacionales</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">DESARROLLO</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Tiempo en campo rival aceptable en Liga, insuficiente en Libertadores",
                          "Volumen ofensivo cae notablemente como visitante internacional",
                          "Sin aprovechamiento sistemático de ventajas numéricas en zona de creación",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Psicológico */}
            <div className="mb-8" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🧠</span>
                Aspecto Psicológico
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-purple-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Patrón mental detectado</h4>
                  <p className="text-bone/70 text-sm mb-6">El equipo opera desde una posición de éxito reciente. Esa zona de confort competitivo genera un sesgo de continuidad que dificulta los ajustes necesarios cuando el contexto cambia (rival de mayor nivel, presión internacional, calendario apretado).</p>
                  <div className="space-y-3">
                    {[
                      "Campeón doméstico vigente con plantilla base muy estable",
                      "Núcleo veterano con liderazgos consolidados desde hace varios ciclos",
                      "Modelo de juego eficaz en contexto local que se replica sin variantes en Libertadores",
                      "Bajo recambio joven con peso real en el once titular",
                    ].map((node, i) => (
                      <div key={i} className="flex items-start gap-3 text-bone/80 text-sm p-3 bg-purple-500/5 rounded-lg border border-purple-500/10">
                        <span className="text-purple-400 font-bold mt-0.5 flex-shrink-0">→</span>
                        <span>{node}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Diagnóstico principal</h4>
                  <div className="text-center py-8 mb-6">
                    <div className="inline-block px-6 py-3 bg-red-500/10 border-2 border-red-500/30 rounded-2xl mb-4">
                      <div className="font-display text-4xl md:text-5xl font-black text-red-400 tracking-tightest">INERCIA</div>
                    </div>
                    <p className="text-bone/70 text-sm">El éxito local consolida el modelo y bloquea su evolución hacia el nivel internacional</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 font-semibold text-sm mb-1">CONSECUENCIA:</p>
                      <p className="text-bone/80 text-sm">3 derrotas consecutivas en Libertadores, eliminación matemática en fase de grupos y diferencia de gol −3 frente a rivales sudamericanos que exigen ritmo, presión coordinada y rotaciones más profundas.</p>
                    </div>
                    <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-semibold text-sm mb-1">SOLUCIÓN:</p>
                      <p className="text-bone/80 text-sm">Sostener la base competitiva ganadora y, en paralelo, integrar microdosis del modelo de alta intensidad: bloque más adelantado, presión coordinada y rotaciones que sumen recambio joven con minutos reales en partidos exigentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAPA DE CALOR */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-purple-950/10 to-ink-950">
          <div className="container-x">
            <div className="text-center mb-16" data-animate>
              <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                Visualización de Impacto
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight tracking-tightest">
                Mapa de Calor<br />
                <span className="text-purple-400">Comparativo</span>
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">
                Dónde sucede hoy el juego de Junior en escenario internacional vs dónde sucedería con el modelo propuesto.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="card-dark border-l-4 border-red-500" data-animate>
                <h3 className="font-display text-2xl font-bold text-bone mb-6 text-center tracking-tighter">Junior 2026 · Libertadores</h3>
                <div className="aspect-[3/4] bg-gradient-to-b from-emerald-900/20 to-emerald-950/10 rounded-2xl border border-bone/10 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-bone/20" /></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bone/20 -translate-x-1/2" />
                  <div data-heat style={{ "--target-opacity": 0.8 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.6 }} className="absolute bottom-8 left-12 w-40 h-40 bg-red-600 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.7 }} className="absolute bottom-8 right-12 w-44 h-44 bg-red-700 rounded-full blur-3xl" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Pocos arribos al área rival</div></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <div className="inline-block px-4 py-2 bg-red-500/90 rounded-full backdrop-blur-sm border border-red-400/50">
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">⚠️ Bloque empujado al área propia</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm font-semibold mb-2">PATRÓN ACTUAL EN LIBERTADORES:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ 6 goles recibidos en 5 partidos, bloque defensivo hundido</li>
                    <li>→ Solo 0.67 goles/pj como visitante: sin volumen ofensivo lejos del Romelio</li>
                    <li>→ Pérdida de iniciativa frente a rivales de presión alta sostenida</li>
                  </ul>
                </div>
              </div>

              <div className="card-dark border-l-4 border-green-500" data-animate>
                <h3 className="font-display text-2xl font-bold text-bone mb-6 text-center tracking-tighter">Con el modelo propuesto</h3>
                <div className="aspect-[3/4] bg-gradient-to-b from-emerald-900/20 to-emerald-950/10 rounded-2xl border border-bone/10 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-bone/20" /></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bone/20 -translate-x-1/2" />
                  <div data-heat style={{ "--target-opacity": 0.8 }} className="absolute top-6 left-1/2 -translate-x-1/2 w-56 h-56 bg-green-500 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.6 }} className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-600 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.5 }} className="absolute top-16 left-8 w-48 h-48 bg-green-500 rounded-full blur-2xl" />
                  <div data-heat style={{ "--target-opacity": 0.5 }} className="absolute top-16 right-8 w-48 h-48 bg-green-500 rounded-full blur-2xl" />
                  <div data-heat style={{ "--target-opacity": 0.4 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 w-52 h-52 bg-green-600 rounded-full blur-3xl" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                    <div className="inline-block px-4 py-2 bg-green-500/90 rounded-full backdrop-blur-sm border border-green-400/50">
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">✓ Presión alta coordinada</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Bloque defensivo adelantado</div></div>
                </div>
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 text-sm font-semibold mb-2">TRANSFORMACIÓN PROPUESTA:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ Recuperación en campo rival con presión coordinada en bloque</li>
                    <li>→ Equipo corto: defensa lejos del arco propio, mediocampo compacto</li>
                    <li>→ Salida estructurada con terceros hombres bajo presión rival</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERFIL GANADOR · PLANTILLA · PERFILES COMPETITIVOS */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-green-950/10 to-ink-950">
          <div className="container-x">
            <div className="text-center mb-16" data-animate>
              <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                Aspecto Humano
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight tracking-tightest">
                Conformación<br />
                <span className="text-green-500">de la plantilla</span>
              </h2>
              <p className="text-bone/60 text-base md:text-lg max-w-3xl mx-auto">
                26 jugadores · edad media 29,4 años · 12 jugadores +30 años
                <br /><span className="text-bone/40 text-sm">(Transfermarkt, mayo 2026)</span>
              </p>
            </div>

            {/* Núcleo competitivo */}
            <div className="mb-16" data-animate>
              <div className="card-dark border-l-4 border-green-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-3xl">✅</div>
                  <h3 className="font-display text-2xl font-bold text-bone tracking-tighter">Jugadores de corte competitivo</h3>
                </div>
                <p className="text-bone/70 mb-6">
                  El plantel cuenta con un <strong className="text-green-400">núcleo ganador robusto</strong>: campeones recientes, jugadores con paso por selección Colombia y experiencia europea de élite. Sobre esa base se sostiene el éxito doméstico. La tarea es identificar quiénes pueden, además, escalar al nivel internacional sostenido.
                </p>
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-sm text-green-400 font-semibold mb-3">PROCESO DE IDENTIFICACIÓN (Semana 1-2):</p>
                  <ul className="space-y-2 text-bone/70 text-sm">
                    {[
                      "Evaluación individual física + técnica + táctica",
                      "Perfil psicológico y de liderazgo en el vestuario",
                      "Historial de títulos y participación en fases definitivas",
                      "Capacidad de exigencia propia y al grupo",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* A evaluar */}
            <div data-animate>
              <div className="card-dark border-l-4 border-red-500 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center text-3xl">⚠️</div>
                  <h3 className="font-display text-2xl font-bold text-bone tracking-tighter">Jugadores a evaluar exhaustivamente</h3>
                </div>
                <p className="text-bone/70 mb-8">
                  La edad promedio del plantel (29,4 años) y la <strong className="text-red-400">baja presencia de jugadores menores de 25 con minutos relevantes</strong> obligan a una evaluación temprana de continuidad. La idea no es desarmar el núcleo competitivo (es ganador), sino planificar el recambio antes de que sea reactivo.
                </p>

                {[
                  {
                    name: "Teófilo Gutiérrez",
                    sub: "Delantero · #70 · 41 años",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "41 años: rendimiento físico decreciente, minutos acotados a tramos",
                      "Sigue siendo referente emocional del vestuario y de la hinchada",
                      "Ciclo natural en cierre, requiere definición sobre continuidad",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rol limitado a impacto puntual y mentoría de jóvenes (Canchimbo)",
                      "Cierre de ciclo planificado con homenaje institucional",
                      "No bloquear minutos del recambio joven en partidos clave",
                    ],
                  },
                  {
                    name: "Carlos Bacca",
                    sub: "Delantero · sin número fijo · 39 años",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "39 años, finalizador de élite con paso por Sevilla y Milan",
                      "Aporta goles entrando o como titular en partidos medibles",
                      "Continuidad de mediano plazo a definir según rendimiento físico",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Pieza clave en el corto plazo, rol rotativo con Muriel/Paiva",
                      "Cierre natural del ciclo competitivo en 2026-II",
                      "Aporte como referente técnico al recambio joven en el área",
                    ],
                  },
                  {
                    name: "Guillermo Celis",
                    sub: "Volante central · #14 · 33 años",
                    badge: "Evaluación prioritaria",
                    leftTitle: "PROBLEMA PRINCIPAL",
                    leftItems: [
                      "33 años en posición que exige despliegue físico permanente",
                      "Pérdida de velocidad en repliegue y coberturas tras pérdida",
                      "El modelo internacional exige mediocampo dinámico, no estático",
                    ],
                    rightTitle: "PATRÓN DETECTADO",
                    rightItems: [
                      "Sigue siendo aporte en Liga, queda corto contra rivales de presión alta",
                      "Necesita un socio joven (no otro veterano) que le complemente movilidad",
                    ],
                  },
                  {
                    name: "Yimmi Chará",
                    sub: "Extremo · #10 · 35 años",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "35 años, ex Atlético Mineiro y Portland Timbers (MLS)",
                      "Jerarquía y experiencia en momentos competitivos definitorios",
                      "Recambio en banda derecha sin sucesor obvio en el plantel actual",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rotación con Canchimbo, Barrios y Kevin Pérez",
                      "Rol acotado a tramos clave para preservar rendimiento físico",
                    ],
                  },
                  {
                    name: "Juan David Ríos",
                    sub: "Volante central · #80 · 34 años",
                    badge: "Evaluación prioritaria",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "34 años en un doble pivote que necesita cobertura constante",
                      "Refuerzo del último mercado pensado para Liga local",
                      "Sin recambio joven en paralelo para el mismo puesto",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Aporte en Liga, pero el ciclo internacional pide otro perfil",
                      "Buscar volante de 22-25 años en el próximo mercado",
                    ],
                  },
                ].map((j) => (
                  <div key={j.name} className="mb-8 last:mb-0 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <h4 className="font-display text-xl font-bold text-bone tracking-tighter">{j.name}</h4>
                        <p className="text-bone/50 text-sm">{j.sub}</p>
                      </div>
                      <span className="text-xs text-red-400 bg-red-500/20 px-4 py-2 rounded-full font-semibold border border-red-500/30">{j.badge}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-bone/80 font-semibold mb-3 text-sm">{j.leftTitle}</h5>
                        <ul className="space-y-2 text-bone/70 text-xs">
                          {j.leftItems.map((b) => (
                            <li key={b} className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>{b}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-bone/80 font-semibold mb-3 text-sm">{j.rightTitle}</h5>
                        <ul className="space-y-2 text-bone/70 text-xs">
                          {j.rightItems.map((b) => (
                            <li key={b} className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>{b}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Joel Canchimbo - card amarilla (proyección posible) */}
                <div className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <h4 className="font-display text-xl font-bold text-bone tracking-tighter">Joel Canchimbo</h4>
                      <p className="text-bone/50 text-sm">Extremo · #77 · 20 años</p>
                    </div>
                    <span className="text-xs text-yellow-400 bg-yellow-500/20 px-4 py-2 rounded-full font-semibold border border-yellow-500/30">Proyección posible</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">SITUACIÓN ACTUAL</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0">•</span><span>20 años, el jugador con mayor proyección del plantel</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0">•</span><span>Convocatorias a Selección Colombia Sub-20</span></li>
                        <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0">•</span><span>Sondeo previo de Botafogo (Brasil) sin avanzar</span></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">VENTAJA</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Eje del recambio generacional del ciclo siguiente</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Profundidad por banda + velocidad: encaja en el modelo</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Necesita minutos en partidos exigentes, no solo en Liga</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perfiles Competitivos */}
              <div className="card-dark border-l-4 border-green-500 mb-12 mt-16" data-animate>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">✓</div>
                  <div>
                    <h3 className="font-display text-3xl font-bold text-bone mb-2 tracking-tighter">Perfiles Competitivos</h3>
                    <p className="text-bone/60 text-base">Pilares verificados de la plantilla actual con mentalidad ganadora y trayectoria comprobada</p>
                  </div>
                </div>
                <p className="text-bone/70 mb-8 leading-relaxed">
                  Jugadores que demuestran el perfil competitivo necesario: experiencia europea, procesos con selección absoluta, mentalidad de títulos y adaptabilidad probada a modelos de alta exigencia. Son la base no negociable de cualquier proyecto.
                </p>

                {[
                  {
                    name: "Luis Muriel",
                    sub: "Delantero · #9 · 35 años",
                    badge: "Pilar ofensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Atalanta · Sevilla · Sampdoria:", "ciclo europeo de élite"],
                      ["Selección Colombia:", "más de 40 partidos internacionales"],
                      [null, "~8 goles y 1 asistencia en Liga BetPlay 2026-I"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Finalización clínica dentro del área",
                      "Lectura de juego y asociación en último tercio",
                      "Aporte mediático y comercial relevante para el club",
                    ],
                  },
                  {
                    name: "Mauro Silveira",
                    sub: "Arquero · #1 · 26 años · uruguayo",
                    badge: "Pilar defensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Edad ideal (26) para liderar el arco por ciclo largo"],
                      ["Junior 2025-II:", "campeón Liga BetPlay con regularidad"],
                      [null, "Atajada decisiva en serie vs Once Caldas (penal a Dayro)"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Reflejo y atajadas decisivas en momentos críticos",
                      "Salida con pies aceptable para inicios desde atrás",
                      "Liderazgo silencioso en una línea defensiva con rotaciones",
                    ],
                  },
                  {
                    name: "Jermein Peña",
                    sub: "Defensor central · #98 · 26 años",
                    badge: "Núcleo defensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Titular indiscutido del eje central en 2025-2026"],
                      [null, "Contrato largo: pieza identificada como proyecto a 4 años"],
                      [null, "Convivió con dos cuerpos técnicos sosteniendo su titularidad"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Edad ideal (26) para defensa adelantada del modelo",
                      "Físico y duelos en altura sostenidos",
                      "Base del recambio defensivo del ciclo siguiente",
                    ],
                  },
                  {
                    name: "Cristian Barrios",
                    sub: "Extremo · #18 · 28 años",
                    badge: "Pilar ofensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Refuerzo clave del mercado 2026 con proyección de mediano plazo"],
                      [null, "Perfil moderno: extremo con desborde y llegada"],
                      [null, "Adaptado al ritmo competitivo desde su llegada"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "1v1 ganador en banda con velocidad de remate",
                      "Edad pico (28): rinde hoy y proyecta 3 años más",
                      "Encaja en modelo de presión alta por bandas",
                    ],
                  },
                  {
                    name: "Joel Canchimbo",
                    sub: "Extremo · #77 · 20 años",
                    badge: "Apuesta generacional",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Selección Colombia Sub-20:", "proceso formativo en curso"],
                      [null, "Resistió interés de Botafogo: el club lo identifica como joya"],
                      [null, "Joven con mayor proyección del plantel actual"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Profundidad y desborde por banda derecha",
                      "Edad (20) que permite plan de minutos progresivo",
                      "Eje del recambio competitivo del ciclo 2026-2028",
                    ],
                  },
                ].map((j) => (
                  <div key={j.name} className="mb-8 last:mb-0 p-6 bg-green-500/5 border border-green-500/20 rounded-xl">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-bone tracking-tighter">{j.name}</h4>
                        <p className="text-bone/50 text-sm">{j.sub}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold border border-green-500/30">{j.badge}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-display font-bold text-bone mb-3 flex items-center gap-2 tracking-tighter"><span className="text-green-500">✓</span> {j.leftTitle}</h5>
                        <ul className="space-y-2 text-bone/70 text-sm">
                          {j.leftItems.map(([bold, text], i) => (
                            <li key={i} className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span><span>{bold ? <><strong>{bold}</strong> {text}</> : text}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-bone mb-3 flex items-center gap-2 tracking-tighter"><span className="text-green-500">✓</span> {j.rightTitle}</h5>
                        <ul className="space-y-2 text-bone/70 text-sm">
                          {j.rightItems.map((b) => (
                            <li key={b} className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span><span>{b}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <p className="text-bone/80 leading-relaxed text-center">
                    <span className="font-display font-bold text-green-400 tracking-tighter">Estos 5 jugadores conforman la base competitiva real del plantel actual:</span>{" "}
                    verificados en Transfermarkt y noticias recientes (mayo 2026), cruzan trayectoria europea, selección absoluta y proyección joven. Sobre ellos se estructura cualquier ciclo de mediano plazo.
                  </p>
                </div>
              </div>

              {/* Plan 1-6 */}
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border-2 border-gold-500/40 rounded-3xl text-center" data-animate>
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Plan de Acción: Semanas 1-6</h4>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  {[
                    ["SEMANA 1-2", "Evaluación exhaustiva: física, táctica, psicológica, historial competitivo. Reuniones uno a uno con cada jugador y mapeo del recambio generacional por puesto."],
                    ["SEMANA 3-4", "Observación de adaptabilidad al modelo de alta intensidad: bloque adelantado, presión coordinada, inicios bajo presión rival. Diagnóstico granular del recambio joven."],
                    ["SEMANA 5-6", "Decisión final: confirmar núcleo del ciclo siguiente, planificar incorporaciones por puesto y comunicar al cuerpo directivo con calendario claro."],
                  ].map(([label, text]) => (
                    <div key={label} className="p-4 bg-ink-950/50 rounded-xl">
                      <h5 className="text-gold-500 font-semibold mb-2 text-sm">{label}</h5>
                      <p className="text-bone/70 text-xs">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 2 — SOLUCIÓN */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-green-950/10 to-ink-950">
          <div className="container-x">
            <div className="text-center mb-16" data-animate>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                Bloque 2
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight tracking-tightest">
                Junior vs<br />
                <span className="text-gold-500">el modelo propuesto</span>
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Respuesta directa a cada problema detectado</p>
            </div>

            <div className="space-y-8 mb-24">
              {[
                {
                  problema: "4 puntos de 15 posibles en fase de grupos Copa Libertadores, eliminación matemática y diferencia de gol −3.",
                  solucion: "Diseño táctico específico para escenarios internacionales: rotaciones planificadas, bloque adelantado y plan de partido por rival, no calco del modelo local.",
                },
                {
                  problema: "Edad promedio del plantel de 29,4 años con 12 jugadores +30 años y solo 2 menores de 23 con minutos relevantes.",
                  solucion: "Plan de transición generacional: integración escalonada de jóvenes con minutos en partidos exigentes (no solo amistosos o Liga local).",
                },
                {
                  problema: "Núcleo histórico envejecido sin sucesores planificados en varios puestos clave del once titular.",
                  solucion: "Mapeo anticipado del recambio por puesto antes del segundo semestre. Continuidad según función competitiva, no por sentido de pertenencia.",
                },
                {
                  problema: "Solo 0,67 goles/pj como visitante en Libertadores: el equipo se desarma fuera del Romelio Martínez.",
                  solucion: "Mismo modelo en casa y fuera, automatizaciones colectivas que no dependan del clima de tribuna. Estructura no negociable replicada en cualquier escenario.",
                },
                {
                  problema: "Doble pivote envejecido (33-34 años) sin cobertura dinámica frente a rivales de presión alta sostenida.",
                  solucion: "Incorporación de un volante 22-25 años con despliegue físico y lectura defensiva. Socio joven, no otro veterano, para complementar a los referentes.",
                },
                {
                  problema: "Dependencia del 65% de los goles en delanteros +35 años (Muriel, Bacca, Teófilo).",
                  solucion: "Generación ofensiva desde segunda línea automatizada: llegadas de volantes, ABP trabajado y patrones de superioridad numérica grupales, no individuales.",
                },
              ].map((c, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-8 items-center" data-animate>
                  <div className="p-8 bg-gradient-to-br from-red-900/30 to-red-950/10 border-2 border-red-500/30 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0"><span className="text-xl">❌</span></div>
                      <h4 className="font-display text-lg font-bold text-red-400 tracking-tighter">Déficit presentado</h4>
                    </div>
                    <p className="text-bone text-xl">{c.problema}</p>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-green-900/30 to-green-950/10 border-2 border-green-500/30 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"><span className="text-xl">✅</span></div>
                      <h4 className="font-display text-lg font-bold text-green-400 tracking-tighter">Propuesta para solucionarlo</h4>
                    </div>
                    <p className="text-bone text-xl">{c.solucion}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-animate>
              <h3 className="font-display text-4xl font-bold text-bone text-center mb-12 tracking-tighter">Proyección con el modelo propuesto</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { l: "Rendimiento internacional", v: "+150%", s: "De 0,80 a 2,00 Pts/PJ en próxima fase de grupos" },
                  { l: "Jóvenes con minutos clave", v: "5+", s: "De 2 a 5+ jugadores -25 años en once titular" },
                  { l: "Diferencia gol Libertadores", v: "+1,5", s: "Pasar de −0,60 a +0,90 Dif/pj en escenario internacional" },
                ].map((p) => (
                  <div key={p.l} className="p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border border-gold-500/30 rounded-2xl text-center">
                    <div className="text-bone/60 text-sm mb-2">{p.l}</div>
                    <div className="font-display text-5xl font-black text-gold-500 mb-1 whitespace-nowrap leading-none">{p.v}</div>
                    <div className="text-bone/50 text-xs mt-2">{p.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRECEDENTE COMPETITIVO */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-green-950/20 to-ink-950">
          <div className="container-x">
            <div className="text-center mb-14" data-animate>
              <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                Precedente competitivo
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-bone mb-6 leading-tight tracking-tightest">
                El plantel ya mostró<br />
                <span className="text-green-500">que puede</span>
              </h2>
              <p className="text-bone/60 text-base md:text-lg max-w-2xl mx-auto">
                Tres antecedentes recientes que confirman la capacidad latente del grupo cuando el orden colectivo aparece.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  date: "16 / 12 / 2025",
                  rivalLabel: "Deportes Tolima",
                  scoreHome: "4",
                  scoreAway: "0",
                  rivalNote: "Final Liga · estrella 11",
                  highlight: true,
                },
                {
                  date: "13 / 05 / 2026",
                  rivalLabel: "Once Caldas",
                  scoreHome: "3",
                  scoreAway: "2",
                  rivalNote: "Cuartos · clasificación global",
                  highlight: false,
                },
                {
                  date: "19 / 05 / 2026",
                  rivalLabel: "Sporting Cristal",
                  scoreHome: "3",
                  scoreAway: "2",
                  rivalNote: "Libertadores · victoria fecha 5",
                  highlight: false,
                },
              ].map((m) => (
                <div
                  key={m.date}
                  data-animate
                  className={`relative p-6 md:p-7 rounded-2xl bg-gradient-to-br ${
                    m.highlight
                      ? "from-green-900/40 to-green-950/20 border-2 border-green-500/50 shadow-[0_0_60px_rgba(34,197,94,0.12)]"
                      : "from-green-900/20 to-green-950/10 border border-green-500/30"
                  }`}
                >
                  {m.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-500 text-ink-900 text-[10px] uppercase tracking-[0.18em] font-bold whitespace-nowrap">
                      Título doméstico vigente
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-bone/50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.date}</div>
                    <div className="text-bone/70 text-sm mb-2">Junior</div>
                    <div className="font-display font-black text-green-400 leading-none mb-2 tracking-tightest whitespace-nowrap" style={{ fontSize: "clamp(56px, 9vw, 84px)" }}>
                      {m.scoreHome} <span className="text-bone/30 mx-1">-</span> {m.scoreAway}
                    </div>
                    <div className="text-bone font-display text-lg md:text-xl font-bold tracking-tighter mb-3">{m.rivalLabel}</div>
                    <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-[11px] uppercase tracking-[0.12em] font-semibold">
                      {m.rivalNote}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-14 md:mt-16 text-center" data-animate>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-bone leading-tight tracking-tighter">
                La base ganadora existe.<br className="hidden sm:block" />
                <span className="text-green-500"> Falta hacerla escalar.</span>
              </p>
            </div>
          </div>
        </section>

        {/* BLOQUE 3 — PLAN DE IMPACTO INMEDIATO */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-blue-950/10 to-ink-950">
          <div className="container-x">
            <div className="text-center mb-16" data-animate>
              <div className="inline-block px-4 py-2 rounded-full bg-santos-gold/10 border border-santos-gold/20 text-santos-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                Bloque 3
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight tracking-tightest">
                Plan de<br />
                <span className="text-blue-400">impacto inmediato</span>
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Hoja de ruta: Los primeros 90 días en Junior</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-20">
              {[
                {
                  weeks: "1-2",
                  title: "Diagnóstico Interno",
                  color: "blue",
                  icon: "🔍",
                  tasks: ["Evaluación individual completa", "Mapeo del recambio por puesto", "Identificación de líderes internos", "Perfil psicológico del vestuario"],
                  deliverable: "Informe técnico + plan personalizado por jugador + hoja de ruta del recambio generacional",
                },
                {
                  weeks: "3-6",
                  title: "Ajustes Defensivos",
                  color: "gold",
                  icon: "🛡️",
                  tasks: ["Bloque adelantado y presión coordinada", "Cobertura dinámica del doble pivote", "Salida estructurada bajo presión", "Balón parado defensivo"],
                  deliverable: "−30% goles recibidos · estructura defensiva replicable en cualquier escenario competitivo",
                },
                {
                  weeks: "6-12",
                  title: "Primeras bases del modelo",
                  color: "green",
                  icon: "⚽",
                  tasks: ["Integración de recambio joven con minutos reales", "Automatización de patrones ofensivos colectivos", "Microdosificación física para sostener intensidad 90'", "Evaluación continua de adaptabilidad"],
                  deliverable: "Sostener Liga BetPlay + competir de igual a igual en próxima fase de grupos internacional",
                },
              ].map((p) => {
                const colorMap = {
                  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
                  gold: { bg: "bg-gold-500/10", border: "border-gold-500/30", text: "text-gold-500" },
                  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400" },
                };
                const c = colorMap[p.color];
                return (
                  <div key={p.weeks} className="card-dark" data-animate>
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:w-32 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center text-4xl`}>{p.icon}</div>
                        <div className="sm:text-center">
                          <div className={`text-xs uppercase tracking-[0.2em] ${c.text} font-bold`}>Semana</div>
                          <div className="font-display text-2xl font-black text-bone">{p.weeks}</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-bone mb-4 tracking-tighter">{p.title}</h3>
                        <div className="grid sm:grid-cols-2 gap-2 mb-4">
                          {p.tasks.map((t) => (
                            <div key={t} className="flex items-start gap-2 text-bone/70 text-sm"><span className={`${c.text} mt-1 flex-shrink-0`}>→</span><span>{t}</span></div>
                          ))}
                        </div>
                        <div className={`p-4 ${c.bg} border ${c.border} rounded-xl`}>
                          <p className={`text-xs ${c.text} font-semibold mb-1`}>ENTREGABLE:</p>
                          <p className="text-bone/80 text-sm">{p.deliverable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone text-center mb-12 tracking-tighter">Indicadores de seguimiento</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { title: "Defensivo", border: "border-blue-500/30", text: "text-blue-400", stats: [["Goles en área propia", "−30%"], ["Ingresos al área", "−25%"]] },
                  { title: "Ofensivo", border: "border-gold-500/30", text: "text-gold-500", stats: [["Jóvenes con minutos", "+200%"], ["Goles colectivos", "+40%"]] },
                  { title: "Competitivo", border: "border-green-500/30", text: "text-green-400", stats: [["Liga BetPlay", "Top 4"], ["Meta internacional", "Octavos"]] },
                ].map((c) => (
                  <div key={c.title} className={`card-dark border-l-4 ${c.border}`}>
                    <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">{c.title}</h4>
                    <div className="space-y-3">
                      {c.stats.map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center p-3 bg-ink-950 rounded-xl">
                          <span className="text-bone/70 text-sm">{label}</span>
                          <span className={`font-display text-2xl font-bold ${c.text} whitespace-nowrap leading-none`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-bone/5 bg-ink-950">
          <div className="container-x text-center">
            <p className="text-bone/40 text-sm">Cuerpo Técnico Flavio Robatto — Metodología Integrada Estructural · 2026</p>
          </div>
        </footer>
      </div>
    </>
  );
}
