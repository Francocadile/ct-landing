export default function Openbase() {
  return (
    <div className="min-h-screen bg-ink-900">
      {/* Hero */}
      <div className="border-b border-bone/10 bg-gradient-to-b from-ink-950 to-ink-900">
        <div className="container-x py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="eyebrow mb-5">Software profesional</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-bone leading-[0.95] tracking-tighter mb-8">
              OPENBASE
            </h1>
            <p className="text-xl md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
              La plataforma que conecta planificación, seguimiento y comunicación
              del equipo en un solo lugar.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Qué es OPENBASE */}
          <div className="card-dark lg:col-span-1">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-bone mb-6">
              ¿Qué es OPENBASE?
            </h2>
            <div className="space-y-4 text-bone/70 leading-relaxed">
              <p>
                OPENBASE es una herramienta de trabajo diario pensada para el
                cuerpo técnico y el plantel. Centraliza la planificación semanal,
                el armado de sesiones y la comunicación de objetivos y contenidos,
                para que todos tengan claridad sobre el "qué", el "cómo" y el "por
                qué" del entrenamiento.
              </p>
              <p>
                Permite cargar rutinas, tareas específicas y controles de carga,
                además de registrar wellness/RPE y otros indicadores de
                percepción. Con esa información se genera una lectura rápida por
                jugador y por equipo, facilitando el ajuste de estímulos y la toma
                de decisiones en cada microciclo.
              </p>
              <p>
                También integra video y reportes: compartís clips, consignas y
                feedback, y armás resúmenes que conectan el entrenamiento con el
                plan de partido. El resultado es un flujo más ordenado, medible y
                transparente, tanto para staff como para jugadores.
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="card-dark lg:col-span-1">
            <div className="flex items-start justify-between mb-5">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-bone">
                Video
              </h2>
              <a
                href="https://www.youtube.com/watch?v=MUE6Bb-ZfDo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-500 hover:text-gold-400 transition-colors flex items-center gap-2"
              >
                Ver en YouTube
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </a>
            </div>

            <div className="relative w-full rounded-xl overflow-hidden bg-ink-950 border border-bone/10">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MUE6Bb-ZfDo"
                  title="OPENBASE Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-bone/50">
              Si el video no carga, probá abrirlo desde el botón "Ver en YouTube".
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bone mb-4">
              Características principales
            </h2>
            <p className="text-bone/60 max-w-2xl mx-auto">
              Todo lo que necesitás para gestionar el proceso de entrenamiento
              en un solo lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titulo: "Planificación integrada",
                descripcion: "Armá microciclos, sesiones y tareas con visión completa del proceso.",
              },
              {
                titulo: "Wellness & RPE",
                descripcion: "Registrá percepciones y controles de carga para ajustar estímulos.",
              },
              {
                titulo: "Video y feedback",
                descripcion: "Compartí clips, consignas y análisis directamente en la plataforma.",
              },
              {
                titulo: "Reportes tácticos",
                descripcion: "Conectá entrenamiento con plan de partido mediante informes claros.",
              },
            ].map((feature, i) => (
              <div key={i} className="card-dark text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <div className="font-display text-xl font-bold text-gold-500">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-bone mb-2">
                  {feature.titulo}
                </h3>
                <p className="text-sm text-bone/60 leading-relaxed">
                  {feature.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="card-dark">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-bone mb-4">
              ¿Querés saber más sobre OPENBASE?
            </h3>
            <p className="text-bone/60 mb-6 leading-relaxed">
              Contactanos para ver una demo completa de la plataforma y cómo puede
              adaptarse a las necesidades de tu cuerpo técnico.
            </p>
            <a
              href="/#contacto"
              className="btn-gold inline-flex items-center gap-2"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
