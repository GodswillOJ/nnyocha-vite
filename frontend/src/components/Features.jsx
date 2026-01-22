import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const features = [
  {
    title: "Connect with fellow researchers",
    text: "Meet passionate minds eager to collaborate. Grow your network and spark fresh ideas with every conversation.",
    image: "/images/connect1.jpg",
  },
  {
    title: "Learn from experienced mentors",
    text: "Tap into the wisdom of those who’ve walked your path. Build confidence and skills with every step forward.",
    image: "/images/mentor1.jpg",
  },
  {
    title: "Unlock research funding",
    text: "Explore funding options designed for your goals. Bring your vision to life with the support you need.",
    image: "/images/funding1.avif",
  },
  {
    title: "Celebrate your achievements",
    text: "Share your progress, mark milestones, and inspire others. Every win brings us closer as a community.",
    image: "/images/celebrate1.jpg",
  },
  {
    title: "Work beyond boundaries",
    text: "Join forces with researchers worldwide. Break barriers and create solutions that reach every corner.",
    image: "/images/aspire_more.jpg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-gray-100/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-medium text-center mb-20">
          Research thrives when we connect
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          speed={900}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".feature-prev",
            nextEl: ".feature-next",
          }}
          className="relative"
        >
          {features.map((f, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-16
                  items-center
                "
              >
                {/* TEXT */}
                <div className="max-w-xl">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold mb-6"
                  >
                    {f.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-lg text-gray-600"
                  >
                    {f.text}
                  </motion.p>

                  {/* NAVIGATION */}
                  <div className="flex items-center gap-4 mt-10">
                    <button
                      className="
                        feature-prev
                        h-10 w-10
                        rounded-full
                        border border-gray-300
                        flex items-center justify-center
                        text-gray-600
                        hover:border-gray-900 hover:text-gray-900
                        transition
                      "
                    >
                      ←
                    </button>

                    <button
                      className="
                        feature-next
                        h-10 w-10
                        rounded-full
                        border border-gray-300
                        flex items-center justify-center
                        text-gray-600
                        hover:border-gray-900 hover:text-gray-900
                        transition
                      "
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="
                    h-[420px]
                    sm:h-[480px]
                    lg:h-[560px]
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    mx-auto
                    max-w-sm
                  "
                >
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
