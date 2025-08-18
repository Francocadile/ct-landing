// src/Home.jsx
import React from "react";

// Secciones
import Staff from "./sections/Staff.jsx";
import Experiencia from "./sections/Experiencia.jsx";
import Records from "./sections/Records.jsx"; // <- antes importabas Resultados
import Modelo from "./sections/Modelo.jsx";
import Blog from "./sections/Blog.jsx";
import Contacto from "./sections/Contacto.jsx";

export default function Home() {
  return (
    <>
      {/* Ancla Inicio */}
      <div id="home" className="sr-only" aria-hidden="true"></div>

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b">
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

        {/* Staff */}
        <section id="staff" className="scroll-mt-24">
          <Staff />
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="scroll-mt-24">
          <Experiencia />
        </section>

        {/* Records (antes Resultados) */}
        {/* Mantengo el id="resultados" por ahora para no romper el menú hasta el siguiente paso */}
        <section id="resultados" className="scroll-mt-24">
          <Records />
        </section>

        {/* Modelo de juego */}
        <section id="modelo" className="scroll-mt-24">
          <Modelo />
        </section>

        {/* Blog (por ahora sigue en home; más adelante lo sacamos a ruta aparte si querés) */}
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
