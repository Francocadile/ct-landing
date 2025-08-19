// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blog";

function Prose({ block }) {
  if (block.type === "h3") {
    return <h3 className="mt-6 text-lg font-semibold text-slate-900">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-2 list-disc pl-5 text-slate-700">
        {block.items.map((it, i) => (
          <li key={i} className="mt-1">{it}</li>
        ))}
      </ul>
    );
  }
  // párrafo por defecto
  return <p className="mt-3 text-slate-700">{block.text}</p>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const idx = posts.findIndex((p) => p.slug === slug);
  const post = posts[idx];

  if (!post) {
    return (
      <section className="py-24 text-center">
        <div className="text-slate-600">Entrada no encontrada.</div>
        <Link to="/blog" className="mt-4 inline-block rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white">
          Volver al blog
        </Link>
      </section>
    );
  }

  const prev = posts[idx - 1];
  const next = posts[idx + 1];

  return (
    <article className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link to="/blog" className="text-sm text-amber-700 hover:underline">← Volver</Link>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{post.title}</h1>
        <div className="mt-1 text-xs text-slate-500">{post.date} • {post.author}</div>

        <img
          src={post.cover}
          alt={post.title}
          className="mt-6 h-72 w-full rounded-xl object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.outerHTML =
              `<div class="mt-6 flex h-72 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500">/public${post.cover}</div>`;
          }}
        />

        <div className="mt-6">
          {post.content.map((block, i) => (
            <Prose key={i} block={block} />
          ))}
        </div>

        <hr className="my-10 border-slate-200" />

        <div className="flex flex-wrap justify-between gap-3">
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-amber-50"
            >
              ← {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-amber-50"
            >
              {next.title} →
            </Link>
          ) : <span />}
        </div>
      </div>
    </article>
  );
}
