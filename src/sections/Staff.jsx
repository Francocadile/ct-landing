// src/sections/Staff.jsx
import React from "react";
import { TEAM } from "../data/staff.js";
import { Link } from "react-router-dom";

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function FlagRow({ flags }) {
  if (!Array.isArray(flags) || flags.length === 0) return null;
  return (
    <div className="mt-1 flex flex-wrap gap-1.5">
      {flags.map((f, i) => (
        <img
          key={i}
          src={f.startsWith("/") ? f : `/img/banders/${f}`}
          alt=""
          className="h-3.5 w-5 rounded ring-1 ring-slate-200"
          loading="lazy"
        />
      ))}
    </div>
  );
}

function RoleChips({ roles }) {
  if (!Array.isArray(roles) || roles.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {roles.map((r, i) => (
        <span
          key={i}
          className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700"
        >
          {r}
        </span>
      ))}
    </div>
  );
}

export default function Staff() {
  if (!Array.isArray(TEAM) || TEAM.length === 0) return null;

  const [lead, ...assistants] = TEAM;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Staff</h2>

      {/* DT destacado (Flavio) */}
      {lead && (
        <Link to={`/staff/${slugify(lead.name)}`} className="mt-6 block">
          <article className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white p-5 shadow-card ring-1 ring-amber-100/70 lg:flex lg:items-center lg:gap-6">
            {/* Aura sutil */}
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-b from-amber-100/0 via-amber-100/15 to-amber-100/0 blur-xl" />
            <div className="relative">
              <div className="mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white h-44 w-32 sm:h-48 sm:w-36 lg:h-56 lg:w-44">
                {/* móvil: contain para no cortar caras; md+: cover */}
                <img
                  src={lead.img}
                  alt={lead.name}
                  className="h-full w-full object-contain md:object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <h3 className="text-2xl font-bold tracking-tight">{lead.name}</h3>
              <div className="text-base font-medium text-slate-600">{lead.role}</div>
              <FlagRow flags={lead.flags} />
              <p className="mt-3 text-slate-700 leading-relaxed">{lead.bio}</p>
              {/* A pedido: sin chips de roles para Flavio */}
            </div>
          </article>
        </Link>
      )}

      {/* Asistentes — un poco más grandes en móvil, sin cortar caras */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {assistants.map((m) => (
          <Link key={m.name} to={`/staff/${slugify(m.name)}`}>
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-shadow hover:shadow-md">
              <div className="mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                {/* móvil: contain; md+: cover */}
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-contain md:object-cover"
                  loading="lazy"
                />
              </div>

              <h4 className="mt-3 text-base font-semibold sm:text-lg">{m.name}</h4>
              <div className="text-sm text-slate-600">{m.role}</div>
              <FlagRow flags={m.flags} />
              <p className="mt-2 line-clamp-3 text-sm text-slate-700 sm:text-[15px]">
                {m.bio}
              </p>

              {/* A pedido: chips de roles sí para asistentes */}
              <RoleChips roles={m.roles} />
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
