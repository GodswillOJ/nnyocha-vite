import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Academic / research imagery (replace with real assets or CDN)
const images = [
  "/images/about/group_re2.png",
  "/images/researchers9.jpg",
  "/images/about/about_img_01.png",
];

const fadeVariant = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

export default function AboutHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white mt-10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto block px-6 lg:flex lg:flex-col gap-14 space-y-12 lg:space-y-0 items-center">

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
            mx-auto
            px-2 sm:px-0
        "
        >
        {/* Eyebrow */}
        <span
            className="
            text-[11px]
            sm:text-xs
            font-semibold
            tracking-widest
            uppercase
            text-[#e76f00]
            "
        >
            About Us
        </span>

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
            Advancing <span className="text-[#8cc63f]">Research</span> through
            <br className="hidden sm:block" />
            Technology & Collaboration
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
            NNYOCHA is a research-driven digital platform designed to support African
            scholars, scientists, and agri-innovators. We bridge the gap between ideas
            and impact by providing structured access to research tools, mentorship
            networks, funding opportunities, and institutional support.
        </p>
        </motion.div>

        {/* ================= IMAGE GRID ================= */}
        <div className="relative w-full">

            {/* ================= LARGE SCREENS (STATIC GRID) ================= */}
            <div className="hidden lg:grid grid-cols-2 gap-6 h-[520px] px-6 lg:px-10">
            {/* LEFT — BIG IMAGE */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-full group">
                <img
                src={images[0]}
                alt="Academic researchers"
                className="
                    absolute inset-0
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    lg:group-hover:scale-110
                "
                />
            </div>

            {/* RIGHT — TWO STACKED IMAGES */}
            <div className="grid grid-rows-[1fr_1fr] gap-6 h-full">

                <div className="relative rounded-2xl overflow-hidden bg-gray-100 group">
                    <img
                    src={images[1]}
                    alt="Research collaboration"
                    className="
                        absolute inset-0
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        lg:group-hover:scale-110
                    "
                    />
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-gray-100 group">
                    <img
                    src={images[2]}
                    alt="Academic discussion"
                    className="
                        absolute inset-0
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        lg:group-hover:scale-110
                    "
                    />
                </div>

            </div>
            </div>

            {/* ================= SMALL SCREENS (ROTATING IMAGE) ================= */}
            <div className="lg:hidden relative h-72 rounded-2xl overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                <motion.img
                    key={images[activeIndex]}
                    src={images[activeIndex]}
                    alt="Academic scholars"
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={fadeVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                />
                </AnimatePresence>
            </div>

        </div>
      </div>
    </section>
  );
}
