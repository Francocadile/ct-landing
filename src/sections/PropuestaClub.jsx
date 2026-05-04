const ITEMS = [
  {
    title: "Competitividad real",
    desc: "El equipo compite desde el primer día, con hambre y una identidad clara.",
  },
  {
    title: "Jugadores que crecen",
    desc: "Entrenamos para potenciar futbolistas, sumar puntos y dejar activos para el club.",
  },
  {
    title: "Gestión de grupo",
    desc: "Un vestuario unido, con roles claros y todos tirando para el mismo lado.",
  },
  {
    title: "Proceso que queda",
    desc: "No dependemos de un resultado: dejamos procesos y una forma de trabajar que perdura.",
  },
];

export default function PropuestaClub() {
  return (
    <section id="propuesta" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">Propuesta</div>
          <h2 className="display-2 text-[clamp(2rem,5vw,3.75rem)] text-bone">
            ¿Qué le damos<br />a un club?
          </h2>
          <p className="mt-6 text-lg text-bone/60 max-w-xl">
            No vendemos humo: traemos trabajo, orden y una idea de fútbol que se nota
            en la cancha y en el vestuario.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="bg-ink-900 p-8 md:p-10 hover:bg-ink-800 transition-colors group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-gold-500 text-2xl font-bold">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-bone">
                  {item.title}
                </h3>
              </div>
              <p className="text-bone/60 leading-relaxed text-[15px] md:text-base pl-12">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
