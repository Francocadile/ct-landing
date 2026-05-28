import { useLang } from "../i18n/LanguageContext.jsx";

const COPY = {
  es: {
    caption: "Manchester · 2025",
    eyebrow: "Convicciones",
    title: (
      <>
        Una idea,<br />
        <span className="italic text-gold-500">en cualquier contexto.</span>
      </>
    ),
    p1:
      "Creemos en una idea de juego que no depende del contexto, del rival ni del escenario. Ser protagonistas a través del balón, construir una identidad reconocible y sostener convicciones incluso en la incertidumbre. Trabajamos desde los principios del juego de posición: ocupar bien los espacios, juntarnos a través del pase, generar superioridades y usar la amplitud para llegar con ventaja a zonas de definición.",
    p2:
      "La posesión es el medio: nos permite controlar, desgastar y crear situaciones de gol. Para sostenerlo hace falta convicción, valentía, paciencia y conocimiento.",
  },
  en: {
    caption: "Manchester · 2025",
    eyebrow: "Convictions",
    title: (
      <>
        One idea,<br />
        <span className="italic text-gold-500">in any context.</span>
      </>
    ),
    p1:
      "We believe in a philosophy of play that doesn't depend on the context, the opponent or the stage. Being protagonists through the ball, building a recognizable identity and holding our convictions even amid uncertainty. We work from the principles of positional play: occupying spaces well, linking up through passing, creating numerical superiority and using width to reach the finishing zones with an advantage.",
    p2:
      "Possession is the means: it lets us control, wear opponents down and create goal-scoring situations. Sustaining it takes conviction, courage, patience and knowledge.",
  },
};

export default function Convicciones() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="bg-ink-950 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Imagen */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/img/flavio/robato-guardiola.jpg"
                alt="Flavio Robatto y Pep Guardiola en Manchester"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-bone/10 rounded-2xl pointer-events-none" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-bone/40">
              {t.caption}
            </p>
          </div>

          {/* Texto */}
          <div className="md:col-span-7">
            <div className="eyebrow mb-5">{t.eyebrow}</div>
            <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone leading-[1.05]">
              {t.title}
            </h2>

            <div className="mt-8 space-y-5 text-bone/70 text-lg leading-relaxed max-w-xl">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
