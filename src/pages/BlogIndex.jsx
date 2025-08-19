// src/pages/BlogIndex.jsx
import React from "react";
import { BLOG_POSTS } from "../data/blog";
import { Link } from "react-router-dom";

function AuraCard({ children }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-amber-100">
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-amber-100/0 via-amber-100/10 to-amber-100/0 blur" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function BlogIndex() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Blog</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Novedades y fundamentos del modelo de juego: metodología, planificación y proceso.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <AuraCard key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="group block">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-44 w-full rounded-xl object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.outerHTML =
                      `<div class="flex h-44 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500">/public${p.cover}</div>`;
                  }}
                />
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-amber-700">
                  {p.title}
                </h3>
                <div className="mt-1 text-xs text-slate-500">{p.date}</div>
                <p className="mt-2 line-clamp-3 text-sm text-slate-700">{p.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </AuraCard>
          ))}
        </div>
      </div>
    </section>
  );
}
