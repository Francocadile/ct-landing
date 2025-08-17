// src/sections/Blog.jsx
import React, { useState } from "react";
import { POSTS } from "../data/posts";

function Tag({ children }) {
  return (
    <span className="rounded-full border bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function PostCard({ post, onOpen }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <img
        src={post.cover}
        alt={post.title}
        className="h-48 w-full object-cover"
        loading="lazy"
      />

      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <time className="text-xs text-slate-500">
            {new Date(post.date).toLocaleDateString("es-AR")}
          </time>
          <div className="flex flex-wrap gap-1">
            {post.tags?.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
        <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>

        <button
          onClick={() => onOpen(post.id)}
          className="mt-4 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Leer más
        </button>
      </div>
    </article>
  );
}

export default function Blog() {
  const [openId, setOpenId] = useState(null);
  const openPost = POSTS.find((p) => p.id === openId);

  return (
    <section id="blog" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Reflexiones breves sobre metodología, modelo de juego y gestión del
            día a día en el fútbol profesional.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <PostCard key={p.id} post={p} onOpen={setOpenId} />
          ))}
        </div>
      </div>

      {/* Modal de lectura */}
      {openPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpenId(null)}
        >
          <article
            className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <time className="text-xs text-slate-500">
                  {new Date(openPost.date).toLocaleDateString("es-AR")}
                </time>
                <h3 className="mt-1 text-2xl font-semibold">{openPost.title}</h3>
              </div>
              <button
                className="rounded-lg border px-3 py-1 text-sm hover:bg-slate-50"
                onClick={() => setOpenId(null)}
              >
                Cerrar
              </button>
            </div>

            <img
              src={openPost.cover}
              alt=""
              className="mt-4 h-56 w-full rounded-lg object-cover"
              loading="lazy"
            />

            <div className="prose prose-slate mt-4 max-w-none">
              {openPost.content?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
