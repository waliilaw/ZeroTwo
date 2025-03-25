"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background grid with scanlines effect */}
      <div className="absolute inset-0 scanlines">
        <div className="absolute inset-0 bg-gradient-to-b from-retro-purple/20 to-retro-blue/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:pt-32">
          {/* Text content */}
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="z-10">
            <motion.div variants={itemVariants} className="mb-2">
              <span className="inline-block bg-retro-pink text-white font-pixel text-xs px-3 py-1 rounded-sm pixel-borders-sm">
                Premium Collection
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-pixel text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            >
              <span className="text-retro-yellow">Retro</span> Anime <br />
              <span className="text-retro-pink">Stickers</span> & More
            </motion.h1>

            <motion.p variants={itemVariants} className="font-retro text-xl mb-8 max-w-lg text-muted-foreground">
              Elevate your space with our premium collection of anime-inspired stickers, posters, bookmarks, and
              coasters. Each piece is crafted with pixel-perfect precision.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button className="bg-retro-pink hover:bg-retro-purple text-white font-pixel text-sm px-6 py-6 pixel-borders-sm" onClick={() => {router.push('/stickers')}}>
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-retro-cyan text-retro-cyan hover:bg-retro-cyan/20 font-pixel text-sm px-6 py-6 pixel-borders-sm" onClick={() => {router.push('/stickers')}}
              >
                View Bestsellers
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-pixel text-retro-yellow text-2xl">100+</h3>
                <p className="font-retro text-sm text-muted-foreground">Unique Designs</p>
              </div>
              <div className="text-center">
                <h3 className="font-pixel text-retro-pink text-2xl">24h</h3>
                <p className="font-retro text-sm text-muted-foreground">Fast Shipping</p>
              </div>
              <div className="text-center">
                <h3 className="font-pixel text-retro-cyan text-2xl">5★</h3>
                <p className="font-retro text-sm text-muted-foreground">Customer Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative h-[500px] z-10"
          >
            <motion.div variants={imageVariants} className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64">
              <div className="relative w-full h-full transform rotate-[-5deg] pixel-borders bg-retro-yellow/20 rounded-lg overflow-hidden animate-float">
                <Image src="/images/anime-character-1.png" alt="Anime Character" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div variants={imageVariants} className="absolute top-1/4 right-0 w-48 h-48 md:w-64 md:h-64">
              <div
                className="relative w-full h-full transform rotate-[5deg] pixel-borders bg-retro-pink/20 rounded-lg overflow-hidden animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Image src="/images/anime-character-2.png" alt="Anime Character" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div variants={imageVariants} className="absolute bottom-0 left-1/4 w-48 h-48 md:w-64 md:h-64">
              <div
                className="relative w-full h-full transform rotate-[3deg] pixel-borders bg-retro-blue/20 rounded-lg overflow-hidden animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Image src="/images/anime-character-3.png" alt="Anime Character" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-retro-cyan opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-retro-pink opacity-50" />

            {/* Pixel art decorations */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-retro-yellow opacity-20 animate-pulse-glow rounded-full" />
            <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-retro-pink opacity-30 animate-pixel-shift" />
            <div
              className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-retro-cyan opacity-30 animate-pixel-shift"
              style={{ animationDelay: "0.5s" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

