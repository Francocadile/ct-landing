// src/components/StaffCard.jsx
import React from "react";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const IconLink = ({ href, label, children }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </a>
  );
};

export default function StaffCard({ name, role, bio, img, socials }) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Marco 4:3 con recorte elegante */}
      <div className="relative w-full bg-slate-100 pt-[75%]">
        <img
          src={img}
          alt={name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm font-medium text-indigo-600">{role}</p>
        {bio && <p className="mt-2 text-sm text-slate-700">{bio}</p>}

        <div className="mt-3 flex items-center gap-2">
          <IconLink href={socials?.instagram} label="Instagram">
            <Instagram className="h-4 w-4" />
          </IconLink>
          <IconLink href={socials?.twitter} label="Twitter / X">
            <Twitter className="h-4 w-4" />
          </IconLink>
          <IconLink href={socials?.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </IconLink>
          <IconLink href={socials?.email ? `mailto:${socials.email}` : ""} label="Email">
            <Mail className="h-4 w-4" />
          </IconLink>
        </div>
      </div>
    </article>
  );
}
