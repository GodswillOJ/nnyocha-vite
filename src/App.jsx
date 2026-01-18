import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./global.css";
import ScrollToHash from "./components/ScrollToHash.jsx";
import BackToTop from "./components/BacktoTop.jsx";
import usePageTitle from "./hooks/usePageTitle.js";

export default function App() {
  usePageTitle();

  return (
    <div className="font-sans text-gray-900 relative">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Global Back to Top */}
      <BackToTop />
    </div>
  );
}
