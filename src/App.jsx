// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Secciones ya existentes
import Home from "./Home";                 // contiene Hero (#home) + Staff (#staff)
import Experiencia from "./sections/Experiencia";
import Filosofia from "./sections/Filosofia";
import Modelo from "./sections/Modelo";
import Blog from "./sections/Blog";
import Contacto from "./sections/Contacto";

export default function App() {
  return (
    <>
      <Header />
      <Home />         {/* Hero + Staff */}
      <Experiencia />
      <Filosofia />
      <Modelo />
      <Blog />
      <Contacto />
      <Footer />
    </>
  );
}
