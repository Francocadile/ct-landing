export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Metodología</div>
          <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone leading-[1.05]">
            Protocolo operativo<br />
            <span className="italic text-gold-500">de sesión.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/60 max-w-xl">
            Dinámica completa desde la llegada al predio hasta el cierre de la jornada.
            Primera División.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Fases principales */}
          <div className="grid md:grid-cols-4 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden mb-8">
            <div className="bg-gradient-to-br from-green-900/20 to-green-950/10 p-6 text-center border-b-4 border-green-600">
              <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-2 font-semibold">Fase 1</div>
              <h3 className="font-display text-xl font-bold text-bone">Pre-Entrenamiento</h3>
            </div>
            <div className="bg-gradient-to-br from-gold-900/20 to-gold-950/10 p-6 text-center border-b-4 border-gold-500">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-2 font-semibold">Fase 2</div>
              <h3 className="font-display text-xl font-bold text-bone">Entrenamiento en Campo</h3>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/10 p-6 text-center border-b-4 border-blue-600">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-semibold">Fase 3</div>
              <h3 className="font-display text-xl font-bold text-bone">Post-Entrenamiento</h3>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/10 p-6 text-center border-b-4 border-red-600">
              <div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2 font-semibold">Fase 4</div>
              <h3 className="font-display text-xl font-bold text-bone">Post-Sesión Staff</h3>
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
        </div>

        {/* Nota final */}
        <div className="mt-12 max-w-4xl mx-auto p-6 bg-gold-500/5 border border-gold-500/20 rounded-xl text-center">
          <p className="text-bone/80 leading-relaxed">
            <span className="font-display font-bold text-gold-400">Sistema integrado</span> para maximizar el rendimiento, cuidar al jugador y lograr la excelencia deportiva.
          </p>
        </div>

        {/* Separador */}
        <div className="my-24 border-t border-bone/10" />

        {/* Mapa Conceptual */}
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
    </section>
  );
}
