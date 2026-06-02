import { useLayoutEffect } from "react";

export default function EmelecProyecto() {
  useLayoutEffect(() => {
    const page = document.querySelector(".emelec-page");
    const els = document.querySelectorAll(
      "[data-animate], [data-animate-strong], [data-heat]"
    );

    // 1) Activar visibles al montar (antes de habilitar el ocultamiento)
    const winH = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < winH && r.bottom > 0) el.classList.add("in-view");
    });

    // 2) Habilitar ocultamiento por CSS solo si el JS arrancó (evita página en blanco si falla todo lo demás)
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
        @keyframes emelecFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes emelecFadeIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes emelecScaleIn { from { opacity: 0; transform: scale(0.6); } to { opacity: var(--target-opacity, 0.7); transform: scale(1); } }
        .emelec-page.anim-ready [data-animate]:not(.in-view) { opacity: 0; }
        .emelec-page [data-animate].in-view { animation: emelecFadeUp 0.7s ease-out forwards; }
        .emelec-page.anim-ready [data-animate-strong]:not(.in-view) { opacity: 0; }
        .emelec-page [data-animate-strong].in-view { animation: emelecFadeIn 0.8s ease-out forwards; }
        .emelec-page.anim-ready [data-heat]:not(.in-view) { opacity: 0; transform: scale(0.6); }
        .emelec-page [data-heat].in-view { animation: emelecScaleIn 0.9s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .emelec-page [data-animate],
          .emelec-page [data-animate-strong],
          .emelec-page [data-heat] { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
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
                Análisis profesional · Junio 2026
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bone tracking-tightest mb-4 leading-[0.92]">
                Proyecto Emelec
              </h1>
              <p className="text-gold-500 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Card única - Club analizado */}
              <div className="relative group" data-animate>
                <div className="absolute -inset-1 bg-gradient-to-r from-emelec-blue to-blue-800 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative bg-gradient-to-br from-emelec-blue/35 to-blue-950/65 border border-emelec-light/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm overflow-hidden">
                  {/* Escudo como marca de agua atmosférica (no compite con el número) */}
                  <img
                    src="/img/clubs/emelec.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-[0.05] object-contain pointer-events-none select-none"
                  />
                  <div className="relative flex items-start justify-between mb-8 gap-6">
                    <div>
                      <div className="text-emelec-light text-xs uppercase tracking-[0.3em] font-bold mb-3">Situación actual · Junio 2026</div>
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tighter">Club Sport Emelec 2026</h2>
                      <p className="text-bone/60 text-sm mt-3 max-w-xs">Fuera de la zona de riesgo y en levantada: invicto en los últimos 4 partidos de LigaPro y vivo en la Copa Ecuador.</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-emelec-light leading-none tracking-tightest">8°</div>
                      <div className="text-bone/60 text-sm mt-2 whitespace-nowrap">de 16 · LigaPro</div>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Pts/PJ", value: "1.38" },
                      { label: "Goles/pj", value: "0.81" },
                      { label: "GC/pj", value: "1.00" },
                      { label: "Dif/pj", value: "−0.19" },
                    ].map((s) => (
                      <div key={s.label} className="bg-emelec-light/10 rounded-xl p-4 text-center border border-emelec-light/20">
                        <div className="text-bone/60 text-xs mb-1">{s.label}</div>
                        <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-emelec-light">{s.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Récord", value: "6V·4E·6D" },
                      { label: "Puntos", value: "22 / 48" },
                      { label: "En casa", value: "5V·2E·2D" },
                      { label: "Últimos 5", value: "2V·2E·1D" },
                    ].map((s) => (
                      <div key={s.label} className="bg-ink-950/40 rounded-xl p-4 text-center border border-bone/10">
                        <div className="text-bone/50 text-xs mb-1">{s.label}</div>
                        <div className="font-display text-base sm:text-lg md:text-xl font-bold text-bone whitespace-nowrap">{s.value}</div>
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
                  El repunte ya empezó: Emelec salió del fondo y está 8°.
                  <br className="hidden sm:block" />
                  <span className="text-gold-500">Esto es cómo sistematizarlo y convertirlo en clasificación a copa.</span>
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
                Lectura técnica, humana e institucional del Bombillo a partir de los datos reales de la temporada 2026. El equipo ya reaccionó: la oportunidad está en consolidar lo que funciona y cerrar las brechas que todavía cuestan puntos.
              </p>
            </div>

            {/* Defensiva */}
            <div className="mb-24" data-animate>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4 tracking-tighter">
                <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
                Organización Defensiva
              </h3>

              <div className="card-dark border-2 border-red-500/30 mb-8">
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Goles recibidos: 16 en 16 partidos (1,00 por partido)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Dónde se reciben los goles:</p>
                      <div className="space-y-3">
                        {[
                          ["Vallas invictas", "6 / 16"],
                          ["En los últimos 4", "3 vallas invictas"],
                          ["GC en casa (9 PJ)", "0,89 /pj"],
                          ["GC de visitante (7 PJ)", "1,14 /pj"],
                        ].map(([p, v]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80">{p}</span>
                            <span className="font-display font-bold text-red-400 text-xl">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl mb-6">
                      <h5 className="font-display text-lg font-bold text-red-400 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        La defensa se ordenó: <strong>6 vallas invictas en 16 fechas y 3 en los últimos 4 partidos</strong>, con el promedio de goles en contra ya en 1,00 por partido. El problema dejó de ser general.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        Hoy es un problema de localía: <strong>1,14 goles recibidos por partido de visitante contra 0,89 en el Capwell</strong>. El bloque todavía no viaja con la misma solidez.
                      </p>
                    </div>
                    <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-bold text-sm mb-2">CONCLUSIÓN:</p>
                      <p className="text-bone/70 text-sm">
                        Hay una base defensiva real para construir. Falta que sea la misma dentro y fuera de casa, fecha a fecha.
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
                      { l: "Vallas invictas", v: "6/16", d: "Seis partidos sin recibir goles, tres de ellos en los últimos cuatro: la solidez es reciente y real." },
                      { l: "GC por partido", v: "1,00", d: "Promedio de goles en contra en línea descendente en el tramo reciente." },
                      { l: "Goles recibidos como visitante", v: "50%", d: "8 de los 16 goles en contra llegaron fuera de casa: solo 5 puntos en 7 partidos como visitante." },
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
                    <p className="text-gold-500 font-display text-lg font-bold tracking-tighter">EL GAP CASA–VISITANTE</p>
                    <p className="text-bone/60 text-xs mt-2">En el Capwell el bloque ya se sostiene (5V·2E·2D). Fuera de casa todavía no viaja: ahí está el techo a romper.</p>
                  </div>
                </div>

                <div className="card-dark border-l-4 border-red-500">
                  <h4 className="font-display text-xl font-bold text-bone mb-4 tracking-tighter">Fallos identificados</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">COLECTIVOS (Prioritarios)</h5>
                      <ul className="space-y-2 text-bone/70 text-sm">
                        {[
                          "Distancias largas entre defensa y mediocampo en transición",
                          "Presión descoordinada (primer presionante queda solo)",
                          "Coberturas a mejorar en transiciones rivales",
                          "Reacción lenta tras pérdida en zona de creación",
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
                <h4 className="font-display text-2xl font-bold text-bone mb-6 tracking-tighter">Goles anotados: 13 en 16 partidos (0,81 por partido)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-gold-950/10 rounded-xl border border-gold-500/20 flex items-center justify-center">
                    <div className="text-center p-8 w-full">
                      <p className="text-bone/60 text-sm mb-4">Dónde se anotan los goles:</p>
                      <div className="space-y-3">
                        {[
                          ["Goles en casa (9 PJ)", "11 · 1,22/pj"],
                          ["Goles de visitante (7 PJ)", "2 · 0,29/pj"],
                          ["Goleador", "Klimowicz · 4"],
                          ["Total", "13 · 0,81/pj"],
                        ].map(([p, v]) => (
                          <div key={p} className="flex justify-between items-center">
                            <span className="text-bone/80">{p}</span>
                            <span className="font-display font-bold text-gold-500 text-xl">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-6 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                      <h5 className="font-display text-lg font-bold text-gold-500 mb-3 tracking-tighter">PATRÓN DETECTADO</h5>
                      <p className="text-bone/80 text-sm leading-relaxed mb-4">
                        El gol vive en el Capwell: <strong>11 de los 13 goles fueron en casa (1,22 por partido) contra apenas 2 en 7 visitas (0,29)</strong>. Fuera de casa el ataque todavía se apaga: ahí está el margen de crecimiento más claro.
                      </p>
                      <p className="text-bone/80 text-sm leading-relaxed">
                        Hay una referencia joven en ascenso: <strong>Luca Klimowicz (21 años) es el goleador del equipo con 4 goles</strong>. El paso siguiente es automatizar mecanismos de ataque para no depender solo de chispazos individuales.
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
                      { l: "Goles de visitante", v: "2/13", d: "Solo 2 de los 13 goles llegaron fuera de casa: el ataque no se traslada." },
                      { l: "Goleador del equipo", v: "4", d: "Luca Klimowicz (21 años) lidera el marcador: una referencia joven en ascenso." },
                      { l: "Derrotas sin convertir", v: "5/6", d: "Patrón claro: cuando el equipo no anota, no suma. Solo una derrota con gol propio (1-3 vs Guayaquil City)." },
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
                        "Un 9 referencia con peso y poder de definición",
                        "Ataques posicionales con paciencia (hoy se atropella)",
                        "Llegadas desde segunda línea",
                        "ABP ofensivo trabajado como arma a desarrollar",
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
                      <p className="text-bone/70 text-sm mb-3">Bajo presión rival, el equipo recurre con frecuencia al pelotazo largo. Eso entrega la posesión en mediocampo y obliga a defender de nuevo.</p>
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
                          "Poco tiempo sostenido en campo rival",
                          "Falta de paciencia en posesión",
                          "No se aprovechan las ventajas numéricas cuando aparecen",
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
                  <p className="text-bone/70 text-sm mb-6">El equipo opera en un entorno de alta exigencia y exposición permanente. La buena noticia: ya salió de la zona baja y viene en levantada. El desafío ahora es psicológico: convertir ese envión en una confianza estable que también viaje de visitante.</p>
                  <div className="space-y-3">
                    {[
                      "Entorno de alta exigencia y exposición mediática constante",
                      "Reciente salida de la zona baja: confianza ganada que hay que consolidar",
                      "El envión actual todavía no es identidad sostenida en el tiempo",
                      "Liderazgos internos por reforzar para sostener la regularidad",
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
                    <div className="inline-block px-6 py-3 bg-gold-500/10 border-2 border-gold-500/30 rounded-2xl mb-4">
                      <div className="font-display text-4xl md:text-5xl font-black text-gold-500 tracking-tightest">MOMENTUM</div>
                    </div>
                    <p className="text-bone/70 text-sm">Hay confianza ganada; falta hacerla sistema y llevarla de visitante</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-emelec-light/10 border border-emelec-light/20 rounded-xl">
                      <p className="text-emelec-light font-semibold text-sm mb-1">DÓNDE SE NOTA:</p>
                      <p className="text-bone/80 text-sm">En el Capwell es un equipo sólido (5V·2E·2D, 11 goles a favor), pero de visitante solo lleva 2 goles y 5 puntos en 7 partidos: la cabeza todavía juega distinto dentro y fuera de casa.</p>
                    </div>
                    <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                      <p className="text-gold-500 font-semibold text-sm mb-1">SOLUCIÓN:</p>
                      <p className="text-bone/80 text-sm">Trabajo sistemático sobre mentalidad competitiva: consolidar el núcleo ganador que ya aparece, reforzar liderazgos internos y entrenar la concentración para sostener la misma versión los 90 minutos y en cualquier cancha.</p>
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
                Dónde sucede hoy el juego de Emelec vs dónde sucedería con el modelo propuesto.
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
                    <li>→ Fuerte en casa (11 goles, 5V·2E·2D) y frágil de visitante</li>
                    <li>→ Solo 2 goles y 5 puntos en 7 partidos fuera del Capwell</li>
                    <li>→ El juego todavía no se sostiene lejos del arco propio</li>
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
                Plantel de base ecuatoriana con refuerzos extranjeros · edad media cercana a los 27 años
                <br /><span className="text-bone/40 text-sm">(ESPN / Transfermarkt, junio 2026)</span>
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
                  El plantel tiene una franja de jugadores experimentados en posiciones donde el modelo exige intensidad y recorrido. Cada uno debe pasar por una evaluación de <strong className="text-red-400">4-6 semanas</strong> antes de definir su rol y continuidad.
                </p>

                {[
                  {
                    name: "Pedro Ortiz",
                    sub: "Arquero · #12 · 36 años",
                    badge: "Edad + Forma",
                    leftTitle: "PROBLEMA PRINCIPAL",
                    leftItems: [
                      "36 años, ciclo natural en cierre",
                      "A reforzar en el juego aéreo",
                      "Salida con pies a mejorar para inicios desde atrás",
                    ],
                    rightTitle: "PATRÓN DETECTADO",
                    rightItems: [
                      "El modelo necesita arquero con criterio de salida y reflejo bajo presión",
                      "Competencia interna: Mario Valero (#33, 30) como alternativa",
                    ],
                  },
                  {
                    name: "Gonzalo Nápoli",
                    sub: "Volante · #8 · 26 años · uruguayo",
                    badge: "Evaluación prioritaria",
                    leftTitle: "SITUACIÓN",
                    leftItems: [
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
                    sub: "Defensor central · #2 · 34 años · argentino",
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
                      "Dejar espacio a Stalin Segura como pareja titular",
                    ],
                  },
                  {
                    name: "Romario Caicedo",
                    sub: "Lateral derecho · #14 · 36 años",
                    badge: "Edad + Forma",
                    leftTitle: "PROBLEMA",
                    leftItems: [
                      "36 años: dificultad para retorno tras subir al ataque",
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

                {/* Luca Klimowicz - card destacado */}
                <div className="mt-8 p-6 bg-green-500/5 border border-green-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <h4 className="font-display text-xl font-bold text-bone tracking-tighter">Luca Klimowicz</h4>
                      <p className="text-bone/50 text-sm">Delantero · #7 · 21 años · argentino</p>
                    </div>
                    <span className="text-xs text-green-400 bg-green-500/20 px-4 py-2 rounded-full font-semibold border border-green-500/30">Proyección y destacado</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">DESTACADO</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Goleador del equipo con 4 goles en la temporada</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>21 años: ya es la referencia de gol pese a su juventud</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Margen de crecimiento físico y de definición por delante</span></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-bone/80 font-semibold mb-3 text-sm">VENTAJA</h5>
                      <ul className="space-y-2 text-bone/70 text-xs">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Edad ideal para seguir invirtiendo trabajo físico-técnico</span></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">•</span><span>Perfil de 9 del proyecto a construir a mediano plazo</span></li>
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
                    sub: "Extremo derecho · #10 · 32 años · argentino",
                    badge: "Pilar ofensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Estudiantes de La Plata:", "trayectoria en la elite argentina"],
                      ["Defensa y Justicia:", "Campeón Copa Sudamericana 2020"],
                      [null, "Adaptabilidad probada a modelos de alta exigencia"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Referente ofensivo del plantel",
                      "Profundidad por banda + 1v1 ganador",
                      "Edad pico (32): estabilidad para el ciclo",
                    ],
                  },
                  {
                    name: "Stalin Segura",
                    sub: "Defensor central · #4 · 26 años · ecuatoriano",
                    badge: "Núcleo defensivo",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      ["Selección Ecuador sub-23:", "proceso formativo continuo"],
                      [null, "Presencia regular en la línea durante 2025 y 2026"],
                      [null, "Crecimiento sostenido en rendimiento competitivo"],
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
                    sub: "Delantero · #9 · 26 años · uruguayo",
                    badge: "Pilar de área",
                    leftTitle: "Trayectoria competitiva",
                    leftItems: [
                      [null, "Formación uruguaya: cultura de competencia"],
                      [null, "El club apostó fuerte por su evolución"],
                      [null, "Edad ideal (26) en posición de delantero de referencia"],
                    ],
                    rightTitle: "Cualidades clave",
                    rightItems: [
                      "Perfil de #9 de área que el equipo necesita",
                      "Con trabajo específico de definición puede elevar su eficacia",
                      "Dupla natural con Pizzini por banda derecha",
                    ],
                  },
                  {
                    name: "Angelo Mina",
                    sub: "Mediocampista defensivo · #5 · 27 años · ecuatoriano",
                    badge: "Volante de equilibrio",
                    leftTitle: "Perfil",
                    leftItems: [
                      [null, "Volante defensivo titular del esquema actual"],
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
                    verificados en Transfermarkt y noticias recientes, con perfil internacional y mentalidad necesaria para implementar un modelo de alta intensidad desde el primer día.
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
                  problema: "Cuando el bloque se hunde al último tercio, la defensa todavía concede goles evitables, sobre todo de visitante (1,14 GC/pj fuera vs 0,89 en casa).",
                  solucion: "Defender lejos del arco propio: bloque adelantado + presión alta para que el rival no llegue al área a generar.",
                },
                {
                  problema: "Hay una ventana del partido donde la concentración baja y llegan goles que cuestan puntos.",
                  solucion: "Trabajo psicológico específico de concentración por tramos + microdosificación física que sostenga la intensidad los 90 minutos.",
                },
                {
                  problema: "Solo 2 goles y 5 puntos en 7 partidos como visitante. La versión de local todavía no viaja.",
                  solucion: "Mismo modelo en casa y de visitante: estructura no negociable. El plantel se entrena en una sola idea, no en dos versiones.",
                },
                {
                  problema: "Bajo presión rival, el equipo recurre con frecuencia al pelotazo largo y entrega la posesión en mediocampo.",
                  solucion: "Inicios estructurados con apoyos cortos, terceros hombres y rotaciones automatizadas. Construir desde el arco con criterio.",
                },
                {
                  problema: "Pocos goles para lo que genera: 13 en 16 partidos (0,81 por partido) y apenas 2 de visitante. El ataque rinde por debajo de su potencial.",
                  solucion: "Trabajo específico de definición + ataques posicionales que generen ocasiones de mayor calidad (xG por remate más alto).",
                },
                {
                  problema: "El envión actual se apoya en chispazos individuales más que en un modelo escrito. Sin sistema, lo bueno no se sostiene fecha a fecha.",
                  solucion: "Modelo de juego escrito, transferible y de ciclo largo. Lo que ya hace bien Emelec hoy se vuelve repetible y escalable, y permite seguir escalando desde el 8° puesto.",
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
                  { l: "Goles recibidos", v: "−30%", s: "Bajar de 1,00 a 0,70 GC/PJ en 6 meses" },
                  { l: "Tiempo en campo rival", v: "+45%", s: "Llevar el juego al campo rival y sostener la posesión con criterio" },
                  { l: "Conversión", v: "12%", s: "Alcanzar el promedio LigaPro y subir goles/PJ de 0,81 a 1,4" },
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

        {/* PRECEDENTE COMPETITIVO — punto de quiebre entre diagnóstico y plan */}
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
                  date: "19 / 03 / 2026",
                  rivalLabel: "Independiente del Valle",
                  scoreHome: "2",
                  scoreAway: "0",
                  rivalNote: "Hoy líder de la LigaPro · 37 pts",
                  highlight: true,
                },
                {
                  date: "31 / 05 / 2026",
                  rivalLabel: "Universidad Católica",
                  scoreHome: "1",
                  scoreAway: "0",
                  rivalNote: "3° de la tabla · 26 pts",
                  highlight: false,
                },
                {
                  date: "25 / 04 / 2026",
                  rivalLabel: "LDU Quito",
                  scoreHome: "1",
                  scoreAway: "0",
                  rivalNote: "Uno de los grandes del país",
                  highlight: false,
                },
              ].map((m, i) => (
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
                      Vs. el líder de la tabla
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-bone/50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.date}</div>
                    <div className="text-bone/70 text-sm mb-2">Emelec</div>
                    <div className="font-display font-black text-green-400 leading-none mb-2 tracking-tightest" style={{ fontSize: "clamp(56px, 9vw, 84px)" }}>
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
                  deliverable: "−30% goles recibidos · cerrar la ventana de goles evitables en tramos clave del partido",
                },
                {
                  weeks: "6-12",
                  title: "Primeras bases del modelo",
                  color: "green",
                  icon: "⚽",
                  tasks: ["Microdosificación integrada", "Posesión + presión", "Automatización principios", "Evaluación continua"],
                  deliverable: "+15% efectividad · consolidar zona de clasificación a copa (Top 6) · sostener la versión visitante",
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
                  { title: "Posicional", border: "border-green-500/30", text: "text-green-400", stats: [["Tabla LigaPro", "Top 6"], ["Meta", "Copa Sudamericana"]] },
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
