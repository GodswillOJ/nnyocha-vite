import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./blogCard";
import { blogCategories, blogPosts } from "../../../data/blogData"

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
        <h2 className="text-3xl font-bold text-gray-900">Blog</h2>
        <p className="text-gray-600 mt-2">
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <motion.div
        layout
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition
              ${
                currentPage === index + 1
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
