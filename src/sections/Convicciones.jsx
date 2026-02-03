export default function Convicciones() {
  return (
    <section id="convicciones" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50/60 to-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/img/flavio/robato-guardiola.jpg"
                  alt="Flavio Robatto"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-sm text-slate-500">Manchester · 2025</div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Una idea, en cualquier contexto
              </h2>

              <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">
                <p>
                  Creemos en una idea de juego que no depende del contexto, del rival ni del
                  escenario. Ser protagonistas a través del balón, construir una identidad
                  reconocible y sostener convicciones incluso en la incertidumbre. Trabajamos desde
                  los principios del juego de posición: ocupar bien los espacios, juntarnos a través
                  del pase, generar superioridades y usar la amplitud para llegar con ventaja a zonas
                  de definición.
                </p>

                <p>
                  La posesión es el medio: nos permite controlar, desgastar y crear situaciones de
                  gol. Para sostenerlo hace falta convicción, valentía, paciencia y conocimiento.
                </p>
              </div>

              <div className="mt-6 text-right text-sm italic text-slate-600">
                “En el fútbol nunca se sabe.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
