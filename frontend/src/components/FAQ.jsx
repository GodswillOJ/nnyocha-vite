import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How can I find a mentor?", a: "Create your profile to access our mentor network. Browse, connect, and start conversations with experienced guides ready to support your research goals." },
  { q: "Can I work with other researchers?", a: "Definitely! Join projects, share your ideas, and team up with researchers worldwide. Collaboration is just a few clicks away." },
  { q: "What funding options can I access?", a: "Discover open funding calls, submit your proposals, and track progress—all in one place. We connect you with investors who believe in your work." },
  { q: "Is there help for newcomers?", a: "Absolutely! Our guides and community forums make getting started easy. Reach out anytime—our team and fellow researchers are ready to support you." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-28 bg-white border-t border-gray-200">
        {/* SECTION HEADING */}
        <div className="flex justify-center mb-10">
        <div className="
            inline-flex items-center
            px-5 py-2
            rounded-full font-semibold font-robo
            text-4xl sm:text-4xl lg:text-4xl
            tracking-wide
            text-[#56371a]
        ">
            FAQs
        </div>
        </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — FAQ LIST */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Still looking for answers ?
          </h2>

          <div className="divide-y divide-gray-200">
            {faqs.map((f, i) => (
              <div key={i} className="py-6">

                {/* QUESTION ROW */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {f.q}
                  </span>

                  {/* PLUS / MINUS */}
                  <span className="
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    border border-gray-300
                    text-xl font-light
                    text-gray-700
                  ">
                    {openIndex === i ? "–" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 max-w-xl"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>
        </div>

          {/* RIGHT — SIMPLE VISUAL */}
          <div className="relative">
            <div
              className="
                rounded-3xl
                overflow-hidden
                bg-gray-100
                aspect-[4/5]
                shadow-sm
              "
            >
              <motion.img
                src="/images/faq1.jpg"
                alt="Research support"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

      </div>
    </section>
  );
}
