const CLUBS = [
  { name: "Bolívar", logo: "/img/clubs/bolivar.png", country: "Bolivia" },
  { name: "Millonarios", logo: "/img/clubs/millonarios.png", country: "Colombia" },
  { name: "Barcelona SC", logo: "/img/clubs/barcelona-sc.png", country: "Ecuador" },
  { name: "Cúcuta Deportivo", logo: "/img/clubs/cucuta-deportivo.png", country: "Colombia" },
  { name: "Atlético Huila", logo: "/img/clubs/atletico-huila.png", country: "Colombia" },
  { name: "Nacional Potosí", logo: "/img/clubs/nacional-potosi.png", country: "Bolivia" },
  { name: "Jaguares", logo: "/img/clubs/jaguares-fc.png", country: "Colombia" },
  { name: "Alianza Atlético Sullana", logo: "/img/clubs/alianza-atletico.png", country: "Perú" },
];

export default function ClubsWorked() {
  return (
    <section id="clubes" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Trayectoria</div>
          <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone">
            Clubes en los que<br />
            trabajó el cuerpo técnico
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
          {CLUBS.map((club) => (
            <div
              key={club.name}
              className="bg-ink-900 hover:bg-ink-800 transition-colors p-6 md:p-8 flex flex-col items-center justify-center min-h-[180px] group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
                <img
                  src={club.logo}
                  alt={club.name}
                  className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="font-display font-semibold text-bone text-sm md:text-base text-center leading-tight">
                {club.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-bone/40 mt-1">
                {club.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
