// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Home contiene Hero (#home) + Staff (#staff)
import Home from "./Home";
import Experiencia from "./sections/Experiencia";
import Resultados from "./sections/Resultados";   // NUEVO
import Modelo from "./sections/Modelo";
import Blog from "./sections/Blog";
import Contacto from "./sections/Contacto";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Experiencia />
      <Resultados />
      <Modelo />
      <Blog />
      <Contacto />
      <Footer />
    </>
  );
}

