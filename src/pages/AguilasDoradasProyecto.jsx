import { useLayoutEffect } from "react";

export default function AguilasDoradasProyecto() {
  useLayoutEffect(() => {
    const page = document.querySelector(".aguilas-page");
    const els = document.querySelectorAll(
      "[data-animate], [data-animate-strong], [data-heat]"
    );

    // 1) Activar visibles al montar (antes de habilitar el ocultamiento)
    const winH = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < winH && r.bottom > 0) el.classList.add("in-view");
    });

    // 2) Habilitar ocultamiento por CSS solo si el JS arrancó
    if (page) page.classList.add("anim-ready");

    // 3) Observer threshold 0
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

    // 4) Safeguard 1.2s
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
        @keyframes aguilasFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes aguilasFadeIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes aguilasScaleIn { from { opacity: 0; transform: scale(0.6); } to { opacity: var(--target-opacity, 0.7); transform: scale(1); } }
        .aguilas-page.anim-ready [data-animate]:not(.in-view) { opacity: 0; }
        .aguilas-page [data-animate].in-view { animation: aguilasFadeUp 0.7s ease-out forwards; }
        .aguilas-page.anim-ready [data-animate-strong]:not(.in-view) { opacity: 0; }
        .aguilas-page [data-animate-strong].in-view { animation: aguilasFadeIn 0.8s ease-out forwards; }
        .aguilas-page.anim-ready [data-heat]:not(.in-view) { opacity: 0; transform: scale(0.6); }
        .aguilas-page [data-heat].in-view { animation: aguilasScaleIn 0.9s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .aguilas-page [data-animate],
          .aguilas-page [data-animate-strong],
          .aguilas-page [data-heat] { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <div className="aguilas-page bg-ink-950">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-gold-500/[0.06] to-ink-950" />
          <div className="container-x relative z-10">
            <div className="text-center mb-16" data-animate-strong>
              <div className="flex justify-center mb-8">
                <img src="/img/clubs/aguilas-doradas.png" alt="Águilas Doradas Rionegro" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                Análisis profesional · Mayo 2026
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bone tracking-tightest mb-4 leading-[0.92]">
                Proyecto Águilas Doradas
              </h1>
              <p className="text-gold-500 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Card única - Club analizado */}
              <div className="relative group" data-animate>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                <div className="relative bg-gradient-to-br from-red-900/45 to-red-950/65 border border-red-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm overflow-hidden">
                  {/* Escudo como marca de agua atmosférica */}
                  <img
                    src="/img/clubs/aguilas-doradas.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none select-none"
                  />
                  <div className="relative flex items-start justify-between mb-8 gap-6">
                    <div>
                      <div className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">Situación Actual</div>
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tighter">Águilas Doradas 2026</h2>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-red-500 leading-none tracking-tightest">12</div>
                      <div className="text-bone/60 text-sm mt-2 whitespace-nowrap">de 20 · Liga BetPlay</div>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Pts/PJ", value: "1.37" },
                      { label: "Goles/pj", value: "1.05" },
                      { label: "GC/pj", value: "1.32" },
                      { label: "Dif/pj", value: "−0.26" },
                    ].map((s) => (
                      <div key={s.label} className="bg-red-500/10 rounded-xl p-4 text-center border border-red-500/20">
                        <div className="text-bone/60 text-xs mb-1">{s.label}</div>
                        <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-red-400">{s.value}</div>
                      </div>
                    ))}
                  </div>
                  <p className="relative text-bone/40 text-xs mt-4 text-center">
                    Liga BetPlay Apertura 2026 · fase regular (19 fechas) · 7G 5E 7P · 20 GF / 25 GC · a 2 puntos del Top 8
                  </p>
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
                <span className="text-red-500">Águilas Doradas</span>
              </h2>
              <p className="text-bone/60 text-base md:text-lg max-w-3xl mx-auto">
                Lectura técnica, humana e institucional del equipo de Rionegro a partir de los datos reales de la Liga BetPlay I-2026.
              </p>
            </div>

            {/* Defensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
                Organización Defensiva
              </h3>

              <div className="card-dark border-2 border-red-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Huella defensiva (25 goles recibidos en 19 partidos)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Indicadores de la temporada:</p>
                      <div className="space-y-3">
                        {[
                          ["Goles en contra / pj", "1.32", true],
                          ["Goles esperados en contra", "23.1", false],
                          ["Recuperaciones en campo propio", "48%", true],
                          ["Diferencia de gol", "−5", false],
                        ].map(([p, v, hl]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80">{p}</span>
                            <span className={`font-display font-bold text-red-400 whitespace-nowrap leading-none ${hl ? "text-2xl" : "text-xl"}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl mb-6">
                      <h5 className="font-display text-lg font-bold text-red-400 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        Con <strong>1,32 goles recibidos por partido</strong> (25 en total, frente a 23,1 esperados) y diferencia de gol negativa, la fase defensiva es el principal lastre del rendimiento global.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        El equipo es <strong>reactivo</strong>: recupera mucho pero hondo (el 48% de sus recuperaciones son en campo propio) y pierde la pelota seguido en mediocampo. Defiende lejos del modelo ideal, <strong>resolviendo dentro del área en lugar de cortar arriba</strong>.
                      </p>
                    </div>
                    <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-bold text-sm mb-2">CONCLUSIÓN:</p>
                      <p className="text-bone/70 text-sm">
                        Una defensa que concede a este ritmo obliga a ganar siempre por la mínima. Sin orden de bloque, cada punto se vuelve cuesta arriba.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Goles en contra: patrones detectados</h4>
                  <div className="space-y-4 mb-6">
                    {[
                      { l: "Bloque hundido en defensa", d: "Recupera el 48% en campo propio: defiende cerca del arco y concede la zona de creación." },
                      { l: "Pérdidas en mediocampo", d: "2° equipo con más pérdidas de la liga; cede la pelota en zonas de transición y queda expuesto." },
                      { l: "Duelo aéreo flojo pese al volumen", d: "2° equipo con más duelos aéreos de la liga, pero gana solo el 42% (debajo del promedio)." },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <span className="text-bone/80 text-sm font-semibold block mb-1">{x.l}</span>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                    <p className="text-bone font-bold text-sm mb-2">PATRÓN PRINCIPAL DETECTADO:</p>
                    <p className="text-gold-500 font-display text-lg font-bold tracking-tighter">PERMEABILIDAD DEFENSIVA</p>
                    <p className="text-bone/60 text-xs mt-2">La línea no se sostiene como bloque y concede demasiado para el potencial del plantel.</p>
                  </div>
                </div>

                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Fallos identificados</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">COLECTIVOS (Prioritarios)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Defensa retrasada que invita al rival a su campo",
                          "Presión descoordinada: el primer presionante queda solo",
                          "Coberturas tardías en transiciones rivales",
                          "Distancia entre líneas que abre el espacio interior",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">INDIVIDUALES (Específicos)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Duelo aéreo ganado solo al 42% pese al gran volumen",
                          "Falta de agresividad en la anticipación",
                          "Núcleo central de edad alta para defensa adelantada",
                          "Pérdida de referencias en balón parado defensivo",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout estructural: inestabilidad de esquema */}
              <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border-2 border-gold-500/30 rounded-2xl">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.25em] font-bold text-gold-500 mb-2">Patrón estructural</div>
                  <h4 className="font-display text-2xl md:text-3xl font-black text-bone tracking-tightest">Inestabilidad de esquema</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {["5-3-2", "4-4-2", "3-5-2", "4-2-3-1"].map((scheme) => (
                    <div key={scheme} className="px-4 py-5 md:py-4 bg-ink-950 border border-gold-500/40 rounded-xl text-center">
                      <div className="font-display text-4xl md:text-3xl font-black text-gold-500 whitespace-nowrap leading-none">{scheme}</div>
                    </div>
                  ))}
                </div>
                <p className="text-bone/70 text-sm md:text-base mt-8 md:mt-6 leading-relaxed">
                  <strong className="text-bone">Cuatro dibujos distintos repartidos a lo largo de la temporada.</strong> Sin un esquema de referencia, los principios defensivos no llegan a automatizarse y el bloque se rearma fecha a fecha. La mejor versión ofensiva aparece en 4-4-2, pero no se sostiene.
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
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Huella ofensiva (20 goles en 19 partidos)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-gold-950/10 rounded-xl border border-gold-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Producción de gol:</p>
                      <div className="space-y-3">
                        {[
                          ["Goles a favor / pj", "1.05", true],
                          ["Goleador (4° de la liga)", "11 goles", true],
                          ["Peso del goleador", "55%", true],
                          ["Resto del plantel", "9 goles", false],
                        ].map(([p, v, hl]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80">{p}</span>
                            <span className={`font-display font-bold text-gold-500 whitespace-nowrap leading-none ${hl ? "text-2xl" : "text-xl"}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                      <h5 className="font-display text-lg font-bold text-gold-500 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        El equipo anota poco (<strong>1,05 goles/pj</strong>) y concentra la producción en un solo nombre: <strong>el goleador firma 11 de los 20 goles (55%)</strong> y es el 4° máximo artillero de toda la liga. Cuando no aparece, el ataque se apaga.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        Genera <strong>muy pocos remates</strong> (de los más bajos de la liga) aunque de buena calidad: la mejor materia prima existe, falta volumen y vías alternativas (segunda línea y balón parado, hoy su arma secundaria real).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout estructural: dependencia del goleador */}
              <div className="mb-8 p-6 md:p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border-2 border-gold-500/30 rounded-2xl">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.25em] font-bold text-gold-500 mb-2">Patrón estructural</div>
                  <h4 className="font-display text-2xl md:text-3xl font-black text-bone tracking-tightest">Dependencia de una sola vía de gol</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {["55%", "11 / 20", "4° de la liga"].map((d) => (
                    <div key={d} className="px-6 py-5 md:py-4 bg-ink-950 border border-gold-500/40 rounded-xl text-center">
                      <div className="font-display text-4xl md:text-3xl font-black text-gold-500 whitespace-nowrap leading-none">{d}</div>
                    </div>
                  ))}
                </div>
                <p className="text-bone/70 text-sm md:text-base mt-8 md:mt-6 leading-relaxed">
                  <strong className="text-bone">El 55% de los goles depende de un único finalizador</strong> (11 de 20, 4° artillero de la liga). Es un activo enorme, pero también un riesgo: una lesión, una marca individual o una baja de forma reducen al equipo a un ataque sin salidas. El modelo busca sostener al goleador y, a la vez, multiplicar las fuentes de gol.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-gold-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">¿Por qué se convierten pocos goles?</h4>
                  <div className="space-y-4">
                    {[
                      { l: "Remates / 90", v: "9.2", d: "De los más bajos de la liga: el problema es de volumen, no de puntería." },
                      { l: "xG por remate", v: "0.12", d: "De los mejores de la liga: cuando remata, lo hace desde buenas posiciones." },
                      { l: "Peso del goleador", v: "55%", d: "11 de 20 goles en un solo jugador: ataque demasiado dependiente." },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-bone/80 text-sm">{x.l}</span>
                          <span className="font-display text-2xl font-bold text-gold-500 whitespace-nowrap leading-none">{x.v}</span>
                        </div>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                    <h5 className="text-bone/80 font-semibold mt-6 mb-3 text-sm">QUÉ FALTÓ:</h5>
                    <ul className="space-y-2 text-bone/70 text-sm">
                      {[
                        "Más vías de gol además del 9 de referencia",
                        "Llegadas de segunda línea con volantes ofensivos",
                        "Ataques posicionales con paciencia para abrir bloques bajos",
                        "Balón parado ofensivo como fuente regular de gol",
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
                      <p className="text-bone/70 text-sm mb-3">Es el equipo menos asociativo de la liga: el menor volumen de pases y la mayor proporción de envíos largos. La salida renuncia al juego corto y entrega la pelota en mediocampo.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Juego directo como recurso, no como elección</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">ATAQUES POSICIONALES</h5>
                      <p className="text-bone/70 text-sm mb-3">Ante bloques bajos cuesta generar superioridades; el ataque busca pronto al goleador sin construir la jugada entre líneas.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Ataque predecible y concentrado en un nombre</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">DESARROLLO</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Producción de gol baja (1,05/pj) para pelear los ocho",
                          "Pocas fuentes alternativas de finalización",
                          "Falta de continuidad para sostener el rendimiento 90 minutos",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout estructural: equipo menos asociativo */}
              <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border-2 border-gold-500/30 rounded-2xl">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.25em] font-bold text-gold-500 mb-2">Patrón estructural</div>
                  <h4 className="font-display text-2xl md:text-3xl font-black text-bone tracking-tightest">El equipo menos asociativo de la liga</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    ["295", "pases / 90 · último de 20"],
                    ["68%", "precisión · la más baja"],
                    ["41%", "pases largos · la más alta"],
                  ].map(([n, l]) => (
                    <div key={l} className="px-6 py-5 md:py-4 bg-ink-950 border border-gold-500/40 rounded-xl text-center">
                      <div className="font-display text-5xl md:text-4xl font-black text-gold-500 whitespace-nowrap leading-none mb-2">{n}</div>
                      <div className="text-bone/50 text-xs">{l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-bone/70 text-sm md:text-base mt-8 md:mt-6 leading-relaxed">
                  <strong className="text-bone">Hoy el juego asociativo no es una herramienta del equipo.</strong> Es justo el terreno donde el modelo propuesto agrega más valor: salida limpia desde atrás, control del balón y llevar el juego al campo rival en vez de cederlo con el envío largo.
                </p>
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
                  <p className="text-bone/70 text-sm mb-6">El equipo mostró capacidad para meterse en zona de clasificación y luego no logró sostener ese nivel hasta el cierre, quedando fuera de los ocho. El rendimiento aparece a chispazos más que como una constante.</p>
                  <div className="space-y-3">
                    {[
                      "Falta de continuidad en una identidad de juego reconocible",
                      "Liderazgos internos del vestuario por afianzar",
                      "Rendimiento intermitente: tramos buenos seguidos de caídas",
                      "Dependencia emocional de la inspiración de individualidades",
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
                      <div className="font-display text-4xl md:text-5xl font-black text-red-400 tracking-tightest">INTERMITENCIA</div>
                    </div>
                    <p className="text-bone/70 text-sm">El equipo compite por momentos, no como constante</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 font-semibold text-sm mb-1">CONSECUENCIA:</p>
                      <p className="text-bone/80 text-sm">Tras pelear el grupo de los ocho, el equipo perdió continuidad y terminó 12°. La falta de un piso competitivo estable cuesta los puntos que separan la mitad de tabla de la fase final.</p>
                    </div>
                    <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-semibold text-sm mb-1">SOLUCIÓN:</p>
                      <p className="text-bone/80 text-sm">Construir un piso de rendimiento que no dependa de la inspiración: identidad de juego escrita, liderazgos internos firmes y trabajo de concentración para sostener el nivel las 20 fechas.</p>
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
                Dónde sucede hoy el juego de Águilas Doradas vs dónde sucedería con el modelo propuesto.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="card-dark border-l-4 border-red-500" data-animate>
                <h3 className="font-display text-2xl font-bold text-bone mb-6 text-center tracking-tighter">Águilas Doradas 2026 · Actual</h3>
                <div className="aspect-[3/4] bg-gradient-to-b from-emerald-900/20 to-emerald-950/10 rounded-2xl border border-bone/10 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-bone/20" /></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bone/20 -translate-x-1/2" />
                  <div data-heat style={{ "--target-opacity": 0.8 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.6 }} className="absolute bottom-8 left-12 w-40 h-40 bg-red-600 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.7 }} className="absolute bottom-8 right-12 w-44 h-44 bg-red-700 rounded-full blur-3xl" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Poca presencia en zona ofensiva</div></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <div className="inline-block px-4 py-2 bg-red-500/90 rounded-full backdrop-blur-sm border border-red-400/50">
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">⚠️ Defensa hundida</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm font-semibold mb-2">PATRÓN ACTUAL:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ Recupera hondo: 48% de recuperaciones en campo propio</li>
                    <li>→ El menor volumen de pases de la liga, juego directo</li>
                    <li>→ Ataque concentrado en un solo finalizador (55%)</li>
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
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">✓ Presión alta</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Bloque defensivo compacto</div></div>
                </div>
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 text-sm font-semibold mb-2">TRANSFORMACIÓN PROPUESTA:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ Presión alta con salida controlada</li>
                    <li>→ Equipo corto: defensa lejos del arco propio</li>
                    <li>→ Más jugadores de cara al gol, no solo el 9</li>
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
                23 jugadores · edad media 27,4 años · base nacional
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
                  Sobre estos perfiles se construye el liderazgo interno y se reordena la jerarquía del vestuario. Son los que conforman el <strong className="text-green-400">núcleo ganador</strong> del proyecto.
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
                  El núcleo central de la defensa concentra varios jugadores de edad alta para un modelo de defensa adelantada e intensidad sostenida. Cada caso pasa por una evaluación de <strong className="text-red-400">4-6 semanas</strong> antes de definir su rol.
                </p>

                {[
                  {
                    name: "John García",
                    sub: "Defensor central · #2 · 36 años",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "36 años: ciclo natural en su tramo final",
                      "Exigencia física alta para defensa adelantada",
                      "Recuperación entre partidos a monitorear de cerca",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Aporte de jerarquía y conducción de línea",
                      "Rol de rotación y referente, no titular fijo del modelo",
                    ],
                  },
                  {
                    name: "Hernán Lópes",
                    sub: "Defensor central · #29 · 35 años · argentino",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "35 años: límites para una línea que defiende alto",
                      "Duelos y velocidad a evaluar contra delanteros rápidos",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Experiencia útil para sostener al grupo joven",
                      "Convivencia con un central de proyección como pareja",
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
              </div>

              {/* Proyección y destacados */}
              <div className="card-dark border-l-4 border-green-500 mb-12" data-animate>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-3xl">⭐</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-bone tracking-tighter">Proyección y destacados</h3>
                    <p className="text-bone/60 text-base">Juveniles con minutos en Primera y techo alto sobre los que apoyar el recambio generacional</p>
                  </div>
                </div>
                {[
                  {
                    name: "Javier Mena",
                    sub: "Lateral izquierdo · #32 · 21 años",
                    leftItems: [
                      ["green", "Una de las revelaciones del campeonato, ya con gol propio"],
                      ["green", "El lado izquierdo es el carril por el que más construye el equipo"],
                      ["yellow", "Interés de clubes grandes: hay que retenerlo y potenciarlo"],
                    ],
                    rightItems: [
                      "Gran volumen de centros: motor del ataque por izquierda",
                      "Perfil ideal para lateral con ida y vuelta sostenida del modelo",
                    ],
                  },
                  {
                    name: "Royner Benítez",
                    sub: "Volante ofensivo · #90 · 20 años",
                    leftItems: [
                      ["green", "Muy productivo: combina goles y asistencias en pocos minutos"],
                      ["green", "Presiona alto y recupera en campo rival, a veces con gol después"],
                      ["yellow", "Necesita continuidad para consolidar regularidad"],
                    ],
                    rightItems: [
                      "Vía de gol alternativa al 9, justo lo que falta en ataque",
                      "Llegada de segunda línea y presión tras pérdida: encaja en el modelo",
                    ],
                  },
                ].map((j) => (
                  <div key={j.name} className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <h4 className="font-display text-xl font-bold text-bone tracking-tighter">{j.name}</h4>
                        <p className="text-bone/50 text-sm">{j.sub}</p>
                      </div>
                      <span className="text-xs text-yellow-400 bg-yellow-500/20 px-4 py-2 rounded-full font-semibold border border-yellow-500/30">Proyección posible</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-bone/80 font-semibold mb-3 text-sm">SITUACIÓN ACTUAL</h5>
                        <ul className="space-y-2 text-bone/70 text-xs">
                          {j.leftItems.map(([color, text]) => (
                            <li key={text} className="flex items-start gap-2"><span className={`${color === "green" ? "text-green-500" : "text-yellow-500"} flex-shrink-0`}>•</span><span>{text}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-bone/80 font-semibold mb-3 text-sm">VENTAJA</h5>
                        <ul className="space-y-2 text-bone/70 text-xs">
                          {j.rightItems.map((b) => (
                            <li key={b} className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>{b}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Perfiles Competitivos */}
              <div className="card-dark border-l-4 border-green-500 mb-12 mt-16" data-animate>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">✓</div>
                  <div>
                    <h3 className="font-display text-3xl font-bold text-bone mb-2 tracking-tighter">Perfiles Competitivos</h3>
                    <p className="text-bone/60 text-base">Pilares verificados de la plantilla actual con jerarquía y trayectoria comprobada</p>
                  </div>
                </div>
                <p className="text-bone/70 mb-8 leading-relaxed">
                  Jugadores que demuestran el perfil competitivo necesario: experiencia en equipos grandes, procesos de selección, mentalidad de títulos y producción real en la temporada en curso.
                </p>

                {[
                  {
                    name: "Andrés Ricaurte",
                    sub: "Volante central · #8 · 34 años",
                    badge: "Liderazgo técnico",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Independiente Medellín:", "193 partidos, referente del club"],
                      ["Copa BetPlay 2019:", "campeón con el DIM"],
                      [null, "Paso por el fútbol internacional (Ecuador)"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Cerebro del juego: pausa, última pelota y conducción",
                      "Liderazgo y experiencia en instancias definitivas",
                      "Referente natural para ordenar al grupo joven",
                    ],
                  },
                  {
                    name: "Jorge Rivaldo",
                    sub: "Delantero centro · #9 · 22 años",
                    badge: "Pilar de área",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Apertura 2026:", "11 goles, 4° artillero de la liga"],
                      [null, "55% de los goles del equipo en la temporada"],
                      [null, "22 años: techo alto y margen de evolución"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Delantero de referencia con peso y definición",
                      "Punto fijo del ataque alrededor del cual construir",
                      "Activo a sostener y a rodear de más vías de gol",
                    ],
                  },
                  {
                    name: "Joaquín Varela",
                    sub: "Defensor central · #3 · 27 años",
                    badge: "Salida + ABP",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Titular indiscutido y mayor volumen de pase de la zaga"],
                      ["Apertura 2026:", "3 goles, amenaza aérea en balón parado"],
                      [null, "1,89 m: dominio del juego aéreo en ambas áreas"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Central con buen pie: clave para iniciar desde atrás",
                      "Edad ideal (27) para liderar la línea por ciclo largo",
                      "Aporta gol de ABP, una vía secundaria real del equipo",
                    ],
                  },
                  {
                    name: "Frank Lozano",
                    sub: "Volante central · #22 · 32 años",
                    badge: "Eje del medio",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "El jugador con más minutos del plantel en la temporada"],
                      [null, "Eje permanente del mediocampo en todos los esquemas"],
                      [null, "Alto volumen de recuperaciones y de pase"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Pivote de equilibrio entre líneas",
                      "Regularidad y jerarquía para ordenar la fase de posesión",
                      "Base sobre la que apoyar la construcción del modelo",
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
                    <span className="font-display font-bold text-green-400 tracking-tighter">Estos cuatro jugadores conforman la base competitiva real del plantel actual:</span>{" "}
                    central de salida, eje de medio, conducción creativa y goleador de la liga. Núcleo con producción y mentalidad para liderar un proceso de alta exigencia desde el primer día.
                  </p>
                </div>
              </div>

              {/* Plan 1-6 */}
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border-2 border-gold-500/40 rounded-3xl text-center" data-animate>
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Plan de Acción: Semanas 1-6</h4>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  {[
                    ["SEMANA 1-2", "Evaluación exhaustiva: física, táctica, psicológica, historial competitivo. Reuniones uno a uno con cada jugador."],
                    ["SEMANA 3-4", "Observación de adaptabilidad al modelo de alta intensidad: bloque adelantado, presión coordinada, inicios bajo presión."],
                    ["SEMANA 5-6", "Decisión final: integración al núcleo ganador o sustitución. Comunicación clara con dirigencia."],
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
                Águilas Doradas vs<br />
                <span className="text-gold-500">el modelo propuesto</span>
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Respuesta directa a cada problema detectado</p>
            </div>

            <div className="space-y-8 mb-24">
              {[
                {
                  problema: "Es el equipo menos asociativo de la liga: el menor volumen de pases, la precisión más baja y la mayor proporción de envíos largos.",
                  solucion: "Salida limpia desde atrás con apoyos cortos y rotaciones automatizadas. Controlar el balón y llevar el juego al campo rival en vez de cederlo con el pelotazo.",
                },
                {
                  problema: "El 55% de los goles depende de un solo finalizador (11 de 20). Si el goleador no aparece, el ataque se apaga.",
                  solucion: "Sostener al goleador y multiplicar las vías de gol: llegadas de segunda línea, balón parado trabajado y volumen repartido entre más jugadores.",
                },
                {
                  problema: "Genera muy pocos remates (de los más bajos de la liga), aunque de buena calidad. Falta volumen de ocasiones.",
                  solucion: "Ataques posicionales con paciencia para abrir bloques bajos y generar más ocasiones, aprovechando que la selección de remate ya es buena.",
                },
                {
                  problema: "1,32 goles recibidos por partido: recupera hondo y resuelve dentro del área en lugar de cortar arriba.",
                  solucion: "Bloque defensivo compacto y presión coordinada para defender lejos del arco propio y recuperar en campo rival.",
                },
                {
                  problema: "Rendimiento intermitente: peleó el Top 8 y se cayó en el cierre, quedando a 2 puntos de la clasificación.",
                  solucion: "Construir un piso competitivo estable con trabajo de concentración por tramos y microdosificación física para sostener el nivel las 19 fechas.",
                },
                {
                  problema: "Cuatro esquemas distintos en la temporada: sin una identidad de juego reconocible y sostenida.",
                  solucion: "Modelo de juego escrito, transferible y de ciclo largo: principios claros que el plantel pueda automatizar y crecer sobre ellos.",
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
                  { l: "Peso del goleador", v: "55% → 35%", s: "Repartir el gol entre más finalizadores" },
                  { l: "Precisión de pase", v: "68% → 80%", s: "Pasar del juego directo a la construcción asociativa" },
                  { l: "Volumen de remates", v: "+30%", s: "Más ocasiones manteniendo la buena selección de remate" },
                ].map((p) => (
                  <div key={p.l} className="p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border border-gold-500/30 rounded-2xl text-center">
                    <div className="text-bone/60 text-sm mb-2">{p.l}</div>
                    <div className="font-display text-4xl md:text-5xl font-black text-gold-500 mb-1 whitespace-nowrap leading-none">{p.v}</div>
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
                  date: "07 / 04 / 2026 · Liga BetPlay",
                  rivalLabel: "Atlético Bucaramanga",
                  scoreHome: "2",
                  scoreAway: "1",
                  rivalNote: "Campeón de Liga 2024",
                  highlight: true,
                },
                {
                  date: "03 / 05 / 2026 · Liga BetPlay",
                  rivalLabel: "Medellín",
                  scoreHome: "2",
                  scoreAway: "1",
                  rivalNote: "Triunfo de visita ante un grande",
                  highlight: false,
                },
                {
                  date: "26 / 04 / 2026 · Liga BetPlay",
                  rivalLabel: "Once Caldas",
                  scoreHome: "2",
                  scoreAway: "2",
                  rivalNote: "Empate ante un clasificado al Top 8",
                  highlight: false,
                },
              ].map((m) => (
                <div
                  key={m.rivalLabel}
                  data-animate
                  className={`relative p-6 md:p-7 rounded-2xl bg-gradient-to-br ${
                    m.highlight
                      ? "from-green-900/40 to-green-950/20 border-2 border-green-500/50 shadow-[0_0_60px_rgba(34,197,94,0.12)]"
                      : "from-green-900/20 to-green-950/10 border border-green-500/30"
                  }`}
                >
                  {m.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-500 text-ink-900 text-[10px] uppercase tracking-[0.18em] font-bold whitespace-nowrap">
                      Vs. el campeón 2024
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-bone/50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.date}</div>
                    <div className="text-bone/70 text-sm mb-2">Águilas Doradas</div>
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
                El potencial existe.<br className="hidden sm:block" />
                <span className="text-green-500"> Falta sistematizarlo.</span>
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
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Hoja de ruta: Los primeros 90 días en Águilas Doradas</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-20">
              {[
                {
                  weeks: "1-2",
                  title: "Diagnóstico Interno",
                  color: "blue",
                  icon: "🔍",
                  tasks: ["Evaluación individual completa", "Identificación de líderes", "Ajustes prioritarios", "Perfil psicológico"],
                  deliverable: "Informe técnico + plan personalizado por jugador + lista priorizada de necesidades",
                },
                {
                  weeks: "3-6",
                  title: "Ajustes Defensivos",
                  color: "gold",
                  icon: "🛡️",
                  tasks: ["Reducir goles dentro del área", "Posicionamiento de bloque", "Presión coordinada", "Balón parado defensivo"],
                  deliverable: "−35% goles recibidos · bloque defensivo identificable y sostenido",
                },
                {
                  weeks: "6-12",
                  title: "Primeras bases del modelo",
                  color: "green",
                  icon: "⚽",
                  tasks: ["Microdosificación integrada", "Posesión + presión", "Multiplicar vías de gol", "Evaluación continua"],
                  deliverable: "+15% efectividad · pelear el Top 8 · clasificación a la fase final",
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
                          <div className="font-display text-2xl font-black text-bone whitespace-nowrap leading-none">{p.weeks}</div>
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
                  { title: "Defensivo", border: "border-blue-500/30", text: "text-blue-400", stats: [["Goles en contra / pj", "−35%"], ["Ingresos al área", "−30%"]] },
                  { title: "Ofensivo", border: "border-gold-500/30", text: "text-gold-500", stats: [["Peso del goleador", "25%"], ["Goles a favor / pj", "+30%"]] },
                  { title: "Posicional", border: "border-green-500/30", text: "text-green-400", stats: [["Tabla Liga BetPlay", "Top 8"], ["Meta", "Fase final"]] },
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
