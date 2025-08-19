// src/sections/Modelo.jsx
import React from "react";
import {
  objetivosA,
  objetivosB,
  definicionModelo,
  juegoDePosicion,
  fasesJuego,
  principiosJuego,
  contenidosSemanales,
  semanaTipo,
  metodologiaIntegrada,
  entrenamientoBase,
  planTrabajo,
  preparacionSemana,
} from "../data/modelo";

// ───────────────────────── helpers UI ─────────────────────────
const H2 = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-2xl font-semibold text-slate-900">
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-lg font-semibold text-slate-900">{children}</h3>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-700">
    {children}
  </span>
);

// acepta className para variantes (usado en fases y semana)
const AuraCard = ({ children, className = "" }) => (
  <div className={`relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-amber-100 ${className}`}>
    <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-amber-100/0 via-amber-100/10 to-amber-100/0 blur" />
    <div className="relative">{children}</div>
  </div>
);

const Figure = ({ src, alt, caption }) => (
  <figure className="rounded-xl border border-slate-200 bg-white p-2">
    <img
      src={src}
      alt={alt}
      className="mx-auto h-56 w-full max-w-md rounded-lg object-contain"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.outerHTML =
          `<div class="mx-auto flex h-56 w-full max-w-md items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500">Agregá la imagen en ${src}</div>`;
      }}
    />
    {caption ? (
      <figcaption className="mt-2 text-center text-xs text-slate-500">{caption}</figcaption>
    ) : null}
  </figure>
);

