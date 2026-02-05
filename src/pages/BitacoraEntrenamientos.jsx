import React from "react";

export default function BitacoraEntrenamientos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">
        Bitácora de Entrenamientos 2025
      </h1>

      <p className="mt-2 text-slate-600">
        Registro metodológico del trabajo diario y la planificación del proceso de entrenamiento.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href="https://drive.google.com/file/d/1ZuivKAnPYuwATb75MHAWunZPgQ6KV0El/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Abrir en nueva pestaña
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <iframe
          title="Bitácora de Entrenamientos 2025"
          src="https://drive.google.com/file/d/1ZuivKAnPYuwATb75MHAWunZPgQ6KV0El/preview"
          className="h-[80vh] w-full"
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Si tu dispositivo no muestra el visor embebido, usá “Abrir en nueva pestaña”.
      </p>
    </main>
  );
}
