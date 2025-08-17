import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // no pasa nada si el archivo está vacío, lo creamos abajo

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
