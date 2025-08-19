// src/Home.jsx
import React from "react";

import Staff from "./sections/Staff.jsx";
import ClubsWorked from "./sections/ClubsWorked.jsx";
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Media from "./sections/Media.jsx";
import Contacto from "./sections/Contacto.jsx";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO — limpio, profesional y con CTA claros */}
      <section id="home" className="border-b bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">
              Proyecto futbolístico de <span className="text-blue-600">Flavio Robatto</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Un cuerpo técnico de élite con identidad táctica, metodología integrada y resultados
              comprobados en primera división. Descubrí nuestro modelo, nuestros números y cómo trabajamos.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                Juego de Posición
              </li>
              <li className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                Metodología Integrada
              </li>
              <li className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                Eficiencia competitiva
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/#modelo"
                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                Ver modelo de juego
              </a>
              <a
                href="/#contacto"
                className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1) STAFF */}
      <section id="staff" className="scroll-mt-24">
        <Staff />
      </section>

      {/* 2) CLUBES */}
      <ClubsWorked />

      {/* 3) RECORDS */}
      <section id="records" className="scroll-mt-24">
        <Records />
      </section>

      {/* 4) MODELO */}
      <section id="modelo" className="scroll-mt-24">
        <Modelo />
      </section>

      {/* 5) MATERIAL AUDIOVISUAL */}
      <section id="media" className="scroll-mt-24">
        <Media />
      </section>

      {/* 6) CONTACTO */}
      <section id="contacto" className="scroll-mt-24">
        <Contacto />
      </section>
    </main>
  );
}

