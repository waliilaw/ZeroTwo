"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Package, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 scanlines">
          <div className="absolute inset-0 bg-gradient-to-b from-retro-purple/20 to-retro-blue/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-pixel text-4xl md:text-5xl mb-4"
            >
              About <span className="text-retro-pink">Zero Two</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-retro text-xl text-muted-foreground mb-8"
            >
              Premium anime stickers, posters, bookmarks, and coasters with a retro twist
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-pink via-retro-purple to-retro-blue" />
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-pixel text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 font-retro text-lg text-muted-foreground">
                <p>
                  Zero Two was born from a shared passion for anime and retro aesthetics. What started as a small side
                  project between friends in 2020 has grown into a thriving online store dedicated to bringing unique,
                  high-quality anime merchandise to fans worldwide.
                </p>
                <p>
                  Our founders, Mei and Akira, met at an anime convention and bonded over their love for both classic
                  anime series and pixel art. They noticed a gap in the market for merchandise that combined these two
                  passions, and Zero Two was created to fill that void.
                </p>
                <p>
                  The name "Zero Two" is inspired by both the iconic character and the binary nature of pixel art - a
                  perfect representation of our blend of anime culture and retro digital aesthetics.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full pixel-borders bg-retro-pink/10 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Zero Two Team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-retro-cyan opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-retro-pink opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-pixel text-3xl mb-6">Our Mission</h2>
            <p className="font-retro text-xl text-muted-foreground">
              To create premium quality anime merchandise that celebrates both the art of anime and the nostalgic charm
              of retro pixel aesthetics, bringing joy to fans and collectors worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-lg pixel-borders-sm"
            >
              <div className="w-12 h-12 bg-retro-pink/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-retro-pink h-6 w-6" />
              </div>
              <h3 className="font-pixel text-xl mb-3">Passion</h3>
              <p className="font-retro text-muted-foreground">
                We're anime fans first and foremost. Every product we create comes from a place of genuine love for the
                medium and its unique artistic style.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg pixel-borders-sm"
            >
              <div className="w-12 h-12 bg-retro-blue/20 rounded-full flex items-center justify-center mb-4">
                <Package className="text-retro-blue h-6 w-6" />
              </div>
              <h3 className="font-pixel text-xl mb-3">Quality</h3>
              <p className="font-retro text-muted-foreground">
                We never compromise on materials or production. From our premium vinyl stickers to our high-resolution
                posters, quality is at the heart of everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg pixel-borders-sm"
            >
              <div className="w-12 h-12 bg-retro-yellow/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-retro-yellow h-6 w-6" />
              </div>
              <h3 className="font-pixel text-xl mb-3">Innovation</h3>
              <p className="font-retro text-muted-foreground">
                We're constantly exploring new designs, products, and techniques to bring fresh and exciting merchandise
                to our community of anime enthusiasts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-pixel text-3xl mb-6">Our Process</h2>
            <p className="font-retro text-xl text-muted-foreground">
              From concept to delivery, we ensure every step of our process maintains the highest standards of quality
              and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-retro-pink rounded-full opacity-20 animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="font-pixel text-2xl text-retro-pink">01</span>
                </div>
              </div>
              <h3 className="font-pixel text-lg mb-2">Design</h3>
              <p className="font-retro text-sm text-muted-foreground">
                Our talented artists create original designs inspired by anime and pixel art aesthetics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-retro-blue rounded-full opacity-20 animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="font-pixel text-2xl text-retro-blue">02</span>
                </div>
              </div>
              <h3 className="font-pixel text-lg mb-2">Production</h3>
              <p className="font-retro text-sm text-muted-foreground">
                We use premium materials and advanced printing techniques to bring our designs to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-retro-yellow rounded-full opacity-20 animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="font-pixel text-2xl text-retro-yellow">03</span>
                </div>
              </div>
              <h3 className="font-pixel text-lg mb-2">Quality Check</h3>
              <p className="font-retro text-sm text-muted-foreground">
                Every item is carefully inspected to ensure it meets our high standards before packaging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-retro-green rounded-full opacity-20 animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="font-pixel text-2xl text-retro-green">04</span>
                </div>
              </div>
              <h3 className="font-pixel text-lg mb-2">Delivery</h3>
              <p className="font-retro text-sm text-muted-foreground">
                We carefully package and ship your items to ensure they arrive in perfect condition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-pixel text-3xl mb-6">Meet Our Team</h2>
            <p className="font-retro text-xl text-muted-foreground">
              The passionate anime fans and pixel art enthusiasts behind Zero Two.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden pixel-borders-sm">
                <Image src="/placeholder.svg?height=128&width=128" alt="Mei - Founder" fill className="object-cover" />
              </div>
              <h3 className="font-pixel text-lg mb-1">Mei Tanaka</h3>
              <p className="font-retro text-retro-pink mb-2">Founder & Artist</p>
              <p className="font-retro text-sm text-muted-foreground">
                Anime enthusiast with a background in digital art and design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden pixel-borders-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Akira - Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-pixel text-lg mb-1">Akira Yamamoto</h3>
              <p className="font-retro text-retro-blue mb-2">Co-Founder & Developer</p>
              <p className="font-retro text-sm text-muted-foreground">
                Web developer with a passion for retro gaming and pixel art.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden pixel-borders-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Yuki - Designer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-pixel text-lg mb-1">Yuki Nakamura</h3>
              <p className="font-retro text-retro-yellow mb-2">Lead Designer</p>
              <p className="font-retro text-sm text-muted-foreground">
                Illustrator specializing in anime-inspired character design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden pixel-borders-sm">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Hiro - Marketing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-pixel text-lg mb-1">Hiro Suzuki</h3>
              <p className="font-retro text-retro-green mb-2">Marketing Manager</p>
              <p className="font-retro text-sm text-muted-foreground">
                Social media expert and longtime anime convention attendee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-retro-pink/20 to-retro-purple/20 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto pixel-borders-sm"
          >
            <h2 className="font-pixel text-3xl mb-4">Join Our Community</h2>
            <p className="font-retro text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with fellow anime enthusiasts, get exclusive discounts, and be the first to know about new
              releases and limited edition items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-retro-pink hover:bg-retro-purple text-white font-pixel text-sm px-6 py-6 pixel-borders-sm">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-retro-cyan text-retro-cyan hover:bg-retro-cyan/20 font-pixel text-sm px-6 py-6 pixel-borders-sm"
                >
                  Contact Us
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

