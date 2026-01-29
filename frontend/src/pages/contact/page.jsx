import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import ContactHeroSection from "../../components/contact/ContactHeroSection";
import ContactMapSection from "../../components/contact/ContactMapSection";
import { motion } from "framer-motion";
import { scrollFadeUp } from "../../components/home/ScrollToHash";
import ContactReachOutSection from "../../components/contact/sendContact";

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

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <AnimatedSection>
        <ContactHeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactMapSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactReachOutSection />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
