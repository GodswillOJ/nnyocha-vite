import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white text-gray-700"
    >
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">

      {/* LOGO */}
      <div className="flex justify-center mb-10">
        <div className="md:h-56 xs:h-24 sm:h-52 lg:h-72 flex items-center">
          <img
            src="/icons/NNYOCHA_07.png"
            alt="Nnyocha"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm mb-10">
          {["Home", "About", "Features", "FAQs", "Testimonials", "Blog"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#e76f00] transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mb-14">
          {[FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube].map(
            (Icon, i) => (
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
            )
          )}
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-16" />

        {/* PARTNER SECTION */}
        <div className="text-center space-y-6 mb-16">
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            Partner With Us
          </p>

          <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
            <p className="font-medium text-gray-800 text-center">
              <a
                href="https://www.google.com/maps?q=66+Wellington+Street+West,+Suite+4100,+Toronto,+ON+M5K+1B7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e76f00] transition-colors"
              >
                66 Wellington Street West,<br />
                Suite 4100<br />
                Toronto, ON M5K 1B7
              </a>
            </p>

            {/* <p>
              Contact: (555) 123-4567 
            </p> */}
            {/* <p className="text-xs text-gray-400">
              DRE Lic# 01987375
            </p> */}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            © Copyright {new Date().getFullYear()} | Nnyocha | All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="#privacy" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link to="#terms" className="hover:text-black transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
