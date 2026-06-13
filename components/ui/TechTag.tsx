import { cn } from "@/lib/utils";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-mono rounded-full bg-card-surface border border-surface text-muted-custom",
        className
      )}
    >
      {children}
    </span>
  );
}
