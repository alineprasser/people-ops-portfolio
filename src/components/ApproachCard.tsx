import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ApproachCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const cardVariants = {
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

const iconVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ApproachCard({
  icon: Icon,
  title,
  description,
}: ApproachCardProps) {
  return (
    <motion.div
      className="text-center flex flex-col gap-4"
      variants={cardVariants}>
      <motion.div
        className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto text-white"
        variants={iconVariants}>
        <Icon size={20} />
      </motion.div>
      <h3 className="text-lg font-medium text-stone-800">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
