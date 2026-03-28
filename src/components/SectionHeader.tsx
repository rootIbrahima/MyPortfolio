import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      {/* Label avec ligne accent horizontale */}
      {label && (
        <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
          <span className="h-px w-6 bg-primary rounded-full shrink-0" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {label}
          </p>
        </div>
      )}

      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
