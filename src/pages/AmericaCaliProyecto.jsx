import { useEffect } from "react";

export default function AmericaCaliProyecto() {
  useEffect(() => {
    const els = document.querySelectorAll(
      "[data-animate], [data-animate-strong], [data-heat]"
    );

    // 1) Activar visibles al montar
    const winH = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < winH && r.bottom > 0) el.classList.add("in-view");
    });

    // 2) Observer threshold 0
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

    // 3) Safeguard 1.8s
    const safeguard = setTimeout(() => {
      els.forEach((el) => el.classList.add("in-view"));
    }, 1800);

    return () => {
      io.disconnect();
      clearTimeout(safeguard);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes americaCaliFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes americaCaliFadeIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes americaCaliScaleIn { from { opacity: 0; transform: scale(0.6); } to { opacity: var(--target-opacity, 0.7); transform: scale(1); } }
        .america-cali-page [data-animate] { opacity: 0; }
        .america-cali-page [data-animate].in-view { animation: americaCaliFadeUp 0.7s ease-out forwards; }
        .america-cali-page [data-animate-strong] { opacity: 0; }
        .america-cali-page [data-animate-strong].in-view { animation: americaCaliFadeIn 0.8s ease-out forwards; }
        .america-cali-page [data-heat] { opacity: 0; transform: scale(0.6); }
        .america-cali-page [data-heat].in-view { animation: americaCaliScaleIn 0.9s ease-out forwards; }
      `}</style>

      <div className="america-cali-page bg-ink-950">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-red-950/15 to-ink-950" />
          <div className="container-x relative z-10">
            <div className="text-center mb-16" data-animate-strong>
              <div className="flex justify-center mb-8">
                <img src="/img/clubs/americadecali.png" alt="América de Cali" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                Análisis profesional · Mayo 2026
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bone tracking-tightest mb-4 leading-[0.92]">
                Proyecto América de Cali
              </h1>
              <p className="text-gold-500 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative group" data-animate>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
                <div className="relative bg-gradient-to-br from-red-900/45 to-red-950/65 border border-red-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm overflow-hidden">
                  <img
                    src="/img/clubs/americadecali.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.04] object-contain pointer-events-none select-none"
                  />
                  <div className="relative flex items-start justify-between mb-8 gap-6">
                    <div>
                      <div className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">Situación actual</div>
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tighter">América de Cali 2026</h2>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-red-500 leading-none tracking-tightest">4</div>
                      <div className="text-bone/60 text-sm mt-2 whitespace-nowrap">de 16 · Liga BetPlay</div>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Pts/PJ", value: "1.67" },
                      { label: "Goles/pj", value: "1.56" },
                      { label: "GC/pj", value: "0.89" },
                      { label: "Dif/pj", value: "+0.67" },
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
                <span className="text-red-500">América de Cali</span>
              </h2>
              <p className="text-bone/60 text-base md:text-lg max-w-3xl mx-auto">
                Lectura técnica, humana e institucional del Escarlata a partir de los datos reales del semestre 2026-I, incluyendo fase regular y eliminatorias.
              </p>
            </div>

            {/* Defensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
                Organización Defensiva
              </h3>

              <div className="card-dark border-2 border-red-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Asimetría defensiva: fase regular vs eliminatoria</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">GC promedio por contexto:</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center"><span className="text-bone/80">Fase regular (18 PJ)</span><span className="font-display font-bold text-red-400 text-xl">0.89</span></div>
                        <div className="flex justify-between items-center"><span className="text-bone/80">Eliminatorias mata-mata (2 PJ)</span><span className="font-display font-bold text-red-400 text-2xl">2.50</span></div>
                        <div className="flex justify-between items-center"><span className="text-bone/80">Cuartos vuelta vs Santa Fe</span><span className="font-display font-bold text-red-400 text-2xl">4.00</span></div>
                        <div className="flex justify-between items-center"><span className="text-bone/80">Sudamericana — visitante</span><span className="font-display font-bold text-red-400 text-xl">1.00</span></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl mb-6">
                      <h5 className="font-display text-lg font-bold text-red-400 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        La defensa funciona en fase regular (<strong>0.89 GC/PJ, top 4 de la liga</strong>) pero <strong>se rompe sistemáticamente en partidos de máxima exigencia</strong>. La vuelta de cuartos terminó 0-4 con un triplete del 9 rival y un agregado global 5-1 contra el equipo eliminado.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        El bloque sostiene la presión liguera pero <strong>no aguanta el peso emocional ni físico de una eliminatoria a un solo partido</strong>.
                      </p>
                    </div>
                    <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-bold text-sm mb-2">CONCLUSIÓN:</p>
                      <p className="text-bone/70 text-sm">
                        El equipo tiene principios defensivos pero le falta el escalón siguiente: defender bajo presión sostenida y con margen cero de error.
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
                      { l: "GC en eliminatorias (2 PJ)", v: "5", d: "Misma cantidad que en 9 partidos de fase regular." },
                      { l: "Goles encajados en transición", v: "60%", d: "Dificultad para repliegue tras pérdida en zona alta." },
                      { l: "Goles tras balón parado defensivo", v: "30%", d: "Pérdida de referencias en córners y tiros libres rivales." },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-bone/80 text-sm">{x.l}</span>
                          <span className="font-display text-2xl font-bold text-red-400">{x.v}</span>
                        </div>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                    <p className="text-bone font-bold text-sm mb-2">PATRÓN PRINCIPAL DETECTADO:</p>
                    <p className="text-gold-500 font-display text-lg font-bold tracking-tighter">VULNERABILIDAD EN ALTA EXIGENCIA</p>
                    <p className="text-bone/60 text-xs mt-2">El bloque defensivo no soporta la intensidad de partidos definitivos.</p>
                  </div>
                </div>

                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Fallos identificados</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">COLECTIVOS (Prioritarios)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Distancia entre líneas crece en momentos de presión rival",
                          "Coberturas tardías tras subida de laterales",
                          "Falta de anticipación colectiva en duelos largos",
                          "Repliegue lento ante transiciones rápidas",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">INDIVIDUALES (Específicos)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Centrales perdiendo duelos aéreos en área propia",
                          "Laterales con desgaste físico tras 70'",
                          "Ausencia de líder defensivo en marca de hombre clave",
                          "Error individual amplificado en contextos de presión",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini-callout: Plantel veterano */}
              <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border-2 border-gold-500/30 rounded-2xl">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-[0.25em] font-bold text-gold-500 mb-2">Patrón estructural</div>
                  <h4 className="font-display text-2xl md:text-3xl font-black text-bone tracking-tightest">Plantel envejecido</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { v: "28.3", l: "Edad media" },
                    { v: "5", l: "Jugadores 33+" },
                    { v: "3", l: "Jugadores 36+" },
                  ].map((d) => (
                    <div key={d.l} className="px-6 py-5 md:py-4 bg-ink-950 border border-gold-500/40 rounded-xl text-center">
                      <div className="font-display text-5xl md:text-3xl font-black text-gold-500 whitespace-nowrap leading-none mb-2">{d.v}</div>
                      <div className="text-bone/60 text-xs uppercase tracking-wider">{d.l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-bone/70 text-sm md:text-base mt-8 md:mt-6 leading-relaxed">
                  <strong className="text-bone">El plantel acumula desgaste físico que se paga en partidos de máxima exigencia.</strong> Sin un proceso paralelo de incorporación juvenil al núcleo titular, el techo competitivo se mantiene en fases iniciales.
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
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Producción ofensiva: 28 goles en 18 partidos</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-gold-950/10 rounded-xl border border-gold-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Distribución del aporte ofensivo:</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center"><span className="text-bone/80">Goleador #1 (Yeison Guzmán)</span><span className="font-display font-bold text-gold-500 text-2xl">10</span></div>
                        <div className="flex justify-between items-center"><span className="text-bone/80">Resto del plantel</span><span className="font-display font-bold text-gold-500 text-2xl">18</span></div>
                        <div className="flex justify-between items-center"><span className="text-bone/80">Asistencias totales</span><span className="font-display font-bold text-gold-500 text-xl">18</span></div>
                        <div className="flex justify-between items-center"><span className="text-bone/80">Goles vs Santa Fe (cuartos)</span><span className="font-display font-bold text-red-400 text-2xl">1</span></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                      <h5 className="font-display text-lg font-bold text-gold-500 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        El equipo produce con regularidad en fase regular (<strong>1.56 GF/PJ, top 5 de la liga</strong>) pero la generación se concentra peligrosamente en un goleador. <strong>Yeison Guzmán representa el 36% de los goles del semestre.</strong>
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        En la eliminatoria con Santa Fe, el equipo solo anotó 1 gol en 180 minutos. Cuando el rival neutraliza al referente ofensivo, <strong>no aparecen alternativas de gol claras</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-gold-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Concentración de la generación</h4>
                  <div className="space-y-4">
                    {[
                      { l: "Goles del top scorer", v: "36%", d: "Yeison Guzmán: 10 de 28 goles del semestre." },
                      { l: "Goleadores con 3+ goles", v: "3", d: "Guzmán, Valencia y Ramos. Resto disperso." },
                      { l: "Goles desde el banco", v: "11%", d: "Aporte limitado de revulsivos en partidos cerrados." },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-bone/80 text-sm">{x.l}</span>
                          <span className="font-display text-2xl font-bold text-gold-500">{x.v}</span>
                        </div>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                    <h5 className="text-bone/80 font-semibold mt-6 mb-3 text-sm">QUÉ FALTA:</h5>
                    <ul className="space-y-2 text-bone/70 text-sm">
                      {[
                        "Distribución más equilibrada del aporte goleador",
                        "Mecanismos automatizados de gol que no dependan del referente",
                        "Llegadas desde segunda línea con rotación de finalizadores",
                        "Aprovechamiento sistemático del balón parado ofensivo",
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
                      <p className="text-bone/70 text-sm mb-3">El sistema vertical propuesto privilegia la salida directa al delantero referente. La construcción posicional aparece poco como variante real.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Falta de variantes de salida bajo presión alta</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">ATAQUES POSICIONALES</h5>
                      <p className="text-bone/70 text-sm mb-3">Cuando el rival cierra espacios y obliga a romper el bloque, el equipo se vuelve previsible: pelota al 10, descarga, intento individual.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Dependencia del juego individual del referente</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">DESARROLLO</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Buena producción en partidos abiertos (clásicos, fase regular)",
                          "Caída marcada cuando el rival defiende con orden y bloque bajo",
                          "Limitación física para sostener intensidad los 90 minutos",
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
                  <p className="text-bone/70 text-sm mb-6">El equipo opera con buen rendimiento en contextos de baja exigencia y se desestructura cuando el partido pesa. La diferencia entre fase regular y eliminatoria expone una brecha mental.</p>
                  <div className="space-y-3">
                    {[
                      "Rendimiento sólido en fase regular (4° posición · 30 pts)",
                      "Caída marcada en partidos de máxima exigencia (eliminado 5-1 global)",
                      "Asimetría entre rendimiento local y visitante en instancias decisivas",
                      "Falta de respuesta colectiva tras el primer gol en contra del rival",
                      "Necesidad de reconstruir confianza tras eliminación dolorosa reciente",
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
                      <div className="font-display text-3xl md:text-4xl font-black text-red-400 tracking-tightest">BLOQUEO COMPETITIVO</div>
                    </div>
                    <p className="text-bone/70 text-sm">El equipo rinde hasta cierto umbral de exigencia y no puede atravesarlo</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 font-semibold text-sm mb-1">CONSECUENCIA:</p>
                      <p className="text-bone/80 text-sm">Eliminación temprana en mata-mata pese a clasificación cómoda en fase regular. Riesgo de repetir patrón en Copa Sudamericana, donde clasificación todavía está en juego.</p>
                    </div>
                    <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-semibold text-sm mb-1">SOLUCIÓN:</p>
                      <p className="text-bone/80 text-sm">Trabajo específico de mentalidad competitiva para instancias definitivas: cargas mentales progresivas, simulación de escenarios de alta presión, refuerzo de liderazgos internos del núcleo competitivo y automatización táctica para reducir margen de error en partidos cerrados.</p>
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
                Dónde sucede hoy el juego de América de Cali vs dónde sucedería con el modelo propuesto.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="card-dark border-l-4 border-red-500" data-animate>
                <h3 className="font-display text-2xl font-bold text-bone mb-6 text-center tracking-tighter">América 2026 · Actual</h3>
                <div className="aspect-[3/4] bg-gradient-to-b from-emerald-900/20 to-emerald-950/10 rounded-2xl border border-bone/10 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-bone/20" /></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bone/20 -translate-x-1/2" />
                  <div data-heat style={{ "--target-opacity": 0.7 }} className="absolute top-1/3 left-1/2 -translate-x-1/2 w-52 h-52 bg-red-500 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.5 }} className="absolute bottom-1/3 left-1/4 w-44 h-44 bg-red-600 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.5 }} className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-red-600 rounded-full blur-3xl" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Bloque medio · juego acumulado en mediocampo</div></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <div className="inline-block px-4 py-2 bg-red-500/90 rounded-full backdrop-blur-sm border border-red-400/50">
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">⚠️ Dependencia del 10</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm font-semibold mb-2">PATRÓN ACTUAL:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ 36% de los goles dependen de un solo jugador</li>
                    <li>→ Ataque vertical previsible cuando el rival cierra el medio</li>
                    <li>→ Caída de intensidad después del minuto 70</li>
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
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">✓ Presión coordinada</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Repliegue compacto sin perder altura</div></div>
                </div>
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 text-sm font-semibold mb-2">TRANSFORMACIÓN PROPUESTA:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ Generación distribuida: 4-5 finalizadores potenciales</li>
                    <li>→ Bloque adelantado con repliegue coordinado</li>
                    <li>→ Microdosificación física para sostener intensidad 90'</li>
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
                27 jugadores · edad media 28,3 años · 4 extranjeros · valor de mercado total €16,75M
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
                  América tiene una base sólida de jugadores en pico de carrera y proyectos jóvenes con valor de mercado en alza. Sobre estos perfiles se construye el <strong className="text-green-400">núcleo ganador</strong> y se reordenan los liderazgos internos para sostener la exigencia competitiva.
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
                  La edad promedio del plantel (28,3 años) es alta y se concentra en el bloque titular. Hay nombres con peso histórico y valor identitario que requieren <strong className="text-red-400">evaluación de 4-6 semanas</strong> para definir rol, minutos y plan de transición generacional.
                </p>

                {[
                  {
                    name: "Adrián Ramos",
                    sub: "Delantero · 40 años · sin contrato fijo · ídolo histórico del club",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "Anotó vs Millonarios (3-1) en abril 2026: aporte aún vigente",
                      "Sin contrato firmado a largo plazo",
                      "Carga emocional positiva pero límite físico evidente",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rol redefinido: revulsivo de impacto + referente vestuario",
                      "Plan de cierre de carrera ordenado, sin presión de titularidad",
                    ],
                  },
                  {
                    name: "Daniel Bocanegra",
                    sub: "Defensor central · 39 años · sin contrato fijo",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "39 años, contrato no formalizado en Transfermarkt",
                      "Limitación física para defensa adelantada del modelo propuesto",
                      "Función actual más simbólica que de rendimiento",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Definición de continuidad antes del próximo torneo",
                      "Espacio para promover central joven a la rotación",
                    ],
                  },
                  {
                    name: "Andrés Mosquera",
                    sub: "Defensor central · #4 · 36 años · sin fecha fin de contrato",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "36 años, riesgo en duelos largos vs delanteros físicos",
                      "Sin contrato a largo plazo confirmado",
                      "Pareja central más joven (Hernández/Torres) tiene mejor proyección",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rotación selectiva, no titular fijo del modelo",
                      "Acompañar transición a centrales jóvenes (Cavadia, Romero)",
                    ],
                  },
                  {
                    name: "Carlos Sierra",
                    sub: "Mediocampista central · #23 · 35 años · sin fecha fin de contrato",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "35 años, valor de mercado bajo (€100K)",
                      "Función limitada en sistema vertical de alta intensidad",
                      "Rotación irregular en el semestre",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Evaluar continuidad post-Sudamericana",
                      "Liberar cupo para refuerzo o juvenil",
                    ],
                  },
                  {
                    name: "Darwin Machís",
                    sub: "Extremo izquierdo · #11 · 33 años · venezolano-español · €400K · contrato dic 2027",
                    badge: "Evaluación prioritaria",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "33 años, valor de mercado decreciente (era €1.5M+ en su pico)",
                      "Compite por puesto con jóvenes en mejor forma (Borrero, Palacios)",
                      "Aporte irregular en el semestre",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Definir rol claro o gestionar salida",
                      "Si continúa: plan de carga física específico para sostener regularidad",
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

                {/* Tomás Ángel - card amarilla */}
                <div className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <h4 className="font-display text-xl font-bold text-bone tracking-tighter">Tomás Ángel</h4>
                      <p className="text-bone/50 text-sm">Delantero · #21 · 23 años · colombo-inglés · €600K · contrato dic 2026</p>
                    </div>
                    <span className="text-xs text-yellow-400 bg-yellow-500/20 px-4 py-2 rounded-full font-semibold border border-yellow-500/30">Proyección posible</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">SITUACIÓN ACTUAL</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0">•</span><span>23 años, hijo del histórico Juan Pablo Ángel: peso simbólico</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>Rol secundario al goleador titular, pocos minutos como referencia</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>Contrato corto (dic 2026): definir continuidad pronto</span></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">VENTAJA</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Edad ideal para construir alternativa real al referente actual</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Trabajo específico de definición + minutos sostenidos puede acelerar curva</span></li>
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
                  Jugadores que demuestran el perfil competitivo necesario: experiencia en equipos grandes, procesos internacionales, aporte sostenido en el semestre y rendimiento medible en el campo.
                </p>

                {[
                  {
                    name: "Yeison Guzmán",
                    sub: "Mediapunta / 10 · #10 · 28 años · €2,20M · contrato hasta dic 2026",
                    badge: "Pilar creativo + goleador",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Goleador del equipo en 2026-I:", "10 goles en 18 partidos"],
                      ["Pico de carrera:", "edad ideal y máximo valor de mercado del plantel"],
                      [null, "Identidad y peso simbólico como número 10 del Escarlata"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Conexión entre líneas: motor creativo del modelo propuesto",
                      "Definición de tres cuartos y peligro constante en el área",
                      "Liderazgo natural por jerarquía deportiva en el plantel",
                    ],
                  },
                  {
                    name: "Dylan Borrero",
                    sub: "Extremo izquierdo · #8 · 24 años · €1,40M · contrato hasta jun 2028",
                    badge: "Pilar de banda",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Atlético Mineiro / Fortaleza (Brasil):", "experiencia internacional reciente"],
                      ["Selecciones Colombia juveniles:", "proceso formativo continuo"],
                      [null, "Refuerzo confirmado para el ciclo 2026-2028"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Profundidad por banda + 1v1 ganador",
                      "Edad pico de proyección (24): rendimiento sostenible a mediano plazo",
                      "Contrato largo: estabilidad para construir el ciclo",
                    ],
                  },
                  {
                    name: "Josen Escobar",
                    sub: "Defensor / mediocampista · #5 · 21 años · €1,50M · contrato hasta jun 2028",
                    badge: "Núcleo defensivo joven",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Cantera del América:", "formación interna con identidad de club"],
                      ["Selecciones Colombia juveniles:", "proceso continuo"],
                      [null, "Crecimiento sostenido en valor de mercado"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Perfil moderno: salida con pelota dominada y juego con criterio",
                      "Físico para defensa adelantada del modelo propuesto",
                      "Edad ideal (21) para liderar transición generacional defensiva",
                    ],
                  },
                  {
                    name: "Mateo Castillo",
                    sub: "Lateral derecho · #13 · 23 años · €1,20M · contrato hasta dic 2027",
                    badge: "Lateral del proyecto",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["América de Cali:", "titular consolidado en lateral derecho"],
                      ["Selecciones juveniles Colombia:", "convocatorias continuas"],
                      [null, "Valor de mercado sostenido (€1,2M)"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Ida y vuelta sostenida: clave para el modelo de bloque adelantado",
                      "Edad ideal (23) y contrato vigente hasta 2027",
                      "Proyección internacional clara: pieza de futuro venta",
                    ],
                  },
                  {
                    name: "Daniel Valencia",
                    sub: "Delantero centro · #9 · 30 años · ecuatoriano · €1,20M · contrato hasta dic 2028",
                    badge: "Pilar de área",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Experiencia internacional sudamericana sostenida"],
                      [null, "Contrato largo (hasta 2028): apuesta institucional firme"],
                      ["Goleador secundario:", "complemento real al referente del equipo"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Perfil de 9 de área puro: peso, definición, juego de espaldas",
                      "Reduce la dependencia del 10 como única vía de gol",
                      "Edad de máxima eficiencia (30) en posición de delantero centro",
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
                    perfil internacional, contratos vigentes a mediano plazo, valor de mercado sostenido y rendimiento medible en el semestre. Sobre ellos se construye el núcleo del proyecto.
                  </p>
                </div>
              </div>

              {/* Plan 1-6 */}
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border-2 border-gold-500/40 rounded-3xl text-center" data-animate>
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Plan de Acción: Semanas 1-6</h4>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  {[
                    ["SEMANA 1-2", "Evaluación exhaustiva: física, táctica, psicológica, historial competitivo. Lectura de la salida reciente de la Liga BetPlay y reuniones individuales con cada jugador."],
                    ["SEMANA 3-4", "Observación de adaptabilidad al modelo de alta intensidad: bloque adelantado, presión coordinada, rotación de finalizadores y construcción posicional."],
                    ["SEMANA 5-6", "Decisión final: integración al núcleo ganador o sustitución. Plan de transición generacional y comunicación clara con dirigencia."],
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
                América vs<br />
                <span className="text-gold-500">el modelo propuesto</span>
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Respuesta directa a cada problema detectado</p>
            </div>

            <div className="space-y-8 mb-24">
              {[
                {
                  problema: "Eliminado 5-1 global en cuartos pese a clasificar 4° en fase regular. El equipo no aguanta partidos de máxima exigencia.",
                  solucion: "Trabajo psicológico específico para instancias definitivas + simulación de escenarios de alta presión en entrenamiento.",
                },
                {
                  problema: "36% de los goles dependen de un solo jugador (Yeison Guzmán). Si lo neutralizan, el equipo no tiene plan B.",
                  solucion: "Mecanismos automatizados de gol: rotación de finalizadores, llegadas desde segunda línea y aprovechamiento sistemático del balón parado.",
                },
                {
                  problema: "Asimetría defensiva: 0,89 GC/PJ en fase regular vs 2,50 GC/PJ en eliminatorias. Bloque que no soporta presión sostenida.",
                  solucion: "Bloque compacto con repliegue coordinado. Trabajo específico de transición defensiva tras pérdida en zona alta.",
                },
                {
                  problema: "Plantel veterano (28,3 años promedio, 5 jugadores 33+) con desgaste físico que se paga en partidos exigentes.",
                  solucion: "Microdosificación física + integración planificada de juveniles del plantel (Cavadia, Romero, Palacios, Lucumi) al núcleo titular.",
                },
                {
                  problema: "Ataque vertical previsible cuando el rival cierra espacios. Pelota al 10, descarga, intento individual.",
                  solucion: "Construcción posicional con superioridades numéricas + variantes de ataque (juego por banda, terceros hombres, falsos 9).",
                },
                {
                  problema: "Caída de intensidad después del minuto 70 en partidos definitivos. Aporte limitado de revulsivos del banco (11% de los goles).",
                  solucion: "Banco competitivo con jugadores de impacto entrenados específicamente para el rol. Cambios planificados, no reactivos.",
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
                  { l: "Dependencia del top scorer", v: "−40%", s: "De 36% a 22% del aporte goleador" },
                  { l: "GC en eliminatorias", v: "−50%", s: "De 2,50 a 1,25 GC/PJ en partidos definitivos" },
                  { l: "Minutos juveniles titulares", v: "+60%", s: "Transición generacional al núcleo competitivo" },
                ].map((p) => (
                  <div key={p.l} className="p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border border-gold-500/30 rounded-2xl text-center">
                    <div className="text-bone/60 text-sm mb-2">{p.l}</div>
                    <div className="font-display text-5xl font-black text-gold-500 mb-1">{p.v}</div>
                    <div className="text-bone/50 text-xs">{p.s}</div>
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
                Tres victorias recientes que confirman la capacidad latente del grupo cuando el orden colectivo aparece.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  date: "19 / 04 / 2026",
                  rivalLabel: "Millonarios",
                  scoreHome: "3",
                  scoreAway: "1",
                  rivalNote: "Clásico vs histórico · Pascual",
                  highlight: true,
                },
                {
                  date: "Abril / 2026",
                  rivalLabel: "Fortaleza",
                  scoreHome: "2",
                  scoreAway: "1",
                  rivalNote: "Visitante · clasificación a cuartos",
                  highlight: false,
                },
                {
                  date: "Mayo / 2026",
                  rivalLabel: "Alianza Atlético (Perú)",
                  scoreHome: "2",
                  scoreAway: "0",
                  rivalNote: "Sudamericana · visitante",
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
                      Clásico contra rival histórico
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-bone/50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.date}</div>
                    <div className="text-bone/70 text-sm mb-2">América</div>
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
                <span className="text-green-500"> Falta sostenerlo cuando importa.</span>
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
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Hoja de ruta: Los primeros 90 días en América de Cali</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-20">
              {[
                {
                  weeks: "1-2",
                  title: "Diagnóstico Interno",
                  color: "blue",
                  icon: "🔍",
                  tasks: ["Evaluación individual completa", "Identificación de líderes internos", "Lectura post-eliminación reciente", "Perfil psicológico del grupo"],
                  deliverable: "Informe técnico + plan personalizado por jugador + lista priorizada de necesidades",
                },
                {
                  weeks: "3-6",
                  title: "Reconstrucción Mental + Defensiva",
                  color: "gold",
                  icon: "🛡️",
                  tasks: ["Trabajo de mentalidad competitiva", "Bloque defensivo en alta exigencia", "Repliegue coordinado tras pérdida", "Balón parado defensivo automatizado"],
                  deliverable: "−50% GC/PJ en partidos definitivos · 0% goles evitables por desconcentración colectiva",
                },
                {
                  weeks: "6-12",
                  title: "Primeras bases del modelo",
                  color: "green",
                  icon: "⚽",
                  tasks: ["Distribución de la generación ofensiva", "Construcción posicional + variantes de ataque", "Microdosificación e integración juvenil", "Banco competitivo planificado"],
                  deliverable: "Núcleo competitivo consolidado · clasificación a fase definitiva del próximo torneo",
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
                          <div className="font-display text-2xl font-black text-bone whitespace-nowrap">{p.weeks}</div>
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
                  { title: "Defensivo", border: "border-blue-500/30", text: "text-blue-400", stats: [["GC en eliminatorias", "−50%"], ["Goles tras transición", "−40%"]] },
                  { title: "Ofensivo", border: "border-gold-500/30", text: "text-gold-500", stats: [["Dependencia top scorer", "−40%"], ["Goles desde el banco", "+50%"]] },
                  { title: "Posicional", border: "border-green-500/30", text: "text-green-400", stats: [["Liga BetPlay", "Top 4"], ["Meta", "Final / Sudamericana"]] },
                ].map((c) => (
                  <div key={c.title} className={`card-dark border-l-4 ${c.border}`}>
                    <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">{c.title}</h4>
                    <div className="space-y-3">
                      {c.stats.map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center p-3 bg-ink-950 rounded-xl">
                          <span className="text-bone/70 text-sm">{label}</span>
                          <span className={`font-display text-2xl font-bold ${c.text} whitespace-nowrap`}>{value}</span>
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
