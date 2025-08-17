import React from "react";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { SITE } from "../data/site";

const IconLink = ({ href, children, label }) => (
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

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <div>
          <div className="text-sm font-semibold">{SITE.name}</div>
          <div className="text-sm text-slate-500">{SITE.slogan}</div>
        </div>

        <div className="flex items-center gap-2">
          {SITE.socials?.instagram && (
            <IconLink href={SITE.socials.instagram} label="Instagram">
              <Instagram className="h-5 w-5" />
            </IconLink>
          )}
          {SITE.socials?.twitter && (
            <IconLink href={SITE.socials.twitter} label="Twitter">
              <Twitter className="h-5 w-5" />
            </IconLink>
          )}
          {SITE.socials?.linkedin && (
            <IconLink href={SITE.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </IconLink>
          )}
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
