// src/sections/Experiencia.jsx
import React from "react";
import { EXPERIENCE } from "../data/experience";

// Logo con fallback a iniciales si el escudo no existe
function ClubLogo({ club, src }) {
  const [error, setError] = React.useState(false);

  const initials = club
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (error || !src) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 ring-1 ring-slate-200">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={club}
      className="h-14 w-14 rounded-full object-contain ring-1 ring-slate-200 bg-white"
      onError={() => setError(true)}
    />
  );
}

export default function Experiencia() {
  return (
    <section id="experiencia" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Experiencia</h2>
        <p className="mt-2 text-slate-600">
          Trayectoria profesional (DT y asistente).
        </p>

        <div className="mt-8 grid gap-4">
          {EXPERIENCE.map((item, idx) => (
            <div
              key={`${item.club}-${idx}`}
              className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-xl border bg-white p-4 shadow-sm"
            >
              {/* Logo */}
              <ClubLogo club={item.club} src={item.logo} />

              {/* Info */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold">{item.club}</h3>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {item.role}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.period}</p>
              </div>

              {/* Stats */}
              <div className="text-right">
                {typeof item.matches === "number" ? (
                  <p className="text-sm">
                    <span className="font-semibold">{item.matches}</span>{" "}
                    <span className="text-slate-500">PJ</span>
                  </p>
                ) : (
                  <p className="text-sm text-slate-500">—</p>
                )}
                {typeof item.ppg === "number" ? (
                  <p className="text-xs text-slate-500">
                    {item.ppg.toFixed(2)} Pts/Partido
                  </p>
                ) : (
                  <p className="text-xs text-slate-400">—</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

