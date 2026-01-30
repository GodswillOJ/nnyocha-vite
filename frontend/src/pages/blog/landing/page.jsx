import React from "react";
import BlogHero from "../../../components/blog/landing/blogHero";
import Navbar from "../../../components/home/Navbar";
import BlogList from "../../../components/blog/landing/blogList";

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <BlogHero />
      {/* BLOG LIST (COMING NEXT) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <BlogList />
        </div>
      </section>
    </main>
  );
}
