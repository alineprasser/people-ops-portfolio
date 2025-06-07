import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

const storyParagraphs = [
  "I didn't set out to become a \"People Ops person\"—it kind of found me. After watching too many talented friends leave jobs because of poor management or toxic cultures, I realized that the way we treat people at work isn't just an HR issue—it's a human issue.",
  "What started as helping a startup friend with their first employee handbook turned into a decade-long mission to prove that taking care of people isn't just the right thing to do—it's the smart thing to do. I've seen firsthand how the right culture, systems, and support can transform not just businesses, but lives.",
  "Today, I work with founders and leaders who believe that their people are their greatest asset, not just their biggest expense. Together, we build workplaces where everyone can do their best work and feel genuinely valued.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StorySection() {
  return (
    <section
      id="story"
      className="py-20 bg-white">
      <div className="max-w-4xl flex flex-col gap-8 items-center mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <SectionHeader title="A little about my journey" />
        </motion.div>

        <motion.div
          className="flex flex-col text-stone-600 gap-3 prose prose-lg prose-stone mx-auto text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          {storyParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="leading-relaxed"
              variants={paragraphVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
