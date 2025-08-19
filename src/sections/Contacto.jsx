// src/sections/Contacto.jsx
import React from "react";
import { Instagram, Twitter, Mail } from "lucide-react";

const FLAVIO_INSTAGRAM = "https://www.instagram.com/flaviorobatto/";
const FLAVIO_TWITTER  = "https://x.com/DtFlavioRobatto";
const EMAIL_CT        = "cuerpotecnicorobatto@gmail.com";

export default function Contacto() {
  return (
    <section id="contacto" className="border-t bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Contacto</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Para propuestas y consultas directas del cuerpo técnico.
          </p>
        </header>

        {/* CTA principal por email */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm text-slate-500">Escríbenos por email</div>
              <a
                href={`mailto:${EMAIL_CT}?subject=Consulta%20-%20Cuerpo%20T%C3%A9cnico&body=Hola%2C%20quisiera%20hacer%20una%20consulta%20sobre...`}
                className="mt-1 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                <Mail className="h-4 w-4" />
                {EMAIL_CT}
              </a>
            </div>

            {/* Redes de Flavio */}
            <div className="flex items-center gap-3">
              <a
                href={FLAVIO_TWITTER}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                aria-label="X (Twitter) de Flavio Robatto"
              >
                <Twitter className="h-4 w-4" />
                <span>X (Twitter)</span>
              </a>
              <a
                href={FLAVIO_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                aria-label="Instagram de Flavio Robatto"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* nota breve */}
        <p className="mt-3 text-xs text-slate-500">
          Responderemos a la brevedad.
        </p>
      </div>
    </section>
  );
}
