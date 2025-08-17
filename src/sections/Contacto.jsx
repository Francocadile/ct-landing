// src/sections/Contacto.jsx
import React from "react";
import { SITE } from "../data/site";
import { Mail, Phone, Instagram, Twitter, Linkedin, Send } from "lucide-react";

// TODO: cambia esto por tu endpoint real de Formspree (u otro)
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

export default function Contacto() {
  return (
    <section id="contacto" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">
        {/* Columna izquierda: datos directos */}
        <div>
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-2 text-slate-600">
            Escribinos para propuestas, proyectos o colaboraciones.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            {SITE.email && (
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-slate-500" />
                <a href={`mailto:${SITE.email}`} className="hover:underline">
                  {SITE.email}
                </a>
              </li>
            )}
            {SITE.phone && (
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-slate-500" />
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {SITE.phone}
                </a>
              </li>
            )}
          </ul>

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
                aria-label="Twitter"
                className="rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
