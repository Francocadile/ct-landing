import { ArrowRight } from "lucide-react";

const KPIS = [
  { value: "4", label: "Títulos con Bolívar" },
  { value: "5", label: "Países" },
  { value: "257", label: "Partidos dirigidos" },
  { value: "67%", label: "Efectividad" },
];

export default function Hero() {
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
          <div className="eyebrow mb-6">Cuerpo Técnico · Flavio Robatto</div>

          <h1 className="display-1 text-[clamp(2.75rem,8vw,7rem)] [text-shadow:_0_2px_12px_rgb(0_0_0_/_80%)]">
            Equipos<br />
            dominantes.<br />
            <span className="text-gold-500">Ofensivos.</span><br />
            <span className="italic font-light">Implacables.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-bone/70 max-w-2xl leading-relaxed">
            Una idea de juego construida en 5 países y consagrada con Bolívar.
            Trabajo, identidad y resultados que dejan huella.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#propuesta" className="btn-gold">
              Ver propuesta <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-ghost">
              Contacto directo
            </a>
          </div>
        </div>

        {/* KPIs en la base */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 rounded-2xl overflow-hidden">
          {KPIS.map((k) => (
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
