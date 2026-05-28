import {
  objetivosA as objetivosAEs,
  objetivosB as objetivosBEs,
  definicionModelo as definicionModeloEs,
  objetivosAEn,
  objetivosBEn,
  definicionModeloEn,
  juegoDePosicion,
  fasesJuego,
  principiosJuego,
} from "../data/modelo";
import { useLang } from "../i18n/LanguageContext.jsx";

const NAV_ITEMS = {
  es: [
    { id: "principios", label: "Objetivos & Principios" },
    { id: "mapa-conceptual", label: "Mapa Conceptual" },
    { id: "protocolo", label: "Protocolo Operativo" },
    { id: "juego-posicion", label: "Juego de Posición" },
    { id: "fases", label: "Fases del juego" },
    { id: "principios-juego", label: "Principios de juego" },
  ],
  en: [
    { id: "principios", label: "Objectives & Principles" },
    { id: "mapa-conceptual", label: "Concept Map" },
    { id: "protocolo", label: "Operating Protocol" },
    { id: "juego-posicion", label: "Positional Play" },
    { id: "fases", label: "Phases of Play" },
    { id: "principios-juego", label: "Principles of Play" },
  ],
};

const COPY = {
  es: {
    eyebrow: "Metodología",
    title: "Modelo de juego",
    intro:
      "Base conceptual y metodológica del cuerpo técnico. Cómo entrenamos, qué priorizamos y por qué.",
    foundationLabel: "Manual de Equipo · Principios",
    foundationTitle:
      "El principio más profundo y determinante del juego de posición es la ocupación racional del espacio para generar superioridades constantes.",
    foundationItalic: "Todo nace ahí.",
    foundationDesc:
      "El verdadero núcleo del modelo está en cómo el equipo distribuye sus hombres para manipular y vulnerar la estructura rival.",
    objGeneralesI: "Objetivos generales I",
    objGeneralesII: "Objetivos generales II",
    verManual: "Ver Manual Completo",
    // Mapa Conceptual
    mapaEyebrow: "Sistema completo",
    mapaTitle: (
      <>
        Mapa Conceptual —<br />
        <span className="text-gold-500">Metodología Integrada Estructural</span>
      </>
    ),
    mapaIntro:
      "Entrenamos el juego desde el juego, optimizando la estructura del jugador para sostener y potenciar su rendimiento dentro del modelo.",
    ideaCentralTitle: "Idea Central",
    ideaCentralDesc:
      "El todo es un sistema interrelacionado: cuando cambia una parte, cambia todo el sistema. Cada decisión, tarea, carga o estímulo impacta en el comportamiento global y en el rendimiento del jugador y del equipo.",
    entIntegradoLabel: "2. Entrenamiento Integrado",
    entIntegradoDesc: "El juego es el medio y el fin del entrenamiento.",
    tareasJuegoTitle: "Tareas de Juego (Integradas)",
    tareasJuegoItems: [
      "Representativas del modelo",
      "Con oposición real",
      "Con toma de decisión",
      "Con transferencia al partido",
    ],
    manipVariablesTitle: "Manipulación de Variables",
    manipVariablesItems: [
      "Espacio · Tiempo · Reglas",
      "N° de jugadores · Objetivos",
      "Recursos",
    ],
    objetivoTitle: "Objetivo",
    objetivoDesc:
      "Generar comportamientos específicos del modelo con transferencia al partido.",
    transferTitle: "Transferencia al Partido",
    transferDesc:
      "Todo lo entrenado debe tener un objetivo claro y una transferencia directa al juego real.",
    areaFisicaLabel: "4. Área Física Integrada al Modelo",
    areaFisicaDesc:
      "El área física no trabaja de forma aislada. Está al servicio del modelo y del jugador.",
    trabajoCampoTitle: "Trabajo en Campo",
    trabajoCampoItems: [
      "Capacidades condicionales",
      "Velocidad · Resistencia",
      "Potencia · Agilidad",
    ],
    trabajoGymTitle: "Trabajo en Gym",
    trabajoGymItems: [
      "Fuerza y potencia",
      "Prevención de lesiones",
      "Estabilidad y movilidad",
    ],
    objetivosLabel: "Objetivos:",
    objetivosListInline:
      "Integración, Especificidad, Prevención, Optimización, Transferencia",
    modeloJuegoLabel: "1. Modelo de Juego",
    modeloJuegoTitle: "Nuestra identidad y la forma en que entendemos el juego",
    orgOfensivaTitle: "Organización Ofensiva",
    orgOfensivaSub: "(Principios en posesión)",
    ofensiva1:
      'Dominar el juego a través de la posesión (inicios, reinicios). "Si yo tengo el balón, el rival no lo tiene, por lo tanto no me puede atacar" (J. Cruyff).',
    ofensiva2: "Encontrar ventajas tácticas a partir de nuestras estructuras.",
    ofensiva3:
      "Dinámicas en último tercio para ser profundos e impredecibles al generar situaciones de gol.",
    orgDefensivaTitle: "Organización Defensiva",
    orgDefensivaSub: "(Principios en recuperación)",
    defensiva1:
      "Presionar para forzar errores rivales y/o la recuperación del balón lo antes posible.",
    defensiva2:
      "Reducción de espacios constante para minimizar el tiempo y espacio que tiene el rival para decidir.",
    defensiva3:
      "Principios fundamentales de defensa en nuestro propio terreno bien aplicados: cierre de espacios, coberturas, comportamiento del más lejano.",
    tomaDecisionesTitle: "6. Toma de Decisiones (Eje del Sistema)",
    tomaDecisionesDesc:
      "Convertimos la información en decisiones que mejoran el rendimiento.",
    planificacionLabel: "3. Planificación y Gestión de la Carga",
    planificacionDesc: "Planificamos, dosificamos y ajustamos según el contexto.",
    microcicloTitle: "Microciclo Estructural (Microdosificación)",
    microdosisTitle: "Microdosificación (Microdosis)",
    microdosisItems: [
      "Estímulos frecuentes y en pequeñas dosis",
      "Alta frecuencia — Bajo impacto acumulativo",
      "Sostenemos niveles sin generar fatiga excesiva",
      "Integración diaria de cargas dentro de las tareas",
    ],
    gestionCargaTitle: "Gestión de la Carga",
    gestionCargaItems: [
      "Balance entre carga y recuperación",
      "Control de fatiga aguda y crónica",
      "Adaptación al calendario, rival y contexto",
    ],
    factoresTitle: "Factores a Considerar",
    factoresDesc:
      "Estado del jugador · Rival · Calendario · Viajes · Clima · Objetivos de la semana",
    evaluacionLabel: "5. Evaluación y Control",
    evaluacionDesc: "Medimos para comprender, prevenir y tomar decisiones.",
    evaluacionCards: [
      { title: "Carga Externa (GPS)", items: ["Distancias", "Velocidades", "Aceleraciones", "Desaceleraciones", "Player Load"] },
      { title: "Carga Interna (Wellness)", items: ["Fatiga", "Estrés", "Sueño", "Dolor muscular", "Ánimo"] },
      { title: "Estado Neuromuscular", items: ["CMJ", "Fuerza", "Potencia", "Asimetrías", "Rigidez"] },
      { title: "Análisis Táctico y Técnico", items: ["Comportamientos", "Patrones de juego", "Eficacia", "Toma de decisiones", "Rendimiento colectivo"] },
    ],
    cicloTitle: "7. Lógica del Sistema (Ciclo Continuo)",
    cicloSteps: [
      { label: "Estimular", desc: "Aplicamos estímulos a través del juego y las tareas" },
      { label: "Medir", desc: "Recolectamos datos objetivos y subjetivos del jugador" },
      { label: "Analizar", desc: "Interpretamos la información según el modelo, el contexto y el objetivo" },
      { label: "Ajustar", desc: "Tomamos decisiones y modificamos lo que sea necesario" },
      { label: "Mejorar", desc: "Buscamos la mejor versión del jugador y del equipo de forma sostenible" },
    ],
    objetivoFinalLabel: "8. Objetivo Final",
    jugadorTitle: "Jugador",
    jugadorItems: ["Más fuerte", "Más inteligente", "Más disponible", "Menos lesionado"],
    equipoTitle: "Equipo",
    equipoItems: ["Más consistente", "Más competitivo", "Más eficaz", "Con identidad clara"],
    rendimientoSostenible: "Rendimiento sostenible dentro del modelo de juego",
    // Protocolo Operativo
    protocoloEyebrow: "Metodología",
    protocoloTitle: (
      <>
        Protocolo operativo<br />
        <span className="italic text-gold-500">de sesión.</span>
      </>
    ),
    protocoloIntro:
      "Dinámica completa desde la llegada al predio hasta el cierre de la jornada. Primera División.",
    fase1Label: "Fase 1",
    fase1Title: "Pre-Entrenamiento",
    fase2Label: "Fase 2",
    fase2Title: "Entrenamiento en Campo",
    fase3Label: "Fase 3",
    fase3Title: "Post-Entrenamiento",
    fase4Label: "Fase 4",
    fase4Title: "Post-Sesión Staff",
    preEntTitle: "Pre-Entrenamiento",
    preEntSub: "Coordinación y preparación del staff",
    llegadaStaffTitle: "Llegada Staff (-2:00 hs)",
    llegadaStaffItems: [
      "Coordinación con utileros para armado del campo",
      "Distribución de materiales",
      "Revisión de planificación del día",
    ],
    llegadaStaffResp: "Responsables: PF + 2°PF + Asistentes + Utileros",
    reunionMedicaTitle: "Reunión Cuerpo Médico",
    reunionMedicaItems: [
      "Debate novedades del día",
      "Estado de jugadores",
      "Adaptaciones necesarias",
    ],
    reunionMedicaResp: "Participan: DT + PF + 2°PF + Kiné + Médico",
    preSesionTitle: "Pre-Sesión Individual",
    preSesionItems: [
      "Activación individual en OpenBase",
      "Rutina ya cargada",
      "Video pre-entrenamiento (opcional)",
    ],
    preSesionResp: "Supervisión: 2°PF (cumplimiento)",
    campoTitle: "Entrenamiento en Campo",
    campoSub: "5 bloques táctico-técnicos integrados",
    campoPrincipioLabel: "Principio central:",
    campoPrincipioDesc:
      "Todo el entrenamiento está gobernado por el contenido técnico-táctico del día. Lo físico, lo táctico y lo técnico están integrados en una misma lógica.",
    bloques: [
      { num: 1, title: "Activación", desc: "Preparar al jugador de forma integral" },
      { num: 2, title: "Adquisición", desc: "Desarrollar capacidades técnicas" },
      { num: 3, title: "Juego Orientado", desc: "Integrar lo físico con lo táctico" },
      { num: 4, title: "Juego Específico", desc: "Aplicar y consolidar contenidos" },
      { num: 5, title: "Optimización", desc: "Ajustar, completar y reforzar" },
    ],
    postEntTitle: "Post-Entrenamiento",
    postEntSub: "Recuperación, nutrición y física",
    fuerzaTitle: "Fuerza (OpenBase)",
    fuerzaItems: [
      "Sesión de fuerza específica individual obligatoria",
      "Supervisa: 2°PF (cumplimiento)",
    ],
    recuperacionTitle: "Recuperación & Nutricional",
    recuperacionItems: [
      "Suplementación post-entrenamiento",
      "Coordinación de alimentación (almuerzo)",
      "Responsables: Nutricionista + Cocina + Kinesiólogos",
    ],
    postStaffLabel: "Staff",
    postStaffTitle: "Reunión Técnica Post-Sesión",
    postStaffSub: "Análisis, corrección y planificación",
    postStaffCards: [
      "Análisis de la sesión — Datos físicos",
      "Video táctico",
      "Corrección de errores",
    ],
    postStaffResp: "Participan: DT + PF + 2°PF + Asistentes | Analistas de video",
    sistemaIntegradoLabel: "Sistema integrado",
    sistemaIntegradoDesc:
      " para maximizar el rendimiento, cuidar al jugador y lograr la excelencia deportiva.",
    // Juego de Posición
    juegoPosEyebrow: "Fundamento táctico",
    juegoPosTitle: "Juego de Posición",
    juegoPosCita:
      '"El juego de posición es una forma conceptual de jugar este deporte: siendo protagonistas y jugando con intención. Correcta ocupación de espacios, avance del balón y generación de superioridades."',
    juegoPosAutor: "— Flavio Robatto",
    leerEnsayo: "Leer el ensayo completo",
    sbCode: "SB",
    sbTitle: "Sistema Base",
    fdCode: "FD",
    fdTitle: "Fase Defensiva",
    ipCode: "IP",
    ipTitle: "Inicio y Progresión",
    // Fases del juego
    fasesEyebrow: "Organización",
    fasesTitle: "Fases del juego",
    faseIniciacionLabel: "Fase 1",
    faseIniciacionTitle: "Iniciación",
    faseCreacionLabel: "Fase 2",
    faseCreacionTitle: "Creación",
    faseFinalizacionLabel: "Fase 3",
    faseFinalizacionTitle: "Finalización",
    faseFinalizacionFormacion: "1-2-3-2-3 volcado",
    // Principios de juego
    principiosEyebrow: "Resumen",
    principiosTitle: "Principios de juego",
    principiosIntroPre: "Los principios ofensivos y defensivos están detallados en el",
    principiosLink: "Mapa Conceptual de Metodología",
  },
  en: {
    eyebrow: "Methodology",
    title: "Game Model",
    intro:
      "The coaching staff's conceptual and methodological foundation. How we train, what we prioritize and why.",
    foundationLabel: "Team Manual · Principles",
    foundationTitle:
      "The deepest and most decisive principle of positional play is the rational occupation of space to generate constant numerical superiority.",
    foundationItalic: "Everything is born there.",
    foundationDesc:
      "The true core of the model lies in how the team distributes its players to manipulate and break down the opponent's structure.",
    objGeneralesI: "General objectives I",
    objGeneralesII: "General objectives II",
    verManual: "View Full Manual",
    // Mapa Conceptual
    mapaEyebrow: "Complete system",
    mapaTitle: (
      <>
        Concept Map —<br />
        <span className="text-gold-500">Structural Integrated Methodology</span>
      </>
    ),
    mapaIntro:
      "We train the game through the game, optimizing the player's structure to sustain and enhance their performance within the model.",
    ideaCentralTitle: "Core Idea",
    ideaCentralDesc:
      "The whole is an interrelated system: when one part changes, the entire system changes. Every decision, task, load or stimulus impacts overall behavior and the performance of both player and team.",
    entIntegradoLabel: "2. Integrated Training",
    entIntegradoDesc: "The game is both the means and the end of training.",
    tareasJuegoTitle: "Game-Based Tasks (Integrated)",
    tareasJuegoItems: [
      "Representative of the model",
      "With real opposition",
      "With decision-making",
      "With transfer to the match",
    ],
    manipVariablesTitle: "Manipulating Variables",
    manipVariablesItems: [
      "Space · Time · Rules",
      "Number of players · Objectives",
      "Resources",
    ],
    objetivoTitle: "Objective",
    objetivoDesc:
      "Generate model-specific behaviors with transfer to the match.",
    transferTitle: "Transfer to the Match",
    transferDesc:
      "Everything trained must have a clear objective and direct transfer to the real game.",
    areaFisicaLabel: "4. Physical Area Integrated into the Model",
    areaFisicaDesc:
      "The physical area does not work in isolation. It serves the model and the player.",
    trabajoCampoTitle: "Field Work",
    trabajoCampoItems: [
      "Conditional capacities",
      "Speed · Endurance",
      "Power · Agility",
    ],
    trabajoGymTitle: "Gym Work",
    trabajoGymItems: [
      "Strength and power",
      "Injury prevention",
      "Stability and mobility",
    ],
    objetivosLabel: "Objectives:",
    objetivosListInline:
      "Integration, Specificity, Prevention, Optimization, Transfer",
    modeloJuegoLabel: "1. Game Model",
    modeloJuegoTitle: "Our identity and the way we understand the game",
    orgOfensivaTitle: "Attacking Organization",
    orgOfensivaSub: "(Principles in possession)",
    ofensiva1:
      'Dominate the game through possession (build-up, restarts). "If I have the ball, the opponent doesn\'t, so they can\'t attack me" (J. Cruyff).',
    ofensiva2: "Find tactical advantages from our structures.",
    ofensiva3:
      "Final-third dynamics to be a threat in depth and unpredictable when creating goal-scoring situations.",
    orgDefensivaTitle: "Defensive Organization",
    orgDefensivaSub: "(Principles when winning the ball back)",
    defensiva1:
      "Press to force opponent errors and/or win the ball back as quickly as possible.",
    defensiva2:
      "Constantly compress space to minimize the time and room the opponent has to decide.",
    defensiva3:
      "Sound application of fundamental defensive principles in our own half: compressing space, covering, and the behavior of the farthest defender.",
    tomaDecisionesTitle: "6. Decision-Making (Core of the System)",
    tomaDecisionesDesc:
      "We turn information into decisions that improve performance.",
    planificacionLabel: "3. Planning and Load Management",
    planificacionDesc: "We plan, dose and adjust according to the context.",
    microcicloTitle: "Structural Microcycle (Micro-dosing)",
    microdosisTitle: "Micro-dosing (Micro-doses)",
    microdosisItems: [
      "Frequent stimuli in small doses",
      "High frequency — Low cumulative impact",
      "We sustain levels without generating excessive fatigue",
      "Daily integration of loads within the tasks",
    ],
    gestionCargaTitle: "Load Management",
    gestionCargaItems: [
      "Balance between load and recovery",
      "Control of acute and chronic fatigue",
      "Adaptation to the calendar, opponent and context",
    ],
    factoresTitle: "Factors to Consider",
    factoresDesc:
      "Player condition · Opponent · Calendar · Travel · Weather · Objectives of the week",
    evaluacionLabel: "5. Assessment and Monitoring",
    evaluacionDesc: "We measure to understand, prevent and make decisions.",
    evaluacionCards: [
      { title: "External Load (GPS)", items: ["Distances", "Speeds", "Accelerations", "Decelerations", "Player Load"] },
      { title: "Internal Load (Wellness)", items: ["Fatigue", "Stress", "Sleep", "Muscle soreness", "Mood"] },
      { title: "Neuromuscular Status", items: ["CMJ", "Strength", "Power", "Asymmetries", "Stiffness"] },
      { title: "Tactical and Technical Analysis", items: ["Behaviors", "Patterns of play", "Effectiveness", "Decision-making", "Collective performance"] },
    ],
    cicloTitle: "7. System Logic (Continuous Cycle)",
    cicloSteps: [
      { label: "Stimulate", desc: "We apply stimuli through the game and the tasks" },
      { label: "Measure", desc: "We collect objective and subjective data on the player" },
      { label: "Analyze", desc: "We interpret the information according to the model, context and objective" },
      { label: "Adjust", desc: "We make decisions and modify whatever is necessary" },
      { label: "Improve", desc: "We pursue the best version of the player and the team in a sustainable way" },
    ],
    objetivoFinalLabel: "8. Final Objective",
    jugadorTitle: "Player",
    jugadorItems: ["Stronger", "Smarter", "More available", "Less injured"],
    equipoTitle: "Team",
    equipoItems: ["More consistent", "More competitive", "More effective", "With a clear identity"],
    rendimientoSostenible: "Sustainable performance within the game model",
    // Protocolo Operativo
    protocoloEyebrow: "Methodology",
    protocoloTitle: (
      <>
        Session operating<br />
        <span className="italic text-gold-500">protocol.</span>
      </>
    ),
    protocoloIntro:
      "The complete flow from arrival at the training ground to the close of the day. First Division.",
    fase1Label: "Phase 1",
    fase1Title: "Pre-Training",
    fase2Label: "Phase 2",
    fase2Title: "On-Field Training",
    fase3Label: "Phase 3",
    fase3Title: "Post-Training",
    fase4Label: "Phase 4",
    fase4Title: "Post-Session Staff",
    preEntTitle: "Pre-Training",
    preEntSub: "Coordination and staff preparation",
    llegadaStaffTitle: "Staff Arrival (-2:00 hrs)",
    llegadaStaffItems: [
      "Coordination with kit staff to set up the field",
      "Distribution of materials",
      "Review of the day's plan",
    ],
    llegadaStaffResp: "In charge: Fitness Coach + Assistant Fitness Coach + Assistants + Kit Staff",
    reunionMedicaTitle: "Medical Staff Meeting",
    reunionMedicaItems: [
      "Discussion of the day's updates",
      "Player condition",
      "Necessary adaptations",
    ],
    reunionMedicaResp: "Present: Head Coach + Fitness Coach + Assistant Fitness Coach + Physio + Doctor",
    preSesionTitle: "Individual Pre-Session",
    preSesionItems: [
      "Individual activation in OpenBase",
      "Routine already loaded",
      "Pre-training video (optional)",
    ],
    preSesionResp: "Supervision: Assistant Fitness Coach (compliance)",
    campoTitle: "On-Field Training",
    campoSub: "5 integrated tactical-technical blocks",
    campoPrincipioLabel: "Core principle:",
    campoPrincipioDesc:
      "All training is governed by the technical-tactical content of the day. The physical, tactical and technical are integrated within a single logic.",
    bloques: [
      { num: 1, title: "Activation", desc: "Prepare the player holistically" },
      { num: 2, title: "Acquisition", desc: "Develop technical capacities" },
      { num: 3, title: "Oriented Game", desc: "Integrate the physical with the tactical" },
      { num: 4, title: "Specific Game", desc: "Apply and consolidate content" },
      { num: 5, title: "Optimization", desc: "Adjust, complete and reinforce" },
    ],
    postEntTitle: "Post-Training",
    postEntSub: "Recovery, nutrition and physical work",
    fuerzaTitle: "Strength (OpenBase)",
    fuerzaItems: [
      "Mandatory individual specific strength session",
      "Supervised by: Assistant Fitness Coach (compliance)",
    ],
    recuperacionTitle: "Recovery & Nutrition",
    recuperacionItems: [
      "Post-training supplementation",
      "Meal coordination (lunch)",
      "In charge: Nutritionist + Kitchen + Physios",
    ],
    postStaffLabel: "Staff",
    postStaffTitle: "Post-Session Technical Meeting",
    postStaffSub: "Analysis, correction and planning",
    postStaffCards: [
      "Session analysis — Physical data",
      "Tactical video",
      "Error correction",
    ],
    postStaffResp: "Present: Head Coach + Fitness Coach + Assistant Fitness Coach + Assistants | Video Analysts",
    sistemaIntegradoLabel: "Integrated system",
    sistemaIntegradoDesc:
      " to maximize performance, protect the player and achieve sporting excellence.",
    // Juego de Posición
    juegoPosEyebrow: "Tactical foundation",
    juegoPosTitle: "Positional Play",
    juegoPosCita:
      '"Positional play is a conceptual way of playing this sport: being protagonists and playing with intent. Correct occupation of space, advancing the ball and generating numerical superiority."',
    juegoPosAutor: "— Flavio Robatto",
    leerEnsayo: "Read the full essay",
    sbCode: "SB",
    sbTitle: "Base System",
    fdCode: "FD",
    fdTitle: "Defensive Phase",
    ipCode: "IP",
    ipTitle: "Build-up and Progression",
    // Fases del juego
    fasesEyebrow: "Organization",
    fasesTitle: "Phases of Play",
    faseIniciacionLabel: "Phase 1",
    faseIniciacionTitle: "Build-up",
    faseCreacionLabel: "Phase 2",
    faseCreacionTitle: "Creation",
    faseFinalizacionLabel: "Phase 3",
    faseFinalizacionTitle: "Finishing",
    faseFinalizacionFormacion: "1-2-3-2-3 overloaded",
    // Principios de juego
    principiosEyebrow: "Summary",
    principiosTitle: "Principles of Play",
    principiosIntroPre: "The attacking and defensive principles are detailed in the",
    principiosLink: "Methodology Concept Map",
  },
};

