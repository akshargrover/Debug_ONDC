import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const data = [
  {
    name: "Project Alpha",
    date: "2024-01-15",
    cost: "$1,200",
    status: "Completed",
  },
  {
    name: "Project Beta",
    date: "2024-01-14",
    cost: "$800",
    status: "In Progress",
  },
  {
    name: "Project Gamma",
    date: "2024-01-13",
    cost: "$2,400",
    status: "Pending",
  },
]

export function DashboardTable() {
  return (
    <div className="rounded-xl border bg-white">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-semibold">Recent Transactions</h3>
        <Button variant="link" className="text-sm">
          See All
        </Button>
      </div>
      <Table className="border-collapse [&_tr]:border-b [&_tr]:border-slate-300">
        <TableHeader className="border-b border-slate-300">
          <TableRow>
            <TableHead className="border-r border-slate-300">Name</TableHead>
            <TableHead className="border-r border-slate-300">Date of Sale</TableHead>
            <TableHead className="border-r border-slate-300">Total Cost</TableHead>
            <TableHead className="border-r border-slate-300">Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="border-r border-slate-300">{item.name}</TableCell>
              <TableCell className="border-r border-slate-300">{item.date}</TableCell>
              <TableCell className="border-r border-slate-300">{item.cost}</TableCell>
              <TableCell className="border-r border-slate-300">{item.status}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

