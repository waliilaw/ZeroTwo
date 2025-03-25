"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Package, Truck, TruckIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ShippingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 scanlines">
          <div className="absolute inset-0 bg-gradient-to-b from-retro-blue/20 to-retro-cyan/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-pixel text-4xl md:text-5xl mb-4"
            >
              Shipping & <span className="text-retro-blue">Returns</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-retro text-xl text-muted-foreground mb-8"
            >
              Everything you need to know about our shipping policies, delivery times, and return process.
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-blue via-retro-cyan to-retro-green" />
      </section>

      {/* Shipping Information Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Shipping Policy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-retro-blue/20 rounded-full flex items-center justify-center mr-4">
                  <Truck className="text-retro-blue h-6 w-6" />
                </div>
                <h2 className="font-pixel text-3xl">Shipping Policy</h2>
              </div>

              <div className="space-y-6 font-retro text-muted-foreground">
                <p>
                  At Zero Two, we strive to deliver your anime merchandise quickly and safely. We process all orders
                  within 1-2 business days, and shipping times vary depending on your location and chosen shipping
                  method.
                </p>

                <div className="bg-muted/30 rounded-lg p-6 pixel-borders-sm">
                  <h3 className="font-pixel text-xl mb-4">Shipping Methods & Timeframes</h3>

                  <Table>
                    <TableCaption>Estimated delivery times after processing</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-pixel">Shipping Method</TableHead>
                        <TableHead className="font-pixel">Domestic (US)</TableHead>
                        <TableHead className="font-pixel">International</TableHead>
                        <TableHead className="font-pixel">Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-retro">Standard</TableCell>
                        <TableCell className="font-retro">3-5 business days</TableCell>
                        <TableCell className="font-retro">7-14 business days</TableCell>
                        <TableCell className="font-retro">$4.99 (Free over $35)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-retro">Expedited</TableCell>
                        <TableCell className="font-retro">2-3 business days</TableCell>
                        <TableCell className="font-retro">5-7 business days</TableCell>
                        <TableCell className="font-retro">$9.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-retro">Express</TableCell>
                        <TableCell className="font-retro">1-2 business days</TableCell>
                        <TableCell className="font-retro">3-5 business days</TableCell>
                        <TableCell className="font-retro">$14.99</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h3 className="font-pixel text-xl mt-8 mb-4">Tracking Your Order</h3>
                <p>
                  Once your order ships, you'll receive a confirmation email with tracking information. You can also log
                  into your account on our website to view your order status and tracking details at any time.
                </p>

                <h3 className="font-pixel text-xl mt-8 mb-4">International Shipping</h3>
                <p>
                  We ship to most countries worldwide. Please note that international orders may be subject to import
                  duties and taxes, which are the responsibility of the recipient. Delivery times for international
                  orders may vary due to customs processing.
                </p>

                <div className="bg-retro-blue/10 border border-retro-blue rounded-lg p-4 mt-6">
                  <p className="font-pixel text-sm text-retro-blue">
                    Note: Shipping times may be affected by holidays, weather conditions, or other unforeseen
                    circumstances. We'll notify you of any significant delays.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Returns & Refunds */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-retro-green/20 rounded-full flex items-center justify-center mr-4">
                  <Package className="text-retro-green h-6 w-6" />
                </div>
                <h2 className="font-pixel text-3xl">Returns & Refunds</h2>
              </div>

              <div className="space-y-6 font-retro text-muted-foreground">
                <p>
                  We want you to be completely satisfied with your purchase. If for any reason you're not happy with
                  your order, we offer a straightforward return and refund policy.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="return-policy" className="border-b">
                    <AccordionTrigger className="font-pixel text-lg">Return Policy</AccordionTrigger>
                    <AccordionContent className="font-retro">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          We accept returns within 30 days of delivery for unused items in their original packaging.
                        </li>
                        <li>Items must be in their original condition with all tags and packaging intact.</li>
                        <li>Custom or personalized items cannot be returned unless they are defective.</li>
                        <li>Sale items are final sale and cannot be returned unless they are defective.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="refund-process" className="border-b">
                    <AccordionTrigger className="font-pixel text-lg">Refund Process</AccordionTrigger>
                    <AccordionContent className="font-retro">
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Contact our customer service team at returns@zerotwo.com to initiate a return.</li>
                        <li>We'll provide you with a return shipping label and instructions.</li>
                        <li>Once we receive and inspect the returned items, we'll process your refund.</li>
                        <li>
                          Refunds are typically processed within 5-7 business days and will be issued to the original
                          payment method.
                        </li>
                        <li>Shipping costs are non-refundable unless the return is due to our error.</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="exchanges" className="border-b">
                    <AccordionTrigger className="font-pixel text-lg">Exchanges</AccordionTrigger>
                    <AccordionContent className="font-retro">
                      <p className="mb-2">We're happy to exchange items for a different size, color, or design.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>For items of equal value, we'll process a direct exchange.</li>
                        <li>
                          For items of different values, we'll refund the original purchase and you can place a new
                          order for the desired item.
                        </li>
                        <li>Exchanges follow the same 30-day timeframe as returns.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="damaged-items" className="border-b">
                    <AccordionTrigger className="font-pixel text-lg">Damaged or Defective Items</AccordionTrigger>
                    <AccordionContent className="font-retro">
                      <p className="mb-2">If your order arrives damaged or defective, we'll make it right.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Please take photos of the damaged items and contact us within 7 days of delivery.</li>
                        <li>We'll arrange a replacement or refund at no additional cost to you.</li>
                        <li>
                          In some cases, we may ask you to return the damaged item (at our expense) for quality control
                          purposes.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-retro-green/10 border border-retro-green rounded-lg p-4 mt-6">
                  <p className="font-pixel text-sm text-retro-green">
                    We strive to make the return process as simple as possible. If you have any questions or need
                    assistance, please don't hesitate to contact our support team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-pixel text-3xl mb-6">Frequently Asked Questions</h2>
            <p className="font-retro text-xl text-muted-foreground">
              Common questions about our shipping and return policies.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="faq-1" className="border rounded-lg p-4 pixel-borders-sm bg-background">
                <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                  Do you ship to PO boxes?
                </AccordionTrigger>
                <AccordionContent className="font-retro text-muted-foreground pt-4">
                  Yes, we ship to PO boxes for standard shipping. However, expedited and express shipping options may
                  require a physical address for delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border rounded-lg p-4 pixel-borders-sm bg-background">
                <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                  Can I change my shipping address after placing an order?
                </AccordionTrigger>
                <AccordionContent className="font-retro text-muted-foreground pt-4">
                  You can change your shipping address within 2 hours of placing your order. After that, our fulfillment
                  process begins and changes cannot be made. Please contact customer support immediately if you need to
                  make changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border rounded-lg p-4 pixel-borders-sm bg-background">
                <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                  What if my package is lost in transit?
                </AccordionTrigger>
                <AccordionContent className="font-retro text-muted-foreground pt-4">
                  If your package appears to be lost in transit (no tracking updates for 5+ days), please contact our
                  support team. We'll file a claim with the shipping carrier and either send a replacement or issue a
                  refund.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border rounded-lg p-4 pixel-borders-sm bg-background">
                <AccordionTrigger className="font-pixel text-lg hover:no-underline">
                  Do I need to return all items in an order if I only want to return one?
                </AccordionTrigger>
                <AccordionContent className="font-retro text-muted-foreground pt-4">
                  No, you can return individual items from an order. Simply indicate which items you're returning when
                  you initiate the return process, and we'll process a refund for only those items.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            className="bg-gradient-to-r from-retro-blue/20 to-retro-cyan/20 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto pixel-borders-sm"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-retro-blue/20 rounded-full flex items-center justify-center mx-auto">
                <TruckIcon className="text-retro-blue h-8 w-8" />
              </div>
            </div>
            <h2 className="font-pixel text-3xl mb-4">Ready to Order?</h2>
            <p className="font-retro text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our collection of premium anime merchandise with our retro pixel twist. Free shipping on orders
              over $35!
            </p>
            <Link href="/shop-collection">
              <Button className="bg-retro-blue hover:bg-retro-cyan text-white font-pixel text-sm px-6 py-6 pixel-borders-sm">
                Shop Collection
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

