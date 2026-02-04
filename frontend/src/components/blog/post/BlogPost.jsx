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
  const [post, setPost] = useState(location.state?.post || null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Fetch main post if not in state
  useEffect(() => {
    if (!post) {
      fetch(`${API_URL}/${slug}`)
        .then((res) => res.json())
        .then(setPost)
        .catch((err) => console.error("Error fetching post:", err));
    }
  }, [slug, post]);

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

  if (!post) {
    return <div className="py-40 text-center text-gray-500">Loading...</div>;
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
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={post.image || "/placeholder-image.jpg"}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />

          {/* Author + Date overlay on hero image */}
          <div
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 
                    backdrop-blur-sm 
                      px-3 sm:px-4 py-1.5 sm:py-2 
                      rounded-lg 
                      text-white text-xs sm:text-sm 
                      flex flex-col gap-0.5
                      hover:bg-[#7aba33] transition-colors duration-300 shadow-md"
          >
            <span className="font-medium truncate">{post.author}</span>
            <span className="text-xs sm:text-sm">{formattedDate}</span>
          </div>

        </section>

        {/* CONTENT + RELATED POSTS */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-4">
          {/* Main content */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

            <div
              className="prose prose-lg max-w-none mt-10"
              dangerouslySetInnerHTML={{ __html: contentHTML }}
            />
          </div>

          {/* Related posts sidebar */}
          {relatedPosts.length > 0 && (
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
              <div className="flex flex-col md:flex-col gap-4">
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
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={rPost.image}
                          alt={rPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs flex flex-col gap-0.5">
                          <span>{rPost.author}</span>
                          <span>{dayjs(rPost.createdAt).format("MMM D, YYYY")}</span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-gray-800 leading-snug">
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
