// src/Home.jsx
import React from "react";
import { TEAM } from "./data/staff";

export default function Home() {
  return (
    <>
      {/* ancla para Inicio */}
      <div id="home" className="sr-only" aria-hidden="true"></div>

      <main id="staff" className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold">Cuerpo Técnico</h1>
          <p className="text-slate-600">Temporada {new Date().getFullYear()}</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <article key={i} className="overflow-hidden rounded-xl border bg-white shadow-sm">
              <img
                src={m.img}
                alt={m.name}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div
