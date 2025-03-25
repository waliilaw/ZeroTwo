"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Stickers",
    description: "Vibrant anime stickers for any surface",
    image: "/images/anime-character-1.png",
    color: "bg-retro-pink",
    link: "/stickers",
  },
  {
    name: "Posters",
    description: "High-quality anime wall art",
    image: "/images/anime-character-2.png",
    color: "bg-retro-blue",
    link: "/posters",
  },
  {
    name: "Bookmarks",
    description: "Stylish bookmarks for anime fans",
    image: "/images/anime-character-3.png",
    color: "bg-retro-yellow",
    link: "/bookmarks",
  },
  {
    name: "Coasters",
    description: "Protect surfaces with anime style",
    image: "/placeholder.svg?height=400&width=400",
    color: "bg-retro-green",
    link: "/coasters",
  },
]

export default function CategoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-3xl mb-4">
            <span className="text-retro-cyan">Browse</span> Categories
          </h2>
          <p className="font-retro text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our full range of anime-inspired products, each with a unique retro twist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Link href={category.link} className="block group">
                <div className="relative overflow-hidden rounded-lg pixel-borders-sm bg-background transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className={`absolute inset-0 ${category.color} opacity-20`} />

                  <div className="p-6">
                    <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full pixel-borders-sm bg-background">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="font-pixel text-xl mb-2">{category.name}</h3>
                    <p className="font-retro text-muted-foreground mb-4">{category.description}</p>

                    <div className="flex items-center font-pixel text-sm text-retro-cyan group-hover:text-retro-pink transition-colors">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

