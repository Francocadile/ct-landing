// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filosofia from "./sections/Filosofia";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Header />
      <Filosofia />
      <Home />
      <Footer />
    </>
  );
}
