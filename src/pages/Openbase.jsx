import React from "react";

export default function Openbase() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">OPENBASE</h1>
      <p className="mt-2 text-slate-600">
        La plataforma que conecta planificación, seguimiento y comunicación del equipo.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-semibold text-slate-900">¿Qué es OPENBASE?</h2>

          <div className="mt-3 space-y-4 text-slate-600">
            <p>
              OPENBASE es una herramienta de trabajo diario pensada para el cuerpo técnico y el
              plantel. Centraliza la planificación semanal, el armado de sesiones y la
              comunicación de objetivos y contenidos, para que todos tengan claridad sobre el
              “qué”, el “cómo” y el “por qué” del entrenamiento.
            </p>
            <p>
              Permite cargar rutinas, tareas específicas y controles de carga, además de
              registrar wellness/RPE y otros indicadores de percepción. Con esa información se
              genera una lectura rápida por jugador y por equipo, facilitando el ajuste de
              estímulos y la toma de decisiones en cada microciclo.
            </p>
            <p>
              También integra video y reportes: compartís clips, consignas y feedback, y armás
              resúmenes que conectan el entrenamiento con el plan de partido. El resultado es un
              flujo más ordenado, medible y transparente, tanto para staff como para jugadores.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base font-semibold text-slate-900">Video</h2>
            <a
              href="https://www.youtube.com/watch?v=MUE6Bb-ZfDo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Ver en YouTube
            </a>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/MUE6Bb-ZfDo"
                title="OPENBASE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Si el video no carga, probá abrirlo desde el botón “Ver en YouTube”.
          </p>
        </section>
      </div>
    </main>
  );
}
