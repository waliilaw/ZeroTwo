'use client'

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Github, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Footer() {

const router = useRouter()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-3 overflow-hidden pixel-borders-sm bg-retro-blue rounded-md">
                <Image
                  src="/images/pixel-character.gif"
                  alt="Zero Two Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-pixel text-lg text-retro-pink">ZERO TWO</h2>
              </div>
            </Link>
            <p className="font-retro text-muted-foreground mb-4">
              Premium retro-themed anime stickers, posters, bookmarks, and coasters for collectors and enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-retro-pink transition-colors">
                <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-retro-pink transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-retro-pink transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-retro-pink transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="font-pixel text-lg mb-4">Shop</h3>
            <ul className="space-y-2 font-retro">
              <li>
                <Link href="/stickers" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Stickers
                </Link>
              </li>
              <li>
                <Link href="/posters" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Posters
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Bookmarks
                </Link>
              </li>
              <li>
                <Link href="/coasters" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Coasters
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-pixel text-lg mb-4">Company</h3>
            <ul className="space-y-2 font-retro">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-retro-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-pixel text-lg mb-4">Stay Updated</h3>
            <p className="font-retro text-muted-foreground mb-4">
              Join our mailing list for the latest updates and exclusive offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-muted rounded-md font-retro text-foreground focus:outline-none focus:ring-2 focus:ring-retro-pink"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-retro-pink hover:bg-retro-purple text-white font-pixel text-sm rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-retro text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Zero Two. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/terms"
                className="font-retro text-sm text-muted-foreground hover:text-retro-pink transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/faq"
                className="font-retro text-sm text-muted-foreground hover:text-retro-pink transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="faq"
                className="font-retro text-sm text-muted-foreground hover:text-retro-pink transition-colors"
              >
                Cookies
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-retro-pink transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

