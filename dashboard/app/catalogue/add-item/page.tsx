"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AddItemForm } from "@/components/add-item/add-item-form"
import { ItemsTable } from "@/components/add-item/items-table"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddItemPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>HOME</span>
            <span>/</span>
            <span>CATALOGUE</span>
            <span>/</span>
            <span className="text-foreground">ADD ITEM</span>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">ADD ITEM</h1>
            <Button 
              variant="ghost" 
              onClick={() => router.back()}
              className="text-blue-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalogue
            </Button>
          </div>

          <div className="grid grid-cols-[1fr_1.2fr] gap-4">
            <AddItemForm />
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ItemsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 