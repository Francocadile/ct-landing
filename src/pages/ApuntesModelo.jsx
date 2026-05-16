import { motion } from "framer-motion";
import { useState } from "react";

const APUNTES = [
  {
    id: 1,
    categoria: "EQUIPO",
    titulo: "La pelota ordena al equipo",
    contenido: "La pelota ordena al equipo y no se distingue la fase ofensiva de la defensiva. Para poder atacar bien debo estar preparado al momento de la pérdida, y para defender bien, al momento de la recuperación.",
    quote: "Para atacar bien debo estar preparado al momento de la pérdida",
    videoId: "VIDEO_1_AQUI",
  },
  {
    id: 2,
    categoria: "EQUIPO",
    titulo: "Equilibrio y orden estructural",
    contenido: "Siempre el dibujo del equipo debe estar equilibrado. Orden y ubicación para tener rutas de pase. Opciones al poseedor y siempre respetando las distancias de relación. Esto nos facilita el contexto a la hora de una posible pérdida.",
    quote: "El equilibrio estructural facilita el contexto ante la pérdida",
    videoId: "VIDEO_2_AQUI",
  },
  {
    id: 3,
    categoria: "EQUIPO",
    titulo: "Viajar juntos: La regla de los 5 segundos",
    contenido: "El equipo debe tener claro el concepto de viajar juntos. Esto hace posible la norma de los 5 segundos que indica a los jugadores cercanos a la pérdida ir a MÁXIMA velocidad a recuperar. En esta situación todo el resto del equipo se vuelca hacia la pelota mínimo 5 metros (cierre de jugadores opuestos). Esto facilita que podamos estar más juntos a una posible salida rival de la presión.",
    quote: "Viajar juntos: 5 segundos, máxima velocidad",
    videoId: "VIDEO_3_AQUI",
  },
  {
    id: 4,
    categoria: "EQUIPO",
    titulo: "La pelota nos organiza",
    contenido: "La pelota no solo inicia ataques. La pelota nos organiza: las distancias, las alturas, las relaciones, las coberturas, la presión futura. Por eso no existe separación total entre ataque y defensa, el equipo se posiciona pensando en ambos momentos simultáneamente. Idea central: Atacamos preparados para defender. Defendemos preparados para atacar. Esto genera: continuidad estructural, menor desorganización, mejores transiciones.",
    quote: "Atacamos preparados para defender. Defendemos preparados para atacar.",
    videoId: "VIDEO_4_AQUI",
  },
  {
    id: 5,
    categoria: "INDIVIDUAL",
    titulo: "La posición genera ventajas",
    contenido: "La posición sirve principalmente para generar ventajas. La pelota llega al jugador y no al revés. Respetar distancias de relación, jugar a partir de mi posición y confiar en el pase de mi compañero para que me llegue con cierta ventaja, saber moverme dentro de espacios dinámicos, que se abren y cierran según la interacción del rival, sin invadir espacios de compañeros. Y dentro de esos espacios perfilar bien mi cuerpo con la intención de una jugada futura aprovechando mi posición es el objetivo.",
    quote: "La pelota llega al jugador, no al revés",
    videoId: "VIDEO_5_AQUI",
  },
];

export default function ApuntesModelo() {
  const [expandido, setExpandido] = useState(null);

  return (
    <div className="bg-ink-900 min-h-screen py-24">
      <div className="container-x max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="eyebrow mb-4">Metodología</div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black text-bone leading-tight tracking-tighter mb-6">
            Apuntes de <span className="text-gold-500">nuestro modelo</span>
          </h1>
          <p className="text-bone/60 text-lg max-w-2xl mx-auto">
            Conceptos tácticos fundamentales que definen nuestra forma de jugar, entrenar y competir.
          </p>

          <div className="mt-6">
            <a
              href="/manual-modelo"
              className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-2"
            >
              Ver Manual Completo del Modelo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Lista de Apuntes */}
        <div className="space-y-6">
          {APUNTES.map((apunte, index) => (
            <motion.div
              key={apunte.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-dark border-l-4 border-gold-500 hover:border-gold-400 transition-colors"
            >

              {/* Header del apunte */}
              <div
                className="cursor-pointer"
                onClick={() => setExpandido(expandido === apunte.id ? null : apunte.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-2xl font-black text-gold-400">
                        {String(apunte.id).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                        {apunte.categoria}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-bone">
                        {apunte.titulo}
                      </h3>
                    </div>
                  </div>
                  <button className="text-bone/40 hover:text-bone transition-colors">
                    <svg
                      className={`w-6 h-6 transition-transform ${expandido === apunte.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenido expandible */}
              {expandido === apunte.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-bone/10"
                >

                  {/* Texto */}
                  <p className="text-bone/80 leading-relaxed mb-6">
                    {apunte.contenido}
                  </p>

                  {/* Quote destacada */}
                  <div className="p-4 bg-gold-500/5 border-l-4 border-gold-500 rounded-r-xl mb-6">
                    <p className="font-display text-lg font-bold text-gold-400 italic">
                      "{apunte.quote}"
                    </p>
                  </div>

                  {/* PLACEHOLDER DE VIDEO */}
                  <div className="bg-ink-800 rounded-xl overflow-hidden border-2 border-dashed border-gold-500/30">
                    <div className="aspect-video flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                      <p className="text-gold-400 font-bold text-lg mb-2">
                        VIDEO #{apunte.id} - Insertar aquí
                      </p>
                      <p className="text-bone/50 text-sm">
                        ID del video: <code className="bg-ink-950 px-2 py-1 rounded text-gold-400">{apunte.videoId}</code>
                      </p>
                      <p className="text-bone/40 text-xs mt-4 max-w-md">
                        Reemplazar en el código la línea <code className="bg-ink-950 px-1">videoId: "{apunte.videoId}"</code> con el ID real de Google Drive
                      </p>
                    </div>
                  </div>

                  {/* Instrucciones para agregar video */}
                  <div className="mt-4 p-3 bg-gold-500/5 rounded-lg">
                    <p className="text-bone/60 text-xs">
                      <strong className="text-gold-400">Cómo agregar el video:</strong> Una vez tengas el ID del video de Google Drive,
                      reemplazá <code className="bg-ink-950 px-1 text-gold-400">{apunte.videoId}</code> en el código y
                      usá el componente de iframe como en la página de Santos Laguna.
                    </p>
                  </div>

                </motion.div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-bone/40 text-sm">
            {APUNTES.length} conceptos • Metodología Integrada Estructural
          </p>
        </motion.div>

      </div>
    </div>
  );
}
