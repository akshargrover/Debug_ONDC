import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardCards } from "@/components/dashboard-cards"
import { DashboardChart } from "@/components/dashboard-chart"
import { DashboardTable } from "@/components/dashboard-table"
import { CardsDisplay } from "@/components/cards-display"
import { AnalyticsSection } from "@/components/analytics-section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <CalendarDays className="h-4 w-4" />
                19 Jan - 20 Feb
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <DashboardCards />
              <DashboardChart />
              <DashboardTable />
            </div>
            <div className="space-y-6">
              <CardsDisplay />
              <AnalyticsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

