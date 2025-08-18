// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/site";

// Orden y etiquetas pedidas
const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/#staff", label: "Staff" },
  { href: "/#clubes", label: "Clubes" },     // reemplazo de “Experiencia”
  { href: "/#records", label: "Records" },
  { href: "/#modelo", label: "Modelo de juego" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    // marca activo segun la URL
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
    `text-slate-600 hover:text-slate-900 ${
      active === href ? "text-blue-600 font-semibold" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="text-lg font-semibold">
          {SITE.name}
        </a>

        <nav className="hidden gap-6 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={linkCls(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 ${linkCls(item.href)} hover:bg-slate-50`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

