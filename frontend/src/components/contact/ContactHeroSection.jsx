import React from "react";
import { motion } from "framer-motion";

const heroImage = "/images/contact/contact_us001.png";

export default function ContactHeroSection() {
  return (
    <section className="relative bg-white mt-10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14 items-center">

        {/* ================= TEXT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            flex flex-col items-center
            text-center
            space-y-5 sm:space-y-6 lg:space-y-7
            w-full
            max-w-4xl
          "
        >
          {/* Eyebrow */}
          <div className="relative inline-block">
            <span
              className="
                relative z-10
                font-extrabold
                text-[#e76f00]
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-2xl
                tracking-wide
                uppercase
              "
            >
              Contact Us
            </span>

            {/* Shine */}
            <span
              className="
                absolute inset-0
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                opacity-60
                pointer-events-none
                rounded
              "
            />
          </div>

          {/* Heading */}
          <h1
            className="
              text-[28px]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[48px]
              xl:text-[52px]
              font-bold
              font-openSans
              leading-[1.15]
              text-[#56371a]
              max-w-3xl
            "
          >
            Let’s <span className="text-[#8cc63f]">Connect</span> and
            <br className="hidden sm:block" />
            Build Impact Together
          </h1>

          {/* Body text */}
          <p
            className="
              text-[#56371a]/90
              text-[14.5px]
              sm:text-[16px]
              md:text-[17px]
              font-gotham
              font-medium
              leading-[1.75]
              max-w-2xl
            "
          >
            Whether you’re seeking research collaboration, mentorship,
            funding opportunities, or institutional partnerships, our team
            is ready to engage. Reach out and let’s explore how NNyocha can
            support your goals.
          </p>
        </motion.div>

        {/* ================= SINGLE HERO IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            relative
            w-full
            h-[260px]
            sm:h-[320px]
            md:h-[420px]
            lg:h-[520px]
            xl:h-[580px]
            rounded-2xl
            overflow-hidden
            bg-gray-100
          "
        >
          <img
            src={heroImage}
            alt="Contact NNyocha"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              transition-transform duration-700 ease-out
              hover:scale-105
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
