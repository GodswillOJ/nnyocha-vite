import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "peers",
    label: "Connect with peers",
    title: "Grow your research circle",
    image: "https://picsum.photos/800/600",
  },
  {
    id: "collaborate",
    label: "Collaborate easily",
    title: "Work better together",
    image: "https://picsum.photos/800/600",
  },
  {
    id: "funded",
    label: "Get funded",
    title: "Turn ideas into impact",
    image: "https://picsum.photos/800/600",
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
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
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
            initial={{ opacity: 0, y:10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-12"
          >
            <h2 className="text-4xl font-medium text-center">
              {current.title}
            </h2>

            {/* Image with continuous zoom */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg relative h-[28rem]">
              <motion.img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }} // zoom in and out
                transition={{
                  duration: 8,         // slow, smooth zoom
                  repeat: Infinity,    // loop forever
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
