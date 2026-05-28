import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "es",
  setLang: () => {},
  toggle: () => {},
});

const STORAGE_KEY = "ct-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "es" || saved === "en") return saved;
  return "es";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    if (next === "es" || next === "en") setLangState(next);
  };
  const toggle = () => setLangState((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

// Helper: pick the right value from a { es, en } object, falling back to es.
export function pick(copy, lang) {
  if (!copy) return copy;
  return copy[lang] ?? copy.es;
}
