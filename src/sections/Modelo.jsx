import {
  objetivosA,
  objetivosB,
  definicionModelo,
  juegoDePosicion,
  fasesJuego,
  principiosJuego,
  entrenamientoBase,
  metodologiaIntegrada,
  contenidosSemanales,
  preparacionSemana,
  semanaTipo,
  planTrabajo,
} from "../data/modelo";

const NAV_ITEMS = [
  { id: "principios", label: "Objetivos & Principios" },
  { id: "juego-posicion", label: "Juego de Posición" },
  { id: "fases", label: "Fases del juego" },
  { id: "principios-juego", label: "Principios de juego" },
  { id: "entrenamiento", label: "Entrenamiento" },
  { id: "metodo", label: "Método Integrado" },
  { id: "contenidos", label: "Contenidos semanales" },
  { id: "preparacion", label: "Preparación de la semana" },
  { id: "semana", label: "Semana modelo" },
  { id: "plan", label: "Plan de trabajo" },
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
          <h2 className="display-2 text-[clamp(2.5rem,5vw,4rem)] text-bone leading-[1]">
            Modelo de juego
          </h2>
          <p className="mt-6 text-lg text-bone/60 max-w-2xl">
            Base conceptual y metodológica del cuerpo técnico. Cómo entrenamos,
            qué priorizamos y por qué.
          </p>
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
          </div>
        </div>

        {/* 2. Juego de Posición */}
        <div id="juego-posicion" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Fundamento táctico</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
              Juego de Posición
            </h3>
            <blockquote className="border-l-4 border-gold-500 pl-6 italic text-bone/70 text-lg leading-relaxed">
              {juegoDePosicion.cita}
            </blockquote>
            <p className="text-xs text-bone/40 mt-4">— Flavio Robatto</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {juegoDePosicion.sistemas.map((sistema) => (
              <div key={sistema.code} className="group">
                <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                  <div className="aspect-[3/4] bg-ink-950 relative">
                    <img
                      src={sistema.img}
                      alt={sistema.nombre}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-5 border-t border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">
                      {sistema.code}
                    </div>
                    <div className="font-display text-lg font-bold text-bone leading-tight mb-1">
                      {sistema.nombre}
                    </div>
                    <div className="text-xs text-bone/50">{sistema.formacion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Fases del juego */}
        <div id="fases" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Organización</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Fases del juego
            </h3>
          </div>

          <div className="space-y-8">
            {fasesJuego.map((fase, idx) => (
              <div key={idx} className="card-dark">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-3">
                      Fase {idx + 1}
                    </div>
                    <h4 className="font-display text-2xl md:text-3xl font-bold text-bone mb-4 leading-tight">
                      {fase.titulo}
                    </h4>
                    <p className="text-bone/70 leading-relaxed mb-4">{fase.texto}</p>
                    <div className="inline-block px-3 py-1.5 rounded-full bg-gold-500/10 text-gold-500 text-xs font-medium">
                      {fase.formacion}
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <div className="bg-ink-950 rounded-xl overflow-hidden border border-bone/10">
                      {fase.img2 ? (
                        <div className="grid grid-cols-2 gap-px bg-bone/10">
                          {[fase.img, fase.img2].map((img, i) => (
                            <div key={i} className="aspect-[4/3] bg-ink-950 relative">
                              <img
                                src={img}
                                alt={`${fase.titulo} variante ${i + 1}`}
                                className="absolute inset-0 w-full h-full object-contain p-3"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="aspect-[4/3] bg-ink-950 relative">
                          <img
                            src={fase.img}
                            alt={fase.titulo}
                            className="absolute inset-0 w-full h-full object-contain p-4"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Principios de juego */}
        <div id="principios-juego" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Fundamentos</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Principios de juego
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-6 font-semibold">
                Principios Ofensivos
              </div>
              <div className="space-y-6">
                {principiosJuego.ofensivos.map((p, i) => (
                  <div key={i}>
                    <h5 className="font-display text-lg font-bold text-bone mb-3">
                      {p.titulo}
                    </h5>
                    <ul className="space-y-2">
                      {p.bullets.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-bone/70 leading-relaxed">
                          <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-6 font-semibold">
                Principios Defensivos
              </div>
              <div className="space-y-6">
                {principiosJuego.defensivos.map((p, i) => (
                  <div key={i}>
                    <h5 className="font-display text-lg font-bold text-bone mb-3">
                      {p.titulo}
                    </h5>
                    <ul className="space-y-2">
                      {p.bullets.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-bone/70 leading-relaxed">
                          <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Entrenamiento */}
        <div id="entrenamiento" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Metodología</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Entrenamiento
            </h3>
          </div>

          <div className="card-dark">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <p className="text-bone/70 leading-relaxed text-lg">
                  {entrenamientoBase.texto}
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="bg-ink-950 rounded-xl overflow-hidden border border-bone/10">
                  <img
                    src={entrenamientoBase.img}
                    alt="Entrenamiento"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Método Integrado Estructural */}
        <div id="metodo" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Metodología</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              {metodologiaIntegrada.titulo}
            </h3>
          </div>

          <div className="card-dark">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <ul className="space-y-4">
                  {metodologiaIntegrada.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 font-display font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-bone/70 leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5">
                <div className="bg-ink-950 rounded-xl overflow-hidden border border-bone/10">
                  <img
                    src={metodologiaIntegrada.img}
                    alt={metodologiaIntegrada.titulo}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Contenidos semanales */}
        <div id="contenidos" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Organización semanal</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Contenidos semanales
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contenidosSemanales.map((contenido) => (
              <div key={contenido.code} className="card-dark">
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-4xl">{contenido.icon}</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">
                      {contenido.code}
                    </div>
                    <h4 className="font-display text-2xl font-bold text-bone">
                      {contenido.titulo}
                    </h4>
                  </div>
                </div>
                <div className="space-y-4">
                  {contenido.bloques.map((bloque, i) => (
                    <div key={i}>
                      <h5 className="font-display text-sm font-bold text-bone/90 mb-2">
                        {bloque.subtitulo}
                      </h5>
                      <p className="text-sm text-bone/60 leading-relaxed">
                        {bloque.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Preparación de la semana */}
        <div id="preparacion" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Organización</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Preparación de la semana
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {preparacionSemana.map((columna, idx) => (
              <div key={idx} className="card-dark">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-6 font-semibold">
                  {columna.grupo}
                </div>
                <div className="space-y-5">
                  {columna.pasos.map((paso) => (
                    <div key={paso.n} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold-500 mt-2" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-bone/80 mb-1">{paso.titulo}</p>
                        <ul className="space-y-0.5">
                          {paso.notas.map((n, j) => (
                            <li key={j} className="text-xs text-bone/50">{n}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Semana modelo */}
        <div id="semana" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Planificación</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              Semana modelo
            </h3>
            <p className="mt-4 text-bone/60">
              Domingo a Domingo (estructura tipo con día de partido el domingo).
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="inline-flex md:grid md:grid-cols-7 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden min-w-full">
              {semanaTipo.map((dia) => (
                <div
                  key={dia.dia}
                  className="bg-ink-800 p-5 md:p-6 min-w-[280px] md:min-w-0"
                >
                  <div className="mb-4">
                    <div className="font-display text-xl font-bold text-bone mb-1">
                      {dia.dia}
                    </div>
                    <div className="text-xs text-gold-500">{dia.carga?.nota}</div>
                  </div>
                  <ul className="space-y-2">
                    {dia.bloques.map((bloque, i) => (
                      <li
                        key={i}
                        className="text-xs text-bone/60 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-gold-500/40 mt-0.5 flex-shrink-0">•</span>
                        <span>{bloque}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 10. Plan de trabajo */}
        <div id="plan" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">Visión global</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              {planTrabajo.titulo}
            </h3>
          </div>

          <div className="card-dark">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <ul className="space-y-4">
                  {planTrabajo.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 font-display font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-bone/70 leading-relaxed pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-5">
                <div className="bg-ink-950 rounded-xl overflow-hidden border border-bone/10">
                  <img
                    src={planTrabajo.img}
                    alt={planTrabajo.titulo}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
