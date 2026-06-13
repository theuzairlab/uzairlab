import type { ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; textClass: string }
> = {
  LIVE: {
    label: "LIVE IN PROD",
    dotClass: "bg-accent-green pulse-dot",
    textClass: "text-accent-green",
  },
  "IN DEV": {
    label: "IN DEVELOPMENT",
    dotClass: "bg-amber-400",
    textClass: "text-amber-400",
  },
  DELIVERED: {
    label: "DELIVERED",
    dotClass: "bg-accent-green",
    textClass: "text-accent-green",
  },
  MAINTAINENCE: {
    label: "MAINTAINENCE",
    dotClass: "bg-yellow-400",
    textClass: "text-yellow-400",
  },
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-card-surface border border-surface text-xs font-mono",
        className
      )}
    >
      <span className={cn("w-2 h-2 rounded-full", config.dotClass)} />
      <span className={config.textClass}>{config.label}</span>
    </span>
  );
}
