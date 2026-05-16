import { motion } from "framer-motion";
import { useState } from "react";

const CONCEPTOS_FIJACION = [
  {
    id: 1,
    titulo: "Fijar por Amplitud",
    subtitulo: "Abrir para estirar la estructura rival",
    principio: "El extremo mantiene máxima amplitud para impedir que el lateral rival cierre hacia dentro. Ahí aparece la primera ventaja: si el lateral no puede cerrar, el interior rival queda demasiado lejos del carril interior.",
    situacion: [
      "Salida en 3-2-5",
      "Extremo izquierdo bien pegado a línea",
      "Lateral rival obligado a respetar amplitud",
      "Interior izquierdo recibe entre lateral y volante rival",
    ],
    conclusion: "El extremo quizás ni toca la pelota. Pero su posición libera el intervalo interior.",
  },
  {
    id: 2,
    titulo: "Fijar por Dentro",
    subtitulo: "Atraer para liberar afuera",
    principio: "Acá el objetivo cambia: se concentra gente dentro para atraer presión y liberar banda débil. El rival colapsa interiormente. Entonces aparece el cambio de orientación.",
    situacion: [
      "El 5 juega con interior derecho y falso extremo interiorizado",
      "El rival cierra por dentro, achica distancias, salta sobre receptor",
      "Entonces: central rompe línea con pase largo cruzado hacia extremo opuesto",
    ],
    conclusion: "La ventaja no nace del pase largo. Nace de la acumulación previa.",
  },
  {
    id: 3,
    titulo: "Fijar Profundidad",
    subtitulo: "Amenazar espalda para generar tiempo",
    principio: "Uno de los conceptos más subestimados. Cuando el delantero amenaza constantemente profundidad: la línea defensiva retrocede, aparece tiempo entre líneas, crece el espacio para interiores. Aunque el pase nunca llegue.",
    situacion: [
      "Delantero fija centrales atacando permanentemente la espalda",
      "Entonces: centrales no pueden anticipar, pivote rival duda",
      "Interior recibe libre delante de mediocentros",
    ],
    conclusion: "La amenaza profunda organiza toda la estructura rival.",
  },
];

const MANUAL_BASICO = [
  {
    num: 1,
    titulo: "El objetivo del modelo",
    contenido: "El juego de posición busca dominar el partido mediante: la ocupación racional del espacio, la circulación inteligente del balón, y la generación constante de superioridades. La posesión no es un fin estético: es una herramienta para controlar emocional y tácticamente al rival.",
  },
  {
    num: 2,
    titulo: "Ocupación racional del espacio",
    contenido: "Cada jugador debe ocupar una zona útil para: generar líneas de pase, ampliar el campo, crear intervalos, y sostener equilibrio colectivo. La correcta ubicación de los jugadores permite: continuidad, conexiones, y control espacial.",
  },
  {
    num: 3,
    titulo: "Superioridades",
    contenido: "El objetivo permanente es liberar un jugador. Tipos: numérica, posicional, cualitativa, dinámica. La circulación debe provocar: dudas, saltos, desorden, y espacios libres.",
  },
  {
    num: 4,
    titulo: "El hombre libre",
    contenido: "Todo ataque debe buscar encontrar al jugador sin presión. El balón circula para: atraer rivales, fijar marcas, y liberar ventajas. El hombre libre representa la ventaja táctica del sistema.",
  },
  {
    num: 5,
    titulo: "Fijar para liberar",
    contenido: "Un jugador ocupa o amenaza una zona para liberar otra. Puede fijarse: por amplitud, por dentro, o por profundidad. La función principal es manipular comportamientos defensivos.",
  },
  {
    num: 6,
    titulo: "El tercer hombre",
    contenido: "El pase intermedio elimina presión y libera una nueva línea. Secuencia típica: Central → pivote → interior libre. Objetivo: superar líneas, acelerar circulación, y progresar colectivamente.",
  },
  {
    num: 7,
    titulo: "Distancias de relación",
    contenido: "El equipo debe respetar distancias funcionales entre compañeros. Muy cerca: facilita presión rival. Muy lejos: rompe conexiones. La estructura debe permitir: apoyos constantes, velocidad asociativa, y continuidad del juego.",
  },
  {
    num: 8,
    titulo: "Presión tras pérdida",
    contenido: "La pérdida inicia inmediatamente la fase defensiva. El equipo debe: reaccionar rápido, rodear zona de pérdida, recuperar cerca, impedir transición rival. La organización ofensiva debe preparar la recuperación.",
  },
  {
    num: 9,
    titulo: "Jugar a lo que se ve",
    contenido: "El futbolista debe interpretar: tiempo, espacio, presión, orientación rival, ventajas contextuales. No ejecutar mecánicamente. El jugador debe comprender e interpretar el juego constantemente.",
  },
  {
    num: 10,
    titulo: "El equipo como organismo",
    contenido: "El equipo viaja junto. La pelota organiza: desplazamientos, alturas, presiones, coberturas. Todos los movimientos deben sostener: equilibrio, compactación, control, y relaciones colectivas.",
  },
  {
    num: 11,
    titulo: "Principios emocionales del modelo",
    contenido: "El juego de posición también busca: confianza, control emocional, autoridad psicológica, identidad colectiva. El rival debe sentirse: incómodo, desordenado, cansado mentalmente.",
  },
];

