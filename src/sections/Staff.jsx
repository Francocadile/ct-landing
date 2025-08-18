// src/sections/Staff.jsx
import React from "react";
import { TEAM } from "../data/staff";

function FlagRow({ flags = [] }) {
  if (!flags || flags.length === 0) return null;
  return (
    <span className="ml-2 inline-flex items-center gap-1 align-middle">
      {flags.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="bandera"
          className="h-4 w-5 rounded-[2px] border object-cover"
          loading="lazy"
        />
      ))}
    </span>
  );
}

function CardHead({ person }) {
  const slug =
    (person.slug ??
      person.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")) || "";

  return (
    <a
      href={`/staff/${slug}`}
      className="group block rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md md:flex md:items-center md:gap-6"
    >
      <img
        src={person.img}
        alt={person.name}
        className="h-44 w-44 rounded-xl border bg-slate-50 object-cover"
        loading="lazy"
      />
      <div className="mt-4 md:mt-0">
        <h3 className="text-2xl font-semibold text-slate-900">
          {person.name}
          <FlagRow flags={person.flags} />
        </h3>
        <p className="text-slate-700">{person.role}</p>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">{person.bio}</p>

        {person.roles?.length ? (
          <div className="mt-3 flex flex-wrap gap-1">
            {person.roles.map((r, i) => (
              <span
                key={i}
                className="rounded-full border bg-slate-50 px-2 py-0.5 text-xs text-slate-600"
              >
                {r}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}

function CardAsst({ person }) {
  const slug =
    (person.slug ??
      person.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")) || "";

  return (
    <a
      href={`/staff/${slug}`}
      className="flex h-[300px] w-full flex-col items-center rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:shadow-md"
    >
      <img
        src={person.img}
        alt={person.name}
        className="h-28 w-28 rounded-xl border bg-slate-50 object-cover"
        loading="lazy"
      />
      <div className="mt-3">
        <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900">
          {person.name}
          <FlagRow flags={person.flags} />
        </h4>
        <p className="mt-0.5 text-xs text-slate-600">{person.role}</p>
      </div>

      {person.roles?.length ? (
        <div className="mt-3 flex w-full flex-wrap justify-center gap-1 px-1">
          {person.roles.map((r, i) => (
            <span
              key={i}
              className="rounded-full border bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600"
            >
              {r}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto" />
    </a>
  );
}

export default function Staff() {
  const [head, ...others] = TEAM;

  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Staff</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Cuerpo técnico de primera división.
        </p>

        {/* Flavio destacado */}
        <div className="mt-6">
          <CardHead person={head} />
        </div>

        {/* Asistentes: una sola fila en desktop, fotos más grandes, funciones visibles */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {others.map((p) => (
            <CardAsst key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

