// src/sections/Records.jsx
import React from "react";
import { RECORDS, SEASONS } from "../data/results";

// ---------- helpers visuales ----------
function Chip({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-700">
      {children}
    </span>
  );
}

function yearPill(y) {
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

// ---------- tarjeta para NÚMEROS (más sobria y uniforme) ----------
function SeasonCard({ s }) {
  const v = s?.stats?.v ?? 0;
  const e = s?.stats?.e ?? 0;
  const d = s?.stats?.d ?? 0;
  const pj = s?.stats?.pj ?? v + e + d;

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
              {yearPill(s.year)}
            </div>
          </div>
        </div>
        <BigPct value={s.pct} />
      </div>

      {/* Stats en píldoras, muy legibles */}
      <div className="grid grid-cols-3 gap-2">
        <PillStat k="PJ" v={pj} />
        <PillStat k="G" v={v} />
        <PillStat k="E" v={e} />
        <PillStat k="P" v={d} />
        <PillStat k="GF" v={s?.stats?.gf ?? "—"} />
        <PillStat k="GC" v={s?.stats?.gc ?? "—"} />
      </div>

      {/* Notas / logros en chips (todas visibles) */}
      {Array.isArray(s.notes) && s.notes.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {s.notes.map((t, i) => (
            <Chip key={i}>{t}</Chip>
          ))}
        </div>
      )}

      {/* empuje para igualar alturas */}
      <div className="mt-auto" />
    </article>
  );
}

// ---------- tarjeta de Records (no se modifica la idea, solo estilo consistente) ----------
function RecordCard({ r }) {
  return (
    <li className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <img
        src={r.logo}
        alt={r.club}
        className="h-12 w-12 rounded-xl border border-slate-200 bg-white object-contain p-1"
        loading="lazy"
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <div className="truncate text-lg font-semibold text-slate-900">
            {r.title}
          </div>
          {yearPill(r.year)}
        </div>
        <div className="text-sm text-slate-600">
          {r.club} · {r.role}
        </div>
        {r.details?.length ? (
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {r.details.map((d, i) => (
              <Chip key={i}>{d}</Chip>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}

export default function Records() {
  // Records: más recientes primero (sección NO modificada conceptualmente)
  const recordsSorted = [...RECORDS].sort((a, b) => b.year - a.year);
  // Números: más recientes primero
  const seasonsSorted = [...SEASONS].sort((a, b) => b.year - a.year);

  return (
    <section id="records" className="border-b bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* 1) Records */}
        <h2 className="text-2xl font-semibold text-slate-900">Records del Cuerpo Técnico</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {recordsSorted.map((r, i) => (
            <RecordCard key={i} r={r} />
          ))}
        </ol>

        {/* 2) Cuerpo técnico en números (nuevo diseño sobrio) */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">Cuerpo técnico en números</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seasonsSorted.map((s, i) => (
              <SeasonCard key={i} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
