import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchInput() {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        placeholder="Search here..."
        className="pl-10 bg-white/90 border-none h-10"
      />
    </div>
  )
} 