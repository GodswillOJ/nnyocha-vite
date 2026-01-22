import React, { useState, useEffect, useRef } from "react";
import {
  FaCompass,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaCircleInfo,
  FaCircleQuestion,
  FaBlog,
  FaHouse
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import SocialIcon from "./SocialIcon.jsx";
import { useLocation } from "react-router-dom";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");
  const activeText = "text-[#e76f00]";
  const inactiveText = "hover:text-[#e76f00]";

  const activeIcon = "text-[#e76f00]";
  const inactiveIcon = "text-[#8CC63F]";


  // SEPARATED MOBILE STATES
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
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white" : "bg-gray-100/40"}`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 min-h-[80px]">

        {/* LOGO */}
        <div className="flex items-center h-10 sm:h-12 md:h-14 lg:h-16">
          <a href="/">
          <img
            src="/icons/NNYOCHA_07.png"
            alt="Nnyocha"
            className="
              h-32 md:h-64 sm:h-44 w-auto
              object-contain
              transition-all duration-300
            "
          />
          </a>
        </div>


        {/* DESKTOP NAV */}
        <div className="hidden md:flex w-full justify-between">

          <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 font-semibold text-[18px] text-gray-800">
            <a
              href="/"
              className={`
                transition font-semibold
                ${isActive("/") ? activeText : inactiveText}
              `}
            >
              Home
            </a>

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
              className="
                inline-flex
                font-medium
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-[#e76f00]
                active:bg-[#ff6e00]
                text-white
                hover:bg-[#e76f00]/70
                transition
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Contact Us</span>
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
            <span className="block w-6 h-[2px] bg-[#ff8a1d]"></span>
            <span className="block w-6 h-[2px] bg-[#ff8a1d]"></span>
            <span className="block w-6 h-[2px] bg-[#ff8a1d]"></span>
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
            className="md:hidden bg-gray-100/90 backdrop-blur-md shadow-sm"
          >
            <div className="py-6 pl-10 text-gray-700">

              <div className="flex flex-col gap-4">
                {/* home */}
                <a href="/">
                  <button
                    className={`
                      flex items-center gap-3 text-[19px] font-semibold transition
                      ${isActive("/") ? activeText : inactiveText}
                    `}
                  >
                    <FaHouse
                      size={20}
                      className={`
                        opacity-80 transition
                        ${isActive("/") ? activeIcon : inactiveIcon}
                      `}
                    />
                    <span>Home</span>
                  </button>
                </a>

                {/* EXPLORE */}
                <button
                  onClick={() => setMobileExploreOpen(prev => !prev)}
                  className="flex items-center text-[19px] font-semibold gap-3 hover:text-[#e76f00] transition"
                >
                  <FaCompass size={20} className="opacity-70 text-[#8CC63F]" />
                  <span>Explore</span>
                </button>

                {/* 🔽 EXPLORE SUB MENU (NOW UNDER EXPLORE) */}
                <AnimatePresence>
                  {mobileExploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="ml-12 space-y-4"
                    >
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
                            className="w-full text-[16px] text-left font-medium"
                          >
                            {section.label}
                          </button>

                          <AnimatePresence>
                            {activeMobileSection === section.key && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                className="
                                  mt-3               
                                  pl-4
                                  space-y-2
                                "
                              >
                                {section.items.map(item => (
                                  <a
                                    key={item}
                                    href="#"
                                    className="
                                      block
                                      text-[16px]
                                      text-gray-700
                                      hover:text-[#ff6e00]
                                      transition
                                    "
                                  >
                                    {item}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* OTHER LINKS */}
                {[
                  { label: "About", href: "#features", icon: FaCircleInfo },
                  { label: "FAQs", href: "#faq", icon: FaCircleQuestion },
                  { label: "Blog", href: "#blog", icon: FaBlog }
                ].map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href}>
                    <div
                      className={`
                        flex items-center gap-3 text-[19px] font-semibold transition
                        ${isActive(href) ? activeText : inactiveText}
                      `}
                    >
                      <Icon
                        size={20}
                        className={`
                          opacity-80 transition
                          ${isActive(href) ? activeIcon : inactiveIcon}
                        `}
                      />
                      <span>{label}</span>
                    </div>
                  </a>
                ))}

                {/* MOBILE SOCIALS — FOOTER STYLE (BLOCK) */}
                <div className="mt-10 flex flex-col items-start gap-4">
                  {[FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="
                        w-10 h-10
                        rounded-full
                        border border-gray-300
                        flex items-center justify-center
                        text-gray-600
                        hover:text-[#e76f00] hover:border-[#e76f00]
                        transition
                      "
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

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
