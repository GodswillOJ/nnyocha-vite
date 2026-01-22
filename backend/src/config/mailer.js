import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  port: 465,
  secure: true,                           // MUST be true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,         // Gmail App Password
  },
});

// Optional sanity check (can remove in prod)
transporter.verify((error) => {
  if (error) {
    console.error("Mailer connection error:", error);
  } else {
    console.log("✅ Mailer is ready to send emails");
  }
});

export default transporter;
