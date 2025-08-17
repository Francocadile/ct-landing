// src/App.jsx
import React from "react";

// Si ya tienes Header/Footer, se importan aquí.
// Si no los tienes, puedes comentar estas dos líneas.
import Header from "./components/Header";
import Footer from "./components/Footer";

// Secciones
import Filosofia from "./sections/Filosofia";
import Experiencia from "./sections/Experiencia";

// Según tu repo actual, Home está en src/Home.jsx
import Home from "./Home";

export default function App() {
  return (
    <>
      {/* Cabecera (opcional si existe) */}
      <Header />

      {/* Secciones principales */}
      <Filosofia />
      <Experiencia />

      {/* Página Home o bloque principal que ya tenías */}
      <Home />

      {/* Pie (opcional si existe) */}
      <Footer />
    </>
  );
}
