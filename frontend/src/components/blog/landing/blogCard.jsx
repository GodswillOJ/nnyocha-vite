import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dayjs from "dayjs"; // for date formatting

export default function BlogCard({ post }) {
  const formattedDate = dayjs(post.createdAt).format("MMMM D, YYYY");

  return (
    <Link to={`/blog/${post.slug}`} state={{ post }}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Category badge */}
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full text-gray-800">
            {post.category}
          </span>

          {/* Author + Date overlay */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded-lg text-white text-xs flex flex-col gap-0.5">
            <span>{post.author}</span>
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 font-openSans space-y-3">
          <h3 className="text-lg font-bold text-[#56371a] leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-[#56371a] leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
