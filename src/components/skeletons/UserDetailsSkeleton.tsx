'use client'

import { SkeletonShimmer } from '@/components/ui/skeleton-shimmer'
import { Card } from '@/components/ui/card'

export default function UserDetailsSkeleton() {
  return (
    <main className="max-w-[700px] mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 bg-muted/50 p-4 rounded-xl">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 flex-1">
          <Card className="p-6 flex flex-col items-center justify-center text-center space-y-4">
            <SkeletonShimmer className="w-40 h-40 rounded-full" />
            <div className="space-y-2 w-full items-center">
              <SkeletonShimmer className="h-5 w-3/4 mx-auto" />
              <SkeletonShimmer className="h-4 w-1/2 mx-auto" />
            </div>
          </Card>

          <Card className="p-6 space-y-3">
            <SkeletonShimmer className="h-4 w-2/3" />
            <SkeletonShimmer className="h-4 w-full" />
            <SkeletonShimmer className="h-4 w-5/6" />
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 flex-1">
          <Card className="p-6 space-y-4 flex-1">
            <SkeletonShimmer className="h-5 w-3/4" />
            <SkeletonShimmer className="h-4 w-2/3 mx-auto" />
            <SkeletonShimmer className="h-5 w-4/5 ml-auto" />
          </Card>

          <Card className="p-6 space-y-2 flex-0">
            <SkeletonShimmer className="h-4 w-5/6" />
            <SkeletonShimmer className="h-4 w-4/6" />
            <SkeletonShimmer className="h-4 w-3/6" />
          </Card>
        </div>
      </div>
    </main>
  )
}
