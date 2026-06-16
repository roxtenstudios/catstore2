"use client";

import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-12 md:py-24 px-4 bg-accent-blue border-y-4 border-[#1e293b] relative overflow-hidden">
      
      {/* Playful background shapes */}
      <div className="absolute top-20 right-[-10%] text-white/40 rotate-[15deg]">
        <Heart className="w-64 h-64 fill-current" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Scrapbook Image Layout */}
          <div className="relative mt-2 md:mt-0 flex flex-col md:block gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              viewport={{ once: true }}
              className="relative z-10 w-full md:w-4/5 md:ml-auto border-4 border-[#1e293b] rounded-[2rem] md:rounded-3xl overflow-hidden shadow-sticker bg-white p-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop" 
                alt="Breeder holding kitten" 
                className="w-full h-auto rounded-[1.5rem] md:rounded-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative md:absolute md:bottom-[-10%] md:left-0 w-full md:w-3/5 border-4 border-[#1e293b] rounded-[2rem] md:rounded-3xl overflow-hidden shadow-sticker bg-white p-2 z-20 mt-[-10%] md:mt-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1615332579037-3c44b3660b53?q=80&w=600&auto=format&fit=crop" 
                alt="Playful kittens" 
                className="w-full h-auto rounded-[1.5rem] md:rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-accent-yellow rounded-full p-2 border-2 border-[#1e293b] shadow-sm rotate-[15deg]">
                <Star className="w-5 h-5 text-primary-dark fill-current" />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="md:pl-10 relative z-30 mt-16 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-accent-yellow px-4 py-2 rounded-xl font-black text-sm border-2 border-[#1e293b] shadow-sticker mb-6 rotate-[-2deg]"
            >
              OUR STORY
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] mb-6 leading-tight">
              RAISED IN OUR <br/>
              <span className="text-primary-dark">LIVING ROOM</span>
            </h2>
            
            <p className="text-lg md:text-xl font-bold text-[#475569] mb-6 leading-relaxed">
              We aren't a massive facility. We are a family that fell in love with the gentle, loving nature of Persian cats. Every single kitten is born in our home, socialized with children and dogs, and treated like royalty from day one.
            </p>
            
            <p className="text-lg md:text-xl font-bold text-[#475569] mb-8 leading-relaxed">
              Our mission is to breed not just for striking beauty, but for health, longevity, and that perfect, affectionate temperament that turns a house into a home.
            </p>

            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-2xl border-4 border-[#1e293b] shadow-sticker text-center w-32 rotate-[2deg]">
                <p className="text-3xl font-black text-primary-dark">12+</p>
                <p className="text-xs font-black text-[#1e293b] mt-1">Years Breeding</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border-4 border-[#1e293b] shadow-sticker text-center w-32 rotate-[-2deg]">
                <p className="text-3xl font-black text-primary-dark">100%</p>
                <p className="text-xs font-black text-[#1e293b] mt-1">Health Rated</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
