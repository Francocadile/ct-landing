import {
  objetivosA,
  objetivosB,
  definicionModelo,
  juegoDePosicion,
  fasesJuego,
  principiosJuego,
} from "../data/modelo";

const NAV_ITEMS = [
  { id: "principios", label: "Objetivos & Principios" },
  { id: "mapa-conceptual", label: "Mapa Conceptual" },
  { id: "protocolo", label: "Protocolo Operativo" },
  { id: "juego-posicion", label: "Juego de Posición" },
  { id: "fases", label: "Fases del juego" },
  { id: "principios-juego", label: "Principios de juego" },
];

export default function Modelo() {
  return (
    <section id="modelo" className="bg-ink-900 relative">
      {/* Subnav sticky */}
      <nav className="sticky top-16 z-10 bg-ink-900/95 backdrop-blur-md border-b border-bone/10">
        <div className="container-x">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium text-bone/60 hover:text-gold-500 hover:bg-bone/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container-x py-24 md:py-36">

        {/* Encabezado */}
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-5">Metodología</div>
          <h2 className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-bone">
            Modelo de juego
          </h2>
          <p className="mt-6 text-lg text-bone/60 max-w-2xl">
            Base conceptual y metodológica del cuerpo técnico. Cómo entrenamos, qué priorizamos y por qué.
          </p>

          {/* Principio Fundacional */}
          <div className="mt-12 p-8 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-l-4 border-gold-500 rounded-r-2xl">
            <p className="text-xs uppercase tracking-widest text-gold-400 mb-3 font-bold">
              Manual de Equipo · Principios
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-bone leading-tight mb-4">
              El principio más profundo y determinante del juego de posición es la ocupación racional del espacio para generar superioridades constantes.
            </p>
            <p className="text-lg text-bone/80 font-semibold italic">
              Todo nace ahí.
            </p>
            <p className="text-bone/70 mt-4 leading-relaxed">
              El verdadero núcleo del modelo está en cómo el equipo distribuye sus hombres para manipular y vulnerar la estructura rival.
            </p>
          </div>
        </div>

        {/* 1. Objetivos & Principios */}
        <div id="principios" className="scroll-mt-32 mb-32">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4 font-semibold">
                Objetivos generales I
              </div>
              <ul className="space-y-3">
                {objetivosA.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-bone/70 text-sm leading-relaxed">
                    <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4 font-semibold">
                Objetivos generales II
              </div>
              <ul className="space-y-3">
                {objetivosB.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-bone/70 text-sm leading-relaxed">
                    <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="relative p-8 md:p-12 bg-gradient-to-br from-gold-600/10 to-gold-700/5 rounded-2xl border border-gold-500/20">
              <div className="absolute top-6 left-6 text-gold-500/20 text-6xl font-display leading-none">"</div>
              <p className="relative text-xl md:text-2xl font-display font-medium text-bone/90 leading-relaxed italic text-center">
                {definicionModelo}
              </p>
            </blockquote>

            <div className="mt-8 text-center">
              <a
                href="/manual-modelo"
                className="btn-gold inline-flex items-center gap-2"
              >
                Ver Manual Completo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Mapa Conceptual */}
        <div id="mapa-conceptual" className="scroll-mt-32 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="eyebrow mb-5">Sistema completo</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
                Mapa Conceptual —<br />
                <span className="text-gold-500">Metodología Integrada Estructural</span>
              </h3>
              <p className="text-lg text-bone/60 max-w-3xl mx-auto">
                Entrenamos el juego desde el juego, optimizando la estructura del jugador
                para sostener y potenciar su rendimiento dentro del modelo.
              </p>
            </div>

            {/* Idea Central */}
            <div className="mb-12 p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-500/30 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl font-bold text-gold-400">Idea Central</h4>
              </div>
              <p className="text-bone/90 text-lg leading-relaxed max-w-4xl mx-auto">
                El todo es un sistema interrelacionado: cuando cambia una parte, cambia todo el sistema.
                Cada decisión, tarea, carga o estímulo impacta en el comportamiento global y en el
                rendimiento del jugador y del equipo.
              </p>
            </div>

            {/* Grid principal - 3 columnas */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Columna 1: Entrenamiento Integrado */}
              <div className="space-y-6">
                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4 font-semibold">
                    2. Entrenamiento Integrado
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    El juego es el medio y el fin del entrenamiento.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Tareas de Juego (Integradas)</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        <li>• Representativas del modelo</li>
                        <li>• Con oposición real</li>
                        <li>• Con toma de decisión</li>
                        <li>• Con transferencia al partido</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Manipulación de Variables</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        <li>• Espacio · Tiempo · Reglas</li>
                        <li>• N° de jugadores · Objetivos</li>
                        <li>• Recursos</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Objetivo</h5>
                      <p className="text-xs text-bone/60">
                        Generar comportamientos específicos del modelo con transferencia al partido.
                      </p>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Transferencia al Partido</h5>
                      <p className="text-xs text-bone/60">
                        Todo lo entrenado debe tener un objetivo claro y una transferencia directa al juego real.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-4 font-semibold">
                    4. Área Física Integrada al Modelo
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    El área física no trabaja de forma aislada. Está al servicio del modelo y del jugador.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <h6 className="text-xs font-semibold text-purple-400 mb-2">Trabajo en Campo</h6>
                      <ul className="text-[10px] text-bone/60 space-y-1">
                        <li>• Capacidades condicionales</li>
                        <li>• Velocidad · Resistencia</li>
                        <li>• Potencia · Agilidad</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <h6 className="text-xs font-semibold text-purple-400 mb-2">Trabajo en Gym</h6>
                      <ul className="text-[10px] text-bone/60 space-y-1">
                        <li>• Fuerza y potencia</li>
                        <li>• Prevención de lesiones</li>
                        <li>• Estabilidad y movilidad</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-ink-950 rounded-lg border border-bone/10">
                    <p className="text-xs text-bone/60">
                      <span className="font-semibold text-bone">Objetivos:</span> Integración,
                      Especificidad, Prevención, Optimización, Transferencia
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna 2: Modelo de Juego (Centro) */}
              <div className="lg:row-span-2">
                <div className="card-dark h-full bg-gradient-to-br from-gold-600/10 to-gold-700/5 border-2 border-gold-500/30">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/40 mb-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold">
                        1. Modelo de Juego
                      </span>
                    </div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-3">
                      Nuestra identidad y la forma en que entendemos el juego
                    </h4>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-ink-950/50 rounded-xl border border-gold-500/20">
                      <h5 className="font-display text-lg font-bold text-gold-400 mb-4">Organización Ofensiva</h5>
                      <p className="text-sm text-bone/70 mb-4">(Principios en posesión)</p>
                      <div className="space-y-2 text-sm text-bone/70">
                        <div className="flex items-start gap-2">
                          <span className="text-gold-500 font-bold flex-shrink-0">①</span>
                          <p>Dominar el juego a través de la posesión (inicios, reinicios). "Si yo tengo el balón, el rival no lo tiene, por lo tanto no me puede atacar" (J. Cruyff).</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gold-500 font-bold flex-shrink-0">②</span>
                          <p>Encontrar ventajas tácticas a partir de nuestras estructuras.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gold-500 font-bold flex-shrink-0">③</span>
                          <p>Dinámicas en último tercio para ser profundos e impredecibles al generar situaciones de gol.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-ink-950/50 rounded-xl border border-blue-500/20">
                      <h5 className="font-display text-lg font-bold text-blue-400 mb-4">Organización Defensiva</h5>
                      <p className="text-sm text-bone/70 mb-4">(Principios en recuperación)</p>
                      <div className="space-y-2 text-sm text-bone/70">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold flex-shrink-0">④</span>
                          <p>Presionar para forzar errores rivales y/o la recuperación del balón lo antes posible.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold flex-shrink-0">⑤</span>
                          <p>Reducción de espacios constante para minimizar el tiempo y espacio que tiene el rival para decidir.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold flex-shrink-0">⑥</span>
                          <p>Principios fundamentales de defensa en nuestro propio terreno bien aplicados: cierre de espacios, coberturas, comportamiento del más lejano.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-xl text-center">
                      <h5 className="font-display text-base font-bold text-red-400 mb-2">
                        6. Toma de Decisiones (Eje del Sistema)
                      </h5>
                      <p className="text-xs text-bone/60">
                        Convertimos la información en decisiones que mejoran el rendimiento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna 3: Planificación y Evaluación */}
              <div className="space-y-6">
                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 font-semibold">
                    3. Planificación y Gestión de la Carga
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    Planificamos, dosificamos y ajustamos según el contexto.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Microciclo Estructural (Microdosificación)</h5>
                      <div className="grid grid-cols-5 gap-1 text-[10px] text-center mt-3">
                        {["MD-1", "MD-2", "MD-3", "MD-4", "MD"].map((day) => (
                          <div key={day} className="p-2 bg-blue-500/10 rounded">
                            <div className="font-bold text-blue-400">{day}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Microdosificación (Microdosis)</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        <li>• Estímulos frecuentes y en pequeñas dosis</li>
                        <li>• Alta frecuencia — Bajo impacto acumulativo</li>
                        <li>• Sostenemos niveles sin generar fatiga excesiva</li>
                        <li>• Integración diaria de cargas dentro de las tareas</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Gestión de la Carga</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        <li>• Balance entre carga y recuperación</li>
                        <li>• Control de fatiga aguda y crónica</li>
                        <li>• Adaptación al calendario, rival y contexto</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">Factores a Considerar</h5>
                      <p className="text-xs text-bone/60">
                        Estado del jugador · Rival · Calendario · Viajes · Clima · Objetivos de la semana
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-4 font-semibold">
                    5. Evaluación y Control
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    Medimos para comprender, prevenir y tomar decisiones.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: "Carga Externa (GPS)", items: ["Distancias", "Velocidades", "Aceleraciones", "Desaceleraciones", "Player Load"] },
                      { title: "Carga Interna (Wellness)", items: ["Fatiga", "Estrés", "Sueño", "Dolor muscular", "Ánimo"] },
                      { title: "Estado Neuromuscular", items: ["CMJ", "Fuerza", "Potencia", "Asimetrías", "Rigidez"] },
                      { title: "Análisis Táctico y Técnico", items: ["Comportamientos", "Patrones de juego", "Eficacia", "Toma de decisiones", "Rendimiento colectivo"] },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 bg-ink-950 rounded-lg border border-bone/10">
                        <h6 className="text-xs font-semibold text-green-400 mb-2">{item.title}</h6>
                        <ul className="text-[10px] text-bone/60 space-y-0.5">
                          {item.items.map((i, j) => <li key={j}>• {i}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ciclo Continuo */}
            <div className="card-dark bg-gradient-to-r from-ink-800 to-ink-900 border-2 border-gold-500/30">
              <div className="text-center mb-6">
                <h4 className="font-display text-xl font-bold text-bone mb-2">
                  7. Lógica del Sistema (Ciclo Continuo)
                </h4>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {[
                  { label: "Estimular", desc: "Aplicamos estímulos a través del juego y las tareas" },
                  { label: "Medir", desc: "Recolectamos datos objetivos y subjetivos del jugador" },
                  { label: "Analizar", desc: "Interpretamos la información según el modelo, el contexto y el objetivo" },
                  { label: "Ajustar", desc: "Tomamos decisiones y modificamos lo que sea necesario" },
                  { label: "Mejorar", desc: "Buscamos la mejor versión del jugador y del equipo de forma sostenible" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="px-4 py-3 bg-ink-950 rounded-xl border border-gold-500/20 text-center min-w-[140px]">
                      <div className="font-display font-bold text-gold-400 mb-1">{step.label}</div>
                      <div className="text-xs text-bone/60">{step.desc}</div>
                    </div>
                    {idx < 4 && (
                      <svg className="w-6 h-6 text-gold-500/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Objetivo Final */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-500/30 rounded-2xl text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-3 font-semibold">
                8. Objetivo Final
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-display text-lg font-bold text-bone mb-2">Jugador</h5>
                  <ul className="text-sm text-bone/70 space-y-1">
                    <li>• Más fuerte</li>
                    <li>• Más inteligente</li>
                    <li>• Más disponible</li>
                    <li>• Menos lesionado</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-display text-lg font-bold text-bone mb-2">Equipo</h5>
                  <ul className="text-sm text-bone/70 space-y-1">
                    <li>• Más consistente</li>
                    <li>• Más competitivo</li>
                    <li>• Más eficaz</li>
                    <li>• Con identidad clara</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-ink-950/50 rounded-xl border border-gold-500/20">
                <p className="font-display text-lg font-bold text-gold-400">
                  Rendimiento sostenible dentro del modelo de juego
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Protocolo Operativo */}
        <div id="protocolo" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-5">Metodología</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
              Protocolo operativo<br />
              <span className="italic text-gold-500">de sesión.</span>
            </h3>
            <p className="text-lg text-bone/60 max-w-xl">
              Dinámica completa desde la llegada al predio hasta el cierre de la jornada.
              Primera División.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Fases principales */}
            <div className="grid md:grid-cols-4 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden mb-8">
              <div className="bg-gradient-to-br from-green-900/20 to-green-950/10 p-6 text-center border-b-4 border-green-600">
                <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-2 font-semibold">Fase 1</div>
                <h4 className="font-display text-xl font-bold text-bone">Pre-Entrenamiento</h4>
              </div>
              <div className="bg-gradient-to-br from-gold-900/20 to-gold-950/10 p-6 text-center border-b-4 border-gold-500">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-2 font-semibold">Fase 2</div>
                <h4 className="font-display text-xl font-bold text-bone">Entrenamiento en Campo</h4>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/10 p-6 text-center border-b-4 border-blue-600">
                <div className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-semibold">Fase 3</div>
                <h4 className="font-display text-xl font-bold text-bone">Post-Entrenamiento</h4>
              </div>
              <div className="bg-gradient-to-br from-red-900/20 to-red-950/10 p-6 text-center border-b-4 border-red-600">
                <div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2 font-semibold">Fase 4</div>
                <h4 className="font-display text-xl font-bold text-bone">Post-Sesión Staff</h4>
              </div>
            </div>

            {/* Contenido detallado */}
            <div className="space-y-8">
              {/* Pre-Entrenamiento */}
              <div className="card-dark">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-black text-green-400">-2h</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">Pre-Entrenamiento</h4>
                    <p className="text-bone/60 text-sm">Coordinación y preparación del staff</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-3 font-semibold">Llegada Staff (-2:00 hs)</div>
                    <ul className="space-y-2 text-sm text-bone/70">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Coordinación con utileros para armado del campo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Distribución de materiales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Revisión de planificación del día</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-bone/10 text-xs text-bone/50">
                      Responsables: PF + 2°PF + Asistentes + Utileros
                    </div>
                  </div>

                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-3 font-semibold">Reunión Cuerpo Médico</div>
                    <ul className="space-y-2 text-sm text-bone/70">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Debate novedades del día</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Estado de jugadores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Adaptaciones necesarias</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-bone/10 text-xs text-bone/50">
                      Participan: DT + PF + 2°PF + Kiné + Médico
                    </div>
                  </div>

                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-3 font-semibold">Pre-Sesión Individual</div>
                    <ul className="space-y-2 text-sm text-bone/70">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Activación individual en OpenBase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Rutina ya cargada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Video pre-entrenamiento (opcional)</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-bone/10 text-xs text-bone/50">
                      Supervisión: 2°PF (cumplimiento)
                    </div>
                  </div>
                </div>
              </div>

              {/* Entrenamiento en Campo */}
              <div className="card-dark border-l-4 border-gold-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-black text-gold-400">0:00</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">Entrenamiento en Campo</h4>
                    <p className="text-bone/60 text-sm">5 bloques táctico-técnicos integrados</p>
                  </div>
                </div>

                <div className="mb-6 p-5 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                  <p className="text-bone/80 text-sm leading-relaxed">
                    <span className="font-semibold text-gold-400">Principio central:</span> Todo el entrenamiento está gobernado por el contenido técnico-táctico del día. Lo físico, lo táctico y lo técnico están integrados en una misma lógica.
                  </p>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { num: 1, title: "Activación", desc: "Preparar al jugador de forma integral" },
                    { num: 2, title: "Adquisición", desc: "Desarrollar capacidades técnicas" },
                    { num: 3, title: "Juego Orientado", desc: "Integrar lo físico con lo táctico" },
                    { num: 4, title: "Juego Específico", desc: "Aplicar y consolidar contenidos" },
                    { num: 5, title: "Optimización", desc: "Ajustar, completar y reforzar" },
                  ].map((bloque) => (
                    <div key={bloque.num} className="bg-ink-950 rounded-xl p-4 border border-bone/10 text-center">
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-3">
                        <span className="font-display font-bold text-gold-400">{bloque.num}</span>
                      </div>
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{bloque.title}</h5>
                      <p className="text-xs text-bone/50 leading-relaxed">{bloque.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Entrenamiento */}
              <div className="card-dark">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="font-display text-xl font-black text-blue-400">Post</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">Post-Entrenamiento</h4>
                    <p className="text-bone/60 text-sm">Recuperación, nutrición y física</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <h5 className="font-display text-lg font-bold text-bone mb-4">Fuerza (OpenBase)</h5>
                    <ul className="space-y-2 text-sm text-bone/70">
                      <li>• Sesión de fuerza específica individual obligatoria</li>
                      <li>• Supervisa: 2°PF (cumplimiento)</li>
                    </ul>
                  </div>

                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <h5 className="font-display text-lg font-bold text-bone mb-4">Recuperación & Nutricional</h5>
                    <ul className="space-y-2 text-sm text-bone/70">
                      <li>• Suplementación post-entrenamiento</li>
                      <li>• Coordinación de alimentación (almuerzo)</li>
                      <li>• Responsables: Nutricionista + Cocina + Kinesiólogos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post-Sesión Staff */}
              <div className="card-dark bg-gradient-to-br from-red-900/10 to-red-950/5 border-l-4 border-red-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="font-display text-base font-black text-red-400">Staff</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">Reunión Técnica Post-Sesión</h4>
                    <p className="text-bone/60 text-sm">Análisis, corrección y planificación</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-ink-950 rounded-xl p-4 border border-bone/10">
                    <p className="text-sm text-bone/70">Análisis de la sesión — Datos físicos</p>
                  </div>
                  <div className="bg-ink-950 rounded-xl p-4 border border-bone/10">
                    <p className="text-sm text-bone/70">Video táctico</p>
                  </div>
                  <div className="bg-ink-950 rounded-xl p-4 border border-bone/10">
                    <p className="text-sm text-bone/70">Corrección de errores</p>
                  </div>
                </div>

                <div className="mt-4 text-xs text-bone/50">
                  Participan: DT + PF + 2°PF + Asistentes | Analistas de video
                </div>
              </div>
            </div>

            {/* Nota final */}
            <div className="mt-12 max-w-4xl mx-auto p-6 bg-gold-500/5 border border-gold-500/20 rounded-xl text-center">
              <p className="text-bone/80 leading-relaxed">
                <span className="font-display font-bold text-gold-400">Sistema integrado</span> para maximizar el rendimiento, cuidar al jugador y lograr la excelencia deportiva.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Juego de Posición */}
        <div id="juego-posicion" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Fundamento táctico</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
              Juego de Posición
            </h3>
            <blockquote className="border-l-4 border-gold-500 pl-6 italic text-bone/70 text-lg leading-relaxed">
              "El juego de posición es una forma conceptual de jugar este deporte: siendo protagonistas
              y jugando con intención. Correcta ocupación de espacios, avance del balón y generación
              de superioridades."
            </blockquote>
            <p className="text-xs text-bone/40 mt-4">— Flavio Robatto</p>
          </div>

          {/* Grid de 3 sistemas tácticos */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sistema Base 1-4-3-3 */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    {/* Portero */}
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    {/* Defensa - 4 */}
                    <circle cx="70" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="120" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="230" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    {/* Mediocampo - 3 */}
                    <circle cx="90" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="90" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="150" cy="230" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="210" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="210" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    {/* Delantera - 3 */}
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">SB</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">Sistema Base</div>
                  <div className="text-xs text-bone/50">1-4-3-3</div>
                </div>
              </div>
            </div>

            {/* Fase Defensiva 1-4-1-4-1 */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-blue-900 to-blue-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    {/* Portero */}
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    {/* Defensa - 4 */}
                    <circle cx="70" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="120" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="230" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    {/* Pivote - 1 */}
                    <circle cx="150" cy="240" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="245" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    {/* Mediocampo - 4 */}
                    <circle cx="60" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="120" cy="170" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="180" cy="170" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="240" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                    {/* Delantero - 1 */}
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">FD</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">Fase Defensiva</div>
                  <div className="text-xs text-bone/50">1-4-1-4-1</div>
                </div>
              </div>
            </div>

            {/* Inicio y Progresión 1-2-3-2-3 */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-purple-900 to-purple-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    {/* Portero */}
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    {/* Defensa central - 2 */}
                    <circle cx="120" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    {/* Pivotes + Laterales - 3 */}
                    <circle cx="60" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="150" cy="260" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="265" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="240" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    {/* Interiores - 2 */}
                    <circle cx="100" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="100" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="200" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="200" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    {/* Delantera - 3 */}
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">IP</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">Inicio y Progresión</div>
                  <div className="text-xs text-bone/50">1-2-3-2-3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Fases del juego */}
        <div id="fases" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Organización</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Fases del juego
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fase 1: Iniciación */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    <circle cx="70" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="120" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="230" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    <circle cx="90" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="90" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="150" cy="230" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="210" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="210" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">Fase 1</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">Iniciación</div>
                  <div className="text-xs text-bone/50">1-4-3-3</div>
                </div>
              </div>
            </div>

            {/* Fase 2: Creación */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-blue-900 to-blue-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    <circle cx="120" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="60" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="150" cy="260" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="265" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="240" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    <circle cx="100" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="100" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="200" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="200" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">Fase 2</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">Creación</div>
                  <div className="text-xs text-bone/50">1-2-3-2-3</div>
                </div>
              </div>
            </div>

            {/* Fase 3: Finalización */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-red-900 to-red-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="245" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="249" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    <circle cx="120" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="184" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="184" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="60" cy="130" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="134" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="150" cy="140" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="144" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="240" cy="130" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="134" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    <circle cx="100" cy="75" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="100" y="79" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="200" cy="75" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="200" y="79" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="70" cy="45" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="49" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="35" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="39" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="45" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="49" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">Fase 3</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">Finalización</div>
                  <div className="text-xs text-bone/50">1-2-3-2-3 volcado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Principios de juego */}
        <div id="principios-juego" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Resumen</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Principios de juego
            </h3>
            <p className="mt-4 text-bone/60">
              Los principios ofensivos y defensivos están detallados en el
              <a href="#mapa-conceptual" className="text-gold-500 hover:text-gold-400 ml-1">
                Mapa Conceptual de Metodología
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
