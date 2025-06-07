import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex container mx-auto px-2 lg:px-20 xl:px-48",
        className
      )}>
      {children}
    </div>
  );
}
