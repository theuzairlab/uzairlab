import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-mono font-medium tracking-[0.2em] text-accent-green uppercase mb-3",
        className
      )}
    >
      {children}
    </p>
  );
}
