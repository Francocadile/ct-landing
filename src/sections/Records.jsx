// src/sections/Records.jsx
import React from "react";
import { RECORDS } from "../data/results";

function styleFor(title = "") {
  const t = title.toLowerCase();
  if (t.includes("campeón"))
    return {
      bg: "from-amber-100 to-amber-50",
      ring: "ring-amber-300",
      dot: "bg-amber-400",
    };
  if (t.includes("subcampeón"))
    return {
      bg: "from-slate-100 to-white",
      ring: "ring-slate-300",
      dot: "bg-slate-400",
    };
  if (t.includes("semifinal"))
    return {
      bg: "from-orange-50 to-white",
      ring: "ring-orange-300",
      dot: "bg-orange-400",
    };
  if (t.includes("clasificación") || t.includes("libertadores") || t.includes("sudamericana"))
    return {
      bg: "from-sky-50 to-white",
      ring: "ring-sky-300",
      dot: "bg-sky-400",
    };
  return {
    bg: "from-slate-50 to-white",
    ring: "ring-slate-200",
    dot: "bg-slate-400",
  };
}

function Chip({ children }) {
  return (
    <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs text-slate-700 ring-1 ring-inset ring-slate-200">
      {children}
    </span>
  );
}

export default function Records() {
  const items = [...RECORDS].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  return (
    <section id="resultados" className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Records</h2>
          <p className="hidden text-sm text-slate-500 md:block">
            Logros destacados del cuerpo técnico
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {items.map((r, i) => {
            const s = styleFor(r.title || "");
            return (
              <article
                key={`${r.year}-${r.title}-${i}`}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b ${s.bg} p-5 ring-1 ring-inset ${s.ring} transition-shadow hover:shadow-lg`}
              >
                {/* Año */}
                {r.year && (
                  <span className="absolute right-4 top-4 rounded-full bg-black/5 px-2 py-1 text-xs font-semibold text-slate-700">
                    {r.year}
                  </span>
                )}

                {/* Encabezado */}
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 shrink-0 rounded-xl bg-white ring-1 ring-slate-200">
                    {r.logo ? (
                      <img
                        src={r.logo}
                        alt={r.club}
                        className="h-full w-full rounded-xl object-contain p-1.5"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-500">
                        {r.club?.slice(0, 2) ?? "CT"}
                      </div>
                    )}
                    <span className={`absolute -right-1 -bottom-1 h-3 w-3 rounded-full ${s.dot} ring-2 ring-white`} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {r.club} · {r.role}
                    </p>
                  </div>
                </div>

                {/* Detalles */}
                {r.details?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.details.map((d, idx) => (
                      <Chip key={idx}>{d}</Chip>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
