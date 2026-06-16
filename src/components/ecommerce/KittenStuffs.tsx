"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { storeItems } from "@/data/storeItems";

export function KittenStuffs() {
  const accessories = storeItems.filter(item => item.category === "accessories" || item.category === "food").slice(0, 3);

  return (
    <section className="py-12 md:py-24 px-4 bg-background relative overflow-hidden border-t-4 border-[#1e293b]">
      
      {/* Background decoration */}
      <div className="absolute top-10 left-10 text-primary-dark/10 pointer-events-none">
        <Star className="w-32 h-32 fill-current rotate-[20deg]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-center md:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-4 bg-accent-yellow px-6 py-2 rounded-xl inline-block shadow-sticker border-2 border-[#1e293b] rotate-[3deg]"
            >
              <span className="text-[#1e293b] font-black tracking-widest uppercase text-sm">
                Pet Boutique
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] mt-2">
              KITTEN <span className="text-primary-dark text-outline bg-clip-text">STUFFS</span>
            </h2>
          </div>
          <p className="text-[#475569] font-bold max-w-sm mx-auto md:mx-0">Premium gear for your fluffy royalty. Hand-picked essentials.</p>
        </div>

        {/* Horizontal Scroll Carousel (Matches Kittens) */}
        <div className="flex overflow-x-auto gap-4 md:gap-8 pb-12 pt-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {accessories.map((product, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={idx}
              className="w-[70vw] max-w-[320px] snap-center shrink-0"
            >
              <div className={`relative rounded-[2rem] p-3 md:p-4 ${product.bg} border-4 border-[#1e293b] shadow-sticker transition-transform hover:-translate-y-2 flex flex-col h-full`}>
                
                {/* Image */}
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden border-4 border-[#1e293b] bg-white mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 left-2 z-10 rotate-[-5deg]">
                    <span className={`px-2 py-1 rounded-lg text-xs font-black border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] uppercase bg-green-400 text-[#1e293b]`}>
                      In Stock
                    </span>
                  </div>

                  {/* Price Sticker */}
                  <div className="absolute bottom-2 right-2 z-10 rotate-[5deg]">
                    <div className="bg-white px-3 py-1 rounded-full border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] text-primary-dark font-black text-sm">
                      {product.priceLabel}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-1">
                  <h3 className="text-2xl font-black text-[#1e293b] mb-1">{product.name}</h3>
                  <p className="text-[#475569] font-bold text-sm mb-4 uppercase tracking-wider">{product.type}</p>
                  
                  <div className="mt-auto pt-2">
                    <Link href={`/store/${product.id}`} className="block w-full">
                      <button 
                        className="w-full py-3 rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 border-4 border-[#1e293b] shadow-[0_4px_0_0_rgba(30,41,59,1)] hover:translate-y-1 hover:shadow-[0_0px_0_0_rgba(30,41,59,1)] bg-white text-[#1e293b]"
                      >
                        <ShoppingBag className="w-5 h-5" /> Add to Cart
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* View Full Store Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-[70vw] max-w-[320px] snap-center shrink-0 flex items-stretch"
          >
            <Link href="/store?category=accessories" className="w-full">
              <div className="relative rounded-[2rem] p-6 bg-accent-blue border-4 border-[#1e293b] shadow-sticker transition-transform hover:-translate-y-2 h-full flex flex-col items-center justify-center text-center group cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-[#1e293b] shadow-sticker flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-10 h-10 text-primary-dark" />
                </div>
                <h3 className="text-3xl font-black text-[#1e293b] mb-2">View All Gear</h3>
                <p className="text-[#475569] font-bold mb-6">See all accessories, toys, and premium food!</p>
                <div className="bg-[#1e293b] text-white px-6 py-3 rounded-xl font-black border-2 border-[#1e293b] shadow-sticker group-hover:bg-primary-dark transition-colors flex items-center gap-2">
                  Shop Now <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
