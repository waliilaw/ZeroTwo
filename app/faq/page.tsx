"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, HelpCircle, Search, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// FAQ data
const faqData = {
  general: [
    {
      question: "What is Zero Two?",
      answer:
        "Zero Two is an online store specializing in premium anime-inspired merchandise with a retro pixel art twist. We offer stickers, posters, bookmarks, coasters, and more, all designed with a unique aesthetic that blends anime culture with retro digital art.",
    },
    {
      question: "Are your products officially licensed?",
      answer:
        "Our original designs are inspired by anime culture but are not officially licensed merchandise. We create unique artwork that captures the spirit of anime while offering our own creative interpretation through a retro pixel art lens.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We ship to most countries worldwide. International shipping times and costs vary depending on the destination. You can see the exact shipping costs during checkout before completing your purchase.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team by emailing support@zerotwo.com or by using the contact form on our Contact page. We aim to respond to all inquiries within 24 hours during business days.",
    },
  ],
  orders: [
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to view your order status and tracking details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All payments are securely processed and your information is never stored on our servers.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can modify or cancel your order within 2 hours of placing it. After that, our fulfillment process begins and changes cannot be made. Please contact customer support immediately if you need to make changes.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping within the US takes 3-5 business days. International shipping typically takes 7-14 business days, depending on the destination. We also offer expedited shipping options at checkout.",
    },
  ],
  products: [
    {
      question: "What materials are your stickers made from?",
      answer:
        "Our stickers are made from premium vinyl with a durable, waterproof finish. They're perfect for laptops, water bottles, notebooks, and more. The vinyl material ensures they're resistant to scratches, water, and sunlight.",
    },
    {
      question: "Are your posters framed?",
      answer:
        "Our posters come unframed by default, allowing you to choose a frame that matches your decor. We use high-quality paper with vibrant inks that resist fading. We do offer framing options at an additional cost during checkout.",
    },
    {
      question: "How big are your bookmarks?",
      answer:
        "Our standard bookmarks measure 2 x 6 inches and are printed on premium cardstock with a laminated finish for durability. They feature our unique anime-inspired pixel art designs on both sides.",
    },
    {
      question: "Are your coasters waterproof?",
      answer:
        "Yes, all our coasters are made with waterproof materials. They feature a cork bottom to protect surfaces and a durable top layer with our anime-inspired designs. They're easy to clean and built to last.",
    },
  ],
  returns: [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of delivery for unused items in their original packaging. Please contact our support team to initiate a return. Once we receive and inspect the returned items, we'll process your refund.",
    },
    {
      question: "What if my order arrives damaged?",
      answer:
        "If your order arrives damaged, please take photos and contact us within 7 days of delivery. We'll arrange a replacement or refund at no additional cost to you. Your satisfaction is our priority!",
    },
    {
      question: "Do you offer exchanges?",
      answer:
        "Yes, we offer exchanges for items of equal value within 30 days of delivery. For items of different values, we'll refund the original purchase and you can place a new order for the desired item.",
    },
    {
      question: "How do I return an item?",
      answer:
        "To return an item, please email support@zerotwo.com with your order number and reason for return. We'll provide a return shipping label and instructions. Once we receive the item, we'll process your refund within 5-7 business days.",
    },
  ],
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<{ category: string; question: string; answer: string }[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results: { category: string; question: string; answer: string }[] = []

    Object.entries(faqData).forEach(([category, questions]) => {
      questions.forEach((item) => {
        if (item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)) {
          results.push({
            category,
            question: item.question,
            answer: item.answer,
          })
        }
      })
    })

    setSearchResults(results)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 scanlines">
          <div className="absolute inset-0 bg-gradient-to-b from-retro-yellow/20 to-retro-orange/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-pixel text-4xl md:text-5xl mb-4"
            >
              Frequently Asked <span className="text-retro-yellow">Questions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-retro text-xl text-muted-foreground mb-8"
            >
              Find answers to common questions about our products, orders, shipping, and more.
            </motion.p>

            {/* Search bar */}
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-xl mx-auto"
              onSubmit={handleSearch}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 font-retro border-retro-yellow focus:border-retro-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => {
                    setSearchQuery("")
                    setSearchResults([])
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </motion.form>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-yellow via-retro-orange to-retro-pink" />
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {searchResults.length > 0 ? (
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-pixel text-2xl">Search Results</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-pixel text-xs"
                  onClick={() => {
                    setSearchQuery("")
                    setSearchResults([])
                  }}
                >
                  Clear Results
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {searchResults.map((result, index) => (
                  <AccordionItem
                    key={index}
                    value={`search-${index}`}
                    className="border rounded-lg p-4 pixel-borders-sm bg-muted/30"
                  >
                    <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                      {result.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-retro text-muted-foreground pt-4">
                      <p>{result.answer}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Category: <span className="capitalize">{result.category}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : (
            <Tabs defaultValue="general" className="max-w-3xl mx-auto">
              <TabsList className="w-full justify-start gap-7 md:gap-8 overflow-x-auto flex-nowrap mb-8 bg-transparent">
                <TabsTrigger
                  value="general"
                  className="font-pixel text-sm data-[state=active]:bg-retro-yellow data-[state=active]:text-black"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="font-pixel text-sm data-[state=active]:bg-retro-pink data-[state=active]:text-white"
                >
                  Orders
                </TabsTrigger>
                <TabsTrigger
                  value="products"
                  className="font-pixel text-sm data-[state=active]:bg-retro-blue data-[state=active]:text-white"
                >
                  Products
                </TabsTrigger>
                <TabsTrigger
                  value="returns"
                  className="font-pixel text-sm data-[state=active]:bg-retro-green data-[state=active]:text-white"
                >
                  Returns & Refunds
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqData.general.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`general-${index}`}
                      className="border rounded-lg p-4 pixel-borders-sm bg-muted/30"
                    >
                      <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-retro text-muted-foreground pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="orders" className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqData.orders.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`orders-${index}`}
                      className="border rounded-lg p-4 pixel-borders-sm bg-muted/30"
                    >
                      <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-retro text-muted-foreground pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="products" className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqData.products.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`products-${index}`}
                      className="border rounded-lg p-4 pixel-borders-sm bg-muted/30"
                    >
                      <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-retro text-muted-foreground pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="returns" className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqData.returns.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`returns-${index}`}
                      className="border rounded-lg p-4 pixel-borders-sm bg-muted/30"
                    >
                      <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-retro text-muted-foreground pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          )}

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-retro-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <HelpCircle className="text-retro-yellow h-8 w-8" />
              </div>
            </div>
            <h2 className="font-pixel text-2xl mb-4">Still Have Questions?</h2>
            <p className="font-retro text-lg text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please contact our support team for further assistance.
            </p>
            <Link href="/contact">
              <Button className="bg-retro-yellow hover:bg-retro-orange text-black font-pixel text-sm pixel-borders-sm">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

