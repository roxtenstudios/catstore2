"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { CalendarHeart } from "lucide-react";
import { SchedulingModal } from "@/components/ui/SchedulingModal";

export function StickyCTA() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 z-40 flex"
      >
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-dark text-white px-6 py-4 rounded-full font-bold shadow-premium hover:-translate-y-1 hover:bg-foreground transition-all flex items-center gap-3"
        >
          <CalendarHeart className="w-5 h-5" />
          <span className="hidden md:inline">Book a Visit</span>
          <span className="md:hidden">View Kittens</span>
        </button>
      </motion.div>

      <SchedulingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
