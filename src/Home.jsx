// src/Home.jsx
export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Cuerpo Técnico
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Sitio en construcción. Próximamente: staff, filosofía de juego,
            experiencia y contacto.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#contacto"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Contacto
            </a>
            <a
              href="#plantel"
              className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
            >
              Ver Staff
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder staff / se completa después */}
      <section id="plantel">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Staff</h2>
          <p className="mt-2 text-slate-600">
            Esta sección se completará con las tarjetas del equipo.
          </p>
        </div>
      </section>
    </main>
  );
}
