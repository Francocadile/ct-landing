// src/sections/Staff.jsx
import { TEAM } from "../data/staff";
import { Instagram, Twitter } from "lucide-react";

export default function Staff() {
  return (
    <section id="staff" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Cuerpo Técnico
          </h2>
          <p className="mt-2 text-slate-600">
            Conocé al equipo que lidera y estructura el trabajo diario.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Imagen recortada prolija */}
              <div className="aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-t-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="text-sm font-medium text-indigo-600">{m.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{m.bio}</p>

                {(m.socials?.instagram || m.socials?.twitter) && (
                  <div className="mt-4 flex items-center gap-3">
                    {m.socials?.instagram && (
                      <a
                        href={m.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        aria-label={`Instagram de ${m.name}`}
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {m.socials?.twitter && (
                      <a
                        href={m.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        aria-label={`Twitter de ${m.name}`}
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
