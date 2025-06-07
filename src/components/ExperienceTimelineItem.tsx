import { cn } from "@/lib/utils";

interface ExperienceTimelineItemProps {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  isActive?: boolean;
}

export function ExperienceTimelineItem({
  title,
  period,
  company,
  location,
  description,
  isActive = false,
}: ExperienceTimelineItemProps) {
  return (
    <div
      className={cn(
        "border-l-2 pl-8 relative",
        isActive ? "border-secondary" : "border-accent/80"
      )}>
      <div
        className={cn(
          "absolute -left-[9px] top-0 h-4 w-4 rounded-full",
          isActive ? "bg-primary" : "bg-accent"
        )}
      />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-stone-800">{title}</h3>
          <span className="text-sm text-surface bg-accent px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="flex gap-2 items-center text-primary font-medium">
          {company}
          <span className="text-secondary text-sm font-medium">{location}</span>
        </p>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
