"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const royals = [
  {
    name: "GC King Midas",
    title: "Foundation Sire",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800&auto=format&fit=crop",
    desc: "Imported from Germany, Midas brings exceptional bone structure and a stunning golden coat to our program."
  },
  {
    name: "Queen Victoria",
    title: "Foundation Dam",
    image: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?q=80&w=800&auto=format&fit=crop",
    desc: "A breathtaking Chinchilla Silver with a legacy of producing kittens with doll-like faces and huge, expressive eyes."
  }
];

export function RoyalFamily() {
  return (
    <section className="py-32 px-4 bg-accent-pink/30 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-white px-4 py-2 rounded-full inline-block shadow-sm"
          >
            <span className="text-primary-dark font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              <Crown className="w-4 h-4" /> Our Lineage
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Royal <span className="text-primary-dark">Family</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Meet the magnificent kings and queens that form the foundation of our world-class breeding program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {royals.map((royal, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              key={idx}
              className="bg-white rounded-[2.5rem] p-6 shadow-card hover:shadow-premium transition-all duration-300 group"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8">
                <img src={royal.image} alt={royal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary-dark">
                    {royal.title}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-3xl font-bold mb-3 text-foreground">{royal.name}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {royal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
