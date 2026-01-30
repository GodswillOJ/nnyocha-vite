import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
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

        {/* Category pill */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full text-gray-800">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-3 text-sm font-medium text-gray-800">
          {post.author}
        </div>
      </div>
    </motion.article>
  );
}
