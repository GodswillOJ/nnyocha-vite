import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./blogCard";
import { blogCategories, blogPosts } from "../../../data/blogData"
import { featuredPost, otherPosts } from "../../../data/blogSidebarData";

const POSTS_PER_PAGE = 6;

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === activeCategory
        );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      {/* Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-lime-600">Blog</h2>
        <p className="text-[#56371a] font-openSans mt-2">
          Insights, research perspectives, and academic stories shaping Africa’s
          future.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm font-gotham font-medium transition
              ${
                activeCategory === category
                  ? "bg-[#56371a] text-white"
                  : "bg-gray-100 text-[#56371a] hover:bg-gray-200"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
        <div>
            {/* ================= BLOG CONTENT ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* ========= LEFT: BLOG GRID ========= */}
            <motion.div
                layout
                className="lg:col-span-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                {paginatedPosts.map((post) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <BlogCard post={post} />
                </motion.div>
                ))}
            </motion.div>

            {/* ========= RIGHT: SIDEBAR ========= */}
            <aside className="lg:col-span-1 space-y-8">

                {/* ===== FEATURED POST ===== */}
                <div className="rounded-2xl overflow-hidden bg-gray-900 text-white">
                <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-40 w-full object-cover"
                />

                <div className="p-4 font-gotham space-y-2">
                    <span className="text-xs uppercase tracking-wide text-gray-300">
                    Featured
                    </span>

                    <h3 className="font-semibold hover:text-[#8cc637] leading-snug">
                    {featuredPost.title}
                    </h3>

                    <div className="text-xs text-gray-300 flex gap-2">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    </div>
                </div>
                </div>

                {/* ===== OTHER POSTS ===== */}
                <div className="space-y-4">
                <h4 className="text-lg font-openSans font-bold text-lime-600">
                    Other posts
                </h4>

                {otherPosts.map((post) => (
                    <div
                    key={post.id}
                    className="flex flex-col sm:flex-row font-openSans gap-3 sm:items-start"
                    >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full sm:w-16 h-40 sm:h-16 rounded-lg object-cover"
                    />

                    <div className="space-y-1">
                        <p className="text-sm font-medium text-[#56371a] leading-snug line-clamp-2">
                        {post.title}
                        </p>

                        <div className="text-xs text-[#56371a] flex gap-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

            </aside>
            </div>
        </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition
              ${
                currentPage === index + 1
                  ? "bg-[#56371a] text-white"
                  : "bg-gray-100 text-[#56371a] hover:bg-gray-200"
              }
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
