import React from "react";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[680px] max-h-[760px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/blog/landing/blog_hero2.png" // replace with your mirrored image
        alt="Insights on research, mentorship and innovation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-end pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          {/* CATEGORY / EYEBROW */}
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-[#8cc63f]">
            Nnyocha Blog
          </span>

          {/* TITLE */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-tight">
            Ideas, Research & Insights<br className="hidden sm:block" />
            Shaping Africa’s Future
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[14.5px] sm:text-[16px] md:text-[17px] text-white/90 leading-relaxed">
            Explore expert perspectives on research innovation, academic
            collaboration, mentorship, and funding opportunities — curated to
            support scholars, institutions, and changemakers across Africa.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
