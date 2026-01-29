import { motion } from "framer-motion";

export default function ContactReachOutSection() {
  return (
    <section className="w-full py-20 bg-gray-50 flex justify-center px-4">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-xl px-6 md:px-12 py-16 overflow-hidden">

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#56371a]"
          >
            Let’s start a conversation.
          </motion.h2>

          <p className="mt-4 text-[#56371a] text-base md:text-lg">
            Have questions, ideas, or want to work with us?  
            Send us a message and our team will reach out shortly.
          </p>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 grid grid-cols-1 gap-5 text-left"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-xl border border-[#e76f00]/40 focus:ring-2 focus:ring-black outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 rounded-xl border border-[#e76f00]/40 focus:ring-2 focus:ring-black outline-none"
              required
            />

            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-5 py-4 rounded-xl border border-[#e76f00]/40 focus:ring-2 focus:ring-black outline-none resize-none"
              required
            />

            <button
              type="submit"
              className="mt-2 w-full md:w-fit mx-auto px-8 py-4 rounded-xl bg-[#e76f00] text-white font-semibold hover:scale-105 transition-transform"
            >
              Reach Out
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
