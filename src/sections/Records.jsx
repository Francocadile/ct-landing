// src/sections/Records.jsx
import React from "react";
import { RECORDS, SEASONS } from "../data/results";

// ============ helpers ============
function Chip({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-700">
      {children}
    </span>
  );
}

function YearPill({ y }) {
  return (
    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
      {y}
    </span>
  );
}

function flagSrc(f) {
  if (!f) return "";
  if (f.startsWith("/") || f.startsWith("http")) return f;
  return `/img/banders/${f}`;
}

function BigPct({ value }) {
  const pct = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2">
      <span className="text-3xl font-extrabold leading-none text-slate-900">
        {pct}
        <span className="text-xl align-top">%</span>
      </span>
    </div>
  );
}

function PillStat({ k, v }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-center">
      <div className="text-xs text-slate-500">{k}</div>
      <div className="text-base font-semibold text-slate-900">{v}</div>
    </div>
  );
}

// ============ RECORDS (estilo anterior, sin truncar títulos) ============
function RecordItem({ r }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-gradient-to-b from-amber-50/50 to-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="relative">
          <img
            src={r.logo}
            alt={r.club}
            className="h-12 w-12 rounded-xl border border-slate-200 bg-white object-contain p-1"
            loading="lazy"
          />
          <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-orange-400/80 ring-2 ring-white" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold leading-snug text-slate-900 whitespace-normal break-words">
              {r.title}
            </h4>
            <YearPill y={r.year} />
          </div>
          <div className="mt-0.5 text-sm text-slate-600">
            {r.club} · {r.role}
          </div>

          {r.details?.length ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {r.details.map((d, i) => (
                <Chip key={i}>{d}</Chip>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

// ============ NÚMEROS (diseño sobrio y uniforme) ============
function SeasonCard({ s }) {
  // Overrides de PJ que pediste (sin tocar tus datos)
  const OVERRIDES = {
    "Nacional Potosí|2021": 9,
    "Atlético Huila|2020": 9,
    "Cúcuta Deportivo|2017": 30,
  };

  const v = s?.stats?.v ?? 0;
  const e = s?.stats?.e ?? 0;
  const d = s?.stats?.d ?? 0;
  const key = `${s.team}|${s.year}`;
  const pj = s?.stats?.pj ?? OVERRIDES[key] ?? v + e + d;

  return (
    <article className="flex h-full min-h-[20rem] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={s.logo}
            alt={s.team}
            className="h-12 w-12 rounded-xl border border-slate-200 bg-white object-contain p-1"
            loading="lazy"
          />
          <div className="min-w-0">
            <div className="truncate text-base font-semibold text-slate-900">
              {s.team}
            </div>
            <div className="mt-0.5 flex items-center gap-2">
              {s.flag ? (
                <img
                  src={flagSrc(s.flag)}
                  alt=""
                  className="h-3.5 w-5 rounded ring-1 ring-slate-200"
                  loading="lazy"
                />
              ) : null}
              <YearPill y={s.year} />
            </div>
          </div>
        </div>
        <BigPct value={s.pct} />
      </div>

      {/* Stats en píldoras */}
      <div className="grid grid-cols-3 gap-2">
        <PillStat k="PJ" v={pj} />
        <PillStat k="G" v={v} />
        <PillStat k="E" v={e} />
        <PillStat k="P" v={d} />
        <PillStat k="GF" v={s?.stats?.gf ?? "—"} />
        <PillStat k="GC" v={s?.stats?.gc ?? "—"} />
      </div>

      {/* Notas */}
      {Array.isArray(s.notes) && s.notes.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {s.notes.map((t, i) => (
            <Chip key={i}>{t}</Chip>
          ))}
        </div>
      )}

      <div className="mt-auto" />
    </article>
  );
}

export default function Records() {
  // Records: más recientes primero (no cambiamos concepto)
  const recordsSorted = [...RECORDS].sort((a, b) => b.year - a.year);

  // Números: más recientes primero
  const seasonsSorted = [...SEASONS].sort((a, b) => b.year - a.year);

  // Querés que Huila y Cúcuta queden lado a lado al final (en desktop)
  const tailTeams = new Set(["Atlético Huila", "Cúcuta Deportivo"]);
  const main = seasonsSorted.filter((s) => !tailTeams.has(s.team));
  const tail = seasonsSorted
    .filter((s) => tailTeams.has(s.team))
    .sort((a, b) => b.year - a.year); // 2020 antes que 2017

  const ordered = [...main, ...tail];

  // Si con 3 columnas queda 1 solo en la última fila,
  // meto un placeholder oculto para que los dos últimos queden juntos.
  const needsPlaceholder = ordered.length % 3 === 1;

  return (
    <section id="records" className="border-b bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* 1) Records (estilo anterior) */}
        <h2 className="text-2xl font-semibold text-slate-900">Records del Cuerpo Técnico</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {recordsSorted.map((r, i) => (
            <RecordItem key={i} r={r} />
          ))}
        </ol>

        {/* 2) Cuerpo técnico en números */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">Cuerpo técnico en números</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* principales */}
            {ordered.slice(0, ordered.length - tail.length).map((s, i) => (
              <SeasonCard key={`${s.team}-${s.year}-${i}`} s={s} />
            ))}

            {/* placeholder para alinear la última fila si hace falta */}
            {needsPlaceholder && (
              <div className="hidden lg:block" aria-hidden="true" />
            )}

            {/* tail: Huila + Cúcuta lado a lado */}
            {tail.map((s, i) => (
              <SeasonCard key={`${s.team}-${s.year}-tail-${i}`} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
