'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface MasonryGridProps {
  images: string[]
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1)
      else if (window.innerWidth < 1024) setColumns(2)
      else setColumns(3)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const getColumnImages = (columnIndex: number) => {
    return images.filter((_, index) => index % columns === columnIndex)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="space-y-4">
          {getColumnImages(columnIndex).map((image, imageIndex) => (
            <div key={imageIndex} className="relative overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Hostel image ${imageIndex + 1}`}
                width={400}
                height={Math.random() * 200 + 300} // Random height for masonry effect
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
