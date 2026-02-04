import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "./blogCard";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const POSTS_PER_PAGE = 6;
const API_URL = `${BACKEND_URL}/api/posts`;

export default function BlogList({ activeCategory }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}?category=${activeCategory}&page=${currentPage}&limit=${POSTS_PER_PAGE}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, [activeCategory, currentPage]);

  if (posts.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No posts found in "{activeCategory}" category.
      </div>
    );
  }

  return (
    <section className="py-12 space-y-12">
      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 rounded-lg ${
                currentPage === i + 1 ? "bg-[#56371a] text-white" : "bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
