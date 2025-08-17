// src/sections/Resultados.jsx
import React from "react";
import { Trophy, Target, TrendingUp, Award, Percent, BarChart3 } from "lucide-react";
import { STATS } from "../data/stats";

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-slate-600">{label}</div>
          <div className="text-2xl font-semibold">{value}</div>
          {sub && <div className="text-xs text-slate-500">{sub}</div>}
        </div>
      </div>
    </div>
  );
}

function ProgressRow({ label, valuePct }) {
  const pct = Math.max(0, Math.min(100, Math.round(valuePct)));
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700">{label}</span>
        <span className="font-medium">{pct}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function Resultados() {
  const r = STATS.records || [];
  const e = STATS.effectiveness || {};
  const a = STATS.achievements || [];

  const games = e.games || 0;
  const wins = e.wins || 0;
  const draws = e.draws || 0;
  const losses = e.losses || 0;
  const points = e.points || 0;

  const winPct = games ? (wins / games) * 100 : 0;
  const drawPct = games ? (draws / games) * 100 : 0;
  const lossPct = games ? (losses / games) * 100 : 0;
  const ppg = games ? (points / games).toFixed(2) : "0.00";

  return (
    <section id="resultados" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Resultados</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Números clave del cuerpo técnico: records, efectividad y principales logros.
          </p>
        </header>

        {/* Records */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold">Records del cuerpo técnico</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {r.map((it, i) => (
              <StatCard
                key={i}
                icon={[Trophy, Award, TrendingUp, BarChart3][i % 4]}
                label={it.label}
                value={it.value}
                sub={it.sub}
              />
            ))}
          </div>
        </div>

        {/* Efectividad */}
        <div className="mb-10 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Efectividad del cuerpo técnico</h3>
              <p className="text-sm text-slate-600">
                {games} PJ · {wins} G · {draws} E · {losses} P
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-blue-700">
              <Percent className="h-4 w-4" />
              <span className="text-sm">PPG: <strong>{ppg}</strong></span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ProgressRow label="Victorias" valuePct={winPct} />
            <ProgressRow label="Empates" valuePct={drawPct} />
            <ProgressRow label="Derrotas" valuePct={lossPct} />
          </div>
        </div>

        {/* Logros */}
        <div>
          <h3 className="text-lg font-semibold">Logros del cuerpo técnico</h3>
          {a.length > 0 ? (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {a.map((t, i) => (
                <li key={i} className="rounded-lg border bg-white p-4 text-slate-700">
                  • {t}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-slate-500">
              (Aún no hay logros cargados. Editá <code>src/data/stats.js</code>.)
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
