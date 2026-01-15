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
      className={`relative top-0 w-full z-50 transition-all duration-300 md:pb-0 lg:pb-10 pt-4
      ${
        scrolled
          ? "bg-gray-100/40"
          : "bg-gray-100/40"
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 min-h-[80px]">
        {/* Logo */}
        <div className="h-20 md:h-24 flex items-center">
          <img
            src="/icons/NNYOCHA_07.png"
            alt="Nnyocha"
            className={`
              h-40
              md:h-60
              lg:h-80
              w-auto
              transition-all duration-300
              scale-100
            `}
          />
        </div>

        {/* DESKTOP NAV (LARGE SCREENS ONLY) */}
        <div className="hidden md:flex lg:flex items-center w-full justify-between text-sm font-medium text-gray-200">

          {/* CENTER LINKS */}
          <div className="absolute text-gray-800 left-1/2 -translate-x-1/2 text-[18px] flex gap-10">
            <a href="#features" className="hover:text-[#e76f00] transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-[#e76f00] transition-colors">
              About
            </a>
            <a href="#faqs" className="hover:text-[#e76f00] transition-colors">
              FAQs
            </a>
            <a
              href="#"
              className="hover:text-[#e76f00] transition-colors"
            >
              Blog
            </a>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex items-center gap-6">
            {/* EXPLORE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                px-5 py-2
                rounded-2xl
                lg:px-10
                bg-[#e76f00]
                text-white
                font-medium
                hover:bg-[#ff8a1d]
                transition
                shadow-sm
              "
            >
              Join Waitlist
            </button>
          </div>

        </div>

        {/* Mobile Explore Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setActiveMobileSection(null);
            }}
            className="
              px-4 py-2
              rounded-full
              bg-[#e76f00]
              text-white
              text-sm
              font-medium
              hover:bg-[#ff8a1d]
              transition
              shadow-sm
            "
          >
            Explore
          </button>
        </div>

      </div>

      {/* MOBILE / SMALL-SCREEN SECONDARY NAV */}
      <div className="md:hidden w-full bg-white bg-gray-100/20">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6
            py-3
            flex items-center justify-center
          "
        >
          <div
            className="
              flex flex-wrap items-center justify-center
              gap-x-6 gap-y-3
              text-[14px] sm:text-[13px]
              font-medium
              font-gotham
              tracking-wide
              text-gray-700
            "
          >
            {["Features", "About", "FAQs", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  whitespace-nowrap
                  transition-colors
                  hover:text-[#e76f00]

                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0 after:bg-[#e76f00]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col px-6 py-4 gap-6 text-gray-900"
        >
          {/* Researchers */}
          <div>
            <button
              onClick={() =>
                setActiveMobileSection(
                  activeMobileSection === "researchers" ? null : "researchers"
                )
              }
              className="w-full text-left text-base font-medium text-gray-800"
            >
              Researchers
            </button>

            {activeMobileSection === "researchers" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 pl-4 flex flex-col gap-2"
              >
                {["Get Funding", "Collaborate", "Showcase"].map(item => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-[#ff6e00]"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          {/* Funders */}
          <div>
            <button
              onClick={() =>
                setActiveMobileSection(
                  activeMobileSection === "funders" ? null : "funders"
                )
              }
              className="w-full text-left text-base font-medium text-gray-800"
            >
              Funders
            </button>

            {activeMobileSection === "funders" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 pl-4 flex flex-col gap-2"
              >
                {["Find Talent", "Support Growth", "Build Community"].map(item => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-[#ff6e00]"
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
              className="w-full text-left text-base font-medium text-gray-800"
            >
              Mentors
            </button>

            {activeMobileSection === "mentors" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 pl-4 flex flex-col gap-2"
              >
                {["Share Insights", "Mentor", "Track Progress"].map(item => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-[#ff6e00]"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>


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
