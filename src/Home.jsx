// src/Home.jsx
import React from "react";

// Header (menú)
import Header from "./components/Header.jsx";

// Secciones nuevas arriba
import Highlights from "./sections/Highlights.jsx";
import ClubsStrip from "./sections/ClubsStrip.jsx";

// Secciones existentes
import Staff from "./sections/Staff.jsx";
import Experiencia from "./sections/Experiencia.jsx";
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Blog from "./sections/Blog.jsx";
import Contacto from "./sections/Contacto.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero como sección visible para que el Header pueda detectar #home */}
        <section id="home" className="border-b scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-4xl font-bold tracking-tight">Cuerpo Técnico</h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Sitio oficial: staff, experiencia, records, modelo de juego y contacto.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contacto"
                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                Contacto
              </a>
              <a
                href="#staff"
                className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
              >
                Ver Staff
              </a>
            </div>
          </div>
        </section>

        {/* KPIs de impacto */}
        <Highlights />

        {/* Logos de clubes (credibilidad) */}
        <ClubsStrip />

        {/* Staff */}
        <section id="staff" className="scroll-mt-24">
          <Staff />
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="scroll-mt-24">
          <Experiencia />
        </section>

        {/* Records (antes Resultados) */}
        <section id="records" className="scroll-mt-24">
          <Records />
        </section>

        {/* Modelo de juego */}
        <section id="modelo" className="scroll-mt-24">
          <Modelo />
        </section>

        {/* Blog (si luego lo sacamos del home, solo quitamos esta sección) */}
        <section id="blog" className="scroll-mt-24">
          <Blog />
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24">
          <Contacto />
        </section>
      </main>
    </>
  );
}
