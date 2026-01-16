import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function WaitlistForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

    const messages = [
    {
      title: "Be first. Build smarter.",
      body: "Join our waitlist to access cutting-edge research tools, funding insights, and a global network before public launch.",
    },
    {
      title: "Explore without limits.",
      body: "Discover collaborators, mentors, and opportunities designed to accelerate meaningful research and innovation.",
    },
    {
      title: "Where serious research begins.",
      body: "Early members gain priority access, exclusive insights, and a voice in shaping the platform’s future.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Thank you! Your request has been sent.");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Oops! Something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="wait_list" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-[#56371a] md:text-5xl font-bold mb-14 text-center">
          <span className="font-normal text-[#56371a]">Join</span> Waitlist
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          {/* PROMPT CONTAINER */}
          <div className="
            w-full md:w-1/2
            min-h-[240px] sm:min-h-[300px] md:min-h-full
            relative
            flex flex-col
            items-center
            justify-start md:justify-center
            px-0
          ">
            {/* Inner darker container */}
            <div className="
              w-full
              md:w-[80%]
              max-w-xl
              bg-[#8cc63f]
              px-6 py-8
              sm:px-8 sm:py-10
              md:px-10 md:py-12
              text-white
              shadow-xl
            ">
            {/* <div className="bg-[white]/20 h-28 md:h-32 flex items-center mb-8">
              <img
                src="/icons/NNYOCHA_07.png"
                alt="Company logo"
                className="
                  max-h-md
                  sm:max-h-md
                  md:max-h-md
                  w-auto
                  object-contain
                "
              />
            </div> */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="space-y-4 sm:space-y-5"
              >
                <h3 className="
                  text-lg sm:text-xl md:text-2xl lg:text-3xl
                  font-semibold
                  leading-snug
                ">
                  {messages[activeIndex].title}
                </h3>

                <p className="
                  text-sm sm:text-base
                  text-white/90
                  leading-relaxed
                  font-medium
                ">
                  {messages[activeIndex].body}
                </p>

                <div className="pt-4 sm:pt-6">
                  <span className="
                    inline-block
                    text-[10px] sm:text-xs
                    uppercase
                    tracking-widest
                    text-white/80
                    font-medium
                  ">
                    Early access • Priority onboarding • Exclusive insights
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* FORM */}
          <div className="w-full md:w-1/2 flex flex-col">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                name="firstName"
                required
                placeholder="First name"
                className="w-full h-12 px-4 border border-[#8cc63f] text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <input
                name="lastName"
                required
                placeholder="Last name"
                className="w-full h-12 px-4 border border-[#8cc63f] text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full h-12 px-4 border border-[#8cc63f] text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Telephone (e.g. +234 801 234 5678)"
                className="w-full h-12 px-4 border border-[#8cc63f] text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />
              <div className="relative">
                <select
                  name="persona"
                  required
                  className="
                    w-full h-12
                    px-4 pr-12
                    border border-gray-300
                    bg-white
                    text-sm text-gray-600
                    appearance-none
                    focus:outline-none focus:border-black
                    transition
                  "
                >
                  <option value="">Select your persona</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Funder">Funder</option>
                  <option value="Mentor">Mentor</option>
                </select>

                {/* Custom arrow */}
                <span className="
                  pointer-events-none
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  text-xs
                ">
                  ▼
                </span>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#8cc90f] border-none text-white text-sm font-medium hover:bg-[#8cc63f] transition"
              >
                {loading ? "Sending..." : "Send Waitlist"}
              </button>

              {success && (
                <p className="flex items-center gap-2 text-sm text-gray-600 pt-2">
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

        </div>
      </div>
    </section>
  );
}
