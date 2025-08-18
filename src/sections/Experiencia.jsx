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
        <p className="mt-2 text-slate-600">Trayectoria completa de Flavio Robatto.</p>

        {/* Grilla compacta, sin desplazamiento horizontal */}
        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {items.map((it, i) => (
            <article
              key={`${it.team}-${i}`}
              className="rounded-xl border bg-white p-3 shadow-sm transition hover:shadow-md"
              title={`${it.team} · ${fmtRange(it.start, it.end)} · ${it.country}`}
            >
              <div className="flex items-center gap-2">
                {it.logo ? (
                  <img
                    src={it.logo}
                    alt={it.team}
                    className="h-10 w-10 rounded-md border bg-white object-contain p-1"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-slate-50 text-xs font-semibold text-slate-600">
                    {initials(it.team)}
                  </div>
                )}

                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500">
                    {fmtRange(it.start, it.end)} · {it.country}
                  </div>
                  <div className="truncate text-sm font-semibold">{it.team}</div>
                  <div className="text-[12px] text-blue-700">{it.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

