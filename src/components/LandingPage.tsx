import { HiOutlineSparkles } from "react-icons/hi2";
import { PiHeartBold, PiMapPin, PiUsers } from "react-icons/pi";
import { Button } from "./ui/button";
import { BiLogoLinkedin } from "react-icons/bi";
import { useEffect } from "react";

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
    handleScroll(); // disparar uma vez na montagem
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onSectionChange]);

  return (
    <div className="flex flex-col">
      <section
        id="about"
        className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="inline-flex gap-2 items-center bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-bold">
                  <PiHeartBold size={16} />
                  Available for new projects
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl lg:text-5xl font-light text-stone-800 leading-tight">
                    Hi, I'm Giovanna! 👋
                    <span className="block text-3xl font-lora lg:text-2xl text-stone-500 mt-2">
                      I help teams become their best selves
                    </span>
                  </h1>
                  <p className="text-lg  text-stone-600 leading-relaxed">
                    For the past 10 years, I've been the person behind the
                    people—building cultures where everyone can thrive, creating
                    systems that actually work, and turning HR from a necessary
                    evil into a strategic superpower.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500">
                <div className="flex items-center gap-1">
                  <PiMapPin size={16} />
                  Based in Espírito Santo, Brazil
                </div>
                <div className="flex items-center gap-1">
                  <HiOutlineSparkles size={16} />
                  Drop a thought, spark a convo
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  // onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full">
                  Let's work together
                </Button>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/giovanna-prasser/"
                    target="_blank"
                    className=" hover:text-primary transition-colors">
                    <BiLogoLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/50 to-secondary/50 p-8">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Giovanna Prasser - People Operations Consultant"
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-stone-200">
                <div className="flex text-primary items-center space-x-2 text-sm">
                  <PiUsers size={16} />
                  <span className="text-stone-600">+500 people impacted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-light text-stone-800">
              A little about my journey
            </h2>
            <div className="prose prose-lg prose-stone mx-auto text-left">
              <p className="text-stone-600 leading-relaxed">
                I didn't set out to become a "People Ops person"—it kind of
                found me. After watching too many talented friends leave jobs
                because of poor management or toxic cultures, I realized that
                the way we treat people at work isn't just an HR issue—it's a
                human issue.
              </p>
              <p className="text-stone-600 leading-relaxed">
                What started as helping a startup friend with their first
                employee handbook turned into a decade-long mission to prove
                that taking care of people isn't just the right thing to do—it's
                the smart thing to do. I've seen firsthand how the right
                culture, systems, and support can transform not just businesses,
                but lives.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Today, I work with founders and leaders who believe that their
                people are their greatest asset, not just their biggest expense.
                Together, we build workplaces where everyone can do their best
                work and feel genuinely valued.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
