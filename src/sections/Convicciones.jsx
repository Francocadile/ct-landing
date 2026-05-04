export default function Convicciones() {
  return (
    <section className="bg-ink-950 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Imagen */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/img/flavio/robato-guardiola.jpg"
                alt="Flavio Robatto y Pep Guardiola en Manchester"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-bone/10 rounded-2xl pointer-events-none" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-bone/40">
              Manchester · 2025
            </p>
          </div>

          {/* Texto */}
          <div className="md:col-span-7">
            <div className="eyebrow mb-5">Convicciones</div>
            <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone leading-[1.05]">
              Una idea,<br />
              <span className="italic text-gold-500">en cualquier contexto.</span>
            </h2>

            <div className="mt-8 space-y-5 text-bone/70 text-lg leading-relaxed max-w-xl">
              <p>
                Creemos en una idea de juego que no depende del contexto, del rival
                ni del escenario. Ser protagonistas a través del balón, construir
                una identidad reconocible y sostener convicciones incluso en la
                incertidumbre. Trabajamos desde los principios del juego de
                posición: ocupar bien los espacios, juntarnos a través del pase,
                generar superioridades y usar la amplitud para llegar con ventaja
                a zonas de definición.
              </p>
              <p>
                La posesión es el medio: nos permite controlar, desgastar y crear
                situaciones de gol. Para sostenerlo hace falta convicción,
                valentía, paciencia y conocimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
