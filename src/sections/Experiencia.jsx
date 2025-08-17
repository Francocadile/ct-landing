// src/sections/Experiencia.jsx
import React from "react";
import { EXPERIENCE, EXPERIENCE_INTRO } from "../data/experience";

function Badge({ children }) {
  return (
    <span className="rounded-full border bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export default function Experiencia() {
  // Ordenar por "order" ascendente (1 = más reciente)
  const items = [...EXPERIENCE].sort((a, b) => a.order - b.order);

  return (
    <section id="experiencia" className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Experiencia</h2>
          {EXPERIENCE_INTRO && (
            <p className="mt-2 max-w-3xl text-slate-600">{EXPERIENCE_INTRO}</p>
          )}
        </header>

        {/* Timeline */}
        <ol className="relative ml-3 space-y-8 border-l border-slate-200">
          {items.map((item) => (
            <li key={item.id} className="ml-6">
              {/* Punto de la línea */}
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow ring-2 ring-blue-100" />

              {/* Contenido */}
              <div className="rounded-xl border bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge>{item.period}</Badge>
                    {item.country && <Badge>{item.country}</Badge>}
                  </div>
                </div>

                <h3 className="mt-2 text-xl font-semibold">{item.club}</h3>
                <p className="text-slate-700">{item.role}</p>

                {Array.isArray(item.achievements) && item.achievements.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                    {item.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Vacío */}
        {items.length === 0 && (
          <p className="text-slate-500">
            (Aún no hay registros. Agrega tu trayectoria en{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">
              src/data/experience.js
            </code>
            )
          </p>
        )}
      </div>
    </section>
  );
}
