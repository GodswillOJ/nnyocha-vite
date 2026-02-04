import React, { useState } from "react";
import BlogHero from "../../../components/blog/landing/blogHero";
import Navbar from "../../../components/home/Navbar";
import BlogList from "../../../components/blog/landing/blogList";
import Footer from "../../../components/home/Footer";
import BlogSubscribe from "../../../components/blog/landing/blogSubscribe";
import { motion } from "framer-motion";
import { scrollFadeUp } from "../../../components/home/ScrollToHash";

const AnimatedSection = ({ children }) => (
  <motion.div
    variants={scrollFadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const CATEGORIES = ["All", "Research", "Academics", "Innovation", "Funding", "Lifestyle"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main>
      <Navbar />
      <AnimatedSection>
        <BlogHero />
      </AnimatedSection>

      {/* Category Selector */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === cat
                  ? "bg-[#56371a] text-white border-[#56371a]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG LIST filtered by category */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <BlogList activeCategory={activeCategory} />
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <BlogSubscribe />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
