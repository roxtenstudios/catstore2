"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SchedulingModal({ isOpen, onClose }: SchedulingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1e293b]/60 backdrop-blur-sm">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, rotate: 2 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] p-6 md:p-8 border-4 border-[#1e293b] shadow-sticker z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full border-2 border-[#1e293b] transition-colors"
            >
              <X className="w-5 h-5 text-[#1e293b]" />
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="bg-accent-yellow w-16 h-16 rounded-full border-4 border-[#1e293b] shadow-sticker flex items-center justify-center mx-auto mb-4 rotate-[-5deg]">
                    <CalendarIcon className="w-8 h-8 text-[#1e293b]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1e293b]">Book a Visit</h2>
                  <p className="text-[#475569] font-bold text-sm mt-2">Come meet your future best friend! Schedule a time below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#1e293b] font-black text-sm mb-1">Your Name</label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#1e293b] font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1e293b] font-black text-sm mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required type="tel" placeholder="(555) 000-0000" className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#1e293b] font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1e293b] font-black text-sm mb-1">Date</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-xl border-2 border-[#1e293b] font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm" />
                    </div>
                    <div>
                      <label className="block text-[#1e293b] font-black text-sm mb-1">Time</label>
                      <input required type="time" className="w-full px-4 py-3 rounded-xl border-2 border-[#1e293b] font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg border-2 border-[#1e293b] shadow-sticker hover:bg-primary-dark transition-colors mt-4">
                    Confirm Appointment
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-green-100 w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <h2 className="text-3xl font-black text-[#1e293b] mb-2">You're Booked!</h2>
                <p className="text-[#475569] font-bold">We will call you shortly to confirm the details. See you soon!</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
