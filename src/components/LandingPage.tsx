import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AboutSection } from "./AboutSection";
import { StorySection } from "./StorySection";
import { ExperienceSection } from "./ExperienceSection";
import { ApproachSection } from "./ApproachSection";
import { TestimonialSection } from "./TestimonialSection";
import ContactSection from "./ContactSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}>
      {children}
    </motion.div>
  );
};

export default function LandingPage({
  onSectionChange,
  sections,
}: {
  onSectionChange: (section: string) => void;
  sections: { id: string; label: string }[];
}) {
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
          break;
        }
      }
      onSectionChange(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onSectionChange, sections]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <AnimatedSection id="about">
        <AboutSection onContactClick={() => scrollToSection("contact")} />
      </AnimatedSection>
      <AnimatedSection id="story">
        <StorySection />
      </AnimatedSection>
      <AnimatedSection id="experience">
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection id="approach">
        <ApproachSection />
      </AnimatedSection>
      <AnimatedSection id="testimonials">
        <TestimonialSection />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
