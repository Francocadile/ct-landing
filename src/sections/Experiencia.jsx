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

        {/* Timeline horizontal con scroll + snap */}
        <div className="relative mt-8">
          {/* Línea guía (solo en desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block" />

          {/* Carrusel horizontal */}
          <div className="-mx-4 overflow-x-auto pb-6">
            <div className="mx-4 flex min-w-max gap-6 snap-x snap-mandatory">
              {items.map((it, i) => (
                <div
                  key={`${it.team}-${i}`}
                  className="relative w-72 shrink-0 snap-start"
                >
                  {/* Punto sobre la tarjeta (alineado con la línea guía) */}
                  <span className="absolute left-1/2 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-600 bg-white shadow md:block" />

                  <article className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
                    <div className="flex items-center gap-3">
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
                        <div className="truncate text-base font-semibold">
                          {it.team}
                        </div>
                        <div className="text-sm text-blue-700">{it.role}</div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Indicador sutil de desplazamiento (opcional) */}
          <div className="mt-2 text-xs text-slate-500">
            Desliza horizontalmente para ver toda la trayectoria →
          </div>
        </div>
      </div>
    </section>
  );
}
