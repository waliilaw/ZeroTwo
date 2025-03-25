"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isBestseller?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isFavorite, setIsFavorite] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      className="card-3d group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: "transform 0.2s ease-out",
      }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-background pixel-borders-sm",
          isHovered ? "shadow-xl" : "shadow-md",
        )}
      >
        {/* Product badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="bg-retro-green text-black font-pixel text-xs px-2 py-1 rounded-sm pixel-borders-sm">
              NEW
            </span>
          )}
          {isBestseller && (
            <span className="bg-retro-yellow text-black font-pixel text-xs px-2 py-1 rounded-sm pixel-borders-sm">
              BEST
            </span>
          )}
        </div>

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm hover:bg-retro-pink/20"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isFavorite ? "fill-retro-pink text-retro-pink" : "text-muted-foreground",
            )}
          />
        </Button>

        {/* Product image */}
        <div className="card-3d-content relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <Button className="bg-retro-pink hover:bg-retro-purple text-white font-pixel text-xs">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="ml-2 border-retro-cyan text-retro-cyan hover:bg-retro-cyan/20"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Product info */}
        <div className="p-4">
          <div className="font-retro text-xs text-retro-cyan mb-1">{category}</div>
          <h3 className="font-pixel text-sm truncate">{name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-silkscreen text-lg text-retro-yellow">${price.toFixed(2)}</p>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={cn("w-3 h-3", star <= 4 ? "text-retro-yellow" : "text-muted-foreground")}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

