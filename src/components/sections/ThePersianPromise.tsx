"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const promises = [
  {
    title: "Healthy Start",
    description: "Every kitten undergoes rigorous DNA testing, complete veterinary checks, and receives their first series of vaccinations before leaving our care.",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=600&auto=format&fit=crop",
    color: "bg-accent-peach/20"
  },
  {
    title: "Champion Bloodlines",
    description: "Our foundation cats are carefully selected from prestigious European lines, ensuring our kittens exemplify the highest Persian breed standards.",
    image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=600&auto=format&fit=crop",
    color: "bg-primary/20"
  },
  {
    title: "Daily Socialization",
    description: "Raised underfoot in our living room, our kittens are handled daily by adults and children, resulting in exceptionally sweet, dog-like temperaments.",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=600&auto=format&fit=crop",
    color: "bg-accent-pink"
  },
  {
    title: "Lifetime Support",
    description: "When you adopt from us, you join our family. We provide lifelong guidance on grooming, nutrition, and care to ensure your cat thrives.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
    color: "bg-green-50"
  }
];

export function ThePersianPromise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 px-4 relative bg-white overflow-hidden">
      
      {/* Decorative Blob */}
      <motion.div style={{ y: y1 }} className="absolute -right-64 top-20 w-[600px] h-[600px] bg-accent-beige rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Persian <span className="text-primary-dark">Promise</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We don't just breed cats; we curate living masterpieces. Our commitment to ethical breeding goes beyond the basics.
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {promises.map((promise, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20`}>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className={`relative p-4 rounded-[3rem] ${promise.color}`}>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden">
                    <img src={promise.image} alt={promise.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold mb-4 text-foreground">{promise.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">{promise.description}</p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
