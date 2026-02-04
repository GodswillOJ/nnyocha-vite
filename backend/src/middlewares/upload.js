import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary-v2"; // ✅ updated package
import cloudinary from "../config/cloudinary.js"; // your existing cloudinary config

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "nnyocha/posts", // folder in your Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 1600, crop: "limit" }],
  },
});

const upload = multer({ storage });

export default upload;
