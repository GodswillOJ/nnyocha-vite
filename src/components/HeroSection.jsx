import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/500/500?random=1",
  "https://picsum.photos/500/500?random=2",
  "https://picsum.photos/500/500?random=3",
  "https://picsum.photos/500/500?random=4",
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gotham font-bold text-gray-900 leading-tight">
          Where Research Meets{" "}
          <span className="italic font-normal">Mentorship & Capital</span>
        </h1>

        {/* SUBTEXT */}
        <p className="
          mt-6
          text-gray-600
          text-[15px]
          sm:text-[17px]
          leading-[1.7]
          max-w-[52ch]
          mx-auto
          font-openSans
        ">
          We connect researchers with mentors, institutions, and funders to turn
          bold ideas into funded, real-world impact.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
              px-8 py-3
              rounded-full
              bg-[#ff8a1d]
              text-white
              font-medium
              shadow-lg
            "
          >
            Explore
          </motion.button>
        </div>

        {/* IMAGE DECK */}
        {/* IMAGE STRIP */}
        <div className="mt-20">
          <div
            className="
              flex
              gap-6
              justify-center
              items-center

              overflow-x-auto
              px-4
              sm:px-0

              scrollbar-hide
            "
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${[-10, -3, 4, 10][i]}deg)`,
                }}
              >
                <div
                  className="
                    w-[140px]
                    h-[140px]

                    sm:w-[170px]
                    sm:h-[170px]

                    lg:w-[220px]
                    lg:h-[220px]

                    rounded-2xl
                    overflow-hidden
                    shadow-xl
                    bg-white
                  "
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
