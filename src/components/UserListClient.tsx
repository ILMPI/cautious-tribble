'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Building2 } from 'lucide-react';
import { User } from '@/types/user';
import { SearchBar } from './SearchBar';
import { EmptyState } from './errors/EmptyState';
import { AnimatePresence, motion } from 'framer-motion';

export function UserList({ users }: { users: User[] }) {
  const [query, setQuery] = useState('');

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <SearchBar query={query} setQuery={setQuery} />

      <div className="flex flex-wrap justify-center gap-6">

        {filtered.length === 0 ? (
                <AnimatePresence mode="wait">
              <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <EmptyState query={query} />
            </motion.div>
            </AnimatePresence>
        ): (
        filtered.map((user) => (
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
        )))}
      </div>
    </div>
  );
}
