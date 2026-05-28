import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { useLang } from "../i18n/LanguageContext.jsx";

const COPY = {
  es: {
    pilares: [
      "Correcta ocupación de espacios",
      "Juntarse a través del pase",
      "Generar superioridades numéricas y posicionales",
      "Atraer rivales para liberar compañeros",
      "Ser anchos para ser profundos",
    ],
    statsAbp: [
      { value: 30, label: "Goles de córner" },
      { value: 18, label: "Goles de penal" },
      { value: 14, label: "Goles de tiro libre" },
      { value: 68, label: "Total ABP 2024-25", accent: true },
    ],

    // VideoBlock labels
    videoEyebrow: "Ver en YouTube · Material complementario",
    watchOnYouTube: "Ver en YouTube",
    playLabel: (title) => `Reproducir: ${title}`,

    // Hero
    heroEyebrow: "Ensayo · Una reseña conceptual",
    heroTitle: (
      <>
        El Arte de Ser{" "}
        <span className="italic font-medium text-gold-500">Protagonistas</span>
      </>
    ),
    heroSubtitle: "Una reseña conceptual sobre el Juego de Posición",
    heroAuthor: "Flavio Robatto",
    heroDate: "Mayo 2026",
    heroReadTime: "12 min lectura",
    heroLead: (
      <>
        Controlar el juego no es un estilo entre muchos. Es una convicción
        filosófica: la creencia de que el equipo que organiza mejor el espacio,
        mueve mejor la pelota y piensa más rápido que el rival, siempre tendrá
        ventaja. Esta es la idea que guía cada entrenamiento, cada estructura,
        cada decisión del Cuerpo Técnico Flavio Robatto.
      </>
    ),

    // I · La idea madre
    s1Eyebrow: "I · La idea madre",
    s1Title: "Protagonismo siempre",
    s1P1: (
      <>
        Antes de hablar de sistemas o de movimientos, existe una declaración de
        intenciones. En el dossier del Cuerpo Técnico se la llama la{" "}
        <em>"idea madre"</em>: siempre protagonizar los partidos a través de la
        posesión del balón, de local y de visitante, frente a cualquier rival.
        No como un recurso circunstancial, sino como identidad irreducible.
      </>
    ),
    s1P2: (
      <>
        Esta idea no nació en una pizarra. Es la herencia de una escuela de
        pensamiento que tiene en Pep Guardiola a su exponente más visible, pero
        cuyas raíces se hunden en Johan Cruyff, en Menotti, en Bielsa. Una
        escuela que entiende el fútbol como un problema de inteligencia
        colectiva. Guardiola, recogiendo esa herencia, la formula con voz
        propia:
      </>
    ),
    s1Quote: (
      <>
        Cuando tenés la pelota, el rival no puede hacerte daño. Y cuando la
        perdés, la recuperás de inmediato. Eso es lo que quiero: un equipo que
        nunca te deje respirar.
      </>
    ),
    s1QuoteAuthor: "Pep Guardiola",
    s1P3: (
      <>
        Esta frase de Guardiola captura con precisión lo que el CT Robatto
        define como su modelo: la posesión no es un fin en sí mismo, sino la
        plataforma desde la cual se genera todo lo demás. El dossier lo
        explicita con claridad:{" "}
        <em>"La posesión del balón es el medio, no el fin."</em> Disponer de
        ella sirve para controlar el juego, desgastar al rival y, sobre todo,
        para crear tantas situaciones de gol como sea posible.
      </>
    ),
    s1VideoTitle:
      "Identidad de juego reconocible: juego de posición — Club Bolívar 2025",

    // II · Fundamento
    s2Eyebrow: "II · Fundamento",
    s2Title: "¿Qué es el Juego de Posición?",
    s2P1: (
      <>
        El Juego de Posición no es sinónimo de tener la pelota por tenerla. Es
        una forma conceptual de jugar: avance armónico del balón, los jugadores
        y sus posiciones en el campo; creación de superioridades sobre las
        líneas adversarias; circulación para mover rivales y aprovechar los
        espacios que se generan.
      </>
    ),
    s2PilaresLabel: "Los cinco pilares — CT Robatto",
    s2P2: (
      <>
        El principio rector que sintetiza todo esto está expresado en el dossier
        con una sencillez filosófica poderosa:{" "}
        <em>
          "El balón se mueve hacia las ubicaciones de los jugadores, no los
          jugadores hacia la pelota."
        </em>{" "}
        Una idea que parece simple y que, sin embargo, requiere años de trabajo
        para volverse instinto colectivo.
      </>
    ),
    s2Quote: (
      <>
        El fútbol de posición implica que cada jugador sabe dónde están sus
        compañeros antes de recibir la pelota. Es una cuestión de geometría y de
        anticipación mental.
      </>
    ),
    s2QuoteAuthor: "Johan Cruyff, referente de Guardiola y la escuela posicional",
    s2P3: (
      <>
        El CT Robatto traduce este principio en estructuras concretas: el equipo
        varía sus distribuciones espaciales en ataque —3-2-2-3, 2-3-2-3, 3-4-3
        en rombo, 4-2-1-3— no por capricho táctico, sino porque cada
        posicionamiento es una respuesta a las debilidades específicas del
        rival. La geometría cambia; la idea permanece.
      </>
    ),
    s2VideoTitle: "Resultados de jugar bien al fútbol — Juego de Posición",

    // III · Ética del juego
    s3Eyebrow: "III · Ética del juego",
    s3Title: "Jugar bien como obligación moral",
    s3P1: (
      <>
        Jorge Valdano fue uno de los primeros en articular con profundidad la
        dimensión ética del juego ofensivo. Para él, el fútbol no es solo un
        resultado, sino un espectáculo con responsabilidades hacia quien lo
        observa. Esta dimensión estética —el respeto por las formas— está
        presente con fuerza en la filosofía del CT Robatto.
      </>
    ),
    s3Quote1: (
      <>
        Ganar es importante, pero la forma en que se gana define la identidad de
        un equipo. El fútbol tiene una deuda con la belleza.
      </>
    ),
    s3Quote1Author: "Jorge Valdano",
    s3P2: (
      <>
        El dossier del CT recoge esta convicción en términos casi idénticos:{" "}
        <em>
          "Para ganar primero hay que jugar bien. Los resultados son
          consecuencia del juego, del rendimiento y de la eficacia. Son
          consecuencia, sobre todo, de jugar bien."
        </em>{" "}
        No es resignación ante el resultado; es la certeza de que el camino
        correcto termina por producir los frutos correctos.
      </>
    ),
    s3P3: (
      <>
        Esta postura implica también un compromiso con el hincha. El dossier lo
        dice sin rodeos: el espectador es lo más importante que rodea al fútbol,
        más que el árbitro, más que el periodista. Jugar bien es también una
        forma de respeto hacia quien sufre y goza en las tribunas.
      </>
    ),
    s3Quote2: (
      <>
        Un equipo que juega bien se convierte en patrimonio de su gente. La
        gente no olvida al equipo que la hizo feliz.
      </>
    ),
    s3Quote2Author: "Jorge Valdano",
    s3VideoTitle: "Jugar bien como obligación moral",

    // IV · Bielsa y la presión
    s4Eyebrow: "IV · Recuperar para seguir atacando",
    s4Title: "Bielsa y la presión",
    s4P1: (
      <>
        Marcelo Bielsa aportó al fútbol sudamericano una obsesión que hoy es
        moneda corriente en el fútbol de élite: la presión inmediata tras la
        pérdida, la negativa a resignar el protagonismo incluso sin pelota. Para
        Bielsa, defender es simplemente la antesala de volver a atacar.
      </>
    ),
    s4Quote: (
      <>
        Crear muchas situaciones de gol y que no te creen muchas. Eso es jugar
        bien. Todo lo demás son consecuencias.
      </>
    ),
    s4QuoteAuthor: "Marcelo Bielsa",
    s4P2: (
      <>
        Esta definición bielseana del buen fútbol —citada explícitamente por
        Robatto en entrevistas— se materializa en el dossier en lo que el cuerpo
        técnico denomina <em>"ser un equipo presionante"</em>. Al perder la
        pelota, el equipo intentará estar bien arriba para volver a recuperarla
        y seguir atacando. La presión no es defensiva: es la continuación del
        ataque por otros medios.
      </>
    ),
    s4P3: (
      <>
        Los resultados en términos de balón parado confirman que esta
        agresividad bien organizada tiene consecuencias concretas. Durante el
        ciclo 2024-2025 en Club Bolívar, el CT convirtió{" "}
        <strong className="text-gold-400 font-semibold">
          68 goles a través de acciones de pelota detenida
        </strong>
        : una cifra que refleja la capacidad del equipo para dominar situaciones
        específicas del juego gracias a la preparación previa y al estudio del
        rival.
      </>
    ),
    s4StatsLabel: "Balón parado · Ciclo 2024-25 · Club Bolívar",
    s4P4: (
      <>
        El posicionamiento defensivo base —el 4-1-4-1— busca tapar pases
        frontales, limitar espacios entre líneas y mantener al equipo
        constantemente presionante. Las líneas se mantienen cortas, con una
        referencia de apenas 30 metros de profundidad, para que la presión sea
        siempre colectiva y nunca individual.
      </>
    ),
    s4VideoTitle:
      "La táctica no es combinar números en un dibujo, sino saber qué hacer en cada momento",

    // V · Bajo la adversidad
    s5Eyebrow: "V · Bajo la adversidad",
    s5Title: "La identidad como ancla",
    s5P1: (
      <>
        Todo sistema de juego enfrenta su prueba más dura no cuando gana, sino
        cuando pierde. ¿Qué hace un equipo posicional cuando el resultado en
        contra lo tienta a abandonar su idea? La respuesta del CT Robatto es
        clara y está escrita en el dossier: el equipo debe contar con{" "}
        <em>
          "una identidad de juego reconocible, de la que los jugadores puedan
          apoyarse en momentos de incertidumbre y en la que crean fervientemente
          a pesar de las adversidades."
        </em>
      </>
    ),
    s5Quote1: (
      <>
        La identidad de un equipo es su escudo. Cuando las cosas van mal, los
        jugadores necesitan aferrarse a algo que conocen y en lo que creen. Sin
        identidad, el miedo gana.
      </>
    ),
    s5Quote1Author: "Pep Guardiola",
    s5P2: (
      <>
        Esta convicción se traduce en una exigencia concreta sobre el inicio de
        juego: siempre desde el arquero, siempre buscando la superioridad
        numérica, siempre con los once jugadores involucrados. No hay partido
        donde esta premisa se abandone. La salida desde atrás no es un recurso
        técnico; es una declaración de identidad.
      </>
    ),
    s5Quote2: (
      <>
        La valentía en el fútbol no es correr más que el rival. Es animarse a
        jugar cuando el resultado aprieta, cuando el miedo te pide que patees
        largo.
      </>
    ),
    s5Quote2Author: "Marcelo Bielsa",
    s5P3: (
      <>
        El dossier enumera las condiciones que debe cumplir cada inicio de juego
        propio: convicción, valentía, paciencia y conocimiento táctico. No hay
        accidente en estas palabras. Jugar bien bajo presión requiere no solo
        habilidad técnica, sino fortaleza mental colectiva, cultivada partido a
        partido.
      </>
    ),
    s5VideoTitle: "La identidad como ancla en la adversidad",

    // VI · El arquero
    s6Eyebrow: "VI · Evolución 2024",
    s6Title: "El arquero como jugador número once",
    s6P1: (
      <>
        Una de las evoluciones más significativas en el modelo de juego del CT
        Robatto durante 2024 fue la incorporación sistemática del arquero al
        desarrollo del juego. Desde la segunda mitad de esa temporada, el
        guardavalla pasó a ser un componente activo de la primera línea de
        construcción, generando situaciones de superioridad en el mediocampo
        —habitual 4 vs. 2— que antes eran imposibles sin su participación.
      </>
    ),
    s6P2: (
      <>
        Esta decisión no es solo táctica. Es, también, filosófica. Guardiola lo
        entendió hace más de una década cuando comenzó a exigir a sus arqueros
        la misma calidad técnica que a sus defensores. El arquero que juega con
        los pies no es un arquero que hace algo extra: es un arquero que cumple
        su función completa en un equipo que posee la pelota.
      </>
    ),
    s6Quote: (
      <>
        Un portero que no puede jugar con los pies es como un centrocampista que
        no puede defender. Es la mitad de un jugador.
      </>
    ),
    s6QuoteAuthor: "Pep Guardiola",
    s6VideoTitle:
      "Utilización del arquero en nuestro desarrollo del juego — Club Bolívar 2024",

    // VII · Cierre
    s7Eyebrow: "VII · Cierre",
    s7Title: (
      <>
        Una filosofía,{" "}
        <span className="italic text-gold-500">no un sistema</span>
      </>
    ),
    s7P1: (
      <>
        Lo que distingue al Juego de Posición como lo concibe el CT Robatto de
        una mera preferencia táctica es su carácter filosófico. Las formaciones
        cambian —4-3-3, 4-2-1-3, 3-4-3—, los posicionamientos se adaptan partido
        a partido al rival de turno, las salidas varían en función de cómo
        presiona el contrario. Lo que no cambia es la convicción de fondo: el
        equipo que domina el balón y el espacio domina el partido.
      </>
    ),
    s7P2: (
      <>
        Valdano decía que el fútbol tiene una deuda con la belleza. Bielsa decía
        que jugar bien es crear muchas situaciones de gol y que no te las creen.
        Guardiola dice que cuando tenés la pelota, el rival no puede hacerte
        daño. El CT Robatto dice que la posesión es el medio, no el fin, y que
        los resultados son consecuencia de jugar bien.
      </>
    ),
    s7P3: (
      <>
        Son frases distintas que apuntan al mismo norte: un fútbol inteligente,
        colectivo, valiente. Un fútbol que no negocia su identidad frente a la
        adversidad. Un fútbol que cree que la mejor forma de ganar es, también,
        la más hermosa.
      </>
    ),
    s7Quote: (
      <>
        El fútbol es el único deporte donde once hombres tienen que pensar como
        uno solo. Cuando lo logran, es la cosa más hermosa del mundo.
      </>
    ),
    s7QuoteAuthor: "Jorge Valdano",
    s7Closing: (
      <>
        Esa es, en definitiva, la ambición que subyace en cada página del
        dossier del CT Flavio Robatto: construir ese momento donde once hombres
        piensan como uno. Y hacerlo partido tras partido, en cada cancha, ante
        cualquier rival.
      </>
    ),
    s7VideoTitle: "Una filosofía, no un sistema",
    ctaLabel: "Del ensayo a la práctica · Manual del Modelo",
  },

  en: {
    pilares: [
      "Correct occupation of spaces",
      "Coming together through the pass",
      "Generating numerical and positional superiority",
      "Drawing opponents in to free up teammates",
      "Being wide to be deep",
    ],
    statsAbp: [
      { value: 30, label: "Goals from corners" },
      { value: 18, label: "Goals from penalties" },
      { value: 14, label: "Goals from free kicks" },
      { value: 68, label: "Total set pieces 2024-25", accent: true },
    ],

    // VideoBlock labels
    videoEyebrow: "Watch on YouTube · Supplementary material",
    watchOnYouTube: "Watch on YouTube",
    playLabel: (title) => `Play: ${title}`,

    // Hero
    heroEyebrow: "Essay · A conceptual review",
    heroTitle: (
      <>
        The Art of Being{" "}
        <span className="italic font-medium text-gold-500">Protagonists</span>
      </>
    ),
    heroSubtitle: "A conceptual review of Positional Play",
    heroAuthor: "Flavio Robatto",
    heroDate: "May 2026",
    heroReadTime: "12 min read",
    heroLead: (
      <>
        Controlling the game is not one style among many. It is a philosophical
        conviction: the belief that the team that organizes space better, moves
        the ball better, and thinks faster than its opponent will always hold
        the advantage. This is the idea that guides every training session,
        every shape, every decision of the Flavio Robatto coaching staff.
      </>
    ),

    // I · The mother idea
    s1Eyebrow: "I · The mother idea",
    s1Title: "Always taking the initiative",
    s1P1: (
      <>
        Before talking about systems or movements, there is a declaration of
        intent. In the coaching staff's dossier it is called the{" "}
        <em>"mother idea"</em>: always taking the lead in matches through ball
        possession, at home and away, against any opponent. Not as a
        circumstantial resource, but as an irreducible identity.
      </>
    ),
    s1P2: (
      <>
        This idea was not born on a tactics board. It is the inheritance of a
        school of thought whose most visible exponent is Pep Guardiola, but
        whose roots run deep into Johan Cruyff, Menotti, Bielsa. A school that
        understands football as a problem of collective intelligence. Guardiola,
        taking up that inheritance, puts it into his own words:
      </>
    ),
    s1Quote: (
      <>
        When you have the ball, the opponent can't hurt you. And when you lose
        it, you win it back immediately. That's what I want: a team that never
        lets you breathe.
      </>
    ),
    s1QuoteAuthor: "Pep Guardiola",
    s1P3: (
      <>
        This Guardiola quote captures precisely what the Robatto staff defines
        as its playing model: possession is not an end in itself, but the
        platform from which everything else is generated. The dossier states it
        clearly: <em>"Ball possession is the means, not the end."</em> Having it
        serves to control the game, wear down the opponent and, above all, to
        create as many goal-scoring situations as possible.
      </>
    ),
    s1VideoTitle:
      "A recognizable playing identity: positional play — Club Bolívar 2025",

    // II · Foundation
    s2Eyebrow: "II · Foundation",
    s2Title: "What is Positional Play?",
    s2P1: (
      <>
        Positional Play is not the same as keeping the ball for the sake of it.
        It is a conceptual way of playing: the harmonious advance of the ball,
        the players and their positions on the pitch; the creation of
        superiority over the opposition's lines; ball circulation to move
        opponents and exploit the spaces that open up.
      </>
    ),
    s2PilaresLabel: "The five pillars — Robatto staff",
    s2P2: (
      <>
        The guiding principle that sums all of this up is expressed in the
        dossier with a powerful philosophical simplicity:{" "}
        <em>
          "The ball moves toward the players' positions, not the players toward
          the ball."
        </em>{" "}
        An idea that seems simple and yet requires years of work to become a
        collective instinct.
      </>
    ),
    s2Quote: (
      <>
        Positional football means that every player knows where his teammates
        are before receiving the ball. It is a matter of geometry and mental
        anticipation.
      </>
    ),
    s2QuoteAuthor:
      "Johan Cruyff, a reference point for Guardiola and the positional school",
    s2P3: (
      <>
        The Robatto staff translates this principle into concrete structures:
        the team varies its spatial distribution in attack —3-2-2-3, 2-3-2-3,
        3-4-3 diamond, 4-2-1-3— not out of tactical whim, but because each
        positioning is a response to the opponent's specific weaknesses. The
        geometry changes; the idea remains.
      </>
    ),
    s2VideoTitle:
      "The rewards of playing good football — Positional Play",

    // III · The ethics of the game
    s3Eyebrow: "III · The ethics of the game",
    s3Title: "Playing well as a moral obligation",
    s3P1: (
      <>
        Jorge Valdano was one of the first to articulate in depth the ethical
        dimension of attacking football. For him, football is not just a result,
        but a spectacle with responsibilities toward those who watch it. This
        aesthetic dimension —respect for the way the game is played— is strongly
        present in the philosophy of the Robatto staff.
      </>
    ),
    s3Quote1: (
      <>
        Winning matters, but the way you win defines a team's identity. Football
        owes a debt to beauty.
      </>
    ),
    s3Quote1Author: "Jorge Valdano",
    s3P2: (
      <>
        The staff's dossier captures this conviction in almost identical terms:{" "}
        <em>
          "To win, you first have to play well. Results are a consequence of the
          play, the performance and the efficiency. Above all, they are a
          consequence of playing well."
        </em>{" "}
        It is not resignation in the face of the result; it is the certainty
        that the right path ends up producing the right rewards.
      </>
    ),
    s3P3: (
      <>
        This stance also implies a commitment to the supporter. The dossier says
        it bluntly: the spectator is the most important thing surrounding
        football, more than the referee, more than the journalist. Playing well
        is also a form of respect toward those who suffer and rejoice in the
        stands.
      </>
    ),
    s3Quote2: (
      <>
        A team that plays well becomes the heritage of its people. People never
        forget the team that made them happy.
      </>
    ),
    s3Quote2Author: "Jorge Valdano",
    s3VideoTitle: "Playing well as a moral obligation",

    // IV · Bielsa and the press
    s4Eyebrow: "IV · Winning the ball back to keep attacking",
    s4Title: "Bielsa and the press",
    s4P1: (
      <>
        Marcelo Bielsa brought to South American football an obsession that is
        now commonplace at the elite level: the immediate press after losing the
        ball, the refusal to give up the initiative even without it. For Bielsa,
        defending is simply the prelude to attacking again.
      </>
    ),
    s4Quote: (
      <>
        Create many goal-scoring chances and concede few. That is playing well.
        Everything else is a consequence.
      </>
    ),
    s4QuoteAuthor: "Marcelo Bielsa",
    s4P2: (
      <>
        This Bielsa-inspired definition of good football —explicitly cited by
        Robatto in interviews— takes shape in the dossier in what the coaching
        staff calls <em>"being a pressing team"</em>. Upon losing the ball, the
        team will try to stay high up the pitch to win it back and keep
        attacking. The press is not defensive: it is the continuation of the
        attack by other means.
      </>
    ),
    s4P3: (
      <>
        The set-piece numbers confirm that this well-organized aggression has
        concrete consequences. During the 2024-2025 cycle at Club Bolívar, the
        staff scored{" "}
        <strong className="text-gold-400 font-semibold">
          68 goals from set-piece situations
        </strong>
        : a figure that reflects the team's ability to dominate specific game
        situations thanks to advance preparation and the study of the opponent.
      </>
    ),
    s4StatsLabel: "Set pieces · 2024-25 cycle · Club Bolívar",
    s4P4: (
      <>
        The base defensive shape —the 4-1-4-1— seeks to block forward passes,
        limit space between the lines and keep the team constantly pressing. The
        lines stay compact, with a reference of barely 30 meters of depth, so
        that the press is always collective and never individual.
      </>
    ),
    s4VideoTitle:
      "Tactics aren't about combining numbers in a diagram, but knowing what to do in every moment",

    // V · Under adversity
    s5Eyebrow: "V · Under adversity",
    s5Title: "Identity as an anchor",
    s5P1: (
      <>
        Every playing system faces its hardest test not when it wins, but when
        it loses. What does a positional team do when an adverse scoreline tempts
        it to abandon its idea? The Robatto staff's answer is clear and written
        in the dossier: the team must have{" "}
        <em>
          "a recognizable playing identity that players can lean on in moments
          of uncertainty and in which they fervently believe despite adversity."
        </em>
      </>
    ),
    s5Quote1: (
      <>
        A team's identity is its shield. When things go wrong, players need to
        hold on to something they know and believe in. Without identity, fear
        wins.
      </>
    ),
    s5Quote1Author: "Pep Guardiola",
    s5P2: (
      <>
        This conviction translates into a concrete demand on the build-up:
        always from the goalkeeper, always seeking numerical superiority, always
        with all eleven players involved. There is no match where this premise
        is abandoned. Playing out from the back is not a technical resource; it
        is a declaration of identity.
      </>
    ),
    s5Quote2: (
      <>
        Bravery in football is not running more than your opponent. It is daring
        to play when the scoreline tightens, when fear is telling you to hit it
        long.
      </>
    ),
    s5Quote2Author: "Marcelo Bielsa",
    s5P3: (
      <>
        The dossier lists the conditions that every build-up of our own must
        meet: conviction, bravery, patience and tactical understanding. There is
        nothing accidental about these words. Playing well under pressure
        requires not only technical ability, but collective mental strength,
        cultivated match by match.
      </>
    ),
    s5VideoTitle: "Identity as an anchor in adversity",

    // VI · The goalkeeper
    s6Eyebrow: "VI · 2024 evolution",
    s6Title: "The goalkeeper as the eleventh player",
    s6P1: (
      <>
        One of the most significant evolutions in the Robatto staff's playing
        model during 2024 was the systematic integration of the goalkeeper into
        the development of the game. From the second half of that season, the
        keeper became an active component of the first line of build-up,
        generating situations of superiority in midfield —a regular 4 v 2— that
        were previously impossible without his involvement.
      </>
    ),
    s6P2: (
      <>
        This decision is not only tactical. It is also philosophical. Guardiola
        understood it more than a decade ago when he began to demand of his
        goalkeepers the same technical quality as his defenders. A goalkeeper
        who plays with his feet is not a goalkeeper doing something extra: he is
        a goalkeeper fulfilling his complete role in a team that has the ball.
      </>
    ),
    s6Quote: (
      <>
        A goalkeeper who can't play with his feet is like a midfielder who can't
        defend. He's half a player.
      </>
    ),
    s6QuoteAuthor: "Pep Guardiola",
    s6VideoTitle:
      "Using the goalkeeper in our build-up play — Club Bolívar 2024",

    // VII · Closing
    s7Eyebrow: "VII · Closing",
    s7Title: (
      <>
        A philosophy,{" "}
        <span className="italic text-gold-500">not a system</span>
      </>
    ),
    s7P1: (
      <>
        What sets Positional Play —as the Robatto staff conceives it— apart from
        a mere tactical preference is its philosophical character. The
        formations change —4-3-3, 4-2-1-3, 3-4-3—, the positioning adapts match
        by match to the opponent of the day, the build-up varies depending on
        how the opposition presses. What does not change is the underlying
        conviction: the team that dominates the ball and space dominates the
        game.
      </>
    ),
    s7P2: (
      <>
        Valdano used to say that football owes a debt to beauty. Bielsa used to
        say that playing well is creating many goal-scoring chances and
        conceding few. Guardiola says that when you have the ball, the opponent
        can't hurt you. The Robatto staff says that possession is the means, not
        the end, and that results are a consequence of playing well.
      </>
    ),
    s7P3: (
      <>
        These are different phrases pointing to the same north: an intelligent,
        collective, brave football. A football that does not negotiate its
        identity in the face of adversity. A football that believes the best way
        to win is also the most beautiful.
      </>
    ),
    s7Quote: (
      <>
        Football is the only sport where eleven men have to think as one. When
        they manage it, it is the most beautiful thing in the world.
      </>
    ),
    s7QuoteAuthor: "Jorge Valdano",
    s7Closing: (
      <>
        That, in the end, is the ambition underlying every page of the Flavio
        Robatto staff's dossier: to build that moment where eleven men think as
        one. And to do it match after match, on every pitch, against any
        opponent.
      </>
    ),
    s7VideoTitle: "A philosophy, not a system",
    ctaLabel: "From the essay to practice · The Playing Model Manual",
  },
};

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

