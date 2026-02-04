import BlogPost from "../models/BlogPost.js"
import slugify from "slugify";
import sanitizeHtml from "sanitize-html";

export const createPost = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      category,
      author,
      readTime,
      featured,
      published = true,
    } = req.body;

    if (!title || !content || !excerpt) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const existing = await BlogPost.findOne({ slug });
    if (existing) {
      return res.status(409).json({ message: "Post already exists" });
    }

    let image = "";

    if (req.file) {
      image = req.file.path; // ✅ Cloudinary URL
    }

    const post = await BlogPost.create({
      title,
      slug,
      excerpt,
    content: sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "h1",
        "h2",
        "h3",
        "h4",
        "blockquote",
    ]),
    allowedAttributes: {
        a: ["href", "target"],
    },
    }),
      image,
      category,
      author,
      readTime,
      featured,
      published,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};


export const getPosts = async (req, res) => {
  const { category, page = 1, limit = 6 } = req.query;

  const query = {
    published: true,
    ...(category && category !== "All" ? { category } : {}),
  };

  const posts = await BlogPost.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await BlogPost.countDocuments(query);

  res.json({
    posts,
    totalPages: Math.ceil(total / limit),
  });
};

export const getPostBySlug = async (req, res) => {
  const post = await BlogPost.findOne({
    slug: req.params.slug,
    published: true,
  });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // Increment views
  post.views += 1;
  await post.save();

  res.json(post);
};

export const getFeaturedPost = async (req, res) => {
  const post = await BlogPost.findOne({ featured: true, published: true });
  res.json(post);
};
