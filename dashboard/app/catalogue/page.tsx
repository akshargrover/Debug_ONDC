"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { CatalogueGrid } from "@/components/catalogue/catalogue-grid"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CataloguePage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>HOME</span>
            <span>/</span>
            <span className="text-foreground">CATALOGUE</span>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">CATALOGUE</h1>
            <Button 
              onClick={() => router.push('/add-item')}
              className="bg-blue-600"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Page
            </Button>
          </div>

          <CatalogueGrid />
        </div>
      </div>
    </div>
  )
} 