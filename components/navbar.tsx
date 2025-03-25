"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingCart, Menu, X, Heart, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Stickers", path: "/stickers" },
  { name: "Posters", path: "/posters" },
  { name: "Bookmarks", path: "/bookmarks" },
  { name: "Coasters", path: "/coasters" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
]

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ",
        scrolled ? "py-2 bg-background/90 backdrop-blur-md" : "py-4",
      )}
    >
      <div className="container mx-auto px-4 ">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <Link 
  href="/" 
  onClick={(e) => {
    e.preventDefault()
    router.push('/')
  }}
  className="flex items-center z-20"
>
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
            >
              <div className="relative w-12 h-12 mr-3 overflow-hidden pixel-borders-sm bg-retro-blue rounded-md">
                <Image
                  src="/images/pixel-character.gif"
                  alt="Zero Two Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div>
              <h1 className="font-pixel text-lg md:text-xl text-retro-pink glitch" data-text="ZERO TWO">
                ZERO TWO
              </h1>
              <p className="font-retro text-xs text-retro-cyan">Retro Anime Stickers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} pathname={pathname} />
            ))}
          </div>

          {/* Right side icons */}
          <div className="hidden lg:flex items-center space-x-2 z-20">
            <Button variant="ghost" size="icon" className="relative group">
              <Search className="h-5 w-5 text-retro-yellow group-hover:text-retro-pink transition-colors" />
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <Heart className="h-5 w-5 text-retro-yellow group-hover:text-retro-pink transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-retro-pink text-white rounded-full text-[10px] flex items-center justify-center font-pixel">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <User className="h-5 w-5 text-retro-yellow group-hover:text-retro-pink transition-colors" />
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart className="h-5 w-5 text-retro-yellow group-hover:text-retro-pink transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-retro-pink text-white rounded-full text-[10px] flex items-center justify-center font-pixel">
                3
              </span>
            </Button>
            <Button className="bg-retro-pink hover:bg-retro-purple text-white font-pixel text-xs ml-4 pixel-borders-sm">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2 z-20">
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart className="h-5 w-5 text-retro-yellow group-hover:text-retro-pink transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-retro-pink text-white rounded-full text-[10px] flex items-center justify-center font-pixel">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-retro-yellow hover:text-retro-pink"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-background/95 backdrop-blur-md z-10 lg:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col items-center space-y-6 py-8">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * navItems.indexOf(item) }}
                      >
                       <Link
  href={item.path}
  onClick={(e) => {
    e.preventDefault()
    router.push(item.path)
    setIsOpen(false)
  }}
  className={cn(
    "font-pixel text-xl px-4 py-2 relative",
    pathname === item.path ? "text-retro-pink" : "text-foreground hover:text-retro-yellow",
  )}
>
  {item.name}
  {pathname === item.path && (
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1 bg-retro-pink"
      layoutId="underline"
    />
  )}
</Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 flex space-x-4">
                    <Button variant="ghost" size="icon" className="text-retro-yellow">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-retro-yellow">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-retro-yellow">
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button className="mt-8 bg-retro-pink hover:bg-retro-purple text-white font-pixel text-xs pixel-borders-sm">
                    Sign In
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Animated pixel line under navbar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-retro-pink overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 25%, hsl(var(--retro-yellow)) 25%, hsl(var(--retro-yellow)) 50%, transparent 50%, transparent 75%, hsl(var(--retro-yellow)) 75%)",
            backgroundSize: "20px 100%",
          }}
          animate={{ x: [0, 20] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.5,
            ease: "easeInOut"  // Changed from 'ease-in-out' to 'easeInOut'
          }}
        />
      </div>
    </header>
  )
}

function NavLink({ item, pathname }: { item: { name: string; path: string }; pathname: string }) {
  const router = useRouter()
  
  return (
    <Link
      href={item.path}
      onClick={(e) => {
        e.preventDefault()
        router.push(item.path)
      }}
      className={cn(
        "relative px-3 py-2 font-pixel text-sm transition-colors",
        pathname === item.path ? "text-retro-pink" : "text-foreground hover:text-retro-yellow",
      )}
    >
      {item.name}
      {pathname === item.path && (
        <motion.div className="absolute -bottom-2 left-0 w-full h-1 bg-retro-pink" layoutId="navbar-underline" />
      )}
    </Link>
  )
}

