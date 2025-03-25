import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoriesSection from "@/components/categories-section"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <Newsletter />
      <Footer />
    </main>
  )
}