function LiteYouTube({ videoId, title, playLabel }) {
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
      aria-label={playLabel ? playLabel(title) : `Reproducir: ${title}`}
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

function VideoBlock({ title, videoId, eyebrow, watchLabel, playLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12 md:mt-16"
    >
      <div className="eyebrow text-gold-500/70 mb-3">
        {eyebrow}
      </div>
      <h3 className="font-display text-xl md:text-2xl text-bone mb-5 leading-tight">
        {title}
      </h3>
      <LiteYouTube videoId={videoId} title={title} playLabel={playLabel} />
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-sm text-gold-400 hover:text-gold-500 transition-colors"
      >
        {watchLabel}
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}

export default function Protagonistas() {
  const { lang } = useLang();
  const t = COPY[lang];

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
            <div className="eyebrow mb-6">{t.heroEyebrow}</div>

            <h1 className="font-display font-black text-[clamp(2.5rem,8vw,6rem)] text-bone leading-[0.95] tracking-tighter mb-6">
              {t.heroTitle}
            </h1>

            <p className="font-display text-xl md:text-2xl text-bone/70 leading-relaxed italic mb-10">
              {t.heroSubtitle}
            </p>

            {/* Metadatos editoriales */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-bone-400 mb-14">
              <span>{t.heroAuthor}</span>
              <span className="text-bone/30">·</span>
              <span>{t.heroDate}</span>
              <span className="text-bone/30">·</span>
              <span>{t.heroReadTime}</span>
            </div>

            {/* Lead */}
            <p className="font-display text-xl md:text-2xl text-bone/85 leading-relaxed">
              {t.heroLead}
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
            <div className="eyebrow mb-5">{t.s1Eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s1Title}
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed">
              <p>{t.s1P1}</p>
              <p>{t.s1P2}</p>
            </div>
          </motion.div>

          <PullQuote variant="display" author={t.s1QuoteAuthor}>
            {t.s1Quote}
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            {t.s1P3}
          </motion.p>

          <VideoBlock
            title={t.s1VideoTitle}
            videoId="Q9Qvj1zrYrY"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
            <div className="eyebrow mb-5">{t.s2Eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s2Title}
            </h2>

            <p className="text-lg md:text-xl text-bone/75 leading-relaxed mb-12">
              {t.s2P1}
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
              {t.s2PilaresLabel}
            </div>
            <div className="divide-y divide-bone/10 border-y border-bone/10">
              {t.pilares.map((titulo, i) => (
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
            {t.s2P2}
          </motion.p>

          <PullQuote variant="aside" author={t.s2QuoteAuthor}>
            {t.s2Quote}
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            {t.s2P3}
          </motion.p>

          <VideoBlock
            title={t.s2VideoTitle}
            videoId="rzfGXVbrTpw"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
            <div className="eyebrow mb-5">{t.s3Eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s3Title}
            </h2>
            <p className="text-lg md:text-xl text-bone/75 leading-relaxed">
              {t.s3P1}
            </p>
          </motion.div>

          <PullQuote variant="aside" author={t.s3Quote1Author}>
            {t.s3Quote1}
          </PullQuote>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            <p>{t.s3P2}</p>
            <p>{t.s3P3}</p>
          </motion.div>

          <PullQuote variant="inline" author={t.s3Quote2Author}>
            {t.s3Quote2}
          </PullQuote>

          <VideoBlock
            title={t.s3VideoTitle}
            videoId="eQyO2hf7PMo"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
              {t.s4Eyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s4Title}
            </h2>
            <p className="text-lg md:text-xl text-bone/75 leading-relaxed">
              {t.s4P1}
            </p>
          </motion.div>

          <PullQuote variant="aside" author={t.s4QuoteAuthor}>
            {t.s4Quote}
          </PullQuote>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed mb-16"
          >
            <p>{t.s4P2}</p>
            <p>{t.s4P3}</p>
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
              {t.s4StatsLabel}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {t.statsAbp.map((stat, i) => (
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
            {t.s4P4}
          </motion.p>

          <VideoBlock
            title={t.s4VideoTitle}
            videoId="Gim8xdLkGuA"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
            <div className="eyebrow mb-5">{t.s5Eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s5Title}
            </h2>
            <p className="text-lg md:text-xl text-bone/75 leading-relaxed">
              {t.s5P1}
            </p>
          </motion.div>

          <PullQuote variant="aside" author={t.s5Quote1Author}>
            {t.s5Quote1}
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            {t.s5P2}
          </motion.p>

          <PullQuote variant="inline" author={t.s5Quote2Author}>
            {t.s5Quote2}
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-bone/75 leading-relaxed"
          >
            {t.s5P3}
          </motion.p>

          <VideoBlock
            title={t.s5VideoTitle}
            videoId="LNCV2dXjR7U"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
            <div className="eyebrow mb-5">{t.s6Eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s6Title}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed">
              <p>{t.s6P1}</p>
              <p>{t.s6P2}</p>
            </div>
          </motion.div>

          <PullQuote variant="inline" author={t.s6QuoteAuthor}>
            {t.s6Quote}
          </PullQuote>

          <VideoBlock
            title={t.s6VideoTitle}
            videoId="-EmhzlgpWug"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
            <div className="eyebrow mb-5">{t.s7Eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight tracking-tighter mb-10">
              {t.s7Title}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-bone/75 leading-relaxed">
              <p>{t.s7P1}</p>
              <p>{t.s7P2}</p>
              <p>{t.s7P3}</p>
            </div>
          </motion.div>

          <PullQuote variant="card" author={t.s7QuoteAuthor}>
            {t.s7Quote}
          </PullQuote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-bone/85 leading-relaxed italic text-center"
          >
            {t.s7Closing}
          </motion.p>

          <VideoBlock
            title={t.s7VideoTitle}
            videoId="udv8mgSONcE"
            eyebrow={t.videoEyebrow}
            watchLabel={t.watchOnYouTube}
            playLabel={t.playLabel}
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
              <span>{t.ctaLabel}</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
