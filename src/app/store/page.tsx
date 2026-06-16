"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/ui/Footer";
import { storeItems } from "@/data/storeItems";

const categories = [
  { id: "all", label: "All Items" },
  { id: "kittens", label: "Kittens" },
  { id: "accessories", label: "Accessories" },
  { id: "toys", label: "Toys" },
  { id: "food", label: "Food" }
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort logic
  const filteredItems = storeItems
    .filter(item => activeCategory === "all" || item.category === activeCategory)
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0; // default
    });

  // Separate Kittens and Accessories for the "All Items" view
  const kittens = filteredItems.filter(item => item.category === "kittens");
  const accessories = filteredItems.filter(item => item.category !== "kittens");

  const renderGrid = (items: typeof storeItems) => (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
      <AnimatePresence>
        {items.map(item => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            key={item.id}
            className={`relative rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-4 ${item.bg} border-2 md:border-4 border-[#1e293b] shadow-sticker transition-transform hover:-translate-y-2 flex flex-col`}
          >
            <div className="relative aspect-square rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border-2 md:border-4 border-[#1e293b] bg-white mb-2 md:mb-4">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              
              <div className="absolute top-1 md:top-2 left-1 md:left-2 z-10 rotate-[-5deg]">
                <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded-md md:rounded-lg text-[10px] md:text-xs font-black border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] uppercase leading-tight ${
                  item.status === "Available" || item.status === "In Stock"
                  ? "bg-green-400 text-[#1e293b]" 
                  : "bg-gray-200 text-gray-500"
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 z-10 rotate-[5deg]">
                <div className="bg-white px-2 md:px-3 py-0.5 md:py-1 rounded-full border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] text-primary-dark font-black text-xs md:text-sm leading-tight">
                  {item.priceLabel}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col px-1 text-center pb-1 md:pb-2">
              <h3 className="text-sm md:text-2xl font-black text-[#1e293b] mb-0.5 md:mb-1 leading-tight line-clamp-1">{item.name}</h3>
              <p className="text-[#475569] font-bold text-[10px] md:text-sm mb-2 md:mb-4 uppercase tracking-wider">{item.type}</p>
              
              <div className="mt-auto">
                <Link href={`/store/${item.id}`} className="block w-full">
                  <button 
                    disabled={item.status === "Reserved"}
                    className={`w-full py-1.5 md:py-3 rounded-xl font-black text-xs md:text-base transition-all flex items-center justify-center gap-1 md:gap-2 border-2 border-[#1e293b] shadow-[0_4px_0_0_rgba(30,41,59,1)] ${
                      item.status === "Reserved" 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300 shadow-none"
                      : "bg-white text-[#1e293b] hover:translate-y-1 hover:shadow-[0_0px_0_0_rgba(30,41,59,1)] hover:bg-gray-50"
                    }`}
                  >
                    {item.category === "kittens" ? "View" : <><ShoppingBag className="w-3 h-3 md:w-4 md:h-4"/> Cart</>}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white border-b-4 border-[#1e293b] sticky top-0 z-50 shadow-sm px-4 py-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="flex items-center gap-2 text-[#1e293b] hover:text-primary-dark transition-colors font-black">
              <ArrowLeft className="w-5 h-5" /> Home
            </Link>
            <h1 className="text-2xl font-black text-[#1e293b] md:hidden">
              STORE
            </h1>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-black text-[#1e293b] hidden md:block">
            HPC <span className="text-primary-dark text-outline bg-clip-text">STORE</span>
          </h1>

          <div className="flex items-center gap-2 relative w-full md:w-auto">
            <Search className="w-5 h-5 absolute left-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-[300px] pl-10 pr-4 py-2 border-2 border-[#1e293b] rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sticker"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
        
        {/* Horizontal Filters (Mobile & Desktop) */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
          <div className="flex overflow-x-auto gap-2 w-full no-scrollbar pb-2">
            <div className="flex items-center gap-2 shrink-0 pr-4">
              <SlidersHorizontal className="w-5 h-5 text-[#1e293b]" />
            </div>
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-xl font-black transition-colors border-2 border-[#1e293b] text-sm md:text-base ${
                  activeCategory === cat.id 
                  ? "bg-primary-dark text-white shadow-sticker translate-y-[-2px]" 
                  : "bg-white text-[#1e293b] hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="shrink-0 w-full md:w-auto flex items-center gap-2">
            <span className="font-bold text-[#1e293b] text-sm whitespace-nowrap">Sort:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto p-2 border-2 border-[#1e293b] rounded-xl font-bold shadow-sticker focus:outline-none bg-white text-sm"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grids */}
        <div className="flex-1 mb-20">
          {filteredItems.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-2xl font-black text-gray-400">No items found.</p>
            </div>
          ) : (
            <>
              {/* If "All" is selected, render split layout */}
              {activeCategory === "all" ? (
                <>
                  {kittens.length > 0 && (
                    <div className="mb-12">
                      <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] mb-6 flex items-center gap-3">
                        <span className="bg-accent-peach px-3 py-1 rounded-xl border-2 border-[#1e293b] shadow-sticker">🐱</span> 
                        Available Kittens
                      </h2>
                      {renderGrid(kittens)}
                    </div>
                  )}
                  {accessories.length > 0 && (
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] mb-6 flex items-center gap-3">
                        <span className="bg-accent-blue px-3 py-1 rounded-xl border-2 border-[#1e293b] shadow-sticker">🛍️</span> 
                        Pet Accessories
                      </h2>
                      {renderGrid(accessories)}
                    </div>
                  )}
                </>
              ) : (
                /* Specific Category selected */
                <div>
                  <div className="mb-6 flex justify-between items-end">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1e293b]">
                      {categories.find(c => c.id === activeCategory)?.label}
                    </h2>
                    <span className="font-bold text-[#475569]">{filteredItems.length} items</span>
                  </div>
                  {renderGrid(filteredItems)}
                </div>
              )}
            </>
          )}
        </div>

      </div>

      <Footer />
    </main>
  );
}
