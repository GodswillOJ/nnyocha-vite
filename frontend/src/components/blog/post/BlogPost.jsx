import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../home/Navbar";
import Footer from "../../home/Footer";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const BACKEND_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BACKEND_URL}/api/posts`;

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [relatedPosts, setRelatedPosts] = useState([]);

  // Fetch main post if not in state
  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        // Use state immediately if available
        if (location.state?.post?.slug === slug) {
          setPost(location.state.post);
          setLoading(false);
          return;
        }

        // Always have a fallback fetch
        const res = await fetch(`${API_URL}/${slug}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Post not found");

        const data = await res.json();
        setPost(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    loadPost();

    return () => controller.abort();
  }, [slug, location.state]);

  // Fetch related posts by category
  useEffect(() => {
    if (post?.category) {
      fetch(`${API_URL}?category=${post.category}&limit=4`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.posts.filter((p) => p.slug !== post.slug);
          setRelatedPosts(filtered);
        })
        .catch((err) => console.error("Error fetching related posts:", err));
    }
  }, [post]);

    if (loading) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
      Loading article…
    </div>
  );
}
if (error || !post) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <p className="text-gray-600">This post could not be loaded.</p>
      <Link to="/blog" className="text-[#e76f00] hover:underline">
        Back to blog
      </Link>
    </div>
  );
}

  const formattedDate = dayjs(post.createdAt).format("MMMM D, YYYY");

  const contentHTML = sanitizeHtml(marked.parse(post.content), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "h1","h2","h3","h4","h5","h6",
      "img","figure","figcaption","blockquote",
      "p","ul","ol","li","strong","em"
    ]),
    allowedAttributes: {
      a: ["href","target","rel"],
      img: ["src","alt","title","class"]
    },
    transformTags: {
      'a': sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'noopener noreferrer' })
    }
  });
  return (
    <>
      <article className="bg-white">
      {/* BREADCRUMB */}
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-10 py-4 text-sm sm:text-base md:text-base text-gray-600"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center flex-wrap gap-1 sm:gap-2">
          {/* Home */}
          <li className="flex items-center">
            <Link
              to="/blog@_staging"
              className="hover:text-[#56371a] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <svg
              className="w-3 h-3 mx-1 sm:mx-2 text-gray-400 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          {/* Posts */}
          <li className="flex items-center">
            <Link
              to="/blog"
              className="text-[#e76f00] hover:text-[#f28c2b] transition-colors duration-200 font-semibold"
            >
              Posts
            </Link>
            <svg
              className="w-3 h-3 mx-1 sm:mx-2 text-gray-400 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          {/* Current Post */}
          <li className="flex items-center max-w-[200px] sm:max-w-xs truncate">
            <span className="text-gray-800 font-medium truncate" title={post.title}>
              {post.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* HERO IMAGE */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src={post.image || "/placeholder-image.jpg"}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Author + Date overlay */}
        <div
          className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 
                    backdrop-blur-sm 
                    px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 
                    rounded-lg 
                    text-white text-xs sm:text-sm md:text-base 
                    flex flex-col gap-0.5
                    hover:bg-[#7aba33] transition-colors duration-300 shadow-md"
        >
          <span className="font-medium truncate max-w-[120px] sm:max-w-[160px] md:max-w-[200px]">
            {post.author}
          </span>
          <span className="text-[10px] sm:text-xs md:text-sm">{formattedDate}</span>
        </div>
      </section>

      {/* CONTENT + RELATED POSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid gap-10 lg:grid-cols-4">
        {/* Main content */}
        <div className="lg:col-span-3">
          {/* Post Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug break-words">
            {post.title}
          </h1>

          {/* Post Content */}
          <div
            className="
              prose max-w-full
              prose-sm sm:prose md:prose-md lg:prose-lg xl:prose-xl
              mt-6 sm:mt-8
              [&>img]:w-full [&>img]:h-auto [&>img]:object-contain
              [&>iframe]:w-full [&>iframe]:h-auto
              [&>h1]:text-2xl sm:[&>h1]:text-3xl md:[&>h1]:text-4xl lg:[&>h1]:text-5xl
              [&>h2]:text-xl sm:[&>h2]:text-2xl md:[&>h2]:text-3xl lg:[&>h2]:text-4xl
              [&>h3]:text-lg sm:[&>h3]:text-xl md:[&>h3]:text-2xl lg:[&>h3]:text-3xl
              break-words
            "
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
        </div>

        {/* Related posts sidebar */}
        {relatedPosts.length > 0 && (
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Related Posts</h2>
            <div className="flex flex-col gap-4">
              {relatedPosts.map((rPost) => (
                <Link
                  to={`/blog/${rPost.slug}`}
                  key={rPost._id}
                  state={{ post: rPost }}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg bg-white"
                  >
                    {/* Post Image */}
                    <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                      <img
                        src={rPost.image || "/placeholder-image.jpg"}
                        alt={rPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 bg-black/50 backdrop-blur px-2 py-0.5 sm:px-2 sm:py-1 rounded text-white text-[10px] sm:text-xs flex flex-col gap-0.5">
                        <span className="truncate max-w-[80px] sm:max-w-[120px]">{rPost.author}</span>
                        <span>{dayjs(rPost.createdAt).format("MMM D, YYYY")}</span>
                      </div>
                    </div>

                    {/* Post Title */}
                    <div className="p-2 sm:p-3">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-snug line-clamp-2 break-words">
                        {rPost.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      </article>
    </>
  );
}
