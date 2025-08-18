// src/pages/StaffProfile.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { TEAM } from "../data/staff.js";
import { CLUBS_BY_MEMBER } from "../data/staff-pages.js";

function findMemberBySlug(slug) {
  // buscamos por slug calculado del name
  const s = (text) =>
    text
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  return TEAM.find((m) => s(m.name) === slug);
}

// mapeo manual a las claves que usamos en CLUBS_BY_MEMBER
const slugToKey = {
  "flavio-robatto": "flavio",
  "sandro-dominguez": "sandro",
  "horacio-rodriguez": "horacio",
  "juan-chicho-vogliotti": "juan",
  "franco-cadile": "franco",
  "gabriel-gonzalez": "gabriel",
};

export default function StaffProfile() {
  const { slug } = useParams();
  const member = findMemberBySlug(slug);

  if (!member) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-slate-600">Perfil no encontrado.</p>
        <Link className="mt-4 inline-block text-blue-600" to="/#staff">
          ← Volver al Staff
        </Link>
      </main>
    );
  }

  const clubs = CLUBS_BY_MEMBER[slugToKey[slug]] || [];

  return (
    <main className="bg-white">
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Link className="text-blue-600" to="/#staff">← Volver al Staff</Link>

          <div className="mt-6 grid gap-8 md:grid-cols-[280px,1fr]">
            <div className="rounded-2xl border bg-white p-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full rounded-xl object-cover"
              />
              <div className="mt-4 text-sm text-slate-500">{member.role}</div>
              <h1 className="text-2xl font-bold tracking-tight">{member.name}</h1>
            </div>

            <div>
              <p className="text-slate-700">{member.bio}</p>

              {member.roles?.length ? (
                <>
                  <h2 className="mt-6 text-lg font-semibold">Funciones clave</h2>
                  <ul className="mt-2 grid list-inside list-disc gap-1 text-slate-700">
                    {member.roles.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {clubs.length ? (
                <>
                  <h2 className="mt-8 text-lg font-semibold">Clubes</h2>
                  <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                    {clubs.map((c) => (
                      <div key={c.name} className="flex items-center justify-center rounded-xl border bg-white p-3">
                        <img
                          src={c.logo}
                          alt={c.name}
                          className="h-12 w-12 object-contain"
                          title={c.name}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
