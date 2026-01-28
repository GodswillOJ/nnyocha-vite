import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutFounders from "../../components/about/AboutFounders";
import AboutNNyocha from "../../components/about/aboutNnyocha";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <div>
      <Navbar />
      <AnimatedSection>
        <AboutHeroSection />
      </AnimatedSection>
        <AnimatedSection>
      <AboutFounders />
        </AnimatedSection>
      <AnimatedSection>
        <AboutNNyocha />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
