// src/pages/member/[slug].jsx
import React from "react";
import { useRouter } from "next/router";
import { TEAM } from "@/src/data/staff";
import { slugify } from "@/src/utils/slug";

export default function Member() {
  const { query } = useRouter();
  const member = TEAM.find((m) => slugify(m.name) === query.slug);

  if (!member) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Integrante no encontrado</h1>
        <p className="mt-2 text-slate-600">Verificá el enlace o regresá al staff.</p>
        <div className="mt-6">
          <a
            href="/#staff"
            className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
          >
            Volver al Staff
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <a
            href="/#staff"
            className="inline-block rounded-lg border px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            ← Volver al Staff
          </a>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border bg-slate-100">
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold">{member.name}</h1>
              <div className="mt-1 font-semibold text-blue-700">{member.role}</div>

              {member.bio ? <p className="mt-4 text-slate-700">{member.bio}</p> : null}

              {member.roles?.length ? (
                <>
                  <h2 className="mt-6 text-lg font-semibold">Funciones principales</h2>
                  <ul className="mt-2 list-disc pl-5 text-slate-700">
                    {member.roles.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>

          {member.clubs?.length ? (
            <div className="mt-10">
              <h2 className="text-lg font-semibold">Trayectoria por clubes</h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {member.clubs.map((c, i) => (
                  <img
                    key={i}
                    src={c.logo}
                    alt={c.name}
                    title={c.name}
                    className="h-10 w-10 rounded-md border bg-white object-contain p-1 sm:h-12 sm:w-12"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 flex gap-3">
            <a
              href="/#records"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Ver Records
            </a>
            <a
              href="/#contacto"
              className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
