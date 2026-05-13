// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import StaffProfile from "./pages/StaffProfile.jsx";
import BlogIndex from "./pages/BlogIndex.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import DossierBolivar from "./pages/DossierBolivar.jsx";
import BitacoraEntrenamientos from "./pages/BitacoraEntrenamientos.jsx";
import Openbase from "./pages/Openbase.jsx";
import SantosLaguna from "./pages/SantosLaguna.jsx";
import EmelecProyecto from "./pages/EmelecProyecto.jsx";
import ApuntesModelo from "./pages/ApuntesModelo.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/santos-laguna-proyecto-2026" element={<SantosLaguna />} />
        <Route path="/emelec-proyecto-2026" element={<EmelecProyecto />} />
        <Route path="/apuntes-modelo" element={<ApuntesModelo />} />
        <Route path="/dossier-bolivar-2025" element={<DossierBolivar />} />
        <Route
          path="/bitacora-entrenamientos-2025"
          element={<BitacoraEntrenamientos />}
        />
        <Route path="/openbase" element={<Openbase />} />
        <Route path="/staff/:slug" element={<StaffProfile />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

