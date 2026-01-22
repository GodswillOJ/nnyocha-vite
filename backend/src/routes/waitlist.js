import express from "express";
import Waitlist from "../models/waitlist.js";
import transporter from "../config/mailer.js";
import pushToSheet from "../utils/pushToSheet.js";
import { waitlistLimiter } from "../middlewares/rateLimit.js";

const router = express.Router();

router.post("/", waitlistLimiter, async (req, res) => {
  const payload = req.body;
  console.log(payload)

  try {
    // 1️⃣ Check for duplicates
    const exists = await Waitlist.findOne({
      $or: [{ email: payload.email }, { phone: payload.phone }],
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        code: "DUPLICATE_ENTRY",
        message:
          "Your information already exists in our system. Thank you for your interest — please stay tuned for updates.",
      });
    }

    // 2️⃣ Save to MongoDB
    await Waitlist.create(payload);

    // 3️⃣ Send emails (user + admin) safely
    try {
      // User confirmation email
      await transporter.sendMail({
        from: `"Nnyocha Waitlist" <${process.env.ADMIN_EMAIL}>`,
        to: payload.email,
        subject: "You’re on the Nnyocha Waitlist 🎉",
        html: `
          <h2>Hi ${payload.firstName},</h2>
          <p>Thanks for joining the Nnyocha waitlist! We'll notify you about updates and early access. !</p>
          <br/>
          <strong>Nnyocha Team</strong>
        `,
      });

      // Admin notification email
      await transporter.sendMail({
        from: `"Nnyocha Waitlist" <${process.env.ADMIN_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "📥 New Waitlist Signup",
        html: `
          <h3>New waitlist entry for Nnyocha </h3>
          <ul>
            <li><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</li>
            <li><strong>Email:</strong> ${payload.email}</li>
            <li><strong>Phone:</strong> ${payload.phone}</li>
            <li><strong>Persona:</strong> ${payload.persona}</li>
            <li><strong>Message:</strong> ${payload.message}</li>
          </ul>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError.message);
    }

    // 4️⃣ Push to Google Sheet safely
    try {
      await pushToSheet(payload);
    } catch (sheetError) {
      console.error("Google Sheet error:", sheetError.message);
    }

    // 5️⃣ Return success to user
    res.json({ success: true, message: "Thank you! You’re on the waitlist." });

  } catch (error) {
    console.error("Waitlist error:", error);
    res.status(500).json({
      success: false,
      message: "Oops! Something went wrong. Please try again.",
    });
  }
});

export default router;
