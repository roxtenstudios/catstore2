import { PawPrint } from "lucide-react";

export function MarqueeDivider() {
  const repeatedItems = Array(10).fill("🐾 PLAYFUL & FLUFFY 🐾 PREMIUM PERSIANS 🐾 HEALTH GUARANTEED 🐾 PERFECT COMPANIONS");

  return (
    <div className="w-full bg-primary-dark text-white overflow-hidden py-4 border-y-4 border-[#1e293b] flex shadow-sticker relative z-20 rotate-[-1deg] scale-105">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center mx-4">
            <span className="font-black text-xl md:text-2xl tracking-wider uppercase">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
