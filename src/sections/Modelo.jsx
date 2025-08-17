// src/sections/Modelo.jsx
import React from "react";

const BLOQUES = [
  { id: "plan", title: "Plan de trabajo", placeholder: "Texto a completar: objetivos anuales, mensuales y microciclos." },
  { id: "semana", title: "Semana de entrenamiento", placeholder: "Texto a completar: estructura tipo MD+1, MD-3... tareas y cargas." },
  { id: "video", title: "Material de video", placeholder: "Texto a completar: qué se analiza, herramientas, flujos y entregables." },
  { id: "sesiones", title: "Ejemplos de sesiones", placeholder: "Texto a completar: 2–3 sesiones con objetivos, tareas y coaching points." },
  { id: "tecnologia", title: "Tecnología aplicada", placeholder: "Texto a completar: GPS, RPE, plataformas, tableros, integraciones." },
  { id: "prensa", title: "Entrevistas y artículos", placeholder: "Texto a completar: enlaces/recortes a notas y publicaciones." },
  { id: "funciones", title: "Funciones de cuerpo técnico", placeholder: "Texto a completar: roles, responsabilidades y rituales." },
];

export default function Modelo() {
  return (
    <section id="modelo" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Modelo de juego</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Marco metodológico y operativo: del plan anual al microciclo, con
            herramientas y ejemplos prácticos.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOQUES.map((b) => (
            <article key={b.id} className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {b.placeholder}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
