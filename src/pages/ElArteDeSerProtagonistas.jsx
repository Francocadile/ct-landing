import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

const PILARES = [
  "Correcta ocupación de espacios",
  "Juntarse a través del pase",
  "Generar superioridades numéricas y posicionales",
  "Atraer rivales para liberar compañeros",
  "Ser anchos para ser profundos",
];

const STATS_ABP = [
  { value: 30, label: "Goles de córner" },
  { value: 18, label: "Goles de penal" },
  { value: 14, label: "Goles de tiro libre" },
  { value: 68, label: "Total ABP 2024-25", accent: true },
];

function PullQuote({ children, author, variant = "aside" }) {
  const base = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  if (variant === "display") {
    return (
      <motion.figure {...base} className="my-16 md:my-24 text-center">
        <blockquote className="font-display font-medium text-3xl md:text-5xl lg:text-6xl text-bone leading-[1.1] tracking-tighter italic">
          <span className="text-gold-500/40 mr-1">"</span>
          {children}
          <span className="text-gold-500/40 ml-1">"</span>
        </blockquote>
        <figcaption className="mt-8 eyebrow text-gold-400">
          — {author}
        </figcaption>
      </motion.figure>
    );
  }

  if (variant === "inline") {
    return (
      <motion.figure
        {...base}
        className="my-10 pl-6 md:pl-8 border-l-2 border-bone/20"
      >
        <blockquote className="font-display text-lg md:text-xl text-bone/90 leading-relaxed">
          {children}
        </blockquote>
        <figcaption className="mt-3 text-sm text-bone/50">
          — {author}
        </figcaption>
      </motion.figure>
    );
  }

  if (variant === "card") {
    return (
      <motion.figure
        {...base}
        className="my-16 md:my-20 relative p-8 md:p-14 bg-gradient-to-br from-gold-500/15 to-gold-600/5 border border-gold-500/30 rounded-2xl text-center overflow-hidden"
      >
        <div className="absolute top-4 left-6 text-gold-500/15 text-7xl md:text-9xl font-display leading-none select-none pointer-events-none">
          "
        </div>
        <blockquote className="relative font-display font-medium text-2xl md:text-3xl lg:text-4xl text-bone leading-tight italic">
          {children}
        </blockquote>
        <figcaption className="relative mt-6 eyebrow text-gold-400">
          — {author}
        </figcaption>
      </motion.figure>
    );
  }

  // aside (default)
  return (
    <motion.figure
      {...base}
      className="my-12 p-6 md:p-8 bg-gradient-to-br from-gold-500/10 to-transparent border-l-4 border-gold-500 rounded-r-2xl"
    >
      <blockquote className="font-display text-xl md:text-2xl text-bone leading-snug italic">
        {children}
      </blockquote>
      <figcaption className="mt-4 text-sm text-bone/60">
        — {author}
      </figcaption>
    </motion.figure>
  );
}

function StatCounter({ value, label, accent = false }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`p-6 md:p-8 rounded-2xl text-center ${
        accent
          ? "bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-2 border-gold-500/40 shadow-glow"
          : "bg-ink-800 border border-bone/10"
      }`}
    >
      <div
        className={`font-display font-black leading-none tracking-tightest tabular-nums ${
          accent
            ? "text-gold-400 text-6xl md:text-7xl"
            : "text-bone text-5xl md:text-6xl"
        }`}
      >
        {n}
      </div>
      <div
        className={`mt-3 text-[11px] uppercase tracking-[0.2em] font-semibold ${
          accent ? "text-gold-400" : "text-bone/60"
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}

function LiteYouTube({ videoId, title }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="aspect-video rounded-xl overflow-hidden border border-bone/10 bg-ink-950">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Reproducir: ${title}`}
      className="group relative aspect-video w-full rounded-xl overflow-hidden border border-bone/10 bg-ink-800 cursor-pointer"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold-500/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-elevated">
          <Play size={24} className="text-ink-900 ml-0.5" fill="currentColor" />
        </div>
      </div>
    </button>
  );
}

