import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const features = [
  {
    title: "Connect with fellow researchers",
    text: "Meet passionate minds eager to collaborate.",
    images: [
      "https://picsum.photos/400/700?1",
      "https://picsum.photos/400/700?2",
      "https://picsum.photos/400/700?3",
    ],
  },
  {
    title: "Learn from experienced mentors",
    text: "Tap into the wisdom of those who’ve walked your path.",
    images: [
      "https://picsum.photos/400/700?4",
      "https://picsum.photos/400/700?5",
      "https://picsum.photos/400/700?6",
    ],
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-gray-100/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-medium text-center mb-20">
          Research thrives when we connect
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={1000}
        >
          {features.map((f, i) => (
            <SwiperSlide key={i}>
              <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-14
                items-center
              ">
                {/* TEXT */}
                <div className="max-w-xl">
                  <h3 className="text-4xl font-semibold mb-6">
                    {f.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {f.text}
                  </p>
                </div>

                {/* IMAGE STACK */}
                <div className="relative h-[26rem] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex gap-6"
                    animate={{ x: ["0%", "-40%"] }}
                    transition={{
                      duration: 14,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {[...f.images, ...f.images].map((img, idx) => (
                      <div
                        key={idx}
                        className="
                          w-48
                          sm:w-56
                          lg:w-60
                          shrink-0
                          rounded-2xl
                          overflow-hidden
                          shadow-2xl
                        "
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
