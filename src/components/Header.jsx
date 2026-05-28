// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/site";
import { useLang } from "../i18n/LanguageContext.jsx";

const NAV = [
  { es: "Inicio",      en: "Home",       href: "/#home" },
  { es: "Modelo",      en: "Model",      href: "/#modelo" },
  { es: "Manual",      en: "Manual",     href: "/manual-modelo" },
  { es: "Ensayo",      en: "Essay",      href: "/el-arte-de-ser-protagonistas" },
  { es: "Trayectoria", en: "Career",     href: "/#clubes" },
  { es: "Staff",       en: "Staff",      href: "/#staff" },
  { es: "Logros",      en: "Records",    href: "/#records" },
  { es: "OpenBase",    en: "OpenBase",   href: "/openbase" },
  { es: "Contacto",    en: "Contact",    href: "/#contacto" },
];

function LangToggle({ className = "" }) {
  const { lang, setLang } = useLang();
  const opt = (code, label) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={`px-2 py-0.5 text-xs font-semibold uppercase tracking-wide rounded transition-colors ${
        lang === code
          ? "bg-gold-500 text-ink-900"
          : "text-bone/70 hover:text-gold-500"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className={`inline-flex items-center gap-0.5 rounded-md border border-bone/15 p-0.5 ${className}`}>
      {opt("es", "ES")}
      {opt("en", "EN")}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");
  const { lang } = useLang();

  useEffect(() => {
    const onChange = () => {
      const { pathname, hash } = window.location;
      setActive(pathname + (hash || ""));
    };
    onChange();
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  const linkCls = (href) =>
    `text-sm transition-colors ${
      active === href
        ? "text-gold-500 font-semibold"
        : "text-bone/80 hover:text-gold-500"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-ink-900/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="/" className="font-display font-bold text-bone text-lg tracking-tight">
          {SITE.name}
        </a>

        <nav className="hidden gap-5 lg:gap-7 md:flex md:items-center">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={linkCls(item.href)}>
              {item[lang]}
            </a>
          ))}
          <LangToggle className="ml-1" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-bone/80 hover:text-bone"
            aria-label={lang === "es" ? "Abrir menú" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-bone/10 bg-ink-800 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-5 py-3.5 text-sm ${linkCls(item.href)} hover:bg-bone/5`}
            >
              {item[lang]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
