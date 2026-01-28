import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const founders = [
  {
    name: "Dr. Adebayo Okafor",
    role: "Founder & Head of Research Collaboration",
    image: "/images/founders/about_re004.png",
  },
  {
    name: "Prof. Chioma Nwoye",
    role: "Co-Founder & Director of Mentorship and Innovation",
    image: "/images/founders/about_re001.png",
  },
  {
    name: "Engr. Lee Zaaghi",
    role: "Co-Founder & Platform Technology Lead",
    image: "/images/founders/about_re003.png",
  },
  {
    name: "Dr. Fatima Bello",
    role: "Co-Founder & Director of Funding and Academic Partnerships",
    image: "/images/founders/about_re002.png",
  },
];

export default function AboutFounders() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#e76f00]">
            Our Team
          </span>

          <h2 className="mt-4 text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#56371a]">
            Meet the Founders
          </h2>

          <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#56371a]/80">
            We are a collective of researchers, technologists, and academic leaders
            committed to advancing African scholarship through collaboration,
            innovation, and purpose-driven technology.
          </p>
        </motion.div>

        {/* FOUNDERS SECTION */}
        <div className="bg-[#f9f7f4] rounded-3xl p-6 sm:p-10">

        {/* ===== MOBILE / TABLET — SWIPER ===== */}
        <div className="lg:hidden">

            <Swiper
            modules={[Navigation, Autoplay]}
            loop
            speed={900}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
                prevEl: ".founder-prev",
                nextEl: ".founder-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            className="relative"
            >
            {founders.map((member, index) => (
                <SwiperSlide key={index}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="
                    bg-white
                    rounded-2xl
                    p-5
                    text-center
                    shadow-sm
                    max-w-sm
                    mx-auto
                    "
                >
                    <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100 mb-5">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>

                    <h4 className="text-[16px] font-semibold text-[#56371a]">
                    {member.name}
                    </h4>

                    <p className="text-[13px] mt-1 text-[#8cc63f] font-medium">
                    {member.role}
                    </p>
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-center gap-4 mt-8">
            <button
                className="
                founder-prev
                h-10 w-10
                rounded-full
                border border-[#56371a]/30
                flex items-center justify-center
                text-[#56371a]
                hover:border-[#56371a]
                hover:text-[#56371a]
                transition
                "
            >
                ←
            </button>

            <button
                className="
                founder-next
                h-10 w-10
                rounded-full
                border border-[#56371a]/30
                flex items-center justify-center
                text-[#56371a]
                hover:border-[#56371a]
                hover:text-[#56371a]
                transition
                "
            >
                →
            </button>
            </div>
        </div>

        {/* ===== DESKTOP — GRID ===== */}
        <div className="hidden lg:grid grid-cols-4 gap-8">

            {founders.map((member, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
            >
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100 mb-5">
                <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                </div>

                <h4 className="text-[16px] font-semibold text-[#56371a]">
                {member.name}
                </h4>

                <p className="text-[13px] mt-1 text-[#8cc63f] font-medium">
                {member.role}
                </p>
            </motion.div>
            ))}

        </div>
        </div>

      </div>
    </section>
  );
}
