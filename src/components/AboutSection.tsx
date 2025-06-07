import { HiOutlineSparkles } from "react-icons/hi2";
import { PiHeartBold, PiMapPin, PiUsers } from "react-icons/pi";
import { Button } from "./ui/button";
import { BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";

interface AboutSectionProps {
  onContactClick: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-background-secondary/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center h-full">
          <motion.div
            className="flex flex-col gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>
            <motion.div
              className="flex flex-col gap-6"
              variants={fadeInUp}>
              <div className="inline-flex gap-2 items-center bg-accent text-surface px-4 py-2 rounded-full text-sm font-bold">
                <PiHeartBold size={16} />
                Available for new projects
              </div>
              <div className="flex flex-col gap-2">
                <motion.h1
                  className="text-4xl lg:text-5xl font-light text-stone-800 leading-tight"
                  variants={fadeInUp}>
                  Hi, I'm Giovanna! 👋
                  <motion.span
                    className="block text-3xl lg:text-2xl text-stone-500 mt-2"
                    variants={fadeInUp}>
                    I help teams become their best selves
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-lg text-stone-600 leading-relaxed"
                  variants={fadeInUp}>
                  For the past 4 years, I've been the person behind the
                  people—building cultures where everyone can thrive, creating
                  systems that actually work, and turning HR from a necessary
                  evil into a{" "}
                  <span className="italic font-bold font-lora text-secondary">
                    strategic superpower
                  </span>
                  .
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-stone-500"
              variants={fadeInUp}>
              <div className="flex items-center gap-1">
                <PiMapPin size={16} />
                Based in Espírito Santo, Brazil
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineSparkles size={16} />
                Drop a thought, spark a convo
              </div>
            </motion.div>

            <motion.div
              className="flex flex-row items-center gap-4"
              variants={fadeInUp}>
              <Button
                onClick={onContactClick}
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full transition-colors">
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
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/50 to-secondary/50 p-8">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Giovanna Prasser - People Operations Consultant"
                className="object-cover rounded-2xl"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-stone-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <div className="flex text-primary items-center space-x-2 text-sm">
                <PiUsers size={16} />
                <span className="text-stone-500">+100 people impacted</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
