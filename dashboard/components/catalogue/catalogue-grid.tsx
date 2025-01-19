import { Button } from "@/components/ui/button"
import { Edit3 } from "lucide-react"

interface CatalogueItem {
  id: string
  name: string
  status: 'in-stock' | 'out-of-stock' | 'low-stock'
}

const catalogueItems: CatalogueItem[] = [
  { id: 'ID', name: 'Name', status: 'in-stock' },
  { id: 'ID', name: 'Name', status: 'low-stock' },
  { id: 'ID', name: 'Name', status: 'in-stock' },
  { id: 'ID', name: 'Name', status: 'out-of-stock' },
  { id: 'ID', name: 'Name', status: 'low-stock' },
  { id: 'ID', name: 'Name', status: 'in-stock' },
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
  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-6">
        {catalogueItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-muted-foreground">ID</p>
                <p className="font-medium">{item.id}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Edit3 className="w-4 h-4" />
                Edit
              </Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className={`font-medium ${getStatusColor(item.status)}`}>
                {item.status.replace('-', ' ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 