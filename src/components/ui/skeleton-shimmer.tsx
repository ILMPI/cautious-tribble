import { cn } from '@/lib/utils'

type SkeletonShimmerProps = {
  className?: string
}

export function SkeletonShimmer({ className }: SkeletonShimmerProps) {
  return (
    <div
      className={cn(
        'rounded bg-gray-200 dark:bg-zinc-800 animate-shimmer',
        className
      )}
    />
  )
}
