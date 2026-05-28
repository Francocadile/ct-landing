import { ArrowRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext.jsx";

const COPY = {
  es: {
    eyebrow: "Cuerpo Técnico · Flavio Robatto",
    h1: (
      <>
        Equipos<br />
        dominantes.<br />
        <span className="text-gold-500">Ofensivos.</span><br />
        <span className="italic font-light">Implacables.</span>
      </>
    ),
    lead:
      "Una idea de juego construida en 5 países y consagrada con Bolívar. Trabajo, identidad y resultados que dejan huella.",
    cta1: "Ver propuesta",
    cta2: "Contacto directo",
    youtube: "Canal YouTube",
    manual: "Manual del Modelo",
    kpis: [
      { value: "4", label: "Títulos con Bolívar" },
      { value: "5", label: "Países" },
      { value: "257", label: "Partidos dirigidos" },
      { value: "67%", label: "Efectividad" },
    ],
  },
  en: {
    eyebrow: "Coaching Staff · Flavio Robatto",
    h1: (
      <>
        Dominant<br />
        teams.<br />
        <span className="text-gold-500">Attacking.</span><br />
        <span className="italic font-light">Relentless.</span>
      </>
    ),
    lead:
      "A philosophy of play built across 5 countries and crowned with Bolívar. Work, identity and results that leave a mark.",
    cta1: "View proposal",
    cta2: "Direct contact",
    youtube: "YouTube channel",
    manual: "The Model Manual",
    kpis: [
      { value: "4", label: "Titles with Bolívar" },
      { value: "5", label: "Countries" },
      { value: "257", label: "Matches managed" },
      { value: "67%", label: "Win rate" },
    ],
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="relative min-h-[100svh] bg-ink-900 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/img/flavio/flavio-hero.jpg"
          alt="Flavio Robatto"
          className="w-full h-full object-cover object-center md:object-[75%_center] opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-ink-900/40 to-transparent md:from-ink-900/85 md:via-ink-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative container-x flex flex-col justify-between min-h-[100svh] py-28 md:py-32">
        <div className="max-w-4xl pt-8 md:pt-16">
          <div className="eyebrow mb-6">{t.eyebrow}</div>

          <h1 className="display-1 text-[clamp(2.75rem,8vw,7rem)] [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
            {t.h1}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-bone/70 max-w-2xl leading-relaxed">
            {t.lead}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#propuesta" className="btn-gold">
              {t.cta1} <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-ghost">
              {t.cta2}
            </a>
            <a
              href="https://www.youtube.com/@FlavioRobatto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {t.youtube}
            </a>
            <a href="/manual-modelo" className="btn-ghost">
              {t.manual}
            </a>
          </div>
        </div>

        {/* KPIs en la base */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 rounded-2xl overflow-hidden">
          {t.kpis.map((k) => (
            <div key={k.label} className="bg-ink-900/80 backdrop-blur p-5 md:p-7">
              <div className="font-display font-black text-4xl md:text-6xl text-bone leading-none tracking-tightest">
                {k.value}
              </div>
              <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.18em] text-bone/60">
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
