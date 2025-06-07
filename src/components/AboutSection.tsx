import { HiOutlineSparkles } from "react-icons/hi2";
import { PiHeartBold, PiMapPin, PiUsers } from "react-icons/pi";
import { Button } from "./ui/button";
import { BiLogoLinkedin } from "react-icons/bi";

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-background-secondary/50">
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
                  <span className="block text-3xl lg:text-2xl text-stone-500 mt-2">
                    I help teams become their best selves
                  </span>
                </h1>
                <p className="text-lg text-stone-600 leading-relaxed">
                  For the past 4 years, I've been the person behind the
                  people—building cultures where everyone can thrive, creating
                  systems that actually work, and turning HR from a necessary
                  evil into a{" "}
                  <span className="italic font-medium font-lora text-primary">
                    strategic superpower
                  </span>
                  .
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
                onClick={onContactClick}
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full">
                Let's work together
              </Button>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/giovanna-prasser/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors">
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
                <span className="text-stone-600">+100 people impacted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
