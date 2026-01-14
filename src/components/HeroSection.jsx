import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-52 pb-24 bg-[#000000]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center"
      >
        {/* Image container */}
        <div className="h-[28rem] rounded-2xl overflow-hidden relative">
          <motion.img
            src="https://picsum.photos/800/600"
            alt="Hero"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.05, 1] }} // zoom in and out
            transition={{
              duration: 8,        // slow and smooth
              repeat: Infinity,   // loop indefinitely
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Text & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.8, ease: "easeIn" }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl text-white leading-tight mb-6 tracking-tight [text-shadow:0_0_1px_rgba(255,255,255,0.35)]"
          >
            <span className='font-normal font-roboto pr-3'>Where</span>  
            <span className='font-bold font-poppins tracking-tight'>research meets opportunity</span>    
          </motion.h2>

          <a href="#wait_list">
            <motion.button 
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { y: 0, scale: 1 },
                hover: { y: -5, scale: 1.05 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 50 }}
              className="
                px-6 py-2
                bg-[#ff6e00]
                hover:bg-[#fd9e57]
                text-black
                font-inter
                rounded-[12px]
                shadow-[0_-0.6px_0px_rgb(250,248,247)]
                transition-all
                duration-300
              "
            >
              Join waitlist
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
