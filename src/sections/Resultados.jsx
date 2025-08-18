// src/sections/Resultados.jsx
import React from "react";
import { RECORDS, EFFECTIVENESS, SEASONS } from "../data/results";

function Chip({ children }) {
  return (
    <span className="rounded-full border bg-white px-2 py-0.5 text-xs text-slate-600">
      {children}
    </span>
  );
}

export default function Resultados() {
  return (
    <section id="records" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Records del Cuerpo Técnico</h2>

        {/* A) RECORDS */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Records / Logros</h3>
          <ol className="mt-4 space-y-3">
            {RECORDS.sort((a, b) => a.year - b.year).map((r, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border bg-white p-3"
              >
                <div className="flex h-12 w-12 items-center justify-center">
                  <img
                    src={r.logo}
                    alt={r.club}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-500">{r.year}</div>
                  <div className="truncate text-base font-semibold">
                    {r.title}
                  </div>
                  <div className="text-sm text-slate-600">
                    {r.club} · {r.role}
                  </div>
                  {r.details?.length ? (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {r.details.map((d, idx) => (
                        <Chip key={idx}>{d}</Chip>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* B) EFECTIVIDAD */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold">Historial de Efectividad</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EFFECTIVENESS.map((e, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border bg-gradient-to-b from-sky-50 to-white p-4"
              >
                <img
                  src={e.logo}
                  alt={e.club}
                  className="h-14 w-14 rounded-xl border bg-white p-1 object-contain"
                />
                <div className="min-w-0">
                  <div className="text-sm text-slate-500">{e.year}</div>
                  <div className="text-base font-semibold">{e.club}</div>
                  {e.note ? (
                    <div className="text-xs text-slate-600">{e.note}</div>
                  ) : null}
                </div>
                <div className="ml-auto text-2xl font-extrabold">{e.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* C) NÚMEROS POR TEMPORADA */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold">Números por Temporada</h3>

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SEASONS.map((s, i) => (
              <article
                key={i}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={s.logo}
                    alt={s.team}
                    className="h-12 w-12 rounded-lg border bg-white object-contain p-1"
                  />
                  <div className="min-w-0">
                    <div className="text-sm text-slate-500">{s.year}</div>
                    <div className="truncate text-base font-semibold">
                      {s.team}
                    </div>
                  </div>
                  <div className="ml-auto text-2xl font-extrabold">
                    {s.pct}%
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="rounded bg-slate-50 p-2">
                    <div className="text-slate-500">PJ</div>
                    <div className="font-semibold">{s.stats.pj ?? "—"}</div>
                  </div>
                  <div className="rounded bg-slate-50 p-2">
                    <div className="text-slate-500">V</div>
                    <div className="font-semibold">{s.stats.v}</div>
                  </div>
                  <div className="rounded bg-slate-50 p-2">
                    <div className="text-slate-500">E</div>
                    <div className="font-semibold">{s.stats.e}</div>
                  </div>
                  <div className="rounded bg-slate-50 p-2">
                    <div className="text-slate-500">D</div>
                    <div className="font-semibold">{s.stats.d}</div>
                  </div>
                  <div className="rounded bg-slate-50 p-2">
                    <div className="text-slate-500">GF</div>
                    <div className="font-semibold">{s.stats.gf}</div>
                  </div>
                  <div className="rounded bg-slate-50 p-2">
                    <div className="text-slate-500">GC</div>
                    <div className="font-semibold">{s.stats.gc}</div>
                  </div>
                </div>

                {s.stats.obs ? (
                  <p className="mt-3 text-xs text-slate-600">{s.stats.obs}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