export default function Modelo() {
  const { lang } = useLang();
  const t = COPY[lang];
  const navItems = NAV_ITEMS[lang];
  const objetivosA = lang === "en" ? objetivosAEn : objetivosAEs;
  const objetivosB = lang === "en" ? objetivosBEn : objetivosBEs;
  const definicionModelo = lang === "en" ? definicionModeloEn : definicionModeloEs;
  return (
    <section id="modelo" className="bg-ink-900 relative">
      {/* Subnav sticky */}
      <nav className="sticky top-16 z-10 bg-ink-900/95 backdrop-blur-md border-b border-bone/10">
        <div className="container-x">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium text-bone/60 hover:text-gold-500 hover:bg-bone/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container-x py-24 md:py-36">

        {/* Encabezado */}
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-5">{t.eyebrow}</div>
          <h2 className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-bone">
            {t.title}
          </h2>
          <p className="mt-6 text-lg text-bone/60 max-w-2xl">
            {t.intro}
          </p>

          {/* Principio Fundacional */}
          <div className="mt-12 p-8 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-l-4 border-gold-500 rounded-r-2xl">
            <p className="text-xs uppercase tracking-widest text-gold-400 mb-3 font-bold">
              {t.foundationLabel}
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-bone leading-tight mb-4">
              {t.foundationTitle}
            </p>
            <p className="text-lg text-bone/80 font-semibold italic">
              {t.foundationItalic}
            </p>
            <p className="text-bone/70 mt-4 leading-relaxed">
              {t.foundationDesc}
            </p>
          </div>
        </div>

        {/* 1. Objetivos & Principios */}
        <div id="principios" className="scroll-mt-32 mb-32">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4 font-semibold">
                {t.objGeneralesI}
              </div>
              <ul className="space-y-3">
                {objetivosA.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-bone/70 text-sm leading-relaxed">
                    <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4 font-semibold">
                {t.objGeneralesII}
              </div>
              <ul className="space-y-3">
                {objetivosB.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-bone/70 text-sm leading-relaxed">
                    <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="relative p-8 md:p-12 bg-gradient-to-br from-gold-600/10 to-gold-700/5 rounded-2xl border border-gold-500/20">
              <div className="absolute top-6 left-6 text-gold-500/20 text-6xl font-display leading-none">"</div>
              <p className="relative text-xl md:text-2xl font-display font-medium text-bone/90 leading-relaxed italic text-center">
                {definicionModelo}
              </p>
            </blockquote>

            <div className="mt-8 text-center">
              <a
                href="/manual-modelo"
                className="btn-gold inline-flex items-center gap-2"
              >
                {t.verManual}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Mapa Conceptual */}
        <div id="mapa-conceptual" className="scroll-mt-32 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="eyebrow mb-5">{t.mapaEyebrow}</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
                {t.mapaTitle}
              </h3>
              <p className="text-lg text-bone/60 max-w-3xl mx-auto">
                {t.mapaIntro}
              </p>
            </div>

            {/* Idea Central */}
            <div className="mb-12 p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-500/30 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl font-bold text-gold-400">{t.ideaCentralTitle}</h4>
              </div>
              <p className="text-bone/90 text-lg leading-relaxed max-w-4xl mx-auto">
                {t.ideaCentralDesc}
              </p>
            </div>

            {/* Grid principal - 3 columnas */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Columna 1: Entrenamiento Integrado */}
              <div className="space-y-6">
                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4 font-semibold">
                    {t.entIntegradoLabel}
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    {t.entIntegradoDesc}
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.tareasJuegoTitle}</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        {t.tareasJuegoItems.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.manipVariablesTitle}</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        {t.manipVariablesItems.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.objetivoTitle}</h5>
                      <p className="text-xs text-bone/60">
                        {t.objetivoDesc}
                      </p>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.transferTitle}</h5>
                      <p className="text-xs text-bone/60">
                        {t.transferDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-4 font-semibold">
                    {t.areaFisicaLabel}
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    {t.areaFisicaDesc}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <h6 className="text-xs font-semibold text-purple-400 mb-2">{t.trabajoCampoTitle}</h6>
                      <ul className="text-[10px] text-bone/60 space-y-1">
                        {t.trabajoCampoItems.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <h6 className="text-xs font-semibold text-purple-400 mb-2">{t.trabajoGymTitle}</h6>
                      <ul className="text-[10px] text-bone/60 space-y-1">
                        {t.trabajoGymItems.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-ink-950 rounded-lg border border-bone/10">
                    <p className="text-xs text-bone/60">
                      <span className="font-semibold text-bone">{t.objetivosLabel}</span> {t.objetivosListInline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna 2: Modelo de Juego (Centro) */}
              <div className="lg:row-span-2">
                <div className="card-dark h-full bg-gradient-to-br from-gold-600/10 to-gold-700/5 border-2 border-gold-500/30">
                  <div className="text-center mb-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/40 mb-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold">
                        {t.modeloJuegoLabel}
                      </span>
                    </div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-3">
                      {t.modeloJuegoTitle}
                    </h4>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-ink-950/50 rounded-xl border border-gold-500/20">
                      <h5 className="font-display text-lg font-bold text-gold-400 mb-4">{t.orgOfensivaTitle}</h5>
                      <p className="text-sm text-bone/70 mb-4">{t.orgOfensivaSub}</p>
                      <div className="space-y-2 text-sm text-bone/70">
                        <div className="flex items-start gap-2">
                          <span className="text-gold-500 font-bold flex-shrink-0">①</span>
                          <p>{t.ofensiva1}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gold-500 font-bold flex-shrink-0">②</span>
                          <p>{t.ofensiva2}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gold-500 font-bold flex-shrink-0">③</span>
                          <p>{t.ofensiva3}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-ink-950/50 rounded-xl border border-blue-500/20">
                      <h5 className="font-display text-lg font-bold text-blue-400 mb-4">{t.orgDefensivaTitle}</h5>
                      <p className="text-sm text-bone/70 mb-4">{t.orgDefensivaSub}</p>
                      <div className="space-y-2 text-sm text-bone/70">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold flex-shrink-0">④</span>
                          <p>{t.defensiva1}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold flex-shrink-0">⑤</span>
                          <p>{t.defensiva2}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold flex-shrink-0">⑥</span>
                          <p>{t.defensiva3}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-xl text-center">
                      <h5 className="font-display text-base font-bold text-red-400 mb-2">
                        {t.tomaDecisionesTitle}
                      </h5>
                      <p className="text-xs text-bone/60">
                        {t.tomaDecisionesDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna 3: Planificación y Evaluación */}
              <div className="space-y-6">
                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 font-semibold">
                    {t.planificacionLabel}
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    {t.planificacionDesc}
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.microcicloTitle}</h5>
                      <div className="grid grid-cols-5 gap-1 text-[10px] text-center mt-3">
                        {["MD-1", "MD-2", "MD-3", "MD-4", "MD"].map((day) => (
                          <div key={day} className="p-2 bg-blue-500/10 rounded">
                            <div className="font-bold text-blue-400">{day}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.microdosisTitle}</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        {t.microdosisItems.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.gestionCargaTitle}</h5>
                      <ul className="text-xs text-bone/60 space-y-1">
                        {t.gestionCargaItems.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </div>
                    <div className="p-4 bg-ink-950 rounded-lg border border-bone/10">
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{t.factoresTitle}</h5>
                      <p className="text-xs text-bone/60">
                        {t.factoresDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-dark">
                  <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-4 font-semibold">
                    {t.evaluacionLabel}
                  </div>
                  <p className="text-sm text-bone/60 mb-6">
                    {t.evaluacionDesc}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {t.evaluacionCards.map((item, idx) => (
                      <div key={idx} className="p-3 bg-ink-950 rounded-lg border border-bone/10">
                        <h6 className="text-xs font-semibold text-green-400 mb-2">{item.title}</h6>
                        <ul className="text-[10px] text-bone/60 space-y-0.5">
                          {item.items.map((i, j) => <li key={j}>• {i}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ciclo Continuo */}
            <div className="card-dark bg-gradient-to-r from-ink-800 to-ink-900 border-2 border-gold-500/30">
              <div className="text-center mb-6">
                <h4 className="font-display text-xl font-bold text-bone mb-2">
                  {t.cicloTitle}
                </h4>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {t.cicloSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="px-4 py-3 bg-ink-950 rounded-xl border border-gold-500/20 text-center min-w-[140px]">
                      <div className="font-display font-bold text-gold-400 mb-1">{step.label}</div>
                      <div className="text-xs text-bone/60">{step.desc}</div>
                    </div>
                    {idx < 4 && (
                      <svg className="w-6 h-6 text-gold-500/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Objetivo Final */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-500/30 rounded-2xl text-center">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-3 font-semibold">
                {t.objetivoFinalLabel}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-display text-lg font-bold text-bone mb-2">{t.jugadorTitle}</h5>
                  <ul className="text-sm text-bone/70 space-y-1">
                    {t.jugadorItems.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h5 className="font-display text-lg font-bold text-bone mb-2">{t.equipoTitle}</h5>
                  <ul className="text-sm text-bone/70 space-y-1">
                    {t.equipoItems.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-ink-950/50 rounded-xl border border-gold-500/20">
                <p className="font-display text-lg font-bold text-gold-400">
                  {t.rendimientoSostenible}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Protocolo Operativo */}
        <div id="protocolo" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-5">{t.protocoloEyebrow}</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
              {t.protocoloTitle}
            </h3>
            <p className="text-lg text-bone/60 max-w-xl">
              {t.protocoloIntro}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Fases principales */}
            <div className="grid md:grid-cols-4 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden mb-8">
              <div className="bg-gradient-to-br from-green-900/20 to-green-950/10 p-6 text-center border-b-4 border-green-600">
                <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-2 font-semibold">{t.fase1Label}</div>
                <h4 className="font-display text-xl font-bold text-bone">{t.fase1Title}</h4>
              </div>
              <div className="bg-gradient-to-br from-gold-900/20 to-gold-950/10 p-6 text-center border-b-4 border-gold-500">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-2 font-semibold">{t.fase2Label}</div>
                <h4 className="font-display text-xl font-bold text-bone">{t.fase2Title}</h4>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/10 p-6 text-center border-b-4 border-blue-600">
                <div className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2 font-semibold">{t.fase3Label}</div>
                <h4 className="font-display text-xl font-bold text-bone">{t.fase3Title}</h4>
              </div>
              <div className="bg-gradient-to-br from-red-900/20 to-red-950/10 p-6 text-center border-b-4 border-red-600">
                <div className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2 font-semibold">{t.fase4Label}</div>
                <h4 className="font-display text-xl font-bold text-bone">{t.fase4Title}</h4>
              </div>
            </div>

            {/* Contenido detallado */}
            <div className="space-y-8">
              {/* Pre-Entrenamiento */}
              <div className="card-dark">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-black text-green-400">-2h</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">{t.preEntTitle}</h4>
                    <p className="text-bone/60 text-sm">{t.preEntSub}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-3 font-semibold">{t.llegadaStaffTitle}</div>
                    <ul className="space-y-2 text-sm text-bone/70">
                      {t.llegadaStaffItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-bone/10 text-xs text-bone/50">
                      {t.llegadaStaffResp}
                    </div>
                  </div>

                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-3 font-semibold">{t.reunionMedicaTitle}</div>
                    <ul className="space-y-2 text-sm text-bone/70">
                      {t.reunionMedicaItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-bone/10 text-xs text-bone/50">
                      {t.reunionMedicaResp}
                    </div>
                  </div>

                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-green-400 mb-3 font-semibold">{t.preSesionTitle}</div>
                    <ul className="space-y-2 text-sm text-bone/70">
                      {t.preSesionItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-bone/10 text-xs text-bone/50">
                      {t.preSesionResp}
                    </div>
                  </div>
                </div>
              </div>

              {/* Entrenamiento en Campo */}
              <div className="card-dark border-l-4 border-gold-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-black text-gold-400">0:00</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">{t.campoTitle}</h4>
                    <p className="text-bone/60 text-sm">{t.campoSub}</p>
                  </div>
                </div>

                <div className="mb-6 p-5 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                  <p className="text-bone/80 text-sm leading-relaxed">
                    <span className="font-semibold text-gold-400">{t.campoPrincipioLabel}</span> {t.campoPrincipioDesc}
                  </p>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  {t.bloques.map((bloque) => (
                    <div key={bloque.num} className="bg-ink-950 rounded-xl p-4 border border-bone/10 text-center">
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-3">
                        <span className="font-display font-bold text-gold-400">{bloque.num}</span>
                      </div>
                      <h5 className="font-display text-sm font-bold text-bone mb-2">{bloque.title}</h5>
                      <p className="text-xs text-bone/50 leading-relaxed">{bloque.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Entrenamiento */}
              <div className="card-dark">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <span className="font-display text-xl font-black text-blue-400">Post</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">{t.postEntTitle}</h4>
                    <p className="text-bone/60 text-sm">{t.postEntSub}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <h5 className="font-display text-lg font-bold text-bone mb-4">{t.fuerzaTitle}</h5>
                    <ul className="space-y-2 text-sm text-bone/70">
                      {t.fuerzaItems.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>

                  <div className="bg-ink-950 rounded-xl p-5 border border-bone/10">
                    <h5 className="font-display text-lg font-bold text-bone mb-4">{t.recuperacionTitle}</h5>
                    <ul className="space-y-2 text-sm text-bone/70">
                      {t.recuperacionItems.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post-Sesión Staff */}
              <div className="card-dark bg-gradient-to-br from-red-900/10 to-red-950/5 border-l-4 border-red-600">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="font-display text-base font-black text-red-400">{t.postStaffLabel}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold text-bone mb-2">{t.postStaffTitle}</h4>
                    <p className="text-bone/60 text-sm">{t.postStaffSub}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {t.postStaffCards.map((card, i) => (
                    <div key={i} className="bg-ink-950 rounded-xl p-4 border border-bone/10">
                      <p className="text-sm text-bone/70">{card}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-bone/50">
                  {t.postStaffResp}
                </div>
              </div>
            </div>

            {/* Nota final */}
            <div className="mt-12 max-w-4xl mx-auto p-6 bg-gold-500/5 border border-gold-500/20 rounded-xl text-center">
              <p className="text-bone/80 leading-relaxed">
                <span className="font-display font-bold text-gold-400">{t.sistemaIntegradoLabel}</span>{t.sistemaIntegradoDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Juego de Posición */}
        <div id="juego-posicion" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">{t.juegoPosEyebrow}</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone mb-6">
              {t.juegoPosTitle}
            </h3>
            <blockquote className="border-l-4 border-gold-500 pl-6 italic text-bone/70 text-lg leading-relaxed">
              {t.juegoPosCita}
            </blockquote>
            <p className="text-xs text-bone/40 mt-4">{t.juegoPosAutor}</p>

            <a
              href="/el-arte-de-ser-protagonistas"
              className="inline-flex items-center gap-2 mt-6 text-sm text-gold-400 hover:text-gold-500 transition-colors group"
            >
              <span>{t.leerEnsayo}</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Grid de 3 sistemas tácticos */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sistema Base 1-4-3-3 */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    {/* Portero */}
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    {/* Defensa - 4 */}
                    <circle cx="70" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="120" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="230" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    {/* Mediocampo - 3 */}
                    <circle cx="90" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="90" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="150" cy="230" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="210" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="210" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    {/* Delantera - 3 */}
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">{t.sbCode}</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">{t.sbTitle}</div>
                  <div className="text-xs text-bone/50">1-4-3-3</div>
                </div>
              </div>
            </div>

            {/* Fase Defensiva 1-4-1-4-1 */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-blue-900 to-blue-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    {/* Portero */}
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    {/* Defensa - 4 */}
                    <circle cx="70" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="120" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="230" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    {/* Pivote - 1 */}
                    <circle cx="150" cy="240" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="245" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    {/* Mediocampo - 4 */}
                    <circle cx="60" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="120" cy="170" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="180" cy="170" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="240" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                    {/* Delantero - 1 */}
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">{t.fdCode}</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">{t.fdTitle}</div>
                  <div className="text-xs text-bone/50">1-4-1-4-1</div>
                </div>
              </div>
            </div>

            {/* Inicio y Progresión 1-2-3-2-3 */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-purple-900 to-purple-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    {/* Portero */}
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    {/* Defensa central - 2 */}
                    <circle cx="120" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    {/* Pivotes + Laterales - 3 */}
                    <circle cx="60" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="150" cy="260" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="265" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="240" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    {/* Interiores - 2 */}
                    <circle cx="100" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="100" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="200" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="200" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    {/* Delantera - 3 */}
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">{t.ipCode}</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">{t.ipTitle}</div>
                  <div className="text-xs text-bone/50">1-2-3-2-3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Fases del juego */}
        <div id="fases" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">{t.fasesEyebrow}</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              {t.fasesTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fase 1: Iniciación */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-green-900 to-green-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    <circle cx="70" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="120" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="290" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="230" cy="300" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="305" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    <circle cx="90" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="90" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="150" cy="230" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="210" cy="210" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="210" y="215" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">{t.faseIniciacionLabel}</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">{t.faseIniciacionTitle}</div>
                  <div className="text-xs text-bone/50">1-4-3-3</div>
                </div>
              </div>
            </div>

            {/* Fase 2: Creación */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-blue-900 to-blue-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="360" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="365" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    <circle cx="120" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="310" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="315" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="60" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="150" cy="260" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="265" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="240" cy="250" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    <circle cx="100" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="100" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="200" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="200" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="70" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="80" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="100" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">{t.faseCreacionLabel}</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">{t.faseCreacionTitle}</div>
                  <div className="text-xs text-bone/50">1-2-3-2-3</div>
                </div>
              </div>
            </div>

            {/* Fase 3: Finalización */}
            <div className="group">
              <div className="bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/30 transition-colors">
                <div className="aspect-[3/4] bg-gradient-to-b from-red-900 to-red-950 relative p-6">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <line x1="20" y1="200" x2="280" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="90" y="20" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="20" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="90" y="330" width="120" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <rect x="120" y="355" width="60" height="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <circle cx="150" cy="245" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="249" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">1</text>
                    <circle cx="120" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="120" y="184" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">3</text>
                    <circle cx="180" cy="180" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="180" y="184" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">4</text>
                    <circle cx="60" cy="130" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="60" y="134" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">2</text>
                    <circle cx="150" cy="140" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="144" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">6</text>
                    <circle cx="240" cy="130" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="240" y="134" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">5</text>
                    <circle cx="100" cy="75" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="100" y="79" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">8</text>
                    <circle cx="200" cy="75" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="200" y="79" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">10</text>
                    <circle cx="70" cy="45" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="70" y="49" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">7</text>
                    <circle cx="150" cy="35" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="150" y="39" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">9</text>
                    <circle cx="230" cy="45" r="12" fill="#D4A24C" stroke="#0A0A0B" strokeWidth="2" />
                    <text x="230" y="49" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0A0A0B">11</text>
                  </svg>
                </div>
                <div className="p-5 border-t border-bone/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1">{t.faseFinalizacionLabel}</div>
                  <div className="font-display text-lg font-bold text-bone leading-tight mb-1">{t.faseFinalizacionTitle}</div>
                  <div className="text-xs text-bone/50">{t.faseFinalizacionFormacion}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Principios de juego */}
        <div id="principios-juego" className="scroll-mt-32 mb-32">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-4">{t.principiosEyebrow}</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-bone">
              {t.principiosTitle}
            </h3>
            <p className="mt-4 text-bone/60">
              {t.principiosIntroPre}
              <a href="#mapa-conceptual" className="text-gold-500 hover:text-gold-400 ml-1">
                {t.principiosLink}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
