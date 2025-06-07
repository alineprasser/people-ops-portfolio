interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h2 className="text-3xl font-light text-stone-800">{title}</h2>
      {description && (
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
