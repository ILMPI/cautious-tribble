'use client'

import { SkeletonShimmer } from '@/components/ui/skeleton-shimmer'
import { Card, CardContent } from '@/components/ui/card'

export function UserCardSkeleton() {
  return (
    <Card
      className="w-full max-w-[320px] h-full p-4 flex flex-col gap-4 bg-muted/50 rounded-xl animate-pulse"
    >
      <div className="flex items-center gap-4">
        <SkeletonShimmer className="w-12 h-12 rounded-full" />
        <div className="flex-1 space-y-1">
          <SkeletonShimmer className="h-4 w-3/4" />
          <SkeletonShimmer className="h-3 w-1/2" />
        </div>
      </div>
      <CardContent className="text-sm space-y-2 px-0 pb-0">
        <SkeletonShimmer className="h-3 w-full" />
        <SkeletonShimmer className="h-3 w-5/6" />
      </CardContent>
    </Card>
  )
}
