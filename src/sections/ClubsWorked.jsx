// src/sections/ClubsWorked.jsx
import React from "react";

// Lista blanca de clubes a mostrar (en el orden que pediste)
const ALLOWED_CLUBS = [
  { name: "Bolívar",            logo: "/img/clubs/bolivar.png" },
  { name: "Nacional Potosí",    logo: "/img/clubs/nacional-potosi.png" },
  { name: "Atlético Huila",     logo: "/img/clubs/atletico-huila.png" },
  { name: "Jaguares",           logo: "/img/clubs/jaguares-fc.png" },
  { name: "Cúcuta Deportivo",   logo: "/img/clubs/cucuta-deportivo.png" },
  { name: "Loja",               logo: "/img/clubs/loja.png" },
  // Pediste "Sullana": el archivo que tenemos es el de Alianza Atlético (Sullana)
  { name: "Sullana",            logo: "/img/clubs/alianza-atletico.png" },
  // Me dijiste: "norte.jpg es el escudo de Norte América"
  { name: "Norte América",      logo: "/img/clubs/norte.jpg" },
  { name: "Millonarios",        logo: "/img/clubs/millonarios.png" },
  { name: "Barcelona",          logo: "/img/clubs/barcelona-sc.png" },
];

export default function ClubsWorked() {
  return (
    <section id="clubes" className="border-b scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">
          Clubes en los que trabajó el Cuerpo Técnico
        </h2>

        {/* Escudos grandes a color */}
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {ALLOWED_CLUBS.map((c) => (
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

