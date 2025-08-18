// src/sections/Resultados.jsx
import React from "react";
import { RESULTS } from "../data/results";

export default function Resultados() {
  return (
    <section id="resultados" className="bg-white border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Resultados y Efectividad</h2>
        <p className="mt-2 text-slate-600">
          Resumen anual con porcentaje de efectividad y logros destacados.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.sort((a, b) => a.year - b.year).map((r) => (
            <article
              key={r.year}
              className="rounded-2xl border p-5 hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={r.badge}
                  alt={`${r.club} escudo`}
                  className="h-16 w-16 object-contain drop-shadow"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {r.club} <span className="text-slate-400">· {r.year}</span>
                  </h3>
                  <p className="text-4xl font-black tracking-tight mt-1">
                    {r.percent}
                    <span className="text-xl align-super">%</span>
                  </p>
                </div>
              </div>

              {r.note && (
                <p className="mt-3 text-sm text-slate-700">
                  {r.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

