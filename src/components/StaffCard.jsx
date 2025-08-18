// src/components/StaffCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function StaffCard({ name, role, img, bio }) {
  const slug = slugify(name);

  return (
    <Link
      to={`/staff/${slug}`}
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
      title={`Ver perfil de ${name}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-slate-500">{role}</div>
        <div className="mt-0.5 line-clamp-1 text-lg font-semibold">{name}</div>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{bio}</p>
        <div className="mt-3 text-sm font-medium text-blue-600">Ver perfil →</div>
      </div>
    </Link>
  );
}

