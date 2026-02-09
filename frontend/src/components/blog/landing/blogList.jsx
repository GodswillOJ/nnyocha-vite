import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "./blogCard";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const POSTS_PER_PAGE = 6;
const API_URL = `${BACKEND_URL}/api/posts`;

export default function BlogList({ activeCategory }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showLatestOnly, setShowLatestOnly] = useState(false);

  // Fetch posts
  useEffect(() => {
    setLoading(true);
    fetch(
      `${API_URL}?category=${activeCategory}&page=${currentPage}&limit=${POSTS_PER_PAGE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.error("Error fetching posts:", err))
      .finally(() => setLoading(false));
  }, [activeCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  if (loading) {
    return (
      <div className="py-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[340px] rounded-2xl bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!loading && posts.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No posts found in "{activeCategory}" category.
      </div>
    );
  }

  const latestPost = posts[0];

  // Determine posts to show
  const displayedPosts = showLatestOnly && latestPost ? [latestPost] : posts;

  return (
    <section className="relative z-10 py-12 pb-24 space-y-12">
      {/* Blog Cards */}
      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </motion.div>

      {/* Pagination */}
      {!showLatestOnly && totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 rounded-lg ${
                currentPage === i + 1
                  ? "bg-[#56371a] text-white"
                  : "bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
      {/* Reset Latest Post View */}
      {showLatestOnly && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowLatestOnly(false)}
            className="px-6 py-2 bg-[#56371a] text-white rounded-full hover:bg-[#7b4b2a] transition"
          >
            Show All Posts
          </button>
        </div>
      )}
      {/* 3-Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 h-[400px]"
      >
        {latestPost && (
          <motion.div
            layout
            className="relative cursor-pointer rounded-2xl overflow-hidden group min-h-[220px] lg:h-full"
            onClick={() => setShowLatestOnly(true)}
          >
            <img
              src={latestPost.image}
              alt={latestPost.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-2xl font-bold">Latest Post</h2>
              <p className="mt-2 text-sm">{latestPost.title}</p>
            </div>
          </motion.div>
        )}

        {/* Right: two stacked images */}
        <div className="flex flex-col gap-6">
          {/* Top right: total views */}
          {latestPost && (
            <motion.div
              layout
              className="relative rounded-2xl overflow-hidden flex-1 group cursor-default"
            >
              <img
                src="/images/energy9.jpg"
                alt="Total Views"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white font-semibold text-lg">
              Total Views {latestPost.views}
              </div>
            </motion.div>
          )}

          {/* Bottom right: creative text */}
          <motion.div
            layout
            className="relative rounded-2xl overflow-hidden flex-1 group cursor-default"
          >
            <img
              src="/images/connect1.jpg"
              alt="Creative"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-bold">Explore Ideas & Insights</h3>
              <p className="text-sm mt-1">
                Dive into articles that inspire and inform.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}