import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "../i18n/LanguageContext.jsx";

const COPY = {
  es: {
    eyebrow: "Documentación Técnica",
    backToEssay: "Antes leé el Ensayo Filosófico",
    heroTitle: (
      <>
        Manual del <span className="text-gold-500">Modelo</span>
      </>
    ),
    heroLead:
      "Fundamentos conceptuales del juego de posición. Principios, situaciones tácticas y aplicación práctica del modelo.",
    philosophy: (
      <>
        <span className="block">
          El verdadero juego de posición no empieza con la pelota.<br />
          <strong className="text-gold-400">Empieza con la cabeza.</strong>
        </span>

        <span className="block">
          Muchos equipos creen que jugar bien es dar muchos pases. No.<br />
          Jugar bien es entender dónde ubicarse, cuándo atraer, cuándo fijar y cómo generar superioridades para que el rival empiece a correr detrás de nuestras decisiones.
        </span>

        <span className="block font-display text-xl text-gold-400 font-bold">
          El balón debe ordenar al equipo y desordenar emocionalmente al adversario.<br />
          Ahí nace el dominio real.
        </span>

        <span className="block">
          Los grandes equipos no juegan desesperados.<br />
          Juegan con <strong className="text-bone">estructura</strong>, con <strong className="text-bone">sentido</strong> y con <strong className="text-bone">inteligencia colectiva</strong>.
        </span>

        <span className="block">
          Cuando un jugador comprende el espacio, deja de correr por necesidad y empieza a moverse con intención.
        </span>

        <span className="block text-bone/70 italic">
          El fútbol moderno cada vez exige menos improvisación vacía y más comprensión del juego.
        </span>
      </>
    ),
    heroQuote:
      '"El juego de posición no se trata solamente de mover la pelota. Se trata de mover rivales."',
    heroQuoteSub:
      "La fijación es la capacidad de manipular comportamientos defensivos mediante ubicación, amenaza y relaciones espaciales.",
    fijacionTitle: "Conceptos de Fijación",
    fijacionLead: "Tres formas de manipular la estructura defensiva rival",
    situacionLabel: "Situación de juego",
    fijacionClosing: (
      <>
        El gran equipo no juega donde está la pelota.<br />
        <span className="text-gold-400">Juega donde aparecerá la ventaja.</span>
      </>
    ),
    manualTitle: (
      <>
        Manual Básico del <span className="text-gold-500">Juego de Posición</span>
      </>
    ),
    manualLead: "Quince principios fundamentales que estructuran el modelo",
    apuntesTitle: (
      <>
        Apuntes <span className="text-gold-500">Prácticos</span>
      </>
    ),
    apuntesLead: "Conceptos tácticos aplicados con ejemplos en video",
    videoPending: "Video pendiente",
    videoComingSoon: (id) => `Apunte #${id} - Video próximamente`,
    resumenTitle: "Principios del Juego de Posición",
    resumenLead: "Síntesis operativa del modelo",
    conceptosFijacion: [
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
    ],
    manualBasico: [
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
        titulo: "Atacar preparados para defender",
        contenido: "La organización ofensiva debe preparar la futura recuperación. El equipo ataca manteniendo equilibrio estructural, distancias correctas y ubicaciones que faciliten la presión inmediata tras pérdida. No existe separación total entre ataque y defensa.",
      },
      {
        num: 9,
        titulo: "Presión tras pérdida",
        contenido: "La pérdida inicia inmediatamente la fase defensiva. El equipo debe: reaccionar rápido, rodear zona de pérdida, recuperar cerca, impedir transición rival. La organización ofensiva debe preparar la recuperación.",
      },
      {
        num: 10,
        titulo: "Jugar a lo que se ve",
        contenido: "El futbolista debe interpretar: tiempo, espacio, presión, orientación rival, ventajas contextuales. No ejecutar mecánicamente. El jugador debe comprender e interpretar el juego constantemente.",
      },
      {
        num: 11,
        titulo: "Interpretar contexto y ventajas",
        contenido: "Cada situación del juego presenta ventajas específicas según: posición rival, espacios disponibles, momento del partido, y estado físico. El jugador debe leer constantemente el contexto para identificar dónde aparece la ventaja táctica.",
      },
      {
        num: 12,
        titulo: "Viajar juntos como estructura colectiva",
        contenido: "El equipo viaja junto. La pelota organiza: desplazamientos, alturas, presiones, coberturas. Todos los movimientos deben sostener: equilibrio, compactación, control, y relaciones colectivas. El equipo se mueve como un organismo único.",
      },
      {
        num: 13,
        titulo: "Mantener equilibrio ofensivo y defensivo",
        contenido: "La estructura debe garantizar equilibrio permanente entre capacidad ofensiva y seguridad defensiva. Ubicaciones, alturas y relaciones se ajustan para sostener ambas fases simultáneamente, evitando exposición excesiva.",
      },
      {
        num: 14,
        titulo: "Utilizar el balón como organizador colectivo",
        contenido: "La pelota no solo inicia ataques. La pelota organiza: las distancias, las alturas, las relaciones, las coberturas, la presión futura. El balón es el organizador central del comportamiento colectivo del equipo.",
      },
      {
        num: 15,
        titulo: "Manipular emocionalmente al rival",
        contenido: "El juego de posición también busca: confianza, control emocional, autoridad psicológica, identidad colectiva. El rival debe sentirse: incómodo, desordenado, cansado mentalmente. El control del balón genera control emocional del partido.",
      },
    ],
    apuntes: [
      {
        id: 1,
        categoria: "EQUIPO",
        titulo: "Viajar juntos: La regla de los 5 segundos",
        contenido: "El equipo debe tener claro el concepto de viajar juntos. Esto hace posible la norma de los 5 segundos que indica a los jugadores cercanos a la pérdida ir a MÁXIMA velocidad a recuperar. En esta situación todo el resto del equipo se vuelca hacia la pelota mínimo 5 metros (cierre de jugadores opuestos). Esto facilita que podamos estar más juntos a una posible salida rival de la presión.",
        quote: "Viajar juntos: 5 segundos, máxima velocidad",
        videoId: "AhDtsUIvk5Y",
      },
      {
        id: 2,
        categoria: "EQUIPO",
        titulo: "La pelota nos organiza",
        contenido: "La pelota no solo inicia ataques. La pelota nos organiza: las distancias, las alturas, las relaciones, las coberturas, la presión futura. Por eso no existe separación total entre ataque y defensa, el equipo se posiciona pensando en ambos momentos simultáneamente. Idea central: Atacamos preparados para defender. Defendemos preparados para atacar. Esto genera: continuidad estructural, menor desorganización, mejores transiciones.",
        quote: "Atacamos preparados para defender. Defendemos preparados para atacar.",
        videoId: "OcVw1KNfF3U",
      },
      {
        id: 3,
        categoria: "INDIVIDUAL",
        titulo: "La posición genera ventajas",
        contenido: "La posición sirve principalmente para generar ventajas. La pelota llega al jugador y no al revés. Respetar distancias de relación, jugar a partir de mi posición y confiar en el pase de mi compañero para que me llegue con cierta ventaja, saber moverme dentro de espacios dinámicos, que se abren y cierran según la interacción del rival, sin invadir espacios de compañeros. Y dentro de esos espacios perfilar bien mi cuerpo con la intención de una jugada futura aprovechando mi posición es el objetivo.",
        quote: "La pelota llega al jugador, no al revés",
        videoId: "cyS-CSZ-hVQ",
      },
    ],
    principiosResumen: [
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
    ],
  },
  en: {
    eyebrow: "Technical Documentation",
    backToEssay: "First read the Philosophical Essay",
    heroTitle: (
      <>
        The Model <span className="text-gold-500">Manual</span>
      </>
    ),
    heroLead:
      "Conceptual foundations of positional play. Principles, tactical situations and the practical application of the model.",
    philosophy: (
      <>
        <span className="block">
          True positional play doesn't start with the ball.<br />
          <strong className="text-gold-400">It starts with the mind.</strong>
        </span>

        <span className="block">
          Many teams believe that playing well means stringing together passes. It doesn't.<br />
          Playing well means understanding where to position yourself, when to draw opponents in, when to pin them and how to create superiority so the opponent starts chasing our decisions.
        </span>

        <span className="block font-display text-xl text-gold-400 font-bold">
          The ball must organize our team and emotionally disorganize the opponent.<br />
          That is where real dominance is born.
        </span>

        <span className="block">
          Great teams don't play in a panic.<br />
          They play with <strong className="text-bone">structure</strong>, with <strong className="text-bone">purpose</strong> and with <strong className="text-bone">collective intelligence</strong>.
        </span>

        <span className="block">
          When a player understands space, they stop running out of necessity and start moving with intention.
        </span>

        <span className="block text-bone/70 italic">
          Modern football demands less empty improvisation and more understanding of the game.
        </span>
      </>
    ),
    heroQuote:
      '"Positional play isn\'t only about moving the ball. It\'s about moving opponents."',
    heroQuoteSub:
      "Pinning is the ability to manipulate defensive behaviour through positioning, threat and spatial relationships.",
    fijacionTitle: "Pinning Concepts",
    fijacionLead: "Three ways to manipulate the opponent's defensive structure",
    situacionLabel: "Game situation",
    fijacionClosing: (
      <>
        The great team doesn't play where the ball is.<br />
        <span className="text-gold-400">It plays where the advantage will appear.</span>
      </>
    ),
    manualTitle: (
      <>
        Basic Manual of <span className="text-gold-500">Positional Play</span>
      </>
    ),
    manualLead: "Fifteen fundamental principles that structure the model",
    apuntesTitle: (
      <>
        Practical <span className="text-gold-500">Notes</span>
      </>
    ),
    apuntesLead: "Tactical concepts applied with video examples",
    videoPending: "Video pending",
    videoComingSoon: (id) => `Note #${id} - Video coming soon`,
    resumenTitle: "Principles of Positional Play",
    resumenLead: "An operational summary of the model",
    conceptosFijacion: [
      {
        id: 1,
        titulo: "Pinning through Width",
        subtitulo: "Stretching wide to pull the opponent's structure apart",
        principio: "The winger holds maximum width to stop the opposing full-back from tucking inside. That's where the first advantage appears: if the full-back can't tuck in, the opposing inside midfielder ends up too far from the half-space.",
        situacion: [
          "Build-up in a 3-2-5 shape",
          "Left winger hugging the touchline",
          "Opposing full-back forced to respect the width",
          "Left inside midfielder receives between the opposing full-back and midfielder",
        ],
        conclusion: "The winger may never even touch the ball. But his position frees up the inside channel.",
      },
      {
        id: 2,
        titulo: "Pinning through the Inside",
        subtitulo: "Drawing them in to free the far side",
        principio: "Here the objective changes: we cluster players inside to attract pressure and free the weak side. The opponent collapses inward. That's when the switch of play appears.",
        situacion: [
          "The number 5 plays with the right inside midfielder and a false winger tucked inside",
          "The opponent closes the inside, compresses space and jumps onto the receiver",
          "Then: the centre-back breaks the line with a long diagonal pass to the opposite winger",
        ],
        conclusion: "The advantage isn't born from the long pass. It's born from the build-up that came before.",
      },
      {
        id: 3,
        titulo: "Pinning through Depth",
        subtitulo: "Threatening in behind to create time",
        principio: "One of the most underrated concepts. When the striker constantly threatens in behind: the defensive line drops, time appears between the lines, and space grows for the inside midfielders. Even if the pass never arrives.",
        situacion: [
          "The striker pins the centre-backs by constantly attacking the space in behind",
          "Then: the centre-backs can't step out to intercept, the opposing pivot hesitates",
          "The inside midfielder receives free in front of the central midfielders",
        ],
        conclusion: "The threat in behind organizes the opponent's entire structure.",
      },
    ],
    manualBasico: [
      {
        num: 1,
        titulo: "The objective of the model",
        contenido: "Positional play seeks to dominate the match through: the rational occupation of space, intelligent ball circulation, and the constant creation of superiority. Possession is not an aesthetic end in itself: it's a tool to control the opponent emotionally and tactically.",
      },
      {
        num: 2,
        titulo: "Rational occupation of space",
        contenido: "Every player must occupy a useful zone in order to: create passing lines, stretch the pitch, open up channels, and sustain collective balance. The correct positioning of players enables: continuity, connections, and spatial control.",
      },
      {
        num: 3,
        titulo: "Superiority",
        contenido: "The permanent objective is to free up a player. Types: numerical, positional, qualitative, dynamic. Ball circulation must provoke: doubt, opponents stepping out, disorder, and free space.",
      },
      {
        num: 4,
        titulo: "The free man",
        contenido: "Every attack must seek out the player who has no pressure on him. The ball circulates to: attract opponents, pin markers, and free up advantages. The free man represents the system's tactical advantage.",
      },
      {
        num: 5,
        titulo: "Pinning to free up space",
        contenido: "A player occupies or threatens one zone in order to free up another. Pinning can happen: through width, through the inside, or through depth. Its main function is to manipulate defensive behaviour.",
      },
      {
        num: 6,
        titulo: "The third man",
        contenido: "The intermediate pass eliminates pressure and frees up a new line. Typical sequence: centre-back → pivot → free inside midfielder. Objective: break lines, speed up ball circulation, and progress collectively.",
      },
      {
        num: 7,
        titulo: "Relational distances",
        contenido: "The team must respect functional distances between team-mates. Too close: it makes the opponent's press easier. Too far: it breaks the connections. The structure must allow for: constant support options, combination speed, and continuity of play.",
      },
      {
        num: 8,
        titulo: "Attacking while prepared to defend",
        contenido: "The attacking organization must prepare the future ball recovery. The team attacks while maintaining structural balance, correct distances and positions that make counter-pressing immediate after a loss. There is no total separation between attack and defence.",
      },
      {
        num: 9,
        titulo: "Counter-pressing after a loss",
        contenido: "Losing the ball immediately begins the defensive phase. The team must: react quickly, surround the zone of the loss, win it back close to where it was lost, and prevent the opponent's transition. The attacking organization must prepare the recovery.",
      },
      {
        num: 10,
        titulo: "Playing what you see",
        contenido: "The player must read: time, space, pressure, the opponent's orientation, and contextual advantages. Not execute mechanically. The player must constantly understand and interpret the game.",
      },
      {
        num: 11,
        titulo: "Reading the context and advantages",
        contenido: "Every situation in the game presents specific advantages depending on: the opponent's position, available space, the moment of the match, and physical condition. The player must constantly read the context to identify where the tactical advantage appears.",
      },
      {
        num: 12,
        titulo: "Moving together as a collective structure",
        contenido: "The team moves together as a unit. The ball organizes: movements, heights, presses, covering. Every movement must sustain: balance, compactness, control, and collective relationships. The team moves as a single organism.",
      },
      {
        num: 13,
        titulo: "Maintaining attacking and defensive balance",
        contenido: "The structure must guarantee permanent balance between attacking capacity and defensive security. Positions, heights and relationships are adjusted to sustain both phases simultaneously, avoiding excessive exposure.",
      },
      {
        num: 14,
        titulo: "Using the ball as a collective organizer",
        contenido: "The ball doesn't only start attacks. The ball organizes: the distances, the heights, the relationships, the covering, the future press. The ball is the central organizer of the team's collective behaviour.",
      },
      {
        num: 15,
        titulo: "Manipulating the opponent emotionally",
        contenido: "Positional play also seeks: confidence, emotional control, psychological authority, collective identity. The opponent should feel: uncomfortable, disorganized, mentally tired. Controlling the ball creates emotional control of the match.",
      },
    ],
    apuntes: [
      {
        id: 1,
        categoria: "TEAM",
        titulo: "Moving together: The 5-second rule",
        contenido: "The team must be clear on the concept of moving together as a unit. This makes the 5-second rule possible, which tells the players nearest to the loss to go at MAXIMUM speed to win the ball back. In this situation the entire rest of the team shifts toward the ball at least 5 metres (with players on the far side tucking in). This makes it easier for us to stay compact against any attempt by the opponent to play out of the press.",
        quote: "Moving together: 5 seconds, maximum speed",
        videoId: "AhDtsUIvk5Y",
      },
      {
        id: 2,
        categoria: "TEAM",
        titulo: "The ball organizes us",
        contenido: "The ball doesn't only start attacks. The ball organizes us: the distances, the heights, the relationships, the covering, the future press. That's why there is no total separation between attack and defence; the team positions itself thinking about both moments simultaneously. Central idea: We attack prepared to defend. We defend prepared to attack. This creates: structural continuity, less disorganization, better transitions.",
        quote: "We attack prepared to defend. We defend prepared to attack.",
        videoId: "OcVw1KNfF3U",
      },
      {
        id: 3,
        categoria: "INDIVIDUAL",
        titulo: "Positioning creates advantages",
        contenido: "Positioning mainly serves to create advantages. The ball comes to the player, not the other way around. Respecting relational distances, playing from my position and trusting my team-mate's pass so it reaches me with a certain advantage, knowing how to move within dynamic spaces that open and close according to the opponent's interaction, without invading my team-mates' spaces. And within those spaces, setting my body well with the intention of a future play, taking advantage of my position, is the objective.",
        quote: "The ball comes to the player, not the other way around",
        videoId: "cyS-CSZ-hVQ",
      },
    ],
    principiosResumen: [
      "Occupy spaces rationally",
      "Maintain correct collective positioning",
      "Create constant superiority",
      "Permanently find the free man",
      "Pin to free up space and advantages",
      "Use the third man to progress",
      "Respect relational distances",
      "Attack while prepared to defend",
      "Counter-press immediately after a loss",
      "Play what you see",
      "Read the context and advantages",
      "Move together as a collective structure",
      "Maintain attacking and defensive balance",
      "Use the ball as a collective organizer",
      "Manipulate the opponent emotionally through control of the game",
    ],
  },
};

