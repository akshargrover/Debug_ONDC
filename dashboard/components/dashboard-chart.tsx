"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
}

const labels = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]
const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [30, 40, 35, 50, 45, 40],
      borderColor: "rgb(99, 102, 241)",
      tension: 0.4,
    },
    {
      label: "Profit",
      data: [20, 35, 45, 30, 40, 35],
      borderColor: "rgb(139, 92, 246)",
      tension: 0.4,
    },
    {
      label: "Costs",
      data: [25, 30, 40, 35, 45, 30],
      borderColor: "rgb(34, 197, 94)",
      tension: 0.4,
    },
  ],
}

export function DashboardChart() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="font-semibold">Total Earnings</h3>
      <div className="h-[200px]">
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

