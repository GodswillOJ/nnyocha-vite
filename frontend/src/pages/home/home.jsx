import { motion } from "framer-motion";
import { scrollFadeUp } from "../../components/home/ScrollToHash.jsx"

import Navbar from "../../components/home/Navbar.jsx";
import Hero from "../../components/home/HeroSection.jsx";
import Features from "../../components/home/Features.jsx";
import CTA from "../../components/home/CTA";
import Testimonial from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import WaitlistForm from "../../components/home/WaitlistForm";
import Footer from "../../components/home/Footer";
import Info from "../../components/home/InfoSection";

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
