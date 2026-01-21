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

// ============ OVERRIDES de etiquetas (mostrar solo UNA por card) ============
const TAG_OVERRIDES = [
  // 2025
  { year: 2025, text: "4tos de final Copa Sudamericana" },
  // 2024 (dos casos distintos)
  { year: 2024, match: /absoluto/i, text: "Clasificados a 8vos como líderes del Grupo E" },
  { year: 2024, match: /clausura/i, text: "70% EFECTIVIDAD" },
  // 2022
  {
    year: 2022,
    text:
      "Clasificación a la CONMEBOL Libertadores por primera vez en la historia del club",
  },
  // 2017
  { year: 2017, text: "Mejor equipo en la tabla general" },
  // 2015
  { year: 2015, text: "Record en partidos ganados" },
];

// Devuelve el ÚNICO chip a mostrar para un record dado
function getSingleTag(record) {
  const title = record.title || "";
  const year = record.year;

  const override = TAG_OVERRIDES.find(
    (o) => o.year === year && (!o.match || o.match.test(title))
  );
  if (override) return override.text;

  // Si no hay override, usamos el primer detalle existente (ej: Barcelona 2012/2014)
  if (Array.isArray(record.details) && record.details.length > 0) {
    return record.details[0];
  }
  return null;
}

// ============ RECORDS (altura uniforme + “aura campeón”) ============
function RecordItem({ r }) {
  const singleTag = getSingleTag(r);

  return (
    <li className="relative h-full">
      {/* Glow dorado sutil */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_10px_30px_-12px_rgba(245,158,11,0.35)]"
        aria-hidden="true"
      />
      <div className="relative flex h-full min-h-[160px] flex-col justify-between rounded-2xl border border-amber-200/60 bg-gradient-to-b from-amber-50/40 to-white p-4 shadow-sm">
        {/* cabecera */}
        <div className="flex items-start gap-3 pr-16">
          <div className="relative shrink-0">
            <img
              src={r.logo}
              alt={r.club}
              className="h-12 w-12 rounded-xl border border-slate-200 bg-white object-contain p-1"
              loading="lazy"
            />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-amber-400/80 ring-2 ring-white" />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="text-lg font-semibold leading-snug text-slate-900 whitespace-normal break-words">
              {r.title}
            </h4>
            <div className="mt-0.5 text-sm text-slate-600">
              {r.club} · {r.role}
            </div>
          </div>

          {/* Año fijo arriba a la derecha */}
          <div className="absolute right-4 top-4">
            <YearPill y={r.year} />
          </div>
        </div>

        {/* Único chip */}
        <div className="mt-2 h-8 overflow-hidden">
          {singleTag ? <Chip>{singleTag}</Chip> : <span className="inline-block h-6" />}
        </div>
      </div>
    </li>
  );
}

// ============ NÚMEROS (mismo layout + AURA CAMPEÓN) ============
function SeasonCard({ s }) {
  const isFeatured = s?.team === "GLOBAL PROCESO";
  // Overrides de PJ (sin tocar tus datos)
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
    <div className="relative h-full">
      {/* Glow dorado sutil (mismo espíritu que en Records) */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl ${
          isFeatured
            ? "shadow-[0_18px_55px_-12px_rgba(37,99,235,0.45)]"
            : "shadow-[0_14px_40px_-12px_rgba(245,158,11,0.35)]"
        }`}
        aria-hidden="true"
      />
      {/* Ribbon superior dorado ultra-delgado */}
      <div
        className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${
          isFeatured
            ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"
            : "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300"
        }`}
      />

      <article
        className={`relative flex h-full min-h-[20rem] flex-col rounded-2xl border bg-gradient-to-b p-5 shadow-sm ${
          isFeatured
            ? "border-blue-200/80 from-blue-50/40 to-white ring-1 ring-blue-200"
            : "border-amber-200/70 from-amber-50/25 to-white"
        }`}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative">
              <img
                src={s.logo}
                alt={s.team}
                className="h-12 w-12 rounded-xl border border-amber-200 bg-white object-contain p-1 ring-1 ring-amber-100"
                loading="lazy"
              />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-amber-400/80 ring-2 ring-white" />
            </div>
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
          {/* Por pedido, mantenemos el mismo componente de porcentaje */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-1">
            <BigPct value={s.pct} />
          </div>
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

        {/* Notas (si existen) */}
        {Array.isArray(s.notes) && s.notes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {s.notes.map((t, i) => (
              <Chip key={i}>{t}</Chip>
            ))}
          </div>
        )}

        <div className="mt-auto" />
      </article>
    </div>
  );
}

export default function Records() {
  // Records: más recientes primero
  const recordsSorted = [...RECORDS].sort((a, b) => b.year - a.year);

  // Números: featured (GLOBAL PROCESO) siempre primero, luego más recientes
  const seasonsSorted = [...SEASONS].sort((a, b) => {
    const aFeatured = a?.team === "GLOBAL PROCESO";
    const bFeatured = b?.team === "GLOBAL PROCESO";
    if (aFeatured !== bFeatured) return aFeatured ? -1 : 1;
    return (b?.year ?? 0) - (a?.year ?? 0);
  });

  // Huila + Cúcuta lado a lado (desktop)
  const tailTeams = new Set(["Atlético Huila", "Cúcuta Deportivo"]);
  const main = seasonsSorted.filter((s) => !tailTeams.has(s.team));
  const tail = seasonsSorted
    .filter((s) => tailTeams.has(s.team))
    .sort((a, b) => b.year - a.year);

  const ordered = [...main, ...tail];
  const needsPlaceholder = ordered.length % 3 === 1;

  return (
    <section id="records" className="border-b bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* 1) Records */}
        <h2 className="text-2xl font-semibold text-slate-900">
          Records del Cuerpo Técnico
        </h2>

        <ol className="mt-6 grid items-stretch gap-4 sm:grid-cols-2">
          {recordsSorted.map((r, i) => (
            <RecordItem key={i} r={r} />
          ))}
        </ol>

        {/* 2) Cuerpo técnico en números */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">
            Cuerpo técnico en números
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.slice(0, ordered.length - tail.length).map((s, i) => (
              <SeasonCard key={`${s.team}-${s.year}-${i}`} s={s} />
            ))}

            {needsPlaceholder && <div className="hidden lg:block" aria-hidden="true" />}

            {tail.map((s, i) => (
              <SeasonCard key={`${s.team}-${s.year}-tail-${i}`} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
