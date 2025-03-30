import { Suspense } from 'react';
import UserListServer from '@/components/UserListServer';
import { UserListSkeleton } from '@/components/skeletons/UserListSkeleton';

export default function HomePage() {
  return (
    <main className="px-4 py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Suspense fallback={<UserListSkeleton />}>
          <UserListServer />
        </Suspense>
      </div>
    </main>
  );
}