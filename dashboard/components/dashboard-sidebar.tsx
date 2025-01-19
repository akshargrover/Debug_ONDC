"use client"

import { LayoutGrid, CreditCard, Database, FileText, Settings, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
  { icon: CreditCard, label: "Catalogue", href: "/catalogue" },
  { icon: Database, label: "Database", href: "/database" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-4 top-4 bottom-4 w-16 flex flex-col justify-between p-3 rounded-2xl shadow-lg" 
         style={{ backgroundColor: 'rgba(15, 83, 215, 1)' }}>
      <div className="space-y-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link href={item.href} key={item.label}>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-12 w-12 rounded-xl text-white hover:bg-white/10",
                  isActive && "bg-white/10"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
              </Button>
            </Link>
          )
        })}
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

