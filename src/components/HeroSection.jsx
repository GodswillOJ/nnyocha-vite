import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialImages = [
  { id: 1, src: "https://picsum.photos/500/500?random=1" },
  { id: 2, src: "https://picsum.photos/500/500?random=2" },
  { id: 3, src: "https://picsum.photos/500/500?random=3" },
  { id: 4, src: "https://picsum.photos/500/500?random=4" },
];

export default function Hero() {
  const [images, setImages] = useState(initialImages);

  // 🔁 Reorder images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        const shuffled = [...prev];
        shuffled.push(shuffled.shift()); // rotate positions
        return shuffled;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-32 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

      {/* HEADLINE */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          text-4xl sm:text-5xl lg:text-6xl
          font-gotham font-bold
          text-gray-900
          leading-tight
          text-center
        "
      >
        <span className="block">
          Where Research Meets
        </span>

        <span className="block italic font-normal md:mt-2">
          Mentorship & Capital
        </span>
      </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mt-6
            text-gray-600
            text-[15px]
            sm:text-[17px]
            leading-[1.7]
            max-w-[52ch]
            mx-auto
            font-openSans
          "
        >
          We connect researchers with mentors, institutions, and funders to turn
          bold ideas into funded, real-world impact.
        </motion.p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-8 py-3
              rounded-full
              bg-[#ff8a1d]
              text-white
              font-medium
              shadow-lg
            "
          >
            Join Waitlist
          </motion.button>
        </div>

        {/* IMAGE GRID */}
        <motion.div
          layout
          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8 sm:gap-10 lg:gap-12
            relative
            z-10
          "
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              transition={{
                layout: {
                  duration: 0.9,
                  ease: "easeInOut",
                },
              }}
              className={`relative overflow-hidden rounded-xl shadow-xl mx-auto w-full

                ${
                  index === 0
                    ? `
                      h-[260px]
                      sm:col-span-2 sm:h-[360px]
                      lg:row-span-2 lg:h-[720px]
                    `
                    : index === 3
                    ? `
                      h-[260px]
                      sm:h-[360px]
                      sm:col-span-2
                      lg:col-span-2 lg:h-[340px]
                    `
                    : `
                      h-[220px]
                      sm:h-[260px]
                      lg:h-[340px]
                    `
                }
              `}
            >
              <img
                src={img.src}
                alt="Hero visual"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
