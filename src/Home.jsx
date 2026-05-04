// src/Home.jsx
import React from "react";
import Modal from "./components/Modal.jsx";
import Hero from "./sections/Hero.jsx";

import Staff from "./sections/Staff.jsx";
import PropuestaClub from "./sections/PropuestaClub.jsx";
import ClubsWorked from "./sections/ClubsWorked.jsx";
import Records from "./sections/Records.jsx";
import Modelo from "./sections/Modelo.jsx";
import Media from "./sections/Media.jsx";
import OpenbaseHome from "./sections/OpenbaseHome.jsx";
import Contacto from "./sections/Contacto.jsx";
import Convicciones from "./sections/Convicciones.jsx";
import WorldComparison from "./sections/WorldComparison.jsx";

export default function Home() {
  return (
    <main className="bg-ink-900">
      <Modal />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* PROPUESTA DE VALOR PARA CLUBES */}
      <PropuestaClub />
      <WorldComparison />

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
