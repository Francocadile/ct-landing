// src/sections/Resultados.jsx
import React from "react";
import { ACHIEVEMENTS, EFFECTIVENESS, SEASON_STATS } from "../data/results";

const Badge = ({ children }) => (
  <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{children}</span>
);

function AchievementItem({ a }) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-slate-900">{a.year}</span>
        <span className="text-slate-700">·</span>
        <span className="font-medium text-slate-900">{a.title}</span>
        {a.team && <Badge>{a.team}</Badge>}
        {a.role && <Badge>{a.role}</Badge>}
        {a.country && <Badge>{a.country}</Badge>}
      </div>
      {a.note && <p className="mt-1 text-sm text-slate-600">{a.note}</p>}
      {Array.isArray(a.bullets) && a.bullets.length > 0 && (
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          {a.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border px-4 py-3">
      <div className="text-2xl font-bold text-slate-900">{value ?? "—"}</div>
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function SeasonCard({ s }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-slate-900">
          {s.team} <span className="text-slate-500">· {s.year}</span>
        </h4>
        <Badge>{s.competition}</Badge>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        <StatPill label="Efectividad" value={`${s.effectiveness}%`} />
        <StatPill label="Partidos" value={s.matches} />
        <StatPill label="Ganados" value={s.wins} />
        <StatPill label="Empatados" value={s.draws} />
        <StatPill label="Perdidos" value={s.losses} />
        <StatPill label="GF" value={s.gf} />
        <StatPill label="GC" value={s.ga} />
      </div>

      {s.highlights?.length > 0 && (
        <ul className="mt-1 list-disc pl-5 text-sm text-slate-600">
          {s.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Resultados() {
  // ordenar de más nuevo a más viejo
  const achievements = [...ACHIEVEMENTS].sort((a, b) => b.year - a.year);
  const effectiveness = [...EFFECTIVENESS].sort((a, b) => a.year - b.year);
  const seasons = [...SEASON_STATS].sort((a, b) => b.year - a.year);

  return (
    <section id="resultados" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Resultados y Efectividad</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Resumen de logros, efectividad histórica anual y números detallados por temporada/torneo.
          </p>
        </header>

        {/* Records / Logros */}
        <div className="mb-10">
          <h3 className="mb-3 text-xl font-semibold">Records del Cuerpo Técnico</h3>
          <ol className="space-y-4">
            {achievements.map((a, i) => (
              <AchievementItem key={`${a.year}-${i}`} a={a} />
            ))}
          </ol>
        </div>

        {/* Efectividad histórica */}
        <div className="mb-10">
          <h3 className="mb-3 text-xl font-semibold">Historial de Efectividad</h3>
          <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Año</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Equipo</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Efectividad</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Notas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {effectiveness.map((e) => (
                  <tr key={e.year}>
                    <td className="px-3 py-2 font-medium text-slate-900">{e.year}</td>
                    <td className="px-3 py-2 text-slate-700">{e.team}</td>
                    <td className="px-3 py-2 font-semibold text-slate-900">{e.percent}%</td>
                    <td className="px-3 py-2 text-slate-600">{e.note || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Números por temporada */}
        <div className="mb-2">
          <h3 className="mb-3 text-xl font-semibold">Números por temporada</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seasons.map((s, i) => (
              <SeasonCard key={i} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

