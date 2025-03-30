import { UserCardSkeleton } from '@/components/skeletons/UserCardSkeleton';
import { SearchBarSkeleton } from '@/components/skeletons/SearchBarSkeleton';

export function UserListSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <SearchBarSkeleton />
      <div className="flex flex-wrap justify-center gap-6">
        {[...Array(10)].map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
