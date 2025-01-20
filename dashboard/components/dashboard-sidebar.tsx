"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Custom icons to match the design
const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const CatalogueIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const InventoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16v4H4V6zm0 6h16v4H4v-4zm0 6h16v4H4v-4z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const ReportsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4h16v4H4V4zm0 6h16v2H4v-2zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const sidebarItems = [
  { icon: DashboardIcon, label: "Dashboard", href: "/dashboard" },
  { icon: CatalogueIcon, label: "Catalogue", href: "/catalogue" },
  { icon: InventoryIcon, label: "Inventory", href: "/inventory" },
  { icon: ReportsIcon, label: "Queries", href: "/queries" },
  { icon: SettingsIcon, label: "Settings", href: "/settings" },
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
                <item.icon />
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
        <LogoutIcon />
        <span className="sr-only">Logout</span>
      </Button>
    </div>
  )
}

