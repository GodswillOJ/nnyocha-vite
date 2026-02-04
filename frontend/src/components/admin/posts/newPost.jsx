import { useState } from "react";
import { marked } from "marked";

export default function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "", // URL or uploaded file
    category: "Research",
    author: "",
    readTime: "",
    featured: false,
    published: true,
  });

  const [file, setFile] = useState(null); // store uploaded file

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // store selected file
    setForm({ ...form, image: "" }); // clear URL if using upload
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("excerpt", form.excerpt);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("author", form.author);
    formData.append("readTime", form.readTime);
    formData.append("featured", form.featured);
    formData.append("published", form.published);

    // append file if available
    if (file) {
      formData.append("image", file);
    } else if (form.image) {
      formData.append("imageUrl", form.image); // optional URL
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
    method: "POST",
    body: formData,
    });


    if (res.ok) {
      alert("Post published successfully");
      setForm({
        title: "",
        excerpt: "",
        content: "",
        image: "",
        category: "Research",
        author: "",
        readTime: "",
        featured: false,
        published: true,
      });
      setFile(null);
    } else {
      alert("Failed to publish post");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#56371a] mb-10">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6 mb-16" encType="multipart/form-data">
        {/* Title */}
        <input
          name="title"
          placeholder="Post title"
          value={form.title}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        {/* Excerpt */}
        <textarea
          name="excerpt"
          placeholder="Short excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          rows={3}
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Post content (Markdown or HTML)"
          value={form.content}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg min-h-[240px]"
          required
        />

        {/* Image URL */}
        <input
          name="image"
          placeholder="Featured image URL (optional)"
          value={form.image}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
        />

        {/* OR Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border px-4 py-3 rounded-lg"
        />

        {/* Category & Author */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg"
          >
            <option>Research</option>
            <option>Academics</option>
            <option>Innovation</option>
            <option>Funding</option>
            <option>Lifestyle</option>
          </select>

          <input
            name="author"
            placeholder="Author name"
            value={form.author}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg"
          />
        </div>

        {/* Featured & Published */}
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />
            Featured
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
            />
            Published
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#56371a] text-white px-8 py-3 rounded-lg hover:bg-[#e76f00] transition"
        >
          Publish Post
        </button>
      </form>

      {/* Live Preview */}
      <section className="p-6 border rounded-lg bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>

        <h3 className="text-xl font-semibold mb-1">{form.title || "Post Title"}</h3>
        <p className="italic text-gray-600 mb-3">{form.excerpt || "Short excerpt..."}</p>

        {(form.image || file) && (
          <img
            src={file ? URL.createObjectURL(file) : form.image}
            alt="Post preview"
            className="mb-4 rounded-lg max-h-96 object-cover"
          />
        )}

        <div
          className="prose mb-3"
          dangerouslySetInnerHTML={{ __html: marked.parse(form.content || "Post content...") }}
        />

        <p className="text-sm text-gray-500">
          Category: {form.category} | Author: {form.author || "Unknown"}
        </p>

        <p className="text-sm text-gray-500">
          Featured: {form.featured ? "Yes" : "No"} | Published: {form.published ? "Yes" : "No"}
        </p>
      </section>
    </section>
  );
}
