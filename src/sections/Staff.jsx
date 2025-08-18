// src/sections/Staff.jsx
import React from "react";
import { Link } from "react-router-dom";
import { TEAM } from "../data/staff.js";

function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Normaliza la ruta de banderas: acepta "argentina.png" o "/img/banders/argentina.png"
function flagSrc(f) {
  if (!f) return "";
  if (f.startsWith("/") || f.startsWith("http")) return f;
  return `/img/banders/${f}`;
}

function Flags({ flags = [] }) {
  if (!flags || flags.length === 0) return null;
  return (
    <span className="ml-2 inline-flex items-center gap-1 align-middle">
      {flags.map((f, i) => (
        <img
          key={`${f}-${i}`}
          src={flagSrc(f)}
          alt=""
          className="h-4 w-6 rounded object-cover ring-1 ring-slate-200"
          loading="lazy"
        />
      ))}
    </span>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

function AssistantCard({ m }) {
  const slug = m.slug || slugify(m.name);
  return (
    <Link
      to={`/staff/${slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      {/* Marco con tamaño uniforme y recorte suave */}
      <div className="mb-4 relative h-64 w-full overflow-hidden rounded-xl border border-slate-100 bg-white">
        <img
          src={m.img}
          alt={m.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {m.name}
        <Flags flags={m.flags} />
      </h3>
      <div className="mt-0.5 text-sm text-slate-600">{m.role}</div>

      <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
        {(m.roles || []).map((r, i) => (
          <Chip key={i}>{r}</Chip>
        ))}
      </div>
    </Link>
  );
}

export default function Staff() {
  // DT destacado
  const lead =
    TEAM.find((p) => /director/i.test(p.role)) ||
    TEAM.find((p) => /flavio/i.test(p.name));

  // Orden visible de asistentes en una sola fila en XL
  const desiredOrder = [
    "Sandro Domínguez",
    "Horacio Rodríguez",
    "Juan Vogliotti",
    "Franco Cadile",
    "Gabriel Gonzalez",
  ];

  const assistants = TEAM
    .filter((p) => p !== lead)
    .sort((a, b) => {
      const ai = desiredOrder.indexOf(a.name);
      const bi = desiredOrder.indexOf(b.name);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">Staff</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Cuerpo técnico de primera división: liderazgo, metodología, análisis y
            preparación física al servicio del rendimiento.
          </p>
        </header>

        {/* Flavio destacado arriba (sin chips) */}
        {lead && (
          <Link
            to={`/staff/${lead.slug || slugify(lead.name)}`}
            className="mb-10 block rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm ring-1 ring-transparent transition hover:bg-white hover:shadow-md"
          >
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div className="order-1 md:order-none">
                <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  <img
                    src={lead.img}
                    alt={lead.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="text-sm font-medium uppercase tracking-wide text-blue-700">
                  Director Técnico
                </div>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  {lead.name}
                  <Flags flags={lead.flags} />
                </h3>
                <p className="mt-3 text-slate-700">{lead.bio}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                  Ver perfil →
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Asistentes en línea (XL = 5 columnas) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {assistants.map((m) => (
            <AssistantCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
