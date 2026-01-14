import React, { useState } from "react";
import { FaFlask, FaChartLine } from "react-icons/fa"; // example research icons

const faqs = [
  { q: "How can I find a mentor?", a: "Create your profile to access our mentor network. Browse, connect, and start conversations with experienced guides ready to support your research goals." },
  { q: "Can I work with other researchers?", a: "Definitely! Join projects, share your ideas, and team up with researchers worldwide. Collaboration is just a few clicks away." },
  { q: "What funding options can I access?", a: "Discover open funding calls, submit your proposals, and track progress—all in one place. We connect you with investors who believe in your work." },
  { q: "Is there help for newcomers?", a: "Absolutely! Our guides and community forums make getting started easy. Reach out anytime—our team and fellow researchers are ready to support you." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t-2 border-gray-200">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        {/* FAQ Section */}
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
            Answers for your research journey
            </h2>

            <div className="space-y-4">
            {faqs.map((f, i) => (
                <div key={i} className="rounded-xl">
                {/* Question */}
                <div
                    className="p-6 cursor-pointer bg-gray-50 flex justify-between items-center font-semibold text-gray-800 shadow-sm hover:shadow-md transition-all"
                    onClick={() => toggleFAQ(i)}
                >
                    {f.q}
                    <span
                    className={`transform transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                    }`}
                    >
                    ▼
                    </span>
                </div>

                {/* Answer */}
                {openIndex === i && (
                    <div className="bg-white rounded-b-xl p-6 shadow-md mt-1 transition-all">
                    <p className="text-gray-700">{f.a}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>

        {/* Quality Research Graphics Section */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row md:flex-col gap-6 md:gap-8 justify-center items-stretch">
            {/* Graphic Card 1 */}
            <div className="flex-1 bg-gray-800 rounded-xl p-8 flex flex-col items-center text-white shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl sm:text-6xl mb-4">
                <FaFlask />
            </div>
            <h3 className="text-2xl sm:text-xl font-semibold mb-2 text-center">Innovative Experiments</h3>
            <p className="text-center text-gray-300 text-sm sm:text-base">
                Explore cutting-edge research tools and methodologies to advance your projects.
            </p>
            </div>

            {/* Graphic Card 2 */}
            <div className="flex-1 bg-gray-800 rounded-xl p-8 flex flex-col items-center text-white shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl sm:text-6xl mb-4">
                    <FaChartLine />
                </div>
                <h3 className="text-2xl sm:text-xl font-semibold mb-2 text-center">Data-Driven Insights</h3>
                <p className="text-center text-gray-300 text-sm sm:text-base">
                    Analyze and visualize research outcomes to make impactful decisions.
                </p>
            </div>
        </div>
    </div>
    </section>
  );
}
