// src/sections/Experiencia.jsx
import React from "react";
import { EXPERIENCE } from "../data/experience";

export default function Experiencia() {
  return (
    <section id="experiencia" className="bg-white border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>
        <p className="mt-2 text-slate-600">
          Línea de tiempo con los principales hitos del cuerpo técnico.
        </p>

        <div className="mt-8 relative">
          {/* Línea vertical */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden />

          <ul className="space-y-8">
            {EXPERIENCE.sort((a, b) => a.year - b.year).map((item, idx) => (
              <li key={`${item.year}-${idx}`} className="relative pl-16">
                {/* Punto en la línea */}
                <span className="absolute left-5 top-2 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                <div className="rounded-xl border p-4 hover:shadow-sm transition">
                  <div className="flex flex-wrap items-center gap-4">
                    {item.badge ? (
                      <img
                        src={item.badge}
                        alt={`${item.club} escudo`}
                        className="h-12 w-12 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded bg-slate-100" />
                    )}
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span className="text-blue-700 font-semibold tabular-nums">{item.year}</span>
                        <h3 className="text-lg font-semibold leading-tight truncate">{item.club}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{item.role}</p>
                      <p className="mt-1 text-slate-700">{item.achievement}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
