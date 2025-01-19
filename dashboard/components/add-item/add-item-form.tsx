"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AddItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    category: "",
    quantity: "",
    unit: "",
    deliveryDate: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      id: "",
      category: "",
      quantity: "",
      unit: "",
      deliveryDate: ""
    })
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">New Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm">Item Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter product name"
              className="h-8"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="id" className="text-sm">Item ID</Label>
            <Input
              id="id"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              placeholder="Enter product ID"
              className="h-8"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="category" className="text-sm">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hammer">Hammer</SelectItem>
                <SelectItem value="key">Key</SelectItem>
                <SelectItem value="nut">Nut</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="quantity" className="text-sm">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="Enter quantity"
                className="h-8"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="unit" className="text-sm">Unit</Label>
              <Input
                id="unit"
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                placeholder="Enter unit"
                className="h-8"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="deliveryDate" className="text-sm">Date of delivery</Label>
            <Input
              id="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              className="h-8"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded-md p-2">
              <div className="flex flex-col items-center justify-center h-16 border-2 border-dashed rounded-md">
                <Cloud className="h-6 w-6 text-gray-400" />
                <Button type="button" variant="ghost" size="sm" className="h-6 text-xs mt-1">
                  Choose Image
                </Button>
              </div>
            </div>
            <div className="border rounded-md p-2">
              <div className="flex flex-col items-center justify-center h-16 border-2 border-dashed rounded-md">
                <Cloud className="h-6 w-6 text-gray-400" />
                <Button type="button" variant="ghost" size="sm" className="h-6 text-xs mt-1">
                  Choose Image
                </Button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-8 mt-2">
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 