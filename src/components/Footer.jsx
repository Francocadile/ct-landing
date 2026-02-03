// src/components/Footer.jsx
import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  Mail,
  MessageCircle,
  Music, // usamos este como ícono para TikTok (fallback)
  Link as LinkIcon // opcional para Threads si querés mostrarlo
} from "lucide-react";
import { SITE } from "../data/site";

const IconLink = ({ href, label, children }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const s = SITE.socials || {};
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <div>
          <div className="text-sm font-semibold">{SITE.name}</div>
          <div className="text-sm text-slate-500">{SITE.slogan}</div>

          <div className="mt-2">
            <a
              href="/dossier-bolivar-2025"
              className="text-sm text-slate-600 underline-offset-2 hover:underline"
            >
              Dossier Bolívar 2025 (PDF)
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <IconLink href={s.instagram} label="Instagram"><Instagram className="h-5 w-5" /></IconLink>
          <IconLink href={s.twitter}   label="Twitter / X"><Twitter className="h-5 w-5" /></IconLink>
          <IconLink href={s.linkedin}  label="LinkedIn"><Linkedin className="h-5 w-5" /></IconLink>
          <IconLink href={s.youtube}   label="YouTube"><Youtube className="h-5 w-5" /></IconLink>
          <IconLink href={s.facebook}  label="Facebook"><Facebook className="h-5 w-5" /></IconLink>

          {/* TikTok: fallback con icono Music porque 'Tiktok' no está exportado en tu versión */}
          <IconLink href={s.tiktok} label="TikTok"><Music className="h-5 w-5" /></IconLink>

          {/* Threads (opcional): usamos un icono de enlace genérico */}
          <IconLink href={s.threads} label="Threads"><LinkIcon className="h-5 w-5" /></IconLink>

          {/* WhatsApp */}
          <IconLink href={s.whatsapp} label="WhatsApp"><MessageCircle className="h-5 w-5" /></IconLink>

          {SITE.email && (
            <a
              href={`mailto:${SITE.email}`}
              className="ml-2 text-sm text-slate-600 underline-offset-2 hover:underline"
            >
              <Mail className="mr-1 inline-block h-4 w-4 align-[-2px]" />
              {SITE.email}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

