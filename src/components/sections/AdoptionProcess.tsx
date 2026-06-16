"use client";

import { motion } from "framer-motion";
import { Search, CalendarHeart, FileSignature, Home } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-primary-dark" />,
    title: "Choose Kitten",
    desc: "Browse our available kittens and find the personality that matches your lifestyle."
  },
  {
    icon: <CalendarHeart className="w-8 h-8 text-primary-dark" />,
    title: "Schedule Visit",
    desc: "Book a video call or in-person visit to meet your kitten and our family."
  },
  {
    icon: <FileSignature className="w-8 h-8 text-primary-dark" />,
    title: "Reserve",
    desc: "Place a deposit and sign our ethical adoption contract to secure your kitten."
  },
  {
    icon: <Home className="w-8 h-8 text-primary-dark" />,
    title: "Welcome Home",
    desc: "Take your new best friend home along with their premium care package."
  }
];

export function AdoptionProcess() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Adoption <span className="text-primary-dark">Process</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A transparent, seamless journey to bringing your new royal family member home.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-accent-peach/50 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-[1.5rem] bg-white shadow-card flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-premium transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-accent-peach/20 rounded-[1.5rem] scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div className="relative z-10">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-dark text-white font-bold flex items-center justify-center text-sm shadow-sm border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
