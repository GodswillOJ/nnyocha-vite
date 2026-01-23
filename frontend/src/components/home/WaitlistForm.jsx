import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {
  PhoneInput,
  defaultCountries,
} from "react-international-phone";
import "react-international-phone/style.css";

export default function WaitlistForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  // Modal state (NEW)
  const [modal, setModal] = useState({
    open: false,
    type: "success", // success | warning | error
    message: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone,
      persona: e.target.persona.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://nnyocha-vite-backend.onrender.com/api/waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      // Duplicate entry
      if (!res.ok && res.status === 409) {
        setModal({
          open: true,
          type: "warning",
          message:
            data.message ||
            "Your information already exists in our system. Please stay tuned for updates.",
        });
        return;
      }

      // Other errors
      if (!res.ok) {
        throw new Error(data.message);
      }

      // Success
      setModal({
        open: true,
        type: "success",
        message:
          "Thank you for joining the Nnyocha waitlist. Your information has been successfully submitted.",
      });

      formRef.current.reset();
      setPhone("");

    } catch (error) {
      setModal({
        open: true,
        type: "error",
        message:
          "We couldn’t submit your information at the moment. Please try again shortly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="wait_list" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-[#56371a] md:text-5xl font-semibold mb-14 text-center">
          <span className="font-semibold text-[#56371a]">Join</span> Waitlist
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">

          {/* PROMPT CONTAINER */}
          <div className="w-full md:w-1/2 min-h-[240px] sm:min-h-[300px] md:min-h-full relative flex flex-col items-center justify-start md:justify-center px-0">
            <div className="w-full md:w-[80%] max-w-xl bg-gradient-to-tr from-[#8cc63f] to-[#ff8a1d] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 text-white shadow-xl">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-4 sm:space-y-5"
              >
                <h3 className="py-5 rounded-md text-lg sm:text-xl font-gotham  md:text-2xl lg:text-3xl font-semibold leading-snug">
                  {messages[activeIndex].title}
                </h3>
                <p className="text-sm sm:text-base font-gotham text-black/100 leading-relaxed font-medium">
                  {messages[activeIndex].body}
                </p>
                <div className="pt-4 sm:pt-6">
                  <span className="inline-block text-[10px] sm:text-xs uppercase tracking-widest text-gray/80 font-openSans font-medium">
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
                className="w-full h-12 px-4 border border-[#e76f00]/50 text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <input
                name="lastName"
                required
                placeholder="Last name"
                className="w-full h-12 px-4 border border-[#e76f00]/50 text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full h-12 px-4 border border-[#e76f00]/50 text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <div className="w-full">
                <PhoneInput
                  defaultCountry="ng"
                  value={phone}
                  onChange={setPhone}
                  countries={defaultCountries}
                  inputClassName="
                    !w-full !h-12
                    !border !border-[#e76f00]/50
                    !rounded-none
                    !text-sm
                    focus:!border-black
                  "
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!border !border-[#e76f00]/50 py-[23px] !px-4 !rounded-none !bg-white",
                    dropdownStyleProps: {
                      className:
                        "!max-h-64 !overflow-y-auto !shadow-lg !border !border-gray-200",
                    },
                  }}
                />
              </div>
              
              <div className="relative">
                <select
                  name="persona"
                  required
                  className="
                    w-full h-12
                    px-4 pr-12
                    border border-[#e76f00]/50
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
                  text-[#e76f00]/60
                  text-xs
                ">
                  ▼
                </span>
              </div>

              <textarea
                name="message"
                required
                rows={4}
                placeholder="How can we support your research?"
                className="
                  w-full
                  px-4 py-3
                  border border-[#e76f00]/50
                  text-sm
                  placeholder:text-gray-400
                  focus:outline-none focus:border-black
                  transition
                  resize-none
                "
              />

              <button
                type="submit"
                className="w-full h-12 bg-[#e76f00] border-none text-white text-sm font-medium hover:bg-orange-600 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-[90%] max-w-md bg-white p-8 shadow-2xl"
          >
            <div className="flex items-start gap-4">
              {modal.type === "success" && <FaCheckCircle className="text-[#8cc63f] text-2xl mt-1" />}
              {(modal.type === "warning" || modal.type === "error") && (
                <FaTimesCircle className="text-yellow-500 text-2xl mt-1" />
              )}

              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {modal.type === "success"
                    ? "Submission Successful"
                    : modal.type === "warning"
                    ? "Already Registered"
                    : "Submission Failed"}
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {modal.message}
                </p>
              </div>
            </div>

            <button
              onClick={() => setModal({ ...modal, open: false })}
              className="mt-6 w-full h-11 bg-[#8cc63f] text-white text-sm font-medium hover:bg-[#ff6e00] transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
