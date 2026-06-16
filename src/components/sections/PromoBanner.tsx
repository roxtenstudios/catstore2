"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function PromoBanner() {
  return (
    <section className="py-8 md:py-12 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
          viewport={{ once: true }}
          className="bg-primary-dark rounded-[3rem] p-8 md:p-12 border-4 border-[#1e293b] shadow-sticker relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Elements */}
          <Sparkles className="absolute top-4 left-4 w-12 h-12 text-white/20" />
          <Sparkles className="absolute bottom-4 right-8 w-16 h-16 text-white/20" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              SPOIL YOUR <br className="hidden md:block" />
              <span className="text-accent-yellow">FLUFFY FRIEND</span>
            </h2>
            <p className="text-white/90 font-bold text-lg md:text-xl max-w-md">
              Get 20% off all grooming kits and organic treats when you adopt a kitten today!
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link href="/store?category=accessories">
              <button className="bg-white text-[#1e293b] px-8 py-5 rounded-2xl font-black text-xl border-4 border-[#1e293b] shadow-[0_6px_0_0_rgba(30,41,59,1)] hover:translate-y-1 hover:shadow-[0_0px_0_0_rgba(30,41,59,1)] transition-all flex items-center gap-3 group rotate-[2deg]">
                Shop the Sale
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
