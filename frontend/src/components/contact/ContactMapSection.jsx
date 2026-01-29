import React from "react";
import { motion } from "framer-motion";

export default function ContactMapSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* LEADING TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#e76f00]">
            Our Location
          </span>

          <h3 className="mt-4 text-[26px] sm:text-[30px] md:text-[34px] font-bold text-[#56371a]">
            Visit or Reach Us
          </h3>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#56371a]/80">
            Our office is located in the heart of Toronto’s financial district,
            making it easy to connect with partners, institutions, and collaborators.
          </p>
        </motion.div>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-sm bg-gray-100">
          <iframe
            title="NNYocha Toronto Office"
            src="https://www.google.com/maps?q=66+Wellington+Street+West,+Suite+4100,+Toronto,+ON+M5K+1B7&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ADDRESS (OPTIONAL BUT CLEAN) */}
        <div className="mt-8 text-center">
          <p className="font-medium text-gray-800">
            <a
              href="https://www.google.com/maps?q=66+Wellington+Street+West,+Suite+4100,+Toronto,+ON+M5K+1B7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e76f00] text-[#56371a] transition-colors"
            >
              66 Wellington Street West, Suite 4100<br />
              Toronto, ON M5K 1B7
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
