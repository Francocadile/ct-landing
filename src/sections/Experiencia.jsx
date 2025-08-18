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

        {/* Timeline horizontal sin scroll (se comprime por columnas) */}
        <div className="relative mt-8">
          {/* Línea guía */}
          <div className="pointer-events-none absolute left-0 right-0 top-5 h-px bg-slate-200" />

          {/* Una columna por elemento; todas caben en el ancho disponible */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
          >
            {items.map((it, i) => (
              <div key={`${it.team}-${i}`} className="relative text-center">
                {/* Punto en la línea */}
                <span className="absolute left-1/2 top-[14px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-600 bg-white shadow" />

                {/* Tarjeta ultra compacta */}
                <div className="pt-6">
                  <div className="mx-auto h-9 w-9 overflow-hidden rounded-md border bg-white p-1">
                    {it.logo ? (
                      <img
                        src={it.logo}
                        alt={it.team}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[10px] font-semibold text-slate-600">
                        {initials(it.team)}
                      </div>
                    )}
                  </div>

                  <div className="mt-1 truncate text-[12px] font-semibold" title={it.team}>
                    {it.team}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {fmtRange(it.start, it.end)}
                  </div>
                  <div className="text-[10px] text-blue-700">{it.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota opcional: quitá si no la querés */}
          {/* <div className="mt-3 text-[10px] text-slate-500">
            Fuente: Wikipedia / confirmaciones propias.
          </div> */}
        </div>
      </div>
    </section>
  );
}
