import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SantosLaguna() {
  return (
    <div className="bg-ink-950">
      <HeroSection />
      <DiagnosticoCompletoSection />
      <PerfilGanadorSection />
      <SolucionSection />
      <PlanImplementacionSection />
    </div>
  );
}

// ═══════════════════════════════════════════
// HERO MODERNO - MOBILE FIRST
// ═══════════════════════════════════════════

function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-red-950/30 to-ink-950" />

      <motion.div style={{ opacity, scale }} className="container-x relative z-10">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-bone mb-4">
            Proyecto Santos Laguna
          </h1>
          <p className="text-gold-500 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
            2026
          </p>
          <p className="text-bone/60 text-base sm:text-lg md:text-xl">
            De la crisis al equipo competitivo
          </p>
        </motion.div>

        {/* Comparativa apilada (mobile-first) */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Santos 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
            <div className="relative bg-gradient-to-br from-red-900/50 to-red-950/70 border border-red-500/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold mb-2">
                    Situación Actual
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone">
                    Santos Laguna 2026
                  </h2>
                </div>
                <div className="text-right">
                  <div className="font-display text-6xl sm:text-7xl font-black text-red-500 leading-none">18</div>
                  <div className="text-bone/60 text-sm mt-1">de 18</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Efectividad", value: "19.6%" },
                  { label: "Goles/pj", value: "2.2" },
                  { label: "Conversión", value: "5.7%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-red-500/10 rounded-xl p-3 text-center">
                    <div className="text-bone/60 text-xs mb-1">{stat.label}</div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-red-400">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VS - VISIBLE EN TODOS LOS TAMAÑOS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center py-6"
          >
            <div className="relative">
              <div className="font-display text-7xl sm:text-8xl md:text-9xl font-black text-gold-500/40">
                VS
              </div>
              <div className="absolute inset-0 bg-gold-500/10 blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Bolívar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-green-900/50 to-green-950/70 border border-green-500/40 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-green-400 text-xs uppercase tracking-[0.3em] font-bold mb-2">
                    Metodología Integrada Estructural
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone">
                    Bolívar 2024-2026
                  </h2>
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
                ].map((stat) => (
                  <div key={stat.label} className="bg-green-500/10 rounded-xl p-3 text-center">
                    <div className="text-bone/60 text-xs mb-1">{stat.label}</div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-green-400">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="p-8 md:p-10 bg-gradient-to-br from-gold-600/10 to-gold-700/5 border border-gold-500/20 rounded-3xl backdrop-blur-sm">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bone leading-tight">
              La misma metodología que transformó a Bolívar<br className="hidden sm:block" />
              <span className="text-gold-400">puede transformar a Santos</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════
// DIAGNÓSTICO COMPLETO
// ═══════════════════════════════════════════

function DiagnosticoCompletoSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-red-950/20 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Diagnóstico e Interpretación
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight">
            Análisis Profundo<br />
            <span className="text-red-500">Santos Laguna</span>
          </h2>
        </motion.div>

        {/* 1. ORGANIZACIÓN DEFENSIVA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
            Organización Defensiva
          </h3>

          <div className="card-dark border-2 border-red-500/30 mb-8">
            <h4 className="font-display text-2xl font-bold text-bone mb-6">Tipología de goles recibidos (38)</h4>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-bone/60 text-sm mb-4">Periodo de juego donde más les convierten:</p>
                  <div className="space-y-3">
                    {[
                      ["0-15 min", "21%", true],
                      ["15-30 min", "13%", false],
                      ["30-45 min", "16%", false],
                      ["45-60 min", "16%", false],
                      ["60-75 min", "16%", false],
                      ["75-90+ min", "18%", false],
                    ].map(([period, pct, highlight]) => (
                      <div key={period} className="flex justify-between items-center">
                        <span className="text-bone/80">{period}</span>
                        <span className={`font-display font-bold text-red-400 ${highlight ? "text-2xl" : "text-xl"}`}>{pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl mb-6">
                  <h5 className="font-display text-lg font-bold text-red-400 mb-3">PATRÓN DETECTADO</h5>
                  <p className="text-bone/80 text-sm leading-relaxed mb-4">
                    El periodo donde Santos ha sufrido más goles es durante los <strong>primeros 15 minutos de partido (8 goles recibidos)</strong>,
                    lo que nos arroja la conclusión de que ha sido un equipo <strong>débil durante los arranques de partido</strong>,
                    lo cual también repercute en la forma de afrontar los partidos posteriormente.
                  </p>
                  <p className="text-bone/80 text-sm leading-relaxed">
                    Asimismo, el momento de partido donde menos goles recibieron fue durante los siguientes 15 minutos
                    a los del inicio del partido. <strong>Respuesta lógica ante un primer mazazo.</strong>
                  </p>
                </div>
                <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                  <p className="text-gold-400 font-bold text-sm mb-2">CONCLUSIÓN:</p>
                  <p className="text-bone/70 text-sm">
                    No es la misma situación afrontar un partido al empezar y estar arriba en el marcador
                    o arrancando por detrás. Los factores modifican mucho la situación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark border-l-4 border-red-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">Goles en contra: Patrones detectados</h4>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Centros al segundo palo", val: "40%", desc: "Patrón más recurrente en goles recibidos" },
                  { label: "Goles dentro del área", val: "85%", desc: "Por no seguir al hombre / les ganan la espalda" },
                  { label: "Balón parado defensivo", val: "Crítico", desc: "Falta de organización en corners y tiros libres" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-bone/80 text-sm">{item.label}</span>
                      <span className="font-display text-2xl font-bold text-red-400">{item.val}</span>
                    </div>
                    <p className="text-bone/60 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl">
                <p className="text-bone font-bold text-sm mb-2">PATRÓN PRINCIPAL DETECTADO:</p>
                <p className="text-gold-400 font-display text-lg font-bold">DISTRACCIÓN / FALTA DE CONCENTRACIÓN</p>
                <p className="text-bone/60 text-xs mt-2">Les hacen goles por no ver al hombre, pierden referencias constantes</p>
              </div>
            </div>

            <div className="card-dark border-l-4 border-red-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">Fallos identificados</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">COLECTIVOS (Prioritarios)</h5>
                  <ul className="space-y-2 text-bone/70 text-sm">
                    {[
                      "Defensa muy retrasada (invitan al rival a atacar)",
                      "Presión descoordinada (no trabajan en bloque)",
                      "Coberturas inexistentes en transiciones rivales",
                      "Líneas desconectadas (muchos espacios entre líneas)",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm uppercase tracking-wider">INDIVIDUALES (Específicos)</h5>
                  <ul className="space-y-2 text-bone/70 text-sm">
                    {[
                      "Pérdida de referencias en jugadas de balón parado",
                      "Duelos 1v1 perdidos en área propia (espalda fácil)",
                      "Falta de agresividad en anticipación",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. ORGANIZACIÓN OFENSIVA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 text-2xl">⚽</span>
            Organización Ofensiva
          </h3>

          <div className="card-dark border-2 border-gold-500/30 mb-8">
            <h4 className="font-display text-2xl font-bold text-bone mb-6">Tipología de goles anotados (20)</h4>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-gold-950/10 rounded-xl border border-gold-500/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-bone/60 text-sm mb-4">Periodo donde más han convertido:</p>
                  <div className="space-y-3">
                    {[
                      ["0-15 min", "5%", false],
                      ["15-30 min", "25%", true],
                      ["30-45 min", "25%", true],
                      ["45-60 min", "20%", false],
                      ["60-75 min", "10%", false],
                      ["75-90+ min", "15%", false],
                    ].map(([period, pct, highlight]) => (
                      <div key={period} className="flex justify-between items-center">
                        <span className="text-bone/80">{period}</span>
                        <span className={`font-display font-bold text-gold-400 ${highlight ? "text-2xl" : "text-xl"}`}>{pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="p-6 bg-gold-500/10 border-2 border-gold-500/30 rounded-xl mb-6">
                  <h5 className="font-display text-lg font-bold text-gold-400 mb-3">PATRÓN DETECTADO</h5>
                  <p className="text-bone/80 text-sm leading-relaxed mb-4">
                    El periodo donde Santos ha convertido más goles es durante <strong>los dos periodos siguientes
                    a los primeros 15 minutos de partido, justo luego del primer momento donde más débiles
                    se han mostrado</strong> (primeros 15' de juego).
                  </p>
                  <p className="text-bone/80 text-sm leading-relaxed">
                    Resulta normal que esta tendencia se dé así, puesto que es el momento donde el equipo
                    debe sentirse con más necesidad de igualar el partido para no exponerse tan tempranamente a la derrota.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark border-l-4 border-gold-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">¿Por qué se convierten pocos goles?</h4>
              <div className="space-y-4">
                {[
                  { label: "Conversión de gol", val: "5.7%", desc: "Muy por debajo del promedio liga (12-15%)" },
                  { label: "Finalizaciones área", val: "85%", desc: "Dependen del juego directo, falta creación" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-bone/80 text-sm">{item.label}</span>
                      <span className="font-display text-2xl font-bold text-gold-400">{item.val}</span>
                    </div>
                    <p className="text-bone/60 text-xs">{item.desc}</p>
                  </div>
                ))}
                <h5 className="text-bone/80 font-semibold mt-6 mb-3 text-sm">QUÉ FALTÓ:</h5>
                <ul className="space-y-2 text-bone/70 text-sm">
                  {["Generación de ocasiones claras", "Variedad en formas de ataque", "Llegadas desde segunda línea", "Eficacia en balón parado ofensivo (ABP)"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-dark border-l-4 border-gold-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">Inicios y desarrollo de juego</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">INICIOS DESDE ATRÁS</h5>
                  <p className="text-bone/70 text-sm mb-3">Dificultad para salir jugado bajo presión rival. Recurren constantemente al juego largo.</p>
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-xs text-red-400">❌ Falta de soluciones en construcción</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">ATAQUES POSICIONALES</h5>
                  <p className="text-bone/70 text-sm mb-3">Limitados. No generan superioridades, no crean espacios entre líneas rivales.</p>
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-xs text-red-400">❌ Predecibles y fáciles de defender</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">DESARROLLO</h5>
                  <ul className="space-y-2 text-bone/70 text-sm">
                    {["Poco tiempo en campo rival", "Falta de paciencia en posesión", "No aprovechan ventajas numéricas"].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. ASPECTO PSICOLÓGICO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-2xl">
              🧠
            </span>
            Aspecto Psicológico
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Patrón detectado */}
            <div className="card-dark border-l-4 border-purple-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">
                Patrón mental detectado
              </h4>
              <p className="text-bone/70 text-sm mb-6">
                En el análisis de goles recibidos identificamos un patrón recurrente en la organización defensiva
              </p>
              <div className="space-y-3">
                {[
                  "Falta de atención en momentos clave",
                  "Les hacen goles por no seguir al hombre",
                  "Les ganan la espalda con facilidad",
                  "Pérdida de referencias en balón parado",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-bone/80 text-sm p-3 bg-purple-500/5 rounded-lg border border-purple-500/10">
                    <span className="text-purple-400 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnóstico */}
            <div className="card-dark border-l-4 border-red-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">
                Diagnóstico principal
              </h4>
              <div className="text-center py-8 mb-6">
                <div className="inline-block px-6 py-3 bg-red-500/10 border-2 border-red-500/30 rounded-2xl mb-4">
                  <div className="font-display text-4xl md:text-5xl font-black text-red-400">
                    DISTRACCIÓN
                  </div>
                </div>
                <p className="text-bone/70 text-sm">Falta de concentración sistemática</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 font-semibold text-sm mb-1">CONSECUENCIA:</p>
                  <p className="text-bone/80 text-sm">Falta de competitividad mental en momentos críticos</p>
                </div>
                <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                  <p className="text-gold-400 font-semibold text-sm mb-1">SOLUCIÓN:</p>
                  <p className="text-bone/80 text-sm">Trabajo específico en concentración y mentalidad competitiva</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// PERFIL GANADOR
// ═══════════════════════════════════════════

function PerfilGanadorSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-green-950/10 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Aspecto Humano
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight">
            Conformación<br />
            <span className="text-green-500">de la plantilla</span>
          </h2>
          <p className="text-bone/60 text-xl max-w-3xl mx-auto">
            Identificación de jugadores con perfil ganador vs jugadores a evaluar
          </p>
        </motion.div>

        {/* Jugadores CON perfil ganador */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="card-dark border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-3xl">✅</div>
              <h3 className="font-display text-2xl font-bold text-bone">Jugadores de corte competitivo</h3>
            </div>
            <p className="text-bone/70 mb-6">
              Jugadores con mentalidad ganadora, liderazgo y capacidad de respuesta en momentos críticos.
              Estos conformarán el <strong className="text-green-400">núcleo ganador</strong> del equipo.
            </p>
            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl mb-6">
              <p className="text-sm text-green-400 font-semibold mb-3">PROCESO DE IDENTIFICACIÓN (Semana 1-2):</p>
              <ul className="space-y-2 text-bone/70 text-sm">
                {[
                  "Evaluación individual física + técnica + táctica",
                  "Perfil psicológico y de liderazgo",
                  "Historial de títulos y participación en fases definitivas",
                  "Capacidad de exigencia propia y al grupo",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Jugadores a evaluar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-dark border-l-4 border-red-500 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center text-3xl">⚠️</div>
              <h3 className="font-display text-2xl font-bold text-bone">Jugadores a evaluar exhaustivamente</h3>
            </div>
            <p className="text-bone/70 mb-8">
              Jugadores que actualmente <strong className="text-red-400">no demuestran</strong> perfil competitivo suficiente
              o cuyo historial no refleja experiencia en instancias definitivas. Requieren evaluación exhaustiva
              para determinar capacidad de adaptación.
            </p>

            {/* Kevin Balanta */}
            <div className="mb-8 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display text-xl font-bold text-bone">Kevin Balanta</h4>
                  <p className="text-bone/50 text-sm">Contrato hasta 2029</p>
                </div>
                <span className="text-xs text-red-400 bg-red-500/20 px-4 py-2 rounded-full font-semibold">Evaluación prioritaria</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">HISTORIAL COMPETITIVO</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      "Campeón 2 veces (Deportivo Cali, 2014-2015) a los 18 años",
                      "Solo 4 partidos de liguilla en toda su carrera en México",
                      "No ha estado en equipos competitivos desde 2015",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">PATRÓN DETECTADO</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      "Problemas físicos recurrentes (Defensa y Justicia: 193 min en 6 meses)",
                      "No pudo adaptarse a liga exigente (Argentina)",
                      "Poca experiencia en partidos eliminatorios",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cristian Dájome */}
            <div className="mb-8 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display text-xl font-bold text-bone">Cristian Dájome</h4>
                  <p className="text-bone/50 text-sm">Contrato hasta dic 2026 (32 años)</p>
                </div>
                <span className="text-xs text-red-400 bg-red-500/20 px-4 py-2 rounded-full font-semibold">Edad + Forma</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">ÚLTIMO MOMENTO DESTACADO</h5>
                  <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-lg mb-3">
                    <p className="text-xs text-gold-400 mb-2">Independiente del Valle 2019</p>
                    <p className="text-bone/70 text-xs">Campeón Copa Sudamericana (4 goles en 11 partidos). <strong>Hace 7 años.</strong></p>
                  </div>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 flex-shrink-0">→</span>
                      <span>Vancouver 2022: 10 goles, 5 asistencias (mejor año)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">ACTUALIDAD 2026</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      "Desde 2022 no es jugador de rol importante",
                      "En Santos: mayormente revulsivo, no titular constante",
                      "No disputa liguillas ni playoffs desde 2019",
                      "32 años: edad avanzada para extremo en juego de alta intensidad",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Kevin Palacios */}
            <div className="mb-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display text-xl font-bold text-bone">Kevin Palacios</h4>
                  <p className="text-bone/50 text-sm">Contrato hasta 2029</p>
                </div>
                <span className="text-xs text-yellow-400 bg-yellow-500/20 px-4 py-2 rounded-full font-semibold">Proyección posible</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">RENDIMIENTO SANTOS (1 año)</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      ["yellow", "849 minutos, 2 goles, 1 asistencia"],
                      ["red", "Lesión hombro (fuera 3-4 meses en 2026)"],
                      ["yellow", "Más prometedor que Dájome en proyección"],
                    ].map(([color, text]) => (
                      <li key={text} className="flex items-start gap-2">
                        <span className={`text-${color}-500 flex-shrink-0`}>•</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">EXPERIENCIA COMPETITIVA</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      "Sin partidos de liguilla en Santos (5 torneos sin clasificar)",
                      "Copa Libertadores 2023: solo 25 minutos con Pereira",
                      "Sin rodaje como titular en fases definitivas",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-xs text-green-400">
                  <strong>VENTAJA:</strong> Más joven, mejor adaptación potencial al juego de posición, protagonismo para extremos puros
                </p>
              </div>
            </div>

            {/* Ramiro Sordo */}
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-display text-xl font-bold text-bone">Ramiro Sordo</h4>
                  <p className="text-bone/50 text-sm">Contrato hasta dic 2027</p>
                </div>
                <span className="text-xs text-red-400 bg-red-500/20 px-4 py-2 rounded-full font-semibold">Fragilidad física</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">PROBLEMA PRINCIPAL</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      "Lesiones recurrentes: 2 meses fuera (feb-abr 2026)",
                      "Perdió 7 jornadas clave del Clausura 2026",
                      "No puede jugar más de 3-4 partidos seguidos sin recaer",
                      "Precisión pases: 61.3% / Centros completados: 17%",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-bone/80 font-semibold mb-3 text-sm">EXPERIENCIA COMPETITIVA</h5>
                  <ul className="space-y-2 text-bone/70 text-xs">
                    {[
                      ["red", "Sin liguillas en Santos (nunca clasificó)"],
                      ["yellow", "Copa Sudamericana 2023 (Newell's): 7 partidos, eliminados octavos"],
                      ["red", "+100 partidos con Newell's, pero sin finales por títulos"],
                      ["red", "Leagues Cup: participaciones breves sin cuartos/semis"],
                    ].map(([color, text]) => (
                      <li key={text} className="flex items-start gap-2">
                        <span className={`text-${color}-500 flex-shrink-0`}>→</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-xs text-red-400">
                  <strong>CONCLUSIÓN:</strong> Gran calidad técnica, pero historial carece de finales y disponibilidad física limitada para modelo de alta intensidad
                </p>
              </div>
            </div>
          </div>

          {/* Plan de acción */}
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border-2 border-gold-500/40 rounded-3xl text-center">
            <h4 className="font-display text-2xl font-bold text-bone mb-6">Plan de Acción: Semanas 1-6</h4>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                ["SEMANA 1-2", "Evaluación exhaustiva: física, táctica, psicológica, historial competitivo"],
                ["SEMANA 3-4", "Observación de adaptabilidad al modelo de alta intensidad"],
                ["SEMANA 5-6", "Decisión final: integración al núcleo ganador o sustitución"],
              ].map(([label, text]) => (
                <div key={label} className="p-4 bg-ink-950/50 rounded-xl">
                  <h5 className="text-gold-400 font-semibold mb-2 text-sm">{label}</h5>
                  <p className="text-bone/70 text-xs">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// SOLUCIÓN
// ═══════════════════════════════════════════

function SolucionSection() {
  const comparaciones = [
    { problema: "Reciben centros al segundo palo constantemente", solucion: "Equipo corto + presión alta → el rival no centra", delay: 0 },
    { problema: "Defienden bajo + 2.2 goles recibidos por partido", solucion: "Jugar lejos del arco → defender en campo rival", delay: 0.15 },
    { problema: "Dependen del juego directo (85% finalizaciones en área)", solucion: "Estructuras + ventajas → generar desde construcción", delay: 0.3 },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-green-950/10 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Bloque 2
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight">
            Santos vs<br />
            <span className="text-gold-500">Nuestro Modelo</span>
          </h2>
          <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">Respuesta directa a cada problema detectado</p>
        </motion.div>

        <div className="space-y-8 mb-24">
          {comparaciones.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: c.delay, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="p-8 bg-gradient-to-br from-red-900/30 to-red-950/10 border-2 border-red-500/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">❌</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-red-400">Déficit presentado</h4>
                </div>
                <p className="text-bone text-xl">{c.problema}</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-green-900/30 to-green-950/10 border-2 border-green-500/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✅</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-green-400">Propuesta para solucionarlo</h4>
                </div>
                <p className="text-bone text-xl">{c.solucion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-4xl font-bold text-bone text-center mb-12">
            Proyección con metodología Robatto
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Centros recibidos", val: "-40%", sub: "Reducción" },
              { label: "Tiempo defendiendo", val: "-35%", sub: "Reducción" },
              { label: "Tiempo en campo rival", val: "+50%", sub: "Aumento" },
            ].map((s) => (
              <div key={s.label} className="p-8 bg-gradient-to-br from-gold-900/20 to-gold-950/10 border border-gold-500/30 rounded-2xl text-center">
                <div className="text-bone/60 text-sm mb-2">{s.label}</div>
                <div className="font-display text-5xl font-black text-gold-400 mb-1">{s.val}</div>
                <div className="text-bone/50 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// PLAN 90 DÍAS - CARDS APILADAS (MOBILE FIRST)
// ═══════════════════════════════════════════

function PlanImplementacionSection() {
  const phases = [
    {
      weeks: "1-2",
      title: "Diagnóstico Interno",
      color: "blue",
      icon: "🔍",
      tasks: ["Evaluación individual completa", "Identificación de líderes", "Ajustes prioritarios", "Perfil psicológico"],
      deliverable: "Informe + plan personalizado",
    },
    {
      weeks: "3-6",
      title: "Ajustes Defensivos",
      color: "gold",
      icon: "🛡️",
      tasks: ["Reducir goles de centros", "Posicionamiento defensivo", "Presión coordinada", "Balón parado"],
      deliverable: "-40% goles de centros",
    },
    {
      weeks: "6-12",
      title: "Modelo en Marcha",
      color: "green",
      icon: "⚽",
      tasks: ["Microdosificación integrada", "Posesión + presión", "Automatización principios", "Evaluación continua"],
      deliverable: "+15% efectividad, Top 12",
    },
  ];

  const colorMap = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
    gold: { bg: "bg-gold-500/10", border: "border-gold-500/30", text: "text-gold-400" },
    green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400" },
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-ink-950 via-blue-950/10 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Bloque 3
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-bone mb-6 leading-tight">
            Plan de<br />
            <span className="text-blue-400">impacto inmediato</span>
          </h2>
          <p className="text-bone/60 text-lg md:text-xl max-w-3xl mx-auto">
            Los primeros 90 días: de la teoría a resultados medibles
          </p>
        </motion.div>

        {/* Cards apiladas verticalmente */}
        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          {phases.map((phase, idx) => {
            const colors = colorMap[phase.color];
            return (
              <motion.div
                key={phase.weeks}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card-dark"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:w-32 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center text-4xl`}>
                      {phase.icon}
                    </div>
                    <div className="sm:text-center">
                      <div className={`text-xs uppercase tracking-[0.2em] ${colors.text} font-bold`}>Semana</div>
                      <div className="font-display text-2xl font-black text-bone">{phase.weeks}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-bone mb-4">{phase.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-2 mb-4">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2 text-bone/70 text-sm">
                          <span className={`${colors.text} mt-1 flex-shrink-0`}>→</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                    <div className={`p-4 ${colors.bg} border ${colors.border} rounded-xl`}>
                      <p className={`text-xs ${colors.text} font-semibold mb-1`}>ENTREGABLE:</p>
                      <p className="text-bone/80 text-sm">{phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Objetivos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bone text-center mb-12">
            Objetivos medibles
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Defensivo", color: "blue", stats: [{ label: "Goles centros", value: "-40%" }, { label: "Ingresos área", value: "-30%" }] },
              { title: "Ofensivo", color: "gold", stats: [{ label: "Campo rival", value: "+50%" }, { label: "Conversión", value: "12%" }] },
              { title: "Posicional", color: "green", stats: [{ label: "Tabla", value: "Top 12" }, { label: "Meta", value: "Liguilla" }] },
            ].map((cat, idx) => {
              const colors = colorMap[cat.color];
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`card-dark border-l-4 ${colors.border}`}
                >
                  <h4 className="font-display text-xl font-bold text-bone mb-4">{cat.title}</h4>
                  <div className="space-y-3">
                    {cat.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-ink-950 rounded-xl">
                        <span className="text-bone/70 text-sm">{stat.label}</span>
                        <span className={`font-display text-2xl font-bold ${colors.text}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
