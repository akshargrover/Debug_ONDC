"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const items = [
  { name: "Hammer", id: "12 987", category: "Hammer", quantity: "7535", unit: "7535" },
  { name: "22 hammer", id: "25 455", category: "22 hammer", quantity: "5724", unit: "5724" },
  { name: "36 hammer", id: "12 987", category: "36 hammer", quantity: "2775", unit: "2775" },
  { name: "14 key", id: "34 587", category: "14 key", quantity: "2275", unit: "2275" },
  { name: "5 key", id: "12 324", category: "5 key", quantity: "2427", unit: "2427" },
  { name: "10 key", id: "12 456", category: "10 key", quantity: "2578", unit: "2578" },
  { name: "23 key", id: "23 546", category: "23 key", quantity: "2757", unit: "2757" },
  { name: "43 key", id: "34 567", category: "43 key", quantity: "3757", unit: "3757" },
  { name: "41 nut", id: "23 456", category: "41 nut", quantity: "2474", unit: "2474" },
]

export function ItemsTable() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Items</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Item ID</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 