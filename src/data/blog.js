// src/data/blog.js

export const POSTS = [
  {
    slug: "cumplimiento-consignas-vs-gv-san-jose",
    title: "Cumplimiento de consignas vs GV San José",
    date: "2025-09-30",
    author: "Cuerpo Técnico",
    cover: "/img/blog/Cumplimiento.jpeg", // ← portada que subiste
    excerpt:
      "Lo trabajado en la semana se vio en la cancha: salida segura, juego interior para liberar por fuera, amplitud, presión alta y reorganización tras pérdida.",
    tags: ["táctica", "análisis", "presión alta", "juego de posición"],
    sections: [
      {
        h2: "Introducción",
        p: [
          "Cuando un equipo interpreta y ejecuta con claridad las consignas de la semana, el juego se ordena y las ventajas aparecen. Frente a GV San José se vieron señales nítidas: desde la salida limpia hasta la presión alta, pasando por las combinaciones por dentro, las rupturas por fuera y la reorganización defensiva.",
          "No fue casualidad: hubo intención, hábitos y una idea colectiva que se repitió en diferentes momentos del partido."
        ]
      },
      {
        h2: "Salida con seguridad",
        p: [
          "La consigna fue clara: salir desde el fondo con paciencia, sin rifar la pelota. Defensores y volantes se ofrecieron en corto y los laterales dieron apoyo para sostener líneas de pase cercanas.",
          "El estado irregular del campo pidió reducir riesgos: distancias cortas, pases seguros y progresión con balón dominado para evitar pérdidas en zonas sensibles."
        ]
      },
      {
        h2: "Juego interior para atraer y liberar por fuera",
        p: [
          "Primero por dentro para fijar rivales; después, salida hacia las bandas con laterales y extremos en ventaja. Esa secuencia —atraer en el centro y desbordar por fuera— se repitió y permitió avanzar sin pelotazos forzados.",
          "El uso del tercer hombre apareció para superar presiones: recepción de espaldas, descarga de primera y compañero libre de frente."
        ]
      },
      {
        h2: "Amplitud, 1 vs 1 y rupturas al espacio",
        p: [
          "En tres cuartos, los extremos buscaron el 1v1 respaldados por el desdoble del lateral. Se atacó con decisión el espacio entre lateral y central rival, una zona difícil de defender si se llega con velocidad.",
          "Cuando el rival basculó demasiado, el lado opuesto quedó libre y los cambios de frente abrieron la defensa, alternando carga de un costado y ataque del otro."
        ]
      },
      {
        h2: "Adaptarse al contexto: cuidar los pases",
        p: [
          "La lectura del terreno fue clave. Para evitar malos piques, el equipo mantuvo cercanía entre compañeros y priorizó la calidad del pase sobre la velocidad de circulación.",
          "Progresar con dominio antes que arriesgar en largo: una decisión simple que sostuvo el control del juego."
        ]
      },
      {
        h2: "Presión alta que incomodó al rival",
        p: [
          "En saque rival, el 4-2-3-1 se adelantó para presionar hombre a hombre. Incluso los centrales saltaron sobre mediapuntas rivales para negar giros y obligar a decidir bajo presión.",
          "Varias recuperaciones se produjeron cerca del arco contrario. Si la primera ola no prosperaba, el equipo se replegaba rápido a un 4-1-4-1 compacto, basculando en bloque hacia el lado del balón."
        ]
      },
      {
        h2: "Reorganización y actitud tras pérdida",
        p: [
          "Tras pérdida, la reacción fue automática: 4-1-4-1, interiores saltando al poseedor, extremos cerrando hacia dentro y pasillos centrales negados.",
          "Hasta en laterales rivales se notó el plan: todos los posibles receptores estaban tomados para impedir salidas limpias. Intensidad con orden."
        ]
      },
      {
        h2: "Video del análisis",
        // ↓↓↓ nuevo campo soportado por BlogPost.jsx para embeber el video
        video: "https://www.youtube.com/watch?v=pCYBOw4oQfA&feature=youtu.be",
        p: [
          "Análisis en detalle de las consignas aplicadas frente a GV San José."
        ]
      }
    ]
  },

  {
    slug: "metodologia-integrada-estructural",
    title:
      "Metodología Integrada Estructural – El método que potencia el rendimiento colectivo",
    date: "2025-08-18",
    author: "Cuerpo Técnico",
    cover: "/img/blog/mie.jpg", // opcional: si no tenés imagen, podés borrar esta línea
    excerpt:
      "Entrenar como se compite: un enfoque que integra lo físico, técnico, táctico y cognitivo para potenciar la identidad de juego.",
    tags: ["metodología", "rendimiento", "periodización"],
    sections: [
      {
        h2: "Introducción",
        p: [
          "En el fútbol moderno, la diferencia no la marcan únicamente los fichajes millonarios o los sistemas de juego atractivos, sino la capacidad de entrenar como se compite.",
          "En este escenario surge la Metodología Integrada Estructural, un enfoque de entrenamiento que transforma cada tarea diaria en un puente entre la teoría y la realidad del partido.",
          "Este modelo, impulsado en Sudamérica por entrenadores como Flavio Robatto, encuentra respaldo en la literatura científica actual sobre la periodización táctica y el entrenamiento estructurado, que señalan que la unión de los componentes físico, técnico, táctico y cognitivo en cada ejercicio aumenta la transferencia al juego real y la eficiencia del proceso de entrenamiento."
        ]
      },
      {
        h2: "¿Qué es la Metodología Integrada Estructural?",
        p: [
          "La Metodología Integrada Estructural es un sistema operativo de entrenamiento que combina principios tácticos con métodos físicos para construir un modelo de juego deseado. En lugar de entrenar capacidades aisladas (como fuerza, resistencia o velocidad en sesiones separadas), esta metodología las integra dentro de situaciones de juego específicas.",
          "Optimiza el rendimiento colectivo e individual gracias a la acción sinérgica de todas las áreas: cuerpo técnico, jugadores, staff médico y dirigencia.",
          "Prioriza la idea de juego como núcleo: cada tarea está diseñada para reforzar comportamientos que luego se reproducen en la competencia.",
          "Aumenta el compromiso y la participación activa de los jugadores, porque entrenan en escenarios cercanos a los que vivirán el fin de semana.",
          "En palabras simples: no se entrena por entrenar, se entrena para jugar mejor."
        ]
      },
      {
        h2: "Fundamentos científicos del método",
        p: [
          "La investigación en ciencias del deporte ha confirmado varios de los principios que sostienen esta metodología:"
        ],
        bullets: [
          "Transferencia directa al juego: entrenar bajo la lógica del juego (y no en repeticiones descontextualizadas) mejora la toma de decisiones y la eficacia en el campo.",
          "Entrenamiento neurocognitivo: integrar percepción, decisión y ejecución bajo fatiga genera adaptaciones más cercanas a la competencia real.",
          "Sinergia condicional: los métodos integrados permiten mejorar simultáneamente capacidades condicionales (fuerza, velocidad, resistencia) y cognitivas sin perder especificidad."
        ],
        note:
          "En resumen, el sustento académico confirma que este modelo no es solo una idea innovadora, sino una metodología basada en evidencia."
      },
      {
        h2: "Cómo se organiza en la práctica",
        p: [
          "La Metodología Integrada Estructural utiliza bloques de trabajo (G1–G4) que permiten estructurar la semana de entrenamiento:"
        ],
        bullets: [
          "G1 – Posesión: ejercicios que respetan comportamientos ofensivos y defensivos, trabajando progresión, conservación y orden.",
          "G2 – Idea táctica: situaciones de juego parcial que simulan escenarios reales del rival y refuerzan el modelo.",
          "G3 – Individuales: tareas específicas por posición, orientadas al desarrollo técnico y cognitivo de cada jugador.",
          "G4 – Grupales: ejercicios colectivos ajustados al modelo y sus principios."
        ],
        p2: [
          "De este modo, cada día se conecta con la estrategia de partido, asegurando que la carga física se articule con la táctica y que la preparación tenga un sentido estructural."
        ]
      },
      {
        h2: "Beneficios para el equipo y el jugador",
        bullets: [
          "Mayor cohesión táctica: todos entrenan bajo la misma idea de juego.",
          "Eficiencia en el tiempo: en un solo ejercicio se trabajan múltiples capacidades.",
          "Prevención de lesiones: al simular situaciones reales, las adaptaciones físicas y neuromusculares son más específicas.",
          "Motivación elevada: el jugador entiende qué entrena y por qué lo entrena.",
          "Resultados sostenibles: evolución progresiva a nivel físico, mental y estratégico."
        ]
      },
      {
        h2: "Conclusión",
        p: [
          "La Metodología Integrada Estructural no es una moda ni un discurso vacío: es una forma de entrenar con coherencia, donde cada acción en la semana está pensada para potenciar lo que sucede en la cancha el fin de semana.",
          "Al unir ciencia, táctica y compromiso colectivo, este enfoque se ha convertido en un sello de los equipos que buscan competir con identidad, independientemente de los recursos o el contexto.",
          "En un fútbol cada vez más exigente, entrenar como se juega es, sin duda, la mejor forma de estar un paso adelante."
        ]
      }
    ]
  },

  {
    slug: "juego-de-posicion-identidad-tactica",
    title: "Juego de Posición – La identidad táctica que transforma equipos",
    date: "2025-08-18",
    author: "Cuerpo Técnico",
    cover: "/img/blog/juego-posicion.jpg",
    excerpt:
      "Orden estructural para generar ventajas: una filosofía que conecta ocupación racional de espacios, tiempos de juego y superioridades.",
    tags: ["táctica", "modelo de juego"],
    sections: [
      {
        h2: "Introducción",
        p: [
          "En el fútbol moderno, hablar de Juego de Posición no es simplemente referirse a un esquema táctico, sino a una filosofía de entender el juego. Este concepto, que ha marcado a grandes equipos en Europa y Sudamérica, se basa en un principio simple pero poderoso: el orden estructural genera ventajas competitivas.",
          "En palabras de Flavio Robatto: “El Juego de Posición consiste en obtener ventajas en base a un ordenamiento estructural y para ello se deben cumplir varios criterios conceptuales. Un correcto ordenamiento permite progresar en el juego.”"
        ]
      },
      {
        h2: "¿Qué es el Juego de Posición?",
        bullets: [
          "Estructura y orden: los futbolistas ocupan zonas predefinidas, pero con libertad para interpretar los momentos del partido.",
          "Ventajas constantes: el objetivo es provocar que el rival quede desordenado, generando opciones de pase y progresión.",
          "Relación espacio-tiempo: cada movimiento se relaciona con el momento oportuno y la velocidad de circulación del balón."
        ],
        p: [
          "El resultado es un equipo que no juega “a ver qué pasa”, sino que controla el caos del partido a través de la organización."
        ]
      },
      {
        h2: "Fases del Juego de Posición",
        bullets: [
          "Iniciación (1-4-3-3): el buen posicionamiento atrae rivales, abre espacios a la espalda de la presión y ofrece soluciones al poseedor.",
          "Creación (1-2-3-2-3): se busca superar líneas rivales con amplitud, alturas diferentes y jugadores entre líneas, desordenando al oponente.",
          "Finalización (1-3-2-2-3): distancias óptimas para aprovechar espacios libres y garantizar llegada de múltiples jugadores al área."
        ],
        p: [
          "Cada fase está conectada; no se trata de improvisar, sino de progresar con coherencia desde el inicio hasta el gol."
        ]
      },
      {
        h2: "Principios fundamentales",
        bullets: [
          "Superioridad numérica en salida: incluir al portero como recurso para crear un jugador extra.",
          "Tercer hombre y alturas: en la zona media, generar líneas de pase adicionales que rompan la presión rival.",
          "Finalización con volumen: garantizar que al menos seis futbolistas lleguen a zona de gol.",
          "Presión tras pérdida: defender atacando, recuperando lo antes posible.",
          "Achique de espacios: defender corriendo hacia adelante, reduciendo distancias alrededor del balón."
        ]
      },
      {
        h2: "Fundamentos científicos y prácticos",
        p: [
          "Estudios recientes confirman que los equipos que aplican el Juego de Posición mejoran indicadores de eficacia ofensiva, control de la posesión y capacidad de recuperación tras pérdida. Además, investigaciones sobre análisis de redes en fútbol muestran que este enfoque aumenta la conectividad entre jugadores, favoreciendo la cohesión táctica.",
          "En la práctica, entrenadores que utilizan este modelo logran equipos más reconocibles, con identidad de juego propia, capaces de competir con protagonismo incluso contra rivales de mayor jerarquía."
        ]
      }
    ]
  },

  {
    slug: "tecnologia-aplicada-al-futbol",
    title: "Tecnología aplicada al fútbol – La revolución silenciosa del rendimiento",
    date: "2025-08-18",
    author: "Cuerpo Técnico",
    cover: "/img/blog/tecnologia.jpg",
    excerpt:
      "Del videoanálisis al GPS: datos que se convierten en decisiones prácticas para entrenar mejor y competir con ventaja.",
    tags: ["tecnología", "carga", "videoanálisis"],
    sections: [
      {
        h2: "Introducción",
        p: [
          "El fútbol siempre fue pasión, intuición y creatividad. Sin embargo, en los últimos años se ha convertido también en un laboratorio de datos, videos y sensores.",
          "La tecnología aplicada al entrenamiento no reemplaza la esencia del juego, pero sí ofrece una ventaja competitiva imposible de ignorar: permite entender lo que antes era invisible.",
          "Hoy, equipos de élite como el Bolívar de Flavio Robatto integran sistemas de videoanálisis, GPS, software estadístico y herramientas cognitivas que transforman la forma de entrenar y competir."
        ]
      },
      {
        h2: "¿Para qué sirve la tecnología en el fútbol?",
        p: [
          "La clave no está en acumular datos, sino en convertirlos en decisiones prácticas. La tecnología aplicada al fútbol cumple varios objetivos:"
        ],
        bullets: [
          "Monitoreo físico (GPS): distancia, aceleraciones, desaceleraciones, velocidad máxima y control de cargas.",
          "Videoanálisis táctico: herramientas como Hudl Sportscode o Wyscout para desmenuzar rendimiento propio y del rival.",
          "Prevención de lesiones: detección de picos de carga o asimetrías para ajustar el entrenamiento.",
          "Desarrollo juvenil: registro longitudinal de datos y video para potenciar evolución y visibilidad."
        ],
        p2: [
          "En otras palabras, la tecnología se convierte en un puente entre la preparación invisible y el rendimiento visible del domingo."
        ]
      },
      {
        h2: "Herramientas más utilizadas",
        bullets: [
          "Hudl Sportscode, Replay y Coda: edición y análisis en vivo de partidos y entrenamientos.",
          "Wyscout: scouting y video para seguimiento de rivales y jugadores.",
          "GPS y acelerómetros: medición de cargas externas (distancias, sprints, potencia metabólica).",
          "TacticalPad: diseño de ejercicios y planes de partido.",
          "Drones y cámaras 4K: registros aéreos y de campo.",
          "Driblab y bases de datos avanzadas: estadísticas para scouting y decisiones estratégicas."
        ],
        p: [
          "El uso combinado de estas herramientas asegura que cada área del cuerpo técnico trabaje con información precisa y actualizada."
        ]
      },
      {
        h2: "Evidencia científica",
        p: [
          "La literatura deportiva respalda el uso de estas tecnologías:"
        ],
        bullets: [
          "GPS: optimiza la gestión de cargas y puede prevenir lesiones en temporadas largas.",
          "Videoanálisis: incrementa la capacidad de adaptación táctica durante el torneo.",
          "Entrenamiento cognitivo: mejora velocidad de reacción y toma de decisiones bajo presión."
        ],
        p2: [
          "La ciencia confirma que la tecnología no es un lujo, sino un recurso estratégico."
        ]
      },
      {
        h2: "El factor humano sigue siendo central",
        p: [
          "Aunque la tecnología aporte miles de datos, nada reemplaza la interpretación del cuerpo técnico.",
          "Los números no juegan solos; deben ser leídos en el contexto del modelo de juego y de la realidad del plantel.",
          "La verdadera ventaja está en integrar lo tecnológico con la experiencia, el criterio y la intuición."
        ]
      }
    ]
  }
];
