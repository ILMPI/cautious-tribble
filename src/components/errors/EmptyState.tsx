import { Frown } from 'lucide-react';

type EmptyStateProps = {
  query?: string;
  message?: string;
};

export function EmptyState({
  query,
  message = 'No results found.',
}: EmptyStateProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <Frown className="w-10 h-10 text-muted-foreground mb-2" />
      <p className="text-lg font-medium text-foreground">
        {message}
      </p>
      {query && (
        <p className="text-sm text-muted-foreground mt-1">
          No results for “{query}”
        </p>
      )}
    </div>
  );
}