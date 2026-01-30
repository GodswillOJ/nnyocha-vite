import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./global.css";
import ScrollToHash from "./components/home/ScrollToHash.jsx";
import BackToTop from "./components/home/BacktoTop.jsx";
import usePageTitle from "./hooks/usePageTitle.js";
import About from "./pages/about/page.jsx";
import ContactUs from "./pages/contact/page.jsx";
import BlogPage from "./pages/blog/landing/page.jsx";

export default function App() {
  usePageTitle();

  return (
    <div className="font-sans text-gray-900 relative">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about@_staging" element={<About />} />
        <Route path="/contact@_staging" element={<ContactUs />} />
        <Route path="/blog@_staging" element={<BlogPage />} />
      </Routes>

      {/* Global Back to Top */}
      <BackToTop />
    </div>
  );
}
