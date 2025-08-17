// src/sections/Filosofia.jsx
import React from "react";
import { PHILOSOPHY_SECTIONS, PHILOSOPHY_INTRO } from "../data/philosophy";

export default function Filosofia() {
  return (
    <section id="filosofia" className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Filosofía de Juego</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{PHILOSOPHY_INTRO}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {PHILOSOPHY_SECTIONS.map((sec) => (
            <article
              key={sec.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{sec.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {sec.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
