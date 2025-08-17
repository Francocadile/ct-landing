// src/sections/Modelo.jsx
import React from "react";

const PRINCIPIOS = [
  "Juego de Posición como marco para crear superioridades.",
  "Amplitud y profundidad constantes; cambios de orientación.",
  "Ritmo y pausas para desorganizar al rival; tercer hombre y hombre libre.",
  "Ocupación racional de espacios y sincronización por alturas/pasillos.",
  "Transiciones: 5'' tras pérdida y verticalidad inteligente tras robo.",
  "ABP con roles claros: bloqueos, cortinas y gestión de segundas jugadas.",
];

const BLOQUES = [
  { id: "plan", title: "Plan de trabajo", placeholder: "Objetivos anuales/mensuales, periodización por microciclos." },
  { id: "semana", title: "Semana de entrenamiento", placeholder: "Estructura MD+1 a MD-1, cargas y objetivos por día." },
  { id: "video", title: "Material de video", placeholder: "Flujos de análisis, entregables, software y tiempos de entrega." },
  { id: "sesiones", title: "Ejemplos de sesiones", placeholder: "2–3 sesiones tipo con tareas, espacios, tiempos y coaching points." },
  { id: "tecnologia", title: "Tecnología aplicada", placeholder: "GPS, RPE, tableros, integraciones de datos, control de carga." },
  { id: "funciones", title: "Funciones de cuerpo técnico", placeholder: "Roles, responsabilidades, rituales y canales de comunicación." },
  { id: "prensa", title: "Entrevistas y artículos", placeholder: "Enlaces y recortes de prensa relevantes." },
];

export default function Modelo() {
  return (
    <section id="modelo" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Modelo de juego</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Marco metodológico y operativo del cuerpo técnico: principios, planificación y herramientas.
          </p>
        </header>

        {/* Principios del modelo */}
        <div className="mb-10 rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Principios del modelo</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            {PRINCIPIOS.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Bloques operativos */}
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
