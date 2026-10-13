import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  FileQuestion,
  FileText,
  Inbox,
  Search,
  Users,
} from "lucide-react";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
  label?: string;
}

const sizeClasses: Record<IconSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

export function Icon({ icon: IconComponent, size = "md", className, label }: IconProps) {
  return (
    <IconComponent
      className={cn(sizeClasses[size], className)}
      strokeWidth={2}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}

export const EmptyStateIcons = {
  templates: FileQuestion,
  certificates: Award,
  batches: Inbox,
  members: Users,
  results: Search,
  documents: FileText,
} as const satisfies Record<string, LucideIcon>;
