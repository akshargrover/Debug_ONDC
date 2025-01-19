import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, Download, PieChart } from 'lucide-react'

interface MetricCardProps {
  title: string
  amount: string
  icon: React.ReactNode
}

function MetricCard({ title, amount, icon }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="rounded-lg bg-primary/10 p-2 text-primary">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-xl font-bold">{amount}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

export function DashboardCards() {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Sales"
        amount="$508.6"
        icon={<DollarSign className="h-4 w-4" />}
      />
      <MetricCard
        title="Profit"
        amount="$508.6"
        icon={<TrendingUp className="h-4 w-4" />}
      />
      <MetricCard
        title="Earning Report"
        amount="$508.6"
        icon={<PieChart className="h-4 w-4" />}
      />
      <MetricCard
        title="Withdraw"
        amount="$508.6"
        icon={<Download className="h-4 w-4" />}
      />
    </div>
  )
}

