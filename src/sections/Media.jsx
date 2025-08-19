// src/sections/Media.jsx
import React from "react";
import { MEDIA } from "../data/media.js";

// Extrae el ID de YouTube (para miniatura) o detecta playlist
function parseYouTube(u = "") {
  try {
    const url = new URL(u);
    const isPlaylist = url.searchParams.get("list");
    if (isPlaylist) return { type: "playlist", id: isPlaylist };
    // https://www.youtube.com/watch?v=XXXX
    const v = url.searchParams.get("v");
    if (v) return { type: "video", id: v };
    // https://youtu.be/XXXX
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      if (id) return { type: "video", id };
    }
  } catch {}
  return { type: "unknown", id: null };
}

function getThumb(u) {
  const { type, id } = parseYouTube(u);
  if (type === "video" && id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  // Placeholder para playlist o unknown
  return "/img/media/placeholder.jpg"; // opcional: subí una imagen a public/img/media/placeholder.jpg
}

export default function Media() {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Material audiovisual</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Selección de videos y listas con metodología, modelo de juego y sesiones del cuerpo técnico.
        </p>

        {/* Grilla 3 por fila en desktop, 2 en tablet, 1 en mobile */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEDIA.map((item) => {
            const thumb = getThumb(item.url);
            const kind = parseYouTube(item.url).type;
            return (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* thumb 16:9 */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={thumb}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Play badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ring-1 ring-slate-300">
                      ▶
                    </span>
                  </div>
                  {/* Etiqueta tipo */}
                  <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                    {kind === "playlist" ? "Playlist" : "Video"}
                  </span>
                </div>

                {/* texto */}
                <div className="p-4">
                  <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  {item.note ? (
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.note}</p>
                  ) : null}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
