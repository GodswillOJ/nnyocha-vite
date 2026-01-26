import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "peers",
    label: "Connect with peers",
    title: "Grow your research circle",
    description:
      "Build meaningful relationships with researchers who share your goals.",
    image: "/images/46942.jpg",
    bg: "bg-[#FBF3E8]",
  },
  {
    id: "collaborate",
    label: "Collaborate easily",
    title: "Work better together",
    description:
      "Work together seamlessly across institutions and disciplines.",
    image: "/images/118745.jpg",
  },
  {
    id: "funded",
    label: "Get funded",
    title: "Turn ideas into impact",
    description:
      "Access opportunities that turn strong ideas into funded research.",
    image: "/images/get_funded_20.png",
    bg: "bg-[#F6F8F4]",
  },
];

export default function Info() {
  const [activeTab, setActiveTab] = useState("peers");

  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-gray-100/80 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Tabs */}
        <div className="flex justify-center gap-16 border-b border-gray-300 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 transition-colors tracking-wide
                text-xs sm:text-sm md:text-base
                ${
                  activeTab === tab.id
                    ? "text-[#56371a] font-openSans font-semibold border-b-2 border-[#8cc63f]"
                    : "text-gray-500 font-openSans hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full"
          >
            {/* CONTAINER */}
            <div
              className={`
                w-full
                rounded-3xl
                ${current.bg}
                px-6
                sm:px-10
                lg:px-16
                py-12
                lg:py-20
              `}
            >
              {/* GRID LAYOUT */}
              <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-12
                lg:gap-20
                items-center
              ">
                {/* TEXT */}
                <div className="max-w-xl">
                  <h3 className="
                    font-openSans
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-semibold
                    text-gray-900
                    mb-6
                  ">
                    {current.title}
                  </h3>

                  <p className="
                    text-base
                    sm:text-lg
                    leading-relaxed
                    text-gray-600
                  ">
                    {current.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="
                  w-full
                  h-[18rem]
                  sm:h-[22rem]
                  lg:h-[26rem]
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                ">
                  <motion.img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{
                      duration: 9,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
