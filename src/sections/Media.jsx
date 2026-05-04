import { MEDIA } from "../data/media";

function getYTThumb(url) {
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
}

export default function Media() {
  return (
    <section id="media" className="bg-ink-900 py-24 md:py-36 border-t border-bone/10">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Contenido</div>
          <h2 className="display-2 text-[clamp(2rem,4.5vw,3.5rem)] text-bone leading-[1.05]">
            Material<br />
            <span className="italic text-gold-500">audiovisual.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/60 max-w-xl">
            Videos, análisis tácticos y entrenamientos del cuerpo técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDIA.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-ink-800 rounded-2xl overflow-hidden border border-bone/10 hover:border-gold-500/40 transition-all hover:shadow-glow"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-ink-950 relative overflow-hidden">
                {getYTThumb(video.url) && (
                  <img
                    src={getYTThumb(video.url)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-gold-500/90 backdrop-blur flex items-center justify-center">
                    <svg className="w-6 h-6 text-ink-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-bone leading-tight line-clamp-2 group-hover:text-gold-500 transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
