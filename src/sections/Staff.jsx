// src/sections/Staff.jsx
import React from "react";
import { Link } from "react-router-dom";
import { TEAM } from "../data/staff";

function FlagStrip({ flags = [] }) {
  if (!flags?.length) return null;
  return (
    <span className="ml-2 inline-flex items-center gap-1 align-middle">
      {flags.map((f, i) => (
        <img
          key={i}
          src={f}
          alt="bandera"
          className="h-4 w-6 rounded-[2px] border object-cover"
          loading="lazy"
        />
      ))}
    </span>
  );
}

function RolePill({ children }) {
  return (
    <span className="inline-flex min-h-[36px] items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-xs leading-snug text-slate-700 text-center">
      {children}
    </span>
  );
}

function StaffCard({ m, highlight = false }) {
  return (
    <Link
      to={`/staff/${m.slug}`}
      className={`group flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
        highlight ? "ring-1 ring-blue-100" : ""
      }`}
    >
      {/* Foto con tamaño consistente */}
      <div
        className={`mx-auto mb-5 flex w-full items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white ring-1 ring-slate-200 ${
          highlight ? "aspect-[16/10] max-w-[800px]" : "aspect-[4/5] max-w-[260px]"
        }`}
      >
        <img
          src={m.img}
          alt={m.name}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Nombre + banderas */}
      <h3
        className={`text-center font-semibold text-slate-900 ${
          highlight ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {m.name}
        <FlagStrip flags={m.flags} />
      </h3>

      <p className="mt-1 text-center text-slate-600">
        {m.role}
      </p>

      {/* Bio (solo Flavio en la tarjeta destacada) */}
      {highlight ? (
        <p className="mt-4 max-w-3xl self-center text-center text-sm text-slate-700">
          {m.bio}
        </p>
      ) : null}

      {/* Funciones: en 2 columnas, alturas consistentes. 
          Para Flavio NO mostramos roles en su card destacada. */}
      {!highlight && m.roles?.length ? (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {m.roles.map((r, i) => (
            <RolePill key={i}>{r}</RolePill>
          ))}
        </div>
      ) : null}

      <div className="mt-auto" />
    </Link>
  );
}

export default function Staff() {
  const boss =
    TEAM.find((t) => t.slug === "flavio-robatto") || TEAM[0];
  const assistants = TEAM.filter((t) => t.slug !== boss.slug);

  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Staff</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Cuerpo técnico profesional con roles complementarios y metodología integrada.
        </p>

        {/* Flavio destacado */}
        <div className="mt-8">
          <StaffCard m={boss} highlight />
        </div>

        {/* Asistentes alineados en una sola fila (más grandes) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {assistants.map((m) => (
            <StaffCard key={m.slug} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
