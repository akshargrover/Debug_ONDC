import { LayoutGrid, CreditCard, Database, FileText, Settings, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: CreditCard, label: "Cards" },
  { icon: Database, label: "Database" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
]

export function DashboardSidebar() {
  return (
    <div className="fixed left-4 top-4 bottom-4 w-16 flex flex-col justify-between p-3 rounded-2xl shadow-lg" 
         style={{ backgroundColor: 'rgba(15, 83, 215, 1)' }}>
      <div className="space-y-4">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-xl text-white hover:bg-white/10"
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-xl text-white hover:bg-white/10"
      >
        <LogOut className="h-5 w-5" />
        <span className="sr-only">Logout</span>
      </Button>
    </div>
  )
}

