import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, VT323, Silkscreen } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-silkscreen",
})

export const metadata: Metadata = {
  title: "Zero Two",
  description: "Premium anime stickers, posters, bookmarks and coasters with a retro twist",
    generator: '',
    icons:{
      icon: '/favicon.ico'
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pressStart.variable} ${vt323.variable} ${silkscreen.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'