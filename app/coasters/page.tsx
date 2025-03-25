"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Filter, SortDesc, Grid3x3, Grid2x2, Search, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Sample coaster data
const coastersData = [
  {
    id: "c1",
    name: "Zenitsu Thunder Coaster",
    price: 6.99,
    image: "/images/anime-character-1.png",
    category: "Coasters",
    subcategory: "Demon Slayer",
    isNew: true,
    tags: ["anime", "demon slayer", "zenitsu", "thunder"],
    rating: 4.5,
    stockStatus: "In Stock",
    description: "A vibrant coaster featuring Zenitsu with his iconic thunder breathing technique.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c2",
    name: "Super Saiyan Blue Vegeta",
    price: 7.99,
    image: "/images/anime-character-2.png",
    category: "Coasters",
    subcategory: "Dragon Ball",
    isBestseller: true,
    tags: ["anime", "dragon ball", "vegeta", "super saiyan"],
    rating: 5,
    stockStatus: "In Stock",
    description: "High-quality coaster of Vegeta in his Super Saiyan Blue form.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c3",
    name: "Happy Blue Hair Girl",
    price: 6.49,
    image: "/images/anime-character-3.png",
    category: "Coasters",
    subcategory: "Original",
    tags: ["anime", "original", "cute", "happy"],
    rating: 4,
    stockStatus: "In Stock",
    description: "Adorable coaster of a cheerful blue-haired anime girl making peace signs.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c4",
    name: "Pixel Warrior",
    price: 5.99,
    image: "/images/pixel-character.gif",
    category: "Coasters",
    subcategory: "Pixel Art",
    tags: ["pixel", "warrior", "retro", "gaming"],
    rating: 4.2,
    stockStatus: "In Stock",
    description: "Retro-style pixel art warrior coaster perfect for gaming enthusiasts.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c5",
    name: "Naruto Uzumaki",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Naruto",
    tags: ["anime", "naruto", "ninja", "hokage"],
    rating: 4.8,
    stockStatus: "In Stock",
    description: "Vibrant coaster featuring Naruto Uzumaki in his classic pose.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c6",
    name: "Sailor Moon",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Sailor Moon",
    tags: ["anime", "sailor moon", "magical girl"],
    rating: 4.7,
    stockStatus: "Low Stock",
    description: "Beautiful coaster of Sailor Moon with her iconic pose and wand.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c7",
    name: "Goku Ultra Instinct",
    price: 7.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Dragon Ball",
    tags: ["anime", "dragon ball", "goku", "ultra instinct"],
    rating: 4.9,
    stockStatus: "In Stock",
    description: "Premium coaster of Goku in his powerful Ultra Instinct form.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c8",
    name: "Totoro Forest Spirit",
    price: 6.49,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Studio Ghibli",
    tags: ["anime", "studio ghibli", "totoro", "forest"],
    rating: 4.6,
    stockStatus: "In Stock",
    description: "Charming coaster featuring Totoro, the beloved forest spirit.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c9",
    name: "Spike Spiegel",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Cowboy Bebop",
    tags: ["anime", "cowboy bebop", "spike", "space"],
    rating: 4.5,
    stockStatus: "In Stock",
    description: "Cool coaster of Spike Spiegel from the classic anime Cowboy Bebop.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c10",
    name: "Mikasa Ackerman",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Attack on Titan",
    tags: ["anime", "attack on titan", "mikasa", "action"],
    rating: 4.7,
    stockStatus: "In Stock",
    description: "Dynamic coaster featuring Mikasa Ackerman in battle stance.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c11",
    name: "Pikachu Lightning",
    price: 6.29,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Pokemon",
    tags: ["anime", "pokemon", "pikachu", "electric"],
    rating: 4.8,
    stockStatus: "In Stock",
    description: "Adorable coaster of Pikachu using its lightning attack.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
  {
    id: "c12",
    name: "Rem & Ram",
    price: 8.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Coasters",
    subcategory: "Re:Zero",
    tags: ["anime", "re:zero", "rem", "ram", "twins"],
    rating: 4.9,
    stockStatus: "Low Stock",
    description: "Beautiful coaster featuring the twin maids Rem and Ram.",
    dimensions: "4 x 4 inches",
    material: "Premium Cork",
    waterproof: true,
  },
]

// Filter and sort options
const subcategories = [
  "All",
  "Demon Slayer",
  "Dragon Ball",
  "Original",
  "Pixel Art",
  "Naruto",
  "Sailor Moon",
  "Studio Ghibli",
  "Cowboy Bebop",
  "Attack on Titan",
  "Pokemon",
  "Re:Zero",
]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
]
const stockOptions = ["All", "In Stock", "Low Stock", "Out of Stock"]
const materialOptions = ["All", "Premium Cork", "Ceramic", "Silicone"]

