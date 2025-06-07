import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ExperienceTimelineItemProps {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  isActive?: boolean;
}

const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const dotVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ExperienceTimelineItem({
  title,
  period,
  company,
  location,
  description,
  isActive = false,
}: ExperienceTimelineItemProps) {
  return (
    <motion.div
      className={cn(
        "border-l-2 pl-8 relative",
        isActive ? "border-secondary" : "border-accent/80"
      )}
      variants={timelineVariants}>
      <motion.div
        className={cn(
          "absolute -left-[9px] top-0 h-4 w-4 rounded-full",
          isActive ? "bg-primary" : "bg-accent"
        )}
        variants={dotVariants}
      />
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-stone-800">{title}</h3>
          <span className="text-xs sm:text-sm text-surface bg-accent px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="flex flex-col sm:flex-row items-start gap-0 sm:items-center sm:gap-2 text-primary font-medium">
          {company}
          <span className="text-secondary text-sm font-medium">{location}</span>
        </p>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}
