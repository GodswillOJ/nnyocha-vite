import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] =  useState(0);

  const heroImages = [
    "/images/Nnyocha_img1.jpeg",
    "/images/hero_001.jpeg",
    "/images/hero_002.jpeg",
  ]

  useEffect(
    () => {
      const interval = setInterval(
        () => {
          setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 6000
      );
    }, []
  );

  return (
    <section className="relative pt-32 pb-32 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl pt-10 lg:pt-16 mx-auto px-6 text-center">

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-gotham font-bold
            text-[#56371a]
            leading-tight
            text-center
          "
        >
          <span className="block">
            Where research excellence
          </span>

          <span className="block italic font-normal md:mt-2">
            is supported, connected and advanced.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mt-6
            text-gray-600
            text-[15px]
            sm:text-[17px]
            leading-[1.7]
            max-w-[52ch]
            mx-auto
            font-openSans
          "
        >
          A professional platform for credible research. Focused on development, funding, and impact.
        </motion.p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a href="#wait_list">
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                px-12
                md:px-16
                py-3
                md:rounded-lg
                sm:rounded-md
                rounded-md
                bg-[#ff8a1d]
                text-white
                font-medium
                shadow-lg
              "
            >
              Join Waitlist
            </motion.button>
          </a>
        </div>

          {/* HERO IMAGE — FADE ROTATION */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              mt-20
              max-w-7xl
              mx-auto
              relative
              z-10
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                shadow-xl
                h-[260px]
                sm:h-[360px]
                lg:h-[520px]
                w-full
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroImages[currentImage]}
                  src={heroImages[currentImage]}
                  alt="Hero visual"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </AnimatePresence>
            </div>
          </motion.div>

      </div>
    </section>
  );
}
