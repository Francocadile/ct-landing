// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/site";

const NAV = [
  { label: "Inicio",      href: "/#home" },
  { label: "Modelo",      href: "/#modelo" },
  { label: "Manual",      href: "/manual-modelo" },
  { label: "Trayectoria", href: "/#clubes" },
  { label: "Staff",       href: "/#staff" },
  { label: "Logros",      href: "/#records" },
  { label: "OpenBase",    href: "/openbase" },
  { label: "Contacto",    href: "/#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");

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

        <nav className="hidden gap-7 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={linkCls(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-bone/80 hover:text-bone md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
