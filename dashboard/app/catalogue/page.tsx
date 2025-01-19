import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { CatalogueHeader } from "@/components/catalogue/catalogue-header"
import { CatalogueGrid } from "@/components/catalogue/catalogue-grid"

export default function CataloguePage() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'rgba(220, 232, 255, 1)' }}>
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          <CatalogueHeader />
          <CatalogueGrid />
        </div>
      </div>
    </div>
  )
} 