// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filosofia from "./sections/Filosofia";
import Experiencia from "./sections/Experiencia";
import Contacto from "./sections/Contacto";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Header />
      <Filosofia />
      <Experiencia />
      <Home />
      <Contacto />
      <Footer />
    </>
  );
}
