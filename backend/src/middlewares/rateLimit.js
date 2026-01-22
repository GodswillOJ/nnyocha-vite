import rateLimit from "express-rate-limit";

/**
 * Waitlist rate limiter
 * Prevents spam, bots, and email abuse
 */
export const waitlistLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ⏱ 15 minutes
  max: 5,                  // 🚫 max 5 submissions per IP
  standardHeaders: true,   // Send rate limit info in headers
  legacyHeaders: false,    // Disable X-RateLimit-* headers

  message: {
    success: false,
    message:
      "Too many waitlist attempts. Please wait 15 minutes and try again."
  }
});
