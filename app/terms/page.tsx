"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 scanlines">
          <div className="absolute inset-0 bg-gradient-to-b from-retro-purple/20 to-retro-pink/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-pixel text-4xl md:text-5xl mb-4"
            >
              Terms & <span className="text-retro-purple">Conditions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-retro text-xl text-muted-foreground mb-8"
            >
              Please read these terms carefully before using our website and services.
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-purple via-retro-pink to-retro-blue" />
      </section>

      {/* Terms Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/30 rounded-lg p-8 pixel-borders-sm mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-retro-purple/20 rounded-full flex items-center justify-center mr-4">
                  <FileText className="text-retro-purple h-6 w-6" />
                </div>
                <h2 className="font-pixel text-2xl">Last Updated: March 1, 2023</h2>
              </div>
              <p className="font-retro text-muted-foreground mb-4">
                These Terms and Conditions ("Terms") govern your use of the Zero Two website (the "Site") and any
                products or services offered by Zero Two ("we," "us," or "our"). By accessing or using the Site, you
                agree to be bound by these Terms.
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-pixel text-2xl mb-4">1. Use of the Site</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    1.1 You must be at least 13 years old to use this Site. By using the Site, you represent and warrant
                    that you are at least 13 years old.
                  </p>
                  <p>
                    1.2 You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree
                    not to use the Site:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>
                      In any way that violates any applicable federal, state, local, or international law or regulation.
                    </li>
                    <li>
                      To transmit, or procure the sending of, any advertising or promotional material, including any
                      "junk mail," "chain letter," "spam," or any other similar solicitation.
                    </li>
                    <li>
                      To impersonate or attempt to impersonate Zero Two, a Zero Two employee, another user, or any other
                      person or entity.
                    </li>
                    <li>
                      To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site,
                      or which may harm Zero Two or users of the Site.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-pixel text-2xl mb-4">2. Products and Orders</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    2.1 All products displayed on the Site are subject to availability. We reserve the right to
                    discontinue any product at any time.
                  </p>
                  <p>
                    2.2 Prices for our products are subject to change without notice. We reserve the right to modify or
                    discontinue the Site or any product without notice at any time.
                  </p>
                  <p>
                    2.3 We reserve the right to refuse any order you place with us. We may, in our sole discretion,
                    limit or cancel quantities purchased per person, per household, or per order.
                  </p>
                  <p>
                    2.4 You agree to provide current, complete, and accurate purchase and account information for all
                    purchases made on the Site.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-pixel text-2xl mb-4">3. Intellectual Property Rights</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    3.1 The Site and its entire contents, features, and functionality (including but not limited to all
                    information, software, text, displays, images, video, and audio, and the design, selection, and
                    arrangement thereof) are owned by Zero Two, its licensors, or other providers of such material and
                    are protected by United States and international copyright, trademark, patent, trade secret, and
                    other intellectual property or proprietary rights laws.
                  </p>
                  <p>
                    3.2 You may not reproduce, distribute, modify, create derivative works of, publicly display,
                    publicly perform, republish, download, store, or transmit any of the material on our Site, except as
                    follows:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>
                      Your computer may temporarily store copies of such materials in RAM incidental to your accessing
                      and viewing those materials.
                    </li>
                    <li>
                      You may store files that are automatically cached by your Web browser for display enhancement
                      purposes.
                    </li>
                    <li>
                      You may print or download one copy of a reasonable number of pages of the Site for your own
                      personal, non-commercial use and not for further reproduction, publication, or distribution.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="font-pixel text-2xl mb-4">4. User Accounts</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    4.1 You may be required to register with the Site to access certain features. When you register, you
                    agree to provide accurate, current, and complete information.
                  </p>
                  <p>
                    4.2 You are responsible for maintaining the confidentiality of your account and password and for
                    restricting access to your computer. You agree to accept responsibility for all activities that
                    occur under your account or password.
                  </p>
                  <p>
                    4.3 We reserve the right to disable any user account at any time in our sole discretion for any or
                    no reason, including if, in our opinion, you have failed to comply with any provision of these
                    Terms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="font-pixel text-2xl mb-4">5. Privacy Policy</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    5.1 Your use of the Site is also governed by our Privacy Policy, which is incorporated into these
                    Terms by reference. Please review our Privacy Policy to understand our practices.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="font-pixel text-2xl mb-4">6. Limitation of Liability</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    6.1 IN NO EVENT WILL ZERO TWO, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES,
                    AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING
                    OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY
                    CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND
                    SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
                    SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING
                    NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="font-pixel text-2xl mb-4">7. Changes to the Terms</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>
                    7.1 We may revise and update these Terms from time to time in our sole discretion. All changes are
                    effective immediately when we post them.
                  </p>
                  <p>
                    7.2 Your continued use of the Site following the posting of revised Terms means that you accept and
                    agree to the changes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="font-pixel text-2xl mb-4">8. Contact Information</h2>
                <div className="font-retro text-muted-foreground space-y-4">
                  <p>8.1 Questions about the Terms should be sent to us at legal@zerotwo.com.</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-12 text-center"
            >
              <p className="font-retro text-muted-foreground mb-6">
                By using the Zero Two website, you acknowledge that you have read, understood, and agree to be bound by
                these Terms and Conditions.
              </p>
              <Link href="/privacy">
                <Button
                  variant="outline"
                  className="border-retro-purple text-retro-purple hover:bg-retro-purple/20 font-pixel text-sm"
                >
                  View Privacy Policy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

