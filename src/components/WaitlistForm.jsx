import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function WaitlistForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          setLoading(false);
          setSuccess("Thank you! Your request has been sent.");
          formRef.current.reset();
        },
        (err) => {
          setLoading(false);
          setSuccess("Oops! Something went wrong. Try again.");
          console.error(err);
        }
      );
  };

  return (
    <section id="wait_list" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:mb-6 mb-0 pb-10 text-center">
          <span className="font-roboto font-normal">Join</span> Waitlist
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-none rounded-2xl p-8 flex flex-col">
            <form
              ref={formRef}
              className="space-y-8 flex-1 flex flex-col justify-between"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <input
                  name="firstName"
                  className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  placeholder="First name"
                  required
                />
                <input
                  name="lastName"
                  className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  placeholder="Last name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="message"
                  className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                  placeholder="How can we support your research?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition mt-4"
              >
                {loading ? "Sending..." : "Send a mail"}
              </button>

              {success && (
                <p className="mt-3 flex items-center gap-2 font-medium"
                  style={{ color: success.includes("Oops") ? "#666666" : "#636363" }} // red for errors, green for success
                >
                  {success}
                  {success.includes("Oops") ? (
                    <FaTimesCircle className="text-gray-400" />
                  ) : (
                    <FaCheckCircle className="text-gray-400" />
                  )}
                </p>
              )}

            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 rounded-l overflow-hidden shadow-lg flex-1">
            <motion.img
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src="https://picsum.photos/800/600"
              alt="fine_wait_list_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
