// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx"; // <- volvemos a montar el menú
import Home from "./Home.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
