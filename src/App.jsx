// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import StaffProfile from "./pages/StaffProfile.jsx";

// NUEVO: páginas del blog
import BlogIndex from "./pages/BlogIndex.jsx";
import BlogPost from "./pages/BlogPost.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Staff (detalle por slug) */}
        <Route path="/staff/:slug" element={<StaffProfile />} />

        {/* Blog (listado y detalle) */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
