import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { CatalogueHeader } from "@/components/catalogue/catalogue-header"
import { CatalogueGrid } from "@/components/catalogue/catalogue-grid"
import { BackgroundWrapper } from "@/components/shared/background-wrapper"
export default function CataloguePage() {
  return (
    <div className="flex min-h-screen">
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