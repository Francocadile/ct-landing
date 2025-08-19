// src/pages/BlogIndex.jsx
import React from "react";
import { Link } from "react-router-dom";
import { POSTS } from "../data/blog";

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="bg-white">
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Contenidos tácticos, metodología y performance del cuerpo técnico.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {p.cover ? (
                <img
                  src={p.cover}
                  alt=""
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              ) : null}
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  {new Date(p.date).toLocaleDateString()}
                </div>
                <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-slate-900">
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-slate-700">
                  {p.excerpt}
                </p>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-4 inline-flex rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Leer
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
