import { TEAM } from "../data/staff";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Staff() {
  const flavio = TEAM[0];
  const rest = TEAM.slice(1);

  return (
    <section id="staff" className="bg-ink-950 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Cuerpo Técnico</div>
          <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone">
            Un equipo<br />
            <span className="italic text-gold-500">detrás del equipo.</span>
          </h2>
        </div>

        {/* FLAVIO destacado */}
        <Link
          to={`/staff/${flavio.slug}`}
          className="group block relative overflow-hidden rounded-2xl bg-ink-800 border border-bone/10 hover:border-gold-500/40 transition-colors mb-px"
        >
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-5 relative bg-ink-900 min-h-[400px] md:min-h-[500px] overflow-hidden">
              <img
                src={flavio.img}
                alt={flavio.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            </div>

            <div className="md:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-center">
              <div className="eyebrow mb-4 text-gold-500">{flavio.role}</div>
              <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-bone leading-[1] tracking-tighter mb-2">
                {flavio.name}
              </h3>
              {flavio.flags?.length > 0 && (
                <div className="flex gap-2 mt-3 mb-6">
                  {flavio.flags.map((f) => (
                    <img key={f} src={f} alt="" className="h-4 w-auto rounded-sm opacity-80" />
                  ))}
                </div>
              )}
              <p className="text-bone/70 leading-relaxed text-base md:text-lg max-w-xl line-clamp-5">
                {flavio.bio}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-gold-500 font-medium text-sm group-hover:gap-3 transition-all">
                Ver perfil completo
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </Link>

        {/* RESTO DEL STAFF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px max-w-3xl mx-auto bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden mt-px">
          {rest.map((m) => (
            <Link
              key={m.slug}
              to={`/staff/${m.slug}`}
              className="group bg-ink-800 hover:bg-ink-700 transition-colors p-6 md:p-8 flex flex-col"
            >
              <div className="aspect-[3/4] bg-ink-800 rounded-xl overflow-hidden mb-5 relative ring-1 ring-bone/5">
                <img
                  src={m.img}
                  alt={m.name}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-500 mb-2">
                {m.role}
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold text-bone leading-tight tracking-tight">
                {m.name}
              </h4>
              {m.flags?.length > 0 && (
                <div className="flex gap-1.5 mt-3">
                  {m.flags.map((f) => (
                    <img key={f} src={f} alt="" className="h-3 w-auto rounded-sm opacity-70" />
                  ))}
                </div>
              )}
              <p className="text-bone/50 text-sm mt-4 leading-relaxed line-clamp-3">
                {m.bio}
              </p>
              <div className="mt-auto pt-5 inline-flex items-center gap-2 text-bone/40 group-hover:text-gold-500 text-xs font-medium transition-colors">
                Ver perfil
                <ArrowUpRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
