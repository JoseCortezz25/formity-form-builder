import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

interface SearchProps {
  onSearch: (term: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-[12px] h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search components"
        className="pl-8"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
