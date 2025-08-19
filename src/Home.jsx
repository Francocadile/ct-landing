// src/Home.jsx
import React from "react";

import Staff from "./sections/Staff.jsx";
import ClubsWorked from "./sections/ClubsWorked.jsx";
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Videos from "./sections/Videos.jsx";
import Contacto from "./sections/Contacto.jsx";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section id="home" className="border-b scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight">Cuerpo Técnico</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Staff, clubes donde trabajamos, records, modelo de juego, material audiovisual y contacto.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="/#contacto"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Contacto
            </a>
            <a
              href="/#staff"
              className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
            >
              Ver Staff
            </a>
          </div>
        </div>
      </section>

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

      {/* 5) MATERIAL AUDIOVISUAL */}
      <section id="videos" className="scroll-mt-24">
        <Videos />
      </section>

      {/* 6) CONTACTO */}
      <section id="contacto" className="scroll-mt-24">
        <Contacto />
      </section>
    </main>
  );
}

