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

function Card({ person, big = false }) {
  const slug =
    (person.slug ??
      person.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")) || "";

  return (
    <a
      href={`/staff/${slug}`}
      className={`group block rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition ${
        big ? "md:flex md:items-center md:gap-6" : ""
      }`}
    >
      <img
        src={person.img}
        alt={person.name}
        className={`rounded-xl border object-cover bg-slate-50 ${
          big ? "h-40 w-40" : "h-28 w-28 mx-auto"
        }`}
        loading="lazy"
      />

      <div className={`${big ? "mt-0" : "mt-3"} text-center md:text-left`}>
        <h3 className="text-lg font-semibold text-slate-900">
          {person.name}
          <FlagRow flags={person.flags} />
        </h3>
        <p className="text-sm text-slate-600">{person.role}</p>

        {big ? (
          <p className="mt-2 text-sm text-slate-600 line-clamp-4">{person.bio}</p>
        ) : null}

        {person.roles?.length ? (
          <div className="mt-3 hidden flex-wrap gap-1 md:flex">
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

export default function Staff() {
  const [head, ...others] = TEAM;

  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Staff</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Cuerpo técnico de primera división.
        </p>

        {/* Head Coach destacado */}
        <div className="mt-6">
          <Card person={head} big />
        </div>

        {/* Resto del staff */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <Card key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

