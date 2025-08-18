// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import StaffProfile from "./pages/StaffProfile.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff/:slug" element={<StaffProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
