import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./global.css";
import ScrollToHash from "./components/home/ScrollToHash.jsx";
import BackToTop from "./components/home/BacktoTop.jsx";
import usePageTitle from "./hooks/usePageTitle.js";
import About from "./pages/about/page.jsx";

export default function App() {
  usePageTitle();

  return (
    <div className="font-sans text-gray-900 relative">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Global Back to Top */}
      <BackToTop />
    </div>
  );
}
