// src/sections/Videos.jsx
import React, { useMemo, useState, useEffect } from "react";
import { VIDEOS_TITLE, VIDEO_SECTIONS } from "../data/videos";

// --- helpers ---
function parseYouTube(url) {
  try {
    const u = new URL(url);
    const isPlaylist = u.searchParams.get("list") && u.pathname.includes("playlist");
    if (isPlaylist) {
      const list = u.searchParams.get("list");
      return {
        type: "playlist",
        embed: `https://www.youtube.com/embed/videoseries?list=${list}&autoplay=1`,
        thumb: null,
      };
    }
    let id = "";
    if (u.hostname === "youtu.be") id = u.pathname.replace("/", "");
    else id = u.searchParams.get("v") || "";

    // start (t=22s / 1m30s / 90)
    let start = 0;
    const t = u.searchParams.get("t");
    if (t) {
      const m = t.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?|^\d+$/);
      if (m) {
        if (/^\d+$/.test(t)) start = parseInt(t, 10);
        else {
          const h = parseInt(m[1] || "0", 10);
          const mm = parseInt(m[2] || "0", 10);
          const s = parseInt(m[3] || "0", 10);
          start = h * 3600 + mm * 60 + s;
        }
      }
    }
    return {
      type: "video",
      embed: `https://www.youtube.com/embed/${id}?autoplay=1${start ? `&start=${start}` : ""}`,
      thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    };
  } catch {
    return { type: "unknown", embed: url, thumb: null };
  }
}

function VideoCard({ item, onOpen }) {
  const parsed = useMemo(() => parseYouTube(item.url), [item.url]);
  const isPlaylist = parsed.type === "playlist";

  return (
    <button
      type="button"
      onClick={() => onOpen(item.title, parsed.embed)}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* thumb fija para uniformar altura */}
      <div className="relative h-36 w-full overflow-hidden bg-slate-100">
        {parsed.thumb ? (
          <img
            src={parsed.thumb}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-xs text-slate-500">
            Playlist
          </div>
        )}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-2 ring-white/80 transition group-hover:scale-105">
            ▶
          </span>
        </span>
        {isPlaylist && (
          <span className="absolute left-2 top-2 rounded bg-amber-500/90 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            Playlist
          </span>
        )}
      </div>

      {/* cuerpo con altura mínima para alinear todas las cards */}
      <div className="flex grow flex-col p-3">
        <div className="line-clamp-2 min-h-[40px] text-sm font-medium text-slate-900">
          {item.title}
        </div>
      </div>
    </button>
  );
}

function Modal({ open, title, embed, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-white">{title}</h4>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-white/10 px-2 py-1 text-sm text-white ring-1 ring-white/30 hover:bg-white/20"
          >
            Cerrar ✕
          </button>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl bg-black pt-[56.25%] shadow-lg ring-1 ring-white/20">
          <iframe
            src={embed}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  const [open, setOpen] = useState(false);
  const [embed, setEmbed] = useState("");
  const [title, setTitle] = useState("");

  // Aplanamos TODO en una sola grilla (sin grupos uno debajo del otro)
  const ALL = useMemo(() => {
    const out = [];
    for (const g of VIDEO_SECTIONS) {
      for (const it of g.items) out.push({ ...it, group: g.title });
    }
    return out;
  }, []);

  const onOpen = (t, e) => {
    setTitle(t);
    setEmbed(e);
    setOpen(true);
  };

  return (
    <section id="videos" className="border-b bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">{VIDEOS_TITLE}</h2>
          <p className="mt-1 text-slate-600">
            Selección de videos del cuerpo técnico: metodología, modelo de juego, entrenamientos y más.
          </p>
        </header>

        {/* UNA grilla compacta: 1 / 2 / 3 columnas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL.map((it, i) => (
            <VideoCard key={`${it.title}-${i}`} item={it} onOpen={onOpen} />
          ))}
        </div>
      </div>

      <Modal open={open} title={title} embed={embed} onClose={() => setOpen(false)} />
    </section>
  );
}

