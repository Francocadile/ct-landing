import { useEffect } from "react";

export default function EmelecProyecto() {
  useEffect(() => {
    const els = document.querySelectorAll(
      "[data-animate], [data-animate-strong], [data-heat]"
    );

    // 1) Activar inmediatamente los elementos que YA están en el viewport al montar
    //    (cubre el caso de recarga con scroll y de wrappers muy grandes que el observer no dispara)
    const winH = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < winH && r.bottom > 0) el.classList.add("in-view");
    });

    // 2) Observer con threshold 0 (apenas asome el primer pixel, dispara)
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

    // 3) Safeguard: si por algún motivo (Safari mobile / overflow ancestros) el observer
    //    no dispara, después de 1.8s activar todo lo que siga oculto. Garantiza que el
    //    contenido SIEMPRE termina visible, sin importar el browser.
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
        @keyframes emelecFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes emelecFadeIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes emelecScaleIn { from { opacity: 0; transform: scale(0.6); } to { opacity: var(--target-opacity, 0.7); transform: scale(1); } }
        .emelec-page [data-animate] { opacity: 0; }
        .emelec-page [data-animate].in-view { animation: emelecFadeUp 0.7s ease-out forwards; }
        .emelec-page [data-animate-strong] { opacity: 0; }
        .emelec-page [data-animate-strong].in-view { animation: emelecFadeIn 0.8s ease-out forwards; }
        .emelec-page [data-heat] { opacity: 0; transform: scale(0.6); }
        .emelec-page [data-heat].in-view { animation: emelecScaleIn 0.9s ease-out forwards; }
      `}</style>

      <div className="emelec-page bg-ink-950">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-emelec-blue/10 to-ink-950" />
          <div className="container-x relative z-10">
            <div className="text-center mb-16" data-animate-strong>
              <div className="flex justify-center mb-8">
                <img src="/img/clubs/emelec.png" alt="Club Sport Emelec" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                Análisis profesional · Mayo 2026
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bone tracking-tightest mb-4 leading-[0.92]">
                Proyecto Emelec
              </h1>
              <p className="text-gold-500 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">2026</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Card roja - Emelec */}
              <div className="relative group" data-animate>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-gradient-to-br from-red-900/50 to-red-950/70 border border-red-500/30 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="absolute top-4 right-4 opacity-10">
                    <img src="/img/clubs/emelec.png" alt="" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold mb-2">Situación Actual</div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone tracking-tighter">Club Sport Emelec 2026</h2>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-6xl sm:text-7xl font-black text-red-500 leading-none">12</div>
                      <div className="text-bone/60 text-sm mt-1">de 16 · LigaPro</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Efectividad", value: "38.4%" },
                      { label: "Goles/pj", value: "0.86" },
                      { label: "GC/pj", value: "1.14" },
                    ].map((s) => (
                      <div key={s.label} className="bg-red-500/10 rounded-xl p-3 text-center border border-red-500/20">
                        <div className="text-bone/60 text-xs mb-1">{s.label}</div>
                        <div className="font-display text-xl sm:text-2xl font-bold text-red-400">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card verde - Bolívar */}
              <div className="relative group" data-animate>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-gradient-to-br from-green-900/50 to-green-950/70 border border-green-500/40 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-green-400 text-xs uppercase tracking-[0.3em] font-bold mb-2">Metodología Integrada Estructural</div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone tracking-tighter">Bolívar 2024-2026</h2>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-6xl sm:text-7xl font-black text-green-500 leading-none">1</div>
                      <div className="text-bone/60 text-sm mt-1">Campeón</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Efectividad", value: "70%" },
                      { label: "Goles (Top 5)", value: "273" },
                      { label: "Títulos", value: "4" },
                    ].map((s) => (
                      <div key={s.label} className="bg-green-500/10 rounded-xl p-3 text-center">
                        <div className="text-bone/60 text-xs mb-1">{s.label}</div>
                        <div className="font-display text-xl sm:text-2xl font-bold text-green-400">{s.value}</div>
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
                  La metodología que funcionó en Bolívar, adaptada al contexto de Emelec
                  <br className="hidden sm:block" />
                  <span className="text-gold-500">puede transformar al Bombillo</span>
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
                <span className="text-red-500">Club Sport Emelec</span>
              </h2>
              <p className="text-bone/60 text-base md:text-lg max-w-3xl mx-auto">
                Lectura técnica, humana e institucional del Bombillo a partir de los datos reales de la temporada 2026 cruzados contra la Metodología Integrada Estructural.
              </p>
            </div>

            {/* Defensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
                Organización Defensiva
              </h3>

              <div className="card-dark border-2 border-red-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Tipología de goles recibidos (15 en 13 partidos)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Periodo donde más reciben:</p>
                      <div className="space-y-3">
                        {[
                          ["0-15 min", "12%", false],
                          ["15-30 min", "14%", false],
                          ["30-45 min", "22%", true],
                          ["45-60 min", "20%", true],
                          ["60-75 min", "17%", false],
                          ["75-90+ min", "15%", false],
                        ].map(([p, v, hl]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80">{p}</span>
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
                        El periodo donde Emelec sufre más goles es el tramo <strong>30-60 minutos (42% del total)</strong>: la concentración cae justo cuando el partido aprieta. La defensa baja, el bloque se hunde y los duelos individuales en el área se pierden.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        Coincide con el promedio de minuto del primer gol recibido (~50'): <strong>el equipo no aguanta el peso emocional del partido</strong>.
                      </p>
                    </div>
                    <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-bold text-sm mb-2">CONCLUSIÓN:</p>
                      <p className="text-bone/70 text-sm">
                        Sin un bloque defensivo identificable, cada fecha el equipo se rearma desde cero. Eso se paga con goles evitables.
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
                      { l: "Goles dentro del área propia", v: "87%", d: "Defensa hundida; les ganan la espalda y los duelos en el área." },
                      { l: "Goles tras pérdida en zona de creación", v: "38%", d: "Sin transición defensiva organizada tras la pérdida." },
                      { l: "Goles como visitante", v: "67%", d: "Solo 4 puntos en 6 partidos fuera del Capwell." },
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
                    <p className="text-gold-500 font-display text-lg font-bold tracking-tighter">FRAGILIDAD ESTRUCTURAL</p>
                    <p className="text-bone/60 text-xs mt-2">La defensa no se sostiene como bloque cuando el partido aprieta.</p>
                  </div>
                </div>

                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Fallos identificados</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">COLECTIVOS (Prioritarios)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Líneas desconectadas: 12-15 m entre defensa y mediocampo",
                          "Presión descoordinada (primer presionante queda solo)",
                          "Coberturas inexistentes en transiciones rivales",
                          "Cambios de esquema constantes sin tiempo de automatización",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">INDIVIDUALES (Específicos)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Centrales perdiendo duelos 1v1 en el área propia",
                          "Falta de agresividad en anticipación",
                          "Laterales sin retorno completo tras subir",
                          "Pérdida de referencias en balón parado defensivo",
                        ].map((b) => (
                          <li key={b} className="flex items-start gap-2"><span className="text-red-500 mt-1 flex-shrink-0">•</span><span>{b}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ofensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 text-2xl">⚽</span>
                Organización Ofensiva
              </h3>

              <div className="card-dark border-2 border-gold-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Tipología de goles anotados (11 en 13 partidos)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-gold-950/10 rounded-xl border border-gold-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Periodo donde más convierten:</p>
                      <div className="space-y-3">
                        {[
                          ["0-15 min", "9%", false],
                          ["15-30 min", "9%", false],
                          ["30-45 min", "9%", false],
                          ["45-60 min", "27%", true],
                          ["60-75 min", "27%", true],
                          ["75-90+ min", "19%", false],
                        ].map(([p, v, hl]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80">{p}</span>
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
                        Emelec depende del segundo tiempo para anotar (<strong>73% de sus goles entre el 45' y 90'</strong>). El equipo recién aparece cuando va perdiendo o cuando el rival baja la intensidad. Sin mecanismos automatizados de ataque, sobrevive de chispazos individuales, no de un sistema.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        <strong>Solo 2 goles en 6 partidos como visitante.</strong> Fuera del Capwell el ataque se desarma por completo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark border-l-4 border-gold-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">¿Por qué se convierten pocos goles?</h4>
                  <div className="space-y-4">
                    {[
                      { l: "Conversión de gol", v: "8.4%", d: "Muy por debajo del promedio LigaPro (12-14%)" },
                      { l: "Tiros al arco / pj", v: "2.1", d: "7.2 totales por partido, mayoría desde fuera del área" },
                    ].map((x) => (
                      <div key={x.l} className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-bone/80 text-sm">{x.l}</span>
                          <span className="font-display text-2xl font-bold text-gold-500">{x.v}</span>
                        </div>
                        <p className="text-bone/60 text-xs">{x.d}</p>
                      </div>
                    ))}
                    <h5 className="text-bone/80 font-semibold mt-6 mb-3 text-sm">QUÉ FALTÓ:</h5>
                    <ul className="space-y-2 text-bone/70 text-sm">
                      {[
                        "Un 9 referencia con peso y poder de definición",
                        "Ataques posicionales con paciencia (hoy se atropella)",
                        "Llegadas desde segunda línea",
                        "ABP ofensivo trabajado: solo 18% de goles vienen de ahí",
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
                      <p className="text-bone/70 text-sm mb-3">Bajo presión rival, el arquero opta por pelotazo largo en el 64% de los inicios. Pérdida sistemática de la posesión en mediocampo.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Sin soluciones bajo presión</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">ATAQUES POSICIONALES</h5>
                      <p className="text-bone/70 text-sm mb-3">No se generan superioridades. El equipo busca al pivote sin tercer hombre que aparezca entre líneas.</p>
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><p className="text-xs text-red-400">❌ Predecibles y fáciles de defender</p></div>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">DESARROLLO</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Tiempo en campo rival: 41% (LigaPro promedio: 50%)",
                          "Falta de paciencia en posesión",
                          "No aprovechan ventajas numéricas cuando aparecen",
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
                  <p className="text-bone/70 text-sm mb-6">El equipo opera en un entorno de alta exigencia y exposición sostenida. Esa carga repercute en la toma de decisiones dentro del campo y en la capacidad de gestionar tramos clave del partido.</p>
                  <div className="space-y-3">
                    {[
                      "Alta rotación del cuerpo técnico en las últimas temporadas",
                      "Múltiples procesos competitivos consecutivos en zona de descenso",
                      "Presión mediática y emocional elevada como constante del contexto",
                      "Falta de continuidad en los liderazgos internos del vestuario",
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
                      <div className="font-display text-4xl md:text-5xl font-black text-red-400 tracking-tightest">TENSIÓN</div>
                    </div>
                    <p className="text-bone/70 text-sm">El equipo prioriza no perder por sobre proponer</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 font-semibold text-sm mb-1">CONSECUENCIA:</p>
                      <p className="text-bone/80 text-sm">73% de los goles llegan en segundos tiempos: el equipo reacciona en lugar de proponer. Solo 2 goles en 6 visitas y rendimiento defensivo irregular en tramos críticos del partido.</p>
                    </div>
                    <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-semibold text-sm mb-1">SOLUCIÓN:</p>
                      <p className="text-bone/80 text-sm">Trabajo sistemático sobre mentalidad competitiva: identificar el núcleo ganador real, reconstruir liderazgos internos y entrenar la concentración en los tramos críticos del partido.</p>
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
                Dónde sucede hoy el juego de Emelec vs dónde sucedería con la Metodología Integrada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="card-dark border-l-4 border-red-500" data-animate>
                <h3 className="font-display text-2xl font-bold text-bone mb-6 text-center tracking-tighter">Emelec 2026 · Actual</h3>
                <div className="aspect-[3/4] bg-gradient-to-b from-emerald-900/20 to-emerald-950/10 rounded-2xl border border-bone/10 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-bone/20" /></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bone/20 -translate-x-1/2" />
                  <div data-heat style={{ "--target-opacity": 0.8 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.6 }} className="absolute bottom-8 left-12 w-40 h-40 bg-red-600 rounded-full blur-3xl" />
                  <div data-heat style={{ "--target-opacity": 0.7 }} className="absolute bottom-8 right-12 w-44 h-44 bg-red-700 rounded-full blur-3xl" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2"><div className="text-bone/40 text-xs text-center">Zona ofensiva inactiva</div></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <div className="inline-block px-4 py-2 bg-red-500/90 rounded-full backdrop-blur-sm border border-red-400/50">
                      <div className="text-bone font-display text-lg font-bold tracking-tighter">⚠️ Zona de riesgo defensivo</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm font-semibold mb-2">PATRÓN ACTUAL:</p>
                  <ul className="text-bone/70 text-xs space-y-1">
                    <li>→ Defensa hundida: 87% de goles recibidos dentro del área</li>
                    <li>→ 41% de tiempo en campo rival (LigaPro promedio 50%)</li>
                    <li>→ Bloque que se desarma a partir del minuto 30</li>
                  </ul>
                </div>
              </div>

              <div className="card-dark border-l-4 border-green-500" data-animate>
                <h3 className="font-display text-2xl font-bold text-bone mb-6 text-center tracking-tighter">Con Metodología Robatto</h3>
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
                    <li>→ Recuperación en campo rival</li>
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
                28 jugadores · edad media 27,2 años · 8 extranjeros · valor de mercado total €11,26M
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
                  La edad promedio del plantel (27,2 años) es alta para una LigaPro que premia intensidad. Hay nombres que llegaron libres desde ligas argentinas y colombianas con cuestionamientos previos. Cada uno debe pasar por una evaluación de <strong className="text-red-400">4-6 semanas</strong> antes de definir continuidad.
                </p>

                {[
                  {
                    name: "Pedro Ortiz",
                    sub: "Arquero · #12 · 36 años · contrato hasta dic 2026",
                    badge: "Edad + Forma",
                    leftTitle: "PROBLEMA PRINCIPAL",
                    leftItems: [
                      "1.14 GC/PJ con la línea actual; fragilidad en aéreos",
                      "36 años, ciclo natural en cierre",
                      "Salida con pies limitada para inicios desde atrás",
                    ],
                    rightTitle: "PATRÓN DETECTADO",
                    rightItems: [
                      "El modelo necesita arquero con criterio de salida y reflejo bajo presión",
                      "Competencia interna: Mario Valero (#33, 30) como alternativa",
                    ],
                  },
                  {
                    name: "Gonzalo Nápoli",
                    sub: "Volante · #8 · 26 años · uruguayo · €1,2M · contrato hasta dic 2026",
                    badge: "Evaluación prioritaria",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "Es el jugador más caro del medio (€1,2M)",
                      "El equipo no logra construir desde él",
                      "Tarda en circular; no rompe líneas",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rol redefinido: probarlo más atrás como primer constructor",
                      "Si no se adapta al modelo, reemplazo a definir en mercado",
                    ],
                  },
                  {
                    name: "Aníbal Leguizamón",
                    sub: "Defensor central · #2 · 34 años · argentino-paraguayo · €150K",
                    badge: "Edad + Forma",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
                      "34 años, sin pasado en común con el resto de la línea",
                      "Pierde duelos individuales en el área",
                      "Limitaciones físicas para una defensa adelantada",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rotación, no titular fijo del modelo",
                      "Dejar espacio a Estalin Segura como pareja titular",
                    ],
                  },
                  {
                    name: "Romario Caicedo",
                    sub: "Lateral derecho · #14 · 35 años · contrato hasta dic 2026",
                    badge: "Edad + Forma",
                    leftTitle: "PROBLEMA",
                    leftItems: [
                      "35 años: dificultad para retorno tras subir al ataque",
                      "El modelo exige laterales con ida y vuelta sostenida",
                    ],
                    rightTitle: "CONCLUSIÓN",
                    rightItems: [
                      "Rotación con Orlando Herrera (#80, 22) como apuesta",
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

                {/* Luca Klimowicz - card amarilla */}
                <div className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <h4 className="font-display text-xl font-bold text-bone tracking-tighter">Luca Klimowicz</h4>
                      <p className="text-bone/50 text-sm">Delantero · #7 · 21 años · argentino-ecuatoriano · €600K · contrato hasta dic 2026</p>
                    </div>
                    <span className="text-xs text-yellow-400 bg-yellow-500/20 px-4 py-2 rounded-full font-semibold border border-yellow-500/30">Proyección posible</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">SITUACIÓN ACTUAL</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-yellow-500 flex-shrink-0">•</span><span>21 años, fichaje desde Vélez Sarsfield</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>Pocas finalizaciones (~0,3 remates al arco/pj)</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">•</span><span>Falta peso físico en el área</span></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">VENTAJA</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Edad ideal para invertir trabajo físico-técnico</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Puede ser el 9 del proyecto si crece en 6 meses</span></li>
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
                  Jugadores que demuestran el perfil competitivo necesario: experiencia en equipos grandes, procesos internacionales, mentalidad de títulos y adaptabilidad probada a modelos de alta exigencia.
                </p>

                {[
                  {
                    name: "Francisco Pizzini",
                    sub: "Extremo derecho · #19 · 32 años · argentino-italiano · €1,5M · contrato hasta dic 2027",
                    badge: "Pilar ofensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Independiente / Estudiantes:", "equipos grandes argentinos"],
                      ["Defensa y Justicia:", "Campeón Copa Sudamericana 2020"],
                      [null, "Adaptabilidad probada a modelos de alta exigencia"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Jugador más valorado del plantel (€1,5M)",
                      "Profundidad por banda + 1v1 ganador",
                      "Edad pico (32) y contrato largo: estabilidad para el ciclo",
                    ],
                  },
                  {
                    name: "Estalin Segura",
                    sub: "Defensor central · #4 · 26 años · ecuatoriano · €1,2M · contrato hasta dic 2026",
                    badge: "Núcleo defensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Selección Ecuador sub-23:", "proceso formativo continuo"],
                      [null, "Titular indiscutido en 2025 y 2026"],
                      [null, "Crecimiento sostenido en valor de mercado"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Físico para defensa adelantada del modelo",
                      "Salida con pelota dominada: clave para inicios desde atrás",
                      "Edad ideal (26) para liderar la línea por ciclo largo",
                    ],
                  },
                  {
                    name: "José Neris",
                    sub: "Delantero · #9 · 26 años · uruguayo · €1,0M · contrato hasta dic 2028",
                    badge: "Pilar de área",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Formación uruguaya: cultura de competencia"],
                      [null, "Contrato largo: el club apostó fuerte por su evolución"],
                      [null, "Edad ideal (26) en posición de delantero de referencia"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Perfil de #9 de área que el equipo necesita",
                      "Trabajo específico de definición lo lleva a +12% conversión",
                      "Dupla natural con Pizzini por banda derecha",
                    ],
                  },
                  {
                    name: "Angelo Mina",
                    sub: "Mediocampista defensivo · #5 · 27 años · ecuatoriano · €1,0M · contrato hasta dic 2028",
                    badge: "Volante de equilibrio",
                    leftTitle: "Perfil",
                    leftItems: [
                      [null, "Volante defensivo con contrato largo (hasta 2028)"],
                      [null, "Edad ideal (27): pico físico y madurez táctica"],
                      [null, "Apuesta institucional firme del club"],
                    ],
                    rightTitle: "Aporte al modelo",
                    rightItems: [
                      "Equilibrio entre líneas en bloque adelantado",
                      "Cobertura del espacio entre líneas tras pérdida",
                      "Posible 5 titular del proyecto a mediano plazo",
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
                    <span className="font-display font-bold text-green-400 tracking-tighter">Estos 4 jugadores conforman la base competitiva real del plantel actual:</span>{" "}
                    verificados en Transfermarkt y noticias recientes, con perfil internacional, contratos vigentes y mentalidad necesaria para implementar un modelo de alta intensidad desde el primer día.
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
                Emelec vs<br />
                <span className="text-gold-500">Nuestro Modelo</span>
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Respuesta directa a cada problema detectado</p>
            </div>

            <div className="space-y-8 mb-24">
              {[
                {
                  problema: "87% de los goles recibidos dentro del área propia. La defensa baja y termina defendiendo en el último tercio.",
                  solucion: "Defender lejos del arco propio: bloque adelantado + presión alta para que el rival no llegue al área a generar.",
                },
                {
                  problema: "42% de los goles recibidos entre el minuto 30 y 60. Caída sistemática de concentración.",
                  solucion: "Trabajo psicológico específico de concentración por tramos + microdosificación física que sostenga la intensidad los 90 minutos.",
                },
                {
                  problema: "Solo 2 goles en 6 partidos como visitante. El equipo se desarma fuera del Capwell.",
                  solucion: "Mismo modelo en casa y de visitante: estructura no negociable. El plantel se entrena en una sola idea, no en dos versiones.",
                },
                {
                  problema: "64% de inicios con pelotazo largo bajo presión rival. Sin soluciones desde abajo.",
                  solucion: "Inicios estructurados con apoyos cortos, terceros hombres y rotaciones automatizadas. Construir desde el arco con criterio.",
                },
                {
                  problema: "8.4% de conversión vs 12-14% promedio LigaPro. No se aprovechan las pocas ocasiones que se generan.",
                  solucion: "Trabajo específico de definición + ataques posicionales que generen ocasiones de mayor calidad (xG por remate más alto).",
                },
                {
                  problema: "6 entrenadores en 3 años. Cero identidad colectiva, cada DT empieza de cero.",
                  solucion: "Modelo de juego escrito, transferible y de ciclo largo. Lo que hace 4to Emelec hoy puede sostenerse y crecer en el tiempo.",
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
              <h3 className="font-display text-4xl font-bold text-bone text-center mb-12 tracking-tighter">Proyección con nuestra metodología</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { l: "Goles recibidos", v: "−40%", s: "Bajar de 1,14 a 0,70 GC/PJ en 6 meses" },
                  { l: "Tiempo en campo rival", v: "+45%", s: "De 41% a 60% del tiempo efectivo de juego" },
                  { l: "Conversión", v: "12%", s: "Alcanzar el promedio LigaPro y subir goles/PJ a 1,4" },
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
              <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Hoja de ruta: Los primeros 90 días en Emelec</p>
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
                  tasks: ["Reducir goles dentro del área", "Posicionamiento defensivo", "Presión coordinada", "Balón parado defensivo"],
                  deliverable: "−40% goles recibidos · 0% goles evitables por desconcentración 30-60'",
                },
                {
                  weeks: "6-12",
                  title: "Primeras bases del modelo",
                  color: "green",
                  icon: "⚽",
                  tasks: ["Microdosificación integrada", "Posesión + presión", "Automatización principios", "Evaluación continua"],
                  deliverable: "+15% efectividad · escalar a Top 8 LigaPro · clasificación a la siguiente fase",
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
                  { title: "Defensivo", border: "border-blue-500/30", text: "text-blue-400", stats: [["Goles en área propia", "−40%"], ["Ingresos al área", "−30%"]] },
                  { title: "Ofensivo", border: "border-gold-500/30", text: "text-gold-500", stats: [["Tiempo campo rival", "+45%"], ["Conversión", "12%"]] },
                  { title: "Posicional", border: "border-green-500/30", text: "text-green-400", stats: [["Tabla LigaPro", "Top 8"], ["Meta", "Sudamericana"]] },
                ].map((c) => (
                  <div key={c.title} className={`card-dark border-l-4 ${c.border}`}>
                    <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">{c.title}</h4>
                    <div className="space-y-3">
                      {c.stats.map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center p-3 bg-ink-950 rounded-xl">
                          <span className="text-bone/70 text-sm">{label}</span>
                          <span className={`font-display text-2xl font-bold ${c.text}`}>{value}</span>
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
