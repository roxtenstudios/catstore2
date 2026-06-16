"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const availableKittens = [
  {
    id: 1,
    name: "Prince Caspian",
    color: "Silver Shaded",
    gender: "Male",
    age: "12 Weeks",
    status: "Available",
    traits: ["Playful", "Affectionate", "Lap Cat"],
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Princess Aurora",
    color: "Golden Tabby",
    gender: "Female",
    age: "14 Weeks",
    status: "Reserved",
    traits: ["Gentle", "Vocal", "Curious"],
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Duke Leo",
    color: "Red Tabby",
    gender: "Male",
    age: "10 Weeks",
    status: "Available",
    traits: ["Energetic", "Social", "Brave"],
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
  }
];

export function KittenListing() {
  return (
    <section className="py-24 px-4 bg-background relative" id="available">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-accent-peach/30 px-4 py-2 rounded-full inline-block"
          >
            <span className="text-primary-dark font-bold text-sm tracking-widest uppercase">
              Current Litters
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Available <span className="text-primary-dark">Kittens</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Our exceptional kittens are ready to bring joy to your home. Each one is hand-raised with meticulous care and socialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {availableKittens.map((kitten, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={kitten.id}
              className="bg-white rounded-[2.5rem] p-4 shadow-card hover:shadow-premium transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-accent-beige">
                <img 
                  src={kitten.image} 
                  alt={kitten.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm backdrop-blur-md ${
                    kitten.status === "Available" 
                    ? "bg-white/90 text-green-600" 
                    : "bg-black/50 text-white"
                  }`}>
                    {kitten.status}
                  </span>
                </div>
              </div>

              <div className="px-4 pb-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-3xl font-bold text-foreground">{kitten.name}</h3>
                </div>
                
                <p className="text-foreground/60 text-sm mb-4 font-medium">
                  {kitten.color} • {kitten.gender} • {kitten.age}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {kitten.traits.map(trait => (
                    <span key={trait} className="bg-accent-pink text-foreground/80 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-primary-dark" />
                      {trait}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <button 
                    disabled={kitten.status !== "Available"}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                      kitten.status === "Available" 
                      ? "bg-foreground text-white hover:bg-primary-dark shadow-sm hover:-translate-y-1" 
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    View Profile
                    {kitten.status === "Available" && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
