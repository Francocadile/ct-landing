// src/sections/Staff.jsx
import React from "react";
import { Link } from "react-router-dom";
import { TEAM } from "../data/staff";
import { slugify } from "../utils/slug";

function RoleChip({ children }) {
  return (
    <span className="rounded-full border bg-white/70 px-2 py-0.5 text-[10px] text-slate-600">
      {children}
    </span>
  );
}

function FeaturedCard({ m }) {
  const to = `/staff/${slugify(m.name)}`;
  return (
    <Link to={to} className="group block">
      <article className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md md:flex-row">
        {/* Imagen grande */}
        <div className="md:w-1/2">
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
            <img
              src={m.img}
              alt={m.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-1 flex-col gap-3 p-6 md:w-1/2">
          <div className="text-sm text-slate-500">Cuerpo Técnico</div>
          <h3 className="text-2xl font-semibold">{m.name}</h3>
          <div className="text-blue-600 font-semibold">{m.role}</div>
          {m.bio ? <p className="text-slate-700">{m.bio}</p> : null}

          {m.roles?.length ? (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {m.roles.map((r, i) => (
                <RoleChip key={i}>{r}</RoleChip>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Link>
  );
}

function SmallCard({ m }) {
  const to = `/staff/${slugify(m.name)}`;
  return (
    <Link to={to} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
        <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
          <img
            src={m.img}
            alt={m.name}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <h4 className="text-sm font-semibold leading-tight">{m.name}</h4>
          <div className="text-sky-700 text-[11px] font-semibold">{m.role}</div>
          {m.roles?.length ? (
            <div className="mt-auto hidden flex-wrap gap-1 xl:flex">
              {m.roles.map((r, i) => (
                <RoleChip key={i}>{r}</RoleChip>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Link>
  );
}

export default function Staff() {
  // Destacado: DT
  const featured =
    TEAM.find((x) => /director/i.test(x.role)) || TEAM[0];

  // Resto
  const rest = TEAM.filter((x) => x !== featured);

  // Orden: Asistentes primero, luego PF y Analista
  const assistants = rest.filter((x) => /asistente/i.test(x.role));
  const pf = rest.find((x) => /preparador/i.test(x.role));
  const analyst = rest.find((x) => /analista/i.test(x.role));
  const ordered = [...assistants, ...(pf ? [pf] : []), ...(analyst ? [analyst] : [])];

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

        {/* Resto en una fila en desktop */}
        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {ordered.map((m) => (
            <SmallCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

