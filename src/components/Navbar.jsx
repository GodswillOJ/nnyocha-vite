import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight
} from "react-icons/fa6";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // new mobile menu state
  const dropdownRef = useRef(null);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (mobileOpen) return; // 👈 prevent mobile interference

    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-50 text-gray-900 border-b border-gray-200"
          : "bg-transparent text-gray-300 border-b border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 min-h-[80px]">
        {/* Logo */}
        <div className="h-20 md:h-24 flex items-center">
          <img
            src="/icons/NNYOCHA_logo.png"
            alt="Nnyocha"
            className={`
              h-40
              w-auto
              transition-all duration-300
              scale-100
            `}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          {/* Explore */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 hover:text-[#c38366] transition-colors"
          >
            Explore
            <svg
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <a href="#" className="hover:text-[#c38366]">
            Blog
          </a>
          {/* <a href="#" className="hover:text-[#c38366]">
            Contact
          </a> */}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
          >
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-current transition duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col px-6 py-4 gap-4 text-gray-900"
          >
            
            {/* Explore toggle */}
            <button
              onClick={() => {
                setOpen(!open);
                setActiveMobileSection(null);
              }}
              className="flex items-center justify-between gap-2 text-sm sm:text-base font-medium"
            >
              Explore
              <svg
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pl-4 border-l border-gray-200 flex flex-col gap-4"
              >

                {/* Researchers */}
                <div>
                  <button
                    onClick={() =>
                      setActiveMobileSection(
                        activeMobileSection === "researchers" ? null : "researchers"
                      )
                    }
                    className="text-sm sm:text-base font-medium text-gray-700 transition-colors"
                  >
                    Researchers
                  </button>

                  {activeMobileSection === "researchers" && (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-3 pl-3 flex flex-col gap-2">
                      {["Get Funding", "Collaborate", "Showcase"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-sm sm:text-[14px] sm:text-base font-semibold text-gray-800 hover:text-[#ff6e00] transition-all hover:translate-x-1"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Investors */}
                <div>
                  <button
                    onClick={() =>
                      setActiveMobileSection(
                        activeMobileSection === "investors" ? null : "investors"
                      )
                    }
                    className="text-sm sm:text-base font-medium text-gray-700 transition-colors"
                  >
                    Investors
                  </button>

                  {activeMobileSection === "investors" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="mt-3 pl-3 flex flex-col gap-2"
                    >
                      {["Find Talent", "Support Growth", "Build Community"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-sm sm:text-[14px] sm:text-base font-semibold text-gray-800 hover:text-[#ff6e00] transition-all hover:translate-x-1"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Mentors */}
                <div>
                  <button
                    onClick={() =>
                      setActiveMobileSection(
                        activeMobileSection === "mentors" ? null : "mentors"
                      )
                    }
                    className="text-sm sm:text-base font-medium text-gray-700 transition-colors"
                  >
                    Mentors
                  </button>

                  {activeMobileSection === "mentors" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="mt-3 pl-3 flex flex-col gap-2">
                      {["Share Insights", "Mentor", "Track Progress"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-sm sm:text-[14px] font-semibold text-gray-800 hover:text-[#ff6e00] transition-all hover:translate-x-1"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>

              </motion.div>
            )}

            <a
              href="#"
              className="text-sm sm:text-base text-gray-700 hover:text-[#ff6e00]"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm sm:text-base text-gray-700 hover:text-[#ff6e00]"
            >
              Contact
            </a>
          </motion.div>
          {/* Socials */}
          <div className="socials pt-6 mt-6 border-t border-gray-200 flex flex-col gap-4">
            {/* Social Icons */}
            <motion.div 
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0 , x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-4 text-gray-700 px-6  mb-12">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#ff6e00] transition-colors"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#ff6e00] transition-colors"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#ff6e00] transition-colors"
              >
                <FaXTwitter size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#ff6e00] transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-[#ff6e00] transition-colors"
              >
                <FaYoutube size={16} />
              </a>
            </motion.div>
          </div>

        </div>
      )}

      {/* Desktop Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="hidden md:flex absolute left-1/2 top-full mt-6 -translate-x-1/2 w-[1100px] max-w-full rounded-3xl bg-[#fffdf3] shadow-xl p-10 flex flex-col md:flex-row gap-8 z-50"
        >
          {/* LEFT CONTENT */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-800">
                {/* Researchers */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                <p className="text-xs tracking-widest text-gray-500 mb-4">RESEARCHERS</p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Get Funding</h4>
                    <p className="text-sm mb-4">Find backers for your next breakthrough.</p>
                    </div>
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Collaborate</h4>
                    <p className="text-sm mb-4">Team up with experts and peers.</p>
                    </div>
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Showcase</h4>
                    <p className="text-sm">Share your work and gain recognition.</p>
                    </div>
                </motion.div>
                </motion.div>

                {/* Investors */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-xs tracking-widest text-gray-500 mb-4">INVESTORS</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Find Talent</h4>
                    <p className="text-sm mb-4">Connect with driven researchers and ideas.</p>
                    </div>
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Support Growth</h4>
                    <p className="text-sm mb-4">Help researchers reach their full potential.</p>
                    </div>
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Build Community</h4>
                    <p className="text-sm mb-4">Network with passionate changemakers.</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Mentors */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-xs tracking-widest text-gray-500 mb-4">MENTORS</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Share Insights</h4>
                    <p className="text-sm">Empower others with your experience.</p>
                    </div>
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Mentor</h4>
                    <p className="text-sm mb-4">Support and guide future innovators.</p>
                    </div>
                    <div className="offers">
                    <h4 className="font-semibold mb-1">Track Progress</h4>
                    <p className="text-sm">See impact as projects grow.</p>
                    </div>
                  </motion.div>
                </motion.div>
            </div>

          {/* RIGHT DARK CARD */}
          <motion.div
            whileHover={{
              y: -6,
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="w-full md:w-[320px] bg-black rounded-2xl p-8 flex flex-col justify-between text-white"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Empowering research, together
              </h3>
              <p className="text-sm text-gray-300">
                Join a welcoming community driving discovery and impact.
              </p>
            </div>
            <a href="#wait_list">
              <motion.button
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.04 }
                }}
                transition={{ type: "spring", stiffness: 260, damping: 15 }}
                className="mt-8 flex items-center gap-2 text-sm font-medium text-white border border-transparent rounded-md px-4 py-2 hover:text-[#ff6e00] hover:border-[#ff6e00]"
              >
                Join
                <motion.span
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 6 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
