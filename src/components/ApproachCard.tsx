import type { IconType } from "react-icons";

interface ApproachCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export function ApproachCard({
  icon: Icon,
  title,
  description,
}: ApproachCardProps) {
  return (
    <div className="text-center flex flex-col gap-4">
      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-medium text-stone-800">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
}
