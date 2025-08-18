// src/sections/Experiencia.jsx
import React, { useMemo } from "react";
import { FLAVIO_TIMELINE } from "../data/experience";

function fmtRange(start, end) {
  const ys = start?.split("-")[0] ?? "";
  const ye = end ? end.split("-")[0] : "Presente";
  return ys === ye ? ys : `${ys}–${ye}`;
}

function initials(name) {
  return (name || "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default function Experiencia() {
  const items = useMemo(
    () => [...FLAVIO_TIMELINE].sort((a, b) => (a.start > b.start ? 1 : -1)),
    []
  );

  return (
    <section id="experiencia" className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Experiencia</h2>
        <p className="mt-2 text-slate-600">
          Trayectoria completa de <strong>Flavio Robatto</strong> como DT y Asistente.
        </p>

        <ol className="relative mt-8 space-y-6 border-l pl-6">
          {items.map((it, i) => (
            <li key={`${it.team}-${i}`} className="relative">
              {/* Punto de la línea */}
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-blue-600 bg-white"></span>

              <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
                {it.logo ? (
                  <img
                    src={it.logo}
                    alt={it.team}
                    className="h-12 w-12 rounded-md border bg-white object-contain p-1"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-slate-50 text-sm font-semibold text-slate-600">
                    {initials(it.team)}
                  </div>
                )}

                <div className="min-w-0">
                  <div className="text-sm text-slate-500">
                    {fmtRange(it.start, it.end)} · {it.country}
                  </div>
                  <div className="truncate text-base font-semibold">{it.team}</div>
                  <div className="text-sm text-blue-700">{it.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
