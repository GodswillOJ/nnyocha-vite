import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const ctaSlides = [
  {
    role: "Researchers",
    title: "Collaborate & publish faster",
    image: "https://picsum.photos/700/500?research",
  },
  {
    role: "Mentors",
    title: "Guide the next generation",
    image: "https://picsum.photos/700/500?mentor",
  },
  {
    role: "Funders",
    title: "Back breakthrough ideas",
    image: "https://picsum.photos/700/500?funding",
  },
];

export default function CTA() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Network, Learn & Grow Together
          </h2>

          <p className="text-gray-600 text-lg max-w-md mb-10">
            A trusted space where researchers, mentors, and funders come together
            to turn ideas into impact.
          </p>

          <a
            href="#wait_list"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-xl
              bg-[#ff6e00] hover:bg-[#fd9e57]
              text-white font-medium
              transition-colors
            "
          >
            Join the Network
          </a>
        </div>

        {/* RIGHT — SLIDER */}
        <div className="relative">
          <Swiper
            modules={[FreeMode]}
            freeMode
            grabCursor
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.6 },
            }}
          >
            {ctaSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="
                  relative
                  h-72
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                ">
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.role}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/80" />

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm text-[#8cc63f] hover:font-bold uppercase tracking-wide opacity-80">
                      {slide.role}
                    </span>
                    <h3 className="text-xl text-white font-semibold mt-2">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
