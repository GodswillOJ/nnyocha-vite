import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
return (
<section className="py-24 bg-black text-white">
    <div className="
        max-w-5xl mx-auto text-center px-6 relative"
        >
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <div className="relative overflow-hidden rounded-2xl researchCTA px-6 py-8">
        {/* Background image with continuous zoom in/out */}
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://picsum.photos/900/400')" }}
            animate={{ scale: [1, 1.1, 1] }} // zoom in and back out
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <h2 className="
            relative z-10
            font-inter font-normal
            text-center sm:text-left md:text-center
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            leading-snug sm:leading-tight
            px-4 sm:px-6 md:px-10
            py-6 sm:py-8 md:py-10
            mb-3
            max-w-4xl
        ">
            Fuel your research journey today
        </h2>

        <a href="#wait_list">
            <motion.button
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: { y: 0, scale: 1 },
                hover: { y: -5, scale: 1.05 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="
                px-8 py-2 pb-4
                bg-[#ff6e00] hover:bg-[#fd9e57]
                text-black font-inter
                rounded-xl
                shadow-[0_-0.6px_0px_rgb(250,248,247)]
                transition-colors duration-300
                relative z-10
            "
            >
            Join waitlist
            </motion.button>
        </a>
        </div>
    </div>
</section>
);
}