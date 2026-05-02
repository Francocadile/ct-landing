import React from "react";

export default function PropuestaClub() {
  return (
    <section id="propuesta-club" className="bg-white border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3 tracking-tight">
          ¿Qué le damos a un club?
        </h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-700 font-medium mb-10">
          No vendemos humo: traemos trabajo, orden y una idea de fútbol que se nota en la cancha y en el vestuario.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-sm h-full">
            <div className="text-xl font-bold text-blue-800 mb-2">Competitividad real</div>
            <p className="text-slate-700 text-base">El equipo compite desde el primer día, con hambre y una identidad clara.</p>
          </div>
          <div className="flex flex-col items-center bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-sm h-full">
            <div className="text-xl font-bold text-blue-800 mb-2">Jugadores que crecen</div>
            <p className="text-slate-700 text-base">Entrenamos para potenciar futbolistas, sumar puntos y dejar activos para el club.</p>
          </div>
          <div className="flex flex-col items-center bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-sm h-full">
            <div className="text-xl font-bold text-blue-800 mb-2">Gestión de grupo</div>
            <p className="text-slate-700 text-base">Un vestuario unido, con roles claros y todos tirando para el mismo lado.</p>
          </div>
          <div className="flex flex-col items-center bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-sm h-full">
            <div className="text-xl font-bold text-blue-800 mb-2">Proceso que queda</div>
            <p className="text-slate-700 text-base">No dependemos de un resultado: dejamos procesos y una forma de trabajar que perdura.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
