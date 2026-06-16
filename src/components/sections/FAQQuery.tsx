"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "Do you ship kittens out of state?",
    answer: "Yes! We offer a safe and comfortable pet nanny flight service. A dedicated nanny will fly in-cabin with your new kitten directly to your nearest major airport."
  },
  {
    question: "Are the kittens vaccinated?",
    answer: "Absolutely. Every kitten comes with age-appropriate core vaccinations, deworming, and a comprehensive health certificate from our licensed veterinarian."
  },
  {
    question: "What is your health guarantee?",
    answer: "We offer a 1-year genetic health guarantee. If your kitten is diagnosed with a congenital or genetic defect within the first year, we will provide a full refund or a replacement kitten."
  },
  {
    question: "Can I visit the kittens in person?",
    answer: "Yes! We welcome scheduled visits to our home so you can interact with the kittens and their parents. Just use the 'Book a Visit' button to schedule an appointment."
  }
];

export function FAQQuery() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-background relative border-t-4 border-[#1e293b]">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="mb-4 bg-accent-blue px-6 py-2 rounded-xl inline-block shadow-sticker border-2 border-[#1e293b] rotate-[-3deg]"
          >
            <span className="text-[#1e293b] font-black tracking-widest uppercase">
              Got Questions?
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] mt-4">
            WE HAVE <span className="text-primary-dark">ANSWERS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-white border-4 border-[#1e293b] rounded-[2rem] shadow-sticker overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl md:text-2xl font-black text-[#1e293b] pr-4">{faq.question}</span>
                <div className={`shrink-0 bg-accent-yellow p-2 border-2 border-[#1e293b] rounded-full shadow-sm transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-[#1e293b]" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-0 text-[#475569] font-bold text-lg leading-relaxed border-t-2 border-dashed border-gray-200 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-accent-peach border-4 border-[#1e293b] rounded-[3rem] p-8 md:p-12 shadow-sticker text-center rotate-[1deg]"
        >
          <MessageCircleQuestion className="w-16 h-16 text-[#1e293b] mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-black text-[#1e293b] mb-4">Still have a query?</h3>
          <p className="text-lg font-bold text-[#475569] mb-8 max-w-lg mx-auto">
            We love talking about our cats. Send us an email or give us a call and we'll get back to you within 24 hours.
          </p>
          <a href="mailto:hello@royalpersians.com">
            <button className="bg-[#1e293b] text-white px-8 py-4 rounded-xl font-black text-xl border-2 border-[#1e293b] shadow-sticker hover:bg-primary-dark transition-colors inline-block rotate-[-2deg]">
              Contact Us Directly
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
