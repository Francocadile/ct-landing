// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/site";

const NAV = [
  { href: "#home", label: "Inicio" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#staff", label: "Staff" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-lg font-semibold">
          {SITE.name}
        </a>

        <nav className="hidden gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-slate-900"
            >
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
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
