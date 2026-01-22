import React from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="flex justify-center mb-12">
          <div
            className="
              inline-flex items-center
              px-6 py-2 lg:text-4xl text-2xl md:text-5xl
              font-semibold tracking-wide
              text-[#56371a]
            "
          >
            Testimonial
          </div>
        </div>

        {/* SOLID IMAGE */}
        <div className="mb-20">
          <div className="w-full rounded-3xl overflow-hidden shadow-xl">
            <motion.img
              src="/images/scholars2.jpg"
              alt="Community testimonial"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* SINGLE TESTIMONIAL */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-10 shadow-md">
          
          {/* AVATAR */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/testimony_img.jpeg"
              alt="Dr. Omorede Aguebor"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* QUOTE */}
          <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            “Connecting with mentors and investors here transformed my research. The encouragement and resources I found helped me bring my ideas to life. I’ve never felt more supported or part of a community that truly believes in collaboration and progress.”
          </blockquote>

          {/* NAME */}
          <p className="font-semibold text-gray-900">
            Dr. Omorede Aguebor
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Researcher & Community Member
          </p>
        </div>
      </div>
    </section>
  );
}
