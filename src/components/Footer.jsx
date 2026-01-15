import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="bg-[#FFFBEA] text-[#4B5563]">
      <div className="max-w-7xl mx-auto px-6 pr-1 py-20">
        <div className="grid gap-12 md:grid-cols-4 py-10">

          {/* Logo + Socials */}
          <div className="space-y-8 md:items-center items-left justify-start md:justify-start flex flex-col">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}           
            className="h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-start">
              <img
                src="/icons/NNYOCHA -07.png"
                alt="Nnyocha"
                className="
                  h-26
                  sm:h-12
                  md:h-64
                  lg:h-26
                  xl:h-18
                  w-auto
                  transition-transform duration-300
                "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                flex flex-wrap items-center justify-center
                gap-4
                sm:gap-6
                md:gap-4
                lg:gap-6
                xl:gap-8
                text-gray-600
              "
            >
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="text-xl sm:text-2xl hover:text-black transition-colors" />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-xl sm:text-2xl hover:text-black transition-colors" />
              </a>

              <a href="#" aria-label="Twitter">
                <FaXTwitter className="text-xl sm:text-2xl hover:text-black transition-colors" />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="text-xl sm:text-2xl hover:text-black transition-colors" />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-xl sm:text-2xl hover:text-black transition-colors" />
              </a>
            </motion.div>

          </div>

          {/* Discover */}
          <div className="md:pl-20 pl-0">
            <h4 className="mb-4 text-sm font-semibold text-gray-800 tracking-wide">
              Discover
            </h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-3 text-sm">
              {[
                ["About", "#about"],
                ["Team", "#team"],
                ["Careers", "#careers"],
                ["Blog", "#blog"],
                ["Contact", "#contact"]
              ].map(([label, path]) => (
                <li key={label}>
                  <a
                    href={path}
                    className="group inline-flex items-center gap-2 hover:text-black transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Support */}
          <div className="md:pl-20 pl-0">
            <h4 className="mb-4 text-sm font-semibold text-gray-800 tracking-wide">
              Support
            </h4>
            <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-3 text-sm">
              <li>
                <a
                  href="#help"
                  className="group inline-flex items-center gap-2 hover:text-black transition"
                >
                  Help
                </a>
              </li>

              {/* ✅ ONLY CHANGE: FAQ uses anchor */}
              <li>
                <a
                  href="#faq"
                  className="group inline-flex items-center gap-2 hover:text-black transition"
                >
                  FAQ
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Legal */}
          <div className="md:pl-20 pl-0">
            <h4 className="mb-4 text-sm font-semibold text-gray-800 tracking-wide">
              Legal
            </h4>
            <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3 text-sm">
              {[
                ["Privacy", "#privacy"],
                ["Terms", "#terms"],
                ["Cookies", "#cookies"],
                ["Access", "#access"],
                ["Policy", "#policy"]
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-2 hover:text-black transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </motion.footer>
  );
}
