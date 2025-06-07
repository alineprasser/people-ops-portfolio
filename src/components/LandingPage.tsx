import { useEffect } from "react";
import { AboutSection } from "./AboutSection";
import { StorySection } from "./StorySection";
import { ExperienceSection } from "./ExperienceSection";

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
      <AboutSection onContactClick={() => scrollToSection("contact")} />
      <StorySection />
      <ExperienceSection />
    </div>
  );
}
