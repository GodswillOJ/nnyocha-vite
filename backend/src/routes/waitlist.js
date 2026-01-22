import express from "express";
import Waitlist from "../models/waitlist.js";
import transporter from "../config/mailer.js";
import pushToSheet from "../utils/pushToSheet.js";
import { waitlistLimiter } from "../middlewares/rateLimit.js";

const router = express.Router();

router.post("/", waitlistLimiter, async (req, res) => {
  const payload = req.body;

  try {
    // 1️⃣ DUPLICATE CHECK (FAST)
    const exists = await Waitlist.findOne({
      $or: [{ email: payload.email }, { phone: payload.phone }],
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message:
          "Your information already exists in our system. Please stay tuned for updates.",
      });
    }

    // 2️⃣ SAVE TO DB
    await Waitlist.create(payload);

    // 3️⃣ RESPOND IMMEDIATELY (IMPORTANT)
    res.json({
      success: true,
      message: "You’ve been successfully added to the waitlist.",
    });

    // =============================
    // 🔁 BACKGROUND TASKS (NON-BLOCKING)
    // =============================

    // User confirmation
    transporter.sendMail({
      from: `"Nnyocha" <${process.env.EMAIL_USER}>`,
      to: payload.email,
      subject: "You’re on the Nnyocha Waitlist 🎉",
      html: `
        <h2>Hello ${payload.firstName},</h2>
        <p>You’ve been successfully added to the <strong>Nnyocha waitlist</strong>.</p>
        <p>We’ll notify you when we launch.</p>
        <br/>
        <strong>— Nnyocha Team</strong>
      `,
    }).catch(console.error);

    // Admin notification
    transporter.sendMail({
      from: `"Nnyocha System" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📥 New Waitlist Signup",
      html: `
        <h3>New Waitlist Entry</h3>
        <ul>
          <li><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</li>
          <li><strong>Email:</strong> ${payload.email}</li>
          <li><strong>Phone:</strong> ${payload.phone}</li>
          <li><strong>Persona:</strong> ${payload.persona}</li>
          <li><strong>Message:</strong> ${payload.message}</li>
        </ul>
        <p>✔ Record sent to Google Sheet</p>
      `,
    }).catch(console.error);

    // Google Sheet
    pushToSheet(payload).catch(console.error);

  } catch (error) {
    console.error("Waitlist error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

export default router;
