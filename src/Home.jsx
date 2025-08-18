// src/Home.jsx
import React from "react";

// Bloques arriba del fold (si los estás usando)
import Highlights from "./sections/Highlights.jsx";
import ClubsStrip from "./sections/ClubsStrip.jsx";

// Secciones
import Staff from "./sections/Staff.jsx";
import ClubsWorked from "./sections/ClubsWorked.jsx"; // ← NUEVO
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Blog from "./sections/Blog.jsx";
import Contacto from "./sections/Contacto.jsx";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section id="home" className="border-b scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight">Cuerpo Técnico</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Sitio oficial: staff, clubes, records, modelo de juego y contacto.
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

      {/* (Opcional) Métricas y strip si los querés mantener */}
      {Highlights ? <Highlights /> : null}
      {ClubsStrip ? <ClubsStrip /> : null}

      {/* 1) STAFF */}
      <section id="staff" className="scroll-mt-24">
        <Staff />
      </section>

      {/* 2) CLUBES (reemplaza Experiencia) */}
      <ClubsWorked />

      {/* 3) RECORDS */}
      <section id="records" className="scroll-mt-24">
        <Records />
      </section>

      {/* 4) MODELO DE JUEGO */}
      <section id="modelo" className="scroll-mt-24">
        <Modelo />
      </section>

      {/* 5) BLOG */}
      <section id="blog" className="scroll-mt-24">
        <Blog />
      </section>

      {/* 6) CONTACTO */}
      <section id="contacto" className="scroll-mt-24">
        <Contacto />
      </section>
    </main>
  );
}

