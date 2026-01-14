import React from 'react';
import { motion } from 'framer-motion';

const current = {
    image: "https://picsum.photos/800/600",
}

export default function Testimonial() {
return (
<section id="testimonials" className="py-24 bg-gray-50">
    <div className="flex flex-col items-center gap-8">
    {/* Image */}
    <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <motion.img
        animate={{ scale: [1, 1.05, 1] }} // zoom in and out
        transition={{
        duration: 8,         // slow, smooth zoom
        repeat: Infinity,    // loop forever
        repeatType: "loop",
        ease: "easeInOut"
        }}
        src={current.image}
        alt="Testimonial"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
        />
    </div>

    {/* Text Content */}
    <div className="max-w-3xl text-center py-6 px-4 sm:px-6">
        <blockquote className="text-lg sm:text-xl md:text-2xl italic mb-4 sm:mb-6">
        “Connecting with mentors and investors here transformed my research.”
        </blockquote>
        <p className="font-semibold text-base sm:text-lg">Dr. Omorede Aguebor</p>
        <p className="text-sm sm:text-base text-gray-500">Researcher & Community Member</p>
    </div>
    </div>
</section>
);
}