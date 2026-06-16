"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=800&auto=format&fit=crop"
];

export function InstaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-24 px-4 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="mb-4 bg-accent-pink px-4 py-2 rounded-xl inline-block shadow-sticker border-2 border-[#1e293b] rotate-[2deg]"
            >
              <span className="text-[#1e293b] font-black tracking-widest uppercase text-sm">
                Social Club
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black mb-2 text-[#1e293b]">
              FOLLOW OUR <span className="text-primary-dark">JOURNEY</span>
            </h2>
            <p className="text-[#475569] font-bold text-lg">Daily moments of fluff and joy.</p>
          </div>
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-black shadow-sticker border-4 border-[#1e293b] transition-all flex items-center gap-2 hover:-translate-y-1 hover:bg-primary-dark shrink-0">
            <Camera className="w-6 h-6" />
            @RoyalPersians
          </button>
        </div>

        {/* Mobile: Horizontal Swipe Carousel | Desktop: Masonry Grid */}
        <div className="flex md:block overflow-x-auto snap-x snap-mandatory gap-4 md:gap-0 no-scrollbar md:columns-3 lg:columns-4 md:gap-6 -mx-4 px-4 md:mx-0 md:px-0">
          {images.map((src, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
              key={idx}
              onClick={() => setSelectedImage(src)}
              className={`w-[80vw] sm:w-[60vw] md:w-auto shrink-0 snap-center md:mb-6 relative group cursor-pointer rounded-[2rem] md:rounded-3xl overflow-hidden md:break-inside-avoid shadow-sticker border-4 border-[#1e293b] transition-transform hover:-translate-y-2 ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}
            >
              <img 
                src={src} 
                alt="Persian Cat" 
                className="w-full h-[400px] md:h-auto object-cover md:object-auto transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1e293b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-3 rounded-full border-2 border-[#1e293b] shadow-sticker">
                  <Camera className="w-6 h-6 text-primary-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-[#1e293b]/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent-peach transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-[2rem] border-8 border-white shadow-sticker"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
