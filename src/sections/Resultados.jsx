// src/sections/Resultados.jsx
import React from "react";
import { RESULTADOS } from "../data/resultados";

function Card({ year, club, badge, eff, note }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow hover:shadow-lg">
      <div className="flex items-center gap-4">
        {/* Escudo grande */}
        {badge ? (
          <img
            src={badge}
            alt={club}
            className="h-16 w-16 flex-none object-contain sm:h-20 sm:w-20"
            loading="lazy"
          />
        ) : (
          <div className="h-16 w-16 flex-none rounded bg-slate-100 sm:h-20 sm:w-20" />
        )}

        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-blue-600">{year}</span>
            <h3 className="truncate text-lg font-semibold">{club}</h3>
          </div>

          {/* % ENORME */}
          <div className="mt-1 flex items-end gap-2">
            <span className="text-4xl font-extrabold leading-none sm:text-5xl">
              {eff}%
            </span>
            <span className="pb-1 text-sm font-medium text-slate-500">Efectividad</span>
          </div>

          {note ? <p className="mt-2 text-sm text-slate-600">{note}</p> : null}
        </div>
      </div>

      {/* barra inferior azul para “look” tipo lámina */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-blue-600/80 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

export default function Resultados() {
  return (
    <section id="resultados" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Resultados del Cuerpo Técnico
          </h2>
          <p className="hidden text-sm text-slate-600 sm:block">
            Efectividad anual con escudo y logros destacados.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTADOS.map((r) => (
            <Card key={`${r.year}-${r.club}`} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

