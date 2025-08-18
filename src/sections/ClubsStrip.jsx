// src/sections/ClubsStrip.jsx
import React from "react";

const CLUBS = [
  { name: "Bolívar", src: "/img/clubs/bolivar.png" },
  { name: "Nacional Potosí", src: "/img/clubs/nacional-potosi.png" },
  { name: "Atlético Huila", src: "/img/clubs/atletico-huila.png" },
  { name: "Cúcuta Deportivo", src: "/img/clubs/cucuta-deportivo.png" },
  { name: "Jaguares FC", src: "/img/clubs/jaguares-fc.png" },
  { name: "Barcelona SC", src: "/img/clubs/barcelona-sc.png" },
  { name: "Alianza Atlético", src: "/img/clubs/alianza-atletico.png" },
  { name: "Millonarios", src: "/img/clubs/millonarios.png" },
  { name: "Norte América", src: "/img/clubs/norte.jpg" },
  { name: "Mitre", src: "/img/clubs/mitre.png" },
  { name: "Liga de Loja", src: "/img/clubs/loja.png" },
  // Si querés sumar Real Potosí con acento, usa el nombre exacto del archivo que subiste:
  // { name: "Real Potosí", src: "/img/clubs/real-potosí.png" },
];

export default function ClubsStrip() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="mb-5 text-center text-sm font-medium tracking-wide text-slate-500">
          Clubes en los que trabajó el Cuerpo Técnico
        </p>

        <div className="grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {CLUBS.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl border bg-slate-50 p-3"
              title={c.name}
            >
              <img
                src={c.src}
                alt={c.name}
                className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
