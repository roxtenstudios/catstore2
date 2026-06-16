"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    kittenImage: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=400&auto=format&fit=crop",
    text: "Bringing little Leo into our lives was the best decision ever. The entire adoption process was so professional, and you can truly tell these kittens are raised with endless love. He is incredibly affectionate!"
  },
  {
    name: "Michael & Emma",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop",
    kittenImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop",
    text: "We were looking for a breeder who prioritizes health and temperament, and we found exactly that. Our beautiful Chloe arrived confident, perfectly groomed, and instantly stole our hearts."
  },
  {
    name: "Jessica Wong",
    location: "Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    kittenImage: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=400&auto=format&fit=crop",
    text: "The lifetime support promised is real. They answered all my questions weeks after taking Oliver home. The quality of these Persians is unmatched—he looks like a literal cloud!"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 bg-accent-pink/20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-white px-4 py-2 rounded-full inline-block shadow-sm"
          >
            <span className="text-primary-dark font-bold text-sm tracking-widest uppercase">
              Happy Families
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Love Letters from <span className="text-primary-dark">Owners</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              key={idx}
              className="bg-white rounded-[2.5rem] p-8 shadow-card relative flex flex-col"
            >
              {/* Cute Quote Icon */}
              <div className="absolute top-8 right-8 text-accent-peach/50">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-dark fill-primary-dark" />
                ))}
              </div>

              <p className="text-foreground/80 text-lg leading-relaxed mb-8 flex-1 italic relative z-10">
                "{testi.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <img src={testi.avatar} alt={testi.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                  <img src={testi.kittenImage} alt="Kitten" className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm absolute -bottom-2 -right-2" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testi.name}</h4>
                  <p className="text-xs text-foreground/50 font-medium">{testi.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
