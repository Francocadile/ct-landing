import React from "react";
import { TEAM } from "./data/staff";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Cuerpo Técnico</h1>
        <p className="text-slate-600">Temporada 2025</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <article
            key={i}
            className="overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <img
              src={m.img}
              alt={m.name}
              className="h-44 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-sm font-medium text-indigo-600">{m.role}</p>
              <p className="mt-2 text-sm text-slate-700">{m.bio}</p>

              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {m.socials?.instagram && (
                  <a
                    href={m.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900"
                  >
                    Instagram
                  </a>
                )}
                {m.socials?.twitter && (
                  <a
                    href={m.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900"
                  >
                    Twitter
                  </a>
                )}
                {m.socials?.linkedin && (
                  <a
                    href={m.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900"
                  >
                    LinkedIn
                  </a>
                )}
                {m.socials?.email && (
                  <a
                    href={`mailto:${m.socials.email}`}
                    className="text-slate-500 hover:text-slate-900"
                  >
                    Email
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
