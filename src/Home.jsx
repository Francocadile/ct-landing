// src/Home.jsx
import React from "react";
import Modal from "./components/Modal.jsx";

import Staff from "./sections/Staff.jsx";
import PropuestaClub from "./sections/PropuestaClub.jsx";
import ClubsWorked from "./sections/ClubsWorked.jsx";
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Media from "./sections/Media.jsx";
import OpenbaseHome from "./sections/OpenbaseHome.jsx";
import Contacto from "./sections/Contacto.jsx";
import Convicciones from "./sections/Convicciones.jsx";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Modal />
  {/* HERO */}
  <section id="home" className="border-b bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-blue-900 max-w-4xl">
            Fútbol real, equipos que dejan huella
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-2xl text-slate-700 font-medium">
            Somos un cuerpo técnico que vive el fútbol con pasión y trabajo. Nos obsesiona competir, mejorar y dejar una identidad en cada club.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="inline-block rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1 text-sm sm:text-base font-semibold shadow-sm">Campeón en Bolivia</span>
            <span className="inline-block rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1 text-sm sm:text-base font-semibold shadow-sm">Fútbol internacional</span>
            <span className="inline-block rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1 text-sm sm:text-base font-semibold shadow-sm">Juego ofensivo y protagonista</span>
            <span className="inline-block rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1 text-sm sm:text-base font-semibold shadow-sm">Trabajo en equipo real</span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/#modelo"
              className="rounded-lg bg-blue-700 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
            >
              Ver metodología
            </a>
            <a
              href="/#contacto"
              className="rounded-lg border-2 border-blue-700 px-6 py-3 text-base sm:text-lg font-semibold text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

  {/* PROPUESTA DE VALOR PARA CLUBES */}
  <PropuestaClub />

      {/* 1) STAFF */}
      <section id="staff" className="scroll-mt-24">
        <Staff />
      </section>

      <Convicciones />

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

      <OpenbaseHome />

      {/* 6) CONTACTO */}
      <section id="contacto" className="scroll-mt-24">
        <Contacto />
      </section>
    </main>
  );
}
