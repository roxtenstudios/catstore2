"use client";

import { motion } from "framer-motion";
import { Heart, Star, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[100vh] bg-background flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32 pb-0">
      
      {/* Playful Background Shapes */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-peach rounded-[40%] blur-[40px] md:blur-[60px] -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent-blue rounded-[50%] blur-[40px] md:blur-[80px] -z-10 opacity-70"
      />

      {/* Hero Typography Container */}
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10 text-center mt-4 md:mt-10">
        
        {/* Outlined Background Text */}
        <div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-full pointer-events-none -z-10">
          <h1 className="text-[18vw] md:text-[12vw] font-black leading-none text-outline opacity-30 whitespace-nowrap">
            HPC
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 md:mb-6 inline-flex items-center gap-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sticker border-2 border-accent-peach font-bold text-primary-dark text-sm md:text-base rotate-[-2deg]"
        >
          <Heart className="w-4 h-4 md:w-5 md:h-5 fill-primary-dark text-primary-dark" />
          <span>Raised With Love & Care</span>
        </motion.div>

        {/* Main Solid Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-[3.5rem] md:text-[6rem] font-black leading-[0.9] text-[#1e293b] mb-4 md:mb-6 tracking-tight relative z-20 uppercase"
        >
          HYDERABAD<br className="hidden md:block"/>
          <span className="text-primary block md:inline">PERSIAN</span> <span className="relative inline-block">
            CATS
            <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-accent-blue -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,20 100,10" fill="currentColor" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-[#475569] mb-8 md:mb-12 max-w-2xl mx-auto font-bold px-4"
        >
          Perfect companions for your home. Playful, affectionate, and perfectly groomed.
        </motion.p>
        
        {/* Call to action */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-40 mb-10 md:mb-0"
          >
            <Link href="/store">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-lg md:text-xl transition-all shadow-sticker hover:-translate-y-1 flex items-center gap-3 group border-4 border-primary-dark">
                Explore Kittens
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
        </motion.div>

      </div>

      {/* Massive Cat Cutout inside a Blob container to hide white edges */}
      <div className="relative w-full flex-1 flex justify-center items-end mt-[-5vh] md:mt-[-15vh] z-20 pointer-events-none px-4">
        
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-end justify-center mb-0">
          
          {/* Animated Blob Background to frame the cat and hide square edges */}
          <motion.div
            animate={{ borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 w-[90%] h-[90%] bg-accent-yellow border-4 border-[#1e293b] overflow-hidden flex items-end justify-center z-10 shadow-sticker"
          >
            {/* The Cat Image */}
            <motion.img
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 40 }}
              src="/images/hero-cat.png"
              alt="Playful White Persian Cat"
              className="w-[120%] max-w-none h-auto object-cover object-bottom translate-y-[10%]"
              style={{ mixBlendMode: 'multiply' }}
            />
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-[20%] md:top-[30%] left-[-10%] md:left-[-10%] z-30 bg-white p-2 md:p-4 rounded-2xl md:rounded-3xl shadow-sticker flex flex-col md:flex-row items-center gap-2 md:gap-3 border-2 border-accent-peach"
          >
            <div className="bg-accent-peach p-2 md:p-3 rounded-xl md:rounded-2xl">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary-dark" />
            </div>
            <div className="text-center md:text-left md:pr-2">
              <p className="font-black text-[#1e293b] text-base md:text-lg leading-tight">100%</p>
              <p className="text-[10px] md:text-sm text-[#64748b] font-bold leading-tight">Health<br className="md:hidden"/>Checked</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 15 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute top-[10%] md:top-[15%] right-[-5%] md:right-[-5%] z-30 bg-white p-2 md:p-4 rounded-2xl md:rounded-3xl shadow-sticker flex flex-col md:flex-row items-center gap-2 md:gap-3 border-2 border-accent-blue"
          >
            <div className="bg-accent-blue p-2 md:p-3 rounded-xl md:rounded-2xl">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-blue-600 fill-blue-600" />
            </div>
            <div className="text-center md:text-left md:pr-2">
              <p className="font-black text-[#1e293b] text-base md:text-lg leading-tight">500+</p>
              <p className="text-[10px] md:text-sm text-[#64748b] font-bold leading-tight">Happy<br className="md:hidden"/>Families</p>
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