const LoadTag = ({ label, nota, color = "amber" }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full bg-${color}-50 px-2 py-0.5 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-200`}
  >
    {label} {nota ? <em className="not-italic opacity-70">({nota})</em> : null}
  </span>
);

const Subnav = () => {
  const items = [
    ["principios", "Principios"],
    ["juego-posicion", "Juego de Posición"],
    ["fases", "Fases"],
    ["contenidos", "Contenidos"],
    ["semana", "Semana modelo"],
    ["preparacion", "Preparación de la semana"],
    ["metodologia", "Metodología"],
  ];
  return (
    <nav className="sticky top-16 z-10 -mx-4 mb-8 border-y bg-white/70 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-2">
        {items.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ───────────────────────── component ─────────────────────────

export default function Modelo() {
  return (
    <section id="modelo" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Modelo de juego
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Base conceptual y metodológica del cuerpo técnico: principios,
            juego de posición, contenidos, semana tipo y preparación del partido.
          </p>
        </header>

        <Subnav />

        {/* PRINCIPIOS / OBJETIVOS */}
        <H2 id="principios">Objetivos generales & Principios</H2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <AuraCard>
            <H3>Objetivos generales (I)</H3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              {objetivosA.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </AuraCard>
          <AuraCard>
            <H3>Objetivos generales (II)</H3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              {objetivosB.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </AuraCard>
        </div>

        <AuraCard>
          <div className="mt-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <blockquote className="max-w-3xl text-lg italic text-slate-800">
              «{definicionModelo}»
            </blockquote>
            <Chip>Aura de Campeón</Chip>
          </div>
        </AuraCard>

        {/* JUEGO DE POSICIÓN */}
        <div className="mt-12">
          <H2 id="juego-posicion">Juego de Posición</H2>
          <AuraCard>
            <p className="text-slate-800">
              “{juegoDePosicion.cita}”
              <span className="ml-2 text-slate-500">— {juegoDePosicion.autor}</span>
            </p>

            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {juegoDePosicion.sistemas.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Figure
                    src={s.img}
                    alt={`${s.nombre} ${s.formacion}`}
                    caption={`${s.code} · ${s.nombre} · ${s.formacion}`}
                  />
                </div>
              ))}
            </div>
          </AuraCard>
        </div>

        {/* FASES */}
        <div className="mt-12">
          <H2 id="fases">Fases del juego</H2>

          {/* Iniciación y Creación lado a lado */}
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {fasesJuego.slice(0, 2).map((f, i) => (
              <AuraCard key={i}>
                <div className="grid items-center gap-4 md:grid-cols-2">
                  <div>
                    <H3>{f.titulo}</H3>
                    <p className="mt-2 text-slate-700">{f.texto}</p>
                    <div className="mt-2">
                      <Chip>Formación: {f.formacion}</Chip>
                    </div>
                  </div>
                  <Figure src={f.img} alt={f.titulo} />
                </div>
              </AuraCard>
            ))}
          </div>

          {/* Finalización ocupa todo el ancho con dos imágenes */}
          {(() => {
            const f = fasesJuego[2];
            return (
              <AuraCard className="mt-6 md:col-span-2">
                <div className="grid items-center gap-6 md:grid-cols-2">
                  <div>
                    <H3>{f.titulo}</H3>
                    <p className="mt-2 text-slate-700">{f.texto}</p>
                    <div className="mt-2">
                      <Chip>Formación: {f.formacion}</Chip>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Figure src={f.img} alt={f.titulo} />
                    <Figure src={f.img2 || "/img/modelo/fase-finalizacion1.png"} alt={`${f.titulo} 2`} />
                  </div>
                </div>
              </AuraCard>
            );
          })()}
        </div>

        {/* PRINCIPIOS DE JUEGO */}
        <div className="mt-12">
          <H2>Principios de juego</H2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <AuraCard>
              <H3>Ofensivos</H3>
              <ul className="mt-3 space-y-3">
                {principiosJuego.ofensivos.map((p, i) => (
                  <li key={i}>
                    <div className="font-medium text-slate-900">{p.titulo}</div>
                    <ul className="ml-5 mt-1 list-disc text-slate-700">
                      {p.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </AuraCard>

            <AuraCard>
              <H3>Defensivos</H3>
              <ul className="mt-3 space-y-3">
                {principiosJuego.defensivos.map((p, i) => (
                  <li key={i}>
                    <div className="font-medium text-slate-900">{p.titulo}</div>
                    <ul className="ml-5 mt-1 list-disc text-slate-700">
                      {p.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </AuraCard>
          </div>
        </div>

        {/* CONTENIDOS SEMANALES */}
        <div className="mt-12">
          <H2 id="contenidos">Contenidos semanales</H2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {contenidosSemanales.map((g) => (
              <AuraCard key={g.code}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{g.icon}</div>
                  <H3>
                    {g.code} — {g.titulo}
                  </H3>
                </div>
                <div className="mt-3 space-y-3">
                  {g.bloques.map((b, i) => (
                    <div key={i}>
                      <div className="font-medium text-slate-900">{b.subtitulo}</div>
                      <p className="text-slate-700">{b.texto}</p>
                    </div>
                  ))}
                </div>
              </AuraCard>
            ))}
          </div>
        </div>

        {/* PREPARACIÓN DE LA SEMANA */}
        <div className="mt-12">
          <H2 id="preparacion">Preparación de la semana</H2>
          <div className="mt-4 grid gap-6 lg:grid-cols-3">
            {preparacionSemana.map((col, i) => (
              <AuraCard key={i}>
                <div className="mb-3">
                  <Chip>{col.grupo}</Chip>
                </div>
                <ol className="space-y-4">
                  {col.pasos.map((p) => (
                    <li key={p.n} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-slate-900">
                          {p.n}. {p.titulo}
                        </div>
                        <span
                          className={`ml-3 inline-block h-2.5 w-2.5 rounded-full bg-${col.color}-500`}
                          aria-hidden="true"
                        />
                      </div>
                      <ul className="ml-4 mt-2 list-disc text-sm text-slate-700">
                        {p.notas.map((n, j) => (
                          <li key={j}>{n}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </AuraCard>
            ))}
          </div>
        </div>

        {/* SEMANA MODELO — 7 RECTÁNGULOS IGUALES EN UNA SOLA FILA */}
        <div className="mt-12">
          <H2 id="semana">Semana modelo (Domingo–Domingo)</H2>

          {/* 
            - En móviles: fila horizontal con scroll (todos uno al lado del otro).
            - En desktop (lg+): grilla de 7 columnas exactas.
            - Cada columna es un rectángulo alargado con alto fijo y contenido equilibrado.
          */}
          <div className="
              mt-4 grid grid-flow-col auto-cols-[minmax(240px,1fr)] gap-4 overflow-x-auto
              lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-7
            ">
            {semanaTipo.map((d) => (
              <AuraCard key={d.dia} className="flex h-[22rem] min-w-[240px] flex-col">
                {/* encabezado */}
                <div className="mb-3 flex items-center justify-between">
                  <H3>{d.dia}</H3>
                  <LoadTag {...d.carga} />
                </div>

                <div className="h-px w-full bg-slate-200/70" />

                {/* contenido (ocupa el alto disponible) */}
                <ul className="mt-3 flex-1 list-disc space-y-1 overflow-auto pl-5 text-slate-700">
                  {d.bloques.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {/* footer sutil para equilibrio visual */}
                <div className="mt-3 rounded-xl bg-amber-50/40 p-2 text-center text-[11px] font-medium text-amber-800 ring-1 ring-amber-100">
                  Preparados para competir
                </div>
              </AuraCard>
            ))}
          </div>
        </div>

        {/* METODOLOGÍA / ENTRENAMIENTO / PLAN */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AuraCard>
            <H2 id="metodologia">{metodologiaIntegrada.titulo}</H2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              {metodologiaIntegrada.bullets.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Figure src={metodologiaIntegrada.img} alt={metodologiaIntegrada.titulo} />
            </div>
            {metodologiaIntegrada.videoUrl ? (
              <a
                href={metodologiaIntegrada.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700"
              >
                Ver video
              </a>
            ) : null}
          </AuraCard>

          <div className="space-y-6">
            <AuraCard>
              <H3>{entrenamientoBase.titulo}</H3>
              <p className="mt-2 text-slate-700">{entrenamientoBase.texto}</p>
              <div className="mt-3">
                <Figure src={entrenamientoBase.img} alt={entrenamientoBase.titulo} />
              </div>
            </AuraCard>

            <AuraCard>
              <H3>{planTrabajo.titulo}</H3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                {planTrabajo.bullets.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <div className="mt-3">
                <Figure src={planTrabajo.img} alt={planTrabajo.titulo} />
              </div>
            </AuraCard>
          </div>
        </div>
      </div>
    </section>
  );
}

