// src/sections/Experiencia.jsx
import React from "react";
import { EXPERIENCIA } from "../data/experiencia";

export default function Experiencia() {
  return (
    <section id="experiencia" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>
        <p className="mt-2 text-slate-600">
          Resumen de hitos por año, club y logros principales.
        </p>

        {/* Timeline */}
        <ol className="relative mt-10 border-s-2 border-slate-200">
          {EXPERIENCIA.map((item, idx) => (
            <li key={idx} className="mb-10 ms-6">
              <span className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-8 ring-white">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                {/* Badge */}
                {item.badge ? (
                  <img
                    src={item.badge}
                    alt={item.club}
                    className="h-14 w-14 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-14 w-14 rounded bg-slate-100" />
                )}

                {/* Main */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                    <h3 className="text-lg font-semibold">
                      {item.club} <span className="text-slate-500">· {item.role}</span>
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">{item.country}</p>

                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                    {item.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