function VideoBlock({ title, videoId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12 md:mt-16"
    >
      <div className="eyebrow text-gold-500/70 mb-3">
        Ver en YouTube · Material complementario
      </div>
      <h3 className="font-display text-xl md:text-2xl text-bone mb-5 leading-tight">
        {title}
      </h3>
      <LiteYouTube videoId={videoId} title={title} />
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-sm text-gold-400 hover:text-gold-500 transition-colors"
      >
        Ver en YouTube
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}

export default function Protagonistas() {
  return (
    <div className="bg-ink-900 min-h-screen">
      {/* ============== HERO EDITORIAL ============== */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 border-b border-bone/10">
        <div className="container-x max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-6">Ensayo · Una reseña conceptual</div>

            <h1 className="font-display font-black text-[clamp(2.5rem,8vw,6rem)] text-bone leading-[0.95] tracking-tighter mb-6">
              El Arte de Ser{" "}
              <span className="italic font-medium text-gold-500">
                Protagonistas
              </span>
            </h1>

            <p className="font-display text-xl md:text-2xl text-bone/70 leading-relaxed italic mb-10">
              Una reseña conceptual sobre el Juego de Posición
            </p>

            {/* Metadatos editoriales */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-bone-400 mb-14">
              <span>Flavio Robatto</span>
              <span className="text-bone/30">·</span>
              <span>Mayo 2026</span>
              <span className="text-bone/30">·</span>
              <span>12 min lectura</span>
            </div>

            {/* Lead */}
            <p className="font-display text-xl md:text-2xl text-bone/85 leading-relaxed">
              Controlar el juego no es un estilo entre muchos. Es una convicción
              filosófica: la creencia de que el equipo que organiza mejor el
              espacio, mueve mejor la pelota y piensa más rápido que el rival,
              siempre tendrá ventaja. Esta es la idea que guía cada
              entrenamiento, cada estructura, cada decisión del Cuerpo Técnico
              Flavio Robatto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============== I · LA IDEA MADRE ============== */}
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">I · La idea madre</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              Protagonismo siempre
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed">
              <p>
                Antes de hablar de sistemas o de movimientos, existe una
                declaración de intenciones. En el dossier del Cuerpo Técnico se
                la llama la <em>"idea madre"</em>: siempre protagonizar los
                partidos a través de la posesión del balón, de local y de
                visitante, frente a cualquier rival. No como un recurso
                circunstancial, sino como identidad irreducible.
              </p>
              <p>
                Esta idea no nació en una pizarra. Es la herencia de una escuela
                de pensamiento que tiene en Pep Guardiola a su exponente más
                visible, pero cuyas raíces se hunden en Johan Cruyff, en
                Menotti, en Bielsa. Una escuela que entiende el fútbol como un
                problema de inteligencia colectiva. Guardiola, recogiendo esa
                herencia, la formula con voz propia:
              </p>
            </div>
          </motion.div>

          <PullQuote variant="display" author="Pep Guardiola">
            Cuando tenés la pelota, el rival no puede hacerte daño. Y cuando la
            perdés, la recuperás de inmediato. Eso es lo que quiero: un equipo
            que nunca te deje respirar.
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            Esta frase de Guardiola captura con precisión lo que el CT Robatto
            define como su modelo: la posesión no es un fin en sí mismo, sino
            la plataforma desde la cual se genera todo lo demás. El dossier lo
            explicita con claridad: <em>"La posesión del balón es el medio, no
            el fin."</em> Disponer de ella sirve para controlar el juego,
            desgastar al rival y, sobre todo, para crear tantas situaciones de
            gol como sea posible.
          </motion.p>

          <VideoBlock
            title="Identidad de juego reconocible: juego de posición — Club Bolívar 2025"
            videoId="Q9Qvj1zrYrY"
          />
        </div>
      </section>

      {/* ============== II · ¿QUÉ ES EL JUEGO DE POSICIÓN? ============== */}
      <section className="py-20 md:py-28 border-t border-bone/10">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">II · Fundamento</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              ¿Qué es el Juego de Posición?
            </h2>

            <p className="text-lg md:text-xl text-bone/75 leading-relaxed mb-12">
              El Juego de Posición no es sinónimo de tener la pelota por
              tenerla. Es una forma conceptual de jugar: avance armónico del
              balón, los jugadores y sus posiciones en el campo; creación de
              superioridades sobre las líneas adversarias; circulación para
              mover rivales y aprovechar los espacios que se generan.
            </p>
          </motion.div>

          {/* 5 pilares como lista editorial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="eyebrow text-bone/40 mb-6">
              Los cinco pilares — CT Robatto
            </div>
            <div className="divide-y divide-bone/10 border-y border-bone/10">
              {PILARES.map((titulo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-baseline gap-6 md:gap-10 py-5 md:py-7"
                >
                  <span className="font-display text-3xl md:text-5xl font-black text-gold-500 leading-none tabular-nums flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-bone leading-tight">
                    {titulo}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            El principio rector que sintetiza todo esto está expresado en el
            dossier con una sencillez filosófica poderosa: <em>"El balón se
            mueve hacia las ubicaciones de los jugadores, no los jugadores hacia
            la pelota."</em> Una idea que parece simple y que, sin embargo,
            requiere años de trabajo para volverse instinto colectivo.
          </motion.p>

          <PullQuote
            variant="aside"
            author="Johan Cruyff, referente de Guardiola y la escuela posicional"
          >
            El fútbol de posición implica que cada jugador sabe dónde están sus
            compañeros antes de recibir la pelota. Es una cuestión de geometría
            y de anticipación mental.
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            El CT Robatto traduce este principio en estructuras concretas: el
            equipo varía sus distribuciones espaciales en ataque —3-2-2-3,
            2-3-2-3, 3-4-3 en rombo, 4-2-1-3— no por capricho táctico, sino
            porque cada posicionamiento es una respuesta a las debilidades
            específicas del rival. La geometría cambia; la idea permanece.
          </motion.p>

          <VideoBlock
            title="Resultados de jugar bien al fútbol — Juego de Posición"
            videoId="rzfGXVbrTpw"
          />
        </div>
      </section>

      {/* ============== III · OBLIGACIÓN MORAL ============== */}
      <section className="py-20 md:py-28 border-t border-bone/10">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">III · Ética del juego</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              Jugar bien como obligación moral
            </h2>
            <p className="text-lg md:text-xl text-bone/75 leading-relaxed">
              Jorge Valdano fue uno de los primeros en articular con profundidad
              la dimensión ética del juego ofensivo. Para él, el fútbol no es
              solo un resultado, sino un espectáculo con responsabilidades hacia
              quien lo observa. Esta dimensión estética —el respeto por las
              formas— está presente con fuerza en la filosofía del CT Robatto.
            </p>
          </motion.div>

          <PullQuote variant="aside" author="Jorge Valdano">
            Ganar es importante, pero la forma en que se gana define la
            identidad de un equipo. El fútbol tiene una deuda con la belleza.
          </PullQuote>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            <p>
              El dossier del CT recoge esta convicción en términos casi
              idénticos: <em>"Para ganar primero hay que jugar bien. Los
              resultados son consecuencia del juego, del rendimiento y de la
              eficacia. Son consecuencia, sobre todo, de jugar bien."</em> No es
              resignación ante el resultado; es la certeza de que el camino
              correcto termina por producir los frutos correctos.
            </p>
            <p>
              Esta postura implica también un compromiso con el hincha. El
              dossier lo dice sin rodeos: el espectador es lo más importante que
              rodea al fútbol, más que el árbitro, más que el periodista. Jugar
              bien es también una forma de respeto hacia quien sufre y goza en
              las tribunas.
            </p>
          </motion.div>

          <PullQuote variant="inline" author="Jorge Valdano">
            Un equipo que juega bien se convierte en patrimonio de su gente. La
            gente no olvida al equipo que la hizo feliz.
          </PullQuote>

          <VideoBlock
            title="Jugar bien como obligación moral"
            videoId="eQyO2hf7PMo"
          />
        </div>
      </section>

      {/* ============== IV · BIELSA Y LA PRESIÓN ============== */}
      <section className="py-20 md:py-28 border-t border-bone/10">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">
              IV · Recuperar para seguir atacando
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              Bielsa y la presión
            </h2>
            <p className="text-lg md:text-xl text-bone/75 leading-relaxed">
              Marcelo Bielsa aportó al fútbol sudamericano una obsesión que hoy
              es moneda corriente en el fútbol de élite: la presión inmediata
              tras la pérdida, la negativa a resignar el protagonismo incluso
              sin pelota. Para Bielsa, defender es simplemente la antesala de
              volver a atacar.
            </p>
          </motion.div>

          <PullQuote variant="aside" author="Marcelo Bielsa">
            Crear muchas situaciones de gol y que no te creen muchas. Eso es
            jugar bien. Todo lo demás son consecuencias.
          </PullQuote>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed mb-16"
          >
            <p>
              Esta definición bielseana del buen fútbol —citada explícitamente
              por Robatto en entrevistas— se materializa en el dossier en lo que
              el cuerpo técnico denomina <em>"ser un equipo presionante"</em>.
              Al perder la pelota, el equipo intentará estar bien arriba para
              volver a recuperarla y seguir atacando. La presión no es
              defensiva: es la continuación del ataque por otros medios.
            </p>
            <p>
              Los resultados en términos de balón parado confirman que esta
              agresividad bien organizada tiene consecuencias concretas. Durante
              el ciclo 2024-2025 en Club Bolívar, el CT convirtió{" "}
              <strong className="text-gold-400 font-semibold">
                68 goles a través de acciones de pelota detenida
              </strong>
              : una cifra que refleja la capacidad del equipo para dominar
              situaciones específicas del juego gracias a la preparación previa
              y al estudio del rival.
            </p>
          </motion.div>
        </div>

        {/* Infografía 68 goles — container más ancho */}
        <div className="container-x max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow text-bone/40 mb-6 text-center">
              Balón parado · Ciclo 2024-25 · Club Bolívar
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {STATS_ABP.map((stat, i) => (
                <StatCounter
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  accent={stat.accent}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container-x max-w-3xl mt-14">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            El posicionamiento defensivo base —el 4-1-4-1— busca tapar pases
            frontales, limitar espacios entre líneas y mantener al equipo
            constantemente presionante. Las líneas se mantienen cortas, con una
            referencia de apenas 30 metros de profundidad, para que la presión
            sea siempre colectiva y nunca individual.
          </motion.p>

          <VideoBlock
            title="La táctica no es combinar números en un dibujo, sino saber qué hacer en cada momento"
            videoId="Gim8xdLkGuA"
          />
        </div>
      </section>

      {/* ============== V · IDENTIDAD COMO ANCLA ============== */}
      <section className="py-20 md:py-28 border-t border-bone/10">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">V · Bajo la adversidad</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              La identidad como ancla
            </h2>
            <p className="text-lg md:text-xl text-bone/75 leading-relaxed">
              Todo sistema de juego enfrenta su prueba más dura no cuando gana,
              sino cuando pierde. ¿Qué hace un equipo posicional cuando el
              resultado en contra lo tienta a abandonar su idea? La respuesta
              del CT Robatto es clara y está escrita en el dossier: el equipo
              debe contar con <em>"una identidad de juego reconocible, de la
              que los jugadores puedan apoyarse en momentos de incertidumbre y
              en la que crean fervientemente a pesar de las adversidades."</em>
            </p>
          </motion.div>

          <PullQuote variant="aside" author="Pep Guardiola">
            La identidad de un equipo es su escudo. Cuando las cosas van mal,
            los jugadores necesitan aferrarse a algo que conocen y en lo que
            creen. Sin identidad, el miedo gana.
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            Esta convicción se traduce en una exigencia concreta sobre el inicio
            de juego: siempre desde el arquero, siempre buscando la superioridad
            numérica, siempre con los once jugadores involucrados. No hay
            partido donde esta premisa se abandone. La salida desde atrás no es
            un recurso técnico; es una declaración de identidad.
          </motion.p>

          <PullQuote variant="inline" author="Marcelo Bielsa">
            La valentía en el fútbol no es correr más que el rival. Es animarse
            a jugar cuando el resultado aprieta, cuando el miedo te pide que
            patees largo.
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            El dossier enumera las condiciones que debe cumplir cada inicio de
            juego propio: convicción, valentía, paciencia y conocimiento
            táctico. No hay accidente en estas palabras. Jugar bien bajo
            presión requiere no solo habilidad técnica, sino fortaleza mental
            colectiva, cultivada partido a partido.
          </motion.p>

          <VideoBlock
            title="La identidad como ancla en la adversidad"
            videoId="LNCV2dXjR7U"
          />
        </div>
      </section>

      {/* ============== VI · EL ARQUERO ============== */}
      <section className="py-20 md:py-28 border-t border-bone/10">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">VI · Evolución 2024</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              El arquero como jugador número once
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed">
              <p>
                Una de las evoluciones más significativas en el modelo de juego
                del CT Robatto durante 2024 fue la incorporación sistemática
                del arquero al desarrollo del juego. Desde la segunda mitad de
                esa temporada, el guardavalla pasó a ser un componente activo
                de la primera línea de construcción, generando situaciones de
                superioridad en el mediocampo —habitual 4 vs. 2— que antes
                eran imposibles sin su participación.
              </p>
              <p>
                Esta decisión no es solo táctica. Es, también, filosófica.
                Guardiola lo entendió hace más de una década cuando comenzó a
                exigir a sus arqueros la misma calidad técnica que a sus
                defensores. El arquero que juega con los pies no es un arquero
                que hace algo extra: es un arquero que cumple su función
                completa en un equipo que posee la pelota.
              </p>
            </div>
          </motion.div>

          <PullQuote variant="inline" author="Pep Guardiola">
            Un portero que no puede jugar con los pies es como un centrocampista
            que no puede defender. Es la mitad de un jugador.
          </PullQuote>

          <VideoBlock
            title="Utilización del arquero en nuestro desarrollo del juego — Club Bolívar 2024"
            videoId="-EmhzlgpWug"
          />
        </div>
      </section>

      {/* ============== VII · FILOSOFÍA, NO SISTEMA (CIERRE) ============== */}
      <section className="py-20 md:py-28 border-t border-bone/10">
        <div className="container-x max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-5">VII · Cierre</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              Una filosofía,{" "}
              <span className="italic text-gold-500">no un sistema</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed">
              <p>
                Lo que distingue al Juego de Posición como lo concibe el CT
                Robatto de una mera preferencia táctica es su carácter
                filosófico. Las formaciones cambian —4-3-3, 4-2-1-3, 3-4-3—,
                los posicionamientos se adaptan partido a partido al rival de
                turno, las salidas varían en función de cómo presiona el
                contrario. Lo que no cambia es la convicción de fondo: el
                equipo que domina el balón y el espacio domina el partido.
              </p>
              <p>
                Valdano decía que el fútbol tiene una deuda con la belleza.
                Bielsa decía que jugar bien es crear muchas situaciones de gol y
                que no te las creen. Guardiola dice que cuando tenés la pelota,
                el rival no puede hacerte daño. El CT Robatto dice que la
                posesión es el medio, no el fin, y que los resultados son
                consecuencia de jugar bien.
              </p>
              <p>
                Son frases distintas que apuntan al mismo norte: un fútbol
                inteligente, colectivo, valiente. Un fútbol que no negocia su
                identidad frente a la adversidad. Un fútbol que cree que la
                mejor forma de ganar es, también, la más hermosa.
              </p>
            </div>
          </motion.div>

          <PullQuote variant="card" author="Jorge Valdano">
            El fútbol es el único deporte donde once hombres tienen que pensar
            como uno solo. Cuando lo logran, es la cosa más hermosa del mundo.
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-bone/85 leading-relaxed italic text-center"
          >
            Esa es, en definitiva, la ambición que subyace en cada página del
            dossier del CT Flavio Robatto: construir ese momento donde once
            hombres piensan como uno. Y hacerlo partido tras partido, en cada
            cancha, ante cualquier rival.
          </motion.p>

          <VideoBlock
            title="Una filosofía, no un sistema"
            videoId="udv8mgSONcE"
          />

          {/* CTA al Manual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 md:mt-20 text-center"
          >
            <a
              href="/manual-modelo"
              className="btn-gold inline-flex items-center gap-3"
            >
              <span>Del ensayo a la práctica · Manual del Modelo</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
