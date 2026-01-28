import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa6";

const tabs = [
  {
    id: "research",
    label: "Research",
    title: "Research that drives discovery",
    description:
      "NNyocha empowers researchers to explore bold ideas, collaborate across disciplines, and produce impactful work that advances knowledge globally.",
    image: "/images/about/group_re1.png",
    bg: "bg-[#EEF3FA]",
  },
  {
    id: "mentor",
    label: "Mentor",
    title: "Mentorship that shapes leaders",
    description:
      "Connect with experienced mentors who provide guidance, feedback, and real-world insight to help you navigate your academic and professional journey.",
    image: "/images/about/new_001.png",
    bg: "bg-[#FBF3E8]",
  },
  {
    id: "fund",
    label: "Fund",
    title: "Funding ideas with purpose",
    description:
      "Access grants, funding partners, and opportunities designed to turn innovative ideas into scalable solutions with measurable impact.",
    image: "/images/funded_001.png",
    bg: "bg-[#F6F8F4]",
  },
];

export default function AboutNNyocha() {
  const [activeTab, setActiveTab] = useState("research");
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-gray-100/80 py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT MENU (Medilink-style) */}
            <aside className="lg:col-span-3 space-y-8">
            
            {/* MENU */}
            <div className="bg-white rounded-2xl shadow-sm divide-y">
                {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 transition-all
                    ${
                        activeTab === tab.id
                        ? "text-[#8cc63f] font-semibold bg-gray-50 border-l-4 border-[#8cc63f]"
                        : "text-gray-600 hover:text-black"
                    }`}
                >
                    {tab.label}
                </button>
                ))}
            </div>

            {/* CONTACT / INFO BOX */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <p className="text-sm text-gray-500 mb-2">
                Need assistance?
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Contact NNyocha
                </h4>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                    <FaPhoneVolume className="text-[#8cc63f] text-lg" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Canada</p>
                        <p className="text-lg font-semibold text-gray-900">
                        +1 (416) 555-0199
                        </p>
                    </div>
                </div>
            </div>

            </aside>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div
                  className={`
                    w-full
                    rounded-3xl
                    ${current.bg}
                    px-6
                    sm:px-10
                    lg:px-16
                    py-12
                    lg:py-4
                  `}
                >
                  <div
                    className="
                      grid
                      grid-cols-1
                      lg:grid-cols-2
                      gap-12
                      lg:gap-20
                      items-center
                    "
                  >
                    {/* TEXT */}
                    <div className="max-w-xl">
                      <h3
                        className="
                          font-openSans
                          text-3xl
                          sm:text-4xl
                          lg:text-5xl
                          font-semibold
                          text-gray-900
                          mb-6
                        "
                      >
                        {current.title}
                      </h3>

                      <p
                        className="
                          text-base
                          sm:text-lg
                          leading-relaxed
                          text-gray-600
                        "
                      >
                        {current.description}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div
                      className="
                        w-full
                        h-[18rem]
                        sm:h-[22rem]
                        lg:h-[26rem]
                        rounded-2xl
                        overflow-hidden
                        shadow-xl
                      "
                    >
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

        </div>
      </div>
    </section>
  );
}
