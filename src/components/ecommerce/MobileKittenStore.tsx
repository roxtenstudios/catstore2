"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Store } from "lucide-react";
import Link from "next/link";

const featuredKittens = [
  {
    id: 1,
    name: "Prince Caspian",
    color: "Silver Shaded",
    gender: "Male",
    price: "$2,500",
    status: "Available",
    traits: ["Playful", "Lap Cat"],
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop",
    bg: "bg-accent-blue"
  },
  {
    id: 2,
    name: "Princess Aurora",
    color: "Golden Tabby",
    gender: "Female",
    price: "$3,000",
    status: "Reserved",
    traits: ["Gentle", "Vocal"],
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop",
    bg: "bg-accent-peach"
  },
  {
    id: 3,
    name: "Duke Leo",
    color: "Red Tabby",
    gender: "Male",
    price: "$2,200",
    status: "Available",
    traits: ["Energetic", "Social"],
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
    bg: "bg-accent-pink"
  }
];

export function MobileKittenStore() {
  return (
    <section className="py-12 md:py-20 px-4 bg-background relative overflow-hidden" id="store">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="mb-4 bg-primary px-4 py-2 rounded-xl inline-block shadow-sticker border-2 border-[#1e293b] rotate-[-2deg]"
            >
              <span className="text-white font-black text-sm tracking-wider uppercase">
                Featured Adoptions
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b]">
              MEET THE <span className="text-primary-dark">KITTENS</span>
            </h2>
          </div>
          <p className="text-[#475569] font-bold max-w-sm">Swipe to find your new best friend. Each kitten comes fully vaccinated and health guaranteed!</p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="flex overflow-x-auto gap-4 md:gap-8 pb-12 pt-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {featuredKittens.map((kitten, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={kitten.id}
              className="w-[70vw] max-w-[320px] snap-center shrink-0"
            >
              <div className={`relative rounded-[2rem] p-3 md:p-4 ${kitten.bg} border-4 border-[#1e293b] shadow-sticker transition-transform hover:-translate-y-2 flex flex-col h-full`}>
                
                {/* Image */}
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden border-4 border-[#1e293b] bg-white mb-4">
                  <img 
                    src={kitten.image} 
                    alt={kitten.name} 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 left-2 z-10 rotate-[-5deg]">
                    <span className={`px-2 py-1 rounded-lg text-xs font-black border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] uppercase ${
                      kitten.status === "Available" 
                      ? "bg-green-400 text-[#1e293b]" 
                      : "bg-gray-200 text-gray-500"
                    }`}>
                      {kitten.status}
                    </span>
                  </div>

                  {/* Price Sticker */}
                  <div className="absolute bottom-2 right-2 z-10 rotate-[5deg]">
                    <div className="bg-white px-3 py-1 rounded-full border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] text-primary-dark font-black text-sm">
                      {kitten.price}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-1">
                  <h3 className="text-2xl font-black text-[#1e293b] mb-1">{kitten.name}</h3>
                  <p className="text-[#475569] font-bold text-sm mb-3">
                    {kitten.color} • {kitten.gender}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {kitten.traits.map(trait => (
                      <span key={trait} className="bg-white text-[#1e293b] text-[10px] font-black px-2 py-1 rounded border-2 border-[#1e293b] shadow-[0_2px_0_0_rgba(30,41,59,1)] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-primary" />
                        {trait}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <Link href={`/store/${kitten.id}`} className="block w-full">
                      <button 
                        className="w-full py-3 rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 border-4 border-[#1e293b] shadow-[0_4px_0_0_rgba(30,41,59,1)] hover:translate-y-1 hover:shadow-[0_0px_0_0_rgba(30,41,59,1)] bg-white text-[#1e293b]"
                      >
                        View Profile
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
            <Link href="/store" className="w-full">
              <div className="relative rounded-[2rem] p-6 bg-accent-yellow border-4 border-[#1e293b] shadow-sticker transition-transform hover:-translate-y-2 h-full flex flex-col items-center justify-center text-center group cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-[#1e293b] shadow-sticker flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Store className="w-10 h-10 text-primary-dark" />
                </div>
                <h3 className="text-3xl font-black text-[#1e293b] mb-2">View Full Store</h3>
                <p className="text-[#475569] font-bold mb-6">See all available kittens and accessories!</p>
                <div className="bg-[#1e293b] text-white px-6 py-3 rounded-xl font-black border-2 border-[#1e293b] shadow-sticker group-hover:bg-primary-dark transition-colors flex items-center gap-2">
                  Explore <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
