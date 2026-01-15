import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const features = [
  {
    title: "Connect with fellow researchers",
    text: "Meet passionate minds eager to collaborate.",
    // image: "/images/gaming.jpg",
    image: "https://picsum.photos/1300/600",
  },
  {
    title: "Learn from experienced mentors",
    text: "Tap into the wisdom of those who’ve walked your path.",
    // image: "/images/saas.jpg",
    image: "https://picsum.photos/900/600",
  },
  {
    title: "Unlock research funding",
    text: "Explore funding options designed for your goals.",
    // image: "/images/interface.jpg",
    image: "https://picsum.photos/1900/600",
  },
  {
    title: "Celebrate your achievements",
    text: "Share progress and inspire others.",
    // image: "/images/science.jpg",
    image: "https://picsum.photos/1800/600",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-gray-100/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-14">
          Research thrives when we connect
        </h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          grabCursor={false}
        //   allowTouchMove={false} // Disable manual swiping
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false, // LEFT → RIGHT
          }}
          speed={6000}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          {features.map((f, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl p-5 h-full">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{f.text}</p>

                <div className="rounded-xl overflow-hidden">
                  <motion.img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}   // zoom in 10% on hover
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
