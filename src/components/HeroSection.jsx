// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     id: 1,
//     image: "https://picsum.photos/900/700?random=1",
//     tag: "For Researchers",
//     title: "Turn groundbreaking research into real-world impact",
//     description:
//       "We connect researchers with mentors, funders, and institutions that help transform ideas into funded, scalable, and globally relevant solutions.",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/900/700?random=2",
//     tag: "For Mentors & Funders",
//     title: "Discover talent, fund innovation, and shape the future",
//     description:
//       "Our platform enables mentors and funders to identify promising researchers, support innovation early, and build meaningful partnerships.",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const isReversed = index % 2 !== 0;

//   return (
//     <section className="pt-52 pb-24 bg-black overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[index].id}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className={`grid md:grid-cols-2 gap-12 items-center ${
//               isReversed ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             {/* IMAGE */}
//             <motion.div
//               initial={{ scale: 1.05 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 4, ease: "easeInOut" }}
//               className="h-[26rem] rounded-2xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src={slides[index].image}
//                 alt="Research Network"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             {/* TEXT */}
//             <div className="relative">
//               {/* pinned h4 */}
//               <h4 className="absolute -top-6 left-0 text-sm uppercase tracking-widest text-gray-400">
//                 {slides[index].tag}
//               </h4>

//               <motion.h2
//                 className="text-4xl md:text-5xl text-white leading-tight mb-4"
//               >
//                 {slides[index].title}
//               </motion.h2>

//               <p className="text-gray-400 mb-8 max-w-xl">
//                 {slides[index].description}
//               </p>

//               {/* pinned button */}
//               <a href="#wait_list">
//                 <motion.button
//                   whileHover={{ y: -4, scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="
//                     absolute
//                     left-0
//                     bottom-0
//                     px-6 py-2
//                     bg-[#ff6e00]
//                     text-black
//                     rounded-xl
//                     font-medium
//                     hover:bg-[#fd9e57]
//                     transition
//                   "
//                 >
//                   Join waitlist
//                 </motion.button>
//               </a>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialTiles = [
  { id: 1, src: "https://picsum.photos/900/700?random=1" },
  { id: 2, src: "https://picsum.photos/900/700?random=2" },
  { id: 3, src: "https://picsum.photos/900/700?random=3" },
  { id: 4, src: "https://picsum.photos/900/700?random=4" }, // NEW
];


export default function Hero() {
  const [images, setImages] = useState(initialTiles);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative sm:pt-36 pb-20 lg:pb-28 bg-black overflow-hidden">
      <div className="relative max-w-73l sm:px-6">

        {/* WRAPPER */}
        <div className="relative flex flex-col lg:block">

          {/* TEXT — FIRST ON SMALL, OVERLAY ON LARGE */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="
                order-1
                relative
                mb-10
                w-full
                max-w-[90%]
                sm:max-w-2xl
                p-6 sm:p-8 lg:p-12
                rounded-xl
                z-20
                mx-auto

                bg-gradient-to-br
                from-[#0b0f1a]
                via-[#0e1324]
                to-[#0b0f1a]

                border
                border-white/10

                shadow-[0_30px_80px_rgba(0,0,0,0.65)]
                backdrop-blur-md

                lg:absolute
                lg:top-1/3
                lg:right-1/3
                lg:-translate-x-1/2
                lg:-translate-y-1/2
                lg:max-w-2xl
              "

            >
              {/* Top-left H4 */}
              <h4 className="text-xs text-center uppercase tracking-widest text-gray-400 mb-3">
                Our Network
              </h4>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 text-center lg:text-center">
                Where Research Meets Mentorship & Capital
              </h2>

              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base text-center lg:text-center">
                We connect researchers with mentors, institutions, and funders
                to turn bold ideas into funded, real-world impact.
              </p>

              <div className="flex mt-10 items-center justify-center gap-3 relative">
                {/* ARROW */}
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="flex items-center"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff6e00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-sm"
                  >
                    <line x1="4" y1="12" x2="18" y2="12" />
                    <polyline points="11 5 18 12 11 19" />
                  </svg>
                </motion.div>

                {/* BUTTON */}
                <motion.button
                  animate={{ x: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="
                    px-14 py-2
                    bg-[#ff6e00]
                    text-black
                    rounded-md
                    font-medium
                    hover:bg-[#fd9e57]
                    transition
                    shadow-md
                  "
                >
                  Join waitlist
                </motion.button>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* IMAGE GRID */}
          <motion.div
            layout
            className="
              order-2
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-12
              relative
              z-10
            "
          >
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`relative rounded-md overflow-hidden shadow-xl mx-auto
                  ${index === 0
                    ? "sm:col-span-2 lg:row-span-2 h-[260px] sm:h-[360px] lg:h-[720px]"
                    : index === 1
                    ? "h-[220px] sm:h-[260px] lg:h-[340px]"
                    : index === 3
                    ? "lg:col-span-2 h-[220px] sm:h-[260px] lg:h-[340px]"
                    : "h-[220px] sm:h-[260px] lg:h-[340px]" // fourth image
                  }
                `}
              >
                <img
                  src={img.src}
                  alt={`Hero visual ${img.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>


        </div>
      </div>
    </section>
  );
}
