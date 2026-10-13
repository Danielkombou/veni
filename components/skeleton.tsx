import { cn } from "@/lib/utils";
import { Skeleton as UiSkeleton } from "@/components/ui/skeleton";

interface SkeletonBlockProps {
  className?: string;
  lines?: number;
}

export function SkeletonText({ className, lines = 1 }: SkeletonBlockProps) {
  if (lines <= 1) {
    return <UiSkeleton className={cn("h-4 w-full", className)} />;
  }
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }, (_, index) => (
        <UiSkeleton key={index} className={index === lines - 1 ? "h-4 w-3/4" : "h-4 w-full"} />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4 rounded-lg border border-border bg-card p-4", className)}>
      <UiSkeleton className="h-10 w-10 rounded-full" />
      <SkeletonText lines={2} />
      <div className="flex gap-2 pt-2">
        <UiSkeleton className="h-8 w-20 rounded-lg" />
        <UiSkeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}

export function SkeletonListItem({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 p-4", className)}>
      <UiSkeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <UiSkeleton className="h-4 w-1/3" />
        <UiSkeleton className="h-4 w-1/4" />
      </div>
      <UiSkeleton className="h-8 w-24 rounded-lg" />
    </div>
  );
}

export { UiSkeleton as Skeleton };