export default function ManualModelo() {
  const { lang } = useLang();
  const t = COPY[lang];
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
            <div className="eyebrow mb-5">{t.eyebrow}</div>

            <a
              href="/el-arte-de-ser-protagonistas"
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gold-500/30 text-xs text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 transition-colors group"
            >
              <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>{t.backToEssay}</span>
            </a>

            <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black text-bone leading-tight tracking-tighter mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-bone/70 leading-relaxed mb-8">
              {t.heroLead}
            </p>

            {/* Filosofía Profunda */}
            <div className="mt-10 p-8 bg-gradient-to-br from-ink-800 to-ink-900 border border-gold-500/30 rounded-2xl">
              <p className="text-bone/90 text-lg leading-relaxed space-y-4">
                {t.philosophy}
              </p>
            </div>

            {/* Quote central */}
            <div className="p-6 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-l-4 border-gold-500 rounded-r-2xl">
              <p className="font-display text-2xl font-bold text-bone leading-tight italic">
                {t.heroQuote}
              </p>
              <p className="text-bone/60 mt-4">
                {t.heroQuoteSub}
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
              {t.fijacionTitle}
            </h2>
            <p className="text-bone/60 text-lg">
              {t.fijacionLead}
            </p>
          </motion.div>

          <div className="space-y-8">
            {t.conceptosFijacion.map((concepto, index) => (
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
                    {t.situacionLabel}
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
              {t.fijacionClosing}
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
              {t.manualTitle}
            </h2>
            <p className="text-bone/60 text-lg max-w-2xl mx-auto">
              {t.manualLead}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.manualBasico.map((principio, index) => (
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

      {/* Apuntes Prácticos con Videos */}
      <section className="py-24 md:py-32 border-b border-bone/10">
        <div className="container-x max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-bone mb-4">
              {t.apuntesTitle}
            </h2>
            <p className="text-bone/60 text-lg">
              {t.apuntesLead}
            </p>
          </motion.div>

          <div className="space-y-6">
            {t.apuntes.map((apunte, index) => (
              <motion.div
                key={apunte.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark border-l-4 border-gold-500"
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
                </div>

                <p className="text-bone/80 leading-relaxed mb-6">
                  {apunte.contenido}
                </p>

                <div className="p-4 bg-gold-500/5 border-l-4 border-gold-500 rounded-r-xl mb-6">
                  <p className="font-display text-lg font-bold text-gold-400 italic">
                    "{apunte.quote}"
                  </p>
                </div>

                {apunte.videoId ? (
                  <div className="rounded-xl overflow-hidden border-2 border-gold-500/30 bg-ink-950">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${apunte.videoId}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  <div className="bg-ink-800 rounded-xl overflow-hidden border-2 border-dashed border-gold-500/30">
                    <div className="aspect-video flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                      <p className="text-gold-400 font-bold text-lg mb-2">
                        {t.videoPending}
                      </p>
                      <p className="text-bone/50 text-sm">
                        {t.videoComingSoon(apunte.id)}
                      </p>
                    </div>
                  </div>
                )}
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
              {t.resumenTitle}
            </h2>
            <p className="text-bone/60 text-lg">
              {t.resumenLead}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark border-l-4 border-gold-500"
          >
            <div className="space-y-3">
              {t.principiosResumen.map((principio, index) => (
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
