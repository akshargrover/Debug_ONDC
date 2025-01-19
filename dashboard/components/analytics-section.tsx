import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface AnalyticsCardProps {
  title: string
  amount: string
  change: number
}

function AnalyticsCard({ title, amount, change }: AnalyticsCardProps) {
  const isPositive = change >= 0
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {isPositive ? (
          <ArrowUpRight className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownRight className="h-4 w-4 text-red-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </p>
      </CardContent>
    </Card>
  )
}

export function AnalyticsSection() {
  return (
    <div className="grid gap-4">
      <AnalyticsCard title="Total Revenue" amount="$632,000" change={12.5} />
      <AnalyticsCard title="Total Profit" amount="$592,000" change={-2.5} />
      <AnalyticsCard title="Total Savings" amount="$282,000" change={8.2} />
    </div>
  )
}