const PRINCIPIOS_RESUMEN = [
  "Ocupar racionalmente los espacios",
  "Mantener correcta ubicación colectiva",
  "Generar superioridades constantes",
  "Encontrar permanentemente al hombre libre",
  "Fijar para liberar espacios y ventajas",
  "Utilizar el tercer hombre para progresar",
  "Respetar distancias de relación",
  "Atacar preparados para defender",
  "Presionar inmediatamente tras pérdida",
  "Jugar a lo que se ve",
  "Interpretar contexto y ventajas",
  "Viajar juntos como estructura colectiva",
  "Mantener equilibrio ofensivo y defensivo",
  "Utilizar el balón como organizador colectivo",
  "Manipular emocionalmente al rival mediante el control del juego",
];

export default function ManualModelo() {
  const [expandido, setExpandido] = useState(null);

  return (
    <div className="bg-ink-900 min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-bone/10">
        <div className="container-x max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">Documentación Técnica</div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black text-bone leading-tight tracking-tighter mb-6">
              Manual del <span className="text-gold-500">Modelo</span>
            </h1>
            <p className="text-xl text-bone/70 leading-relaxed mb-8">
              Fundamentos conceptuales del juego de posición. Principios, situaciones tácticas y aplicación práctica del modelo.
            </p>

            {/* Quote central */}
            <div className="p-6 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-l-4 border-gold-500 rounded-r-2xl">
              <p className="font-display text-2xl font-bold text-bone leading-tight italic">
                "El juego de posición no se trata solamente de mover la pelota. Se trata de mover rivales."
              </p>
              <p className="text-bone/60 mt-4">
                La fijación es la capacidad de manipular comportamientos defensivos mediante ubicación, amenaza y relaciones espaciales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conceptos de Fijación */}
      <section className="py-24 md:py-32 border-b border-bone/10">
        <div className="container-x max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-bone mb-4">
              Conceptos de Fijación
            </h2>
            <p className="text-bone/60 text-lg">
              Tres formas de manipular la estructura defensiva rival
            </p>
          </motion.div>

          <div className="space-y-8">
            {CONCEPTOS_FIJACION.map((concepto, index) => (
              <motion.div
                key={concepto.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark border-l-4 border-gold-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-3xl font-black text-gold-400">
                      {concepto.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-bold text-bone mb-2">
                      {concepto.titulo}
                    </h3>
                    <p className="text-gold-400 text-lg italic mb-4">
                      "{concepto.subtitulo}"
                    </p>
                    <p className="text-bone/80 leading-relaxed">
                      {concepto.principio}
                    </p>
                  </div>
                </div>

                {/* Situación de juego */}
                <div className="p-6 bg-ink-800/50 rounded-xl border border-bone/10">
                  <h4 className="font-bold text-bone mb-3 uppercase tracking-wide text-sm">
                    Situación de juego
                  </h4>
                  <ul className="space-y-2">
                    {concepto.situacion.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-bone/70">
                        <span className="text-gold-400 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-bone/10">
                    <p className="font-display text-lg font-bold text-gold-400 italic">
                      {concepto.conclusion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote de cierre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 rounded-2xl text-center"
          >
            <p className="font-display text-2xl md:text-3xl font-bold text-bone leading-tight">
              El gran equipo no juega donde está la pelota.<br />
              <span className="text-gold-400">Juega donde aparecerá la ventaja.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manual Básico - 11 Principios */}
      <section className="py-24 md:py-32 border-b border-bone/10">
        <div className="container-x max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-bone mb-4">
              Manual Básico del <span className="text-gold-500">Juego de Posición</span>
            </h2>
            <p className="text-bone/60 text-lg max-w-2xl mx-auto">
              Once principios fundamentales que estructuran el modelo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {MANUAL_BASICO.map((principio, index) => (
              <motion.div
                key={principio.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-dark hover:border-gold-500/50 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                    <span className="font-display text-2xl font-black text-gold-400">
                      {String(principio.num).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-bone capitalize">
                    {principio.titulo}
                  </h3>
                </div>
                <p className="text-bone/70 leading-relaxed text-sm">
                  {principio.contenido}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principios - Resumen */}
      <section className="py-24 md:py-32">
        <div className="container-x max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-bone mb-4">
              Principios del Juego de Posición
            </h2>
            <p className="text-bone/60 text-lg">
              Síntesis operativa del modelo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark border-l-4 border-gold-500"
          >
            <div className="space-y-3">
              {PRINCIPIOS_RESUMEN.map((principio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gold-500/5 transition-colors"
                >
                  <span className="text-gold-400 font-bold flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-bone/90 font-medium">
                    {principio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
