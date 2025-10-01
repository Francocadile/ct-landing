// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/blog";

// Parseo simple de YouTube -> URL embebida (soporta timestamp ?t=)
function toYouTubeEmbed(u = "") {
  try {
    const url = new URL(u);
    // playlist (por si en el futuro lo usás)
    const list = url.searchParams.get("list");
    if (list && url.pathname.includes("playlist")) {
      return `https://www.youtube.com/embed/videoseries?list=${list}&autoplay=1`;
    }
    // id de video
    let id = "";
    if (url.hostname.includes("youtu.be")) {
      id = url.pathname.replace("/", "");
    } else {
      id = url.searchParams.get("v") || "";
    }
    // timestamp (?t=22s | 90 | 1m30s)
    let start = 0;
    const t = url.searchParams.get("t");
    if (t) {
      if (/^\d+$/.test(t)) start = parseInt(t, 10);
      else {
        const m = t.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
        if (m) {
          const hh = parseInt(m[1] || "0", 10);
          const mm = parseInt(m[2] || "0", 10);
          const ss = parseInt(m[3] || "0", 10);
          start = hh * 3600 + mm * 60 + ss;
        }
      }
    }
    if (!id) return null;
    return `https://www.youtube.com/embed/${id}?autoplay=0${start ? `&start=${start}` : ""}`;
  } catch {
    return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-slate-600">Artículo no encontrado.</p>
        <Link to="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
          ← Volver al blog
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <article>
        <header className="border-b">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <div className="text-xs uppercase tracking-wide text-slate-500">
              {new Date(post.date).toLocaleDateString()} · {post.author}
            </div>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">{post.title}</h1>
            {post.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {post.cover ? (
            <div className="mx-auto max-w-6xl px-4 pb-6">
              <img
                src={post.cover}
                alt=""
                className="h-64 w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          ) : null}
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10">
          {post.sections?.map((sec, i) => {
            const embed = sec.video ? toYouTubeEmbed(sec.video) : null;

            return (
              <section key={i} className="mt-8">
                {sec.h2 ? (
                  <h2 className="text-xl font-semibold text-slate-900">{sec.h2}</h2>
                ) : null}

                {/* párrafos */}
                {Array.isArray(sec.p) &&
                  sec.p.map((txt, j) => (
                    <p key={`p-${j}`} className="mt-3 leading-relaxed text-slate-800">
                      {txt}
                    </p>
                  ))}

                {/* bullets */}
                {Array.isArray(sec.bullets) && sec.bullets.length > 0 ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800">
                    {sec.bullets.map((b, k) => (
                      <li key={`b-${k}`}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {/* párrafos extra */}
                {Array.isArray(sec.p2) &&
                  sec.p2.map((txt, j) => (
                    <p key={`p2-${j}`} className="mt-3 leading-relaxed text-slate-800">
                      {txt}
                    </p>
                  ))}

                {sec.note ? (
                  <p className="mt-3 text-sm text-slate-600">{sec.note}</p>
                ) : null}

                {/* ====== VIDEO EMBEBIDO (si la sección trae `video`) ====== */}
                {embed ? (
                  <div className="mt-4">
                    <div className="relative w-full overflow-hidden rounded-xl bg-black pt-[56.25%] shadow ring-1 ring-slate-200">
                      <iframe
                        src={embed}
                        title={post.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                ) : null}
              </section>
            );
          })}

          <div className="mt-10">
            <Link to="/blog" className="text-blue-600 hover:underline">
              ← Volver al blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
