import React from "react";

export default function OpenbaseHome() {
  return (
    <section id="openbase" className="scroll-mt-24 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">OPENBASE</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            La plataforma que conecta planificación, sesiones, rutinas, wellness, videos y
            seguimiento del equipo en un solo lugar.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="/openbase"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Conocer OPENBASE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
