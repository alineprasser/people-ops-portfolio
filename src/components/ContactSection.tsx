import { BiLogoLinkedin } from "react-icons/bi";
import { PiDeviceMobile, PiEnvelope } from "react-icons/pi";
import { SectionHeader } from "./SectionHeader";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-44 bg-gradient-to-br from-secondary to-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col gap-8">
          <SectionHeader
            title="Let's catch up soon — virtually or in person! 🔗"
            className="text-accent"
          />
          <p className="text-lg text-accent leading-relaxed max-w-2xl mx-auto">
            Whether you're dealing with growing pains, culture challenges, or
            just want to chat about the future of work—I'd love to hear from
            you. No sales pitch, just good conversation.
          </p>
          <div className="flex flex-col sm:flex-row text-accent items-center justify-center gap-6">
            <a
              href="mailto:giovannaprassera@gmail.com"
              className="transition-colors flex gap-2 items-center">
              <PiEnvelope size={24} />
              giovannaprassera@gmail.com
            </a>
            <a
              href="tel:+5527999961683"
              className="transition-colors flex gap-2 items-center">
              <PiDeviceMobile size={24} />
              +55 27 99996-1683
            </a>
          </div>
          <div className=" items-center justify-center flex flex-col gap-6">
            <a
              href="https://www.linkedin.com/in/giovanna-prasser/"
              target="_blank"
              className="text-stone-400 transition-colors">
              <BiLogoLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
