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
        "flex container mx-auto px-4 lg:px-20 xl:px-48",
        className
      )}>
      {children}
    </div>
  );
}
