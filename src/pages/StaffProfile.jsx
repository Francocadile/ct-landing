// src/pages/StaffProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { STAFF_PAGES } from "../data/staff-pages.js";

export default function StaffProfile() {
  const { slug } = useParams();
  const person = STAFF_PAGES[slug];

  if (!person) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Perfil no encontrado</h1>
        <a
          href="/#staff"
          className="mt-4 inline-block rounded border px-3 py-2 text-slate-700 hover:bg-slate-50"
        >
          ← Volver al Staff
        </a>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <a
            href="/#staff"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            ← Volver al Staff
          </a>

          <div className="mt-4 grid gap-6 md:grid-cols-[180px,1fr]">
            <img
              src={person.photo}
              alt={person.name}
              className="h-44 w-44 rounded-xl border bg-slate-50 object-cover"
              loading="lazy"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {person.name}
              </h1>
              <p className="mt-1 text-slate-700">{person.role}</p>
              {person.flags?.length ? (
                <div className="mt-2 flex gap-2">
                  {person.flags.map((f, i) => (
                    <img
                      key={i}
                      src={f}
                      alt="bandera"
                      className="h-4 w-6 rounded-[2px] border object-cover"
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {person.bio?.length ? (
            <div className="prose prose-sm mt-6 max-w-none text-slate-700">
              {person.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}

          {person.roles?.length ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Funciones</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {person.roles.map((r, i) => (
                  <span
                    key={i}
                    className="rounded-full border bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {person.clubs?.length ? (
            <div className="mt-8">
              <h2 className="text-lg font-semibold">Clubes</h2>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                {person.clubs.map((c, i) => (
                  <img
                    key={i}
                    src={c}
                    alt="club"
                    className="h-10 w-10 rounded border bg-white p-1 object-contain"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
