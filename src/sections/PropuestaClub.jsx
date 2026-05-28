import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext.jsx";

const COPY = {
  es: {
    eyebrow: "Propuesta",
    title: "Qué entregamos",
    lead: "Sistema integral, implementación concreta, resultados sostenibles.",
    items: [
      { title: "Competitividad real", desc: "El equipo compite desde el primer día, con hambre y una identidad clara." },
      { title: "Jugadores que crecen", desc: "Entrenamos para potenciar futbolistas, sumar puntos y dejar activos para el club." },
      { title: "Gestión de grupo", desc: "Un vestuario unido, con roles claros y todos tirando para el mismo lado." },
      { title: "Proceso que queda", desc: "No dependemos de un resultado: dejamos procesos y una forma de trabajar que perdura." },
    ],
  },
  en: {
    eyebrow: "Proposal",
    title: "What we deliver",
    lead: "An integral system, concrete implementation, sustainable results.",
    items: [
      { title: "Real competitiveness", desc: "The team competes from day one, with hunger and a clear identity." },
      { title: "Players who grow", desc: "We train to develop footballers, win points and leave assets for the club." },
      { title: "Group management", desc: "A united dressing room, with clear roles and everyone pulling the same way." },
      { title: "A process that lasts", desc: "We don't depend on a single result: we leave processes and a way of working that endures." },
    ],
  },
};

export default function PropuestaClub() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="propuesta" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            {t.eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-bone"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-bone/60 max-w-xl"
          >
            {t.lead}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
          {t.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ink-900 p-8 md:p-10 hover:bg-ink-800 transition-all duration-300 group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-gold-500 text-2xl font-bold group-hover:scale-110 transition-transform">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-bone">
                  {item.title}
                </h3>
              </div>
              <p className="text-bone/60 leading-relaxed text-[15px] md:text-base pl-12">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
