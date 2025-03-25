"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      // Here you would normally send the email to your API
    }
  }

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retro-pink via-retro-purple to-retro-blue" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-blue via-retro-purple to-retro-pink" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-block mb-4">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-retro-yellow" />
              <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-50" />
            </div>
          </div>

          <h2 className="font-pixel text-3xl mb-4">
            Join Our <span className="text-retro-pink">Pixel</span> Community
          </h2>

          <p className="font-retro text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive deals, new releases, and retro anime inspiration.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-retro-green/20 border border-retro-green rounded-lg p-4 pixel-borders-sm"
            >
              <p className="font-pixel text-retro-green">Thanks for subscribing!</p>
              <p className="font-retro mt-2">Check your inbox for a special welcome gift.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="font-retro border-retro-purple focus:border-retro-pink"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-retro-pink hover:bg-retro-purple text-white font-pixel text-sm pixel-borders-sm"
              >
                Subscribe
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="font-retro text-xs text-muted-foreground mt-4">
            By subscribing, you agree to receive marketing emails. No spam, just pixel-perfect content.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

