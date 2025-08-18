// src/utils/slug.js
export function slugify(str) {
  return (str || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // no alfanum -> guión
    .replace(/^-+|-+$/g, ""); // bordes
}
