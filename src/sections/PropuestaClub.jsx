import { motion } from "framer-motion";

const ITEMS = [
  { title: "Competitividad real", desc: "El equipo compite desde el primer día, con hambre y una identidad clara." },
  { title: "Jugadores que crecen", desc: "Entrenamos para potenciar futbolistas, sumar puntos y dejar activos para el club." },
  { title: "Gestión de grupo", desc: "Un vestuario unido, con roles claros y todos tirando para el mismo lado." },
  { title: "Proceso que queda", desc: "No dependemos de un resultado: dejamos procesos y una forma de trabajar que perdura." },
];

export default function PropuestaClub() {
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
            Propuesta
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-bone"
          >
            Qué entregamos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-bone/60 max-w-xl"
          >
            Sistema integral, implementación concreta, resultados sostenibles.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
          {ITEMS.map((item, i) => (
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
