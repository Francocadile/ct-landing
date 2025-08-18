// src/sections/Experiencia.jsx
import React from "react";
import { EXPERIENCE } from "../data/experience";

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 px-3 py-2 text-center">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-base font-semibold text-slate-800">{value}</div>
    </div>
  );
}

function Period({ start, end }) {
  const from = new Date(start);
  const to = end ? new Date(end) : null;
  const y = (d) => (d ? d.getFullYear() : "Actualidad");
  return (
    <span className="text-sm text-slate-600">
      {y(from)} – {y(to)}
    </span>
  );
}

export default function Experiencia() {
  const items = [...EXPERIENCE].sort(
    (a, b) => new Date(b.start) - new Date(a.start)
  );

  return (
    <section id="experiencia" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Experiencia</h2>
          <span className="text-sm text-slate-500">
            Línea de tiempo · cargos y desempeño
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-4 p-4">
                <img
                  src={it.logo}
                  alt={it.club}
                  className="h-14 w-14 flex-none rounded-xl border bg-white object-contain p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {it.club}
                  </h3>
                  <div className="text-sm text-slate-600">{it.role}</div>
                  <Period start={it.start} end={it.end} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 pt-0">
                <Stat label="Partidos" value={it.matches ?? "—"} />
                <Stat label="Puntos/PP" value={it.ppg ? it.ppg.toFixed(2) : "—"} />
                <Stat
                  label="País"
                  value={it.country}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
