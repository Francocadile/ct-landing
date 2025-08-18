// src/sections/Highlights.jsx
import React from "react";

const KPIS = [
  {
    value: "3",
    label: "Títulos",
    note: "Clausura’24 · Absoluto’24 · Verano’25",
  },
  {
    value: "3",
    label: "Comp. internacionales",
    note: "Libertadores’22 · Libertadores’24 (8vos) · Sudamericana’23",
  },
  {
    value: "70–90%",
    label: "Efectividad reciente",
    note: "Bolívar 2024/2025",
  },
  {
    value: "5",
    label: "Países",
    note: "ARG · BOL · COL · ECU · PER",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="border-b bg-gradient-to-br from-sky-50 via-white to-indigo-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((k, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <div className="text-4xl font-black tracking-tight text-slate-900">
                {k.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-600">
                {k.label}
              </div>
              <div className="mt-2 text-xs text-slate-500">{k.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
