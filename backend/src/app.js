import express from "express";
import cors from "cors";
import waitlistRoutes from "./routes/waitlist.js";

const app = express();

// ✅ Allow both www and non-www domains
const allowedOrigins = [
  "https://nnyocha.com",
  "https://www.nnyocha.com"
];

app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin (like Postman or server-to-server)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Body parser
app.use(express.json());

// Routes
app.use("/api/waitlist", waitlistRoutes);

export default app;
