import { useLang } from "../i18n/LanguageContext.jsx";

const COPY = {
  es: {
    eyebrow: "Software",
    lead: "La plataforma que conecta planificación, sesiones, rutinas, wellness, videos y seguimiento del equipo en un solo lugar.",
    cta: "Conocer OPENBASE",
    stats: [
      { valor: "Todo en uno", label: "Planificación integrada" },
      { valor: "Cloud", label: "Acceso desde cualquier lugar" },
      { valor: "Tiempo real", label: "Actualización instantánea" },
      { valor: "Pro", label: "Herramienta profesional" },
    ],
  },
  en: {
    eyebrow: "Software",
    lead: "The platform that connects planning, sessions, routines, wellness, video and team tracking in a single place.",
    cta: "Discover OPENBASE",
    stats: [
      { valor: "All-in-one", label: "Integrated planning" },
      { valor: "Cloud", label: "Access from anywhere" },
      { valor: "Real-time", label: "Instant updates" },
      { valor: "Pro", label: "Professional tool" },
    ],
  },
};

export default function OpenbaseHome() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="openbase" className="bg-ink-950 py-24 md:py-36 border-t border-bone/10 relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow mb-5">{t.eyebrow}</div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-bone leading-[0.95] tracking-tighter mb-8">
            OPENBASE
          </h2>

          <p className="text-xl md:text-2xl text-bone/70 leading-relaxed mb-12 max-w-3xl mx-auto">
            {t.lead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/openbase"
              className="btn-gold text-lg px-8 py-4"
            >
              {t.cta}
            </a>
          </div>

          {/* Stats decorativos */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-gold-400 mb-1">
                  {stat.valor}
                </div>
                <div className="text-xs text-bone/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
