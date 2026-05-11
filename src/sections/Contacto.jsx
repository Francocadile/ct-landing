import { Mail, Twitter, Instagram, Youtube } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Contacto</div>
          <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone leading-[1.05]">
            Hablemos de<br />
            <span className="italic text-gold-500">tu proyecto.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Email */}
          <a
            href="mailto:cuerpotecnicorobatto@gmail.com"
            className="group card-dark hover:border-gold-500/40 transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-900 transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-2">
                  Email
                </div>
                <div className="font-display text-xl font-bold text-bone group-hover:text-gold-500 transition-colors break-all">
                  cuerpotecnicorobatto@gmail.com
                </div>
              </div>
            </div>
          </a>

          {/* Redes sociales */}
          <div className="card-dark">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-5">
              Redes sociales
            </div>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/flaviorobatto/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 rounded-lg hover:bg-bone/5 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-900 transition-colors">
                  <Instagram size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-bone group-hover:text-gold-500 transition-colors">
                    Instagram
                  </div>
                  <div className="text-sm text-bone/50">@flaviorobatto</div>
                </div>
              </a>

              <a
                href="https://x.com/DtFlavioRobatto"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 rounded-lg hover:bg-bone/5 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-900 transition-colors">
                  <Twitter size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-bone group-hover:text-gold-500 transition-colors">
                    X / Twitter
                  </div>
                  <div className="text-sm text-bone/50">@DtFlavioRobatto</div>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@FlavioRobatto"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 rounded-lg hover:bg-bone/5 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-900 transition-colors">
                  <Youtube size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-bone group-hover:text-gold-500 transition-colors">
                    YouTube
                  </div>
                  <div className="text-sm text-bone/50">@FlavioRobatto</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 max-w-2xl">
          <p className="text-bone/60 leading-relaxed">
            Para consultas profesionales, propuestas de colaboración o información
            sobre el cuerpo técnico, escribinos directamente al email o seguinos
            en redes para contenido y novedades.
          </p>
        </div>
      </div>
    </section>
  );
}
