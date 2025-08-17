import React from "react";
import { Mail, Phone, Instagram, Youtube, MapPin, Twitter, Rss, Linkedin, MessageCircle, Link as LinkIcon, Music } from "lucide-react";

const TEAM = [
  {
    name: "Flavio Robatto",
    role: "Director Técnico",
    bio: "Entrenador con Licencia PRO CONMEBOL. Modelo de juego basado en Juego de Posición.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Franco Cadile",
    role: "Preparador Físico",
    bio: "Control de cargas (ICR), fuerza, velocidad y prevención de lesiones.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286dfa?q=80&w=800&auto=format&fit=crop",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="px-6 py-16 md:py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Nuestro Cuerpo Técnico
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Experiencia, conocimiento y pasión al servicio del fútbol.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {TEAM.map((m) => (
          <article key={m.name} className="rounded-2xl border border-slate-200 overflow-hidden">
            <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-sm text-slate-500">{m.role}</p>
              <p className="mt-3 text-slate-700 leading-relaxed">{m.bio}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 p-6">
          <h4 className="font-semibold text-lg">Seguinos</h4>
          <div className="mt-4 flex flex-wrap gap-3 text-slate-700">
            <a className="inline-flex items-center gap-2 hover:text-black" href="#" target="_blank" rel="noreferrer"><Instagram size={18}/>Instagram</a>
            <a className="inline-flex items-center gap-2 hover:text-black" href="#" target="_blank" rel="noreferrer"><Twitter size={18}/>Twitter</a>
            <a className="inline-flex items-center gap-2 hover:text-black" href="#" target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a>
            <a className="inline-flex items-center gap-2 hover:text-black" href="#" target="_blank" rel="noreferrer"><Youtube size={18}/>YouTube</a>
            <a className="inline-flex items-center gap-2 hover:text-black" href="#" target="_blank" rel="noreferrer"><Rss size={18}/>Blog</a>
            <a className="inline-flex items-center gap-2 hover:text-black" href="#" target="_blank" rel="noreferrer"><Music size={18}/>TikTok</a>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-16">
        <div className="max-w-3xl mx-auto text-slate-700 grid gap-3 md:grid-cols-3">
          <p className="inline-flex items-center gap-2"><Mail size={18}/> contacto@tu-dominio.com</p>
          <p className="inline-flex items-center gap-2"><Phone size={18}/> +54 9 000 000 000</p>
          <p className="inline-flex items-center gap-2"><MapPin size={18}/> Sudamérica</p>
        </div>
        <p className="text-center text-slate-400 text-sm mt-6">© {new Date().getFullYear()} Cuerpo Técnico</p>
      </footer>
    </main>
  );
}
