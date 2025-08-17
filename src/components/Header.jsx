// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/site";

// Orden definitivo de navegación (sin "Filosofía", con "Resultados")
const NAV = [
  { href: "#home", label: "Inicio" },
  { href: "#staff", label: "Staff" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#resultados", label: "Resultados" },   // NUEVO
  { href: "#modelo", label: "Modelo de juego" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setActive(window.location.hash);
    }

    const ids = NAV.map((n) => n.href.replace("#", ""));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive("#" + visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "0px 0px -40% 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const linkCls = (href) =>
    `text-slate-600 hover:text-slate-900 ${
      active === href ? "text-blue-600 font-semibold" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-lg font-semibold">
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
