import { useParams, Link } from "react-router-dom";
import { STAFF_PAGES } from "../data/staff-pages";
import { ArrowLeft } from "lucide-react";

export default function StaffProfile() {
  const { slug } = useParams();
  const member = STAFF_PAGES[slug];

  if (!member) {
    return (
      <div className="min-h-screen bg-ink-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-bone mb-4">
            Miembro no encontrado
          </h1>
          <Link to="/#staff" className="btn-ghost">
            <ArrowLeft size={20} />
            Volver al Staff
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-900">
      <div className="container-x py-16 md:py-24">
        {/* Back link */}
        <Link
          to="/#staff"
          className="inline-flex items-center gap-2 text-bone/60 hover:text-gold-500 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Staff</span>
        </Link>

        <div className="max-w-4xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-44 h-44 rounded-2xl overflow-hidden bg-ink-800 ring-1 ring-bone/10">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-bone leading-tight mb-3">
                {member.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-lg text-bone/70">{member.role}</div>
                {member.flags && member.flags.length > 0 && (
                  <div className="flex gap-2">
                    {member.flags.map((flag, i) => (
                      <img
                        key={i}
                        src={flag}
                        alt="bandera"
                        className="w-6 h-4 object-cover rounded shadow-sm"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          {member.bio && member.bio.length > 0 && (
            <div className="mb-12">
              {member.bio.map((paragraph, i) => (
                <p key={i} className="text-bone/70 leading-relaxed mb-4 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Funciones */}
          {member.roles && member.roles.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-5 font-semibold">
                Funciones
              </h2>
              <div className="flex flex-wrap gap-3">
                {member.roles.map((role, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-full bg-ink-800 border border-bone/10 text-bone/80 text-sm"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clubes */}
          {member.clubs && member.clubs.length > 0 && (
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-5 font-semibold">
                Clubes
              </h2>
              <div className="flex flex-wrap gap-4">
                {member.clubs.map((club, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-lg bg-ink-800 border border-bone/10 flex items-center justify-center p-2 hover:border-gold-500/30 transition-colors"
                  >
                    <img
                      src={club}
                      alt="club logo"
                      className="w-full h-full object-contain opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
