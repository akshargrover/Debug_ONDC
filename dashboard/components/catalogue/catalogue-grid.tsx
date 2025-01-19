"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Edit3 } from "lucide-react"
import { EditItemModal } from "./edit-item-modal"

interface CatalogueItem {
  id: string
  name: string
  status: 'in-stock' | 'out-of-stock' | 'low-stock'
  category?: string
  quantity?: number
  unit?: string
  deliveryDate?: string
}

// Initial data
const initialItems: CatalogueItem[] = [
  { id: 'ID1', name: 'Product 1', status: 'in-stock' },
  { id: 'ID2', name: 'Product 2', status: 'low-stock' },
  { id: 'ID3', name: 'Product 3', status: 'in-stock' },
  { id: 'ID4', name: 'Product 4', status: 'out-of-stock' },
  { id: 'ID5', name: 'Product 5', status: 'low-stock' },
  { id: 'ID6', name: 'Product 6', status: 'in-stock' },
]

const getStatusColor = (status: CatalogueItem['status']) => {
  switch (status) {
    case 'in-stock':
      return 'text-green-500'
    case 'out-of-stock':
      return 'text-red-500'
    case 'low-stock':
      return 'text-yellow-500'
    default:
      return 'text-gray-500'
  }
}

export function CatalogueGrid() {
  const [catalogueItems, setCatalogueItems] = useState<CatalogueItem[]>(initialItems)
  const [editingItem, setEditingItem] = useState<CatalogueItem | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleUpdateItem = (updatedItem: CatalogueItem) => {
    setCatalogueItems(prevItems =>
      prevItems.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    )
    setIsEditModalOpen(false)
    setEditingItem(null)
  }

  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-6">
          {catalogueItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">ID</p>
                  <p className="font-medium">{item.id}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setEditingItem(item)
                    setIsEditModalOpen(true)
                  }}
                >
                  <Edit3 className="w-4 h-4" />
                  Edit
                </Button>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{item.name}</p>
                <p className={`text-sm ${getStatusColor(item.status)}`}>
                  {item.status.replace('-', ' ')}
                </p>
                {item.category && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Category: {item.category}
                  </p>
                )}
                {item.quantity && (
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity} {item.unit}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <EditItemModal 
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        item={editingItem || undefined}
        onUpdate={handleUpdateItem}
      />
    </>
  )
} 