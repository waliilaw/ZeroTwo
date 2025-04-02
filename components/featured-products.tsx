"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProductCard from "@/components/product-card"

const products = [
  {
    id: "1",
    name: "Zenitsu Thunder Sticker",
    price: 4.99,
    image: "/images/anime-character-1.png",
    category: "Stickers",
    isNew: true,
  },
  {
    id: "2",
    name: "Super Saiyan Blue Vegeta",
    price: 5.99,
    image: "/images/anime-character-2.png",
    category: "Stickers",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Happy Blue Hair Girl",
    price: 4.49,
    image: "/images/anime-character-3.png",
    category: "Stickers",
  },

]

export default function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-3xl mb-4">
            <span className="text-retro-pink">Featured</span> Products
          </h2>
          <p className="font-retro text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our most popular anime stickers and collectibles, perfect for decorating your laptop, water
            bottle, or room.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>              
      </div>
    </section>
  )
}

