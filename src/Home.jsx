// src/Home.jsx
import React from "react";

import Staff from "./sections/Staff.jsx";
import ClubsWorked from "./sections/ClubsWorked.jsx";
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Media from "./sections/Media.jsx";
import Contacto from "./sections/Contacto.jsx";
import Convicciones from "./sections/Convicciones.jsx";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section id="home" className="border-b bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Proyecto <span className="text-slate-900">Futbolístico</span> de{" "}
            <span className="text-blue-600">Flavio Robatto</span>
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Un cuerpo técnico con identidad táctica, metodología integrada y
            resultados comprobados en primera división. Descubrí nuestro modelo,
            nuestros números y cómo trabajamos.
          </p>

          {/* CTA principal */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
      </section>

      <Convicciones />

      {/* 1) STAFF */}
      <section id="staff" className="scroll-mt-24">
        <Staff />
      </section>

      {/* 2) CLUBES */}
      <section id="clubes" className="scroll-mt-24">
        <ClubsWorked />
      </section>

      {/* 3) RECORDS */}
      <section id="records" className="scroll-mt-24">
        <Records />
      </section>

      {/* 4) MODELO */}
      <section id="modelo" className="scroll-mt-24">
        <Modelo />
      </section>

      {/* 5) MATERIAL AUDIOVISUAL (grilla 3 columnas) */}
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
