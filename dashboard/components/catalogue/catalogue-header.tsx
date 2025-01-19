import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Bell, User, Plus } from "lucide-react"

export function CatalogueHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">HOME</span>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm">CATALOGUE</span>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-6">CATALOGUE</h1>
      
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search Technician by ID" 
            className="pl-10"
          />
        </div>
        <Button className="bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add new
        </Button>
      </div>
    </div>
  )
} 