import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext.jsx";

const VIDEOS = [
  {
    id: "MENg3uZzJdE",
    titulo: { es: "Presión alta mano a mano en inicio rival", en: "High man-to-man press on the opponent's build-up" },
    descripcion: { es: "Agresividad colectiva desde el primer pase del rival", en: "Collective aggression from the opponent's first pass" },
  },
  {
    id: "9mpSMvbfZ8w",
    titulo: { es: "Identidad de juego reconocible", en: "A recognizable playing identity" },
    descripcion: { es: "Juego de posición y principios estructurales", en: "Positional play and structural principles" },
  },
  {
    id: "QJUQSiFhaH4",
    titulo: { es: "Modelo de juego", en: "Playing model" },
    descripcion: { es: "Entrenamiento estructurado bajo los principios del modelo", en: "Structured training under the principles of the model" },
  },
];

const COPY = {
  es: {
    eyebrow: "Contenido",
    title: (
      <>
        Síguenos en <span className="text-gold-500">YouTube</span>
      </>
    ),
    lead: "Análisis tácticos, conceptos del modelo, sesiones de entrenamiento y más contenido exclusivo.",
    cta: "Ver canal completo",
  },
  en: {
    eyebrow: "Content",
    title: (
      <>
        Follow us on <span className="text-gold-500">YouTube</span>
      </>
    ),
    lead: "Tactical analysis, model concepts, training sessions and more exclusive content.",
    cta: "Visit the full channel",
  },
};

export default function YouTubeSection() {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="bg-ink-950 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="eyebrow mb-5">{t.eyebrow}</div>
          <h2 className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-bone mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-bone/60 max-w-xl">
            {t.lead}
          </p>
        </motion.div>

        {/* Grid de Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VIDEOS.map((video, i) => (
            <motion.a
              key={i}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-dark hover:border-gold-500/50 transition-all"
            >
              {/* Thumbnail del video */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-ink-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                    <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 16.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                </div>
                {/* Thumbnail real de YouTube */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.titulo[lang]}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Info del video */}
              <h3 className="font-display text-xl font-bold text-bone mb-2 group-hover:text-gold-400 transition-colors">
                {video.titulo[lang]}
              </h3>
              <p className="text-bone/60 text-sm leading-relaxed">
                {video.descripcion[lang]}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA - Ver canal completo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.youtube.com/@FlavioRobatto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold group inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            {t.cta}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
