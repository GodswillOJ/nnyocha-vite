import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
  {
    name: "Dr. Omorede Aguebor",
    role: "Researcher & Community Member",
    quote:
      "Connecting with mentors and investors here transformed my research direction and opened doors I never imagined.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Aisha Bello",
    role: "PhD Candidate",
    quote:
      "The mentorship and peer feedback helped me refine my proposal and secure early-stage funding faster.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Samuel Okafor",
    role: "Startup Research Lead",
    quote:
      "This platform bridges the gap between ideas and execution. The community is thoughtful and deeply supportive.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Dr. Helen Wright",
    role: "Senior Mentor",
    quote:
      "Guiding young researchers here has been rewarding. The structure encourages meaningful collaboration.",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "Michael Adeyemi",
    role: "Angel Funder",
    quote:
      "I’ve discovered promising research teams and ideas that align perfectly with my investment thesis.",
    avatar: "https://i.pravatar.cc/100?img=61",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <div className="flex justify-center mb-10">
        <div className="
            inline-flex items-center
            px-5 py-2
            rounded-full font-semibold font-robo
            text-xs sm:text-sm lg:text-4xl
            tracking-wide
            text-[#56371a]
        ">
            Testimonials
        </div>
        </div>

        {/* SOLID IMAGE */}
        <div className="mb-20">
          <div className="w-full rounded-3xl overflow-hidden shadow-xl">
            <motion.img
              src="https://picsum.photos/1600/700"
              alt="Community testimonials"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* TESTIMONIAL SLIDER */}
        <Swiper
          modules={[Autoplay]}
          grabCursor
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">

                {/* PROFILE */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* QUOTE */}
                <blockquote className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  “{t.quote}”
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
