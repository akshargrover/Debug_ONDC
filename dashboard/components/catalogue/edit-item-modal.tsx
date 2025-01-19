"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cloud } from "lucide-react"

interface EditItemModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpdate: (item: any) => void
  item?: {
    id: string
    name: string
    status: 'in-stock' | 'out-of-stock' | 'low-stock'
    category?: string
    quantity?: number
    unit?: string
    deliveryDate?: string
  }
}

export function EditItemModal({ open, onOpenChange, item, onUpdate }: EditItemModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    status: "in-stock" as const,
    category: "",
    quantity: "",
    unit: "",
    deliveryDate: ""
  })

  // Update form data when item changes
  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        id: item.id || "",
        status: item.status || "in-stock",
        category: item.category || "",
        quantity: item.quantity?.toString() || "",
        unit: item.unit || "",
        deliveryDate: item.deliveryDate || ""
      })
    }
  }, [item])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate({
      ...formData,
      quantity: formData.quantity ? Number(formData.quantity) : undefined
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[360px] p-4">
        <DialogHeader>
          <DialogTitle className="text-lg">Edit Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm">Item Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter product name"
              className="h-8 text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="id" className="text-sm">Item ID</Label>
            <Input
              id="id"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              placeholder="Enter product ID"
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="category" className="text-sm">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
                <SelectItem value="category3">Category 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="quantity" className="text-sm">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="Enter quantity"
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="unit" className="text-sm">Unit</Label>
            <Input
              id="unit"
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              placeholder="Enter unit"
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="deliveryDate" className="text-sm">Date of delivery</Label>
            <Input
              id="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              className="h-8 text-sm"
            />
          </div>

          <div className="border rounded-md p-3 space-y-1">
            <Label className="text-sm">Product Image</Label>
            <div className="flex items-center justify-center h-24 border-2 border-dashed rounded-md">
              <div className="text-center">
                <Cloud className="mx-auto h-8 w-8 text-gray-400" />
                <Button type="button" variant="secondary" size="sm" className="mt-1 text-xs h-7">
                  Change Image
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="h-8 text-sm"
            >
              Discard
            </Button>
            <Button type="submit" className="h-8 text-sm">
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 