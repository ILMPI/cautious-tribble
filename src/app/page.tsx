'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { fetchUsers } from '@/services/userService';
import { User } from '@/types/user';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Building2 } from 'lucide-react';
import { toast } from 'sonner';
import { ErrorNotice } from '@/components/ErrorNotice';
import { UserCardSkeleton } from '@/components/skeletons/UserCardSkeleton';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load users. Please try again later.');
        toast.error('Could not fetch users ⚠️');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <main className="px-4 py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {error && <ErrorNotice message={error} />}

        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            {[...Array(6)].map((_, i) => (
              <UserCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {users.map((user) => (
              <Link
                key={user.id}
                href={`/user/${user.id}`}
                className="w-full sm:w-[calc(50%-0.75rem)] max-w-[320px] no-underline focus:outline-none"
              >
                <Card
                  className={`
                    h-full p-4 flex flex-col gap-4 cursor-pointer 
                    bg-card dark:bg-muted/50 rounded-xl
                    hover:bg-accent dark:hover:bg-muted/80
                    transition-all duration-200 shadow-sm`}
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" alt={user.name ?? 'User'} />
                      <AvatarFallback className="bg-muted text-muted-foreground dark:text-white text-lg">
                        {user.name?.charAt(0) ?? 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {user.name ?? 'Unknown'}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        @{user.username ?? 'anonymous'}
                      </p>
                    </div>
                  </div>

                  <CardContent className="text-sm space-y-2 px-0 pb-0">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 text-foreground" />
                      <span>{user.email ?? 'No email'}</span>
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4 text-foreground" />
                      <span>{user.company?.name ?? 'No company'}</span>
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
