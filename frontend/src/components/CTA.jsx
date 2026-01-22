import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 bg-white">
      <div
        className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-2
          gap-16 items-center
        "
      >
        {/* LEFT — TEXT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Fuel your research journey today
          </h2>

          <p className="text-gray-600 text-lg max-w-md mb-10">
            Step into a supportive network where your ideas matter. Connect with fellow researchers, find mentors who care, and access the funding you need to bring your vision to life. Let’s move forward, together.
          </p>

          <a
            href="#wait_list"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-xl
              bg-[#ff6e00]
              hover:bg-[#fd9e57]
              text-white font-medium
              transition-colors
            "
          >
            Join the Network
          </a>
        </div>

        {/* RIGHT — IMAGE WITH SUBTLE MOTION */}
        <div
          className="
            relative
            h-[360px] sm:h-[420px] lg:h-[480px]
            rounded-3xl
            overflow-hidden
            shadow-2xl
          "
        >
          <motion.img
            src="/images/beyond1.jpg"
            alt="Researchers collaborating"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
}
