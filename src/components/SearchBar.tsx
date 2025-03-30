import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (val: string) => void;
}) {
  return (
    <div className="w-full max-w-full sm:max-w-[672px] mx-auto px-4 sm:px-0">
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="w-full pl-12 py-1.5 text-sm border border-border rounded-full bg-background text-foreground focus-visible:ring-1 focus-visible:ring-ring transition-all duration-200 ease-in-out"
        />
      </div>
    </div>
  );
}
