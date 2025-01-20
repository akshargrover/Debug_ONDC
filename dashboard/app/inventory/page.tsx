"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from '@/styles/queries.module.css'

export default function InventoryPage() {
  const stats = [
    { label: "Today", value: "14", subtext: "Items" },
    { label: "This Week", value: "200", subtext: "Items" },
    { label: "Last Month", value: "400", subtext: "Items" },
    { label: "Issued", value: "400", subtext: "Items" },
  ]

  const inventoryItems = [
    { name: "Hammer", id: "12 987", category: "Hammer", quantity: "7535", unit: "7535" },
    { name: "22 hammer", id: "25 455", category: "22 hammer", quantity: "5724", unit: "5724" },
    { name: "36 hammer", id: "12 987", category: "36 hammer", quantity: "2775", unit: "2775" },
    { name: "14 key", id: "34 567", category: "14 key", quantity: "2275", unit: "2275" },
    { name: "5 key", id: "12 324", category: "5 key", quantity: "2427", unit: "2427" },
    { name: "10 key", id: "12 456", category: "10 key", quantity: "2578", unit: "2578" },
  ]

  return (
    <div className="flex min-h-screen bg-blue-50/30">
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>HOME</span>
                <span></span>
                <span className="text-foreground">INVENTORY</span>
              </div>
              <h1 className="text-2xl font-bold mt-2">INVENTORY</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search Technician By ID"
                  className="pl-10 w-[300px] rounded-full"
                />
              </div>
              <Bell className="h-5 w-5" />
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`bg-white rounded-3xl p-6 mb-6 ${styles.gradientBorder}`}>
            <h2 className="text-lg font-semibold mb-4">Overall History</h2>
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-sm text-blue-600">{stat.label}</div>
                  <div className="text-2xl font-bold mt-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Table */}
          <div className={`bg-white rounded-3xl p-6 ${styles.gradientBorder}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Today Items</h2>
              <div className="flex gap-2">
                <Button variant="outline">Today</Button>
                <Button variant="outline">Select Date</Button>
                <Button>Download</Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4">Item Name</th>
                    <th className="py-2 px-4">Item ID</th>
                    <th className="py-2 px-4">Category</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Unit</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {inventoryItems.map((item, index) => (
                    <tr key={index} className="backdrop-blur-md bg-white/30">
                      <td className="rounded-l-xl">
                        <div className={styles.inventoryText}>{item.name}</div>
                      </td>
                      <td>
                        <div className={styles.inventoryText}>{item.id}</div>
                      </td>
                      <td>
                        <div className={styles.inventoryText}>{item.category}</div>
                      </td>
                      <td>
                        <div className={styles.inventoryText}>{item.quantity}</div>
                      </td>
                      <td className="rounded-r-xl">
                        <div className={styles.inventoryText}>{item.unit}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 