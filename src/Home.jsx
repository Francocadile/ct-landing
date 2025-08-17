// src/Home.jsx
import React from "react";
import Staff from "./sections/Staff";

export default function Home() {
  return (
    <>
      {/* Ancla para el menú "Inicio" */}
      <div id="home" className="sr-only" aria-hidden="true"></div>

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-4xl font-bold tracking-tight">Cuerpo Técnico</h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Sitio oficial: staff, modelo de juego, experiencia y contacto.
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

        {/* Staff (sección completa) */}
        <Staff />
      </main>
    </>
  );
}
