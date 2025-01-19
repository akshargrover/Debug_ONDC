import { Card } from "@/components/ui/card"
import Image from "next/image"

export function CardsDisplay() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/gradient-card-1.png`}
          alt="Credit card"
          width={150}
          height={90}
          className="h-[90px] w-full object-cover"
        />
      </Card>
      <Card className="overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/gradient-card-2.png`}
          alt="Credit card"
          width={150}
          height={90}
          className="h-[90px] w-full object-cover"
        />
      </Card>
    </div>
  )
}

