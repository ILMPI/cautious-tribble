export function SearchBarSkeleton() {
    return (
      <div className="w-full max-w-full sm:max-w-[672px] mx-auto px-4 sm:px-0 mb-4">
        <div className="relative w-full animate-pulse">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-muted-foreground rounded-full w-5 h-5" />
          <div className="h-9 rounded-full bg-muted w-full" />
        </div>
      </div>
    );
  }
  