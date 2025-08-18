// src/sections/ClubsWorked.jsx
import React from "react";
import { CLUBS_BY_MEMBER } from "../data/staff-pages.js";

export default function ClubsWorked() {
  const clubs = React.useMemo(() => {
    const map = new Map();
    Object.values(CLUBS_BY_MEMBER).flat().forEach((c) => {
      if (!map.has(c.name)) map.set(c.name, { name: c.name, logo: c.logo });
    });
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

        {/* Escudos grandes */}
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clubs.map((c) => (
            <div
              key={c.name}
              className="flex h-28 items-center justify-center rounded-2xl border bg-white p-4 shadow-sm"
              title={c.name}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
