import React from "react";

export default function DossierBolivar() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">
        Dossier futbolístico – Club Bolívar 2025
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href="/docs/dossier-bolivar-2025.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Abrir en nueva pestaña
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <iframe
          title="Dossier Bolívar 2025"
          src="/docs/dossier-bolivar-2025.pdf"
          className="h-[80vh] w-full"
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Si tu dispositivo no muestra el visor embebido, usá “Abrir en nueva pestaña”.
      </p>
    </main>
  );
}
