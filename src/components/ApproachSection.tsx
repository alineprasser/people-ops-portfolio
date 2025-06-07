import { PiCoffee, PiHeart, PiUsers } from "react-icons/pi";
import { ApproachCard } from "./ApproachCard";
import { SectionHeader } from "./SectionHeader";

const approaches = [
  {
    icon: PiHeart,
    title: "Human-First",
    description:
      "Behind every policy, process, and program are real people with real lives. I never forget that.",
  },
  {
    icon: PiUsers,
    title: "Collaborative",
    description:
      "The best solutions come from involving the people who'll actually use them. I facilitate, don't dictate.",
  },
  {
    icon: PiCoffee,
    title: "Practical",
    description:
      "Beautiful frameworks mean nothing if they don't work in practice. I build systems that actually get used.",
  },
];

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center flex flex-col gap-12">
          <SectionHeader
            title="How I approach people work"
            description="Every company is different, but great people practices share some common threads."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <ApproachCard
                key={index}
                {...approach}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