export default function CoastersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(["All"])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(["All"])
  const [selectedStockOptions, setSelectedStockOptions] = useState<string[]>(["All"])
  const [priceRange, setPriceRange] = useState([0, 10])
  const [sortOption, setSortOption] = useState("featured")
  const [gridView, setGridView] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredCoasters, setFilteredCoasters] = useState(coastersData)

  const itemsPerPage = 8
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Apply filters and sorting
  useEffect(() => {
    let result = [...coastersData]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (coaster) =>
          coaster.name.toLowerCase().includes(query) ||
          coaster.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          coaster.subcategory.toLowerCase().includes(query),
      )
    }

    // Subcategory filter
    if (!selectedSubcategories.includes("All")) {
      result = result.filter((coaster) => selectedSubcategories.includes(coaster.subcategory))
    }

    // Material filter
    if (!selectedMaterials.includes("All")) {
      result = result.filter((coaster) => selectedMaterials.includes(coaster.material))
    }

    // Stock status filter
    if (!selectedStockOptions.includes("All")) {
      result = result.filter((coaster) => selectedStockOptions.includes(coaster.stockStatus))
    }

    // Price range filter
    result = result.filter((coaster) => coaster.price >= priceRange[0] && coaster.price <= priceRange[1])

    // Sorting
    switch (sortOption) {
      case "newest":
        // In a real app, you'd have a date field to sort by
        result = [...result].reverse()
        break
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        // Featured - keep original order
        break
    }

    setFilteredCoasters(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchQuery, selectedSubcategories, selectedMaterials, selectedStockOptions, priceRange, sortOption])

  // Handle subcategory selection
  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    if (subcategory === "All" && checked) {
      setSelectedSubcategories(["All"])
    } else {
      const newSelection = checked
        ? [...selectedSubcategories.filter((s) => s !== "All"), subcategory]
        : selectedSubcategories.filter((s) => s !== subcategory)

      setSelectedSubcategories(newSelection.length ? newSelection : ["All"])
    }
  }

  // Handle material selection
  const handleMaterialChange = (material: string, checked: boolean) => {
    if (material === "All" && checked) {
      setSelectedMaterials(["All"])
    } else {
      const newSelection = checked
        ? [...selectedMaterials.filter((m) => m !== "All"), material]
        : selectedMaterials.filter((m) => m !== material)

      setSelectedMaterials(newSelection.length ? newSelection : ["All"])
    }
  }

  // Handle stock status selection
  const handleStockChange = (stock: string, checked: boolean) => {
    if (stock === "All" && checked) {
      setSelectedStockOptions(["All"])
    } else {
      const newSelection = checked
        ? [...selectedStockOptions.filter((s) => s !== "All"), stock]
        : selectedStockOptions.filter((s) => s !== stock)

      setSelectedStockOptions(newSelection.length ? newSelection : ["All"])
    }
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredCoasters.length / itemsPerPage)
  const currentCoasters = filteredCoasters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 scanlines">
          <div className="absolute inset-0 bg-gradient-to-b from-retro-green/20 to-retro-cyan/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-pixel text-4xl md:text-5xl mb-4"
            >
              <span className="text-retro-green">Anime</span> Coasters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-retro text-xl text-muted-foreground mb-8"
            >
              Protect your surfaces with style using our premium anime coasters. Perfect for coffee tables, desks, and
              more!
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for coasters..."
                className="pl-10 font-retro border-retro-green focus:border-retro-cyan"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-retro-green via-retro-cyan to-retro-blue" />
      </section>

      {/* Products Section */}
      <section ref={ref} className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div className="font-pixel text-xl mb-4">Filters</div>

              <div>
                <h3 className="font-pixel text-sm mb-3">Subcategories</h3>
                <div className="space-y-2">
                  {subcategories.map((subcategory) => (
                    <div key={subcategory} className="flex items-center space-x-2">
                      <Checkbox
                        id={`subcategory-${subcategory}`}
                        checked={selectedSubcategories.includes(subcategory)}
                        onCheckedChange={(checked) => handleSubcategoryChange(subcategory, checked as boolean)}
                      />
                      <Label htmlFor={`subcategory-${subcategory}`} className="font-retro text-sm cursor-pointer">
                        {subcategory}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-pixel text-sm mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider defaultValue={[0, 10]} max={10} step={0.5} value={priceRange} onValueChange={setPriceRange} />
                  <div className="flex justify-between mt-2 font-retro text-sm">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-pixel text-sm mb-3">Material</h3>
                <div className="space-y-2">
                  {materialOptions.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox
                        id={`material-${material}`}
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
                      />
                      <Label htmlFor={`material-${material}`} className="font-retro text-sm cursor-pointer">
                        {material}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-pixel text-sm mb-3">Availability</h3>
                <div className="space-y-2">
                  {stockOptions.map((stock) => (
                    <div key={stock} className="flex items-center space-x-2">
                      <Checkbox
                        id={`stock-${stock}`}
                        checked={selectedStockOptions.includes(stock)}
                        onCheckedChange={(checked) => handleStockChange(stock, checked as boolean)}
                      />
                      <Label htmlFor={`stock-${stock}`} className="font-retro text-sm cursor-pointer">
                        {stock}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <div className="flex items-center">
                  <span className="font-retro text-sm text-muted-foreground mr-2">
                    {filteredCoasters.length} products
                  </span>

                  {/* Mobile filter button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden font-pixel text-xs">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                      <SheetHeader>
                        <SheetTitle className="font-pixel">Filters</SheetTitle>
                        <SheetDescription className="font-retro">Refine your coaster search</SheetDescription>
                      </SheetHeader>

                      <div className="py-4 space-y-6">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="subcategories">
                            <AccordionTrigger className="font-pixel text-sm">Subcategories</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pl-1">
                                {subcategories.map((subcategory) => (
                                  <div key={subcategory} className="flex items-center space-x-2">
                                    <Checkbox
                                      id={`mobile-subcategory-${subcategory}`}
                                      checked={selectedSubcategories.includes(subcategory)}
                                      onCheckedChange={(checked) =>
                                        handleSubcategoryChange(subcategory, checked as boolean)
                                      }
                                    />
                                    <Label
                                      htmlFor={`mobile-subcategory-${subcategory}`}
                                      className="font-retro text-sm cursor-pointer"
                                    >
                                      {subcategory}
                                    </Label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="price">
                            <AccordionTrigger className="font-pixel text-sm">Price Range</AccordionTrigger>
                            <AccordionContent>
                              <div className="px-2">
                                <Slider
                                  defaultValue={[0, 10]}
                                  max={10}
                                  step={0.5}
                                  value={priceRange}
                                  onValueChange={setPriceRange}
                                />
                                <div className="flex justify-between mt-2 font-retro text-sm">
                                  <span>${priceRange[0].toFixed(2)}</span>
                                  <span>${priceRange[1].toFixed(2)}</span>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="material">
                            <AccordionTrigger className="font-pixel text-sm">Material</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pl-1">
                                {materialOptions.map((material) => (
                                  <div key={material} className="flex items-center space-x-2">
                                    <Checkbox
                                      id={`mobile-material-${material}`}
                                      checked={selectedMaterials.includes(material)}
                                      onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
                                    />
                                    <Label
                                      htmlFor={`mobile-material-${material}`}
                                      className="font-retro text-sm cursor-pointer"
                                    >
                                      {material}
                                    </Label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="availability">
                            <AccordionTrigger className="font-pixel text-sm">Availability</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pl-1">
                                {stockOptions.map((stock) => (
                                  <div key={stock} className="flex items-center space-x-2">
                                    <Checkbox
                                      id={`mobile-stock-${stock}`}
                                      checked={selectedStockOptions.includes(stock)}
                                      onCheckedChange={(checked) => handleStockChange(stock, checked as boolean)}
                                    />
                                    <Label
                                      htmlFor={`mobile-stock-${stock}`}
                                      className="font-retro text-sm cursor-pointer"
                                    >
                                      {stock}
                                    </Label>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="flex justify-between mt-6">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSelectedSubcategories(["All"])
                            setSelectedMaterials(["All"])
                            setSelectedStockOptions(["All"])
                            setPriceRange([0, 10])
                          }}
                          className="font-pixel text-xs"
                        >
                          Reset All
                        </Button>
                        <SheetClose asChild>
                          <Button className="font-pixel text-xs bg-retro-green hover:bg-retro-cyan">
                            Apply Filters
                          </Button>
                        </SheetClose>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort dropdown */}
                  <div className="flex items-center">
                    <SortDesc className="mr-2 h-4 w-4 text-muted-foreground" />
                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger className="w-[180px] font-retro text-sm">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="font-retro">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Grid view toggle */}
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 ${gridView === "grid" ? "bg-muted" : ""}`}
                      onClick={() => setGridView("grid")}
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 ${gridView === "list" ? "bg-muted" : ""}`}
                      onClick={() => setGridView("list")}
                    >
                      <Grid2x2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products grid */}
              {currentCoasters.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className={`grid gap-4 ${
                    gridView === "grid" ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
                  }`}
                >
                  {currentCoasters.map((coaster) => (
                    <motion.div key={coaster.id} variants={itemVariants}>
                      {gridView === "grid" ? (
                        <ProductCard {...coaster} />
                      ) : (
                        <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-background pixel-borders-sm">
                          <div className="relative w-full h-48 sm:w-48 sm:h-48">
                            <Image
                              src={coaster.image || "/placeholder.svg"}
                              alt={coaster.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-retro text-xs text-retro-cyan mb-1">{coaster.subcategory}</div>
                            <h3 className="font-pixel text-lg mb-2">{coaster.name}</h3>
                            <p className="font-retro text-sm text-muted-foreground mb-3">{coaster.description}</p>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    className={`w-4 h-4 ${star <= coaster.rating ? "text-retro-yellow" : "text-muted-foreground"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="font-retro text-xs text-muted-foreground">({coaster.rating})</span>
                            </div>
                            <div className="flex flex-wrap items-center justify-between">
                              <p className="font-silkscreen text-lg text-retro-yellow">${coaster.price.toFixed(2)}</p>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  className="bg-retro-green hover:bg-retro-cyan text-white font-pixel text-xs"
                                >
                                  Add to Cart
                                </Button>
                                <Button size="sm" variant="outline" className="font-pixel text-xs">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-block mb-4 p-4 rounded-full bg-muted">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-pixel text-xl mb-2">No coasters found</h3>
                  <p className="font-retro text-muted-foreground">Try adjusting your search or filter criteria</p>
                  <Button
                    variant="outline"
                    className="mt-4 font-pixel text-sm"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedSubcategories(["All"])
                      setSelectedMaterials(["All"])
                      setSelectedStockOptions(["All"])
                      setPriceRange([0, 10])
                    }}
                  >
                    Reset All Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === i + 1}
                          onClick={(e) => {
                            e.preventDefault()
                            setCurrentPage(i + 1)
                          }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

