import { motion } from "framer-motion";
import { scrollFadeUp } from "../components/ScrollToHash.jsx"

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/HeroSection.jsx";
import Features from "../components/Features.jsx";
import CTA from "../components/CTA";
import Testimonial from "../components/Testimonials";
import FAQ from "../components/FAQ";
import WaitlistForm from "../components/WaitlistForm";
import Footer from "../components/Footer";
import Info from "../components/InfoSection";

const AnimatedSection = ({ children }) => (
  <motion.div
    variants={scrollFadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <AnimatedSection>
        <Info />
      </AnimatedSection>

      <AnimatedSection>
        <Features />
      </AnimatedSection>

      <AnimatedSection>
        <CTA />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonial />
      </AnimatedSection>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection>
        <WaitlistForm />
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Home;
