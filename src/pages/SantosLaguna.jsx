import { motion } from "framer-motion";

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
// HERO SIMPLE Y CLARO
// ═══════════════════════════════════════════

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-ink-950 to-red-950/20 py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl font-black text-bone mb-4">
            Proyecto Santos Laguna
          </h1>
          <p className="text-gold-500 text-2xl md:text-3xl font-display font-bold">2026</p>
          <p className="text-bone/60 text-xl mt-4">De último lugar a Liguilla en 90 días</p>
        </motion.div>

        {/* Comparativa lado a lado */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* SANTOS HOY */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-30" />
            <div className="relative bg-gradient-to-br from-red-900/40 to-red-950/60 border-2 border-red-500/30 rounded-3xl p-10">
              <div className="text-red-400 text-sm uppercase tracking-[0.3em] font-bold mb-6">
                Situación Actual
              </div>
              <h2 className="font-display text-4xl font-bold text-bone mb-8">Santos Laguna 2024</h2>
              <div className="text-center mb-8">
                <div className="font-display text-[10rem] font-black text-red-500 leading-none">18</div>
                <div className="text-bone/60 text-xl">de 18 equipos</div>
              </div>
              <div className="space-y-4">
                {[
                  ["Efectividad", "19.6%"],
                  ["Goles recibidos/pj", "2.2"],
                  ["Conversión", "5.7%"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <span className="text-bone/80">{label}</span>
                    <span className="font-display text-2xl font-bold text-red-400">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BOLÍVAR REFERENCIA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-800 rounded-3xl blur opacity-40" />
            <div className="relative bg-gradient-to-br from-gold-900/40 to-gold-950/60 border-2 border-gold-500/40 rounded-3xl p-10">
              <div className="text-gold-400 text-sm uppercase tracking-[0.3em] font-bold mb-6">
                Mismo Método
              </div>
              <h2 className="font-display text-4xl font-bold text-bone mb-8">Bolívar 2024-2026</h2>
              <div className="text-center mb-8">
                <div className="font-display text-[10rem] font-black text-gold-500 leading-none">1</div>
                <div className="text-bone/60 text-xl">Tetracampeón</div>
              </div>
              <div className="space-y-4">
                {[
                  ["Efectividad", "70%"],
                  ["Ranking mundial", "Top 5"],
                  ["Goles anotados", "273"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center p-4 bg-gold-500/10 rounded-xl border border-gold-500/20">
                    <span className="text-bone/80">{label}</span>
                    <span className="font-display text-2xl font-bold text-gold-400">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mensaje central */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <div className="p-10 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border-2 border-gold-500/40 rounded-3xl">
            <p className="font-display text-4xl md:text-5xl font-bold text-bone leading-tight">
              La misma metodología que transformó a Bolívar<br />
              <span className="text-gold-400">puede transformar a Santos</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// DIAGNÓSTICO COMPLETO
// ═══════════════════════════════════════════

function DiagnosticoCompletoSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-ink-950 via-red-950/20 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Análisis Profundo
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-bone mb-6 leading-[1.05]">
            Diagnóstico<br />
            <span className="text-red-500">Santos Laguna</span>
          </h2>
        </motion.div>

        {/* 1. ORGANIZACIÓN DEFENSIVA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 text-2xl">🛡️</span>
            Organización Defensiva
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark border-l-4 border-red-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">
                Goles en contra: Patrones detectados
              </h4>
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
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-8 flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 text-2xl">⚽</span>
            Organización Ofensiva
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark border-l-4 border-gold-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">¿Por qué se convierten pocos goles?</h4>
              <div className="space-y-4 mb-6">
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
              </div>
              <h5 className="text-bone/80 font-semibold mb-3 text-sm">QUÉ FALTÓ:</h5>
              <ul className="space-y-2 text-bone/70 text-sm">
                {["Generación de ocasiones claras", "Variedad en formas de ataque", "Llegadas desde segunda línea", "Eficacia en balón parado ofensivo (ABP)"].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-gold-500 flex-shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark border-l-4 border-gold-500">
              <h4 className="font-display text-xl font-bold text-bone mb-4">Inicios y desarrollo de juego</h4>
              <div className="space-y-6">
                {[
                  {
                    title: "INICIOS DESDE ATRÁS",
                    body: "Dificultad para salir jugado bajo presión rival. Recurren constantemente al juego largo.",
                    error: "❌ Falta de soluciones en construcción",
                  },
                  {
                    title: "ATAQUES POSICIONALES",
                    body: "Limitados. No generan superioridades, no crean espacios entre líneas rivales.",
                    error: "❌ Predecibles y fáciles de defender",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h5 className="text-bone/80 font-semibold mb-3 text-sm">{item.title}</h5>
                    <p className="text-bone/70 text-sm mb-3">{item.body}</p>
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-xs text-red-400">{item.error}</p>
                    </div>
                  </div>
                ))}
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
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative p-10 bg-gradient-to-br from-purple-900/30 to-purple-950/10 border-2 border-purple-500/30 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-500" />
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-4xl">🧠</div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-bone mb-2">Aspecto Psicológico</h3>
                  <p className="text-bone/60">Patrón mental detectado en goles recibidos</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                  <h4 className="font-display text-lg font-bold text-purple-400 mb-4">PATRÓN DETECTADO</h4>
                  <div className="space-y-3 text-bone/80 text-sm">
                    {[
                      ["Falta de atención en momentos clave"],
                      ["Les hacen goles por no seguir al hombre"],
                      ["Les ganan la espalda con facilidad"],
                      ["Pérdida de referencias en balón parado"],
                    ].map(([b]) => (
                      <p key={b} className="flex items-start gap-2">
                        <span className="text-purple-500 font-bold flex-shrink-0">→</span>
                        <span>{b}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-xl">
                  <h4 className="font-display text-lg font-bold text-red-400 mb-4">DIAGNÓSTICO</h4>
                  <div className="text-center py-6">
                    <div className="font-display text-4xl font-black text-red-400 mb-3">DISTRACCIÓN</div>
                    <p className="text-bone/70 text-sm mb-4">Falta de concentración sistemática</p>
                    <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full">
                      <p className="text-xs text-red-400 font-semibold">Falta de competitividad mental</p>
                    </div>
                  </div>
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
    <section className="relative py-32 bg-gradient-to-b from-ink-950 via-green-950/10 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Aspecto Humano
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-bone mb-6 leading-[1.05]">
            Perfil ganador<br />
            <span className="text-green-500">de la plantilla</span>
          </h2>
          <p className="text-bone/60 text-xl max-w-3xl mx-auto">
            Conformación del plantel: Identificación de jugadores competitivos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Jugadores con perfil ganador */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark border-l-4 border-green-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-3xl flex-shrink-0">✅</div>
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
                  "Respuesta ante presión y adversidad",
                  "Capacidad de exigencia propia y al grupo",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
              <p className="text-xs text-green-400 uppercase tracking-wider font-semibold mb-2">OBJETIVO</p>
              <p className="text-bone/80 text-sm">Construir el núcleo ganador que lidere la transformación del equipo</p>
            </div>
          </motion.div>

          {/* Jugadores a evaluar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark border-l-4 border-red-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center text-3xl flex-shrink-0">⚠️</div>
              <h3 className="font-display text-2xl font-bold text-bone">Jugadores a evaluar</h3>
            </div>
            <p className="text-bone/70 mb-6">
              Jugadores que actualmente <strong className="text-red-400">no demuestran</strong> perfil competitivo suficiente.
              Requieren evaluación exhaustiva para determinar capacidad de adaptación.
            </p>
            <div className="space-y-4 mb-6">
              {["Balanta", "Dajome", "Acevedo"].map((jugador) => (
                <div key={jugador} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-bone">{jugador}</span>
                    <span className="text-xs text-red-400 bg-red-500/20 px-3 py-1 rounded-full">A evaluar</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
              <p className="text-xs text-gold-400 uppercase tracking-wider font-semibold mb-2">PLAN DE ACCIÓN</p>
              <p className="text-bone/80 text-sm mb-3">Evaluación de adaptabilidad durante las primeras 4-6 semanas:</p>
              <ul className="space-y-1 text-bone/70 text-xs">
                {["Respuesta a exigencias del modelo", "Mejora en aspecto competitivo", "Decisión: integración o sustitución"].map((b) => (
                  <li key={b}>→ {b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════
// BLOQUE 2: SOLUCIÓN
// ═══════════════════════════════════════════

function SolucionSection() {
  const comparaciones = [
    { problema: "Reciben centros al segundo palo constantemente", solucion: "Equipo corto + presión alta → el rival no centra", delay: 0 },
    { problema: "Defienden bajo + 2.2 goles recibidos por partido", solucion: "Jugar lejos del arco → defender en campo rival", delay: 0.2 },
    { problema: "Dependen del juego directo (85% finalizaciones en área)", solucion: "Estructuras + ventajas → generar desde construcción", delay: 0.4 },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-ink-950 via-green-950/10 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Propuesta
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-bone mb-6 leading-[1.05]">
            Santos vs<br />
            <span className="text-gold-500">Nuestro Modelo</span>
          </h2>
          <p className="text-bone/60 text-xl max-w-3xl mx-auto">Respuesta directa a cada problema detectado</p>
        </motion.div>

        <div className="space-y-8 mb-32">
          {comparaciones.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: c.delay }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="p-8 bg-gradient-to-br from-red-900/30 to-red-950/10 border-2 border-red-500/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">❌</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-red-400">Problema Santos</h4>
                </div>
                <p className="text-bone text-xl">{c.problema}</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-green-900/30 to-green-950/10 border-2 border-green-500/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✅</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-green-400">Solución Robatto</h4>
                </div>
                <p className="text-bone text-xl">{c.solucion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
// BLOQUE 3: PLAN 90 DÍAS
// ═══════════════════════════════════════════

function PlanImplementacionSection() {
  const fases = [
    {
      semanas: "1-2", color: "bg-blue-500", borderColor: "border-blue-500/20", bgColor: "bg-blue-500/10", textColor: "text-blue-400",
      title: "Diagnóstico Interno",
      bullets: ["Evaluación individual completa", "Identificación de líderes", "Ajustes prioritarios"],
      entregable: "Entregable: Informe + plan personalizado", delay: 0,
    },
    {
      semanas: "3-6", color: "bg-gold-500", borderColor: "border-gold-500/20", bgColor: "bg-gold-500/10", textColor: "text-gold-400",
      title: "Ajustes Defensivos Prioritarios",
      bullets: ["Reducir goles de centros", "Salir de área propia", "Presión coordinada"],
      entregable: "Objetivo: -40% goles de centros", delay: 0.2,
    },
    {
      semanas: "6-12", color: "bg-green-500", borderColor: "border-green-500/20", bgColor: "bg-green-500/10", textColor: "text-green-400",
      title: "Modelo Completo",
      bullets: ["Microdosificación integrada", "Posesión + presión", "Automatización de principios"],
      entregable: "Objetivo: +15% efectividad, Top 12", delay: 0.4,
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-ink-950 via-blue-950/10 to-ink-950">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Bloque 3
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-bone mb-6 leading-[1.05]">
            Plan de<br />
            <span className="text-blue-400">impacto inmediato</span>
          </h2>
          <p className="text-bone/60 text-xl max-w-3xl mx-auto">Los primeros 90 días: de la teoría a resultados medibles</p>
        </motion.div>

        <div className="mb-32 overflow-x-auto pb-8">
          <div className="min-w-[900px]">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-1 bg-bone/10" />
              <div className="relative flex gap-4">
                {fases.map((f) => (
                  <motion.div
                    key={f.semanas}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: f.delay }}
                    className="flex-1"
                  >
                    <div className={`w-16 h-16 rounded-full ${f.color} border-4 border-ink-950 flex items-center justify-center mb-4 mx-auto`}>
                      <span className="font-display text-sm font-bold text-ink-950">{f.semanas}</span>
                    </div>
                    <div className="card-dark p-6">
                      <h4 className="font-display text-xl font-bold text-bone mb-3">{f.title}</h4>
                      <ul className="space-y-2 text-sm text-bone/70 mb-4">
                        {f.bullets.map((b) => <li key={b}>• {b}</li>)}
                      </ul>
                      <div className={`p-3 ${f.bgColor} border ${f.borderColor} rounded-lg`}>
                        <p className={`text-xs ${f.textColor} font-semibold`}>{f.entregable}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-4xl font-bold text-bone text-center mb-12">
            Objetivos medibles (Corto Plazo)
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Defensivo", border: "border-blue-500", color: "text-blue-400", rows: [["Goles de centros", "-40%"], ["Ingresos al área", "-30%"]] },
              { title: "Ofensivo", border: "border-gold-500", color: "text-gold-400", rows: [["Tiempo campo rival", "+50%"], ["Conversión de gol", "12%"]] },
              { title: "Posicional", border: "border-green-500", color: "text-green-400", rows: [["Posición tabla", "Top 12"], ["Meta semestre", "Liguilla"]] },
            ].map((c) => (
              <div key={c.title} className={`card-dark border-l-4 ${c.border}`}>
                <h4 className="font-display text-xl font-bold text-bone mb-6">{c.title}</h4>
                <div className="space-y-4">
                  {c.rows.map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center p-4 bg-ink-950 rounded-xl">
                      <span className="text-bone/70">{label}</span>
                      <span className={`font-display text-2xl font-bold ${c.color}`}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
