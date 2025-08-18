// src/sections/ClubsWorked.jsx
import React from "react";
import { CLUBS_BY_MEMBER } from "../data/staff-pages.js";

export default function ClubsWorked() {
  // Union de clubes (sin duplicados) a partir de todos los integrantes
  const clubs = React.useMemo(() => {
    const map = new Map(); // name -> { name, logo }
    Object.values(CLUBS_BY_MEMBER)
      .flat()
      .forEach((c) => {
        if (!map.has(c.name)) map.set(c.name, { name: c.name, logo: c.logo });
      });
    // orden alfabético por nombre
    return Array.from(map.values()).sort((a, b) =>
      a.name.localeCompare(b.name, "es")
    );
  }, []);

  return (
    <section id="clubes" className="border-b scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">
          Clubes en los que trabajó el Cuerpo Técnico
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {clubs.map((c) => (
            <div
              key={c.name}
              className="flex h-16 items-center justify-center rounded-xl border bg-white/70 p-2 shadow-sm"
              title={c.name}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
