import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative pt-32 pb-32 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl pt-10 lg:pt-16 mx-auto px-6 text-center">

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
          <a href="#wait_list">
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                px-12
                md:px-16
                py-3
                md:rounded-lg
                sm:rounded-md
                rounded-md
                bg-[#ff8a1d]
                text-white
                font-medium
                shadow-lg
              "
            >
              Join Waitlist
            </motion.button>
          </a>
        </div>

        {/* SINGLE STATIC IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            mt-20
            max-w-7xl
            mx-auto
            relative
            z-10
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              shadow-xl
              h-[260px]
              sm:h-[360px]
              lg:h-[520px]
              w-full
            "
          >
            <img
              src="https://picsum.photos/1200/800"
              alt="Hero visual"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
