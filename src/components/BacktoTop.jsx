import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            fixed bottom-6 right-6 z-50
            h-12 w-12
            rounded-full
            bg-gradient-to-tr from-[#8cc63f] to-[#ff8a1d]
            text-white
            flex items-center justify-center
            shadow-lg shadow-black/10
            backdrop-blur
          "
          aria-label="Back to top"
        >
          <span className="text-lg leading-none">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
