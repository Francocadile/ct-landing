// src/sections/Contacto.jsx
import React from "react";
import { SITE } from "../data/site";
import { Mail, Phone, Instagram, Twitter, Linkedin, Send } from "lucide-react";

// ⚠️ Cambiá por tu endpoint real (Formspree u otro)
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

export default function Contacto() {
  return (
    <section id="contacto" className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        {/* Columna izquierda: datos directos */}
        <div>
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-2 max-w-md text-slate-600">
            Escribinos para propuestas, proyectos o colaboraciones.
          </p>

          <div className="mt-6 space-y-3 text-slate-700">
            {SITE.email && (
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-slate-500" />
                <a className="hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            )}
            {SITE.phone && (
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-slate-500" />
                <a
                  className="hover:underline"
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                >
                  {SITE.phone}
                </a>
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center gap-3">
            {SITE.socials?.instagram && (
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {SITE.socials?.twitter && (
              <a
                href={SITE.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {SITE.socials?.linkedin && (
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <form action={FORM_ENDPOINT} method="POST" className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                className="w-full rounded-lg border px-3 py-2 outline-none ring-offset-1 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full rounded-lg border px-3 py-2 outline-none ring-offset-1 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Contanos brevemente en qué te podemos ayudar…"
                className="w-full rounded-lg border px-3 py-2 outline-none ring-offset-1 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Opcionales para Formspree */}
            <input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

            <button
              type="submit"
              className=
