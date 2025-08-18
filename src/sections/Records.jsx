// src/sections/Records.jsx
import React from "react";
import { ACHIEVEMENTS, SEASONS_BY_CLUB } from "../data/records";

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

// /public/img/banders (incluye ecuador.png)
const FLAG_BY_COUNTRY = {
  AR: "/img/banders/argentina.png",
  BO: "/img/banders/bolivia.png",
  CO: "/img/banders/colombia.png",
  VE: "/img/banders/venezuela.png",
  PT: "/img/banders/portugal.png",
  EC: "/img/banders/ecuador.png",
  ECU: "/img/banders/ecuador.png",
};

function CountryFlag({ country, className = "" }) {
  const src = country ? FLAG_BY_COUNTRY[country] : null;
  if (!src) return null;
  return (
    <img
      src={src}
      alt={`Bandera ${country}`}
      className={`h-4 w-6 rounded-[2px] border object-cover ${className}`}
      loading="lazy"
    />
  );
}

export default function Records() {
  const achievements = [...ACHIEVEMENTS].sort((a, b) => b.year - a.year);

  return (
    <section id="records" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Records</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Palmarés del cuerpo técnico y métricas por temporada en clubes donde trabajamos.
        </p>

        {/* PALMARÉS – filas del mismo alto */}
        <div
          className="mt-8 grid gap-4 sm:grid-cols-2"
          style={{ gridAutoRows: "1fr" }}
        >
          {achievements.map((r, i) => (
            <article
              key={i}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-gradient-to-br from-amber-50 via-white to-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={r.logo}
                  alt={r.club}
                  className="size-14 rounded-xl border bg-white p-1 object-contain"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h3 className="break-words text-lg font-semibold text-slate-900 md:text-xl">
                    {r.title}
                  </h3>
                  <div className="mt-0.5 flex items-center gap-2 text-sm text-slate-600">
                    <span>
                      {r.club}
                      {r.role ? <> · {r.role}</> : null}
                    </span>
                    <CountryFlag country={r.country} />
                  </div>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {r.year}
                </span>
              </div>

              {r.details?.length ? (
                <div className="mt-3 flex flex-wrap gap-1">
                  {r.details.map((d, idx) => (
                    <Pill key={idx}>{d}</Pill>
                  ))}
                </div>
              ) : (
                <div className="mt-2" />
              )}
            </article>
          ))}
        </div>

        {/* Título bloque de métricas */}
        <h3 className="mt-12 text-2xl font-bold tracking-tight">
          Cuerpo técnico en números
        </h3>

        {/* MÉTRICAS POR CLUB */}
        <div className="mt-6 space-y-10">
          {SEASONS_BY_CLUB.map((club) => (
            <div key={club.club} className="rounded-2xl border bg-white p-5">
              <div className="flex items-center gap-3">
                <img
                  src={club.logo}
                  alt={club.club}
                  className="h-10 w-10 rounded-lg border bg-white p-1 object-contain"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold">{club.club}</h4>
                <CountryFlag country={club.country} />
              </div>

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
                          <span className="text-sm text-slate-600">Efectividad</span>
                          <span className="rounded-full bg-sky-600/10 px-2 py-0.5 text-sm font-semibold text-sky-700">
                            {s.pct}%
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-6 gap-2">
                        <Stat label="PJ" value={s.stats.pj ?? "—"} />
                        <Stat label="G" value={s.stats.win ?? "—"} />
                        <Stat label="E" value={s.stats.draw ?? "—"} />
                        <Stat label="P" value={s.stats.loss ?? "—"} />
                        <Stat label="GF" value={s.stats.gf ?? "—"} />
                        <Stat label="GC" value={s.stats.ga ?? "—"} />
                      </div>

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

