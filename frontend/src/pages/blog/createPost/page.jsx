import React from "react";
import Navbar from "../../../components/home/Navbar";
import CreatePost from "../../../components/admin/posts/newPost";
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

export default function CreateBlogPostPage() {
  return (
    <main>
      <Navbar />
      {/* BLOG LIST (COMING NEXT) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
        <CreatePost />
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
