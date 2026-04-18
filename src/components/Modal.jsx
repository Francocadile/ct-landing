import React, { useEffect, useState } from "react";

const MODAL_KEY = "landingModalDismissed";

export default function Modal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(MODAL_KEY)) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(MODAL_KEY, "true");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/60 via-blue-900/60 to-black/70 px-2"
      onClick={handleClose}
      style={{ fontFamily: 'inherit' }}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white/95 p-6 sm:p-10 shadow-2xl border border-slate-200 flex flex-col items-center"
        style={{ boxSizing: "border-box", fontFamily: 'inherit' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 sm:right-5 sm:top-5 flex items-center justify-center w-10 h-10 rounded-full text-xl text-slate-400 hover:text-blue-700 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Cerrar"
        >
          <span className="sr-only">Cerrar</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="w-full text-center px-1 py-2 sm:py-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-500">Insight destacado</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-blue-800 leading-tight">Bolívar, entre los equipos más goleadores del mundo</h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-md mx-auto mb-7">
            Desde la llegada de Kompany al Bayern, solo tres equipos marcaron más goles que Bolívar. Un dato que refleja eficacia, identidad y un modelo ofensivo competitivo a nivel internacional.
          </p>
          <div className="mb-7">
            <div className="flex flex-col gap-1 items-center text-base sm:text-lg font-medium">
              <span className="flex items-center gap-2"><span className="text-2xl">🇩🇪</span><span className="font-semibold text-blue-900">Bayern</span><span className="ml-2 text-slate-700">— 305</span></span>
              <span className="flex items-center gap-2"><span className="text-2xl">🇪🇸</span><span className="font-semibold text-slate-800">Barcelona</span><span className="ml-2 text-slate-700">— 301</span></span>
              <span className="flex items-center gap-2"><span className="text-2xl">🇫🇷</span><span className="font-semibold text-slate-800">PSG</span><span className="ml-2 text-slate-700">— 274</span></span>
              <span className="flex items-center gap-2 rounded-lg bg-blue-50/80 px-2 py-1 shadow-sm ring-2 ring-blue-200/60"><span className="text-2xl">🇧🇴</span><span className="font-semibold text-blue-700">Bolívar</span><span className="ml-2 text-blue-900 font-bold">— 273</span></span>
              <span className="flex items-center gap-2"><span className="text-2xl">🇳🇱</span><span className="font-semibold text-slate-800">PSV</span><span className="ml-2 text-slate-700">— 259</span></span>
            </div>
          </div>
          <div className="mt-2 text-base font-semibold text-blue-600">No es casualidad. Es trabajo, idea y método.</div>
        </div>
      </div>
    </div>
  );
}
