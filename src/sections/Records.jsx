// src/sections/Records.jsx
import React from "react";
import { ACHIEVEMENTS, SEASONS_BY_CLUB } from "../data/records";

// Utilidades visuales
function Flag({ code }) {
  const src =
    code === "BO"
      ? "/img/flags/bo.png"
      : code === "CO"
      ? "/img/flags/co.png"
      : code === "AR"
      ? "/img/flags/ar.png"
      : code === "EC"
      ? "/img/flags/ec.png"
      : null;
  if (!src) return null;
  return (
    <img
      src={src}
      alt={code}
      className="h-4 w-6 rounded-sm border object-cover"
      loading="lazy"
    />
  );
}

const Pill = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white/80 px-2 py-0.5 text-xs text-slate-600">
    {children}
  </span>
);

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center rounded-xl bg-sky-50 px-3 py-2 text-center">
    <div className="text-lg font-semibold text-slate-900">{value}</div>
    <div className="text-[11px] leading-tight text-slate-600">{label}</div>
  </div>
);

export default function Records() {
  // Orden: primero lo más reciente
  const achievements = [...ACHIEVEMENTS].sort((a, b) => b.year - a.year);

  return (
    <section id="records" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Records</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Palmarés del cuerpo técnico y métricas por temporada en clubes donde
          trabajamos.
        </p>

        {/* === PALMARÉS (Logros) === */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {achievements.map((r, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-amber-50 via-white to-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={r.logo}
                  alt={r.club}
                  className="h-14 w-14 rounded-xl border bg-white p-1 object-contain"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-xl font-semibold text-slate-900">
                      {r.title}
                    </h3>
                    {r.country ? <Flag code={r.country} /> : null}
                  </div>
                  <div className="mt-0.5 text-sm text-slate-600">
                    {r.club}
                    {r.role ? <> · {r.role}</> : null}
                  </div>
                  {r.details?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {r.details.map((d, idx) => (
                        <Pill key={idx}>{d}</Pill>
                      ))}
                    </div>
                  ) : null}
                </div>

                <span className="ml-auto shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {r.year}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white"></div>
            </article>
          ))}
        </div>

        {/* === NÚMEROS POR CLUB Y TEMPORADA === */}
        <div className="mt-12 space-y-10">
          {SEASONS_BY_CLUB.map((club) => (
            <div key={club.club} className="rounded-2xl border bg-white p-5">
              {/* Header de club */}
              <div className="flex items-center gap-3">
                <img
                  src={club.logo}
                  alt={club.club}
                  className="h-10 w-10 rounded-lg border bg-white p-1 object-contain"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold">{club.club}</h3>
                {club.country ? <Flag code={club.country} /> : null}
              </div>

              {/* Tarjetas de temporadas */}
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {club.seasons
                  .slice()
                  .sort((a, b) => b.year - a.year)
                  .map((s, idx) => (
                    <article
                      key={idx}
                      className="rounded-xl border bg-slate-50/60 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700">
                          {s.year}
                          {s.label ? ` · ${s.label}` : ""}
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <span className="text-sm text-slate-600">
                            Efectividad
                          </span>
                          <span className="rounded-full bg-sky-600/10 px-2 py-0.5 text-sm font-semibold text-sky-700">
                            {s.pct}%
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-3 grid grid-cols-6 gap-2">
                        <Stat label="PJ" value={s.stats.pj ?? "—"}/>
                        <Stat label="G" value={s.stats.win ?? "—"} />
                        <Stat label="E" value={s.stats.draw ?? "—"} />
                        <Stat label="P" value={s.stats.loss ?? "—"} />
                        <Stat label="GF" value={s.stats.gf ?? "—"} />
                        <Stat label="GC" value={s.stats.ga ?? "—"} />
                      </div>

                      {/* Notas */}
                      {s.notes?.length ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                          {s.notes.map((n, i2) => (
                            <li key={i2}>{n}</li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
