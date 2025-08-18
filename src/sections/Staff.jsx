// src/sections/Staff.jsx
import React from "react";
import { TEAM } from "../data/staff";

function RoleChip({ children }) {
  return (
    <span className="rounded-full border bg-white/70 px-2 py-0.5 text-xs text-slate-600">
      {children}
    </span>
  );
}

function FeaturedCard({ m }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm md:flex-row">
      {/* Imagen grande */}
      <div className="md:w-1/2">
        <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
          <img
            src={m.img}
            alt={m.name}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
      {/* Texto */}
      <div className="flex flex-1 flex-col gap-3 p-6 md:w-1/2">
        <div className="text-sm text-slate-500">Cuerpo Técnico</div>
        <h3 className="text-2xl font-semibold">{m.name}</h3>
        <div className="text-blue-600 font-medium">{m.role}</div>
        <p className="text-slate-700">{m.bio}</p>
        {m.roles?.length ? (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {m.roles.map((r, i) => (
              <RoleChip key={i}>{r}</RoleChip>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function SmallCard({ m }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <img
          src={m.img}
          alt={m.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="text-lg font-semibold">{m.name}</h4>
        <div className="text-sky-700 text-sm font-medium">{m.role}</div>
        {m.roles?.length ? (
          <div className="mt-auto flex flex-wrap gap-1">
            {m.roles.map((r, i) => (
              <RoleChip key={i}>{r}</RoleChip>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function Staff() {
  // Elegimos al DT como destacado (por rol), y el resto abajo
  const featured =
    TEAM.find((x) => /director/i.test(x.role)) ||
    TEAM[0];
  const others = TEAM.filter((x) => x !== featured);

  return (
    <section id="staff" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Cuerpo Técnico</h2>
        <p className="mt-2 text-slate-600">
          Conocé al equipo que lidera y estructura el trabajo diario.
        </p>

        {/* Destacado */}
        <div className="mt-6">
          <FeaturedCard m={featured} />
        </div>

        {/* Resto en grilla uniforme */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((m) => (
            <SmallCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
