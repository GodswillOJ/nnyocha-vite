import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcon from "./SocialIcon.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ SEPARATED MOBILE STATES
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (mobileNavOpen) return;

    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileNavOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-4
      ${scrolled ? "bg-gray-100/40" : "bg-gray-100/40"}`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 min-h-[80px]">

        {/* LOGO */}
        <div className="h-20 md:h-24 flex items-center">
          <img
            src="/icons/NNYOCHA_07.png"
            alt="Nnyocha"
            className="h-40 md:h-60 lg:h-80 w-auto transition-all"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex w-full justify-between">

          <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-[18px] text-gray-800">
            <a href="#about" className="hover:text-[#e76f00]">Home</a>

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-[#e76f00]"
            >
              Explore
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <FaChevronDown size={12} />
              </motion.span>
            </button>

            <a href="#faqs" className="hover:text-[#e76f00]">FAQs</a>
            <a href="#" className="hover:text-[#e76f00]">Blog</a>
          </div>

          <div className="ml-auto">
            <a
              href="#wait_list"
              className="px-5 py-2.5 rounded-full bg-[#ff8a1d] text-white hover:bg-gray-700"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => {
            setMobileNavOpen(prev => !prev);
            setMobileExploreOpen(false);
            setActiveMobileSection(null);
          }}
          className="md:hidden p-2 text-gray-800"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-[2px] bg-current"></span>
            <span className="block w-6 h-[2px] bg-current"></span>
            <span className="block w-6 h-[2px] bg-current"></span>
          </div>
        </button>
      </div>

      {/* MOBILE SECONDARY NAV */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-sm"
          >
            <div className="py-3 flex justify-center gap-6 text-gray-700">

              <button
                onClick={() => setMobileExploreOpen(prev => !prev)}
                className="hover:text-[#e76f00]"
              >
                Explore
              </button>

              {["About", "FAQs", "Blog"].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="hover:text-[#e76f00]"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE EXPLORE SUB-NAV */}
      <AnimatePresence>
        {mobileExploreOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden bg-white"
          >
            <div className="px-6 py-6 space-y-6">

              {[
                { key: "researchers", label: "Researchers", items: ["Get Funding", "Collaborate", "Showcase"] },
                { key: "funders", label: "Funders", items: ["Find Talent", "Support Growth", "Build Community"] },
                { key: "mentors", label: "Mentors", items: ["Share Insights", "Mentor", "Track Progress"] }
              ].map(section => (
                <div key={section.key}>
                  <button
                    onClick={() =>
                      setActiveMobileSection(
                        activeMobileSection === section.key ? null : section.key
                      )
                    }
                    className="w-full text-left font-medium"
                  >
                    {section.label}
                  </button>

                  <AnimatePresence>
                    {activeMobileSection === section.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="pl-4 mt-3 space-y-2"
                      >
                        {section.items.map(item => (
                          <a
                            key={item}
                            href="#"
                            className="block text-sm text-gray-700 hover:text-[#ff6e00]"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* SOCIALS */}
              <div className="pt-6 flex flex-col border-t flex gap-4">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaXTwitter} />
                <SocialIcon Icon={FaLinkedinIn} />
                <SocialIcon Icon={FaYoutube} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
