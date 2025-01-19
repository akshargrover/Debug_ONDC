import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AddItemForm } from "@/components/add-item/add-item-form"
import { ItemsTable } from "@/components/add-item/items-table"
import { BackgroundWrapper } from "@/components/shared/background-wrapper"

export default function AddItemPage() {
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
          
          <h1 className="text-2xl font-bold mb-8">ADD ITEM</h1>

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